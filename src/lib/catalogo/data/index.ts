import type { Modelo, Seccion, Tipo } from '../types';

type SeccionData = { data?: { seccion?: Seccion; tipos?: Tipo[]; modelos?: Modelo[] } };
const modules = import.meta.glob<SeccionData>('./*.ts', { eager: true });
const datasets = Object.values(modules).flatMap((module) => module.data ? [module.data] : []);

export const SECCIONES = datasets.flatMap((dataset) => dataset.seccion ? [dataset.seccion] : []);
export const TIPOS = datasets.flatMap((dataset) => dataset.tipos ?? []);
export const MODELOS = datasets.flatMap((dataset) => dataset.modelos ?? []);
