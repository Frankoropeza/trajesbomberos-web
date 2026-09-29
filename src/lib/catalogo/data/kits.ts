// Datos del catálogo · sección «kits» (trajesbomberos.com).
// LITERAL PURO: sin funciones, sin mutaciones, sin plantillas. Se edita solo el texto;
// `astro check` valida la estructura contra ../types. Generado por scripts/emit_data.py
// (2026-09-29) a partir del contenido vigente; desde aquí se edita a mano o con Codex.
import type { Modelo, Seccion, Tipo } from '../types';

export const data: { seccion?: Seccion; tipos: Tipo[]; modelos: Modelo[] } = {
  "seccion": {
    "slug": "kits",
    "nombre": "Kits",
    "hero": {
      "src": "/images/catalogo/kits/hero-kits.avif",
      "alt": "Kits de equipo para bombero estructural, brigadista y forestal"
    }
  },
  "tipos": [
    {
      "slug": "kit-estructural",
      "seccion": "kits",
      "nombre": "Kit estructural para bombero",
      "nombreCard": "Kit estructural",
      "title": "Kit de bombero estructural: traje, casco, botas y guantes",
      "description": "Kit de bombero estructural con traje, casco, monja, guantes y botas para revisar cobertura, tallas e interfaz en una sola partida. Cotiza con ficha técnica.",
      "lead": "El kit estructural reúne en una sola cotización el traje, el casco, la capucha, los guantes y las botas que un bombero necesita para ataque interior. El ERA se cotiza aparte, según la operación.",
      "chips": [
        "Ataque estructural",
        "Interfaz de EPP",
        "ERA por separado",
        "Tallas por usuario"
      ],
      "resumen": [
        "Comprar por kit evita el problema más común del equipo estructural: piezas que no solapan entre sí. Nuestra referencia es el traje Romak Fire Profesional con Bullard LTX, Majestic PAC II, Veridian Fire Pro II y Croydon Filtrex.",
        "Cada pieza conserva su ficha y su estatus normativo. Cotizamos por usuario, con tallas escritas, y probamos cuello, puño y bota con el conjunto puesto antes de cerrar la partida."
      ],
      "imagen": {
        "src": "/images/catalogo/kits/tipo-kit-estructural.avif",
        "alt": "Kit estructural de protección para bombero",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      },
      "bloques": [
        {
          "eyebrow": "Qué es",
          "h2": "Un conjunto pensado para trabajar junto",
          "parrafos": [
            "En un incendio estructural el calor entra por las uniones: entre casco y capucha, entre manga y guante, entre pantalonera y bota. Un kit se arma para que esas uniones estén resueltas desde la compra.",
            "Eso no convierte al kit en un producto certificado como sistema. La certificación o declaración sigue siendo de cada pieza, y así la presentamos en la cotización."
          ]
        },
        {
          "eyebrow": "Cómo elegir",
          "id": "elegir",
          "h2": "Qué se define por usuario",
          "parrafos": [
            "Por cada elemento se escriben talla de chaquetón y pantalonera, talla de guante y de bota, color, bandas reflejantes y accesorios. Con esos datos el kit se entrega completo y se revisa pieza por pieza.",
            "El ERA queda fuera del kit a propósito: depende de la atmósfera, de la autonomía que necesita la guardia y del equipo que ya tiene la corporación. Si lo incluyes, se prueba con casco y capucha del mismo conjunto."
          ],
          "lista": [
            "Traje: Romak Fire Profesional, chaquetón y pantalonera",
            "Casco: Bullard LTX",
            "Capucha: Majestic PAC II",
            "Guantes: Veridian Fire Pro II GIS1017",
            "Botas: Croydon Filtrex BOT1002",
            "ERA: se cotiza aparte, según la operación"
          ]
        },
        {
          "eyebrow": "En servicio",
          "h2": "Registro, inspección y reposición",
          "parrafos": [
            "Cada kit se asigna a una persona y se registra con sus tallas y números de serie. Así se programan las inspecciones y se sabe qué reponer cuando una pieza se daña.",
            "Si una pieza cambia, el conjunto se vuelve a probar. Un guante de otro modelo o una capucha distinta pueden alterar la unión con el resto, aunque sean de buena calidad."
          ]
        }
      ],
      "especificacion": [
        {
          "campo": "Uso",
          "valor": "Combate estructural según análisis de riesgo"
        },
        {
          "campo": "Componentes",
          "valor": "Traje, casco, capucha, guantes y botas"
        },
        {
          "campo": "Respiración",
          "valor": "ERA opcional, definido por la operación"
        },
        {
          "campo": "Referencia",
          "valor": "Profesional Romak con configuración confirmada"
        },
        {
          "campo": "Validación",
          "valor": "Prueba de tallas y solapes por usuario"
        }
      ],
      "normas": [
        {
          "norma": "NFPA 1970 (antes NFPA 1971)",
          "alcance": "Referencia vigente del conjunto estructural; revisa la declaración de cada pieza."
        },
        {
          "norma": "UL NFPA 2018",
          "alcance": "Declaración de la ficha del guante Veridian Fire Pro II GIS1017 del ejemplo."
        },
        {
          "norma": "UL NFPA 1971 edición 2018",
          "alcance": "Listado referido para la capucha Majestic PAC II del ejemplo."
        }
      ],
      "errores": [
        "Comprar piezas sueltas sin probar sus solapes",
        "Tomar la declaración de una pieza como certificación del kit",
        "Omitir tallas, color o accesorios en la requisición",
        "Incluir ERA sin revisar la operación y la compatibilidad",
        "Sustituir una pieza al recibir sin volver a probar el conjunto"
      ],
      "faq": [
        {
          "q": "¿El kit estructural incluye ERA?",
          "a": "No. El ERA se cotiza aparte porque depende de la atmósfera, la autonomía requerida y la compatibilidad con el equipo que ya tiene tu corporación."
        },
        {
          "q": "¿Qué incluye el kit estructural para bombero?",
          "a": "Nuestra referencia es el traje Romak Fire Profesional, el casco Bullard LTX, la capucha Majestic PAC II, los guantes Veridian Fire Pro II y las botas Croydon Filtrex."
        },
        {
          "q": "¿El kit estructural está certificado como sistema?",
          "a": "No debe darse por hecho. La certificación o declaración es de cada pieza: el traje Profesional, la capucha PAC II y el guante Fire Pro II publican certificación UL, y el casco y la bota, declaraciones de su fabricante."
        },
        {
          "q": "¿Puedo cambiar una pieza del kit?",
          "a": "Sí, siempre que se vuelva a probar la unión con el resto del conjunto y que la cotización refleje la configuración final."
        },
        {
          "q": "¿Qué se revisa en la prueba del kit?",
          "a": "Que el casco asiente con la capucha, que el puño del guante quede bajo la manga y que la pantalonera cubra la bota al flexionar la rodilla, todo con movimientos reales de trabajo."
        }
      ],
      "duos": {
        "ficha": [
          "La tabla resume la partida: uso en combate estructural, componentes del kit, ERA como opción aparte y prueba de tallas y solapes por usuario.",
          "La referencia vigente del conjunto es NFPA 1970. Cada pieza, en cambio, conserva su propia certificación o declaración, y así debe quedar escrita en la cotización."
        ],
        "errores": [
          "Casi todos los errores con kits vienen de tratarlos como paquete cerrado y no como conjunto que se prueba.",
          "Estos cinco puntos conviene revisarlos antes de publicar una partida o de pedir cotización."
        ],
        "kit": [
          "Estos son los modelos de referencia que integran el kit estructural. Cada uno tiene su ficha técnica, con estatus normativo, tallas y accesorios.",
          "Si tu corporación ya usa alguna de estas piezas, dinos marca y modelo y ajustamos el kit para que lo nuevo embone con lo que ya funciona."
        ],
        "faq": [
          "Respondemos las dudas habituales sobre contenido, ERA, certificación y cambios de piezas del kit estructural.",
          "Si nos compartes cuántos elementos son y sus tallas, te mandamos la cotización del kit completo por WhatsApp."
        ]
      }
    },
    {
      "slug": "kit-brigadista",
      "seccion": "kits",
      "nombre": "Kit brigadista contra incendio",
      "nombreCard": "Kit brigadista",
      "title": "Kit de brigadista contra incendio NOM-002-STPS",
      "description": "Kit brigadista contra incendio con traje, casco, capucha, guantes y botas para definir una partida conforme al riesgo y procedimiento del centro de trabajo.",
      "lead": "El kit brigadista reúne traje, casco, capucha, guantes y botas para las tareas que tu centro de trabajo autoriza a su brigada, conforme a la NOM-002-STPS-2010.",
      "chips": [
        "Brigada de centro de trabajo",
        "Límite de intervención",
        "Configuración por tarea",
        "Recepción controlada"
      ],
      "resumen": [
        "Nuestra referencia es el traje Romak Fire Combate Básico BOM1001 con casco Bullard LTX, capucha CAP1005, guantes Firemax VI y botas Workman Fire BOT1004.",
        "Lo cotizamos por usuario, con tallas y tarea autorizada escritas. Un kit brigadista no autoriza por sí mismo el ataque interior: eso lo define el procedimiento de la brigada."
      ],
      "imagen": {
        "src": "/images/catalogo/kits/tipo-kit-brigadista.avif",
        "alt": "Kit brigadista contra incendio con piezas de protección",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      },
      "bloques": [
        {
          "eyebrow": "Qué es",
          "h2": "Equipo completo para la brigada de tu centro de trabajo",
          "parrafos": [
            "La NOM-002-STPS-2010 pide dotar a la brigada del equipo que corresponda a su riesgo. Un kit resuelve esa dotación de una vez, con piezas que se probaron juntas y un solo documento para la auditoría.",
            "El kit brigadista está pensado para respuesta inicial y conato. Si tu brigada entra a combatir con ERA, revisamos contigo el conjunto estructural, porque el alcance es distinto."
          ]
        },
        {
          "eyebrow": "Cómo elegir",
          "id": "elegir",
          "h2": "Tarea autorizada, tallas e identificación",
          "parrafos": [
            "Parte del procedimiento de la brigada: qué hace, hasta dónde llega y quién la integra. Con eso confirmamos que el kit de referencia corresponde, o proponemos ajustes.",
            "Después se definen tallas por persona, color, bandas e identificación. Todo se especifica antes de ordenar, para que el lote llegue completo y se pueda entregar a cada brigadista con su registro."
          ],
          "lista": [
            "Traje: Romak Fire Combate Básico BOM1001",
            "Casco: Bullard LTX CBOM1007",
            "Capucha: Romak Fire CAP1005",
            "Guantes: Romak Fire Firemax VI GIS1008",
            "Botas: Romak Fire Workman Fire BOT1004",
            "Por usuario: talla, color, identificación y tarea"
          ]
        },
        {
          "eyebrow": "En servicio",
          "h2": "Asignación, inspección y reposición",
          "parrafos": [
            "Cada kit se entrega a una persona y queda registrado. Después de un simulacro o una respuesta real, se revisa pieza por pieza y se aparta lo que tenga daño o condición dudosa.",
            "El registro también ayuda en la rotación de personal: cuando entra un brigadista nuevo, se sabe qué tallas hay disponibles y qué hay que pedir."
          ]
        }
      ],
      "especificacion": [
        {
          "campo": "Uso",
          "valor": "Brigada conforme a análisis de riesgo"
        },
        {
          "campo": "Componentes",
          "valor": "Traje, casco, capucha, guantes y botas"
        },
        {
          "campo": "Referencia",
          "valor": "Combate Básico Romak BOM1001"
        },
        {
          "campo": "Límite",
          "valor": "No sustituye conjunto estructural para ataque interior"
        },
        {
          "campo": "Control",
          "valor": "Asignación por usuario, talla y tarea autorizada"
        }
      ],
      "normas": [
        {
          "norma": "NOM-002-STPS-2010",
          "alcance": "La dotación de brigada se determina conforme al riesgo del centro de trabajo."
        }
      ],
      "errores": [
        "Equipar por apariencia y no por la tarea autorizada",
        "No definir el límite de intervención de la brigada",
        "Tomar el kit como autorización para ataque interior",
        "Agregar accesorios después de aprobar el kit",
        "Entregar equipo sin asignación individual"
      ],
      "faq": [
        {
          "q": "¿El kit brigadista sirve para ataque interior?",
          "a": "No debe darse por hecho. Esa operación exige revisar el conjunto estructural, el ERA y el procedimiento de la brigada."
        },
        {
          "q": "¿Qué incluye el kit brigadista contra incendio?",
          "a": "Nuestra referencia es el traje Combate Básico BOM1001, el casco Bullard LTX, la capucha CAP1005, los guantes Firemax VI y las botas Workman Fire. La configuración se confirma al cotizar."
        },
        {
          "q": "¿El kit brigadista cumple con la NOM-002-STPS-2010?",
          "a": "La norma pide dotar el equipo conforme al riesgo, sin fijar un kit. El kit cubre esa dotación cuando corresponde al análisis de riesgo de tu centro de trabajo."
        },
        {
          "q": "¿Qué norma declara el traje Combate Básico?",
          "a": "Sus materiales son conformes a NFPA 1971, según el fabricante. Es un estatus de materiales, no una certificación del conjunto, y así lo indicamos en la ficha."
        },
        {
          "q": "¿Por qué registrar cada entrega del kit?",
          "a": "Porque permite saber quién usa cada configuración, programar inspecciones y reponer piezas sin perder el control del equipo."
        }
      ],
      "duos": {
        "ficha": [
          "La tabla resume la partida: uso conforme al análisis de riesgo, componentes del kit, traje de referencia y control por usuario.",
          "La fila de límite es tan importante como las demás: el kit brigadista no sustituye al conjunto estructural para ataque interior."
        ],
        "errores": [
          "Los errores con kits de brigada casi siempre vienen de comprar antes de definir qué hará la brigada.",
          "Revisa estos cinco puntos contra tu procedimiento de respuesta antes de pedir cotización."
        ],
        "kit": [
          "Estos son los modelos de referencia del kit brigadista. Cada uno tiene su ficha, con el estatus normativo que publica su fabricante.",
          "Dos de ellos, la capucha CAP1005 y el guante Firemax VI, se publican sin norma declarada. Si tu pliego exige certificación en todas las piezas, ajustamos el kit."
        ],
        "faq": [
          "Respondemos las dudas habituales sobre contenido, alcance, normas de la STPS y registro del kit brigadista.",
          "Si nos compartes cuántos brigadistas son y su nivel de respuesta, te mandamos la cotización con el kit cerrado."
        ]
      }
    },
    {
      "slug": "kit-forestal",
      "seccion": "kits",
      "nombre": "Kit forestal para brigada",
      "nombreCard": "Kit forestal",
      "title": "Kit forestal para brigada y bombero de línea de fuego",
      "description": "Kit forestal con ropa, casco, goggles, guantes, bota y nuquera para armar la protección de línea de fuego según la tarea de la cuadrilla. Cotiza con ficha.",
      "lead": "El kit forestal reúne ropa, casco, goggles, guantes, bota y nuquera para trabajar en línea de fuego. Todo se prueba en movimiento, porque en el monte el equipo se usa el día entero.",
      "chips": [
        "Operación exterior",
        "Línea de fuego",
        "Movilidad de cuadrilla",
        "Casco con goggles y nuquera"
      ],
      "resumen": [
        "Nuestra referencia combina el overol Romak Fire Ranger Explorer BOMW1001 o el saco y pantalón BOMW1002 con el casco Bullard FH911H y los goggles ESS Striketeam XTO.",
        "Bota, guantes y nuquera se definen por talla y terreno. Cada pieza conserva su estatus normativo, y la referencia vigente del equipo forestal es NFPA 1950."
      ],
      "imagen": {
        "src": "/images/catalogo/kits/tipo-kit-forestal.avif",
        "alt": "Kit forestal para brigada de combate de incendios",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      },
      "bloques": [
        {
          "eyebrow": "Qué es",
          "h2": "Equipo para jornadas largas en línea de fuego",
          "parrafos": [
            "El incendio forestal exige ropa ligera que deje transpirar, un casco que no se mueva con el viento y goggles que sellen contra la ceniza. Si una pieza falla, la cuadrilla lo resiente durante horas.",
            "Por eso conviene comprar en conjunto: goggles probados con el casco, nuquera que no estorba a los goggles y bota adecuada al terreno donde trabaja la brigada."
          ]
        },
        {
          "eyebrow": "Cómo elegir",
          "id": "elegir",
          "h2": "Overol o saco y pantalón",
          "parrafos": [
            "El overol Fire Ranger Explorer cubre el cuerpo en una sola pieza y declara NFPA 1971-2018 según su fabricante. El saco y pantalón BOMW1002 permite quitarse la parte superior en descansos, y se publica sin norma declarada.",
            "La elección depende de la operación y del clima. En ambos casos se prueban casco, goggles y nuquera con la ropa puesta, caminando y agachándose."
          ],
          "lista": [
            "Ropa: Fire Ranger Explorer o BOMW1002",
            "Casco: Bullard Wildland FH911H",
            "Goggles: ESS Striketeam XTO",
            "Bota forestal: por talla y terreno",
            "Guantes: según la herramienta autorizada",
            "Nuquera: probada con casco y goggles"
          ]
        },
        {
          "eyebrow": "En servicio",
          "h2": "Limpieza e inspección después de cada jornada",
          "parrafos": [
            "Después de cada salida se sacude la ceniza, se revisa la ropa en costuras y cierres, y se limpian los goggles para que el lente no se raye. Las piezas dañadas se apartan y se registran.",
            "Una pieza que se repone se vuelve a probar con el resto: unos goggles nuevos pueden no ajustar igual con el casco que ya tiene la cuadrilla."
          ]
        }
      ],
      "especificacion": [
        {
          "campo": "Uso",
          "valor": "Incendio forestal y operación exterior"
        },
        {
          "campo": "Componentes",
          "valor": "Ropa, casco, goggles, guantes, bota y nuquera"
        },
        {
          "campo": "Referencia",
          "valor": "Fire Ranger Explorer o BOMW1002 con accesorios definidos"
        },
        {
          "campo": "Interfaz",
          "valor": "Casco, goggles y nuquera probados en movimiento"
        },
        {
          "campo": "Límite",
          "valor": "No sustituye equipo para ataque interior"
        }
      ],
      "normas": [
        {
          "norma": "NFPA 1950 (antes NFPA 1977)",
          "alcance": "Referencia vigente para equipo forestal; revisa la declaración de cada modelo."
        }
      ],
      "errores": [
        "Usar el kit forestal para ataque interior",
        "No probar goggles y nuquera con el casco",
        "Elegir la bota sin considerar el terreno",
        "Recibir el equipo sin registrar las piezas por persona",
        "Guardar ropa con ceniza sin inspeccionarla"
      ],
      "faq": [
        {
          "q": "¿Qué incluye el kit forestal para brigada?",
          "a": "Ropa Fire Ranger Explorer o BOMW1002, casco Bullard FH911H, goggles ESS Striketeam XTO, bota forestal, guantes y nuquera. La configuración se confirma al cotizar."
        },
        {
          "q": "¿Qué conviene más en incendio forestal, overol o saco y pantalón?",
          "a": "El overol protege en una sola pieza; el saco y pantalón permite ventilar en descansos. Depende del clima, de la operación y de la costumbre de la cuadrilla."
        },
        {
          "q": "¿Qué norma declaran los goggles ESS Striketeam XTO?",
          "a": "El fabricante declara NFPA 1500-2007, ANSI Z87.1-2010, CE EN 166 B y OSHA. Se prueban con el casco para confirmar el ajuste."
        },
        {
          "q": "¿El kit forestal sirve para un incendio en edificio?",
          "a": "No. Un escenario estructural requiere otro conjunto, otro procedimiento y, en general, ERA."
        },
        {
          "q": "¿Cómo se revisa la bota del kit forestal?",
          "a": "Caminando en pendiente con la talla del usuario, y después revisando agujetas, suela y unión con el pantalón en cada jornada."
        }
      ],
      "duos": {
        "ficha": [
          "La tabla resume la partida: uso en incendio forestal, componentes del kit, ropa de referencia e interfaz entre casco, goggles y nuquera.",
          "La referencia vigente del equipo forestal es NFPA 1950, antes NFPA 1977. Cada pieza conserva la declaración que publica su fabricante."
        ],
        "errores": [
          "En el monte, un kit mal armado se nota en las primeras horas: goggles que se empañan, nuquera que estorba o botas que no agarran.",
          "Estos cinco errores conviene revisarlos antes de equipar a toda la cuadrilla."
        ],
        "kit": [
          "Estos son los modelos de referencia que integran el kit forestal. El saco y pantalón BOMW1002 es la alternativa al overol Fire Ranger Explorer.",
          "Cada ficha muestra su estatus normativo. Si tu cuadrilla ya tiene parte del equipo, lo integramos al kit en lugar de duplicarlo."
        ],
        "faq": [
          "Respondemos las dudas habituales sobre contenido, ropa, goggles, alcance y bota del kit forestal.",
          "Si nos dices cuántos brigadistas son y en qué terreno trabajan, te mandamos la cotización del kit completo."
        ]
      }
    }
  ],
  "modelos": []
};
