// ============================================================
// Cards de equipo del directorio (puente al catálogo). Autocontenido:
// solo depende de PRODUCT_CATEGORIES, familias y PIEZAS (SSoT), con
// la misma estructura TileCard del index. Subenlaces validados contra
// rutas reales: nunca se enlaza una página inexistente.
// ============================================================
import type { TileProps, TileSub } from '@components/home/TileCard.astro';
import { PRODUCT_CATEGORIES } from '@config/site';
import { PIEZAS } from '@lib/piezas';
import { familiaPorSlug } from '@lib/familias';
import { MODELOS, SECCIONES, TIPOS } from '@lib/catalogo/data';

const RUTAS = new Set([
  ...PIEZAS.map((p) => `/trajes/${p.familia}/${p.slug}/`),
  ...SECCIONES.map((s) => `/${s.slug}/`),
  ...TIPOS.map((t) => `/${t.seccion}/${t.slug}/`),
  ...MODELOS.filter((m) => m.seccion).map((m) => `/${m.seccion}/${m.id}/`),
]);
const validas = (subs: TileSub[]) => subs.filter((s) => RUTAS.has(s.href));

const RETRATO = new Set([
  '/images/productos/traje-estructural-bombero-conjunto-frente.avif',
  '/images/productos/traje-brigadista-industrial-conjunto.avif',
  '/images/catalogo/hazmat/tipo-traje-encapsulado-nivel-a.avif',
]);

const TITULO: Record<string, string> = {
  aproximacion: 'Trajes de aproximación (aluminizados)',
  extricacion: 'Trajes de extricación y rescate',
  hazmat: 'Trajes Hazmat (protección química)',
};
const CTA: Record<string, string> = {
  estructural: 'Trajes estructurales para bombero',
  brigadista: 'Trajes de brigadista industrial',
  forestal: 'Trajes forestales para bombero',
  aproximacion: 'Trajes aluminizados de aproximación',
  entrada: 'Trajes de entrada a la flama',
  extricacion: 'Trajes de extricación y rescate',
  hazmat: 'Trajes Hazmat de protección química',
};
const SUBS: Record<string, [string, string][]> = {
  estructural: [['Chaquetón estructural', 'chaqueton'], ['Pantalonera estructural', 'pantalonera'], ['Monja antipartículas', 'monja'], ['Arnés de escape', 'arnes-escape']],
  brigadista: [['Conjunto de brigada', 'conjunto'], ['Overol ignífugo', 'overol'], ['Chaquetón de brigadista', 'chaqueton'], ['Pantalonera de brigadista', 'pantalonera']],
  forestal: [['Camisola forestal', 'camisola'], ['Pantalón forestal', 'pantalon'], ['Chamarra forestal', 'chamarra'], ['Overol forestal', 'overol']],
  aproximacion: [['Chaquetón aluminizado', 'chaqueton'], ['Pantalón aluminizado', 'pantalon'], ['Capucha aluminizada', 'capucha'], ['Guantes aluminizados', 'guantes']],
  extricacion: [['Chaqueta de rescate técnico', 'chaqueta'], ['Pantalón de rescate técnico', 'pantalon'], ['Conjunto de extricación', 'conjunto'], ['Overol de rescate técnico', 'overol']],
  hazmat: [['Traje encapsulado nivel A', 'traje-encapsulado-nivel-a'], ['Traje químico nivel B', 'traje-nivel-b'], ['Botas químicas', 'botas-quimicas'], ['Guantes para químicos', 'guantes-quimicos']],
};

/** Card de una familia de traje por slug (estructural, forestal, hazmat…). */
export function tileFamilia(slug: string, n: number): TileProps | null {
  const cat = PRODUCT_CATEGORIES.find((c) => c.slug === slug);
  const fam = slug === 'hazmat' ? familiaPorSlug('hazmat') : undefined;
  const img = cat?.image ?? fam?.images[0]?.src;
  if (!img) return null;
  return {
    codigo: `TR-${String(n).padStart(2, '0')}`,
    titulo: TITULO[slug] ?? cat?.nombre ?? slug,
    desc: cat?.desc ?? 'Encapsulado nivel A, químico nivel B y C, overol desechable, botas y guantes. La barrera se elige por sustancia, concentración y tarea.',
    href: `/trajes/${slug}/`,
    cta: CTA[slug] ?? `Trajes para bombero: ${slug}`,
    img,
    alt: cat?.imageAlt ?? fam?.images[0]?.alt ?? '',
    pos: RETRATO.has(img) ? 'center 8%' : undefined,
    subs: validas((SUBS[slug] ?? []).map(([label, pieza]) => ({ label, href: `/trajes/${slug}/${pieza}/` }))),
  };
}

/** Card «Conjunto completo y compra por pieza» (kits). */
export function tileKits(n: number): TileProps {
  return {
    codigo: `TR-${String(n).padStart(2, '0')}`,
    titulo: 'Conjunto completo y compra por pieza',
    desc: 'Traje, casco, monja, botas, guantes y ERA cotizados como un solo equipo compatible, o reposición de una sola prenda. Sin compra mínima.',
    href: '/kits/',
    cta: 'Kits de equipo completo para bombero',
    img: '/images/escenas/bomberos-ataque-incendio-manguera.avif',
    alt: 'Bomberos con equipo completo: traje estructural, casco y equipo de respiración autónoma',
    subs: validas([
      { label: 'Kit estructural', href: '/kits/kit-estructural/' },
      { label: 'Kit brigadista', href: '/kits/kit-brigadista/' },
      { label: 'Kit forestal', href: '/kits/kit-forestal/' },
      { label: 'Tirantes para pantalonera', href: '/trajes/estructural/tirantes/' },
    ]),
  };
}

/** Tres familias + kits, en el orden dado. */
export function tilesEquipo(familias: string[]): TileProps[] {
  const xs = familias.map((s, i) => tileFamilia(s, i + 1)).filter((t): t is TileProps => !!t);
  return [...xs, tileKits(xs.length + 1)];
}
