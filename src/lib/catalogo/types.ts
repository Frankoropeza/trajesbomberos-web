export interface HeroImage {
  src: string;
  alt: string;
}

export interface Imagen extends HeroImage {
  width: number;
  height: number;
  origen: 'proveedor' | 'ia' | 'banco';
  credito?: string;
  licencia?: string;
}

export interface Bloque {
  /** Eyebrow del título en dos columnas; ancla opcional para el menú de sección. */
  eyebrow?: string;
  id?: string;
  h2: string;
  parrafos: string[];
  lista?: string[];
}

export interface Seccion {
  slug: string;
  nombre: string;
  /** Imagen de cabecera que heredan las fichas de tipo y modelo de la sección. */
  hero?: HeroImage;
  leyendaImagenIlustrativa?: string;
  // El texto del hub (metas, hero, secciones, tablas, FAQ) vive en src/content/categorias/<slug>.md.
}

export interface Tipo {
  slug: string;
  seccion: string;
  nombre: string;
  nombreCard: string;
  title: string;
  description: string;
  lead: string;
  bloques: Bloque[];
  especificacion?: { campo: string; valor: string; nota?: string }[];
  normas?: { norma: string; alcance: string }[];
  errores?: string[];
  faq: { q: string; a: string }[];
  imagen?: Imagen;
  relacionados?: string[];
  chips?: string[];
  resumen?: string[];
  /** Dúos (dos párrafos a la derecha del título) de los módulos de la ficha de tipo. */
  duos?: Partial<Record<'ficha' | 'errores' | 'modelos' | 'kit' | 'faq', [string, string]>>;
}

export interface Modelo {
  id: string;
  /** SEO propio (≤ 60 / 130–160 car.). Si falta, la plantilla lo compone. */
  title?: string;
  description?: string;
  seccion: string;
  tipo?: string;
  familia?: string;
  marca: string;
  fabricante: string;
  nombre: string;
  codigo?: string;
  codigoNota?: string;
  capaExterior?: string;
  material?: string;
  barreras?: string;
  colores?: string;
  norma?: string;
  estatusNorma: 'certificado-ul' | 'declarado' | 'equivalente' | 'materiales' | 'niosh' | 'sin-norma' | 'no-aplica';
  certificacion?: string;
  tallas?: string;
  peso?: string;
  caracteristicas: string[];
  descripcion: string[];
  faq: { q: string; a: string }[];
  imagen?: Imagen;
  imagenesExtra?: Imagen[];
  chips?: string[];
  resumen?: string[];
  /** Nota de compra específica del modelo, cuando sustituye el enlace genérico del catálogo. */
  notaCompra?: string;
  /** Enlaces contextuales a piezas de la familia (solo modelos de traje). */
  relacionados?: { label: string; href: string }[];
}
