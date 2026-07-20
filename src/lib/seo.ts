import { SITE, CONTACT, KEYWORDS } from '@config/site';

// ============================================================
// SEO centralizado (regla B3: UN solo emisor de schema por
// página — buildSchema, invocado únicamente desde BaseLayout).
// Regla dura: cero aggregateRating / reseñas fabricadas.
// ============================================================

export type PageType = 'home' | 'directorio' | 'producto' | 'generic';

// --- Regla de las 3 keywords -------------------------------

// title = "Kw1 | kw2 | kw3" — kw1 primero, sin marca, ≤60
export function buildKeywordTitle(kws: readonly string[] = KEYWORDS): string {
  const [kw1, ...rest] = kws;
  const cap = kw1.charAt(0).toUpperCase() + kw1.slice(1);
  return [cap, ...rest].join(' | ');
}

// description abre con kw1 y teje las 3 sin sobreoptimizar, ≤160
export function buildKeywordDescription(): string {
  return 'Trajes para bombero estructurales, forestales y de aproximación. Equipo para bomberos: cascos, botas, guantes y SCBA con envíos a todo México. Cotiza hoy.';
}

export interface MetaAuditResult {
  ok: boolean;
  problems: string[];
}

// Valida la regla: longitudes, kw1 primero, tokens repetidos
export function metaAudit(title: string, description: string): MetaAuditResult {
  const problems: string[] = [];
  const kw1 = KEYWORDS[0].toLowerCase();
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
    name: SITE.legalName,
    url: SITE.url,
    telephone: CONTACT.telefonoHref,
    email: CONTACT.email,
    areaServed: 'MX',
  };
}

function webSiteSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
    inLanguage: SITE.lang,
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

export interface SchemaInput {
  pageType: PageType;
  faqs?: { q: string; a: string }[];
  directoryItems?: { name: string; url: string }[];
}

// ÚNICO emisor (regla B3) — solo BaseLayout lo llama.
export function buildSchema(input: SchemaInput): object[] {
  const schemas: object[] = [organizationSchema()];
  if (input.pageType === 'home') schemas.push(webSiteSchema());
  if (input.directoryItems?.length) schemas.push(directorySchema(input.directoryItems));
  if (input.faqs?.length) schemas.push(faqSchema(input.faqs));
  return schemas;
}
