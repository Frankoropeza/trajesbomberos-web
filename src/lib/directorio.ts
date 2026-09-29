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

export interface Entidad { slug: string; nombre: string; iso: string; region: string; capital?: string }
export const ENTIDADES: Entidad[] = [
  { slug: 'aguascalientes', nombre: 'Aguascalientes', iso: 'MX-AGU', region: 'bajio', capital: 'Aguascalientes' },
  { slug: 'baja-california', nombre: 'Baja California', iso: 'MX-BCN', region: 'noroeste', capital: 'Mexicali' },
  { slug: 'baja-california-sur', nombre: 'Baja California Sur', iso: 'MX-BCS', region: 'noroeste', capital: 'La Paz' },
  { slug: 'campeche', nombre: 'Campeche', iso: 'MX-CAM', region: 'golfo-sureste', capital: 'San Francisco de Campeche' },
  { slug: 'chiapas', nombre: 'Chiapas', iso: 'MX-CHP', region: 'sur', capital: 'Tuxtla Gutiérrez' },
  { slug: 'chihuahua', nombre: 'Chihuahua', iso: 'MX-CHH', region: 'noroeste', capital: 'Chihuahua' },
  { slug: 'ciudad-de-mexico', nombre: 'Ciudad de México', iso: 'MX-CMX', region: 'centro' },
  { slug: 'coahuila', nombre: 'Coahuila', iso: 'MX-COA', region: 'noreste', capital: 'Saltillo' },
  { slug: 'colima', nombre: 'Colima', iso: 'MX-COL', region: 'occidente', capital: 'Colima' },
  { slug: 'durango', nombre: 'Durango', iso: 'MX-DUR', region: 'noroeste', capital: 'Victoria de Durango' },
  { slug: 'estado-de-mexico', nombre: 'Estado de México', iso: 'MX-MEX', region: 'centro', capital: 'Toluca de Lerdo' },
  { slug: 'guanajuato', nombre: 'Guanajuato', iso: 'MX-GUA', region: 'bajio', capital: 'Guanajuato' },
  { slug: 'guerrero', nombre: 'Guerrero', iso: 'MX-GRO', region: 'sur', capital: 'Chilpancingo de los Bravo' },
  { slug: 'hidalgo', nombre: 'Hidalgo', iso: 'MX-HID', region: 'centro', capital: 'Pachuca de Soto' },
  { slug: 'jalisco', nombre: 'Jalisco', iso: 'MX-JAL', region: 'occidente', capital: 'Guadalajara' },
  { slug: 'michoacan', nombre: 'Michoacán', iso: 'MX-MIC', region: 'occidente', capital: 'Morelia' },
  { slug: 'morelos', nombre: 'Morelos', iso: 'MX-MOR', region: 'centro', capital: 'Cuernavaca' },
  { slug: 'nayarit', nombre: 'Nayarit', iso: 'MX-NAY', region: 'occidente', capital: 'Tepic' },
  { slug: 'nuevo-leon', nombre: 'Nuevo León', iso: 'MX-NLE', region: 'noreste', capital: 'Monterrey' },
  { slug: 'oaxaca', nombre: 'Oaxaca', iso: 'MX-OAX', region: 'sur', capital: 'Oaxaca de Juárez' },
  { slug: 'puebla', nombre: 'Puebla', iso: 'MX-PUE', region: 'centro', capital: 'Puebla de Zaragoza' },
  { slug: 'queretaro', nombre: 'Querétaro', iso: 'MX-QUE', region: 'bajio', capital: 'Santiago de Querétaro' },
  { slug: 'quintana-roo', nombre: 'Quintana Roo', iso: 'MX-ROO', region: 'golfo-sureste', capital: 'Chetumal' },
  { slug: 'san-luis-potosi', nombre: 'San Luis Potosí', iso: 'MX-SLP', region: 'bajio', capital: 'San Luis Potosí' },
  { slug: 'sinaloa', nombre: 'Sinaloa', iso: 'MX-SIN', region: 'noroeste', capital: 'Culiacán' },
  { slug: 'sonora', nombre: 'Sonora', iso: 'MX-SON', region: 'noroeste', capital: 'Hermosillo' },
  { slug: 'tabasco', nombre: 'Tabasco', iso: 'MX-TAB', region: 'golfo-sureste', capital: 'Villahermosa' },
  { slug: 'tamaulipas', nombre: 'Tamaulipas', iso: 'MX-TAM', region: 'noreste', capital: 'Ciudad Victoria' },
  { slug: 'tlaxcala', nombre: 'Tlaxcala', iso: 'MX-TLA', region: 'centro', capital: 'Tlaxcala de Xicohténcatl' },
  { slug: 'veracruz', nombre: 'Veracruz', iso: 'MX-VER', region: 'golfo-sureste', capital: 'Xalapa' },
  { slug: 'yucatan', nombre: 'Yucatán', iso: 'MX-YUC', region: 'golfo-sureste', capital: 'Mérida' },
  { slug: 'zacatecas', nombre: 'Zacatecas', iso: 'MX-ZAC', region: 'bajio', capital: 'Zacatecas' },
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
  Estatal: 'Corporación del gobierno del estado (en la Ciudad de México, del gobierno de la Ciudad) o base regional de cobertura estatal.',
  Aeropuerto: 'Servicio de salvamento y extinción de incendios (SEI) dentro de un aeropuerto.',
  Voluntarios: 'Patronato o asociación civil de bomberos voluntarios, con financiamiento propio.',
  PEMEX: 'Brigada contraincendio de refinería, terminal o complejo de Petróleos Mexicanos.',
  Industrial: 'Brigada o estación contraincendio de un parque o complejo industrial privado.',
  CFE: 'Brigada contraincendio de una central de generación de la Comisión Federal de Electricidad.',
};

// Servicios declarados en cada ficha (slug → etiqueta)
export const SERVICIO_LABEL: Record<string, string> = {
  'incendios-estructurales': 'Incendios estructurales',
  'atencion-prehospitalaria': 'Atención prehospitalaria',
  'rescate-vehicular': 'Rescate vehicular',
  'incendios-forestales': 'Incendios forestales',
  hazmat: 'Materiales peligrosos',
  'proteccion-civil': 'Protección civil',
  arff: 'Salvamento aeroportuario',
  'fugas-gas': 'Fugas de gas',
  'rescate-acuatico': 'Rescate acuático',
  capacitacion: 'Capacitación',
  'rescate-altura': 'Rescate en altura',
  'enjambres-fauna': 'Enjambres y fauna',
  'incendios-vehiculares': 'Incendios vehiculares',
  'espacios-confinados': 'Espacios confinados',
};
export const ROL_LABEL: Record<string, string> = { unica: 'Estación única', central: 'Estación central', subestacion: 'Subestación' };

// Artículo del nombre: «en el Estado de México», «de la Ciudad de México».
const ARTICULO: Record<string, string> = { 'estado-de-mexico': 'el', 'ciudad-de-mexico': 'la' };
export const conArticulo = (e: { slug: string; nombre: string }) => (ARTICULO[e.slug] ? `${ARTICULO[e.slug]} ${e.nombre}` : e.nombre);
export const enEstado = (e: { slug: string; nombre: string }) => `en ${conArticulo(e)}`;
export const deEstado = (e: { slug: string; nombre: string }) => {
  const a = ARTICULO[e.slug];
  return a === 'el' ? `del ${e.nombre}` : a ? `de ${a} ${e.nombre}` : `de ${e.nombre}`;
};

// La Ciudad de México se divide en alcaldías, no en municipios.
export const unidad = (estado: string, n = 2) => {
  const base = estado === 'ciudad-de-mexico' ? 'alcaldía' : 'municipio';
  return n === 1 ? base : base === 'alcaldía' ? 'alcaldías' : 'municipios';
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

// ---------- Página de estado ----------
export const entidad = (slug: string) => ENTIDADES.find((e) => e.slug === slug)!;
export const estacionesDe = (estado: string) => ESTACIONES.filter((s) => s.estado === estado);

/** Estaciones agrupadas por municipio: primero los municipios con más estaciones. */
export function municipiosDe(estado: string) {
  const xs = estacionesDe(estado);
  const m = new Map<string, Estacion[]>();
  for (const s of xs) m.set(s.municipio, [...(m.get(s.municipio) ?? []), s]);
  return [...m.entries()]
    .map(([nombre, est]) => ({
      nombre,
      slug: est[0].municipioSlug,
      estaciones: est.sort((a, b) =>
        ({ central: 0, unica: 1, subestacion: 2 }[a.rolEstacion] - { central: 0, unica: 1, subestacion: 2 }[b.rolEstacion]) ||
        a.nombre.localeCompare(b.nombre, 'es')),
    }))
    .sort((a, b) => b.estaciones.length - a.estaciones.length || a.nombre.localeCompare(b.nombre, 'es'));
}

export const serviciosDe = (estado: string) => cuenta(estacionesDe(estado).flatMap((s) => s.servicios ?? []), (x) => x);
export const fuentesConUrl = (s: Estacion) => s.fuentes.filter((f) => f.url);
/** Ubicación exacta → coordenadas; aproximada → búsqueda por nombre y dirección
 *  (una coordenada aproximada suele ser el centro de la ciudad y llevaría al lector a un punto equivocado). */
export const mapsUrl = (s: Estacion) => {
  const q = s.coordenadas.precision === 'exacta'
    ? `${s.coordenadas.lat},${s.coordenadas.lng}`
    : [s.nombre, s.direccion ?? (s.ciudad && s.ciudad !== s.municipio ? `${s.ciudad}, ${s.municipio}` : s.municipio), s.estadoNombre].join(', ');
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
};
/** tel: sin extensión, con lada internacional de México. */
export const telHref = (t: string) => `+52${t.split(/ext/i)[0].replace(/\D/g, '').replace(/^52(?=\d{10}$)/, '')}`;
/** Texto del teléfono tal como la fuente lo publica, sin extensiones repetidas. */
export const telTexto = (t: string) => t.replace(/(\s*ext\.?\s*\d+)(\1)+/gi, '$1').trim();
export const dominio = (url: string) => { try { return new URL(url).hostname.replace(/^www\./, ''); } catch { return url; } };
