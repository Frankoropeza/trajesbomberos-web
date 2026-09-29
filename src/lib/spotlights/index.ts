// Orden = orden de las cards de CategoryTiles (01 Trajes … 12 Accesorios).
import { SPOT_01 } from './s01-trajes';
import { SPOT_A } from './s02-07';
import { SPOT_B } from './s08-12';
import type { SpotProps } from './types';
export type { SpotProps } from './types';
export const SPOTLIGHTS: SpotProps[] = [...SPOT_01, ...SPOT_A, ...SPOT_B];
