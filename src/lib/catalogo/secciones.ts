import { SECCIONES } from './data';

export { SECCIONES };
export const getSeccion = (slug: string) => SECCIONES.find((seccion) => seccion.slug === slug);
