// Títulos en dos columnas por página (tanda T4, 2026-09-29): fichas de tipo y modelo, piezas de traje,
// blog, empresa, contacto, criterios de los hubs y «Completa el conjunto».
// Clave = ruta de la página con barras («/cascos/casco-estructural/») → clave del módulo → [p1, p2].
// Cada archivo p-*.ts lo redacta una corrida de contenido; aquí solo se unen.
import type { Duo } from './index';
import { DUO_P_A } from './p-a';
import { DUO_P_B } from './p-b';
import { DUO_P_C } from './p-c';
import { DUO_P_D } from './p-d';
import { DUO_P_E } from './p-e';
import { DUO_P_F } from './p-f';
import { DUO_P_G } from './p-g';
import { DUO_P_H } from './p-h';
import { DUO_P_I } from './p-i';

const PAGINAS: Record<string, Record<string, Duo>> = {
  ...DUO_P_A, ...DUO_P_B, ...DUO_P_C, ...DUO_P_D, ...DUO_P_E, ...DUO_P_F, ...DUO_P_G, ...DUO_P_H, ...DUO_P_I,
};

const norm = (ruta: string) => `/${ruta.replace(/^\/+|\/+$/g, '')}/`.replace('//', '/');

/** Dúo de un módulo de la página `ruta`; `undefined` si todavía no está redactado. */
export const duoPagina = (ruta: string, clave: string): Duo | undefined => PAGINAS[norm(ruta)]?.[clave];
