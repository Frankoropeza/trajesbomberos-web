// Aviso a IndexNow (Bing, Yandex, Seznam, Naver) tras cada deploy de GitHub Pages.
//
// trajesbomberos.com no está detrás de Cloudflare, así que no tiene Crawler Hints:
// nadie avisa a Bing cuando cambia una página. Bing alimenta además la búsqueda de
// ChatGPT y Copilot, que hoy son las IA que más nos citan (Ahrefs, 05-oct-2026).
//
// Qué se envía (regla de IndexNow: sólo URL que cambiaron):
//   · src/content/blog/<slug>.md          → /blog/<slug>/
//   · src/pages/<ruta>.astro (estática)   → /<ruta>/
//   · URL nuevas: las del sitemap publicado que no estaban en el anterior (se pasa
//     PREV_SITEMAP con las del sitemap previo, si existe).
//   · Cualquier otro cambio (layouts, componentes, datos del catálogo, estilos)
//     afecta a todas las páginas → se envía el sitemap completo.
// La clave pública vive en /public/<KEY>.txt, como exige el protocolo.
import { execSync } from 'node:child_process';

const HOST = 'trajesbomberos.com';
const SITE = `https://${HOST}`;
const KEY = '85e609a6acf12261dac0bc322e94570c';
const before = process.env.BEFORE && !/^0+$/.test(process.env.BEFORE) ? process.env.BEFORE : 'HEAD~1';

function changedFiles() {
  try {
    return execSync(`git diff --name-only ${before} HEAD`, { encoding: 'utf8' }).split('\n').filter(Boolean);
  } catch {
    return null; // historial insuficiente → se trata como cambio global
  }
}

async function sitemapUrls() {
  const index = await (await fetch(`${SITE}/sitemap.xml`)).text();
  const maps = [...index.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const children = maps.filter((u) => u.endsWith('.xml'));
  if (!children.length) return maps;
  const out = [];
  for (const m of children) {
    const xml = await (await fetch(m)).text();
    out.push(...[...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((x) => x[1]));
  }
  return out;
}

const files = changedFiles();
const all = await sitemapUrls();
const enSitemap = new Set(all);
let urls = new Set();
let global = files === null;

for (const f of files ?? []) {
  let m;
  if ((m = f.match(/^src\/content\/blog\/([^/]+)\.md$/))) urls.add(`${SITE}/blog/${m[1]}/`);
  else if ((m = f.match(/^src\/pages\/(.+)\.astro$/)) && !m[1].includes('[')) {
    const ruta = m[1].replace(/(^|\/)index$/, '');
    urls.add(`${SITE}/${ruta ? ruta + '/' : ''}`);
  } else if (/^(public\/(?!images\/)|scripts\/|\.github\/|README|_docs\/)/.test(f) || /^public\/[0-9a-f]{32}\.txt$/.test(f)) {
    // infraestructura, sin efecto en el HTML
  } else if (/^public\/images\//.test(f)) {
    // imágenes: las recoge el rastreo normal de las páginas que las usan
  } else global = true;
}

if (process.env.PREV_SITEMAP) {
  const prev = new Set(process.env.PREV_SITEMAP.split(/\s+/).filter(Boolean));
  for (const u of all) if (!prev.has(u)) urls.add(u);
}

if (global) urls = new Set(all);
const lista = [...urls].filter((u) => enSitemap.has(u) || u === `${SITE}/`);

if (!lista.length) {
  console.log('IndexNow: sin URL de contenido que avisar en este deploy.');
  process.exit(0);
}

if (process.env.DRY) {
  console.log(`IndexNow (simulación): ${lista.length} URL${global ? ' (global)' : ''}`);
  for (const u of lista.slice(0, 20)) console.log('  ', u);
  process.exit(0);
}

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList: lista.slice(0, 10000) }),
});
console.log(`IndexNow: ${lista.length} URL${global ? ' (cambio global: sitemap completo)' : ''} → HTTP ${res.status}`);
for (const u of lista.slice(0, 20)) console.log('  ', u);
// 200/202 = aceptado. 403 = la clave aún no se sirve (primer deploy): no rompe el deploy.
if (![200, 202, 403].includes(res.status)) process.exit(1);
