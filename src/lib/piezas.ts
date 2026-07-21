// ============================================================
// PIEZAS (L4) — ficha completa de una prenda concreta.
// Solo las piezas que tienen entrada aquí generan página propia
// en /trajes/<familia>/<pieza>/. El resto sigue viviendo como
// tarjeta cotizable dentro de la ficha de familia (L3).
// Se agregan de una en una, con contenido real: es preferible
// una ficha completa a seis a medias.
// ============================================================

export interface FichaFila {
  campo: string;
  valor: string;
  nota?: string;
}

export interface Pieza {
  slug: string;             // /trajes/<familia>/<slug>/
  familia: string;          // slug de la familia padre
  nombreCard: string;       // debe coincidir con productos[].nombre de la familia
  nombre: string;           // nombre comercial en la ficha

  // SEO propio
  seoTitle: string;
  seoDescription: string;
  keywords: readonly string[];

  // Hero
  eyebrow: string;
  h1: string;
  h1Accent: string;
  lead: string;
  descRight: string[];
  meta: string[];

  // Cuerpo
  resumen: string[];              // 2 párrafos de apertura
  puntosClave: string[];
  images: { src: string; alt: string }[];

  fichaTecnica: { grupo: string; filas: FichaFila[] }[];
  incluye: string[];
  noIncluye: string[];
  errores: { error: string; realidad: string }[];
  aplicaciones: { titulo: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export const PIEZAS: Pieza[] = [
  {
    slug: 'chaqueton',
    familia: 'estructural',
    nombreCard: 'Chaquetón estructural de tres capas',
    nombre: 'Chaquetón estructural de tres capas',

    seoTitle: 'Chaquetón estructural para bombero | tres capas | México',
    seoDescription:
      'Chaquetón estructural para bombero de tres capas con DRD integrado: composite, TPP y THL, largos, tallas y qué exigir en la ficha antes de comprar.',
    keywords: ['chaquetón estructural para bombero', 'tres capas', 'México'],

    eyebrow: 'Pieza · Conjunto estructural',
    h1: 'Chaquetón estructural para bombero',
    h1Accent: 'de tres capas',
    lead:
      'La prenda superior del conjunto de ataque interior: capa exterior, barrera de humedad y barrera térmica trabajando juntas, con DRD integrado para arrastre de rescate.',
    descRight: [
      'Es la pieza más cara del equipamiento y la que más se especifica mal. Se cotiza independiente de la pantalonera, y cada una de sus tres capas se declara por nombre comercial: sin ese dato, dos ofertas no son comparables por más que ambas digan "certificado".',
      'Aquí está la ficha completa —construcción, valores de referencia, largos, tallas y opciones de configuración— más lo que conviene exigir por escrito antes de firmar una orden de compra o cerrar una partida de licitación.',
    ],
    meta: ['NFPA 1970 · cap. 5–9', 'Tres capas', 'DRD integrado', 'Se cotiza por pieza'],

    resumen: [
      'El chaquetón estructural no es "una chamarra que no se quema". Es un composite: tres materiales distintos, cada uno con una función, ensamblados y certificados como conjunto. La capa exterior resiste flama y abrasión, la barrera de humedad impide el paso de agua y vapor a alta temperatura, y la barrera térmica aísla del calor. Quita una y deja de ser estructural, aunque en la foto se vea idéntico.',
      'Lo que casi nadie revisa al comparar cotizaciones: entre la barrera térmica y la de humedad se define la mayor parte de la protección real. El exterior es lo que se ve y lo que define el color, pero no es donde vive el desempeño.',
    ],
    puntosClave: [
      'Las tres capas declaradas por nombre comercial, no como "tela ignífuga"',
      'DRD integrado: el arnés con el que se arrastra a un elemento inconsciente',
      'TPP y THL leídos juntos, nunca uno solo',
      'Largo elegido por operación, no por costumbre',
      'La certificación es del conjunto terminado y del fabricante que lo lista',
      'La fecha de fabricación de la etiqueta arranca los diez años de vida útil',
    ],
    images: [
      { src: '/images/piezas/chaqueton-estructural-de-tres-capas.svg', alt: 'Chaquetón estructural para bombero de tres capas con DRD integrado' },
      { src: '/images/productos/chaqueton-estructural-bombero.svg', alt: 'Detalle de chaquetón estructural para bombero' },
      { src: '/images/productos/traje-estructural-chaqueton-pantalon-bombero.svg', alt: 'Conjunto estructural completo: chaquetón y pantalonera' },
    ],

    fichaTecnica: [
      {
        grupo: 'Norma y certificación',
        filas: [
          { campo: 'Norma de desempeño', valor: 'NFPA 1970, edición 2025 (capítulos 5 a 9)', nota: 'Absorbió a la NFPA 1971; las licitaciones aún suelen redactar "NFPA 1971 ed. 2018"' },
          { campo: 'Referencia europea', valor: 'EN 469:2020, Nivel 1 o Nivel 2', nota: 'Para equipo de origen europeo' },
          { campo: 'Alcance de la certificación', valor: 'Del conjunto terminado, no de la tela', nota: 'A nombre del fabricante listado ante el organismo certificador' },
          { campo: 'Organismo certificador', valor: 'UL, SEI o Intertek', nota: 'Los pliegos admiten equivalencia de certificador, no de norma' },
        ],
      },
      {
        grupo: 'Construcción',
        filas: [
          { campo: 'Capas', valor: 'Tres: exterior + barrera de humedad + barrera térmica', nota: 'Obligatorias las tres' },
          { campo: 'Capa exterior', valor: 'PBI Matrix, PBI Max, Nomex · Kevlar, Armor AP o Kombat Flex', nota: 'Se especifica también su gramaje en oz/yd²' },
          { campo: 'Barrera de humedad', valor: 'GORE CROSSTECH, CROSSTECH Black, STEDAIR 4000 o STEDAIR 3000', nota: 'Es la capa que más sufre con lavado incorrecto' },
          { campo: 'Barrera térmica', valor: 'Caldura, Caldura Elite, Quantum3D o Glide Ice', nota: 'Aquí se define la mayor parte del TPP' },
          { campo: 'DRD', valor: 'Integrado al chaquetón', nota: 'Requisito del conjunto estructural desde la edición 2008' },
        ],
      },
      {
        grupo: 'Desempeño',
        filas: [
          { campo: 'TPP (protección térmica)', valor: 'Mínimo de referencia 35', nota: 'Algunas licitaciones fijan valores más altos como criterio de descalificación' },
          { campo: 'THL (pérdida total de calor)', valor: 'Mínimo de referencia 205 W/m²', nota: 'TPP alto con THL bajo produce estrés térmico' },
          { campo: 'Lectura correcta', valor: 'Los dos valores juntos', nota: 'Maximizar TPP a costa del THL es un error de especificación' },
        ],
      },
      {
        grupo: 'Configuración',
        filas: [
          { campo: 'Tallas', valor: 'Por pecho, largo y manga', nota: 'Disponible a medida o en talla de stock' },
          { campo: 'Largo de chaquetón', valor: 'Corto o largo según operación', nota: 'El corto da movilidad; el largo, cobertura' },
          { campo: 'Espalda extendida', valor: 'Opción de 3" o 6"', nota: 'Cubre la zona lumbar al agacharse' },
          { campo: 'Cinta reflejante', valor: 'Configurable en mangas, pecho y faldón', nota: 'Se especifica ancho y disposición' },
          { campo: 'Refuerzos y bolsas', valor: 'Codos, hombros, bolsas de carga y portaherramientas', nota: 'Se define en la orden, no después' },
          { campo: 'Puños', valor: 'Con o sin wristers', nota: 'Interfaz crítica con el guante' },
        ],
      },
      {
        grupo: 'Ciclo de servicio',
        filas: [
          { campo: 'Retiro obligatorio', valor: '10 años desde la fecha de fabricación', nota: 'NFPA 1850; aplica aunque nunca se haya usado' },
          { campo: 'Inspección avanzada', valor: 'Anual', nota: 'Y a los 3 años aunque el traje no se haya estrenado' },
          { campo: 'Lavado avanzado', valor: 'Dos veces cada 12 meses', nota: 'Con lavadora extractora; nunca de carga superior' },
        ],
      },
    ],

    incluye: [
      'Chaquetón de tres capas ensamblado y certificado como conjunto',
      'DRD integrado listo para uso',
      'Cinta reflejante en la configuración especificada',
      'Etiqueta de certificación con fecha de fabricación',
      'Ficha técnica con el composite declarado capa por capa',
    ],
    noIncluye: [
      'Pantalonera: se cotiza por separado, aunque conviene pedirla del mismo corte',
      'Capucha, casco, botas y guantes: se cotizan como complementos del conjunto',
      'Arnés interno de escape: es opción del pantalón, no del chaquetón',
    ],

    errores: [
      {
        error: 'Comparar por el exterior y por el precio',
        realidad: 'Dos chaquetones con la misma capa exterior pueden tener barreras muy distintas. La diferencia no se ve en la foto, se ve en la ficha.',
      },
      {
        error: 'Aceptar "cumple NFPA" sin edición ni certificador',
        realidad: 'La edición importa tanto como el número. Pide la etiqueta y el listado vigente del fabricante ante UL o SEI.',
      },
      {
        error: 'Pedir el TPP más alto disponible',
        realidad: 'Si el THL queda bajo, el elemento se sobrecalienta desde dentro. El estrés térmico es la principal causa de lesión no traumática en incendio.',
      },
      {
        error: 'Comprar todo en talla de stock para ahorrar',
        realidad: 'Si el chaquetón no ajusta con la pantalonera, la cintura queda abierta. Esa interfaz es por donde entra el calor.',
      },
      {
        error: 'No revisar la fecha de fabricación al recibir',
        realidad: 'El reloj de los diez años corre desde que se fabricó. Inventario viejo se paga completo y dura menos.',
      },
    ],

    aplicaciones: [
      { titulo: 'Cuerpo de bomberos municipal', desc: 'Ataque interior en incendio estructural, la operación para la que está diseñado.' },
      { titulo: 'Brigada industrial con ataque interior', desc: 'Plantas donde la brigada entra a espacios con fuego declarado, no solo a conato.' },
      { titulo: 'Protección civil', desc: 'Unidades con atribución de combate estructural además de rescate.' },
      { titulo: 'Aeropuerto y refinería', desc: 'Complemento del equipo de aproximación cuando hay ataque en edificación.' },
    ],

    faqs: [
      {
        q: '¿Puedo comprar solo el chaquetón sin la pantalonera?',
        a: 'Sí, se cotizan por separado y es normal reponer una pieza sin la otra. Lo que conviene cuidar es que ambas compartan corte y talla: si no ajustan entre sí, queda abierta la interfaz de la cintura, que es justo por donde entra el calor.',
      },
      {
        q: '¿Qué largo de chaquetón me conviene?',
        a: 'Depende de la operación, no de la costumbre. El corto da más movilidad y funciona mejor con arnés y equipo de respiración; el largo cubre más al agacharse. Si tu gente trabaja mucho hincada o en espacios reducidos, considera además la espalda extendida de 3 o 6 pulgadas.',
      },
      {
        q: '¿El DRD viene incluido o se pide aparte?',
        a: 'Va integrado al chaquetón y forma parte de los requisitos del conjunto estructural desde la edición 2008 de la norma. Si una cotización no lo menciona, pídelo explícitamente antes de comparar precios: no es un extra.',
      },
      {
        q: '¿Qué diferencia hay entre NFPA 1971 y NFPA 1970?',
        a: 'Es la misma exigencia, renumerada. NFPA 1971 fue consolidada en NFPA 1970 (edición 2025) junto con las normas 1975, 1981 y 1982; los requisitos del traje estructural son hoy sus capítulos 5 a 9. Muchas licitaciones mexicanas todavía redactan "NFPA 1971 Edición 2018" y podemos documentar la correspondencia para tu expediente.',
      },
      {
        q: '¿Cuánto dura un chaquetón estructural?',
        a: 'El retiro es a los diez años desde la fecha de fabricación impresa en la etiqueta, incluso si nunca se usó. Además requiere inspección avanzada anual y dos lavados avanzados por año. Conviene revisar esa fecha al recibir el pedido: inventario viejo consume años de vida útil que ya pagaste.',
      },
      {
        q: '¿Sirve para incendio forestal o para extricación?',
        a: 'No es lo indicado. En línea de fuego forestal el peso y las barreras provocan golpe de calor en jornadas largas; para rescate vehicular lo contaminas con aceite, vidrio y fluidos, y le consumes vida útil. Cada operación tiene su familia de traje.',
      },
    ],
  },
];

export function piezasDeFamilia(familia: string) {
  return PIEZAS.filter((p) => p.familia === familia);
}

export function piezaPorNombreCard(nombreCard: string) {
  return PIEZAS.find((p) => p.nombreCard === nombreCard);
}
