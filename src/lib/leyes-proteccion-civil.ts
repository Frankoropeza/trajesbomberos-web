// Fase 4 del directorio · Ley de Protección Civil por estado.
// Datos: src/data/leyes-proteccion-civil/<estado>.json (encargo G, validado por
// gate_g.py: cada obligación lleva artículo y una cita literal que existe en el
// texto oficial). Solo los estados con archivo generan página.
import { BASE_DIRECTORIO } from './directorio';

export interface Obligacion { sujeto: string; obligacion: string; articulo: string; cita: string }
export interface LeyPC {
  slug: string;
  nombreOficial: string;
  numero?: string | null;
  publicacion: { medio: string; fecha: string };
  ultimaReforma: string | null;
  urlOficial: string;
  reglamento?: { nombre: string; url: string; ultimaReforma?: string | null } | null;
  autoridadEstatal: { nombre: string; articulo: string; cita: string };
  lead: string;
  panorama: string[];
  obligaciones: Obligacion[];
  brigadasDuo: string[];
  equipoDuo: string[];
  sancionesDuo?: string[];
  faqs: { q: string; a: string }[];
  fuentes: { nombre: string; url: string }[];
  verificadoEl: string;
}

const ARCHIVOS = import.meta.glob<LeyPC>('../data/leyes-proteccion-civil/*.json', { eager: true, import: 'default' });

const FECHA = /^\d{4}-\d{2}-\d{2}$/;
function validar(l: LeyPC, archivo: string): LeyPC {
  const falta = (['nombreOficial', 'urlOficial', 'lead', 'verificadoEl'] as const).filter((k) => !l[k]);
  if (falta.length) throw new Error(`[leyes-pc] ${archivo}: faltan ${falta.join(', ')}`);
  if (!FECHA.test(l.publicacion?.fecha ?? '')) throw new Error(`[leyes-pc] ${archivo}: publicacion.fecha debe ser AAAA-MM-DD`);
  if (l.ultimaReforma && !FECHA.test(l.ultimaReforma)) throw new Error(`[leyes-pc] ${archivo}: ultimaReforma debe ser AAAA-MM-DD`);
  if (l.panorama?.length !== 2 || l.brigadasDuo?.length !== 2 || l.equipoDuo?.length !== 2) throw new Error(`[leyes-pc] ${archivo}: panorama, brigadasDuo y equipoDuo llevan 2 párrafos`);
  if ((l.obligaciones?.length ?? 0) < 4) throw new Error(`[leyes-pc] ${archivo}: al menos 4 obligaciones`);
  if (l.faqs?.length !== 5) throw new Error(`[leyes-pc] ${archivo}: 5 preguntas frecuentes`);
  return l;
}

export const LEYES_PC: LeyPC[] = Object.entries(ARCHIVOS)
  .map(([p, l]) => validar(l, p.split('/').pop()!))
  .sort((a, b) => a.slug.localeCompare(b.slug));

export const rutaLeyPC = (estado: string) => `${BASE_DIRECTORIO}${estado}/ley-de-proteccion-civil/`;
export const leyPC = (estado: string) => LEYES_PC.find((l) => l.slug === estado);

const MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
export const fechaLarga = (iso: string) => {
  const [a, m, d] = iso.split('-').map(Number);
  return `${d} de ${MESES[m - 1]} de ${a}`;
};
