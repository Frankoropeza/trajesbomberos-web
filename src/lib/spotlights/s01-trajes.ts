// Spotlight 01 · Trajes para bomberos (redactado por Claude, ejemplo dorado).
import { waUrl } from '@lib/wa';
import type { SpotProps } from './types';

export const SPOT_01: SpotProps[] = [
  {
    id: 'spot-trajes',
    numero: '01',
    eyebrow: 'Trajes para bomberos',
    titulo: 'Trajes para bomberos que protegen en el incendio real, no solo en la ficha técnica',
    parrafos: [
      'Un <strong>traje para bomberos</strong> es la última barrera entre tu personal y el calor, la flama y los productos de combustión. Por eso no vendemos «un traje»: te ayudamos a elegir la familia correcta para el riesgo que de verdad enfrenta tu equipo, y si tu operación necesita otra, te lo decimos antes de cotizar.',
      'Cotizamos <a href="/trajes/estructural/">trajes estructurales</a> para ataque interior, <a href="/trajes/brigadista/">trajes de brigadista</a> para brigadas industriales, <a href="/trajes/forestal/">trajes forestales</a> para línea de fuego, <a href="/trajes/aproximacion/">trajes aluminizados de aproximación</a>, <a href="/trajes/entrada/">trajes de entrada a la flama</a>, <a href="/trajes/extricacion/">trajes de extricación</a> y <a href="/trajes/hazmat/">trajes Hazmat</a> para materiales peligrosos.',
      'Cada traje de bombero llega con su composite declarado capa por capa —exterior, barrera de humedad y barrera térmica— y con su norma de referencia vigente: NFPA 1970, la que sustituyó a la NFPA 1971, o EN 469 para equipo europeo. Cotizamos modelos de Romak Fire, Sköld y Lakeland con ficha del fabricante, para que compares ofertas con el mismo criterio y sepas exactamente qué recibe tu gente.',
    ],
    puntos: [
      { titulo: 'Protección térmica medida', texto: 'TPP y THL declarados: protección contra el calor sin disparar el estrés térmico del bombero.' },
      { titulo: 'Norma vigente documentada', texto: 'NFPA 1970 o EN 469, con la correspondencia a NFPA 1971 que aún piden muchas licitaciones.' },
      { titulo: 'Por pieza o conjunto completo', texto: 'Chaquetón, pantalonera, monja y tirantes por separado, o el equipo completo y compatible.' },
      { titulo: 'Listo para compra institucional', texto: 'Ficha en formato de licitación, factura CFDI 4.0 y envío a los 32 estados.' },
    ],
    cta: { label: 'Trajes para bomberos por familia', href: '/trajes/' },
    wa: { label: 'Cotizar trajes para bomberos', href: waUrl('Hola, quiero cotizar trajes para bomberos.') },
    nota: 'Sin compra mínima. Cotización formal con ficha técnica por partida en día hábil.',
    imagenes: [
      {
        src: '/images/escenas/bomberos-ataque-incendio-manguera.avif', width: 1376, height: 768,
        alt: 'Bomberos con traje estructural y equipo de respiración autónoma durante el ataque interior a un incendio',
        caption: 'Ataque interior con traje estructural y ERA',
      },
      {
        src: '/images/escenas/composite-tres-capas-traje-estructural.avif', width: 1200, height: 896,
        alt: 'Composite de tres capas del traje para bombero: capa exterior, barrera de humedad y barrera térmica',
        caption: 'Composite de tres capas',
      },
      {
        src: '/images/escenas/estacion-bomberos-trajes-percha-800.avif', width: 800, height: 446,
        alt: 'Trajes para bomberos en percha dentro de la estación, con cascos y botas listos para la salida',
        caption: 'Equipo listo para la salida',
      },
    ],
  },
];

