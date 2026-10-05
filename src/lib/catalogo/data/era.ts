// Datos del catálogo · sección «era» (trajesbomberos.com).
// LITERAL PURO: sin funciones, sin mutaciones, sin plantillas. Se edita solo el texto;
// `astro check` valida la estructura contra ../types. Generado por scripts/emit_data.py
// (2026-09-29) a partir del contenido vigente; desde aquí se edita a mano o con Codex.
import type { Modelo, Seccion, Tipo } from '../types';

export const data: { seccion?: Seccion; tipos: Tipo[]; modelos: Modelo[] } = {
  "seccion": {
    "slug": "equipo-de-respiracion-autonoma",
    "nombre": "Equipo de respiración autónoma",
    "hero": {
      "src": "/images/catalogo/era/hero-era.avif",
      "alt": "Equipo de respiración autónoma para bombero"
    },
    "leyendaImagenIlustrativa": "Imagen ilustrativa del tipo de ERA. Marca, modelo, autonomía y configuración exactos se confirman por escrito en la cotización."
  },
  "tipos": [
    {
      "slug": "era-de-combate",
      "seccion": "equipo-de-respiracion-autonoma",
      "nombre": "ERA para combate de incendios",
      "nombreCard": "ERA de combate",
      "title": "ERA para combate de incendios con PASS y alarmas",
      "description": "ERA para combate de incendios: autonomía nominal, PASS, alarmas, máscara y referencia NFPA 1970 para revisar una cotización institucional de bomberos.",
      "lead": "El ERA de combate es el equipo de respiración autónoma de circuito abierto con el que se entra a humo y gases: máscara de cara completa, reguladores, cilindro y alarmas trabajando como un solo sistema.",
      "imagen": {
        "src": "/images/catalogo/era/tipo-era-de-combate.avif",
        "alt": "Equipo de respiración autónoma para combate de incendios",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      },
      "bloques": [
        {
          "eyebrow": "Qué es",
          "h2": "Aire propio para entrar a una atmósfera peligrosa",
          "parrafos": [
            "El ERA de combate da aire respirable cuando el entorno no lo tiene: humo, gases tóxicos o falta de oxígeno. El usuario respira desde el cilindro a través de reguladores, y la máscara sella la cara para que no entre nada del exterior.",
            "Cilindro, reguladores, máscara, arnés y alarmas se diseñan para funcionar juntos. Por eso un ERA se cotiza como conjunto: cambiar una pieza por otra de distinta familia puede afectar el sello, la conexión o la lectura de presión."
          ]
        },
        {
          "eyebrow": "Cómo elegir",
          "id": "elegir",
          "h2": "Autonomía, conexión y relevos",
          "parrafos": [
            "Los 30, 45 o 60 minutos son nominales: sirven para planear el aire, no para prometer tiempo dentro de una estructura, porque el consumo real cambia con el esfuerzo. Un cilindro mayor da más margen, pero también pesa más durante toda la maniobra.",
            "Decide también si cada usuario tendrá un cilindro de relevo y cómo vas a recargar. La estación necesita aire respirable grado D o superior; sin esa capacidad, un segundo cilindro por usuario resuelve menos de lo que parece."
          ],
          "lista": [
            "Referencia: NFPA 1970",
            "Autonomía: 30, 45 o 60 minutos nominales",
            "Cilindro: fibra de carbono a 4,500 psi",
            "Máscara: cara completa con prueba de ajuste",
            "Alarmas: prealarma y baja presión",
            "Recarga: aire respirable grado D o superior"
          ]
        },
        {
          "eyebrow": "En servicio",
          "h2": "Revisión antes de cada guardia",
          "parrafos": [
            "Antes de la guardia se revisan presión, válvula, acople del regulador, manómetro y alarmas. Después, el usuario se pone máscara, casco y capucha, mueve cuello y brazos, y confirma que el sello se mantiene y que la mica permite ver bien.",
            "Tras una intervención, limpia máscara y correas con el método del fabricante y aparta cualquier unidad con golpe, calor, fuga o alarma anormal. El cilindro se controla por su etiqueta DOT y su fecha de prueba hidrostática."
          ]
        }
      ],
      "especificacion": [
        {
          "campo": "Uso principal",
          "valor": "Combate de incendios y atmósferas IDLH"
        },
        {
          "campo": "Referencia",
          "valor": "NFPA 1970 (antes NFPA 1981 y NFPA 1982)"
        },
        {
          "campo": "Autonomía",
          "valor": "30, 45 o 60 minutos nominales según cilindro"
        },
        {
          "campo": "Carga",
          "valor": "Aire respirable grado D o superior"
        }
      ],
      "normas": [
        {
          "norma": "NFPA 1970",
          "alcance": "Referencia vigente para ERA de combate y PASS; verifica el modelo y la declaración aplicable."
        }
      ],
      "errores": [
        "Tomar la duración nominal como tiempo garantizado",
        "Mezclar conexiones sin confirmar compatibilidad",
        "Usar un ERA industrial como si fuera de combate",
        "No probar máscara, capucha y casco juntos"
      ],
      "faq": [
        {
          "q": "¿Qué autonomía de ERA conviene para combate?",
          "a": "Depende del riesgo, del consumo esperado, del peso que puede cargar el personal y de tu capacidad de recarga. Los 30, 45 y 60 minutos son valores nominales, no tiempos garantizados."
        },
        {
          "q": "¿El PASS reemplaza al compañero de entrada?",
          "a": "No. El PASS es una alarma que avisa si el usuario deja de moverse; la entrada en pareja, la comunicación y el rescate siguen dependiendo del procedimiento y del mando."
        },
        {
          "q": "¿Qué norma declara el Sköld Phantöm?",
          "a": "Sköld lo declara acorde a NFPA edición 1997 y CE EN 137:2006. Si tu pliego exige NFPA 1970, dilo desde el inicio y pide el respaldo correspondiente, porque una declaración anterior no cubre ese requisito."
        },
        {
          "q": "¿Puedo usar un ERA industrial para ataque interior?",
          "a": "No. Un ERA con certificación NIOSH para uso industrial no sustituye a uno de combate estructural. Para fuego interior la referencia es NFPA 1970."
        }
      ],
      "relacionados": [
        "skold-phantom"
      ],
      "chips": [
        "NFPA 1970",
        "PASS",
        "30–60 min"
      ],
      "resumen": [
        "Para ataque interior la referencia es NFPA 1970, que absorbió a las NFPA 1981 y 1982. Surtimos el Sköld Phantöm SCBA-P60FC, con cilindro de fibra de carbono de 60 minutos nominales a 4,500 psi.",
        "La compra se decide por conjunto, no por minutos. Revisamos contigo relevos, capacidad de recarga y compatibilidad con casco, capucha y chaquetón antes de cerrar la configuración."
      ],
      "duos": {
        "ficha": [
          "Una compra de ERA de combate debe especificar cilindro, autonomía, máscara, regulador, arnés, alarmas, manómetro y conexiones. La referencia vigente es NFPA 1970, que absorbió a las normas 1981 y 1982.",
          "También conviene prever la prueba con capucha, casco y chaquetón, porque esas interfaces pueden alterar el sello, la visión o el acceso a la válvula. Pide los criterios de aceptación por escrito antes de recibir la partida."
        ],
        "errores": [
          "Casi todos los errores con ERA vienen de tratarlo como una suma de piezas y no como un sistema. Minutos, conexión y alcance normativo se deciden juntos.",
          "Antes de asignar una unidad, haz la prueba funcional con presión, regulador, alarmas, capucha, casco y guantes de la cuadrilla."
        ],
        "modelos": [
          "Para combate surtimos el Sköld Phantöm SCBA-P60FC, con cilindro de fibra de carbono de 60 minutos a 4,500 psi. Trae máscara panorámica de silicón con visión de 180° y doble sello, y reguladores de primera y segunda etapa.",
          "Su ficha muestra la norma tal como la declara Sköld. Si tu requisito es NFPA 1970, lo revisamos contigo antes de cotizar para que la partida no quede corta."
        ],
        "faq": [
          "Respondemos las dudas habituales sobre autonomía, PASS, normas y diferencias con el ERA industrial.",
          "Si nos compartes cuántos usuarios son, qué ERA usan hoy y cómo recargan, te decimos qué configuración conviene revisar."
        ]
      }
    },
    {
      "slug": "cilindros-de-fibra-de-carbono",
      "seccion": "equipo-de-respiracion-autonoma",
      "nombre": "Cilindros de fibra de carbono para ERA",
      "nombreCard": "Cilindros de fibra de carbono",
      "title": "Cilindros de fibra de carbono para ERA de 4,500 psi",
      "description": "Cilindros de fibra de carbono para ERA: 4,500 psi, duración nominal, etiqueta DOT, válvula, conexión y prueba hidrostática. Cotiza con ficha técnica.",
      "lead": "El cilindro de fibra de carbono guarda el aire del ERA a 4,500 psi. Pesa menos que uno metálico de la misma capacidad, y su válvula y conexión tienen que coincidir con la espaldera que ya usa tu equipo.",
      "imagen": {
        "src": "/images/catalogo/era/tipo-cilindros-de-fibra-de-carbono.avif",
        "alt": "Cilindro de fibra de carbono para equipo de respiración autónoma",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      },
      "bloques": [
        {
          "eyebrow": "Qué es",
          "h2": "Aire de reserva que se monta en el ERA",
          "parrafos": [
            "La fibra de carbono permite almacenar aire a 4,500 psi con menos peso, algo que se agradece en cada relevo. Aun así, el cilindro es solo una parte del ERA: la válvula, la rosca o el acople rápido y la banda de sujeción deciden si entra en tu espaldera.",
            "Por eso no hay un cilindro universal. Cuando un cuerpo renueva todo su equipo cotizamos el conjunto completo; cuando solo necesita reserva, partimos del modelo de ERA que ya tiene."
          ]
        },
        {
          "eyebrow": "Cómo elegir",
          "id": "elegir",
          "h2": "Autonomía, válvula y conexión",
          "parrafos": [
            "Elige la autonomía nominal por tu ruta y tus relevos, sin tomarla como duración garantizada. Después confirma válvula y conexión: roscada en equipos como el MSA G1 Industrial, o la que acepte el ERA de combate de tu corporación.",
            "Si el cilindro es para combate, anota la referencia NFPA 1970 que aplique a tu ERA. Si es para una brigada industrial, conserva la certificación NIOSH solo cuando el modelo la declare."
          ],
          "lista": [
            "Construcción: fibra de carbono",
            "Presión de servicio: 4,500 psi",
            "Autonomía nominal: 30, 45 o 60 minutos",
            "Etiqueta: DOT y fecha de prueba",
            "Válvula y conexión: compatibles con el ERA",
            "Carga: aire respirable grado D o superior"
          ]
        },
        {
          "eyebrow": "En servicio",
          "h2": "Inspección y prueba hidrostática",
          "parrafos": [
            "Antes de cada guardia revisa etiqueta, presión, válvula, roscas y superficie. Un golpe, una abrasión profunda, una fuga o una etiqueta ilegible sacan al cilindro de servicio hasta que se evalúe.",
            "La prueba hidrostática de los cilindros de compuesto se hace cada cinco años, según indica la etiqueta DOT. Carga siempre con aire respirable grado D o superior y no cubras los datos del fabricante con pintura o cinta."
          ]
        }
      ],
      "especificacion": [
        {
          "campo": "Construcción",
          "valor": "Fibra de carbono"
        },
        {
          "campo": "Presión referida",
          "valor": "4,500 psi"
        },
        {
          "campo": "Autonomía",
          "valor": "30, 45 o 60 minutos nominales"
        },
        {
          "campo": "Control",
          "valor": "Etiqueta DOT y prueba hidrostática según etiqueta"
        }
      ],
      "normas": [
        {
          "norma": "DOT",
          "alcance": "La etiqueta del cilindro define datos de servicio y control."
        }
      ],
      "errores": [
        "Confundir los minutos nominales con duración garantizada",
        "Forzar una válvula o conexión distinta a la del ERA",
        "Cargar con aire sin control de calidad",
        "Omitir la fecha de prueba hidrostática"
      ],
      "faq": [
        {
          "q": "¿Cuánto dura un cilindro de ERA de 60 minutos?",
          "a": "Los 60 minutos son nominales. El tiempo real cambia con el esfuerzo, la respiración de cada usuario y la escena, así que el aire se planea con margen de reserva."
        },
        {
          "q": "¿Cada cuándo se hace la prueba hidrostática de un cilindro de fibra de carbono?",
          "a": "Cada cinco años en cilindros de compuesto, según lo que indica su etiqueta DOT. La fecha de la última prueba debe quedar visible."
        },
        {
          "q": "¿Un cilindro de fibra de carbono sirve en cualquier ERA?",
          "a": "No. Válvula, rosca o acople y banda de sujeción dependen del fabricante y del modelo. Antes de cotizar confirmamos la conexión con tu espaldera."
        },
        {
          "q": "¿Qué aire se usa para recargar el cilindro?",
          "a": "Aire respirable grado D o superior, cargado con un compresor y un proceso controlados. Un aire sin control de calidad compromete todo el equipo, aunque el cilindro esté en perfecto estado."
        }
      ],
      "chips": [
        "4,500 psi",
        "Fibra de carbono",
        "Etiqueta DOT"
      ],
      "resumen": [
        "Cotizamos cilindros de 30, 45 o 60 minutos nominales, como reserva o como reemplazo, siempre a partir del ERA en el que se van a montar. La fibra de carbono no garantiza por sí sola que un cilindro sea compatible.",
        "Cada cilindro lleva etiqueta DOT con sus datos de servicio y fecha de prueba hidrostática. Te ayudamos a dejarlos por escrito en la partida para que tu inventario quede identificado."
      ],
      "duos": {
        "ficha": [
          "Al ordenar cilindros de fibra de carbono registra presión de servicio, autonomía nominal, etiqueta DOT, válvula, conexión y montaje en la espaldera. Cada dato confirma compatibilidad y condición de servicio.",
          "No publicamos un cilindro por separado: lo configuramos con el ERA que usa tu equipo. Por eso la tabla muestra campos a definir y no un código de modelo."
        ],
        "errores": [
          "El error más común es comprar cilindros por capacidad y descubrir al recibirlos que la válvula no corresponde a la espaldera.",
          "Estos cuatro puntos evitan ese problema y mantienen el control de servicio de cada cilindro desde el primer día."
        ],
        "faq": [
          "Resolvemos las dudas habituales sobre duración, prueba hidrostática, compatibilidad y recarga.",
          "Si nos mandas el modelo de tu ERA y cuántos cilindros necesitas, te confirmamos la conexión correcta antes de cotizar."
        ]
      }
    },
    {
      "slug": "mascaras-y-reguladores-era",
      "seccion": "equipo-de-respiracion-autonoma",
      "nombre": "Máscaras y reguladores para ERA",
      "nombreCard": "Máscaras y reguladores ERA",
      "title": "Máscara y regulador para equipo de respiración autónoma",
      "description": "Máscaras y reguladores para ERA: sello facial, copa nasal, tallas, prueba de ajuste, regulador de demanda e interfaz con casco y capucha. Cotiza con ficha.",
      "lead": "La máscara y el regulador son la parte del ERA que toca al usuario: la máscara sella la cara y el regulador entrega aire a demanda. Si el sello falla, el resto del equipo deja de proteger.",
      "imagen": {
        "src": "/images/catalogo/era/tipo-mascaras-y-reguladores-era.avif",
        "alt": "Máscara y regulador para equipo de respiración autónoma",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      },
      "bloques": [
        {
          "eyebrow": "Qué es",
          "h2": "La interfaz entre el usuario y el aire",
          "parrafos": [
            "Una máscara de cara completa combina mica, copa nasal, arnés de sujeción y válvula de exhalación. El regulador de primera etapa reduce la presión del cilindro y el de segunda entrega el aire cuando el usuario inhala.",
            "Todo eso tiene que funcionar con casco, capucha y chaquetón puestos, con guantes y en movimiento. Una máscara que sella bien sentada puede abrirse al girar la cabeza si la capucha o el casco la empujan."
          ]
        },
        {
          "eyebrow": "Cómo elegir",
          "id": "elegir",
          "h2": "Talla, conexión y comunicación",
          "parrafos": [
            "La talla se elige con prueba de ajuste, no por estatura ni por costumbre. Si el equipo usa comunicación, pide diafragma de voz o accesorios desde el inicio y confirma que hablar no afloje el sello.",
            "La conexión del regulador tiene que corresponder a la familia del ERA. Mezclar máscaras y reguladores de distintos fabricantes es un riesgo aunque las piezas parezcan encajar."
          ],
          "lista": [
            "Máscara: cara completa con mica de policarbonato",
            "Ajuste: talla, copa nasal y arnés",
            "Regulador: primera y segunda etapa",
            "Entrega: aire a demanda",
            "Conexión: de la misma familia del ERA",
            "Accesorios: diafragma de voz o comunicación"
          ]
        },
        {
          "eyebrow": "En servicio",
          "h2": "Limpieza, inspección y reemplazo de piezas",
          "parrafos": [
            "Antes de cada guardia revisa mica, silicón, copa nasal, válvula de exhalación, correas y conector. Una mica rayada que limita la visión o un sello deformado son motivo para retirar la máscara.",
            "Limpia y desinfecta solo con lo que indica el fabricante; algunos productos dañan el silicón o el policarbonato. Si una máscara se comparte entre turnos, define quién la limpia y cómo queda registrado."
          ]
        }
      ],
      "especificacion": [
        {
          "campo": "Uso",
          "valor": "Interfaz facial del ERA"
        },
        {
          "campo": "Validación",
          "valor": "Prueba de ajuste y compatibilidad física"
        },
        {
          "campo": "Regulación",
          "valor": "Primera y segunda etapa según modelo"
        },
        {
          "campo": "Cuidado",
          "valor": "Limpieza conforme al fabricante"
        }
      ],
      "errores": [
        "Omitir la prueba de ajuste",
        "Mezclar conexiones sin confirmarlas",
        "Usar accesorios que rompen el sello",
        "Desinfectar con productos no indicados por el fabricante"
      ],
      "faq": [
        {
          "q": "¿La máscara de ERA es universal?",
          "a": "No. Talla, conexión y compatibilidad dependen del modelo de ERA, y el sello se confirma con una prueba de ajuste de cada usuario."
        },
        {
          "q": "¿La capucha de bombero va antes o después de la máscara?",
          "a": "Depende del procedimiento de tu corporación. Lo importante es que la capucha no quede entre la cara y el sello de la máscara."
        },
        {
          "q": "¿Qué máscara trae el Sköld Phantöm?",
          "a": "Una máscara panorámica de silicón hipoalergénico con visión de 180°, doble sello y mica de policarbonato antirrayas y antiempaño."
        },
        {
          "q": "¿Se puede usar máscara de ERA con barba o con lentes?",
          "a": "El vello facial y las patillas de los lentes pueden impedir que la máscara selle. Si alguien del equipo necesita corrección visual, conviene revisarlo en la prueba de ajuste antes de cerrar la compra."
        }
      ],
      "chips": [
        "Sello facial",
        "Prueba de ajuste",
        "Regulador de demanda"
      ],
      "resumen": [
        "No hay máscaras universales. Talla, copa nasal, conexión del regulador y compatibilidad con casco y capucha se definen para el modelo de ERA que usa tu equipo.",
        "Configuramos esta interfaz con el Sköld Phantöm para combate o con el MSA G1 Industrial para brigadas, y la probamos con la persona que la va a usar."
      ],
      "duos": {
        "ficha": [
          "La especificación de máscaras y reguladores para ERA incluye talla, sello facial, copa nasal, mica, correas, conexión, regulador de demanda y comunicación cuando aplique.",
          "Cada refacción debe corresponder a la familia del fabricante. No publicamos este tipo como modelo aparte: lo configuramos con el ERA completo que usa tu equipo."
        ],
        "errores": [
          "La mayoría de los problemas con máscaras aparece cuando el ERA ya está en servicio: un sello que se abre al moverse o una conexión que no asegura.",
          "Estos cuatro errores se evitan en la cotización, con prueba de ajuste y piezas de la misma familia."
        ],
        "faq": [
          "Respondemos las dudas habituales sobre talla, capucha, lentes y compatibilidad de máscaras y reguladores.",
          "Si nos compartes el modelo de tu ERA y cuántos usuarios son, te decimos qué tallas y accesorios conviene probar."
        ]
      }
    },
    {
      "slug": "era-de-escape",
      "seccion": "equipo-de-respiracion-autonoma",
      "nombre": "ERA de escape",
      "nombreCard": "ERA de escape",
      "title": "ERA de escape EEBD para evacuación de corta duración",
      "description": "ERA de escape para evacuación: equipos EEBD de corta duración, ruta de salida, entrenamiento y límites frente a un ERA de combate. Cotiza con ficha técnica.",
      "lead": "El ERA de escape, también llamado EEBD, da unos minutos de aire para salir de una atmósfera peligrosa. Es un equipo de evacuación: no sirve para entrar, atacar un incendio ni hacer un rescate planeado.",
      "imagen": {
        "src": "/images/catalogo/era/tipo-era-de-escape.avif",
        "alt": "Equipo de respiración autónoma de escape para evacuación",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      },
      "bloques": [
        {
          "eyebrow": "Qué es",
          "h2": "Aire para salir, no para quedarse",
          "parrafos": [
            "Un EEBD se activa en segundos y permite respirar mientras la persona evacúa. Su valor está en estar donde se necesita: antes de la zona de riesgo, en la ruta de salida y a la vista de quien lo va a usar.",
            "Si tu análisis incluye trabajo o rescate dentro de una atmósfera peligrosa, el equipo es otro: un ERA de combate o de trabajo, con plan de rescate y entrenamiento. Extender el uso del escape a esas tareas es uno de los errores más peligrosos."
          ]
        },
        {
          "eyebrow": "Cómo elegir",
          "id": "elegir",
          "h2": "Ruta, duración y ubicación",
          "parrafos": [
            "Recorre la ruta real: escaleras, puertas, pasillos y punto de reunión, con visibilidad reducida y personas con movilidad limitada. La duración del equipo tiene que alcanzar para la ruta más lenta, no para la más corta.",
            "Define dónde se guardará cada unidad y quién la revisa por turno. Si la ruta cambia por obra o por maquinaria nueva, los equipos se reubican y la práctica de salida se repite."
          ],
          "lista": [
            "Equipo: ERA de escape o EEBD",
            "Uso: evacuación desde atmósfera peligrosa",
            "Duración: 5 a 15 minutos según configuración",
            "Ruta: escaleras, pasillos, puertas y reunión",
            "Ubicación: visible y antes de la zona de riesgo",
            "Control: responsable, empaque y fecha de servicio"
          ]
        },
        {
          "eyebrow": "En servicio",
          "h2": "Inspección y reposición",
          "parrafos": [
            "La revisión es visual y periódica: sello, indicador, empaque y fecha de servicio. Un empaque abierto, un golpe, humedad o calor sacan la unidad de disponibilidad aunque parezca intacta.",
            "Un EEBD activado no regresa al gabinete. Se registra quién lo usó y se envía a servicio o se repone según su diseño, para que el siguiente turno no cuente con un equipo que ya no está."
          ]
        }
      ],
      "especificacion": [
        {
          "campo": "Uso principal",
          "valor": "Evacuación"
        },
        {
          "campo": "Duración referida",
          "valor": "5 a 15 minutos según configuración"
        },
        {
          "campo": "No sustituye",
          "valor": "ERA de combate o de trabajo IDLH"
        },
        {
          "campo": "Control",
          "valor": "Inspección y entrenamiento de salida"
        }
      ],
      "errores": [
        "Usarlo para ingresar a trabajar",
        "Emplear su autonomía en tareas ajenas a evacuar",
        "Guardar el equipo sin acceso inmediato",
        "Omitir el entrenamiento de colocación y salida"
      ],
      "faq": [
        {
          "q": "¿El ERA de escape sirve para atacar un incendio?",
          "a": "No. Está diseñado solo para evacuación de corta duración. Para entrar a combatir se necesita un ERA de combate."
        },
        {
          "q": "¿Cuánto dura un ERA de escape EEBD?",
          "a": "Depende de la configuración; las referencias habituales van de 5 a 15 minutos. Esa duración se compara con la ruta de salida más lenta de tu instalación."
        },
        {
          "q": "¿Dónde se debe colocar un EEBD?",
          "a": "En la ruta de evacuación, antes de la zona de riesgo, visible y accesible para todo el personal que transita el área, incluidos visitantes y contratistas."
        },
        {
          "q": "¿Qué se hace con un EEBD después de usarlo?",
          "a": "Se retira de disponibilidad y se envía a servicio o se repone según su diseño. Nunca se devuelve abierto al gabinete."
        }
      ],
      "chips": [
        "EEBD",
        "Evacuación",
        "Corta duración"
      ],
      "resumen": [
        "Se coloca en la ruta de salida de plantas, almacenes o embarcaciones, visible y al alcance del personal que puede quedar expuesto. Su duración, de 5 a 15 minutos según configuración, se compara con la ruta más lenta.",
        "Todavía no publicamos un modelo de escape. Lo cotizamos a partir de tu ruta, el número de personas y el riesgo, con ubicación y responsable de inspección definidos."
      ],
      "duos": {
        "ficha": [
          "Para solicitar un ERA de escape incluye duración declarada, configuración, ubicación, acceso a la ruta, estado del empaque y procedimiento de activación.",
          "La tabla distingue evacuación de ataque o rescate a propósito: un EEBD no sustituye a un ERA de combate ni a uno de trabajo en atmósfera peligrosa."
        ],
        "errores": [
          "Un equipo de escape falla cuando no está donde se necesita o cuando se usa para algo que no es salir.",
          "Estos cuatro errores son los que conviene revisar en tu plan de evacuación antes de definir cuántas unidades comprar."
        ],
        "faq": [
          "Resolvemos las dudas habituales sobre uso, duración, ubicación y reposición del ERA de escape.",
          "Si nos compartes tu ruta de evacuación y cuántas personas pueden quedar expuestas, te ayudamos a dimensionar las unidades."
        ]
      }
    },
    {
      "slug": "era-industrial",
      "seccion": "equipo-de-respiracion-autonoma",
      "nombre": "ERA industrial para brigadas",
      "nombreCard": "ERA industrial",
      "title": "ERA industrial NIOSH para brigadas y espacios confinados",
      "description": "ERA industrial para brigadas y espacios confinados: certificación NIOSH, cilindro, máscara, arnés y límites frente al combate estructural. Cotiza con ficha.",
      "lead": "El ERA industrial protege a brigadas y trabajadores en procesos y espacios confinados. Lleva certificación NIOSH para uso industrial y no sustituye a un ERA de combate en fuego interior.",
      "imagen": {
        "src": "/images/catalogo/era/tipo-era-industrial.avif",
        "alt": "Equipo de respiración autónoma industrial para brigadas",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      },
      "bloques": [
        {
          "eyebrow": "Qué es",
          "h2": "Respiración autónoma para industria y confinados",
          "parrafos": [
            "En la industria el ERA se usa para entrar a tanques, fosas o áreas con contaminantes o falta de oxígeno, y para que la brigada responda a fugas. El riesgo es distinto al de un incendio estructural, y la certificación también.",
            "Por eso tiene sentido un equipo industrial: se integra al permiso de entrada, al monitoreo de la atmósfera y al plan de rescate. Lo que no puede es entrar a un incendio interior como si fuera de combate."
          ]
        },
        {
          "eyebrow": "Cómo elegir",
          "id": "elegir",
          "h2": "Talla, conexión y opcionales",
          "parrafos": [
            "La máscara G1 del modelo que surtimos es talla M. Antes de cerrar la compra conviene probar sello y movilidad con cada usuario, con casco y protección ocular puestos.",
            "Hombreras y soporte lumbar son opcionales, no vienen incluidos; pídelos si la prueba de uso los justifica. La conexión roscada y la caja rígida quedan escritas en la partida para cotejarlas al recibir."
          ],
          "lista": [
            "Modelo: MSA G1 Industrial 10217600",
            "Estatus: certificación NIOSH 42 CFR Parte 84",
            "Cilindro: fibra de carbono con certificación DOT",
            "Presión y autonomía: 4,500 psi y 60 minutos",
            "Máscara y conexión: G1 talla M, roscada",
            "Opcionales: hombreras y soporte lumbar"
          ]
        },
        {
          "eyebrow": "En servicio",
          "h2": "Disponibilidad, limpieza y servicio",
          "parrafos": [
            "Antes de cada turno revisa conexión, arnés, regulador, manómetro, máscara y presión del cilindro. La cinta fotoluminiscente verde del G1 ayuda a leer la presión con poca luz.",
            "Después de una exposición limpia la máscara según el fabricante y separa cualquier componente con daño o desempeño irregular. Si cambias un accesorio, repite la prueba con casco y línea de vida antes de devolver el equipo a disponibilidad."
          ]
        }
      ],
      "especificacion": [
        {
          "campo": "Certificación",
          "valor": "NIOSH 42 CFR Parte 84"
        },
        {
          "campo": "Uso",
          "valor": "Brigadas, industria y espacios confinados"
        },
        {
          "campo": "Límite",
          "valor": "No para combate estructural"
        },
        {
          "campo": "Carga",
          "valor": "Aire respirable grado D o superior"
        }
      ],
      "normas": [
        {
          "norma": "NIOSH 42 CFR Parte 84",
          "alcance": "Certificación de respirador para uso industrial."
        }
      ],
      "errores": [
        "Asignarlo a combate estructural",
        "Entrar a espacios confinados sin plan de rescate",
        "No validar la talla de la máscara",
        "Cargar el cilindro con aire no controlado"
      ],
      "faq": [
        {
          "q": "¿El ERA industrial sirve en espacios confinados?",
          "a": "Sí, cuando la evaluación, el permiso de entrada y el plan de rescate lo definen. El equipo es una parte del sistema, no lo sustituye."
        },
        {
          "q": "¿El ERA industrial sirve para ataque interior?",
          "a": "No. Para combate estructural se requiere un ERA conforme a NFPA 1970; la certificación NIOSH industrial no cubre ese escenario."
        },
        {
          "q": "¿Qué incluye el MSA G1 Industrial?",
          "a": "Cilindro de fibra de carbono DOT de 60 minutos a 4,500 psi, conexión roscada, arnés de Kevlar de cinco puntos, regulador de cubierta dura, manómetro análogo, máscara G1 talla M y caja rígida. Hombreras y soporte lumbar son opcionales."
        },
        {
          "q": "¿Qué significa la certificación NIOSH 42 CFR Parte 84?",
          "a": "Es la certificación de respiradores para uso industrial en Estados Unidos. Indica el alcance del equipo, y ese alcance no incluye el combate de incendios estructurales."
        }
      ],
      "relacionados": [
        "msa-g1-industrial"
      ],
      "chips": [
        "NIOSH",
        "Industria",
        "Espacios confinados"
      ],
      "resumen": [
        "Surtimos el MSA G1 Industrial 10217600: cilindro de fibra de carbono de 60 minutos nominales a 4,500 psi, conexión roscada, máscara G1 y arnés de Kevlar de cinco puntos.",
        "Lo cotizamos dentro de su alcance, con permiso de entrada, monitoreo y plan de rescate a la vista. Si la brigada hace ataque interior, la partida pasa a un ERA conforme a NFPA 1970."
      ],
      "duos": {
        "ficha": [
          "Para ERA industrial identifica la certificación aplicable, cilindro, máscara, regulador, arnés, manómetro, conexión y talla, junto con la operación y el permiso de entrada.",
          "La fila de límite no es un detalle: deja escrito que el equipo no es para combate estructural, y evita que alguien lo reasigne por costumbre."
        ],
        "errores": [
          "Los errores con ERA industrial casi siempre tienen que ver con su alcance: se usa donde no corresponde o sin el sistema que lo acompaña.",
          "Revisa estos cuatro puntos contra tu procedimiento de entrada antes de pedir cotización."
        ],
        "modelos": [
          "Surtimos el MSA G1 Industrial 10217600, con certificación NIOSH 42 CFR Parte 84, cilindro de fibra de carbono DOT y máscara G1 con diafragma para hablar.",
          "Su ficha detalla componentes y opcionales. Si tu brigada también hace ataque interior, te cotizamos por separado un ERA de combate."
        ],
        "faq": [
          "Resolvemos las dudas habituales sobre espacios confinados, alcance de la certificación y contenido del MSA G1 Industrial.",
          "Si nos compartes el tipo de brigada, el espacio y cuántos usuarios son, te decimos qué configuración conviene."
        ]
      }
    }
  ],
  "modelos": [
    {
      "id": "skold-phantom",
      "seccion": "equipo-de-respiracion-autonoma",
      "tipo": "era-de-combate",
      "marca": "Sköld",
      "fabricante": "Sköld",
      "nombre": "Phantöm 60 min",
      "codigo": "SCBA-P60FC",
      "title": "Sköld Phantöm 60 min ERA | México",
      "description": "ERA Sköld Phantöm de 60 min nominales y 4,500 psi, con máscara panorámica, reguladores y referencia NFPA 1997 declarada para revisar su alcance.",
      "norma": "Acorde a NFPA edición 1997 y CE EN 137:2006",
      "estatusNorma": "declarado",
      "material": "Cilindro de fibra de carbono",
      "peso": "No especificado",
      "caracteristicas": [
        "Cilindro de fibra de carbono de 60 minutos a 4,500 psi",
        "Máscara panorámica de silicón con visión de 180° y doble sello",
        "Malla de Nomex y Kevlar de cinco puntos",
        "Mica de policarbonato antirrayas y antiempaño",
        "Regulador de primera etapa con reductor y alarma audible",
        "Segunda etapa de demanda con conexión rápida",
        "Espaldera con carga a la cadera y manija de arrastre",
        "Manómetro análogo, prealarma y alarma de baja presión",
        "Valija de ABS"
      ],
      "notaCompra": "Antes de ordenar el Phantöm, solicita SCBA-P60FC con cilindro de 4,500 psi, máscara, reguladores, alarmas y la declaración de conformidad correspondiente a la configuración ofrecida; la referencia NFPA de 1997 no sustituye esa verificación.",
      "resumen": [
        "El Sköld Phantöm SCBA-P60FC es un equipo de respiración autónoma para combate, con cilindro de fibra de carbono de 60 minutos nominales a 4,500 psi y máscara panorámica de silicón.",
        "Incluye reguladores de primera y segunda etapa con conexión rápida, manómetro análogo, prealarma y alarma de baja presión, espaldera con carga a la cadera y valija de ABS.",
        "Sköld lo declara acorde a NFPA edición 1997 y CE EN 137:2006. Si tu pliego exige NFPA 1970, lo revisamos contigo antes de cotizar para que la partida no quede corta."
      ],
      "descripcion": [
        "La máscara es de silicón hipoalergénico, con visión de 180°, doble sello y mica de policarbonato antirrayas y antiempaño. Se sujeta con una malla de Nomex y Kevlar de cinco puntos que reparte la presión en la cabeza.",
        "La espaldera es ligera y lleva la carga a la cadera, no a los hombros, lo que se agradece en entradas largas. Sus correas están revestidas de Nomex y Kevlar, y tiene manija de arrastre para mover a un compañero.",
        "Los 60 minutos son nominales: el tiempo real depende del esfuerzo y de la respiración de cada usuario. El aire se planea con reserva, no con el número del cilindro."
      ],
      "faq": [
        {
          "q": "¿Qué norma declara el ERA Sköld Phantöm?",
          "a": "Sköld lo declara acorde a NFPA edición 1997 y CE EN 137:2006. Es una declaración anterior a la NFPA 1970 vigente, y así lo indicamos en su ficha."
        },
        {
          "q": "¿Cuánto aire tiene el Sköld Phantöm?",
          "a": "Un cilindro de fibra de carbono de 60 minutos nominales a 4,500 psi. El tiempo real depende del esfuerzo y de cada usuario."
        },
        {
          "q": "¿Qué máscara trae el Phantöm?",
          "a": "Una máscara panorámica de silicón hipoalergénico con visión de 180°, doble sello y mica antirrayas y antiempaño, sujeta con malla de Nomex y Kevlar."
        },
        {
          "q": "¿Qué alarmas tiene el Sköld Phantöm?",
          "a": "Prealarma y alarma de baja presión, además de la alarma audible del regulador de primera etapa. Su ficha no declara un PASS integrado."
        },
        {
          "q": "¿Cómo se prueba el Phantöm antes de comprarlo?",
          "a": "Con casco, capucha y chaquetón puestos: el usuario se coloca la máscara, mueve cuello y brazos y confirma que el sello se mantiene y que alcanza la válvula."
        }
      ],
      "imagen": {
        "src": "/images/catalogo/era/skold-phantom.avif",
        "alt": "ERA Sköld Phantöm con cilindro de fibra de carbono",
        "width": 1000,
        "height": 1250,
        "origen": "proveedor",
        "credito": "Sköld"
      },
      "imagenesExtra": [
        {
          "src": "/images/catalogo/era/skold-phantom-mascara.avif",
          "alt": "Máscara del ERA Sköld Phantöm",
          "width": 1000,
          "height": 1250,
          "origen": "proveedor",
          "credito": "Sköld"
        }
      ],
      "chips": [
        "60 min nominales",
        "4,500 psi",
        "NFPA 1997 declarada"
      ],
      "duos": {
        "ficha": [
          "El Sköld Phantöm se identifica con el código SCBA-P60FC. La tabla reúne cilindro, presión y norma tal como los publica su ficha.",
          "La norma aparece como declaración del fabricante y con su edición original. Si tu requisito es NFPA 1970, pide el respaldo aplicable antes de ordenar."
        ],
        "caracteristicas": [
          "Estas son las características que publica la ficha del Phantöm: cilindro, máscara, reguladores, espaldera y alarmas.",
          "Todo se cotiza como un solo conjunto. Mezclar piezas con otros equipos cambia la conexión y deja sin validez la prueba de compatibilidad."
        ],
        "faq": [
          "Respondemos lo que más se pregunta del Sköld Phantöm: norma, aire, máscara, alarmas y prueba de uso.",
          "Si nos dices cuántos usuarios son y cómo recargan, te mandamos la cotización con la configuración completa."
        ]
      }
    },
    {
      "id": "msa-g1-industrial",
      "seccion": "equipo-de-respiracion-autonoma",
      "tipo": "era-industrial",
      "marca": "MSA",
      "fabricante": "MSA",
      "nombre": "G1 Industrial",
      "codigo": "10217600",
      "title": "MSA G1 Industrial ERA NIOSH | México",
      "description": "ERA MSA G1 Industrial con NIOSH 42 CFR Parte 84, cilindro DOT de 4,500 psi y 60 min nominales para brigadas y espacios confinados.",
      "norma": "NIOSH 42 CFR Parte 84",
      "estatusNorma": "niosh",
      "material": "Cilindro de fibra de carbono",
      "tallas": "Máscara G1 talla M",
      "caracteristicas": [
        "Cilindro de fibra de carbono DOT de 60 minutos a 4,500 psi",
        "Conexión roscada",
        "Cinta fotoluminiscente verde que indica presión",
        "Arnés de Kevlar de cinco puntos con banda metálica",
        "Regulador de segunda etapa de cubierta dura",
        "Manómetro análogo",
        "Máscara G1 talla M con copa nasal y diafragma para hablar",
        "Hombreras y soporte lumbar opcionales",
        "Caja rígida"
      ],
      "notaCompra": "Antes de ordenar el MSA G1 Industrial, confirma máscara G1 talla M, conexión roscada, cilindro DOT de 4,500 psi y los accesorios opcionales requeridos; la partida debe conservar el alcance industrial NIOSH declarado.",
      "resumen": [
        "El MSA G1 Industrial 10217600 es un equipo de respiración autónoma para brigadas industriales y espacios confinados, con certificación NIOSH 42 CFR Parte 84.",
        "Lleva cilindro de fibra de carbono con certificación DOT, de 60 minutos nominales a 4,500 psi, conexión roscada, arnés de Kevlar de cinco puntos y máscara G1 talla M.",
        "Es un equipo de alcance industrial: no se asigna a combate estructural. Para ataque interior te cotizamos un ERA conforme a NFPA 1970."
      ],
      "descripcion": [
        "El G1 se integra al permiso de entrada, al monitoreo de la atmósfera y al plan de rescate de la planta. Su cinta fotoluminiscente verde indica la presión y facilita la lectura con poca luz.",
        "El arnés de Kevlar de cinco puntos lleva pad, correa al pecho y banda metálica de cilindro. El regulador de segunda etapa tiene cubierta dura y la máscara G1 incluye copa nasal y diafragma para hablar.",
        "Hombreras y soporte lumbar son opcionales, no vienen incluidos. Se piden si la prueba de uso los justifica, y se traslada en su caja rígida."
      ],
      "faq": [
        {
          "q": "¿Para qué se usa el MSA G1 Industrial?",
          "a": "Para brigadas industriales y entrada a espacios confinados, dentro del permiso, el monitoreo y el plan de rescate de la instalación."
        },
        {
          "q": "¿El MSA G1 Industrial sirve para combate estructural?",
          "a": "No. Su certificación NIOSH 42 CFR Parte 84 es de uso industrial. Para fuego interior se requiere un ERA conforme a NFPA 1970."
        },
        {
          "q": "¿Qué talla de máscara trae el MSA G1 Industrial?",
          "a": "La máscara G1 talla M. Conviene confirmar el sello con cada usuario antes de cerrar la compra."
        },
        {
          "q": "¿Qué accesorios son opcionales en el G1 Industrial?",
          "a": "Las hombreras y el soporte lumbar. Se cotizan aparte si la prueba de uso los justifica."
        }
      ],
      "imagen": {
        "src": "/images/catalogo/era/msa-g1-industrial.avif",
        "alt": "ERA MSA G1 Industrial",
        "width": 1000,
        "height": 1250,
        "origen": "proveedor",
        "credito": "MSA"
      },
      "imagenesExtra": [
        {
          "src": "/images/catalogo/era/msa-g1-mascara.avif",
          "alt": "Máscara MSA G1 Industrial",
          "width": 1000,
          "height": 1250,
          "origen": "proveedor",
          "credito": "MSA"
        }
      ],
      "chips": [
        "NIOSH",
        "60 min nominales",
        "Uso industrial"
      ],
      "duos": {
        "ficha": [
          "El MSA G1 Industrial se identifica con el código 10217600. La tabla reúne cilindro, máscara y certificación tal como los publica su ficha.",
          "La certificación NIOSH define su alcance industrial. Pide que quede escrita así en la cotización para que nadie lo reasigne a combate."
        ],
        "caracteristicas": [
          "Estas son las características que publica la ficha del G1 Industrial, con los opcionales marcados como tales.",
          "La conexión roscada y la talla M de máscara son los dos datos que más conviene confirmar antes de ordenar."
        ],
        "faq": [
          "Respondemos lo que más se pregunta del MSA G1 Industrial: uso, alcance, máscara y opcionales.",
          "Si nos compartes el tipo de espacio y cuántos usuarios son, te decimos qué configuración cotizar."
        ]
      }
    }
  ]
};
