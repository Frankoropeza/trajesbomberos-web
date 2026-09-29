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
      "title": "Casco estructural tradicional para bombero | México",
      "description": "Casco estructural tradicional para bombero: componentes, norma de referencia, compatibilidad con ERA y qué pedir al cotizar.",
      "lead": "El casco estructural tradicional combina ala trasera, cubrenuca de Nomex y retención para ataque en edificaciones bajo la referencia NFPA 1970.",
      "imagen": {
        "src": "/images/catalogo/cascos/tipo-casco-estructural-tradicional.avif",
        "alt": "Casco estructural tradicional estilo americano para bombero",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      },
      "bloques": [
        {
          "h2": "Casco tradicional para ataque estructural",
          "parrafos": [
            "Cotizamos casco estructural tradicional para cuerpos de bomberos y brigadas que entran a edificaciones con ERA. Elige Bullard LTX, Bullard UST LW o Sköld Viking cuando tu partida requiera ala trasera, cubrenuca de Nomex y la referencia NFPA 1970 o NFPA 1971 declarada por fabricante.",
            "Surtimos este formato cuando la operación necesita desviar escurrimientos y conservar cobertura de nuca con máscara de ERA. Pide fibra de vidrio en UST LW si priorizas masa, o termoplástico de alto impacto en LTX y Viking si tu pliego ya define ese material, con cubrenuca de Nomex y retención documentada."
          ]
        },
        {
          "h2": "Partida y configuración del casco",
          "parrafos": [
            "En cada cotización escribimos modelo, código, carcasa, suspensión, barbiquejo, visor y norma declarada. Para una compra comparable, elige una sola configuración por partida y pide que color amarillo o rojo, cubrenuca de Nomex y protección ocular queden asentados antes de ordenar, junto con máscara de ERA y chaquetón de la prueba.",
            "Revisamos con tu brigada la interfaz entre máscara de ERA, monja, cuello del chaquetón y visor. Pide la opción ReTrack, careta o goggles en UST LW según esa prueba; para LTX solicita visor de policarbonato de 4 pulgadas si esa es la protección ocular requerida."
          ],
          "lista": [
            "Modelo: Bullard LTX, UST LW o Sköld Viking",
            "Carcasa: termoplástico o fibra de vidrio",
            "Suspensión: 6 puntos, red o Sure-Lock",
            "Retención: barbiquejo de 2 o 4 puntos",
            "Protección ocular: visor, careta o goggles",
            "Norma: NFPA 1971 declarada por fabricante"
          ]
        },
        {
          "h2": "Modelos estructurales que surtimos",
          "parrafos": [
            "Surtimos Bullard LTX CBOM1007 con termoplástico, suspensión de 6 puntos, Nomex y NFPA 1971 ed. 2018 declarado. Elige LTX para una partida que también se integre al kit brigadista Romak BOM1001 o al kit estructural Profesional; pruébalo con ERA y chaquetón antes de liberar la orden.",
            "Para una configuración ultraligera cotizamos Bullard UST LW con fibra de vidrio, ReTrack y NFPA 1971-2018 declarado; para barbiquejo de 4 puntos proponemos Sköld Viking FPCM, termoplástico y NFPA 1971 / EN 443:2009 declarado. Pide la máscara de ERA y monja de tu corporación en la prueba de uso."
          ]
        },
        {
          "h2": "Errores de pliego que evitamos",
          "parrafos": [
            "Vemos órdenes que piden solo casco NFPA 1971 sin modelo, edición ni visor. Escribe Bullard LTX CBOM1007 con suspensión de 6 puntos, o UST LW con ReTrack, para que cotizamos exactamente el casco que tu operación evaluó y no una imagen parecida, con cubrenuca de Nomex y barbiquejo definidos.",
            "También llegan pliegos que mezclan goggles, careta y visor de policarbonato de 4 pulgadas sin definir la máscara de ERA. Pide una configuración de protección ocular y cubrenuca de Nomex por partida; así revisamos que el sello de la máscara y el cuello del chaquetón sigan funcionando."
          ]
        },
        {
          "h2": "Inspección, limpieza y retiro",
          "parrafos": [
            "Antes de guardia revisamos contigo carcasa, suspensión, matraca, barbiquejo, Nomex, visor y cintas 3M Scotchlite. Retira el casco con grieta, deformación, impacto o daño térmico, y registra el modelo Bullard o Sköld, NFPA 1971 declarado y color para pedir solo componentes compatibles.",
            "Después de una intervención, pide desmontar los componentes removibles de UST LW según fabricante y revisa el visor de policarbonato del LTX o Viking. Si calor, químicos o golpe cambiaron carcasa, lente o retención, retiramos la pieza y registramos la inspección antes de devolverla al servicio."
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
        "Comprar por color sin definir configuración",
        "Asumir que visor y máscara son compatibles sin probarlos",
        "Aceptar una norma sin edición ni modelo declarado",
        "Usar accesorios no especificados para completar el pedido"
      ],
      "faq": [
        {
          "q": "¿El casco tradicional sirve para rescate técnico?",
          "a": "Puede acompañar una operación, pero el rescate técnico suele pedir un perfil compacto y elementos propios. Selecciona por riesgo principal."
        },
        {
          "q": "¿Qué modelo tradicional se cotiza?",
          "a": "Hay fichas para Bullard LTX, Bullard UST LW y Sköld Viking; la configuración se confirma al cotizar."
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
        "El casco estructural tradicional protege en ataque de edificaciones con ala trasera, cubrenuca de Nomex y modelos Bullard LTX, Bullard UST LW o Sköld Viking, cada uno con su norma declarada.",
        "Cotizamos por WhatsApp modelo, visor, retención, color y compatibilidad con ERA. Pide una prueba con máscara, monja y chaquetón para que tu partida llegue con la configuración que realmente usa tu brigada."
      ]
    },
    {
      "slug": "casco-estructural-europeo",
      "seccion": "cascos",
      "nombre": "Casco estructural europeo (tipo jet)",
      "nombreCard": "Casco estructural europeo",
      "title": "Casco estructural europeo tipo jet para bombero | México",
      "description": "Casco estructural europeo tipo jet: cobertura, visor integrado, ERA y referencia EN 443:2008 para evaluar una cotización.",
      "lead": "El casco estructural europeo tipo jet concentra cobertura lateral, visor retráctil y coordinación con ERA bajo la referencia EN 443:2008.",
      "imagen": {
        "src": "/images/catalogo/cascos/tipo-casco-estructural-europeo.avif",
        "alt": "Casco estructural europeo tipo jet para bombero",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      },
      "bloques": [
        {
          "h2": "Casco jet para operación estructural",
          "parrafos": [
            "Cotizamos casco tipo jet para bomberos que requieren cobertura lateral, frontal y de nuca durante incendios en edificios. Elige este perfil si tu operación usa máscara de ERA, visor retráctil y comunicaciones; pide EN 443:2008 cuando esa referencia forme parte de tu pliego, con protector de nuca y retención declarados.",
            "Surtimos el tipo europeo según la configuración real, porque no hay modelo publicado en este catálogo. Pide visor exterior, ocular interior y retención en la misma partida si tu brigada necesita coordinar casco, máscara y comunicación sin perforar la carcasa, bajo EN 443:2008 y con protector de nuca."
          ]
        },
        {
          "h2": "Datos que ponemos en cotización",
          "parrafos": [
            "En la cotización anotamos uso estructural, EN 443:2008, visor, protector de nuca, color, retención y comunicación. Elige visor exterior si tu prueba exige cobertura facial, u ocular interior si tu máscara de ERA requiere otra posición de protección ocular, con chaquetón y guantes puestos.",
            "Revisamos el casco con máscara, regulador y micrófono antes de que ordenes un lote. Pide que el visor se guarde sin rozar ERA y que el cableado quede fuera de enganches; esa configuración define si el tipo jet funciona con tu chaquetón, guantes, protector de nuca y retención bajo EN 443:2008."
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
          "h2": "Modelo según tu operación",
          "parrafos": [
            "No publicamos un modelo tipo jet todavía; proponemos el casco cuando nos compartes operación, ERA, visor y comunicación requeridos. Elige una familia de traje estructural con chaquetón, monja y guantes que se pruebe junto con EN 443:2008, protector de nuca y el casco propuesto por fabricante.",
            "Surtimos la configuración documentada por fabricante, no una equivalencia supuesta. Pide un modelo con visor retráctil, retención y protector de nuca declarados si tu brigada trabaja con máscara de ERA; así la ficha de casco coincide con el conjunto estructural EN 443:2008 que vas a recibir con chaquetón y guantes."
          ]
        },
        {
          "h2": "Errores de compra del tipo jet",
          "parrafos": [
            "Vemos requisiciones que dicen visor dorado y omiten EN 443:2008, modelo y retención. Escribe la referencia, visor exterior u ocular interior, protector de nuca y compatibilidad con ERA para que cotizamos una configuración verificable de casco y retención para tu brigada.",
            "Otro error es agregar comunicación después de elegir el casco tipo jet. Pide micrófono, fijaciones y protector de nuca desde el pliego; revisamos que no haya presión sobre la cabeza ni interferencia con máscara, visor, chaquetón, guantes o retención EN 443:2008."
          ]
        },
        {
          "h2": "Revisión y retiro en servicio",
          "parrafos": [
            "Antes de cada guardia revisamos visor retráctil, ocular interior, retención, carcasa y fijaciones de comunicación. Retira el equipo si visor, soporte o carcasa pierden función, y registra EN 443:2008 junto con el modelo, protector de nuca y configuración para solicitar el repuesto correcto.",
            "Tras una intervención, pide limpieza conforme al fabricante y desmonta solo los accesorios previstos para el casco tipo jet. Si calor, impacto o contaminantes afectan visor, cableado o protector de nuca, retiramos esa configuración hasta que tu brigada vuelva a probarla con máscara de ERA."
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
        "Pedir solo “visor dorado” sin modelo ni alcance",
        "No probar el casco con máscara y comunicaciones",
        "Asumir equivalencia de normas sin documento",
        "Modificar la carcasa para instalar accesorios"
      ],
      "faq": [
        {
          "q": "¿Hay modelos tipo jet publicados?",
          "a": "No por ahora. La página explica cómo especificarlos sin asumir una marca o disponibilidad."
        },
        {
          "q": "¿El visor reemplaza la máscara de ERA?",
          "a": "No. El visor y la máscara cumplen funciones distintas y deben revisarse juntos."
        }
      ],
      "chips": [
        "EN 443:2008",
        "Visor retráctil",
        "Perfil jet"
      ],
      "resumen": [
        "El casco europeo tipo jet es una opción estructural con cobertura lateral, visor retráctil, protector de nuca y referencia EN 443:2008 para integrarse con máscara de ERA, chaquetón, guantes y comunicaciones.",
        "Cotizamos por WhatsApp la operación, visor, retención, protector de nuca y accesorios. Pide la prueba con tu máscara, micrófono, guantes y chaquetón EN 443:2008 antes de definir el modelo que surtiremos."
      ]
    },
    {
      "slug": "casco-forestal",
      "seccion": "cascos",
      "nombre": "Casco forestal",
      "nombreCard": "Casco forestal",
      "title": "Casco forestal para bombero | línea de fuego | México",
      "description": "Casco forestal para bombero: peso, ala completa, ventilación, goggles y norma de referencia para trabajo prolongado en línea de fuego.",
      "lead": "El casco forestal usa ala completa, goggles y suspensión de 6 puntos para línea de fuego y operación exterior bajo NFPA 1950.",
      "imagen": {
        "src": "/images/catalogo/cascos/tipo-casco-forestal.avif",
        "alt": "Casco forestal para bombero en operación de línea de fuego",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      },
      "bloques": [
        {
          "h2": "Casco forestal para línea de fuego",
          "parrafos": [
            "Cotizamos casco forestal para cuadrillas que caminan en pendiente, trabajan con vegetación y enfrentan ceniza al aire libre. Elige Bullard Wildland FH911H si tu operación necesita termoplástico Ultem, ala completa y suspensión automática de 6 puntos, clips para goggles y barbiquejo Nomex, no ataque interior estructural.",
            "Surtimos este casco cuando el pliego define línea de fuego, goggles y cubrenuca según la tarea. Pide NFPA 1950 como referencia vigente del catálogo o NFPA 1977 ed. 1998 declarado para FH911H, termoplástico Ultem y suspensión de 6 puntos, y separa esa partida del casco estructural con ERA."
          ]
        },
        {
          "h2": "Configuración forestal en la orden",
          "parrafos": [
            "Escribimos código FH911H, termoplástico Ultem, suspensión de 6 puntos, barbiquejo Nomex y clips para goggles. Elige amarillo, rojo, blanco o negro antes de ordenar, y pide bandas reflejantes, visera o pantalla facial solo si tu cuadrilla las prueba en pendiente, viento y línea de fuego.",
            "Revisamos goggles, cierres de velcro y sombra interior con tu protección ocular antes de cotizar. Pide soportes para viseras y pantallas faciales en la partida si los usarás; así verificamos que ala completa, cubrenuca, clips y barbiquejo Nomex no se levanten con viento durante la línea de fuego."
          ],
          "lista": [
            "Modelo: Bullard Wildland FH911H",
            "Carcasa: termoplástico Ultem",
            "Suspensión: automática de 6 puntos",
            "Retención: barbiquejo Nomex ajustable",
            "Accesorios: clips para goggles y bandas",
            "Colores: amarillo, rojo, blanco o negro"
          ]
        },
        {
          "h2": "Modelo forestal que surtimos",
          "parrafos": [
            "Surtimos Bullard Wildland FH911H con código FH911H, termoplástico Ultem y clips de retención para goggles. Elige este modelo para línea de fuego con goggles, cubrenuca, barbiquejo Nomex y ropa forestal; no lo combines como sustituto de casco estructural durante ataque interior con ERA.",
            "El fabricante declara NFPA 1977 ed. 1998 y ANSI Z89.1-1997 Tipo 1 Clase C, E y G. Pide esos datos tal como están declarados y prueba el barbiquejo Nomex con goggles, ala completa y protección ocular; nosotros confirmamos accesorios, color y suspensión automática de 6 puntos antes de liberar la orden."
          ]
        },
        {
          "h2": "Errores que frenan una partida forestal",
          "parrafos": [
            "Vemos compras que piden casco ligero sin nombrar FH911H, goggles ni barbiquejo Nomex. Escribe termoplástico Ultem, suspensión automática de 6 puntos, clips de retención y color para que cotizamos una configuración que tu cuadrilla pueda repetir durante la temporada de línea de fuego.",
            "También se confunde ANSI Z89.1-1997 Tipo 1 Clase C, E y G con casco para ataque interior. Pide casco estructural cuando uses ERA y fuego en edificios; deja NFPA 1977 ed. 1998 declarado, termoplástico Ultem y ala completa para la operación forestal que el FH911H sí cubre."
          ]
        },
        {
          "h2": "Limpieza y retiro forestal",
          "parrafos": [
            "Antes de salir revisamos ala completa, clips para goggles, velcro, suspensión de 6 puntos y barbiquejo Nomex. Retira FH911H con carcasa Ultem deformada, clip roto o retención sin ajuste, y registra color, código, NFPA 1977 ed. 1998 declarado y accesorios para que el repuesto conserve la partida.",
            "Después de línea de fuego, pide limpieza según fabricante y revisa ceniza, calor y contaminantes en visera, pantalla facial y bandas reflejantes del Bullard FH911H. Si una intervención altera la suspensión automática o los cierres de velcro, retiramos el casco hasta que tu cuadrilla vuelva a probar goggles y retención."
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
        "Usarlo para ataque interior estructural",
        "Confundir clase industrial con protección forestal completa",
        "No definir goggles y cubrenuca",
        "Ignorar la edición declarada por el modelo"
      ],
      "faq": [
        {
          "q": "¿El casco forestal sirve para combate estructural?",
          "a": "No se selecciona para ataque interior. Elige casco estructural cuando ese es el riesgo."
        },
        {
          "q": "¿Qué goggles se mencionan?",
          "a": "ESS Striketeam XTO se menciona como complemento sin enlace, porque esa sección aún no está publicada."
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
        "El casco forestal Bullard Wildland FH911H combina termoplástico Ultem, ala completa, suspensión automática de 6 puntos, clips para goggles y barbiquejo Nomex en operación exterior de línea de fuego.",
        "Cotizamos por WhatsApp color, goggles, visera, pantalla, clips y barbiquejo Nomex. Pide la prueba de pendiente y línea de fuego con suspensión de 6 puntos; para ataque interior surtimos casco estructural con ERA."
      ]
    },
    {
      "slug": "casco-rescate-tecnico",
      "seccion": "cascos",
      "nombre": "Casco de rescate técnico",
      "nombreCard": "Casco de rescate técnico",
      "title": "Casco de rescate técnico para bombero | México",
      "description": "Casco de rescate técnico: perfil compacto, retención de cuatro puntos, lámpara y referencias para rescate vehicular, vertical y espacios confinados.",
      "lead": "El casco de rescate técnico combina perfil compacto y barbiquejo de 4 puntos para maniobras vehiculares, verticales y espacios confinados bajo NFPA 2500.",
      "imagen": {
        "src": "/images/catalogo/cascos/tipo-casco-rescate-tecnico.avif",
        "alt": "Casco compacto para rescate técnico de bombero",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      },
      "bloques": [
        {
          "h2": "Casco compacto para rescate técnico",
          "parrafos": [
            "Cotizamos casco de rescate técnico para equipos que entran a vehículo, ascienden con arnés o trabajan bajo tablero. Elige perfil compacto y barbiquejo de 4 puntos si tu maniobra prioriza reducir enganches; pide NFPA 2500, portalámpara, visor o goggles cuando esa referencia corresponde al riesgo documentado.",
            "Surtimos el tipo según rescate vehicular, vertical o espacios confinados, porque no hay modelo publicado todavía. Pide lámpara, goggles y visor desde el pliego si tu equipo los usa, y combínalo con traje de rescate, arnés, barbiquejo de 4 puntos y herramienta que probarás en acceso real."
          ]
        },
        {
          "h2": "Campos de la cotización técnica",
          "parrafos": [
            "En la cotización escribimos NFPA 2500, perfil sin ala, retención de 4 puntos, portalámpara y protección ocular. Elige visor para partículas o goggles para tu maniobra, y pide compatibilidad con arnés, lámpara y herramienta para que el casco no cree enganches al entrar a vehículo o descender.",
            "Revisamos con tu equipo lámpara, cuerda, arnés y protección ocular durante una práctica. Pide EN 12492 o EN 16471-16473 solo si tu requisito las solicita; así proponemos un modelo con el estatus declarado, barbiquejo de 4 puntos y perfil compacto que corresponde a rescate técnico y no a incendio estructural."
          ],
          "lista": [
            "Uso: vehicular, vertical o confinados",
            "Referencia: NFPA 2500",
            "Perfil: compacto sin ala",
            "Retención: barbiquejo de 4 puntos",
            "Accesorios: lámpara, visor o goggles",
            "Interfaz: arnés y herramienta de rescate"
          ]
        },
        {
          "h2": "Modelo para cada maniobra",
          "parrafos": [
            "No surtimos un modelo publicado de rescate técnico en este catálogo; proponemos el modelo después de revisar NFPA 2500, arnés y lámpara de tu operación. Elige traje de rescate y protección ocular para la misma maniobra, no un casco estructural solo porque comparte color institucional.",
            "Para rescate vertical pedimos prueba con cuerda y arnés; para vehicular, visor y acceso bajo tablero; para confinados, el procedimiento respiratorio. Pide perfil compacto y barbiquejo de 4 puntos según la familia de traje que usará tu equipo, y cotizamos la configuración declarada por fabricante."
          ]
        },
        {
          "h2": "Fallas de pliego que corregimos",
          "parrafos": [
            "Vemos pliegos que solicitan casco de rescate sin decir NFPA 2500, vehículo, arnés o lámpara. Escribe la maniobra y protección ocular para que proponemos un modelo con perfil compacto, retención de 4 puntos, visor o goggles y accesorios que tu personal pueda usar.",
            "Otro error es pedir soporte de lámpara sin probarlo con cuerda o visor. Pide portalámpara, goggles, perfil compacto y compatibilidad con arnés en la orden; revisamos enganches y campo visual antes de que tu brigada acepte una partida de rescate técnico con retención de 4 puntos."
          ]
        },
        {
          "h2": "Inspección después de la maniobra",
          "parrafos": [
            "Antes de practicar revisamos carcasa, barbiquejo de 4 puntos, portalámpara, visor y goggles. Retira el casco si golpe, cuerda o herramienta dañan retención o perfil compacto, y registra NFPA 2500, modelo, arnés y configuración de lámpara para mantener trazabilidad de cada equipo.",
            "Después de rescate vehicular o vertical, pide limpieza según fabricante y verifica fijaciones de lámpara, visor y arnés. Si contaminantes, impacto o desgaste cambian el ajuste de 4 puntos, retiramos el casco hasta que tu equipo complete una prueba de acceso con la configuración correcta."
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
        "Usar casco estructural como sustituto por costumbre",
        "Instalar lámparas perforando la carcasa",
        "No definir operación principal",
        "No probar con arnés y protección ocular"
      ],
      "faq": [
        {
          "q": "¿Hay modelos publicados?",
          "a": "No por ahora; solicita cotización con la operación y accesorios requeridos."
        },
        {
          "q": "¿Sirve para espacios confinados?",
          "a": "Puede formar parte del EPP, pero el procedimiento define además requisitos respiratorios y de rescate."
        }
      ],
      "chips": [
        "NFPA 2500",
        "Perfil compacto",
        "Barbiquejo 4 puntos"
      ],
      "resumen": [
        "El casco de rescate técnico usa perfil compacto, barbiquejo de 4 puntos, portalámpara y referencia NFPA 2500 para maniobras vehiculares, verticales y espacios confinados con arnés, visor o goggles.",
        "Cotizamos por WhatsApp la maniobra, lámpara, goggles, visor, arnés y retención de 4 puntos. Pide una prueba de acceso con tu traje de rescate y NFPA 2500 antes de elegir el modelo que propondremos."
      ]
    },
    {
      "slug": "casco-brigada-industrial",
      "seccion": "cascos",
      "nombre": "Casco para brigada industrial",
      "nombreCard": "Casco para brigada industrial",
      "title": "Casco para brigada industrial contra incendio | México",
      "description": "Casco para brigada industrial: cuándo basta un casco industrial y cuándo el riesgo exige casco estructural para combate interior.",
      "lead": "El casco para brigada industrial se elige por análisis de riesgo: casco industrial para conatos o casco estructural con ERA para ataque interior.",
      "imagen": {
        "src": "/images/catalogo/cascos/tipo-casco-brigada-industrial.avif",
        "alt": "Casco para brigada industrial contra incendio",
        "width": 1600,
        "height": 900,
        "origen": "ia"
      },
      "bloques": [
        {
          "h2": "Casco según tarea de brigada",
          "parrafos": [
            "Cotizamos casco para brigada industrial a partir de NOM-002-STPS-2010 y de la tarea autorizada. Elige casco industrial con careta para conatos definidos, o casco estructural con ERA si tu procedimiento contempla incendio en edificio, Bullard LTX CBOM1007 y suspensión de 6 puntos, porque ambas partidas responden a riesgos distintos.",
            "Surtimos Bullard LTX cuando tu análisis justifica casco estructural dentro del kit brigadista Romak BOM1001. Pide casco industrial bajo NOM-115-STPS-2009 o ANSI/ISEA Z89.1 solo si tu brigada controla conatos sin ataque interior y prueba lentes, careta, guantes, ropa y barbiquejo juntos."
          ]
        },
        {
          "h2": "Cómo redactamos la partida industrial",
          "parrafos": [
            "En cada cotización escribimos conato o ataque interior, NOM-002-STPS-2010, casco industrial o estructural, careta, color y marcaje. Elige la clase industrial aplicable antes de ordenar, y pide barbiquejo, protección ocular y NOM-115-STPS-2009 o ANSI/ISEA Z89.1 si tu brigada los requiere durante evacuación o respuesta inicial.",
            "Revisamos la interfaz con lentes, careta y guantes para conatos, o con ERA, monja y chaquetón para casco estructural. Pide Bullard LTX CBOM1007 con suspensión de 6 puntos si tu partida requiere el kit Romak BOM1001; así la orden deja claro el nivel de operación."
          ],
          "lista": [
            "Escenario: conato o ataque interior",
            "Referencia: NOM-002-STPS-2010",
            "Industrial: NOM-115-STPS-2009",
            "Industrial: ANSI/ISEA Z89.1",
            "Estructural: Bullard LTX CBOM1007",
            "Accesorios: careta, color y marcaje"
          ]
        },
        {
          "h2": "Modelo y conjunto que surtimos",
          "parrafos": [
            "Surtimos Bullard LTX CBOM1007 para brigada que requiere casco estructural, termoplástico de alto impacto, Nomex y NFPA 1971 ed. 2018 declarado. Elige LTX con ERA, monja, chaquetón, guantes, visor de policarbonato de 4 pulgadas y suspensión de 6 puntos si tu análisis de riesgo permite ataque interior y el conjunto se prueba completo.",
            "Para conatos proponemos casco industrial con careta conforme a NOM-115-STPS-2009 o ANSI/ISEA Z89.1 según el requisito. Pide que el modelo industrial se combine con ropa de brigadista, lentes, guantes y barbiquejo; no lo presentes como sustituto de LTX CBOM1007 cuando la escena exige máscara de ERA y NFPA 1971 ed. 2018 declarado."
          ]
        },
        {
          "h2": "Errores que vemos en órdenes",
          "parrafos": [
            "Vemos compras que nombran NOM-002-STPS-2010 y omiten conato o ataque interior. Escribe la tarea, careta, límite de uso, NOM-115-STPS-2009 o ANSI/ISEA Z89.1 para que cotizamos casco industrial o Bullard LTX CBOM1007 sin dejar que tu brigada reciba una partida ambigua.",
            "Otro error es agregar careta a casco industrial para resolver ERA y fuego en edificio. Pide casco estructural LTX CBOM1007, Nomex, visor de policarbonato de 4 pulgadas y suspensión de 6 puntos si corresponde; revisamos máscara, monja y chaquetón para que el conjunto tenga la configuración solicitada."
          ]
        },
        {
          "h2": "Inspección y límites de retiro",
          "parrafos": [
            "Antes de turno revisamos casco industrial, careta, barbiquejo, lentes y marcado, o Bullard LTX, Nomex y visor de 4 pulgadas para ataque interior. Retira piezas con grietas, daño térmico o retención sin función y registra NOM-002-STPS-2010, LTX CBOM1007 y suspensión de 6 puntos junto con la asignación.",
            "Después de respuesta a conato o incendio, pide limpieza conforme al fabricante y verifica careta, carcasa, visor y suspensión de 6 puntos. Si la operación rebasó el alcance industrial o dañó el LTX, retiramos el casco y pedimos evaluación del conjunto con ERA antes de devolverlo a tu brigada."
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
        "Usar casco industrial para ataque interior",
        "Añadir careta como supuesto equivalente estructural",
        "No documentar límites de respuesta de la brigada"
      ],
      "faq": [
        {
          "q": "¿Un casco industrial puede entrar a un incendio?",
          "a": "Solo dentro del alcance definido por análisis de riesgo y procedimiento de conato; no sustituye casco estructural en ataque interior."
        },
        {
          "q": "¿Qué modelo se relaciona con kit brigadista?",
          "a": "Bullard LTX, incluido en el kit Romak BOM1001; su configuración se confirma al cotizar."
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
        "La brigada industrial usa casco industrial con careta para conatos definidos bajo NOM-115-STPS-2009 o ANSI/ISEA Z89.1, o casco estructural Bullard LTX CBOM1007 con ERA para ataque interior, según NOM-002-STPS-2010.",
        "Cotizamos por WhatsApp la tarea, careta, color, marcaje, límite de uso y LTX CBOM1007. Pide que tu brigada pruebe el conjunto completo con ERA, monja, chaquetón y suspensión de 6 puntos antes de ordenar una partida industrial o estructural."
      ]
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
        "Elige Bullard LTX CBOM1007 si tu partida estructural requiere carcasa de termoplástico de alto impacto, ajuste ratchet y suspensión de 6 puntos. En la orden escribimos CBOM1007, amarillo o rojo, visor de policarbonato de 4 pulgadas y cubrenuca de Nomex para que recibas exactamente la versión que evaluó tu brigada, con cintas 3M Scotchlite, barbiquejo de 2 puntos, monja y máscara de ERA.",
        "La construcción declara forro interior, cintas 3M Scotchlite, contorno recubierto en cuero, termoplástico de alto impacto y suspensión de 6 puntos. En la prueba de talla revisamos ratchet, estabilidad y la posición del visor de 4 pulgadas; pide que el casco no gire al mirar arriba con máscara de ERA puesta, monja, chaquetón y barbiquejo Nomex de 2 puntos ajustados.",
        "El LTX incorpora protector de cuello y nuca de Nomex, barbiquejo Nomex de 2 puntos con desenganche rápido metálico y colgador metálico. Elige este conjunto con monja y chaquetón para trabajo estructural, o pídelo dentro de Romak BOM1001 si tu brigada usa ese kit; confirmamos color, visor de policarbonato de 4 pulgadas, ERA, suspensión de 6 puntos y accesorios antes de surtir.",
        "En operación estructural probamos LTX CBOM1007 con ERA, monja, chaquetón y guantes antes de aceptar un lote. Pide que cada usuario ajuste el ratchet, despliegue el visor de policarbonato de 4 pulgadas y haga movimientos de escalera; así revisamos retención, campo visual, cobertura de Nomex, cintas 3M Scotchlite, barbiquejo de 2 puntos y termoplástico de alto impacto.",
        "El fabricante declara NFPA 1971 ed. 2018; no publicamos número UL ni la presentamos como certificación. Antes de servicio revisamos termoplástico, suspensión de 6 puntos, Nomex y visor; retira LTX con impacto, deformación, daño térmico o retención sin función y registra CBOM1007, color, visor de policarbonato de 4 pulgadas, barbiquejo de 2 puntos, cintas 3M Scotchlite y fecha de inspección."
      ],
      "faq": [
        {
          "q": "¿Qué código tiene el Bullard LTX?",
          "a": "CBOM1007."
        },
        {
          "q": "¿La norma está verificada como certificación?",
          "a": "La ficha disponible declara NFPA 1971 ed. 2018, sin número de certificación; por eso se comunica como declaración del fabricante."
        },
        {
          "q": "¿Qué colores se mencionan?",
          "a": "Amarillo o rojo, sujetos a la configuración confirmada en cotización."
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
        "Cotizamos Bullard LTX CBOM1007 para brigadas y bomberos que requieren termoplástico de alto impacto, ajuste ratchet y suspensión de 6 puntos. Elige amarillo o rojo según tu identificación, y pide visor de policarbonato de 4 pulgadas junto con cubrenuca de Nomex, cintas 3M Scotchlite y la configuración que evaluará tu brigada.",
        "Surtimos LTX dentro del kit brigadista Romak BOM1001 o del kit estructural Profesional cuando tu operación lo justifica. Antes de ordenar, pide que tu personal pruebe barbiquejo Nomex de 2 puntos, máscara de ERA, monja y cuello del chaquetón con la misma configuración, visor de policarbonato de 4 pulgadas y ajuste ratchet."
      ]
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
        "Elige Bullard UST LW si buscas estilo Nueva York con fibra de vidrio, resina ignífuga termoestable y ajuste Sure-Lock. En la orden pedimos código según configuración, visor ReTrack, careta o goggles y NFPA 1971-2018 declarado, para que tu brigada no reciba una protección ocular distinta de la que probó, con nuquera Nomex de 6 oz y barbiquejo de 2 piezas.",
        "La carcasa de fibra de vidrio incorpora resina ignífuga termoestable y Sure-Lock con perilla, 6 combinaciones de inclinación y altura. En prueba de talla revisamos cada ajuste con máscara de ERA y campo visual; pide la posición que mantenga el casco estable al agacharte, mirar arriba y mover la cabeza, con nuquera Nomex de 6 oz, chaquetón y barbiquejo de 2 piezas.",
        "UST LW acepta visor integrado ReTrack, careta o goggles, y usa barbiquejo de 2 piezas de Nomex negro con hebilla de liberación rápida. Elige ReTrack para tu protección ocular si la prueba lo confirma, y pide la nuquera Nomex de 6 oz con 3 capas de algodón FR junto con chaquetón, monja, máscara de ERA y Sure-Lock durante la prueba.",
        "El fabricante declara masa menor a 1.54 kg con ReTrack y menor a 1.77 kg con careta. Antes de aceptar un lote, revisamos Sure-Lock, ReTrack, barbiquejo Nomex y componentes removibles con ERA; pide que el equipo haga movimientos de escalera y no pierda sellado ni equilibrio, con las 6 combinaciones de inclinación, altura, monja, chaquetón y nuquera Nomex de 6 oz.",
        "Bullard declara NFPA 1971-2018 y protección ocular conforme a ANSI/ISEA Z87.1; no publicamos número UL ni la presentamos como certificación. Antes de guardia revisamos fibra de vidrio, perilla, 6 ajustes y retención; retira UST LW tras impacto, calor o daño que afecte carcasa o visor, y registra ReTrack, careta o goggles, nuquera Nomex de 6 oz y barbiquejo de 2 piezas."
      ],
      "faq": [
        {
          "q": "¿Cuál es el código del UST LW?",
          "a": "Depende de la configuración; confírmalo al cotizar."
        },
        {
          "q": "¿Qué peso declara?",
          "a": "Menor a 1.54 kg con ReTrack y menor a 1.77 kg con careta."
        },
        {
          "q": "¿Tiene foto propia?",
          "a": "No en este catálogo; se muestra una imagen ilustrativa del tipo de casco."
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
        "Cotizamos Bullard UST LW cuando tu brigada pide fibra de vidrio con resina ignífuga termoestable, ajuste Sure-Lock y visor ReTrack. Elige careta o goggles y confirma el código según configuración; revisamos las 6 combinaciones de inclinación y altura con tu máscara de ERA, nuquera Nomex de 6 oz y barbiquejo de 2 piezas.",
        "Surtimos UST LW con componentes removibles para descontaminación, nuquera Nomex de 6 oz y protección ocular ANSI/ISEA Z87.1 declarada. Pide ReTrack si tu operación requiere esa configuración, o careta si tu prueba de uso conserva ajuste, visibilidad y retención con el chaquetón, monja y máscara de ERA."
      ]
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
        "Elige Sköld Viking FPCM si tu orden requiere termoplástico de alta densidad, costilla central, frente triangular y retención de 4 puntos. Nosotros escribimos FPCM, color amarillo y protector facial de policarbonato para que tu brigada reciba la configuración Viking que puede probar con máscara de ERA, faldón Nomex, nuquera aluminizada, matraca y suspensión de red.",
        "Viking declara faldón con forro interno de Nomex, nuquera aluminizada con forro Nomex, acolchado frontal, matraca y suspensión de red. En la prueba de talla revisamos mentonera, ajuste y cobertura de nuca; pide que casco y máscara de ERA se mantengan en posición al mirar arriba y bajar la cabeza, con protector facial de policarbonato desplegado, barbiquejo de 4 puntos y chaquetón.",
        "El modelo integra barbiquejo de 4 puntos con mentonera y retiro rápido, bisel protector y soporte trasero para colgar. Elige protector facial antirrayas y antiempaño si tu maniobra lo requiere, y combínalo con monja, chaquetón, guantes estructurales, máscara de ERA, faldón Nomex y nuquera aluminizada; confirmamos accesorios antes de surtir Viking FPCM.",
        "Durante la prueba de operación revisamos Viking FPCM con arnés de ERA, visor y movimientos de escalera. El fabricante menciona película térmica para 800 °C; pide verificar carcasa, matraca, suspensión de red, faldón Nomex, nuquera aluminizada y protector facial antes de aceptar un lote, sin convertir ese dato en sustituto del conjunto estructural.",
        "Sköld declara NFPA 1971 / EN 443:2009 y compatibilidad con ERA; no publicamos número UL ni la presentamos como certificación. Antes y después de intervención revisamos termoplástico, Nomex, nuquera aluminizada y barbiquejo; retira FPCM si impacto, calor o daño afectan retención, visor, carcasa, protector facial de policarbonato, matraca o suspensión de red."
      ],
      "faq": [
        {
          "q": "¿Cuál es el código del Sköld Viking?",
          "a": "FPCM."
        },
        {
          "q": "¿Es compatible con ERA?",
          "a": "El fabricante lo declara compatible; confirma físicamente la interfaz con el ERA de tu corporación."
        },
        {
          "q": "¿Qué protección facial declara?",
          "a": "Protector de policarbonato antirrayas y antiempaño con película térmica para 800 °C, según fabricante."
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
        "Cotizamos Sköld Viking FPCM para una partida estructural que requiere termoplástico de alta densidad, matraca y barbiquejo de 4 puntos. Elige color amarillo, protector facial de policarbonato y compatibilidad con ERA declarada; pide prueba con máscara, arnés, monja, chaquetón, faldón Nomex, nuquera aluminizada y película térmica para 800 °C.",
        "Surtimos Viking con faldón Nomex, nuquera aluminizada y película térmica para 800 °C según fabricante. Para tu orden escribe FPCM, protector facial antirrayas y antiempaño, suspensión de red y retiro rápido; revisamos que esa configuración conserve cobertura, campo visual, barbiquejo de 4 puntos y posición con máscara de ERA."
      ]
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
        "Elige Bullard Wildland FH911H para operación forestal si tu partida requiere termoplástico Ultem, ala completa y suspensión automática de 6 puntos. En la orden escribimos FH911H, amarillo, rojo, blanco o negro, y clips para goggles para que tu cuadrilla reciba una configuración de línea de fuego verificable, con barbiquejo Nomex ajustable, bandas reflejantes, sombra interior y velcro.",
        "FH911H declara carcasa Ultem, suspensión automática de 6 puntos, sombra interior, cierres de velcro y clips de retención para goggles y bandas reflejantes. En prueba de talla revisamos ala completa, velcro y ajuste con goggles; pide que el casco conserve posición al caminar en pendiente, agacharte y mirar la línea de fuego, con barbiquejo Nomex ajustable, visera o pantalla facial.",
        "El modelo acepta soportes para viseras y pantallas faciales, e incorpora barbiquejo Nomex ajustable. Elige visera, pantalla, bandas o goggles según tu protección ocular, y pídelo con cubrenuca si corresponde a tu equipo forestal; confirmamos color, clips de retención, suspensión automática de 6 puntos y accesorios antes de surtir Bullard FH911H para operación forestal.",
        "En operación exterior probamos FH911H con goggles, barbiquejo Nomex y movimientos de pendiente antes de aceptar un lote. Pide revisar clips, suspensión de 6 puntos, velcro, ala completa, sombra interior y pantalla facial después de ceniza o viento con tu brigada; el casco forestal no sustituye casco estructural con ERA para incendio interior.",
        "El fabricante declara NFPA 1977 ed. 1998 y ANSI Z89.1-1997 Tipo 1 Clase C, E y G; no publicamos número UL ni la presentamos como certificación. Antes y después de guardia revisamos Ultem, suspensión, clips, velcro y barbiquejo Nomex; retira FH911H por impacto, calor, deformación o retención sin función y registra inspección."
      ],
      "faq": [
        {
          "q": "¿Cuál es el código?",
          "a": "FH911H."
        },
        {
          "q": "¿Qué colores reporta el proveedor?",
          "a": "Amarillo, rojo, blanco y negro."
        },
        {
          "q": "¿Por qué se menciona una edición antigua?",
          "a": "La ficha declara NFPA 1977 ed. 1998 y ANSI Z89.1-1997; se reporta tal cual para compararla con el requisito vigente."
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
        "Cotizamos Bullard Wildland FH911H para línea de fuego con termoplástico Ultem, ala completa y suspensión automática de 6 puntos. Elige amarillo, rojo, blanco o negro y pide clips para goggles, bandas reflejantes, visera o pantalla según la prueba de tu cuadrilla, con barbiquejo Nomex ajustable y cubrenuca si aplica.",
        "Surtimos FH911H con barbiquejo Nomex ajustable, sombra interior y velcro para operación exterior. Pide goggles y cubrenuca si tu jornada los requiere, y separa esta partida de casco estructural con ERA; revisamos ajuste en pendiente, viento, contacto con vegetación, clips de retención y suspensión automática de 6 puntos."
      ]
    }
  ]
};
