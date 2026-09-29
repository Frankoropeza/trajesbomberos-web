// Datos del catálogo · sección «accesorios» (trajesbomberos.com).
// LITERAL PURO: sin funciones, sin mutaciones, sin plantillas. Se edita solo el texto;
// `astro check` valida la estructura contra ../types. Generado por scripts/emit_data.py
// (2026-09-29) a partir del contenido vigente; desde aquí se edita a mano o con Codex.
import type { Modelo, Seccion, Tipo } from '../types';

export const data: { seccion?: Seccion; tipos: Tipo[]; modelos: Modelo[] } = {
  "seccion": {
    "slug": "accesorios",
    "nombre": "Accesorios",
    "hero": {
      "src": "/images/catalogo/accesorios/hero-accesorios.avif",
      "alt": "Accesorios para bombero de iluminación, protección ocular y transporte"
    },
    "leyendaImagenIlustrativa": "Imagen ilustrativa. Marca, modelo y configuración exactos se confirman por escrito en la cotización."
  },
  "tipos": [
    {
      "slug": "lampara-de-casco",
      "seccion": "accesorios",
      "nombre": "Lámpara de casco",
      "nombreCard": "Lámpara de casco",
      "title": "Lámpara de casco para bombero con manos libres",
      "description": "Lámpara de casco para bombero: deja las manos libres y debe apuntar sin estorbar visor, máscara ni retención. Compatibilidad con tu casco al cotizar.",
      "lead": "La lámpara de casco ilumina hacia donde mira el bombero y deja las dos manos libres para la herramienta, la radio o el pasamanos. Surtimos la Streamlight Vantage, para casco con ala.",
      "imagen": {
        "src": "/images/catalogo/accesorios/tipo-lampara-de-casco.avif",
        "alt": "Lámpara de casco para bombero",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      },
      "bloques": [
        {
          "eyebrow": "Qué es",
          "h2": "Luz de manos libres que sigue la mirada",
          "parrafos": [
            "En búsqueda, escaleras y reconocimiento el bombero necesita las dos manos. Una lámpara montada en el casco ilumina hacia donde gira la cabeza, sin ocupar una mano.",
            "Su límite es ese mismo: solo alumbra hacia donde se mira. Para dirigir el haz a otro punto, se complementa con una linterna portátil."
          ]
        },
        {
          "eyebrow": "Cómo elegir",
          "id": "elegir",
          "h2": "Montaje, energía y prueba sobre el casco",
          "parrafos": [
            "La Vantage se sujeta con clip a cascos con ala. Antes de ordenar, móntala sobre tu casco con visor y máscara, y revisa que el clip no se mueva y que el ala no tape el haz.",
            "Define también las baterías de reserva. Usa dos CR123A de 3 V, que conviene tener en la unidad para no depender de una sola carga durante un servicio largo."
          ],
          "lista": [
            "Modelo: Streamlight Vantage",
            "Emisor: LED C4, 115 lúmenes",
            "Haz: 7,000 candelas y 167 m",
            "Energía: dos CR123A de 3 V",
            "Montaje: clip para casco con ala",
            "Norma: clasificación NFPA 1971 declarada"
          ]
        },
        {
          "eyebrow": "En servicio",
          "h2": "Revisión de la lámpara y del clip",
          "parrafos": [
            "Antes de cada guardia, enciende la lámpara con guantes puestos, gira el cabezal y revisa que el clip sujete firme. Cambia las baterías según el registro de uso, no cuando la luz ya está baja.",
            "La Vantage declara protección IPX7, de 1 m durante 30 minutos. Aun así, después de un servicio con agua o humo conviene limpiarla y revisar el lente de vidrio."
          ]
        }
      ],
      "especificacion": [
        {
          "campo": "Uso principal",
          "valor": "Lámpara de casco"
        },
        {
          "campo": "Referencia",
          "valor": "Según modelo"
        },
        {
          "campo": "Validación",
          "valor": "Prueba con equipo y maniobra reales"
        }
      ],
      "errores": [
        "Comprar el soporte sin probarlo en el casco real",
        "No definir baterías de reserva",
        "Perforar el casco para forzar el montaje",
        "Usar la lámpara de casco como única fuente de luz"
      ],
      "faq": [
        {
          "q": "¿Qué lámpara de casco para bombero surtimos?",
          "a": "La Streamlight Vantage: LED C4, 115 lúmenes, 7,000 candelas, 167 m de alcance y seis horas de duración, con dos baterías CR123A de 3 V."
        },
        {
          "q": "¿La lámpara Streamlight Vantage se adapta a cualquier casco?",
          "a": "Su fabricante indica que se adapta a casi cualquier casco con ala. Por eso la probamos sobre tu casco, con visor y máscara, antes de cerrar la compra."
        },
        {
          "q": "¿La lámpara de casco sustituye a la linterna?",
          "a": "No. La lámpara ilumina hacia donde se mira; la linterna permite dirigir la luz a otro punto. Se complementan."
        },
        {
          "q": "¿Qué norma declara la Streamlight Vantage?",
          "a": "Su fabricante declara clasificación NFPA 1971. Así lo indicamos en su ficha, como declaración del fabricante."
        }
      ],
      "chips": [
        "Según modelo",
        "Configuración",
        "Prueba de uso"
      ],
      "resumen": [
        "La Vantage declara LED C4 con 115 lúmenes y 7,000 candelas, alcance de 167 m, seis horas de duración y cabezal que gira 360°. Funciona con dos baterías CR123A de 3 V.",
        "Su fabricante declara clasificación NFPA 1971. La cotizamos probada sobre tu casco, con visor y máscara, para confirmar que el clip retiene y el haz no queda tapado."
      ],
      "duos": {
        "ficha": [
          "La requisición de lámpara de casco indica el uso, la referencia que declare el modelo y la validación con el equipo y la maniobra reales.",
          "Si ya elegiste la Vantage, su ficha incluye emisor, energía, alcance y montaje. Pide que las baterías de reserva queden en la misma partida."
        ],
        "errores": [
          "Una lámpara de casco mal montada se mueve, se cae o alumbra el ala en lugar del camino.",
          "Estos cuatro errores conviene evitarlos con una prueba sobre el casco real."
        ],
        "modelos": [
          "Surtimos la Streamlight Vantage, de aluminio anodizado de grado aeronáutico, lente de vidrio borofloat de alta temperatura, luz trasera azul y cabezal con giro de 360°.",
          "Su ficha muestra la clasificación NFPA 1971 tal como la declara Streamlight, con alcance, duración y protección IPX7."
        ],
        "faq": [
          "Respondemos las dudas habituales sobre el modelo, compatibilidad con cascos, uso con linterna y norma.",
          "Si nos mandas el modelo de tu casco, te confirmamos si la Vantage monta bien antes de cotizar."
        ]
      }
    },
    {
      "slug": "linterna-de-bombero",
      "seccion": "accesorios",
      "nombre": "Linterna de bombero",
      "nombreCard": "Linterna de bombero",
      "title": "Linterna de bombero para uso con guante estructural",
      "description": "Linterna de bombero: se elige por agarre, interruptor, energía y forma de llevarla con guante en la escena. Revisa la ficha técnica y cotiza la partida.",
      "lead": "La linterna de bombero dirige la luz a donde hace falta: una puerta, un escalón o el fondo de un cuarto. Se lleva en funda o clip y se opera con guantes.",
      "imagen": {
        "src": "/images/catalogo/accesorios/tipo-linterna-de-bombero.avif",
        "alt": "Linterna de bombero",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      },
      "bloques": [
        {
          "eyebrow": "Qué es",
          "h2": "Luz que se apunta con la mano",
          "parrafos": [
            "La linterna permite revisar un rincón, iluminar el piso antes de pisarlo o marcar la posición del equipo ante otro compañero. Tiene que resistir golpes, humedad y calor.",
            "Lo importante no es solo cuánta luz da, sino si se puede sacar, encender, apuntar y volver a guardar con guantes gruesos, sin soltar la herramienta."
          ]
        },
        {
          "eyebrow": "Cómo elegir",
          "id": "elegir",
          "h2": "Porte, interruptor y energía",
          "parrafos": [
            "Decide dónde se va a llevar: funda en cinturón, clip en el chaquetón o anillo. El lugar no debe chocar con el ERA, la máscara ni la herramienta al agacharse.",
            "El interruptor tiene que accionarse con guante y no encenderse solo dentro de la bolsa. En cuanto a energía, elige entre batería recargable, con cargador y base, o reemplazable, con reserva del formato exacto."
          ],
          "lista": [
            "Unidad: linterna por pieza",
            "Cuerpo: carcasa, lente e interruptor",
            "Porte: funda, clip o anillo",
            "Energía: recargable o reemplazable",
            "Refacciones: cargador o base según modelo",
            "Documento: declaración del fabricante"
          ]
        },
        {
          "eyebrow": "En servicio",
          "h2": "Carga, limpieza y registro",
          "parrafos": [
            "Antes de cada guardia revisa carga, lente e interruptor. Una linterna que se apaga a media búsqueda es peor que no llevarla, porque el bombero cuenta con ella.",
            "No mezcles baterías nuevas y usadas en la misma unidad. Registra cada linterna para saber cuándo cambiar baterías o reponer el equipo."
          ]
        }
      ],
      "especificacion": [
        {
          "campo": "Uso principal",
          "valor": "Linterna de bombero"
        },
        {
          "campo": "Referencia",
          "valor": "Según modelo"
        },
        {
          "campo": "Validación",
          "valor": "Prueba con equipo y maniobra reales"
        }
      ],
      "errores": [
        "Omitir la funda o el sistema de porte",
        "Elegir un interruptor que no se opera con guantes",
        "Mezclar baterías nuevas y usadas",
        "Comprar sin definir cargador o reserva"
      ],
      "faq": [
        {
          "q": "¿Qué debe tener una linterna de bombero?",
          "a": "Carcasa resistente a golpes y humedad, interruptor que se opere con guantes, sistema de porte seguro y una energía que la estación pueda mantener."
        },
        {
          "q": "¿Linterna recargable o de baterías?",
          "a": "La recargable ahorra baterías, pero necesita cargador y base en la estación o en el vehículo. La de baterías reemplazables exige tener reserva del formato exacto."
        },
        {
          "q": "¿Cómo se prueba una linterna antes de comprarla?",
          "a": "Sacándola, encendiéndola, apuntándola y volviéndola a guardar con el guante y el chaquetón que usará cada persona."
        },
        {
          "q": "¿Tienen modelos de linterna publicados?",
          "a": "Todavía no. La cotizamos según tu operación y te presentamos la ficha del fabricante antes de que decidas."
        }
      ],
      "chips": [
        "Según modelo",
        "Configuración",
        "Prueba de uso"
      ],
      "resumen": [
        "Complementa a la lámpara de casco: una alumbra hacia donde se mira y la otra hacia donde se apunta. En búsqueda, esa diferencia importa.",
        "Todavía no publicamos un modelo. La cotizamos por energía, porte y tipo de interruptor, y la probamos con guantes, radio y equipo puesto."
      ],
      "duos": {
        "ficha": [
          "La requisición de linterna indica el uso, la referencia que declare el modelo y la validación con el equipo y la maniobra reales.",
          "Como aún no publicamos modelo, la tabla no muestra código. Energía, alcance y porte llegan con la ficha del fabricante."
        ],
        "errores": [
          "Casi todos los problemas con linternas tienen que ver con cómo se lleva y cómo se mantiene, no con cuánta luz dan.",
          "Estos cuatro errores conviene evitarlos desde la compra."
        ],
        "faq": [
          "Respondemos las dudas habituales sobre características, energía, prueba y modelos de linterna.",
          "Si nos compartes dónde llevará la linterna tu equipo, te decimos qué sistema de porte conviene."
        ]
      }
    },
    {
      "slug": "goggles",
      "seccion": "accesorios",
      "nombre": "Goggles para bombero",
      "nombreCard": "Goggles para bombero",
      "title": "Goggles para bombero forestal y de rescate",
      "description": "Goggles para bombero: lente, marco y correa que conservan la visión en una exposición definida, forestal o de rescate. Compatibilidad con el casco al cotizar.",
      "lead": "Los goggles protegen los ojos de ceniza, polvo y partículas en incendio forestal y rescate. Surtimos los ESS Striketeam XTO, que se sujetan al casco con Speed-Clip.",
      "imagen": {
        "src": "/images/catalogo/accesorios/tipo-goggles.avif",
        "alt": "Goggles para bombero",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      },
      "bloques": [
        {
          "eyebrow": "Qué es",
          "h2": "Protección ocular para trabajo en exterior",
          "parrafos": [
            "En línea de fuego o en un rescate, la ceniza y las partículas llegan con el viento. Los goggles sellan alrededor de los ojos para que el brigadista siga viendo el terreno y la herramienta.",
            "Un buen goggle tiene que ventilar para no empañarse, sellar sin lastimar y quedarse en su lugar al caminar o agacharse. Si hay que acomodarlo cada minuto, deja de proteger."
          ]
        },
        {
          "eyebrow": "Cómo elegir",
          "id": "elegir",
          "h2": "Ajuste con el casco y repuestos",
          "parrafos": [
            "El Striketeam XTO se sujeta con Speed-Clip a cascos forestales y de rescate, y usa correa envolvente de una pieza con velcro. Admite anteojos graduados debajo.",
            "Pruébalo con el casco puesto, mirando arriba, abajo y a los lados. Define también lentes y cubiertas de repuesto: el lente se raya con el uso y conviene cambiarlo a tiempo."
          ],
          "lista": [
            "Modelo: ESS Striketeam XTO",
            "Código: BLL1006, kit #740-0283",
            "Lente: policarbonato de 2.4 a 2.6 mm",
            "Tratamiento: ClearZone FlowCoat",
            "Montaje: Speed-Clip para casco forestal o de rescate",
            "Contenido: lente transparente y dos cubiertas"
          ]
        },
        {
          "eyebrow": "En servicio",
          "h2": "Limpieza y cambio de lente",
          "parrafos": [
            "Limpia el lente con agua y un paño suave, nunca con la manga llena de ceniza, que lo raya. Revisa el acolchado facial y la correa después de cada jornada.",
            "Cambia el lente cuando las rayas dificulten la visión, y la cubierta desprendible cuando se ensucie. Tener repuestos en la unidad evita que alguien trabaje sin ver bien."
          ]
        }
      ],
      "especificacion": [
        {
          "campo": "Uso principal",
          "valor": "Goggles para bombero"
        },
        {
          "campo": "Referencia",
          "valor": "Según modelo"
        },
        {
          "campo": "Validación",
          "valor": "Prueba con equipo y maniobra reales"
        }
      ],
      "errores": [
        "No definir lentes y cubiertas de repuesto",
        "Ignorar la ventilación al elegir",
        "Usarlos como si fueran máscara de ERA",
        "Comprar sin probarlos con el casco"
      ],
      "faq": [
        {
          "q": "¿Los goggles sustituyen a la máscara de ERA?",
          "a": "No. Los goggles son protección ocular. La máscara de un equipo de respiración autónoma protege las vías respiratorias y tiene otra función."
        },
        {
          "q": "¿Qué goggles para bombero forestal surtimos?",
          "a": "Los ESS Striketeam XTO, con lente de policarbonato intercambiable, tratamiento antiempaño y Speed-Clip para cascos forestales y de rescate."
        },
        {
          "q": "¿Se pueden usar goggles con lentes graduados?",
          "a": "El Striketeam XTO admite anteojos graduados debajo, según su fabricante. Conviene probarlo con los lentes de cada usuario."
        },
        {
          "q": "¿Qué normas declaran los goggles ESS Striketeam XTO?",
          "a": "NFPA 1500-2007, ANSI Z87.1-2010, CE EN 166 B y OSHA, según su fabricante."
        }
      ],
      "chips": [
        "Según modelo",
        "Configuración",
        "Prueba de uso"
      ],
      "resumen": [
        "Tienen lente intercambiable de policarbonato de 2.4 a 2.6 mm con tratamiento ClearZone FlowCoat antiempaño y antirrayas, protección UVA/UVB y ventilación perimetral.",
        "Su fabricante declara NFPA 1500-2007, ANSI Z87.1-2010, CE EN 166 B y OSHA. No sustituyen a la máscara de un ERA: son protección ocular."
      ],
      "duos": {
        "ficha": [
          "La requisición de goggles indica el uso, la referencia que declare el modelo y la validación con el casco y la maniobra reales.",
          "Si ya elegiste el Striketeam XTO, su ficha incluye código, lente, tratamiento y montaje. Pide los repuestos en la misma partida."
        ],
        "errores": [
          "Un goggle que se empaña o que no ajusta con el casco termina colgado del cuello, sin proteger.",
          "Estos cuatro errores conviene evitarlos con una prueba antes de comprar."
        ],
        "modelos": [
          "Surtimos los ESS Striketeam XTO: acolchado facial de celda cerrada, ventilación y filtración perimetral contra humo y partículas, y lente intercambiable con ClearZone FlowCoat.",
          "También forman parte de nuestro kit forestal. Su ficha muestra las normas tal como las declara ESS."
        ],
        "faq": [
          "Respondemos las dudas habituales sobre uso con ERA, modelo, lentes graduados y normas.",
          "Si nos compartes el modelo de casco de tu cuadrilla, te confirmamos el ajuste antes de cotizar."
        ]
      }
    },
    {
      "slug": "camara-termica",
      "seccion": "accesorios",
      "nombre": "Cámara térmica",
      "nombreCard": "Cámara térmica",
      "title": "Cámara térmica para bomberos: búsqueda y ataque",
      "description": "Cámara térmica para bomberos: muestra contrastes de radiación infrarroja y exige entrenamiento para leerlos en la escena. Cotiza con ficha técnica.",
      "lead": "La cámara térmica muestra en pantalla las diferencias de temperatura de lo que se observa. Ayuda a buscar personas en humo, a orientarse y a encontrar fuego oculto después de la extinción.",
      "imagen": {
        "src": "/images/catalogo/accesorios/tipo-camara-termica.avif",
        "alt": "Cámara térmica para bombero",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      },
      "bloques": [
        {
          "eyebrow": "Qué es",
          "h2": "Ver temperatura donde el humo no deja ver",
          "parrafos": [
            "En un cuarto lleno de humo, la cámara distingue una persona del mobiliario por su temperatura. Después de la extinción, muestra si hay calor dentro de un muro o un techo.",
            "Tiene límites que el equipo debe conocer: el vapor, el agua, los metales y los vidrios pueden engañar la lectura. Por eso la cámara se compra con entrenamiento, no sola."
          ]
        },
        {
          "eyebrow": "Cómo elegir",
          "id": "elegir",
          "h2": "Uso, energía y porte",
          "parrafos": [
            "Define para qué se va a usar: búsqueda y rescate, ataque, o revisión posterior a la extinción. Cada uso pide cosas distintas de pantalla, controles y resistencia.",
            "Resuelve también la energía y el porte: baterías intercambiables, cargador en estación o en vehículo, y una correa o funda que no estorbe al ERA ni a la herramienta."
          ],
          "lista": [
            "Unidad: cámara con sensor y lente infrarroja",
            "Pantalla y controles según modelo",
            "Energía: batería, cargador y base",
            "Porte: funda y correa",
            "Ubicación: estación o vehículo",
            "Documento: especificación del fabricante"
          ]
        },
        {
          "eyebrow": "En servicio",
          "h2": "Entrenamiento, carga y cuidado del lente",
          "parrafos": [
            "Antes de asignarla, el equipo practica con objetos de temperatura conocida: escaneo, lectura, cambio de batería y cómo comunicar lo que ve por radio.",
            "El lente infrarrojo no es de vidrio común. Límpialo solo con el método del fabricante; un paño equivocado lo raya y afecta la imagen."
          ]
        }
      ],
      "especificacion": [
        {
          "campo": "Uso principal",
          "valor": "Cámara térmica"
        },
        {
          "campo": "Referencia",
          "valor": "Según modelo"
        },
        {
          "campo": "Validación",
          "valor": "Prueba con equipo y maniobra reales"
        }
      ],
      "errores": [
        "Comprar la cámara sin entrenamiento de lectura",
        "Omitir baterías de reserva y cargador",
        "Tomar la imagen como diagnóstico concluyente",
        "Limpiar el lente como si fuera de cámara fotográfica"
      ],
      "faq": [
        {
          "q": "¿La cámara térmica ve a través de las paredes?",
          "a": "No. Muestra la temperatura de las superficies que observa. Si un muro está caliente por dentro, la cámara ve el calor en su superficie, no lo que hay detrás."
        },
        {
          "q": "¿La cámara térmica confirma que no hay fuego oculto?",
          "a": "No por sí sola. Su lectura se interpreta junto con la inspección, el procedimiento y el contexto del inmueble; agua, vapor o reflejos pueden cambiarla."
        },
        {
          "q": "¿Qué se practica antes de usar una cámara térmica?",
          "a": "Escaneo, lectura de objetos conocidos, cambio de batería y comunicación por radio. El objetivo es reconocer tanto la información útil como sus límites."
        },
        {
          "q": "¿Tienen modelos de cámara térmica publicados?",
          "a": "Todavía no. La cotizamos según el uso de tu equipo y te presentamos la ficha del fabricante antes de que decidas."
        }
      ],
      "chips": [
        "Según modelo",
        "Configuración",
        "Prueba de uso"
      ],
      "resumen": [
        "No ve a través de paredes ni reemplaza la evaluación de la escena: muestra la temperatura de las superficies, y esa lectura se interpreta con entrenamiento.",
        "Todavía no publicamos un modelo. La cotizamos con batería, cargador, funda y capacitación de lectura, según el uso de tu equipo."
      ],
      "duos": {
        "ficha": [
          "La requisición de cámara térmica indica el uso, la referencia que declare el modelo y la validación con el equipo y la maniobra reales.",
          "Como aún no publicamos modelo, la tabla no muestra resolución ni rango. Esos datos llegan con la especificación del fabricante."
        ],
        "errores": [
          "La cámara térmica es una herramienta poderosa que puede llevar a conclusiones equivocadas si se usa sin entrenamiento.",
          "Los cuatro se resuelven en la requisición, antes de pedir precio."
        ],
        "faq": [
          "Respondemos las dudas habituales sobre lo que muestra una cámara térmica, sus límites y el entrenamiento.",
          "Si nos compartes para qué la usaría tu equipo, te decimos qué configuración conviene cotizar."
        ]
      }
    },
    {
      "slug": "dispositivo-pass",
      "seccion": "accesorios",
      "nombre": "Dispositivo PASS",
      "nombreCard": "Dispositivo PASS",
      "title": "Dispositivo PASS para bombero: alarma personal",
      "description": "Dispositivo PASS para bombero: alerta personal de inmovilidad dentro de una respuesta institucional que debe estar ensayada. Cotiza con ficha técnica.",
      "lead": "El dispositivo PASS emite una alarma cuando el bombero deja de moverse o cuando la activa a mano. Avisa al resto del equipo de una posible emergencia personal dentro de la escena.",
      "imagen": {
        "src": "/images/catalogo/accesorios/tipo-dispositivo-pass.avif",
        "alt": "Dispositivo PASS para bombero",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      },
      "bloques": [
        {
          "eyebrow": "Qué es",
          "h2": "Una alarma para el bombero en problemas",
          "parrafos": [
            "Si un bombero queda inmóvil por un tiempo, el PASS entra en prealarma y después en alarma plena. También se puede activar con un botón cuando alguien sabe que está en problemas.",
            "La alarma es solo el aviso. Lo que sigue depende del procedimiento de bombero caído de la corporación: reconocer la señal, comunicar, ubicar y rescatar."
          ]
        },
        {
          "eyebrow": "Cómo elegir",
          "id": "elegir",
          "h2": "Integrado o independiente",
          "parrafos": [
            "El PASS integrado se activa con el ERA y comparte su energía; conviene cuando todo el equipo usa el mismo modelo. El independiente se fija al cuerpo o al arnés y funciona sin depender del ERA.",
            "Con el equipo completo puesto, revisa que el botón manual quede a la mano y que nada tape la salida de la alarma: radio, tirantes o herramienta."
          ],
          "lista": [
            "Modalidad: integrado o independiente",
            "Interfaz: ERA, soporte y ubicación",
            "Energía: batería o cargador del modelo",
            "Cantidad: por usuario o por ERA",
            "Referencia: NFPA 1970, antes NFPA 1982",
            "Recepción: prueba, capacitación y documentos"
          ]
        },
        {
          "eyebrow": "En servicio",
          "h2": "Prueba diaria y ensayo de respuesta",
          "parrafos": [
            "Al inicio de cada guardia se prueba el PASS: activación manual, prealarma por inmovilidad y reinicio, conforme al manual del fabricante. Una alarma débil o que no activa se aparta para revisión.",
            "Además, la corporación ensaya qué hace cuando suena. Un PASS que nadie sabe atender en medio del ruido de una escena no cumple su propósito."
          ]
        }
      ],
      "especificacion": [
        {
          "campo": "Uso principal",
          "valor": "Dispositivo PASS"
        },
        {
          "campo": "Referencia",
          "valor": "NFPA 1970 (antes NFPA 1982)"
        },
        {
          "campo": "Validación",
          "valor": "Prueba con equipo y maniobra reales"
        }
      ],
      "normas": [
        {
          "norma": "NFPA 1970 (antes NFPA 1982)",
          "alcance": "Confirma la declaración del modelo."
        }
      ],
      "errores": [
        "Comprar sin una respuesta ensayada",
        "No probar la alarma al inicio de la guardia",
        "Atribuir una certificación que el modelo no declara",
        "Dejar el botón manual cubierto por el arnés o la radio"
      ],
      "faq": [
        {
          "q": "¿Qué pasa cuando suena el PASS?",
          "a": "La corporación activa su procedimiento: reconocer la señal, comunicar, ubicar, verificar y escalar la respuesta. El dispositivo avisa, pero no coordina el rescate."
        },
        {
          "q": "¿El PASS se activa solo por inmovilidad?",
          "a": "Depende del modelo. Además de la función por inmovilidad, los equipos tienen activación manual. La forma de operar y reiniciar se confirma en el manual del fabricante."
        },
        {
          "q": "¿Qué norma aplica al dispositivo PASS?",
          "a": "La referencia vigente es NFPA 1970, que absorbió a la NFPA 1982. Pide que la cotización indique qué declara el modelo ofertado."
        },
        {
          "q": "¿Tienen modelos de PASS publicados?",
          "a": "Todavía no. Lo cotizamos según el ERA de tu corporación y te presentamos la ficha del fabricante antes de que decidas."
        }
      ],
      "chips": [
        "NFPA 1970 (antes NFPA 1982)",
        "Configuración",
        "Prueba de uso"
      ],
      "resumen": [
        "Puede venir integrado al ERA o ser independiente. La referencia es NFPA 1970, que absorbió a la NFPA 1982, y cada modelo declara su cumplimiento.",
        "Todavía no publicamos un modelo. Lo cotizamos según el ERA que usa tu corporación, con batería, capacitación y la declaración del fabricante."
      ],
      "duos": {
        "ficha": [
          "La requisición de dispositivo PASS indica el uso, la referencia NFPA 1970, antes NFPA 1982, y la validación con el equipo y la maniobra reales.",
          "Sin modelo publicado, la tabla describe el tipo y no un código de producto. La declaración normativa llega con la ficha del fabricante del modelo propuesto."
        ],
        "errores": [
          "Un PASS mal montado o sin respuesta ensayada da una falsa sensación de seguridad.",
          "Estos cuatro errores conviene revisarlos antes de comprar y en cada guardia."
        ],
        "faq": [
          "Respondemos las dudas habituales sobre funcionamiento, activación, norma y modelos del dispositivo PASS.",
          "Si nos compartes el modelo de ERA que usa tu corporación, te decimos si conviene un PASS integrado o independiente."
        ]
      }
    },
    {
      "slug": "maleta-porta-equipo",
      "seccion": "accesorios",
      "nombre": "Maleta porta-equipo",
      "nombreCard": "Maleta porta-equipo",
      "title": "Maleta porta-equipo para bombero y traje completo",
      "description": "Maleta porta-equipo para bombero: organiza el traslado del conjunto y se valida cargando casco, botas, prendas y accesorios reales. Cotiza con ficha técnica.",
      "lead": "La maleta porta-equipo guarda y traslada el conjunto de un bombero: casco, botas, chaquetón, pantalonera y accesorios. Surtimos la Romak Fire BPS1005, de poliéster repelente al agua.",
      "imagen": {
        "src": "/images/catalogo/accesorios/tipo-maleta-porta-equipo.avif",
        "alt": "Maleta porta-equipo para bombero",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      },
      "bloques": [
        {
          "eyebrow": "Qué es",
          "h2": "Transporte ordenado del equipo personal",
          "parrafos": [
            "Cuando el equipo viaja entre almacén, estación y vehículo, una maleta lo mantiene junto, identificado y protegido del polvo. También ayuda a que cada bombero encuentre su conjunto completo.",
            "No descontamina ni separa equipo sucio del limpio por sí misma. Las piezas contaminadas se manejan según el procedimiento de la corporación."
          ]
        },
        {
          "eyebrow": "Cómo elegir",
          "id": "elegir",
          "h2": "Medidas y carga real",
          "parrafos": [
            "Las medidas externas no dicen si el equipo cabe. Carga una talla representativa, con casco y botas, y cierra la maleta: el zipper tiene que correr sin presión y las costuras no deben tensarse.",
            "Revisa también cómo se va a guardar en la unidad o en el almacén. Una maleta que no cabe en su lugar termina fuera de él."
          ],
          "lista": [
            "Modelo: Romak Fire BPS1005",
            "Material: poliéster repelente al agua",
            "Medidas: 25 × 13 × 14 pulgadas",
            "Asas: polipropileno de 1 ½ pulgadas",
            "Bolsas: dos con zipper",
            "Carga: casco, botas, prendas y accesorios"
          ]
        },
        {
          "eyebrow": "En servicio",
          "h2": "Revisión de asas, cierres y costuras",
          "parrafos": [
            "Revisa asas, zipper y costuras de forma periódica. Una maleta con el cierre roto o un asa descosida no se remienda con amarras: se reemplaza.",
            "Limpia el interior cuando se vacía y no guardes equipo húmedo dentro por mucho tiempo, porque la humedad daña las prendas."
          ]
        }
      ],
      "especificacion": [
        {
          "campo": "Uso principal",
          "valor": "Maleta porta-equipo"
        },
        {
          "campo": "Referencia",
          "valor": "No aplica"
        },
        {
          "campo": "Validación",
          "valor": "Prueba con equipo y maniobra reales"
        }
      ],
      "errores": [
        "Comprar solo por las medidas externas",
        "Mezclar equipo contaminado con equipo limpio",
        "Ignorar costuras y cierres al recibir",
        "No verificar el espacio de guardado en la unidad"
      ],
      "faq": [
        {
          "q": "¿Qué medidas tiene la maleta porta-equipo Romak Fire BPS1005?",
          "a": "25 × 13 × 14 pulgadas, con asas de polipropileno de 1 ½ pulgadas y dos bolsas con zipper, según su fabricante."
        },
        {
          "q": "¿La maleta porta-equipo descontamina?",
          "a": "No. Transporta y organiza. Las piezas contaminadas se manejan según el procedimiento de la corporación y no se mezclan con equipo limpio."
        },
        {
          "q": "¿Cabe un conjunto completo de bombero en la BPS1005?",
          "a": "Está pensada para casco, botas, prendas y accesorios. Como las tallas cambian el volumen, la probamos con el conjunto real de tu brigada antes de cerrar la compra."
        },
        {
          "q": "¿Cuándo se reemplaza una maleta porta-equipo?",
          "a": "Cuando asas, costuras, base o cierres ya no soportan la carga, o cuando su estado impide guardar bien el equipo."
        }
      ],
      "chips": [
        "No aplica",
        "Configuración",
        "Prueba de uso"
      ],
      "resumen": [
        "La BPS1005 mide 25 × 13 × 14 pulgadas, tiene asas de polipropileno de 1 ½ pulgadas y dos bolsas con zipper, según su fabricante.",
        "Es una maleta de transporte, no un equipo de protección, así que no le aplica una norma. La cotizamos probando que el conjunto real de tu brigada quepa sin forzarla."
      ],
      "duos": {
        "ficha": [
          "La requisición de maleta porta-equipo indica el uso, que no aplica una norma de protección y la validación con el equipo real de la brigada.",
          "La BPS1005 es el modelo publicado. Su ficha incluye material, medidas, asas y bolsas."
        ],
        "errores": [
          "Una maleta mal elegida se nota en la primera carga: no cierra, se descose o no cabe en su lugar.",
          "Estos cuatro errores conviene evitarlos con una prueba de carga."
        ],
        "modelos": [
          "Surtimos la Romak Fire BPS1005: poliéster de alta resistencia repelente al agua, 25 × 13 × 14 pulgadas, asas de polipropileno y dos bolsas con zipper.",
          "Su ficha la presenta sin norma aplicable, porque es equipo de transporte y no de protección."
        ],
        "faq": [
          "Respondemos las dudas habituales sobre medidas, capacidad, descontaminación y reemplazo de la maleta.",
          "Si nos dices cuántos conjuntos vas a guardar, te cotizamos las maletas con la prueba de carga incluida."
        ]
      }
    }
  ],
  "modelos": [
    {
      "id": "streamlight-vantage",
      "seccion": "accesorios",
      "tipo": "lampara-de-casco",
      "marca": "Streamlight",
      "fabricante": "Streamlight",
      "nombre": "Vantage",
      "description": "Lámpara de casco Streamlight Vantage: LED C4, giro de 360°, clip para el ala del casco y dos CR123A incluidas. Compatibilidad con tu casco al cotizar.",
      "codigoNota": "Código por confirmar al cotizar",
      "norma": "Clasificación NFPA 1971",
      "estatusNorma": "declarado",
      "caracteristicas": [
        "LED C4 y haz de 7,000 candelas",
        "115 lúmenes y alcance de 167 m",
        "Duración de 6 h y luz trasera azul",
        "Aluminio anodizado de grado aeronáutico",
        "Lente de vidrio borofloat de alta temperatura",
        "IPX7: 1 m durante 30 min",
        "Giro de 360° y dos baterías CR123A de 3 V incluidas",
        "Se adapta a casi cualquier casco con ala"
      ],
      "resumen": [
        "La Streamlight Vantage es una lámpara de casco con LED C4, 115 lúmenes, giro de 360° y dos CR123A de 3 V. La surtimos para casco con ala cuando tu visor y máscara conservan el haz visible durante búsqueda, escalera o reconocimiento.",
        "Cotizamos Vantage por pieza con soporte, dos CR123A iniciales y reserva del mismo formato; pedimos tu casco, visor y máscara para validar el montaje. Mándanos WhatsApp con esos datos y revisamos los 167 m, seis horas e IPX7 declarados antes de ordenar."
      ],
      "descripcion": [
        "Elige Streamlight Vantage si tu casco con ala requiere luz de manos libres y el haz debe seguir la mirada; para una linterna que apunte fuera de ella cotizamos otra configuración. En la orden escribimos Vantage, LED C4, 115 lúmenes, 7,000 candelas, giro de 360° y dos CR123A de 3 V, para que llegue la lámpara que tu brigada probó y no una pieza parecida.",
        "La Vantage combina aluminio anodizado de grado aeronáutico, lente de vidrio borofloat de alta temperatura, luz trasera azul y cabezal de giro de 360°. En la prueba con guantes montamos soporte, visor y máscara sobre tu casco con ala, encendemos la luz y cambiamos la orientación; si el lente golpea el borde o el cabezal pierde posición, pedimos otra interfaz antes de recibir el lote.",
        "La configuramos con dos baterías de litio CR123A de 3 V y soporte para casco con ala. Pídela junto con visor y máscara si buscas conservar ambas manos libres; si el clip no retiene o el haz queda tapado, combinamos la maniobra con una linterna portátil en lugar de perforar el casco o fijar la Vantage con cinta. Separamos lámpara, soporte, energía inicial y reserva en tu cotización.",
        "Para búsqueda, escalera o reconocimiento probamos los 167 m, seis horas y 7,000 candelas declarados con casco, visor, máscara y guantes. Antes de aceptar el lote, verificamos el interruptor, el giro de 360°, la tapa y la luz trasera azul; si hay parpadeo o el clip se mueve al subir una escalera, apartamos la unidad y registramos el soporte que falló.",
        "Streamlight declara clasificación NFPA 1971 e IPX7 de 1 m durante 30 min; la cotizamos como declaración del modelo, no como certificación. Antes de guardia revisamos lente borofloat, aro, aluminio, contactos y CR123A; después de intervención retiramos la Vantage con corrosión, lente quebrado, humedad o soporte flojo y pedimos evaluación del fabricante antes de devolverla al casco."
      ],
      "faq": [
        {
          "q": "¿Qué alcance declara?",
          "a": "Streamlight declara 167 m y 7,000 candelas para Vantage. Esa cifra se complementa con la prueba de orientación en el casco, visor y máscara que usa la corporación."
        },
        {
          "q": "¿Qué baterías incluye?",
          "a": "Dos baterías de litio CR123A de 3 V. La orden debe distinguir lámpara, soporte y baterías para mantener reserva del formato exacto."
        },
        {
          "q": "¿Qué significa el giro de 360° en Vantage?",
          "a": "Permite orientar el cabezal a distintas posiciones sobre el casco. La utilidad real se confirma con visor, máscara y casco con ala, pues una posición disponible puede no resultar útil si rebota en el visor o queda obstruida."
        },
        {
          "q": "¿La declaración IPX7 permite sumergirla durante cualquier limpieza?",
          "a": "No. IPX7 es una especificación que Streamlight publica para este modelo; la limpieza, inspección y respuesta después de exposición se realizan conforme a su manual, no mediante inmersiones añadidas por el usuario."
        },
        {
          "q": "¿Qué se registra al aceptar una Vantage?",
          "a": "Marca, modelo, casco con ala probado, soporte, orientación del cabezal, baterías CR123A y resultado de la prueba con visor, máscara y guantes. Ese registro permite repetir la configuración al reponer una unidad."
        }
      ],
      "imagen": {
        "src": "/images/catalogo/accesorios/tipo-lampara-de-casco.avif",
        "alt": "Lámpara Streamlight Vantage para casco",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      }
    },
    {
      "id": "ess-striketeam-xto",
      "seccion": "accesorios",
      "tipo": "goggles",
      "marca": "ESS",
      "fabricante": "ESS",
      "nombre": "Striketeam XTO",
      "description": "Goggles ESS Striketeam XTO para bombero forestal: Speed-Clip, ventilación perimetral, lente intercambiable y normas declaradas por el fabricante. Cotízalos.",
      "codigo": "BLL1006 (kit #740-0283)",
      "norma": "NFPA 1500-2007 · ANSI Z87.1-2010 · CE EN 166 B · OSHA",
      "estatusNorma": "declarado",
      "caracteristicas": [
        "Goggle forestal con acolchado facial de celda cerrada",
        "Correa envolvente de una pieza con velcro",
        "Speed-Clip para cascos forestales y de rescate",
        "Ventilación y filtración perimetral contra humo y partículas",
        "Lentes intercambiables de policarbonato de 2.4–2.6 mm",
        "ClearZone FlowCoat antiempaño y antirrayas",
        "Protección UVA/UVB y admite anteojos graduados",
        "Kit con lente transparente y dos cubiertas desprendibles"
      ],
      "resumen": [
        "Los ESS Striketeam XTO son goggles forestales con Speed-Clip, ventilación perimetral y lente intercambiable de policarbonato de 2.4–2.6 mm. Los surtimos para casco forestal o de rescate cuando tu brigada conserva retención, protección ocular y campo visual con la maniobra real.",
        "Cotizamos BLL1006, kit #740-0283, lente transparente, dos cubiertas y repuestos compatibles. Mándanos WhatsApp con casco, graduación y uso previsto; probamos Speed-Clip, ClearZone FlowCoat y la correa antes de pedir el modelo exacto publicado, sin confundirlo con una máscara de ERA."
      ],
      "descripcion": [
        "Elige ESS Striketeam XTO para casco forestal o de rescate si necesitas goggle con Speed-Clip; para atmósfera que exige ERA cotizamos la máscara respiratoria correspondiente. En la orden escribimos BLL1006, kit #740-0283, lente transparente y dos cubiertas desprendibles, para que tu brigada reciba lente, clip y contenido identificados, no solo goggles sin interfaz definida.",
        "El modelo lleva acolchado facial de celda cerrada, correa envolvente de una pieza con velcro, ventilación y filtración perimetral, además de lente de policarbonato de 2.4–2.6 mm con ClearZone FlowCoat. Durante la prueba montamos el Speed-Clip en tu casco, ajustamos correa y caminamos, miramos arriba y abajo; si el marco se desplaza, hay presión con graduación o aparece empañamiento, pedimos otra configuración.",
        "Surtimos Striketeam XTO con Speed-Clip para casco forestal o de rescate, lente intercambiable, correa y cubiertas compatibles. Pídelo con anteojos graduados si los usa tu personal y prueba campo visual, visor y herramienta; si la correa o el clip estorban otro accesorio, dejamos fuera esa combinación en vez de asumir compatibilidad universal. La protección UVA/UVB queda como característica declarada de ESS.",
        "Para trabajo forestal y rescate abrimos el kit BLL1006 #740-0283 antes de aceptar un lote y contamos goggle, lente transparente y dos cubiertas desprendibles. Probamos retención al agacharse, ventilación al caminar y visibilidad con casco; si hay lente rayado, espuma degradada, velcro fatigado o Speed-Clip sin retención, apartamos el conjunto y pedimos el repuesto compatible, no una mica de grosor parecido.",
        "ESS declara NFPA 1500-2007, ANSI Z87.1-2010, CE EN 166 B y OSHA; las registramos como referencias declaradas, nunca como certificación de casco o ERA. Antes de guardia revisamos lente, marco, espuma, ventilaciones, velcro y clip; después de intervención retiramos Striketeam XTO con fisura, opacidad, deformación o pérdida de tensión y lo guardamos lejos de arena y herrajes."
      ],
      "faq": [
        {
          "q": "¿Cuál es el código?",
          "a": "BLL1006; el kit se identifica como #740-0283. Confirma que la propuesta detalle goggle, lente transparente y dos cubiertas desprendibles."
        },
        {
          "q": "¿Acepta lentes graduados?",
          "a": "ESS declara que admite anteojos graduados. La persona usuaria debe confirmar la interfaz con su graduación, casco y campo visual de trabajo."
        },
        {
          "q": "¿Para qué sirve el Speed-Clip?",
          "a": "ESS lo declara para cascos forestales y de rescate. Su función se acepta instalándolo en el casco que recibirá el kit y comprobando que retenga el goggle sin mover marco, visera ni suspensión durante los movimientos de trabajo."
        },
        {
          "q": "¿Qué incluyen las cubiertas desprendibles?",
          "a": "El kit declarado incluye dos cubiertas además del lente transparente. En la recepción se coteja el contenido abierto y se identifica cómo se almacenarán para que no se rayen ni se confundan con lentes de otro modelo."
        },
        {
          "q": "¿Las referencias del modelo aplican a todo el conjunto?",
          "a": "No se extienden automáticamente a casco, ERA o accesorios. Se conservan como referencias declaradas de Striketeam XTO y se solicitan en la documentación que acompañe exactamente el modelo y kit cotizados."
        }
      ],
      "imagen": {
        "src": "/images/catalogo/accesorios/tipo-goggles.avif",
        "alt": "Goggles ESS Striketeam XTO",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      }
    },
    {
      "id": "romak-bps1005",
      "seccion": "accesorios",
      "tipo": "maleta-porta-equipo",
      "marca": "Romak Fire",
      "fabricante": "Romak Fire",
      "nombre": "Maleta porta-equipo",
      "description": "Maleta porta-equipo Romak Fire BPS1005 en poliéster repelente al agua para trasladar el conjunto del bombero: casco, botas, prendas y accesorios.",
      "codigo": "BPS1005",
      "material": "Poliéster de alta resistencia repelente al agua",
      "estatusNorma": "no-aplica",
      "caracteristicas": [
        "Medidas de 25 × 13 × 14 pulgadas",
        "Cabe kit completo: chaquetón, pantalón, tirantes, casco, botas, guantes y monja",
        "Asas de polipropileno de 1 ½ pulgadas",
        "Dos bolsas con zipper"
      ],
      "resumen": [
        "La Romak Fire BPS1005 es una maleta de poliéster de alta resistencia repelente al agua, de 25 × 13 × 14 pulgadas, para casco, botas, prendas y accesorios. La surtimos cuando tu conjunto real cierra y se traslada sin forzar costuras ni zipper.",
        "Cotizamos BPS1005 por pieza con asas de polipropileno de 1 ½ pulgadas, dos bolsas con zipper y prueba de carga. Mándanos WhatsApp con casco, botas, prendas y vehículo de tu brigada; revisamos volumen, estiba y cierre antes de solicitar la cantidad requerida."
      ],
      "descripcion": [
        "Elige Romak Fire BPS1005 si tu conjunto de casco, botas, chaquetón, pantalón, tirantes, guantes y monja cabe en 25 × 13 × 14 pulgadas; si tus tallas cambian el volumen, cotizamos otro transporte. En la orden escribimos BPS1005, poliéster de alta resistencia repelente al agua y cantidad por persona, reserva o unidad móvil, para que tu compra describa la pieza completa.",
        "La BPS1005 se construye en poliéster repelente al agua con asas de polipropileno de 1 ½ pulgadas y dos bolsas con zipper. Durante la prueba de carga colocamos tu casco y botas en las esquinas, cerramos sin forzar dientes o costuras y levantamos la maleta; si el cierre se atora o las asas pierden unión, pedimos otra configuración antes de asignarla al traslado.",
        "Surtimos Romak Fire BPS1005 para chaquetón, pantalón, tirantes, casco, botas, guantes y monja, junto con la familia de traje que use tu brigada. Pídela con una carga muestra y define qué artículo va en las dos bolsas con zipper; si hay piezas húmedas o contaminadas, seguimos tu procedimiento fuera de la maleta y no mezclamos equipo listo solo porque entra en el mismo compartimiento.",
        "En almacén, vehículo o punto de entrega probamos Romak Fire BPS1005 de 25 × 13 × 14 pulgadas con una talla representativa: cargamos el conjunto, cerramos el zipper, levantamos por las asas de polipropileno de 1 ½ pulgadas y revisamos estiba. Antes de aceptar el lote, cotejamos dos bolsas, tiradores, dientes, costuras y base; si casco o botas presionan el cierre, apartamos esa opción y cotizamos el volumen que corresponda.",
        "Romak Fire no declara norma para BPS1005; la anotamos como sin norma declarada y nunca trasladamos la del traje o casco. Antes de guardia revisamos poliéster, base, asas, costuras y zipper; después de salida vaciamos, clasificamos y secamos la maleta, y la retiramos con costura abierta, base perforada, asa floja o cierre que separa dientes bajo carga."
      ],
      "faq": [
        {
          "q": "¿Qué medidas declara?",
          "a": "25 × 13 × 14 pulgadas. Carga físicamente el kit institucional antes de ordenar volumen, porque casco, botas y accesorios cambian el espacio disponible."
        },
        {
          "q": "¿Qué se revisa al recibir?",
          "a": "Poliéster, costuras, asas, cierres, dos bolsas y capacidad con el conjunto muestra. La prueba incluye levantar y trasladar la maleta cargada."
        },
        {
          "q": "¿Las medidas aseguran que cabe cualquier conjunto?",
          "a": "No. Son medidas declaradas de la BPS1005; casco, botas, tallas y accesorios cambian el volumen útil. La aceptación debe cargar el conjunto real, cerrar sin forzar y comprobar la estiba en el vehículo o almacén."
        },
        {
          "q": "¿Para qué sirven las dos bolsas con zipper?",
          "a": "Para organizar artículos que la corporación defina, no para declarar descontaminación. En recepción se revisa que ambas bolsas, sus tiradores y sus cierres funcionen sin presión indebida cuando la maleta lleva la carga prevista."
        },
        {
          "q": "¿Qué condición obliga a retirar la BPS1005?",
          "a": "Costura abierta, asa sin unión firme, base perforada o zipper que se atora o separa dientes bajo carga. No se mantiene en uso con amarras que cambian la capacidad de traslado del modelo."
        }
      ],
      "imagen": {
        "src": "/images/catalogo/accesorios/tipo-maleta-porta-equipo.avif",
        "alt": "Maleta Romak Fire BPS1005",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      }
    }
  ]
};
