// ============================================================
// Directorio nacional de estaciones de bomberos — SSoT de datos.
// Snapshot en src/data/estaciones.json: solo campos factuales, cada
// ficha con al menos una fuente pública y su nivel de confianza.
// Regla dura: cero datos inventados — un campo sin fuente se omite.
// Todas las cifras del directorio se CALCULAN aquí, nunca a mano.
// ============================================================
import RAW from '../data/estaciones.json';

export const BASE_DIRECTORIO = '/estaciones-de-bomberos/';

export interface Fuente { nombre: string; url?: string }
export interface Estacion {
  id: string;
  nombre: string;
  slug: string;
  estado: string;
  estadoNombre: string;
  ciudad: string;
  municipio: string;
  municipioSlug: string;
  tipo: string;
  corporacion: string;
  rolEstacion: 'unica' | 'central' | 'subestacion';
  numeroEstacion?: string;
  direccion?: string;
  coordenadas: { lat: number; lng: number; precision: 'exacta' | 'aproximada' };
  telefono?: string;
  telefonosAdicionales?: string[];
  email?: string;
  sitioWeb?: string;
  servicios: string[];
  fuentes: Fuente[];
  verificadoEl: string;
  confianza: 'alta' | 'media' | 'baja';
}

export const ESTACIONES = RAW as Estacion[];

// ---------- Entidades federativas (ISO 3166-2:MX) y regiones ----------
export interface Region { slug: string; nombre: string; desc: string }
export const REGIONES: Region[] = [
  { slug: 'noroeste', nombre: 'Noroeste', desc: 'Península de Baja California, Sonora, Sinaloa, Chihuahua y Durango' },
  { slug: 'noreste', nombre: 'Noreste', desc: 'Coahuila, Nuevo León y Tamaulipas' },
  { slug: 'occidente', nombre: 'Occidente', desc: 'Jalisco, Nayarit, Colima y Michoacán' },
  { slug: 'bajio', nombre: 'Bajío y Centro-Norte', desc: 'Aguascalientes, Guanajuato, Querétaro, San Luis Potosí y Zacatecas' },
  { slug: 'centro', nombre: 'Centro', desc: 'Ciudad de México, Estado de México, Hidalgo, Morelos, Puebla y Tlaxcala' },
  { slug: 'sur', nombre: 'Pacífico Sur', desc: 'Guerrero, Oaxaca y Chiapas' },
  { slug: 'golfo-sureste', nombre: 'Golfo y Península', desc: 'Veracruz, Tabasco, Campeche, Yucatán y Quintana Roo' },
];

export interface Entidad { slug: string; nombre: string; iso: string; region: string }
export const ENTIDADES: Entidad[] = [
  { slug: 'aguascalientes', nombre: 'Aguascalientes', iso: 'MX-AGU', region: 'bajio' },
  { slug: 'baja-california', nombre: 'Baja California', iso: 'MX-BCN', region: 'noroeste' },
  { slug: 'baja-california-sur', nombre: 'Baja California Sur', iso: 'MX-BCS', region: 'noroeste' },
  { slug: 'campeche', nombre: 'Campeche', iso: 'MX-CAM', region: 'golfo-sureste' },
  { slug: 'chiapas', nombre: 'Chiapas', iso: 'MX-CHP', region: 'sur' },
  { slug: 'chihuahua', nombre: 'Chihuahua', iso: 'MX-CHH', region: 'noroeste' },
  { slug: 'ciudad-de-mexico', nombre: 'Ciudad de México', iso: 'MX-CMX', region: 'centro' },
  { slug: 'coahuila', nombre: 'Coahuila', iso: 'MX-COA', region: 'noreste' },
  { slug: 'colima', nombre: 'Colima', iso: 'MX-COL', region: 'occidente' },
  { slug: 'durango', nombre: 'Durango', iso: 'MX-DUR', region: 'noroeste' },
  { slug: 'estado-de-mexico', nombre: 'Estado de México', iso: 'MX-MEX', region: 'centro' },
  { slug: 'guanajuato', nombre: 'Guanajuato', iso: 'MX-GUA', region: 'bajio' },
  { slug: 'guerrero', nombre: 'Guerrero', iso: 'MX-GRO', region: 'sur' },
  { slug: 'hidalgo', nombre: 'Hidalgo', iso: 'MX-HID', region: 'centro' },
  { slug: 'jalisco', nombre: 'Jalisco', iso: 'MX-JAL', region: 'occidente' },
  { slug: 'michoacan', nombre: 'Michoacán', iso: 'MX-MIC', region: 'occidente' },
  { slug: 'morelos', nombre: 'Morelos', iso: 'MX-MOR', region: 'centro' },
  { slug: 'nayarit', nombre: 'Nayarit', iso: 'MX-NAY', region: 'occidente' },
  { slug: 'nuevo-leon', nombre: 'Nuevo León', iso: 'MX-NLE', region: 'noreste' },
  { slug: 'oaxaca', nombre: 'Oaxaca', iso: 'MX-OAX', region: 'sur' },
  { slug: 'puebla', nombre: 'Puebla', iso: 'MX-PUE', region: 'centro' },
  { slug: 'queretaro', nombre: 'Querétaro', iso: 'MX-QUE', region: 'bajio' },
  { slug: 'quintana-roo', nombre: 'Quintana Roo', iso: 'MX-ROO', region: 'golfo-sureste' },
  { slug: 'san-luis-potosi', nombre: 'San Luis Potosí', iso: 'MX-SLP', region: 'bajio' },
  { slug: 'sinaloa', nombre: 'Sinaloa', iso: 'MX-SIN', region: 'noroeste' },
  { slug: 'sonora', nombre: 'Sonora', iso: 'MX-SON', region: 'noroeste' },
  { slug: 'tabasco', nombre: 'Tabasco', iso: 'MX-TAB', region: 'golfo-sureste' },
  { slug: 'tamaulipas', nombre: 'Tamaulipas', iso: 'MX-TAM', region: 'noreste' },
  { slug: 'tlaxcala', nombre: 'Tlaxcala', iso: 'MX-TLA', region: 'centro' },
  { slug: 'veracruz', nombre: 'Veracruz', iso: 'MX-VER', region: 'golfo-sureste' },
  { slug: 'yucatan', nombre: 'Yucatán', iso: 'MX-YUC', region: 'golfo-sureste' },
  { slug: 'zacatecas', nombre: 'Zacatecas', iso: 'MX-ZAC', region: 'bajio' },
];

// Etiquetas de tipo de corporación (plural, para cifras)
export const TIPO_PLURAL: Record<string, string> = {
  Municipal: 'municipales',
  Estatal: 'estatales',
  Aeropuerto: 'de aeropuerto',
  Voluntarios: 'de voluntarios',
  PEMEX: 'de PEMEX',
  Industrial: 'industriales',
  CFE: 'de CFE',
};
export const TIPO_DESC: Record<string, string> = {
  Municipal: 'Cuerpo de bomberos del ayuntamiento, casi siempre dentro de la coordinación municipal de protección civil.',
  Estatal: 'Corporación del gobierno del estado o estación que opera como base regional de cobertura estatal.',
  Aeropuerto: 'Servicio de salvamento y extinción de incendios (SEI) dentro de un aeropuerto.',
  Voluntarios: 'Patronato o asociación civil de bomberos voluntarios, con financiamiento propio.',
  PEMEX: 'Brigada contraincendio de refinería, terminal o complejo de Petróleos Mexicanos.',
  Industrial: 'Brigada o estación contraincendio de un parque o complejo industrial privado.',
  CFE: 'Brigada contraincendio de una central de generación de la Comisión Federal de Electricidad.',
};

// ---------- Rutas ----------
export const rutaEstado = (estado: string) => `${BASE_DIRECTORIO}${estado}/`;
export const rutaMunicipio = (estado: string, municipioSlug: string) => `${rutaEstado(estado)}#${municipioSlug}`;

// ---------- Agregados ----------
const cuenta = <T,>(xs: T[], key: (x: T) => string) => {
  const m = new Map<string, number>();
  for (const x of xs) m.set(key(x), (m.get(key(x)) ?? 0) + 1);
  return [...m.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'es'));
};

export interface ResumenEstado extends Entidad {
  total: number;
  municipios: number;
  topMunicipios: { nombre: string; slug: string; n: number }[];
  porTipo: [string, number][];
  conTelefono: number;
  conDireccion: number;
  coordExactas: number;
}

export function resumenEstado(e: Entidad): ResumenEstado {
  const xs = ESTACIONES.filter((s) => s.estado === e.slug);
  const muni = cuenta(xs, (s) => s.municipio);
  return {
    ...e,
    total: xs.length,
    municipios: muni.length,
    topMunicipios: muni.slice(0, 4).map(([nombre, n]) => ({
      nombre,
      n,
      slug: xs.find((s) => s.municipio === nombre)!.municipioSlug,
    })),
    porTipo: cuenta(xs, (s) => s.tipo),
    conTelefono: xs.filter((s) => s.telefono).length,
    conDireccion: xs.filter((s) => s.direccion).length,
    coordExactas: xs.filter((s) => s.coordenadas?.precision === 'exacta').length,
  };
}

export const RESUMEN_ESTADOS: ResumenEstado[] = ENTIDADES.map(resumenEstado);

export const RESUMEN_NACIONAL = {
  total: ESTACIONES.length,
  estados: new Set(ESTACIONES.map((s) => s.estado)).size,
  municipios: new Set(ESTACIONES.map((s) => `${s.estado}/${s.municipio}`)).size,
  conFuente: ESTACIONES.filter((s) => s.fuentes?.length).length,
  conTelefono: ESTACIONES.filter((s) => s.telefono).length,
  conDireccion: ESTACIONES.filter((s) => s.direccion).length,
  coordExactas: ESTACIONES.filter((s) => s.coordenadas?.precision === 'exacta').length,
  porTipo: cuenta(ESTACIONES, (s) => s.tipo),
  confianza: cuenta(ESTACIONES, (s) => s.confianza),
};

export const estadosDeRegion = (region: string) => RESUMEN_ESTADOS.filter((e) => e.region === region);

/** Texto corto de la card de estado, calculado de los datos (nunca a mano). */
export function descEstado(r: ResumenEstado): string {
  const etiqueta = (t: string, n: number) => {
    const p = TIPO_PLURAL[t] ?? t.toLowerCase();
    return n === 1 && !p.startsWith('de ') ? p.replace(/es$|s$/, '') : p;
  };
  // La primera cifra lleva el sustantivo: «30 estaciones municipales, 2 de aeropuerto…»
  const tipos = r.porTipo.slice(0, 2).map(([t, n], i) =>
    i === 0 ? `${n} ${n === 1 ? 'estación' : 'estaciones'} ${etiqueta(t, n)}` : `${n} ${etiqueta(t, n)}`);
  const resto = r.total - r.porTipo.slice(0, 2).reduce((a, [, n]) => a + n, 0);
  const otras = resto === 1 ? '1 de otra corporación' : `${resto} de otras corporaciones`;
  const partes = resto > 0 ? `${tipos.join(', ')} y ${otras}` : tipos.join(' y ');
  // Los totales ya van en la cabecera de la card: aquí solo quién las opera.
  // Ubicación y fuente existen en el 100 % de las fichas; el teléfono no (no se promete).
  return `${partes}. Cada ficha con ubicación y fuente pública citada.`;
}

export const pct = (n: number, d: number) => `${Math.round((n / d) * 100)} %`;
export const nf = (n: number) => n.toLocaleString('es-MX');
