import type { Modelo, Seccion, Tipo } from "../types";

const ia = (slug: string, alt: string) => ({
  src: `/images/catalogo/guantes/tipo-${slug}.avif`,
  alt,
  width: 1600,
  height: 900,
  origen: "ia" as const,
});
const proveedor = (src: string, alt: string) => ({
  src,
  alt,
  width: 1000,
  height: 1250,
  origen: "proveedor" as const,
  credito: "Romak Fire",
});

const seccion: Seccion = {
  slug: "guantes",
  nombre: "Guantes",
  h1: "Guantes para bombero: estructurales, de rescate y forestales",
  title: "Guantes para bombero: estructurales y forestales | México",
  description:
    "Guantes para bombero estructurales, de rescate, forestales y para brigada; compara materiales, barreras y ajuste antes de cotizar por WhatsApp.",
  eyebrow: "Catálogo de protección para manos",
  lead: "El guante correcto protege sin quitar el control de la herramienta: se elige por exposición térmica, riesgo mecánico y la tarea que ejecutará la mano.",
  hero: {
    src: "/images/catalogo/guantes/hero-guantes.avif",
    alt: "Guantes para bombero de uso estructural, forestal y de rescate",
  },
  intro: [
    "Los guantes de bombero no se eligen solo por el grosor del cuero. En ataque estructural, la mano necesita trabajar con calor, humedad, agarre y el puño del chaquetón como un conjunto. En rescate y extricación, el riesgo mecánico, la destreza para herramienta y la protección ante vidrio o bordes cambian la prioridad. En línea de fuego, la jornada exterior pide movilidad, ventilación y un ajuste que no fatigue al cerrar la mano repetidamente.",
    "La referencia para guante estructural es NFPA 1970, que integró la anterior NFPA 1971. Para trabajo forestal, NFPA 1950 incorporó la anterior NFPA 1977; esa misma NFPA 1950 edición 2025 absorbió la referencia de rescate técnico antes identificada como NFPA 1951. EN 659 y EN 388 aparecen como referencias europeas para guante de bombero y riesgo mecánico, respectivamente. La norma aplicable se confirma contra el riesgo y la documentación del modelo.",
    "Antes de ordenar, prueba el guante con la herramienta, el puño del traje y cualquier sistema de comunicación o control que use la cuadrilla. Revisa talla, longitud del puño, cierre, costuras, refuerzos y barreras declaradas. Una cotización comparable identifica modelo, código cuando exista, talla, configuración y declaración de norma; así se recibe el equipo que fue evaluado y no una versión parecida.",
  ],
  grupos: [
    {
      titulo: "Por operación",
      tipos: [
        "guante-estructural",
        "guante-rescate-extricacion",
        "guante-forestal",
        "guante-brigadista",
      ],
    },
  ],
  faq: [
    {
      q: "¿Un guante estructural sirve para rescate?",
      a: "Puede acompañar una tarea, pero rescate y extricación suelen exigir otra relación entre destreza, agarre y riesgo mecánico. Define primero la operación principal.",
    },
    {
      q: "¿Qué talla debo pedir?",
      a: "Prueba el guante con los movimientos y herramientas reales. La talla debe permitir cerrar la mano y operar controles sin exceso de holgura.",
    },
    {
      q: "¿La norma de un modelo es una certificación?",
      a: "Cada ficha muestra su estatus. Cuando la norma está declarada, solicita la declaración de conformidad junto con la cotización.",
    },
    {
      q: "¿Cómo se limpian?",
      a: "Sigue el método indicado por el fabricante. No sustituyas ese procedimiento con químicos o calor que puedan alterar cuero, textiles, costuras o barreras.",
    },
  ],
  checklistCompra: {
    titulo: "Qué confirmar antes de ordenar",
    parrafos: [
      "Indica operación, modelo, código cuando corresponda, talla, longitud de puño y cantidad. Si se integra con traje estructural, ERA o herramientas, valida la movilidad con ese conjunto.",
      "Al recibir, compara cada par contra la requisición: talla, costuras, refuerzos, barreras y documentación declarada. Registra asignación e inspecciones conforme al procedimiento de tu organización.",
    ],
  },
  leyendaImagenIlustrativa:
    "Imagen ilustrativa del tipo de guante. Marca, modelo y configuración exactos se confirman por escrito en la cotización.",
};

const tipos: Tipo[] = [
  {
    slug: "guante-estructural",
    seccion: "guantes",
    nombre: "Guante estructural",
    nombreCard: "Guante estructural",
    title: "Guante estructural para bombero | México",
    description:
      "Guante estructural para bombero: capas, barreras, puño, ajuste y referencia NFPA 1970 para comparar una cotización institucional por operación.",
    lead: "El guante estructural es el que entra contigo a un incendio en edificación: cuero por fuera, barrera de humedad y forro térmico por dentro, y un puño que solapa con la manga del chaquetón sin soltar la boquilla.",
    imagen: ia("guante-estructural", "Guante estructural para bombero"),
    bloques: [
      {
        h2: "Qué es un guante estructural y para quién lo cotizamos",
        parrafos: [
          "El guante estructural es el de ataque interior: el que sostiene la boquilla con la línea cargada, abre una puerta caliente y sujeta la herramienta de entrada con el chaquetón puesto. Lleva tres capas —cuero o carnaza de 1.5–1.7 mm por fuera, barrera de humedad en medio y forro térmico por dentro— y un puño que solapa con la manga. Lo cotizamos sobre todo a cuerpos de bomberos municipales y a brigadas industriales con procedimiento de ataque interior; para conato en planta te conviene el guante para brigadista, que cuesta menos y da más destreza.",
          "La referencia es NFPA 1970 (la norma que absorbió a la NFPA 1971); los modelos que surtimos declaran la edición con la que fueron evaluados —2013 en el Sköld FPGS, 2018 con certificado UL en el Veridian Fire Pro II— y así te la reportamos, sin convertir una declaración en certificación. Si tu pliego pide certificado de laboratorio, el Veridian es el que lo tiene; si pide declaración del fabricante bajo NFPA 1971 y OSHA 29 CFR 1910.156, el Sköld cumple y va en carnaza de res.",
        ],
      },
      {
        h2: "Cómo especificamos un guante estructural en la cotización",
        parrafos: [
          "Cada partida la escribimos con seis datos: modelo y código (FPGS o GIS1017), material exterior, barreras interiores con nombre (Pyrotec y modacrílico en el Veridian; forro de modacrílico SEF en el Sköld), construcción del puño (Kevlar de dos capas en el Sköld; 2 pulgadas con refuerzo Nomex en el Veridian), talla y estatus normativo tal como lo declara el fabricante. Con eso el área de compras compara dos ofertas con el mismo criterio y no por el color del cuero.",
          "Las tallas no se piden por promedio: te pedimos el desglose por elemento (el Sköld FPGS es unitalla, y te lo decimos antes de que lo pidas para una cuadrilla con manos chicas; del Veridian te confirmamos las tallas disponibles al cotizar). Si repones pares de un lote anterior, mándanos por WhatsApp la foto de la etiqueta del puño y te confirmamos si sigue la misma configuración o si el fabricante cambió barrera o forro.",
        ],
        lista: [
          "Modelo y código: Sköld FPGS o Veridian Fire Pro II GIS1017",
          "Exterior: carnaza de res 1.5–1.7 mm o cuero tratado",
          "Barreras con nombre: modacrílico SEF, Pyrotec, hidrófuga",
          "Puño: Kevlar dos capas o 2 in con refuerzo Nomex",
          "Tallas por elemento, no talla promedio",
          "Estatus normativo: declarado NFPA 1971:2013 o certificado UL NFPA 1971:2018",
        ],
      },
      {
        h2: "Modelos de guante estructural que surtimos y con qué traje van",
        parrafos: [
          "Surtimos dos modelos de guante estructural. El Sköld FPGS, en carnaza de res oro y negro con forro de modacrílico SEF cosido a cada dedo, costuras Kevlar Tex-80, puño elástico de Kevlar y bandola interna para secado: es el que va con los trajes Sköld Hero y el de menor costo de los dos. El Veridian Fire Pro II GIS1017, en cuero tratado con tres capas interiores, barrera transpirable Pyrotec hasta el puño y refuerzo de Nomex: certificado UL bajo NFPA 1971-2018 y el que integramos en el kit estructural Profesional con los trajes Romak Fire.",
          "El guante se prueba con el chaquetón puesto, porque el puño y la manga trabajan juntos: con los brazos arriba y el casco en la cabeza, el puño debe quedar bajo la manga y el pozo de agua no debe atorarse. Si ya usas chaquetón Romak Fire Protector, Profesional o Sköld Hero, te decimos cuál de los dos guantes ya probamos con esa manga; si es de otra marca, mándanos una foto del puño del chaquetón y te contestamos en el día hábil.",
        ],
      },
      {
        h2: "Errores que vemos en pliegos de guantes estructurales",
        parrafos: [
          "El más caro es pedir «guante de bombero NFPA» sin edición ni estatus: llegan ofertas con guante de brigada o de extricación, que valen la mitad y no protegen en ataque interior, y el comité no tiene con qué descalificarlas. El segundo es pedir una sola talla para toda la corporación: un guante grande forma pliegues en la palma, el pliegue queda justo sobre el mando de la boquilla y el elemento termina quitándoselo. El tercero es comprar por muestra de un par y recibir otra configuración de forro.",
          "En tu pliego pon modelo, código, edición de norma y estatus, y exige que cada caja identifique par, talla y código; así la recepción coteja contra lo evaluado y no contra un nombre comercial. Si un proveedor ofrece un guante «equivalente», pídele la ficha con las mismas 6 líneas de arriba y compárala renglón por renglón; nosotros te la mandamos por WhatsApp antes de que abras el sobre.",
        ],
      },
      {
        h2: "Inspección y retiro del guante estructural",
        parrafos: [
          "Antes de cada guardia revisa cuero endurecido o cuarteado, costuras abiertas en la horquilla del pulgar, forro desprendido o girado, contaminación visible y que el puño siga elástico. Después de una intervención, lava y seca como indica el fabricante —el Sköld trae bandola interna para colgarlo— y nunca sobre una fuente de calor directo: el cuero encoge y el forro se despega. Un guante que ya no cierra la mano con control se retira, aunque se vea entero.",
          "No repares la palma con cinta, pegamento ni costura improvisada: cambias el espesor justo donde se controla la boquilla y pierdes la continuidad de las barreras. Lleva registro por par —elemento, fecha de asignación, exposiciones y reemplazos— y ten existencias por talla; cuando un par se retira, el elemento no debe salir con un guante de rescate ni con uno ajeno. Si tienes duda de un par, mándanos la foto y te decimos si sigue en servicio.",
        ],
      },
    ],
    especificacion: [
      { campo: "Uso principal", valor: "Combate de incendio estructural" },
      { campo: "Referencia", valor: "NFPA 1970 (antes NFPA 1971)" },
      { campo: "Interfaz", valor: "Manga del chaquetón y herramienta" },
    ],
    normas: [
      {
        norma: "NFPA 1970",
        alcance:
          "Referencia vigente para el conjunto estructural; verifica la declaración del modelo.",
      },
    ],
    errores: [
      "Comprar por talla estándar sin prueba",
      "Confundir una declaración con certificación",
      "Separar el guante del puño del traje",
      "Reparar con materiales no previstos",
    ],
    faq: [
      { q: "¿Qué modelos hay?", a: "Sköld FPGS y Veridian Fire Pro II." },
      {
        q: "¿Sirve para línea de fuego?",
        a: "Selecciona guante forestal si esa es la operación principal.",
      },
    ],
    relacionados: ["skold-fpgs", "veridian-fire-pro-ii"],
    chips: ["NFPA 1970", "Capas interiores", "Puño integrado"],
    resumen: [
      "Tres capas —cuero o carnaza por fuera, barrera de humedad y forro térmico por dentro— y puño que solapa con la manga del chaquetón. Surtimos el Sköld FPGS (carnaza, declarado NFPA 1971:2013) y el Veridian Fire Pro II (cuero tratado, certificado UL NFPA 1971-2018).",
      "Te cotizamos por talla y por elemento con ficha técnica y el estatus bajo NFPA 1970 tal como lo declara el fabricante. Si ya tienes chaquetón, dinos el modelo y te decimos qué guante ya probamos con esa manga.",
    ],
  },
  {
    slug: "guante-rescate-extricacion",
    seccion: "guantes",
    nombre: "Guante de rescate y extricación",
    nombreCard: "Guante de rescate y extricación",
    title: "Guante de rescate y extricación para bombero | México",
    description:
      "Guante para rescate y extricación: agarre, destreza, riesgo mecánico y referencia NFPA 1950 antes de solicitar una cotización por operación.",
    lead: "En extricación, la mano necesita control fino y protección ante superficies abrasivas, bordes y herramientas; el guante se define por la maniobra, no por el color.",
    imagen: ia(
      "guante-rescate-extricacion",
      "Guante de rescate y extricación para bombero",
    ),
    bloques: [
      {
        h2: "Diferencias frente al guante estructural",
        parrafos: [
          "El rescate vehicular y la extricación exponen la mano a aristas, vidrio, suciedad, herramientas y movimientos precisos. Por eso el guante de rescate se evalúa por destreza, agarre y protección mecánica acorde con la tarea. No se asume que un guante más grueso sea más útil: un exceso de volumen puede disminuir el control al colocar una herramienta o manipular un sistema de rescate.",
          "NFPA 1950 edición 2025 absorbió la referencia anterior NFPA 1951 para equipo de rescate técnico. EN 388 puede aparecer como referencia de riesgo mecánico. Estas referencias orientan la solicitud, pero el modelo concreto debe aportar su propia declaración y documentación.",
        ],
        lista: [
          "Agarre estable con herramienta",
          "Dedo y palma para movimientos precisos",
          "Protección mecánica declarada por modelo",
          "Ajuste compatible con la maniobra",
        ],
      },
      {
        h2: "Qué definir en la requisición",
        parrafos: [
          "Describe si el uso será vehicular, rescate técnico, apoyo con cuerdas u otra maniobra. Define talla, puño, material exterior y la necesidad de protección ante partículas o humedad. Prueba el modelo con la herramienta y el resto del EPP antes de una compra por volumen.",
          "Un guante de rescate no reemplaza automáticamente al estructural en ataque interior. Cuando cambia el escenario, vuelve a evaluar exposición térmica, protección respiratoria y el conjunto completo.",
        ],
      },
    ],
    especificacion: [
      { campo: "Uso principal", valor: "Rescate y extricación" },
      { campo: "Referencia", valor: "NFPA 1950 (antes NFPA 1951)" },
      { campo: "Prioridad", valor: "Destreza y protección mecánica" },
    ],
    normas: [
      {
        norma: "NFPA 1950",
        alcance: "Referencia vigente para EPP de rescate técnico.",
      },
    ],
    errores: [
      "Elegir por grosor sin probar destreza",
      "Usarlo como sustituto estructural",
      "No definir maniobra",
    ],
    faq: [
      {
        q: "¿Hay modelos publicados?",
        a: "No por ahora; solicita cotización con la maniobra y talla requeridas.",
      },
    ],
    chips: ["NFPA 1950", "Extricación", "Destreza"],
    resumen: [
      "Guante para rescate técnico donde agarre y control se valoran junto con el riesgo mecánico.",
      "La operación real define material, puño y protección requerida.",
    ],
  },
  {
    slug: "guante-forestal",
    seccion: "guantes",
    nombre: "Guante forestal",
    nombreCard: "Guante forestal",
    title: "Guante forestal para bombero | México",
    description:
      "Guante forestal para bombero: movilidad, puño, calor exterior y referencia NFPA 1950 antes de integrar el equipo de línea de fuego.",
    lead: "La línea de fuego pide un guante que acompañe caminata, herramienta manual y calor exterior sin convertir cada movimiento de la mano en fatiga.",
    imagen: ia("guante-forestal", "Guante forestal para bombero"),
    bloques: [
      {
        h2: "Guante para operación exterior",
        parrafos: [
          "El guante forestal acompaña trabajo prolongado al aire libre, herramientas manuales, vegetación, ceniza y cambios de terreno. El ajuste debe permitir sujetar y soltar sin que el guante se desplace o acumule material dentro del puño. La selección se hace con el resto del equipo forestal y con la herramienta que llevará la cuadrilla.",
          "NFPA 1950, antes NFPA 1977, es la referencia vigente para equipo forestal. No traslades la configuración de un guante estructural a esta operación sin revisar movilidad, tarea y exposición.",
        ],
        lista: [
          "Movilidad para herramienta manual",
          "Ajuste estable durante jornada exterior",
          "Puño coordinado con la manga forestal",
          "Referencia NFPA 1950",
        ],
      },
      {
        h2: "Prueba y cuidado",
        parrafos: [
          "Prueba el guante al caminar, agacharte y usar la herramienta prevista. Revisa que las costuras y el material no generen puntos de presión. Define talla y cantidad de reemplazo desde la requisición.",
          "Inspecciona desgaste, humedad, costuras y endurecimiento antes de reasignarlo. Sigue las instrucciones del fabricante para limpieza y secado; no uses métodos que alteren cuero o textiles.",
        ],
      },
    ],
    especificacion: [
      { campo: "Uso principal", valor: "Línea de fuego y operación exterior" },
      { campo: "Referencia", valor: "NFPA 1950 (antes NFPA 1977)" },
      { campo: "Prioridad", valor: "Movilidad y agarre" },
    ],
    normas: [
      { norma: "NFPA 1950", alcance: "Referencia para equipo forestal." },
    ],
    errores: [
      "Usar guante estructural por costumbre",
      "No probar con herramienta",
      "Ignorar talla y puño",
    ],
    faq: [
      {
        q: "¿Sirve para ataque interior?",
        a: "No se usa como sustituto del guante estructural para esa operación.",
      },
    ],
    chips: ["NFPA 1950", "Línea de fuego", "Herramienta manual"],
    resumen: [
      "Guante para operación forestal con movilidad y agarre durante jornadas exteriores.",
      "La prueba con herramienta y manga define la configuración útil.",
    ],
  },
  {
    slug: "guante-brigadista",
    seccion: "guantes",
    nombre: "Guante para brigadista",
    nombreCard: "Guante para brigadista",
    title: "Guante para brigadista contra incendio | México",
    description:
      "Guante para brigadista: materiales, ajuste y límites de uso para definir equipo de respuesta inicial y solicitar una cotización clara.",
    lead: "La brigada necesita un guante acorde con su procedimiento: controlar un conato no equivale a equipar ataque interior.",
    imagen: ia("guante-brigadista", "Guante para brigadista contra incendio"),
    bloques: [
      {
        h2: "El riesgo define el alcance",
        parrafos: [
          "Un guante para brigadista se selecciona conforme a las tareas autorizadas en el centro de trabajo: respuesta inicial, apoyo a evacuación u otra actividad definida. El análisis de riesgo determina si el modelo, el traje y el resto del EPP cubren esa tarea. No se debe usar una partida de brigada como sustituto automático de equipo estructural para ataque interior.",
          "El material exterior, corte, refuerzos y puño se revisan con la herramienta y la ropa que realmente usará el brigadista. Una compra clara especifica modelo, talla y configuración por persona.",
        ],
        lista: [
          "Tarea autorizada por procedimiento",
          "Talla y puño probados",
          "Refuerzos para la manipulación prevista",
          "Límites de uso claros",
        ],
      },
      {
        h2: "Firemax VI publicado",
        parrafos: [
          "Romak Fire Firemax VI se publica como guante para brigadista y también puede compararse al definir una partida estructural. Su ficha separa la información de materiales de cualquier afirmación normativa: no tiene norma declarada. Solicita la configuración y talla antes de ordenar.",
          "Para ataque interior o cambio de escenario, revisa el conjunto completo y la protección requerida; el nombre comercial de un guante no define por sí solo el alcance de uso.",
        ],
      },
    ],
    especificacion: [
      {
        campo: "Uso principal",
        valor: "Brigada y respuesta definida por riesgo",
      },
      {
        campo: "Referencia",
        valor: "Según procedimiento y análisis de riesgo",
      },
      { campo: "Modelo publicado", valor: "Romak Fire Firemax VI" },
    ],
    errores: [
      "Confundir brigada con ataque interior",
      "Pedir sin talla",
      "Atribuir una norma no declarada",
    ],
    faq: [{ q: "¿Qué modelo se publica?", a: "Romak Fire Firemax VI." }],
    relacionados: ["romak-firemax-vi"],
    chips: ["Brigada", "Talla M/G/XG", "Sin norma declarada"],
    resumen: [
      "Guante para brigada cuya selección parte de la tarea autorizada y el análisis de riesgo.",
      "El modelo publicado se cotiza por talla y configuración.",
    ],
  },
];

const modelos: Modelo[] = [
  {
    id: "romak-firemax-vi",
    seccion: "guantes",
    tipo: "guante-brigadista",
    marca: "Romak Fire",
    fabricante: "Romak Fire",
    nombre: "Firemax VI",
    codigo: "GIS1008",
    material: "Piel tratada color oro",
    tallas: "M/G estándar y XG",
    estatusNorma: "sin-norma",
    colores: "Oro",
    caracteristicas: [
      "Corte gun y pulgar tipo ala",
      "Banda elástica en el dorso",
      "Refuerzo de piel en palma y entre índice y pulgar",
      "Índice de construcción corrida sin costura expuesta",
      "Forro térmico de aramida y puño tejido de Kevlar",
      "Ensamble con hilo Kevlar",
    ],
    resumen: [
      "Guante Romak Fire de piel tratada con corte gun, pulgar tipo ala y forro térmico de aramida.",
      "Se cotiza por talla; define la operación y pruébalo con herramienta y manga.",
    ],
    descripcion: [
      "El Romak Fire Firemax VI utiliza piel tratada color oro, corte gun y pulgar tipo ala. La banda elástica en el dorso ayuda al ajuste, mientras el refuerzo de piel cubre la palma a la altura de los dedos medios y la zona entre índice y pulgar. El índice de construcción corrida evita una costura expuesta en esa área de trabajo.",
      "Su configuración incluye forro térmico de aramida, puño tejido de Kevlar y ensamble con hilo Kevlar. Estos elementos se revisan con la tarea prevista, el puño del traje y el agarre de herramienta; la talla debe permitir cerrar la mano sin holgura que reduzca el control.",
      "Está disponible en M/G estándar y XG. En una compra por volumen, solicita el desglose de tallas y confirma la operación de brigada o estructural para la que se evaluará. El modelo no tiene norma declarada; no se debe atribuir una certificación sin documentación aplicable.",
      "Antes de recibir la partida, revisa corte, refuerzos, puño, costuras y talla. Mantén el par asignado e inspecciónalo después de exposición, desgaste o contaminación.",
    ],
    faq: [
      { q: "¿Cuál es el código?", a: "GIS1008." },
      { q: "¿Qué tallas hay?", a: "M/G estándar y XG." },
      { q: "¿Tiene norma declarada?", a: "No tiene norma declarada." },
    ],
    imagen: proveedor(
      "/images/catalogo/guantes/romak-firemax-vi.avif",
      "Guante Romak Fire Firemax VI color oro",
    ),
  },
  {
    id: "skold-fpgs",
    seccion: "guantes",
    tipo: "guante-estructural",
    marca: "Sköld",
    fabricante: "Sköld",
    nombre: "Guante de bombero",
    codigo: "FPGS",
    material: "Carnaza de res de 1.5–1.7 mm oro y negro",
    tallas: "Unitalla",
    norma: "NFPA 1971 ed. 2013 · OSHA 29 CFR 1910.156 · Cal-OSHA",
    estatusNorma: "declarado",
    caracteristicas: [
      "Corte de pistola y pulgar tipo ala",
      "Banda elástica en muñeca y refuerzos en dedos",
      "Forro completo de modacrílico SEF cosido a cada dedo",
      "Puño elástico de Kevlar de dos capas",
      "Costuras Kevlar Tex-80",
      "Bandola interna para secado",
    ],
    resumen: [
      "Guante Sköld de carnaza con forro de modacrílico SEF, puño de Kevlar y refuerzos en zonas de contacto.",
      "Su norma se comunica como declaración; solicita el documento aplicable con la cotización.",
    ],
    descripcion: [
      "El Sköld FPGS está construido en carnaza de res de 1.5–1.7 mm en oro y negro. Declara resistencia a rompimiento y rigidez, corte de pistola, pulgar tipo ala y banda elástica en muñeca. Los refuerzos se ubican en dedos medios y entre índice y pulgar, áreas que reciben fricción durante el uso de herramienta.",
      "El índice es corrido y el forro completo de modacrílico SEF se cose a cada dedo con hilo Kevlar. Incluye puño elástico de Kevlar de dos capas, con mínimo de tres pulgadas, opción de puño de piel de dos pulgadas y costuras Kevlar Tex-80 con mínimo de ocho puntadas por pulgada. La bandola interna apoya el secado después del uso.",
      "Se reporta unitalla; valida el ajuste con la mano del usuario, el puño del chaquetón y los movimientos de la operación antes de comprar por volumen. El guante debe permitir sujetar herramienta y controles sin presión que limite la destreza.",
      "Norma declarada por el fabricante: NFPA 1971 ed. 2013, OSHA 29 CFR 1910.156 y Cal-OSHA. Solicita la declaración de conformidad con la cotización.",
    ],
    faq: [
      { q: "¿Cuál es el código?", a: "FPGS." },
      { q: "¿Qué talla declara?", a: "Unitalla." },
      {
        q: "¿La norma es certificación publicada?",
        a: "Se muestra como declaración del fabricante.",
      },
    ],
    imagen: proveedor(
      "/images/catalogo/guantes/skold-fpgs.avif",
      "Guante Sköld FPGS oro y negro",
    ),
  },
  {
    id: "veridian-fire-pro-ii",
    seccion: "guantes",
    tipo: "guante-estructural",
    marca: "Veridian",
    fabricante: "Veridian",
    nombre: "Fire Pro II",
    codigo: "GIS1017",
    material: "Cuero tratado",
    barreras:
      "FR-modacrílico, Pyrotec y barrera hidrófuga con protección químico-biológica",
    norma: "NFPA 1971-2018",
    estatusNorma: "certificado-ul",
    caracteristicas: [
      "Costuras reforzadas",
      "Tres capas interiores",
      "Barrera de humedad transpirable Pyrotec",
      "Barreras en todo el guante, incluido el puño",
      "Puño de 2 pulgadas reforzado con Nomex",
      "Incluido en el kit estructural Profesional",
    ],
    resumen: [
      "Guante Veridian de cuero tratado con tres capas interiores y barreras que continúan hasta el puño reforzado.",
      "El modelo tiene estatus certificado UL; confirma talla y configuración en la cotización.",
    ],
    descripcion: [
      "El Veridian Fire Pro II combina cuero tratado y costuras reforzadas para una configuración estructural. En el interior declara tres capas: FR-modacrílico como refuerzo ignífugo, Pyrotec como barrera de humedad transpirable y una barrera hidrófuga con protección químico-biológica. Cada capa debe revisarse como parte de la movilidad y el ajuste de la mano.",
      "Las barreras cubren todo el guante, incluido el puño de dos pulgadas reforzado con Nomex. Esta continuidad se valora junto con la manga del chaquetón para evitar que el solape se abra durante movimiento, agarre o trabajo con la mano elevada.",
      "El Fire Pro II está incluido en el kit estructural Profesional. Al cotizar, define talla, número de elementos y la configuración de la partida; antes de recibirla, prueba agarre, cierre de mano y coordinación con herramienta, radio y manga.",
      "Norma declarada por el fabricante: NFPA 1971-2018, listada por UL. Solicita la declaración de conformidad con la cotización.",
    ],
    faq: [
      { q: "¿Cuál es el código?", a: "GIS1017." },
      {
        q: "¿Qué barreras declara?",
        a: "FR-modacrílico, Pyrotec y barrera hidrófuga con protección químico-biológica.",
      },
      {
        q: "¿Está incluido en un kit?",
        a: "En el kit estructural Profesional.",
      },
    ],
    imagen: proveedor(
      "/images/catalogo/guantes/veridian-fire-pro-ii.avif",
      "Guante Veridian Fire Pro II",
    ),
  },
];

tipos[1].bloques.push({
  h2: "Extricación: control sobre vidrio, lámina y herramienta",
  parrafos: [
    "En un vehículo colisionado, la mano alterna entre retirar vidrio, estabilizar una puerta, pasar una eslinga y operar controles de una herramienta. El guante de rescate y extricación privilegia que los dedos encuentren palancas, pasadores y conectores sin que el volumen o una costura en la yema oculten el tacto. La superficie de agarre debe conservar contacto al trabajar con polvo, lubricante o fragmentos, sin convertir el guante en un reemplazo del equipo estructural.",
    "La evaluación práctica usa las herramientas que ya tiene la unidad: abre y cierra un mosquetón, toma una cuña, ajusta una eslinga, gira una válvula y manipula una pieza de vidrio simulada con seguridad. Revisa especialmente la unión entre índice y pulgar, que recibe torsión al sujetar pinzas o arrastrar material. Si el guante se engancha en la muñeca al sacar la mano de una abertura, el puño no corresponde a esa maniobra.",
    "La requisición debe nombrar rescate vehicular, técnico o ambas actividades; no basta escribir “guante de rescate”. Define pares por talla, material de palma si se declara, tipo de cierre o puño y cantidades para relevo. La referencia NFPA 1950 puede orientar la conversación, pero no autoriza a atribuir resistencia al corte o a la punción cuando el fabricante no la declara.",
    "Al inspeccionarlo, pasa la mano por palma, yemas, costados de dedos y zona de pulgar para detectar cortes, vidrio incrustado, desprendimiento de recubrimiento o costura levantada. Revisa que el cierre no abra al flexionar la muñeca. Un guante contaminado con aceites o con fragmentos atrapados no vuelve a servicio hasta procesarse conforme al método aplicable y comprobar que conserva agarre.",
    "El error de compra más costoso es adquirir un guante grueso pensando que “aguanta más” y descubrir que no permite abrir un conector bajo presión de tiempo. Otro es pedir una sola talla para voluntarios. El responsable de brigada debe pedir muestra o prueba de movimientos, desglose de tallas y reemplazos para los pares dañados durante rescate, no sustituirlos por guantes de línea de fuego.",
  ],
  lista: [
    "Ensaya conectores, cuñas, eslingas y controles reales",
    "Inspecciona yemas y unión índice-pulgar por vidrio o cortes",
    "Distingue rescate vehicular de ataque estructural en la orden",
    "Evita atribuir niveles mecánicos no declarados",
  ],
});
tipos[2].bloques.push({
  h2: "Línea de fuego: jornada exterior y herramienta manual",
  parrafos: [
    "El guante forestal acompaña ciclos largos de caminar, abrir brecha, retirar vegetación y manipular ceniza. A diferencia del guante para ataque interior, la mano debe repetir el cierre sobre un mango durante kilómetros y cambios de pendiente. El material no debe formar un borde duro en la palma cuando se toma un Pulaski, McLeod o herramienta equivalente; ese borde genera ampolla y hace que la persona afloje la herramienta antes de terminar el tramo.",
    "La prueba se realiza al aire libre: camina con el equipo, agáchate para levantar material, intercambia la herramienta de mano y trabaja un periodo suficiente para sentir presión en nudillos y muñeca. Revisa que el puño no junte ceniza ni vegetación y que la manga forestal permanezca sobre la transición cuando el brazo alcanza el suelo. La ventilación y el ajuste se evalúan durante movimiento sostenido, no frente a una mesa.",
    "En la orden de compra, especifica guante forestal para línea de fuego, pares por talla, distribución por cuadrilla y una reserva para desgaste de herramienta. Si se pide un material o refuerzo, debe ser el que el proveedor declare para el modelo. NFPA 1950 es la referencia señalada para esta operación; no convierte cualquier guante de cuero en equipo forestal ni permite copiar una declaración de otro producto.",
    "La inspección se concentra en la palma y el lateral que rozan el mango, además de costuras que reciben tierra, humedad y ceniza. Busca cuero reseco, pérdida de flexibilidad, agujeros y costuras que atrapen material. Seca el par según la indicación aplicable antes de guardarlo; colgarlo por el puño mientras sigue húmedo puede deformar la zona que debe sellar con la manga.",
    "Un jefe de brigada suele preguntar si el guante forestal sirve para cargar manguera en un incendio de edificio. Puede colaborar en labores de apoyo definidas, pero no se debe adquirir como sustituto del guante estructural para ataque interior. Mantén la identificación por operación en el almacén para que la cuadrilla no tome el par más cercano cuando el escenario cambia.",
  ],
  lista: [
    "Prueba con la herramienta que usa cada cuadrilla",
    "Revisa presión de palma después de caminar y abrir brecha",
    "Pide reserva por desgaste de línea de fuego",
    "Separa inventario forestal de los pares estructurales",
  ],
});
tipos[3].bloques.push({
  h2: "Brigada industrial: alcance autorizado y respuesta inicial",
  parrafos: [
    "El guante para brigadista se compra para las actividades que el centro de trabajo autoriza: acercamiento a un conato, manejo de extintor, aislamiento de área o apoyo a evacuación. La pieza no define por sí misma el nivel de respuesta. Antes de seleccionar material, identifica qué mano sostendrá el extintor, qué controles se operan, si existe contacto con superficies calientes y en qué punto la brigada debe retirarse y entregar la escena a un cuerpo de bomberos.",
    "Para probarlo, usa el extintor, gabinete, radio y ropa que utiliza la brigada. Simula retirar el pasador, oprimir la palanca, sujetar la manguera y abrir una puerta sin que el puño quede atrapado en la manga. El objetivo es detectar si la palma resbala, si el pulgar pierde alcance o si la banda de ajuste cambia de posición al repetir la acción. No es una prueba de ataque interior.",
    "La requisición describe “guante para brigada industrial”, modelo si se eligió uno, código, tallas M/G o XG cuando apliquen, pares por persona y pares de reemplazo. Anexa el procedimiento que delimita su uso. Si el modelo carece de norma declarada, esa condición debe quedar escrita tal cual; no uses expresiones como certificado o equivalente para cerrar una compra.",
    "En recepción, compara el corte, el refuerzo de palma, el puño y el color contra la orden. Asigna el par a una persona, registra fecha de entrega y enseña dónde revisar costuras, suciedad y endurecimiento de la piel. En una planta, el error frecuente es dejar pares de uso común junto a herramientas contaminadas; eso elimina la trazabilidad e impide identificar un deterioro temprano.",
    "La pregunta decisiva no es si el guante se ve robusto, sino si cubre el procedimiento autorizado. Firemax VI es un modelo publicado en esta familia, pero una marca o un acabado no amplían la misión de la brigada. Si el análisis de riesgo cambia hacia incendio interior, reevalúa traje, casco, respiración, capacitación y guantes como un conjunto.",
  ],
  lista: [
    "Relaciona la compra con el procedimiento de brigada",
    "Prueba pasador, palanca, radio y puerta",
    "Registra estatus sin norma cuando corresponda",
    "Asigna y conserva cada par por persona",
  ],
});

tipos[1].bloques[2].parrafos.push(
  "El responsable de rescate debe definir cómo se lavará o descontaminará el par después de vidrio, combustible, fluidos o polvo de freno. Reserva un sitio para separar pares pendientes de limpieza y establece quién autoriza su regreso. Esa secuencia evita que un guante con contaminación o una costura afectada vuelva a una maniobra donde se necesita tacto para identificar un control pequeño. Registra el motivo de baja para estimar reposición por extricación y no descargar ese desgaste en el inventario estructural.",
  "Al comparar ofertas, pregunta qué superficie queda expuesta en palma y dedos, cómo cierra el puño y qué talla corresponde a cada usuario. Si una muestra permite tomar una herramienta pero no liberar un conector con facilidad, anota la observación en la evaluación. La decisión se toma frente a la maniobra, no frente a una fotografía de catálogo.",
);
tipos[2].bloques[2].parrafos.push(
  "Para cuadrillas forestales, registra la talla junto con la herramienta predominante y la temporada de uso. Una persona que trabaja con Pulaski puede detectar desgaste en otra zona que quien usa batefuego; ambos pares requieren revisión propia. Pide entrega por par, no por bulto sin identificación, y conserva una reserva protegida del sol, humedad y combustibles. Así el cambio por deterioro de palma no obliga a mezclar un guante nuevo con uno de distinta construcción.",
  "El supervisor debe revisar al final de la jornada si ceniza o tierra quedaron atrapadas en la costura de dedos y si la humedad alcanzó el interior. La limpieza autorizada recupera condición para la siguiente salida; sacudir el par sobre la cabina o guardarlo dentro de la mochila transfiere material y oculta daños. La requisición puede incluir cantidad de reposición por campaña, pero no debe prometer una vida útil que el fabricante no haya declarado.",
);
tipos[3].bloques[2].parrafos.push(
  "La matriz de compra de una planta puede separar pares para brigada de turno, personal de apoyo y reposición, siempre que el procedimiento describa quién está autorizado a usarlos. Etiqueta el almacén con la actividad y no solo con la talla. Al recibir Firemax VI u otro modelo, confirma que el corte, refuerzo y puño corresponden a la muestra probada; sustituir por un par visualmente similar cambia el comportamiento al accionar un extintor.",
  "Después de un simulacro, pide a cada usuario reportar presión en la base del pulgar, deslizamiento al sostener la manguera y dificultad para liberar la palanca. Esos tres datos sirven para ajustar tallas y no para justificar más protección de la que permite el procedimiento. Si la operación planeada incluye otra exposición, el análisis de riesgo debe seleccionar otro conjunto en lugar de ampliar por costumbre el uso del guante de brigada.",
);
tipos[2].bloques[2].parrafos.push(
  "Antes de desplegar la cuadrilla, confirma que cada persona puede cerrar el puño con el guante seco y tras una pausa de trabajo. El ajuste que parece correcto al inicio puede cambiar con humedad y polvo; por ello conviene anotar la observación de campo y comparar pares de la misma partida. Esta revisión se enfoca en movilidad forestal y no sustituye la inspección del resto del EPP.",
);
tipos[3].bloques[2].parrafos.push(
  "El encargado de compras debe entregar junto con los pares una instrucción breve sobre el límite operativo autorizado. Mostrar el guante, el extintor y el punto de retiro durante la inducción evita que un trabajador interprete la entrega como autorización para entrar a un incendio. La claridad del límite es parte de la especificación de brigada.",
);

seccion.resumenHero = [
  "La mano es el punto donde el equipo se encuentra con la tarea. Por eso un guante se selecciona por operación: ataque estructural, rescate, línea de fuego o respuesta de brigada. Material, capas, costuras, refuerzos y puño importan únicamente cuando se revisan junto con el movimiento, la herramienta y la exposición de esa operación.",
  "La compra empieza con una prueba de talla e interfaz. Coloca el guante con la manga, casco, protección respiratoria y equipo habitual; después revisa agarre, movilidad, solape y retiro. El resultado debe quedar descrito en la requisición para que la partida recibida sea comparable con la que se evaluó.",
];
seccion.etiquetas = {
  menuTipos: "Tipos de guantes",
  tiposEyebrow: "Selección por operación",
  tiposTitulo: "Protección para manos según la maniobra",
  tiposDescripcion:
    "Cada tipo responde a una exposición y a una exigencia de destreza diferentes.",
  elegirTitulo: "Cómo comparar guantes",
  elegirDescripcion:
    "Evalúa tarea, talla, interfaz, construcción y documentación antes de ordenar.",
  modelosTitulo: "Modelos publicados",
  modelosDescripcion:
    "Las características y el estatus normativo se conservan por modelo.",
};
seccion.comparativa = {
  columnas: [
    "Tipo",
    "Uso",
    "Norma o referencia",
    "Material o forma",
    "Ventaja",
    "Límite",
  ],
  filas: [
    [
      "Estructural",
      "Combate en edificaciones",
      "NFPA 1970",
      "Capas, barreras y puño",
      "Coordina protección y agarre",
      "No sustituye rescate o forestal",
    ],
    [
      "Rescate y extricación",
      "Vehicular y técnico",
      "NFPA 1950",
      "Destreza y agarre mecánico",
      "Control en maniobras finas",
      "No reemplaza guante estructural",
    ],
    [
      "Forestal",
      "Línea de fuego exterior",
      "NFPA 1950",
      "Movilidad para herramienta",
      "Acompaña jornada exterior",
      "No se usa como estructural",
    ],
    [
      "Brigadista",
      "Respuesta autorizada",
      "Análisis de riesgo",
      "Configuración por tarea",
      "Alinea equipo con procedimiento",
      "No equivale a ataque interior",
    ],
  ],
};
seccion.criterios = {
  titulo: "Cinco criterios para comprar guantes",
  items: [
    {
      termino: "Operación",
      texto: "Define la maniobra principal antes de elegir tipo.",
    },
    {
      termino: "Talla",
      texto: "Prueba cierre, extensión y agarre con el usuario.",
    },
    {
      termino: "Interfaz",
      texto: "Revisa el solape con manga y equipo adyacente.",
    },
    {
      termino: "Construcción",
      texto: "Compara palma, dedos, puño, forro y refuerzos declarados.",
    },
    {
      termino: "Conservación",
      texto: "Incluye inspección, limpieza, secado y reposición en la partida.",
    },
  ],
};
seccion.intro.push(
  "Una comparación responsable separa lo que el modelo declara de lo que se necesita para la operación. NFPA 1970 es la referencia estructural; NFPA 1950 reúne las referencias anteriores de línea de fuego y rescate técnico. Estas referencias ayudan a formular la solicitud, pero no autorizan a transferir prestaciones entre modelos ni a llamar certificado a un producto cuyo estatus solo es declarado. La recepción debe contrastar modelo, código, talla, materiales y documentación contra la orden.",
  "El programa de conservación importa desde la compra. Un par que se guarda húmedo, contaminado o sin identificación puede perderse antes de que el desgaste sea evidente. Define quién inspecciona, cómo se limpia, dónde se seca y cuándo se reemplaza. Esta disciplina evita que las manos dependan de un equipo cuya condición ya no se puede confirmar.",
);
seccion.faq.push(
  {
    q: "¿Qué se compara además del material?",
    a: "Talla, palma, dedos, puño, costuras, interfaz, operación y estatus normativo del modelo.",
  },
  {
    q: "¿Puedo pedir un solo modelo para todo?",
    a: "Solo si el análisis de riesgo y las tareas autorizadas justifican esa selección; los tipos no son intercambiables.",
  },
  {
    q: "¿Cómo recibo una partida?",
    a: "Verifica por par modelo, talla, configuración y documentación antes de asignarla.",
  },
  {
    q: "¿Cuándo retiro un guante?",
    a: "Por daño, pérdida de ajuste, contaminación o criterio del programa de inspección.",
  },
);
seccion.intro.push(
  "La entrega no concluye al contar pares. Capacita a cada usuario para reconocer qué tipo recibió, dónde están sus límites y cómo revisar palma, costuras, puño y forro antes de servicio. Mantén el par identificado, procesa cualquier exposición conforme al método indicado y registra daños o reemplazos. Esta rutina transforma la compra en protección disponible y evita mezclar guantes de tareas distintas en el mismo inventario.",
  "Cuando aparezca un modelo nuevo, evalúalo con la misma maniobra y documentación que se usaron para la partida anterior. La comparación debe responder si mantiene talla, interfaz, construcción y estatus requeridos; no basta que tenga un nombre parecido o un acabado equivalente.",
);

modelos[0].title = "Romak Fire Firemax VI | Guantes bombero";
modelos[0].description =
  "Romak Fire Firemax VI: material, construcción, talla y estatus normativo para revisar ajuste, interfaz con el traje y cotización por operación institucional.";
modelos[0].descripcion.push(
  "El Firemax VI concentra piel de refuerzo en la palma, a la altura de los dedos medios, y entre índice y pulgar. Esa zona trabaja al sacar el pasador de un extintor, apretar una palanca o sujetar una manguera de gabinete. Su corte gun y pulgar tipo ala dejan que la mano cierre sin una costura expuesta en el índice; la banda elástica del dorso mantiene el ajuste mientras el usuario cambia de una maniobra a otra.",
  "Para una brigada industrial, pruébalo con el extintor y la manga que usa el personal. Revisa que el pulgar alcance el pasador sin tensar el cuero y que el puño tejido de Kevlar no se introduzca en la manga al levantar el brazo. Las tallas publicadas son M/G estándar y XG; solicita el número de pares por cada talla, no una mezcla sin desglose.",
  "Al inspeccionar este modelo, busca desgaste en el refuerzo entre índice y pulgar, aflojamiento de la banda dorsal, rotura de hilo Kevlar y separación del forro térmico de aramida. Si la piel se endurece y ya no permite oprimir el control del extintor, sepáralo de la reserva. No se declara norma para Firemax VI; la orden debe conservar ese estatus sin añadir una certificación.",
  "En recepción, coteja código GIS1008, color oro, corte gun, pulgar tipo ala y refuerzos de piel. La reposición debe conservar esos rasgos cuando la brigada ya fue entrenada con este par. Pregunta frecuente: ¿puede asignarse para ataque interior? No se debe decidir por el nombre o la piel; la tarea autorizada y el conjunto de EPP determinan el alcance.",
);
modelos[0].faq.push(
  {
    q: "¿Qué zona tiene refuerzo de piel?",
    a: "La palma a la altura de los dedos medios y el espacio entre índice y pulgar, zonas que reciben fricción al sujetar controles y mangueras.",
  },
  {
    q: "¿Cómo se pide una partida?",
    a: "Por código GIS1008 y desglose de pares M/G estándar y XG, indicando que su destino es la actividad autorizada de brigada.",
  },
);

modelos[1].title = "Sköld Guante de bombero | Guantes bombero";
modelos[1].description =
  "Sköld Guante de bombero: material, construcción, talla y estatus normativo para revisar ajuste, interfaz con el traje y cotización por operación institucional.";
modelos[1].descripcion.push(
  "La carnaza de res de 1.5–1.7 mm del FPGS forma el exterior oro y negro. El corte de pistola, el pulgar tipo ala y el índice corrido distribuyen la flexión cuando la mano toma una boquilla o una herramienta de entrada. Los refuerzos en dedos medios y entre índice y pulgar son los primeros puntos que deben tocarse durante la inspección, porque concentran fricción de agarre.",
  "Su forro completo de modacrílico SEF está cosido a cada dedo con hilo Kevlar. Antes de asignar el guante, ponlo y retíralo varias veces para confirmar que el forro no se mueve ni dificulta volver a introducir los dedos. El puño elástico de Kevlar de dos capas declara un mínimo de tres pulgadas; el proveedor también publica opción de puño de piel de dos pulgadas. Esa diferencia debe quedar definida en la orden.",
  "FPGS se publica como unitalla, por lo que la prueba física no puede sustituirse con una equivalencia de talla. Hazla con chaquetón, radio y boquilla: cierra la mano, gira la muñeca y extiende los dedos. La bandola interna está destinada al secado; no es punto para arrastrar, colgar carga ni modificar el guante. Revisa costuras Kevlar Tex-80 y el estado de la banda elástica de muñeca después de servicio.",
  "Para requisitar, indica código FPGS, construcción de puño elegida, condición unitalla y cantidad de pares. Su referencia NFPA 1971 edición 2013, OSHA 29 CFR 1910.156 y Cal-OSHA se muestra como declaración del fabricante. Un jefe de compras debe pedir la declaración aplicable, no asignarle un estatus UL.",
);
modelos[1].faq.push(
  {
    q: "¿Qué se verifica en el forro SEF?",
    a: "Que permanezca cosido a cada dedo, no gire al retirar la mano y no forme pliegues que afecten el agarre de boquilla o herramienta.",
  },
  {
    q: "¿La bandola sirve para cargar equipo?",
    a: "No. Se publica como apoyo para secado; no debe usarse como elemento de carga ni para alterar la construcción del guante.",
  },
);

modelos[2].title = "Veridian Fire Pro II | Guantes bombero";
modelos[2].description =
  "Veridian Fire Pro II: material, construcción, talla y estatus normativo para revisar ajuste, interfaz con el traje y cotización por operación.";
modelos[2].descripcion.push(
  "Fire Pro II reúne cuero tratado y costuras reforzadas en el exterior con tres capas interiores declaradas: FR-modacrílico, Pyrotec como barrera de humedad transpirable y barrera hidrófuga con protección químico-biológica. La compra debe conservar esa secuencia como configuración del modelo; no basta describirlo como “guante con barrera”, porque cada capa participa en el espesor, la flexión y el manejo de humedad de la mano.",
  "Las barreras continúan hasta el puño de dos pulgadas reforzado con Nomex. Durante la prueba con el chaquetón, levanta los brazos, gira muñeca y toma radio para comprobar que ese puño conserva el solape sin formar un doblez rígido. Si aparece separación entre manga y puño al cargar línea o trabajar por encima del hombro, documenta la incompatibilidad antes de pedir una partida completa.",
  "La inspección posterior a una salida revisa cuero, costuras reforzadas y especialmente el borde del puño, donde termina la continuidad declarada de las barreras. No perforar, coser ni aplicar adhesivo sobre esa zona. Si la mano se siente húmeda de manera anormal, si el forro se desplaza o si el puño pierde forma, retira el par para evaluación conforme al programa de EPP.",
  "Está incluido en el kit estructural Profesional. En la requisición separa pares Fire Pro II por talla confirmada, código GIS1017 y cantidad de usuarios, y solicita la misma configuración del kit cuando esa sea la intención. Su estatus es certificado UL con NFPA 1971-2018 declarada; pide documentación de la partida.",
);
modelos[2].faq.push(
  {
    q: "¿Hasta dónde llegan las barreras declaradas?",
    a: "Cubren todo el guante, incluido el puño de dos pulgadas reforzado con Nomex; esa continuidad debe revisarse junto con la manga del chaquetón.",
  },
  {
    q: "¿Qué significa que esté en el kit Profesional?",
    a: "Que el modelo se publica como parte de ese kit; la orden debe confirmar tallas, cantidades y la configuración exacta requerida.",
  },
);

export const data = { seccion, tipos, modelos };
