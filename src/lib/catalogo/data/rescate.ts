// Datos del catálogo · sección «rescate» (trajesbomberos.com).
// LITERAL PURO: sin funciones, sin mutaciones, sin plantillas. Se edita solo el texto;
// `astro check` valida la estructura contra ../types. Generado por scripts/emit_data.py
// (2026-09-29) a partir del contenido vigente; desde aquí se edita a mano o con Codex.
import type { Modelo, Seccion, Tipo } from '../types';

export const data: { seccion?: Seccion; tipos: Tipo[] } = {
  "seccion": {
    "slug": "rescate",
    "nombre": "Rescate",
    "h1": "Equipo de rescate para bomberos: extricación, cuerdas y arneses",
    "title": "Equipo de rescate para bomberos | México",
    "description": "Equipo de rescate para bomberos: extricación, arneses, cuerdas, mosquetones y kits para cotizar según maniobra y sistema de trabajo en México.",
    "eyebrow": "Catálogo de rescate técnico",
    "lead": "El equipo de rescate se compra como un sistema de maniobra: riesgo, anclajes, protección personal, entrenamiento y trazabilidad deben revisarse juntos.",
    "intro": [
      "Extricación, rescate vertical y trabajo con cuerda requieren conjuntos distintos. La selección comienza con la maniobra autorizada, el entorno y el nivel de capacitación, no con una marca o una imagen. En rescate técnico, la compatibilidad entre arnés, cuerda, conectores, anclajes y protección personal es una condición de uso.",
      "Las herramientas hidráulicas se evalúan por la tarea de separación, corte, combinación o empuje. En sistemas de cuerda, los diámetros, clases, conectores y resistencia declarada pertenecen a la especificación del fabricante y al procedimiento de la corporación. No se deben inferir capacidades ni sustituir capacitación con una configuración de compra.",
      "Antes de recibir, define inventario, identificación, inspección, retiro y resguardo. El equipo expuesto a carga, impacto, contaminación o daño debe seguir el criterio de evaluación correspondiente. Para rescate vehicular, integra también protección ocular, guantes y ropa de extricación apropiada.",
      "La revisión de compatibilidad debe incluir la logística: acceso al compartimiento, identificación bajo condiciones de trabajo, bolsas de transporte y separación entre equipo limpio, húmedo o en cuarentena. Con esos datos se puede solicitar una configuración reproducible y sostener prácticas que reflejen el inventario realmente disponible para la corporación."
    ],
    "faq": [
      {
        "q": "¿Qué significa comprar por sistema?",
        "a": "Que cada componente se valida con la maniobra y con los demás elementos que lo acompañan."
      },
      {
        "q": "¿La frase quijadas de la vida identifica una configuración?",
        "a": "No. Puede referirse a familias distintas; define separador, cortador, combinada o cilindro."
      },
      {
        "q": "¿Qué referencia aplica a arneses y cuerda?",
        "a": "NFPA 2500, antes NFPA 1983, es la referencia indicada; revisa la declaración del modelo."
      },
      {
        "q": "¿Cómo se elige un mosquetón?",
        "a": "Por material, forma, seguro, marcado de resistencia y compatibilidad con el sistema."
      },
      {
        "q": "¿Un kit vertical sirve para cualquier maniobra?",
        "a": "No; se configura para una operación definida y el plan de rescate correspondiente."
      },
      {
        "q": "¿Qué pasa después de una carga o contaminación?",
        "a": "El componente se identifica y sigue el proceso de evaluación establecido por el fabricante y programa de rescate."
      },
      {
        "q": "¿Con qué EPP se revisa la compatibilidad?",
        "a": "Con el traje de extricación, guantes, casco y demás protección que acompañará la operación."
      },
      {
        "q": "¿Qué debe acompañar la entrega?",
        "a": "Identificación, condición inicial, documentación aplicable, accesorios y método de resguardo."
      },
      {
        "q": "¿Por qué se separa equipo en cuarentena?",
        "a": "Para impedir que un componente con carga, daño o contaminación incierta vuelva al sistema antes de evaluarse."
      }
    ],
    "hero": {
      "src": "/images/catalogo/rescate/hero-rescate.avif",
      "alt": "Equipo de rescate para bomberos"
    },
    "leyendaImagenIlustrativa": "Imagen ilustrativa. Marca, modelo y configuración exactos se confirman por escrito en la cotización.",
    "resumenHero": [
      "El rescate técnico no se resuelve con una lista aislada de artículos. Extricación, acceso por cuerda y evacuación exigen identificar la maniobra, el entorno, las competencias autorizadas y las interfaces entre cada componente antes de definir una partida.",
      "Un programa de rescate sostenible incorpora trazabilidad, inspección, cuarentena y resguardo desde la compra. El traje de extricación, los guantes, el arnés, la cuerda, los conectores y las herramientas deben comprobarse como conjunto sin deducir capacidades que no declare cada fabricante. LORICA cotiza estos sistemas para corporaciones de los 32 estados."
    ],
    "etiquetas": {
      "menuTipos": "Equipo por sistema de rescate",
      "tiposEyebrow": "Extricación y trabajo con cuerda",
      "tiposTitulo": "Selecciona la función dentro de una maniobra",
      "tiposDescripcion": "Cada tipo requiere compatibilidad documentada, inspección y personal capacitado.",
      "elegirTitulo": "Criterios para configurar rescate",
      "elegirDescripcion": "Parte de la maniobra autorizada y confirma interfaces antes de integrar el inventario.",
      "modelosTitulo": "Configuraciones por confirmar",
      "modelosDescripcion": "Solicita identificación y documentación de cada componente al cotizar."
    },
    "comparativa": {
      "columnas": [
        "Tipo",
        "Uso",
        "Referencia",
        "Material o forma",
        "Ventaja",
        "Límite"
      ],
      "filas": [
        [
          "Herramienta hidráulica",
          "Extricación",
          "Declaración del fabricante",
          "Separador, cortador, combinada o cilindro",
          "Resuelve movimientos definidos",
          "Exige fuente compatible y control de escena"
        ],
        [
          "Arnés de rescate",
          "Conexión corporal",
          "NFPA 2500",
          "Cintas, hebillas y puntos de conexión",
          "Distribuye carga según clase",
          "No sirve fuera de su maniobra y ajuste"
        ],
        [
          "Cuerda de rescate",
          "Sistema estático kernmantle",
          "NFPA 2500",
          "Núcleo y funda",
          "Integra una línea definida",
          "Requiere historial e inspección"
        ],
        [
          "Mosquetones",
          "Conexión de componentes",
          "NFPA 2500",
          "Acero o aluminio; seguro",
          "Une elementos compatibles",
          "La resistencia se consulta en el marcado"
        ],
        [
          "Kit vertical",
          "Rescate vertical",
          "NFPA 2500",
          "Sistema de componentes",
          "Organiza una maniobra",
          "No equivale a capacitación ni plan de rescate"
        ]
      ]
    },
    "criterios": {
      "titulo": "Cinco criterios de compra",
      "items": [
        {
          "termino": "Maniobra",
          "texto": "Define escenario, usuarios y operación autorizada antes de listar componentes."
        },
        {
          "termino": "Sistema",
          "texto": "Comprueba compatibilidad entre cuerda, arnés, conectores, dispositivos y anclajes."
        },
        {
          "termino": "Documentación",
          "texto": "Solicita marcado, manuales y declaración aplicable para cada modelo."
        },
        {
          "termino": "Trazabilidad",
          "texto": "Planifica identificación, historial, inspección y cuarentena desde la recepción."
        },
        {
          "termino": "Interfaz personal",
          "texto": "Prueba tallas y movimiento con traje de extricación, guantes y protección requerida."
        }
      ]
    },
    "checklistCompra": {
      "titulo": "Checklist de configuración de rescate",
      "parrafos": [
        "Describe maniobra, entorno, número de usuarios, composición del sistema, tallas, longitudes y método de transporte. Para herramientas hidráulicas, identifica también fuente de energía, mangueras y acoples; para sistemas de cuerda, identifica cada pieza por separado.",
        "En la recepción, coteja marcado, cantidad, condición física y documentación. Registra asignación y responsable, guarda los componentes secos y protegidos, y establece el proceso de revisión posterior a carga, impacto, contaminación o exposición."
      ]
    }
  },
  "tipos": [
    {
      "slug": "herramienta-hidraulica-de-rescate",
      "seccion": "rescate",
      "nombre": "Herramienta hidráulica de rescate",
      "nombreCard": "Herramienta hidráulica de rescate",
      "title": "Herramienta hidráulica de rescate para bomberos | México",
      "description": "Herramienta hidráulica de rescate para bomberos: separador, cizalla y ram, fuerza de corte, alimentación y mantenimiento. Cotiza con ficha técnica.",
      "lead": "La herramienta hidráulica de rescate reúne separador, cortador, combinada y cilindro para extricación vehicular; cotizamos cada función con la fuente hidráulica o batería que corresponde a tu unidad.",
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
      "errores": [],
      "faq": [],
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
          "h2": "Herramienta hidráulica para extricación vehicular",
          "parrafos": [
            "Cotizamos separador, cortador, combinada o cilindro cuando tu corporación atiende extricación vehicular y necesita abrir, cortar, combinar movimientos o empujar sobre un vehículo estabilizado. La herramienta entra después del control de escena, con protección ocular, guantes y traje de extricación; pedimos la maniobra y el acceso para no entregarte una función distinta.",
            "Para una escena con perfiles, elige cortador; para crear espacio, separador; para dos movimientos en una unidad, combinada; y para empuje entre puntos definidos, cilindro. Surtimos la partida con fuente hidráulica, batería, mangueras y acoples compatibles, porque tu cuadrilla no puede resolver una extricación con una cabeza de trabajo aislada."
          ],
          "lista": []
        },
        {
          "h2": "Partida hidráulica que escribimos al cotizar",
          "parrafos": [
            "En tu cotización escribimos separador, cortador, combinada o cilindro por unidad, además de fuente hidráulica o batería, mangueras, acoples, cargador y transporte. Si ya cuentas con una unidad de potencia, confirmamos sus conexiones antes de proponer accesorios; así comparas una partida con el mismo circuito y no una foto de herramienta.",
            "También pedimos el acceso al vehículo, puntos de apoyo, espacio de almacenamiento y medio de sujeción durante traslado. Anota la función junto con cada componente: un cortador no sustituye un cilindro y una batería no confirma por sí misma compatibilidad. Te entregamos la lista con la declaración que publique el fabricante del modelo."
          ],
          "lista": [
            "Herramienta: separador, cortador, combinada o cilindro",
            "Fuente hidráulica o batería compatible",
            "Mangueras y acoples cuando correspondan",
            "Cargador y accesorios de transporte",
            "Puntos de acceso y apoyo de la maniobra",
            "Declaración del fabricante para el modelo"
          ]
        },
        {
          "h2": "Configuración sin modelo publicado de rescate",
          "parrafos": [
            "No tenemos un modelo publicado de herramienta hidráulica en este catálogo; proponemos separador, cortador, combinada o cilindro según la extricación que autorice tu brigada. La configuración se combina con traje de extricación, guantes de rescate extricación y protección ocular, mientras la estabilización y el control de energía siguen el procedimiento de tu corporación.",
            "Al cotizar no atribuimos fuerza de corte, apertura, peso o presión sin la documentación del fabricante. Pedimos código, material de cuchillas, fuente hidráulica o batería y declaración normativa exacta del modelo disponible; con esos datos puedes comparar la herramienta con tus mangueras, acoples y espacio de la unidad."
          ],
          "lista": []
        },
        {
          "h2": "Errores de pliego en herramienta hidráulica",
          "parrafos": [
            "Vemos pliegos que dicen «quijadas de la vida» sin pedir separador, cortador, combinada o cilindro; escribe la función y la fuente hidráulica o batería para evitar recibir una herramienta sin aplicación definida. También vemos órdenes que omiten mangueras y acoples: inclúyelos cuando tu unidad no opere con batería integrada.",
            "Otro error es pedir «herramienta hidráulica NFPA» sin exigir la declaración del fabricante para el modelo ni la fuerza de corte en kN. En tu pliego agrega código, accesorios, cargador, transporte y documentación publicada; nosotros confirmamos cada renglón antes de surtir. Así la recepción coteja la herramienta, cuchillas, mandos y conexiones contra una partida verificable."
          ],
          "lista": []
        },
        {
          "h2": "Inspección de circuito y retiro",
          "parrafos": [
            "Antes de guardia revisamos contigo mangueras, acoples, carcasa, mandos, cuchillas, pasadores y fuente hidráulica o batería. Después de una intervención, limpia la herramienta y registra fuga, deformación, falla de mando, daño de cuchillas o golpe relevante; cualquiera de esos hallazgos deja la unidad fuera de servicio hasta evaluación.",
            "Para traslado, pide sujeción que proteja cortador, separador, combinada o cilindro contra movimiento. Retira del inventario una herramienta con aceite en mangueras, acople sucio, cuchilla mellada o movimiento errático, y conserva identificación, fecha de ingreso y revisión; te ayudamos a cotejar esos datos con la documentación del fabricante."
          ],
          "lista": []
        }
      ],
      "resumen": [
        "La herramienta hidráulica de rescate cubre separador, cortador, combinada y cilindro para extricación vehicular; no hay modelo publicado y proponemos la función junto con traje de extricación y guantes de rescate extricación.",
        "Cotizamos fuente hidráulica o batería, mangueras, acoples, cargador y transporte por partida. Mándanos tu maniobra y sistema actual por WhatsApp para confirmar conexiones, accesorios y la declaración del fabricante."
      ]
    },
    {
      "slug": "arnes-de-rescate",
      "seccion": "rescate",
      "nombre": "Arnés de rescate",
      "nombreCard": "Arnés de rescate",
      "title": "Arnés de rescate para bomberos | México",
      "description": "Arnés de rescate para bomberos: clase I, II y III, puntos de anclaje, tallas e inspección NFPA 2500. Cotiza con ficha técnica y envío a todo México.",
      "lead": "El arnés de rescate conecta a tu brigada con una maniobra de cuerda mediante clase, talla, cintas, hebillas y puntos de conexión bajo la referencia NFPA 2500.",
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
      "errores": [],
      "faq": [],
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
          "h2": "Arnés de rescate para maniobra autorizada",
          "parrafos": [
            "Cotizamos arnés de rescate por clase, talla, cintas, hebillas y puntos de conexión cuando tu brigada realiza acceso, descenso, ascenso, posicionamiento o rescate. NFPA 2500, antes NFPA 1983, es la referencia que anotamos; pedimos la maniobra porque un arnés no se intercambia como prenda genérica.",
            "Elige puntos de conexión y rango de ajuste según cuerda, conectores y dispositivo; surtimos tallas por usuario para que tu equipo pruebe el arnés sobre traje, casco y guantes. En una práctica, confirma que perneras, banda dorsal y anillos queden accesibles sin cintas retorcidas."
          ],
          "lista": []
        },
        {
          "h2": "Datos de arnés para la cotización",
          "parrafos": [
            "En la partida escribimos clase, talla, rango de ajuste, puntos de conexión, cintas, hebillas, anillos y marcado individual. También pedimos compatibilidad con cuerda y conectores, porque NFPA 2500 es referencia y la declaración concreta pertenece al fabricante y al modelo que tú autorices.",
            "Para recibir arneses por corporación, separa tallas y funciones en cada renglón; nosotros confirmamos documentación, instructivos y método de identificación. Evita una cantidad total sin ajuste: la prueba sobre EPP real muestra si casco, traje o conectores bloquean hebillas o el anillo elegido."
          ],
          "lista": [
            "Clase de arnés requerida",
            "Talla y rango de ajuste",
            "Puntos de conexión declarados",
            "Cintas, hebillas y anillos",
            "Compatibilidad con cuerda y conectores",
            "Marcado e instructivos del fabricante"
          ]
        },
        {
          "h2": "Arnés sin modelo publicado en catálogo",
          "parrafos": [
            "No publicamos un modelo de arnés de rescate en esta sección; proponemos clase, talla y puntos de conexión conforme a la maniobra de tu brigada. Lo combinamos con cuerda estática kernmantle, mosquetones de acero o aluminio, casco y traje de extricación para que compruebes la interfaz completa.",
            "Pedimos al proveedor la declaración NFPA 2500, antes NFPA 1983, tal como corresponda al modelo, sin presentarla como certificación universal. En tu prueba de talla ajusta cintas, revisa hebillas y alcanza cada anillo con guantes; registra el código y la identificación antes de asignarlo."
          ],
          "lista": []
        },
        {
          "h2": "Errores de pliego al pedir arneses",
          "parrafos": [
            "Vemos órdenes por talla de ropa sin clase, rango de ajuste o puntos de conexión; escribe esos campos y exige prueba con EPP para evitar un arnés que no funcione con tu cuerda. También separa las tallas, porque una cantidad global mezcla funciones de acceso, descenso o rescate.",
            "Otro error es declarar NFPA 2500 sin pedir documento del modelo. Nosotros anotamos fabricante, marcado, cintas, hebillas y anillos en la cotización; incluye esos datos en tu pliego para cotejar recepción. No autorices perforar, coser o marcar cintas con métodos que alteren el material."
          ],
          "lista": []
        },
        {
          "h2": "Revisión de cintas y retiro",
          "parrafos": [
            "Antes de guardia revisamos cintas, costuras, etiquetas, hebillas, anillos y puntos de conexión contigo. Después de carga, calor, sustancias o corte, registra exposición e identificación; una cinta cortada, costura comprometida, hebilla dañada o contaminación deja el arnés fuera de servicio hasta evaluación del fabricante.",
            "Guarda el arnés seco, sin comprimir hebillas y lejos de luz directa o químicos. En cada revisión, conserva usuario, fecha de ingreso y resultado; te entregamos la documentación para relacionar ese código con sus instrucciones. No reincorpores un arnés solo porque las cintas parezcan limpias."
          ],
          "lista": []
        }
      ],
      "resumen": [
        "El arnés de rescate se especifica por clase, talla, cintas, hebillas y puntos de conexión bajo la referencia NFPA 2500; no hay modelo publicado y proponemos la configuración conforme a tu maniobra.",
        "Cotizamos el arnés por clase (I, II o III bajo NFPA 2500), tallas, anillos de acero o aluminio, marcado y compatibilidad con cuerda y conectores. Mándanos por WhatsApp tu operación, EPP y número de usuarios para preparar una partida que puedas probar."
      ]
    },
    {
      "slug": "cuerda-de-rescate",
      "seccion": "rescate",
      "nombre": "Cuerda de rescate",
      "nombreCard": "Cuerda de rescate",
      "title": "Cuerda de rescate para bomberos | México",
      "description": "Cuerda de rescate para bomberos: kernmantle estática, diámetro, longitud, terminaciones y registro de uso. Cotiza con ficha técnica en México.",
      "lead": "La cuerda de rescate estática kernmantle se cotiza por diámetro, longitud, terminaciones y función como línea principal, respaldo o acceso dentro de un sistema NFPA 2500.",
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
      "errores": [],
      "faq": [],
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
          "h2": "Cuerda estática para línea definida",
          "parrafos": [
            "Cotizamos cuerda estática kernmantle cuando tu rescate requiere línea principal, respaldo o acceso con diámetro, longitud y terminaciones definidos. NFPA 2500 orienta la referencia; pedimos la maniobra para que núcleo, funda, descensores, conectores y anclajes correspondan al sistema que tu corporación practica.",
            "Elige una longitud para recorrido y resguardo, y pide terminaciones identificadas si tu procedimiento las usa. Surtimos la cuerda con bolsa limpia y trazabilidad; en tu prueba, pasa funda y núcleo palmo a palmo, arma descensor y conector, y confirma que no haya zona rígida ni abrasión."
          ],
          "lista": []
        },
        {
          "h2": "Campos de cuerda en la partida",
          "parrafos": [
            "Escribimos modelo, diámetro, longitud, color, terminaciones, función de línea, bolsa y marcado para cada cuerda estática kernmantle. Confirmamos compatibilidad con arnés, mosquetones, descensores y anclajes, pues una cuerda NFPA 2500 no autoriza por sí sola una configuración que tu brigada no haya definido.",
            "Para comparar ofertas de cuerda kernmantle, separa línea principal, respaldo y acceso, y anota diámetro y longitud de cada una; te pedimos el uso previsto antes de surtir. Incluye historial de inspección y exposición desde la recepción, porque funda, núcleo y terminaciones requieren identificación propia después de agua contaminada, calor, aceite o contacto con bordes."
          ],
          "lista": [
            "Modelo de cuerda estática kernmantle",
            "Diámetro y longitud solicitados",
            "Línea principal, respaldo o acceso",
            "Terminaciones identificadas",
            "Bolsa limpia para resguardo",
            "Marcado e historial de inspección"
          ]
        },
        {
          "h2": "Cuerda sin modelo publicado disponible",
          "parrafos": [
            "No hay modelo publicado de cuerda de rescate en esta sección; proponemos cuerda estática kernmantle según diámetro, longitud, terminaciones y operación. La combinamos con arnés, mosquetones de acero o aluminio, casco y traje de extricación para que tu equipo revise el sistema antes de integrarlo.",
            "Pedimos al proveedor declaración NFPA 2500 y documentación del modelo sin inventar resistencia o carga. Durante tu prueba, recorre funda y núcleo, confirma bolsa, descensor y anclaje, y anota identificación; una cuerda sin historial no vuelve a servicio solo porque su apariencia parezca nueva."
          ],
          "lista": []
        },
        {
          "h2": "Errores de compra de cuerda",
          "parrafos": [
            "Vemos pliegos que piden un rollo sin diámetro, longitud, terminaciones o función; escribe línea principal, respaldo o acceso para recibir cuerda estática kernmantle útil a tu sistema. También añade bolsa y marcado, porque una cuerda suelta se mezcla con equipo húmedo, aceite o herramientas durante traslado.",
            "Otro error es anunciar NFPA 2500 sin solicitar la declaración del modelo. Nosotros pedimos documentación, compatibilidad y historial en cada partida; copia esos campos a tu orden. No aceptes una cuerda con funda dañada, zona rígida o contaminación solo porque la longitud coincide con el renglón solicitado."
          ],
          "lista": []
        },
        {
          "h2": "Funda, núcleo y retiro",
          "parrafos": [
            "Antes de guardia revisamos funda, núcleo perceptible, cortes, abrasión, aplanamientos, zonas rígidas y terminaciones contigo. Después de uso, registra calor, carga, contaminación, agua contaminada o aceite; retira una cuerda estática kernmantle con corte, abrasión o cambio táctil hasta evaluación conforme al fabricante.",
            "Lava y seca únicamente según la instrucción del modelo, después guarda la cuerda en bolsa limpia, lejos de sol, baterías y rebabas. Conserva identificación, fecha de ingreso y exposición para tu inventario; te ayudamos a cotejar esos registros con la documentación NFPA 2500 declarada."
          ],
          "lista": []
        }
      ],
      "resumen": [
        "La cuerda de rescate estática kernmantle se compra como línea principal, respaldo o acceso con diámetro, longitud, funda y terminaciones definidos; no hay modelo publicado y proponemos la configuración de tu maniobra.",
        "Cotizamos la cuerda por diámetro y longitud, con bolsa, marcado, compatibilidad con arnés y mosquetones y la declaración NFPA 2500 del modelo. Escríbenos por WhatsApp para revisar tus longitudes, tu sistema y el resguardo."
      ]
    },
    {
      "slug": "mosquetones-de-rescate",
      "seccion": "rescate",
      "nombre": "Mosquetones de rescate",
      "nombreCard": "Mosquetones de rescate",
      "title": "Mosquetones de rescate para bomberos | México",
      "description": "Mosquetones de rescate para bomberos: acero o aluminio, seguro automático o de rosca, resistencia marcada y compatibilidad. Cotiza con ficha técnica.",
      "lead": "Los mosquetones de rescate unen componentes mediante cuerpo de acero o aluminio, forma, seguro de rosca o automático y resistencia marcada para tu sistema bajo NFPA 2500.",
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
      "errores": [],
      "faq": [],
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
          "h2": "Mosquetones para conexión de rescate",
          "parrafos": [
            "Cotizamos mosquetones de rescate de acero o aluminio con seguro de rosca o automático para unir arnés, cuerda, anclajes y dispositivos. NFPA 2500 es la referencia de este sistema; pedimos dónde abrirás el conector, qué guantes usas y cómo queda la orientación de carga.",
            "Elige acero si tu operación privilegia desgaste y aluminio si la configuración requiere ese material declarado; confirma forma y seguro antes de ordenar. Surtimos cada conector para una interfaz concreta, y en tu prueba revisa que nariz, gatillo, bisagra y bloqueo cierren sin forzar anillo, cuerda o dispositivo."
          ],
          "lista": []
        },
        {
          "h2": "Renglones de mosquetón para cotizar",
          "parrafos": [
            "En la cotización anotamos material, forma, seguro, resistencia marcada, cantidad, uso asignado y declaración del fabricante. Separar conectores de anclaje, arnés o descensor evita que un mosquetón de acero o aluminio llegue sin función; tú comparas marcado, cierre y compatibilidad contra la misma configuración.",
            "También pedimos el dispositivo, anillo o cuerda que recibirá cada mosquetón. La referencia NFPA 2500 no sustituye el marcado legible del modelo; te entregamos los datos para que la recepción compruebe cuerpo, nariz, gatillo y seguro antes de incorporar unidades al inventario."
          ],
          "lista": [
            "Material: acero o aluminio",
            "Forma del mosquetón",
            "Seguro de rosca o automático",
            "Resistencia marcada por fabricante",
            "Cantidad y uso asignado",
            "Compatibilidad con arnés o dispositivo"
          ]
        },
        {
          "h2": "Conectores sin modelo publicado de rescate",
          "parrafos": [
            "No hay modelo publicado de mosquetón en esta sección; proponemos acero o aluminio, forma y seguro conforme a la conexión de tu maniobra. Los combinamos con arnés, cuerda estática kernmantle, casco y traje de extricación para que la brigada pruebe orientación, cierre y acceso con guantes.",
            "Pedimos al proveedor la declaración NFPA 2500 y resistencia marcada del modelo sin presentarla como certificación general. En tu práctica abre y cierra gatillo, verifica bloqueo y mira que nariz asiente; registra código e identificación antes de asignar el conector a un anclaje o descensor."
          ],
          "lista": []
        },
        {
          "h2": "Fallos habituales en orden de conectores",
          "parrafos": [
            "Vemos órdenes que piden mosquetones sin material, forma, seguro ni cantidad; escribe acero o aluminio, rosca o automático y uso para evitar una entrega incompleta. También separa conectores de arnés, anclaje y descensor: el mismo nombre no confirma orientación de carga ni compatibilidad con tu dispositivo.",
            "Otro fallo es omitir resistencia marcada y documento del fabricante al citar NFPA 2500. Nosotros los pedimos en cada partida; inclúyelos en tu pliego y coteja el marcado al recibir. No ordenes lubricar, raspar o modificar gatillo, nariz o seguro para recuperar un mosquetón irregular."
          ],
          "lista": []
        },
        {
          "h2": "Gatillo, nariz y criterios de retiro",
          "parrafos": [
            "Antes de salida revisamos cuerpo, nariz, gatillo, seguro, bisagra, marcado y contaminación contigo. Después de una intervención, registra caída, corrosión, rebaba, grieta, deformación o gatillo irregular; cualquiera de esos daños retira el mosquetón de acero o aluminio hasta evaluación del fabricante.",
            "Guarda los mosquetones de acero o aluminio secos, protegidos de golpes, pintura, arena, baterías y fluidos. En la revisión de sistema confirma que el seguro y la orientación sobre el eje mayor no queden contra una arista, y conserva identificación y fecha de ingreso; te entregamos la documentación del modelo para sostener ese registro."
          ],
          "lista": []
        }
      ],
      "resumen": [
        "Los mosquetones de rescate conectan arnés, cuerda y dispositivos con acero o aluminio, forma y seguro definidos; no hay modelo publicado y proponemos el conector para tu orientación de carga.",
        "Cotizamos mosquetones de acero o aluminio con seguro de rosca o automático, resistencia marcada en kN, cantidad y compatibilidad con tu sistema NFPA 2500. Mándanos por WhatsApp tu anclaje, arnés o descensor para preparar la partida."
      ]
    },
    {
      "slug": "kit-de-rescate-vertical",
      "seccion": "rescate",
      "nombre": "Kit de rescate vertical",
      "nombreCard": "Kit de rescate vertical",
      "title": "Kit de rescate vertical para bomberos | México",
      "description": "Kit de rescate vertical para bomberos: cuerda, arnés, descensor, poleas y anclajes compatibles en una sola partida. Cotiza con ficha técnica en México.",
      "lead": "El kit de rescate vertical integra cuerda, arnés, mosquetones, dispositivos, anclajes y bolsa para una secuencia definida de acceso, descenso, ascenso o evacuación bajo NFPA 2500.",
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
      "errores": [],
      "faq": [],
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
          "h2": "Kit vertical para secuencia de rescate",
          "parrafos": [
            "Cotizamos kit de rescate vertical cuando tu brigada define acceso, descenso, ascenso o evacuación y necesita cuerda, arnés, mosquetones, dispositivos, anclajes y bolsa como sistema. NFPA 2500 es la referencia; pedimos escenario y usuarios porque un paquete no vuelve universal una maniobra ni sustituye tu entrenamiento.",
            "Elige contenido según secuencia, usuarios, tallas, longitudes y transporte. Surtimos los componentes identificados por separado para que pruebes casco, traje de extricación, arnés y cuerda antes de salida; en esa práctica confirma borde, bolsa, conectores y dispositivos con el procedimiento que autorice tu corporación."
          ],
          "lista": []
        },
        {
          "h2": "Lista individual para kit vertical",
          "parrafos": [
            "En la cotización describimos maniobra, usuarios, cuerda estática kernmantle, arneses por talla, mosquetones de acero o aluminio, dispositivos, anclajes, longitudes, bolsa y marcado. Confirmamos compatibilidad por renglón para que tu kit vertical sea una configuración reproducible y no una caja sin identificación NFPA 2500.",
            "También pedimos método de resguardo, inventario y documentación para cada componente. Tú puedes cotejar la partida al recibir: cuenta conectores, revisa cuerda, ajusta arnés y verifica bolsa; una pieza húmeda, contaminada o sin historial se separa antes de armar el sistema."
          ],
          "lista": [
            "Maniobra y secuencia de rescate",
            "Usuarios y arneses por talla",
            "Cuerda, diámetro y longitud",
            "Mosquetones por material y seguro",
            "Dispositivos y anclajes identificados",
            "Bolsa, marcado e inventario individual"
          ]
        },
        {
          "h2": "Kit sin modelo publicado como paquete",
          "parrafos": [
            "No publicamos un modelo de kit vertical cerrado; proponemos la lista de cuerda, arneses, mosquetones, dispositivos, anclajes y bolsa para la secuencia de tu operación. Lo combinamos con casco y traje de extricación cuando corresponda, para que tu brigada verifique interfaces reales antes de integrar la configuración.",
            "Pedimos declaración NFPA 2500 por componente, sin llamar certificación a un kit completo si el fabricante no lo declara. En tu prueba arma la secuencia con tallas, longitudes y conectores cotizados, revisa bolsa y marcado, y registra cada código antes de entregar el conjunto a una unidad."
          ],
          "lista": []
        },
        {
          "h2": "Errores al comprar un kit vertical",
          "parrafos": [
            "Vemos pedidos de «kit completo» sin maniobra, usuarios, tallas ni longitudes; escribe acceso, descenso, ascenso o evacuación y lista cuerda, arnés, mosquetones, dispositivos y anclajes. Así nosotros cotizamos un sistema vertical que tu corporación puede revisar en lugar de una combinación genérica de piezas.",
            "También vemos una caja recibida sin inventario ni documentación. Incluye marcado, bolsa y declaración NFPA 2500 por artículo en tu pliego; la recepción contará cada componente. No mezcles piezas húmedas, contaminadas o sin historial dentro del kit, porque una bolsa cerrada no confirma disponibilidad."
          ],
          "lista": []
        },
        {
          "h2": "Inventario, limpieza y retiro del kit",
          "parrafos": [
            "Antes de guardia revisamos contigo cuerda, arneses, mosquetones, dispositivos, anclajes, bolsa y marcado. Después de uso registra carga, humedad, contaminación, calor, corte, caída o daño; retira el componente afectado y conserva el resto identificado, pues el kit vertical no elimina la trazabilidad individual.",
            "Seca cuerda y cintas según el fabricante, protege conectores de golpes y guarda bolsa lejos de sustancias. Antes de rearmar, coteja inventario, tallas, longitudes y códigos contra la orden; te entregamos la documentación de cada modelo para que tu registro indique qué pieza vuelve al sistema."
          ],
          "lista": []
        }
      ],
      "resumen": [
        "El kit de rescate vertical reúne cuerda, arnés, mosquetones, dispositivos, anclajes y bolsa para una secuencia definida; no existe modelo publicado como paquete y proponemos cada componente de tu maniobra.",
        "Cotizamos el kit vertical completo —cuerda, arnés, descensor, poleas, mosquetones y anclajes— con tallas, longitudes, marcado, inventario y documentación NFPA 2500 por artículo. Escríbenos por WhatsApp con tu escenario y usuarios para armar una configuración revisable."
      ]
    }
  ]
};
