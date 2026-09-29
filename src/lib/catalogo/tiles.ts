// Card de modelo (TileCard): un solo lugar decide qué muestra cada modelo del catálogo.
// Estructura homologada con el resto del index: imagen 4:3 → título → texto → 4 subcategorías
// → botón principal con palabra clave. Todo sale de MODELOS/TIPOS/SECCIONES/FAMILIAS (nada a mano).
import { MODELOS, SECCIONES, TIPOS } from './data';
import { urlModelo } from './modelos';
import type { Modelo } from './types';
import { FAMILIAS } from '../familias';
import type { TileProps } from '../../components/home/TileCard.astro';

type Estado = NonNullable<TileProps['estado']>;

/** Estatus normativo tal como lo declara el fabricante (mismas reglas que NormaBadge, en corto). */
export function estadoModelo(m: Modelo): Estado {
  switch (m.estatusNorma) {
    case 'certificado-ul': return { label: m.certificacion ? `Certificado UL · ${m.certificacion}` : 'Certificado UL · número al cotizar', tone: 'good' };
    case 'declarado': return { label: m.norma ? `Conforme a ${m.norma}, según el fabricante` : 'Norma declarada por el fabricante', tone: 'neutral' };
    case 'equivalente': return { label: m.norma ? `Equivalente a ${m.norma} · no certificado` : 'Equivalente · no certificado', tone: 'warn' };
    case 'materiales': return { label: m.norma ? `Materiales conforme a ${m.norma}` : 'Materiales con norma declarada', tone: 'neutral' };
    case 'niosh': return { label: 'Certificación NIOSH · uso industrial', tone: 'warn' };
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
