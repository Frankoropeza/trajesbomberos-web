import type { Seccion } from './types';

export const SECCIONES: Seccion[] = [
  {
    slug: 'cascos',
    nombre: 'Cascos',
    h1: 'Cascos para bombero: estructural, forestal y rescate',
    title: 'Cascos para bombero: estructural, forestal y rescate | TrajesBombero México',
    description: 'Cascos para bombero estructural, forestal, rescate técnico y brigada industrial; Bullard y Sköld; cotización por WhatsApp y envío a todo México.',
    eyebrow: 'Catálogo de protección personal',
    lead: 'El casco no es un accesorio del traje: define cobertura, visión, compatibilidad con el ERA y la operación para la que el elemento queda protegido.',
    intro: [
      'Un casco de bombero se elige por el escenario de trabajo, no por su silueta. El estructural está pensado para combate en edificación: debe trabajar con la máscara del equipo de respiración autónoma, desviar agua y escombro, y mantener protegidos nuca, orejas y frente. El forestal reduce peso y permite disipar calor en jornadas largas de línea de fuego. El de rescate técnico privilegia un perfil compacto, barbiquejo estable y puntos para lámpara o arnés. La brigada industrial, en cambio, puede partir de un casco industrial únicamente cuando su análisis de riesgo se limita a conatos y nunca contempla ataque interior.',
      'En esta sección reunimos cascos para bomberos que se cotizan con datos comparables: material de carcasa, suspensión, visor o goggles, barbiquejo, compatibilidad con ERA y declaración de norma del fabricante. No publicamos precios porque la configuración cambia con el color, los accesorios, la protección ocular, la identificación y el número de elementos. La cotización debe dejar por escrito qué incluye cada casco y cuál es el documento de cumplimiento disponible para la partida.',
      'Bullard y Sköld aparecen aquí porque hay modelos concretos con ficha de proveedor para cotizar. Eso no convierte una foto en una configuración cerrada: la visera, las cintas, el color, el cubrenuca y otros accesorios se confirman antes de ordenar. Si equipas una brigada o un cuerpo de bomberos, pide también revisar la interfaz completa: casco, monja o capucha, máscara de ERA, guantes y cuello del chaquetón deben permitir movimiento sin dejar zonas expuestas.',
    ],
    grupos: [
      { titulo: 'Combate de incendios', tipos: ['casco-estructural-tradicional', 'casco-estructural-europeo'] },
      { titulo: 'Operaciones especializadas', tipos: ['casco-forestal', 'casco-rescate-tecnico', 'casco-brigada-industrial'] },
    ],
    faq: [
      { q: '¿Cuánto dura un casco de bombero?', a: 'La vida de servicio depende de la marca, la fecha de fabricación, el impacto, la exposición térmica y el programa de inspección. Revisa la instrucción del fabricante y retira un casco que haya sufrido daño, deformación o exposición que comprometa sus componentes.' },
      { q: '¿Cuál es la diferencia entre casco estructural y forestal?', a: 'El estructural está hecho para ataque en edificaciones y prioriza cobertura con ERA; el forestal reduce peso, usa ala completa y ayuda a manejar jornadas largas al aire libre. No se sustituyen entre sí.' },
      { q: '¿Un casco industrial sirve para incendio?', a: 'Puede ser parte del equipo de una brigada ante conatos si el análisis de riesgo lo permite. Para ataque interior o exposición estructural se necesita casco diseñado para esa operación.' },
      { q: '¿Se puede usar con ERA?', a: 'Los cascos estructurales y algunos de rescate deben revisarse físicamente con la máscara y arnés del ERA que ya usa el equipo. La compatibilidad se confirma por configuración.' },
      { q: '¿Los colores indican jerarquía?', a: 'Cada corporación define sus colores e identificación. Confirma esa convención antes de cotizar para que todos los cascos del pedido queden consistentes.' },
      { q: '¿Qué incluye la cotización?', a: 'Incluye el modelo y la configuración solicitada, accesorios declarados y los datos técnicos disponibles. Antes de ordenar, confirma por escrito color, protección ocular, cubrenuca, tallas o ajuste y documentación aplicable.' },
    ],
    hero: { src: '/images/catalogo/cascos/hero-cascos.avif', alt: 'Cascos para bombero de distintos usos operativos' },
  },
];

export const getSeccion = (slug: string) => SECCIONES.find((seccion) => seccion.slug === slug);
