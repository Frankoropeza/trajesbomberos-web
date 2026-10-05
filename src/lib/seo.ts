import { SITE, CONTACT, KEYWORDS, DIRECCION, MARCA } from '@config/site';
import { ENTIDADES } from '@lib/directorio';

// ============================================================
// SEO centralizado (regla B3: UN solo emisor de schema por
// página — buildSchema, invocado únicamente desde BaseLayout).
// Regla dura: cero aggregateRating / reseñas fabricadas.
// ============================================================

export type PageType = 'home' | 'directorio' | 'producto' | 'articulo' | 'generic';

// --- Regla de las 3 keywords -------------------------------

// title = frase natural con kw1 al inicio, sin marca, sin «|» ni «México», ≤60
// Tanda de metas (2026-09-29): el title por defecto ya no apila keywords con «|»;
// es el title de la home, en frase natural y sin «México».
export function buildKeywordTitle(_kws: readonly string[] = KEYWORDS): string {
  return 'Trajes para bomberos profesionales y equipo contra incendio';
}

// description abre con kw1 y teje las 3 sin sobreoptimizar, ≤160
export function buildKeywordDescription(): string {
  return 'Venta de trajes para bomberos estructurales, forestales, de brigadista y aluminizados, con ficha técnica por pieza o conjunto completo. Cotiza en día hábil.';
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
  // Tanda de metas (2026-09-29, decisión de Frank): title en frase natural, sin «|» y sin
  // «México» (se permite solo como nombre de estado: Ciudad de México, Estado de México).
  if (title.includes('|')) problems.push('El title lleva «|»: la regla pide una frase natural sin pipes.');
  if (/méxico/i.test(title.replace(/(Ciudad|Estado) de México/g, '')))
    problems.push('El title lleva «México»: la regla lo prohíbe salvo como nombre de estado.');
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
    slogan: MARCA.lema,
    url: SITE.url,
    // Capa de entidad (Estrategia Tier v1.1 · O3): fichas de LORICA en directorios
    // con el mismo NAP. Cuando existan GBP y redes, se añaden aquí (nota 52 del vault).
    sameAs: [
      'https://eurek.com.mx/equipo-contra-incendios/ciudad-de-mexico/lorica/',
      'https://cdmx.site/categorias/proteccion-contra-incendios/lorica/',
    ],
    description:
      'Venta de trajes para bomberos y equipo de protección contra incendios en México: estructural, brigadista, forestal, aproximación, entrada y extricación.',
    logo: {
      '@type': 'ImageObject',
      url: `${SITE.url}/images/marca/lorica-logo-512.png`,
      width: 512,
      height: 512,
    },
    telephone: CONTACT.telefonoHref,
    email: CONTACT.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${DIRECCION.calle}, Col. ${DIRECCION.colonia}`,
      addressLocality: DIRECCION.alcaldia,
      addressRegion: DIRECCION.ciudad,
      postalCode: DIRECCION.cp,
      addressCountry: DIRECCION.pais,
    },
    // hasMap no es propiedad de Organization (Ahrefs Site Audit: «Propiedad inesperada»);
    // va dentro de un Place en `location`, que sí la admite.
    location: {
      '@type': 'Place',
      name: SITE.legalName,
      address: {
        '@type': 'PostalAddress',
        streetAddress: `${DIRECCION.calle}, Col. ${DIRECCION.colonia}`,
        addressLocality: DIRECCION.alcaldia,
        addressRegion: DIRECCION.ciudad,
        postalCode: DIRECCION.cp,
        addressCountry: DIRECCION.pais,
      },
      hasMap: DIRECCION.mapsUrl,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone: CONTACT.telefonoHref,
      email: CONTACT.email,
      areaServed: 'MX',
      availableLanguage: ['es'],
      // Mismo horario que la barra superior (CONTACT.horario: Lun–Vie 9:00–18:00).
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    },
    areaServed: [
      { '@type': 'Country', name: 'México' },
      ...ENTIDADES.map((entidad) => ({ '@type': 'State', name: entidad.nombre })),
    ],
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
export function directorySchema(items: { name: string; url: string }[], id?: string): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    ...(id ? { '@id': id } : {}),
    numberOfItems: items.length,
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

// Product (AEO ZeroRank, 2026-09-29). Describe la pieza o el modelo con los
// datos que la ficha ya muestra. SIN offers, SIN precio, SIN aggregateRating
// ni review: el sitio no publica precios y no hay reseñas reales (regla B4).
// Google marca un Product sin offers/review/aggregateRating como no apto para
// fragmento de producto; se acepta: el objetivo es la entidad legible por IA,
// no el rich result. brand/manufacturer solo cuando la ficha es de un modelo
// de marca (nunca LORICA sobre piezas genéricas).
export interface ProductoInput {
  name: string;
  description: string;
  url: string;
  image?: string;
  category: string;
  brand?: string;
  manufacturer?: string;
  model?: string;
  mpn?: string;
  propiedades?: { name: string; value: string }[];
  /** Kits: componentes de referencia con ficha propia. */
  componentes?: { name: string; url: string }[];
}

export function productoSchema(p: ProductoInput): object {
  const url = new URL(p.url, SITE.url).href;
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${url}#product`,
    url,
    name: p.name,
    description: p.description,
    ...(p.image ? { image: new URL(p.image, SITE.url).href } : {}),
    category: p.category,
    ...(p.brand ? { brand: { '@type': 'Brand', name: p.brand } } : {}),
    ...(p.manufacturer ? { manufacturer: { '@type': 'Organization', name: p.manufacturer } } : {}),
    ...(p.model ? { model: p.model } : {}),
    ...(p.mpn ? { mpn: p.mpn } : {}),
    ...(p.propiedades?.length
      ? { additionalProperty: p.propiedades.map((x) => ({ '@type': 'PropertyValue', name: x.name, value: x.value })) }
      : {}),
    ...(p.componentes?.length
      ? { isRelatedTo: p.componentes.map((c) => ({ '@type': 'Product', name: c.name, url: new URL(c.url, SITE.url).href, '@id': `${new URL(c.url, SITE.url).href}#product` })) }
      : {}),
    mainEntityOfPage: { '@id': `${url}#webpage` },
  };
}

// Filtra filas de ficha técnica a propiedades del producto (no datos de compra).
const PROP_PRODUCTO = /\buso\b|norma|referencia|certific|estatus|capa|barrera|material|composite|tpp|thl|talla|peso|nivel|color|exterior|forro|suela|puntera|clase|protecci|cumplimiento|c[oó]digo|marca|fabricante|longitud|di[aá]metro|presi[oó]n|capacidad|duraci[oó]n|visor|cierre|conexi|rosca|largo|ancho/i;
export function propiedadesDeFicha(filas: { campo: string; valor: string }[]): { name: string; value: string }[] {
  const vistos = new Set<string>();
  return filas
    .filter((f) => PROP_PRODUCTO.test(f.campo) && f.valor && !vistos.has(f.campo) && vistos.add(f.campo))
    .map((f) => ({ name: f.campo, value: f.valor }));
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
  producto?: ProductoInput;
  estaciones?: EstacionSchema[];
  webApplication?: {
    name: string;
    url: string;
    description: string;
    inLanguage?: string;
    datePublished?: string;
    dateModified?: string;
    citation?: object[];
  };
}

// ÚNICO emisor (regla B3) — solo BaseLayout lo llama.
// Grafo enlazado por @id: CollectionPage.mainEntity → ItemList;
// ItemPage.mainEntity → Product (cuando la ficha declara producto).
export function buildSchema(input: SchemaInput): object[] {
  const schemas: object[] = [organizationSchema()];
  if (input.pageType === 'home') schemas.push(webSiteSchema());
  if (input.breadcrumbs?.length) schemas.push(breadcrumbSchema(input.breadcrumbs));
  const colUrl = input.collection ? new URL(input.collection.url, SITE.url).href : undefined;
  const listId = colUrl && input.directoryItems?.length ? `${colUrl}#itemlist` : undefined;
  if (input.directoryItems?.length) schemas.push(directorySchema(input.directoryItems, listId));
  if (input.article) schemas.push(articleSchema(input.article));
  const conProducto = (o: object): object =>
    input.producto ? { ...o, mainEntity: { '@id': `${new URL(input.producto.url, SITE.url).href}#product` } } : o;
  if (input.product) schemas.push(conProducto(productSchema(input.product)));
  if (input.collection) {
    const c = collectionPageSchema(input.collection);
    schemas.push(listId ? { ...c, mainEntity: { '@id': listId } } : c);
  }
  if (input.item) schemas.push(conProducto(itemPageSchema(input.item)));
  if (input.producto) schemas.push(productoSchema(input.producto));
  if (input.estaciones?.length) schemas.push(fireStationListSchema(input.estaciones));
  if (input.webApplication) {
    const appUrl = new URL(input.webApplication.url, SITE.url).href;
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      '@id': `${appUrl}#webapplication`,
      name: input.webApplication.name,
      url: appUrl,
      description: input.webApplication.description,
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'Web',
      isAccessibleForFree: true,
      inLanguage: input.webApplication.inLanguage ?? SITE.lang,
      ...(input.webApplication.datePublished ? { datePublished: input.webApplication.datePublished } : {}),
      ...(input.webApplication.dateModified ? { dateModified: input.webApplication.dateModified } : {}),
      author: { '@id': `${SITE.url}/#organization` },
      publisher: { '@id': `${SITE.url}/#organization` },
      ...(input.webApplication.citation?.length ? { citation: input.webApplication.citation } : {}),
    });
  }
  if (input.faqs?.length) schemas.push(faqSchema(input.faqs));
  return schemas;
}
