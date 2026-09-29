// Rutas públicas que el header puede enlazar. El conjunto replica las
// fuentes que generan páginas del catálogo y agrega los índices estáticos.
// Mantenerlo aquí evita que el menú publique destinos que Astro no genera.
import { BLOG_CATEGORIES, PRODUCT_CATEGORIES } from '@config/site';
import { MODELOS, SECCIONES, TIPOS } from '@lib/catalogo/data';
import { PIEZAS } from '@lib/piezas';

const posts = Object.keys(import.meta.glob('/src/content/blog/*.md')).map((file) => {
  const slug = file.split('/').pop()?.replace(/\.md$/, '') ?? '';
  return `/blog/${slug}/`;
});

export const RUTAS = new Set<string>([
  '/',
  '/trajes/',
  '/equipo-de-proteccion/',
  '/trajes/hazmat/',
  '/blog/',
  '/empresa/',
  '/contacto/',
  '/marcas/',
  '/estaciones-de-bomberos/',
  '/aviso-de-privacidad/',
  '/terminos-y-condiciones/',
  '/trajes/#modelos',
  '/#faq',
  '/#cotizar',
  ...SECCIONES.map((seccion) => `/${seccion.slug}/`),
  ...TIPOS.map((tipo) => `/${tipo.seccion}/${tipo.slug}/`),
  ...MODELOS.filter((modelo) => modelo.seccion).map((modelo) => `/${modelo.seccion}/${modelo.id}/`),
  ...PRODUCT_CATEGORIES.map((categoria) => `/trajes/${categoria.slug}/`),
  ...PIEZAS.map((pieza) => `/trajes/${pieza.familia}/${pieza.slug}/`),
  ...BLOG_CATEGORIES.map((categoria) => `/blog/categoria/${categoria.slug}/`),
  ...posts,
]);

export const rutaExiste = (href: string) => RUTAS.has(href);
