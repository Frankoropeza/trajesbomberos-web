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

  // --- SEO de cola larga y decisión de compra -----------------
  /** Cómo se le dice también: captura búsquedas reales por sinónimo. */
  sinonimos: string[];
  sinonimosNota: string;
  /** Tabla de decisión entre las dos opciones reales de la pieza. */
  comparativa: {
    titulo: string;
    intro: string;
    columnas: string[];
    filas: string[][];
  };
  /** Enlazado contextual hacia piezas hermanas y recursos. */
  relacionados: { label: string; href: string }[];
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
    sinonimos: [
          "chaquetón de bombero",
          "saco de bombero",
          "casaca estructural",
          "chaqueta de ataque interior",
          "turnout coat",
          "chaquetón NFPA"
    ],
    sinonimosNota: "Si tu área de compras lo escribió de otra forma en la requisición, es la misma pieza. Lo importante no es el nombre sino el composite y la norma.",
    comparativa: {
          "titulo": "Largo corto o largo extendido",
          "intro": "La decisión que más se toma por costumbre y que más cambia la operación real del elemento.",
          "columnas": [
                "Criterio",
                "Chaquetón corto",
                "Chaquetón largo"
          ],
          "filas": [
                [
                      "Movilidad",
                      "Mayor: no estorba al agacharse ni al subir escalera",
                      "Menor: se monta sobre el pantalón al flexionar"
                ],
                [
                      "Cobertura lumbar",
                      "Depende de la espalda extendida de 3\" o 6\"",
                      "Cubre por diseño, incluso sin extendida"
                ],
                [
                      "Con equipo de respiración",
                      "Mejor interacción con el arnés y la placa",
                      "El faldón puede quedar bajo el cinturón del ERA"
                ],
                [
                      "Uso recomendado",
                      "Ataque interior, espacios reducidos, mucha escalera",
                      "Operación con exposición prolongada de espalda"
                ]
          ]
    },
    relacionados: [
          {
                "label": "Pantalonera estructural: la otra mitad del conjunto",
                "href": "/trajes/estructural/pantalonera/"
          },
          {
                "label": "Monja con barrera de partículas: cierra la interfaz del cuello",
                "href": "/trajes/estructural/monja/"
          },
          {
                "label": "Anatomía del traje: qué hace cada una de las tres capas",
                "href": "/#anatomia"
          },
          {
                "label": "Vida útil y servicio: por qué el retiro es a los 10 años",
                "href": "/#vida-util"
          }
    ],
  },
  {
    "slug": "pantalonera",
    "familia": "estructural",
    "nombreCard": "Pantalonera estructural",
    "nombre": "Pantalonera estructural",
    "seoTitle": "Pantalonera estructural para bombero | tres capas | México",
    "seoDescription": "Pantalonera estructural para bombero de tres capas con rodilla articulada: ajustes, cintura, entrepierna y tipos de cierre. Qué exigir antes de comprar.",
    "keywords": [
      "pantalonera estructural para bombero",
      "tres capas",
      "México"
    ],
    "eyebrow": "Pieza · Conjunto estructural",
    "h1": "Pantalonera estructural para bombero",
    "h1Accent": "de tres capas",
    "lead": "La mitad inferior del conjunto de ataque interior: mismo composite de tres capas que el chaquetón, con rodilla articulada, refuerzos y cuatro tipos de ajuste.",
    "descRight": [
      "Se cotiza independiente del chaquetón, y ahí empieza el problema más común: se compra una pieza de un corte y la otra de otro, y la interfaz de la cintura queda abierta. Esa unión es justo por donde entra el calor en ataque interior.",
      "La pantalonera además concentra las decisiones que más se pasan por alto: tipo de cierre de cintura, si lleva arnés interno de escape, si el forro trae rodilleras y qué refuerzo va en rodilla y valenciana. Todo eso se define en la orden, no después."
    ],
    "meta": [
      "NFPA 1970 · cap. 5–9",
      "Tres capas",
      "4 tipos de ajuste",
      "Se cotiza por pieza"
    ],
    "resumen": [
      "La pantalonera estructural comparte con el chaquetón la misma lógica: capa exterior, barrera de humedad y barrera térmica ensambladas y certificadas como conjunto. Lo que cambia es la exigencia mecánica. Aquí el desgaste no viene del calor sino del movimiento: subir, bajar, hincarse, arrastrarse. Por eso la rodilla va articulada y reforzada, y la valenciana lleva protección extra.",
      "Es también la pieza que más opciones esconde. El cierre de cintura puede ser de medio cinturón, cinturón completo o cinturón de escape; el forro puede traer rodilleras de fábrica; y el arnés interno de escape, si lo necesitas, se cose aquí y se certifica bajo una norma distinta a la del conjunto."
    ],
    "puntosClave": [
      "Mismo composite de tres capas que el chaquetón, declarado por nombre comercial",
      "Cuatro tipos de ajuste: slim, regular, relajado y de dama",
      "Se especifica por cintura y entrepierna, no por talla genérica",
      "Rodilla articulada con refuerzo; la valenciana también se refuerza",
      "El cierre de cintura define si puede alojar arnés de escape",
      "Debe compartir corte y talla con el chaquetón: la interfaz es zona crítica"
    ],
    "images": [
      {
        "src": "/images/piezas/pantalonera-estructural.svg",
        "alt": "Pantalonera estructural para bombero de tres capas"
      },
      {
        "src": "/images/productos/pantalonera-estructural-bombero.svg",
        "alt": "Detalle de pantalonera estructural con tirantes"
      },
      {
        "src": "/images/productos/traje-estructural-chaqueton-pantalon-bombero.svg",
        "alt": "Conjunto estructural: chaquetón y pantalonera"
      }
    ],
    "fichaTecnica": [
      {
        "grupo": "Norma y certificación",
        "filas": [
          {
            "campo": "Norma de desempeño",
            "valor": "NFPA 1970, edición 2025 (capítulos 5 a 9)",
            "nota": "Absorbió a la NFPA 1971"
          },
          {
            "campo": "Referencia europea",
            "valor": "EN 469:2020, Nivel 1 o Nivel 2",
            "nota": "Para equipo de origen europeo"
          },
          {
            "campo": "Alcance de la certificación",
            "valor": "Del conjunto terminado, no de la tela",
            "nota": "A nombre del fabricante listado ante el organismo certificador"
          },
          {
            "campo": "Arnés de escape",
            "valor": "Se certifica aparte bajo NFPA 1983",
            "nota": "Aunque vaya cosido dentro de la pantalonera"
          }
        ]
      },
      {
        "grupo": "Construcción",
        "filas": [
          {
            "campo": "Capas",
            "valor": "Tres: exterior + barrera de humedad + barrera térmica",
            "nota": "Las mismas que el chaquetón del conjunto"
          },
          {
            "campo": "Capa exterior",
            "valor": "PBI Matrix, PBI Max, Nomex · Kevlar, Armor AP o Kombat Flex",
            "nota": "Se especifica también su gramaje en oz/yd²"
          },
          {
            "campo": "Barrera de humedad",
            "valor": "GORE CROSSTECH, CROSSTECH Black, STEDAIR 4000 o STEDAIR 3000",
            "nota": "Misma familia que la del chaquetón"
          },
          {
            "campo": "Barrera térmica",
            "valor": "Caldura, Caldura Elite, Quantum3D o Glide Ice",
            "nota": "Aquí se define la mayor parte del TPP"
          },
          {
            "campo": "Rodilla",
            "valor": "Articulada, con refuerzo exterior",
            "nota": "Opción de rodilleras de espuma sobre el forro"
          },
          {
            "campo": "Valenciana",
            "valor": "Reforzada contra abrasión",
            "nota": "Zona de mayor desgaste junto con la rodilla"
          }
        ]
      },
      {
        "grupo": "Desempeño",
        "filas": [
          {
            "campo": "TPP (protección térmica)",
            "valor": "Mínimo de referencia 35",
            "nota": "Debe coincidir con el del chaquetón del conjunto"
          },
          {
            "campo": "THL (pérdida total de calor)",
            "valor": "Mínimo de referencia 205 W/m²",
            "nota": "TPP alto con THL bajo produce estrés térmico"
          }
        ]
      },
      {
        "grupo": "Configuración",
        "filas": [
          {
            "campo": "Tipo de ajuste",
            "valor": "Slim, regular, relajado o de dama",
            "nota": "Cuatro cortes distintos, no es solo cuestión de talla"
          },
          {
            "campo": "Tallas",
            "valor": "Por cintura y entrepierna",
            "nota": "Disponible a medida o en talla de stock"
          },
          {
            "campo": "Cierre de cintura",
            "valor": "Medio cinturón, cinturón completo, cinturón de escape o ganchos con tensores",
            "nota": "Define si puede alojar arnés de escape"
          },
          {
            "campo": "Tirantes",
            "valor": "Tipo H o tipo Y",
            "nota": "Se cotizan como pieza aparte"
          },
          {
            "campo": "Rodilleras",
            "valor": "Opción de espuma de célula cerrada sobre el forro",
            "nota": "Se pide de fábrica, no se instala después"
          },
          {
            "campo": "Bolsas",
            "valor": "De carga, para cuerda y portaherramientas",
            "nota": "Se define en la orden"
          }
        ]
      },
      {
        "grupo": "Ciclo de servicio",
        "filas": [
          {
            "campo": "Retiro obligatorio",
            "valor": "10 años desde la fecha de fabricación",
            "nota": "NFPA 1850; aplica aunque nunca se haya usado"
          },
          {
            "campo": "Inspección avanzada",
            "valor": "Anual",
            "nota": "Y a los 3 años aunque no se haya estrenado"
          },
          {
            "campo": "Lavado avanzado",
            "valor": "Dos veces cada 12 meses",
            "nota": "Con lavadora extractora; nunca de carga superior"
          }
        ]
      }
    ],
    "incluye": [
      "Pantalonera de tres capas ensamblada y certificada como conjunto",
      "Rodilla articulada con refuerzo exterior",
      "Cierre de cintura en la configuración especificada",
      "Cinta reflejante según disposición pedida",
      "Etiqueta de certificación con fecha de fabricación"
    ],
    "noIncluye": [
      "Tirantes: se cotizan como pieza aparte, tipo H o tipo Y",
      "Rodilleras de espuma: son opción de fábrica y se piden con la orden",
      "Arnés interno de escape: es opción configurable, se certifica bajo NFPA 1983",
      "Chaquetón: se cotiza por separado, del mismo corte y talla"
    ],
    "errores": [
      {
        "error": "Comprar chaquetón y pantalonera de cortes distintos",
        "realidad": "La interfaz de la cintura deja de sellar. Es la vía de entrada de calor más común y no se detecta hasta que ya está en servicio."
      },
      {
        "error": "Pedir talla genérica en vez de cintura y entrepierna",
        "realidad": "El pantalón se especifica por dos medidas y por tipo de ajuste. Una talla 'M' no significa nada entre fabricantes."
      },
      {
        "error": "Dejar el cierre de cintura sin definir",
        "realidad": "Si más adelante quieres arnés de escape y elegiste el cierre equivocado, no hay forma de agregarlo sin reemplazar la pantalonera."
      },
      {
        "error": "Pensar que las rodilleras se instalan después",
        "realidad": "Van sobre el forro y se piden de fábrica. Agregarlas luego implica abrir el conjunto y comprometer la certificación."
      },
      {
        "error": "Ignorar el refuerzo de valenciana",
        "realidad": "Junto con la rodilla es la zona que más se desgasta. Un refuerzo mal especificado acorta la vida útil de una pieza cara."
      }
    ],
    "aplicaciones": [
      {
        "titulo": "Cuerpo de bomberos municipal",
        "desc": "Ataque interior en incendio estructural, junto con el chaquetón del mismo conjunto."
      },
      {
        "titulo": "Brigada industrial con ataque interior",
        "desc": "Plantas donde la brigada entra a fuego declarado, no solo a conato."
      },
      {
        "titulo": "Reposición por desgaste",
        "desc": "La pantalonera se repone antes que el chaquetón: rodilla y valenciana sufren más."
      },
      {
        "titulo": "Protección civil",
        "desc": "Unidades con atribución de combate estructural."
      }
    ],
    "faqs": [
      {
        "q": "¿Puedo comprar solo la pantalonera?",
        "a": "Sí, se cotiza independiente del chaquetón y de hecho es la pieza que más se repone, porque rodilla y valenciana se desgastan primero. Lo único que hay que cuidar es que comparta corte y talla con el chaquetón en uso: si no ajustan entre sí, la cintura queda abierta."
      },
      {
        "q": "¿Qué diferencia hay entre los cuatro tipos de ajuste?",
        "a": "Slim, regular, relajado y de dama son cortes distintos, no tallas distintas. Cambian el volumen de muslo y cadera y la caída de la pierna. Elegir el corte correcto importa tanto como la medida: un pantalón que sobra estorba con el equipo de respiración y uno que aprieta limita el movimiento."
      },
      {
        "q": "¿Cómo se toman las medidas?",
        "a": "Por cintura y entrepierna, no por talla genérica. Te compartimos la guía del fabricante antes de pedir, porque las equivalencias cambian entre marcas. Para dotaciones grandes conviene levantar medidas elemento por elemento y no estimar por promedio."
      },
      {
        "q": "¿Qué cierre de cintura me conviene?",
        "a": "Depende de si vas a usar arnés interno de escape. El medio cinturón y el cinturón completo son los estándar; el cinturón de escape está pensado para alojar el sistema de descenso. Si existe la posibilidad de agregarlo más adelante, conviene decidirlo desde ahora."
      },
      {
        "q": "¿Las rodilleras vienen incluidas?",
        "a": "No, son opción de fábrica. Se montan sobre el forro, en la rodilla, y amortiguan el trabajo hincado sin absorber agua. Hay que pedirlas con la orden: instalarlas después implica abrir el conjunto."
      },
      {
        "q": "¿Los tirantes vienen con la pantalonera?",
        "a": "Se cotizan por separado. Manejamos tipo H y tipo Y; la elección depende del corte del pantalón y de la comodidad bajo el arnés del equipo de respiración. Conviene pedirlos junto con la pantalonera para que lleguen ajustados."
      },
      {
        "q": "¿Puedo usarla con un chaquetón de otra marca?",
        "a": "Técnicamente sí, pero no es recomendable. La certificación es del conjunto y la interfaz de cintura está diseñada para funcionar con su par. Si vas a mezclar, revísalo con nosotros antes de comprar."
      },
      {
        "q": "¿Cuánto dura?",
        "a": "El retiro es a los diez años desde la fecha de fabricación, igual que el chaquetón, aunque en la práctica la pantalonera suele necesitar reparación o reemplazo antes por desgaste mecánico en rodilla y valenciana."
      }
    ],
    sinonimos: [
          "pantalonera de bombero",
          "pantalón estructural",
          "pantalón de combate",
          "pantalón NFPA",
          "turnout pant",
          "pantalón de ataque interior"
    ],
    sinonimosNota: "En México se dice pantalonera; en catálogos de importación aparece como turnout pant. Es la misma prenda.",
    comparativa: {
          "titulo": "Qué cierre de cintura elegir",
          "intro": "Esta decisión no se puede corregir después: define si la prenda puede alojar arnés interno de escape.",
          "columnas": [
                "Criterio",
                "Medio cinturón o cinturón completo",
                "Cinturón de escape"
          ],
          "filas": [
                [
                      "Para qué sirve",
                      "Sujeción del pantalón, uso general",
                      "Sujeción y punto de anclaje del sistema de descenso"
                ],
                [
                      "Admite arnés interno",
                      "No",
                      "Sí, es su función"
                ],
                [
                      "Cuándo conviene",
                      "Operación sin riesgo de quedar atrapado en altura",
                      "Edificación vertical, plantas con estructura elevada"
                ],
                [
                      "Se puede cambiar después",
                      "No sin reemplazar la pantalonera",
                      "No aplica"
                ]
          ]
    },
    relacionados: [
          {
                "label": "Chaquetón estructural: debe compartir corte y talla",
                "href": "/trajes/estructural/chaqueton/"
          },
          {
                "label": "Tirantes tipo H: sostienen la pantalonera bajo el ERA",
                "href": "/trajes/estructural/tirantes/"
          },
          {
                "label": "Rodilleras de espuma: opción de fábrica del forro",
                "href": "/trajes/estructural/rodilleras/"
          },
          {
                "label": "Arnés interno de escape: depende del cierre que elijas",
                "href": "/trajes/estructural/arnes-escape/"
          }
    ],
  },
  {
    "slug": "tirantes",
    "familia": "estructural",
    "nombreCard": "Tirantes acolchados tipo H",
    "nombre": "Tirantes acolchados tipo H",
    "seoTitle": "Tirantes para pantalonera de bombero | tipo H | México",
    "seoDescription": "Tirantes para pantalonera de bombero tipo H: espalda acolchada, liberación rápida y sin herrajes metálicos bajo el arnés del equipo de respiración.",
    "keywords": [
      "tirantes para pantalonera de bombero",
      "tipo H",
      "México"
    ],
    "eyebrow": "Pieza · Conjunto estructural",
    "h1": "Tirantes para pantalonera de bombero",
    "h1Accent": "tipo H acolchados",
    "lead": "Sostienen la pantalonera sin que el peso se cargue en la cintura, con espalda en H acolchada y sin herrajes metálicos que lastimen bajo el arnés del ERA.",
    "descRight": [
      "Es la pieza más barata del conjunto y la que más incomodidad causa cuando se elige mal. Una pantalonera de tres capas mojada pesa, y si los tirantes no reparten esa carga sobre los hombros, todo el peso queda colgando de la cintura durante la maniobra.",
      "El detalle que casi nadie revisa al cotizar: los herrajes. Una hebilla metálica en la espalda queda justo debajo de la placa del equipo de respiración y se convierte en un punto de presión que se siente a los veinte minutos de operación."
    ],
    "meta": [
      "Espalda en H",
      "Acolchados",
      "Sin herraje metálico",
      "Liberación rápida"
    ],
    "resumen": [
      "Los tirantes no son un accesorio: son parte del sistema de sujeción de la pantalonera. La configuración en H reparte la carga sobre ambos hombros y evita que las cintas se resbalen al levantar los brazos, que es lo que pasa con los tirantes cruzados cuando el traje está mojado.",
      "El acolchado va en la zona de hombro y espalda, justo donde apoya el arnés del equipo de respiración. La liberación rápida permite soltar la pantalonera sin quitarse el chaquetón, algo que importa en descontaminación y en cambio rápido de equipo."
    ],
    "puntosClave": [
      "Configuración en H: reparte carga y no se resbala al levantar los brazos",
      "Acolchado en hombro y espalda, donde apoya el arnés del ERA",
      "Sin herrajes metálicos en la zona de contacto con la placa",
      "Liberación rápida para soltar la pantalonera sin desvestir el conjunto",
      "Se especifica por estatura, no por talla de pantalón",
      "Deben pedirse junto con la pantalonera para que lleguen ajustados"
    ],
    "images": [
      {
        "src": "/images/piezas/tirantes-acolchados-tipo-h.svg",
        "alt": "Tirantes acolchados tipo H para pantalonera de bombero"
      },
      {
        "src": "/images/productos/pantalonera-estructural-bombero.svg",
        "alt": "Pantalonera estructural con tirantes"
      },
      {
        "src": "/images/productos/traje-estructural-chaqueton-pantalon-bombero.svg",
        "alt": "Conjunto estructural completo"
      }
    ],
    "fichaTecnica": [
      {
        "grupo": "Construcción",
        "filas": [
          {
            "campo": "Configuración",
            "valor": "Espalda en H",
            "nota": "Alternativa: tipo Y, según corte del pantalón"
          },
          {
            "campo": "Acolchado",
            "valor": "En hombro y espalda",
            "nota": "Zona de apoyo del arnés del equipo de respiración"
          },
          {
            "campo": "Herrajes",
            "valor": "Sin metal en zona de contacto",
            "nota": "Evita punto de presión bajo la placa del ERA"
          },
          {
            "campo": "Liberación",
            "valor": "Sistema de liberación rápida",
            "nota": "Permite soltar la pantalonera sin quitarse el chaquetón"
          },
          {
            "campo": "Sujeción",
            "valor": "A presillas del pantalón",
            "nota": "Verificar compatibilidad con la pantalonera en uso"
          }
        ]
      },
      {
        "grupo": "Configuración",
        "filas": [
          {
            "campo": "Largo",
            "valor": "Por estatura del elemento",
            "nota": "No se especifica por talla de pantalón"
          },
          {
            "campo": "Ajuste",
            "valor": "Regulable en servicio",
            "nota": "Permite corregir sin herramienta"
          },
          {
            "campo": "Color",
            "valor": "Según configuración del conjunto",
            "nota": "Se define en la orden"
          }
        ]
      },
      {
        "grupo": "Ciclo de servicio",
        "filas": [
          {
            "campo": "Reposición",
            "valor": "Pieza de desgaste",
            "nota": "Se repone antes que la pantalonera"
          },
          {
            "campo": "Lavado",
            "valor": "Junto con la pantalonera",
            "nota": "Se retiran para inspección avanzada"
          }
        ]
      }
    ],
    "incluye": [
      "Par de tirantes con espalda en H acolchada",
      "Sistema de liberación rápida",
      "Terminales de sujeción a presillas"
    ],
    "noIncluye": [
      "Pantalonera: se cotiza por separado",
      "Adaptadores para presillas de otro fabricante"
    ],
    "errores": [
      {
        "error": "Elegir tirantes cruzados por costumbre",
        "realidad": "Con el traje mojado las cintas cruzadas se resbalan al levantar los brazos. La configuración en H no se mueve."
      },
      {
        "error": "Aceptar herrajes metálicos en la espalda",
        "realidad": "Quedan justo bajo la placa del equipo de respiración y se convierten en punto de presión durante toda la maniobra."
      },
      {
        "error": "Pedirlos por talla de pantalón",
        "realidad": "Se especifican por estatura del elemento. Un tirante corto obliga a llevar la pantalonera arriba de la cintura y limita el movimiento."
      },
      {
        "error": "Comprarlos después de la pantalonera",
        "realidad": "Puede haber incompatibilidad de presillas entre fabricantes. Conviene pedirlos en la misma orden."
      }
    ],
    "aplicaciones": [
      {
        "titulo": "Reposición de dotación",
        "desc": "Es pieza de desgaste: se repone antes que la pantalonera."
      },
      {
        "titulo": "Conjunto nuevo",
        "desc": "Se pide junto con la pantalonera para asegurar compatibilidad de presillas."
      },
      {
        "titulo": "Cambio de elemento",
        "desc": "Al reasignar equipo, el tirante se ajusta o se cambia por estatura."
      }
    ],
    "faqs": [
      {
        "q": "¿Tipo H o tipo Y?",
        "a": "El H reparte mejor la carga y no se desplaza al levantar los brazos, que es lo que suele pasar con el Y cuando el traje está mojado y pesa. El Y es más ligero y algunos elementos lo prefieren por costumbre. Si tu gente usa equipo de respiración de forma habitual, el H es la elección segura."
      },
      {
        "q": "¿Por qué importa que no tengan herrajes metálicos?",
        "a": "Porque la espalda del tirante queda debajo de la placa del arnés del ERA. Una hebilla metálica ahí se convierte en un punto de presión constante que se siente a los veinte minutos y que en jornadas largas produce lesión por compresión."
      },
      {
        "q": "¿Cómo se especifican?",
        "a": "Por estatura del elemento, no por talla de pantalón. Si estás equipando una dotación, conviene levantar estaturas junto con las medidas de cintura y entrepierna de la pantalonera."
      },
      {
        "q": "¿Sirven con cualquier pantalonera?",
        "a": "No necesariamente. La sujeción es a presillas y su disposición cambia entre fabricantes. Si vas a comprar tirantes para una pantalonera que ya tienes, dinos marca y modelo y confirmamos compatibilidad antes de cotizar."
      },
      {
        "q": "¿Para qué sirve la liberación rápida?",
        "a": "Permite soltar la pantalonera sin quitarse el chaquetón. Sirve en descontaminación en escena y en cambio rápido de equipo, cuando hay que retirar la prenda contaminada sin desvestir todo el conjunto."
      },
      {
        "q": "¿Se lavan con el traje?",
        "a": "Sí, acompañan a la pantalonera en el lavado avanzado, pero se retiran para la inspección avanzada porque hay que revisar costuras y elásticos por separado."
      },
      {
        "q": "¿Cada cuánto se reponen?",
        "a": "Antes que la pantalonera. El elástico pierde recuperación con los ciclos de lavado y el acolchado se comprime. No hay un plazo normativo específico: se reponen cuando dejan de sostener con el traje mojado."
      },
      {
        "q": "¿Los venden sueltos o solo con el pantalón?",
        "a": "Sueltos, sin compra mínima. Es una de las piezas que más se pide por separado para reposición de dotación."
      }
    ],
    sinonimos: [
          "tirantes de bombero",
          "suspensores para pantalonera",
          "tirantes tipo H",
          "tirantes acolchados",
          "suspenders turnout",
          "tirantes para pantalón de bombero"
    ],
    sinonimosNota: "Se piden como tirantes o suspensores según la región. En catálogo de importación aparecen como suspenders.",
    comparativa: {
          "titulo": "Tipo H o tipo Y",
          "intro": "Las dos configuraciones que existen. La diferencia se nota cuando el traje está mojado y pesa.",
          "columnas": [
                "Criterio",
                "Tipo H",
                "Tipo Y"
          ],
          "filas": [
                [
                      "Reparto de carga",
                      "Sobre ambos hombros, simétrico",
                      "Concentrado en el cruce de la espalda"
                ],
                [
                      "Con los brazos en alto",
                      "No se desplaza",
                      "Tiende a resbalarse, sobre todo con el traje mojado"
                ],
                [
                      "Bajo la placa del ERA",
                      "Superficie plana, menos presión puntual",
                      "El cruce puede quedar bajo la placa"
                ],
                [
                      "Cuándo conviene",
                      "Uso habitual de equipo de respiración",
                      "Operación ligera o preferencia del elemento"
                ]
          ]
    },
    relacionados: [
          {
                "label": "Pantalonera estructural: verifica compatibilidad de presillas",
                "href": "/trajes/estructural/pantalonera/"
          },
          {
                "label": "Chaquetón estructural: el resto del conjunto",
                "href": "/trajes/estructural/chaqueton/"
          },
          {
                "label": "Ver las seis familias de traje",
                "href": "/trajes/"
          }
    ],
  },
  {
    "slug": "rodilleras",
    "familia": "estructural",
    "nombreCard": "Rodilleras de espuma para forro",
    "nombre": "Rodilleras de espuma para forro",
    "seoTitle": "Rodilleras para pantalón de bombero | espuma | México",
    "seoDescription": "Rodilleras para pantalón de bombero en espuma de célula cerrada: se montan sobre el forro, amortiguan el trabajo hincado y no absorben agua. Opción de fábrica.",
    "keywords": [
      "rodilleras para pantalón de bombero",
      "espuma de célula cerrada",
      "México"
    ],
    "eyebrow": "Pieza · Conjunto estructural",
    "h1": "Rodilleras para pantalonera de bombero",
    "h1Accent": "de espuma de célula cerrada",
    "lead": "Almohadillas que se montan sobre el forro del pantalón, en la rodilla. Amortiguan el trabajo hincado sin absorber agua ni sumar volumen.",
    "descRight": [
      "El bombero pasa más tiempo hincado del que se supone: avance en interior con humo, búsqueda a ras de piso, extricación, ventilación. La rodilla es el punto de apoyo y también la zona de la pantalonera que primero falla.",
      "El detalle que decide la compra: se piden de fábrica. Van montadas sobre el forro, dentro del conjunto certificado, así que no es algo que se pueda agregar después sin abrir la prenda y comprometer la certificación."
    ],
    "meta": [
      "Célula cerrada",
      "Se monta en el forro",
      "No absorbe agua",
      "Opción de fábrica"
    ],
    "resumen": [
      "La espuma de célula cerrada es la clave: a diferencia de un acolchado convencional, no absorbe agua. Eso importa porque una rodillera empapada pesa, tarda días en secar y se convierte en foco de contaminación dentro del traje.",
      "Van sobre el forro, no sobre la capa exterior. Esa posición amortigua el impacto de apoyar la rodilla sobre escombro, vidrio o concreto sin sumar volumen visible ni afectar la movilidad de la pierna articulada."
    ],
    "puntosClave": [
      "Espuma de célula cerrada: no absorbe agua ni retiene contaminantes",
      "Se montan sobre el forro, dentro del conjunto certificado",
      "Amortiguan el apoyo sobre escombro, vidrio y concreto",
      "No sustituyen al refuerzo exterior de rodilla: son complementarias",
      "Opción de fábrica: se piden con la orden del pantalón",
      "No se pueden agregar después sin abrir el conjunto"
    ],
    "images": [
      {
        "src": "/images/piezas/rodilleras-de-espuma-para-forro.svg",
        "alt": "Rodilleras de espuma para forro de pantalonera de bombero"
      },
      {
        "src": "/images/productos/pantalonera-estructural-bombero.svg",
        "alt": "Pantalonera estructural con rodilla reforzada"
      },
      {
        "src": "/images/piezas/pantalonera-estructural.svg",
        "alt": "Pantalonera estructural de tres capas"
      }
    ],
    "fichaTecnica": [
      {
        "grupo": "Construcción",
        "filas": [
          {
            "campo": "Material",
            "valor": "Espuma de célula cerrada",
            "nota": "No absorbe agua ni retiene humedad"
          },
          {
            "campo": "Posición",
            "valor": "Sobre el forro, en la rodilla",
            "nota": "Dentro del conjunto, no sobre la capa exterior"
          },
          {
            "campo": "Relación con el refuerzo exterior",
            "valor": "Complementaria, no sustituta",
            "nota": "El refuerzo exterior protege de abrasión; la rodillera amortigua impacto"
          }
        ]
      },
      {
        "grupo": "Configuración",
        "filas": [
          {
            "campo": "Modo de pedido",
            "valor": "Opción de fábrica del pantalón",
            "nota": "Se define en la orden de compra"
          },
          {
            "campo": "Instalación posterior",
            "valor": "No recomendada",
            "nota": "Implica abrir el conjunto y compromete la certificación"
          },
          {
            "campo": "Compatibilidad",
            "valor": "Según fabricante de la pantalonera",
            "nota": "No es una pieza universal"
          }
        ]
      },
      {
        "grupo": "Ciclo de servicio",
        "filas": [
          {
            "campo": "Lavado",
            "valor": "Con la pantalonera, sin retirar",
            "nota": "Al no absorber agua, seca al mismo ritmo que el forro"
          },
          {
            "campo": "Inspección",
            "valor": "En la inspección avanzada anual",
            "nota": "Se revisa compresión y desprendimiento"
          }
        ]
      }
    ],
    "incluye": [
      "Par de almohadillas de espuma de célula cerrada",
      "Montaje de fábrica sobre el forro de la pantalonera"
    ],
    "noIncluye": [
      "Pantalonera: la rodillera es una opción de esa pieza",
      "Refuerzo exterior de rodilla: es parte de la construcción del pantalón",
      "Instalación en pantaloneras ya fabricadas"
    ],
    "errores": [
      {
        "error": "Asumir que se pueden agregar después",
        "realidad": "Van dentro del conjunto certificado. Abrir la prenda para instalarlas compromete la certificación y la garantía."
      },
      {
        "error": "Confundirlas con el refuerzo exterior de rodilla",
        "realidad": "Son dos cosas distintas. El refuerzo exterior resiste abrasión; la rodillera amortigua el impacto. Un pantalón puede traer una y no la otra."
      },
      {
        "error": "Aceptar espuma convencional",
        "realidad": "Si absorbe agua, la rodillera se empapa, pesa y tarda días en secar. La célula cerrada existe precisamente para evitarlo."
      },
      {
        "error": "Omitirlas para bajar el costo de la partida",
        "realidad": "Es de las opciones más baratas del pantalón y de las que más se agradecen en operación real. Quitarla no mueve el presupuesto y sí la comodidad."
      }
    ],
    "aplicaciones": [
      {
        "titulo": "Ataque interior",
        "desc": "Avance a ras de piso en ambiente con humo, donde se trabaja hincado."
      },
      {
        "titulo": "Búsqueda y rescate",
        "desc": "Barrido de habitaciones y espacios reducidos."
      },
      {
        "titulo": "Extricación vehicular",
        "desc": "Trabajo prolongado de rodillas junto al vehículo."
      },
      {
        "titulo": "Dotación nueva",
        "desc": "Se define al ordenar la pantalonera, no después."
      }
    ],
    "faqs": [
      {
        "q": "¿Se pueden instalar en una pantalonera que ya tengo?",
        "a": "No es recomendable. Van montadas sobre el forro, dentro del conjunto certificado, así que instalarlas implica abrir la prenda. Eso puede comprometer la certificación y la garantía del fabricante. Si tu pantalonera actual no las trae, la vía correcta es considerarlas en la siguiente compra."
      },
      {
        "q": "¿Qué es espuma de célula cerrada y por qué importa?",
        "a": "Es una espuma cuyas celdas no están conectadas entre sí, así que no absorbe agua. Importa porque una rodillera convencional empapada pesa, tarda días en secar dentro del traje y se convierte en foco de contaminación y de olor."
      },
      {
        "q": "¿Sustituyen al refuerzo de rodilla?",
        "a": "No, son complementarias. El refuerzo exterior protege la tela de la abrasión contra escombro y concreto; la rodillera amortigua el impacto sobre la articulación. Un pantalón puede traer refuerzo exterior y no rodillera."
      },
      {
        "q": "¿Se lavan aparte?",
        "a": "No, se lavan con la pantalonera y no hay que retirarlas. Al no absorber agua secan al mismo ritmo que el forro, sin alargar el tiempo fuera de servicio del traje."
      },
      {
        "q": "¿Cuánto suben el costo del pantalón?",
        "a": "Es una de las opciones más económicas del conjunto. No podemos publicar precio porque depende del fabricante y de la configuración, pero en la práctica no es la partida que mueve el presupuesto."
      },
      {
        "q": "¿Duran lo mismo que la pantalonera?",
        "a": "Normalmente sí, aunque la espuma se comprime con el uso. Se revisan en la inspección avanzada anual: si perdieron grosor o se desprendieron del forro, se reporta al fabricante o al proveedor de servicio."
      },
      {
        "q": "¿Sirven para todas las marcas de pantalón?",
        "a": "No son una pieza universal. Cada fabricante las monta con su propio método sobre su propio forro. Al cotizar hay que decir de qué pantalón se trata."
      },
      {
        "q": "¿Las recomiendan siempre?",
        "a": "Para operación estructural, sí. Si tu gente hace ataque interior, búsqueda o extricación, va a trabajar hincada. Para un uso ocasional o para brigada de conato, es una opción que se puede valorar según presupuesto."
      }
    ],
    sinonimos: [
          "rodilleras para pantalón de bombero",
          "almohadillas de rodilla",
          "protección de rodilla turnout",
          "knee pads bombero",
          "rodilleras de forro"
    ],
    sinonimosNota: "No confundir con las rodilleras exteriores de trabajo: estas van dentro del conjunto, sobre el forro.",
    comparativa: {
          "titulo": "Rodillera interna o refuerzo exterior",
          "intro": "Se confunden todo el tiempo y hacen cosas distintas. Lo ideal es tener ambas.",
          "columnas": [
                "Criterio",
                "Rodillera de espuma (interna)",
                "Refuerzo exterior de rodilla"
          ],
          "filas": [
                [
                      "Qué resuelve",
                      "Impacto y presión al trabajar hincado",
                      "Abrasión contra escombro y concreto"
                ],
                [
                      "Dónde va",
                      "Sobre el forro, dentro del conjunto",
                      "Sobre la capa exterior"
                ],
                [
                      "Se puede agregar después",
                      "No: implica abrir el conjunto",
                      "No: es parte de la construcción"
                ],
                [
                      "Viene de serie",
                      "Normalmente no, es opción",
                      "Habitual en pantalón estructural"
                ]
          ]
    },
    relacionados: [
          {
                "label": "Pantalonera estructural: la rodillera es opción de esta pieza",
                "href": "/trajes/estructural/pantalonera/"
          },
          {
                "label": "Cómo especificar un traje sin dejar huecos",
                "href": "/#especificar"
          },
          {
                "label": "Errores frecuentes al comprar traje",
                "href": "/#errores"
          }
    ],
  },
  {
    "slug": "arnes-escape",
    "familia": "estructural",
    "nombreCard": "Arnés interno de escape",
    "nombre": "Arnés interno de escape",
    "seoTitle": "Arnés de escape para bombero | NFPA 1983 | México",
    "seoDescription": "Arnés de escape para bombero cosido en la pantalonera, con perneras flotantes y hebilla de perfil bajo. Se certifica bajo NFPA 1983, aparte del conjunto.",
    "keywords": [
      "arnés de escape para bombero",
      "NFPA 1983",
      "México"
    ],
    "eyebrow": "Pieza · Conjunto estructural",
    "h1": "Arnés interno de escape para bombero",
    "h1Accent": "integrado a la pantalonera",
    "lead": "Sistema de autorrescate cosido dentro del pantalón: siempre puesto, sin volumen exterior y listo cuando la salida por escalera ya no existe.",
    "descRight": [
      "El arnés de escape resuelve un escenario concreto: el elemento queda atrapado en un piso alto y la ruta de salida se cerró. Un sistema que se guarda en la unidad no sirve en ese momento; por eso este va cosido dentro de la pantalonera y sale de la estación puesto.",
      "Se certifica bajo NFPA 1983, una norma distinta a la del conjunto estructural. Es un detalle que confunde en licitaciones: el traje cumple una norma y el arnés otra, y ambas deben aparecer en el expediente."
    ],
    "meta": [
      "NFPA 1983",
      "Perneras flotantes",
      "Hebilla de perfil bajo",
      "Siempre puesto"
    ],
    "resumen": [
      "La ventaja del arnés interno es que no depende de que alguien se acuerde de tomarlo. Va integrado a la pantalonera, ocupa el espacio de una costura y no interfiere con el equipo de respiración ni con los tirantes. El elemento sale con él puesto en cada salida.",
      "Las perneras flotantes permiten que el arnés se mueva con el cuerpo mientras se camina o se gatea, y solo se tensa cuando recibe carga. La hebilla de perfil bajo evita el punto de presión sobre la cadera, que es donde apoya el cinturón de herramientas."
    ],
    "puntosClave": [
      "Cosido dentro de la pantalonera: siempre disponible, sin volumen exterior",
      "Se certifica bajo NFPA 1983, no bajo la norma del conjunto",
      "Perneras flotantes: acompañan el movimiento y tensan solo bajo carga",
      "Hebilla de perfil bajo, para no crear punto de presión en cadera",
      "Requiere definir el cierre de cintura de la pantalonera desde la orden",
      "Se complementa con bolsa para cuerda, gancho y descensor"
    ],
    "images": [
      {
        "src": "/images/piezas/arnes-interno-de-escape.svg",
        "alt": "Arnés interno de escape para bombero integrado a la pantalonera"
      },
      {
        "src": "/images/productos/pantalonera-estructural-bombero.svg",
        "alt": "Pantalonera estructural con arnés interno"
      },
      {
        "src": "/images/piezas/pantalonera-estructural.svg",
        "alt": "Pantalonera estructural de tres capas"
      }
    ],
    "fichaTecnica": [
      {
        "grupo": "Norma y certificación",
        "filas": [
          {
            "campo": "Norma aplicable",
            "valor": "NFPA 1983",
            "nota": "Distinta a la del conjunto estructural (NFPA 1970)"
          },
          {
            "campo": "Documentación",
            "valor": "Certificado propio del arnés",
            "nota": "Debe aparecer en el expediente además del certificado del traje"
          },
          {
            "campo": "Clase",
            "valor": "Clase de escape",
            "nota": "No sustituye a un arnés de trabajo en altura"
          }
        ]
      },
      {
        "grupo": "Construcción",
        "filas": [
          {
            "campo": "Integración",
            "valor": "Cosido dentro de la pantalonera",
            "nota": "Sin volumen exterior; no interfiere con tirantes ni ERA"
          },
          {
            "campo": "Perneras",
            "valor": "Flotantes",
            "nota": "Acompañan el movimiento; tensan solo bajo carga"
          },
          {
            "campo": "Hebilla",
            "valor": "De perfil bajo",
            "nota": "Evita punto de presión bajo el cinturón de herramientas"
          },
          {
            "campo": "Punto de anclaje",
            "valor": "Frontal, accesible con guante puesto",
            "nota": "Requisito operativo, no estético"
          }
        ]
      },
      {
        "grupo": "Configuración",
        "filas": [
          {
            "campo": "Cierre de cintura del pantalón",
            "valor": "Cinturón de escape o compatible",
            "nota": "Se define al ordenar la pantalonera; no se cambia después"
          },
          {
            "campo": "Bolsa de sistema",
            "valor": "Para cuerda, gancho y descensor",
            "nota": "Se pide como opción del pantalón"
          },
          {
            "campo": "Cinturón de escape independiente",
            "valor": "Alternativa al arnés cosido",
            "nota": "Menor integración, mayor facilidad de reposición"
          }
        ]
      },
      {
        "grupo": "Ciclo de servicio",
        "filas": [
          {
            "campo": "Inspección",
            "valor": "Según instrucciones del fabricante del arnés",
            "nota": "Es un elemento de vida, con su propio protocolo"
          },
          {
            "campo": "Retiro tras uso con carga",
            "valor": "Obligatorio",
            "nota": "Un arnés que soportó una caída se retira, no se reinspecciona"
          },
          {
            "campo": "Entrenamiento",
            "valor": "Indispensable antes de poner en servicio",
            "nota": "El equipo sin práctica no habilita la maniobra"
          }
        ]
      }
    ],
    "incluye": [
      "Arnés clase escape cosido en la pantalonera",
      "Perneras flotantes y hebilla de perfil bajo",
      "Certificado del arnés bajo NFPA 1983"
    ],
    "noIncluye": [
      "Cuerda, gancho y descensor: son el sistema de descenso, se cotizan aparte",
      "Bolsa de sistema: es opción del pantalón",
      "Capacitación de uso: se cotiza como servicio",
      "Pantalonera: el arnés es una opción de esa pieza"
    ],
    "errores": [
      {
        "error": "Comprar el arnés y no el sistema de descenso",
        "realidad": "El arnés solo es el punto de conexión. Sin cuerda, gancho y descensor no hay autorrescate posible."
      },
      {
        "error": "Elegir el cierre de cintura equivocado",
        "realidad": "Si la pantalonera no se ordenó con cierre compatible, no hay forma de agregar el arnés después sin reemplazar la prenda."
      },
      {
        "error": "Suponer que el certificado del traje cubre el arnés",
        "realidad": "Son normas distintas. En licitación se piden los dos certificados por separado y omitir uno descalifica la propuesta."
      },
      {
        "error": "Ponerlo en servicio sin entrenamiento",
        "realidad": "El autorrescate es una maniobra que se ejecuta bajo estrés extremo. Equipo sin práctica es equipo que no se va a usar bien."
      },
      {
        "error": "Reinspeccionar un arnés que ya soportó una caída",
        "realidad": "Se retira. La carga deforma la fibra de forma que no siempre es visible."
      }
    ],
    "aplicaciones": [
      {
        "titulo": "Ataque interior en edificación",
        "desc": "Escenario donde la ruta de salida puede cerrarse y no hay escalera disponible."
      },
      {
        "titulo": "Ciudades con edificación vertical",
        "desc": "Cuerpos que operan en zonas con niveles superiores y accesos limitados."
      },
      {
        "titulo": "Brigada industrial en altura",
        "desc": "Plantas con estructuras, racks y plataformas elevadas."
      },
      {
        "titulo": "Compra por licitación",
        "desc": "Cuando el pliego exige sistema de escape con certificado NFPA 1983."
      }
    ],
    "faqs": [
      {
        "q": "¿Qué diferencia hay entre arnés de escape y arnés de trabajo en altura?",
        "a": "El de escape está diseñado para una maniobra de emergencia: bajar una vez, rápido, desde una posición comprometida. El de trabajo en altura está pensado para suspensión prolongada y posicionamiento. No son intercambiables y se certifican distinto."
      },
      {
        "q": "¿Por qué se certifica bajo NFPA 1983 y no bajo la del traje?",
        "a": "Porque es equipo de vida, no ropa de protección. La NFPA 1970 cubre el desempeño térmico del conjunto; la NFPA 1983 cubre cuerdas, arneses y herrajes de rescate. Ambos certificados deben ir en el expediente de compra."
      },
      {
        "q": "¿Puedo agregarlo a una pantalonera que ya tengo?",
        "a": "Solo si esa pantalonera se ordenó con el cierre de cintura compatible. Si no, no hay forma de integrarlo sin reemplazar la prenda. Es la razón por la que conviene decidirlo desde la primera compra, aunque el sistema de descenso se adquiera después."
      },
      {
        "q": "¿Incluye la cuerda y el descensor?",
        "a": "No. El arnés es el punto de conexión al cuerpo; el sistema de descenso —cuerda, gancho y descensor— se cotiza aparte y suele guardarse en una bolsa integrada al pantalón. Se pueden comprar juntos o por etapas."
      },
      {
        "q": "¿Estorba con el equipo de respiración?",
        "a": "No debería. Va cosido dentro de la pantalonera, sin volumen exterior, y la hebilla es de perfil bajo precisamente para no crear un punto de presión donde apoya el cinturón o la placa del ERA."
      },
      {
        "q": "¿Qué son las perneras flotantes?",
        "a": "Son las cintas que rodean el muslo y que no van fijas: acompañan el movimiento al caminar o gatear y solo se tensan cuando el arnés recibe carga. Eso evita la molestia constante que produce un arnés rígido durante toda la jornada."
      },
      {
        "q": "¿Qué pasa si se usa una vez?",
        "a": "Si soportó carga en una caída o descenso real, se retira de servicio. La deformación de la fibra no siempre es visible y la norma no permite reinspeccionar y devolver a servicio un elemento que ya trabajó bajo carga."
      },
      {
        "q": "¿Se necesita capacitación?",
        "a": "Sí, y es la parte que más se omite. El autorrescate se ejecuta bajo estrés extremo, con humo y sin visibilidad. Un arnés sin entrenamiento previo es equipo que no se va a usar bien. Podemos cotizar la capacitación junto con el equipo."
      }
    ],
    sinonimos: [
          "arnés de escape para bombero",
          "sistema de autorrescate",
          "cinturón de escape",
          "arnés clase escape",
          "escape belt",
          "arnés NFPA 1983"
    ],
    sinonimosNota: "En pliegos aparece como sistema de escape o de autorrescate. El arnés es solo una parte: el sistema incluye cuerda, gancho y descensor.",
    comparativa: {
          "titulo": "Arnés cosido o cinturón de escape independiente",
          "intro": "Dos formas de resolver el mismo escenario, con implicaciones distintas de compra y de reposición.",
          "columnas": [
                "Criterio",
                "Arnés cosido a la pantalonera",
                "Cinturón de escape independiente"
          ],
          "filas": [
                [
                      "Disponibilidad",
                      "Siempre puesto: sale con el elemento",
                      "Depende de que se coloque antes de la salida"
                ],
                [
                      "Volumen",
                      "Sin volumen exterior",
                      "Se suma sobre el traje"
                ],
                [
                      "Reposición",
                      "Ligada a la pantalonera",
                      "Se cambia solo, sin tocar el traje"
                ],
                [
                      "Decisión de compra",
                      "Se define al ordenar el pantalón",
                      "Se puede adquirir después"
                ]
          ]
    },
    relacionados: [
          {
                "label": "Pantalonera estructural: el cierre debe ser compatible",
                "href": "/trajes/estructural/pantalonera/"
          },
          {
                "label": "Normas aplicables: por qué son dos certificados",
                "href": "/#normas"
          },
          {
                "label": "Chaquetón estructural: el resto del conjunto",
                "href": "/trajes/estructural/chaqueton/"
          }
    ],
  },
  {
    "slug": "monja",
    "familia": "estructural",
    "nombreCard": "Capucha antipartículas (monja)",
    "nombre": "Capucha antipartículas (monja)",
    "seoTitle": "Monja para bombero | capucha antipartículas | México",
    "seoDescription": "Monja para bombero con barrera de partículas: bloquea el hollín fino en cuello y mandíbula y sella la interfaz con casco, chaquetón y máscara del ERA.",
    "keywords": [
      "monja para bombero",
      "capucha antipartículas",
      "México"
    ],
    "eyebrow": "Pieza · Conjunto estructural",
    "h1": "Monja para bombero",
    "h1Accent": "con barrera de partículas",
    "lead": "Cubre cabeza, cuello y orejas, y sella la unión entre casco, chaquetón y máscara. La versión con barrera bloquea las partículas submicrónicas del humo.",
    "descRight": [
      "Es la pieza más barata del conjunto y la que más impacto tiene en salud ocupacional. El cuello y la mandíbula son la zona de piel más permeable del cuerpo, y es justo la que queda expuesta al hollín cuando la capucha es de tejido tradicional.",
      "La diferencia de precio entre una monja de Nomex convencional y una con barrera de partículas es pequeña; la diferencia en exposición acumulada a lo largo de una carrera, no. Por eso es la primera pieza que recomendamos actualizar en una dotación existente."
    ],
    "meta": [
      "Barrera de partículas",
      "Interfaz con ERA",
      "Doble capa",
      "Salud ocupacional"
    ],
    "resumen": [
      "Hay dos generaciones conviviendo en el mercado. La monja tradicional es un tejido aramídico elástico de dos o tres capas: protege del calor, pero deja pasar las partículas finas del humo. La capucha con barrera de partículas incorpora una capa filtrante en la zona de cuello y mandíbula sin sacrificar la transpiración.",
      "El otro punto crítico es el sellado. La monja no trabaja sola: cierra la interfaz entre el casco, el cuello del chaquetón y la máscara del equipo de respiración. Si no ajusta con la máscara que ya usas, deja una vía de entrada abierta por más buena que sea la tela."
    ],
    "puntosClave": [
      "Bloquea partículas submicrónicas en cuello y mandíbula, la piel más permeable",
      "Sella la interfaz entre casco, chaquetón y máscara del ERA",
      "Debe verificarse contra el modelo de máscara en uso",
      "Existe versión tradicional de Nomex y versión con barrera de partículas",
      "Es la actualización de menor costo y mayor impacto en una dotación",
      "Se repone con más frecuencia que el resto del conjunto"
    ],
    "images": [
      {
        "src": "/images/piezas/capucha-antiparticulas-monja.svg",
        "alt": "Monja o capucha antipartículas para bombero"
      },
      {
        "src": "/images/productos/monja-capucha-barrera-particulas-bombero.svg",
        "alt": "Capucha con barrera de partículas para bombero"
      },
      {
        "src": "/images/productos/traje-estructural-chaqueton-pantalon-bombero.svg",
        "alt": "Conjunto estructural completo"
      }
    ],
    "fichaTecnica": [
      {
        "grupo": "Norma y certificación",
        "filas": [
          {
            "campo": "Norma de desempeño",
            "valor": "NFPA 1970, edición 2025",
            "nota": "Como elemento del conjunto estructural"
          },
          {
            "campo": "Barrera de partículas",
            "valor": "Opción de gama alta del mercado",
            "nota": "Fuentes de industria reportan que NFPA 1970 la vuelve obligatoria; conviene confirmarlo contra la ficha del fabricante"
          },
          {
            "campo": "Alcance",
            "valor": "Elemento del conjunto",
            "nota": "Se certifica junto con el ensemble"
          }
        ]
      },
      {
        "grupo": "Construcción",
        "filas": [
          {
            "campo": "Tipo",
            "valor": "Tradicional de aramida o con barrera de partículas",
            "nota": "Dos generaciones distintas conviviendo en el mercado"
          },
          {
            "campo": "Capas",
            "valor": "Dos o tres, según modelo",
            "nota": "La barrera se incorpora en cuello y mandíbula"
          },
          {
            "campo": "Material base",
            "valor": "Tejido aramídico elástico",
            "nota": "Debe recuperar forma tras el lavado"
          },
          {
            "campo": "Zona reforzada",
            "valor": "Cuello y mandíbula",
            "nota": "Piel más permeable del cuerpo"
          },
          {
            "campo": "Interfaz",
            "valor": "Sellado con máscara del equipo de respiración",
            "nota": "Se verifica contra el modelo en uso"
          }
        ]
      },
      {
        "grupo": "Configuración",
        "filas": [
          {
            "campo": "Talla",
            "valor": "Única en la mayoría de modelos",
            "nota": "Algunos fabricantes ofrecen talla extendida"
          },
          {
            "campo": "Compatibilidad",
            "valor": "Según modelo de máscara del ERA",
            "nota": "Dato obligatorio al cotizar"
          },
          {
            "campo": "Largo de cuello",
            "valor": "Según cobertura deseada bajo el chaquetón",
            "nota": "Debe quedar bajo el cuello de la prenda, no encima"
          }
        ]
      },
      {
        "grupo": "Ciclo de servicio",
        "filas": [
          {
            "campo": "Lavado",
            "valor": "Después de cada exposición a productos de combustión",
            "nota": "Es la pieza que más contaminante retiene"
          },
          {
            "campo": "Reposición",
            "valor": "Más frecuente que el resto del conjunto",
            "nota": "Pierde elasticidad y capacidad de sellado"
          },
          {
            "campo": "Retiro",
            "valor": "10 años desde fabricación como máximo",
            "nota": "En la práctica se repone mucho antes"
          }
        ]
      }
    ],
    "incluye": [
      "Capucha con la configuración de capas especificada",
      "Zona de barrera en cuello y mandíbula, si se pide con barrera de partículas"
    ],
    "noIncluye": [
      "Máscara del equipo de respiración",
      "Casco",
      "Verificación de sellado en campo: es responsabilidad del usuario con su propio equipo"
    ],
    "errores": [
      {
        "error": "Comprar la monja más barata para cerrar la dotación",
        "realidad": "Es la pieza donde la diferencia de precio es menor y la diferencia de exposición mayor. Ahorrar aquí es el peor cambio de la lista."
      },
      {
        "error": "No verificar compatibilidad con la máscara en uso",
        "realidad": "Si no sella contra la máscara del ERA, deja una vía de entrada abierta por más buena que sea la tela."
      },
      {
        "error": "Usarla sobre el cuello del chaquetón",
        "realidad": "Va debajo. Colocada encima deja un canal directo hacia el cuello, que es justo lo que se busca cerrar."
      },
      {
        "error": "Lavarla solo cuando se ve sucia",
        "realidad": "Es la prenda que más contaminante retiene y el hollín fino no siempre se ve. Se lava después de exposición a productos de combustión."
      },
      {
        "error": "Esperar a que dure diez años como el traje",
        "realidad": "Pierde elasticidad y capacidad de sellado mucho antes. Cuando deja de ajustar, deja de proteger."
      }
    ],
    "aplicaciones": [
      {
        "titulo": "Ataque interior",
        "desc": "Exposición directa a humo y productos de combustión."
      },
      {
        "titulo": "Actualización de dotación existente",
        "desc": "Cambio de menor costo y mayor impacto en salud ocupacional."
      },
      {
        "titulo": "Brigada industrial",
        "desc": "Complemento del conjunto en ambientes con humo."
      },
      {
        "titulo": "Reposición periódica",
        "desc": "Pieza de consumo dentro del ciclo de servicio del conjunto."
      }
    ],
    "faqs": [
      {
        "q": "¿Qué diferencia hay entre una monja tradicional y una con barrera de partículas?",
        "a": "La tradicional es tejido aramídico elástico: protege del calor pero deja pasar las partículas finas del humo. La de barrera incorpora una capa filtrante en cuello y mandíbula, que es donde la piel absorbe más. La diferencia de precio es pequeña; la de exposición acumulada, no."
      },
      {
        "q": "¿Por qué importa tanto el cuello y la mandíbula?",
        "a": "Porque es la zona de piel más permeable del cuerpo y la que queda menos cubierta por el casco y el chaquetón. Es la vía de entrada principal de los productos de combustión que se depositan en el traje durante un incendio."
      },
      {
        "q": "¿Es obligatoria la barrera de partículas?",
        "a": "En la edición 2018 de la antigua NFPA 1971 era opcional. Fuentes de la industria reportan que la NFPA 1970 la vuelve obligatoria, pero conviene confirmarlo contra la ficha técnica del fabricante y contra el texto de la norma antes de afirmarlo en un pliego."
      },
      {
        "q": "¿Sirve con cualquier máscara de equipo de respiración?",
        "a": "No necesariamente. El sellado se logra en la interfaz con la máscara, y esa geometría cambia entre fabricantes. Al cotizar hay que decir qué modelo de ERA usa tu gente: es un dato tan importante como la talla."
      },
      {
        "q": "¿Va sobre o debajo del cuello del chaquetón?",
        "a": "Debajo. Colocada por encima deja un canal directo hacia el cuello, justo lo contrario de lo que se busca. Es un error de uso frecuente que anula el beneficio de la pieza."
      },
      {
        "q": "¿Cada cuánto se lava?",
        "a": "Después de cada exposición a productos de combustión, no cuando se ve sucia. El hollín fino no siempre es visible y es el que queda en contacto con la piel durante horas si la capucha se guarda sin lavar."
      },
      {
        "q": "¿Cada cuánto se repone?",
        "a": "Más seguido que el resto del conjunto. Aunque el retiro máximo es a los diez años como el traje, en la práctica pierde elasticidad y capacidad de sellado mucho antes. Cuando deja de ajustar contra la máscara, deja de proteger."
      },
      {
        "q": "¿Vale la pena cambiarla si el resto del traje está en buen estado?",
        "a": "Es exactamente lo que recomendamos. Es la actualización de menor costo y mayor impacto en salud ocupacional de toda la dotación: no requiere cambiar el traje ni reentrenar a nadie, y reduce exposición desde el primer turno."
      }
    ],
    sinonimos: [
          "monja de bombero",
          "capucha antipartículas",
          "escafandra de bombero",
          "capuchón Nomex",
          "verdugo",
          "balaclava para bombero",
          "hood barrera de partículas"
    ],
    sinonimosNota: "Monja y escafandra son los términos más usados en México; en catálogo aparece como hood o capucha. Todos nombran la misma pieza.",
    comparativa: {
          "titulo": "Monja tradicional o con barrera de partículas",
          "intro": "La diferencia de precio es de las más pequeñas del conjunto. La diferencia de exposición acumulada, no.",
          "columnas": [
                "Criterio",
                "Tradicional de aramida",
                "Con barrera de partículas"
          ],
          "filas": [
                [
                      "Protección térmica",
                      "Sí, es su función original",
                      "Sí, equivalente"
                ],
                [
                      "Partículas finas del humo",
                      "Las deja pasar",
                      "Las bloquea en cuello y mandíbula"
                ],
                [
                      "Transpiración",
                      "Alta",
                      "Alta: la barrera se concentra en la zona crítica"
                ],
                [
                      "Cuándo conviene",
                      "Uso ocasional o presupuesto muy ajustado",
                      "Cualquier operación con exposición a humo"
                ]
          ]
    },
    relacionados: [
          {
                "label": "Chaquetón estructural: la monja va debajo de su cuello",
                "href": "/trajes/estructural/chaqueton/"
          },
          {
                "label": "Vida útil y servicio: por qué se repone antes que el traje",
                "href": "/#vida-util"
          },
          {
                "label": "Ver las seis familias de traje",
                "href": "/trajes/"
          }
    ],
  },
  {
    "slug": "conjunto",
    "familia": "brigadista",
    "nombreCard": "Conjunto de brigada contra fuego incipiente",
    "nombre": "Conjunto de brigada contra fuego incipiente",
    "seoTitle": "Traje de brigada contra incendio | conjunto | México",
    "seoDescription": "Traje de brigada contra incendio: chaquetón y pantalón con capa inherente y forro desmontable, para conato en industria. Cumple la dotación de la NOM-002-STPS.",
    "keywords": [
      "traje de brigada contra incendio",
      "conjunto",
      "México"
    ],
    "eyebrow": "Pieza · Brigada industrial",
    "h1": "Traje de brigada contra incendio",
    "h1Accent": "chaquetón y pantalón",
    "lead": "El conjunto con el que una empresa cumple la dotación de su brigada: capa externa inherente, forro desmontable y refuerzos donde se desgasta.",
    "descRight": [
      "Es el equipo pensado para el conato: el fuego que todavía se controla con extintor o con manguera de gabinete, mientras se evacúa y se espera al cuerpo de bomberos. Cubre ese escenario y hasta ahí llega, que es exactamente lo que la mayoría de las plantas necesita.",
      "Se cotiza como conjunto pero se factura por pieza, porque tu área de compras necesita comparar partida por partida y tu auditoría necesita el respaldo documental. Si el análisis de riesgo indica ataque interior, te lo decimos antes: ahí lo que corresponde es estructural."
    ],
    "meta": [
      "NOM-002-STPS-2010",
      "Forro desmontable",
      "Capa inherente",
      "Desglose por pieza"
    ],
    "resumen": [
      "El conjunto de brigada se construye distinto al estructural. La capa externa es inherentemente resistente a la flama —la protección está en la fibra, no en un acabado que se lava— y el forro va desmontable, con barrera de humedad y barrera térmica que se separan para lavado e inspección. Eso baja el costo y facilita el mantenimiento en una planta que no tiene taller de EPP.",
      "Los refuerzos van donde realmente se gasta: rodillas y valencianas. La cinta reflejante se coloca en mangas, pecho, faldón y pierna, porque buena parte de los conatos ocurren de noche o en zonas con poca luz. Los tirantes tipo X reparten el peso del pantalón sin herrajes que estorben."
    ],
    "puntosClave": [
      "Pensado para conato y primera respuesta, no para ataque interior",
      "Capa externa inherente: la protección no se va con los lavados",
      "Forro desmontable con barrera de humedad y barrera térmica",
      "Refuerzos en rodillas y valencianas, que es donde se gasta",
      "Cinta reflejante en mangas, pecho, faldón y pierna",
      "Se cotiza desglosado por pieza para tu orden de compra"
    ],
    "images": [
      {
        "src": "/images/piezas/conjunto-de-brigada-contra-fuego-incipiente.svg",
        "alt": "Conjunto de brigada contra fuego incipiente: chaquetón y pantalón"
      },
      {
        "src": "/images/productos/traje-brigadista-industrial-bombero.svg",
        "alt": "Traje de brigadista industrial"
      },
      {
        "src": "/images/productos/combo-brigadista-industrial.svg",
        "alt": "Combo completo de brigadista industrial"
      }
    ],
    "fichaTecnica": [
      {
        "grupo": "Norma y cumplimiento",
        "filas": [
          {
            "campo": "Obligación en México",
            "valor": "NOM-002-STPS-2010, cláusula 5.9",
            "nota": "Dotar de EPP a los integrantes de la brigada contra incendio"
          },
          {
            "campo": "Norma de EPP aplicable",
            "valor": "NOM-017-STPS-2024",
            "nota": "Vigente desde el 28-sep-2025; sustituyó a la de 2008"
          },
          {
            "campo": "Referencia de producto",
            "valor": "Según el fabricante",
            "nota": "En México no existe NOM de producto para traje de bombero"
          },
          {
            "campo": "Alcance declarado",
            "valor": "Fuego incipiente y primera respuesta",
            "nota": "Debe venir por escrito en la ficha técnica"
          }
        ]
      },
      {
        "grupo": "Construcción",
        "filas": [
          {
            "campo": "Capa externa",
            "valor": "Aramida inherente tipo Nomex con Kevlar",
            "nota": "Gramaje típico de mercado: 6.0 oz/yd²"
          },
          {
            "campo": "Forro",
            "valor": "Desmontable, de dos capas",
            "nota": "Barrera de humedad más barrera térmica"
          },
          {
            "campo": "Refuerzos",
            "valor": "Rodillas y valencianas",
            "nota": "Zonas de mayor desgaste"
          },
          {
            "campo": "Cinta reflejante",
            "valor": "En mangas, pecho, faldón y pierna",
            "nota": "Ancho típico de 5 cm"
          },
          {
            "campo": "Cierre",
            "valor": "Broches de presión, ganchos y aros D",
            "nota": "Sin cierre metálico expuesto"
          }
        ]
      },
      {
        "grupo": "Configuración",
        "filas": [
          {
            "campo": "Tallas",
            "valor": "Por elemento de la brigada",
            "nota": "Conviene levantar medidas, no estimar por promedio"
          },
          {
            "campo": "Tirantes",
            "valor": "Tipo X de elástico",
            "nota": "Incluidos o cotizados aparte según fabricante"
          },
          {
            "campo": "Identificación",
            "valor": "Bordado o serigrafía de empresa",
            "nota": "Se define en la orden"
          },
          {
            "campo": "Piezas",
            "valor": "Conjunto completo o por pieza",
            "nota": "Sin compra mínima"
          }
        ]
      },
      {
        "grupo": "Ciclo de servicio",
        "filas": [
          {
            "campo": "Lavado",
            "valor": "Forro desmontado",
            "nota": "Facilita el mantenimiento sin taller especializado"
          },
          {
            "campo": "Inspección",
            "valor": "Periódica, según programa interno",
            "nota": "Documentarla sirve en auditoría de la STPS"
          },
          {
            "campo": "Reposición",
            "valor": "Por pieza",
            "nota": "La pantalonera se repone antes que el chaquetón"
          }
        ]
      }
    ],
    "incluye": [
      "Chaquetón con capa externa inherente y forro desmontable",
      "Pantalón con refuerzos en rodillas y valencianas",
      "Cinta reflejante en la disposición especificada",
      "Ficha técnica con composición y alcance de uso"
    ],
    "noIncluye": [
      "Casco, guantes, botas y monja: se cotizan como complementos del combo",
      "Equipo de respiración autónoma",
      "Capacitación de uso de la brigada",
      "Bordado o serigrafía si no se especifica en la orden"
    ],
    "errores": [
      {
        "error": "Comprarlo creyendo que sirve para ataque interior",
        "realidad": "Está pensado para conato. Si tu brigada entra a espacios con humo o fuego declarado, lo que corresponde es un conjunto estructural certificado."
      },
      {
        "error": "Aceptar un precio global sin desglose",
        "realidad": "Tu área de compras no puede comparar dos ofertas globales. Pide el desglose por pieza aunque compres el combo completo."
      },
      {
        "error": "No pedir el alcance por escrito",
        "realidad": "Si la ficha no dice para qué escenario está pensado el traje, no tienes cómo defender la compra en una auditoría."
      },
      {
        "error": "Estimar tallas por promedio",
        "realidad": "Una brigada de veinte personas no cabe en tres tallas. El traje que no ajusta se deja de usar, y eso es peor que no tenerlo."
      },
      {
        "error": "Olvidar el resto del combo",
        "realidad": "El traje sin casco, guantes, botas y monja no equipa a nadie. Cotiza el conjunto completo aunque lo compres por etapas."
      }
    ],
    "aplicaciones": [
      {
        "titulo": "Brigada de planta",
        "desc": "Manufactura, alimentos, automotriz y bodega con brigada formal."
      },
      {
        "titulo": "Petroquímica y energía",
        "desc": "Donde la brigada atiende conato mientras llega el equipo especializado."
      },
      {
        "titulo": "Hotelería y corporativo",
        "desc": "Brigadas de edificio con atribución de primera respuesta."
      },
      {
        "titulo": "Cumplimiento documentado",
        "desc": "Cuando la auditoría interna o la STPS pide evidencia de dotación."
      }
    ],
    "faqs": [
      {
        "q": "¿Este traje cumple con la NOM-002-STPS?",
        "a": "La NOM-002-STPS-2010 obliga en su cláusula 5.9 a dotar de equipo de protección personal a los integrantes de la brigada, conforme a la NOM-017-STPS-2024 vigente. No especifica marca ni norma de producto: lo que define qué traje corresponde es el análisis de riesgo de tu centro de trabajo. Este conjunto está pensado para brigada de conato."
      },
      {
        "q": "¿Sirve para entrar a un incendio declarado?",
        "a": "No. Está diseñado para fuego incipiente: control con extintor, contención inicial y evacuación. Si tu brigada entra a espacios con humo o a fuego declarado, necesitas un conjunto estructural de tres capas certificado. Te lo decimos aunque implique una venta mayor de tu lado."
      },
      {
        "q": "¿Por qué el forro es desmontable?",
        "a": "Para que puedas lavarlo e inspeccionarlo por separado sin taller especializado. En una planta que no tiene área de mantenimiento de EPP, eso hace la diferencia entre un programa de cuidado que se cumple y uno que se abandona a los tres meses."
      },
      {
        "q": "¿Qué significa que la capa sea inherente?",
        "a": "Que la resistencia a la flama está en la propia fibra, no en un acabado químico aplicado a la tela. La diferencia práctica: un tratamiento se degrada con los lavados y nadie lleva la cuenta de cuántos van; una fibra inherente protege igual el primer día que el último."
      },
      {
        "q": "¿Puedo comprar solo algunas piezas?",
        "a": "Sí, sin compra mínima. De hecho es lo habitual en reposición: la pantalonera se gasta antes que el chaquetón por rodillas y valencianas. Al comprar suelto conviene mantener la misma configuración para que la dotación se vea uniforme."
      },
      {
        "q": "¿Incluye casco, guantes y botas?",
        "a": "No, se cotizan como complementos. Los conseguimos para que no tengas que armar el pedido con tres proveedores, pero van desglosados en la cotización para que compras pueda revisar cada partida."
      },
      {
        "q": "¿Se puede bordar el logotipo de la empresa?",
        "a": "Sí, bordado o serigrafía. Hay que definirlo en la orden porque se aplica durante la confección: agregarlo después implica intervenir una prenda terminada."
      },
      {
        "q": "¿Qué documentación entregan para auditoría?",
        "a": "Ficha técnica con composición y alcance de uso, y factura CFDI. Si tu auditoría interna o la STPS piden evidencia de la dotación, ese expediente es lo que respalda la compra."
      }
    ],
    "sinonimos": [
      "traje de brigada contra incendio",
      "traje de brigadista industrial",
      "equipo de brigada contra incendio",
      "conjunto de brigada",
      "traje de conato",
      "industrial firefighting suit"
    ],
    "sinonimosNota": "En México se pide como traje de brigada o de brigadista. En catálogo de importación aparece como industrial firefighting o proximity light: conviene revisar el alcance declarado, no el nombre.",
    "comparativa": {
      "titulo": "Conjunto de brigada u overol ignífugo",
      "intro": "Las dos formas de vestir a una brigada industrial. Resuelven cosas distintas.",
      "columnas": [
        "Criterio",
        "Conjunto de brigada",
        "Overol ignífugo NFPA 2112"
      ],
      "filas": [
        [
          "Escenario",
          "Conato de incendio con intervención activa",
          "Protección del trabajador ante flamazo"
        ],
        [
          "Construcción",
          "Dos piezas con forro desmontable",
          "Una pieza monocapa"
        ],
        [
          "Uso",
          "Se pone al activarse la brigada",
          "Se usa toda la jornada como uniforme"
        ],
        [
          "Quién lo usa",
          "Integrantes de la brigada",
          "Personal expuesto a riesgo de flash fire"
        ]
      ]
    },
    "relacionados": [
      {
        "label": "Overol ignífugo NFPA 2112: la otra forma de vestir la brigada",
        "href": "/trajes/brigadista/overol/"
      },
      {
        "label": "Traje estructural: cuándo tu brigada necesita subir de nivel",
        "href": "/trajes/estructural/"
      },
      {
        "label": "Normas aplicables: qué obliga realmente la ley en México",
        "href": "/#normas"
      },
      {
        "label": "Cómo especificar sin dejar huecos en la cotización",
        "href": "/#especificar"
      }
    ]
  },
  {
    "slug": "overol",
    "familia": "brigadista",
    "nombreCard": "Overol ignífugo NFPA 2112",
    "nombre": "Overol ignífugo NFPA 2112",
    "seoTitle": "Overol ignífugo NFPA 2112 | flash fire | México",
    "seoDescription": "Overol ignífugo NFPA 2112 en aramida inherente antiestática: protección ante flamazo para planta, petroquímica y energía. Tallas CH a XG con cierre de dos vías.",
    "keywords": [
      "overol ignífugo NFPA 2112",
      "flash fire",
      "México"
    ],
    "eyebrow": "Pieza · Brigada industrial",
    "h1": "Overol ignífugo NFPA 2112",
    "h1Accent": "para riesgo de flamazo",
    "lead": "La prenda base del personal expuesto a flash fire: una sola pieza en aramida inherente antiestática, certificada para exposición breve a flamazo.",
    "descRight": [
      "No es un traje de bombero: es ropa de trabajo que protege al operador durante los segundos de un flamazo, el tiempo suficiente para salir. Se usa toda la jornada, no solo cuando se activa la brigada, y por eso la comodidad y la transpiración pesan tanto como la certificación.",
      "Es la confusión más frecuente en compras industriales: un overol NFPA 2112 no sustituye a un traje estructural NFPA 1970. Protegen escenarios distintos y ninguno de los dos hace el trabajo del otro."
    ],
    "meta": [
      "NFPA 2112",
      "Aramida inherente",
      "Antiestático",
      "Uso de jornada"
    ],
    "resumen": [
      "El overol ignífugo se certifica bajo NFPA 2112, la norma de prendas contra flamazo industrial, y se selecciona con el criterio de NFPA 2113. La composición típica del mercado es aramida inherente con un porcentaje de fibra de carbono que le da propiedad antiestática, algo obligatorio donde hay atmósferas inflamables.",
      "La diferencia con la ropa de trabajo tratada es la misma de siempre: aquí la protección está en la fibra. Un algodón con acabado retardante pierde desempeño con los lavados industriales y nadie audita cuántos ciclos lleva. El inherente entrega lo mismo el primer día y el último."
    ],
    "puntosClave": [
      "Certificado NFPA 2112 para exposición breve a flamazo",
      "Aramida inherente: la protección está en la fibra, no en un acabado",
      "Componente antiestático para atmósferas inflamables",
      "Se usa toda la jornada, no solo durante la emergencia",
      "No sustituye a un traje estructural para ataque interior",
      "Cierre de dos vías y tallas CH a XG"
    ],
    "images": [
      {
        "src": "/images/piezas/overol-ignifugo-nfpa-2112.svg",
        "alt": "Overol ignífugo NFPA 2112 para riesgo de flamazo"
      },
      {
        "src": "/images/productos/traje-brigadista-industrial-bombero.svg",
        "alt": "Traje de brigadista industrial"
      },
      {
        "src": "/images/productos/combo-brigadista-industrial.svg",
        "alt": "Combo de brigadista industrial"
      }
    ],
    "fichaTecnica": [
      {
        "grupo": "Norma y certificación",
        "filas": [
          {
            "campo": "Norma de producto",
            "valor": "NFPA 2112",
            "nota": "Prendas resistentes a la flama para protección ante flash fire"
          },
          {
            "campo": "Norma de selección",
            "valor": "NFPA 2113",
            "nota": "Criterios de selección, cuidado, uso y mantenimiento"
          },
          {
            "campo": "Obligación en México",
            "valor": "NOM-017-STPS-2024",
            "nota": "El patrón debe proporcionar el EPP conforme al análisis de riesgo"
          },
          {
            "campo": "Lo que NO cubre",
            "valor": "Ataque interior a incendio estructural",
            "nota": "Para eso se requiere NFPA 1970"
          }
        ]
      },
      {
        "grupo": "Construcción",
        "filas": [
          {
            "campo": "Composición típica",
            "valor": "Aramida inherente con fibra de carbono antiestática",
            "nota": "Proporción según fabricante"
          },
          {
            "campo": "Construcción",
            "valor": "Una pieza, monocapa",
            "nota": "Sin barrera de humedad ni barrera térmica"
          },
          {
            "campo": "Cierre",
            "valor": "De dos vías, cubierto",
            "nota": "Facilita el acceso sin exponer el herraje"
          },
          {
            "campo": "Categoría de riesgo",
            "valor": "Nivel de arco eléctrico según modelo",
            "nota": "Verificar contra el estudio de arco de tu instalación"
          }
        ]
      },
      {
        "grupo": "Configuración",
        "filas": [
          {
            "campo": "Tallas",
            "valor": "CH, M, G y XG",
            "nota": "Algunos fabricantes ofrecen talla extendida"
          },
          {
            "campo": "Identificación",
            "valor": "Bordado o serigrafía resistente",
            "nota": "Debe ser compatible con la tela FR"
          },
          {
            "campo": "Color",
            "valor": "Según código interno de la planta",
            "nota": "Se define en la orden"
          }
        ]
      },
      {
        "grupo": "Ciclo de servicio",
        "filas": [
          {
            "campo": "Lavado",
            "valor": "Industrial, sin suavizante ni blanqueador",
            "nota": "Los aditivos pueden dejar residuo combustible"
          },
          {
            "campo": "Vida útil",
            "valor": "Por desgaste, no por fecha",
            "nota": "Se retira cuando hay daño, contaminación o pérdida de integridad"
          },
          {
            "campo": "Contaminación con hidrocarburo",
            "valor": "Motivo de retiro",
            "nota": "La prenda impregnada deja de proteger"
          }
        ]
      }
    ],
    "incluye": [
      "Overol de una pieza en aramida inherente antiestática",
      "Cierre de dos vías cubierto",
      "Ficha técnica con composición y certificación"
    ],
    "noIncluye": [
      "Casco, guantes, botas y protección facial",
      "Ropa interior resistente a la flama",
      "Bordado o serigrafía si no se especifica en la orden"
    ],
    "errores": [
      {
        "error": "Usarlo como traje de bombero",
        "realidad": "Un overol NFPA 2112 protege del flamazo durante segundos. No sustituye a un traje estructural NFPA 1970 para ataque interior."
      },
      {
        "error": "Comprar algodón con acabado retardante",
        "realidad": "El tratamiento se degrada con los lavados industriales y nadie lleva la cuenta de los ciclos. La fibra inherente no pierde desempeño."
      },
      {
        "error": "Lavarlo con suavizante o blanqueador",
        "realidad": "Los aditivos dejan residuo sobre la tela y ese residuo sí es combustible. Anula parte de la protección que pagaste."
      },
      {
        "error": "Seguir usándolo impregnado de hidrocarburo",
        "realidad": "Una prenda contaminada con combustible deja de proteger y se vuelve el problema. Es motivo de retiro inmediato, no de lavado."
      },
      {
        "error": "Ignorar el estudio de arco eléctrico",
        "realidad": "Si tu riesgo incluye arco además de flamazo, el nivel de protección se define con ese estudio, no con el catálogo."
      }
    ],
    "aplicaciones": [
      {
        "titulo": "Petroquímica y refinación",
        "desc": "Personal expuesto a atmósferas con riesgo de flamazo."
      },
      {
        "titulo": "Generación y distribución eléctrica",
        "desc": "Donde además del flamazo hay riesgo de arco."
      },
      {
        "titulo": "Manufactura con proceso caliente",
        "desc": "Fundición, tratamiento térmico y hornos industriales."
      },
      {
        "titulo": "Uniforme de brigada",
        "desc": "Como prenda base bajo el conjunto de brigada."
      }
    ],
    "faqs": [
      {
        "q": "¿Un overol NFPA 2112 sirve como traje de bombero?",
        "a": "No. Es la confusión más cara del sector. El 2112 protege al trabajador durante los segundos de un flamazo, el tiempo de salir. Un traje estructural bajo NFPA 1970 está construido con tres capas para entrar a un incendio. Son escenarios distintos y ninguno sustituye al otro."
      },
      {
        "q": "¿Cuál es la diferencia entre NFPA 2112 y NFPA 2113?",
        "a": "La 2112 es la norma del producto: define cómo debe comportarse la prenda ante flamazo. La 2113 es la norma de selección, cuidado, uso y mantenimiento: te dice cómo elegirla y cómo conservarla. En una compra bien hecha aparecen las dos."
      },
      {
        "q": "¿Qué significa antiestático y por qué importa?",
        "a": "Significa que la tela disipa la carga estática en vez de acumularla. Importa donde hay atmósferas inflamables: una chispa por descarga estática es una fuente de ignición como cualquier otra. Se logra sumando un porcentaje de fibra de carbono a la aramida."
      },
      {
        "q": "¿Cómo se lava?",
        "a": "Lavado industrial sin suavizante ni blanqueador. Esos aditivos dejan residuo sobre la fibra y el residuo sí arde. Es el error de mantenimiento más común y anula parte de la protección sin que se note a simple vista."
      },
      {
        "q": "¿Cuánto dura?",
        "a": "No tiene fecha de retiro como el traje estructural. Se retira por condición: daño mecánico, contaminación con hidrocarburo o pérdida de integridad de la tela. Un overol impregnado de combustible se retira aunque se vea nuevo."
      },
      {
        "q": "¿Sirve para riesgo de arco eléctrico?",
        "a": "Algunos modelos tienen valor de protección ante arco declarado, pero no todos. Si tu instalación tiene riesgo de arco, el nivel se define con el estudio de arco eléctrico de tu planta y no con el catálogo del proveedor."
      },
      {
        "q": "¿Se puede bordar el logotipo?",
        "a": "Sí, con hilo y método compatibles con tela resistente a la flama. Un bordado con hilo convencional introduce material combustible sobre la prenda: hay que especificarlo en la orden."
      },
      {
        "q": "¿Se usa debajo del conjunto de brigada?",
        "a": "Es lo recomendable cuando el mismo personal opera la brigada. El overol es la prenda base de jornada y el conjunto de brigada se coloca encima al activarse la emergencia."
      }
    ],
    "sinonimos": [
      "overol ignífugo",
      "overol FR",
      "overol antiflama",
      "coverall NFPA 2112",
      "overol resistente a la flama",
      "overol flash fire"
    ],
    "sinonimosNota": "En México se pide como overol ignífugo, antiflama o FR. En catálogo de importación aparece como FR coverall: es la misma prenda si está certificada bajo NFPA 2112.",
    "comparativa": {
      "titulo": "Inherente o tratado",
      "intro": "Las dos tecnologías que compiten en overol ignífugo. La diferencia se nota con los años, no en la primera compra.",
      "columnas": [
        "Criterio",
        "Fibra inherente",
        "Algodón con acabado retardante"
      ],
      "filas": [
        [
          "Dónde está la protección",
          "En la fibra misma",
          "En un tratamiento químico aplicado"
        ],
        [
          "Con los lavados",
          "No pierde desempeño",
          "Se degrada; nadie audita los ciclos"
        ],
        [
          "Costo inicial",
          "Mayor",
          "Menor"
        ],
        [
          "Costo por año de servicio",
          "Menor: dura más",
          "Mayor: reposición más frecuente"
        ]
      ]
    },
    "relacionados": [
      {
        "label": "Conjunto de brigada: el equipo para intervenir el conato",
        "href": "/trajes/brigadista/conjunto/"
      },
      {
        "label": "Traje estructural: para ataque interior, no flamazo",
        "href": "/trajes/estructural/"
      },
      {
        "label": "Normas aplicables en México",
        "href": "/#normas"
      }
    ]
  },
  {
    "slug": "chaqueton",
    "familia": "brigadista",
    "nombreCard": "Chaquetón de brigadista (pieza suelta)",
    "nombre": "Chaquetón de brigadista (pieza suelta)",
    "seoTitle": "Chaquetón de brigadista | pieza de reposición | México",
    "seoDescription": "Chaquetón de brigadista suelto para reposición: capa externa inherente, forro desmontable y cinta reflejante. Se pide con la misma configuración de tu dotación.",
    "keywords": [
      "chaquetón de brigadista",
      "pieza de reposición",
      "México"
    ],
    "eyebrow": "Pieza · Brigada industrial",
    "h1": "Chaquetón de brigadista",
    "h1Accent": "para reposición",
    "lead": "La prenda superior del conjunto de brigada, cotizada suelta: para reponer una pieza dañada o completar equipos sin volver a comprar el combo entero.",
    "descRight": [
      "En una brigada industrial las prendas no se gastan al mismo ritmo ni se pierden en pares. Se rompe un chaquetón, entra un integrante nuevo, cambia alguien de talla. Comprar el combo completo cada vez encarece la operación sin motivo.",
      "El punto que importa al reponer: la configuración. Si el chaquetón nuevo llega con otra disposición de cinta reflejante o distinto color, la brigada deja de verse uniforme y en una auditoría eso se nota. Guarda la ficha de la compra original."
    ],
    "meta": [
      "Pieza suelta",
      "Capa inherente",
      "Forro desmontable",
      "Sin compra mínima"
    ],
    "resumen": [
      "El chaquetón de brigadista comparte construcción con el del conjunto: capa externa inherentemente resistente a la flama, forro desmontable con barrera de humedad y barrera térmica, refuerzos en zonas de desgaste y cinta reflejante de alta visibilidad.",
      "Comprado suelto sirve para tres cosas: reponer una prenda dañada, incorporar a un integrante nuevo o corregir una talla mal estimada en la compra original. En los tres casos conviene pedirlo con la misma configuración que el resto de la dotación."
    ],
    "puntosClave": [
      "Misma construcción que el chaquetón del conjunto de brigada",
      "Se cotiza suelto, sin compra mínima",
      "Pide la misma configuración que tu dotación actual",
      "Capa externa inherente y forro desmontable",
      "Sirve para reposición, alta de personal o corrección de talla",
      "Guarda la ficha de la compra original para replicarla"
    ],
    "images": [
      {
        "src": "/images/piezas/chaqueton-de-brigadista-pieza-suelta.svg",
        "alt": "Chaquetón de brigadista para reposición"
      },
      {
        "src": "/images/productos/traje-brigadista-industrial-bombero.svg",
        "alt": "Traje de brigadista industrial"
      },
      {
        "src": "/images/productos/combo-brigadista-industrial.svg",
        "alt": "Combo de brigadista industrial"
      }
    ],
    "fichaTecnica": [
      {
        "grupo": "Norma y cumplimiento",
        "filas": [
          {
            "campo": "Obligación en México",
            "valor": "NOM-002-STPS-2010, cláusula 5.9",
            "nota": "Dotación de EPP a la brigada"
          },
          {
            "campo": "Norma de EPP",
            "valor": "NOM-017-STPS-2024",
            "nota": "Sustituyó a la NOM-017-STPS-2008"
          },
          {
            "campo": "Alcance",
            "valor": "Fuego incipiente y primera respuesta",
            "nota": "No es prenda de ataque interior"
          }
        ]
      },
      {
        "grupo": "Construcción",
        "filas": [
          {
            "campo": "Capa externa",
            "valor": "Aramida inherente",
            "nota": "Gramaje según configuración del conjunto"
          },
          {
            "campo": "Forro",
            "valor": "Desmontable de dos capas",
            "nota": "Barrera de humedad y barrera térmica"
          },
          {
            "campo": "Cinta reflejante",
            "valor": "Mangas, pecho y faldón",
            "nota": "Debe replicar la disposición de tu dotación"
          },
          {
            "campo": "Refuerzos",
            "valor": "Codos y hombros",
            "nota": "Zonas de contacto y arrastre"
          }
        ]
      },
      {
        "grupo": "Configuración",
        "filas": [
          {
            "campo": "Talla",
            "valor": "Por pecho y largo de manga",
            "nota": "Tomar medida del elemento, no estimar"
          },
          {
            "campo": "Identificación",
            "valor": "Bordado o serigrafía",
            "nota": "Replicar la de la dotación existente"
          },
          {
            "campo": "Color",
            "valor": "Según configuración original",
            "nota": "Dato de la ficha de la compra anterior"
          }
        ]
      }
    ],
    "incluye": [
      "Chaquetón con capa externa inherente",
      "Forro desmontable de dos capas",
      "Cinta reflejante en la disposición especificada"
    ],
    "noIncluye": [
      "Pantalonera: se cotiza por separado",
      "Casco, guantes, botas y monja",
      "Bordado si no se especifica en la orden"
    ],
    "errores": [
      {
        "error": "Pedirlo sin la ficha de la compra original",
        "realidad": "Sin ese dato el chaquetón nuevo puede llegar con otra cinta u otro color, y la dotación deja de verse uniforme."
      },
      {
        "error": "Estimar la talla del elemento nuevo",
        "realidad": "Una prenda que no ajusta se deja de usar. Vale más tomar la medida que ahorrarse la llamada."
      },
      {
        "error": "Mezclar chaquetón nuevo con pantalón muy desgastado",
        "realidad": "La protección del conjunto la define la pieza más deteriorada, no la más nueva."
      },
      {
        "error": "Comprar el combo completo para reponer una pieza",
        "realidad": "Encarece la operación sin necesidad. Las piezas se venden sueltas y sin mínimo."
      }
    ],
    "aplicaciones": [
      {
        "titulo": "Reposición por daño",
        "desc": "Rasgadura, quemadura o contaminación de una prenda en servicio."
      },
      {
        "titulo": "Alta de integrante",
        "desc": "Incorporación de personal nuevo a la brigada."
      },
      {
        "titulo": "Corrección de talla",
        "desc": "Cuando la compra original se estimó por promedio."
      },
      {
        "titulo": "Ampliación de brigada",
        "desc": "Crecimiento del equipo sin recomprar combos completos."
      }
    ],
    "faqs": [
      {
        "q": "¿Puedo comprar solo el chaquetón?",
        "a": "Sí, sin compra mínima. Es de las peticiones más frecuentes en brigada industrial, porque las prendas no se dañan en pares ni el personal rota completo. Lo único que pedimos es la configuración de tu dotación actual para que la pieza nueva llegue igual."
      },
      {
        "q": "¿Cómo replico la configuración de mi compra anterior?",
        "a": "Con la ficha técnica de esa compra: ahí viene el gramaje, la disposición de cinta reflejante, el color y el tipo de forro. Si no la conservas, mándanos fotos de la prenda actual y te ayudamos a identificar la configuración."
      },
      {
        "q": "¿Sirve para ataque interior?",
        "a": "No. Es prenda de brigada, pensada para conato y primera respuesta. Si tu operación cambió y ahora entran a fuego declarado, lo correcto es migrar a conjunto estructural, no reponer más chaquetones de brigada."
      },
      {
        "q": "¿Cómo tomo la talla?",
        "a": "Por medida de pecho y largo de manga del elemento. Te compartimos la guía del fabricante antes de pedir. Para altas de personal conviene medir en el momento y no estimar por la talla de camisa."
      },
      {
        "q": "¿Puedo mezclarlo con pantalón de otra marca?",
        "a": "Técnicamente se puede, pero la interfaz entre las dos prendas deja de estar diseñada como conjunto. Si vas a mezclar, revísalo con nosotros antes de comprar."
      },
      {
        "q": "¿Se puede bordar el logotipo?",
        "a": "Sí, y conviene replicar exactamente el de la dotación existente: mismo tipo de letra, misma posición. Se define en la orden porque se aplica durante la confección."
      },
      {
        "q": "¿Cuánto tarda la entrega de una pieza suelta?",
        "a": "Depende de si hay existencia en la configuración que necesitas o si se fabrica sobre pedido. Te lo confirmamos por escrito en la cotización, con fecha comprometida."
      },
      {
        "q": "¿Qué hago con el chaquetón que voy a reemplazar?",
        "a": "Si es por daño, se retira de servicio: no conviene dejarlo en el gabinete como respaldo, porque tarde o temprano alguien lo usa. Documenta la baja para tu expediente de EPP."
      }
    ],
    "sinonimos": [
      "chaquetón de brigadista",
      "chamarra de brigada contra incendio",
      "casaca de brigadista",
      "chaquetón industrial FR",
      "brigade jacket",
      "chaquetón de conato"
    ],
    "sinonimosNota": "Se pide como chaquetón, chamarra o casaca según la región. Lo que define la pieza no es el nombre sino el alcance declarado en la ficha.",
    "comparativa": {
      "titulo": "Reponer la pieza o renovar el conjunto",
      "intro": "La decisión que conviene tomar con criterio y no por costumbre.",
      "columnas": [
        "Criterio",
        "Reponer solo el chaquetón",
        "Renovar el conjunto completo"
      ],
      "filas": [
        [
          "Cuándo conviene",
          "Daño puntual o alta de personal",
          "Dotación con desgaste parejo"
        ],
        [
          "Costo",
          "Menor por evento",
          "Mayor, pero uniforma toda la brigada"
        ],
        [
          "Uniformidad",
          "Requiere replicar la configuración",
          "Uniforme por definición"
        ],
        [
          "Riesgo",
          "Mezclar prendas de distinto desgaste",
          "Ninguno en ese sentido"
        ]
      ]
    },
    "relacionados": [
      {
        "label": "Pantalonera de brigadista: la otra mitad del conjunto",
        "href": "/trajes/brigadista/pantalonera/"
      },
      {
        "label": "Conjunto de brigada completo",
        "href": "/trajes/brigadista/conjunto/"
      },
      {
        "label": "Errores frecuentes al comprar traje",
        "href": "/#errores"
      }
    ]
  },
  {
    "slug": "pantalonera",
    "familia": "brigadista",
    "nombreCard": "Pantalonera de brigadista (pieza suelta)",
    "nombre": "Pantalonera de brigadista (pieza suelta)",
    "seoTitle": "Pantalón de brigadista | pieza de reposición | México",
    "seoDescription": "Pantalón de brigadista suelto para reposición: refuerzos en rodillas y valencianas y cinta reflejante. Es la pieza que más se gasta de la dotación.",
    "keywords": [
      "pantalón de brigadista",
      "pieza de reposición",
      "México"
    ],
    "eyebrow": "Pieza · Brigada industrial",
    "h1": "Pantalón de brigadista",
    "h1Accent": "la pieza que más se repone",
    "lead": "La mitad inferior del conjunto de brigada, cotizada suelta: refuerzos en rodillas y valencianas, tirantes y cinta reflejante en pierna.",
    "descRight": [
      "Es la prenda que primero se acaba de cualquier dotación de brigada. Rodillas y valencianas concentran todo el desgaste mecánico: hincarse junto a un tablero, arrastrar manguera, subir escaleras de gato. El chaquetón todavía se ve bien y el pantalón ya no.",
      "Por eso conviene tenerla identificada como refacción y no como compra excepcional: se pide suelta, sin mínimo, replicando la configuración de la dotación para que la brigada siga uniformada."
    ],
    "meta": [
      "Pieza suelta",
      "Refuerzo en rodilla",
      "Incluye tirantes",
      "Sin compra mínima"
    ],
    "resumen": [
      "La pantalonera de brigadista lleva la misma construcción que el chaquetón —capa externa inherente y forro desmontable— pero con refuerzos adicionales donde el desgaste es mecánico y no térmico: rodilla y valenciana. Ahí es donde se decide cuánto dura la prenda.",
      "La cinta reflejante en la pierna no es adorno: buena parte de las emergencias industriales ocurre de noche o en zonas con iluminación pobre, y la banda inferior es la que hace visible al elemento cuando está agachado o parcialmente cubierto por equipo."
    ],
    "puntosClave": [
      "Es la pieza del conjunto que más rápido se desgasta",
      "Refuerzos en rodillas y valencianas contra abrasión",
      "Cinta reflejante en pierna, clave con poca luz",
      "Tirantes de alta resistencia incluidos o cotizados aparte",
      "Se pide suelta, replicando la configuración de la dotación",
      "Conviene tenerla contemplada como refacción, no como compra excepcional"
    ],
    "images": [
      {
        "src": "/images/piezas/pantalonera-de-brigadista-pieza-suelta.svg",
        "alt": "Pantalón de brigadista para reposición"
      },
      {
        "src": "/images/productos/traje-brigadista-industrial-bombero.svg",
        "alt": "Traje de brigadista industrial"
      },
      {
        "src": "/images/productos/combo-brigadista-industrial.svg",
        "alt": "Combo de brigadista industrial"
      }
    ],
    "fichaTecnica": [
      {
        "grupo": "Norma y cumplimiento",
        "filas": [
          {
            "campo": "Obligación en México",
            "valor": "NOM-002-STPS-2010, cláusula 5.9",
            "nota": "Dotación de EPP a la brigada"
          },
          {
            "campo": "Norma de EPP",
            "valor": "NOM-017-STPS-2024",
            "nota": "Vigente desde el 28-sep-2025"
          },
          {
            "campo": "Alcance",
            "valor": "Fuego incipiente y primera respuesta",
            "nota": "No es prenda de ataque interior"
          }
        ]
      },
      {
        "grupo": "Construcción",
        "filas": [
          {
            "campo": "Capa externa",
            "valor": "Aramida inherente",
            "nota": "Mismo gramaje que el chaquetón del conjunto"
          },
          {
            "campo": "Forro",
            "valor": "Desmontable de dos capas",
            "nota": "Se retira para lavado e inspección"
          },
          {
            "campo": "Refuerzo de rodilla",
            "valor": "Material de alta abrasión",
            "nota": "Zona de mayor desgaste"
          },
          {
            "campo": "Refuerzo de valenciana",
            "valor": "Material de alta abrasión",
            "nota": "Contacto con calzado y suelo"
          },
          {
            "campo": "Cinta reflejante",
            "valor": "En pierna, sobre y bajo la rodilla",
            "nota": "Visibilidad con el elemento agachado"
          }
        ]
      },
      {
        "grupo": "Configuración",
        "filas": [
          {
            "campo": "Talla",
            "valor": "Por cintura y largo",
            "nota": "Tomar medida, no estimar por talla de pantalón de vestir"
          },
          {
            "campo": "Tirantes",
            "valor": "Tipo X incluidos o por separado",
            "nota": "Según fabricante"
          },
          {
            "campo": "Color y cinta",
            "valor": "Según configuración original",
            "nota": "Replicar la ficha de la compra anterior"
          }
        ]
      }
    ],
    "incluye": [
      "Pantalón con capa externa inherente y forro desmontable",
      "Refuerzos en rodillas y valencianas",
      "Cinta reflejante en la disposición especificada"
    ],
    "noIncluye": [
      "Chaquetón: se cotiza por separado",
      "Tirantes, si el fabricante los maneja como pieza aparte",
      "Botas y demás complementos del combo"
    ],
    "errores": [
      {
        "error": "Tratarla como compra excepcional",
        "realidad": "Es la pieza que más se gasta de toda la dotación. Contemplarla como refacción periódica evita paros y compras de emergencia."
      },
      {
        "error": "Reponer el pantalón y conservar tirantes vencidos",
        "realidad": "El elástico pierde recuperación y deja de sostener con la prenda mojada. Es la refacción más barata del conjunto."
      },
      {
        "error": "Estimar la talla por el pantalón de vestir",
        "realidad": "El corte del pantalón de brigada es distinto y va sobre otra ropa. Hay que tomar la medida real."
      },
      {
        "error": "Ignorar el estado del refuerzo de rodilla",
        "realidad": "Cuando el refuerzo se abre, el desgaste pasa directo a la capa externa y la prenda se pierde en semanas."
      },
      {
        "error": "Pedirla sin la configuración original",
        "realidad": "Llega con otra cinta u otro color y la brigada deja de verse uniforme, que es justo lo que revisa una auditoría."
      }
    ],
    "aplicaciones": [
      {
        "titulo": "Reposición periódica",
        "desc": "Refacción habitual dentro del programa de EPP de la planta."
      },
      {
        "titulo": "Daño por abrasión",
        "desc": "Rodilla o valenciana abiertas tras uso intensivo."
      },
      {
        "titulo": "Alta de integrante",
        "desc": "Personal nuevo en la brigada."
      },
      {
        "titulo": "Corrección de talla",
        "desc": "Cuando la compra original se estimó por promedio."
      }
    ],
    "faqs": [
      {
        "q": "¿Por qué se gasta antes que el chaquetón?",
        "a": "Porque su desgaste es mecánico, no térmico. Rodillas y valencianas rozan contra suelo, escaleras y equipo en cada intervención y en cada simulacro. El chaquetón sufre menos abrasión y por eso aguanta más ciclos."
      },
      {
        "q": "¿Puedo comprar solo el pantalón?",
        "a": "Sí, sin compra mínima. Es la petición más frecuente de reposición en brigada industrial. Solo necesitamos la configuración de tu dotación para que la pieza nueva llegue igual que las que ya tienes."
      },
      {
        "q": "¿Los tirantes vienen incluidos?",
        "a": "Depende del fabricante: algunos los integran y otros los manejan como pieza aparte. Lo aclaramos en la cotización. Si vas a reponer el pantalón, vale la pena revisar el estado de los tirantes: suelen estar igual de vencidos."
      },
      {
        "q": "¿Cómo sé cuándo retirarla de servicio?",
        "a": "Cuando el refuerzo de rodilla o valenciana está abierto, cuando hay quemadura o rasgadura en la capa externa, o cuando el forro presenta daño. Una prenda con el refuerzo abierto se degrada muy rápido: conviene reponerla antes de que llegue a la capa externa."
      },
      {
        "q": "¿Cómo tomo la talla?",
        "a": "Por cintura y largo, con la ropa que se usa debajo. No sirve la talla del pantalón de vestir: el corte es distinto y va sobre otra prenda. Te compartimos la guía del fabricante antes de pedir."
      },
      {
        "q": "¿Puedo combinarla con un chaquetón de otra marca?",
        "a": "Se puede, pero la interfaz entre ambas prendas deja de estar diseñada como conjunto. Si tu dotación ya está mezclada, revisémoslo antes de la siguiente compra para irla homologando."
      },
      {
        "q": "¿Conviene comprar de más para tener refacciones?",
        "a": "En brigadas grandes, sí. Tener dos o tres pantalones de tallas comunes en almacén evita que un elemento quede sin equipo mientras llega el pedido. Es una práctica común en plantas con brigada activa."
      },
      {
        "q": "¿Qué documentación entregan?",
        "a": "Ficha técnica de la pieza y factura CFDI. Para tu expediente de EPP conviene archivar ambas junto con el registro de a quién se asignó la prenda."
      }
    ],
    "sinonimos": [
      "pantalón de brigadista",
      "pantalonera de brigada",
      "pantalón industrial FR",
      "pantalón de conato",
      "brigade pant",
      "pantalón contra incendio industrial"
    ],
    "sinonimosNota": "En México se dice pantalonera o pantalón de brigada. En catálogo de importación aparece como brigade pant o industrial firefighting pant.",
    "comparativa": {
      "titulo": "Reponer o tener refacción en almacén",
      "intro": "Dos formas de administrar la pieza que más se gasta de la dotación.",
      "columnas": [
        "Criterio",
        "Comprar al momento del daño",
        "Mantener refacciones en almacén"
      ],
      "filas": [
        [
          "Disponibilidad",
          "El elemento queda sin equipo mientras llega",
          "Reemplazo inmediato"
        ],
        [
          "Costo",
          "Sin inventario inmovilizado",
          "Requiere stock de tallas comunes"
        ],
        [
          "Riesgo operativo",
          "Alto si la brigada se activa",
          "Bajo"
        ],
        [
          "Cuándo conviene",
          "Brigadas pequeñas",
          "Brigadas grandes o con simulacros frecuentes"
        ]
      ]
    },
    "relacionados": [
      {
        "label": "Chaquetón de brigadista: la otra mitad del conjunto",
        "href": "/trajes/brigadista/chaqueton/"
      },
      {
        "label": "Tirantes tipo X: revísalos al reponer el pantalón",
        "href": "/trajes/brigadista/tirantes/"
      },
      {
        "label": "Conjunto de brigada completo",
        "href": "/trajes/brigadista/conjunto/"
      }
    ]
  },
  {
    "slug": "monja",
    "familia": "brigadista",
    "nombreCard": "Monja (capucha) de brigada",
    "nombre": "Monja (capucha) de brigada",
    "seoTitle": "Monja de brigada | capucha contra incendio | México",
    "seoDescription": "Monja de brigada en tejido aramídico elástico: cubre orejas, cuello y mandíbula, la zona que no protegen el casco ni el chaquetón de la brigada.",
    "keywords": [
      "monja de brigada",
      "capucha contra incendio",
      "México"
    ],
    "eyebrow": "Pieza · Brigada industrial",
    "h1": "Monja de brigada",
    "h1Accent": "cubre lo que el casco no",
    "lead": "Capuchón de tejido aramídico elástico que protege orejas, cuello y mandíbula, y cierra la interfaz con la máscara del equipo de respiración.",
    "descRight": [
      "Es la pieza más barata del combo y la primera que se omite cuando se recorta el presupuesto. También es la que cubre la zona de piel más expuesta del cuerpo: entre el casco y el cuello del chaquetón queda una franja descubierta que nadie nota hasta que hay calor.",
      "Si tu brigada usa equipo de respiración autónoma, la monja además cierra el sello alrededor de la máscara. Sin ella queda una vía de entrada abierta justo en la cara, que es donde menos conviene."
    ],
    "meta": [
      "Tejido aramídico",
      "Interfaz con ERA",
      "Talla única",
      "Pieza de reposición"
    ],
    "resumen": [
      "La monja de brigada es un capuchón elástico de fibra aramídica que cubre cabeza, orejas, cuello y mandíbula. Se coloca bajo el casco y por debajo del cuello del chaquetón —nunca encima— para que no quede un canal abierto hacia el cuello.",
      "En brigada industrial cumple dos funciones: protección térmica de la zona descubierta y sellado alrededor de la máscara del equipo de respiración cuando se usa. Es también la prenda que más contaminante retiene, así que entra al lavado con más frecuencia que el resto."
    ],
    "puntosClave": [
      "Cubre orejas, cuello y mandíbula: la franja que deja el casco",
      "Se coloca debajo del cuello del chaquetón, nunca encima",
      "Cierra el sello alrededor de la máscara del ERA",
      "Tejido aramídico elástico que debe recuperar forma tras el lavado",
      "Es la prenda que más contaminante retiene del combo",
      "Se repone con más frecuencia que el traje"
    ],
    "images": [
      {
        "src": "/images/piezas/monja-capucha-de-brigada.svg",
        "alt": "Monja o capucha de brigada contra incendio"
      },
      {
        "src": "/images/productos/traje-brigadista-industrial-bombero.svg",
        "alt": "Traje de brigadista industrial"
      },
      {
        "src": "/images/productos/combo-brigadista-industrial.svg",
        "alt": "Combo de brigadista industrial"
      }
    ],
    "fichaTecnica": [
      {
        "grupo": "Norma y cumplimiento",
        "filas": [
          {
            "campo": "Obligación en México",
            "valor": "NOM-002-STPS-2010, cláusula 5.9",
            "nota": "Como parte de la dotación de la brigada"
          },
          {
            "campo": "Norma de EPP",
            "valor": "NOM-017-STPS-2024",
            "nota": "El patrón debe proporcionar el EPP adecuado"
          },
          {
            "campo": "Alcance",
            "valor": "Complemento del conjunto de brigada",
            "nota": "No sustituye a capucha estructural con barrera de partículas"
          }
        ]
      },
      {
        "grupo": "Construcción",
        "filas": [
          {
            "campo": "Material",
            "valor": "Tejido aramídico elástico",
            "nota": "Debe recuperar forma tras el lavado"
          },
          {
            "campo": "Capas",
            "valor": "Doble capa en la mayoría de modelos",
            "nota": "Verificar en la ficha del fabricante"
          },
          {
            "campo": "Cobertura",
            "valor": "Cabeza, orejas, cuello y mandíbula",
            "nota": "La zona que no cubren casco ni chaquetón"
          },
          {
            "campo": "Abertura facial",
            "valor": "Elástica, para sello con máscara",
            "nota": "Se verifica contra el modelo de ERA en uso"
          }
        ]
      },
      {
        "grupo": "Configuración",
        "filas": [
          {
            "campo": "Talla",
            "valor": "Única en la mayoría de modelos",
            "nota": "Algunos fabricantes ofrecen talla extendida"
          },
          {
            "campo": "Compatibilidad",
            "valor": "Según modelo de máscara del ERA",
            "nota": "Dato necesario al cotizar"
          },
          {
            "campo": "Largo de cuello",
            "valor": "Según cobertura bajo el chaquetón",
            "nota": "Debe quedar por dentro de la prenda"
          }
        ]
      },
      {
        "grupo": "Ciclo de servicio",
        "filas": [
          {
            "campo": "Lavado",
            "valor": "Tras cada exposición a humo",
            "nota": "Retiene más contaminante que el resto del combo"
          },
          {
            "campo": "Reposición",
            "valor": "Más frecuente que el traje",
            "nota": "Cuando pierde elasticidad, deja de sellar"
          },
          {
            "campo": "Asignación",
            "valor": "Personal, no compartida",
            "nota": "Higiene y ajuste"
          }
        ]
      }
    ],
    "incluye": [
      "Capuchón aramídico elástico con la configuración de capas especificada"
    ],
    "noIncluye": [
      "Casco y barbiquejo",
      "Máscara del equipo de respiración",
      "Capucha estructural con barrera de partículas: es otra pieza"
    ],
    "errores": [
      {
        "error": "Omitirla para recortar el presupuesto",
        "realidad": "Es la pieza más barata del combo y cubre la zona de piel más expuesta. Ahorrar aquí no mueve el costo total y sí la protección."
      },
      {
        "error": "Usarla sobre el cuello del chaquetón",
        "realidad": "Colocada por encima deja un canal directo hacia el cuello, justo lo contrario de lo que se busca. Va por dentro."
      },
      {
        "error": "No verificar compatibilidad con la máscara",
        "realidad": "Si no sella contra el modelo de ERA que usa tu brigada, queda una vía de entrada abierta en la cara."
      },
      {
        "error": "Compartirla entre turnos",
        "realidad": "Es prenda personal por higiene y por ajuste. Compartir capuchas es la forma más rápida de que dejen de usarse."
      },
      {
        "error": "Esperar a que dure lo mismo que el traje",
        "realidad": "Pierde elasticidad mucho antes. Cuando deja de ajustar deja de sellar, aunque la tela se vea entera."
      }
    ],
    "aplicaciones": [
      {
        "titulo": "Brigada de planta",
        "desc": "Parte del combo básico de cualquier brigada contra incendio."
      },
      {
        "titulo": "Uso con equipo de respiración",
        "desc": "Sellado alrededor de la máscara en atmósferas con humo."
      },
      {
        "titulo": "Reposición periódica",
        "desc": "Refacción de bajo costo dentro del programa de EPP."
      },
      {
        "titulo": "Alta de integrante",
        "desc": "Asignación personal para cada nuevo miembro de la brigada."
      }
    ],
    "faqs": [
      {
        "q": "¿Qué es exactamente una monja?",
        "a": "Es el capuchón que cubre cabeza, orejas, cuello y mandíbula bajo el casco. En México se le dice monja o escafandra; en catálogo aparece como capucha o hood. Cubre la franja de piel que queda descubierta entre el casco y el cuello del chaquetón."
      },
      {
        "q": "¿Va por dentro o por fuera del chaquetón?",
        "a": "Por dentro, siempre. Colocada sobre el cuello de la prenda deja un canal abierto hacia el cuello, que es exactamente lo que la pieza busca cerrar. Es un error de uso frecuente y anula el beneficio."
      },
      {
        "q": "¿Es la misma que la capucha con barrera de partículas?",
        "a": "No. La de brigada es un capuchón aramídico que protege del calor. La capucha con barrera de partículas incorpora una capa filtrante que bloquea el hollín fino, y se usa en operación estructural con exposición prolongada a humo. Si tu brigada entra a ambientes con humo, conviene revisar esa opción."
      },
      {
        "q": "¿Sirve con cualquier máscara de equipo de respiración?",
        "a": "No necesariamente. El sello se logra en la interfaz con la máscara y esa geometría cambia entre fabricantes. Al cotizar dinos qué modelo de ERA usa tu brigada: es un dato tan importante como la talla."
      },
      {
        "q": "¿Cada cuánto se lava?",
        "a": "Después de cada exposición a humo, no cuando se ve sucia. Es la prenda del combo que más contaminante retiene y queda en contacto directo con la piel de la cara y el cuello durante toda la intervención."
      },
      {
        "q": "¿Cada cuánto se repone?",
        "a": "Cuando pierde elasticidad y deja de ajustar, que suele ser bastante antes de que la tela se vea dañada. Una monja floja no sella, y una que no sella no protege. Es de las refacciones más económicas del programa de EPP."
      },
      {
        "q": "¿Puede compartirse entre turnos?",
        "a": "No conviene. Es prenda personal por higiene y porque el ajuste importa. Compartir capuchas es la forma más rápida de que el personal deje de usarlas."
      },
      {
        "q": "¿Viene en tallas?",
        "a": "La mayoría de los modelos es talla única, con tejido elástico que se adapta. Algunos fabricantes manejan talla extendida para personas con cabeza más grande o para uso sobre lentes."
      }
    ],
    "sinonimos": [
      "monja de bombero",
      "escafandra",
      "capucha de brigada",
      "capuchón aramídico",
      "verdugo",
      "hood contra incendio"
    ],
    "sinonimosNota": "Monja y escafandra son los términos más usados en México; en catálogo de importación aparece como hood. Todos nombran la misma pieza.",
    "comparativa": {
      "titulo": "Monja de brigada o capucha con barrera de partículas",
      "intro": "Dos niveles distintos para dos exposiciones distintas.",
      "columnas": [
        "Criterio",
        "Monja de brigada",
        "Capucha con barrera de partículas"
      ],
      "filas": [
        [
          "Protección térmica",
          "Sí",
          "Sí"
        ],
        [
          "Partículas finas del humo",
          "Las deja pasar",
          "Las bloquea en cuello y mandíbula"
        ],
        [
          "Escenario",
          "Conato, exposición breve",
          "Exposición prolongada a humo"
        ],
        [
          "Cuándo conviene",
          "Brigada que no entra a ambientes con humo",
          "Brigada con ataque interior o humo denso"
        ]
      ]
    },
    "relacionados": [
      {
        "label": "Capucha estructural con barrera de partículas",
        "href": "/trajes/estructural/monja/"
      },
      {
        "label": "Conjunto de brigada: la monja es parte del combo",
        "href": "/trajes/brigadista/conjunto/"
      },
      {
        "label": "Vida útil y servicio del equipo",
        "href": "/#vida-util"
      }
    ]
  },
  {
    "slug": "tirantes",
    "familia": "brigadista",
    "nombreCard": "Tirantes tipo X de ocho puntos",
    "nombre": "Tirantes tipo X de ocho puntos",
    "seoTitle": "Tirantes para pantalón de brigada | tipo X | México",
    "seoDescription": "Tirantes para pantalón de brigada tipo X de ocho puntos: elástico de dos pulgadas con terminales de piel, para repartir el peso en uso prolongado.",
    "keywords": [
      "tirantes para pantalón de brigada",
      "tipo X",
      "México"
    ],
    "eyebrow": "Pieza · Brigada industrial",
    "h1": "Tirantes para pantalón de brigada",
    "h1Accent": "tipo X de ocho puntos",
    "lead": "Sujeción del pantalón con elástico de dos pulgadas y terminales de piel, en configuración X para repartir el peso sin cargarlo en la cintura.",
    "descRight": [
      "Con el pantalón mojado el peso se multiplica, y si los tirantes no reparten esa carga sobre los hombros todo queda colgando de la cintura. En una intervención de veinte minutos se nota; en un simulacro largo, más.",
      "Es también la refacción más barata y la más olvidada. El elástico pierde recuperación con los lavados mucho antes que la tela del pantalón, y un tirante vencido deja de sostener justo cuando más hace falta."
    ],
    "meta": [
      "Elástico de 2\"",
      "Terminal de piel",
      "Ocho puntos",
      "Refacción económica"
    ],
    "resumen": [
      "Los tirantes tipo X reparten el peso del pantalón sobre ambos hombros y la espalda, con ocho puntos de sujeción que evitan que la carga se concentre en un solo lugar. Las terminales de piel resisten el roce constante contra las presillas mejor que las de material sintético.",
      "El elástico de dos pulgadas es el estándar del sector porque distribuye la presión sobre una superficie mayor: un tirante angosto se clava en el hombro cuando el pantalón está mojado, y eso hace que la gente termine ajustándolo mal o quitándoselo."
    ],
    "puntosClave": [
      "Configuración X: reparte carga sobre hombros y espalda",
      "Elástico de dos pulgadas para no clavarse en el hombro",
      "Terminales de piel, más resistentes al roce que las sintéticas",
      "Ocho puntos de sujeción al pantalón",
      "Refacción de bajo costo que suele olvidarse",
      "Se especifican por estatura del elemento"
    ],
    "images": [
      {
        "src": "/images/piezas/tirantes-tipo-x-de-ocho-puntos.svg",
        "alt": "Tirantes tipo X de ocho puntos para pantalón de brigada"
      },
      {
        "src": "/images/productos/traje-brigadista-industrial-bombero.svg",
        "alt": "Traje de brigadista industrial"
      },
      {
        "src": "/images/productos/combo-brigadista-industrial.svg",
        "alt": "Combo de brigadista industrial"
      }
    ],
    "fichaTecnica": [
      {
        "grupo": "Construcción",
        "filas": [
          {
            "campo": "Configuración",
            "valor": "Tipo X",
            "nota": "Reparto sobre hombros y espalda"
          },
          {
            "campo": "Ancho del elástico",
            "valor": "Dos pulgadas",
            "nota": "Estándar del sector; menor ancho concentra presión"
          },
          {
            "campo": "Terminales",
            "valor": "De piel",
            "nota": "Mayor resistencia al roce que las sintéticas"
          },
          {
            "campo": "Puntos de sujeción",
            "valor": "Ocho",
            "nota": "Evita que la carga se concentre"
          }
        ]
      },
      {
        "grupo": "Configuración",
        "filas": [
          {
            "campo": "Largo",
            "valor": "Por estatura del elemento",
            "nota": "No por talla de pantalón"
          },
          {
            "campo": "Ajuste",
            "valor": "Regulable sin herramienta",
            "nota": "Permite corregir en servicio"
          },
          {
            "campo": "Compatibilidad",
            "valor": "Con las presillas del pantalón",
            "nota": "Verificar si el pantalón es de otro fabricante"
          }
        ]
      },
      {
        "grupo": "Ciclo de servicio",
        "filas": [
          {
            "campo": "Reposición",
            "valor": "Antes que el pantalón",
            "nota": "El elástico pierde recuperación con los lavados"
          },
          {
            "campo": "Revisión",
            "valor": "Al reponer el pantalón",
            "nota": "Momento natural para cambiarlos"
          },
          {
            "campo": "Señal de retiro",
            "valor": "Ya no sostiene con la prenda mojada",
            "nota": "Aunque el elástico se vea entero"
          }
        ]
      }
    ],
    "incluye": [
      "Par de tirantes tipo X con terminales de piel",
      "Sistema de ajuste regulable"
    ],
    "noIncluye": [
      "Pantalón de brigada",
      "Adaptadores para presillas de otro fabricante"
    ],
    "errores": [
      {
        "error": "Reponer el pantalón y conservar los tirantes viejos",
        "realidad": "El elástico ya perdió recuperación. Es la refacción más barata del conjunto y la que más se nota en comodidad."
      },
      {
        "error": "Comprarlos por talla de pantalón",
        "realidad": "Se especifican por estatura del elemento. Un tirante corto obliga a llevar el pantalón arriba de la cintura y limita el movimiento."
      },
      {
        "error": "Elegir elástico angosto para ahorrar",
        "realidad": "Se clava en el hombro con el pantalón mojado. La gente termina aflojándolos y entonces ya no cumplen su función."
      },
      {
        "error": "No verificar compatibilidad de presillas",
        "realidad": "La disposición cambia entre fabricantes. Si el pantalón es de otra marca, hay que confirmarlo antes de comprar."
      }
    ],
    "aplicaciones": [
      {
        "titulo": "Reposición de dotación",
        "desc": "Refacción periódica dentro del programa de EPP."
      },
      {
        "titulo": "Compra de pantalón nuevo",
        "desc": "Se piden juntos para asegurar compatibilidad de presillas."
      },
      {
        "titulo": "Reasignación de equipo",
        "desc": "Al cambiar de elemento se ajustan o se cambian por estatura."
      },
      {
        "titulo": "Corrección de comodidad",
        "desc": "Cuando el personal reporta que el pantalón se vence en operación."
      }
    ],
    "faqs": [
      {
        "q": "¿Por qué tipo X y no otro?",
        "a": "La configuración en X reparte la carga sobre ambos hombros y la espalda, con ocho puntos de sujeción. Con el pantalón mojado —que es cuando pesa— evita que todo el peso quede colgando de la cintura o concentrado en un solo punto del hombro."
      },
      {
        "q": "¿Cómo se especifican?",
        "a": "Por estatura del elemento, no por talla de pantalón. Si estás equipando una brigada, conviene levantar estaturas junto con las medidas de cintura. Un tirante mal medido termina mal ajustado y deja de cumplir su función."
      },
      {
        "q": "¿Por qué el elástico de dos pulgadas?",
        "a": "Porque distribuye la presión sobre más superficie. Un elástico angosto se clava en el hombro cuando la prenda está mojada, y la reacción natural del usuario es aflojarlo hasta que ya no sostiene nada."
      },
      {
        "q": "¿Sirven con cualquier pantalón?",
        "a": "No necesariamente. La sujeción es a presillas y su número y disposición cambian entre fabricantes. Si vas a comprar tirantes para un pantalón que ya tienes, dinos marca y modelo y confirmamos compatibilidad antes de cotizar."
      },
      {
        "q": "¿Cada cuánto se reponen?",
        "a": "Antes que el pantalón. El elástico pierde recuperación con los ciclos de lavado y la piel de las terminales se reseca. No hay un plazo normativo: se cambian cuando dejan de sostener con la prenda mojada."
      },
      {
        "q": "¿Por qué terminales de piel y no sintéticas?",
        "a": "Porque el roce contra las presillas es constante y la piel aguanta mejor ese desgaste. Las terminales sintéticas se abren antes, y cuando una terminal falla el tirante deja de sujetar de ese lado."
      },
      {
        "q": "¿Se lavan con el pantalón?",
        "a": "Sí, aunque conviene retirarlos para la revisión periódica: hay que verificar costuras, elástico y terminales por separado, y con el tirante montado no se ve todo."
      },
      {
        "q": "¿Los venden sueltos?",
        "a": "Sí, sin compra mínima. Es una de las piezas que más se piden por separado, sobre todo cuando la brigada ya identificó que sus tirantes están vencidos pero los pantalones siguen en buen estado."
      }
    ],
    "sinonimos": [
      "tirantes de brigada",
      "suspensores para pantalón de brigada",
      "tirantes tipo X",
      "tirantes elásticos FR",
      "suspenders brigada",
      "tirantes de ocho puntos"
    ],
    "sinonimosNota": "Se piden como tirantes o suspensores según la región. En catálogo de importación aparecen como suspenders.",
    "comparativa": {
      "titulo": "Tipo X o tipo H",
      "intro": "Las dos configuraciones que existen. La elección depende de si se usa equipo de respiración.",
      "columnas": [
        "Criterio",
        "Tipo X",
        "Tipo H"
      ],
      "filas": [
        [
          "Puntos de sujeción",
          "Ocho, reparto amplio",
          "Cuatro, reparto en dos bandas"
        ],
        [
          "Bajo la placa del ERA",
          "El cruce puede quedar debajo",
          "Superficie plana, menos presión"
        ],
        [
          "Con los brazos en alto",
          "Estable",
          "Muy estable"
        ],
        [
          "Cuándo conviene",
          "Brigada sin uso habitual de ERA",
          "Uso frecuente de equipo de respiración"
        ]
      ]
    },
    "relacionados": [
      {
        "label": "Pantalón de brigadista: revisa los tirantes al reponerlo",
        "href": "/trajes/brigadista/pantalonera/"
      },
      {
        "label": "Tirantes tipo H para conjunto estructural",
        "href": "/trajes/estructural/tirantes/"
      },
      {
        "label": "Conjunto de brigada completo",
        "href": "/trajes/brigadista/conjunto/"
      }
    ]
  }
];

export function piezasDeFamilia(familia: string) {
  return PIEZAS.filter((p) => p.familia === familia);
}

export function piezaPorNombreCard(nombreCard: string) {
  return PIEZAS.find((p) => p.nombreCard === nombreCard);
}
