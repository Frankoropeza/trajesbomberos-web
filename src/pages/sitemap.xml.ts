// /sitemap.xml — GitHub Pages no admite redirecciones, así que se sirve
// un índice de sitemaps real que apunta a los que genera @astrojs/sitemap.
// (robots.txt sigue declarando /sitemap-index.xml; ambos son válidos.)
import type { APIRoute } from 'astro';
import { SITE } from '@config/site';

export const GET: APIRoute = () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>${SITE.url}/sitemap-0.xml</loc></sitemap>
</sitemapindex>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
