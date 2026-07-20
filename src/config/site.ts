// ============================================================
// SSoT — Single Source of Truth (regla canónica ejemplos.mx)
// "Los datos viven en src/config/site.ts."
// TODO(Frank): reemplazar teléfono/WhatsApp/email placeholder
// por los reales antes de publicar (regla D4: cero hardcoding,
// este archivo es el ÚNICO lugar donde se editan).
// ============================================================

export const SITE = {
  name: 'TrajesBombero',
  legalName: 'TrajesBombero México',
  url: 'https://trajesbombero.com',
  lang: 'es',
  locale: 'es_MX',
  // Regla B4: schema Review gateado — apagado (sin reseñas propias)
  allowSelfReviews: false,
} as const;

// Regla de las 3 keywords: kw1 principal · kw2 secundaria · kw3 variante.
// title = "kw1 | kw2 | kw3" (≤60, sin marca, kw1 primero)
// description abre con kw1 y teje las 3 sin sobreoptimizar (≤160)
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
  posicionamiento: 'Equipo de protección para bomberos con envíos a todo México',
} as const;

// Mensajes de WhatsApp prellenados — se consumen SOLO via waUrl()
export const WA_MESSAGES = {
  cotizar: 'Hola, quiero cotizar trajes o equipo para bomberos.',
  informacion: 'Hola, necesito información sobre equipo para bomberos.',
  categoria: (nombre: string) => `Hola, quiero cotizar: ${nombre}.`,
} as const;

// NAV — única fuente del Header, SectionMenu y Footer (data-driven)
export const NAV = [
  { label: 'Catálogo', href: '/#catalogo' },
  { label: 'Nosotros', href: '/#nosotros' },
  { label: 'Por qué elegirnos', href: '/#beneficios' },
  { label: 'Guía de selección', href: '/#guia' },
  { label: 'Proceso', href: '/#proceso' },
  { label: 'Preguntas', href: '/#faq' },
] as const;

// Taxonomía de productos — alimenta la vitrina de la home,
// el Footer y (próxima parte) las páginas L2 /productos/<slug>/
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
    desc: 'Protección para combate de incendios estructurales: chaquetón y pantalón con capas térmica y de humedad.',
    image: '/images/productos/traje-estructural-para-bombero.svg',
    imageAlt: 'Traje estructural para bombero: chaquetón y pantalón de protección',
    badge: 'Más solicitado',
    chips: ['Chaquetón', 'Pantalón', 'Capas térmicas'],
  },
  {
    slug: 'traje-forestal',
    nombre: 'Trajes forestales',
    desc: 'Ropa ligera y resistente para combate de incendios forestales y trabajo prolongado en campo.',
    image: '/images/productos/traje-forestal-para-bombero.svg',
    imageAlt: 'Traje forestal para bombero, ropa ligera para incendios de vegetación',
    chips: ['Ligereza', 'Camisola', 'Pantalón'],
  },
  {
    slug: 'traje-aproximacion',
    nombre: 'Trajes de aproximación',
    desc: 'Trajes aluminizados para trabajos cercanos a fuentes de calor radiante intenso.',
    image: '/images/productos/traje-aproximacion-aluminizado.svg',
    imageAlt: 'Traje de aproximación aluminizado para calor radiante',
    chips: ['Aluminizado', 'Calor radiante', 'Capucha'],
  },
  {
    slug: 'cascos',
    nombre: 'Cascos',
    desc: 'Cascos para bombero estructural y forestal con careta, goggles y protector de nuca.',
    image: '/images/productos/casco-para-bombero.svg',
    imageAlt: 'Casco para bombero con careta y protector de nuca',
    chips: ['Careta', 'Goggles', 'Nuquera'],
  },
  {
    slug: 'botas',
    nombre: 'Botas',
    desc: 'Botas de hule y de piel para bombero con puntera y plantilla resistentes.',
    image: '/images/productos/botas-para-bombero.svg',
    imageAlt: 'Botas de protección para bombero con puntera reforzada',
    chips: ['Hule', 'Piel', 'Puntera'],
  },
  {
    slug: 'guantes',
    nombre: 'Guantes',
    desc: 'Guantes estructurales, de extricación y de rescate con protección térmica y destreza.',
    image: '/images/productos/guantes-para-bombero.svg',
    imageAlt: 'Guantes de protección estructural para bombero',
    chips: ['Estructural', 'Extricación', 'Rescate'],
  },
  {
    slug: 'equipo-scba',
    nombre: 'Equipo de respiración',
    desc: 'Equipos de respiración autónoma (SCBA), cilindros y refacciones para atmósferas peligrosas.',
    image: '/images/productos/equipo-respiracion-autonoma-scba.svg',
    imageAlt: 'Equipo de respiración autónoma SCBA para bombero',
    chips: ['SCBA', 'Cilindros', 'Refacciones'],
  },
  {
    slug: 'accesorios',
    nombre: 'Accesorios',
    desc: 'Monjas, guantes, lámparas, hachas, cinturones y más complementos del equipo de protección.',
    image: '/images/productos/accesorios-equipo-bombero.svg',
    imageAlt: 'Accesorios y complementos de equipo para bombero',
    chips: ['Monjas', 'Lámparas', 'Herramienta'],
  },
];

// Columnas del Footer (data-driven, 4 columnas)
export const FOOTER_COLUMNS = [
  {
    title: 'Productos',
    links: PRODUCT_CATEGORIES.map((c) => ({ label: c.nombre, href: `/#catalogo` })),
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Nosotros', href: '/#nosotros' },
      { label: 'Por qué elegirnos', href: '/#beneficios' },
      { label: 'Cómo trabajamos', href: '/#proceso' },
    ],
  },
  {
    title: 'Ayuda',
    links: [
      { label: 'Guía de selección', href: '/#guia' },
      { label: 'Preguntas frecuentes', href: '/#faq' },
      { label: 'Contacto', href: '/#faq' },
    ],
  },
] as const;
