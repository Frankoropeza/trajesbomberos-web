// Datos del catálogo · sección «mangueras-y-accesorios» (trajesbomberos.com).
// LITERAL PURO: sin funciones, sin mutaciones, sin plantillas. Se edita solo el texto;
// `astro check` valida la estructura contra ../types. Generado por scripts/emit_data.py
// (2026-09-29) a partir del contenido vigente; desde aquí se edita a mano o con Codex.
import type { Modelo, Seccion, Tipo } from '../types';

export const data: { seccion?: Seccion; tipos: Tipo[] } = {
  "seccion": {
    "slug": "mangueras-y-accesorios",
    "nombre": "Mangueras y accesorios",
    "hero": {
      "src": "/images/catalogo/mangueras/hero-mangueras.avif",
      "alt": "Mangueras contra incendio y accesorios"
    },
    "leyendaImagenIlustrativa": "Imagen ilustrativa. Marca, modelo y configuración exactos se confirman por escrito en la cotización."
  },
  "tipos": [
    {
      "slug": "manguera-de-ataque",
      "seccion": "mangueras-y-accesorios",
      "nombre": "Manguera de ataque",
      "nombreCard": "Manguera de ataque",
      "title": "Manguera de bombero de ataque contra incendio",
      "description": "Manguera de bombero de ataque contra incendio de 1 ½ o 2 ½ pulgadas, doble chaqueta según configuración, acoples y uso operativo. Cotiza con ficha técnica.",
      "lead": "La manguera de ataque lleva el agua desde la bomba hasta el pitón. Se usa en diámetros de 1 ½ y 2 ½ pulgadas, con doble chaqueta según configuración y acoples en ambos extremos.",
      "resumen": [
        "El diámetro decide el caudal y el manejo: 1 ½ pulgadas es más ágil para ataque interior; 2 ½ pulgadas mueve más agua, pero pesa más y exige más personal.",
        "Todavía no publicamos un modelo. La cotizamos por diámetro, longitud, acoples y rosca, con la norma NFPA aplicable que declare el fabricante."
      ],
      "bloques": [
        {
          "eyebrow": "Qué es",
          "h2": "La línea que lleva el agua al fuego",
          "parrafos": [
            "La manguera de ataque se arrastra por escaleras, pasillos y esquinas mientras trabaja a presión. La doble chaqueta protege el forro interior del roce y del calor, y los acoples tienen que resistir golpes sin deformarse.",
            "Una línea es un sistema: bomba, manguera, acoples y pitón. Si uno de ellos no corresponde en diámetro o rosca, el problema aparece en plena intervención."
          ]
        },
        {
          "eyebrow": "Cómo elegir",
          "id": "elegir",
          "h2": "Diámetro, longitud y rosca",
          "parrafos": [
            "Elige el diámetro por la maniobra y por lo que ya usa tu unidad. La longitud de cada tramo se define por el recorrido real, desde la descarga hasta el punto de uso.",
            "Confirma la rosca de los acoples en ambos extremos contra la bomba, el pitón y los hidrantes de tu zona. Escríbela en la partida: es el dato que más problemas evita."
          ],
          "lista": [
            "Diámetro: 1 ½ o 2 ½ pulgadas",
            "Construcción: doble chaqueta según configuración",
            "Longitud por tramo y uso",
            "Acoples en ambos extremos",
            "Rosca confirmada con bomba y pitón",
            "Norma NFPA aplicable declarada por fabricante"
          ]
        },
        {
          "eyebrow": "En servicio",
          "h2": "Lavado, secado y prueba",
          "parrafos": [
            "Después de cada uso lava la manguera, revisa chaqueta y acoples, y déjala secar por completo antes de enrollarla. La humedad guardada daña el forro con el tiempo.",
            "Programa pruebas de presión según indique el fabricante y registra cada tramo. Un tramo con abrasión profunda, acople golpeado o fuga se retira hasta repararlo o reemplazarlo."
          ]
        }
      ],
      "especificacion": [
        {
          "campo": "Uso principal",
          "valor": "Conducción de agua en líneas de ataque"
        },
        {
          "campo": "Diámetros",
          "valor": "1 ½ y 2 ½ pulgadas"
        },
        {
          "campo": "Construcción",
          "valor": "Doble chaqueta según configuración"
        }
      ],
      "imagen": {
        "src": "/images/catalogo/mangueras/tipo-manguera-de-ataque.avif",
        "alt": "Manguera de ataque para sistemas contra incendio",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      },
      "normas": [
        {
          "norma": "Norma NFPA aplicable",
          "alcance": "Solicita la norma NFPA aplicable que declare el fabricante para el modelo."
        }
      ],
      "errores": [
        "Comprar sin confirmar la rosca de los acoples",
        "Mezclar diámetros sin adaptadores previstos",
        "Guardar la manguera húmeda",
        "Elegir la longitud sin medir el recorrido real"
      ],
      "faq": [
        {
          "q": "¿Qué diámetro de manguera de ataque conviene?",
          "a": "1 ½ pulgadas es más ágil para ataque interior; 2 ½ pulgadas mueve más agua para fuegos mayores. Muchas unidades llevan las dos."
        },
        {
          "q": "¿Qué es una manguera de doble chaqueta?",
          "a": "Una manguera con dos capas textiles sobre el forro interior. La capa exterior protege del roce y del calor, y la interior contiene la presión."
        },
        {
          "q": "¿Qué norma aplica a la manguera contra incendio?",
          "a": "La norma NFPA aplicable que declare el fabricante para el modelo. Pide que la cotización indique cuál es."
        },
        {
          "q": "¿Tienen modelos de manguera de ataque publicados?",
          "a": "Todavía no. La cotizamos por diámetro, longitud y rosca, y te presentamos la ficha del fabricante antes de que decidas."
        }
      ],
      "duos": {
        "ficha": [
          "La requisición de manguera de ataque indica el uso en líneas de ataque, los diámetros de 1 ½ y 2 ½ pulgadas y la construcción de doble chaqueta según configuración.",
          "Como aún no publicamos modelo, la tabla no muestra código ni presión. Esos datos llegan con la ficha del fabricante del tramo propuesto."
        ],
        "errores": [
          "Casi todos los problemas con mangueras nuevas son de rosca o de diámetro, y se descubren al conectar por primera vez.",
          "Estos cuatro errores conviene resolverlos desde la compra."
        ],
        "faq": [
          "Respondemos las dudas habituales sobre diámetro, construcción, norma y modelos de manguera de ataque.",
          "Si nos compartes la rosca de tu bomba y de tus pitones, te decimos qué acoples conviene pedir."
        ]
      }
    },
    {
      "slug": "piton-boquilla",
      "seccion": "mangueras-y-accesorios",
      "nombre": "Pitón o boquilla",
      "nombreCard": "Pitón o boquilla",
      "title": "Chiflón para manguera contra incendio: pitón o boquilla",
      "description": "Chiflón para manguera contra incendio: pitón o boquilla de chorro y niebla, caudal, conexión y mantenimiento. Datos para cotizar la partida con ficha.",
      "lead": "El pitón, también llamado chiflón o boquilla, controla cómo sale el agua al final de la línea: chorro directo, niebla o combinado. Su entrada y su rosca tienen que coincidir con la manguera.",
      "resumen": [
        "El patrón de agua cambia la táctica: el chorro llega lejos y penetra; la niebla enfría y protege. Muchos pitones permiten pasar de uno a otro con el mismo selector.",
        "Todavía no publicamos un modelo. Lo cotizamos por patrón, caudal declarado, entrada y rosca, con la norma NFPA aplicable que declare el fabricante."
      ],
      "bloques": [
        {
          "eyebrow": "Qué es",
          "h2": "El control del agua en manos del bombero",
          "parrafos": [
            "El pitón abre y cierra el paso del agua y define su forma. Con chorro directo el agua alcanza el fuego desde lejos; con niebla se forma una cortina que enfría el ambiente y protege al equipo.",
            "Se opera con guantes, en humo y bajo presión. Por eso el selector, la válvula y la empuñadura tienen que ser fáciles de accionar sin mirar."
          ]
        },
        {
          "eyebrow": "Cómo elegir",
          "id": "elegir",
          "h2": "Patrón, caudal y conexión",
          "parrafos": [
            "Define qué patrones necesita tu equipo y qué caudal puede entregar tu bomba. Un pitón con caudal mayor al que da la bomba no rinde; uno menor desperdicia capacidad.",
            "La entrada y la rosca tienen que corresponder al acople de la manguera. Pruébalo con la línea real y los guantes de tu equipo antes de ordenar."
          ],
          "lista": [
            "Patrón: chorro, niebla o combinado",
            "Caudal declarado por fabricante",
            "Entrada y rosca",
            "Acople de la manguera",
            "Empuñadura y accesorios",
            "Norma NFPA aplicable declarada"
          ]
        },
        {
          "eyebrow": "En servicio",
          "h2": "Revisión de válvula, selector y sellos",
          "parrafos": [
            "Después de cada uso, abre y cierra la válvula, cambia de patrón y revisa que no haya fugas en sellos ni golpes en la rosca. Un pitón que no cierra por completo es un riesgo en plena maniobra.",
            "Lávalo con agua limpia, sobre todo si se usó con espuma o agua de mala calidad, y guárdalo con la rosca protegida."
          ]
        }
      ],
      "especificacion": [
        {
          "campo": "Uso principal",
          "valor": "Control de salida de agua"
        },
        {
          "campo": "Patrones",
          "valor": "Chorro, niebla o combinado según modelo"
        },
        {
          "campo": "Selección",
          "valor": "Caudal, entrada y rosca compatibles"
        }
      ],
      "imagen": {
        "src": "/images/catalogo/mangueras/tipo-piton-boquilla.avif",
        "alt": "Pitón o boquilla para sistemas contra incendio",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      },
      "normas": [
        {
          "norma": "Norma NFPA aplicable",
          "alcance": "Solicita la norma NFPA aplicable que declare el fabricante para el modelo."
        }
      ],
      "errores": [
        "Elegir un caudal que la bomba no entrega",
        "Comprar sin confirmar entrada y rosca",
        "No probar el selector con guantes",
        "Guardar el pitón con residuos de espuma"
      ],
      "faq": [
        {
          "q": "¿Qué diferencia hay entre pitón, chiflón y boquilla?",
          "a": "Son nombres regionales para la misma pieza: el dispositivo al final de la manguera que controla el paso y la forma del agua."
        },
        {
          "q": "¿Qué pitón conviene, de chorro o de niebla?",
          "a": "Depende de la táctica. Muchos equipos usan pitones combinados, que permiten pasar de chorro directo a niebla con el mismo selector."
        },
        {
          "q": "¿Qué norma aplica al pitón contra incendio?",
          "a": "La norma NFPA aplicable que declare el fabricante para el modelo. Pide que la cotización lo indique por escrito."
        },
        {
          "q": "¿Tienen modelos de pitón publicados?",
          "a": "Todavía no. Lo cotizamos por patrón, caudal y rosca, y te presentamos la ficha del fabricante antes de que decidas."
        }
      ],
      "duos": {
        "ficha": [
          "La requisición de pitón o boquilla indica el uso en control de salida de agua, los patrones según modelo y los datos de selección: caudal, entrada y rosca compatibles.",
          "Como aún no publicamos modelo, la tabla no muestra código ni caudal. Esos datos llegan con la ficha del fabricante del pitón propuesto."
        ],
        "errores": [
          "Un pitón mal elegido no se nota en la bodega, sino al abrir la línea: caudal que no llega o una rosca que no asienta.",
          "Estos cuatro errores conviene evitarlos antes de ordenar."
        ],
        "faq": [
          "Respondemos las dudas habituales sobre nombres, patrones, norma y modelos de pitón.",
          "Si nos compartes el caudal de tu bomba y el diámetro de tu manguera, te decimos qué pitón conviene."
        ]
      }
    },
    {
      "slug": "llave-para-hidrante",
      "seccion": "mangueras-y-accesorios",
      "nombre": "Llave para hidrante",
      "nombreCard": "Llave para hidrante",
      "title": "Llave para hidrante contra incendio y llaves spanner",
      "description": "Llave para hidrante contra incendio y llaves spanner: tipo de operación, tamaño de conexiones y compatibilidad con los elementos instalados. Cotiza con ficha.",
      "lead": "La llave para hidrante abre y cierra el hidrante; la llave spanner aprieta y afloja los acoples de la manguera. Son herramientas pequeñas que evitan retrasos grandes en el abastecimiento de agua.",
      "resumen": [
        "Cada una se elige por la geometría y las medidas de lo que va a operar: la tuerca del hidrante o el acople de la línea. Una llave que no asienta puede redondear una tuerca.",
        "Todavía no publicamos un modelo. Las cotizamos por función, medidas y material declarado, con la norma NFPA aplicable cuando el fabricante la publique."
      ],
      "bloques": [
        {
          "eyebrow": "Qué es",
          "h2": "Herramientas para abastecer la línea",
          "parrafos": [
            "La llave para hidrante opera la tuerca del hidrante y retira sus tapas. La llave spanner ajusta los acoples entre tramos de manguera, pitones y adaptadores.",
            "Las dos son parte del abastecimiento de agua. Si falta la llave correcta o no asienta, la línea tarda en cargarse justo cuando más se necesita."
          ]
        },
        {
          "eyebrow": "Cómo elegir",
          "id": "elegir",
          "h2": "Medidas reales, no nominales",
          "parrafos": [
            "La decisión empieza frente al hidrante y los acoples de tu zona, no frente a un catálogo. Mide la tuerca y las tapas, y revisa el tipo de acople que usan tus mangueras.",
            "Define cuántas llaves por vehículo y dónde irán. Una llave que viaja suelta entre mangueras se pierde o daña otras piezas."
          ],
          "lista": [
            "Tipo: llave para hidrante o llave spanner",
            "Medidas del punto de agarre",
            "Material declarado por fabricante",
            "Hidrante, tapa o acople que atenderá",
            "Cantidad por vehículo",
            "Soporte accesible en la unidad"
          ]
        },
        {
          "eyebrow": "En servicio",
          "h2": "Revisión y resguardo",
          "parrafos": [
            "Revisa que la boca de la llave no esté desgastada ni deformada. Una llave gastada resbala y redondea tuercas, lo que complica la siguiente operación del hidrante.",
            "Guárdala siempre en su soporte, en el mismo lugar de cada unidad. En una emergencia nadie debería buscar la llave."
          ]
        }
      ],
      "especificacion": [
        {
          "campo": "Uso principal",
          "valor": "Operación de hidrantes y ajuste de acoples"
        },
        {
          "campo": "Tipos",
          "valor": "Llave para hidrante y llaves spanner"
        },
        {
          "campo": "Selección",
          "valor": "Medidas y conexiones del sistema existente"
        }
      ],
      "imagen": {
        "src": "/images/catalogo/mangueras/tipo-llave-para-hidrante.avif",
        "alt": "Llave para hidrante para sistemas contra incendio",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      },
      "normas": [
        {
          "norma": "Norma NFPA aplicable",
          "alcance": "Solicita la norma NFPA aplicable que declare el fabricante para el modelo."
        }
      ],
      "errores": [
        "Comprar por medida nominal sin revisar el hidrante real",
        "Confundir llave para hidrante con llave spanner",
        "Transportar las llaves sueltas",
        "Usar una llave con la boca desgastada"
      ],
      "faq": [
        {
          "q": "¿Qué diferencia hay entre llave para hidrante y llave spanner?",
          "a": "La llave para hidrante opera la tuerca y las tapas del hidrante. La llave spanner aprieta y afloja los acoples de la manguera."
        },
        {
          "q": "¿Cómo sé qué llave de hidrante necesito?",
          "a": "Midiendo la tuerca y las tapas de los hidrantes que atiende tu equipo. Las medidas pueden variar entre instalaciones."
        },
        {
          "q": "¿Cuántas llaves se llevan por vehículo?",
          "a": "Depende de cuántas líneas se abastecen a la vez y de tu procedimiento. Conviene que cada punto donde se conecta una línea tenga su llave a la mano."
        },
        {
          "q": "¿Tienen modelos de llave para hidrante publicados?",
          "a": "Todavía no. Las cotizamos según tus hidrantes y acoples, y te presentamos la ficha del fabricante antes de que decidas."
        }
      ],
      "duos": {
        "ficha": [
          "La requisición de llaves indica el uso en operación de hidrantes y ajuste de acoples, los tipos de llave y la selección por medidas y conexiones del sistema existente.",
          "Aún no hay código de producto en la tabla, porque el modelo se define al cotizar. Material y medidas llegan con la ficha del fabricante."
        ],
        "errores": [
          "Las llaves se compran rápido y se olvidan fácil, hasta que una no asienta en el hidrante durante un incendio.",
          "Si alguno aplica a tu partida, corrígelo antes de pedir cotización."
        ],
        "faq": [
          "Respondemos las dudas habituales sobre tipos de llave, medidas, cantidad y modelos.",
          "Si nos mandas fotos de tus hidrantes y acoples, te decimos qué llaves conviene cotizar."
        ]
      }
    },
    {
      "slug": "conexiones-y-adaptadores",
      "seccion": "mangueras-y-accesorios",
      "nombre": "Conexiones y adaptadores",
      "nombreCard": "Conexiones y adaptadores",
      "title": "Conexiones y adaptadores para manguera contra incendio",
      "description": "Conexiones y adaptadores contra incendio: reducciones, siamesas y adaptadores por rosca, diámetro y flujo requerido, sin asumir equivalencias. Cotiza.",
      "lead": "Las conexiones y adaptadores unen piezas que no encajan entre sí: diámetros distintos, roscas distintas o géneros distintos. Reducciones, siamesas y transiciones NH/NST o NPSH resuelven esas uniones.",
      "resumen": [
        "Son piezas pequeñas que deciden si una línea se puede armar. Una reducción cambia de diámetro, una siamesa une o divide líneas y un adaptador conecta roscas diferentes.",
        "Todavía no publicamos un modelo. Las cotizamos según los dos extremos que deben unir, con la norma NFPA aplicable que declare el fabricante."
      ],
      "bloques": [
        {
          "eyebrow": "Qué es",
          "h2": "Piezas para que la línea cierre",
          "parrafos": [
            "En campo conviven mangueras, hidrantes y pitones de distintas épocas y proveedores. Las conexiones y adaptadores permiten unirlos sin forzar una rosca ni improvisar.",
            "NH/NST y NPSH son roscas distintas, aunque a simple vista se parezcan. Confundirlas es la forma más rápida de dañar una rosca o de tener una fuga bajo presión."
          ]
        },
        {
          "eyebrow": "Cómo elegir",
          "id": "elegir",
          "h2": "Entrada, salida, rosca y género",
          "parrafos": [
            "Cada pieza se define por sus dos extremos: diámetro, rosca y género, macho o hembra, de cada lado. En una siamesa, además, cuántas entradas y salidas y en qué sentido fluye el agua.",
            "Si no tienes claros los datos, mándanos fotos de las dos piezas que necesitas unir. Revisamos el asiento antes de cotizar para no entregarte algo que solo parece compatible."
          ],
          "lista": [
            "Entrada y salida por pieza",
            "Diámetro de ambos extremos",
            "Rosca: NH/NST o NPSH",
            "Género de los dos extremos",
            "Función: reducción, siamesa o adaptador",
            "Sentido de flujo cuando aplique"
          ]
        },
        {
          "eyebrow": "En servicio",
          "h2": "Roscas, empaques y resguardo",
          "parrafos": [
            "Revisa las roscas y los empaques después de cada uso. Una rosca golpeada o un empaque reseco causan fugas y pueden trabarse al conectar.",
            "Guarda cada pieza identificada por medida y función, en un lugar fijo de la unidad. En la escena, encontrar el adaptador correcto no debería tomar más de unos segundos."
          ]
        }
      ],
      "especificacion": [
        {
          "campo": "Uso principal",
          "valor": "Unión y adaptación de componentes contra incendio"
        },
        {
          "campo": "Roscas",
          "valor": "NH/NST y NPSH según configuración"
        },
        {
          "campo": "Tipos",
          "valor": "Reducciones, siamesas y adaptadores"
        }
      ],
      "imagen": {
        "src": "/images/catalogo/mangueras/tipo-conexiones-y-adaptadores.avif",
        "alt": "Conexiones y adaptadores para sistemas contra incendio",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      },
      "normas": [
        {
          "norma": "Norma NFPA aplicable",
          "alcance": "Solicita la norma NFPA aplicable que declare el fabricante para el modelo."
        }
      ],
      "errores": [
        "Confundir roscas NH/NST y NPSH",
        "Pedir una pieza sin definir sus dos extremos",
        "Forzar una rosca cruzada",
        "Guardar adaptadores sin identificar"
      ],
      "faq": [
        {
          "q": "¿Qué diferencia hay entre rosca NH/NST y NPSH?",
          "a": "Son estándares de rosca distintos, con pasos diferentes. No son intercambiables aunque tengan el mismo diámetro, y por eso se escriben por separado en la partida."
        },
        {
          "q": "¿Para qué sirve una siamesa contra incendio?",
          "a": "Para unir dos líneas en una o dividir una en dos, según su configuración de entradas y salida."
        },
        {
          "q": "¿Qué necesito para cotizar un adaptador?",
          "a": "Diámetro, rosca y género de cada extremo. Si tienes dudas, una foto de las dos piezas que quieres unir nos basta para revisarlo."
        },
        {
          "q": "¿Tienen modelos de conexiones publicados?",
          "a": "Todavía no. Las cotizamos según los extremos que necesitas unir y te presentamos la ficha del fabricante antes de que decidas."
        }
      ],
      "duos": {
        "ficha": [
          "La requisición de conexiones y adaptadores indica el uso en unión de componentes contra incendio, las roscas NH/NST o NPSH y el tipo de pieza.",
          "Por ahora la tabla muestra criterios del tipo; el código aparece en la cotización. Material y medidas llegan con la ficha del fabricante de cada pieza."
        ],
        "errores": [
          "Un adaptador equivocado no se nota hasta que se intenta conectar, y en ese momento ya no hay tiempo para cambiarlo.",
          "Tenlos a la vista cuando redactes la requisición."
        ],
        "faq": [
          "Respondemos las dudas habituales sobre roscas, siamesas, cotización y modelos de conexiones.",
          "Si nos mandas fotos de las piezas que quieres unir, te decimos qué conexión conviene."
        ]
      }
    }
  ]
};
