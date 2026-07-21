// ============================================================
// BLOG — helpers de la colección. Toda página del blog lee de
// aquí: nada de getCollection suelto en las páginas, para que
// el orden, el filtro de borradores y las URLs se definan en
// un solo lugar (misma disciplina que familias.ts).
// ============================================================
import { getCollection, type CollectionEntry } from 'astro:content';
import { BLOG_CATEGORIES, blogCategoria } from '@config/site';

export type Post = CollectionEntry<'blog'>;

/** Todos los artículos publicados, del más reciente al más viejo. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.fecha.valueOf() - a.data.fecha.valueOf());
}

/** Artículos de una categoría, ya ordenados. */
export async function getPostsByCategoria(slug: string): Promise<Post[]> {
  const posts = await getPosts();
  return posts.filter((p) => p.data.categoria === slug);
}

/** URL canónica de un artículo. Nunca se escribe a mano. */
export function postUrl(post: Post): string {
  return `/blog/${post.id}/`;
}

export function categoriaUrl(slug: string): string {
  return `/blog/categoria/${slug}/`;
}

export function categoriaNombre(slug: string): string {
  return blogCategoria(slug)?.nombre ?? slug;
}

/** Conteo por categoría, para el sidebar y el índice. */
export async function categoriasConConteo() {
  const posts = await getPosts();
  return BLOG_CATEGORIES.map((c) => ({
    ...c,
    total: posts.filter((p) => p.data.categoria === c.slug).length,
  }));
}

/** Fecha larga en español de México: "14 de julio de 2026". */
export function formatFecha(d: Date): string {
  return new Intl.DateTimeFormat('es-MX', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(d);
}

/** Fecha corta para las tarjetas: "14 jul 2026". */
export function formatFechaCorta(d: Date): string {
  return new Intl.DateTimeFormat('es-MX', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(d).replace('.', '');
}

/** ISO sin hora, para datetime y JSON-LD. */
export function isoFecha(d: Date): string {
  return d.toISOString().split('T')[0];
}

export function wordCount(body = ''): number {
  return body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/[#>*_`\-|]/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
}

/** Lectura estimada a 200 palabras por minuto, mínimo 1. */
export function readingTime(body = ''): number {
  return Math.max(1, Math.round(wordCount(body) / 200));
}

/**
 * Relacionados: primero misma familia de traje, luego misma
 * categoría, y si falta, se rellena con los más recientes.
 */
export async function relatedPosts(current: Post, limit = 3): Promise<Post[]> {
  const posts = (await getPosts()).filter((p) => p.id !== current.id);
  const score = (p: Post) =>
    (p.data.familia && p.data.familia === current.data.familia ? 2 : 0) +
    (p.data.categoria === current.data.categoria ? 1 : 0);
  return posts
    .map((p) => ({ p, s: score(p) }))
    .sort((a, b) => b.s - a.s || b.p.data.fecha.valueOf() - a.p.data.fecha.valueOf())
    .slice(0, limit)
    .map((x) => x.p);
}
