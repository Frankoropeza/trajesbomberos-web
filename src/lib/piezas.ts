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
  }
];

export function piezasDeFamilia(familia: string) {
  return PIEZAS.filter((p) => p.familia === familia);
}

export function piezaPorNombreCard(nombreCard: string) {
  return PIEZAS.find((p) => p.nombreCard === nombreCard);
}
