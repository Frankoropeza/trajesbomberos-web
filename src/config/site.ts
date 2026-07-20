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

// Regla de las 3 keywords
export const KEYWORDS = [
  'trajes para bombero',
  'equipo para bomberos',
  'todo México',
] as const;

export const CONTACT = {
  telefono: '+52 55 0000 0000',      // TODO(Frank): real
  telefonoHref: '+525500000000',     // TODO(Frank): real
  whatsapp: '525500000000',          // TODO(Frank): real, solo dígitos
  email: 'ventas@trajesbombero.com', // TODO(Frank): confirmar
  horario: 'Lun–Vie 9:00–18:00',
  cobertura: 'Envíos a todo México',
  posicionamiento: 'Equipo de protección contra incendios · Envíos a todo México',
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
  { label: 'Catálogo', href: '/#catalogo' },
  { label: 'Quién compra', href: '/#segmentos' },
  { label: 'Cómo elegir', href: '/#guia' },
  { label: 'Normas', href: '/#normas' },
  { label: 'Vida útil', href: '/#vida-util' },
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
// CATÁLOGO — 10 familias reales con terminología mexicana.
// ============================================================
export interface ProductCategory {
  slug: string;
  nombre: string;
  desc: string;
  image: string;
  imageAlt: string;
  badge?: string;
  chips: string[];
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    slug: 'traje-estructural',
    nombre: 'Trajes estructurales',
    desc: 'Chaquetón y pantalón de tres capas: exterior, barrera de humedad y barrera térmica. Para combate de incendio en edificaciones.',
    image: '/images/productos/traje-estructural-chaqueton-pantalon-bombero.svg',
    imageAlt: 'Traje estructural para bombero: chaquetón y pantalón de tres capas',
    badge: 'Más solicitado',
    chips: ['Chaquetón', 'Pantalonera', 'DRD'],
  },
  {
    slug: 'traje-brigadista',
    nombre: 'Trajes de brigadista',
    desc: 'Equipo para brigada industrial de fuego incipiente. Menor costo que el estructural certificado y distinto alcance de protección.',
    image: '/images/productos/traje-brigadista-industrial-bombero.svg',
    imageAlt: 'Traje de brigadista industrial contra incendio',
    chips: ['Brigada', 'NOM-002-STPS', 'Combo'],
  },
  {
    slug: 'traje-forestal',
    nombre: 'Trajes forestales',
    desc: 'Camisola y pantalón de una sola capa en tela ignífuga inherente. Ligereza y transpirabilidad para jornadas largas en línea de fuego.',
    image: '/images/productos/traje-forestal-camisola-pantalon-bombero.svg',
    imageAlt: 'Traje forestal para bombero: camisola y pantalón de una capa',
    chips: ['Camisola', 'Una capa', 'Wildland'],
  },
  {
    slug: 'traje-aproximacion',
    nombre: 'Aproximación y entrada',
    desc: 'Aluminizados. Aproximación protege del calor radiante cerca de la flama; entrada permite ingreso breve a la flama. No son intercambiables.',
    image: '/images/productos/traje-aproximacion-aluminizado-bombero.svg',
    imageAlt: 'Traje aluminizado de aproximación para calor radiante',
    chips: ['Aluminizado', 'ARFF', 'Metalúrgica'],
  },
  {
    slug: 'traje-extricacion',
    nombre: 'Extricación y rescate',
    desc: 'Rescate vehicular y técnico: resistencia a corte y punción con barrera contra patógenos. Protege la inversión del traje estructural.',
    image: '/images/productos/traje-extricacion-rescate-vehicular.svg',
    imageAlt: 'Traje de extricación para rescate vehicular y técnico',
    chips: ['Corte', 'Patógenos', 'Ligero'],
  },
  {
    slug: 'cascos',
    nombre: 'Cascos',
    desc: 'Americano tradicional, americano moderno y jet europeo. La compatibilidad con la máscara del ERA se verifica antes de comprar.',
    image: '/images/productos/casco-bombero-tradicional-jet.svg',
    imageAlt: 'Cascos para bombero estilo tradicional y jet',
    chips: ['Tradicional', 'Jet', 'Visor'],
  },
  {
    slug: 'botas',
    nombre: 'Botas',
    desc: 'Hule y piel. La estructural lleva membrana impermeable, puntera y plantilla; la forestal va sin puntera de acero por transmisión de calor.',
    image: '/images/productos/botas-bombero-hule-piel.svg',
    imageAlt: 'Botas para bombero de hule y de piel',
    chips: ['Hule', 'Piel', 'Caña 14"'],
  },
  {
    slug: 'guantes',
    nombre: 'Guantes',
    desc: 'Tres familias que no se sustituyen entre sí: estructural de tres capas, extricación con destreza y forestal ligero.',
    image: '/images/productos/guantes-bombero-estructural-extricacion.svg',
    imageAlt: 'Guantes de bombero estructural y de extricación',
    chips: ['Estructural', 'Extricación', 'Forestal'],
  },
  {
    slug: 'monjas',
    nombre: 'Monjas y capuchas',
    desc: 'Monja tradicional de Nomex y capucha barrera de partículas, que bloquea partículas submicrónicas del humo en cuello y mandíbula.',
    image: '/images/productos/monja-capucha-barrera-particulas-bombero.svg',
    imageAlt: 'Monja o capucha barrera de partículas para bombero',
    badge: 'Salud ocupacional',
    chips: ['Nomex', 'Partículas', 'Escafandra'],
  },
  {
    slug: 'era-scba',
    nombre: 'ERA (equipo de respiración)',
    desc: 'Equipos de respiración autónoma, cilindros de 2216 y 4500 psi, máscaras, PASS y refacciones. El llenado de aire se resuelve junto con el equipo.',
    image: '/images/productos/era-scba-equipo-respiracion-autonoma.svg',
    imageAlt: 'Equipo de respiración autónoma ERA o SCBA para bombero',
    chips: ['ERA', 'Cilindros', 'Máscaras'],
  },
  {
    slug: 'accesorios',
    nombre: 'Accesorios y herramienta',
    desc: 'Tirantes, cinturones y arneses de escape, lámparas, hacha pico, halligan y herramienta forestal: pulaski, McLeod y batefuego.',
    image: '/images/productos/accesorios-herramienta-bombero.svg',
    imageAlt: 'Accesorios y herramienta para bombero',
    chips: ['Tirantes', 'Arnés', 'Herramienta'],
  },
];

export const FOOTER_COLUMNS = [
  {
    title: 'Catálogo',
    links: PRODUCT_CATEGORIES.slice(0, 6).map((c) => ({ label: c.nombre, href: '/#catalogo' })),
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
      { label: 'Cómo elegir traje', href: '/#guia' },
      { label: 'Normas aplicables', href: '/#normas' },
      { label: 'Vida útil y servicio', href: '/#vida-util' },
      { label: 'Preguntas frecuentes', href: '/#faq' },
    ],
  },
] as const;
