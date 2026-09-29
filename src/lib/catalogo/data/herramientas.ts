// Datos del catálogo · sección «herramientas» (trajesbomberos.com).
// LITERAL PURO: sin funciones, sin mutaciones, sin plantillas. Se edita solo el texto;
// `astro check` valida la estructura contra ../types. Generado por scripts/emit_data.py
// (2026-09-29) a partir del contenido vigente; desde aquí se edita a mano o con Codex.
import type { Modelo, Seccion, Tipo } from '../types';

export const data: { seccion?: Seccion; tipos: Tipo[]; modelos: Modelo[] } = {
  "seccion": {
    "slug": "herramientas",
    "nombre": "Herramientas",
    "hero": {
      "src": "/images/catalogo/herramientas/hero-herramientas.avif",
      "alt": "Herramientas para entrada forzada y combate forestal"
    },
    "leyendaImagenIlustrativa": "Imagen ilustrativa. La configuración exacta se confirma por escrito en la cotización."
  },
  "tipos": [
    {
      "slug": "hacha-de-bombero",
      "seccion": "herramientas",
      "nombre": "Hacha de bombero",
      "nombreCard": "Hacha de bombero",
      "title": "Hacha de bombero para acceso y entrada forzada",
      "description": "Hacha de bombero que combina corte y golpe para acceso, retiro de material y entrada forzada: cabeza, mango, peso y resguardo. Datos para cotizar la partida.",
      "lead": "El hacha de bombero corta y golpea durante la entrada forzada y la ventilación. Tiene cabeza de acero forjado, a menudo con pico posterior, y mango de madera o de fibra de vidrio.",
      "bloques": [
        {
          "eyebrow": "Qué es",
          "h2": "Herramienta de corte y golpe para entrada forzada",
          "parrafos": [
            "El filo corta madera, lámina ligera y materiales de techo; el pico posterior perfora y sirve para hacer palanca pequeña. Con el lomo se golpea otra herramienta, como la barra Halligan, en la técnica de entrada forzada.",
            "El hacha de cabeza plana, sin pico, se prefiere cuando se trabaja en pareja con la Halligan. La de pico se usa más en ventilación de techos."
          ]
        },
        {
          "eyebrow": "Cómo elegir",
          "id": "elegir",
          "h2": "Cabeza, mango y resguardo",
          "parrafos": [
            "Define primero la forma de cabeza según la maniobra. Después el mango: la madera absorbe mejor la vibración y se inspecciona por astillas y resequedad; la fibra de vidrio resiste mejor la humedad y se revisa por grietas.",
            "Mide el soporte de la unidad con guantes puestos. El hacha tiene que salir sin golpear otras herramientas, y el filo tiene que viajar cubierto."
          ],
          "lista": [
            "Cabeza: filo y punta según maniobra",
            "Material: acero forjado",
            "Mango: madera o fibra de vidrio",
            "Longitud y peso declarados",
            "Funda para filo y punta",
            "Soporte y orientación en la unidad"
          ]
        },
        {
          "eyebrow": "En servicio",
          "h2": "Filo, mango y unión",
          "parrafos": [
            "Revisa el filo, la unión entre cabeza y mango y el estado del mango después de cada uso. Una cabeza con juego o un mango agrietado sacan el hacha de servicio.",
            "No enderezes ni temples la cabeza con calor, y no pintes el mango sobre grietas. Si el filo se mella, se afila con el método del fabricante."
          ]
        }
      ],
      "especificacion": [
        {
          "campo": "Uso principal",
          "valor": "Corte y golpe en maniobras autorizadas"
        },
        {
          "campo": "Materiales",
          "valor": "Acero forjado; mango de fibra de vidrio o madera según modelo"
        },
        {
          "campo": "Compra",
          "valor": "Define cabeza, mango, longitud y resguardo"
        }
      ],
      "normas": [
        {
          "norma": "Herramientas manuales: Hacha de bombero",
          "alcance": "No se publica una norma específica para hacha de bombero; confirma las especificaciones del fabricante en la cotización."
        }
      ],
      "resumen": [
        "Es de las herramientas más antiguas del oficio y sigue en todas las unidades. Se elige por la forma de la cabeza, el material del mango y cómo va a viajar en el vehículo.",
        "Todavía no publicamos un modelo, y no hay una norma específica para hachas de bombero. La cotizamos con la especificación que declare el fabricante, con funda y soporte definidos."
      ],
      "errores": [
        "Comprar sin definir la forma de la cabeza",
        "Transportar el filo sin funda",
        "Usar un hacha con la cabeza floja",
        "Reparar el mango con cinta o pegamento"
      ],
      "faq": [
        {
          "q": "¿Qué diferencia hay entre hacha de pico y hacha plana?",
          "a": "El hacha de pico tiene una punta posterior para perforar y hacer palanca pequeña; la plana tiene un lomo para golpear otra herramienta, como la barra Halligan, en entrada forzada."
        },
        {
          "q": "¿Qué es mejor para un hacha de bombero, mango de madera o de fibra de vidrio?",
          "a": "La madera absorbe mejor la vibración y es fácil de inspeccionar; la fibra de vidrio aguanta mejor la humedad. La decisión depende de cómo trabaja y guarda tu equipo sus herramientas."
        },
        {
          "q": "¿Hay una norma para hachas de bombero?",
          "a": "No se publica una norma específica para hachas de bombero. Por eso la cotización se basa en la especificación que declara el fabricante."
        },
        {
          "q": "¿Tienen modelos de hacha publicados?",
          "a": "Todavía no. La cotizamos según tu maniobra y el soporte de tu unidad, y te presentamos la ficha del fabricante antes de que decidas."
        }
      ],
      "imagen": {
        "src": "/images/catalogo/herramientas/tipo-hacha-de-bombero.avif",
        "alt": "Hacha de bombero para operación de bomberos",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      },
      "relacionados": [],
      "chips": [
        "Selección por maniobra",
        "Inspección física",
        "Resguardo seguro"
      ],
      "duos": {
        "ficha": [
          "La requisición de hacha de bombero indica el uso en corte y golpe durante maniobras autorizadas, los materiales y lo que se define al comprar: cabeza, mango, longitud y resguardo.",
          "No hay una norma específica para esta herramienta, así que la tabla no muestra certificación. La especificación llega con la ficha del fabricante."
        ],
        "errores": [
          "Con herramientas manuales los errores parecen menores, hasta que una cabeza floja o un filo descubierto lastiman a alguien en la unidad.",
          "Estos cuatro puntos conviene resolverlos desde la compra."
        ],
        "faq": [
          "Respondemos las dudas habituales sobre tipos de cabeza, mango, norma y modelos del hacha de bombero.",
          "Si nos compartes la maniobra y la medida del soporte de tu unidad, te decimos qué hacha conviene."
        ]
      }
    },
    {
      "slug": "barra-halligan",
      "seccion": "herramientas",
      "nombre": "Barra Halligan",
      "nombreCard": "Barra Halligan",
      "title": "Barra Halligan para bombero de entrada forzada",
      "description": "Barra Halligan para bombero: uso en entrada forzada, largo, material, mantenimiento y resguardo en la unidad. Datos necesarios para cotizar la partida.",
      "lead": "La barra Halligan es la herramienta de palanca del bombero: un extremo con horquilla, otro con cuña y un pico. Con ella se abren puertas, ventanas y cerraduras en la entrada forzada.",
      "bloques": [
        {
          "eyebrow": "Qué es",
          "h2": "La herramienta de palanca de la entrada forzada",
          "parrafos": [
            "La horquilla separa puertas del marco, la cuña entra en espacios estrechos y el pico perfora o rompe cerraduras. Trabajada en pareja con un hacha de cabeza plana, forma el juego clásico de entrada forzada.",
            "También se usa en rescate, para abrir espacio o estabilizar. Por su forma y su peso, tiene que viajar bien sujeta y con las puntas cubiertas."
          ]
        },
        {
          "eyebrow": "Cómo elegir",
          "id": "elegir",
          "h2": "Largo, material y resguardo",
          "parrafos": [
            "La longitud decide la fuerza de palanca y el espacio que ocupa en la unidad. La HAC1007 mide 91 cm y es de acero inoxidable, que resiste bien la corrosión.",
            "Antes de ordenar, mide el soporte de la unidad con guantes. La barra tiene que salir sin forzar sus extremos y quedar sujeta de forma que no golpee otras herramientas en el traslado."
          ],
          "lista": [
            "Marca: Romak Fire",
            "Código: HAC1007",
            "Material: acero inoxidable",
            "Largo declarado: 91 cm",
            "Peso declarado: 6 lb (3.36 kg)",
            "Uso: rescate y entrada forzada"
          ]
        },
        {
          "eyebrow": "En servicio",
          "h2": "Revisión y cuidado de la Halligan",
          "parrafos": [
            "Revisa rectitud del cuerpo, estado de horquilla, cuña y pico, y señales de corrosión. Una barra doblada pierde fuerza de palanca y puede resbalar durante la maniobra.",
            "No enderezes una barra doblada con calor ni a golpes: eso debilita el acero. Si se deformó, se retira y se reemplaza."
          ]
        }
      ],
      "especificacion": [
        {
          "campo": "Uso principal",
          "valor": "Apalancamiento en entrada forzada y rescate"
        },
        {
          "campo": "Material",
          "valor": "Acero según modelo"
        },
        {
          "campo": "Selección",
          "valor": "Longitud, extremos y método de resguardo"
        }
      ],
      "normas": [
        {
          "norma": "Herramientas manuales: Barra Halligan",
          "alcance": "No se publica una norma específica para barra halligan; confirma las especificaciones del fabricante en la cotización."
        }
      ],
      "resumen": [
        "Surtimos la Romak Fire HAC1007, de acero inoxidable, con 91 cm de largo, 90 cm de extremo a extremo y 6 lb, equivalentes a 3.36 kg, según su fabricante.",
        "Se publica sin norma aplicable, porque no existe una específica para esta herramienta. La cotizamos con funda para las puntas y soporte para tu unidad."
      ],
      "errores": [
        "Aceptar una Halligan sin longitud ni perfil de extremos",
        "Enderezar una barra doblada con calor o golpes",
        "Comprar un juego sin identificar cada herramienta",
        "Montar la barra sin protección para el pico"
      ],
      "faq": [
        {
          "q": "¿Qué es una barra Halligan?",
          "a": "Una herramienta de palanca para entrada forzada y rescate, con horquilla en un extremo y cuña y pico en el otro. Toma su nombre del bombero que la diseñó."
        },
        {
          "q": "¿Qué mide y cuánto pesa la barra Halligan Romak Fire HAC1007?",
          "a": "Su fabricante declara 91 cm de largo, 90 cm de extremo a extremo y 6 lb, equivalentes a 3.36 kg. Es de acero inoxidable."
        },
        {
          "q": "¿La barra Halligan sustituye al hacha?",
          "a": "No. La Halligan hace palanca; el hacha corta y golpea. En entrada forzada suelen usarse juntas."
        },
        {
          "q": "¿Qué se revisa al recibir una barra Halligan?",
          "a": "Rectitud del cuerpo, forma de horquilla, cuña y pico, y ausencia de corrosión. Después, que entre y salga del soporte de la unidad sin dejar los extremos expuestos."
        }
      ],
      "imagen": {
        "src": "/images/catalogo/herramientas/tipo-barra-halligan.avif",
        "alt": "Barra Halligan para operación de bomberos",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      },
      "relacionados": [
        "romak-hac1007"
      ],
      "chips": [
        "Selección por maniobra",
        "Inspección física",
        "Resguardo seguro"
      ],
      "duos": {
        "ficha": [
          "La requisición de barra Halligan indica el uso en apalancamiento para entrada forzada y rescate, el material y lo que se define al comprar: longitud, extremos y resguardo.",
          "No hay una norma específica para esta herramienta. La HAC1007 se publica sin norma aplicable, tal como la presenta su fabricante."
        ],
        "errores": [
          "La Halligan dura muchos años si se compra bien y se cuida. Casi todos los problemas vienen de barras dobladas o mal resguardadas.",
          "Revísalos antes de cerrar la partida; corregirlos después cuesta más."
        ],
        "modelos": [
          "Surtimos la Romak Fire HAC1007: acero inoxidable, extremos y pico para apalancamiento, 91 cm de largo y 6 lb de peso declarado.",
          "Su ficha la presenta para rescate y entrada forzada, sin norma aplicable. Si la necesitas junto con un hacha, te cotizamos ambas con su soporte."
        ],
        "faq": [
          "Respondemos las dudas habituales sobre qué es, medidas, uso con hacha y recepción de la barra Halligan.",
          "Si nos compartes cuántas unidades vas a equipar, te cotizamos la HAC1007 con funda y soporte."
        ]
      }
    },
    {
      "slug": "gancho-bichero",
      "seccion": "herramientas",
      "nombre": "Gancho bichero",
      "nombreCard": "Gancho bichero",
      "title": "Gancho bichero para bombero: alcance y remoción",
      "description": "Gancho bichero para bombero: alcanzar, jalar o revisar desde una posición segura; largo, cabezal, control, mantenimiento y datos para cotizar la partida.",
      "lead": "El gancho bichero es una pértiga con gancho y punta para jalar plafones, abrir huecos en muros ligeros y revisar desde una distancia segura. Se elige por longitud y material del asta.",
      "bloques": [
        {
          "eyebrow": "Qué es",
          "h2": "Alcance y control a distancia",
          "parrafos": [
            "El gancho engancha y jala; la punta perfora y empuja. Con un bichero se abre un plafón para revisar si el fuego avanzó por arriba, sin que el bombero quede bajo el material que se desprende.",
            "No es una herramienta de palanca. Si la maniobra pide apalancar, la herramienta correcta es la barra Halligan."
          ]
        },
        {
          "eyebrow": "Cómo elegir",
          "id": "elegir",
          "h2": "Longitud, gancho y material del asta",
          "parrafos": [
            "La longitud depende de la altura de los techos que atiende tu equipo y del espacio en la unidad. Un bichero largo alcanza más, pero se maneja peor en pasillos y escaleras.",
            "El asta puede ser de acero, madera o fibra de vidrio. Pruébala con casco, guantes y protección ocular, y pide protector de punta si viajará junto a mangueras o ERA."
          ],
          "lista": [
            "Uso: alcance, jalado o revisión",
            "Longitud total declarada",
            "Tipo de gancho y punta",
            "Asta: acero, madera o fibra de vidrio",
            "Protector de punta",
            "Soporte y orientación en la unidad"
          ]
        },
        {
          "eyebrow": "En servicio",
          "h2": "Cuándo se retira un bichero",
          "parrafos": [
            "Revisa la punta, el gancho y la unión con el asta después de cada uso. Un gancho deformado, un asta con fisuras o astillas, o una unión con juego sacan la herramienta de servicio.",
            "Guárdalo con la punta cubierta y orientada lejos de mangueras y ropa de protección, que pueden dañarse con un roce."
          ]
        }
      ],
      "especificacion": [
        {
          "campo": "Uso principal",
          "valor": "Alcance, jalado y revisión controlada"
        },
        {
          "campo": "Materiales",
          "valor": "Acero y mango según modelo"
        },
        {
          "campo": "Compra",
          "valor": "Define longitud, punta y soporte"
        }
      ],
      "normas": [
        {
          "norma": "Herramientas manuales: Gancho bichero",
          "alcance": "No se publica una norma específica para gancho bichero; confirma las especificaciones del fabricante en la cotización."
        }
      ],
      "resumen": [
        "Se usa sobre todo en revisión posterior a la extinción, para buscar fuego oculto en techos y muros, y en ventilación. Permite trabajar sin ponerse debajo de lo que cae.",
        "Todavía no publicamos un modelo, y no hay una norma específica para esta herramienta. Lo cotizamos por longitud, tipo de gancho, material del asta y soporte."
      ],
      "errores": [
        "Comprar un asta larga sin funda de punta ni soporte",
        "Usar el gancho para apalancar",
        "Guardar el gancho orientado hacia mangueras o ropa de protección",
        "Elegir la longitud sin medir la unidad"
      ],
      "faq": [
        {
          "q": "¿Para qué sirve el gancho bichero en un incendio?",
          "a": "Para abrir plafones y muros ligeros, revisar fuego oculto después de la extinción y ventilar, trabajando a distancia del material que cae."
        },
        {
          "q": "¿Qué debe incluir una cotización de gancho bichero?",
          "a": "Uso, longitud total, tipo de gancho, punta, material de asta, protector y soporte, con la especificación que declare el fabricante."
        },
        {
          "q": "¿Cuándo se retira un gancho bichero?",
          "a": "Cuando la punta o el gancho se deforman, el asta tiene fisuras o astillas, o la unión con la cabeza tiene juego."
        },
        {
          "q": "¿Tienen modelos de gancho bichero publicados?",
          "a": "Todavía no. Lo cotizamos según la longitud y el material que necesita tu equipo, y te presentamos la ficha antes de que decidas."
        }
      ],
      "imagen": {
        "src": "/images/catalogo/herramientas/tipo-gancho-bichero.avif",
        "alt": "Gancho bichero para operación de bomberos",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      },
      "relacionados": [],
      "chips": [
        "Selección por maniobra",
        "Inspección física",
        "Resguardo seguro"
      ],
      "duos": {
        "ficha": [
          "La requisición de gancho bichero indica el uso en alcance, jalado y revisión controlada, los materiales y lo que se define al comprar: longitud, punta y soporte.",
          "Esta herramienta no tiene una norma propia. La especificación llega con la ficha del fabricante del modelo propuesto."
        ],
        "errores": [
          "El bichero es sencillo, pero mal guardado daña otras piezas de la unidad y mal usado se deforma rápido.",
          "Son cuatro puntos sencillos de revisar antes de ordenar."
        ],
        "faq": [
          "Respondemos las dudas habituales sobre uso, cotización, retiro y modelos del gancho bichero.",
          "Si nos compartes la altura de techos que atiende tu equipo y el espacio en la unidad, te decimos qué longitud conviene."
        ]
      }
    },
    {
      "slug": "pulaski",
      "seccion": "herramientas",
      "nombre": "Pulaski",
      "nombreCard": "Pulaski",
      "title": "Pulaski: herramienta forestal de hacha y azadón",
      "description": "Pulaski para bombero forestal: hacha y azadón en una sola cabeza para brecha y línea de control. Selección, mango, afilado, resguardo y datos para cotizar.",
      "lead": "La Pulaski junta un hacha y un azadón en la misma cabeza. Es la herramienta más versátil de la línea de fuego: corta raíces y ramas y remueve suelo sin cambiar de herramienta.",
      "bloques": [
        {
          "eyebrow": "Qué es",
          "h2": "Hacha y azadón en una sola herramienta",
          "parrafos": [
            "El filo del hacha corta ramas y raíces; el azadón rasca y remueve tierra y combustible. Esa combinación permite construir línea de control con una sola herramienta en la mano.",
            "Su peso y su filo la hacen también una de las herramientas que más lesiones causa si se usa mal. La distancia entre brigadistas y el transporte con protector son parte del trabajo."
          ]
        },
        {
          "eyebrow": "Cómo elegir",
          "id": "elegir",
          "h2": "Mango, balance y cantidad",
          "parrafos": [
            "El mango de madera absorbe mejor la vibración y se inspecciona por astillas; el de fibra de vidrio resiste mejor la humedad y se revisa por grietas. Elige el que tu equipo puede mantener.",
            "Pruébala con el traje forestal, casco y guantes: el balance importa cuando se trabaja horas. Define también cuántas por cuadrilla y cómo viajarán en el vehículo."
          ],
          "lista": [
            "Cabeza: hacha y azadón",
            "Material de cabeza: acero",
            "Mango: madera o fibra de vidrio",
            "Largo y peso declarados",
            "Protector de filo para traslado",
            "Cantidad por cuadrilla y soporte"
          ]
        },
        {
          "eyebrow": "En servicio",
          "h2": "Filo, mango y protector",
          "parrafos": [
            "Después de cada jornada, limpia tierra y savia, revisa el filo y la unión de la cabeza, y afila si hace falta. Un filo sin mantenimiento obliga a golpear más y cansa antes a la cuadrilla.",
            "La Pulaski viaja siempre con protector de filo. Una cabeza con juego o un mango agrietado se retiran antes de la siguiente salida."
          ]
        }
      ],
      "especificacion": [
        {
          "campo": "Uso principal",
          "valor": "Trabajo forestal de línea y remoción"
        },
        {
          "campo": "Cabeza",
          "valor": "Hacha y azadón"
        },
        {
          "campo": "Materiales",
          "valor": "Acero; mango según modelo"
        }
      ],
      "normas": [
        {
          "norma": "Herramientas manuales: Pulaski",
          "alcance": "No se publica una norma específica para pulaski; confirma las especificaciones del fabricante en la cotización."
        }
      ],
      "resumen": [
        "En incendio forestal se usa para abrir brecha, cortar vegetación y raspar hasta el suelo mineral. Por eso aparece en casi todas las cuadrillas.",
        "No hay modelo publicado todavía ni una norma específica que la regule. La cotizamos por cabeza, mango, protector y cantidad por cuadrilla."
      ],
      "errores": [
        "Transportar la Pulaski sin protector de filo",
        "Usar una cabeza con juego en el mango",
        "Comprar sin probar el balance con el equipo puesto",
        "No definir la cantidad por cuadrilla"
      ],
      "faq": [
        {
          "q": "¿Para qué sirve la Pulaski en incendio forestal?",
          "a": "Para construir línea de control: el hacha corta ramas y raíces, y el azadón remueve suelo y combustible hasta dejar tierra mineral."
        },
        {
          "q": "¿Qué diferencia hay entre Pulaski y McLeod?",
          "a": "La Pulaski corta y excava; el McLeod rastrilla y raspa combustible fino. En una cuadrilla suelen trabajar juntas."
        },
        {
          "q": "¿Hay una norma para la Pulaski?",
          "a": "No se publica una norma específica para esta herramienta. La cotización se basa en la especificación del fabricante."
        },
        {
          "q": "¿Tienen modelos de Pulaski publicados?",
          "a": "Todavía no. La cotizamos según tu cuadrilla y te presentamos la ficha del fabricante antes de que decidas."
        }
      ],
      "imagen": {
        "src": "/images/catalogo/herramientas/tipo-pulaski.avif",
        "alt": "Pulaski para operación de bomberos",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      },
      "relacionados": [],
      "chips": [
        "Selección por maniobra",
        "Inspección física",
        "Resguardo seguro"
      ],
      "duos": {
        "ficha": [
          "La requisición de Pulaski indica el uso en trabajo forestal de línea y remoción, la cabeza de hacha y azadón, y el material de cabeza y mango.",
          "No hay una norma específica para esta herramienta, así que la tabla no muestra certificación. La especificación llega con la ficha del fabricante."
        ],
        "errores": [
          "La Pulaski es de las herramientas forestales que más accidentes causan cuando se transporta o se usa sin cuidado.",
          "Estos cuatro errores conviene evitarlos desde la compra y en cada jornada."
        ],
        "faq": [
          "Respondemos las dudas habituales sobre uso, diferencias con el McLeod, norma y modelos de la Pulaski.",
          "Si nos dices cuántas cuadrillas vas a equipar y qué herramientas ya tienen, te ayudamos a definir la cantidad."
        ]
      }
    },
    {
      "slug": "mcleod",
      "seccion": "herramientas",
      "nombre": "McLeod",
      "nombreCard": "McLeod",
      "title": "McLeod: herramienta forestal de rastrillo y azadón",
      "description": "McLeod para bombero forestal: rastrillo y azadón para raspar la línea de control hasta suelo mineral. Selección, mango, mantenimiento y datos para cotizar.",
      "lead": "El McLeod combina una hoja tipo azadón con una hilera de dientes de rastrillo. En línea de fuego sirve para raspar la capa superficial y juntar hojarasca y combustible fino.",
      "bloques": [
        {
          "eyebrow": "Qué es",
          "h2": "Rastrillo y azadón para combustible fino",
          "parrafos": [
            "Por un lado, los dientes juntan hojas, agujas y ramas pequeñas; por el otro, la hoja raspa la capa de materia orgánica hasta el suelo mineral. Su cabeza ancha cubre mucha superficie en cada pasada.",
            "No corta. Si la línea tiene raíces o ramas gruesas, se combina con Pulaski; si solo hay material ligero, un rastrillo forestal puede bastar."
          ]
        },
        {
          "eyebrow": "Cómo elegir",
          "id": "elegir",
          "h2": "Ancho de cabeza y soporte",
          "parrafos": [
            "La cabeza ancha rinde más, pero pesa más y ocupa más espacio en el vehículo. Pide ancho y material declarados por el fabricante para comparar ofertas.",
            "El soporte del vehículo tiene que proteger los dientes y el filo de la hoja, sin presionarlos. Con el EPP puesto, el McLeod debe salir sin golpear mochilas ni mangueras."
          ],
          "lista": [
            "Tipo: hoja y dientes",
            "Material y ancho de cabeza declarados",
            "Mango y dimensiones declaradas",
            "Dientes y hoja en la partida",
            "Cantidad por línea o reserva",
            "Soporte que no presione dientes ni borde"
          ]
        },
        {
          "eyebrow": "En servicio",
          "h2": "Dientes, hoja y mango",
          "parrafos": [
            "Revisa que los dientes estén rectos y completos, que la hoja no tenga grietas y que la cabeza no tenga juego. Un diente doblado se endereza solo si el fabricante lo permite.",
            "Limpia tierra y ceniza al final de cada jornada y guarda el McLeod en su soporte. Un mango agrietado se reemplaza antes de volver a salir."
          ]
        }
      ],
      "especificacion": [
        {
          "campo": "Uso principal",
          "valor": "Manejo de combustible vegetal y suelo"
        },
        {
          "campo": "Cabeza",
          "valor": "Rastrillo y azadón"
        },
        {
          "campo": "Compra",
          "valor": "Define dientes, mango y dimensiones"
        }
      ],
      "normas": [
        {
          "norma": "Herramientas manuales: McLeod",
          "alcance": "No se publica una norma específica para mcleod; confirma las especificaciones del fabricante en la cotización."
        }
      ],
      "resumen": [
        "Es la herramienta de acabado de la línea de control: después de que la Pulaski corta y abre, el McLeod limpia y deja el suelo sin combustible.",
        "Aún no tenemos modelo en catálogo, y esta herramienta no tiene una norma propia. Lo cotizamos por ancho de cabeza, dientes, mango y soporte."
      ],
      "errores": [
        "Usar el McLeod para cortar raíces o ramas",
        "Guardarlo con los dientes presionados",
        "Comprar sin ancho ni material declarados",
        "Ignorar grietas en la hoja"
      ],
      "faq": [
        {
          "q": "¿Para qué sirve el McLeod en incendio forestal?",
          "a": "Para raspar la capa superficial y juntar combustible fino, dejando la línea de control limpia hasta el suelo mineral."
        },
        {
          "q": "¿Qué diferencia hay entre McLeod y rastrillo forestal?",
          "a": "El McLeod suma una hoja tipo azadón para raspar suelo; el rastrillo forestal solo mueve material ligero con sus dientes."
        },
        {
          "q": "¿Hay una norma para el McLeod?",
          "a": "No se publica una norma específica para esta herramienta. La cotización se basa en la especificación del fabricante."
        },
        {
          "q": "¿Tienen modelos de McLeod publicados?",
          "a": "Todavía no. Lo cotizamos según tu cuadrilla y te presentamos la ficha del fabricante antes de que decidas."
        }
      ],
      "imagen": {
        "src": "/images/catalogo/herramientas/tipo-mcleod.avif",
        "alt": "McLeod para operación de bomberos",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      },
      "relacionados": [],
      "chips": [
        "Selección por maniobra",
        "Inspección física",
        "Resguardo seguro"
      ],
      "duos": {
        "ficha": [
          "La requisición de McLeod indica el uso en manejo de combustible vegetal y suelo, la cabeza de rastrillo y azadón, y lo que se define al comprar: dientes, mango y dimensiones.",
          "No existe una norma específica que la regule. La especificación llega con la ficha del fabricante del modelo propuesto."
        ],
        "errores": [
          "El McLeod se daña casi siempre por usarlo para algo que no es suyo o por guardarlo mal.",
          "Conviene tenerlos en cuenta desde la primera cotización."
        ],
        "faq": [
          "Respondemos las dudas habituales sobre uso, diferencias con el rastrillo, norma y modelos del McLeod.",
          "Si nos compartes el tipo de vegetación donde trabaja tu cuadrilla, te decimos qué combinación de herramientas conviene."
        ]
      }
    },
    {
      "slug": "rastrillo-forestal",
      "seccion": "herramientas",
      "nombre": "Rastrillo forestal",
      "nombreCard": "Rastrillo forestal",
      "title": "Rastrillo forestal para bombero y brigada",
      "description": "Rastrillo forestal para bombero: limpieza de combustible ligero en la línea de control; dientes, mango, mantenimiento y datos para cotizar la partida.",
      "lead": "El rastrillo forestal mueve hojas, agujas, ramas ligeras y ceniza. Es la herramienta para juntar combustible fino en la preparación de la línea y en la liquidación.",
      "bloques": [
        {
          "eyebrow": "Qué es",
          "h2": "Rastrillo para combustible ligero",
          "parrafos": [
            "Sus dientes están pensados para arrastrar material suelto sin clavarse en el suelo. Es más ligero que un McLeod y permite trabajar rápido en zonas de hojarasca o pastizal.",
            "No sustituye a las herramientas de corte ni de raspado. En una cuadrilla, el rastrillo completa el trabajo de la Pulaski y el McLeod."
          ]
        },
        {
          "eyebrow": "Cómo elegir",
          "id": "elegir",
          "h2": "Dientes, ancho y mango",
          "parrafos": [
            "El tipo de diente y el ancho de cabeza se eligen según el combustible más común en tu zona. Pide material y número de dientes declarados por el fabricante para comparar ofertas.",
            "El mango tiene que unirse firme a la cabeza. El soporte del vehículo debe orientar las puntas lejos de bolsas de EPP, mangueras y redes de carga."
          ],
          "lista": [
            "Uso: combustible vegetal ligero",
            "Material y ancho de cabeza declarados",
            "Número o configuración de dientes",
            "Tipo y longitud de mango",
            "Cantidad por cuadrilla o vehículo",
            "Soporte que cubra y oriente los dientes"
          ]
        },
        {
          "eyebrow": "En servicio",
          "h2": "Revisión de dientes y unión",
          "parrafos": [
            "Revisa que ningún diente esté roto o muy doblado y que la cabeza no tenga juego. Un rastrillo con dientes faltantes deja material en la línea.",
            "Limpia ceniza y resina al final de la jornada y guárdalo en su soporte. Los dientes se deforman si viajan bajo otras herramientas."
          ]
        }
      ],
      "especificacion": [
        {
          "campo": "Uso principal",
          "valor": "Manejo de combustible vegetal"
        },
        {
          "campo": "Cabeza",
          "valor": "Dientes según modelo"
        },
        {
          "campo": "Compra",
          "valor": "Material, mango y configuración de dientes"
        }
      ],
      "normas": [
        {
          "norma": "Herramientas manuales: Rastrillo forestal",
          "alcance": "No se publica una norma específica para rastrillo forestal; confirma las especificaciones del fabricante en la cotización."
        }
      ],
      "resumen": [
        "Trabaja donde no hace falta cortar ni raspar suelo: solo retirar material ligero para que el fuego no avance por él.",
        "Todavía no hay modelo publicado; tampoco existe una norma específica para ella. Lo cotizamos por dientes, ancho, mango y soporte para el vehículo."
      ],
      "errores": [
        "Usar el rastrillo para raspar suelo o cortar",
        "Transportarlo con los dientes descubiertos",
        "Elegir dientes que no corresponden al combustible de la zona",
        "Ignorar una unión floja entre cabeza y mango"
      ],
      "faq": [
        {
          "q": "¿Para qué sirve el rastrillo forestal?",
          "a": "Para juntar y retirar hojas, agujas, ramas ligeras y ceniza durante la preparación de la línea y la liquidación del incendio."
        },
        {
          "q": "¿Qué diferencia hay entre rastrillo forestal y McLeod?",
          "a": "El rastrillo solo mueve material ligero; el McLeod tiene además una hoja tipo azadón para raspar suelo."
        },
        {
          "q": "¿Hay una norma para el rastrillo forestal?",
          "a": "No se publica una norma específica para esta herramienta. La cotización se basa en la especificación del fabricante."
        },
        {
          "q": "¿Tienen modelos de rastrillo forestal publicados?",
          "a": "Todavía no. Lo cotizamos según el combustible de tu zona y te presentamos la ficha antes de que decidas."
        }
      ],
      "imagen": {
        "src": "/images/catalogo/herramientas/tipo-rastrillo-forestal.avif",
        "alt": "Rastrillo forestal para operación de bomberos",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      },
      "relacionados": [],
      "chips": [
        "Selección por maniobra",
        "Inspección física",
        "Resguardo seguro"
      ],
      "duos": {
        "ficha": [
          "La requisición de rastrillo forestal indica el uso en manejo de combustible vegetal, la configuración de dientes y lo que se define al comprar: material, mango y dientes.",
          "No se publica una norma dedicada a esta herramienta. La especificación llega con la ficha del fabricante del modelo propuesto."
        ],
        "errores": [
          "El rastrillo es la herramienta más sencilla de la línea, y por eso a veces se elige sin pensar en el combustible de la zona.",
          "Estos cuatro puntos se revisan en minutos y evitan una devolución."
        ],
        "faq": [
          "Respondemos las dudas habituales sobre uso, diferencias con el McLeod, norma y modelos del rastrillo forestal.",
          "Si nos dices en qué tipo de vegetación trabaja tu cuadrilla, te ayudamos a elegir los dientes."
        ]
      }
    },
    {
      "slug": "batefuego",
      "seccion": "herramientas",
      "nombre": "Batefuego",
      "nombreCard": "Batefuego",
      "title": "Batefuego para combate de incendio forestal",
      "description": "Batefuego para bombero forestal: sofocar fuego de pasto y material ligero; paleta, mango, peso, mantenimiento y resguardo. Datos para cotizar la partida.",
      "lead": "El batefuego es una pala flexible montada en un mango, que sofoca llama baja en pastizal y hojarasca. Funciona por contacto: apaga la llama al golpear y quitarle aire.",
      "bloques": [
        {
          "eyebrow": "Qué es",
          "h2": "Sofocar llama baja por contacto",
          "parrafos": [
            "La pala flexible se apoya sobre la llama y la aplasta, cortando el oxígeno. La flexibilidad importa: una pala rígida rebota y levanta brasas en lugar de sofocar.",
            "Se usa en pastizales y hojarasca, en el borde de la línea y en la liquidación. Frente a llamas altas, combustibles pesados o viento intenso, la cuadrilla necesita otra estrategia."
          ]
        },
        {
          "eyebrow": "Cómo elegir",
          "id": "elegir",
          "h2": "Pala, mango y transporte",
          "parrafos": [
            "Pide material y forma de la pala declarados por el fabricante, para no recibir una pala rígida de excavación en una partida forestal. La longitud del mango tiene que dar distancia a la llama sin forzar la postura.",
            "Define el soporte en el vehículo: la pala no debe viajar prensada ni doblada, porque pierde forma y deja de hacer contacto uniforme."
          ],
          "lista": [
            "Aplicación: combustible vegetal ligero",
            "Pala flexible: material y forma",
            "Mango: material y longitud",
            "Cantidad por brigada o vehículo",
            "Soporte sin compresión de la pala",
            "Fijación entre pala y mango"
          ]
        },
        {
          "eyebrow": "En servicio",
          "h2": "Cuándo se retira la pala",
          "parrafos": [
            "Revisa la pala después de cada jornada, incluso debajo de la ceniza pegada: una rajadura, un corte o una deformación permanente impiden el contacto uniforme. También revisa la fijación con el mango.",
            "Una pala dañada se reemplaza. Recortarla, enderezarla a golpes o prensarla en el vehículo solo alarga el problema."
          ]
        }
      ],
      "especificacion": [
        {
          "campo": "Uso principal",
          "valor": "Control de llama baja en vegetación"
        },
        {
          "campo": "Componentes",
          "valor": "Pala flexible y mango según modelo"
        },
        {
          "campo": "Selección",
          "valor": "Condiciones de uso, longitud y resguardo"
        }
      ],
      "normas": [
        {
          "norma": "Herramientas manuales: Batefuego",
          "alcance": "No se publica una norma específica para batefuego; confirma las especificaciones del fabricante en la cotización."
        }
      ],
      "resumen": [
        "Es útil en fuegos de baja intensidad, con llama baja y combustible ligero. En combustibles pesados o con viento fuerte, deja de ser la herramienta adecuada.",
        "Aún no publicamos modelo, y no se publica una norma específica para esta herramienta. Lo cotizamos por material y forma de la pala, longitud del mango y soporte."
      ],
      "errores": [
        "Confundir pala flexible con pala rígida de excavación",
        "Transportar la pala prensada o doblada",
        "Recortar una pala dañada para seguir usándola",
        "Ignorar rajaduras debajo de la ceniza"
      ],
      "faq": [
        {
          "q": "¿Para qué sirve el batefuego?",
          "a": "Para sofocar llama baja en pastizal y hojarasca, aplastándola con la pala flexible para cortar el oxígeno."
        },
        {
          "q": "¿Cuándo no conviene usar batefuego?",
          "a": "Con llamas altas, combustibles pesados o viento fuerte. En esas condiciones la cuadrilla necesita otras herramientas y otra táctica."
        },
        {
          "q": "¿Qué debe pedir una brigada al cotizar batefuegos?",
          "a": "Material y forma de la pala flexible, mango, longitud, cantidad y método de soporte. Esos datos evitan recibir una pala rígida o una que no cabe en el resguardo."
        },
        {
          "q": "¿Tienen modelos de batefuego publicados?",
          "a": "Todavía no. Lo cotizamos según tu brigada y te presentamos la ficha del fabricante antes de que decidas."
        }
      ],
      "imagen": {
        "src": "/images/catalogo/herramientas/tipo-batefuego.avif",
        "alt": "Batefuego para operación de bomberos",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      },
      "relacionados": [],
      "chips": [
        "Selección por maniobra",
        "Inspección física",
        "Resguardo seguro"
      ],
      "duos": {
        "ficha": [
          "La requisición de batefuego indica el uso en control de llama baja en vegetación, los componentes y lo que se define al comprar: condiciones de uso, longitud y resguardo.",
          "Esta herramienta no cuenta con una norma específica. La especificación llega con la ficha del fabricante del modelo propuesto."
        ],
        "errores": [
          "El batefuego funciona solo si la pala conserva su forma. Casi todos los errores tienen que ver con cómo se transporta y se revisa.",
          "Estos cuatro puntos conviene resolverlos desde la compra."
        ],
        "faq": [
          "Respondemos las dudas habituales sobre uso, límites, cotización y modelos del batefuego.",
          "Si nos dices cuántas brigadas vas a equipar y cómo se reparten en vehículos, te ayudamos a definir la cantidad."
        ]
      }
    },
    {
      "slug": "bomba-de-mochila-forestal",
      "seccion": "herramientas",
      "nombre": "Bomba de mochila forestal",
      "nombreCard": "Bomba de mochila forestal",
      "title": "Bomba de mochila forestal para incendio de vegetación",
      "description": "Bomba de mochila forestal para bombero: agua para apoyo puntual en vegetación; capacidad, arnés y mantenimiento que la hacen confiable. Datos para cotizar.",
      "lead": "La bomba de mochila forestal lleva agua a la espalda del brigadista para aplicarla donde más se necesita: brasas, puntos calientes y bordes de la línea. Depósito, bomba, manguera, boquilla y arnés trabajan juntos.",
      "bloques": [
        {
          "eyebrow": "Qué es",
          "h2": "Agua a la espalda para aplicación puntual",
          "parrafos": [
            "En liquidación y en frentes de baja intensidad, un chorro dirigido apaga brasas y enfría puntos calientes con poca agua. La mochila permite hacerlo caminando por terreno donde no entra un vehículo.",
            "Tiene un límite claro: cuando se vacía hay que volver a llenar. Por eso se planea junto con puntos de llenado y rutas de reabasto."
          ]
        },
        {
          "eyebrow": "Cómo elegir",
          "id": "elegir",
          "h2": "Capacidad, bomba y arnés",
          "parrafos": [
            "Pide capacidad declarada, tipo de bomba y boquilla, no solo un depósito. La mochila completa tiene que funcionar como circuito: llenar, cargar, bombear y descargar.",
            "Pruébala llena, con el traje forestal y el casco puestos, caminando en pendiente. El arnés tiene que repartir la carga sin cortar la circulación ni lastimar los hombros."
          ],
          "lista": [
            "Capacidad declarada por fabricante",
            "Depósito y tapa",
            "Tipo de bomba",
            "Manguera y boquilla",
            "Arnés y correas",
            "Sellos y repuestos compatibles"
          ]
        },
        {
          "eyebrow": "En servicio",
          "h2": "Estanqueidad, limpieza y secado",
          "parrafos": [
            "Antes de cada salida se hace una prueba de estanqueidad y descarga: tapa, sellos, conexiones, manguera, bomba y boquilla. Una fuga moja la espalda del brigadista y desperdicia agua.",
            "Después de usarla, vacía el depósito y déjalo secar. El agua estancada daña sellos y favorece sedimentos. Si tu brigada tiene varias mochilas, conviene que sean del mismo modelo para compartir repuestos."
          ]
        }
      ],
      "especificacion": [
        {
          "campo": "Uso principal",
          "valor": "Aplicación puntual de agua en vegetación"
        },
        {
          "campo": "Componentes",
          "valor": "Depósito, bomba, manguera, boquilla y arnés"
        },
        {
          "campo": "Mantenimiento",
          "valor": "Prueba de estanqueidad, limpieza y secado"
        }
      ],
      "normas": [
        {
          "norma": "Herramientas manuales: Bomba de mochila forestal",
          "alcance": "No se publica una norma específica para bomba de mochila forestal; confirma las especificaciones del fabricante en la cotización."
        }
      ],
      "resumen": [
        "Se usa para aplicación puntual, no para abastecimiento continuo. Su valor está en llegar a lugares donde no llega una línea de manguera.",
        "El catálogo todavía no tiene modelo, y la herramienta no cuenta con norma propia. La cotizamos por capacidad declarada, tipo de bomba y repuestos compatibles."
      ],
      "errores": [
        "Pedir una mochila sin identificar bomba, boquilla y arnés",
        "Guardar agua estancada en el depósito",
        "Estandarizar sin confirmar sellos ni mangueras de repuesto",
        "Volver a usar una unidad con fuga o correa dañada"
      ],
      "faq": [
        {
          "q": "¿Para qué sirve la bomba de mochila forestal?",
          "a": "Para aplicar agua de forma puntual en brasas, puntos calientes y bordes de la línea, sobre todo en liquidación y en lugares donde no llega una manguera."
        },
        {
          "q": "¿Qué prueba se hace antes de salir con la mochila?",
          "a": "Una prueba de estanqueidad y descarga: tapa, sellos, conexiones, manguera, bomba y boquilla. También se ajusta el arnés con el traje forestal puesto."
        },
        {
          "q": "¿Qué se necesita para reponer una bomba de mochila?",
          "a": "El modelo compatible, capacidad, tipo de bomba, boquilla, tapa, manguera, arnés y repuestos. Las conexiones y sellos deben corresponder a la misma configuración."
        },
        {
          "q": "¿Tienen modelos de bomba de mochila publicados?",
          "a": "Todavía no. La cotizamos según tu operación y te presentamos la ficha del fabricante, con capacidad declarada, antes de que decidas."
        }
      ],
      "imagen": {
        "src": "/images/catalogo/herramientas/tipo-bomba-de-mochila-forestal.avif",
        "alt": "Bomba de mochila forestal para operación de bomberos",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      },
      "relacionados": [],
      "chips": [
        "Selección por maniobra",
        "Inspección física",
        "Resguardo seguro"
      ],
      "duos": {
        "ficha": [
          "La requisición de bomba de mochila indica el uso en aplicación puntual de agua en vegetación, sus componentes y el mantenimiento: prueba de estanqueidad, limpieza y secado.",
          "No hay norma propia para este tipo de herramienta. Capacidad y componentes llegan con la ficha del fabricante del modelo propuesto."
        ],
        "errores": [
          "Una mochila que falla en el monte obliga a regresar por agua o por repuestos. Casi todos estos errores se evitan en la compra.",
          "Revisa estos cuatro puntos antes de pedir cotización."
        ],
        "faq": [
          "Respondemos las dudas habituales sobre uso, pruebas, repuestos y modelos de la bomba de mochila forestal.",
          "Si nos compartes cuántas mochilas necesitas y dónde se reabastecen, te ayudamos a definir la configuración."
        ]
      }
    }
  ],
  "modelos": [
    {
      "id": "romak-hac1007",
      "seccion": "herramientas",
      "tipo": "barra-halligan",
      "marca": "Romak Fire",
      "fabricante": "Romak Fire",
      "nombre": "Barra Halligan",
      "codigo": "HAC1007",
      "material": "Acero inoxidable",
      "peso": "6 lb (3.36 kg)",
      "estatusNorma": "no-aplica",
      "title": "Barra Halligan Romak Fire HAC1007 | México",
      "description": "Barra Halligan Romak Fire HAC1007 de acero inoxidable, 91 cm y 6 lb, para rescate y entrada forzada. Consulta configuración y cotización en México.",
      "caracteristicas": [
        "Extremos y pico para apalancamiento",
        "91 cm de largo; 90 cm de extremo a extremo",
        "Peso declarado de 6 lb (3.36 kg)",
        "Para operaciones de rescate y entrada forzada"
      ],
      "descripcion": [
        "Elige la Romak Fire HAC1007 si tu orden requiere una barra Halligan de acero inoxidable para rescate y entrada forzada, con extremos y pico para apalancamiento. Escribe HAC1007, 91 cm de largo, 90 cm de extremo a extremo y 6 lb —3.36 kg—; así cotizamos el modelo identificado y no una barra similar por imagen o nombre.",
        "La HAC1007 declara acero inoxidable y un peso de 6 lb —3.36 kg—. Durante la prueba con guantes, casco y protección ocular, revisamos que sus 91 cm entren en el soporte, que los 90 cm de extremo a extremo no rocen el compartimiento y que pico y extremos permanezcan protegidos; elige otro montaje si la extracción exige forzar la barra.",
        "Pide la barra con funda de puntas y soporte cuando viajará junto con hacha, mangueras o ERA. Nosotros confirmamos la compatibilidad con tu casco, guantes y el espacio de la unidad; si formará parte de un conjunto de entrada, escribe cada herramienta por separado para que HAC1007 conserve acero inoxidable, dimensiones y accesorios propios en la orden.",
        "En operación, la HAC1007 corresponde a rescate y entrada forzada dentro de tu procedimiento autorizado. Antes de aceptar un lote, probamos rectitud, extremos, pico, retención y liberación con guantes, además de cotejar 91 cm, 90 cm de extremo a extremo y 6 lb —3.36 kg— contra la orden; rechaza cualquier variación que cambie soporte o resguardo.",
        "El catálogo declara HAC1007 sin norma aplicable, por lo que la presentamos como estatus sin norma, nunca como certificación. Antes y después de una intervención revisamos corrosión, doblez, punta deformada y abertura anormal; retira la barra de acero inoxidable si pierde geometría, registra el daño y solicita evaluación técnica sin calentarla ni soldarla."
      ],
      "faq": [
        {
          "q": "¿Cuál es el código del modelo?",
          "a": "El código publicado es HAC1007. Inclúyelo junto con la marca Romak Fire en la requisición para diferenciar esta barra de Halligan de otras longitudes o geometrías disponibles."
        },
        {
          "q": "¿De qué material es?",
          "a": "El material declarado para HAC1007 es acero inoxidable. La recepción debe confirmar ese dato con la identificación del modelo y revisar que el acabado no oculte corrosión, golpes o alteraciones de los extremos."
        },
        {
          "q": "¿Qué longitud declara?",
          "a": "El modelo declara 91 cm de largo y 90 cm de extremo a extremo. Conserva ambas medidas en la orden porque sirven para validar el soporte, la holgura del compartimiento y la protección de puntas."
        },
        {
          "q": "¿Cuál es su peso declarado?",
          "a": "El peso declarado es 6 lb, equivalente a 3.36 kg. Úsalo para comparar logística y soporte, pero prueba la extracción con guantes y la configuración real de la unidad antes de asignarla."
        },
        {
          "q": "¿La imagen identifica la configuración final?",
          "a": "No. La imagen representa el tipo de barra Halligan; la compra debe confirmar por escrito HAC1007, acero inoxidable, dimensiones, extremos y cualquier funda o soporte incluido en la partida."
        },
        {
          "q": "¿Tiene norma publicada en el catálogo?",
          "a": "No aplica una norma publicada para esta barra dentro del catálogo. Solicita el modelo, material y dimensiones declaradas, y conserva esos datos como criterio de recepción e inventario institucional."
        }
      ],
      "imagen": {
        "src": "/images/catalogo/herramientas/tipo-barra-halligan.avif",
        "alt": "Imagen ilustrativa de barra Halligan para entrada forzada",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      },
      "resumen": [
        "La Romak Fire HAC1007 es una barra Halligan de acero inoxidable para rescate y entrada forzada, con extremos y pico para apalancamiento, 91 cm de largo y 6 lb —3.36 kg— declarados. Elige este modelo si tu orden requiere esa geometría y el soporte libera la barra con guantes.",
        "Cotizamos HAC1007 con 90 cm de extremo a extremo, funda de puntas y soporte si tu unidad lo necesita. Escríbenos por WhatsApp con tu configuración de casco, guantes y compartimiento; revisamos que los 91 cm entren sin rozar equipo y confirmamos la partida."
      ]
    }
  ]
};
