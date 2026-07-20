import { SITE } from '@config/site';

export type PageType = 'home' | 'productos' | 'producto' | 'contacto' | 'nosotros' | 'generic';

export interface SeoInput {
  pageType: PageType;
  title?: string;
  description?: string;
  path?: string;          // ruta absoluta del sitio, p.ej. '/productos/traje-x/'
  image?: string;
  producto?: {
    nombre: string;
    descripcion: string;
    marca?: string;
    imagen?: string;
  };
}

export function buildSeo(input: SeoInput) {
  const title = input.title ? `${input.title} | ${SITE.name}` : SITE.title;
  const description = input.description ?? SITE.description;
  const canonical = new URL(input.path ?? '/', SITE.url).href;
  const image = new URL(input.image ?? '/img/og-default.jpg', SITE.url).href;
  return { title, description, canonical, image, jsonLd: buildJsonLd(input, canonical) };
}

// JSON-LD por pageType. Regla dura: cero aggregateRating / reseñas fabricadas.
function buildJsonLd(input: SeoInput, canonical: string): object[] {
  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.legalName,
    url: SITE.url,
    ...(SITE.telefono ? { telephone: SITE.telefono } : {}),
    ...(SITE.email ? { email: SITE.email } : {}),
    areaServed: 'MX',
  };

  switch (input.pageType) {
    case 'home':
      return [
        org,
        {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: SITE.name,
          url: SITE.url,
          inLanguage: SITE.lang,
        },
      ];
    case 'producto': {
      if (!input.producto) return [org];
      const p = input.producto;
      return [
        org,
        {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: p.nombre,
          description: p.descripcion,
          url: canonical,
          ...(p.marca && { brand: { '@type': 'Brand', name: p.marca } }),
          ...(p.imagen && { image: new URL(p.imagen, SITE.url).href }),
        },
      ];
    }
    case 'contacto':
      return [
        {
          ...org,
          '@type': 'LocalBusiness',
          ...(SITE.horario && { openingHours: SITE.horario }),
        },
      ];
    default:
      return [org];
  }
}
