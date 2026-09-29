// ============================================================
// IMÁGENES DE AMBIENTE — fondo del hero por tipo de página.
// Una sola fuente para que cada familia tenga su escena y el
// resto del sitio use la de estación. Las rutas apuntan a AVIF
// en public/images/escenas/.
// ============================================================
export interface HeroImage { src: string; alt: string }

export const HERO_POR_FAMILIA: Record<string, HeroImage> = {
  estructural: { src: '/images/escenas/bomberos-ataque-incendio-manguera.avif', alt: 'Bomberos con traje estructural en ataque interior con línea de manguera' },
  brigadista: { src: '/images/escenas/hero-brigadista.avif', alt: 'Brigadistas industriales con traje azul marino durante una práctica con manguera en planta' },
  forestal: { src: '/images/escenas/hero-forestal.avif', alt: 'Combatientes forestales con camisola amarilla trabajando una brecha en un cerro con pinos' },
  aproximacion: { src: '/images/escenas/hero-aproximacion.avif', alt: 'Bombero con traje aluminizado de aproximación avanzando hacia un fuego de combustible' },
  entrada: { src: '/images/escenas/hero-entrada.avif', alt: 'Trabajador con traje aluminizado de entrada frente a la boca de un horno industrial' },
  extricacion: { src: '/images/escenas/hero-extricacion.avif', alt: 'Equipo de rescate con traje de extricación cortando un vehículo con herramienta hidráulica' },
};

export const HERO_HOME: HeroImage = HERO_POR_FAMILIA.estructural;

export const HERO_GENERICO: HeroImage = {
  src: '/images/escenas/estacion-bomberos-trajes-percha.avif',
  alt: 'Trajes para bomberos colgados en los percheros de una estación',
};

export function heroDeFamilia(slug?: string): HeroImage {
  return (slug && HERO_POR_FAMILIA[slug]) || HERO_GENERICO;
}
