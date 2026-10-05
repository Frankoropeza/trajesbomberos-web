// Datos del catálogo · sección «botas» (trajesbomberos.com).
// LITERAL PURO: sin funciones, sin mutaciones, sin plantillas. Se edita solo el texto;
// `astro check` valida la estructura contra ../types. Generado por scripts/emit_data.py
// (2026-09-29) a partir del contenido vigente; desde aquí se edita a mano o con Codex.
import type { Modelo, Seccion, Tipo } from '../types';

export const data: { seccion?: Seccion; tipos: Tipo[]; modelos: Modelo[] } = {
  "seccion": {
    "slug": "botas",
    "nombre": "Botas",
    "hero": {
      "src": "/images/catalogo/botas/hero-botas.avif",
      "alt": "Botas estructurales y forestales para bombero"
    },
    "leyendaImagenIlustrativa": "Imagen ilustrativa del tipo de bota. Marca, modelo, talla y configuración exactos se confirman por escrito en la cotización."
  },
  "tipos": [
    {
      "slug": "bota-de-hule-estructural",
      "seccion": "botas",
      "nombre": "Bota de hule estructural",
      "nombreCard": "Bota de hule estructural",
      "title": "Bota de hule estructural para bombero con puntera",
      "description": "Bota de hule estructural para bombero: caucho vulcanizado, puntera, entresuela antiperforación, forro aislante y revisión de talla. Cotiza con ficha técnica.",
      "lead": "La bota de hule estructural es la bota clásica de bombero: caucho vulcanizado de una pieza, puntera y entresuela de acero, y una caña alta que recibe la pantalonera sin dejar pasar agua.",
      "imagen": {
        "src": "/images/catalogo/botas/tipo-bota-de-hule-estructural.avif",
        "alt": "Bota de hule para combate estructural",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      },
      "bloques": [
        {
          "eyebrow": "Qué es",
          "h2": "Bota de caucho para agua, escombro y calor",
          "parrafos": [
            "El caucho vulcanizado forma una barrera continua contra agua, lodo y químicos de la escena, y se limpia con facilidad después de cada servicio. La puntera y la entresuela de acero protegen contra golpes y contra clavos o lámina en el piso.",
            "Su punto débil es el peso y la sujeción del tobillo: los modelos que surtimos publican entre 3,150 y 3,520 g. Por eso importa que la talla sea exacta y que la caña quede bien cubierta por la pantalonera."
          ]
        },
        {
          "eyebrow": "Cómo elegir",
          "id": "elegir",
          "h2": "Altura, forro y talla",
          "parrafos": [
            "La Workman Fire mide 33 cm de altura y se ofrece de la talla 26 a la 31 mexicana; la Filtrex mide 13 pulgadas y va de 25 a 31 cm. La Sköld Workman agrega forro de lana ignífuga y es la más ligera de las tres, con 3,150 g.",
            "Pide la talla por usuario, no por promedio del lote. La prueba se hace con la pantalonera puesta, subiendo una escalera y arrodillándose, para confirmar que la caña no se abre y que el pie no se desliza dentro de la bota."
          ],
          "lista": [
            "Romak Fire Workman Fire: BOT1004, 33 cm",
            "Croydon Filtrex: BOT1002, 13 pulgadas",
            "Sköld Workman: FPBSK, forro de lana ignífuga",
            "Construcción: caucho vulcanizado",
            "Protección: puntera y entresuela de acero",
            "Norma: NFPA 1971 declarada por cada fabricante"
          ]
        },
        {
          "eyebrow": "En servicio",
          "h2": "Limpieza e inspección de la bota de hule",
          "parrafos": [
            "Después de cada servicio lava la bota por dentro y por fuera y déjala secar lejos del calor directo. Revisa grietas en el caucho, desprendimiento de la suela y daños en la zona del tobillo.",
            "Un corte que atraviesa el caucho o una suela despegada sacan la bota de servicio: ya no protege contra agua ni contra perforación. Registra código y talla de cada par para reponerlo con el mismo modelo."
          ]
        }
      ],
      "especificacion": [
        {
          "campo": "Uso principal",
          "valor": "Combate estructural según configuración"
        },
        {
          "campo": "Material",
          "valor": "Caucho o hule vulcanizado según modelo"
        },
        {
          "campo": "Referencia",
          "valor": "NFPA 1970 (antes NFPA 1971)"
        },
        {
          "campo": "Talla",
          "valor": "Confirmar en centímetros o equivalencia declarada"
        }
      ],
      "normas": [
        {
          "norma": "NFPA 1970",
          "alcance": "Referencia vigente para calzado estructural; verifica la declaración del modelo."
        }
      ],
      "errores": [
        "Comprar la talla sin prueba con pantalonera",
        "Mezclar modelos distintos en una misma partida sin anotarlo",
        "Aceptar «cumple NFPA» sin modelo ni edición declarada",
        "Secar la bota junto a una fuente de calor"
      ],
      "faq": [
        {
          "q": "¿Cuál es la bota de hule de bombero más ligera?",
          "a": "De los tres modelos con ficha publicada, la Sköld Workman FPBSK, con 3,150 g declarados. La Workman Fire y la Filtrex publican 3,520 g promedio."
        },
        {
          "q": "¿Qué altura debe tener una bota estructural de hule?",
          "a": "La suficiente para que la pantalonera la cubra al flexionar la rodilla. Los modelos que surtimos van de 13 pulgadas a 33 cm; se confirma probándola con la pantalonera puesta."
        },
        {
          "q": "¿Qué bota de hule trae el kit estructural?",
          "a": "El kit estructural Profesional incluye la Croydon Filtrex BOT1002, con puntera y entresuela de acero."
        },
        {
          "q": "¿Qué norma declaran las botas de hule para bombero?",
          "a": "La Workman Fire y la Filtrex declaran NFPA 1971 y ASTM F903-10; la Sköld Workman, NFPA 1971-2007, NFPA 1992-2005, ASTM F2413-05 y CSA Z195-02. La referencia vigente para el conjunto estructural es NFPA 1970."
        }
      ],
      "relacionados": [
        "romak-workman-fire",
        "croydon-filtrex",
        "skold-workman"
      ],
      "chips": [
        "Hule vulcanizado",
        "Puntera",
        "Entresuela"
      ],
      "resumen": [
        "Surtimos tres modelos con ficha publicada: Romak Fire Workman Fire BOT1004, Croydon Filtrex BOT1002 y Sköld Workman FPBSK. Los tres declaran NFPA 1971 según su fabricante.",
        "La bota se elige por talla, altura de caña y forro, y se prueba con la pantalonera y el calcetín de trabajo. Te cotizamos cada par con su código y su talla escrita."
      ],
      "duos": {
        "ficha": [
          "La ficha de este tipo resume lo que debe decir una requisición: uso en combate estructural, caucho vulcanizado según modelo y referencia NFPA 1970, la edición que absorbió a la 1971.",
          "La talla se confirma en centímetros o con la equivalencia que declare el fabricante. Si ya elegiste modelo, pide que código y talla queden escritos por cada par."
        ],
        "errores": [
          "Con botas, casi todos los problemas llegan después de la entrega: tallas que no ajustan, cañas que no solapan o modelos mezclados en un mismo lote.",
          "Estos cuatro errores se evitan con una prueba y una partida bien escrita."
        ],
        "modelos": [
          "Surtimos tres botas de hule estructurales con ficha publicada. La Filtrex forma parte de nuestro kit estructural Profesional y la Workman Fire del kit brigadista; la Sköld Workman destaca por su forro de lana ignífuga.",
          "Cada ficha muestra la norma tal como la declara su fabricante, con peso, altura y tallas disponibles."
        ],
        "faq": [
          "Respondemos las dudas habituales sobre peso, altura, normas y kits de la bota de hule estructural.",
          "Si nos mandas el cuadro de tallas de tu personal, te decimos qué modelo conviene y cuántos pares de cada talla pedir."
        ]
      }
    },
    {
      "slug": "bota-de-piel-estructural",
      "seccion": "botas",
      "nombre": "Bota de piel estructural",
      "nombreCard": "Bota de piel estructural",
      "title": "Bota de piel estructural para bombero con membrana",
      "description": "Bota de piel estructural para bombero: ajuste, membrana, protección térmica, suela y criterios para comparar una configuración de ataque interior. Cotiza.",
      "lead": "La bota de piel estructural cambia el caucho por piel con forro y membrana: pesa menos, sujeta mejor el tobillo y resulta más cómoda en turnos largos, a cambio de más cuidado.",
      "imagen": {
        "src": "/images/catalogo/botas/tipo-bota-de-piel-estructural.avif",
        "alt": "Bota de piel para bombero estructural",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      },
      "bloques": [
        {
          "eyebrow": "Qué es",
          "h2": "Bota de piel para combate estructural",
          "parrafos": [
            "La piel se adapta al pie y el sistema de cierre sujeta el tobillo mejor que una bota de hule. Para que proteja en un incendio, lleva forro térmico y una membrana que impide el paso del agua sin cerrar la transpiración.",
            "La contraparte es el mantenimiento: la piel necesita limpieza, secado lento y cuidado para no endurecerse ni agrietarse. Una bota de piel mal cuidada pierde protección antes que una de hule."
          ]
        },
        {
          "eyebrow": "Cómo elegir",
          "id": "elegir",
          "h2": "Construcción, cierre y talla",
          "parrafos": [
            "Pide que la cotización nombre la piel, el forro, la membrana, la puntera y la entresuela, y que indique si el fabricante declara norma. Sin esos datos no es posible comparar dos ofertas de bota de piel.",
            "Define también el cierre: agujetas, cremallera lateral o ambos. La prueba con escalera y arrastre muestra si talón, empeine y dedos quedan estables con la pantalonera puesta."
          ],
          "lista": [
            "Operación: combate estructural",
            "Construcción: piel, forro y membrana",
            "Protección: puntera y entresuela declaradas",
            "Cierre: agujetas o cremallera",
            "Referencia: NFPA 1970",
            "Talla: prueba con pantalonera y calcetín"
          ]
        },
        {
          "eyebrow": "En servicio",
          "h2": "Cuidado de la piel después de cada servicio",
          "parrafos": [
            "Limpia el hollín y la suciedad con el método del fabricante y deja secar a temperatura ambiente, nunca junto al calor. La piel reseca se agrieta y deja de proteger aunque la bota se vea completa.",
            "Revisa costuras, cierre, suela y la zona donde se dobla el pie. Si la membrana ya deja pasar agua o la suela se separa, la bota sale de servicio."
          ]
        }
      ],
      "especificacion": [
        {
          "campo": "Uso principal",
          "valor": "Combate estructural según modelo"
        },
        {
          "campo": "Construcción",
          "valor": "Piel, forro y membrana según configuración"
        },
        {
          "campo": "Referencia",
          "valor": "NFPA 1970 (antes NFPA 1971)"
        },
        {
          "campo": "Validación",
          "valor": "Prueba con pantalón y calcetín de trabajo"
        }
      ],
      "normas": [
        {
          "norma": "NFPA 1970",
          "alcance": "Referencia para calzado estructural; solicita documentación del modelo."
        }
      ],
      "errores": [
        "Comprar sin nombrar piel, forro y membrana",
        "Dar por hecho una norma que el fabricante no declara",
        "Elegir la talla sin prueba con pantalonera",
        "Secar la piel con calor directo"
      ],
      "faq": [
        {
          "q": "¿Tienen modelos de bota de piel estructural publicados?",
          "a": "Por ahora no. La cotizamos por construcción y te presentamos la ficha del fabricante antes de que decidas."
        },
        {
          "q": "¿Qué es mejor para bombero, bota de piel o de hule?",
          "a": "Depende del uso. La de hule es más impermeable y fácil de limpiar; la de piel es más ligera y sujeta mejor el tobillo en turnos largos, pero exige más cuidado."
        },
        {
          "q": "¿Qué norma aplica a una bota de piel para bombero?",
          "a": "La referencia del conjunto estructural es NFPA 1970, que absorbió a la 1971. Pide que la cotización indique qué declara el modelo ofertado."
        },
        {
          "q": "¿Cómo se limpia una bota de piel de bombero?",
          "a": "Con el método que indique el fabricante, sin solventes agresivos y con secado a temperatura ambiente. El calor directo reseca la piel y la agrieta."
        }
      ],
      "chips": [
        "Piel",
        "Membrana",
        "Ajuste"
      ],
      "resumen": [
        "Es una opción para combate estructural cuando el personal camina y sube escaleras durante horas. Todavía no publicamos un modelo de piel, así que la cotizamos por construcción documentada del fabricante.",
        "Piel, forro, membrana, puntera y cierre se definen en la partida. La referencia del conjunto es NFPA 1970, y la bota se prueba con pantalonera y calcetín antes de cerrar tallas."
      ],
      "duos": {
        "ficha": [
          "Para requisitar bota de piel estructural define el uso, la construcción de piel, forro y membrana, y la referencia NFPA 1970.",
          "Como aún no publicamos modelo, la tabla no muestra código ni certificación. Esos datos llegan con la ficha del fabricante de la bota que te propongamos."
        ],
        "errores": [
          "Una bota de piel mal especificada no se nota en la entrega, sino semanas después: en la primera guardia larga o en la primera limpieza.",
          "Estos cuatro errores conviene cerrarlos en la partida para comparar ofertas con el mismo criterio."
        ],
        "faq": [
          "Respondemos las dudas habituales sobre modelos, diferencias con la bota de hule, norma y cuidado.",
          "Si tu corporación está evaluando cambiar de hule a piel, cuéntanos cómo trabaja y te ayudamos a decidir."
        ]
      }
    },
    {
      "slug": "bota-forestal",
      "seccion": "botas",
      "nombre": "Bota forestal para brigadista",
      "nombreCard": "Bota forestal",
      "title": "Bota forestal para bombero y brigadista de línea de fuego",
      "description": "Bota forestal para bombero y brigadista: piel, agujetas, caña, suela de alta temperatura y selección segura para caminar en línea de fuego. Cotiza.",
      "lead": "La bota forestal es una bota de piel con agujetas pensada para caminar horas en terreno irregular: sujeta el tobillo, protege de brasas y ramas, y deja trabajar en pendiente sin resbalar.",
      "imagen": {
        "src": "/images/catalogo/botas/tipo-bota-forestal.avif",
        "alt": "Bota forestal de piel con agujetas para brigadista",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      },
      "bloques": [
        {
          "eyebrow": "Qué es",
          "h2": "Bota de marcha para línea de fuego",
          "parrafos": [
            "En incendio forestal la bota se usa todo el día, caminando en pendiente, sobre ceniza caliente y entre raíces. La sujeción del tobillo y el agarre de la suela importan tanto como la protección térmica.",
            "Por eso no se usa una bota estructural de hule en el monte: es pesada, suelta en el tobillo y poco estable en pendiente. La forestal es de piel y se ajusta con agujetas o con agujetas y cierre."
          ]
        },
        {
          "eyebrow": "Cómo elegir",
          "id": "elegir",
          "h2": "Caña, cierre y suela según el terreno",
          "parrafos": [
            "La Fire Ranger es de caña alta y se ajusta con agujetas; su ficha completa se confirma al cotizar. La Strong Fire es de caña corta, con tubo de 24 cm según talla, nueve pares de ojillos y cierre YKK para quitarla rápido.",
            "Pruébala con el pantalón forestal y el calcetín de trabajo, caminando en pendiente. El pie no debe moverse dentro de la bota al bajar, que es cuando aparecen las ampollas y las torceduras."
          ],
          "lista": [
            "Fire Ranger: piel negra, agujetas y caña alta",
            "Strong Fire: piel hidrofugada de 2.0 a 2.4 mm",
            "Strong Fire: tubo de 24 cm según talla",
            "Cierre: agujetas o cierre YKK",
            "Planta: Kevlar antiperforación",
            "Suela: hule acrilonitrilo"
          ]
        },
        {
          "eyebrow": "En servicio",
          "h2": "Inspección de la bota forestal",
          "parrafos": [
            "Después de cada jornada retira ceniza y tierra, revisa agujetas, ojillos, cierre y costuras, y deja secar la piel a la sombra. La suela se desgasta rápido en terreno rocoso y en pendiente.",
            "Una suela que ya no agarra o una costura abierta en la caña son motivo de cambio antes de la siguiente salida. Anota modelo y talla de cada par para reponer sin volver a probar todo el lote."
          ]
        }
      ],
      "especificacion": [],
      "normas": [],
      "errores": [
        "Usar bota estructural de hule en línea de fuego",
        "Presentar como certificada una bota sin norma declarada",
        "Elegir la talla sin caminar en pendiente",
        "Ignorar el tipo de terreno al elegir la suela"
      ],
      "faq": [
        {
          "q": "¿Las botas forestales que surtimos están certificadas?",
          "a": "No. La Fire Ranger y la Strong Fire no declaran norma, y así lo indicamos en sus fichas. La referencia vigente del equipo forestal es NFPA 1950."
        },
        {
          "q": "¿Qué diferencia hay entre bota forestal y bota estructural?",
          "a": "La forestal es de piel, más ligera y con mejor sujeción del tobillo para caminar horas. La estructural protege contra agua, calor intenso y perforación en un incendio de edificio."
        },
        {
          "q": "¿Qué bota forestal tiene cierre rápido?",
          "a": "La Strong Fire de caña corta, con cierre metálico YKK además de nueve pares de ojillos."
        },
        {
          "q": "¿Cada cuánto se cambia una bota forestal?",
          "a": "Cuando la suela pierde agarre, la piel se abre o una costura se rompe. En temporadas intensas el desgaste puede llegar antes de lo que parece."
        }
      ],
      "relacionados": [
        "romak-fire-ranger-bota",
        "strongfire-bota-forestal"
      ],
      "chips": [
        "Piel",
        "Agujetas",
        "Línea de fuego"
      ],
      "resumen": [
        "Surtimos dos modelos: la Romak Fire Ranger, de piel negra con agujetas y caña alta, y la Strong Fire de caña corta, con piel hidrofugada, cierre YKK y planta de Kevlar.",
        "Ninguno de los dos declara norma; así lo indican sus fichas. Los cotizamos por talla y terreno, con NFPA 1950 como referencia del equipo forestal."
      ],
      "duos": {
        "ficha": [
          "La bota forestal se requisita por construcción, cierre, caña y suela. La referencia del equipo forestal es NFPA 1950, antes NFPA 1977.",
          "Los modelos que surtimos no declaran norma. Por eso la cotización los presenta tal como los publica su fabricante, sin atribuirles una certificación."
        ],
        "errores": [
          "Una bota forestal mal elegida se paga en la primera jornada: ampollas, torceduras o suelas que no agarran en pendiente.",
          "Estos cuatro errores conviene revisarlos antes de equipar a una cuadrilla completa."
        ],
        "modelos": [
          "Surtimos la Romak Fire Ranger, de piel negra con agujetas y caña alta, y la Strong Fire de caña corta, con piel hidrofugada, cierre YKK, planta de Kevlar y suela de hule acrilonitrilo.",
          "Las dos se publican sin norma declarada. La Fire Ranger confirma su ficha técnica completa al cotizar."
        ],
        "faq": [
          "Respondemos las dudas habituales sobre certificación, diferencias con la bota estructural y cuidado.",
          "Si nos dices en qué terreno trabaja tu cuadrilla y cuántas personas son, te decimos qué modelo conviene probar."
        ]
      }
    },
    {
      "slug": "bota-de-brigada-industrial",
      "seccion": "botas",
      "nombre": "Bota para brigada industrial",
      "nombreCard": "Bota de brigada industrial",
      "title": "Bota para brigada industrial contra incendio",
      "description": "Bota para brigada industrial contra incendio: calzado de seguridad, riesgo de conato, NOM-113-STPS-2009 y cuándo se requiere bota de bombero. Cotiza.",
      "lead": "La bota para brigada industrial es calzado de seguridad para las tareas que tu brigada tiene autorizadas: inspección, evacuación, apoyo o conato. Si hay ataque interior, la bota tiene que ser estructural.",
      "imagen": {
        "src": "/images/catalogo/botas/tipo-bota-de-brigada-industrial.avif",
        "alt": "Bota para brigada industrial contra incendio",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      },
      "bloques": [
        {
          "eyebrow": "Qué es",
          "h2": "Calzado según lo que hace tu brigada",
          "parrafos": [
            "La mayoría de las brigadas industriales trabaja en inspección, evacuación y control de conatos. Para esas tareas basta un calzado de seguridad adecuado al riesgo del centro de trabajo, con puntera, suela y cierre definidos.",
            "Cuando la brigada puede enfrentar un incendio interior, la bota de seguridad industrial ya no alcanza: se necesita bota estructural, probada con pantalonera, casco y guantes del conjunto."
          ]
        },
        {
          "eyebrow": "Cómo elegir",
          "id": "elegir",
          "h2": "Tarea autorizada, norma y talla",
          "parrafos": [
            "Parte del análisis de riesgo: qué hace la brigada, dónde y hasta qué punto. Con eso se define el calzado y se evita comprar de más o de menos.",
            "Pide la talla por usuario y pruébala con el uniforme de brigada. Puntera, suela, plantilla y cierre deben quedar escritos para que la recepción pueda revisarlos."
          ],
          "lista": [
            "Tarea: inspección, evacuación, apoyo o conato",
            "Referencia: NOM-113-STPS-2009",
            "Talla: por usuario, con prueba",
            "Construcción: puntera, suela, plantilla y cierre",
            "Límite: no para ataque interior",
            "Escalamiento: bota estructural si el riesgo lo pide"
          ]
        },
        {
          "eyebrow": "En servicio",
          "h2": "Revisión del calzado de brigada",
          "parrafos": [
            "Revisa suela, puntera y costuras de forma periódica y después de cada simulacro o respuesta real. Un calzado con suela gastada o puntera expuesta sale de servicio.",
            "Si la brigada cambia de alcance, por ejemplo al incorporar ataque interior, el calzado se revisa junto con todo el equipo. No basta con agregar una pieza al conjunto anterior."
          ]
        }
      ],
      "especificacion": [],
      "normas": [
        {
          "norma": "NOM-113-STPS-2009",
          "alcance": "Referencia de calzado de protección en centros de trabajo."
        }
      ],
      "errores": [
        "Equipar por uniforme y no por la tarea autorizada",
        "Usar calzado industrial en ataque interior",
        "Pedir sin talla por usuario",
        "No documentar el límite de actuación de la brigada"
      ],
      "faq": [
        {
          "q": "¿Qué norma aplica a la bota de brigada industrial?",
          "a": "La NOM-113-STPS-2009, de calzado de protección en centros de trabajo. La dotación de la brigada, en conjunto, se define con la NOM-002-STPS-2010 según el riesgo."
        },
        {
          "q": "¿La brigada necesita bota de bombero?",
          "a": "Solo si su procedimiento incluye ataque interior. Para inspección, evacuación y conato suele bastar calzado de seguridad industrial."
        },
        {
          "q": "¿Tienen modelos de bota de brigada publicados?",
          "a": "Todavía no. La cotizamos según tu análisis de riesgo y te presentamos la ficha del modelo antes de que decidas."
        },
        {
          "q": "¿Qué bota lleva el kit brigadista?",
          "a": "El kit brigadista incluye la Romak Fire Workman Fire BOT1004, una bota de hule estructural; su configuración se confirma al cotizar."
        }
      ],
      "chips": [
        "Brigada",
        "NOM-113",
        "Según riesgo"
      ],
      "resumen": [
        "La referencia para calzado de protección en centros de trabajo es la NOM-113-STPS-2009. Todavía no publicamos un modelo; lo definimos según el análisis de riesgo y el límite de actuación de tu brigada.",
        "Puntera, suela, plantilla y cierre se escriben en la partida. Si el procedimiento incluye entrar a combatir, cotizamos bota estructural dentro del conjunto completo."
      ],
      "duos": {
        "ficha": [
          "Para requisitar bota de brigada industrial indica la tarea autorizada, la referencia NOM-113-STPS-2009 y la talla de cada usuario.",
          "La tabla deja escrito el límite: no es calzado para ataque interior. Si tu brigada llega a ese nivel, la partida cambia a bota estructural."
        ],
        "errores": [
          "Los errores con calzado de brigada casi siempre vienen de no definir antes qué hace la brigada.",
          "Revisa estos cuatro puntos contra tu procedimiento de respuesta antes de pedir cotización."
        ],
        "faq": [
          "Respondemos las dudas habituales sobre normas de la STPS, alcance de la brigada y kit brigadista.",
          "Si nos compartes el nivel de respuesta de tu brigada y cuántas personas son, te decimos qué calzado corresponde."
        ]
      }
    }
  ],
  "modelos": [
    {
      "id": "romak-workman-fire",
      "seccion": "botas",
      "tipo": "bota-de-hule-estructural",
      "marca": "Romak Fire",
      "fabricante": "Romak Fire",
      "nombre": "Workman Fire",
      "codigo": "BOT1004",
      "norma": "NFPA 1971 · ASTM F903-10 · ISO 9001:2008 (proceso)",
      "estatusNorma": "declarado",
      "material": "Caucho natural vulcanizado en autoclave",
      "colores": "Negra con bandas amarillas",
      "tallas": "26 a 31 cm mexicanas",
      "peso": "3,520 g promedio",
      "caracteristicas": [
        "Altura de 33 cm",
        "Caucho natural hecho a mano y vulcanizado en autoclave",
        "Capellada de caucho resistente a flama y calor, según fabricante",
        "Espuma aislante de PU e impermeable",
        "Suela antiderrapante, puntera y entresuela de acero antiperforación"
      ],
      "resumen": [
        "La Romak Fire Workman Fire BOT1004 es una bota de hule estructural de 33 cm, de caucho natural hecho a mano y vulcanizado en autoclave, con puntera y entresuela de acero antiperforación.",
        "Se ofrece en tallas mexicanas de la 26 a la 31, negra con bandas amarillas, y pesa 3,520 g en promedio. Es la bota de nuestro kit brigadista.",
        "Su fabricante declara NFPA 1971 y ASTM F903-10, además de ISO 9001:2008 para su proceso. La cotizamos por par y por talla, con prueba de ajuste."
      ],
      "descripcion": [
        "Su caña de 33 cm es de las más altas del catálogo, lo que da buen margen para que la pantalonera la cubra al arrodillarse. La capellada de caucho resiste flama y calor, según su fabricante.",
        "Por dentro lleva espuma aislante de PU, impermeable, que protege del agua y del calor del piso. La suela es antiderrapante y la puntera y la entresuela de acero protegen contra golpes y clavos."
      ],
      "faq": [
        {
          "q": "¿Qué tallas maneja la bota Workman Fire?",
          "a": "Tallas mexicanas de la 26 a la 31, según su fabricante."
        },
        {
          "q": "¿Cuánto pesa la bota Romak Fire Workman Fire?",
          "a": "3,520 g en promedio, según su ficha."
        },
        {
          "q": "¿Qué altura tiene la Workman Fire BOT1004?",
          "a": "33 cm de caña, lo que facilita el solape con la pantalonera."
        },
        {
          "q": "¿En qué kit viene la bota Workman Fire?",
          "a": "En nuestro kit brigadista, junto con el traje Combate Básico, el casco Bullard LTX, la capucha CAP1005 y el guante Firemax VI."
        }
      ],
      "imagen": {
        "src": "/images/catalogo/botas/romak-bot1004.avif",
        "alt": "Bota Romak Fire Workman Fire",
        "width": 1000,
        "height": 1250,
        "origen": "proveedor",
        "credito": "Romak Fire"
      },
      "chips": [
        "33 cm",
        "Puntera",
        "26–31 cm"
      ],
      "duos": {
        "ficha": [
          "La Workman Fire se identifica con el código BOT1004. La tabla reúne material, tallas, peso y norma tal como los publica su ficha.",
          "La norma aparece como declaración del fabricante. Pide que código y talla queden escritos por cada par en la cotización."
        ],
        "caracteristicas": [
          "Estas son las características que publica la ficha de la Workman Fire, desde el caucho hasta la protección antiperforación.",
          "La altura de 33 cm es su rasgo más distintivo frente a las otras botas de hule del catálogo."
        ],
        "otros": [
          "La Workman Fire comparte tipo con la Croydon Filtrex y la Sköld Workman. Cambian en altura, peso y forro interior.",
          "Si tu personal pide una bota más ligera, la Sköld Workman pesa menos; si el kit estructural es la referencia, la Filtrex es la bota de ese kit."
        ],
        "faq": [
          "Respondemos lo que más se pregunta de la Workman Fire: tallas, peso, altura y kit.",
          "Si nos mandas el cuadro de tallas de tu brigada, te cotizamos el lote completo por par."
        ]
      }
    },
    {
      "id": "croydon-filtrex",
      "seccion": "botas",
      "tipo": "bota-de-hule-estructural",
      "marca": "Croydon",
      "fabricante": "Romak Fire",
      "nombre": "Filtrex",
      "codigo": "BOT1002",
      "norma": "NFPA 1971 · ASTM F903-10",
      "estatusNorma": "declarado",
      "material": "Caucho vulcanizado",
      "colores": "Negra con bandas amarillas",
      "tallas": "25 a 31 cm",
      "peso": "3,520 g promedio",
      "caracteristicas": [
        "Altura de 13 pulgadas",
        "Construcción de caucho vulcanizado",
        "Puntera y entresuela de acero",
        "Negra con bandas amarillas",
        "Incluida en el kit estructural Profesional"
      ],
      "resumen": [
        "La Croydon Filtrex BOT1002 es una bota de hule estructural de 13 pulgadas, de caucho vulcanizado, con puntera y entresuela de acero.",
        "Se ofrece en tallas de 25 a 31 cm, negra con bandas amarillas, y pesa 3,520 g en promedio. Es la bota de nuestro kit estructural Profesional.",
        "Su fabricante declara NFPA 1971 y ASTM F903-10. La cotizamos por par, con talla escrita y prueba con la pantalonera puesta."
      ],
      "descripcion": [
        "La Filtrex es una bota de hule clásica para ataque interior: caucho vulcanizado de una pieza, fácil de lavar después de cada servicio, con protección de acero en la punta y en la planta.",
        "Su rango de tallas empieza en 25 cm, una talla menos que otras botas del catálogo, lo que ayuda a equipar a personal con pie pequeño sin recurrir a otro modelo."
      ],
      "faq": [
        {
          "q": "¿Qué altura tiene la bota Croydon Filtrex?",
          "a": "13 pulgadas de caña, según su ficha."
        },
        {
          "q": "¿Qué tallas maneja la Croydon Filtrex?",
          "a": "De 25 a 31 cm."
        },
        {
          "q": "¿En qué kit viene la bota Croydon Filtrex?",
          "a": "En nuestro kit estructural Profesional, junto con el traje Romak Fire Profesional, el casco Bullard LTX, la capucha Majestic PAC II y el guante Veridian Fire Pro II."
        },
        {
          "q": "¿Qué norma declara la Croydon Filtrex?",
          "a": "NFPA 1971 y ASTM F903-10, como declaración del fabricante, sin número de certificación publicado."
        }
      ],
      "imagen": {
        "src": "/images/catalogo/botas/croydon-bot1002.avif",
        "alt": "Bota Croydon Filtrex",
        "width": 1000,
        "height": 1250,
        "origen": "proveedor",
        "credito": "Romak Fire"
      },
      "chips": [
        "13 pulgadas",
        "Puntera",
        "25–31 cm"
      ],
      "duos": {
        "ficha": [
          "La Croydon Filtrex se identifica con el código BOT1002. La tabla reúne material, tallas, peso y norma tal como los publica su ficha.",
          "La norma aparece como declaración del fabricante. Pide que código y talla queden escritos por cada par."
        ],
        "caracteristicas": [
          "Estas son las características que publica la ficha de la Filtrex. Todas vienen en su configuración estándar.",
          "Su inclusión en el kit estructural Profesional la hace la opción natural si equipas con ese kit."
        ],
        "otros": [
          "La Filtrex comparte tipo con la Romak Fire Workman Fire y la Sköld Workman. La Workman Fire es más alta y la Sköld, más ligera.",
          "Compáralas por altura, peso, forro y tallas disponibles, no por el color."
        ],
        "faq": [
          "Respondemos lo que más se pregunta de la Croydon Filtrex: altura, tallas, kit y norma.",
          "Si nos compartes las tallas de tu personal, te cotizamos el lote por par."
        ]
      }
    },
    {
      "id": "skold-workman",
      "seccion": "botas",
      "tipo": "bota-de-hule-estructural",
      "marca": "Sköld",
      "fabricante": "Sköld",
      "nombre": "Workman",
      "codigo": "FPBSK",
      "norma": "NFPA 1971-2007 · NFPA 1992-2005 · ASTM F2413-05 · CSA Z195-02",
      "estatusNorma": "declarado",
      "material": "Caucho natural vulcanizado en autoclave",
      "tallas": "FPBSK-05 a FPBSK-11; mexicano 5 a 11 y americano 6 a 12",
      "peso": "3,150 g",
      "caracteristicas": [
        "Forro de lana ignífuga con espuma insulada y PU expandido",
        "Protector de tobillo, puntera de acero y entresuela de acero",
        "Cambrión metálico, tacón moldeado y suela antideslizante",
        "Plantilla de caucho acolchada 100 % algodón",
        "Cinta reflejante lateral, agarraderas y cargas eléctricas ESR declaradas"
      ],
      "resumen": [
        "La Sköld Workman FPBSK es una bota de hule estructural de caucho natural vulcanizado en autoclave, con forro de lana ignífuga y protector de tobillo.",
        "Pesa 3,150 g, la más ligera de nuestras botas de hule, y se ofrece de la talla 5 a la 11 mexicana, equivalentes a la 6 a la 12 americana.",
        "Sköld declara NFPA 1971-2007, NFPA 1992-2005, ASTM F2413-05 y CSA Z195-02. La cotizamos por par, con su código de talla."
      ],
      "descripcion": [
        "El forro de lana ignífuga con espuma insulada y PU expandido aísla del calor y del frío, y la plantilla de caucho acolchada de algodón hace más cómodas las guardias largas.",
        "Lleva puntera y entresuela de acero, cambrión metálico, tacón moldeado y suela antideslizante. La cinta reflejante lateral y las agarraderas completan una bota pensada para trabajo diario."
      ],
      "faq": [
        {
          "q": "¿Cuánto pesa la bota Sköld Workman?",
          "a": "3,150 g, según su fabricante. Es la más ligera de las botas de hule estructurales del catálogo."
        },
        {
          "q": "¿Cómo se piden las tallas de la Sköld Workman?",
          "a": "Por código, de FPBSK-05 a FPBSK-11, que corresponden a las tallas mexicanas 5 a 11 y americanas 6 a 12."
        },
        {
          "q": "¿Qué forro tiene la Sköld Workman?",
          "a": "Lana ignífuga con espuma insulada y PU expandido, más plantilla de caucho acolchada de algodón."
        },
        {
          "q": "¿Qué normas declara la Sköld Workman?",
          "a": "NFPA 1971-2007, NFPA 1992-2005, ASTM F2413-05 y CSA Z195-02, como declaración del fabricante."
        }
      ],
      "imagen": {
        "src": "/images/catalogo/botas/skold-fpbsk.avif",
        "alt": "Bota Sköld Workman",
        "width": 1000,
        "height": 1250,
        "origen": "proveedor",
        "credito": "Sköld"
      },
      "chips": [
        "3,150 g",
        "Puntera de acero",
        "FPBSK"
      ],
      "duos": {
        "ficha": [
          "La Sköld Workman se identifica con el código FPBSK, más el número de talla. La tabla reúne material, peso, tallas y normas tal como las publica su ficha.",
          "Las normas aparecen como declaración del fabricante. Pide que el código de talla quede escrito por cada par."
        ],
        "caracteristicas": [
          "Estas son las características que publica la ficha de la Workman de Sköld, con el forro de lana como rasgo distintivo.",
          "Si tu personal trabaja en clima frío o hace guardias largas, el forro y la plantilla acolchada marcan la diferencia."
        ],
        "otros": [
          "La Sköld Workman comparte tipo con la Romak Fire Workman Fire y la Croydon Filtrex, que publican 3,520 g de peso promedio.",
          "Compáralas por peso, forro, altura y tallas. La prueba con la pantalonera puesta decide la talla correcta."
        ],
        "faq": [
          "Respondemos lo que más se pregunta de la Sköld Workman: peso, tallas, forro y normas.",
          "Si nos mandas las tallas de tu personal en sistema mexicano o americano, te las traducimos a código FPBSK."
        ]
      }
    },
    {
      "id": "romak-fire-ranger-bota",
      "seccion": "botas",
      "tipo": "bota-forestal",
      "marca": "Romak Fire",
      "fabricante": "Romak Fire",
      "nombre": "Fire Ranger",
      "codigoNota": "Código por confirmar al cotizar",
      "estatusNorma": "sin-norma",
      "material": "Piel negra",
      "caracteristicas": [
        "Bota forestal de piel negra",
        "Agujetas y caña alta",
        "Línea Fire Ranger",
        "Ficha técnica completa al cotizar"
      ],
      "resumen": [
        "La Romak Fire Ranger es una bota forestal de piel negra, con agujetas y caña alta, de la línea Fire Ranger pensada para brigadistas.",
        "Su ficha técnica completa se confirma al cotizar: por ahora el fabricante publica material, cierre y altura de caña, sin código ni norma declarada.",
        "La presentamos tal como la publica Romak Fire. Si necesitas una bota forestal con construcción detallada, la Strong Fire publica más datos."
      ],
      "descripcion": [
        "Es una bota de marcha para línea de fuego: la piel se adapta al pie y la caña alta con agujetas sujeta el tobillo en terreno irregular.",
        "Antes de ordenarla pedimos al fabricante la ficha técnica con código, suela y construcción, para que la cotización no deje dudas sobre lo que vas a recibir."
      ],
      "faq": [
        {
          "q": "¿Cuál es el código de la bota Romak Fire Ranger?",
          "a": "Se confirma al cotizar, junto con la ficha técnica completa del fabricante."
        },
        {
          "q": "¿La bota Fire Ranger declara alguna norma?",
          "a": "No. Su fabricante no publica norma para esta bota y así la presentamos."
        },
        {
          "q": "¿Qué se sabe de la construcción de la Fire Ranger?",
          "a": "Que es de piel negra, con agujetas y caña alta. Suela, forro y protección se confirman en la ficha técnica al cotizar."
        },
        {
          "q": "¿Para qué uso está pensada la bota Fire Ranger?",
          "a": "Para incendio forestal y trabajo en línea de fuego, no para ataque interior estructural."
        }
      ],
      "imagen": {
        "src": "/images/catalogo/botas/tipo-bota-forestal.avif",
        "alt": "Imagen ilustrativa de bota forestal de piel",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      },
      "chips": [
        "Forestal",
        "Piel negra",
        "Ficha técnica pendiente"
      ],
      "duos": {
        "ficha": [
          "La tabla muestra lo que publica hoy la ficha de la Fire Ranger: material y estatus normativo. El código se confirma al cotizar.",
          "No declara norma. La referencia vigente del equipo forestal es NFPA 1950, y así lo dejamos escrito."
        ],
        "caracteristicas": [
          "Estas son las características que publica el fabricante. Son pocas, y por eso pedimos la ficha completa antes de cerrar una partida.",
          "Si necesitas comparar construcción, la Strong Fire publica suela, planta, forro y cierre."
        ],
        "otros": [
          "La Fire Ranger comparte tipo con la Strong Fire de caña corta, que publica piel hidrofugada, planta de Kevlar y cierre YKK.",
          "Las dos se publican sin norma declarada. Elige por altura de caña, cierre y terreno."
        ],
        "faq": [
          "Respondemos lo que más se pregunta de la bota Fire Ranger: código, norma, construcción y uso.",
          "Si te interesa, te pedimos la ficha técnica completa y te la mandamos por WhatsApp junto con la cotización."
        ]
      }
    },
    {
      "id": "strongfire-bota-forestal",
      "seccion": "botas",
      "tipo": "bota-forestal",
      "marca": "Strong Fire",
      "fabricante": "Strong Fire",
      "nombre": "Bota brigadista forestal caña corta",
      "codigoNota": "Código por confirmar al cotizar",
      "estatusNorma": "sin-norma",
      "material": "Piel hidrofugada de 2.0 a 2.4 mm",
      "tallas": "Tubo de 24 cm según talla",
      "caracteristicas": [
        "Corte de piel hidrofugada de 2.0 a 2.4 mm",
        "Bumper de hule de 3 mm y bies reflejante verde neón",
        "Bullón acojinado, jareta de talón y nueve pares de ojillos metálicos",
        "Cierre metálico YKK, forros bondeados de 4.0 a 5.0 mm y doble membrana",
        "Casco de poliamida dieléctrico, planta de Kevlar antiperforación y suela de hule acrilonitrilo"
      ],
      "resumen": [
        "La bota brigadista forestal de caña corta Strong Fire es de piel hidrofugada de 2.0 a 2.4 mm, con planta de Kevlar antiperforación y suela de hule acrilonitrilo.",
        "Se ajusta con nueve pares de ojillos metálicos y cierre metálico YKK, y su tubo mide 24 cm según talla. Lleva doble membrana y casco de poliamida dieléctrico.",
        "Su fabricante no declara norma, y así la presentamos. La cotizamos por talla, con prueba en pendiente y con el pantalón forestal puesto."
      ],
      "descripcion": [
        "Es una bota con mucha información publicada: bumper de hule de 3 mm en la punta, bies reflejante verde neón, bullón acojinado y jareta de talón para que el pie no se mueva al bajar.",
        "El cierre YKK permite quitarla rápido sin desatar las agujetas, y los forros bondeados de 4.0 a 5.0 mm con doble membrana la hacen cómoda en jornadas largas."
      ],
      "faq": [
        {
          "q": "¿De qué material es la bota forestal Strong Fire?",
          "a": "De piel hidrofugada de 2.0 a 2.4 mm, con bumper de hule de 3 mm y forros bondeados de 4.0 a 5.0 mm."
        },
        {
          "q": "¿La bota Strong Fire tiene planta antiperforación?",
          "a": "Sí, planta de Kevlar antiperforación y casco de poliamida dieléctrico, según su fabricante."
        },
        {
          "q": "¿La bota Strong Fire declara norma?",
          "a": "No. Su fabricante no publica norma, y así lo indicamos en la ficha."
        },
        {
          "q": "¿Qué cierre tiene la bota Strong Fire?",
          "a": "Nueve pares de ojillos metálicos con agujetas, más cierre metálico YKK para ponerla y quitarla rápido."
        }
      ],
      "imagen": {
        "src": "/images/catalogo/botas/tipo-bota-forestal.avif",
        "alt": "Imagen ilustrativa de bota forestal para brigadista",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      },
      "chips": [
        "Piel hidrofugada",
        "Planta de Kevlar",
        "Sin norma declarada"
      ],
      "duos": {
        "ficha": [
          "La tabla reúne material, tallas y estatus normativo tal como los publica la ficha de Strong Fire. El código se confirma al cotizar.",
          "No declara norma. La referencia vigente del equipo forestal es NFPA 1950."
        ],
        "caracteristicas": [
          "Estas son las características que publica la ficha de Strong Fire, una de las más completas del catálogo forestal.",
          "La planta de Kevlar y el cierre YKK son los dos rasgos que más la distinguen."
        ],
        "otros": [
          "La Strong Fire comparte tipo con la Romak Fire Ranger, de caña alta y agujetas, que confirma su ficha completa al cotizar.",
          "Elige por altura de caña, cierre y terreno. Las dos se publican sin norma declarada."
        ],
        "faq": [
          "Respondemos lo que más se pregunta de la Strong Fire: material, planta, norma y cierre.",
          "Si nos dices cuántos brigadistas son y sus tallas, te mandamos la cotización del lote."
        ]
      }
    }
  ]
};
