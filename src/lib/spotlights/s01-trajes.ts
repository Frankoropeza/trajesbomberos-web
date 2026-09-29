// Spotlight 01 · Trajes para bomberos (redactado por Claude, ejemplo dorado).
import { waUrl } from '@lib/wa';
import type { SpotProps } from './types';

export const SPOT_01: SpotProps[] = [
  {
    id: 'spot-trajes',
    numero: '01',
    eyebrow: 'Trajes para bomberos',
    titulo: 'Trajes para bomberos elegidos para el riesgo real que enfrenta tu equipo',
    parrafos: [
      'Quien ha estado dentro de un incendio sabe que el <strong>traje de bombero</strong> no es un uniforme: es la última barrera entre tu gente y el calor, la flama y el humo. Por eso no te vendemos «un traje» cualquiera. Primero entendemos qué hace tu equipo: ataque interior, brigada industrial, línea de fuego o rescate. Después te recomendamos la familia correcta, aunque eso signifique cotizar menos.',
      'Trabajamos todas las familias de <a href="/trajes/">trajes para bomberos</a>. Los <a href="/trajes/estructural/">trajes estructurales</a> son para incendio en edificaciones, los <a href="/trajes/brigadista/">de brigadista</a> para la industria y los <a href="/trajes/forestal/">trajes forestales</a> para jornadas largas en campo. Frente a calor radiante están los <a href="/trajes/aproximacion/">aluminizados de aproximación</a> y, para ingresar a la flama, los <a href="/trajes/entrada/">trajes de entrada</a>. Completan la línea los <a href="/trajes/extricacion/">de extricación</a> para rescate y los <a href="/trajes/hazmat/">Hazmat</a> para materiales peligrosos.',
      'Cada cotización llega con la ficha técnica completa: composite capa por capa, norma de referencia y modelos de Romak Fire, Sköld y Lakeland para que compares con el mismo criterio. Citamos la NFPA 1970, que sustituyó a la NFPA 1971. Así sabes exactamente qué va a recibir tu gente antes de firmar la orden de compra.',
    ],
    puntos: [
      { titulo: 'Te orientamos primero', texto: 'Si tu operación necesita otra familia de traje, te lo decimos antes de cotizar.' },
      { titulo: 'Conjunto que cierra', texto: 'Chaquetón, pantalonera, monja y casco se revisan juntos, sin huecos.' },
      { titulo: 'Ficha por partida', texto: 'Composite, norma y fabricante por escrito en cada renglón de la cotización.' },
      { titulo: 'Compra a tu medida', texto: 'Por pieza o traje completo, con factura CFDI 4.0 y documentos para licitación.' },
    ],
    cta: { label: 'Trajes para bomberos por familia', href: '/trajes/' },
    wa: { label: 'Cotizar trajes para bomberos', href: waUrl('Hola, quiero cotizar trajes para bomberos.') },
    nota: 'Cotización formal con ficha técnica en día hábil, sin compra mínima y con envío a los 32 estados.',
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

