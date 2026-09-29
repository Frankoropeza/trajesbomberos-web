// Títulos de sección en dos columnas (H2 a la izquierda; a la derecha dos párrafos de SEO y marketing).
// Los textos viven en los archivos de datos de esta carpeta (los redacta y revisa el equipo de contenido);
// las plantillas solo los consumen. Si falta una clave, la plantilla cae a la `description` de siempre.
import { DUO_TRAJES } from './trajes';
import { DUO_FAMILIAS_A } from './familias-a';
import { DUO_FAMILIAS_B } from './familias-b';
import { DUO_SECCIONES_A } from './secciones-a';
import { DUO_SECCIONES_B } from './secciones-b';

export type Duo = [string, string];

const FAMILIAS: Record<string, Record<string, Duo>> = { ...DUO_FAMILIAS_A, ...DUO_FAMILIAS_B };
const SECCIONES: Record<string, Record<string, Duo>> = { ...DUO_SECCIONES_A, ...DUO_SECCIONES_B };

/** /trajes/ — claves: familias · afondo · modelos · comparativa · faq · blog */
export const duoTrajes = (clave: string): Duo | undefined => DUO_TRAJES[clave];

/** /trajes/<familia>/ — claves: cotiza · pedir · conjunto · marcas · modelos · faq · otras */
export const duoFamilia = (slug: string, clave: string): Duo | undefined => FAMILIAS[slug]?.[clave];

/** /<seccion>/ (hubs del catálogo) — claves: tipos · fichas · elegir · modelos · faq */
export const duoSeccion = (slug: string, clave: string): Duo | undefined => SECCIONES[slug]?.[clave];
