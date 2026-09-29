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
        "La Romak Fire Workman Fire BOT1004 declara caucho natural vulcanizado en autoclave, caña de 33 cm, espuma aislante de PU, puntera y entresuela de acero. La cotizamos para operación estructural con tallas mexicanas de 26 a 31 cm y prueba con pantalón antes de asignar cada par.",
        "En tu orden escribimos BOT1004, talla por usuario, caucho, espuma de PU, puntera y entresuela de acero. Pídenos la declaración NFPA 1971 · ASTM F903-10 · ISO 9001:2008 de proceso y mándanos tu tallaje por WhatsApp para revisar ajuste y solape."
      ],
      "descripcion": [
        "Elige la Workman Fire BOT1004 si tu partida requiere caucho natural vulcanizado en autoclave, caña de 33 cm y tallas mexicanas de 26 a 31 cm; si buscas otra construcción, cotizamos la opción documentada para tu operación. En la orden escribe código BOT1004, talla, caucho, espuma aislante de PU, puntera y entresuela de acero para que el lote no llegue definido solo por color negro y bandas amarillas.",
        "La BOT1004 declara construcción hecha a mano, capellada de caucho resistente a flama y calor según fabricante, espuma aislante de PU impermeable y suela antiderrapante. En la prueba de talla revisamos ambos pies con calcetín y pantalón estructural: el talón debe conservar control, los dedos espacio frente a la puntera de acero y la caña no debe presionar al subir escalera o trabajar en posición baja.",
        "La configuramos con pantalón estructural, casco y máscara para comprobar el solape de los 33 cm de caña durante marcha y agachamiento. Pide que el par conserve bandas amarillas, suela antiderrapante y entresuela de acero antiperforación; si tu compra requiere un kit, anota BOT1004 por separado porque la asignación individual no se sustituye con el nombre del conjunto.",
        "Para uso estructural, antes de aceptar el lote cotejamos BOT1004, talla 26 a 31 cm, caña de 33 cm, caucho, espuma de PU, suela, puntera y entresuela contra la orden. Pedimos que cada usuario camine, suba escalones y adopte posición baja con el pantalón; si el par levanta talón, roza o pierde estabilidad, corregimos talla antes de registrar su entrega.",
        "Romak Fire declara NFPA 1971 · ASTM F903-10 · ISO 9001:2008 para proceso; lo comunicamos como declarado, no como certificación verificada. Antes y después de guardia revisamos caucho, bandas, unión caña-planta, forro y suela; retiramos el par ante corte, grieta, deformación, pérdida de tracción o golpe que comprometa puntera o entresuela, y registramos código, talla y condición."
      ],
      "faq": [
        {
          "q": "¿Cuál es el código?",
          "a": "BOT1004."
        },
        {
          "q": "¿Qué tallas maneja?",
          "a": "De 26 a 31 cm mexicanos."
        },
        {
          "q": "¿Cuál es el peso declarado?",
          "a": "3,520 g promedio."
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
      ]
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
        "La Croydon Filtrex BOT1002 declara hule estructural de 13 pulgadas, caucho vulcanizado, puntera y entresuela de acero, con tallas de 25 a 31 cm. La surtimos por usuario y probamos con pantalón de protección, aunque tu compra la integre al kit estructural Profesional.",
        "Para comprar Filtrex anotamos BOT1002, talla 25 a 31 cm, altura de 13 pulgadas, caucho, puntera y entresuela de acero. Solicita por WhatsApp la declaración NFPA 1971 · ASTM F903-10 y confirma la prueba individual antes de liberar la recepción del lote."
      ],
      "descripcion": [
        "Elige Croydon Filtrex BOT1002 si tu orden requiere una bota de hule estructural de 13 pulgadas con tallas declaradas de 25 a 31 cm; si el usuario necesita otra talla o construcción, lo revisamos antes de cotizar. Escribe BOT1002, altura, caucho vulcanizado, puntera y entresuela de acero para evitar que una bota negra con bandas amarillas sustituya la configuración solicitada.",
        "La Filtrex declara caucho vulcanizado, peso promedio de 3,520 g, puntera y entresuela de acero. Durante la prueba colocamos calcetín y pantalón de protección, caminamos y subimos escalera: elegimos la talla que deje espacio a los dedos, mantenga el talón y permita posición baja sin que la caña de 13 pulgadas interfiera con el movimiento de tu usuario.",
        "Puede incluirse en el kit estructural Profesional, pero la configuramos con pantalón, casco y máscara de cada usuario antes de recibirla. Pide BOT1002, bandas amarillas, caucho, suela, puntera y entresuela en la orden; si el kit trae otro código o talla, pedimos corrección antes de aceptar pares que no correspondan a la partida especificada.",
        "En guardia estructural revisamos el lote comparando código BOT1002, talla 25 a 31 cm, altura de 13 pulgadas, peso promedio de 3,520 g y componentes de acero contra la orden. Antes de aceptarlo, cada usuario debe caminar, bajar escalones y comprobar el solape con pantalón; apartamos pares con presión en dedos, levantamiento de talón, corte, deformación o pérdida de tracción.",
        "Croydon declara NFPA 1971 · ASTM F903-10 y lo presentamos como declaración del fabricante, no como certificación verificada. Después de una intervención inspeccionamos caña, planta, forro, bandas y unión de caucho; limpiamos según fabricante y secamos sin calor directo. Retiramos cualquier Filtrex con daño, contaminación persistente o condición no evaluable y registramos BOT1002, talla y motivo."
      ],
      "faq": [
        {
          "q": "¿Cuál es el código?",
          "a": "BOT1002."
        },
        {
          "q": "¿Qué altura declara?",
          "a": "13 pulgadas."
        },
        {
          "q": "¿En qué kit se incluye?",
          "a": "En el kit estructural Profesional."
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
      ]
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
        "La Sköld Workman FPBSK declara caucho natural vulcanizado, forro de lana ignífuga, puntera y entresuela de acero, 3,150 g y caña de 13 pulgadas. La cotizamos por código FPBSK y verificamos la equivalencia mexicana 5 a 11 con prueba real de cada usuario.",
        "Tu orden debe indicar FPBSK, talla mexicana o estadounidense, caucho, forro de lana ignífuga, suela antideslizante y acero en puntera y entresuela. Pídenos por WhatsApp la declaración NFPA 1971-2007 · NFPA 1992-2005 · ASTM F2413-05 · CSA Z195-02 y agendamos la prueba."
      ],
      "descripcion": [
        "Elige Sköld Workman FPBSK si tu control de inventario puede registrar la equivalencia FPBSK-05 a FPBSK-11, mexicano 5 a 11 y americano 6 a 12; si no, cotizamos el tallaje ya validado por usuario. En la orden escribe FPBSK, equivalencia, caña de 13 pulgadas, peso de 3,150 g, caucho natural y los componentes de acero para no recibir un par solo parecido.",
        "La Workman declara caucho natural hecho a mano y vulcanizado en autoclave, forro de lana ignífuga con espuma insulada y PU expandido, protector de tobillo y plantilla de caucho acolchada 100 % algodón. En la prueba revisamos con calcetín y pantalón que el empeine no reciba presión, el talón se mantenga estable y los dedos no alcancen la puntera al subir escalera o adoptar posición baja.",
        "La combinamos con pantalón estructural, casco y máscara, verificando agarraderas de caucho, cinta reflejante lateral, cambrión metálico, tacón moldeado y suela antideslizante. Pide esa configuración junto con puntera y entresuela de acero; si tu requerimiento incluye cargas eléctricas ESR, escríbelo como declarado y solicita la documentación del modelo antes de relacionarlo con una maniobra concreta.",
        "Para operación estructural aceptamos un lote FPBSK después de cotejar código, equivalencia, caña de 13 pulgadas, 3,150 g y planta contra la orden. Hacemos una prueba de caminata, escalera y posición baja con pantalón; corregimos el par si falla talón, espacio de dedos o estabilidad. Tras calor, golpe o contaminantes, inspeccionamos suela, tacón, cambrión, forro y cinta lateral.",
        "Sköld declara NFPA 1971-2007 · NFPA 1992-2005 · ASTM F2413-05 · CSA Z195-02; son referencias declaradas y no las presentamos como certificación vigente. Retiramos la FPBSK ante grieta, corte, deformación, pérdida de tracción o condición que afecte puntera, entresuela o forro. Registramos talla, código y resultado de inspección antes de devolver cualquier par a guardia."
      ],
      "faq": [
        {
          "q": "¿Cuál es el código?",
          "a": "FPBSK."
        },
        {
          "q": "¿Qué peso declara?",
          "a": "3,150 g."
        },
        {
          "q": "¿Cómo se expresan las tallas?",
          "a": "FPBSK-05 a FPBSK-11, equivalentes a mexicano 5 a 11 y americano 6 a 12."
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
      ]
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
        "Solicita ficha técnica para confirmar especificaciones"
      ],
      "resumen": [
        "La Romak Fire Fire Ranger es una bota forestal de piel negra, agujetas y caña alta de la línea Fire Ranger. La cotizamos para marcha exterior solo con los datos publicados; pedimos ficha técnica, código y tabla de tallas antes de asignarla a tu cuadrilla.",
        "Tu orden puede indicar Fire Ranger, piel negra, agujetas y caña alta, pero no suela, puntera, membrana o altura sin ficha técnica. Escríbenos por WhatsApp con terreno y tallas para pedir la configuración documentada y probar estabilidad en caminata y pendiente."
      ],
      "descripcion": [
        "Elige Fire Ranger solo si tu compra puede condicionarse a ficha técnica, código por confirmar y talla probada; si necesitas puntera, membrana, suela o altura definida, pedimos esa documentación antes de cotizar. En la orden escribe Romak Fire Fire Ranger, piel negra, agujetas, caña alta y uso forestal, sin agregar componentes que el fabricante no haya publicado.",
        "La construcción conocida es piel negra, agujetas y caña alta dentro de la línea Fire Ranger. En la prueba de talla usamos calcetín de trabajo y hacemos caminata, escalera y pendiente para revisar talón, empeine, dedos y ajuste de agujetas. Si la caña presiona o el talón se mueve, cambiamos talla o detenemos la asignación hasta recibir la tabla y configuración del fabricante.",
        "La proponemos con pantalón forestal, casco y máscara según tu operación, pero no atribuimos compatibilidad técnica sin ficha. Pide que la cotización identifique agujetas, piel negra, caña alta y cuidados; si la cuadrilla requiere cierre, planta antiperforación o membrana, solicita esos campos por escrito en vez de usar una imagen de Fire Ranger como sustituto de la configuración real.",
        "Para marcha forestal, antes de aceptar una partida revisamos piel, agujetas, caña y talla contra la ficha técnica solicitada. Probamos cada par en caminata y pendiente con pantalón; retiramos de recepción cualquier unidad con costuras abiertas, suela desprendida, agujetas dañadas o inestabilidad. La Fire Ranger no se usa como equivalente automático de una bota estructural ni se amplía su alcance por apariencia.",
        "Fire Ranger tiene estatus sin norma y código por confirmar al cotizar; lo comunicamos como sin norma, nunca como certificación. Antes y después de jornada revisamos piel, costuras, agujetas, planta y condición de la caña; apartamos el par ante perforación, pérdida de suela, desprendimiento o contaminación persistente. Registramos talla, configuración aprobada y condición para que la reposición no se base en una fotografía."
      ],
      "faq": [
        {
          "q": "¿Cuál es el código?",
          "a": "Debe confirmarse al cotizar."
        },
        {
          "q": "¿Qué norma declara?",
          "a": "El fabricante no declara una norma para este modelo; solicita su declaración por escrito con la cotización."
        },
        {
          "q": "¿Qué se conoce de la construcción?",
          "a": "Piel negra, agujetas y caña alta de la línea Fire Ranger."
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
      ]
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
        "La Strong Fire caña corta declara piel hidrofugada de 2.0 a 2.4 mm, tubo de 24 cm según talla, planta de Kevlar y suela de hule acrilonitrilo. La surtimos para brigada forestal con prueba de ajuste, cierre YKK y caminata en el terreno de tu cuadrilla.",
        "Al cotizar anotamos piel de 2.0 a 2.4 mm, tubo de 24 cm según talla, nueve pares de ojillos, cierre YKK, planta de Kevlar y suela de hule acrilonitrilo. Tiene estatus sin norma; envíanos por WhatsApp tallas y uso para confirmar código y configuración."
      ],
      "descripcion": [
        "Elige Strong Fire si tu operación forestal requiere piel hidrofugada de 2.0 a 2.4 mm, tubo de 24 cm según talla, planta de Kevlar antiperforación y suela de hule acrilonitrilo; si esos campos no corresponden a tu partida, cotizamos otra configuración documentada. En la orden escribe bota brigadista forestal caña corta, tallas, piel, tubo, planta y suela, además de código por confirmar al cotizar.",
        "La bota declara bumper de hule de 3 mm, bies reflejante verde neón, bullón acojinado, jareta de talón, nueve pares de ojillos metálicos y forros bondeados de 4.0 a 5.0 mm. Durante la prueba con calcetín y pantalón forestal revisamos que el talón no se mueva, el bullón no presione y los ojillos, lengüeta y cierre YKK permitan ajuste estable durante caminata y pendiente.",
        "La configuramos con pantalón forestal, casco y máscara conforme a tu operación y escribimos cierre metálico YKK, doble membrana, casco de poliamida dieléctrico, plantilla de poliuretano y planta de Kevlar solo porque el modelo los declara. Pide que esos componentes se confirmen por escrito; si tu cuadrilla usa otra herramienta o conjunto, comprobamos que la caña corta y el pantalón mantengan movilidad sin inferir una protección no publicada.",
        "Antes de aceptar el lote para brigada forestal verificamos piel de 2.0 a 2.4 mm, tubo de 24 cm según talla, nueve pares de ojillos, cierre YKK, planta de Kevlar y suela de hule acrilonitrilo contra la orden. Hacemos caminata con el pantalón y pendiente; apartamos pares con presión, movimiento de talón, cierre irregular, pérdida de suela o daño de ojillos antes de asignarlos.",
        "Strong Fire tiene estatus sin norma y no la presentamos como certificación, aunque declare casco de poliamida dieléctrico, Kevlar y hule acrilonitrilo. Después de uso inspeccionamos piel, cierre YKK, forros, doble membrana, ojillos, planta y unión de suela; retiramos el par ante perforación, desprendimiento, contaminación persistente o condición que afecte ajuste, y registramos talla, código confirmado y resultado."
      ],
      "faq": [
        {
          "q": "¿Qué material declara?",
          "a": "Piel hidrofugada de 2.0 a 2.4 mm."
        },
        {
          "q": "¿Tiene norma declarada?",
          "a": "No hay norma declarada para este modelo."
        },
        {
          "q": "¿Qué planta declara?",
          "a": "Planta de Kevlar antiperforación."
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
      ]
    }
  ]
};
