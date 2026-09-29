// ============================================================
// SSoT — Single Source of Truth. Los datos viven aquí.
// Terminología: español de México verificado en el mercado real
// (chaquetón, pantalonera, monja, escafandra, tirantes, ERA,
// brigadista, DRD, combo). Ver estudio de mercado jul-2026.
// TODO(Frank): confirmar marcas con carta de distribuidor para
// poder nombrarlas como tales (hoy solo referencia técnica).
// ============================================================

import { data as MARCAS_DATA } from '@lib/catalogo/data/marcas';

export const SITE = {
  name: 'LORICA',
  legalName: 'LORICA Trajes para Bomberos',
  url: 'https://trajesbomberos.com',
  lang: 'es',
  locale: 'es_MX',
  allowSelfReviews: false, // regla B4: sin reseñas propias
} as const;

export const MARCA = {
  nombre: 'LORICA',
  completo: 'LORICA · Trajes para bomberos',
  experiencia: 'más de 35 años',
  experienciaCorta: 'Más de 35 años de experiencia',
  cobertura: 'los 32 estados de la República',
  lema: 'La armadura del bombero',
} as const;

// Regla de las 3 keywords · kw1 = principal, va primero y sin marca
export const KEYWORDS = [
  'trajes para bomberos',      // kw1 · principal (20/mes, TP 60)
  'trajes de bomberos',        // kw2 · variante con más demanda del clúster profesional (200/mes)
  'traje de bombero profesional', // kw3 · (antes «México»; retirado en la tanda de metas 2026-09-29)
] as const;

export const CONTACT = {
  telefono: '+52 56 6480 4962',
  telefonoHref: '+525664804962',
  whatsapp: '525664804962',
  email: 'trajes.bomberos@gmail.com',
  horario: 'Lun–Vie 9:00–18:00',
  cobertura: 'Presencia en los 32 estados',
  posicionamiento: 'LORICA · Más de 35 años equipando bomberos en los 32 estados',
} as const;

// ============================================================
// EMPRESA — datos corporativos del cliente. Se publican SOLO los
// campos con valor: nunca se inventan. Cuando el cliente entregue
// razón social, RFC o domicilio, basta con llenarlos aquí y
// aparecen en /empresa/, en el aviso de privacidad y en el JSON-LD.
// ============================================================
export const EMPRESA: {
  nombreComercial: string;
  razonSocial?: string;
  rfc?: string;
  domicilio?: string;          // domicilio del responsable (aviso de privacidad)
  ciudad?: string;
  anioInicio?: number;
  experiencia?: string;
} = {
  nombreComercial: 'LORICA · Trajes para bomberos',
  domicilio: 'Manuel Caballero 161, Col. Obrera, Alcaldía Cuauhtémoc, C.P. 06800, Ciudad de México, CDMX',
  ciudad: 'Ciudad de México',
  experiencia: 'Más de 35 años',
};

// Dirección de la empresa (aprobada por Frank el 2026-09-29). Una sola fuente para
// footer, /contacto/, /empresa/, legales y JSON-LD (PostalAddress).
export const DIRECCION = {
  calle: 'Manuel Caballero 161',
  colonia: 'Obrera',
  alcaldia: 'Cuauhtémoc',
  cp: '06800',
  ciudad: 'Ciudad de México',
  estado: 'CDMX',
  pais: 'MX',
  linea1: 'Manuel Caballero 161, Col. Obrera',
  linea2: 'Cuauhtémoc, 06800 Ciudad de México, CDMX',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Manuel+Caballero+161%2C+Obrera%2C+Cuauht%C3%A9moc%2C+06800+Ciudad+de+M%C3%A9xico%2C+CDMX',
} as const;

export const WA_MESSAGES = {
  cotizar: 'Hola, quiero cotizar trajes o equipo para bomberos.',
  informacion: 'Hola, necesito información sobre equipo de protección contra incendios.',
  categoria: (nombre: string) => `Hola, quiero cotizar: ${nombre}.`,
  segmento: (nombre: string) => `Hola, necesito equipo para: ${nombre}.`,
  licitacion: 'Hola, necesito cotización formal y ficha técnica para una licitación.',
  servicio: 'Hola, quiero información sobre inspección y lavado de equipo (NFPA 1850).',
  articulo: (titulo: string) => `Hola, leí el artículo "${titulo}" y tengo una duda.`,
} as const;

// ============================================================
// SEGMENTOS — los 3 compradores reales del mercado mexicano.
// Cada uno usa vocabulario, presupuesto y proceso distintos.
// ============================================================
export interface Segmento {
  slug: string;
  titulo: string;
  para: string;
  desc: string;
  puntos: string[];
  cta: string;
}

export const SEGMENTOS: Segmento[] = [
  {
    slug: 'brigada-industrial',
    titulo: 'Brigada industrial',
    para: 'Empresas con brigada contra incendio',
    desc:
      'La NOM-002-STPS-2010 (cláusula 5.9) obliga a dotar de equipo de protección personal a los integrantes de la brigada, conforme a la NOM-017-STPS-2024 vigente.',
    puntos: [
      'Equipo de brigadista y estructural según análisis de riesgo',
      'Cotización formal para orden de compra',
      'Factura CFDI y ficha técnica por partida',
    ],
    cta: 'Equipar mi brigada con trajes',
  },
  {
    slug: 'gobierno-licitacion',
    titulo: 'Gobierno y licitación',
    para: 'Bomberos municipales y protección civil',
    desc:
      'Los pliegos mexicanos suelen exigir norma NFPA con certificado de laboratorio (UL o SEI), carta de distribuidor y valores mínimos de TPP y THL como criterio de descalificación.',
    puntos: [
      'Ficha técnica en formato de licitación',
      'Certificado de laboratorio y carta de distribuidor',
      'CFDI 4.0, acta de entrega-recepción y junta de aclaraciones',
    ],
    cta: 'Documentación para licitación',
  },
  {
    slug: 'cuerpos-voluntarios',
    titulo: 'Cuerpos voluntarios y particulares',
    para: 'Compra por pieza, sin mínimo',
    desc:
      'Reposición de una pieza suelta o armado del conjunto completo, sin compra mínima y con envío a cualquier estado de la República.',
    puntos: [
      'Compra por pieza o conjunto completo',
      'Asesoría de tallas antes de pedir',
      'Envío a estación o domicilio',
    ],
    cta: 'Cotizar trajes por pieza',
  },
];

// ============================================================
// CATÁLOGO — SOLO TRAJES. El sitio se dedica exclusivamente a
// ropa de protección para bombero; los complementos (casco,
// monja, botas, guantes, ERA) se cotizan junto al conjunto pero
// NO son línea propia. Ver COMPLEMENTOS más abajo.
// ============================================================
export interface ProductCategory {
  slug: string;      // slug de URL L3: /trajes/<slug>/
  nombre: string;
  desc: string;
  image: string;
  imageAlt: string;
  badge?: string;
  chips: string[];
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    slug: 'estructural',
    nombre: 'Trajes estructurales',
    desc: 'Chaquetón y pantalón de tres capas: exterior, barrera de humedad y barrera térmica. Para combate de incendio en edificaciones.',
    image: '/images/productos/traje-estructural-chaqueton-pantalon-bombero.avif',
    imageAlt: 'Traje estructural para bombero: chaquetón y pantalón de tres capas',
    badge: 'Más solicitado',
    chips: ['Chaquetón', 'Pantalonera', 'DRD'],
  },
  {
    slug: 'brigadista',
    nombre: 'Trajes de brigadista',
    desc: 'Equipo para brigada industrial de fuego incipiente. Menor costo que el estructural certificado y distinto alcance de protección.',
    image: '/images/productos/traje-brigadista-industrial-bombero.avif',
    imageAlt: 'Traje de brigadista industrial contra incendio',
    chips: ['Brigada', 'NOM-002-STPS', 'Combo'],
  },
  {
    slug: 'forestal',
    nombre: 'Trajes forestales',
    desc: 'Camisola y pantalón de una sola capa en tela ignífuga inherente. Ligereza y transpirabilidad para jornadas largas en línea de fuego.',
    image: '/images/productos/traje-forestal-camisola-pantalon-bombero.avif',
    imageAlt: 'Traje forestal para bombero: camisola y pantalón de una capa',
    chips: ['Camisola', 'Una capa', 'Wildland'],
  },
  {
    slug: 'aproximacion',
    nombre: 'Trajes de aproximación',
    desc: 'Aluminizados para trabajo prolongado cerca de calor radiante intenso: ARFF, refinería y colada de metal. Conservan movilidad.',
    image: '/images/productos/traje-aproximacion-aluminizado-bombero.avif',
    imageAlt: 'Traje aluminizado de aproximación para calor radiante',
    chips: ['Aluminizado', 'ARFF', 'Metalúrgica'],
  },
  {
    slug: 'entrada',
    nombre: 'Trajes de entrada',
    desc: 'Aluminizado multicapa para ingreso breve a la flama en horno o incidente térmico severo. No se sustituye con uno de aproximación.',
    image: '/images/productos/traje-entrada-penetracion-flama.avif',
    imageAlt: 'Traje de entrada o penetración a la flama',
    chips: ['Penetración', 'Multicapa', 'Uso corto'],
  },
  {
    slug: 'extricacion',
    nombre: 'Extricación y rescate',
    desc: 'Rescate vehicular y técnico: resistencia a corte y punción con barrera contra patógenos. Protege la inversión del traje estructural.',
    image: '/images/productos/traje-extricacion-rescate-vehicular.avif',
    imageAlt: 'Traje de extricación para rescate vehicular y técnico',
    chips: ['Corte', 'Patógenos', 'Ligero'],
  },
];

// ============================================================
// BLOG — taxonomía. SSoT de las categorías editoriales: alimenta
// el NAV, el índice /blog/, el sidebar y los archivos
// /blog/categoria/<slug>/. Cinco categorías y ni una más: cada
// una responde a una pregunta real del comprador mexicano.
// ============================================================
export interface BlogCategory {
  slug: string;
  nombre: string;
  desc: string;
  h1: string;
  lead: string;
  seoTitle: string;         // regla de las 3 keywords, <= 60
  seoDescription: string;   // abre con kw1, <= 160
  keywords: readonly string[];
  /** Guía breve de la categoría: contexto y enlaces al catálogo. */
  guia?: { titulo: string; parrafos: string[]; enlaces: { label: string; href: string }[] };
}

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    slug: 'herramientas-rescate',
    nombre: 'Herramientas y rescate',
    desc: 'Herramientas, sistemas y criterios para equipar operaciones de rescate.',
    h1: 'Herramientas y equipo de rescate para bomberos',
    lead: 'Guías para elegir herramientas de entrada, rescate, líneas de agua y sus componentes por operación, compatibilidad y condición de servicio.',
    seoTitle: 'Herramientas y rescate para bomberos | México',
    seoDescription: 'Herramientas y rescate para bomberos: criterios para elegir equipo de entrada, rescate técnico, mangueras y kits con datos comparables en México.',
    keywords: ['herramientas y rescate para bomberos', 'equipo de rescate', 'México'],
    guia: {
      titulo: 'Cómo comprar herramientas y equipo de rescate',
      parrafos: [
        'La operación define la partida: una herramienta de entrada, un sistema hidráulico, una cuerda o una manguera no se eligen por apariencia. Antes de comparar opciones, identifica maniobra autorizada, personal capacitado, interfaces existentes, espacio de la unidad y método de resguardo.',
        'Una requisición útil separa material, medida, peso cuando el fabricante lo publica, conexiones, accesorios y condición de entrega. Para componentes que se integran entre sí, la compatibilidad física debe confirmarse antes de asignarlos a una emergencia.',
        'El criterio de compra incluye el ciclo completo: inspección, limpieza, registro, reemplazo y disponibilidad por unidad. Una pieza dañada o sin soporte puede fallar como recurso operativo aunque se haya adquirido correctamente.',
      ],
      enlaces: [
        { label: 'Herramientas para bombero', href: '/herramientas/' },
        { label: 'Equipo de rescate', href: '/rescate/' },
        { label: 'Mangueras y accesorios contra incendio', href: '/mangueras-y-accesorios/' },
        { label: 'Kits para bomberos', href: '/kits/' },
      ],
    },
  },
  {
    slug: 'especificacion',
    nombre: 'Cómo especificar equipo de bombero',
    desc: 'Qué datos debe traer una cotización para que sea comparable con otra.',
    h1: 'Cómo especificar equipo de bombero',
    lead: 'Artículos sobre los datos que hacen comparable una cotización: composite, TPP, THL, tallas y alcance declarado.',
    seoTitle: 'Cómo especificar equipo de bombero en una ficha técnica',
    seoDescription:
      'Cómo especificar equipo de bombero: qué datos debe traer una cotización para que sea comparable con otra y qué revisar antes de firmar la orden.',
    keywords: ['cómo especificar equipo de bombero', 'ficha técnica', 'México'],
    guia: {
      titulo: 'Qué hace comparable una cotización',
      parrafos: [
        'Dos cotizaciones de traje estructural pueden decir «NFPA 1970» y aun así no ser comparables. Lo que las vuelve comparables es el detalle por partida: el nombre comercial de cada capa del composite —exterior, barrera de humedad y barrera térmica—, los valores de TPP y THL del conjunto terminado, la edición de la norma, el laboratorio que certifica y la corrida de tallas.',
        'En brigadista y forestal la lógica es la misma aunque cambie la norma: tela, gramaje, si la resistencia a la flama es inherente o tratada y el alcance declarado de la certificación. Sin esos datos por escrito, el precio queda como único criterio, y es justo el que no debería decidir.',
        'Los artículos de esta categoría explican cada dato y dónde se lee en una ficha técnica; las fichas de cada pieza del catálogo los traen ya ordenados.',
      ],
      enlaces: [
        { label: 'Los ocho datos de la ficha', href: '/blog/categoria/especificacion/' },
        { label: 'Trajes estructurales', href: '/trajes/estructural/' },
        { label: 'Chaquetón estructural de tres capas', href: '/trajes/estructural/chaqueton/' },
        { label: 'Comparativa de las seis familias', href: '/trajes/' },
      ],
    },
  },
  {
    slug: 'normas',
    nombre: 'Normas y certificación de trajes',
    desc: 'NFPA 1970, NFPA 1850 y las NOM de la STPS aplicadas al equipo real.',
    h1: 'Normas y certificación',
    lead: 'NFPA 1970, NFPA 1850, NOM-002-STPS-2010 y NOM-017-STPS-2024 explicadas con lo que realmente te van a pedir.',
    seoTitle: 'Normas para trajes de bombero: NFPA 1970, NFPA 1850 y NOM',
    seoDescription:
      'Normas para trajes de bombero: NFPA 1970, NFPA 1850 y las NOM de la STPS explicadas con lo que de verdad te van a pedir en una compra.',
    keywords: ['normas para trajes de bombero', 'NFPA 1970', 'México'],
    guia: {
      titulo: 'Qué norma aplica a cada traje',
      parrafos: [
        'La NFPA 1970, edición 2025, es la referencia para el traje estructural y de proximidad: consolidó a la antigua NFPA 1971 junto con otras normas de equipo. El equipo forestal y de rescate técnico se rige por la NFPA 1950, y el ciclo de inspección, lavado, reparación y retiro, por la NFPA 1850.',
        'En México las NFPA son referencia técnica voluntaria: se vuelven exigibles cuando un pliego o una especificación de compra las incorpora. Lo obligatorio para el empleador es la NOM-017-STPS-2024, de equipo de protección personal, y para las brigadas contra incendio, la NOM-002-STPS-2010.',
        'Aquí se explica qué pide cada norma en la práctica, cómo citarla en una requisición y qué revisar en el certificado.',
      ],
      enlaces: [
        { label: 'Normas para trajes de bombero en México', href: '/blog/categoria/normas/' },
        { label: 'Trajes estructurales', href: '/trajes/estructural/' },
        { label: 'Trajes forestales', href: '/trajes/forestal/' },
        { label: 'Extricación y rescate', href: '/trajes/extricacion/' },
      ],
    },
  },
  {
    slug: 'comparativas',
    nombre: 'Comparativas de trajes de bombero',
    desc: 'Qué familia corresponde a cada operación y por qué no son intercambiables.',
    h1: 'Comparativas entre familias de traje',
    lead: 'Estructural contra brigadista, aproximación contra entrada: las confusiones que cuestan dinero y, a veces, algo peor.',
    seoTitle: 'Comparativas de trajes para bomberos por familia y modelo',
    seoDescription:
      'Comparativas de trajes para bomberos: estructural contra brigadista, aproximación contra entrada y qué familia corresponde a cada operación.',
    keywords: ['comparativas de trajes para bomberos', 'familias', 'México'],
    guia: {
      titulo: 'Cómo elegir la familia correcta',
      parrafos: [
        'Cada familia de traje responde a un riesgo distinto y no se sustituyen entre sí. El estructural protege en ataque interior; el de brigadista, en fuego incipiente dentro de una planta; el forestal, en jornadas largas de combate de vegetación; el de aproximación, cerca de calor radiante intenso; el de entrada, en el ingreso breve a la flama; y el de extricación, en rescate vehicular y técnico.',
        'Los errores caros suelen venir de comprar por apariencia: un aluminizado de aproximación no sirve para entrar a la flama, y un traje de brigadista no equivale a uno estructural certificado. La comparación correcta empieza por la operación, no por el catálogo.',
      ],
      enlaces: [
        { label: 'Trajes estructurales', href: '/trajes/estructural/' },
        { label: 'Trajes de brigadista', href: '/trajes/brigadista/' },
        { label: 'Trajes forestales', href: '/trajes/forestal/' },
        { label: 'Trajes de aproximación', href: '/trajes/aproximacion/' },
        { label: 'Trajes de entrada', href: '/trajes/entrada/' },
        { label: 'Extricación y rescate', href: '/trajes/extricacion/' },
      ],
    },
  },
  {
    slug: 'mantenimiento',
    nombre: 'Vida útil del traje de bombero',
    desc: 'Inspección, lavado, reparación y retiro del equipo en servicio.',
    h1: 'Vida útil y servicio del equipo',
    lead: 'Cómo se inspecciona, se lava, se repara y se retira un traje para que dure lo que tiene que durar y ni un día más.',
    seoTitle: 'Mantenimiento de trajes para bomberos y vida útil',
    seoDescription:
      'Mantenimiento de trajes para bomberos: inspección, lavado, reparación y retiro del equipo conforme a la NFPA 1850, explicado para estación real.',
    keywords: ['mantenimiento de trajes para bomberos', 'vida útil', 'México'],
    guia: {
      titulo: 'Cuánto dura un traje y qué lo acorta',
      parrafos: [
        'Conforme a la NFPA 1850, el traje estructural se retira a los diez años de su fecha de fabricación aunque se vea en buen estado, y antes si una inspección encuentra un daño que no se puede reparar.',
        'Entre la compra y el retiro hay dos niveles de revisión: la inspección de rutina después de cada uso y la inspección avanzada, al menos una vez al año, acompañada de limpieza avanzada. El lavado doméstico, el almacenamiento con luz solar directa y las reparaciones con material no certificado son lo que más acorta la vida útil.',
      ],
      enlaces: [
        { label: 'Pantalonera estructural', href: '/trajes/estructural/pantalonera/' },
        { label: 'Capucha antipartículas (monja)', href: '/trajes/estructural/monja/' },
        { label: 'Trajes estructurales', href: '/trajes/estructural/' },
      ],
    },
  },
  {
    slug: 'licitacion',
    nombre: 'Licitación de trajes de bombero',
    desc: 'Expediente, pliego y documentación para compra pública y corporativa.',
    h1: 'Compras y licitación',
    lead: 'Cómo se arma un expediente que no te descalifica: ficha técnica, certificado de laboratorio, carta de distribuidor y CFDI.',
    seoTitle: 'Compra de trajes para bomberos por licitación o empresa',
    seoDescription:
      'Compra de trajes para bomberos por licitación o vía corporativa: expediente, pliego, certificados y la documentación que no te descalifica.',
    keywords: ['compra de trajes para bomberos', 'licitación', 'México'],
    guia: {
      titulo: 'Qué se revisa en una junta de aclaraciones',
      parrafos: [
        'En una compra pública el traje se evalúa primero en papel. Los pliegos suelen pedir la norma con su edición, el certificado del laboratorio que lista el producto, la carta del fabricante o del distribuidor, una ficha técnica por partida con valores mínimos de TPP y THL, y la corrida de tallas.',
        'Una cita desactualizada —por ejemplo, pedir solo «NFPA 1971» cuando la vigente es la NFPA 1970— o una ficha sin los nombres comerciales de las capas bastan para descalificar una propuesta, o para que el área usuaria reciba un equipo distinto al que especificó.',
        'En compras corporativas el proceso es más corto, pero conviene pedir lo mismo: especificación por escrito, factura CFDI 4.0 y fecha de entrega comprometida.',
      ],
      enlaces: [
        { label: 'Trajes estructurales', href: '/trajes/estructural/' },
        { label: 'Trajes de brigadista', href: '/trajes/brigadista/' },
        { label: 'Solicitar cotización', href: '/contacto/' },
      ],
    },
  },
];

export function blogCategoria(slug: string) {
  return BLOG_CATEGORIES.find((c) => c.slug === slug);
}

// ============================================================
// MENU — fuente única del header. Los enlaces se validan al renderizar;
// así este inventario puede conservar su intención editorial sin publicar
// destinos ausentes cuando el catálogo cambia.
// ============================================================
export interface MenuLink { label: string; href?: string; desc?: string }
export interface MenuColumn { title: string; href?: string; img?: string; links: MenuLink[] }
export interface MenuFeature { eyebrow: string; title: string; text: string; img?: string; alt?: string; cta: MenuLink }
export interface MenuItem { label: string; href: string; match: string[]; columns: MenuColumn[]; feature?: MenuFeature; overview: MenuLink }
const chipsMarca = (slug: string) => MARCAS_DATA.tipos.find((marca) => marca.slug === slug)?.chips?.slice(0, 2).join(' · ');

const equipo = [
  { title: 'Cascos para bomberos', href: '/cascos/', img: '/images/catalogo/cascos/hero-cascos-800.avif', links: [
    { label: 'Casco estructural tradicional', href: '/cascos/casco-estructural-tradicional/' }, { label: 'Casco estructural europeo', href: '/cascos/casco-estructural-europeo/' }, { label: 'Casco forestal', href: '/cascos/casco-forestal/' }, { label: 'Casco de rescate técnico', href: '/cascos/casco-rescate-tecnico/' },
  ] },
  { title: 'Equipo de respiración autónoma', href: '/equipo-de-respiracion-autonoma/', img: '/images/catalogo/era/hero-era-800.avif', links: [
    { label: 'ERA de combate', href: '/equipo-de-respiracion-autonoma/era-de-combate/' }, { label: 'ERA industrial', href: '/equipo-de-respiracion-autonoma/era-industrial/' }, { label: 'ERA de escape', href: '/equipo-de-respiracion-autonoma/era-de-escape/' }, { label: 'Cilindros de fibra de carbono', href: '/equipo-de-respiracion-autonoma/cilindros-de-fibra-de-carbono/' },
  ] },
  { title: 'Botas para bomberos', href: '/botas/', img: '/images/catalogo/botas/hero-botas-800.avif', links: [
    { label: 'Bota de hule estructural', href: '/botas/bota-de-hule-estructural/' }, { label: 'Bota de piel estructural', href: '/botas/bota-de-piel-estructural/' }, { label: 'Bota forestal', href: '/botas/bota-forestal/' }, { label: 'Bota de brigada industrial', href: '/botas/bota-de-brigada-industrial/' },
  ] },
  { title: 'Guantes para bomberos', href: '/guantes/', img: '/images/catalogo/guantes/hero-guantes-800.avif', links: [
    { label: 'Guante estructural', href: '/guantes/guante-estructural/' }, { label: 'Guante de extricación', href: '/guantes/guante-rescate-extricacion/' }, { label: 'Guante forestal', href: '/guantes/guante-forestal/' }, { label: 'Guante para brigadista', href: '/guantes/guante-brigadista/' },
  ] },
  { title: 'Monjas y escafandras', href: '/capuchas/', img: '/images/catalogo/capuchas/hero-capuchas-800.avif', links: [
    { label: 'Monja antipartículas', href: '/trajes/estructural/monja/' }, { label: 'Monja de brigada', href: '/trajes/brigadista/monja/' }, { label: 'Escafandra Nomex', href: '/capuchas/skold-fpen/' }, { label: 'Capucha aluminizada', href: '/trajes/aproximacion/capucha/' },
  ] },
] satisfies MenuColumn[];

const rescate = [
  { title: 'Equipo de rescate', href: '/rescate/', img: '/images/catalogo/rescate/hero-rescate-800.avif', links: [
    { label: 'Quijadas de la vida (hidráulica)', href: '/rescate/herramienta-hidraulica-de-rescate/' }, { label: 'Arnés de rescate', href: '/rescate/arnes-de-rescate/' }, { label: 'Cuerda de rescate', href: '/rescate/cuerda-de-rescate/' }, { label: 'Mosquetones de rescate', href: '/rescate/mosquetones-de-rescate/' },
  ] },
  { title: 'Herramientas para bomberos', href: '/herramientas/', img: '/images/catalogo/herramientas/hero-herramientas-800.avif', links: [
    { label: 'Hacha de bombero', href: '/herramientas/hacha-de-bombero/' }, { label: 'Barra Halligan', href: '/herramientas/barra-halligan/' }, { label: 'Herramienta Pulaski', href: '/herramientas/pulaski/' }, { label: 'Bomba de mochila forestal', href: '/herramientas/bomba-de-mochila-forestal/' },
  ] },
  { title: 'Mangueras y accesorios', href: '/mangueras-y-accesorios/', img: '/images/catalogo/mangueras/hero-mangueras-800.avif', links: [
    { label: 'Manguera de ataque', href: '/mangueras-y-accesorios/manguera-de-ataque/' }, { label: 'Chiflón o pitón', href: '/mangueras-y-accesorios/piton-boquilla/' }, { label: 'Llave para hidrante', href: '/mangueras-y-accesorios/llave-para-hidrante/' }, { label: 'Conexiones y adaptadores', href: '/mangueras-y-accesorios/conexiones-y-adaptadores/' },
  ] },
  { title: 'Accesorios para bomberos', href: '/accesorios/', img: '/images/catalogo/accesorios/hero-accesorios-800.avif', links: [
    { label: 'Cámara térmica', href: '/accesorios/camara-termica/' }, { label: 'Linterna de bombero', href: '/accesorios/linterna-de-bombero/' }, { label: 'Lámpara de casco', href: '/accesorios/lampara-de-casco/' }, { label: 'Goggles para bombero', href: '/accesorios/goggles/' },
  ] },
  { title: 'Kits para bomberos', href: '/kits/', img: '/images/catalogo/kits/hero-kits-800.avif', links: [
    { label: 'Kit estructural', href: '/kits/kit-estructural/' }, { label: 'Kit brigadista', href: '/kits/kit-brigadista/' }, { label: 'Kit forestal', href: '/kits/kit-forestal/' }, { label: 'Kit de rescate vertical', href: '/rescate/kit-de-rescate-vertical/' },
  ] },
] satisfies MenuColumn[];

export const MENU: MenuItem[] = [
  {
    label: 'Trajes para bomberos', href: '/trajes/', match: ['/trajes/'],
    columns: [
      { title: 'Familias de traje', links: [...PRODUCT_CATEGORIES.map((categoria) => ({ label: categoria.nombre, href: `/trajes/${categoria.slug}/`, desc: categoria.chips.slice(0, 2).join(' · ') })), { label: 'Trajes Hazmat', href: '/trajes/hazmat/', desc: 'Nivel A, B y C' }] },
      { title: 'Piezas del traje', links: [
        { label: 'Chaquetón estructural', href: '/trajes/estructural/chaqueton/' }, { label: 'Pantalonera estructural', href: '/trajes/estructural/pantalonera/' }, { label: 'Monja antipartículas', href: '/trajes/estructural/monja/' }, { label: 'Tirantes para pantalonera', href: '/trajes/estructural/tirantes/' }, { label: 'Arnés interno de escape', href: '/trajes/estructural/arnes-escape/' }, { label: 'Overol de brigadista', href: '/trajes/brigadista/overol/' }, { label: 'Camisola forestal', href: '/trajes/forestal/camisola/' }, { label: 'Chaquetón aluminizado', href: '/trajes/aproximacion/chaqueton/' },
      ] },
      { title: 'Conjunto completo', links: [
        { label: 'Kit estructural para bomberos', href: '/kits/kit-estructural/' }, { label: 'Kit brigadista para bomberos', href: '/kits/kit-brigadista/' }, { label: 'Kit forestal para bomberos', href: '/kits/kit-forestal/' }, { label: 'Modelos de trajes de bomberos', href: '/trajes/#modelos' }, { label: 'Comparativa de familias de traje', href: '/trajes/' },
      ] },
    ],
    feature: { eyebrow: 'Compra sin mínimo', title: 'Traje, casco, botas, guantes y ERA en una sola cotización', text: 'Integra un conjunto por operación, talla y componentes compatibles.', img: '/images/catalogo/trajes/skold-hero-pbimax-conjunto.avif', alt: 'Conjunto Sköld de traje estructural para bombero', cta: { label: 'Kits de equipo completo para bombero', href: '/kits/' } },
    overview: { label: 'Trajes para bomberos: las siete familias', href: '/trajes/' },
  },
  { label: 'Equipo de protección', href: '/cascos/', match: ['/cascos/', '/equipo-de-respiracion-autonoma/', '/botas/', '/guantes/', '/capuchas/'], columns: equipo, overview: { label: 'Equipo de protección personal para bomberos', href: '/cascos/' } },
  { label: 'Rescate y herramientas', href: '/rescate/', match: ['/rescate/', '/herramientas/', '/mangueras-y-accesorios/', '/accesorios/', '/kits/'], columns: rescate, overview: { label: 'Equipo de rescate y herramientas para bomberos', href: '/rescate/' } },
  {
    label: 'Marcas de equipo', href: '/marcas/', match: ['/marcas/'], columns: [
      { title: 'Marcas que surtimos', links: [{ label: 'Romak Fire', href: '/marcas/romak-fire/', desc: chipsMarca('romak-fire') }, { label: 'Sköld', href: '/marcas/skold/', desc: chipsMarca('skold') }] },
      { title: 'Modelos por marca', links: [{ label: 'Modelos de trajes Romak Fire, Sköld y Lakeland', href: '/trajes/#modelos' }, { label: 'Casco Sköld Viking', href: '/cascos/skold-viking/' }, { label: 'ERA Sköld Phantöm', href: '/equipo-de-respiracion-autonoma/skold-phantom/' }, { label: 'Bota Romak Workman Fire', href: '/botas/romak-workman-fire/' }] },
      { title: 'También cotizamos', links: [{ label: 'Bullard · Croydon · Veridian · Majestic · Streamlight · ESS · Lakeland · MSA' }] },
    ], feature: { eyebrow: 'Marcas y modelos', title: 'Componentes documentados para tu operación', text: 'Compara modelo, talla y alcance antes de integrar el conjunto.', img: '/images/catalogo/marcas/hero-marcas.avif', alt: 'Marcas de equipo para bombero', cta: { label: 'Equipo Romak Fire y Sköld para bomberos', href: '/marcas/' } }, overview: { label: 'Marcas de equipo para bomberos', href: '/marcas/' },
  },
  {
    label: 'Guías técnicas', href: '/blog/', match: ['/blog/', '/estaciones-de-bomberos/'], columns: [
      { title: 'Temas del blog', href: '/blog/', links: BLOG_CATEGORIES.map((categoria) => ({ label: categoria.nombre, href: `/blog/categoria/${categoria.slug}/` })) },
      { title: 'Guías de trajes', links: [{ label: 'Cómo elegir traje para bomberos', href: '/blog/como-elegir-traje-para-bomberos/' }, { label: 'Cuánto cuesta un traje de bombero', href: '/blog/cuanto-cuesta-un-traje-de-bombero/' }, { label: 'Traje estructural o brigadista', href: '/blog/traje-estructural-o-brigadista/' }, { label: 'NFPA 1970: cambios para trajes de bombero', href: '/blog/nfpa-1970-que-cambio/' }, { label: 'TPP y THL del traje estructural', href: '/blog/tpp-y-thl-traje-estructural/' }, { label: 'Retiro del traje a los diez años (NFPA 1850)', href: '/blog/vida-util-traje-bombero-nfpa-1850/' }] },
      { title: 'Guías de equipo y compra', links: [{ label: 'Cómo elegir casco de bombero', href: '/blog/como-elegir-casco-de-bombero/' }, { label: 'Cómo elegir botas de bombero', href: '/blog/como-elegir-botas-de-bombero/' }, { label: 'Cómo elegir equipo de respiración autónoma', href: '/blog/como-elegir-equipo-de-respiracion-autonoma/' }, { label: 'NOM-002-STPS-2010 para brigadas', href: '/blog/nom-002-stps-2010-equipo-para-brigadas/' }, { label: 'Licitación de trajes de bomberos', href: '/blog/licitacion-trajes-bomberos-expediente/' }, { label: 'Nomex IIIA en trajes de bombero', href: '/blog/nomex-iiia-que-es/' }, { label: 'Directorio de estaciones de bomberos', href: '/estaciones-de-bomberos/' }] },
    ], feature: { eyebrow: 'Compra informada', title: 'Preguntas frecuentes sobre trajes de bombero', text: 'Resuelve dudas sobre familia, piezas, tallas y documentación antes de cotizar.', cta: { label: 'Preguntas frecuentes sobre trajes de bombero', href: '/#faq' } }, overview: { label: 'Blog técnico de trajes para bomberos', href: '/blog/' },
  },
];

// SectionMenu conserva este formato compacto por compatibilidad.
export const NAV = MENU.map(({ label, href }) => ({ label, href }));

// Complementos del conjunto. NO son línea de negocio: se cotizan
// junto al traje para cerrar el equipamiento del elemento.
export const COMPLEMENTOS = [
  { nombre: 'Casco', nota: 'Se verifica compatibilidad con la máscara del ERA en uso' },
  { nombre: 'Monja / escafandra', nota: 'Tradicional de Nomex o barrera de partículas' },
  { nombre: 'Botas', nota: 'Hule o piel, según familia de traje' },
  { nombre: 'Guantes', nota: 'Estructural, extricación o forestal: no se sustituyen entre sí' },
  { nombre: 'Tirantes y cinturón', nota: 'H-back o Y-back, según corte del pantalón' },
  { nombre: 'ERA / equipo de respiración', nota: 'Se cotiza por separado con su llenado de aire' },
] as const;

// ============================================================
// MARCAS — referencia técnica del mercado, NO afirmación de
// distribución. Sirve para que el comprador especifique y para
// que el pliego se pueda atender. Al firmar carta de distribuidor
// con alguna, mover a una sección propia y decirlo explícito.
// Datos verificados jul-2026 (ver estudio de mercado).
// ============================================================
export interface Marca {
  nombre: string;
  origen: string;
  nota: string;
}

export const MARCAS_TRAJE: Marca[] = [
  { nombre: 'MSA Globe', origen: 'EE. UU.', nota: 'Globe es de MSA Safety desde 2017. Referencia de turnout estructural' },
  { nombre: 'LION', origen: 'EE. UU.', nota: 'Fabricante independiente desde 1898. Línea Starfield' },
  { nombre: 'Fire-Dex', origen: 'EE. UU.', nota: 'Líneas TECGEN71 y Chieftain' },
  { nombre: 'Morning Pride', origen: 'EE. UU.', nota: 'Pasó de Honeywell a PIP en mayo de 2025' },
  { nombre: 'MSA Bristol', origen: 'Reino Unido', nota: 'Adquirida por MSA en 2021' },
  { nombre: 'Veridian', origen: 'EE. UU.', nota: 'Turnout estructural y forestal' },
  { nombre: 'INNOTEX', origen: 'Canadá', nota: 'Traje estructural a medida' },
  { nombre: 'Rosenbauer', origen: 'Austria', nota: 'Traje bajo referencia europea EN 469' },
  { nombre: 'Texport', origen: 'Austria', nota: 'Línea X-TREME, referencia europea' },
  { nombre: 'Fire Equipment de México', origen: 'México', nota: 'Fabricante nacional con certificación UL verificable' },
];

// Materiales del composite: lo que realmente se especifica en un
// pliego. Son marcas de material, no de traje terminado.
export const MARCAS_MATERIAL: Marca[] = [
  { nombre: 'PBI', origen: 'Exterior', nota: 'PBI Matrix y PBI Max: referencia de gama alta' },
  { nombre: 'Nomex · Kevlar (DuPont)', origen: 'Exterior', nota: 'Fibra ignífuga inherente, la más pedida en México' },
  { nombre: 'GORE CROSSTECH', origen: 'Barrera de humedad', nota: 'Membrana impermeable y transpirable' },
  { nombre: 'STEDAIR (Stedfast)', origen: 'Barrera de humedad', nota: 'Alternativa habitual a CROSSTECH' },
  { nombre: 'Caldura · Quantum3D', origen: 'Barrera térmica', nota: 'Donde se define la mayor parte del TPP' },
  { nombre: 'TenCate · Safety Components', origen: 'Exterior', nota: 'Tejedores de tela exterior certificada' },
];

export interface FooterLink {
  label: string;
  href?: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

// Footer: su piso de catálogo deriva de MENU para mantener la navegación
// principal y secundaria alineadas. El segundo piso concentra soporte.
export const FOOTER = {
  catalogo: [
    {
      title: 'Trajes para bomberos',
      links: [...MENU[0].columns[0].links, { label: 'Trajes para bomberos por familia', href: '/trajes/' }],
    },
    {
      title: 'Piezas del traje',
      links: MENU[0].columns[1].links,
    },
    {
      title: 'Equipo de protección',
      links: [...MENU[1].columns.map(({ title, href }) => ({ label: title, href: href! })), { label: 'Kits de equipo completo para bombero', href: '/kits/' }],
    },
    {
      title: 'Rescate y herramientas',
      links: [...MENU[2].columns.filter(({ title }) => title !== 'Kits para bomberos').map(({ title, href }) => ({ label: title, href: href! })), { label: 'Modelos de trajes de bomberos', href: '/trajes/#modelos' }],
    },
    {
      title: 'Marcas y modelos',
      links: [
        ...MENU[3].columns[0].links,
        { label: 'Marcas de equipo para bomberos', href: '/marcas/' },
        ...MENU[3].columns[1].links.slice(1),
      ],
    },
    {
      title: 'Guías técnicas',
      links: [...BLOG_CATEGORIES.map((categoria) => ({ label: categoria.nombre, href: `/blog/categoria/${categoria.slug}/` })), { label: 'Blog técnico de trajes para bomberos', href: '/blog/' }],
    },
  ] satisfies FooterColumn[],
  soporte: [
    {
      title: 'Guías más consultadas',
      links: MENU[4].columns[1].links.filter(({ href }) => href !== '/blog/tpp-y-thl-traje-estructural/'),
    },
    {
      title: 'Compra y licitación',
      links: [
        ...MENU[4].columns[2].links.filter(({ href }) => ['/blog/licitacion-trajes-bomberos-expediente/', '/blog/nom-002-stps-2010-equipo-para-brigadas/'].includes(href ?? '')),
        { label: 'TPP y THL del traje estructural', href: '/blog/tpp-y-thl-traje-estructural/' },
        { label: 'Preguntas frecuentes sobre trajes de bombero', href: '/#faq' },
        { label: 'Solicitar cotización de trajes', href: '/#cotizar' },
      ],
    },
    {
      title: 'LORICA · Trajes para bomberos',
      links: [
        { label: 'Proveedor de trajes para bomberos', href: '/empresa/' },
        { label: 'Contacto para cotizar trajes', href: '/contacto/' },
        { label: 'Directorio de estaciones de bomberos', href: '/estaciones-de-bomberos/' },
        { label: 'Aviso de privacidad', href: '/aviso-de-privacidad/' },
        { label: 'Términos y condiciones', href: '/terminos-y-condiciones/' },
      ],
    },
  ] satisfies FooterColumn[],
  legales: [
    { label: 'Aviso de privacidad', href: '/aviso-de-privacidad/' },
    { label: 'Términos y condiciones', href: '/terminos-y-condiciones/' },
  ] satisfies FooterLink[],
} as const;
