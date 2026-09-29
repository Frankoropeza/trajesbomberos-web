// csp-hashes: CSP de scripts por hash, página por página (build estático).
//
// Astro incrusta los <script> de los componentes en el HTML. Para que la
// CSP no necesite 'unsafe-inline' en script-src, al terminar el build se
// calcula el SHA-256 de cada script en línea de cada página y se inyecta
// un <meta http-equiv="Content-Security-Policy"> con esos hashes.
//
// No se usa security.csp de Astro porque también fija style-src por hash
// y bloquearía los atributos style="object-position:…" que usa el sitio.
// Esta meta SOLO restringe scripts; el resto de la política (default-src,
// frame-ancestors, etc.) viaja como cabecera HTTP desde Cloudflare. Ambas
// políticas se aplican a la vez (intersección).
//
// Los <script type="application/ld+json"> son datos, no código: no se hashean.
import { createHash } from 'node:crypto';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SCRIPT_RE = /<script(\s[^>]*)?>([\s\S]*?)<\/script>/gi;
const isData = (attrs = '') => /type\s*=\s*["']?application\/(ld\+)?json/i.test(attrs);
const hasSrc = (attrs = '') => /\ssrc\s*=/i.test(attrs);

async function* htmlFiles(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) yield* htmlFiles(full);
    else if (e.name.endsWith('.html')) yield full;
  }
}

export function policyFor(html) {
  const hashes = new Set();
  for (const [, attrs, body] of html.matchAll(SCRIPT_RE)) {
    if (hasSrc(attrs) || isData(attrs)) continue;
    hashes.add(`'sha256-${createHash('sha256').update(body, 'utf8').digest('base64')}'`);
  }
  return [
    `script-src 'self' ${[...hashes].join(' ')}`.trim(),
    "object-src 'none'",
    "base-uri 'self'",
    "require-trusted-types-for 'script'",
  ].join('; ');
}

export default function cspHashes() {
  return {
    name: 'csp-hashes',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        let n = 0;
        for await (const file of htmlFiles(root)) {
          const html = await readFile(file, 'utf8');
          if (/http-equiv="Content-Security-Policy"/i.test(html)) continue;
          const meta = `<meta http-equiv="Content-Security-Policy" content="${policyFor(html)}">`;
          // Justo después de <meta charset>: antes de cualquier <script>.
          const out = html.replace(/(<meta charset="utf-8"\s*\/?>)/i, `$1${meta}`);
          if (out === html) { logger.warn(`sin <meta charset>: ${path.relative(root, file)}`); continue; }
          await writeFile(file, out);
          n++;
        }
        logger.info(`CSP por hash inyectada en ${n} páginas`);
      },
    },
  };
}
