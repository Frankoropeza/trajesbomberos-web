// Datos del catálogo · sección «marcas» (trajesbomberos.com).
// LITERAL PURO: sin funciones, sin mutaciones, sin plantillas. Se edita solo el texto;
// `astro check` valida la estructura contra ../types. Generado por scripts/emit_data.py
// (2026-09-29) a partir del contenido vigente; desde aquí se edita a mano o con Codex.
import type { Modelo, Seccion, Tipo } from '../types';

export const data: { seccion?: Seccion; tipos: Tipo[]; modelos: Modelo[] } = {
  "seccion": {
    "slug": "marcas",
    "nombre": "Marcas",
    "hero": {
      "src": "/images/catalogo/marcas/hero-marcas.avif",
      "alt": "Marcas de equipo y trajes para bombero"
    }
  },
  "tipos": [
    {
      "slug": "romak-fire",
      "seccion": "marcas",
      "nombre": "Romak Fire",
      "nombreCard": "Romak Fire",
      "title": "Romak Fire: trajes para bombero y equipo contra incendio",
      "description": "Romak Fire: trajes para bombero estructurales, de brigadista, forestales y de aproximación, más botas, guantes y herramientas. Consulta modelos y cotiza.",
      "lead": "Romak Fire es la marca con más modelos en nuestro catálogo: diez trajes para estructural, brigada, forestal y aproximación, más guante, capucha, botas, maleta y barra Halligan.",
      "chips": [
        "Traje estructural",
        "Proximidad",
        "Brigada y forestal",
        "Configuración por modelo"
      ],
      "resumen": [
        "Cotizamos 16 modelos Romak Fire. En trajes: Protector, Profesional, Defender, Vantage y Maverick II para estructural; Combate Básico para brigada; Fire Ranger Explorer, Fire Ranger Scout y BOMW1002 para forestal, y Mark One MPX-8 para aproximación.",
        "Cada modelo conserva el estatus que publica el fabricante: cinco trajes con certificación UL, otros declarados, por materiales o sin norma. Te decimos cuál conviene según tu operación y con qué piezas se arma el conjunto."
      ],
      "bloques": [
        {
          "eyebrow": "Qué surtimos",
          "h2": "Una marca, cuatro operaciones",
          "parrafos": [
            "Romak Fire cubre las cuatro operaciones principales de un cuerpo de bomberos o una brigada: incendio estructural, brigada industrial, incendio forestal y aproximación a calor radiante. Por eso aparece en casi todos nuestros kits.",
            "La marca no es una garantía por sí sola. Dentro de Romak Fire conviven trajes certificados por UL con prendas que solo declaran materiales, y cada uno se cotiza con su propia ficha."
          ]
        },
        {
          "eyebrow": "Cómo elegir",
          "id": "elegir",
          "h2": "Qué modelo Romak Fire corresponde a tu operación",
          "parrafos": [
            "Para ataque interior en edificación, los estructurales con certificación UL: Protector, Profesional, Defender y Vantage. Para brigada de planta, el Combate Básico. Para monte, los Fire Ranger o el BOMW1002. Para calor radiante en aeropuerto o industria, el Mark One MPX-8.",
            "Dentro de cada línea, lo que cambia es la tela exterior, las barreras y el color. Por eso un pedido Romak Fire se escribe con modelo, código cuando existe, tela, barreras, color, talla por elemento y estatus normativo."
          ],
          "lista": [
            "Estructural: Protector, Profesional, Defender, Vantage, Maverick II",
            "Brigada: Combate Básico BOM1001",
            "Forestal: Fire Ranger Explorer, Fire Ranger Scout, BOMW1002",
            "Aproximación: Mark One MPX-8 BOM1046",
            "Certificados UL: MH14790 del Protector y MH48840 del Mark One",
            "Complementos: Firemax VI, CAP1005, Workman Fire, Fire Ranger, BPS1005, HAC1007"
          ]
        },
        {
          "eyebrow": "El conjunto",
          "h2": "Con qué se completa un traje Romak Fire",
          "parrafos": [
            "La marca aporta el guante Firemax VI para brigada, la capucha over-face CAP1005, las botas Workman Fire y Fire Ranger, la maleta porta-equipo BPS1005 y la barra Halligan HAC1007. Las cotizamos por pieza o dentro del kit estructural, brigadista o forestal.",
            "Casco, ERA y guante estructural los surtimos de otras marcas, como Bullard, Sköld y Veridian. El traje Romak Fire funciona con ellos siempre que se pruebe el solape de cuello y puño con el equipo real."
          ]
        },
        {
          "eyebrow": "En servicio",
          "h2": "Inspección y reposición de equipo Romak Fire",
          "parrafos": [
            "Antes de cada guardia se revisan exterior, cinta reflejante, costuras, cierres, puños y refuerzos. En estructural se sigue la NFPA 1850; en brigada industrial, el procedimiento del centro de trabajo y la NOM-002-STPS-2010.",
            "Para reponer una prenda, mándanos la etiqueta interior. Confirmamos modelo, tela y código, y si el fabricante cambió la configuración te avisamos antes de que la pidas."
          ]
        }
      ],
      "especificacion": [
        {
          "campo": "Fabricante",
          "valor": "Romak Fire"
        },
        {
          "campo": "Líneas",
          "valor": "Protector, Profesional, Defender, Vantage, Maverick II, Mark One, Fire Ranger y Combate Básico"
        },
        {
          "campo": "Declaraciones",
          "valor": "UL MH14790 estructural y MH48840 proximidad, cuando corresponda al modelo"
        },
        {
          "campo": "Gestión declarada",
          "valor": "ISO 9001:2015"
        },
        {
          "campo": "Selección",
          "valor": "Modelo, talla y configuración definidos por operación"
        }
      ],
      "normas": [
        {
          "norma": "UL MH14790 / MH48840",
          "alcance": "Referencias declaradas por el fabricante para líneas y configuraciones que las indiquen."
        },
        {
          "norma": "ISO 9001:2015",
          "alcance": "Referencia de fabricación declarada; no sustituye la documentación del producto."
        }
      ],
      "errores": [
        "Pedir «traje Romak» sin modelo ni configuración",
        "Dar por certificado cualquier modelo de la marca",
        "Confundir la gestión ISO 9001 con certificación de desempeño",
        "Omitir talla, código y tela por elemento",
        "Reponer una pieza sin revisar la configuración del lote"
      ],
      "faq": [
        {
          "q": "¿Qué trajes Romak Fire tienen certificación UL?",
          "a": "Protector, Profesional, Defender y Vantage, para estructural, y Mark One MPX-8, para proximidad. El Protector publica el número MH14790 y el Mark One, el MH48840."
        },
        {
          "q": "¿Romak Fire tiene trajes forestales?",
          "a": "Sí: el overol Fire Ranger Explorer, el Fire Ranger Scout de dos piezas y el saco y pantalón BOMW1002."
        },
        {
          "q": "¿Qué traje Romak Fire conviene para una brigada industrial?",
          "a": "El Combate Básico BOM1001, pensado para respuesta inicial y conato. Si la brigada hace ataque interior, conviene un estructural."
        },
        {
          "q": "¿Romak Fire fabrica cascos y ERA?",
          "a": "En nuestro catálogo no. Casco y ERA los surtimos de otras marcas y los probamos con el traje Romak Fire."
        },
        {
          "q": "¿Puedo pedir solo una pieza Romak Fire?",
          "a": "Sí. Para reponerla conviene mandar la etiqueta de la prenda que sigue en servicio, para confirmar talla, código y tela."
        }
      ],
      "duos": {
        "ficha": [
          "La tabla resume lo que publica la marca: líneas de producto, certificaciones con número donde existen y la gestión de calidad ISO 9001:2015 que declara.",
          "Cada certificación pertenece a un modelo y a una configuración. No se extiende a toda la marca, y así la escribimos en la cotización."
        ],
        "errores": [
          "Casi todos los errores al comprar Romak Fire vienen de tratar a la marca como si fuera un solo producto.",
          "Estos cinco puntos se resuelven pidiendo modelo, tela y estatus por partida."
        ],
        "marca": [
          "Estos son los modelos Romak Fire con ficha publicada en nuestro catálogo, de trajes a complementos.",
          "Cada ficha muestra su estatus normativo tal como lo publica el fabricante: certificado UL, declarado, por materiales o sin norma."
        ],
        "faq": [
          "Respondemos lo que más se pregunta de Romak Fire: certificaciones, líneas forestal y de brigada, complementos y reposición.",
          "Si nos cuentas tu operación y cuántos elementos son, te decimos qué modelos cotizar."
        ]
      }
    },
    {
      "slug": "skold",
      "seccion": "marcas",
      "nombre": "Sköld",
      "nombreCard": "Sköld",
      "title": "Sköld: trajes, cascos, botas y ERA para bombero",
      "description": "Sköld: trajes, casco, bota, guantes, escafandra y ERA para bombero. Revisa los modelos publicados, su estatus normativo y su documentación al cotizar.",
      "lead": "Sköld es la marca con la que armamos un conjunto completo de una sola procedencia: traje Hero, casco Viking, guante FPGS, escafandra FPEN, botas Workman y ERA Phantöm.",
      "chips": [
        "Prendas y componentes",
        "ERA Phantöm",
        "Hero Nomex IIIA",
        "Selección por operación"
      ],
      "resumen": [
        "Cotizamos 8 modelos Sköld: los trajes estructurales Hero PBI MAX y Hero Nomex IIIA, el Brigadista Defender, el casco Viking FPCM, el guante FPGS, la escafandra FPEN, las botas Workman FPBSK y el ERA Phantöm SCBA-P60FC.",
        "Solo el Hero Nomex IIIA publica certificación UL, con el número MH60435. El Hero PBI MAX y el Brigadista Defender se presentan como equivalentes, y los componentes, con la declaración de su fabricante."
      ],
      "bloques": [
        {
          "eyebrow": "Qué surtimos",
          "h2": "Un conjunto completo de la misma marca",
          "parrafos": [
            "Sköld permite equipar a un bombero de pies a cabeza con una sola marca: traje, casco, guante, escafandra, botas y equipo de respiración. Para cuerpos que prefieren un solo proveedor por conjunto, simplifica la compra y la reposición.",
            "Una sola marca no garantiza compatibilidad. Casco, escafandra, máscara y cuello del chaquetón se prueban juntos antes de aceptar un lote, igual que con cualquier otra combinación."
          ]
        },
        {
          "eyebrow": "Cómo elegir",
          "id": "elegir",
          "h2": "Qué modelo Sköld corresponde a tu operación",
          "parrafos": [
            "Si tu pliego pide certificación UL, el traje es el Hero Nomex IIIA, que además permite elegir entre cinco telas exteriores. Si priorizas la fibra PBI MAX y aceptas el estatus equivalente, el Hero PBI MAX. Para brigada de planta, el Brigadista Defender.",
            "En componentes, el guante FPGS se publica en unitalla y las botas Workman se piden por código de talla. El ERA Phantöm declara normas anteriores a la NFPA 1970, algo que conviene revisar contra tu pliego."
          ],
          "lista": [
            "Estructural: Hero Nomex IIIA MH60435 y Hero PBI MAX",
            "Brigada: Brigadista Defender",
            "Casco: Viking FPCM",
            "Guante FPGS y escafandra FPEN",
            "Botas Workman FPBSK",
            "ERA Phantöm SCBA-P60FC"
          ]
        },
        {
          "eyebrow": "El conjunto",
          "h2": "Cómo se arma el conjunto Sköld",
          "parrafos": [
            "Chaquetón y pantalonera Hero, casco Viking con protector facial, escafandra FPEN bajo el casco, guante FPGS, botas Workman y ERA Phantöm con su máscara. Lo cotizamos por pieza o completo, con ficha técnica por partida y una sola factura.",
            "La prueba del conjunto se hace con todo puesto: al girar la cabeza no debe quedar hueco entre casco, escafandra, máscara y cuello del chaquetón."
          ]
        },
        {
          "eyebrow": "En servicio",
          "h2": "Inspección y registro con SköldTracker",
          "parrafos": [
            "Antes de cada guardia se revisan exterior, costuras, cierres, cinta y puños del traje, la carcasa y el barbiquejo del casco y el estado de la escafandra. Después de una exposición, se limpia como indica el fabricante y se aparta lo dañado.",
            "Sköld ofrece SköldTracker para registrar fichas, mantenimiento y caducidad de cada prenda. Si tu corporación lo usa, te ayudamos a mantener ese registro al reponer."
          ]
        }
      ],
      "especificacion": [
        {
          "campo": "Marca",
          "valor": "Sköld"
        },
        {
          "campo": "Prendas",
          "valor": "Hero PBI MAX, Hero Nomex IIIA y Brigadista Defender"
        },
        {
          "campo": "Componentes",
          "valor": "Viking, Workman, guante, escafandra y ERA Phantöm"
        },
        {
          "campo": "Declaración referida",
          "valor": "UL MH60435 para Hero Nomex IIIA"
        },
        {
          "campo": "Control",
          "valor": "Configuración y documentación verificadas por modelo"
        }
      ],
      "normas": [
        {
          "norma": "UL MH60435",
          "alcance": "Declaración referida para Hero Nomex IIIA; verifica modelo y configuración al cotizar."
        }
      ],
      "errores": [
        "Dar por certificado todo lo Sköld",
        "Pedir el Hero Nomex sin elegir la tela exterior",
        "Pedir el guante FPGS por talla cuando es unitalla",
        "Asumir compatibilidad por ser la misma marca",
        "Reponer componentes sin volver a probar el conjunto"
      ],
      "faq": [
        {
          "q": "¿Qué traje Sköld tiene certificación UL?",
          "a": "El Hero Nomex IIIA, con el número MH60435 bajo NFPA 1971 edición 2018. El Hero PBI MAX y el Brigadista Defender se presentan como equivalentes."
        },
        {
          "q": "¿Sköld tiene equipo de respiración autónoma?",
          "a": "Sí, el ERA Phantöm SCBA-P60FC, de 60 minutos nominales a 4,500 psi. Declara NFPA edición 1997 y CE EN 137:2006."
        },
        {
          "q": "¿Qué incluye un conjunto completo Sköld?",
          "a": "Traje Hero, casco Viking, guante FPGS, escafandra FPEN, botas Workman y ERA Phantöm, cotizados por pieza o completos."
        },
        {
          "q": "¿Para qué sirve SköldTracker en un conjunto Sköld?",
          "a": "Para registrar la ficha, el mantenimiento y la caducidad de cada prenda del conjunto, según la plataforma de Sköld."
        },
        {
          "q": "¿Qué telas exteriores tiene el Sköld Hero Nomex?",
          "a": "Advance, Kombat Flex, PBI MAX 7.0, Pioneer o Defender 750, todas dentro de la certificación MH60435."
        }
      ],
      "duos": {
        "ficha": [
          "La tabla resume lo que publica la marca: prendas, componentes y la certificación UL que declara para el Hero Nomex IIIA.",
          "Esa certificación pertenece a un modelo. El resto de los productos Sköld conserva su propio estatus, y así lo escribimos en la cotización."
        ],
        "errores": [
          "Los errores más comunes al comprar Sköld vienen de asumir que toda la marca comparte la certificación del Hero Nomex IIIA.",
          "Estos cinco puntos se evitan pidiendo modelo, tela, talla y estatus por partida."
        ],
        "marca": [
          "Estos son los modelos Sköld con ficha publicada en nuestro catálogo, del traje al equipo de respiración.",
          "Cada ficha muestra su estatus tal como lo publica el fabricante: certificado UL, equivalente o declarado."
        ],
        "faq": [
          "Respondemos lo que más se pregunta de Sköld: certificación, ERA, conjunto completo, SköldTracker y telas del Hero Nomex.",
          "Si nos compartes tu operación y las tallas de tu cuadrilla, te cotizamos el conjunto completo o la pieza que necesitas."
        ]
      }
    }
  ],
  "modelos": []
};
