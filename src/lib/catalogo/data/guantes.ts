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
        "Firemax VI GIS1008 es un guante Romak Fire de piel tratada color oro, corte gun, pulgar tipo ala y forro térmico de aramida. Elige M/G estándar o XG para brigada cuando la prueba permita accionar pasador, palanca y manguera con control, sin confundir respuesta inicial con ataque estructural.",
        "Cotizamos GIS1008 por talla, piel tratada, refuerzo de palma, puño tejido de Kevlar y tarea autorizada de brigada. El modelo se publica sin norma declarada; pídenos por WhatsApp una prueba con extintor, manga y casco para confirmar que Firemax VI corresponde al procedimiento de tu planta."
      ],
      "descripcion": [
        "Elige Firemax VI GIS1008 cuando tu brigada necesita controlar extintor, pasador y manguera con piel tratada color oro, corte gun y pulgar tipo ala. En la orden escribimos GIS1008, M/G estándar o XG, destino de brigada y refuerzo de palma; si tu procedimiento contempla ataque estructural, cotizamos otra familia y no este guante por apariencia ni por disponibilidad inmediata del inventario.",
        "La construcción reúne índice corrido sin costura expuesta, banda elástica en el dorso, refuerzo de piel en palma y entre índice y pulgar, forro térmico de aramida, puño tejido e hilo Kevlar. En la prueba de talla te pedimos cerrar la mano, liberar el pasador y oprimir la palanca; elige la talla que no tense el pulgar ni doble el puño dentro de la manga.",
        "Pide Firemax VI con banda dorsal, pulgar tipo ala y puño tejido de Kevlar cuando lo integrarás con traje brigadista Romak Fire Combate Básico, casco, máscara y extintor. Durante la muestra revisamos que el puño solape la manga y que radio, puerta y manguera sigan accesibles; si una de esas maniobras pierde movilidad, ajustamos la talla antes de cotizar el lote.",
        "En operación de brigada usamos GIS1008 para respuesta inicial definida por tu procedimiento y ensayamos pasador, palanca, manguera y puerta antes de aceptar un lote. Al recibirlo, cotejamos color oro, corte gun, refuerzos, costuras y tallas M/G estándar o XG contra la orden; separa cualquier par cuya palma resbale, cuyo ajuste cambie durante el cierre de mano o cuya banda dorsal pierda tensión.",
        "Firemax VI se publica sin norma declarada; lo reportamos así, nunca como certificación. Antes y después de uso revisamos refuerzo entre índice y pulgar, hilo Kevlar, banda dorsal, puño y forro de aramida. Retira el par con piel endurecida, forro separado o control insuficiente, y registra GIS1008, talla y tarea autorizada para pedir una reposición equivalente y compatible para brigada."
      ],
      "faq": [
        {
          "q": "¿Cuál es el código?",
          "a": "GIS1008."
        },
        {
          "q": "¿Qué tallas hay?",
          "a": "M/G estándar y XG."
        },
        {
          "q": "¿Tiene norma declarada?",
          "a": "No tiene norma declarada."
        }
      ],
      "imagen": {
        "src": "/images/catalogo/guantes/romak-firemax-vi.avif",
        "alt": "Guante Romak Fire Firemax VI color oro",
        "width": 1000,
        "height": 1250,
        "origen": "proveedor",
        "credito": "Romak Fire"
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
        "Sköld FPGS combina carnaza de res de 1.5–1.7 mm, forro completo de modacrílico SEF y puño Kevlar de dos capas para uso estructural. Elige este modelo unitalla solo si cada usuario puede cerrar la mano, controlar boquilla y conservar el solape con su chaquetón durante la maniobra.",
        "Cotizamos FPGS con construcción de puño, costuras Kevlar Tex-80, bandola interna y estatus declarado NFPA 1971 ed. 2013, OSHA 29 CFR 1910.156 y Cal-OSHA. Envíanos por WhatsApp chaquetón, radio, casco y boquilla para que revisemos la prueba antes de confirmar la partida unitalla para cada usuario."
      ],
      "descripcion": [
        "Elige Sköld FPGS si la carnaza de res de 1.5–1.7 mm en oro y negro, el corte de pistola y el pulgar tipo ala responden a la operación estructural de tu cuerpo. En la orden escribimos FPGS, unitalla, carnaza y puño seleccionado; no cotizamos solo guante Sköld, porque esa frase no identifica la construcción que probará tu personal ni el ajuste real de la muñeca.",
        "El índice corrido y el forro completo de modacrílico SEF se cosen a cada dedo con hilo Kevlar. Lleva banda elástica en muñeca, refuerzos en dedos y entre índice y pulgar, puño elástico de Kevlar de dos capas con mínimo de tres pulgadas, y costuras Kevlar Tex-80 con mínimo de ocho puntadas por pulgada. En talla, prueba boquilla y cierre de mano antes de elegir unitalla.",
        "Pide el FPGS con puño elástico de Kevlar o con la opción de puño de piel de dos pulgadas según la manga del chaquetón. La bandola interna apoya el secado, y la probamos con casco, máscara, radio y chaquetón para confirmar que el puño conserve solape; si el radio o la manga interfieren, cotizamos otra interfaz antes de liberar la partida.",
        "Para operación estructural, te pedimos tomar boquilla, herramienta y radio con FPGS antes de aceptar un lote unitalla. Al recibirlo cotejamos carnaza oro y negro, corte de pistola, pulgar tipo ala, refuerzos y costuras Kevlar Tex-80 contra la orden. Si una persona pierde destreza o el puño se mueve al levantar los brazos, no aprobamos ese ajuste para su uso.",
        "Sköld declara FPGS bajo NFPA 1971 ed. 2013, OSHA 29 CFR 1910.156 y Cal-OSHA; lo presentamos como declarado, no como certificación UL. Antes y después de intervención revisamos carnaza, forro de modacrílico SEF, costuras Kevlar Tex-80, puño y bandola interna. Retira el par con costura abierta, forro separado o carnaza rígida, y registra FPGS, turno y talla de mano para pedir reemplazo."
      ],
      "faq": [
        {
          "q": "¿Cuál es el código?",
          "a": "FPGS."
        },
        {
          "q": "¿Qué talla declara?",
          "a": "Unitalla."
        },
        {
          "q": "¿La norma es certificación publicada?",
          "a": "Se muestra como declaración del fabricante."
        }
      ],
      "imagen": {
        "src": "/images/catalogo/guantes/skold-fpgs.avif",
        "alt": "Guante Sköld FPGS oro y negro",
        "width": 1000,
        "height": 1250,
        "origen": "proveedor",
        "credito": "Romak Fire"
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
        "Veridian Fire Pro II GIS1017 es un guante de cuero tratado con tres capas interiores, Pyrotec y barreras que continúan hasta el puño de dos pulgadas reforzado con Nomex. Elige esta configuración estructural si la prueba con chaquetón y herramienta mantiene cobertura y cierre de mano para tu elemento.",
        "Cotizamos GIS1017 con talla, cuero tratado, FR-modacrílico, Pyrotec y barrera hidrófuga con protección químico-biológica. El modelo tiene estatus certificado UL bajo NFPA 1971-2018; mándanos por WhatsApp tu chaquetón, máscara, casco y radio para revisar solape, talla, destreza, recepción y compatibilidad antes de emitir la partida."
      ],
      "descripcion": [
        "Elige Veridian Fire Pro II GIS1017 cuando necesitas cuero tratado y costuras reforzadas para una configuración estructural con tres capas interiores. En la orden escribimos GIS1017, talla, cuero tratado y las barreras declaradas; si solo anotas Fire Pro II, te pedimos completar esos datos para que el lote coincida con la muestra que usará tu cuerpo de bomberos en cada guardia.",
        "La construcción declara FR-modacrílico como refuerzo ignífugo, Pyrotec como barrera de humedad transpirable y una barrera hidrófuga con protección químico-biológica. Las tres capas están dentro del cuero tratado y acompañan costuras reforzadas. En la prueba de talla cerramos la mano, tomamos herramienta y levantamos el brazo con el chaquetón; elige la talla que mantenga destreza sin abrir el solape de la manga.",
        "Pide Fire Pro II GIS1017 con el kit estructural Profesional cuando esa combinación corresponde a tu partida, y prueba casco, máscara, radio y manga junto con el puño de dos pulgadas reforzado con Nomex. Nosotros revisamos que las barreras continúen hasta el puño y que la manga cubra la interfaz; si radio o herramienta afectan el cierre, ajustamos talla antes de surtir.",
        "En operación estructural, probamos GIS1017 con agarre, cierre de mano, radio y herramienta antes de aceptar el lote. Al recibirlo, cotejamos cuero tratado, costuras reforzadas, tres capas interiores, Pyrotec y puño Nomex de dos pulgadas contra la orden. Separa un par si la barrera se asoma, el cuero pierde integridad, el solape falla al levantar la mano o una costura cambia de posición.",
        "Veridian publica Fire Pro II con estatus certificado UL bajo NFPA 1971-2018; te entregamos ese estatus tal como lo declara el fabricante y no lo extendemos a otra configuración. Antes y después de una intervención revisamos cuero, costuras, FR-modacrílico, Pyrotec, barrera hidrófuga y puño Nomex. Retira y registra GIS1017 cuando una capa, costura o barrera pierda continuidad, flexibilidad o cobertura."
      ],
      "faq": [
        {
          "q": "¿Cuál es el código?",
          "a": "GIS1017."
        },
        {
          "q": "¿Qué barreras declara?",
          "a": "FR-modacrílico, Pyrotec y barrera hidrófuga con protección químico-biológica."
        },
        {
          "q": "¿Está incluido en un kit?",
          "a": "En el kit estructural Profesional."
        }
      ],
      "imagen": {
        "src": "/images/catalogo/guantes/veridian-fire-pro-ii.avif",
        "alt": "Guante Veridian Fire Pro II",
        "width": 1000,
        "height": 1250,
        "origen": "proveedor",
        "credito": "Romak Fire"
      }
    }
  ]
};
