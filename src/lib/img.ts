// img: srcset/sizes para imágenes de public/ (ver scripts/img-variants.mjs).
// Si la imagen no tiene variantes en el manifiesto, no se emite srcset y
// el <img> se comporta exactamente como antes.
import variants from '../data/img-variants.json';

type Entry = { w: number; h: number; v: number[] };
const MANIFEST = variants as Record<string, Entry>;

/** Dimensiones originales registradas para una imagen del manifiesto. */
export function dimensiones(src: string): { width: number; height: number } | undefined {
  const entry = MANIFEST[src];
  return entry ? { width: entry.w, height: entry.h } : undefined;
}

/** `sizes` por patrón de maqueta (ancho real de pintado por breakpoint). */
export const SIZES = {
  /** TileGrid/CatalogCard: 4 col ≥1024 · 2 col 560–1023 · 1 col <560 */
  tile: '(max-width: 559px) calc(100vw - 2rem), (max-width: 1023px) calc(50vw - 2rem), 25vw',
  /** Rejillas de 3 columnas (blog, relacionados) */
  third: '(max-width: 559px) calc(100vw - 2rem), (max-width: 1023px) calc(50vw - 2rem), 33vw',
  /** Media columna (layouts de dos columnas: foto + texto) */
  half: '(max-width: 1023px) calc(100vw - 2rem), 50vw',
  /** Media columna partida en 2 (galería de CategoryDetail: miniaturas bajo la foto grande) */
  halfTile: '(max-width: 1023px) calc(50vw - 1.4rem), 25vw',
  /** Miniaturas de listas laterales (72 px) */
  thumb: '72px',
  /** Ancho de contenido completo */
  full: '100vw',
  /** Portada del artículo del blog: columna principal junto al sidebar (≈ 68 % del viewport ≥1024 px) */
  cover: '(max-width: 1023px) calc(100vw - 2rem), 70vw',
} as const;

export function srcsetFor(src?: string): string | undefined {
  if (!src) return undefined;
  const e = MANIFEST[src];
  if (!e) return undefined;
  return [...e.v.map((w) => `${src.replace(/\.avif$/, `-w${w}.avif`)} ${w}w`), `${src} ${e.w}w`].join(', ');
}

/** Atributos a esparcir en <img {...responsive(src, SIZES.tile)} />. */
export function responsive(src: string | undefined, sizes: string): { srcset?: string; sizes?: string } {
  const srcset = srcsetFor(src);
  return srcset ? { srcset, sizes } : {};
}
