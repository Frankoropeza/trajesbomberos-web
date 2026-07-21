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
  },
});
