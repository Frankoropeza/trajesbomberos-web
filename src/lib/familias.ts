// ============================================================
// FAMILIAS — detalle por familia de traje. Fuente única para:
//  · L1 home (cards, vía PRODUCT_CATEGORIES en site.ts)
//  · L2 /trajes/ (módulos completos)
//  · L3 /trajes/<slug>/ (cards de piezas; el texto vive en categorias/trajes-<slug>.md)
// Publicar aquí actualiza las tres a la vez (SSoT).
// ============================================================

export interface FamiliaDetalle {
  slug: string;          // clave de URL: /trajes/<slug>/
  nombreWa: string;      // nombre para el mensaje de WhatsApp
  eyebrow: string;       // módulo de la familia en /trajes/ (L2)
  title: string;
  description: string;
  images: { src: string; alt: string }[];
  // Piezas de la familia: cards de /trajes/<slug>/ (L3) y fichas de pieza.
  productos: { nombre: string; desc: string; chips: string[]; spec?: string; img: string; alt: string }[];
  // El texto de la página de familia (metas, hero, secciones, FAQ) vive en
  // src/content/categorias/trajes-<slug>.md.
}

export const FAMILIAS: FamiliaDetalle[] = [
  {
    slug: 'estructural',
    nombreWa: 'Trajes estructurales',
    eyebrow: 'Más solicitado · Trajes estructurales',
    title: 'Traje estructural para bombero: chaquetón y pantalonera de tres capas',
    description:
      'Si tu gente entra a una edificación en llamas, esto es lo que se pone. Un traje estructural para bombero no es "ropa gruesa que no se quema": es un composite de tres capas —exterior, barrera de humedad y barrera térmica— trabajando juntas. Quita una y ya no es estructural, aunque en la foto se vea idéntico.',
    images: [
      { src: '/images/productos/traje-estructural-bombero-conjunto-frente.avif', alt: 'Traje estructural para bombero con chaquetón y pantalón de tres capas' },
      { src: '/images/productos/chaqueton-estructural-bombero.avif', alt: 'Chaquetón estructural para bombero con DRD integrado' },
      { src: '/images/productos/pantalonera-estructural-bombero.avif', alt: 'Pantalonera estructural para bombero con tirantes' },
    ],
    productos: [
          {
                "nombre": "Chaquetón estructural de tres capas",
                "img": "/images/piezas/chaqueton-estructural-bombero-frente.avif",
                "alt": "Chaquetón estructural de tres capas para bombero",
                "desc": "Prenda superior del conjunto: capa exterior ignífuga, barrera de humedad y barrera térmica, con DRD integrado para arrastre de rescate. Se cotiza independiente del pantalón.",
                "chips": [
                      "Tres capas",
                      "DRD integrado",
                      "NFPA 1970"
                ],
                "spec": "talla de pecho, largo y manga; opción de espalda extendida 3\" o 6\"; configuración de bolsas, refuerzos, cinta reflejante y puños"
          },
          {
                "nombre": "Pantalonera estructural",
                "img": "/images/piezas/pantalonera-estructural-tirantes-acolchados.avif",
                "alt": "Pantalonera estructural para bombero",
                "desc": "Pantalón de combate de tres capas con rodillas articuladas y refuerzos. Se especifica por cintura y entrepierna, y por tipo de ajuste.",
                "chips": [
                      "Tres capas",
                      "Rodilla reforzada",
                      "4 ajustes"
                ],
                "spec": "ajuste slim, regular, relajado o de dama; cintura y entrepierna; cierre de cintura con medio cinturón, cinturón completo o cinturón de escape"
          },
          {
                "nombre": "Tirantes acolchados tipo H",
                "img": "/images/piezas/tirantes-acolchados-tipo-h.avif",
                "alt": "Tirantes acolchados tipo H para bombero",
                "desc": "Soporte del pantalón con espalda en H acolchada y liberación rápida. Sin herrajes metálicos que lastimen bajo el arnés del equipo de respiración.",
                "chips": [
                      "Espalda en H",
                      "Acolchados",
                      "Sin herraje"
                ],
                "spec": "largo por estatura; sujeción a presillas del pantalón"
          },
          {
                "nombre": "Rodilleras de espuma para forro",
                "img": "/images/piezas/rodilleras-de-espuma-para-forro.avif",
                "alt": "Rodilleras de espuma para forro para bombero",
                "desc": "Almohadillas de espuma de célula cerrada que se instalan sobre el forro del pantalón, en la rodilla. Amortiguan el trabajo hincado y no absorben agua.",
                "chips": [
                      "Célula cerrada",
                      "Se monta en forro",
                      "Opción de fábrica"
                ],
                "spec": "se pide como opción del pantalón, no se instala después"
          },
          {
                "nombre": "Arnés interno de escape",
                "img": "/images/piezas/arnes-interno-de-escape-pantalonera.avif",
                "alt": "Arnés interno de escape para bombero",
                "desc": "Arnés clase escape cosido dentro del pantalón, con perneras flotantes y hebilla de perfil bajo. Se certifica bajo NFPA 2500 (antes NFPA 1983), aparte del conjunto.",
                "chips": [
                      "NFPA 2500",
                      "Perneras flotantes",
                      "Integrado"
                ],
                "spec": "clase de arnés y bolsa para cuerda, gancho y descensor"
          },
          {
                "nombre": "Capucha antipartículas (monja)",
                "img": "/images/piezas/capucha-antiparticulas-bombero.avif",
                "alt": "Capucha antipartículas (monja) para bombero",
                "desc": "Cubre cabeza, cuello y orejas con barrera de partículas y sella la interfaz entre casco, chaquetón y máscara del equipo de respiración.",
                "chips": [
                      "Barrera de partículas",
                      "Interfaz con ERA",
                      "Doble capa"
                ],
                "spec": "tipo de barrera y compatibilidad con la máscara en uso"
          }
    ]
  },
  {
    slug: 'brigadista',
    nombreWa: 'Trajes de brigadista',
    eyebrow: 'Brigada industrial',
    title: 'Traje de brigadista: para conato de incendio, no para ataque interior',
    description:
      'Cuando una empresa nos escribe pidiendo "trajes de bombero", muchas veces lo que su operación necesita es esto. El equipo de brigadista está hecho para el conato: extintor en mano, controlar mientras llega el cuerpo de bomberos y sacar a la gente. Cuesta menos que un estructural certificado porque protege para otra cosa, y esa diferencia hay que decirla de frente.',
    images: [
      { src: '/images/productos/traje-brigadista-industrial-conjunto.avif', alt: 'Traje de brigadista industrial para conato de incendio' },
      { src: '/images/productos/combo-brigadista-industrial.avif', alt: 'Combo completo de brigadista industrial contra incendio' },
      { src: '/images/productos/casco-brigadista-industrial.avif', alt: 'Casco para brigadista industrial' },
    ],
    productos: [
          {
                "nombre": "Conjunto de brigada contra fuego incipiente",
                "img": "/images/productos/traje-brigadista-industrial-conjunto.avif",
                "alt": "Conjunto de brigada contra fuego incipiente para bombero",
                "desc": "Chaquetón y pantalón para brigada industrial en atención de conato, con capa externa inherentemente ignífuga y forro desmontable de barrera de humedad más barrera térmica.",
                "chips": [
                      "Nomex · Kevlar",
                      "Forro desmontable",
                      "Refuerzo en rodilla"
                ],
                "spec": "tallas por elemento; configuración de cinta reflejante y tirantes"
          },
          {
                "nombre": "Overol ignífugo NFPA 2112",
                "img": "/images/piezas/overol-ignifugo-nfpa-2112.avif",
                "alt": "Overol ignífugo NFPA 2112 para bombero",
                "desc": "Overol de una pieza en aramida inherente, certificado para exposición breve a flamazo. Es la prenda base de brigada en planta, petroquímica y energía.",
                "chips": [
                      "Nomex IIIA",
                      "NFPA 2112",
                      "Antiestático"
                ],
                "spec": "tallas CH a XG; cierre de dos vías; bordado o serigrafía de empresa"
          },
          {
                "nombre": "Chaquetón de brigadista (pieza suelta)",
                "img": "/images/piezas/chaqueton-de-brigadista-pieza-suelta.avif",
                "alt": "Chaquetón de brigadista (pieza suelta) para bombero",
                "desc": "Chaquetón de brigada con barreras técnicas, bandas reflejantes de alta visibilidad y refuerzos en zonas de desgaste. Se cotiza suelto para reposición.",
                "chips": [
                      "Multicapa",
                      "Bandas reflejantes",
                      "Reposición"
                ],
                "spec": "talla y largo; misma configuración que el conjunto para uniformidad"
          },
          {
                "nombre": "Pantalonera de brigadista (pieza suelta)",
                "img": "/images/piezas/pantalonera-de-brigadista-pieza-suelta.avif",
                "alt": "Pantalonera de brigadista (pieza suelta) para bombero",
                "desc": "Pantalón de brigada con refuerzos en rodillas y valencianas, tirantes de alta resistencia y cinta reflejante. Se repone con más frecuencia que el chaquetón.",
                "chips": [
                      "Refuerzo rodilla",
                      "Incluye tirantes",
                      "Reposición"
                ],
                "spec": "cintura y largo; tipo de tirante"
          },
          {
                "nombre": "Monja (capucha) de brigada",
                "img": "/images/piezas/monja-capucha-de-brigada.avif",
                "alt": "Monja (capucha) de brigada para bombero",
                "desc": "Capuchón de tejido aramídico elástico que cubre orejas, cuello y mandíbula: justo lo que no cubren el casco ni el chaquetón.",
                "chips": [
                      "Aramida elástica",
                      "Talla única",
                      "Interfaz con ERA"
                ],
                "spec": "número de capas y compatibilidad con la máscara"
          },
          {
                "nombre": "Tirantes tipo X de ocho puntos",
                "img": "/images/piezas/tirantes-tipo-x-de-ocho-puntos.avif",
                "alt": "Tirantes tipo X de ocho puntos para bombero",
                "desc": "Tirantes de elástico con terminales de piel y sujeción en X, para repartir el peso de la pantalonera en uso prolongado.",
                "chips": [
                      "Elástico 2\"",
                      "Terminal de piel",
                      "Sujeción en X"
                ],
                "spec": "largo por estatura del elemento"
          }
    ]
  },
  {
    slug: 'forestal',
    nombreWa: 'Trajes forestales',
    eyebrow: 'Línea de fuego',
    title: 'Traje forestal para bombero: una sola capa, porque el enemigo es la jornada',
    description:
      'En un incendio de vegetación casi nadie cae por la flama. Cae por el calor acumulado después de ocho, diez o catorce horas en la línea. Por eso el traje forestal para bombero va al revés que el estructural: una sola capa de tela ignífuga inherente, camisola en lugar de chaquetón, y todo pensado para que el cuerpo pueda soltar calor.',
    images: [
      { src: '/images/productos/traje-forestal-camisola-pantalon-bombero.avif', alt: 'Traje forestal para bombero de una sola capa' },
      { src: '/images/productos/camisola-forestal-nomex.avif', alt: 'Camisola forestal de tela ignífuga inherente' },
      { src: '/images/productos/pantalon-forestal-bombero.avif', alt: 'Pantalón forestal para combate de incendios de vegetación' },
    ],
    productos: [
          {
                "nombre": "Camisola forestal",
                "img": "/images/piezas/camisola-forestal-amarilla.avif",
                "alt": "Camisola forestal para bombero",
                "desc": "Camisola de manga larga en tela inherentemente ignífuga y construcción ventilada. Es la prenda preferida por cuadrillas de línea sobre la chamarra.",
                "chips": [
                      "Fibra inherente",
                      "Alta ventilación",
                      "NFPA 1950 (ex 1977)"
                ],
                "spec": "gramaje de la tela en oz/yd²; talla; corte atlético o relajado"
          },
          {
                "nombre": "Pantalón cargo forestal",
                "img": "/images/piezas/pantalon-cargo-forestal.avif",
                "alt": "Pantalón cargo forestal para bombero",
                "desc": "Pantalón tipo cargo en tela ignífuga inherente, con bolsas de carga, refuerzos y ajuste en valenciana para terreno agreste y uso con mochila.",
                "chips": [
                      "Bolsas cargo",
                      "Refuerzo en rodilla",
                      "NFPA 1950 (ex 1977)"
                ],
                "spec": "gramaje; corte atlético o relajado; línea de dama; abertura de pierna con cierre"
          },
          {
                "nombre": "Chamarra forestal",
                "img": "/images/piezas/chamarra-forestal.avif",
                "alt": "Chamarra forestal para bombero",
                "desc": "Chamarra de combate de una sola capa, con más cobertura que la camisola, cierre interno y solapa exterior. Para interfaz urbano-rural y quema controlada.",
                "chips": [
                      "Monocapa",
                      "Largo 32\"",
                      "Puños ajustables"
                ],
                "spec": "talla y gramaje; presillas de utilidad y velcro en pecho"
          },
          {
                "nombre": "Overol forestal",
                "img": "/images/piezas/overol-forestal.avif",
                "alt": "Overol forestal para bombero",
                "desc": "Overol de una pieza en tela ignífuga inherente, alternativa al conjunto de dos piezas cuando se busca cobertura continua sin interfaz camisa-pantalón.",
                "chips": [
                      "Una pieza",
                      "Cobertura continua",
                      "NFPA 1950 (ex 1977)"
                ],
                "spec": "talla; gramaje; configuración de bolsas"
          },
          {
                "nombre": "Nuquera forestal",
                "img": "/images/piezas/nuquera-forestal.avif",
                "alt": "Nuquera forestal para bombero",
                "desc": "Protector de nuca en tela ignífuga que se acopla al casco y cubre cuello y orejas de la lluvia de pavesas y del calor radiante.",
                "chips": [
                      "Acople a casco",
                      "Cubre nuca",
                      "Tela FR"
                ],
                "spec": "compatibilidad con el modelo de casco forestal en uso"
          },
          {
                "nombre": "Conjunto dual forestal y rescate",
                "img": "/images/piezas/conjunto-dual-forestal-y-rescate.avif",
                "alt": "Conjunto dual forestal y rescate para bombero",
                "desc": "Chaqueta y pantalón certificados a la vez para incendio forestal y rescate técnico, para brigadas que atienden ambos escenarios con un solo equipo.",
                "chips": [
                      "Doble certificación",
                      "Monocapa ligera",
                      "Alta transpirabilidad"
                ],
                "spec": "tallas por elemento; tela sin PFAS disponible"
          }
    ]
  },
  {
    slug: 'aproximacion',
    nombreWa: 'Trajes de aproximación',
    eyebrow: 'Calor radiante',
    title: 'Traje de aproximación aluminizado: cerca de la flama, nunca dentro',
    description:
      'Este es el traje del aeropuerto, la refinería y la fundidora. El exterior aluminizado no aísla: refleja el calor radiante, que es lo que te cocina cuando trabajas a unos metros de una fuente muy caliente. Y como es equipo de trabajo y no de rescate relámpago, está diseñado para que puedas moverte durante toda la maniobra.',
    images: [
      { src: '/images/productos/traje-aproximacion-aluminizado-bombero.avif', alt: 'Traje de aproximación aluminizado para calor radiante' },
      { src: '/images/productos/capucha-aluminizada-aproximacion.avif', alt: 'Capucha aluminizada para traje de aproximación' },
      { src: '/images/productos/guante-aluminizado-aproximacion.avif', alt: 'Guante aluminizado para trabajo cerca de calor radiante' },
    ],
    productos: [
          {
                "nombre": "Chaquetón aluminizado de aproximación",
                "img": "/images/piezas/chaqueton-aluminizado-de-aproximacion.avif",
                "alt": "Chaquetón aluminizado de aproximación para bombero",
                "desc": "Capa exterior aluminizada que refleja el calor radiante sobre un forro ignífugo. Se usa encima de ropa de trabajo no inflamable.",
                "chips": [
                      "Exterior aluminizado",
                      "Bolsa para ERA",
                      "ISO 11612"
                ],
                "spec": "tipo de forro: algodón FR, neopreno, aramida acolchada o fibra de vidrio"
          },
          {
                "nombre": "Pantalón aluminizado de aproximación",
                "img": "/images/piezas/pantalon-aluminizado-de-aproximacion.avif",
                "alt": "Pantalón aluminizado de aproximación para bombero",
                "desc": "Pantalón aluminizado con tirantes para ajustar el largo y puños ajustables. Complemento del chaquetón en el mismo nivel de protección radiante.",
                "chips": [
                      "Aluminizado",
                      "Tirantes de ajuste",
                      "Puños ajustables"
                ],
                "spec": "talla; opción de rodillas reforzadas"
          },
          {
                "nombre": "Capucha aluminizada con visor dorado",
                "img": "/images/piezas/capucha-aluminizada-con-visor-dorado.avif",
                "alt": "Capucha aluminizada con visor dorado para bombero",
                "desc": "Capucha con casco duro de ajuste dentado, visor con película dorada y cobertor que abarca todo el hombro. Protege cabeza, cara y cuello del calor radiante.",
                "chips": [
                      "Visor dorado",
                      "Casco duro",
                      "Cobertor de hombro"
                ],
                "spec": "tipo de visor: vidrio laminado, policarbonato dorado o doble capa"
          },
          {
                "nombre": "Guantes aluminizados de tres dedos",
                "img": "/images/piezas/guantes-aluminizados-de-tres-dedos.avif",
                "alt": "Guantes aluminizados de tres dedos para bombero",
                "desc": "Manopla con dorso aluminizado y palma resistente al calor. Sacrifica destreza para maximizar el aislamiento de la mano.",
                "chips": [
                      "Manopla 3 dedos",
                      "Palma aislante",
                      "Forro térmico"
                ],
                "spec": "talla; tipo de palma"
          },
          {
                "nombre": "Polainas aluminizadas para bota",
                "img": "/images/piezas/polainas-aluminizadas-para-bota.avif",
                "alt": "Polainas aluminizadas para bota para bombero",
                "desc": "Cobertores aluminizados que se fijan con velcro detrás de la bota. Se usan sobre el calzado de trabajo, no lo sustituyen.",
                "chips": [
                      "Se usa sobre bota",
                      "Cierre de velcro",
                      "Aluminizado"
                ],
                "spec": "talla; alternativa: bota aluminizada de conjunto"
          },
          {
                "nombre": "Delantal aluminizado",
                "img": "/images/piezas/delantal-aluminizado.avif",
                "alt": "Delantal aluminizado para bombero",
                "desc": "Protección frontal contra calor radiante y salpicadura de metal fundido, para operaciones donde no se justifica el conjunto completo.",
                "chips": [
                      "Protección frontal",
                      "Fundición",
                      "Aluminizado"
                ],
                "spec": "largo y ancho; tipo de sujeción"
          }
    ]
  },
  {
    slug: 'entrada',
    nombreWa: 'Trajes de entrada',
    eyebrow: 'Ingreso a la flama',
    title: 'Traje de entrada a la flama: minutos contados, nunca una jornada',
    description:
      'Es el nivel más extremo del catálogo y el que menos gente necesita de verdad. Permite entrar a la flama —horno, incidente térmico severo, rescate industrial— por un rato muy corto. Pesa, estorba y limita la vista a propósito: no está hecho para trabajar, está hecho para meterse, sacar y salir.',
    images: [
      { src: '/images/productos/traje-entrada-penetracion-flama.avif', alt: 'Traje de entrada aluminizado multicapa para ingreso a la flama' },
      { src: '/images/productos/capucha-entrada-aluminizada.avif', alt: 'Capucha aluminizada de traje de entrada a la flama' },
      { src: '/images/productos/botas-aluminizadas-entrada.avif', alt: 'Botas aluminizadas para traje de entrada' },
    ],
    productos: [
          {
                "nombre": "Conjunto de penetración de corta duración",
                "img": "/images/piezas/conjunto-de-penetracion-de-corta-duracion.avif",
                "alt": "Conjunto de penetración de corta duración para bombero",
                "desc": "Conjunto aluminizado fuertemente aislado para entrada rápida y salida: da tiempo para un rescate o para cerrar una válvula en fuego declarado.",
                "chips": [
                      "Multicapa aislado",
                      "ISO 11612",
                      "Uso corto"
                ],
                "spec": "talla única hasta XG; a medida en pedidos de cinco o más"
          },
          {
                "nombre": "Conjunto de penetración avanzada",
                "img": "/images/piezas/conjunto-de-penetracion-avanzada.avif",
                "alt": "Conjunto de penetración avanzada para bombero",
                "desc": "Nivel máximo de la escala aluminizada, con aislamiento adicional para engullimiento total por flama. Pesa más y limita la movilidad a propósito.",
                "chips": [
                      "Aislamiento reforzado",
                      "Engullimiento total",
                      "ISO 11612"
                ],
                "spec": "talla única hasta XG; incluye capucha, guantes y talega"
          },
          {
                "nombre": "Capucha de penetración con visor doble",
                "img": "/images/piezas/capucha-de-penetracion-con-visor-doble.avif",
                "alt": "Capucha de penetración con visor doble para bombero",
                "desc": "Capucha del conjunto de entrada con casco duro de ajuste dentado, visor con película dorada de doble capa y cobertor que abarca todo el hombro.",
                "chips": [
                      "Visor doble capa",
                      "Película dorada",
                      "Casco integrado"
                ],
                "spec": "viene incluida en el conjunto; se repone por separado"
          },
          {
                "nombre": "Guantes mitón de penetración",
                "img": "/images/piezas/guantes-miton-de-penetracion.avif",
                "alt": "Guantes mitón de penetración para bombero",
                "desc": "Mitón aluminizado con palma de alto aislamiento: el nivel máximo de protección de manos del conjunto de entrada.",
                "chips": [
                      "Mitón",
                      "Palma aislante",
                      "Incluido en conjunto"
                ],
                "spec": "talla; se repone por separado"
          },
          {
                "nombre": "Conjunto para mantenimiento de hornos",
                "img": "/images/piezas/conjunto-para-mantenimiento-de-hornos.avif",
                "alt": "Conjunto para mantenimiento de hornos para bombero",
                "desc": "Variante del conjunto de corta duración para trabajo en caliente: mismo aislamiento, visor transparente de doble capa y parches en codos y rodillas.",
                "chips": [
                      "Visor transparente",
                      "Parches de refuerzo",
                      "Trabajo en caliente"
                ],
                "spec": "talla; suela especial para superficie caliente"
          },
          {
                "nombre": "Pasamontañas y talega de conjunto",
                "img": "/images/piezas/pasamontanas-y-talega-de-conjunto.avif",
                "alt": "Pasamontañas y talega de conjunto para bombero",
                "desc": "Pasamontañas ignífugo que se usa bajo la capucha y talega de nailon balístico para transportar y guardar el conjunto sin dañarlo.",
                "chips": [
                      "Pasamontañas FR",
                      "Talega balística",
                      "Incluidos"
                ],
                "spec": "reposición por separado"
          }
    ]
  },
  {
    slug: 'extricacion',
    nombreWa: 'Extricación y rescate',
    eyebrow: 'Rescate técnico',
    title: 'Traje de extricación: el que evita que gastes tu estructural en un choque',
    description:
      'La mayoría de las salidas de un cuerpo de bomberos no son incendios: son accidentes viales. Y cada vez que sales a extricación con el traje estructural puesto, lo llenas de aceite, vidrio y fluidos, y le restas vida a un equipo que ya trae fecha de retiro a los diez años. Un traje de extricación es más ligero, más barato de reponer y está hecho justo para eso.',
    images: [
      { src: '/images/productos/traje-extricacion-rescate-vehicular.avif', alt: 'Traje de extricación para rescate vehicular' },
      { src: '/images/productos/chaqueta-extricacion-rescate.avif', alt: 'Chaqueta de extricación para rescate técnico' },
      { src: '/images/productos/pantalon-extricacion-rescate.avif', alt: 'Pantalón de extricación para rescate técnico' },
    ],
    productos: [
          {
                "nombre": "Chaqueta de rescate técnico",
                "img": "/images/piezas/chaqueta-de-rescate-tecnico-roja.avif",
                "alt": "Chaqueta de rescate técnico para bombero",
                "desc": "Chaqueta monocapa ligera para extricación, accidentes viales, rescate y mando de incidente. Más protección que el uniforme de estación, mucho menos carga térmica que el chaquetón.",
                "chips": [
                      "Monocapa",
                      "Codo reforzado",
                      "NFPA 1950 (ex 1951)"
                ],
                "spec": "talla; nivel de certificación 1 o 2; tela exterior a elegir"
          },
          {
                "nombre": "Pantalón de rescate técnico",
                "img": "/images/piezas/pantalon-de-rescate-tecnico.avif",
                "alt": "Pantalón de rescate técnico para bombero",
                "desc": "Pantalón monocapa ignífugo con rodillas acolchadas y reforzadas, diseñado para trabajar hincado sobre vidrio y lámina.",
                "chips": [
                      "Rodilla acolchada",
                      "Monocapa",
                      "NFPA 1950 (ex 1951)"
                ],
                "spec": "cintura y largo; nivel de certificación"
          },
          {
                "nombre": "Conjunto de extricación",
                "img": "/images/piezas/conjunto-de-extricacion.avif",
                "alt": "Conjunto de extricación para bombero",
                "desc": "Chaqueta y pantalón que se cotizan como set. Evita rasgar y contaminar el traje estructural en llamados que no son de incendio.",
                "chips": [
                      "Set de dos piezas",
                      "Protege el estructural",
                      "Bajo estrés térmico"
                ],
                "spec": "tallas por elemento; tela exterior a elegir"
          },
          {
                "nombre": "Overol de rescate técnico",
                "img": "/images/piezas/overol-de-rescate-tecnico-rojo.avif",
                "alt": "Overol de rescate técnico para bombero",
                "desc": "Overol de una pieza para vestido rápido y cobertura continua, alternativa al conjunto de dos piezas.",
                "chips": [
                      "Una pieza",
                      "Vestido rápido",
                      "Doble certificación"
                ],
                "spec": "talla; certificación dual rescate y forestal"
          },
          {
                "nombre": "Conjunto dual rescate y forestal",
                "img": "/images/piezas/conjunto-dual-rescate-y-forestal.avif",
                "alt": "Conjunto dual rescate y forestal para bombero",
                "desc": "Certificado a la vez para rescate técnico y combate forestal, para cuerpos que atienden ambos escenarios sin comprar dos equipos.",
                "chips": [
                      "Doble certificación",
                      "Sin PFAS disponible",
                      "Transpirable"
                ],
                "spec": "tallas; tela exterior a elegir"
          },
          {
                "nombre": "Pantalón de cubierta para rescate",
                "img": "/images/piezas/pantalon-de-cubierta-para-rescate.avif",
                "alt": "Pantalón de cubierta para rescate para bombero",
                "desc": "Pantalón exterior que se pone rápido sobre el uniforme de estación para llamados de rescate, sin vestir el equipo estructural completo.",
                "chips": [
                      "Sobre uniforme",
                      "Vestido rápido",
                      "Ligero"
                ],
                "spec": "talla; largo"
          }
    ]
  },
  {
    slug: 'hazmat',
    nombreWa: 'Equipo Hazmat',
    eyebrow: 'Materiales peligrosos',
    title: 'Traje Hazmat: protección química según la vía de exposición',
    description: 'En una fuga química no se elige el traje por color ni por el nombre del nivel. Primero se identifica el agente, su concentración, el estado físico y la tarea; después se define la barrera, el equipo respiratorio y los guantes compatibles. Un encapsulado puede ser indispensable ante vapor tóxico y excesivo para una salpicadura controlada.',
    images: [
      { src: '/images/catalogo/hazmat/tipo-traje-encapsulado-nivel-a.avif', alt: 'Traje encapsulado nivel A para respuesta a materiales peligrosos' },
      { src: '/images/catalogo/hazmat/tipo-traje-nivel-b.avif', alt: 'Traje químico nivel B con equipo de respiración autónoma exterior' },
      { src: '/images/catalogo/hazmat/tipo-traje-nivel-c.avif', alt: 'Equipo de protección química nivel C' },
    ],
    productos: [
      { nombre: 'Traje encapsulado nivel A', img: '/images/catalogo/hazmat/tipo-traje-encapsulado-nivel-a.avif', alt: 'Traje encapsulado nivel A Hazmat', desc: 'Conjunto hermético a vapor para la máxima protección cutánea y respiratoria cuando el peligro lo exige.', chips: ['Nivel A', 'Encapsulado', 'Vapor químico'], spec: 'sustancia, concentración, talla y compatibilidad del sistema respiratorio' },
      { nombre: 'Traje nivel B', img: '/images/catalogo/hazmat/tipo-traje-nivel-b.avif', alt: 'Traje nivel B para materiales peligrosos', desc: 'Protección química para salpicadura con equipo de respiración autónoma configurado fuera de la prenda.', chips: ['Nivel B', 'Salpicadura', 'ERA exterior'], spec: 'agente químico, talla y configuración de guante, bota y ERA' },
      { nombre: 'Traje nivel C', img: '/images/catalogo/hazmat/tipo-traje-nivel-c.avif', alt: 'Traje nivel C para materiales peligrosos', desc: 'Barreras químicas con respiración purificadora cuando el agente y su concentración permiten esa selección.', chips: ['Nivel C', 'Respirador', 'Contaminante conocido'], spec: 'contaminante identificado, cartucho compatible y talla' },
      { nombre: 'Overol desechable', img: '/images/catalogo/hazmat/tipo-overol-quimico-desechable.avif', alt: 'Overol químico desechable', desc: 'Prenda de barrera para tareas delimitadas, elegida por el tipo de exposición y retirada tras el uso.', chips: ['Desechable', 'Barrera química', 'Uso delimitado'], spec: 'tipo de exposición, talla y método de retiro' },
      { nombre: 'Botas químicas', img: '/images/catalogo/hazmat/tipo-botas-quimicas.avif', alt: 'Botas químicas para Hazmat', desc: 'Protección de pie y tobillo que completa el sellado inferior del sistema frente al contaminante evaluado.', chips: ['Protección química', 'Interfaz inferior', 'Compatibilidad'], spec: 'sustancia, talla y método de unión con el traje' },
      { nombre: 'Guantes para químicos', img: '/images/catalogo/hazmat/tipo-guantes-quimicos.avif', alt: 'Guantes químicos para respuesta Hazmat', desc: 'Barrera de mano seleccionada por permeación, destreza requerida y compatibilidad con el traje.', chips: ['Compatibilidad química', 'Destreza', 'Barrera de mano'], spec: 'sustancia, concentración, talla y tiempo de tarea' },
    ],
  },
];

export function familiaPorSlug(slug: string) {
  return FAMILIAS.find((f) => f.slug === slug);
}
