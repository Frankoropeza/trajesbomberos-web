// Datos del catálogo · sección «rescate» (trajesbomberos.com).
// LITERAL PURO: sin funciones, sin mutaciones, sin plantillas. Se edita solo el texto;
// `astro check` valida la estructura contra ../types. Generado por scripts/emit_data.py
// (2026-09-29) a partir del contenido vigente; desde aquí se edita a mano o con Codex.
import type { Modelo, Seccion, Tipo } from '../types';

export const data: { seccion?: Seccion; tipos: Tipo[] } = {
  "seccion": {
    "slug": "rescate",
    "nombre": "Rescate",
    "hero": {
      "src": "/images/catalogo/rescate/hero-rescate.avif",
      "alt": "Equipo de rescate para bomberos"
    },
    "leyendaImagenIlustrativa": "Imagen ilustrativa. Marca, modelo y configuración exactos se confirman por escrito en la cotización."
  },
  "tipos": [
    {
      "slug": "herramienta-hidraulica-de-rescate",
      "seccion": "rescate",
      "nombre": "Herramienta hidráulica de rescate",
      "nombreCard": "Herramienta hidráulica de rescate",
      "title": "Quijadas de la vida: herramienta hidráulica de rescate",
      "description": "Quijadas de la vida para bomberos: separador, cizalla y ram hidráulicos; fuerza de corte, alimentación y mantenimiento para extricación. Cotiza con ficha.",
      "lead": "La herramienta hidráulica de rescate, conocida como quijadas de la vida, abre, corta y separa la estructura de un vehículo para liberar a una persona atrapada. Separador, cortador, combinada y cilindro cumplen funciones distintas.",
      "imagen": {
        "src": "/images/catalogo/rescate/tipo-herramienta-hidraulica-de-rescate.avif",
        "alt": "Herramienta hidráulica de rescate para operaciones de rescate",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      },
      "relacionados": [
        "/trajes/extricacion/",
        "/guantes/guante-rescate-extricacion/"
      ],
      "errores": [
        "Comprar la cabeza de trabajo sin su fuente de energía",
        "Elegir por una fuerza que el fabricante no declara",
        "No considerar el espacio disponible en la unidad",
        "Operar sin entrenamiento en la maniobra"
      ],
      "faq": [
        {
          "q": "¿Qué son las quijadas de la vida?",
          "a": "Es el nombre común de las herramientas hidráulicas de rescate, sobre todo el separador y la combinada, que se usan para liberar a personas atrapadas en vehículos."
        },
        {
          "q": "¿Qué diferencia hay entre separador, cortador y combinada?",
          "a": "El separador abre y empuja para crear espacio, el cortador corta postes y perfiles, y la combinada hace ambas tareas con menos rendimiento que cada herramienta dedicada."
        },
        {
          "q": "¿Tienen modelos de herramienta hidráulica publicados?",
          "a": "Todavía no. La cotizamos según las maniobras de tu equipo y te presentamos la ficha del fabricante, con fuerzas y aperturas declaradas, antes de que decidas."
        },
        {
          "q": "¿Qué conviene más, herramienta hidráulica o de batería?",
          "a": "Depende de la operación. La hidráulica trabaja con bomba y mangueras; la de batería permite moverse con libertad, pero exige gestionar la carga. Lo revisamos contigo según el tipo de rescate que atiendes."
        }
      ],
      "especificacion": [
        {
          "campo": "Uso principal",
          "valor": "Extricación vehicular y rescate técnico"
        },
        {
          "campo": "Tipos",
          "valor": "Separador, cortador, combinada y cilindros"
        },
        {
          "campo": "Norma",
          "valor": "La que declare el fabricante para el modelo"
        }
      ],
      "bloques": [
        {
          "eyebrow": "Qué es",
          "h2": "Herramientas para abrir espacio en un vehículo",
          "parrafos": [
            "La herramienta hidráulica entra después de estabilizar el vehículo y controlar la escena. Su trabajo es crear un acceso seguro hacia el paciente: abrir una puerta, retirar el techo o desplazar el tablero.",
            "Cada función resuelve un problema distinto, y una cabeza de trabajo sola no sirve de nada sin su fuente de energía, mangueras o batería. Por eso se cotiza como sistema, no como pieza suelta."
          ]
        },
        {
          "eyebrow": "Cómo elegir",
          "id": "elegir",
          "h2": "Función, energía y accesorios",
          "parrafos": [
            "Empieza por las maniobras que hace tu equipo y el espacio de la unidad. Una combinada puede bastar a una brigada que atiende pocos rescates; un cuerpo con alta demanda suele necesitar separador y cortador por separado.",
            "La energía cambia la operación: los equipos hidráulicos dependen de bomba y mangueras, y los de batería dan más libertad de movimiento a cambio de gestionar la carga. Pide fuerza, apertura y peso tal como los declara el fabricante."
          ],
          "lista": [
            "Herramienta: separador, cortador, combinada o cilindro",
            "Energía: fuente hidráulica o batería compatible",
            "Conexión: mangueras y acoples cuando correspondan",
            "Accesorios: cargador y transporte",
            "Maniobra: puntos de acceso y apoyo",
            "Norma: la que declare el fabricante"
          ]
        },
        {
          "eyebrow": "En servicio",
          "h2": "Revisión después de cada rescate",
          "parrafos": [
            "Después de cada uso se revisan cuchillas, puntas, mangueras, acoples y, en equipos de batería, el estado de carga. Una cuchilla despostillada o una fuga en un acople sacan la herramienta de servicio.",
            "Limpia con el método del fabricante, sobre todo si hubo contacto con fluidos del vehículo o del paciente. Registra cada mantenimiento: estas herramientas tienen piezas de desgaste que conviene reponer a tiempo."
          ]
        }
      ],
      "resumen": [
        "En extricación vehicular cada herramienta tiene su papel: el separador crea espacio, el cortador corta postes y perfiles, la combinada hace las dos cosas y el cilindro empuja entre dos puntos.",
        "Todavía no publicamos un modelo. Cotizamos cada función con su fuente de energía, hidráulica o batería, y con los datos que declare el fabricante, sin atribuir fuerzas ni aperturas que no estén en su ficha."
      ],
      "duos": {
        "ficha": [
          "La requisición de herramienta hidráulica indica uso en extricación vehicular o rescate técnico, las funciones que se necesitan y la norma que declare el fabricante del modelo.",
          "Como aún no publicamos modelo, la tabla no muestra fuerzas ni aperturas. Esos datos solo aparecen en la cotización, con la documentación del fabricante."
        ],
        "errores": [
          "La herramienta de rescate es una inversión grande, y los errores de compra suelen descubrirse en la primera práctica.",
          "Estos cuatro puntos conviene resolverlos antes de pedir cotización."
        ],
        "faq": [
          "Respondemos las dudas habituales sobre funciones, energía y modelos de la herramienta hidráulica de rescate.",
          "Si nos compartes cuántos rescates vehiculares atiende tu equipo y qué unidad los lleva, te ayudamos a definir la configuración."
        ]
      }
    },
    {
      "slug": "arnes-de-rescate",
      "seccion": "rescate",
      "nombre": "Arnés de rescate",
      "nombreCard": "Arnés de rescate",
      "title": "Arnés de rescate para bomberos clase I, II y III",
      "description": "Arnés de rescate para bomberos: clase I, II y III, puntos de anclaje, tallas e inspección conforme a NFPA 2500. Cotiza con ficha técnica por maniobra.",
      "lead": "El arnés de rescate une al rescatista con el sistema de cuerda. Se elige por clase, talla y puntos de conexión, y se prueba puesto sobre el equipo que se usa en la maniobra.",
      "imagen": {
        "src": "/images/catalogo/rescate/tipo-arnes-de-rescate.avif",
        "alt": "Arnés de rescate para operaciones de rescate",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      },
      "relacionados": [
        "/trajes/extricacion/",
        "/guantes/guante-rescate-extricacion/"
      ],
      "errores": [
        "Comprar el arnés sin definir la clase",
        "Elegir la talla sin probarla sobre el traje",
        "Mezclar conectores sin revisar compatibilidad",
        "Usar un arnés sin registro de inspección"
      ],
      "faq": [
        {
          "q": "¿Qué norma aplica al arnés de rescate para bombero?",
          "a": "La referencia es NFPA 2500, que absorbió a la NFPA 1983 de cuerda y equipo de rescate. Pide que la cotización indique qué declara el modelo."
        },
        {
          "q": "¿Tienen modelos de arnés de rescate publicados?",
          "a": "Todavía no. Lo cotizamos por clase y talla, y te presentamos la ficha del fabricante antes de que decidas."
        },
        {
          "q": "¿Cuándo se retira un arnés de rescate?",
          "a": "Cuando tiene cortes, quemaduras, costuras dañadas o herrajes deformados, y siempre después de soportar una caída o una carga anormal."
        },
        {
          "q": "¿Se puede usar un arnés industrial para rescate?",
          "a": "Depende de su clase y de lo que declare el fabricante. Muchos arneses industriales están pensados para detención de caídas y no para rescate con cuerda."
        }
      ],
      "especificacion": [
        {
          "campo": "Uso principal",
          "valor": "Rescate con cuerda según clase y maniobra"
        },
        {
          "campo": "Referencia",
          "valor": "NFPA 2500 (antes NFPA 1983)"
        },
        {
          "campo": "Compra",
          "valor": "Clase, talla, conexiones y trazabilidad"
        }
      ],
      "normas": [
        {
          "norma": "NFPA 2500",
          "alcance": "Referencia para equipo de rescate con cuerda; verifica la declaración del modelo."
        }
      ],
      "bloques": [
        {
          "eyebrow": "Qué es",
          "h2": "El punto de unión entre el rescatista y la cuerda",
          "parrafos": [
            "En acceso, descenso, ascenso o posicionamiento, el arnés sostiene al rescatista y, en algunos casos, también al paciente. Tiene que repartir la carga en piernas y cintura, y dejar los anillos a la mano.",
            "Un arnés no es una prenda genérica. La clase, los puntos de conexión y el rango de ajuste dependen de la maniobra que tu equipo practica."
          ]
        },
        {
          "eyebrow": "Cómo elegir",
          "id": "elegir",
          "h2": "Clase, talla y puntos de conexión",
          "parrafos": [
            "Define primero la clase que necesita tu maniobra y los puntos de conexión que vas a usar: ventral, dorsal o laterales. Después, la talla de cada rescatista.",
            "La prueba se hace sobre el traje, con casco y guantes: perneras ajustadas, banda dorsal centrada y cada anillo al alcance de la mano sin cintas retorcidas."
          ],
          "lista": [
            "Clase de arnés requerida",
            "Talla y rango de ajuste",
            "Puntos de conexión declarados",
            "Cintas, hebillas y anillos",
            "Compatibilidad con cuerda y conectores",
            "Marcado e instructivo del fabricante"
          ]
        },
        {
          "eyebrow": "En servicio",
          "h2": "Inspección antes y después de cada uso",
          "parrafos": [
            "Revisa cintas, costuras, hebillas y anillos antes de cada práctica. Un corte, una quemadura, una costura abierta o una hebilla deformada sacan al arnés de servicio.",
            "Lleva un registro por arnés con fecha de entrada en servicio, usos e inspecciones. Un arnés que soportó una caída o una carga fuera de lo normal se retira aunque se vea bien."
          ]
        }
      ],
      "resumen": [
        "La referencia para equipo de rescate con cuerda es NFPA 2500, que absorbió a la NFPA 1983. Define las clases de arnés según la carga y el tipo de maniobra.",
        "Todavía no publicamos un modelo. Lo cotizamos por clase, talla y conexiones, con la declaración del fabricante y compatibilidad con la cuerda y los conectores de tu equipo."
      ],
      "duos": {
        "ficha": [
          "Para requisitar arnés de rescate indica el uso según clase y maniobra, la referencia NFPA 2500 y los datos de compra: clase, talla, conexiones y trazabilidad.",
          "El código de producto se agrega cuando elegimos el modelo contigo. Clase declarada, resistencia y marcado llegan con la ficha del modelo propuesto."
        ],
        "errores": [
          "En rescate con cuerda, un error de compra afecta a todo el sistema. El arnés tiene que corresponder a la cuerda y a los conectores.",
          "Estos cuatro puntos conviene revisarlos antes de pedir cotización."
        ],
        "faq": [
          "Respondemos las dudas habituales sobre norma, modelos, retiro y uso de arneses industriales.",
          "Si nos compartes qué maniobras hace tu equipo y cuántos rescatistas son, te proponemos una configuración."
        ]
      }
    },
    {
      "slug": "cuerda-de-rescate",
      "seccion": "rescate",
      "nombre": "Cuerda de rescate",
      "nombreCard": "Cuerda de rescate",
      "title": "Cuerda de rescate kernmantle estática para bomberos",
      "description": "Cuerda de rescate para bomberos: kernmantle estática, diámetro, longitud, terminaciones y registro de uso para rescate vertical. Cotiza con ficha técnica.",
      "lead": "La cuerda de rescate es una cuerda estática tipo kernmantle: un núcleo que carga el peso y una funda que lo protege. Se elige por diámetro, longitud y función dentro del sistema.",
      "imagen": {
        "src": "/images/catalogo/rescate/tipo-cuerda-de-rescate.avif",
        "alt": "Cuerda de rescate para operaciones de rescate",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      },
      "relacionados": [
        "/trajes/extricacion/",
        "/guantes/guante-rescate-extricacion/"
      ],
      "errores": [
        "Comprar diámetro sin revisar descensores y conectores",
        "Cortar tramos sin registrar su nueva identificación",
        "Guardar la cuerda húmeda o junto a químicos",
        "Usar una cuerda sin historial de inspección"
      ],
      "faq": [
        {
          "q": "¿Qué cuerda se usa en rescate de bomberos?",
          "a": "Cuerda estática tipo kernmantle, con diámetro compatible con los descensores y conectores del equipo. La referencia para equipo de rescate con cuerda es NFPA 2500."
        },
        {
          "q": "¿Se puede usar cuerda de escalada para rescate?",
          "a": "La cuerda dinámica de escalada se estira para absorber caídas y dificulta el control de cargas. En rescate se usa cuerda estática."
        },
        {
          "q": "¿Cada cuánto se revisa una cuerda de rescate?",
          "a": "Antes y después de cada uso, además de las inspecciones periódicas que defina el fabricante. Cada revisión se anota en su historial."
        },
        {
          "q": "¿Tienen modelos de cuerda de rescate publicados?",
          "a": "Todavía no. La cotizamos por diámetro, longitud y función, y te presentamos la ficha del fabricante antes de que decidas."
        }
      ],
      "especificacion": [
        {
          "campo": "Uso principal",
          "valor": "Rescate con cuerda estática kernmantle"
        },
        {
          "campo": "Referencia",
          "valor": "NFPA 2500"
        },
        {
          "campo": "Selección",
          "valor": "Diámetro, longitud y compatibilidad de sistema"
        }
      ],
      "normas": [
        {
          "norma": "NFPA 2500",
          "alcance": "Referencia para rescate con cuerda; verifica la declaración del modelo."
        }
      ],
      "bloques": [
        {
          "eyebrow": "Qué es",
          "h2": "Cuerda estática para cargas de rescate",
          "parrafos": [
            "Una cuerda estática se estira muy poco bajo carga, lo que permite controlar un descenso o un izado con precisión. Es distinta a una cuerda dinámica de escalada, que se estira para absorber una caída.",
            "La construcción kernmantle separa funciones: el núcleo aporta la resistencia y la funda soporta el roce contra bordes y dispositivos. Por eso se inspecciona palmo a palmo."
          ]
        },
        {
          "eyebrow": "Cómo elegir",
          "id": "elegir",
          "h2": "Diámetro, longitud y función",
          "parrafos": [
            "El diámetro depende de tus descensores y conectores; cambiarlo sin revisar el resto del sistema es un riesgo. La longitud se calcula por el recorrido más largo que atiende tu equipo, más lo necesario para anclar.",
            "Define también la función de cada cuerda y cómo se identifica: por color, por marca o por etiqueta. En una escena con varias líneas, confundir la principal con el respaldo no es opción."
          ],
          "lista": [
            "Tipo: estática kernmantle",
            "Diámetro y longitud solicitados",
            "Función: principal, respaldo o acceso",
            "Terminaciones identificadas",
            "Bolsa para resguardo",
            "Marcado e historial de inspección"
          ]
        },
        {
          "eyebrow": "En servicio",
          "h2": "Inspección, lavado y retiro",
          "parrafos": [
            "Después de cada uso, pasa la cuerda por las manos buscando zonas rígidas, aplastadas, con cortes en la funda o cambios de diámetro. Guárdala limpia y seca en su bolsa, lejos de químicos y de la luz solar.",
            "Cada cuerda lleva un historial de usos, cargas e inspecciones. Una cuerda sin historial no vuelve a servicio solo porque se vea nueva."
          ]
        }
      ],
      "resumen": [
        "En un sistema de rescate cada cuerda tiene un papel: línea principal, respaldo o acceso. El diámetro tiene que corresponder a los descensores y conectores que usa tu equipo.",
        "Todavía no publicamos un modelo. La cotizamos por diámetro, longitud y terminaciones, con la declaración NFPA 2500 que publique el fabricante y sin atribuir resistencias que no estén en su ficha."
      ],
      "duos": {
        "ficha": [
          "Para requisitar cuerda de rescate indica el uso con cuerda estática kernmantle, la referencia NFPA 2500 y los datos de selección: diámetro, longitud y compatibilidad con el sistema.",
          "Como aún no publicamos modelo, la tabla no muestra resistencia ni código. Esos datos llegan con la documentación del fabricante."
        ],
        "errores": [
          "La cuerda es la parte del sistema que más se desgasta y la que menos se nota dañada a simple vista.",
          "Estos cuatro errores conviene evitarlos desde la compra y en cada guardado."
        ],
        "faq": [
          "Respondemos las dudas habituales sobre tipo de cuerda, inspección y modelos para rescate.",
          "Si nos compartes los descensores que usa tu equipo y el recorrido más largo que atiende, te ayudamos a definir diámetro y longitud."
        ]
      }
    },
    {
      "slug": "mosquetones-de-rescate",
      "seccion": "rescate",
      "nombre": "Mosquetones de rescate",
      "nombreCard": "Mosquetones de rescate",
      "title": "Mosquetones de seguridad para rescate de bomberos",
      "description": "Mosquetones de seguridad para rescate: acero o aluminio, seguro automático o de rosca, resistencia marcada y compatibilidad del sistema. Cotiza con ficha.",
      "lead": "Los mosquetones de rescate conectan arnés, cuerda, anclajes y dispositivos. Se eligen por material, forma, tipo de seguro y resistencia marcada por el fabricante.",
      "imagen": {
        "src": "/images/catalogo/rescate/tipo-mosquetones-de-rescate.avif",
        "alt": "Mosquetones de rescate para operaciones de rescate",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      },
      "relacionados": [
        "/trajes/extricacion/",
        "/guantes/guante-rescate-extricacion/"
      ],
      "errores": [
        "Comprar sin revisar la resistencia marcada",
        "Elegir un seguro que no se opera con guantes",
        "Cargar el mosquetón de lado o con el gatillo abierto",
        "Usar conectores sin identificación ni registro"
      ],
      "faq": [
        {
          "q": "¿Qué mosquetón conviene para rescate, acero o aluminio?",
          "a": "El acero resiste mejor el desgaste y se usa en anclajes y puntos de roce; el aluminio pesa menos y se prefiere cuando se carga mucho equipo. Muchos equipos combinan ambos."
        },
        {
          "q": "¿Qué significan los kN marcados en un mosquetón?",
          "a": "Es la resistencia que declara el fabricante en cada dirección: eje mayor, eje menor y con el gatillo abierto. Se lee en el cuerpo del conector."
        },
        {
          "q": "¿Cuándo se retira un mosquetón de rescate?",
          "a": "Si cayó desde altura sobre una superficie dura, si el gatillo no cierra solo, si el seguro falla o si tiene desgaste o rebabas visibles."
        },
        {
          "q": "¿Tienen modelos de mosquetón publicados?",
          "a": "Todavía no. Los cotizamos por material, forma y seguro, y te presentamos la ficha del fabricante antes de que decidas."
        }
      ],
      "especificacion": [
        {
          "campo": "Uso principal",
          "valor": "Conexión en sistemas de rescate"
        },
        {
          "campo": "Materiales",
          "valor": "Acero o aluminio según modelo"
        },
        {
          "campo": "Referencia",
          "valor": "NFPA 2500; verifica la declaración del modelo"
        }
      ],
      "normas": [
        {
          "norma": "NFPA 2500",
          "alcance": "Referencia para conectores de rescate; verifica la declaración del modelo."
        }
      ],
      "bloques": [
        {
          "eyebrow": "Qué es",
          "h2": "Conectores para sistemas de rescate",
          "parrafos": [
            "Un mosquetón une dos elementos del sistema y trabaja en una sola dirección: a lo largo de su eje mayor. Cargado de lado o con el gatillo abierto, su resistencia baja mucho.",
            "Por eso importa elegir la forma correcta para cada conexión y entrenar su uso. Un sistema de rescate tiene tantos puntos débiles como conectores mal colocados."
          ]
        },
        {
          "eyebrow": "Cómo elegir",
          "id": "elegir",
          "h2": "Material, forma y seguro",
          "parrafos": [
            "Acero para puntos de mucho roce o anclajes fijos; aluminio cuando el peso del equipo es una limitante. La forma, en D, oval o de pera, depende de lo que se conecta y de cómo se orienta la carga.",
            "El seguro de rosca es sencillo y confiable si se revisa; el automático cierra solo, pero puede ser más difícil de operar con guantes gruesos. La prueba con el guante de tu equipo decide."
          ],
          "lista": [
            "Material: acero o aluminio",
            "Forma: D, oval o pera según uso",
            "Seguro: de rosca o automático",
            "Resistencia marcada por el fabricante",
            "Cantidad y uso asignado",
            "Compatibilidad con arnés y dispositivos"
          ]
        },
        {
          "eyebrow": "En servicio",
          "h2": "Revisión de gatillo, nariz y seguro",
          "parrafos": [
            "Antes de cada uso, abre y cierra el gatillo y comprueba que regresa solo y que el seguro bloquea. Revisa que la nariz no tenga rebabas que puedan cortar la cuerda.",
            "Un mosquetón que cayó desde altura sobre una superficie dura, que tiene desgaste marcado o un gatillo que no cierra se retira. Registra cada pieza para saber dónde se ha usado."
          ]
        }
      ],
      "resumen": [
        "El acero resiste mejor el desgaste y el aluminio pesa menos. La forma y el seguro, de rosca o automático, dependen de dónde se abre el conector y con qué guantes.",
        "Todavía no publicamos un modelo. Los cotizamos por uso, con la resistencia en kN marcada en cada pieza y la declaración NFPA 2500 del fabricante."
      ],
      "duos": {
        "ficha": [
          "La requisición de mosquetones indica uso en conexión de sistemas de rescate, material según modelo y referencia NFPA 2500, verificando la declaración de cada pieza.",
          "Como aún no publicamos modelo, la tabla no muestra resistencia. La lees en el cuerpo del conector y en la ficha del fabricante que te entregamos."
        ],
        "errores": [
          "Los mosquetones son piezas pequeñas y baratas frente al resto del sistema, y por eso a veces se compran sin el mismo cuidado.",
          "Estos cuatro errores conviene evitarlos en la compra y en el entrenamiento."
        ],
        "faq": [
          "Respondemos las dudas habituales sobre material, resistencia y retiro de mosquetones de rescate.",
          "Si nos compartes qué arneses y dispositivos usa tu equipo, te decimos qué conectores conviene cotizar."
        ]
      }
    },
    {
      "slug": "kit-de-rescate-vertical",
      "seccion": "rescate",
      "nombre": "Kit de rescate vertical",
      "nombreCard": "Kit de rescate vertical",
      "title": "Kit de rescate vertical para bomberos con cuerda y arnés",
      "description": "Kit de rescate vertical para bomberos: cuerda, arnés, descensor, poleas y anclajes compatibles en una sola partida. Cotiza el equipo con ficha técnica.",
      "lead": "El kit de rescate vertical reúne cuerda, arneses, mosquetones, dispositivos y anclajes para una secuencia concreta de acceso, descenso, ascenso o evacuación.",
      "imagen": {
        "src": "/images/catalogo/rescate/tipo-kit-de-rescate-vertical.avif",
        "alt": "Kit de rescate vertical para operaciones de rescate",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      },
      "relacionados": [
        "/trajes/extricacion/",
        "/guantes/guante-rescate-extricacion/"
      ],
      "errores": [
        "Comprar un kit cerrado sin revisar las maniobras de tu equipo",
        "Llamar certificado al kit completo cuando la declaración es por pieza",
        "No identificar cada componente por separado",
        "Salir sin revisar el inventario"
      ],
      "faq": [
        {
          "q": "¿Qué incluye un kit de rescate vertical para bomberos?",
          "a": "Cuerda estática, arneses, mosquetones, descensor, poleas y anclajes, además de bolsas para su resguardo. La cantidad y el tipo dependen de la maniobra y del número de rescatistas."
        },
        {
          "q": "¿El kit de rescate vertical está certificado?",
          "a": "La declaración NFPA 2500 es de cada componente, no del kit como conjunto. Así lo presentamos en la cotización."
        },
        {
          "q": "¿Tienen kits de rescate vertical publicados?",
          "a": "Todavía no publicamos un kit cerrado. Lo armamos con tu equipo según sus maniobras y te presentamos la ficha de cada componente."
        },
        {
          "q": "¿Se puede ampliar un kit de rescate vertical?",
          "a": "Sí, siempre que las piezas nuevas sean compatibles con las existentes y queden registradas en el inventario del kit."
        }
      ],
      "especificacion": [
        {
          "campo": "Uso principal",
          "valor": "Rescate vertical según maniobra definida"
        },
        {
          "campo": "Componentes",
          "valor": "Cuerda, arnés, conectores, dispositivos y resguardo"
        },
        {
          "campo": "Referencia",
          "valor": "NFPA 2500"
        }
      ],
      "normas": [
        {
          "norma": "NFPA 2500",
          "alcance": "Referencia para sistemas de rescate con cuerda; verifica cada componente."
        }
      ],
      "bloques": [
        {
          "eyebrow": "Qué es",
          "h2": "Un sistema completo para trabajar en altura",
          "parrafos": [
            "El rescate vertical necesita que cada pieza funcione con las demás: la cuerda con el descensor, el descensor con el mosquetón, el mosquetón con el arnés. Un kit resuelve esa compatibilidad desde la compra.",
            "Lo que no resuelve es el entrenamiento. El mejor kit no sustituye a un equipo que practica sus maniobras y conoce los límites de cada componente."
          ]
        },
        {
          "eyebrow": "Cómo elegir",
          "id": "elegir",
          "h2": "Maniobra, usuarios y longitudes",
          "parrafos": [
            "Parte de la secuencia que vas a ejecutar y del número de rescatistas. Con eso se define cuántos arneses y de qué tallas, qué longitud de cuerda, cuántos conectores y qué dispositivos.",
            "Pide cada componente identificado por separado dentro de la cotización. Así se puede revisar pieza por pieza y reponer lo que se dañe sin comprar un kit nuevo."
          ],
          "lista": [
            "Maniobra y secuencia de rescate",
            "Usuarios y arneses por talla",
            "Cuerda: diámetro y longitud",
            "Mosquetones por material y seguro",
            "Dispositivos y anclajes identificados",
            "Bolsa, marcado e inventario"
          ]
        },
        {
          "eyebrow": "En servicio",
          "h2": "Inventario antes de cada salida",
          "parrafos": [
            "El kit se revisa contra su inventario antes de cada salida y después de cada uso. Una pieza que falta o que se dañó se repone antes de que el kit vuelva a la unidad.",
            "Cada componente conserva su propio registro. Cuando una cuerda o un arnés se retira, el kit se actualiza, para que nadie salga con un sistema incompleto."
          ]
        }
      ],
      "resumen": [
        "Un kit no es un paquete universal: se arma para las maniobras que tu equipo practica y para el número de rescatistas que lo van a usar.",
        "Todavía no publicamos un kit cerrado. Lo cotizamos componente por componente, con la declaración NFPA 2500 de cada pieza y un inventario que permite revisarlo antes de cada salida."
      ],
      "duos": {
        "ficha": [
          "La requisición de kit de rescate vertical indica la maniobra definida, los componentes del sistema y la referencia NFPA 2500 para cada uno.",
          "Como aún no publicamos un kit cerrado, la tabla describe lo que debe contener y no un código de producto."
        ],
        "errores": [
          "Los kits de rescate fallan cuando se compran como paquete y no como sistema que se revisa y se mantiene.",
          "Estos cuatro errores conviene evitarlos desde la cotización."
        ],
        "faq": [
          "Respondemos las dudas habituales sobre contenido, certificación y ampliación del kit de rescate vertical.",
          "Si nos compartes las maniobras que hace tu equipo y cuántos rescatistas son, te proponemos la lista de componentes."
        ]
      }
    }
  ]
};
