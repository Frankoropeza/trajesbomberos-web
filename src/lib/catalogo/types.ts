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
}

export interface Modelo {
  id: string;
  seccion: string;
  tipo?: string;
  familia?: string;
  marca: string;
  fabricante: string;
  nombre: string;
  codigo?: string;
  codigoNota?: string;
  capaExterior?: string;
  barreras?: string;
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
}
