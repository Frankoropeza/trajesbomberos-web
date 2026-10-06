// Datos del catálogo · sección «cascos» (trajesbomberos.com).
// LITERAL PURO: sin funciones, sin mutaciones, sin plantillas. Se edita solo el texto;
// `astro check` valida la estructura contra ../types. Generado por scripts/emit_data.py
// (2026-09-29) a partir del contenido vigente; desde aquí se edita a mano o con Codex.
import type { Modelo, Seccion, Tipo } from '../types';

export const data: { seccion?: Seccion; tipos: Tipo[]; modelos: Modelo[] } = {
  "seccion": {
    "slug": "cascos",
    "nombre": "Cascos",
    "hero": {
      "src": "/images/catalogo/cascos/hero-cascos.avif",
      "alt": "Cascos para bombero de distintos usos operativos"
    },
    "leyendaImagenIlustrativa": "Imagen ilustrativa del tipo de casco. Marca, modelo y configuración exactos se confirman por escrito en la cotización."
  },
  "tipos": [
    {
      "slug": "casco-estructural-tradicional",
      "seccion": "cascos",
      "nombre": "Casco estructural tradicional (estilo americano)",
      "nombreCard": "Casco estructural tradicional",
      "title": "Casco estructural tradicional para bombero estilo americano",
      "description": "Casco estructural tradicional para bombero: componentes, norma de referencia, compatibilidad con ERA y qué pedir al cotizar un casco de ataque interior.",
      "lead": "El casco estructural tradicional, de estilo americano, es el del ataque interior: copa alta, ala trasera larga que desvía agua y escombro, y cubrenuca que cierra el hueco con el cuello del chaquetón.",
      "imagen": {
        "src": "/images/catalogo/cascos/tipo-casco-estructural-tradicional.avif",
        "alt": "Casco estructural tradicional estilo americano para bombero",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      },
      "bloques": [
        {
          "eyebrow": "Qué es",
          "h2": "Casco de copa alta para ataque interior",
          "parrafos": [
            "El formato tradicional nació para el incendio estructural. La copa alta aleja los impactos del cráneo, el ala trasera desvía agua caliente y escombro lejos del cuello, y el cubrenuca de Nomex completa la protección donde termina la monja.",
            "Está pensado para trabajar con equipo de respiración autónoma puesto. Por eso lo evaluamos como parte del conjunto: un casco que no asienta con la máscara se mueve al mirar hacia arriba y deja de proteger justo cuando más se necesita."
          ]
        },
        {
          "eyebrow": "Cómo elegir",
          "id": "elegir",
          "h2": "Carcasa, ajuste y retención: lo que cambia entre modelos",
          "parrafos": [
            "La carcasa define peso y resistencia. La fibra de vidrio del UST LW es la opción más ligera del catálogo; el termoplástico del LTX y del Viking aguanta bien el uso diario. Si tu pliego ya fija un material, partimos de ahí.",
            "Después viene la sujeción: matraca o perilla, suspensión de seis puntos o de red, barbiquejo de dos o de cuatro puntos. Conviene cerrar una sola configuración por partida para que todo el lote llegue igual y se inspeccione contra la misma ficha."
          ],
          "lista": [
            "Modelo: Bullard LTX, UST LW o Sköld Viking",
            "Carcasa: termoplástico o fibra de vidrio",
            "Suspensión: seis puntos, red o Sure-Lock",
            "Retención: barbiquejo de dos o cuatro puntos",
            "Protección ocular: visor, careta o goggles",
            "Norma: la que declara cada fabricante"
          ]
        },
        {
          "eyebrow": "En servicio",
          "h2": "Inspección, limpieza y retiro",
          "parrafos": [
            "Antes de cada guardia se revisan carcasa, suspensión, barbiquejo, cubrenuca y visor. Una grieta, una deformación por calor o un golpe fuerte bastan para sacar el casco de servicio, aunque por fuera parezca en buen estado.",
            "Después de una intervención, limpia según las instrucciones del fabricante; el UST LW permite desmontar componentes para descontaminarlos. Registra modelo, color y configuración de cada casco para que los repuestos que pidas después sean compatibles."
          ]
        }
      ],
      "especificacion": [
        {
          "campo": "Uso principal",
          "valor": "Combate de incendio estructural"
        },
        {
          "campo": "Referencia de norma",
          "valor": "NFPA 1970 (antes NFPA 1971)"
        },
        {
          "campo": "Forma",
          "valor": "Copa alta con ala trasera larga"
        },
        {
          "campo": "Compatibilidad",
          "valor": "Se confirma con máscara y ERA de la corporación"
        }
      ],
      "normas": [
        {
          "norma": "NFPA 1970 (antes NFPA 1971)",
          "alcance": "Referencia para casco de combate estructural; verifica la declaración del modelo."
        }
      ],
      "errores": [
        "Comprar por color sin definir la configuración completa",
        "Dar por hecho que visor y máscara de ERA son compatibles sin probarlos",
        "Aceptar «cumple NFPA» sin modelo ni edición declarada",
        "Completar el pedido con accesorios que no estaban especificados"
      ],
      "faq": [
        {
          "q": "¿Cuál es el casco estructural tradicional más ligero?",
          "a": "De los tres con ficha publicada, el Bullard UST LW: su fabricante declara menos de 1.54 kg con visor ReTrack. El LTX y el Viking son de termoplástico y no publican peso."
        },
        {
          "q": "¿Qué diferencia hay entre NFPA 1970 y NFPA 1971 en un casco de bombero?",
          "a": "La NFPA 1970 es la edición vigente y absorbió a la NFPA 1971. Muchos modelos, incluidos los tres de este catálogo, siguen declarando la 1971 edición 2018; lo importante es que la cotización diga qué edición declara cada uno."
        },
        {
          "q": "¿El casco estructural tradicional sirve para rescate técnico?",
          "a": "Puede acompañar una intervención, pero el rescate vehicular o vertical suele pedir un casco compacto, sin ala y con barbiquejo de cuatro puntos. Conviene elegir por el riesgo principal de la operación."
        },
        {
          "q": "¿Qué casco estructural trae protector facial?",
          "a": "El Sköld Viking incluye protector facial de policarbonato antirrayas y antiempaño. El Bullard LTX lleva visor de policarbonato de cuatro pulgadas y el UST LW, visor integrado ReTrack con careta o goggles opcionales."
        },
        {
          "q": "¿Cómo sé si el casco es compatible con nuestra máscara de ERA?",
          "a": "Probándolo con la máscara, la monja y el chaquetón puestos: el casco debe asentar sin desplazar la máscara ni girar al mirar hacia arriba. Envíanos marca y modelo de tu ERA y te decimos qué revisar en esa prueba."
        }
      ],
      "relacionados": [
        "bullard-ltx",
        "bullard-ust-lw",
        "skold-viking"
      ],
      "chips": [
        "NFPA 1970",
        "Ala trasera",
        "Compatible con ERA"
      ],
      "resumen": [
        "Es el casco que más se pide para incendio en edificaciones. Surtimos tres modelos con ficha publicada: Bullard LTX, Bullard UST LW y Sköld Viking, cada uno con la norma que declara su fabricante.",
        "Entre ellos cambian la carcasa, el ajuste, la retención y la protección ocular. En LORICA te ayudamos a elegir probándolos con la máscara de ERA, la monja y el chaquetón que ya usa tu corporación."
      ],
      "duos": {
        "ficha": [
          "La tabla resume lo que debe decir una requisición de este tipo: uso en combate estructural, copa alta con ala trasera y referencia NFPA 1970, la edición vigente que absorbió a la 1971.",
          "La compatibilidad no se decide en escritorio: se confirma con la máscara y el ERA de tu corporación. Si el modelo ya está elegido, pide que código, color y accesorios queden por escrito en la cotización."
        ],
        "errores": [
          "Casi todos los problemas con cascos estructurales empiezan en la requisición: se pide un color o una norma genérica y llega un casco que no asienta con la máscara que usa el equipo.",
          "Estos son los cuatro puntos que conviene revisar antes de cotizar. Evitarlos cuesta una prueba y una lista de accesorios bien escrita, no más presupuesto."
        ],
        "modelos": [
          "Surtimos tres cascos estructurales tradicionales con ficha técnica publicada. El LTX forma parte de nuestros kits brigadista Romak BOM1001 y estructural Profesional; el UST LW destaca por su peso y el Viking por su barbiquejo de cuatro puntos.",
          "Cada ficha muestra el estatus normativo tal como lo publica la marca. Si dudas entre dos, cuéntanos cómo trabaja tu brigada y te decimos cuál conviene probar primero."
        ],
        "faq": [
          "Reunimos las dudas habituales sobre peso, norma, protección ocular y compatibilidad con ERA del casco estructural tradicional.",
          "Si tu pregunta es sobre una licitación concreta, mándanos el texto de la partida por WhatsApp y te respondemos con lo que conviene ajustar."
        ]
      }
    },
    {
      "slug": "casco-estructural-europeo",
      "seccion": "cascos",
      "nombre": "Casco estructural europeo (tipo jet)",
      "nombreCard": "Casco estructural europeo",
      "title": "Casco estructural europeo tipo jet para bombero EN 443",
      "description": "Casco estructural europeo tipo jet: cobertura, visor integrado, compatibilidad con ERA y referencia EN 443:2008 para evaluar una cotización de bomberos.",
      "lead": "El casco estructural europeo, conocido como tipo jet, envuelve más la cabeza que el tradicional: cubre laterales y nuca, e integra un visor retráctil para trabajar con la máscara de ERA.",
      "imagen": {
        "src": "/images/catalogo/cascos/tipo-casco-estructural-europeo.avif",
        "alt": "Casco estructural europeo tipo jet para bombero",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      },
      "bloques": [
        {
          "eyebrow": "Qué es",
          "h2": "Casco de perfil jet para incendio en edificios",
          "parrafos": [
            "El perfil jet baja por los costados y por la nuca, y deja el frente libre para la máscara. El visor se guarda dentro de la carcasa cuando no se usa, lo que reduce enganches al moverse entre escombro o por pasillos estrechos.",
            "Es común en cuerpos que siguen referencias europeas o que ya trabajan con equipos de esa línea. Para ataque interior cumple la misma función que el casco tradicional; lo que cambia es cómo cubre la cabeza y cómo integra la protección ocular."
          ]
        },
        {
          "eyebrow": "Cómo elegir",
          "id": "elegir",
          "h2": "Visor, nuca y comunicación desde el pliego",
          "parrafos": [
            "La primera decisión es la protección ocular: visor exterior retráctil, ocular interior o ambos. Depende de cómo se acomoda la máscara de ERA de tu equipo, y conviene probarlo con guantes y chaquetón puestos.",
            "Si la brigada usa radio con micrófono, inclúyelo desde el principio. Agregar comunicación a un casco ya comprado suele terminar en adaptadores o perforaciones que el fabricante no contempla."
          ],
          "lista": [
            "Uso: incendios en edificios y estructuras",
            "Referencia: EN 443:2008",
            "Perfil: cobertura lateral y de nuca",
            "Visor: exterior retráctil u ocular interior",
            "Retención: compatible con máscara de ERA",
            "Accesorios: comunicación y protector de nuca"
          ]
        },
        {
          "eyebrow": "En servicio",
          "h2": "Revisión y retiro del casco tipo jet",
          "parrafos": [
            "Antes de cada guardia revisa que el visor suba y baje sin atorarse, que la retención ajuste y que la carcasa no tenga grietas. Un visor que ya no se guarda completo es motivo para sacar el casco de servicio hasta repararlo.",
            "Limpia solo con lo que indica el fabricante y desmonta únicamente los accesorios previstos. Si el calor o un impacto afectaron visor, cableado o protector de nuca, el casco vuelve a probarse con la máscara antes de regresar a guardia."
          ]
        }
      ],
      "especificacion": [
        {
          "campo": "Uso principal",
          "valor": "Combate de incendios en edificios y estructuras"
        },
        {
          "campo": "Referencia de norma",
          "valor": "EN 443:2008"
        },
        {
          "campo": "Forma",
          "valor": "Perfil jet con cobertura lateral y de nuca"
        },
        {
          "campo": "Protección ocular",
          "valor": "Visor integrado según configuración"
        }
      ],
      "normas": [
        {
          "norma": "EN 443:2008",
          "alcance": "Referencia europea para cascos de combate de incendios en edificios y estructuras."
        }
      ],
      "errores": [
        "Pedir solo «visor dorado» sin modelo ni alcance",
        "No probar el casco con máscara y comunicaciones",
        "Dar por equivalentes dos normas sin documento del fabricante",
        "Perforar la carcasa para instalar accesorios"
      ],
      "faq": [
        {
          "q": "¿Tienen modelos de casco tipo jet publicados?",
          "a": "Por ahora no hay un modelo tipo jet en el catálogo. Lo cotizamos por configuración y te presentamos la ficha del fabricante antes de que decidas."
        },
        {
          "q": "¿El visor del casco sustituye a la máscara de ERA?",
          "a": "No. El visor protege contra partículas y calor radiante; la máscara es parte del sistema respiratorio. Trabajan juntos y deben probarse juntos."
        },
        {
          "q": "¿Qué diferencia hay entre el casco tipo jet y el tradicional?",
          "a": "Los dos son para incendio estructural. El jet cubre más laterales y nuca e integra el visor; el tradicional usa ala trasera y cubrenuca de tela. La elección suele depender del ERA y de la costumbre operativa del cuerpo."
        },
        {
          "q": "¿Qué norma aplica al casco europeo de bombero?",
          "a": "La referencia es EN 443:2008, para cascos de combate de incendios en edificios y estructuras. Si tu pliego pide además NFPA, dilo desde el inicio: no todos los modelos declaran ambas."
        }
      ],
      "chips": [
        "EN 443:2008",
        "Visor retráctil",
        "Perfil jet"
      ],
      "resumen": [
        "Es la opción estructural de referencia europea, EN 443:2008. Todavía no publicamos un modelo tipo jet en el catálogo, así que lo cotizamos a partir de la configuración que necesita tu operación.",
        "Visor, protector de nuca, retención y comunicación se definen juntos. Con esos datos buscamos un modelo con documentación del fabricante y lo revisamos contigo antes de comprometer una compra."
      ],
      "duos": {
        "ficha": [
          "Para combate en edificios, el tipo jet se especifica con cobertura lateral y de nuca, visor integrado según configuración y referencia EN 443:2008.",
          "Como aún no publicamos modelo, la tabla no muestra código ni certificación. Esos datos llegan en la cotización, con la ficha del fabricante del casco que te propongamos."
        ],
        "errores": [
          "Un casco tipo jet no queda definido con la frase «visor dorado». Sin modelo, retención y protección ocular por escrito, la compra puede recibir un casco que no se integra con la máscara ni con la radio.",
          "Estos cuatro errores son los que más conviene revisar antes de publicar una partida o de pedir cotización."
        ],
        "faq": [
          "Resolvemos las dudas habituales sobre visor, norma y diferencias con el casco tradicional.",
          "Si ya tienes el texto de la partida, mándalo por WhatsApp junto con la marca de tu ERA y te decimos qué falta especificar."
        ]
      }
    },
    {
      "slug": "casco-forestal",
      "seccion": "cascos",
      "nombre": "Casco forestal",
      "nombreCard": "Casco forestal",
      "title": "Casco forestal para bombero ligero y de ala completa",
      "description": "Casco forestal para bombero: peso, ala completa, ventilación, clips para goggles y norma de referencia para trabajo prolongado en línea de fuego. Cotiza.",
      "lead": "El casco forestal está hecho para jornadas largas en línea de fuego: ligero, con ala completa que da sombra y protege del material que cae, y con clips para sujetar los goggles.",
      "imagen": {
        "src": "/images/catalogo/cascos/tipo-casco-forestal.avif",
        "alt": "Casco forestal para bombero en operación de línea de fuego",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      },
      "bloques": [
        {
          "eyebrow": "Qué es",
          "h2": "Casco de ala completa para incendio forestal",
          "parrafos": [
            "El ala completa protege frente, laterales y nuca de ramas, brasas y sol. La carcasa tiene que ser ligera, porque la cuadrilla la lleva durante horas mientras camina, carga herramienta y trabaja con la cabeza inclinada.",
            "La sujeción importa tanto como la carcasa. Una suspensión que se ajusta sola y un barbiquejo firme evitan que el casco se mueva con el viento o al agacharse, y los clips mantienen los goggles en su sitio cuando no se usan."
          ]
        },
        {
          "eyebrow": "Cómo elegir",
          "id": "elegir",
          "h2": "Qué definir antes de pedir casco forestal",
          "parrafos": [
            "Define color, protección ocular y si llevará cubrenuca. El FH911H acepta soportes para viseras y pantallas faciales; conviene pedirlos solo si la cuadrilla los va a usar, para no sumar peso.",
            "Revisa también la norma que declara el modelo. La referencia vigente para equipo forestal es NFPA 1950, que sustituyó a la 1977; el FH911H declara NFPA 1977 edición 1998, y así debe quedar escrito en la cotización."
          ],
          "lista": [
            "Modelo: Bullard Wildland FH911H",
            "Carcasa: termoplástico Ultem",
            "Suspensión: automática de seis puntos",
            "Retención: barbiquejo Nomex ajustable",
            "Accesorios: clips para goggles y bandas",
            "Colores: amarillo, rojo, blanco o negro"
          ]
        },
        {
          "eyebrow": "En servicio",
          "h2": "Limpieza y retiro durante la temporada",
          "parrafos": [
            "Después de cada salida quita ceniza y hollín, y revisa clips, velcro, suspensión y barbiquejo. Un clip roto o una suspensión que ya no ajusta son motivo suficiente para cambiar el casco antes de la siguiente jornada.",
            "El calor y el sol envejecen la carcasa aunque no haya golpes visibles. Registra código, color y accesorios de cada casco: al reponer, la cuadrilla conserva la misma configuración toda la temporada."
          ]
        }
      ],
      "especificacion": [
        {
          "campo": "Uso principal",
          "valor": "Incendio forestal y operación exterior"
        },
        {
          "campo": "Referencia de norma",
          "valor": "NFPA 1950 (antes NFPA 1977)"
        },
        {
          "campo": "Forma",
          "valor": "Ala completa"
        },
        {
          "campo": "Compatibilidad",
          "valor": "Goggles, cubrenuca y accesorios según configuración"
        }
      ],
      "normas": [
        {
          "norma": "NFPA 1950 (antes NFPA 1977)",
          "alcance": "Referencia vigente para equipo forestal."
        },
        {
          "norma": "ANSI/ISEA Z89.1 Tipo I Clase G",
          "alcance": "Referencia industrial cuando la declara el modelo; no sustituye el análisis de incendio."
        }
      ],
      "errores": [
        "Usar el casco forestal para ataque interior estructural",
        "Confundir una clase industrial con protección forestal completa",
        "Omitir goggles y cubrenuca en la partida",
        "Ignorar la edición de norma que declara el modelo"
      ],
      "faq": [
        {
          "q": "¿El casco forestal sirve para incendio estructural?",
          "a": "No. No está pensado para ataque interior con ERA; para ese riesgo se usa casco estructural. En una misma corporación suelen convivir las dos partidas."
        },
        {
          "q": "¿Qué norma declara el casco forestal Bullard FH911H?",
          "a": "El fabricante declara NFPA 1977 edición 1998 y ANSI Z89.1-1997 Tipo 1 Clase C, E y G. La referencia vigente para equipo forestal es NFPA 1950."
        },
        {
          "q": "¿Qué goggles se usan con el casco forestal?",
          "a": "Unos que se sujeten bien en los clips del casco y sellen con la cara del usuario. En nuestro kit forestal cotizamos los ESS Striketeam XTO como referencia."
        },
        {
          "q": "¿En qué colores hay casco forestal?",
          "a": "El Bullard Wildland FH911H se ofrece en amarillo, rojo, blanco y negro. Muchas corporaciones usan el color para distinguir funciones dentro de la cuadrilla."
        }
      ],
      "relacionados": [
        "bullard-fh911h"
      ],
      "chips": [
        "NFPA 1950",
        "Ala completa",
        "Operación exterior"
      ],
      "resumen": [
        "Es otro casco y otro riesgo que el estructural: se trabaja al aire libre, en pendiente, con calor y ceniza. Surtimos el Bullard Wildland FH911H, con carcasa de termoplástico Ultem y suspensión automática de seis puntos.",
        "Lo cotizamos con color, goggles, cubrenuca y accesorios definidos para toda la cuadrilla. Para ataque interior con ERA la partida es otra: casco estructural."
      ],
      "duos": {
        "ficha": [
          "Un casco forestal se requisita para incendio forestal y operación exterior, con ala completa, goggles, cubrenuca y accesorios según configuración. La referencia publicada es NFPA 1950, antes NFPA 1977.",
          "ANSI/ISEA Z89.1 aparece solo cuando el modelo la declara y no sustituye el análisis del riesgo forestal. Por eso la anotamos tal como la publica cada fabricante."
        ],
        "errores": [
          "El error más costoso es tratar al casco forestal como si fuera estructural, o al revés. Cada uno responde a un riesgo distinto y no se sustituyen entre sí.",
          "Estos son los puntos que conviene cerrar en la partida para que la cuadrilla reciba el mismo casco, con los mismos accesorios, durante toda la temporada."
        ],
        "modelos": [
          "Para línea de fuego surtimos el Bullard Wildland FH911H: termoplástico Ultem, suspensión automática de seis puntos, clips para goggles y barbiquejo Nomex ajustable.",
          "Su ficha muestra la norma tal como la declara Bullard. Si lo necesitas dentro de un conjunto completo, también forma parte de nuestro kit forestal."
        ],
        "faq": [
          "Respondemos lo que más se pregunta del casco forestal: uso, norma, goggles y colores.",
          "Si vas a equipar a una cuadrilla completa, dinos cuántas personas son y qué accesorios usan, y te mandamos la cotización con la configuración cerrada."
        ]
      }
    },
    {
      "slug": "casco-rescate-tecnico",
      "seccion": "cascos",
      "nombre": "Casco de rescate técnico",
      "nombreCard": "Casco de rescate técnico",
      "title": "Casco de rescate técnico para bombero y rescate vertical",
      "description": "Casco de rescate técnico: perfil compacto, retención de cuatro puntos y lámpara para rescate vehicular, vertical y espacios confinados. Cotiza con ficha.",
      "lead": "El casco de rescate técnico es compacto y sin ala, con barbiquejo de cuatro puntos, para trabajar dentro de vehículos, colgado de una cuerda o en espacios confinados.",
      "imagen": {
        "src": "/images/catalogo/cascos/tipo-casco-rescate-tecnico.avif",
        "alt": "Casco compacto para rescate técnico de bombero",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      },
      "bloques": [
        {
          "eyebrow": "Qué es",
          "h2": "Casco compacto para rescate vehicular, vertical y confinado",
          "parrafos": [
            "En un rescate vehicular se trabaja bajo tableros y entre metal cortado; en rescate vertical, colgado de una cuerda; en espacios confinados, entre tuberías. En los tres casos un ala larga estorba y puede engancharse.",
            "Por eso el casco de rescate se parece más a uno de montaña que a uno estructural. Retención de cuatro puntos, portalámpara y compatibilidad con visor o goggles son sus rasgos principales."
          ]
        },
        {
          "eyebrow": "Cómo elegir",
          "id": "elegir",
          "h2": "Maniobra, lámpara y protección ocular",
          "parrafos": [
            "Empieza por la maniobra principal. En vertical importa la compatibilidad con arnés y cuerda; en vehicular, el visor y el acceso bajo tablero; en confinados, cómo convive el casco con la protección respiratoria del procedimiento.",
            "Pide lámpara y protección ocular dentro de la misma partida. Si tu requisito menciona normas europeas como EN 12492, indícalo: no todos los modelos las declaran y ese dato cambia las opciones disponibles."
          ],
          "lista": [
            "Uso: vehicular, vertical o confinados",
            "Referencia: NFPA 2500",
            "Perfil: compacto sin ala",
            "Retención: barbiquejo de cuatro puntos",
            "Accesorios: lámpara, visor o goggles",
            "Interfaz: arnés y herramienta de rescate"
          ]
        },
        {
          "eyebrow": "En servicio",
          "h2": "Inspección después de cada maniobra",
          "parrafos": [
            "Revisa carcasa, barbiquejo, portalámpara y visor antes de cada práctica. Un golpe contra metal o roca puede dañar la carcasa sin que se note, y un barbiquejo deshilachado deja de sujetar cuando más se necesita.",
            "Nunca perfores la carcasa para instalar accesorios. Si la lámpara o el visor no encajan con los soportes del fabricante, es señal de que el modelo no corresponde a la operación."
          ]
        }
      ],
      "especificacion": [
        {
          "campo": "Uso principal",
          "valor": "Rescate vehicular, vertical y espacios confinados"
        },
        {
          "campo": "Referencia de norma",
          "valor": "NFPA 2500"
        },
        {
          "campo": "Forma",
          "valor": "Perfil compacto sin ala"
        },
        {
          "campo": "Retención",
          "valor": "Barbiquejo de cuatro puntos"
        }
      ],
      "normas": [
        {
          "norma": "NFPA 2500",
          "alcance": "Referencia para rescate técnico."
        },
        {
          "norma": "EN 12492 / EN 16471-16473",
          "alcance": "Referencias europeas que pueden aparecer según el equipo."
        }
      ],
      "errores": [
        "Usar casco estructural en rescate técnico por costumbre",
        "Instalar lámparas perforando la carcasa",
        "No definir cuál es la operación principal",
        "No probar el casco con arnés y protección ocular"
      ],
      "faq": [
        {
          "q": "¿Tienen modelos de casco de rescate técnico publicados?",
          "a": "Todavía no. Cotizamos el casco según tu maniobra y accesorios, y te presentamos la ficha del fabricante antes de que decidas."
        },
        {
          "q": "¿El casco de rescate técnico sirve para espacios confinados?",
          "a": "Puede formar parte del equipo, pero el procedimiento de espacios confinados define además requisitos respiratorios, de comunicación y de rescate que van más allá del casco."
        },
        {
          "q": "¿Puedo usar mi casco estructural para rescate vehicular?",
          "a": "Se hace por costumbre, pero el ala trasera estorba dentro del vehículo y un barbiquejo de dos puntos sujeta menos. Si el rescate es frecuente, conviene un casco propio para esa tarea."
        },
        {
          "q": "¿Qué norma aplica a un casco de rescate técnico?",
          "a": "La referencia es NFPA 2500. Algunos modelos declaran también normas europeas como EN 12492 o la serie EN 16471 a 16473; lo que importa es que la cotización diga cuál declara el modelo."
        }
      ],
      "chips": [
        "NFPA 2500",
        "Perfil compacto",
        "Barbiquejo 4 puntos"
      ],
      "resumen": [
        "Aquí el riesgo principal no es el calor sino el golpe y el enganche. Un perfil compacto pasa por huecos estrechos y la retención de cuatro puntos mantiene el casco firme boca abajo o en suspensión.",
        "Todavía no publicamos un modelo de rescate técnico. Lo cotizamos según la maniobra de tu equipo, con lámpara, protección ocular y referencia NFPA 2500 definidas desde el inicio."
      ],
      "duos": {
        "ficha": [
          "Para requisitar casco de rescate técnico define primero la operación: vehicular, vertical o espacios confinados. El perfil es compacto y sin ala, con barbiquejo de cuatro puntos y referencia NFPA 2500.",
          "EN 12492 y EN 16471-16473 aparecen como referencias europeas según el equipo. Como no hay modelo publicado, la tabla no muestra código ni certificación; llegan con la ficha del modelo propuesto."
        ],
        "errores": [
          "Un casco de rescate mal especificado se nota en la primera práctica: se engancha, se mueve o no admite la lámpara que usa el equipo.",
          "Estos cuatro errores conviene resolverlos antes de pedir cotización, porque corregirlos después suele significar comprar otra vez."
        ],
        "faq": [
          "Respondemos las dudas habituales sobre modelos, norma y uso del casco de rescate en distintas maniobras.",
          "Si nos dices qué tipo de rescate hace tu equipo y con qué arnés trabaja, te proponemos una configuración concreta por WhatsApp."
        ]
      }
    },
    {
      "slug": "casco-brigada-industrial",
      "seccion": "cascos",
      "nombre": "Casco para brigada industrial",
      "nombreCard": "Casco para brigada industrial",
      "title": "Casco para brigada industrial contra incendio",
      "description": "Casco para brigada industrial contra incendio: cuándo basta un casco industrial y cuándo el riesgo exige casco estructural para combate interior. Cotiza.",
      "lead": "El casco para brigada industrial depende de hasta dónde llega tu brigada: casco industrial con careta si solo atiende conatos, o casco estructural con ERA si su procedimiento incluye ataque interior.",
      "imagen": {
        "src": "/images/catalogo/cascos/tipo-casco-brigada-industrial.avif",
        "alt": "Casco para brigada industrial contra incendio",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      },
      "bloques": [
        {
          "eyebrow": "Qué es",
          "h2": "Casco según lo que hace tu brigada",
          "parrafos": [
            "Una brigada que usa extintores y evacúa trabaja lejos del fuego, y ahí un casco industrial con careta cubre el riesgo. Una brigada que entra con ERA a un edificio en llamas enfrenta calor y caída de objetos que solo un casco estructural resiste.",
            "La diferencia no es de precio ni de apariencia, es de alcance. Por eso preguntamos primero qué autoriza el procedimiento de tu brigada y después proponemos el casco que corresponde a ese nivel."
          ]
        },
        {
          "eyebrow": "Cómo elegir",
          "id": "elegir",
          "h2": "Cómo se escribe la partida para no dejar dudas",
          "parrafos": [
            "La requisición debe decir si la brigada atiende conatos o hace ataque interior, qué norma aplica y qué accesorios necesita: careta, color y marcaje. Con esos datos la cotización se puede comparar y la recepción, revisar.",
            "Para casco industrial, las referencias son NOM-115-STPS-2009 o ANSI/ISEA Z89.1 según el requisito. Para ataque interior, el casco se prueba con ERA, monja y chaquetón, igual que en un cuerpo de bomberos."
          ],
          "lista": [
            "Escenario: conato o ataque interior",
            "Referencia de brigada: NOM-002-STPS-2010",
            "Casco industrial: NOM-115-STPS-2009",
            "Casco industrial: ANSI/ISEA Z89.1",
            "Casco estructural: Bullard LTX CBOM1007",
            "Accesorios: careta, color y marcaje"
          ]
        },
        {
          "eyebrow": "En servicio",
          "h2": "Inspección y límites de uso",
          "parrafos": [
            "Antes de cada turno revisa carcasa, careta, barbiquejo y marcado. Un casco con grietas, daño por calor o retención floja sale de servicio, sea industrial o estructural.",
            "Si una respuesta rebasó el alcance del casco industrial, por ejemplo un conato que creció, retíralo y revísalo antes de volver a asignarlo. Documentar esos límites también protege a la empresa en una auditoría."
          ]
        }
      ],
      "especificacion": [
        {
          "campo": "Uso principal",
          "valor": "Brigada industrial según análisis de riesgo"
        },
        {
          "campo": "Referencia de brigada",
          "valor": "NOM-002-STPS-2010"
        },
        {
          "campo": "Casco industrial",
          "valor": "NOM-115-STPS-2009 / ANSI Z89.1, cuando el alcance lo permite"
        },
        {
          "campo": "Ataque interior",
          "valor": "Casco estructural y conjunto compatible"
        }
      ],
      "normas": [
        {
          "norma": "NOM-002-STPS-2010",
          "alcance": "Dotación de EPP de brigada conforme al riesgo."
        },
        {
          "norma": "NOM-115-STPS-2009 / ANSI/ISEA Z89.1",
          "alcance": "Referencias para casco industrial; no sustituyen casco estructural."
        }
      ],
      "errores": [
        "Equipar por uniforme y no por riesgo",
        "Usar casco industrial en ataque interior",
        "Agregar careta a un casco industrial como supuesto equivalente estructural",
        "No documentar los límites de respuesta de la brigada"
      ],
      "faq": [
        {
          "q": "¿Un casco industrial puede entrar a un incendio?",
          "a": "Solo dentro del alcance que define el análisis de riesgo y el procedimiento de conato. No sustituye al casco estructural en ataque interior."
        },
        {
          "q": "¿Qué casco trae el kit brigadista?",
          "a": "El kit brigadista Romak BOM1001 incluye el Bullard LTX, un casco estructural. Lo proponemos cuando la brigada tiene autorizado el ataque interior; su configuración se confirma al cotizar."
        },
        {
          "q": "¿Qué norma de la STPS aplica al casco de brigada?",
          "a": "La NOM-002-STPS-2010 pide dotar a la brigada del equipo que corresponda al riesgo, sin fijar un modelo. Para casco industrial la referencia es NOM-115-STPS-2009; para ataque interior, un casco estructural con su norma declarada."
        },
        {
          "q": "¿La brigada debe usar el mismo casco que los bomberos?",
          "a": "Solo si hace el mismo trabajo. Si entra a combatir con ERA, necesita casco estructural; si atiende conatos y evacuación, un casco industrial con careta suele bastar según el análisis de riesgo."
        }
      ],
      "relacionados": [
        "bullard-ltx"
      ],
      "chips": [
        "NOM-002-STPS-2010",
        "Conatos",
        "Según riesgo"
      ],
      "resumen": [
        "No hay un casco único para brigadas. La NOM-002-STPS-2010 pide dotar el equipo conforme al riesgo, y ese análisis define si basta un casco industrial o se necesita uno estructural.",
        "Cuando la brigada entra a combatir, surtimos el Bullard LTX, el mismo casco de nuestro kit brigadista Romak BOM1001. Para conatos cotizamos casco industrial con careta y lo dejamos claro en la partida."
      ],
      "duos": {
        "ficha": [
          "Para requisitar casco para brigada industrial indica el uso según análisis de riesgo, la NOM-002-STPS-2010 y si la partida es casco industrial, bajo NOM-115-STPS-2009 o ANSI Z89.1.",
          "Si habrá ataque interior, la tabla cambia: se especifica casco estructural y un conjunto compatible con ERA. Esa decisión no la toma el proveedor, la define el procedimiento de tu brigada."
        ],
        "errores": [
          "La mayoría de estos errores tiene el mismo origen: comprar el casco antes de definir qué hará la brigada.",
          "Revísalos contra tu procedimiento de respuesta. Si alguno aplica, conviene corregir la partida antes de pedir cotización."
        ],
        "modelos": [
          "Cuando la brigada hace ataque interior, surtimos el Bullard LTX: termoplástico de alto impacto, suspensión de seis puntos, cubrenuca de Nomex y visor de policarbonato de cuatro pulgadas.",
          "Es el mismo casco que integra nuestro kit brigadista Romak BOM1001. Para brigadas de conato, el casco industrial se cotiza aparte, con su propia ficha."
        ],
        "faq": [
          "Aclaramos lo que más se pregunta sobre cascos para brigada: normas de la STPS, kit brigadista y diferencias con el casco de bombero.",
          "Si tu brigada está por definir su equipo, mándanos su nivel de respuesta y número de integrantes; te decimos qué casco corresponde."
        ]
      }
    }
  ],
  "modelos": [
    {
      "id": "bullard-ltx",
      "seccion": "cascos",
      "tipo": "casco-estructural-tradicional",
      "marca": "Bullard",
      "fabricante": "Romak Fire",
      "nombre": "LTX",
      "codigo": "CBOM1007",
      "norma": "NFPA 1971 ed. 2018",
      "estatusNorma": "declarado",
      "caracteristicas": [
        "Termoplástico de alto impacto, resistente a químicos y altas temperaturas",
        "Forrado interior, ajuste ratchet y suspensión de 6 puntos",
        "Cintas 3M Scotchlite y contorno recubierto en cuero",
        "Protector de cuello y nuca de Nomex",
        "Barbiquejo Nomex de 2 puntos con desenganche rápido metálico",
        "Visor de policarbonato de 4 pulgadas y colgador metálico",
        "Disponible en amarillo o rojo según configuración",
        "Incluido en kit brigadista Romak BOM1001 y kit estructural Profesional"
      ],
      "descripcion": [
        "El LTX es un casco de trabajo diario: carcasa de termoplástico resistente a químicos y altas temperaturas, forro interior y un ajuste ratchet que se aprieta con una perilla, incluso con guantes. La suspensión de seis puntos reparte el peso y lo mantiene estable al moverse.",
        "Trae de serie cubrenuca de Nomex, barbiquejo Nomex de dos puntos con desenganche rápido metálico y visor de policarbonato de cuatro pulgadas con colgador metálico. Es una configuración completa para ataque interior que no obliga a comprar accesorios por separado.",
        "En la prueba de talla, el usuario ajusta el ratchet con la máscara puesta, despliega el visor y mira hacia arriba. Si el casco gira o el visor empuja la máscara, se corrige antes de cerrar el lote."
      ],
      "faq": [
        {
          "q": "¿Qué incluye el casco Bullard LTX?",
          "a": "Cubrenuca de Nomex, barbiquejo Nomex de dos puntos con desenganche rápido, visor de policarbonato de cuatro pulgadas, cintas 3M Scotchlite y colgador metálico."
        },
        {
          "q": "¿En qué colores se consigue el Bullard LTX?",
          "a": "En amarillo o rojo, según la configuración que se confirme en la cotización."
        },
        {
          "q": "¿El Bullard LTX está certificado?",
          "a": "Su fabricante declara NFPA 1971 edición 2018, sin número de certificación publicado. Lo presentamos como declaración del fabricante."
        },
        {
          "q": "¿En qué kits viene el Bullard LTX?",
          "a": "En el kit brigadista Romak BOM1001 y en el kit estructural Profesional."
        },
        {
          "q": "¿Qué diferencia hay entre el Bullard LTX y el UST LW?",
          "a": "El LTX es de termoplástico con visor de cuatro pulgadas; el UST LW es de fibra de vidrio, más ligero, con visor integrado ReTrack y ajuste Sure-Lock."
        }
      ],
      "imagen": {
        "src": "/images/catalogo/cascos/bullard-ltx.avif",
        "alt": "Casco Bullard LTX amarillo",
        "width": 1000,
        "height": 1250,
        "origen": "proveedor",
        "credito": "Romak Fire"
      },
      "imagenesExtra": [
        {
          "src": "/images/catalogo/cascos/bullard-ltx-rojo.avif",
          "alt": "Casco Bullard LTX rojo",
          "width": 1000,
          "height": 1250,
          "origen": "proveedor",
          "credito": "Romak Fire"
        }
      ],
      "title": "Casco de bombero Bullard LTX estructural | México",
      "description": "Bullard LTX: casco estructural con ajuste ratchet, suspensión de seis puntos, cubrenuca Nomex y visor. Cotiza por WhatsApp con envío a todo México.",
      "material": "Termoplástico de alto impacto",
      "colores": "Amarillo o rojo según configuración",
      "chips": [
        "NFPA 1971 ed. 2018",
        "Suspensión 6 puntos",
        "Visor de 4 pulgadas"
      ],
      "resumen": [
        "El Bullard LTX CBOM1007 es un casco estructural tradicional de termoplástico de alto impacto, con ajuste ratchet, suspensión de seis puntos y visor de policarbonato de cuatro pulgadas.",
        "Es el casco de nuestros kits brigadista Romak BOM1001 y estructural Profesional. Se ofrece en amarillo o rojo, con cubrenuca de Nomex, cintas 3M Scotchlite y contorno recubierto en cuero.",
        "Su fabricante declara NFPA 1971 edición 2018. Lo cotizamos con la configuración escrita y te ayudamos a probarlo con la máscara de ERA, la monja y el chaquetón de tu equipo.",
        "Antes de asignar este casco Bullard a un bombero, revisa ajuste, barbiquejo, visor y suspensión. El sistema debe quedar estable sobre la cabeza, conservar seguridad y confort y no interferir con la máscara durante búsqueda o rescate. Confirma también el centro de gravedad bajo con el ajuste real."
      ],
      "duos": {
        "ficha": [
          "El Bullard LTX se identifica con el código CBOM1007. La tabla reúne material, colores y norma tal como los publica la ficha del modelo.",
          "La norma aparece como declaración del fabricante porque no hay número de certificación publicado. Pide que código, color y visor queden escritos en la cotización."
        ],
        "caracteristicas": [
          "Estas son las características que publica la ficha del LTX. Todas vienen en la configuración estándar del casco, salvo el color, que se elige.",
          "Si tu corporación ya usa otro casco, compara estos puntos uno por uno: carcasa, ajuste, retención y protección ocular."
        ],
        "otros": [
          "El LTX comparte tipo con el Bullard UST LW y el Sköld Viking. El UST LW es más ligero y el Viking trae barbiquejo de cuatro puntos.",
          "Si dudas entre ellos, cuéntanos cómo trabaja tu brigada y te decimos cuál conviene probar primero con su máscara de ERA."
        ],
        "faq": [
          "Respondemos lo que más se pregunta del Bullard LTX: qué incluye, colores, norma, kits y diferencias con el UST LW.",
          "Si necesitas cotizar un lote, mándanos cantidad y color por WhatsApp y te enviamos la ficha con la configuración cerrada."
        ]
      }
    },
    {
      "id": "bullard-ust-lw",
      "seccion": "cascos",
      "tipo": "casco-estructural-tradicional",
      "marca": "Bullard",
      "fabricante": "Bullard",
      "nombre": "UST LW",
      "codigoNota": "Código según configuración; confírmalo al cotizar",
      "norma": "NFPA 1971-2018",
      "estatusNorma": "declarado",
      "peso": "Menor a 1.54 kg con ReTrack; menor a 1.77 kg con careta",
      "caracteristicas": [
        "Estilo Nueva York ultraligero",
        "Carcasa de fibra de vidrio con resina ignífuga termoestable",
        "Visor integrado ReTrack; careta o goggles opcionales",
        "Ajuste Sure-Lock con perilla y seis combinaciones de inclinación y altura",
        "Barbiquejo de dos piezas de Nomex negro con hebilla de liberación rápida",
        "Nuquera con cubierta exterior de Nomex de 6 oz y tres capas de algodón FR",
        "Componentes removibles para descontaminación y acabado mate",
        "Protección ocular conforme a ANSI/ISEA Z87.1"
      ],
      "descripcion": [
        "La carcasa de fibra de vidrio con resina ignífuga termoestable es la razón de su poco peso, algo que se nota en una guardia larga. El ajuste Sure-Lock se gradúa con una perilla y permite acomodar el casco a cada usuario y a su máscara.",
        "La protección ocular define la configuración: el visor ReTrack va integrado y se guarda dentro del casco; la careta cubre más superficie y sube el peso a menos de 1.77 kg. Los goggles son otra opción para quien los prefiera.",
        "La nuquera tiene cubierta exterior de Nomex de 6 oz y tres capas de algodón FR, y el barbiquejo es de dos piezas de Nomex negro con hebilla de liberación rápida."
      ],
      "faq": [
        {
          "q": "¿Cuánto pesa el casco Bullard UST LW?",
          "a": "Menos de 1.54 kg con visor ReTrack y menos de 1.77 kg con careta, según su fabricante."
        },
        {
          "q": "¿Qué es el visor ReTrack del UST LW?",
          "a": "Un visor integrado que se guarda dentro del casco cuando no se usa. Como alternativa, el UST LW admite careta o goggles."
        },
        {
          "q": "¿Cuál es el código del Bullard UST LW?",
          "a": "Depende de la configuración de protección ocular. Lo confirmamos al cotizar, una vez definida."
        },
        {
          "q": "¿Se puede descontaminar el Bullard UST LW?",
          "a": "Sí. Sus componentes son removibles para limpiarlos por separado, siguiendo el método del fabricante."
        }
      ],
      "imagen": {
        "src": "/images/catalogo/cascos/tipo-casco-estructural-tradicional.avif",
        "alt": "Imagen ilustrativa de casco estructural tradicional",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      },
      "title": "Casco de bombero Bullard UST LW ultraligero | México",
      "description": "Bullard UST LW: casco ultraligero con ajuste Sure-Lock, visor ReTrack y componentes removibles. Cotiza por WhatsApp con envío a todo México.",
      "material": "Fibra de vidrio con resina ignífuga termoestable",
      "colores": "No especificado",
      "chips": [
        "NFPA 1971-2018",
        "Estilo Nueva York",
        "ReTrack"
      ],
      "resumen": [
        "El Bullard UST LW es un casco estructural estilo Nueva York de fibra de vidrio, el más ligero de nuestro catálogo: menos de 1.54 kg con visor ReTrack, según su fabricante.",
        "Su ajuste Sure-Lock ofrece seis combinaciones de inclinación y altura, y sus componentes se desmontan para descontaminarlos. Admite visor ReTrack, careta o goggles.",
        "Bullard declara NFPA 1971-2018 y protección ocular ANSI/ISEA Z87.1. El código se confirma al cotizar, según la configuración de protección ocular que elijas.",
        "Para rescate o combate de incendios estructurales, prueba el casco Bullard con máscara y capucha. El sistema de seguridad debe dar confort al bombero y servir en búsqueda. El centro de gravedad bajo se confirma con el ajuste del usuario, no sólo por el diseño o el material de fibra de vidrio."
      ],
      "duos": {
        "ficha": [
          "El UST LW no tiene un código único publicado: se asigna según la protección ocular elegida. La tabla muestra material, peso y norma de su ficha.",
          "Bullard declara NFPA 1971-2018. Lo presentamos como declaración del fabricante, sin número de certificación publicado."
        ],
        "caracteristicas": [
          "Estas son las características que publica la ficha del UST LW. La protección ocular es la única que cambia según la configuración.",
          "Si el peso es tu prioridad, compara la versión con ReTrack y la versión con careta antes de decidir."
        ],
        "otros": [
          "El UST LW comparte tipo con el Bullard LTX y el Sköld Viking. Los dos son de termoplástico; el UST LW destaca por su fibra de vidrio y su poco peso.",
          "Si tu brigada trabaja turnos largos, el peso puede inclinar la balanza; si prefiere un visor de cuatro pulgadas, el LTX es la opción."
        ],
        "faq": [
          "Respondemos lo que más se pregunta del Bullard UST LW: peso, visor ReTrack, código y limpieza.",
          "Si nos dices qué protección ocular usa tu equipo, te cotizamos la configuración exacta con su código."
        ]
      }
    },
    {
      "id": "skold-viking",
      "seccion": "cascos",
      "tipo": "casco-estructural-tradicional",
      "marca": "Sköld",
      "fabricante": "Sköld",
      "nombre": "Viking",
      "codigo": "FPCM",
      "norma": "NFPA 1971 / EN 443:2009",
      "estatusNorma": "declarado",
      "caracteristicas": [
        "Termoplástico de alta densidad con costilla central y frente triangular",
        "Faldón con forro interno de Nomex y nuquera aluminizada con forro Nomex",
        "Ajuste tipo matraca y suspensión de red",
        "Barbiquejo de 4 puntos con mentonera y retiro rápido",
        "Bisel protector, acolchado frontal y soporte trasero para colgar",
        "Protector facial de policarbonato antirrayas y antiempaño",
        "Película térmica para 800 °C, según fabricante",
        "Compatible con ERA y color amarillo"
      ],
      "descripcion": [
        "El Viking tiene una carcasa con costilla central y frente triangular, bisel protector y acolchado frontal. La matraca y la suspensión de red lo ajustan a la cabeza, y el barbiquejo de cuatro puntos con mentonera lo mantiene firme en cualquier posición.",
        "El protector facial viene integrado y su fabricante menciona una película térmica para 800 °C. Ese dato describe el protector; la protección del conjunto se sigue evaluando con el resto del equipo.",
        "Es buena opción cuando la corporación sigue referencias europeas y americanas a la vez, porque declara las dos normas."
      ],
      "faq": [
        {
          "q": "¿Qué normas declara el casco Sköld Viking?",
          "a": "NFPA 1971 y EN 443:2009, según su fabricante. Son declaraciones, sin número de certificación publicado."
        },
        {
          "q": "¿El Sköld Viking es compatible con ERA?",
          "a": "Su fabricante lo declara compatible. Aun así, conviene confirmarlo con la máscara de ERA de tu corporación en una prueba física."
        },
        {
          "q": "¿Qué retención tiene el Sköld Viking?",
          "a": "Barbiquejo de cuatro puntos con mentonera y retiro rápido, más ajuste de matraca y suspensión de red."
        },
        {
          "q": "¿En qué color viene el Sköld Viking?",
          "a": "En amarillo, según su ficha."
        }
      ],
      "imagen": {
        "src": "/images/catalogo/cascos/skold-viking.avif",
        "alt": "Casco Sköld Viking amarillo",
        "width": 1000,
        "height": 1250,
        "origen": "proveedor",
        "credito": "Sköld"
      },
      "imagenesExtra": [
        {
          "src": "/images/catalogo/cascos/skold-viking-frente.avif",
          "alt": "Vista frontal de casco Sköld Viking",
          "width": 1000,
          "height": 1250,
          "origen": "proveedor",
          "credito": "Sköld"
        }
      ],
      "title": "Casco de bombero Sköld Viking FPCM | México",
      "description": "Sköld Viking: casco estructural con matraca, barbiquejo de cuatro puntos y protector facial. Cotiza por WhatsApp con envío a todo México.",
      "material": "Termoplástico de alta densidad",
      "colores": "Amarillo",
      "chips": [
        "NFPA 1971",
        "EN 443:2009",
        "Compatible con ERA"
      ],
      "resumen": [
        "El Sköld Viking FPCM es un casco estructural de termoplástico de alta densidad con barbiquejo de cuatro puntos, ajuste de matraca y protector facial de policarbonato antirrayas y antiempaño.",
        "Su faldón lleva forro interno de Nomex y su nuquera es aluminizada. Se ofrece en amarillo y su fabricante lo declara compatible con ERA.",
        "Sköld declara NFPA 1971 y EN 443:2009. Lo cotizamos con esa declaración escrita y te ayudamos a confirmar la compatibilidad con tu máscara en una prueba real."
      ],
      "duos": {
        "ficha": [
          "El Sköld Viking se identifica con el código FPCM. La tabla reúne material, color y normas tal como los publica su ficha.",
          "NFPA 1971 y EN 443:2009 aparecen como declaración del fabricante. Pide que queden escritas así en la cotización."
        ],
        "caracteristicas": [
          "Estas son las características que publica la ficha del Viking, desde la carcasa hasta el protector facial.",
          "El barbiquejo de cuatro puntos es su rasgo más distintivo frente a los otros cascos estructurales del catálogo."
        ],
        "otros": [
          "El Viking comparte tipo con el Bullard LTX y el Bullard UST LW. Los dos Bullard usan barbiquejo de dos puntos; el Viking, de cuatro.",
          "Si tu equipo también hace rescate, una retención de cuatro puntos puede ser un argumento para elegirlo."
        ],
        "faq": [
          "Respondemos lo que más se pregunta del Sköld Viking: normas, compatibilidad con ERA, retención y color.",
          "Si nos compartes el modelo de tu ERA, te decimos qué revisar en la prueba antes de cotizar."
        ]
      }
    },
    {
      "id": "bullard-fh911h",
      "seccion": "cascos",
      "tipo": "casco-forestal",
      "marca": "Bullard",
      "fabricante": "Romak Fire",
      "nombre": "Wildland FH911H",
      "codigo": "FH911H",
      "norma": "NFPA 1977 ed. 1998 · ANSI Z89.1-1997 Tipo 1 Clase C, E y G",
      "estatusNorma": "declarado",
      "caracteristicas": [
        "Termoplástico Ultem",
        "Suspensión automática de 6 puntos",
        "Clips de retención para goggles y bandas reflejantes",
        "Acepta soportes para viseras y pantallas faciales",
        "Barbiquejo Nomex ajustable",
        "Sombra interior y cierres de velcro",
        "Colores amarillo, rojo, blanco y negro"
      ],
      "descripcion": [
        "El FH911H está pensado para jornadas largas: carcasa ligera de Ultem, ala completa que da sombra y protege del material que cae, y una suspensión que se ajusta sola a la cabeza.",
        "La sombra interior, los cierres de velcro y el barbiquejo Nomex ajustable lo mantienen en su lugar al caminar en pendiente o con viento. Los clips sujetan los goggles cuando no se usan.",
        "Es un casco para operación exterior. Para ataque interior con ERA se necesita un casco estructural, y así lo separamos en la cotización."
      ],
      "faq": [
        {
          "q": "¿En qué colores viene el Bullard FH911H?",
          "a": "Amarillo, rojo, blanco y negro."
        },
        {
          "q": "¿Por qué el FH911H declara una norma de 1998?",
          "a": "Porque así lo publica su fabricante: NFPA 1977 edición 1998 y ANSI Z89.1-1997. Lo reportamos tal cual para que puedas compararlo con el requisito vigente, NFPA 1950."
        },
        {
          "q": "¿Qué accesorios acepta el casco FH911H?",
          "a": "Goggles y bandas reflejantes en sus clips, además de soportes para viseras y pantallas faciales."
        },
        {
          "q": "¿El Bullard FH911H forma parte de algún kit?",
          "a": "Sí, es el casco de nuestro kit forestal, junto con la ropa Fire Ranger y los goggles ESS Striketeam XTO."
        }
      ],
      "imagen": {
        "src": "/images/catalogo/cascos/bullard-fh911h.avif",
        "alt": "Casco forestal Bullard Wildland FH911H",
        "width": 1000,
        "height": 1250,
        "origen": "proveedor",
        "credito": "Romak Fire"
      },
      "title": "Bullard Wildland FH911H | Cascos",
      "description": "Bullard Wildland FH911H: casco forestal con suspensión de seis puntos y clips para goggles. Cotiza por WhatsApp con envío a todo México.",
      "material": "Termoplástico Ultem",
      "colores": "Amarillo, rojo, blanco o negro",
      "chips": [
        "NFPA 1977 ed. 1998",
        "Ala completa",
        "Suspensión 6 puntos"
      ],
      "resumen": [
        "El Bullard Wildland FH911H es un casco forestal de termoplástico Ultem con ala completa, suspensión automática de seis puntos y clips para sujetar goggles y bandas reflejantes.",
        "Se ofrece en amarillo, rojo, blanco y negro, y acepta soportes para viseras y pantallas faciales. Es el casco de nuestro kit forestal.",
        "Su fabricante declara NFPA 1977 edición 1998 y ANSI Z89.1-1997 Tipo 1 Clase C, E y G. La referencia vigente para equipo forestal es NFPA 1950."
      ],
      "duos": {
        "ficha": [
          "El Bullard Wildland FH911H se identifica con el código FH911H. La tabla reúne material, colores y normas tal como los publica su ficha.",
          "Las normas aparecen como declaración del fabricante y con su edición original, para compararlas con el requisito vigente de tu partida."
        ],
        "caracteristicas": [
          "Estas son las características que publica la ficha del FH911H, pensadas para trabajo exterior y jornadas largas.",
          "Los accesorios, como visera o pantalla facial, se eligen según la protección ocular que use tu cuadrilla."
        ],
        "faq": [
          "Respondemos lo que más se pregunta del Bullard FH911H: colores, norma, accesorios y kit forestal.",
          "Si vas a equipar una cuadrilla, dinos cuántas personas son y qué color usan, y te mandamos la cotización."
        ]
      }
    }
  ]
};
