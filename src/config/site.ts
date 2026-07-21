// ============================================================
// SSoT — Single Source of Truth. Los datos viven aquí.
// Terminología: español de México verificado en el mercado real
// (chaquetón, pantalonera, monja, escafandra, tirantes, ERA,
// brigadista, DRD, combo). Ver estudio de mercado jul-2026.
// TODO(Frank): teléfono, WhatsApp y email reales.
// TODO(Frank): confirmar marcas con carta de distribuidor para
// poder nombrarlas como tales (hoy solo referencia técnica).
// ============================================================

export const SITE = {
  name: 'TrajesBombero',
  legalName: 'TrajesBombero México',
  url: 'https://trajesbombero.com',
  lang: 'es',
  locale: 'es_MX',
  allowSelfReviews: false, // regla B4: sin reseñas propias
} as const;

// Regla de las 3 keywords · kw1 = principal, va primero y sin marca
export const KEYWORDS = [
  'trajes para bomberos',      // kw1 · principal
  'equipo contra incendios',   // kw2 · secundaria
  'México',                    // kw3 · variante geográfica
] as const;

export const CONTACT = {
  telefono: '+52 55 0000 0000',      // TODO(Frank): real
  telefonoHref: '+525500000000',     // TODO(Frank): real
  whatsapp: '525500000000',          // TODO(Frank): real, solo dígitos
  email: 'ventas@trajesbombero.com', // TODO(Frank): confirmar
  horario: 'Lun–Vie 9:00–18:00',
  cobertura: 'Envíos a todo México',
  posicionamiento: 'Venta de trajes para bomberos · Envíos a todo México',
} as const;

export const WA_MESSAGES = {
  cotizar: 'Hola, quiero cotizar trajes o equipo para bomberos.',
  informacion: 'Hola, necesito información sobre equipo de protección contra incendios.',
  categoria: (nombre: string) => `Hola, quiero cotizar: ${nombre}.`,
  segmento: (nombre: string) => `Hola, necesito equipo para: ${nombre}.`,
  licitacion: 'Hola, necesito cotización formal y ficha técnica para una licitación.',
  servicio: 'Hola, quiero información sobre inspección y lavado de equipo (NFPA 1850).',
} as const;

export const NAV = [
  { label: 'Trajes', href: '/trajes/' },
  { label: 'Anatomía', href: '/#anatomia' },
  { label: 'Cómo especificar', href: '/#especificar' },
  { label: 'Marcas', href: '/#marcas' },
  { label: 'Normas', href: '/#normas' },
  { label: 'Preguntas', href: '/#faq' },
] as const;

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
    cta: 'Equipar mi brigada',
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
    cta: 'Cotizar por pieza',
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
    image: '/images/productos/traje-estructural-chaqueton-pantalon-bombero.svg',
    imageAlt: 'Traje estructural para bombero: chaquetón y pantalón de tres capas',
    badge: 'Más solicitado',
    chips: ['Chaquetón', 'Pantalonera', 'DRD'],
  },
  {
    slug: 'brigadista',
    nombre: 'Trajes de brigadista',
    desc: 'Equipo para brigada industrial de fuego incipiente. Menor costo que el estructural certificado y distinto alcance de protección.',
    image: '/images/productos/traje-brigadista-industrial-bombero.svg',
    imageAlt: 'Traje de brigadista industrial contra incendio',
    chips: ['Brigada', 'NOM-002-STPS', 'Combo'],
  },
  {
    slug: 'forestal',
    nombre: 'Trajes forestales',
    desc: 'Camisola y pantalón de una sola capa en tela ignífuga inherente. Ligereza y transpirabilidad para jornadas largas en línea de fuego.',
    image: '/images/productos/traje-forestal-camisola-pantalon-bombero.svg',
    imageAlt: 'Traje forestal para bombero: camisola y pantalón de una capa',
    chips: ['Camisola', 'Una capa', 'Wildland'],
  },
  {
    slug: 'aproximacion',
    nombre: 'Trajes de aproximación',
    desc: 'Aluminizados para trabajo prolongado cerca de calor radiante intenso: ARFF, refinería y colada de metal. Conservan movilidad.',
    image: '/images/productos/traje-aproximacion-aluminizado-bombero.svg',
    imageAlt: 'Traje aluminizado de aproximación para calor radiante',
    chips: ['Aluminizado', 'ARFF', 'Metalúrgica'],
  },
  {
    slug: 'entrada',
    nombre: 'Trajes de entrada',
    desc: 'Aluminizado multicapa para ingreso breve a la flama en horno o incidente térmico severo. No se sustituye con uno de aproximación.',
    image: '/images/productos/traje-entrada-penetracion-flama.svg',
    imageAlt: 'Traje de entrada o penetración a la flama',
    chips: ['Penetración', 'Multicapa', 'Uso corto'],
  },
  {
    slug: 'extricacion',
    nombre: 'Extricación y rescate',
    desc: 'Rescate vehicular y técnico: resistencia a corte y punción con barrera contra patógenos. Protege la inversión del traje estructural.',
    image: '/images/productos/traje-extricacion-rescate-vehicular.svg',
    imageAlt: 'Traje de extricación para rescate vehicular y técnico',
    chips: ['Corte', 'Patógenos', 'Ligero'],
  },
];

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

export const FOOTER_COLUMNS = [
  {
    title: 'Trajes',
    links: PRODUCT_CATEGORIES.map((c) => ({ label: c.nombre, href: `/trajes/${c.slug}/` })),
  },
  {
    title: 'Quién compra',
    links: [
      { label: 'Brigada industrial', href: '/#segmentos' },
      { label: 'Gobierno y licitación', href: '/#segmentos' },
      { label: 'Cuerpos voluntarios', href: '/#segmentos' },
    ],
  },
  {
    title: 'Técnico',
    links: [
      { label: 'Anatomía del traje', href: '/#anatomia' },
      { label: 'Cómo especificar', href: '/#especificar' },
      { label: 'Errores de compra', href: '/#errores' },
      { label: 'Marcas de referencia', href: '/#marcas' },
      { label: 'Normas aplicables', href: '/#normas' },
      { label: 'Vida útil y servicio', href: '/#vida-util' },
    ],
  },
] as const;
