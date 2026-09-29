import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
  site: 'https://trajesbomberos.com',
  trailingSlash: 'ignore',
  integrations: [mdx(), sitemap()],
  markdown: {
    rehypePlugins: [
      // Fuentes citadas en el blog: se abren aparte y no reparten
      // autoridad (nofollow). Solo afecta enlaces externos.
      [rehypeExternalLinks, { target: '_blank', rel: ['nofollow', 'noopener'] }],
    ],
  },
  build: {
    format: 'directory',
    // CSS en línea en cada página (~55 KB sin comprimir). Medido el 2026-09-29
    // contra 'auto' (CSS externo con hash): 'always' gana en primera visita
    // (FCP 1.1 s vs 1.5 s móvil, Lighthouse 100 vs 99) porque GitHub Pages sirve
    // todo con max-age=600 y la hoja externa bloquea el render. Revisar solo si
    // el sitio migra a Cloudflare Pages (caché inmutable de /_astro/).
    inlineStylesheets: 'always',
  },
});
