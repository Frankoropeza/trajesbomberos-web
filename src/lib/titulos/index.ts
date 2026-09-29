// Títulos de sección en dos columnas (H2 a la izquierda; a la derecha dos párrafos de SEO y marketing).
// Los textos viven en los archivos de datos de esta carpeta (los redacta y revisa el equipo de contenido);
// las plantillas solo los consumen. Si falta una clave, la plantilla cae a la `description` de siempre.
import { DUO_FAMILIAS_A } from './familias-a';
import { DUO_FAMILIAS_B } from './familias-b';

export type Duo = [string, string];

const FAMILIAS: Record<string, Record<string, Duo>> = { ...DUO_FAMILIAS_A, ...DUO_FAMILIAS_B };

/** /trajes/<familia>/ — claves: cotiza · pedir · conjunto · marcas · modelos · faq · otras */
export const duoFamilia = (slug: string, clave: string): Duo | undefined => FAMILIAS[slug]?.[clave];

