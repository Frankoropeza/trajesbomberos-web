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

export const collections = { productos };
