// Tipos del módulo «spotlight» de categoría (home). Ver CategorySpotlight.astro.
export interface SpotImg { src: string; alt: string; caption?: string; width: number; height: number; pos?: string }
export interface SpotPunto { titulo: string; texto: string }
export interface SpotProps {
  id: string;
  numero: string;
  eyebrow: string;
  titulo: string;
  parrafos: string[];
  puntos: SpotPunto[];
  cta: { label: string; href: string };
  wa?: { label: string; href: string };
  nota?: string;
  imagenes: [SpotImg, SpotImg, SpotImg];
  flip?: boolean;
  nivel?: 2 | 3;
}
