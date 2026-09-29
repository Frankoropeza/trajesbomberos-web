// Card de modelo (TileCard): un solo lugar decide qué muestra cada modelo del catálogo.
// Estructura homologada con el resto del index: imagen 4:3 → título → texto → 4 subcategorías
// → botón principal con palabra clave. Todo sale de MODELOS/TIPOS/SECCIONES/FAMILIAS (nada a mano).
import { MODELOS, SECCIONES, TIPOS } from './data';
import { urlModelo } from './modelos';
import type { Modelo } from './types';
import { FAMILIAS, type FamiliaDetalle } from '../familias';
import { PIEZAS, piezaPorNombreCard, piezasDeFamilia } from '../piezas';
import { PRODUCT_CATEGORIES, WA_MESSAGES } from '../../config/site';
import { waUrl } from '../wa';
import type { TileProps } from '../../components/home/TileCard.astro';

type Estado = NonNullable<TileProps['estado']>;

/** Estatus normativo tal como lo declara el fabricante (mismas reglas que NormaBadge, en corto). */
export function estadoModelo(m: Modelo): Estado {
  switch (m.estatusNorma) {
    case 'certificado-ul': return { label: m.certificacion ? `Certificado UL · ${m.certificacion}` : 'Certificado UL · número al cotizar', tone: 'good' };
    // Normas que el fabricante ya redacta como frase («Acorde a…», «Clasificación…») no llevan «Conforme a».
    case 'declarado': return { label: m.norma ? `${/^(acorde|valores|clasificaci)/i.test(m.norma) ? m.norma : `Conforme a ${m.norma}`}, según el fabricante` : 'Norma declarada por el fabricante', tone: 'neutral' };
    case 'equivalente': return { label: m.norma ? `Equivalente a ${m.norma} · no certificado` : 'Equivalente · no certificado', tone: 'warn' };
    case 'materiales': return { label: m.norma ? `Materiales conforme a ${m.norma}` : 'Materiales con norma declarada', tone: 'neutral' };
    case 'niosh': return { label: 'Certificación NIOSH · uso industrial', tone: 'warn' };
    case 'no-aplica': return { label: 'Norma de producto no aplica', tone: 'neutral' };
    default: return { label: 'Sin norma declarada', tone: 'neutral' };
  }
}

// Palabra clave del botón cuando el modelo no tiene tipo (trajes: van por familia).
const KW_FAMILIA: Record<string, string> = {
  estructural: 'Traje de bombero estructural',
  brigadista: 'Traje de brigadista',
  forestal: 'Traje forestal',
  aproximacion: 'Traje de aproximación',
  entrada: 'Traje de entrada',
  extricacion: 'Traje de extricación',
  hazmat: 'Traje hazmat',
};
const KW_SECCION: Record<string, string> = { cascos: 'Casco de bombero', botas: 'Botas de bombero', guantes: 'Guantes de bombero', capuchas: 'Monja para bombero', 'equipo-de-respiracion-autonoma': 'Equipo ERA', herramientas: 'Herramienta de bombero', rescate: 'Equipo de rescate', accesorios: 'Accesorio para bombero', kits: 'Kit de equipo de bombero' };

// Prefijo del código de card por sección (TR/EQ ya los usa el index para familias y complementos).
const PREFIJO: Record<string, string> = { trajes: 'TM', cascos: 'CM', botas: 'BM', guantes: 'GM', capuchas: 'PM', 'equipo-de-respiracion-autonoma': 'EM', accesorios: 'AM', herramientas: 'HM', rescate: 'RM', 'mangueras-y-accesorios': 'MM', kits: 'KM' };

export function tileDeModelo(m: Modelo): TileProps {
  const url = urlModelo(m);
  const familia = m.familia ? FAMILIAS.find((f) => f.slug === m.familia) : undefined;
  const seccion = SECCIONES.find((s) => s.slug === m.seccion);
  const tipo = m.tipo ? TIPOS.find((t) => t.slug === m.tipo && t.seccion === m.seccion) : undefined;
  const marcaHub = TIPOS.find((t) => t.seccion === 'marcas' && t.nombre === m.marca);
  const nombre = `${m.marca} ${m.nombre}`;
  const kw = tipo?.nombreCard ?? (m.familia ? KW_FAMILIA[m.familia] : undefined) ?? KW_SECCION[m.seccion] ?? seccion?.nombre ?? 'Equipo para bombero';
  const img = m.imagen;
  const ilustrativa = img?.origen === 'ia';
  // Código estable por sección (TM-01… trajes, CM-01… cascos…): no depende del orden de otras secciones.
  const idx = MODELOS.filter((x) => x.seccion === m.seccion).findIndex((x) => x.id === m.id) + 1;
  return {
    codigo: `${PREFIJO[m.seccion] ?? 'MD'}-${String(idx).padStart(2, '0')}`,
    titulo: nombre,
    desc: m.resumen?.[0] ?? m.descripcion[0],
    href: url,
    cta: `${kw} ${nombre}`,
    img: img?.src ?? '',
    alt: img?.alt ?? nombre,
    fit: ilustrativa ? 'cover' : 'contain',
    estado: estadoModelo(m),
    nota: ilustrativa ? 'Imagen ilustrativa' : undefined,
    subs: [
      { label: 'Ficha técnica del modelo', href: `${url}#ficha` },
      { label: 'Preguntas frecuentes', href: `${url}#faq` },
      m.familia && familia ? { label: familia.nombreWa, href: `/trajes/${familia.slug}/` } : { label: seccion?.nombre ?? 'Catálogo', href: `/${m.seccion}/` },
      marcaHub ? { label: `Modelos ${m.marca}`, href: `/marcas/${marcaHub.slug}/` } : { label: 'Marcas que cotizamos', href: '/marcas/' },
    ],
  };
}

// ── Familias de traje y piezas (mismo diseño TileCard) ──────────────────────
const TITULO_FAMILIA: Record<string, string> = {
  aproximacion: 'Trajes de aproximación (aluminizados)',
  extricacion: 'Trajes de extricación y rescate',
  hazmat: 'Trajes Hazmat (protección química)',
};
const CTA_FAMILIA: Record<string, string> = {
  estructural: 'Trajes estructurales para bombero',
  brigadista: 'Trajes de brigadista industrial',
  forestal: 'Trajes forestales para bombero',
  aproximacion: 'Trajes aluminizados de aproximación',
  entrada: 'Trajes de entrada a la flama',
  extricacion: 'Trajes de extricación y rescate',
  hazmat: 'Trajes Hazmat nivel A, B y C',
};

export function ctaFamilia(slug: string): string {
  return CTA_FAMILIA[slug];
}
// [etiqueta, slug de pieza] — se valida contra PIEZAS: nunca se enlaza una ficha inexistente.
const SUBS_FAMILIA: Record<string, [string, string][]> = {
  estructural: [['Chaquetón estructural', 'chaqueton'], ['Pantalonera estructural', 'pantalonera'], ['Monja antipartículas', 'monja'], ['Arnés de escape', 'arnes-escape']],
  brigadista: [['Conjunto de brigada', 'conjunto'], ['Overol ignífugo', 'overol'], ['Chaquetón de brigadista', 'chaqueton'], ['Pantalonera de brigadista', 'pantalonera']],
  forestal: [['Camisola forestal', 'camisola'], ['Pantalón forestal', 'pantalon'], ['Chamarra forestal', 'chamarra'], ['Overol forestal', 'overol']],
  aproximacion: [['Chaquetón aluminizado', 'chaqueton'], ['Pantalón aluminizado', 'pantalon'], ['Capucha aluminizada', 'capucha'], ['Guantes aluminizados', 'guantes']],
  entrada: [['Traje de penetración', 'conjunto-corta-duracion'], ['Penetración avanzada', 'conjunto-avanzado'], ['Capucha de penetración', 'capucha'], ['Traje para hornos', 'hornos']],
  extricacion: [['Chaqueta de rescate técnico', 'chaqueta'], ['Pantalón de rescate técnico', 'pantalon'], ['Conjunto de extricación', 'conjunto'], ['Overol de rescate técnico', 'overol']],
  hazmat: [['Traje encapsulado nivel A', 'traje-encapsulado-nivel-a'], ['Traje químico nivel B', 'traje-nivel-b'], ['Botas químicas', 'botas-quimicas'], ['Guantes para químicos', 'guantes-quimicos']],
};
const RETRATO = new Set([
  '/images/productos/traje-estructural-chaqueton-pantalon-bombero.avif',
  '/images/productos/traje-brigadista-industrial-bombero.avif',
  '/images/catalogo/hazmat/tipo-traje-encapsulado-nivel-a.avif',
]);
const RUTAS_PIEZA = new Set(PIEZAS.map((p) => `/trajes/${p.familia}/${p.slug}/`));
const CODIGO_FAMILIA: Record<string, string> = { estructural: 'ES', brigadista: 'BR', forestal: 'FO', aproximacion: 'AP', entrada: 'EN', extricacion: 'EX', hazmat: 'HZ' };

function subsFamilia(slug: string) {
  return (SUBS_FAMILIA[slug] ?? [])
    .map(([label, pieza]) => ({ label, href: `/trajes/${slug}/${pieza}/` }))
    .filter((s) => RUTAS_PIEZA.has(s.href));
}

/** Orden de las familias en el índice: las 6 de PRODUCT_CATEGORIES y Hazmat al final. */
const ORDEN_FAMILIAS = [...PRODUCT_CATEGORIES.map((c) => c.slug), 'hazmat'];

/** Cards de familia de traje. `excluir` quita la familia en la que ya estás (no se enlaza a sí misma). */
export function tilesFamilias(excluir?: string): TileProps[] {
  return ORDEN_FAMILIAS
    .map((slug, i) => ({ slug, i }))
    .filter(({ slug }) => slug !== excluir)
    .map(({ slug, i }) => {
      const cat = PRODUCT_CATEGORIES.find((c) => c.slug === slug);
      const fam = FAMILIAS.find((f) => f.slug === slug);
      const src = cat?.image ?? fam?.images[0]?.src ?? '';
      return {
        codigo: `TR-${String(i + 1).padStart(2, '0')}`,
        titulo: TITULO_FAMILIA[slug] ?? cat?.nombre ?? fam?.nombreWa ?? slug,
        desc: cat?.desc ?? fam?.description ?? '',
        href: `/trajes/${slug}/`,
        cta: CTA_FAMILIA[slug] ?? `Catálogo de ${(cat?.nombre ?? slug).toLowerCase()}`,
        img: src,
        alt: cat?.imageAlt ?? fam?.images[0]?.alt ?? '',
        pos: RETRATO.has(src) ? 'center 8%' : undefined,
        subs: subsFamilia(slug),
      } as TileProps;
    });
}

const minuscula = (t: string) => t.charAt(0).toLowerCase() + t.slice(1);

/** Cards de las piezas de una familia (chips como franja superior; ficha si existe, si no WhatsApp). */
export function tilesPiezas(f: FamiliaDetalle, excluirNombre?: string): TileProps[] {
  const cod = CODIGO_FAMILIA[f.slug] ?? 'PZ';
  const hermanas = piezasDeFamilia(f.slug);
  return f.productos.map((pr, i) => {
    const ficha = piezaPorNombreCard(pr.nombre);
    const wa = waUrl(WA_MESSAGES.categoria(pr.nombre));
    const otras = hermanas
      .filter((h) => h.slug !== ficha?.slug)
      .slice(0, 3)
      .map((h) => ({ label: h.nombreCard, href: `/trajes/${f.slug}/${h.slug}/` }));
    return {
      codigo: `${cod}-${String(i + 1).padStart(2, '0')}`,
      titulo: pr.nombre,
      desc: pr.desc,
      href: ficha ? `/trajes/${f.slug}/${ficha.slug}/` : wa,
      external: !ficha,
      cta: ficha ? `Ficha de ${minuscula(pr.nombre)}` : `Cotizar ${minuscula(pr.nombre)}`,
      img: pr.img,
      alt: pr.alt,
      fit: 'contain',
      estado: pr.chips.length ? { label: pr.chips.join(' · '), tone: 'neutral' } : undefined,
      subs: [...otras, { label: 'Cotizar por WhatsApp', href: wa, external: true }],
    } as TileProps;
  }).filter((_, i) => f.productos[i].nombre !== excluirNombre);
}

/** Card «Conjunto completo y compra por pieza» (kits): cierra el índice de familias. */
export function tileConjunto(n: number): TileProps {
  const valida = (href: string) => TIPOS_RUTAS.has(href) || RUTAS_PIEZA.has(href);
  return {
    codigo: `TR-${String(n).padStart(2, '0')}`,
    titulo: 'Conjunto completo y compra por pieza',
    desc: 'Traje, casco, monja, botas, guantes y ERA cotizados como un solo equipo compatible, o reposición de una sola prenda. Sin compra mínima.',
    href: '/kits/',
    cta: 'Kits de equipo completo para bombero',
    img: '/images/escenas/bomberos-ataque-incendio-manguera.avif',
    alt: 'Bomberos con equipo completo: traje estructural, casco y equipo de respiración autónoma',
    subs: [
      { label: 'Kit estructural', href: '/kits/kit-estructural/' },
      { label: 'Kit brigadista', href: '/kits/kit-brigadista/' },
      { label: 'Kit forestal', href: '/kits/kit-forestal/' },
      { label: 'Tirantes para pantalonera', href: '/trajes/estructural/tirantes/' },
    ].filter((x) => valida(x.href)),
  };
}
const TIPOS_RUTAS = new Set<string>([
  ...SECCIONES.map((x) => `/${x.slug}/`),
  ...TIPOS.map((t) => `/${t.seccion}/${t.slug}/`),
  ...MODELOS.filter((m) => m.seccion).map((m) => `/${m.seccion}/${m.id}/`),
]);
