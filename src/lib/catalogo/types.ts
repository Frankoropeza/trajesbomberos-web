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
  h2: string;
  parrafos: string[];
  lista?: string[];
}

export interface Seccion {
  slug: string;
  nombre: string;
  h1: string;
  title: string;
  description: string;
  eyebrow: string;
  lead: string;
  intro: string[];
  grupos?: { titulo: string; tipos: string[] }[];
  faq: { q: string; a: string }[];
  hero?: HeroImage;
  checklistCompra?: { titulo: string; parrafos: string[] };
  leyendaImagenIlustrativa?: string;
  /** Columna derecha del hero del hub (1–2 párrafos, distintos de `lead` e `intro`). */
  resumenHero?: string[];
  /** Encabezados propios del hub (sustituyen a los textos genéricos de la plantilla). */
  etiquetas?: {
    menuTipos?: string;
    tiposEyebrow?: string; tiposTitulo?: string; tiposDescripcion?: string;
    elegirTitulo?: string; elegirDescripcion?: string;
    modelosTitulo?: string; modelosDescripcion?: string;
  };
  /** Tabla comparativa del hub: la primera columna es el nombre del tipo. */
  comparativa?: { columnas: string[]; filas: string[][] };
  /** Criterios de compra del hub. */
  criterios?: { titulo: string; items: { termino: string; texto: string }[] };
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
}
