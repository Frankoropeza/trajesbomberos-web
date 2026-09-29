import { PRODUCT_CATEGORIES, SEGMENTOS } from '@config/site';
import { SECCIONES } from '@lib/catalogo/secciones';
import type { Post } from '@lib/blog';

type GuiaEnlace = {
  etiqueta: string;
  desc: string;
  slug: string;
};

type GuiaComprador = Record<string, readonly string[]>;

type PostConAncla = {
  data: {
    ancla?: string;
    title: string;
  };
};

export type EnlaceEquipo = {
  nombre: string;
  href: string;
};

export const GUIAS_POR_NORMA = [
  {
    etiqueta: 'NFPA 1970',
    desc: 'Traje estructural y de aproximación',
    slug: 'nfpa-1970-que-cambio',
  },
  {
    etiqueta: 'NFPA 1850',
    desc: 'Vida útil, inspección y retiro',
    slug: 'vida-util-traje-bombero-nfpa-1850',
  },
  {
    etiqueta: 'NOM-002-STPS-2010',
    desc: 'Equipo para brigadas',
    slug: 'nom-002-stps-2010-equipo-para-brigadas',
  },
  {
    etiqueta: 'TPP y THL',
    desc: 'Desempeño térmico del conjunto',
    slug: 'tpp-y-thl-traje-estructural',
  },
  {
    etiqueta: 'Nomex IIIA',
    desc: 'Fibra y cuidado de la prenda',
    slug: 'nomex-iiia-que-es',
  },
] as const satisfies readonly GuiaEnlace[];

export const GUIAS_POR_COMPRADOR = {
  'brigada-industrial': [
    'nom-002-stps-2010-equipo-para-brigadas',
    'traje-estructural-o-brigadista',
    'uniforme-de-bombero-que-incluye',
  ],
  'gobierno-licitacion': [
    'licitacion-trajes-bomberos-expediente',
    'nfpa-1970-que-cambio',
    'cuanto-cuesta-un-traje-de-bombero',
  ],
  'cuerpos-voluntarios': [
    'como-elegir-traje-para-bomberos',
    'como-elegir-botas-de-bombero',
    'como-elegir-casco-de-bombero',
  ],
} as const satisfies GuiaComprador;

function normalizar(texto: string) {
  return texto
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('es-MX');
}

export function anclaCorta(post: PostConAncla) {
  return post.data.ancla ?? post.data.title.split(':')[0]?.trim() ?? post.data.title;
}

export function postsPorSlug(posts: readonly Post[], slugs: readonly string[]) {
  const porSlug = new Map(posts.map((post) => [post.id, post]));
  return slugs.flatMap((slug) => {
    const post = porSlug.get(slug);
    return post ? [post] : [];
  });
}

export function guiasPorComprador(posts: readonly Post[]) {
  return SEGMENTOS.map((segmento) => ({
    segmento,
    posts: postsPorSlug(posts, GUIAS_POR_COMPRADOR[segmento.slug as keyof typeof GUIAS_POR_COMPRADOR] ?? []),
  })).filter(({ posts }) => posts.length > 0);
}

export function guiasPorNorma(posts: readonly Post[]) {
  const porSlug = new Map(posts.map((post) => [post.id, post]));
  return GUIAS_POR_NORMA.flatMap((guia) => {
    const post = porSlug.get(guia.slug);
    return post ? [{ ...guia, post }] : [];
  });
}

// Texto de enlace con palabra clave para cada sección del catálogo
// (el `nombre` de SECCIONES es corto: «Botas», «Kits»…). Solo se
// publican las que existan en SECCIONES.
const ETIQUETAS_EQUIPO: Record<string, string> = {
  cascos: 'Cascos para bombero',
  'equipo-de-respiracion-autonoma': 'Equipo de respiración autónoma',
  botas: 'Botas para bombero',
  guantes: 'Guantes para bombero',
  capuchas: 'Capuchas y monjas para bombero',
  accesorios: 'Accesorios para bombero',
  herramientas: 'Herramientas para bombero',
  rescate: 'Equipo de rescate para bomberos',
  'mangueras-y-accesorios': 'Mangueras contra incendio',
  kits: 'Kits de equipo para bombero',
};

/** Secciones del catálogo (sin «marcas») con texto de enlace SEO. */
export function equipoCatalogo(): EnlaceEquipo[] {
  return SECCIONES.filter((seccion) => seccion.slug !== 'marcas').map((seccion) => ({
    nombre: ETIQUETAS_EQUIPO[seccion.slug] ?? seccion.nombre,
    href: `/${seccion.slug}/`,
  }));
}

export function equipoDeArticulo(post: Post): EnlaceEquipo[] {
  const enlaces: EnlaceEquipo[] = [];
  const agregar = (nombre: string, href: string) => {
    if (!enlaces.some((enlace) => enlace.href === href)) enlaces.push({ nombre, href });
  };
  const familia = PRODUCT_CATEGORIES.find((categoria) => categoria.slug === post.data.familia);
  if (familia) agregar(familia.nombre, `/trajes/${familia.slug}/`);

  const texto = ` ${normalizar([post.data.title, ...post.data.keywords].join(' '))} `;
  const temas = [
    { palabras: ['casco'], slug: 'cascos' },
    { palabras: ['bota'], slug: 'botas' },
    { palabras: ['respiracion', ' era '], slug: 'equipo-de-respiracion-autonoma' },
    { palabras: ['guante'], slug: 'guantes' },
    { palabras: ['capucha', 'monja'], slug: 'capuchas' },
    { palabras: ['rescate', 'extricacion'], slug: 'rescate' },
    { palabras: ['kit'], slug: 'kits' },
  ];
  temas
    .filter(({ palabras }) => palabras.some((palabra) => texto.includes(palabra)))
    .forEach(({ slug }) => {
      const seccion = SECCIONES.find((item) => item.slug === slug);
      if (seccion) agregar(ETIQUETAS_EQUIPO[seccion.slug] ?? seccion.nombre, `/${seccion.slug}/`);
    });
  ['cascos', 'botas', 'guantes', 'equipo-de-respiracion-autonoma'].forEach((slug) => {
    const seccion = SECCIONES.find((item) => item.slug === slug);
    if (seccion && enlaces.length < 4) agregar(ETIQUETAS_EQUIPO[seccion.slug] ?? seccion.nombre, `/${seccion.slug}/`);
  });

  return enlaces.slice(0, 4);
}
