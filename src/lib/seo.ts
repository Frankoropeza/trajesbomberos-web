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
  return 'Trajes para bomberos: estructural, brigadista, forestal y de aproximación. Equipo contra incendios con ficha técnica, factura y envíos a todo México.';
}

export interface MetaAuditResult {
  ok: boolean;
  problems: string[];
}

// Valida la regla: longitudes, kw1 primero, tokens repetidos
export function metaAudit(
  title: string,
  description: string,
  kws: readonly string[] = KEYWORDS,
): MetaAuditResult {
  const problems: string[] = [];
  const kw1 = kws[0].toLowerCase();
  if (title.length > 60) problems.push(`Title de ${title.length} chars: pasa de 60.`);
  if (description.length > 160) problems.push(`Description de ${description.length} chars: pasa de 160.`);
  if (!title.toLowerCase().startsWith(kw1)) problems.push('El title no abre con kw1.');
  if (!description.toLowerCase().startsWith(kw1)) problems.push('La description no abre con kw1.');
  if (title.toLowerCase().includes(SITE.name.toLowerCase()))
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
    telephone: CONTACT.telefonoHref,
    email: CONTACT.email,
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
  datePublished: string;      // ISO
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
    datePublished: a.datePublished,
    dateModified: a.dateModified ?? a.datePublished,
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

// Product para fichas L4. Sin offers ni aggregateRating: no
// publicamos precios y nunca fabricamos reseñas (regla dura).
export function productSchema(p: {
  nombre: string;
  descripcion: string;
  imagen: string;
  categoria: string;
  url: string;
}): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: p.nombre,
    description: p.descripcion,
    image: new URL(p.imagen, SITE.url).href,
    category: p.categoria,
    url: new URL(p.url, SITE.url).href,
    brand: { '@type': 'Brand', name: SITE.name },
  };
}

export interface SchemaInput {
  pageType: PageType;
  faqs?: { q: string; a: string }[];
  directoryItems?: { name: string; url: string }[];
  breadcrumbs?: { name: string; href: string }[];
  article?: ArticleInput;
  product?: { nombre: string; descripcion: string; imagen: string; categoria: string; url: string };
}

// ÚNICO emisor (regla B3) — solo BaseLayout lo llama.
export function buildSchema(input: SchemaInput): object[] {
  const schemas: object[] = [organizationSchema()];
  if (input.pageType === 'home') schemas.push(webSiteSchema());
  if (input.breadcrumbs?.length) schemas.push(breadcrumbSchema(input.breadcrumbs));
  if (input.directoryItems?.length) schemas.push(directorySchema(input.directoryItems));
  if (input.article) schemas.push(articleSchema(input.article));
  if (input.product) schemas.push(productSchema(input.product));
  if (input.faqs?.length) schemas.push(faqSchema(input.faqs));
  return schemas;
}
