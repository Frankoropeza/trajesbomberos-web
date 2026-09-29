// Datos del catálogo · sección «guantes» (trajesbomberos.com).
// LITERAL PURO: sin funciones, sin mutaciones, sin plantillas. Se edita solo el texto;
// `astro check` valida la estructura contra ../types. Generado por scripts/emit_data.py
// (2026-09-29) a partir del contenido vigente; desde aquí se edita a mano o con Codex.
import type { Modelo, Seccion, Tipo } from '../types';

export const data: { seccion?: Seccion; tipos: Tipo[]; modelos: Modelo[] } = {
  "seccion": {
    "slug": "guantes",
    "nombre": "Guantes",
    "hero": {
      "src": "/images/catalogo/guantes/hero-guantes.avif",
      "alt": "Guantes para bombero de uso estructural, forestal y de rescate"
    },
    "leyendaImagenIlustrativa": "Imagen ilustrativa del tipo de guante. Marca, modelo y configuración exactos se confirman por escrito en la cotización."
  },
  "tipos": [
    {
      "slug": "guante-estructural",
      "seccion": "guantes",
      "nombre": "Guante estructural",
      "nombreCard": "Guante estructural",
      "title": "Guantes de bombero estructural con barrera de humedad",
      "description": "Guantes de bombero estructural: capas, barreras, puño, ajuste y referencia NFPA 1970 para comparar una cotización institucional por operación.",
      "lead": "El guante estructural es el que entra contigo a un incendio en edificación: cuero por fuera, barrera de humedad y forro térmico por dentro, y un puño que solapa con la manga del chaquetón sin soltar la boquilla.",
      "imagen": {
        "src": "/images/catalogo/guantes/tipo-guante-estructural.avif",
        "alt": "Guante estructural para bombero",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      },
      "bloques": [
        {
          "eyebrow": "Qué es",
          "h2": "Tres capas y un puño que no deja huecos",
          "parrafos": [
            "Un guante estructural repite la lógica del traje: una capa exterior que resiste flama y abrasión, una barrera que frena el agua y el vapor caliente, y un forro que aísla del calor. Todo eso sin perder el agarre de la boquilla ni de la herramienta.",
            "El punto crítico es la muñeca. Con los brazos arriba, el puño del guante debe quedar bajo la manga del chaquetón; si queda un hueco, por ahí entra el calor aunque guante y traje estén certificados."
          ]
        },
        {
          "eyebrow": "Cómo elegir",
          "id": "elegir",
          "h2": "Material, barreras y estatus normativo",
          "parrafos": [
            "El Sköld FPGS usa carnaza de res de 1.5 a 1.7 mm, forro de modacrílico SEF cosido a cada dedo y puño elástico de Kevlar de dos capas; se publica en unitalla. El Veridian Fire Pro II usa cuero tratado, barrera transpirable Pyrotec hasta el puño y puño de dos pulgadas reforzado con Nomex.",
            "La diferencia normativa también cuenta: el FPGS declara NFPA 1971 edición 2013 y el Fire Pro II está certificado por UL bajo NFPA 1971-2018. Si tu pliego exige certificación, esa línea decide la compra."
          ],
          "lista": [
            "Sköld FPGS: carnaza de res de 1.5 a 1.7 mm",
            "Veridian Fire Pro II: GIS1017, cuero tratado",
            "Barreras: modacrílico SEF o Pyrotec",
            "Puño: Kevlar de dos capas o dos pulgadas con Nomex",
            "Talla: por usuario, con prueba de agarre",
            "Estatus: declarado o certificado UL, según modelo"
          ]
        },
        {
          "eyebrow": "En servicio",
          "h2": "Inspección y retiro del guante",
          "parrafos": [
            "Revisa costuras, palma y puño después de cada servicio. Un guante endurecido por calor, con la barrera perforada o con costuras abiertas en los dedos ya no protege, aunque siga cerrando la mano.",
            "Lávalo y sécalo como indica el fabricante; el FPGS trae bandola interna para colgarlo a secar. No lo repares con hilos o parches que no sean del fabricante, porque cambian su comportamiento frente al calor."
          ]
        }
      ],
      "especificacion": [
        {
          "campo": "Uso principal",
          "valor": "Combate de incendio estructural"
        },
        {
          "campo": "Referencia",
          "valor": "NFPA 1970 (antes NFPA 1971)"
        },
        {
          "campo": "Interfaz",
          "valor": "Manga del chaquetón y herramienta"
        }
      ],
      "normas": [
        {
          "norma": "NFPA 1970",
          "alcance": "Referencia vigente para el conjunto estructural; verifica la declaración del modelo."
        }
      ],
      "errores": [
        "Comprar una talla estándar sin prueba de agarre",
        "Confundir una declaración del fabricante con certificación",
        "Elegir el guante sin revisar el puño del chaquetón",
        "Reparar con materiales no previstos por el fabricante"
      ],
      "faq": [
        {
          "q": "¿Qué guantes estructurales para bombero surtimos?",
          "a": "El Sköld FPGS y el Veridian Fire Pro II GIS1017. El primero declara NFPA 1971 edición 2013; el segundo está certificado por UL bajo NFPA 1971-2018."
        },
        {
          "q": "¿Qué guante trae el kit estructural?",
          "a": "El kit estructural Profesional incluye el Veridian Fire Pro II GIS1017, con barrera Pyrotec y puño reforzado con Nomex."
        },
        {
          "q": "¿El guante estructural sirve para incendio forestal?",
          "a": "Se puede usar, pero en línea de fuego se trabaja horas con herramienta manual y conviene un guante forestal, más ligero y con mejor destreza."
        },
        {
          "q": "¿Cómo compruebo que el guante es compatible con mi chaquetón?",
          "a": "Con los dos puestos, levantando los brazos y girando las muñecas: el puño del guante debe quedar bajo la manga sin dejar piel expuesta. Mándanos una foto del puño de tu chaquetón y te decimos qué revisar."
        }
      ],
      "relacionados": [
        "skold-fpgs",
        "veridian-fire-pro-ii"
      ],
      "chips": [
        "NFPA 1970",
        "Capas interiores",
        "Puño integrado"
      ],
      "resumen": [
        "Surtimos dos modelos: el Sköld FPGS, de carnaza de res con declaración NFPA 1971 edición 2013, y el Veridian Fire Pro II GIS1017, de cuero tratado con certificación UL bajo NFPA 1971-2018.",
        "Te los cotizamos con ficha técnica y con el estatus normativo tal como lo publica cada fabricante. Si ya tienes chaquetón, dinos el modelo y revisamos contigo cómo solapan puño y manga."
      ],
      "duos": {
        "ficha": [
          "La requisición de guante estructural indica uso en combate de incendio estructural, referencia NFPA 1970 e interfaz con la manga del chaquetón y la herramienta.",
          "Si ya elegiste modelo, pide que código, talla y estatus normativo queden escritos por par. Así la recepción puede revisar cada guante contra su ficha."
        ],
        "errores": [
          "Casi todos los errores con guantes estructurales tienen que ver con la talla o con el puño: un guante grande pierde agarre y uno corto deja la muñeca expuesta.",
          "Estos cuatro puntos se resuelven con una prueba de uso antes de cerrar la partida."
        ],
        "modelos": [
          "Surtimos dos guantes estructurales con ficha publicada: el Sköld FPGS, de carnaza de res con forro de modacrílico SEF, y el Veridian Fire Pro II GIS1017, de cuero tratado con barrera Pyrotec.",
          "El Fire Pro II forma parte de nuestro kit estructural Profesional. Cada ficha muestra el estatus normativo tal como lo publica su marca."
        ],
        "faq": [
          "Respondemos las dudas habituales sobre modelos, kit estructural, uso forestal y compatibilidad con el chaquetón.",
          "Si nos mandas el modelo de tu chaquetón y las tallas de tu personal, te decimos qué guante conviene probar."
        ]
      }
    },
    {
      "slug": "guante-rescate-extricacion",
      "seccion": "guantes",
      "nombre": "Guante de rescate y extricación",
      "nombreCard": "Guante de rescate y extricación",
      "title": "Guante de rescate y extricación para bombero",
      "description": "Guante de rescate y extricación para bombero: agarre, destreza, riesgo mecánico y referencia NFPA 1950 antes de solicitar una cotización por operación.",
      "lead": "El guante de rescate y extricación prioriza destreza y protección contra cortes: se usa para manejar vidrio, lámina, eslingas y herramienta en rescate vehicular y técnico, no para entrar a un incendio.",
      "imagen": {
        "src": "/images/catalogo/guantes/tipo-guante-rescate-extricacion.avif",
        "alt": "Guante de rescate y extricación para bombero",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      },
      "bloques": [
        {
          "eyebrow": "Qué es",
          "h2": "Destreza y protección mecánica",
          "parrafos": [
            "En extricación vehicular el riesgo está en el vidrio roto, la lámina cortada y las herramientas hidráulicas. En rescate técnico, en cuerdas, eslingas y conectores que exigen sensibilidad en los dedos.",
            "Por eso este guante se diseña distinto al estructural: menos aislamiento térmico, más protección contra corte y abrasión, y una palma que deja sentir lo que se está manejando."
          ]
        },
        {
          "eyebrow": "Cómo elegir",
          "id": "elegir",
          "h2": "Maniobra, palma y puño",
          "parrafos": [
            "Empieza por la maniobra principal: vehicular, vertical o ambas. Después define el material de la palma y el tipo de puño, y pide que el fabricante declare ambos por escrito.",
            "La prueba decide: con el guante puesto, el usuario debe abrir y cerrar un mosquetón, manejar una cuña y operar la válvula de la herramienta sin quitárselo."
          ],
          "lista": [
            "Operación: rescate vehicular o técnico",
            "Referencia: NFPA 1950",
            "Talla: por usuario y por par",
            "Palma: material declarado por fabricante",
            "Puño y cierre: según maniobra",
            "Prueba: mosquetón, cuña, eslinga y conector"
          ]
        },
        {
          "eyebrow": "En servicio",
          "h2": "Inspección después de cada rescate",
          "parrafos": [
            "El vidrio y la lámina dejan cortes que a veces no se ven a simple vista. Revisa palma, dedos y costuras después de cada servicio, y retira el guante si hay cortes que atraviesan el material.",
            "Si el guante se contaminó con fluidos o químicos del vehículo, límpialo según el fabricante o sepáralo para evaluarlo antes de volver a usarlo."
          ]
        }
      ],
      "especificacion": [
        {
          "campo": "Uso principal",
          "valor": "Rescate y extricación"
        },
        {
          "campo": "Referencia",
          "valor": "NFPA 1950 (antes NFPA 1951)"
        },
        {
          "campo": "Prioridad",
          "valor": "Destreza y protección mecánica"
        }
      ],
      "normas": [
        {
          "norma": "NFPA 1950",
          "alcance": "Referencia vigente para EPP de rescate técnico."
        }
      ],
      "errores": [
        "Elegir por grosor sin probar la destreza",
        "Usarlo como sustituto del guante estructural",
        "No definir la maniobra principal",
        "Ignorar la contaminación después de un rescate vehicular"
      ],
      "faq": [
        {
          "q": "¿Tienen modelos de guante de rescate publicados?",
          "a": "Todavía no. Lo cotizamos según la maniobra y las tallas de tu equipo, y te presentamos la ficha del fabricante antes de que decidas."
        },
        {
          "q": "¿Puedo usar el guante estructural para extricación?",
          "a": "Se hace, pero el guante estructural es grueso y resta destreza para manejar conectores y piezas pequeñas. Si el rescate es frecuente, conviene un guante propio."
        },
        {
          "q": "¿Qué norma aplica al guante de rescate técnico?",
          "a": "La referencia vigente es NFPA 1950, que absorbió a la NFPA 1951 de equipo de rescate técnico."
        },
        {
          "q": "¿El guante de rescate protege contra el fuego?",
          "a": "No está pensado para combate de incendio. Si en la escena hay riesgo de fuego, la protección térmica la da el guante estructural."
        }
      ],
      "chips": [
        "NFPA 1950",
        "Extricación",
        "Destreza"
      ],
      "resumen": [
        "En un rescate se trabaja con piezas pequeñas y bordes filosos, y un guante grueso estorba. La referencia para EPP de rescate técnico es NFPA 1950, que sustituyó a la 1951.",
        "Todavía no publicamos un modelo de rescate. Lo cotizamos según la maniobra de tu equipo y lo probamos con mosquetones, cuñas y conectores antes de cerrar la partida."
      ],
      "duos": {
        "ficha": [
          "Para requisitar guante de rescate y extricación indica la operación, la referencia NFPA 1950 y la prioridad de destreza y protección mecánica.",
          "La tabla describe el tipo; el código llega con el modelo que te propongamos. Material de palma, puño y norma declarada llegan con la ficha del guante que te propongamos."
        ],
        "errores": [
          "El guante de rescate falla cuando se elige como si fuera estructural: grueso, rígido y difícil de usar con conectores.",
          "Estos cuatro errores conviene revisarlos antes de comprar para toda la cuadrilla."
        ],
        "faq": [
          "Respondemos las dudas habituales sobre modelos, norma y diferencias con el guante estructural.",
          "Si nos dices qué rescates hace tu equipo y con qué herramienta, te proponemos una configuración concreta."
        ]
      }
    },
    {
      "slug": "guante-forestal",
      "seccion": "guantes",
      "nombre": "Guante forestal",
      "nombreCard": "Guante forestal",
      "title": "Guante forestal para bombero de línea de fuego",
      "description": "Guante forestal para bombero: movilidad, puño, calor exterior y referencia NFPA 1950 antes de integrar el equipo de línea de fuego. Cotiza con ficha.",
      "lead": "El guante forestal está pensado para jornadas largas con herramienta manual: protege del calor y de las astillas sin quitar la movilidad que se necesita para trabajar con Pulaski, McLeod o batefuego.",
      "imagen": {
        "src": "/images/catalogo/guantes/tipo-guante-forestal.avif",
        "alt": "Guante forestal para bombero",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      },
      "bloques": [
        {
          "eyebrow": "Qué es",
          "h2": "Guante para abrir brecha y trabajar ceniza",
          "parrafos": [
            "El trabajo forestal combina calor, ceniza, astillas y roce constante con el mango de la herramienta. Un guante demasiado grueso cansa la mano y un guante delgado se rompe en pocos días.",
            "El puño también importa: debe cerrar con la manga de la camisola o del overol forestal para que no entre ceniza ni brasa mientras el brigadista se agacha y trabaja cerca del suelo."
          ]
        },
        {
          "eyebrow": "Cómo elegir",
          "id": "elegir",
          "h2": "Herramienta, talla y reserva",
          "parrafos": [
            "Define qué herramienta usa la cuadrilla y prueba el guante con ella: Pulaski, McLeod, rastrillo o batefuego. El agarre del mango tiene que ser firme sin que el guante se doble en la palma.",
            "El desgaste es alto, así que conviene cotizar un par de reserva por persona para la temporada. Pide que la palma y el puño estén declarados por el fabricante."
          ],
          "lista": [
            "Operación: línea de fuego exterior",
            "Referencia: NFPA 1950, antes NFPA 1977",
            "Talla: por par y por cuadrilla",
            "Herramienta: Pulaski, McLeod o batefuego",
            "Palma y puño: material declarado",
            "Reserva: por desgaste de temporada"
          ]
        },
        {
          "eyebrow": "En servicio",
          "h2": "Revisión y cambio durante la temporada",
          "parrafos": [
            "Después de cada jornada sacude la ceniza y revisa palma, dedos y costuras. La zona entre el pulgar y el índice es la primera que se gasta con el mango de la herramienta.",
            "Un guante con la palma adelgazada o una costura abierta se cambia antes de la siguiente salida. En plena temporada, tener pares de reserva evita que alguien trabaje con un guante dañado."
          ]
        }
      ],
      "especificacion": [
        {
          "campo": "Uso principal",
          "valor": "Línea de fuego y operación exterior"
        },
        {
          "campo": "Referencia",
          "valor": "NFPA 1950 (antes NFPA 1977)"
        },
        {
          "campo": "Prioridad",
          "valor": "Movilidad y agarre"
        }
      ],
      "normas": [
        {
          "norma": "NFPA 1950",
          "alcance": "Referencia para equipo forestal."
        }
      ],
      "errores": [
        "Usar guante estructural en línea de fuego por costumbre",
        "No probar el guante con la herramienta real",
        "Ignorar la talla y el ajuste del puño",
        "Comprar sin reserva para toda la temporada"
      ],
      "faq": [
        {
          "q": "¿El guante forestal sirve para ataque interior?",
          "a": "No. Para incendio estructural se usa guante estructural, con barrera de humedad y forro térmico."
        },
        {
          "q": "¿Tienen modelos de guante forestal publicados?",
          "a": "Todavía no. Lo cotizamos según la herramienta y las tallas de tu cuadrilla, y te presentamos la ficha antes de que decidas."
        },
        {
          "q": "¿Qué norma aplica al guante forestal?",
          "a": "La referencia vigente para equipo forestal es NFPA 1950, que sustituyó a la NFPA 1977."
        },
        {
          "q": "¿Cuántos guantes forestales se necesitan por brigadista?",
          "a": "Al menos uno en uso y uno de reserva por temporada. El desgaste con herramienta manual es alto y un guante roto no debe esperar a la siguiente compra."
        }
      ],
      "chips": [
        "NFPA 1950",
        "Línea de fuego",
        "Herramienta manual"
      ],
      "resumen": [
        "En línea de fuego no se sostiene una boquilla, se abre brecha durante horas. Por eso el guante forestal es más ligero que el estructural y prioriza agarre y destreza.",
        "Todavía no publicamos un modelo forestal. Lo cotizamos por cuadrilla, según la herramienta que usa y la manga del traje forestal, con NFPA 1950 como referencia."
      ],
      "duos": {
        "ficha": [
          "Para requisitar guante forestal indica el uso en línea de fuego, la referencia NFPA 1950 y la prioridad de movilidad y agarre.",
          "Todavía no hay un modelo en catálogo, así que la tabla no incluye código. Palma, puño y norma declarada llegan con la ficha del guante que te propongamos."
        ],
        "errores": [
          "En incendio forestal el guante se gasta rápido y se usa todo el día. Elegirlo mal se nota desde la primera jornada.",
          "Estos cuatro errores conviene revisarlos antes de equipar a la cuadrilla completa."
        ],
        "faq": [
          "Respondemos las dudas habituales sobre uso, modelos, norma y reserva del guante forestal.",
          "Si nos dices cuántos brigadistas son y con qué herramienta trabajan, te mandamos una propuesta por WhatsApp."
        ]
      }
    },
    {
      "slug": "guante-brigadista",
      "seccion": "guantes",
      "nombre": "Guante para brigadista",
      "nombreCard": "Guante para brigadista",
      "title": "Guante para brigadista contra incendio y conato",
      "description": "Guante para brigadista contra incendio: materiales, ajuste y límites de uso para definir el equipo de respuesta inicial y pedir una cotización clara.",
      "lead": "El guante para brigadista protege en respuesta inicial y control de conatos: extintor, manguera de gabinete y apoyo a la evacuación. Surtimos el Romak Fire Firemax VI GIS1008, de piel tratada.",
      "imagen": {
        "src": "/images/catalogo/guantes/tipo-guante-brigadista.avif",
        "alt": "Guante para brigadista contra incendio",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      },
      "bloques": [
        {
          "eyebrow": "Qué es",
          "h2": "Guante para respuesta inicial y conato",
          "parrafos": [
            "La brigada de un centro de trabajo suele actuar en los primeros minutos: extintor, manguera de gabinete y evacuación. Necesita un guante que proteja del calor y de la abrasión sin quitar destreza para operar pasadores y palancas.",
            "Esa es la función del guante brigadista. No sustituye al guante estructural, que se diseña para permanecer dentro de un incendio con barrera de humedad y forro de mayor protección."
          ]
        },
        {
          "eyebrow": "Cómo elegir",
          "id": "elegir",
          "h2": "Talla, refuerzos y tarea autorizada",
          "parrafos": [
            "El Firemax VI trae refuerzo de piel en la palma y entre índice y pulgar, banda elástica en el dorso e índice de construcción corrida, sin costura expuesta. Se cose con hilo de Kevlar.",
            "Elige la talla con la prueba real: quitar el seguro de un extintor, apretar la palanca y abrir la válvula de un gabinete con el guante puesto. Si algo de eso cuesta, la talla no es la correcta."
          ],
          "lista": [
            "Modelo: Romak Fire Firemax VI GIS1008",
            "Material: piel tratada color oro",
            "Corte: gun con pulgar tipo ala",
            "Tallas: M/G estándar y XG",
            "Forro y puño: aramida y Kevlar",
            "Estatus: sin norma declarada"
          ]
        },
        {
          "eyebrow": "En servicio",
          "h2": "Inspección y retiro del guante brigadista",
          "parrafos": [
            "Revisa la piel, las costuras y el puño después de cada simulacro o respuesta real. La piel endurecida por calor o las costuras abiertas en los dedos son motivo de cambio.",
            "Guarda los guantes con el resto del equipo asignado a cada brigadista. Así se sabe quién usa qué talla y se repone sin volver a probar todo el lote."
          ]
        }
      ],
      "especificacion": [
        {
          "campo": "Uso principal",
          "valor": "Brigada y respuesta definida por riesgo"
        },
        {
          "campo": "Referencia",
          "valor": "Según procedimiento y análisis de riesgo"
        },
        {
          "campo": "Modelo publicado",
          "valor": "Romak Fire Firemax VI"
        }
      ],
      "errores": [
        "Confundir el trabajo de brigada con el ataque interior",
        "Pedir el lote sin talla por usuario",
        "Atribuir al guante una norma que no declara",
        "No probarlo con el extintor y el gabinete reales"
      ],
      "faq": [
        {
          "q": "¿Qué guante para brigadista surtimos?",
          "a": "El Romak Fire Firemax VI GIS1008, de piel tratada color oro con forro de aramida y puño de Kevlar, en tallas M/G estándar y XG."
        },
        {
          "q": "¿El Firemax VI está certificado?",
          "a": "No. Su fabricante no declara norma y así lo presentamos. Si tu pliego exige certificación, te cotizamos un guante estructural."
        },
        {
          "q": "¿El guante brigadista sirve para entrar a un incendio?",
          "a": "No está pensado para ataque interior. Para esa operación la brigada necesita guante estructural y el resto del conjunto estructural."
        },
        {
          "q": "¿Qué guante incluye el kit brigadista?",
          "a": "El kit brigadista incluye el Firemax VI GIS1008 junto con el traje Combate Básico, el casco Bullard LTX, la capucha CAP1005 y la bota Workman Fire."
        }
      ],
      "relacionados": [
        "romak-firemax-vi"
      ],
      "chips": [
        "Brigada",
        "Talla M/G/XG",
        "Sin norma declarada"
      ],
      "resumen": [
        "El Firemax VI combina piel tratada color oro, corte gun con pulgar tipo ala, forro térmico de aramida y puño tejido de Kevlar. Se ofrece en tallas M/G estándar y XG.",
        "No declara norma, y así lo indicamos en su ficha. Si el procedimiento de tu brigada incluye ataque interior, te cotizamos guante estructural dentro del conjunto completo."
      ],
      "duos": {
        "ficha": [
          "La requisición de guante brigadista parte del análisis de riesgo: qué tareas tiene autorizadas la brigada y hasta dónde llega su respuesta.",
          "El modelo publicado es el Romak Fire Firemax VI. Si la brigada hace ataque interior, la tabla cambia y la partida pasa a guante estructural."
        ],
        "errores": [
          "Los errores con guantes de brigada casi siempre vienen de no separar el conato del ataque interior.",
          "Revisa estos cuatro puntos contra tu procedimiento antes de pedir cotización."
        ],
        "modelos": [
          "Surtimos el Romak Fire Firemax VI GIS1008: piel tratada color oro, corte gun, forro térmico de aramida y puño tejido de Kevlar, en tallas M/G estándar y XG.",
          "Es el guante de nuestro kit brigadista y se publica sin norma declarada, tal como lo indica su fabricante."
        ],
        "faq": [
          "Respondemos las dudas habituales sobre el Firemax VI, certificación, alcance y kit brigadista.",
          "Si nos compartes cuántos brigadistas son y sus tallas, te mandamos la cotización con el lote cerrado."
        ]
      }
    }
  ],
  "modelos": [
    {
      "id": "romak-firemax-vi",
      "seccion": "guantes",
      "tipo": "guante-brigadista",
      "marca": "Romak Fire",
      "fabricante": "Romak Fire",
      "nombre": "Firemax VI",
      "codigo": "GIS1008",
      "title": "Romak Fire Firemax VI | Guantes bombero",
      "description": "Romak Fire Firemax VI: material, construcción, talla y estatus normativo para revisar ajuste, interfaz con el traje y cotización por operación institucional.",
      "material": "Piel tratada color oro",
      "tallas": "M/G estándar y XG",
      "estatusNorma": "sin-norma",
      "colores": "Oro",
      "caracteristicas": [
        "Corte gun y pulgar tipo ala",
        "Banda elástica en el dorso",
        "Refuerzo de piel en palma y entre índice y pulgar",
        "Índice de construcción corrida sin costura expuesta",
        "Forro térmico de aramida y puño tejido de Kevlar",
        "Ensamble con hilo Kevlar"
      ],
      "resumen": [
        "El Romak Fire Firemax VI GIS1008 es un guante para brigadista de piel tratada color oro, con forro térmico de aramida, puño tejido de Kevlar y corte gun con pulgar tipo ala.",
        "Se ofrece en tallas M/G estándar y XG, y es el guante de nuestro kit brigadista. Está pensado para respuesta inicial, extintor y manguera de gabinete.",
        "Su fabricante no declara norma, y así lo presentamos. Si tu brigada hace ataque interior, te cotizamos un guante estructural."
      ],
      "descripcion": [
        "La piel tratada da buen agarre y el refuerzo en la palma y entre índice y pulgar protege las zonas que más se gastan al operar palancas y válvulas.",
        "Su índice es de construcción corrida, sin costura expuesta, y todo el guante se ensambla con hilo de Kevlar. La banda elástica del dorso lo mantiene ajustado a la mano."
      ],
      "faq": [
        {
          "q": "¿Qué tallas tiene el guante Firemax VI?",
          "a": "M/G estándar y XG, según su fabricante."
        },
        {
          "q": "¿El guante Romak Fire Firemax VI está certificado?",
          "a": "No. Su fabricante no declara norma y así lo presentamos en la ficha."
        },
        {
          "q": "¿Qué forro tiene el Firemax VI?",
          "a": "Forro térmico de aramida, con puño tejido de Kevlar y ensamble con hilo de Kevlar."
        },
        {
          "q": "¿Para qué brigada conviene el Firemax VI?",
          "a": "Para brigadas de respuesta inicial y conato. Si el procedimiento incluye ataque interior, se necesita guante estructural."
        }
      ],
      "imagen": {
        "src": "/images/catalogo/guantes/romak-firemax-vi.avif",
        "alt": "Guante Romak Fire Firemax VI color oro",
        "width": 1000,
        "height": 1250,
        "origen": "proveedor",
        "credito": "Romak Fire"
      },
      "duos": {
        "ficha": [
          "El Firemax VI se identifica con el código GIS1008. La tabla reúne material, tallas y estatus normativo tal como los publica su ficha.",
          "No declara norma. Pide que así quede escrito en la cotización para que la partida no se confunda con un guante estructural."
        ],
        "caracteristicas": [
          "Estas son las características que publica la ficha del Firemax VI, pensadas para agarre y destreza en respuesta inicial.",
          "Los refuerzos de palma y el índice sin costura expuesta son sus rasgos más prácticos en el día a día."
        ],
        "faq": [
          "Respondemos lo que más se pregunta del Firemax VI: tallas, certificación, forro y uso.",
          "Si nos compartes cuántos brigadistas son y sus tallas, te cotizamos el lote cerrado."
        ]
      }
    },
    {
      "id": "skold-fpgs",
      "seccion": "guantes",
      "tipo": "guante-estructural",
      "marca": "Sköld",
      "fabricante": "Sköld",
      "nombre": "Guante de bombero",
      "codigo": "FPGS",
      "title": "Sköld Guante de bombero | Guantes bombero",
      "description": "Sköld Guante de bombero: material, construcción, talla y estatus normativo para revisar ajuste, interfaz con el traje y cotización por operación institucional.",
      "material": "Carnaza de res de 1.5–1.7 mm oro y negro",
      "tallas": "Unitalla",
      "norma": "NFPA 1971 ed. 2013 · OSHA 29 CFR 1910.156 · Cal-OSHA",
      "estatusNorma": "declarado",
      "caracteristicas": [
        "Corte de pistola y pulgar tipo ala",
        "Banda elástica en muñeca y refuerzos en dedos",
        "Forro completo de modacrílico SEF cosido a cada dedo",
        "Puño elástico de Kevlar de dos capas",
        "Costuras Kevlar Tex-80",
        "Bandola interna para secado"
      ],
      "resumen": [
        "El guante de bombero Sköld FPGS es un guante estructural de carnaza de res de 1.5 a 1.7 mm, en oro y negro, con forro de modacrílico SEF cosido a cada dedo.",
        "Tiene corte de pistola con pulgar tipo ala, puño elástico de Kevlar de dos capas y costuras de Kevlar Tex-80. Se publica en unitalla.",
        "Sköld declara NFPA 1971 edición 2013, OSHA 29 CFR 1910.156 y Cal-OSHA. Lo presentamos como declaración del fabricante."
      ],
      "descripcion": [
        "El forro cosido a cada dedo evita que se salga al quitarse el guante con la mano sudada, un problema común en guantes estructurales. La bandola interna permite colgarlo para que seque por dentro.",
        "Al ser unitalla, conviene probarlo con cada usuario, con el chaquetón puesto: el puño elástico de Kevlar debe quedar bajo la manga sin dejar la muñeca expuesta."
      ],
      "faq": [
        {
          "q": "¿En qué talla viene el guante Sköld FPGS?",
          "a": "En unitalla, según su fabricante. Por eso recomendamos probarlo con cada usuario antes de cerrar la compra."
        },
        {
          "q": "¿El guante Sköld FPGS está certificado?",
          "a": "Sköld declara NFPA 1971 edición 2013, OSHA 29 CFR 1910.156 y Cal-OSHA, sin número de certificación publicado."
        },
        {
          "q": "¿De qué material es el guante Sköld FPGS?",
          "a": "Carnaza de res de 1.5 a 1.7 mm en oro y negro, con forro de modacrílico SEF y costuras de Kevlar Tex-80."
        },
        {
          "q": "¿Qué diferencia hay entre el Sköld FPGS y el Veridian Fire Pro II?",
          "a": "El FPGS es de carnaza y declara NFPA 1971 edición 2013; el Fire Pro II es de cuero tratado, con barrera Pyrotec, y está certificado por UL bajo NFPA 1971-2018."
        }
      ],
      "imagen": {
        "src": "/images/catalogo/guantes/skold-fpgs.avif",
        "alt": "Guante Sköld FPGS oro y negro",
        "width": 1000,
        "height": 1250,
        "origen": "proveedor",
        "credito": "Romak Fire"
      },
      "duos": {
        "ficha": [
          "El guante Sköld se identifica con el código FPGS. La tabla reúne material, talla y normas tal como los publica su ficha.",
          "Las normas aparecen como declaración del fabricante. Si tu pliego exige certificación, compáralo con el Veridian Fire Pro II."
        ],
        "caracteristicas": [
          "Estas son las características que publica la ficha del FPGS, con el forro cosido a cada dedo como rasgo distintivo.",
          "La bandola interna y el puño de dos capas facilitan el secado y el solape con la manga del chaquetón."
        ],
        "otros": [
          "El FPGS comparte tipo con el Veridian Fire Pro II, de cuero tratado y certificado por UL.",
          "Si tu partida pide certificación, el Fire Pro II es la opción; si pide declaración del fabricante, los dos cumplen el requisito."
        ],
        "faq": [
          "Respondemos lo que más se pregunta del Sköld FPGS: talla, normas, material y diferencias con el Fire Pro II.",
          "Si nos compartes el modelo de chaquetón que usa tu equipo, te decimos qué revisar en la prueba del puño."
        ]
      }
    },
    {
      "id": "veridian-fire-pro-ii",
      "seccion": "guantes",
      "tipo": "guante-estructural",
      "marca": "Veridian",
      "fabricante": "Veridian",
      "nombre": "Fire Pro II",
      "codigo": "GIS1017",
      "title": "Veridian Fire Pro II | Guantes bombero",
      "description": "Veridian Fire Pro II: material, construcción, talla y estatus normativo para revisar ajuste, interfaz con el traje y cotización por operación.",
      "material": "Cuero tratado",
      "barreras": "FR-modacrílico, Pyrotec y barrera hidrófuga con protección químico-biológica",
      "norma": "NFPA 1971-2018",
      "estatusNorma": "certificado-ul",
      "caracteristicas": [
        "Costuras reforzadas",
        "Tres capas interiores",
        "Barrera de humedad transpirable Pyrotec",
        "Barreras en todo el guante, incluido el puño",
        "Puño de 2 pulgadas reforzado con Nomex",
        "Incluido en el kit estructural Profesional"
      ],
      "resumen": [
        "El Veridian Fire Pro II GIS1017 es un guante estructural de cuero tratado con tres capas interiores y barrera de humedad transpirable Pyrotec en todo el guante, incluido el puño.",
        "Su puño de dos pulgadas está reforzado con Nomex y sus costuras son reforzadas. Es el guante de nuestro kit estructural Profesional.",
        "Está certificado por UL bajo NFPA 1971-2018. Lo cotizamos con su ficha técnica y con prueba de talla con el chaquetón puesto."
      ],
      "descripcion": [
        "Sus barreras, de FR-modacrílico, Pyrotec y una capa hidrófuga con protección químico-biológica, llegan hasta el puño. Así el guante protege también en la zona que se une con la manga.",
        "La certificación UL es la diferencia principal frente a guantes que solo declaran norma. Si tu pliego exige certificación, este es el guante estructural del catálogo que la publica."
      ],
      "faq": [
        {
          "q": "¿El guante Veridian Fire Pro II está certificado?",
          "a": "Sí, está certificado por UL bajo NFPA 1971-2018, según su ficha."
        },
        {
          "q": "¿Qué barreras tiene el Veridian Fire Pro II?",
          "a": "FR-modacrílico, barrera de humedad transpirable Pyrotec y una barrera hidrófuga con protección químico-biológica, en todo el guante."
        },
        {
          "q": "¿En qué kit viene el Veridian Fire Pro II?",
          "a": "En nuestro kit estructural Profesional, junto con el traje Romak Fire Profesional, el casco Bullard LTX, la capucha Majestic PAC II y la bota Croydon Filtrex."
        },
        {
          "q": "¿Qué puño tiene el Veridian Fire Pro II?",
          "a": "Un puño de dos pulgadas reforzado con Nomex, con barreras incluidas, para solapar con la manga del chaquetón."
        }
      ],
      "imagen": {
        "src": "/images/catalogo/guantes/veridian-fire-pro-ii.avif",
        "alt": "Guante Veridian Fire Pro II",
        "width": 1000,
        "height": 1250,
        "origen": "proveedor",
        "credito": "Romak Fire"
      },
      "duos": {
        "ficha": [
          "El Veridian Fire Pro II se identifica con el código GIS1017. La tabla reúne material, barreras y certificación tal como los publica su ficha.",
          "Es el guante estructural del catálogo con certificación UL. Pide que el estatus quede escrito así en la cotización."
        ],
        "caracteristicas": [
          "Estas son las características que publica la ficha del Fire Pro II, con barreras que llegan hasta el puño.",
          "Su inclusión en el kit estructural Profesional lo hace la opción natural si equipas con ese kit."
        ],
        "otros": [
          "El Fire Pro II comparte tipo con el Sköld FPGS, de carnaza de res, que declara NFPA 1971 edición 2013.",
          "Compáralos por material, barreras, talla y estatus normativo antes de decidir."
        ],
        "faq": [
          "Respondemos lo que más se pregunta del Veridian Fire Pro II: certificación, barreras, kit y puño.",
          "Si nos mandas las tallas de tu personal, te cotizamos el lote con ficha técnica."
        ]
      }
    }
  ]
};
