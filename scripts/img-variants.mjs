// img-variants: genera variantes AVIF de menor ancho para srcset.
//
// Por qué no astro:assets: las ~200 imágenes viven en public/ y se
// referencian por ruta de texto desde datos (site.ts, catálogo,
// spotlights, blog). Moverlas a src/ para que Astro las procese sería un
// refactor masivo con alto riesgo de romper rutas. Este script da el
// mismo resultado (srcset ajustado al tamaño real de pintado) sin tocar
// ni renombrar ningún archivo existente: solo AÑADE variantes
// «<nombre>-w400|w640|w768.avif» junto al original.
//
// Escribe src/data/img-variants.json (ruta pública → ancho original y
// anchos disponibles). src/lib/img.ts lo lee para armar srcset; si una
// imagen no está en el manifiesto se sirve igual que antes (sin srcset).
//
// Uso: node scripts/img-variants.mjs   (idempotente: no regenera lo que ya existe)
import { readdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const PUBLIC = path.join(ROOT, 'public');
const DIRS = ['images'];
const TARGETS = [400, 640, 768];
const VARIANT_RE = /-w\d+\.avif$/;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (entry.name.endsWith('.avif') && !VARIANT_RE.test(entry.name)) yield full;
  }
}

const manifest = {};
let created = 0;
for (const d of DIRS) {
  for await (const file of walk(path.join(PUBLIC, d))) {
    const { width, height } = await sharp(file).metadata();
    if (!width || width <= 480) continue;
    const widths = [];
    for (const t of TARGETS) {
      if (t >= width * 0.9) continue;
      const out = file.replace(/\.avif$/, `-w${t}.avif`);
      if (!existsSync(out)) {
        await sharp(file).resize({ width: t }).avif({ quality: 55, effort: 6 }).toFile(out);
        created++;
      }
      widths.push(t);
    }
    if (widths.length) {
      const rel = '/' + path.relative(PUBLIC, file).split(path.sep).join('/');
      manifest[rel] = { w: width, h: height, v: widths };
    }
  }
}
const sorted = Object.fromEntries(Object.keys(manifest).sort().map((k) => [k, manifest[k]]));
await writeFile(path.join(ROOT, 'src/data/img-variants.json'), JSON.stringify(sorted).replace(/},"/g, '},\n"') + '\n');
console.log(`img-variants: ${Object.keys(sorted).length} imágenes con variantes, ${created} archivos nuevos`);
