// Datos del catálogo · sección «kits» (trajesbomberos.com).
// LITERAL PURO: sin funciones, sin mutaciones, sin plantillas. Se edita solo el texto;
// `astro check` valida la estructura contra ../types. Generado por scripts/emit_data.py
// (2026-09-29) a partir del contenido vigente; desde aquí se edita a mano o con Codex.
import type { Modelo, Seccion, Tipo } from '../types';

export const data: { seccion?: Seccion; tipos: Tipo[]; modelos: Modelo[] } = {
  "seccion": {
    "slug": "kits",
    "nombre": "Kits",
    "h1": "Kits de equipo para bombero: estructural, brigadista y forestal",
    "title": "Kits de equipo de bombero completo | México",
    "description": "Kits de equipo para bombero estructural, brigadista y forestal para reunir piezas, tallas y accesorios según la operación definida en México.",
    "eyebrow": "Catálogo de protección personal",
    "lead": "Un kit ayuda a coordinar piezas que trabajan juntas, después de definir riesgo, operación autorizada y tallas de cada usuario.",
    "resumenHero": [
      "Los kits reúnen traje, casco, capucha, guantes y botas para cuerpos de bomberos, brigadas de centro de trabajo y cuadrillas forestales. El estructural usa NFPA 1970 como referencia, el brigadista NOM-002-STPS-2010 y el forestal NFPA 1950 por modelo; el ERA se define aparte cuando la operación lo requiere.",
      "Cotizamos tu kit por componente, talla, accesorio y documento aplicable, sin trasladar una declaración de una pieza a todo el conjunto. Mándanos por WhatsApp el tipo de operación, número de elementos y tallas; te entregamos una relación para cotejar códigos, ajuste y accesorios por persona."
    ],
    "etiquetas": {
      "menuTipos": "Kits de equipo para bomberos por operación",
      "tiposEyebrow": "Conjuntos configurables",
      "tiposTitulo": "Elige el kit según la respuesta autorizada",
      "tiposDescripcion": "Cada conjunto parte de una tarea concreta y se cierra con talla, accesorios e interfaz entre componentes.",
      "elegirTitulo": "Qué revisar antes de integrar la partida",
      "elegirDescripcion": "Riesgo, límites de uso, compatibilidad y trazabilidad determinan si el kit es utilizable.",
      "modelosTitulo": "Componentes relacionados del catálogo",
      "modelosDescripcion": "Consulta cada modelo para revisar su configuración y documentación aplicable."
    },
    "intro": [
      "Surtimos kits estructurales, brigadistas y forestales para la tarea que cubre tu corporación o centro de trabajo. El estructural reúne traje, casco, capucha, guantes y botas con NFPA 1970 como referencia; el brigadista parte de NOM-002-STPS-2010 y el forestal de NFPA 1950 por modelo. Definimos el ERA por separado cuando la atmósfera y operación lo requieren.",
      "Elegimos con tu equipo la interfaz entre casco, capucha, cuello, puños, guantes, pantalón y botas. La talla se asigna por persona y los accesorios se fijan antes de ordenar; una declaración normativa se conserva como declaración de la pieza que la publica. Mándanos por WhatsApp tu operación y las tallas para cotizar una configuración que puedas comparar.",
      "Combinamos los componentes publicados para el kit estructural, el kit brigadista o el kit forestal, en vez de mezclar alcances, y todo va en una sola partida con factura CFDI 4.0. El forestal integra ropa, casco, goggles, guantes, bota y nuquera; el estructural y brigadista organizan traje, casco, capucha, guantes y botas. Pide cada modelo, color y accesorio en la misma relación de compra.",
      "Documentamos códigos, tallas, colores, accesorios, cantidades y documento aplicable por componente. Al recibir tu partida cotejas esa relación, revisas cierres y ajuste, y asignas cada elemento a su persona; así conservas la configuración solicitada para inspección y reposición. Envíanos tu pliego por WhatsApp y te entregamos la relación para recepción."
    ],
    "comparativa": {
      "columnas": [
        "Tipo de kit",
        "Uso",
        "Referencia o norma",
        "Material o forma",
        "Ventaja",
        "Límite"
      ],
      "filas": [
        [
          "Estructural",
          "Respuesta estructural definida por análisis de riesgo",
          "NFPA 1970 como referencia; declaraciones por pieza",
          "Traje, casco, capucha, guantes y botas",
          "Coordina solapes para maniobras de combate",
          "ERA y condición respiratoria se revisan aparte"
        ],
        [
          "Brigadista",
          "Tareas autorizadas de brigada en centro de trabajo",
          "NOM-002-STPS-2010 como referencia de dotación",
          "Traje, casco, capucha, guantes y botas",
          "Ordena una partida por tarea y usuario",
          "No supone capacidad de ataque interior"
        ],
        [
          "Forestal",
          "Línea de fuego y operación exterior",
          "NFPA 1950 como referencia; declaración por modelo",
          "Ropa, casco, goggles, guantes, bota y nuquera",
          "Prioriza movilidad y coordinación de accesorios",
          "No sustituye conjunto estructural"
        ]
      ]
    },
    "criterios": {
      "titulo": "Cinco criterios para comprar un kit",
      "items": [
        {
          "termino": "Operación",
          "texto": "Define qué intervención está autorizada antes de seleccionar piezas."
        },
        {
          "termino": "Interfaz",
          "texto": "Prueba casco, cuello, capucha, guantes, pantalón y botas en movimiento."
        },
        {
          "termino": "Talla",
          "texto": "Asigna medidas y ajuste por usuario, no por una talla única."
        },
        {
          "termino": "Configuración",
          "texto": "Fija accesorios, identificación, color y códigos antes de ordenar."
        },
        {
          "termino": "Control",
          "texto": "Registra entrega, inspección, exposición y reposición de cada componente."
        }
      ]
    },
    "grupos": [
      {
        "titulo": "Kits por operación",
        "tipos": [
          "kit-estructural",
          "kit-brigadista",
          "kit-forestal"
        ]
      }
    ],
    "faq": [
      {
        "q": "¿Qué incluye un kit de bombero completo?",
        "a": "Un kit puede integrar traje, casco, capucha, guantes y botas; el ERA se define aparte según atmósfera y operación. El estructural usa NFPA 1970 como referencia, mientras el forestal incorpora ropa, goggles, bota y nuquera con NFPA 1950 por modelo. Mándanos por WhatsApp tu tarea y número de elementos para cotizar la configuración correspondiente."
      },
      {
        "q": "¿Por qué cotizar en kit?",
        "a": "Cotizar en kit reúne modelos, tallas y accesorios de una misma partida para revisar su interfaz. El conjunto estructural coordina casco, capucha, guantes, pantalón y botas, y el brigadista toma NOM-002-STPS-2010 como referencia de dotación. Pídenos por WhatsApp la relación por persona para recibir componentes y documentos aplicables en el mismo pedido."
      },
      {
        "q": "¿El mismo kit sirve para cualquier incendio?",
        "a": "No, los kits estructural, brigadista y forestal responden a operaciones distintas. El estructural usa NFPA 1970 como referencia, el brigadista NOM-002-STPS-2010 y el forestal NFPA 1950 por modelo; sus componentes cambian entre traje, goggles, bota y nuquera. Mándanos por WhatsApp tu procedimiento para cotizar el alcance que corresponde a tu brigada."
      },
      {
        "q": "¿Se puede cambiar una pieza?",
        "a": "Sí, puedes cambiar una pieza si confirmamos la interfaz y configuración final del conjunto. Casco, capucha, cuello, puños, guantes, pantalón y botas deben conservar cobertura y ajuste con la talla asignada. Mándanos por WhatsApp el código, accesorio y modelo que quieres sustituir para cotizarlo con los componentes que ya tienes."
      },
      {
        "q": "¿El ERA siempre es parte del kit?",
        "a": "No, el ERA se evalúa por atmósfera y operación, separado del traje, casco, capucha, guantes y botas. En el kit estructural, NFPA 1970 queda como referencia de las piezas de protección publicadas, sin extenderse al equipo respiratorio. Mándanos por WhatsApp tu operación para cotizar el kit y dejar el ERA en la relación correspondiente."
      },
      {
        "q": "¿Qué se confirma antes de ordenar?",
        "a": "Antes de ordenar confirmamos modelos, tallas, accesorios, alcance y documentación disponible de cada componente. Para un kit forestal anotamos ropa, casco, goggles, guantes, bota y nuquera, con NFPA 1950 como referencia por modelo. Pídenos por WhatsApp la cotización con códigos, colores y cantidades para cotejarla contra tu pliego."
      },
      {
        "q": "¿Cómo se inspecciona una entrega?",
        "a": "Inspeccionas la entrega por persona y por pieza, comparando códigos, tallas, cierres, ajuste y accesorios contra tu requisición. Un kit estructural incluye traje, casco, capucha, guantes y botas; cada componente conserva su propio documento aplicable. Mándanos por WhatsApp tu relación de compra para entregarte el desglose que usarás durante la recepción."
      }
    ],
    "hero": {
      "src": "/images/catalogo/kits/hero-kits.avif",
      "alt": "Kits de equipo para bombero estructural, brigadista y forestal"
    },
    "checklistCompra": {
      "titulo": "Cierre de compra y asignación",
      "parrafos": [
        "Antes de liberar una orden, el responsable valida que la tarea autorizada coincida con el tipo de kit y que cada persona tenga talla, ajuste y accesorios definidos. La relación de componentes evita que una cotización sustituya protección estructural, brigadista o forestal sólo por una descripción parecida.",
        "Al recibir, se comprueban códigos, tallas, estado y configuración de cada pieza. La asignación se registra por usuario y se conserva junto con las instrucciones de cuidado. Si cambia la operación, el componente o el accesorio, se repite la prueba de interfaz antes de poner el conjunto en servicio."
      ]
    }
  },
  "tipos": [
    {
      "slug": "kit-estructural",
      "seccion": "kits",
      "nombre": "Kit estructural para bombero",
      "nombreCard": "Kit estructural",
      "title": "Kit estructural para bombero | México",
      "description": "Kit estructural con traje, casco, capucha, guantes y botas para revisar cobertura, tallas e interfaz antes de cotizar en México.",
      "lead": "El kit estructural reúne traje, casco, capucha, guantes y botas para combate; lo cotizamos por usuario y el ERA queda aparte cuando la atmósfera exige esa configuración.",
      "chips": [
        "Ataque estructural",
        "Interfaz de EPP",
        "ERA por separado",
        "Tallas por usuario"
      ],
      "resumen": [
        "El kit estructural junta chaquetón, pantalonera, casco, capucha, guantes y botas para combate con referencia NFPA 1970. Como no hay modelos publicados en esta sección, cotizamos la configuración según tu operación y probamos con tu brigada los solapes entre cuello, puño y bota.",
        "En tu requisición escribimos componentes, códigos, tallas y accesorios; el ERA queda separado. Mándanos por WhatsApp tu procedimiento y la relación de usuarios para proponerte una familia estructural y confirmar las declaraciones NFPA 1970, UL NFPA 2018 o UL NFPA 1971 edición 2018 de cada pieza."
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
          "h2": "Kit estructural para combate y respuesta",
          "parrafos": [
            "El kit estructural coordina chaquetón, pantalonera con tirantes, casco, capucha, guantes y botas para combate estructural según tu análisis de riesgo. Lo cotizamos a cuerpos de bomberos y brigadas que ya autorizan esa respuesta; si tu procedimiento sólo cubre conatos, elige kit brigadista con NOM-002-STPS-2010 en vez de una partida con referencia NFPA 1970.",
            "Para una intervención con humo o atmósfera comprometida, pedimos que definas el ERA por separado y lo probamos con casco, capucha y cuello. Elige la familia estructural cuando tu operación requiere ese solape; si sólo habrá apoyo exterior, conserva el límite de brigada y no agregues una declaración UL NFPA 2018 como si cubriera todo el conjunto."
          ]
        },
        {
          "h2": "Cotización de kit estructural por partida",
          "parrafos": [
            "En cada partida escribimos el código de traje, casco, capucha, guante y bota, además de talla, color y accesorio. Para la referencia Profesional Romak, elige BOM1028 y BOM1040 sólo si quieres esa combinación con Bullard LTX; si tu pliego pide evidencia de pieza, separamos el Veridian Fire Pro II GIS1017 con su declaración UL NFPA 2018.",
            "También anotamos qué pieza llevará con el ERA y qué declaración corresponde a la capucha Majestic PAC II listada UL NFPA 1971 edición 2018. Pídenos tallas por usuario, no una talla de lote; así confirmamos que Croydon Filtrex BOT1002 cierre con la pantalonera y que cada componente recibido coincida con tu orden."
          ],
          "lista": [
            "Traje: chaquetón BOM1028 y pantalonera BOM1040",
            "Casco: Bullard LTX",
            "Bota: Croydon Filtrex BOT1002",
            "Guante: Veridian Fire Pro II GIS1017, UL NFPA 2018",
            "Capucha: Majestic PAC II, UL NFPA 1971 edición 2018",
            "Tallas, color, accesorios y ERA por separado"
          ]
        },
        {
          "h2": "Modelos de kit estructural que surtimos",
          "parrafos": [
            "No hay modelos publicados bajo kit-estructural en este arreglo; proponemos la combinación según tu operación en lugar de prometer un kit cerrado. Si eliges la referencia Profesional Romak, cotizamos chaquetón BOM1028, pantalonera BOM1040, Bullard LTX, Croydon Filtrex BOT1002, Veridian Fire Pro II GIS1017 y Majestic PAC II, con cada talla escrita.",
            "El guante Veridian Fire Pro II GIS1017 declara UL NFPA 2018 y la capucha Majestic PAC II aparece listada UL NFPA 1971 edición 2018; esas referencias pertenecen a cada pieza. Pide el traje estructural con el que las usarás y prueba casco, capucha y máscara antes de aceptar la propuesta, especialmente si tu ERA ya está asignado."
          ]
        },
        {
          "h2": "Errores en pliegos de kit estructural",
          "parrafos": [
            "Vemos pliegos que llaman «kit completo» a traje, casco y bota, pero omiten capucha, guante o talla; escribe BOM1028, BOM1040 y el accesorio requerido por partida. Si compras Veridian Fire Pro II GIS1017, pide su declaración UL NFPA 2018 para ese guante, no una certificación general del kit.",
            "También llegan órdenes que incluyen ERA sin describir la máscara, o sustituyen Bullard LTX por otro casco al recibir. Escribe «ERA por separado y prueba de interfaz» y conserva Croydon Filtrex BOT1002 cuando esa fue la bota aprobada; si cambias casco o bota, vuelve a hacer la prueba con capucha y pantalonera."
          ]
        },
        {
          "h2": "Inspección y retiro del kit estructural",
          "parrafos": [
            "Antes de la guardia revisamos contigo costuras, cierres, tirantes, suspensión Bullard LTX, capucha Majestic PAC II, palma del Veridian Fire Pro II GIS1017 y suela Croydon Filtrex BOT1002. Si ves daño, pérdida de ajuste o una pieza faltante, apártala y registra usuario, código y talla antes de elegir reposición.",
            "Después de calor, humo, agua o contaminantes, limpia cada componente conforme a su fabricante y revisa de nuevo el solape con el ERA, Bullard LTX y Majestic PAC II. Retira el guante, capucha, casco, traje o bota que conserve daño o condición incierta; al reponerlo, pide el mismo código o prueba la nueva configuración antes de devolverla a guardia."
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
        "Comprar piezas sin probar sus solapes",
        "Tomar una declaración de componente como certificación del kit",
        "Omitir tallas, color o accesorios de la requisición",
        "Incluir ERA sin revisar atmósfera y compatibilidad",
        "Sustituir una pieza al recibir sin volver a probarla",
        "Asignar equipo sin registro de usuario y configuración"
      ],
      "faq": [
        {
          "q": "¿El ERA viene incluido?",
          "a": "Se cotiza aparte, porque depende de la atmósfera, duración requerida y compatibilidad con el conjunto."
        },
        {
          "q": "¿Puedo cambiar una pieza?",
          "a": "Sí, si se revisa nuevamente la interfaz y documentación de la configuración final."
        },
        {
          "q": "¿El kit ya queda certificado como sistema?",
          "a": "No debe asumirse. Las declaraciones se revisan por componente y por la configuración incluida."
        },
        {
          "q": "¿Qué se mide en la prueba de talla?",
          "a": "Cobertura, ajuste y movimiento de casco, capucha, traje, guantes y botas con las maniobras previstas."
        },
        {
          "q": "¿Para qué sirve registrar el equipo?",
          "a": "Para asignarlo, inspeccionarlo y reponer una pieza sin perder el control de la configuración."
        },
        {
          "q": "¿Puedo usar este conjunto en cualquier incendio?",
          "a": "No. La operación autorizada, el riesgo y la necesidad de ERA definen si corresponde emplearlo."
        }
      ]
    },
    {
      "slug": "kit-brigadista",
      "seccion": "kits",
      "nombre": "Kit brigadista contra incendio",
      "nombreCard": "Kit brigadista",
      "title": "Kit brigadista contra incendio | México",
      "description": "Kit brigadista con traje, casco, capucha, guantes y botas para definir una partida conforme al riesgo y procedimiento del centro de trabajo.",
      "lead": "El kit brigadista reúne traje, casco, capucha, guantes y botas para las tareas autorizadas por tu centro de trabajo bajo NOM-002-STPS-2010.",
      "chips": [
        "Brigada de centro de trabajo",
        "Límite de intervención",
        "Configuración por tarea",
        "Recepción controlada"
      ],
      "resumen": [
        "El kit brigadista ordena traje, casco, capucha, guantes y botas para conatos y tareas definidas por tu centro de trabajo. Como no hay modelos publicados en este arreglo, tomamos Combate Básico Romak BOM1001 como referencia y cerramos tallas, accesorios y alcance contigo.",
        "Cotizamos cada componente con código, talla y configuración; no incluimos ataque interior ni ERA por nombre de kit. Escríbenos por WhatsApp tus tareas autorizadas y usuarios para definir si BOM1001, LTX CBOM1007, CAP1005, Firemax VI GIS1008 y Workman Fire BOT1004 corresponden a tu partida."
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
          "h2": "Kit brigadista para tarea autorizada",
          "parrafos": [
            "El kit brigadista reúne traje, casco, capucha, guantes y botas para el límite que tu centro de trabajo fija bajo NOM-002-STPS-2010. Lo cotizamos para conatos, evacuación o tareas cercanas a una fuente de calor; si tu brigada prevé ataque interior, elige kit estructural y revisa ERA antes de pedir BOM1001.",
            "Usamos Combate Básico Romak BOM1001 como referencia real: traje BOM1001, casco LTX CBOM1007, capucha CAP1005, guante Firemax VI GIS1008 y bota Workman Fire BOT1004. Elige esa composición si coincide con tu procedimiento; si cambian tareas o exposición, cuéntanoslo y ajustamos la partida antes de emitir la cotización."
          ]
        },
        {
          "h2": "Cotización de kit brigadista por usuario",
          "parrafos": [
            "En la cotización escribimos BOM1001, LTX CBOM1007, CAP1005, Firemax VI GIS1008 y Workman Fire BOT1004 junto con talla, color e identificación. Pide cada elemento por usuario si tu brigada opera con extintor o manguera; así comprobamos que el guante mantenga destreza y que la bota acompañe la pantalonera.",
            "También preguntamos por turnos, accesorios y el límite de intervención de la NOM-002-STPS-2010. Elige identificación y bandas antes de ordenar, no al recibir; dejamos esos valores por escrito para que tu área de compras compare la pieza entregada contra la misma configuración que aprobaste."
          ],
          "lista": [
            "Traje: Combate Básico Romak BOM1001",
            "Casco: LTX CBOM1007",
            "Capucha: CAP1005",
            "Guante: Firemax VI GIS1008",
            "Bota: Workman Fire BOT1004",
            "Talla, color, identificación y tarea autorizada"
          ]
        },
        {
          "h2": "Modelos de kit brigadista que surtimos",
          "parrafos": [
            "No hay modelos publicados bajo kit-brigadista en este arreglo; proponemos el conjunto según tu tarea en vez de declarar un paquete fijo. Si eliges Combate Básico Romak BOM1001, lo combinamos con LTX CBOM1007, CAP1005, Firemax VI GIS1008 y Workman Fire BOT1004, con tallas confirmadas para tu brigada.",
            "Esa referencia se usa para brigada de centro de trabajo conforme a NOM-002-STPS-2010, no como declaración de ataque interior. Pide la familia estructural sólo si tu operación ya lo exige; antes de cerrar el brigadista, prueba casco, capucha, guante y bota con el traje BOM1001 y con la herramienta autorizada."
          ]
        },
        {
          "h2": "Errores en pliegos de kit brigadista",
          "parrafos": [
            "Vemos órdenes que sólo dicen «kit brigadista» y dejan sin código el casco o la bota. Escribe BOM1001, LTX CBOM1007, CAP1005, Firemax VI GIS1008 y Workman Fire BOT1004, más talla y accesorio; si quieres otra pieza, pídenos una configuración distinta antes de autorizar la compra.",
            "Otro error es pedir ese conjunto para humo, ERA o ataque interior sólo por llevar traje completo. Escribe el límite de intervención conforme a NOM-002-STPS-2010 y prueba el equipo con extintor o manguera; si la tarea rebasa ese límite, cambia a kit estructural en lugar de repartir BOM1001 sin una decisión operativa."
          ]
        },
        {
          "h2": "Inspección y retiro del kit brigadista",
          "parrafos": [
            "Antes del turno revisamos contigo cierres y costuras de BOM1001, suspensión y barbiquejo LTX CBOM1007, capucha CAP1005, palma Firemax VI GIS1008, agujetas y suela Workman Fire BOT1004. Si falta una pieza, pierde ajuste o muestra daño, regístrala por usuario y apártala antes de una tarea autorizada.",
            "Después de humo, calor, suciedad o contaminantes, limpia conforme al fabricante y registra condición, talla y código. Retira cualquier pieza con daño visible o condición incierta; al reponer casco, guante o bota, vuelve a probar cobertura y movimiento con BOM1001 antes de asignarla a la brigada."
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
        "Equipar por apariencia y no por tarea",
        "No definir el límite de intervención",
        "Tomar el kit como autorización para ataque interior",
        "Agregar accesorios después de aprobar el kit",
        "Ignorar tallas durante la recepción",
        "Distribuir equipo sin asignación individual"
      ],
      "faq": [
        {
          "q": "¿Un kit brigadista sirve para ataque interior?",
          "a": "No se debe asumir. Esa operación exige revisar el conjunto estructural, el ERA y el procedimiento."
        },
        {
          "q": "¿Qué incluye el ejemplo Combate Básico?",
          "a": "Traje BOM1001, casco LTX, capucha CAP1005, guante Firemax VI y bota Workman Fire; confirma la configuración al cotizar."
        },
        {
          "q": "¿Cómo defino la talla?",
          "a": "Por usuario y mediante prueba de movimiento con las piezas que se usarán en la tarea autorizada."
        },
        {
          "q": "¿Se puede añadir identificación?",
          "a": "Sí, siempre que color, bandas e identificación se especifiquen antes de ordenar y no alteren el uso previsto."
        },
        {
          "q": "¿Qué hago después de una exposición?",
          "a": "Sigue las instrucciones de cuidado, inspecciona las piezas y aparta el equipo con daño o condición incierta."
        },
        {
          "q": "¿Por qué registrar cada entrega?",
          "a": "Porque permite saber quién usa cada configuración, programar inspecciones y controlar la reposición."
        }
      ]
    },
    {
      "slug": "kit-forestal",
      "seccion": "kits",
      "nombre": "Kit forestal para brigada",
      "nombreCard": "Kit forestal",
      "title": "Kit forestal para brigada | México",
      "description": "Kit forestal con ropa, casco, goggles, guantes, bota y nuquera para armar protección de línea de fuego según la tarea de la cuadrilla.",
      "lead": "El kit forestal coordina ropa, casco, goggles, guantes, bota y nuquera para línea de fuego exterior, con NFPA 1950 como referencia por modelo.",
      "chips": [
        "Operación exterior",
        "Línea de fuego",
        "Movilidad de cuadrilla",
        "Casco con goggles y nuquera"
      ],
      "resumen": [
        "El kit forestal reúne ropa, casco, goggles, guantes, bota y nuquera para línea de fuego y operación exterior. Como no hay modelos publicados en este arreglo, proponemos Fire Ranger Explorer o BOMW1002 según tu cuadrilla y probamos movilidad con casco Bullard FH911H.",
        "Cotizamos talla, ropa, casco, goggles ESS Striketeam XTO, bota y nuquera por usuario. Envíanos por WhatsApp el terreno y las herramientas autorizadas para elegir entre overol o saco y pantalón, y para confirmar la referencia NFPA 1950 de cada modelo."
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
          "h2": "Kit forestal para línea de fuego",
          "parrafos": [
            "El kit forestal integra overol o saco y pantalón, casco, goggles, guantes, bota y nuquera para línea de fuego exterior. Lo cotizamos para cuadrillas que caminan entre vegetación, ceniza y terreno; si tu tarea pasa a incendio en estructura o requiere ERA, elige familia estructural y no extiendas la referencia NFPA 1950.",
            "Partimos de Fire Ranger Explorer o BOMW1002 con casco Bullard FH911H y goggles ESS Striketeam XTO cuando la operación coincide. Elige overol si tu cuadrilla necesita esa prenda o saco y pantalón si el ajuste lo favorece; antes de ordenar, te pedimos terreno, herramientas y talla para cerrar bota, guante y nuquera."
          ]
        },
        {
          "h2": "Cotización de kit forestal por cuadrilla",
          "parrafos": [
            "Escribimos Fire Ranger Explorer o BOMW1002, Bullard FH911H, ESS Striketeam XTO, talla, bota, guante y nuquera en cada cotización. Pide un desglose por persona si habrá caminata y herramienta; así decidimos la ropa y comprobamos que la bota cierre con el pantalón sin perder movilidad en el recorrido.",
            "La referencia NFPA 1950 se conserva por modelo y no se convierte en declaración de todo el kit. Define goggles y nuquera junto con Bullard FH911H antes de aprobar la orden; si tu cuadrilla usa otro casco, mándanos su configuración y probamos el ajuste en vez de asumir compatibilidad por la marca."
          ],
          "lista": [
            "Ropa: Fire Ranger Explorer o BOMW1002",
            "Casco: Bullard FH911H",
            "Goggles: ESS Striketeam XTO",
            "Bota forestal por talla y terreno",
            "Guantes para la herramienta autorizada",
            "Nuquera, talla y configuración por usuario"
          ]
        },
        {
          "h2": "Modelos de kit forestal que surtimos",
          "parrafos": [
            "No hay modelos publicados bajo kit-forestal en este arreglo; proponemos Fire Ranger Explorer o BOMW1002 según tu operación exterior. Si eliges esa referencia, combinamos Bullard FH911H y ESS Striketeam XTO con bota, guantes y nuquera definidos para tu cuadrilla, y documentamos talla y configuración en la cotización.",
            "La referencia NFPA 1950 aplica al equipo forestal por modelo, no equivale a un conjunto estructural. Elige esta familia para línea de fuego y prueba goggles, nuquera y casco con la ropa antes de aceptar la partida; si tu operación exige máscara o ERA, dinos el escenario para proponer otra familia."
          ]
        },
        {
          "h2": "Errores en pliegos de kit forestal",
          "parrafos": [
            "Vemos pliegos que escriben «kit forestal» sin decir si quieren Fire Ranger Explorer o BOMW1002, ni nombran Bullard FH911H o ESS Striketeam XTO. Escribe modelo, talla, bota, guante y nuquera por usuario; así cotizamos una configuración que sirve al terreno y no una lista incompleta.",
            "También se pide el mismo conjunto para línea de fuego y ataque interior, o se dejan goggles y nuquera para después. Escribe NFPA 1950 como referencia por modelo y fija esos accesorios con Bullard FH911H; si la cuadrilla cambia de casco, vuelve a probar visión, retención y cobertura antes de liberar la orden."
          ]
        },
        {
          "h2": "Inspección y retiro del kit forestal",
          "parrafos": [
            "Antes de salida revisamos suspensión Bullard FH911H, clips ESS Striketeam XTO, nuquera, costuras Fire Ranger Explorer o BOMW1002, puños, agujetas y suela. Si hay ceniza, rotura, pérdida de ajuste o una pieza faltante, registra talla y configuración por usuario y aparta el componente antes de enviar a la cuadrilla.",
            "Al regreso retira polvo, ceniza y vegetación conforme a cada fabricante, e inspecciona lentes, textiles y herrajes. Retira bota, goggle, nuquera, casco o ropa con daño o condición incierta; cuando repongas una pieza, prueba de nuevo Bullard FH911H, ESS Striketeam XTO y la ropa con los movimientos de campo."
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
        "Elegir bota sin considerar el terreno",
        "Tratar la talla como un dato genérico",
        "Recibir equipo sin registrar componentes por persona",
        "Guardar ceniza y polvo sin inspección"
      ],
      "faq": [
        {
          "q": "¿Qué ropa puede llevar?",
          "a": "Overol o saco y pantalón forestal, según la tarea y configuración cotizada."
        },
        {
          "q": "¿Para qué sirven los goggles?",
          "a": "Ayudan frente a polvo, ceniza y vegetación; se prueban con el casco para conservar visión y ajuste."
        },
        {
          "q": "¿La nuquera se compra aparte?",
          "a": "Se define como parte de la configuración del casco y debe verificarse con los goggles antes de ordenar."
        },
        {
          "q": "¿Este kit sirve para un incendio en edificio?",
          "a": "No. Un escenario estructural requiere revisar otro conjunto, procedimiento y necesidad de ERA."
        },
        {
          "q": "¿Cómo reviso la bota?",
          "a": "Con caminata y flexión en la talla del usuario, además de inspeccionar agujetas, suela y unión con la prenda."
        },
        {
          "q": "¿Qué hago si una pieza se daña?",
          "a": "Se aparta, se registra y se sustituye por un componente que vuelva a probarse con el resto del equipo."
        }
      ]
    }
  ],
  "modelos": []
};
