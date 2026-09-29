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
    ancla: z.string().optional(),             // etiqueta breve del CTA de la tarjeta

    // --- taxonomía ---
    categoria: z.enum([
      'especificacion',
      'normas',
      'comparativas',
      'mantenimiento',
      'licitacion',
      'herramientas-rescate',
      'equipo',
    ]),
    familia: z
      .enum([
        'estructural', 'brigadista', 'forestal', 'aproximacion', 'entrada', 'extricacion', 'hazmat',
      ])
      .optional(),                           // familia de traje relacionada
    productos: z.array(z.string().regex(/^\/[a-z0-9\-\/]*\/$/)).default([]), // rutas del catálogo tratadas

    // --- fechas y autoría ---
    fecha: z.coerce.date(),
    actualizado: z.coerce.date().optional(),
    autor: z.string().default('Equipo técnico LORICA'),

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

const legal = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/legal' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    actualizado: z.coerce.date(),
  }).strict(),
});

// ============================================================
// CATEGORÍAS (L2) — un .md por hub de categoría (/trajes/, …).
// Frontmatter = textos de la página (metas, hero, dúos de sección,
// tablas, FAQ, CTA); cuerpo Markdown = guía «Cómo elegir» con H3/H4.
// La plantilla toma los datos del catálogo (familias, modelos) de
// sus fuentes; aquí solo vive el texto editorial. Esquema estricto:
// una clave desconocida rompe el build.
// ============================================================
const ruta = z.string().regex(/^\/[a-z0-9\-\/]*\/$/);
const duoSeccion = z.object({
  eyebrow: z.string(),
  titulo: z.string(),                        // H2 de la sección
  duo: z.array(z.string().min(120)).length(2),
}).strict();
const enlace = z.object({ label: z.string(), href: ruta }).strict();
const wa = z.object({ label: z.string(), mensaje: z.string().min(20) }).strict();
const tabla = {
  titulo: z.string(),                        // H3 sobre la tabla
  caption: z.string(),                       // <caption> accesible
  nota: z.string(),
};

const categorias = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/categorias' }),
  schema: z.object({
    ruta,
    crumb: z.string(),
    seo: z.object({
      title: z.string().max(65),
      description: z.string().min(110).max(165),
      keywords: z.array(z.string()).length(3),
    }).strict(),
    hero: z.object({
      eyebrow: z.string(),
      h1: z.string(),
      h1Accent: z.string().optional(),
      lead: z.string(),
      descRight: z.array(z.string()).length(2),
      meta: z.array(z.string()).max(4).default([]),
    }).strict(),
    secciones: z.object({
      tipos: duoSeccion,
      elegir: duoSeccion,
      familias: duoSeccion,
      modelos: duoSeccion,
      comparar: duoSeccion,
      faq: duoSeccion,
      guias: duoSeccion,
    }).strict(),
    conjunto: z.object({
      titulo: z.string(),
      intro: z.string(),
      items: z.array(enlace).min(4),
      dato: z.string().optional(),
      cta: enlace,
      wa,
    }).strict(),
    familias: z.array(z.object({
      slug: z.string(),
      leyendas: z.array(z.string()).length(3),
      puntos: z.array(z.object({ titulo: z.string(), texto: z.string() }).strict()).length(4),
    }).strict()).min(1),
    fotoBanda: z.object({
      src: z.string(),
      alt: z.string().min(10),
      width: z.number(),
      height: z.number(),
      caption: z.string(),
    }).strict(),
    comparativaFamilias: z.object({
      ...tabla,
      columnas: z.array(z.string()).min(3),
      filas: z.array(z.array(z.string()).min(3)).min(2),
    }).strict(),
    comparativaModelos: z.object({ ...tabla, wa }).strict(),
    faqs: z.array(z.object({ q: z.string(), a: z.string().min(120) }).strict()).min(6),
    contacto: z.object({ asunto: z.string(), boton: z.string() }).strict(),
    cotizar: z.object({ titulo: z.string(), boton: z.string(), mensaje: z.string().min(20) }).strict(),
  }).strict(),
});

export const collections = { productos, blog, legal, categorias };
