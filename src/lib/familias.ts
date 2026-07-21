// ============================================================
// FAMILIAS — detalle por familia de traje. Fuente única para:
//  · L1 home (cards, vía PRODUCT_CATEGORIES en site.ts)
//  · L2 /trajes/ (módulos completos)
//  · L3 /trajes/<slug>/ (ficha de familia)
// Publicar aquí actualiza las tres a la vez (SSoT).
// ============================================================

export interface FamiliaDetalle {
  slug: string;          // clave de URL: /trajes/<slug>/
  nombreWa: string;      // nombre para el mensaje de WhatsApp
  eyebrow: string;
  title: string;
  description: string;
  features: string[];
  brands: string[];
  images: { src: string; alt: string }[];
  // --- solo L3 -------------------------------------------------
  h1: string;
  h1Accent: string;
  lead: string;
  descRight: string[];
  meta: string[];
  seoTitle: string;
  seoDescription: string;
  keywords: readonly string[];
  especificar: { titulo: string; desc: string }[];
  // Marcas de referencia del mercado para esta familia. Referencia
  // técnica, NO afirmación de distribución (misma regla que en el
  // SSoT). 'entrada' no lleva: segmento con muy pocos fabricantes.
  marcasRef?: { nombre: string; nota: string }[];
  faqs: { q: string; a: string }[];
  productos: { nombre: string; desc: string; chips: string[]; spec?: string; img: string; alt: string }[];
}

export const FAMILIAS: FamiliaDetalle[] = [
  {
    slug: 'estructural',
    nombreWa: 'Trajes estructurales',
    eyebrow: 'Más solicitado · Trajes estructurales',
    title: 'Traje estructural para bombero: chaquetón y pantalonera de tres capas',
    description:
      'Si tu gente entra a una edificación en llamas, esto es lo que se pone. Un traje estructural para bombero no es "ropa gruesa que no se quema": es un composite de tres capas —exterior, barrera de humedad y barrera térmica— trabajando juntas. Quita una y ya no es estructural, aunque en la foto se vea idéntico.',
    features: [
      'Pide las tres capas por nombre comercial. Si la cotización dice "tela ignífuga" y nada más, todavía no sabes qué estás comprando',
      'El DRD va integrado al chaquetón: es el asa con la que arrastras a un compañero que ya no puede salir solo',
      'Largo de chaquetón de 28" a 35". El corto da movilidad, el largo da cobertura — depende de tu operación, no de la moda',
      'La cintura es la zona crítica: si chaquetón y pantalonera no ajustan entre sí, ahí entra el calor',
      'La certificación es del conjunto terminado, con el fabricante listado ante el organismo certificador. Nunca de la tela suelta',
    ],
    brands: ['Chaquetón de bombero', 'Pantalonera', 'Tres capas', 'Barrera térmica', 'DRD', 'Ataque interior'],
    images: [
      { src: '/images/productos/traje-estructural-chaqueton-pantalon-bombero.avif', alt: 'Traje estructural para bombero con chaquetón y pantalón de tres capas' },
      { src: '/images/productos/chaqueton-estructural-bombero.avif', alt: 'Chaquetón estructural para bombero con DRD integrado' },
      { src: '/images/productos/pantalonera-estructural-bombero.avif', alt: 'Pantalonera estructural para bombero con tirantes' },
    ],
    h1: "Traje estructural para bombero",
    h1Accent: "de tres capas",
    lead: "Chaquetón y pantalonera certificados para ataque interior, con DRD integrado y el composite declarado capa por capa en la cotización.",
    descRight: ["El traje estructural es la partida más cara del equipamiento y la que más se especifica mal. Trabajamos la referencia vigente —NFPA 1970, que absorbió a la NFPA 1971— y te entregamos por escrito el composite completo: capa exterior, barrera de humedad y barrera térmica, cada una con su nombre comercial.", "Cotizamos por pieza o conjunto completo, con guía de tallas del fabricante antes de pedir y ficha técnica lista para tu expediente de compra o tu pliego de licitación. Envíos a estación, base o domicilio en los 32 estados."],
    meta: ["NFPA 1970 · cap. 5–9", "Tres capas", "DRD integrado", "Por pieza o conjunto"],
    seoTitle: "Traje estructural para bombero | tres capas | México",
    seoDescription: "Traje estructural para bombero: chaquetón y pantalonera de tres capas con DRD. Qué pedir en la ficha técnica, cómo tomar tallas y qué revisar antes de firmar.",
    keywords: ["traje estructural para bombero", "tres capas", "México"],
    marcasRef: [{"nombre": "MSA Globe", "nota": "Referencia de turnout estructural; Globe es de MSA Safety desde 2017"}, {"nombre": "LION", "nota": "Fabricante independiente desde 1898; línea Starfield"}, {"nombre": "Fire-Dex", "nota": "Líneas TECGEN71 y Chieftain"}, {"nombre": "Morning Pride", "nota": "Pasó de Honeywell a PIP en mayo de 2025"}, {"nombre": "INNOTEX", "nota": "Traje estructural a medida, fabricado en Canadá"}, {"nombre": "Rosenbauer", "nota": "Traje bajo referencia europea EN 469"}, {"nombre": "Texport", "nota": "Línea X-TREME, referencia europea"}, {"nombre": "Fire Equipment de México", "nota": "Fabricante nacional con certificación UL verificable"}],
    especificar: [{"titulo": "El composite, con nombre y apellido", "desc": "Exterior, barrera de humedad y barrera térmica, cada uno con su nombre comercial. Sin eso no puedes comparar dos ofertas."}, {"titulo": "TPP y THL juntos", "desc": "Referencias mínimas: TPP 35 y THL 205. El TPP alto con THL bajo se paga en estrés térmico."}, {"titulo": "Largo y corte", "desc": "Chaquetón de 28 a 35 pulgadas, tirantes H-back o Y-back, refuerzos en rodilla y codo."}, {"titulo": "Etiqueta y fecha", "desc": "La certificación va a nombre del fabricante y la fecha de fabricación arranca los diez años de vida útil."}],
    faqs: [{"q": "¿Cuántas capas debe tener un traje estructural?", "a": "Tres: capa exterior, barrera de humedad y barrera térmica. Si una falta, no es un traje estructural aunque el proveedor lo llame así. Entre la barrera térmica y la de humedad se define la mayor parte de la protección real."}, {"q": "¿Qué es el DRD y viene incluido?", "a": "Es el Drag Rescue Device: un arnés integrado al chaquetón que permite arrastrar a un elemento inconsciente. Forma parte de los requisitos del conjunto estructural. Si una oferta no lo menciona, pregúntalo explícitamente."}, {"q": "¿Conviene talla de stock o a medida?", "a": "Depende del presupuesto y del uso. Lo que no conviene es mezclar: si el chaquetón y la pantalonera no ajustan entre sí, la cintura queda abierta y ahí entra el calor. Te ayudamos a tomar medidas antes de pedir."}, {"q": "¿Qué normas aplican a un traje estructural en México?", "a": "En producto, la referencia es NFPA 1970 edición 2025, que absorbió a la NFPA 1971. En obligación legal, la NOM-017-STPS-2024 exige proporcionar el EPP adecuado sin costo. NFPA es voluntaria en México: se vuelve exigible cuando un pliego de licitación la incorpora al contrato."}, {"q": "¿Se puede comprar por pieza?", "a": "Sí, y es lo habitual. Chaquetón, pantalonera, tirantes, rodilleras, arnés de escape y monja se cotizan por separado. Lo único que conviene cuidar al mezclar es que chaquetón y pantalonera compartan corte y talla: la interfaz de la cintura es por donde entra el calor."}, {"q": "¿Cuánto tarda la entrega?", "a": "Depende de si el composite y las tallas están en existencia o si se fabrica sobre pedido. Un traje a medida toma más que una talla de stock. El tiempo exacto te lo confirmamos por escrito en la cotización, con fecha comprometida."}, {"q": "¿Qué pasa si mi gente tiene tallas muy distintas?", "a": "Se levanta medida por elemento y se combinan tallas de stock con piezas a medida donde haga falta. Estimar por promedio es el error que más devoluciones genera: un traje que no ajusta se deja de usar y eso es peor que no tenerlo."}, {"q": "¿Cómo se compara una cotización con otra?", "a": "Por el composite declarado capa por capa, por TPP y THL leídos juntos, por el largo y corte, y por la certificación del conjunto con el fabricante listado. Dos ofertas que solo dicen 'cumple NFPA' no son comparables por más que ambas lo digan."}],
    productos: [
          {
                "nombre": "Chaquetón estructural de tres capas",
                "img": "/images/piezas/chaqueton-estructural-de-tres-capas.avif",
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
                "img": "/images/piezas/pantalonera-estructural.avif",
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
                "img": "/images/piezas/tirantes-acolchados-tipo-h.svg",
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
                "img": "/images/piezas/rodilleras-de-espuma-para-forro.svg",
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
                "img": "/images/piezas/arnes-interno-de-escape.avif",
                "alt": "Arnés interno de escape para bombero",
                "desc": "Arnés clase escape cosido dentro del pantalón, con perneras flotantes y hebilla de perfil bajo. Se certifica bajo NFPA 1983, aparte del conjunto.",
                "chips": [
                      "NFPA 1983",
                      "Perneras flotantes",
                      "Integrado"
                ],
                "spec": "clase de arnés y bolsa para cuerda, gancho y descensor"
          },
          {
                "nombre": "Capucha antipartículas (monja)",
                "img": "/images/piezas/capucha-antiparticulas-monja.avif",
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
    features: [
      'Cubre la obligación de la NOM-002-STPS-2010 de dotar de equipo de protección a los integrantes de la brigada',
      'Se cotiza como combo: chaquetón, pantalón, casco, guantes, botas y escafandra en una sola partida',
      'Sirve para conato, primera respuesta y evacuación. Hasta ahí llega, y está bien que llegue hasta ahí',
      'Si tu brigada hace ataque interior o entra a espacios con humo, la respuesta honesta es estructural. Te lo vamos a decir aunque la venta sea menor',
    ],
    brands: ['Brigada contra incendio', 'Conato', 'Combo brigadista', 'NOM-002-STPS', 'Primera respuesta'],
    images: [
      { src: '/images/productos/traje-brigadista-industrial-bombero.avif', alt: 'Traje de brigadista industrial para conato de incendio' },
      { src: '/images/productos/combo-brigadista-industrial.avif', alt: 'Combo completo de brigadista industrial contra incendio' },
      { src: '/images/productos/casco-brigadista-industrial.svg', alt: 'Casco para brigadista industrial' },
    ],
    h1: "Traje de brigadista contra incendio",
    h1Accent: "para brigada industrial",
    lead: "El equipo con el que tu empresa cumple la NOM-002-STPS-2010: conato de incendio, primera respuesta y evacuación, sin pagar de más por protección que tu operación no usa.",
    descRight: ["Equipamos brigadas de planta, almacén, hotelería y corporativo. El combo se cotiza desglosado por pieza —chaquetón, pantalón, casco, guantes, botas y escafandra— para que tu área de compras pueda comparar partida por partida y tu auditoría tenga el respaldo documental.", "Si el análisis de riesgo de tu centro de trabajo indica ataque interior o entrada a espacios con humo, te lo decimos antes de cotizar: ahí lo que corresponde es un traje estructural certificado, no uno de brigadista."],
    meta: ["NOM-002-STPS-2010", "Combo desglosado", "Factura CFDI", "Envíos nacionales"],
    seoTitle: "Traje de brigadista contra incendio | NOM-002-STPS | México",
    seoDescription: "Traje de brigadista contra incendio para brigada industrial: qué cubre, qué exige la NOM-002-STPS-2010 y cuándo tu operación necesita un traje estructural.",
    keywords: ["traje de brigadista", "NOM-002-STPS", "México"],
    marcasRef: [{"nombre": "Fire-Dex", "nota": "Línea TECGEN de una capa para brigada industrial"}, {"nombre": "LION", "nota": "Ropa de brigada y ataque exterior"}, {"nombre": "Veridian", "nota": "Turnout de una capa para primera respuesta"}, {"nombre": "Fire Equipment de México", "nota": "Fabricante nacional; entrega y tallas locales"}],
    especificar: [{"titulo": "Qué incluye el combo", "desc": "Chaquetón, pantalón, casco, guantes, botas y escafandra. Pide el desglose por pieza, no un precio global."}, {"titulo": "Alcance declarado por escrito", "desc": "Que la ficha diga para qué está pensado. Si dice uso estructural, exige la certificación del conjunto."}, {"titulo": "Tallas por elemento", "desc": "La brigada cambia de integrantes: pregunta por disponibilidad de reposición y rango de tallas."}, {"titulo": "Respaldo documental", "desc": "Ficha técnica y factura CFDI, que es lo que te va a pedir tu auditoría interna o la STPS."}],
    faqs: [{"q": "¿La NOM-002-STPS obliga a comprar traje de bombero?", "a": "Obliga a dotar de equipo de protección personal a los integrantes de la brigada contra incendio (cláusula 5.9), conforme a la NOM-017-STPS-2024 vigente. No especifica marca ni norma de producto: eso depende del análisis de riesgo de tu centro de trabajo."}, {"q": "¿Un traje de brigadista sirve para entrar a un incendio?", "a": "No para ataque interior. Está pensado para conato: control con extintor, contención inicial y evacuación. Si tu brigada entra a espacios con humo o fuego declarado, lo que corresponde es un traje estructural."}, {"q": "¿Por qué cuesta bastante menos que un estructural?", "a": "Porque protege para otro escenario. El estructural certificado lleva tres capas y un proceso de certificación del conjunto completo; el de brigadista tiene otro alcance. La diferencia de precio refleja una diferencia real de protección, no de calidad de marca."}, {"q": "¿Qué me obliga exactamente la ley?", "a": "La NOM-002-STPS-2010, en su cláusula 5.9, obliga a dotar de equipo de protección personal a los integrantes de la brigada contra incendio, conforme a la NOM-017-STPS-2024 vigente. Ninguna de las dos especifica marca ni norma de producto: lo que define qué comprar es tu análisis de riesgo."}, {"q": "¿Cuántos equipos necesito para mi brigada?", "a": "Uno por integrante activo, en su talla, más un margen de reposición. Compartir equipo entre turnos funciona en el papel y falla en la práctica: nunca está donde debe cuando suena la alarma, y las tallas no coinciden."}, {"q": "¿Qué documentación entregan para auditoría?", "a": "Ficha técnica con composición y alcance de uso por partida, y factura CFDI. Para el expediente conviene además registrar a qué elemento se asignó cada equipo y la fecha de entrega."}, {"q": "¿Se puede personalizar con el logotipo de la empresa?", "a": "Sí, bordado o serigrafía con material compatible con tela resistente a la flama. Hay que definirlo en la orden porque se aplica durante la confección, y un bordado con hilo convencional introduce material combustible sobre la prenda."}, {"q": "¿Cada cuánto se repone el equipo de brigada?", "a": "No hay un plazo normativo como en estructural. Se repone por condición: daño mecánico, quemadura, contaminación o pérdida de integridad. En la práctica la pantalonera se cambia antes que el chaquetón porque rodillas y valencianas se gastan más rápido."}],
    productos: [
          {
                "nombre": "Conjunto de brigada contra fuego incipiente",
                "img": "/images/piezas/conjunto-de-brigada-contra-fuego-incipiente.avif",
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
                "img": "/images/piezas/pantalonera-de-brigadista-pieza-suelta.svg",
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
                "img": "/images/piezas/tirantes-tipo-x-de-ocho-puntos.svg",
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
    features: [
      'Camisola y pantalón, ligeros y sueltos. Aquí el peso extra no protege: cansa',
      'La tela es ignífuga inherente, no tratada: la protección está en la fibra y no se va con los lavados',
      'Botas forestales sin puntera de acero — el acero conduce el calor directo al pie',
      'Un forestal no sirve para ataque estructural, y un estructural en la línea de fuego es un golpe de calor esperando pasar',
    ],
    brands: ['Camisola forestal', 'Wildland', 'Una capa', 'Fibra inherente', 'CONAFOR'],
    images: [
      { src: '/images/productos/traje-forestal-camisola-pantalon-bombero.avif', alt: 'Traje forestal para bombero de una sola capa' },
      { src: '/images/productos/camisola-forestal-nomex.avif', alt: 'Camisola forestal de tela ignífuga inherente' },
      { src: '/images/productos/pantalon-forestal-bombero.avif', alt: 'Pantalón forestal para combate de incendios de vegetación' },
    ],
    h1: "Traje forestal para bombero",
    h1Accent: "de una sola capa",
    lead: "Camisola y pantalón en fibra ignífuga inherente para combate de incendios forestales: ligereza y transpirabilidad en turnos de muchas horas en línea de fuego.",
    descRight: ["En incendio de vegetación el riesgo dominante no es la flama sino el calor acumulado. Por eso este equipo va sin barrera de humedad ni barrera térmica: prioriza que el cuerpo pueda disipar calor durante toda la jornada, con fibra ignífuga inherente cuya protección no se pierde con los lavados.", "Cotizamos camisola y pantalón por separado, porque se reponen a ritmos distintos, y completamos el conjunto con casco forestal, goggles, guantes y bota sin puntera de acero. Atendemos brigadas estatales, municipales y de manejo del fuego en todo el país."],
    meta: ["Fibra inherente", "Una sola capa", "Camisola y pantalón", "Jornada larga"],
    seoTitle: "Traje forestal para bombero | incendio forestal | México",
    seoDescription: "Traje forestal para bombero: camisola y pantalón de una sola capa en fibra ignífuga inherente para combate de incendios de vegetación y jornadas largas.",
    keywords: ["traje forestal para bombero", "incendios de vegetación", "México"],
    marcasRef: [{"nombre": "Veridian", "nota": "Línea forestal certificada"}, {"nombre": "Fire-Dex", "nota": "Prendas de línea de fuego forestal"}, {"nombre": "Fire Equipment de México", "nota": "Fabricante nacional en tela ignífuga inherente"}],
    especificar: [{"titulo": "Fibra inherente, no tratada", "desc": "La protección debe estar en la fibra. Un acabado tratado se degrada con los lavados y nadie lleva la cuenta."}, {"titulo": "Peso de la tela", "desc": "Se especifica en onzas por yarda cuadrada. Más ligera respira mejor; más pesada resiste más el matorral."}, {"titulo": "Camisola y pantalón por separado", "desc": "Se reponen a ritmos distintos: la camisola sufre más. Pregunta por reposición por pieza."}, {"titulo": "Botas sin puntera de acero", "desc": "El acero conduce calor. Para línea de fuego se usa bota de piel, caña media y suela resistente."}],
    faqs: [{"q": "¿Por qué el traje forestal es de una sola capa?", "a": "Porque el riesgo dominante no es el engullimiento sino el agotamiento por calor en turnos muy largos. Añadir barreras aumentaría la protección puntual, pero al costo de que el bombero no pueda disipar su propio calor durante horas."}, {"q": "¿Sirve un traje forestal para incendio estructural?", "a": "No. Sin barrera de humedad ni barrera térmica no hay protección frente al calor y el vapor de un interior. Son dos equipos distintos para dos riesgos distintos."}, {"q": "¿Qué más necesito además del traje?", "a": "Casco forestal con barbiquejo, goggles, guantes de piel ligeros, botas sin puntera de acero y, según la operación, mochila de agua o herramienta manual. Lo cotizamos junto si lo necesitas."}, {"q": "¿Qué norma aplica al equipo forestal?", "a": "NFPA 1950 edición 2025, que absorbió a la antigua NFPA 1977. En referencia europea, EN ISO 15384:2020+A1:2021, que sustituyó a la EN 15614. Ambas son voluntarias en México y se vuelven exigibles cuando un pliego las incorpora."}, {"q": "¿Qué gramaje de tela conviene?", "a": "El terreno decide. Matorral denso y espinoso pide más tela porque la prenda sufre más; zona abierta con calor extremo pide menos, porque el peso y la ventilación pesan más que la resistencia. Si tienes brigadas en regiones distintas, no conviene un solo gramaje para todas."}, {"q": "¿Puedo comprar solo algunas prendas?", "a": "Sí, sin compra mínima. Camisola y pantalón se gastan a ritmos distintos —la camisola sufre más por mangas y hombros— así que reponerlos por separado es lo normal en brigada de temporada."}, {"q": "¿Cómo se lava el equipo forestal?", "a": "Con detergente neutro, sin suavizante y sin blanqueador. Esos aditivos dejan residuo sobre la fibra y el residuo sí arde. Es el error de mantenimiento más frecuente y anula parte de la protección sin que se note."}, {"q": "¿Qué más necesita una cuadrilla además del traje?", "a": "Casco forestal con barbiquejo, goggles, guantes de piel ligeros, nuquera y bota sin puntera de acero. Según la operación se suma mochila de agua y herramienta manual. Lo cotizamos junto si lo necesitas."}],
    productos: [
          {
                "nombre": "Camisola forestal",
                "img": "/images/piezas/camisola-forestal.avif",
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
                "img": "/images/piezas/chamarra-forestal.svg",
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
                "img": "/images/piezas/overol-forestal.svg",
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
                "img": "/images/piezas/nuquera-forestal.svg",
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
    features: [
      'El aluminizado refleja radiación. No lo confundas con aislamiento: son dos físicas distintas',
      'Pensado para uso prolongado: te tienes que poder agachar, jalar y manipular herramienta con él puesto',
      'Va acompañado de capucha aluminizada, guantes y botas de la misma familia. Un traje aluminizado con guante estructural deja el eslabón débil en la mano',
      'Acercarse y entrar no son lo mismo. Para ingresar a la flama necesitas un traje de entrada, no este',
    ],
    brands: ['Aluminizado', 'ARFF aeropuerto', 'Refinería', 'Fundición', 'Calor radiante'],
    images: [
      { src: '/images/productos/traje-aproximacion-aluminizado-bombero.svg', alt: 'Traje de aproximación aluminizado para calor radiante' },
      { src: '/images/productos/capucha-aluminizada-aproximacion.svg', alt: 'Capucha aluminizada para traje de aproximación' },
      { src: '/images/productos/guante-aluminizado-aproximacion.svg', alt: 'Guante aluminizado para trabajo cerca de calor radiante' },
    ],
    h1: "Traje de aproximación aluminizado",
    h1Accent: "para calor radiante",
    lead: "Equipo de trabajo para operar cerca de fuentes de calor intenso —ARFF, refinería, fundición y hornos— conservando la movilidad durante toda la maniobra.",
    descRight: ["El exterior aluminizado refleja radiación térmica, que es un principio distinto al aislamiento por masa. Eso permite trabajar de forma prolongada a pocos metros de la fuente sin el peso ni la limitación de movimiento de un traje de entrada.", "Se cotiza como conjunto: traje, capucha con visor, guantes y botas de la misma familia, porque un guante estructural con traje aluminizado deja el punto débil justo en la mano. Atendemos aeropuertos, petroquímica, metalúrgica y planta de vidrio."],
    meta: ["Exterior aluminizado", "Uso prolongado", "Conjunto completo", "ARFF · refinería"],
    seoTitle: "Traje de aproximación aluminizado | calor radiante | México",
    seoDescription: "Traje de aproximación aluminizado para calor radiante intenso: ARFF, refinería, fundición y hornos. Uso prolongado con movilidad, con capucha y guantes a juego.",
    keywords: ["traje de aproximación aluminizado", "calor radiante", "México"],
    marcasRef: [{"nombre": "LION", "nota": "Conjuntos de proximidad aluminizados"}, {"nombre": "Rosenbauer", "nota": "Proximidad bajo referencia europea"}, {"nombre": "Texport", "nota": "Aluminizados de gama europea"}],
    especificar: [{"titulo": "Superficie reflejante", "desc": "El aluminizado refleja radiación. Pregunta por el porcentaje de reflectancia y por el sustrato debajo."}, {"titulo": "Conjunto completo", "desc": "Traje, capucha con visor, guantes y botas de la misma familia. Un guante estructural deja el punto débil en la mano."}, {"titulo": "Movilidad real", "desc": "Es equipo de trabajo. Verifica que permita agacharse, jalar y manipular herramienta con el conjunto puesto."}, {"titulo": "Compatibilidad con el ERA", "desc": "Si la operación lo requiere, el traje debe alojar el equipo de respiración sin comprometer el cierre."}],
    faqs: [{"q": "¿Cuál es la diferencia entre aproximación y entrada?", "a": "Aproximación es para trabajar cerca del calor radiante de forma prolongada, conservando movilidad. Entrada permite el ingreso breve a la flama, es multicapa, pesado y se usa por minutos. Comprar uno creyendo que hace lo del otro es el error más peligroso del catálogo."}, {"q": "¿En qué industrias se usa?", "a": "Rescate y extinción en aeropuertos (ARFF), refinería y petroquímica, fundición y colada de metal, hornos industriales y plantas de vidrio. En general, cualquier operación con una fuente de calor radiante intensa y sostenida."}, {"q": "¿Requiere mantenimiento especial?", "a": "Sí. La superficie aluminizada se daña con abrasión y con limpieza agresiva, y una vez rayada pierde reflectancia. Pide al fabricante el procedimiento de limpieza y almacenamiento antes de ponerlo en servicio."}, {"q": "¿Cuál es la diferencia con un traje de entrada?", "a": "El propósito. Aproximación permite trabajar cerca de la fuente durante toda la maniobra, conservando movilidad; entrada permite estar dentro de la flama por minutos. Ambos se ven aluminizados y ahí empieza la confusión, que es la más peligrosa del catálogo."}, {"q": "¿Qué llevo debajo del traje?", "a": "Ropa de trabajo de fibra no inflamable. Todo conjunto de proximidad está diseñado para usarse encima de ropa industrial, nunca sobre fibras sintéticas que se funden con el calor. Si lo que va debajo falla, el conjunto pierde sentido."}, {"q": "¿Cómo elijo el nivel del conjunto?", "a": "Por la exposición real y el tiempo de trabajo, no por catálogo. Un mantenimiento con acercamientos cortos no requiere lo mismo que una guardia ARFF. Nos describes la operación y te ayudamos a ubicarla sin venderte de más."}, {"q": "¿Se puede mezclar piezas de distintos niveles?", "a": "No conviene. El conjunto protege al nivel de su pieza más débil, y esa suele ser el guante o la capucha, que son justo lo que más se acerca a la fuente. Se arma completo con piezas de la misma familia."}, {"q": "¿Cómo se cuida el aluminizado?", "a": "Sin abrasivos, sin solventes y guardado colgado. La superficie reflejante se raya con facilidad y una vez opaca pierde reflectancia de forma permanente. Un traje aluminizado guardado doblado en un locker se arruina antes por almacenamiento que por uso."}],
    productos: [
          {
                "nombre": "Chaquetón aluminizado de aproximación",
                "img": "/images/piezas/chaqueton-aluminizado-de-aproximacion.svg",
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
                "img": "/images/piezas/pantalon-aluminizado-de-aproximacion.svg",
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
                "img": "/images/piezas/capucha-aluminizada-con-visor-dorado.svg",
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
                "img": "/images/piezas/guantes-aluminizados-de-tres-dedos.svg",
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
                "img": "/images/piezas/polainas-aluminizadas-para-bota.svg",
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
                "img": "/images/piezas/delantal-aluminizado.svg",
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
    features: [
      'Se usa por minutos y con protocolo de entrada y salida definido antes de la maniobra',
      'Siempre con equipo de respiración autónoma. Sin aire no hay entrada, por bueno que sea el traje',
      'La protección viene del conjunto multicapa completo, no de la tela exterior brillante',
      'No hay una norma NFPA de producto específica para entrada: se especifica contra la ficha del fabricante, y por eso conviene revisarla con calma',
    ],
    brands: ['Penetración a flama', 'Aluminizado multicapa', 'Horno', 'Rescate industrial', 'Uso corto'],
    images: [
      { src: '/images/productos/traje-entrada-penetracion-flama.svg', alt: 'Traje de entrada aluminizado multicapa para ingreso a la flama' },
      { src: '/images/productos/capucha-entrada-aluminizada.svg', alt: 'Capucha aluminizada de traje de entrada a la flama' },
      { src: '/images/productos/botas-aluminizadas-entrada.svg', alt: 'Botas aluminizadas para traje de entrada' },
    ],
    h1: "Traje de entrada a la flama",
    h1Accent: "aluminizado multicapa",
    lead: "El nivel más extremo del catálogo: ingreso breve con engullimiento en horno, incidente térmico severo o rescate industrial, siempre con equipo de respiración y protocolo.",
    descRight: ["Es equipo para entrar, resolver y salir en minutos, no para operar. Multicapa, pesado y con movilidad limitada a propósito. Como no existe una norma NFPA de producto específica para entrada, la evaluación se hace contra la ficha técnica del fabricante: te ayudamos a leerla y a comparar antes de comprometer presupuesto.", "Cotizamos el conjunto completo, verificamos la integración con tu equipo de respiración autónoma y te decimos con franqueza si tu operación realmente lo necesita o si con un traje de aproximación queda resuelta."],
    meta: ["Aluminizado multicapa", "Ingreso breve", "Requiere ERA", "Ficha del fabricante"],
    seoTitle: "Traje de entrada a la flama | aluminizado multicapa | México",
    seoDescription: "Traje de entrada a la flama: aluminizado multicapa para ingreso breve en horno, incidente térmico severo o rescate industrial. Siempre con equipo de aire.",
    keywords: ["traje de entrada a la flama", "aluminizado multicapa", "México"],
    especificar: [{"titulo": "Ficha del fabricante", "desc": "No hay norma NFPA de producto específica para entrada: la especificación es contra la ficha técnica, así que léela completa."}, {"titulo": "Tiempo de exposición declarado", "desc": "El fabricante debe indicar el tiempo máximo de exposición y en qué condiciones se midió."}, {"titulo": "Integración con el ERA", "desc": "El conjunto tiene que alojar el equipo de respiración y permitir su revisión sin desarmar todo."}, {"titulo": "Entrenamiento incluido", "desc": "Es equipo que se usa mal si nadie practicó con él. Pregunta si el proveedor da capacitación de uso."}],
    faqs: [{"q": "¿Cuánto tiempo se puede permanecer con un traje de entrada?", "a": "Muy poco, y depende del modelo y de las condiciones. El fabricante declara el tiempo máximo de exposición en su ficha técnica. Es equipo para entrar, resolver y salir, no para operar."}, {"q": "¿Existe una norma NFPA para trajes de entrada?", "a": "No hay una norma NFPA de producto específica para entrada, a diferencia del estructural o el forestal. Por eso la evaluación se hace contra la ficha del fabricante y conviene revisarla con detenimiento antes de comprar."}, {"q": "¿Se puede usar sin equipo de respiración?", "a": "No. El ingreso a la flama implica atmósfera no respirable. Sin equipo de respiración autónoma y sin protocolo de entrada y salida, el traje no habilita la maniobra."}, {"q": "¿Realmente necesito un traje de entrada?", "a": "Probablemente no. Es el nivel del catálogo que menos operaciones justifican. Si tu maniobra puede resolverse trabajando cerca de la fuente sin ingresar, el equipo correcto es un conjunto de aproximación. Te lo decimos aunque implique una venta menor."}, {"q": "¿Existe norma NFPA para trajes de entrada?", "a": "No hay una norma NFPA de producto específica para entrada, a diferencia del estructural o el forestal. La evaluación se hace contra la ficha técnica del fabricante, que declara tiempo máximo de exposición y condiciones. Por eso hay que leerla completa antes de comprometer presupuesto."}, {"q": "¿Se puede usar sin equipo de respiración?", "a": "No. El ingreso a la flama implica atmósfera no respirable. Sin equipo de respiración autónoma y sin protocolo de entrada y salida definido, el traje no habilita la maniobra por bueno que sea."}, {"q": "¿Cuánto tiempo se puede permanecer dentro?", "a": "Muy poco, y el número lo declara el fabricante en condiciones controladas. En operación real se administra con margen amplio y con control de tiempo desde afuera. No es un dato para apurar ni para probar límites."}, {"q": "¿Se necesita entrenamiento?", "a": "Sí, y es la parte que más se omite. Vestirse toma tiempo, la visión es reducida y la movilidad limitada por diseño. Un conjunto guardado sin práctica periódica da falsa seguridad. Podemos cotizar la capacitación junto con el equipo."}],
    productos: [
          {
                "nombre": "Conjunto de penetración de corta duración",
                "img": "/images/piezas/conjunto-de-penetracion-de-corta-duracion.svg",
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
                "img": "/images/piezas/conjunto-de-penetracion-avanzada.svg",
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
                "img": "/images/piezas/capucha-de-penetracion-con-visor-doble.svg",
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
                "img": "/images/piezas/guantes-miton-de-penetracion.svg",
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
                "img": "/images/piezas/conjunto-para-mantenimiento-de-hornos.svg",
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
                "img": "/images/piezas/pasamontanas-y-talega-de-conjunto.svg",
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
    features: [
      'Resistente a corte y punción, con barrera contra patógenos transmitidos por sangre',
      'Ligero y flexible: puedes trabajar hincado, dentro del vehículo y en espacios cerrados',
      'Protección limitada frente a flash. Que quede claro: no es equipo para entrar a fuego',
      'Es la forma más simple de estirar la vida útil del traje estructural, que es el caro de la estación',
    ],
    brands: ['Extricación', 'Rescate vehicular', 'Corte y punción', 'Patógenos', 'Rescate técnico'],
    images: [
      { src: '/images/productos/traje-extricacion-rescate-vehicular.avif', alt: 'Traje de extricación para rescate vehicular' },
      { src: '/images/productos/chaqueta-extricacion-rescate.avif', alt: 'Chaqueta de extricación para rescate técnico' },
      { src: '/images/productos/pantalon-extricacion-rescate.avif', alt: 'Pantalón de extricación para rescate técnico' },
    ],
    h1: "Traje de extricación",
    h1Accent: "para rescate vehicular",
    lead: "Resistencia a corte y punción con barrera contra patógenos, para las salidas que ocurren todos los días y que no deberían desgastar tu traje estructural.",
    descRight: ["La mayoría de las salidas de un cuerpo de bomberos son accidentes viales, no incendios. Cada extricación hecha con el traje estructural lo contamina con aceite, vidrio y fluidos, y consume vida útil de un equipo que la norma retira a los diez años de fabricado.", "Un conjunto de extricación es más ligero, permite trabajar hincado dentro del vehículo y cuesta bastante menos de reponer. Lo cotizamos con la cinta reflejante que exige el trabajo nocturno sobre carretera y con guante de extricación a juego."],
    meta: ["Corte y punción", "Barrera de patógenos", "Alta visibilidad", "Rescate vehicular"],
    seoTitle: "Traje de extricación | rescate vehicular | México",
    seoDescription: "Traje de extricación para rescate vehicular y técnico: resistencia a corte y punción con barrera contra patógenos. Protege la vida útil de tu traje estructural.",
    keywords: ["traje de extricación", "rescate vehicular", "México"],
    marcasRef: [{"nombre": "Fire-Dex", "nota": "TECGEN51, referencia de rescate técnico y extricación"}, {"nombre": "LION", "nota": "Ropa de rescate técnico"}, {"nombre": "Veridian", "nota": "Prendas de extricación de una capa"}],
    especificar: [{"titulo": "Resistencia a corte y punción", "desc": "Es el requisito central: vidrio, lámina y herramienta hidráulica. Pide el dato, no el adjetivo."}, {"titulo": "Barrera contra patógenos", "desc": "En rescate vehicular hay sangre y fluidos. La barrera debe estar declarada en la ficha."}, {"titulo": "Movilidad real", "desc": "Se trabaja hincado, dentro del vehículo y en posturas incómodas. El traje tiene que acompañar."}, {"titulo": "Visibilidad", "desc": "Casi siempre es de noche y sobre carretera. La cinta reflejante aquí no es estética, es seguridad vial."}],
    faqs: [{"q": "¿Por qué no usar el traje estructural para extricación?", "a": "Porque lo contaminas con aceite, vidrio y fluidos, y le restas vida a un equipo que ya se retira a los diez años de fabricado. Además pesa y estorba para trabajar hincado dentro de un vehículo. Un traje de extricación cuesta bastante menos de reponer."}, {"q": "¿El traje de extricación protege del fuego?", "a": "Solo de forma limitada frente a un flash. No es equipo para entrar a fuego ni sustituye al estructural. Es equipo de rescate técnico."}, {"q": "¿Sirve para otros rescates además del vehicular?", "a": "Sí. Se usa también en rescate en estructuras colapsadas, espacios confinados y atención prehospitalaria, donde el riesgo dominante es mecánico y biológico, no térmico."}, {"q": "¿Qué norma aplica al equipo de rescate técnico?", "a": "NFPA 1950 edición 2025, que absorbió a la antigua NFPA 1951. Existen distintos niveles de certificación según el escenario, así que conviene declarar cuál se requiere en la requisición o en el pliego: si no se especifica, llega el más básico."}, {"q": "¿Cuántos conjuntos necesito?", "a": "Idealmente uno por elemento que sale a rescate, en su talla. Un conjunto compartido nunca está a la mano cuando entra el llamado, y entonces la gente sale con lo que trae puesto, que es justo lo que se quería evitar."}, {"q": "¿Cómo se descontamina?", "a": "Con protocolo biológico cuando hubo contacto con fluidos, y con lavado normal cuando solo hay suciedad mecánica. La diferencia debe estar escrita en el procedimiento de la estación, porque el riesgo biológico no se ve y se termina improvisando."}, {"q": "¿Cuándo se retira una prenda de rescate?", "a": "Por condición, no por fecha: perforaciones, cortes que comprometen la barrera, contaminación que no se remueve o pérdida de reflectancia de la cinta. A diferencia del estructural, aquí no hay un plazo fijo de diez años."}, {"q": "¿Conviene si mi presupuesto es limitado?", "a": "Si tu cuerpo sale con frecuencia a accidentes viales, es de las inversiones que más rápido se pagan. Cada salida atendida con equipo de rescate es vida útil conservada de un traje estructural que cuesta varias veces más y que se retira a los diez años de fabricado."}],
    productos: [
          {
                "nombre": "Chaqueta de rescate técnico",
                "img": "/images/piezas/chaqueta-de-rescate-tecnico.avif",
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
                "img": "/images/piezas/overol-de-rescate-tecnico.svg",
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
                "img": "/images/piezas/conjunto-dual-rescate-y-forestal.svg",
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
];

export function familiaPorSlug(slug: string) {
  return FAMILIAS.find((f) => f.slug === slug);
}
