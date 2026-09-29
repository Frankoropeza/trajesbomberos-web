import { SITE, CONTACT, KEYWORDS } from '@config/site';

// ============================================================
// SEO centralizado (regla B3: UN solo emisor de schema por
// página — buildSchema, invocado únicamente desde BaseLayout).
// Regla dura: cero aggregateRating / reseñas fabricadas.
// ============================================================

export type PageType = 'home' | 'directorio' | 'producto' | 'articulo' | 'generic';

// --- Regla de las 3 keywords -------------------------------

// title = "Kw1 | kw2 | kw3" — kw1 primero, sin marca, ≤60
export function buildKeywordTitle(kws: readonly string[] = KEYWORDS): string {
  const [kw1, ...rest] = kws;
  const cap = kw1.charAt(0).toUpperCase() + kw1.slice(1);
  return [cap, ...rest].join(' | ');
}

// description abre con kw1 y teje las 3 sin sobreoptimizar, ≤160
export function buildKeywordDescription(): string {
  return 'Trajes para bomberos y trajes de bombero profesional: estructural, brigadista, forestal y de aproximación. Modelos Romak Fire y Sköld con ficha técnica. México.';
}

export interface MetaAuditResult {
  ok: boolean;
  problems: string[];
}

// Valida la regla POR PÁGINA: longitudes, kw1 (la de la página, no la del
// sitio) al inicio del title y presente en la description, tokens repetidos.
// Si la página no declara keywords, kw1 = primer segmento del title.
// `permitirMarca`: legales y 404 llevan la marca en el title a propósito.
export function metaAudit(
  title: string,
  description: string,
  kws?: readonly string[],
  opts: { permitirMarca?: boolean } = {},
): MetaAuditResult {
  const problems: string[] = [];
  const kw1 = (kws?.[0] ?? title.split('|')[0]).trim().toLowerCase();
  // Sustantivo núcleo: primera palabra de ≥ 4 letras de kw1, sin puntuación («goggles», «casco», «traje»).
  const nucleo = kw1.replace(/[^\p{L}\p{N}\s-]/gu, ' ').split(/\s+/).find((t) => t.length >= 4) ?? kw1;
  if (title.length > 60) problems.push(`Title de ${title.length} chars: pasa de 60.`);
  if (description.length > 160) problems.push(`Description de ${description.length} chars: pasa de 160.`);
  if (description.length < 70) problems.push(`Description de ${description.length} chars: menos de 70.`);
  if (!title.toLowerCase().startsWith(kw1)) problems.push(`El title no abre con kw1 («${kw1}»).`);
  if (!description.toLowerCase().includes(nucleo)) problems.push(`La description no menciona «${nucleo}».`);
  if (!opts.permitirMarca && title.toLowerCase().includes(SITE.name.toLowerCase()))
    problems.push('El title incluye la marca: la regla pide title sin marca.');
  const tokens = title.toLowerCase().split(/[^a-záéíóúñ]+/).filter((t) => t.length > 3);
  const dupes = tokens.filter((t, i) => tokens.indexOf(t) !== i);
  if (new Set(dupes).size > 2) problems.push(`Tokens repetidos en title: ${[...new Set(dupes)].join(', ')}.`);
  return { ok: problems.length === 0, problems };
}

// --- JSON-LD ------------------------------------------------

export function organizationSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE.url}/#organization`,
    name: SITE.legalName,
    alternateName: SITE.name,
    url: SITE.url,
    description:
      'Venta de trajes para bomberos y equipo de protección contra incendios en México: estructural, brigadista, forestal, aproximación, entrada y extricación.',
    logo: {
      '@type': 'ImageObject',
      url: `${SITE.url}/images/marca/logo-trajesbombero-512.png`,
      width: 512,
      height: 512,
    },
    telephone: CONTACT.telefonoHref,
    email: CONTACT.email,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone: CONTACT.telefonoHref,
      email: CONTACT.email,
      areaServed: 'MX',
      availableLanguage: ['es'],
    },
    areaServed: { '@type': 'Country', name: 'México' },
    knowsAbout: [
      'Trajes para bomberos',
      'Equipo de protección personal contra incendios',
      'NFPA 1970',
      'NFPA 1850',
      'NOM-017-STPS-2024',
      'NOM-002-STPS-2010',
    ],
  };
}

function webSiteSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    inLanguage: SITE.lang,
    publisher: { '@id': `${SITE.url}/#organization` },
  };
}

// ItemList para grids/directorios (lo emite el padre, no las cards)
export function directorySchema(items: { name: string; url: string }[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      url: item.url,
    })),
  };
}

// Directorio: ItemList de estaciones como FireStation (solo campos con fuente)
export interface EstacionSchema {
  name: string; url: string; locality: string; region: string;
  lat?: number; lng?: number; telephone?: string; street?: string; sameAs?: string;
}
export function fireStationListSchema(xs: EstacionSchema[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    numberOfItems: xs.length,
    itemListElement: xs.map((x, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'FireStation',
        '@id': x.url,
        name: x.name,
        url: x.url,
        address: {
          '@type': 'PostalAddress',
          ...(x.street ? { streetAddress: x.street } : {}),
          addressLocality: x.locality,
          addressRegion: x.region,
          addressCountry: 'MX',
        },
        ...(x.lat != null && x.lng != null ? { geo: { '@type': 'GeoCoordinates', latitude: x.lat, longitude: x.lng } } : {}),
        ...(x.telephone ? { telephone: x.telephone } : {}),
        ...(x.sameAs ? { sameAs: x.sameAs } : {}),
      },
    })),
  };
}

// Migas: se generan desde la ruta, nunca se escriben a mano
export function breadcrumbSchema(items: { name: string; href: string }[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: new URL(item.href, SITE.url).href,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

// Artículo del blog. Sin author ficticio y sin aggregateRating:
// el autor es la organización, que es lo que realmente responde
// por el contenido técnico (regla B4).
export interface ArticleInput {
  headline: string;
  description: string;
  url: string;
  datePublished?: string;     // ISO. El blog es atemporal: no se envía.
  dateModified?: string;      // ISO
  image?: string;
  section?: string;
  keywords?: readonly string[];
  wordCount?: number;
}

export function articleSchema(a: ArticleInput): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${a.url}#article`,
    headline: a.headline,
    description: a.description,
    url: a.url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': a.url },
    ...(a.datePublished ? { datePublished: a.datePublished } : {}),
    ...(a.dateModified || a.datePublished ? { dateModified: a.dateModified ?? a.datePublished } : {}),
    inLanguage: SITE.lang,
    isAccessibleForFree: true,
    author: { '@id': `${SITE.url}/#organization` },
    publisher: { '@id': `${SITE.url}/#organization` },
    ...(a.image ? { image: a.image } : {}),
    ...(a.section ? { articleSection: a.section } : {}),
    ...(a.keywords?.length ? { keywords: a.keywords.join(', ') } : {}),
    ...(a.wordCount ? { wordCount: a.wordCount } : {}),
  };
}

// Fichas L4 como ItemPage (no Product): el sitio no publica precios
// ni reseñas, y un Product sin offers/review/aggregateRating es
// inválido para Google. ItemPage describe la ficha sin afirmar una
// oferta ni una marca propia sobre piezas genéricas.
export function productSchema(p: {
  nombre: string;
  descripcion: string;
  imagen: string;
  categoria: string;
  url: string;
}): object {
  const url = new URL(p.url, SITE.url).href;
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemPage',
    '@id': `${url}#webpage`,
    url,
    name: p.nombre,
    description: p.descripcion,
    inLanguage: SITE.lang,
    isPartOf: { '@id': `${SITE.url}/#website` },
    publisher: { '@id': `${SITE.url}/#organization` },
    primaryImageOfPage: { '@type': 'ImageObject', url: new URL(p.imagen, SITE.url).href },
    about: { '@type': 'Thing', name: p.nombre, description: p.descripcion },
    genre: p.categoria,
  };
}

export function collectionPageSchema(c: { name: string; description: string; url: string }): object {
  const url = new URL(c.url, SITE.url).href;
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${url}#webpage`,
    url,
    name: c.name,
    description: c.description,
    inLanguage: SITE.lang,
    isPartOf: { '@id': `${SITE.url}/#website` },
    publisher: { '@id': `${SITE.url}/#organization` },
  };
}

export function itemPageSchema(i: { name: string; description: string; image?: string; category: string; url: string }): object {
  const url = new URL(i.url, SITE.url).href;
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemPage',
    '@id': `${url}#webpage`,
    url,
    name: i.name,
    description: i.description,
    inLanguage: SITE.lang,
    isPartOf: { '@id': `${SITE.url}/#website` },
    publisher: { '@id': `${SITE.url}/#organization` },
    ...(i.image ? { primaryImageOfPage: { '@type': 'ImageObject', url: new URL(i.image, SITE.url).href } } : {}),
    about: { '@type': 'Thing', name: i.name, description: i.description },
    genre: i.category,
  };
}

export interface SchemaInput {
  pageType: PageType;
  faqs?: { q: string; a: string }[];
  directoryItems?: { name: string; url: string }[];
  breadcrumbs?: { name: string; href: string }[];
  article?: ArticleInput;
  product?: { nombre: string; descripcion: string; imagen: string; categoria: string; url: string };
  collection?: { name: string; description: string; url: string };
  item?: { name: string; description: string; image?: string; category: string; url: string };
  estaciones?: EstacionSchema[];
}

// ÚNICO emisor (regla B3) — solo BaseLayout lo llama.
export function buildSchema(input: SchemaInput): object[] {
  const schemas: object[] = [organizationSchema()];
  if (input.pageType === 'home') schemas.push(webSiteSchema());
  if (input.breadcrumbs?.length) schemas.push(breadcrumbSchema(input.breadcrumbs));
  if (input.directoryItems?.length) schemas.push(directorySchema(input.directoryItems));
  if (input.article) schemas.push(articleSchema(input.article));
  if (input.product) schemas.push(productSchema(input.product));
  if (input.collection) schemas.push(collectionPageSchema(input.collection));
  if (input.item) schemas.push(itemPageSchema(input.item));
  if (input.estaciones?.length) schemas.push(fireStationListSchema(input.estaciones));
  if (input.faqs?.length) schemas.push(faqSchema(input.faqs));
  return schemas;
}
