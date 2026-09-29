import { getPosts, getPostsByCategoria, guiasParaRuta, type Post } from './blog';
import { FAMILIAS } from './familias';
import { dimensiones } from './img';
import { MODELOS, urlModelo } from './catalogo/modelos';
import type { TileProps } from '../components/home/TileCard.astro';
import { estadoModelo } from './catalogo/tiles';
import { SECCIONES, TIPOS } from './catalogo/data';
import { waUrl } from './wa';
import type { Modelo } from './catalogo/types';
import type { SpotProps } from './spotlights/types';
import type { CollectionEntry } from 'astro:content';

// Plantilla L2 (CategoriaL2): helpers de datos. Sin literales de contenido: los textos
// viven en src/content/categorias/<ruta>.md y los datos de catálogo en src/lib/catalogo.

type Modulo = CollectionEntry<'categorias'>['data']['modulos'][number];
type ColumnaModelo = 'modelo' | 'marca' | 'codigo' | 'familia' | 'seccion' | 'tipo' | 'material' | 'capa' | 'barreras' | 'norma' | 'estatus';
type BaseSpot = Partial<Pick<SpotProps, 'eyebrow' | 'titulo' | 'parrafos' | 'cta' | 'wa'>> & {
  imagenes?: { src: string; alt: string }[]; // [escena, foto, foto]; medidas del manifiesto
};

const pendiente = 'Se confirma al cotizar';

/** Convierte un módulo editorial en el spotlight compartido de una categoría L2. */
export function spotlightDeModulo(m: Modulo, index: number, base: BaseSpot = {}): SpotProps {
  const parrafos = m.parrafo ? [m.parrafo] : base.parrafos;
  const imagenesFuente = m.imagenes ?? base.imagenes;
  const cta = m.cta ?? base.cta;
  const wa = m.wa ? { label: m.wa.label, href: waUrl(m.wa.mensaje) } : base.wa;
  if (!m.eyebrow && !base.eyebrow || !m.titulo && !base.titulo || !parrafos?.length || !imagenesFuente?.length || !cta || !wa) {
    throw new Error(`Módulo L2 incompleto: ${m.slug}.`);
  }
  const imagenes = imagenesFuente.map((imagen, i) => {
    const medida = dimensiones(imagen.src);
    if (!medida) console.warn(`[L2] Dimensiones no encontradas para ${imagen.src}; se usa 1000×1250.`);
    return {
      ...imagen,
      ...(medida ?? { width: 1000, height: 1250 }),
      caption: m.leyendas[i],
      ...(i > 0 ? { pos: 'center 18%' } : {}),
    };
  });
  if (imagenes.length !== 3) throw new Error(`El módulo L2 ${m.slug} debe tener tres imágenes.`);
  return {
    id: `modulo-${m.slug}`,
    numero: String(index + 1).padStart(2, '0'),
    eyebrow: m.eyebrow ?? base.eyebrow!,
    titulo: m.titulo ?? base.titulo!,
    parrafos,
    puntos: m.puntos,
    cta,
    wa,
    imagenes: imagenes as SpotProps['imagenes'],
    nivel: 3,
  };
}

export function filaModelo(m: Modelo, columnas: readonly ColumnaModelo[]): (string | { texto: string; href?: string })[] {
  const familia = m.familia ? FAMILIAS.find((f) => f.slug === m.familia) : undefined;
  const seccion = SECCIONES.find((s) => s.slug === m.seccion);
  const tipo = m.tipo ? TIPOS.find((t) => t.slug === m.tipo && t.seccion === m.seccion) : undefined;
  return columnas.map((columna) => {
    switch (columna) {
      case 'modelo': return { texto: `${m.marca} ${m.nombre}`, href: urlModelo(m) };
      case 'marca': return m.marca;
      case 'codigo': return m.codigo ?? pendiente;
      case 'familia': return familia?.nombreWa ?? pendiente;
      case 'seccion': return seccion?.nombre ?? pendiente;
      case 'tipo': return tipo?.nombreCard ?? '—';
      case 'material': return m.material ?? m.capaExterior ?? pendiente;
      case 'capa': return m.capaExterior ?? m.material ?? pendiente;
      case 'barreras': return m.barreras ?? pendiente;
      case 'norma': return m.norma ?? (m.estatusNorma === 'sin-norma' ? 'No declarada' : pendiente);
      case 'estatus': return estadoModelo(m).label;
    }
  });
}

export async function guiasL2(d: CollectionEntry<'categorias'>['data']): Promise<Post[]> {
  if (d.guiasDestacadas) {
    const posts = await getPosts();
    return d.guiasDestacadas.map((slug) => {
      const post = posts.find((p) => p.id === slug);
      if (!post) throw new Error(`[L2] guía inexistente en ${d.ruta}: ${slug}`);
      return post;
    });
  }
  if (!d.blogCategoria) return guiasParaRuta(d.ruta, 4);
  const propias = await getPostsByCategoria(d.blogCategoria);
  if (propias.length >= 4) return propias.slice(0, 4);
  const relleno = await guiasParaRuta(d.ruta, 4);
  return [...propias, ...relleno.filter((post) => !propias.includes(post))].slice(0, 4);
}

/** Cards de #tipos definidas en el .md (L2 que no agrupan categorías del catálogo). */
export function tilesDeTarjetas(d: CollectionEntry<'categorias'>['data'], prefijo: string): TileProps[] {
  if (!d.tarjetas) throw new Error(`[L2] ${d.ruta} no define tarjetas.`);
  return d.tarjetas.map((t, i) => ({ ...t, codigo: `${prefijo}${String(i + 1).padStart(2, '0')}`, fit: 'contain' as const }));
}

/** Modelos por id, en el orden dado (error de build si alguno no existe). */
export function modelosPorId(ids: readonly string[]): Modelo[] {
  return ids.map((id) => {
    const m = MODELOS.find((x) => x.id === id);
    if (!m) throw new Error(`[L2] modelo inexistente: ${id}`);
    return m;
  });
}

// Jerarquía L2 → L3: cada sección del catálogo cuelga de una categoría L2 (migas y BreadcrumbList).
export const SECCIONES_EPP = ['cascos', 'equipo-de-respiracion-autonoma', 'botas', 'guantes', 'capuchas', 'kits'] as const;
export const L2_EPP = { name: 'Equipo de protección', href: '/equipo-de-proteccion/' };
export const SECCIONES_RH = ['rescate', 'herramientas', 'mangueras-y-accesorios', 'accesorios'] as const;
export const L2_RH = { name: 'Rescate y herramientas', href: '/rescate-y-herramientas/' };

/** L2 de la que cuelga una sección del catálogo (undefined si la sección es L2 por sí misma). */
export function l2DeSeccion(slug: string): { name: string; href: string } | undefined {
  if ((SECCIONES_EPP as readonly string[]).includes(slug)) return L2_EPP;
  if ((SECCIONES_RH as readonly string[]).includes(slug)) return L2_RH;
  return undefined;
}
