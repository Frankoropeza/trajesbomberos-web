import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const productos = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/productos' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    categoria: z.enum([
      'traje-estructural',
      'traje-forestal',
      'traje-aproximacion',
      'botas',
      'guantes',
      'cascos',
      'equipo-scba',
      'accesorios',
    ]),
    marca: z.string().optional(),
    modelo: z.string().optional(),
    certificaciones: z.array(z.string()).default([]),
    imagen: z.string().optional(),
    imagenAlt: z.string().optional(),
    destacado: z.boolean().default(false),
    orden: z.number().default(99),
    draft: z.boolean().default(false),
  }),
});

// ============================================================
// BLOG — un .md por artículo. El frontmatter respeta la misma
// disciplina que FAMILIAS: title editorial (H1) separado del
// seoTitle, tripleta de keywords explícita y panel del hero
// (lead + descRight) para que el artículo entre con el MISMO
// hero canónico que la home, /trajes/ y las fichas L3.
// ============================================================
const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    // --- editorial ---
    title: z.string(),                       // H1 único de la página
    titleAccent: z.string().optional(),      // parte resaltada del H1
    eyebrow: z.string().optional(),
    lead: z.string(),                        // subtítulo bajo el H1
    descRight: z.array(z.string()).min(1),   // panel derecho del hero
    meta: z.array(z.string()).default([]),   // datos duros del hero
    resumen: z.string(),                     // texto de la tarjeta en el índice

    // --- taxonomía ---
    categoria: z.enum([
      'especificacion',
      'normas',
      'comparativas',
      'mantenimiento',
      'licitacion',
    ]),
    familia: z
      .enum(['estructural', 'brigadista', 'forestal', 'aproximacion', 'entrada', 'extricacion'])
      .optional(),                           // familia de traje relacionada

    // --- fechas y autoría ---
    fecha: z.coerce.date(),
    actualizado: z.coerce.date().optional(),
    autor: z.string().default('Equipo técnico TrajesBombero'),

    // --- SEO (regla de las 3 keywords) ---
    seoTitle: z.string(),
    description: z.string(),
    keywords: z.array(z.string()).length(3),

    // --- media y estado ---
    imagen: z.string().optional(),
    imagenAlt: z.string().optional(),
    destacado: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { productos, blog };
