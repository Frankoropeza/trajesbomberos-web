import type { Seccion } from "../types";

export const SECCIONES: Seccion[] = [
  {
    slug: "cascos",
    nombre: "Cascos",
    h1: "Cascos para bombero: estructural, forestal y rescate",
    title: "Cascos para bombero: tipos y modelos | México",
    description:
      "Cascos para bombero estructural, forestal, rescate técnico y brigada industrial; Bullard y Sköld; cotización por WhatsApp y envío a todo México.",
    eyebrow: "Catálogo de protección personal",
    lead: "El casco no es un accesorio del traje: define cobertura, visión, compatibilidad con el ERA y la operación para la que el elemento queda protegido.",
    intro: [
      "Un casco de bombero se elige por el escenario de trabajo, no por su silueta. El estructural está pensado para combate en edificación: debe trabajar con la máscara del equipo de respiración autónoma, desviar agua y escombro, y mantener protegidos nuca, orejas y frente. El forestal reduce peso y permite disipar calor en jornadas largas de línea de fuego. El de rescate técnico privilegia un perfil compacto, barbiquejo estable y puntos para lámpara o arnés. La brigada industrial, en cambio, puede partir de un casco industrial únicamente cuando su análisis de riesgo se limita a conatos y nunca contempla ataque interior.",
      "En esta sección reunimos cascos para bomberos que se cotizan con datos comparables: material de carcasa, suspensión, visor o goggles, barbiquejo, compatibilidad con ERA y declaración de norma del fabricante. No publicamos precios porque la configuración cambia con el color, los accesorios, la protección ocular, la identificación y el número de elementos. La cotización debe dejar por escrito qué incluye cada casco y cuál es el documento de cumplimiento disponible para la partida.",
      "Bullard y Sköld aparecen aquí porque hay modelos concretos con ficha de proveedor para cotizar. Eso no convierte una foto en una configuración cerrada: la visera, las cintas, el color, el cubrenuca y otros accesorios se confirman antes de ordenar. Si equipas una brigada o un cuerpo de bomberos, pide también revisar la interfaz completa: casco, monja o capucha, máscara de ERA, guantes y cuello del chaquetón deben permitir movimiento sin dejar zonas expuestas.",
    ],
    grupos: [
      {
        titulo: "Combate de incendios",
        tipos: ["casco-estructural-tradicional", "casco-estructural-europeo"],
      },
      {
        titulo: "Operaciones especializadas",
        tipos: [
          "casco-forestal",
          "casco-rescate-tecnico",
          "casco-brigada-industrial",
        ],
      },
    ],
    faq: [
      {
        q: "¿Cuánto dura un casco de bombero?",
        a: "La vida de servicio depende de la marca, la fecha de fabricación, el impacto, la exposición térmica y el programa de inspección. Revisa la instrucción del fabricante y retira un casco que haya sufrido daño, deformación o exposición que comprometa sus componentes.",
      },
      {
        q: "¿Cuál es la diferencia entre casco estructural y forestal?",
        a: "El estructural está hecho para ataque en edificaciones y prioriza cobertura con ERA; el forestal reduce peso, usa ala completa y ayuda a manejar jornadas largas al aire libre. No se sustituyen entre sí.",
      },
      {
        q: "¿Un casco industrial sirve para incendio?",
        a: "Puede ser parte del equipo de una brigada ante conatos si el análisis de riesgo lo permite. Para ataque interior o exposición estructural se necesita casco diseñado para esa operación.",
      },
      {
        q: "¿Se puede usar con ERA?",
        a: "Los cascos estructurales y algunos de rescate deben revisarse físicamente con la máscara y arnés del ERA que ya usa el equipo. La compatibilidad se confirma por configuración.",
      },
      {
        q: "¿Los colores indican jerarquía?",
        a: "Cada corporación define sus colores e identificación. Confirma esa convención antes de cotizar para que todos los cascos del pedido queden consistentes.",
      },
      {
        q: "¿Qué incluye la cotización?",
        a: "Incluye el modelo y la configuración solicitada, accesorios declarados y los datos técnicos disponibles. Antes de ordenar, confirma por escrito color, protección ocular, cubrenuca, tallas o ajuste y documentación aplicable.",
      },
    ],
    hero: {
      src: "/images/catalogo/cascos/hero-cascos.avif",
      alt: "Cascos para bombero de distintos usos operativos",
    },
    resumenHero: [
      'Elige primero el escenario de trabajo y luego compara casco, ajuste, protección ocular, cubrenuca y compatibilidad con el resto del equipo.',
      'Las fichas de modelo conservan la declaración del fabricante. En LORICA, la configuración exacta se confirma por escrito antes de cotizar.',
    ],
    etiquetas: {
      menuTipos: "Tipos de casco",
      tiposEyebrow: "Por operación",
      tiposTitulo: "Cinco tipos de casco para bombero",
      tiposDescripcion:
        "No son intercambiables: cada forma, peso relativo y sistema de retención responde a una escena distinta.",
      elegirTitulo: "Cómo elegir el casco de bombero adecuado",
      elegirDescripcion:
        "Antes de pedir marca o color, compara el riesgo, el conjunto que ya usa tu equipo y la documentación que necesitas recibir.",
      modelosTitulo: "Modelos de casco publicados",
      modelosDescripcion:
        "Cada ficha conserva sus componentes y alcance declarado; elige el modelo después de definir el tipo de operación.",
    },
    comparativa: {
      columnas: ["Tipo", "Uso", "Referencia", "Forma", "Peso", "ERA"],
      filas: [
        [
          "Estructural tradicional",
          "Ataque en edificaciones",
          "NFPA 1970 (antes NFPA 1971)",
          "Ala trasera larga",
          "Medio",
          "Sí, se confirma por modelo",
        ],
        [
          "Estructural europeo",
          "Ataque en edificaciones",
          "EN 443:2008",
          "Perfil jet con visor",
          "Medio",
          "Sí, se confirma por modelo",
        ],
        [
          "Forestal",
          "Línea de fuego y exterior",
          "NFPA 1950 (antes NFPA 1977)",
          "Ala completa",
          "Ligero",
          "No sustituye casco estructural",
        ],
        [
          "Rescate técnico",
          "Vehicular, vertical y confinados",
          "NFPA 2500",
          "Perfil compacto sin ala",
          "Ligero",
          "Según operación y equipo",
        ],
        [
          "Brigada industrial",
          "Conatos definidos por riesgo",
          "NOM-002-STPS-2010",
          "Industrial o estructural según tarea",
          "Variable",
          "Solo si el escenario lo requiere",
        ],
      ],
    },
    criterios: {
      titulo: "Cinco criterios antes de cotizar",
      items: [
        {
          termino: "Escenario",
          texto:
            "distingue ataque interior, línea de fuego, rescate y conato industrial.",
        },
        {
          termino: "Interfaz",
          texto:
            "prueba casco, máscara de ERA, capucha y cuello del traje en conjunto.",
        },
        {
          termino: "Ajuste",
          texto:
            "revisa suspensión y barbiquejo mientras el elemento se mueve.",
        },
        {
          termino: "Accesorios",
          texto:
            "define visor, goggles, lámpara, bandas y marcaje desde la requisición.",
        },
        {
          termino: "Documento",
          texto:
            "pide modelo, edición de norma declarada y configuración por escrito.",
        },
      ],
    },
  },
];

import type { Tipo } from "../types";

const ia = (slug: string, alt: string) => ({
  src: `/images/catalogo/cascos/tipo-${slug}.avif`,
  alt,
  width: 1600,
  height: 900,
  origen: "ia" as const,
});

export const CIERRES_TIPO: Record<string, string[]> = {
  "casco-estructural-tradicional": [
    "Para el casco tradicional, el cierre de la selección empieza por la interfaz de ataque interior. Pide que el modelo se pruebe con máscara, arnés de ERA, monja y cuello del chaquetón que ya opera la corporación. Ajusta matraca y barbiquejo con esos elementos puestos; después mira arriba, baja la cabeza y mueve el torso como en escalera o arrastre. El ala trasera, la nuquera y la protección ocular deben conservar su función sin desplazar el casco ni estorbar el sello de la máscara.",
    "En la requisición fija color, cintas, visor o goggles, cubrenuca, identificación y piezas de reemplazo. Al recibir, compara casco por casco contra la configuración aprobada, no contra una imagen genérica. Registra fecha de fabricación, usuario y resultados de inspección para identificar equipo expuesto a impacto, calor o contaminantes. Si un componente se sustituye, confirma que corresponde al modelo para no alterar la retención ni la cobertura original.",
  ],
  "casco-estructural-europeo": [
    "Para un casco tipo jet, cierra la evaluación con visor y comunicación en la posición que usará el elemento. Revisa que el visor exterior pueda desplegarse y guardarse sin rozar máscara, regulador o micrófono. Si se integra comunicación, comprueba que las fijaciones no concentren presión sobre la cabeza y que el cableado no se enganche al girar o entrar a una cabina. La cobertura lateral solo sirve si la retención mantiene el casco centrado durante movimiento y trabajo con la cara elevada.",
    "La orden debe describir visor exterior, ocular interior si corresponde, color, accesorios de comunicación, protector de nuca y método de identificación. Recibe evidencia del modelo propuesto y contrástala con la referencia de norma del requisito. Conserva instructivos para desmontar componentes durante limpieza y entrena al equipo con la secuencia de máscara, casco y visor. No adaptes un casco perforando su carcasa para instalar una pieza que la configuración no contempla.",
  ],
  "casco-forestal": [
    "Para el casco forestal, ensaya el ajuste en las condiciones de movilidad que realmente tendrá la cuadrilla: caminar en pendiente, inclinarse hacia combustible vegetal, mirar la línea de fuego y trabajar con goggles. El ala completa debe proteger sin levantar el casco con el viento o chocar con cubrenuca, lentes y protección auditiva. Si el modelo incorpora ventilación, mantenla libre de modificaciones o cintas que cambien el flujo previsto. La comodidad influye en que el usuario conserve el ajuste durante una jornada larga.",
    "Define goggles, bandas, color, marcaje y cubrenuca antes de liberar la compra. En recepción, revisa clips, velcros, suspensión y barbiquejo, porque son las partes que más se manipulan al poner y quitar accesorios. Lleva registro de exposición a calor, golpes y contaminantes, y sigue el procedimiento del fabricante para limpiar o retirar. Un casco forestal no debe trasladarse sin evaluación a ataque interior solo porque comparte color o nombre institucional con el equipo estructural.",
  ],
  "casco-rescate-tecnico": [
    "Para rescate técnico, valida el perfil compacto dentro de la maniobra y no solamente de pie. Haz una prueba con arnés, lámpara, goggles y los movimientos de acceso que use el equipo: entrada a vehículo, ascenso, descenso, trabajo bajo tablero o paso por espacio reducido. El barbiquejo de cuatro puntos debe mantener el casco en posición sin crear presión que distraiga al rescatista. Revisa también cómo se orienta la lámpara cuando el usuario mira hacia arriba y cómo se evita que sus fijaciones se enganchen con cuerda, cinta o estructura.",
    "Especifica la operación prioritaria y cada accesorio: portalámpara, visor, comunicación, identificación y piezas de recambio. Registra el modelo asignado por persona y revisa la carcasa después de golpes o incidentes que puedan comprometerla. El entrenamiento debe cubrir ajuste, desmontaje para limpieza e inspección de retención, no solo el uso de herramientas. Incluye una revisión de acceso y salida con el casco puesto en cada práctica relevante: así se detectan enganches, rebotes de lámpara o pérdida de campo visual antes de una maniobra real bajo condiciones controladas. Si el procedimiento cambia a incendio interior o requiere protección respiratoria, vuelve a evaluar el conjunto completo en vez de asumir que este casco cubre el nuevo riesgo.",
  ],
  "casco-brigada-industrial": [
    "Para una brigada industrial, cierra la decisión con el escenario escrito en el procedimiento. Define si el elemento solo controla un conato, apoya evacuación, opera al aire libre o podría ingresar a una estructura con fuego. Esa respuesta determina si la partida usa casco industrial con careta o casco estructural integrado al resto del EPP. Prueba el casco con lentes, careta, guantes y ropa que se usarán durante la respuesta; el ajuste y la visibilidad deben permanecer estables bajo el movimiento previsto.",
    "En la requisición deja visibles los límites de uso, color de identificación, clase industrial cuando aplique, careta, barbiquejo y marcado institucional. Al recibir, verifica que cada componente coincida con la tarea definida y entrega instrucciones de inspección junto con el equipo. Capacita a la brigada para reconocer cuándo no debe rebasar el alcance de su protección. Un casco industrial correctamente comprado sigue siendo insuficiente si se usa para ataque interior sin casco estructural, ERA y el conjunto requerido.",
  ],
};

export const TIPOS: Tipo[] = [
  {
    slug: "casco-estructural-tradicional",
    seccion: "cascos",
    nombre: "Casco estructural tradicional (estilo americano)",
    nombreCard: "Casco estructural tradicional",
    title: "Casco estructural tradicional para bombero | México",
    description:
      "Casco estructural tradicional para bombero: componentes, norma de referencia, compatibilidad con ERA y qué pedir al cotizar.",
    lead: "Ala trasera, suspensión con matraca y cubrenuca: la silueta tradicional resuelve la exposición de un ataque estructural cuando se configura con el conjunto correcto.",
    imagen: ia(
      "casco-estructural-tradicional",
      "Casco estructural tradicional estilo americano para bombero",
    ),
    bloques: [
      {
        h2: "Qué distingue al casco estructural tradicional",
        parrafos: [
          "El casco estructural tradicional, también llamado de estilo americano, se reconoce por su copa alta y su ala trasera larga. Esa ala no es decoración: ayuda a desviar agua, escombro y escurrimientos fuera del cuello durante el trabajo en una edificación. La carcasa puede ser termoplástica o de compuesto, incluida fibra de vidrio, según el modelo. Debajo, la suspensión separa la cabeza de la carcasa y distribuye el ajuste; por eso no se debe evaluar un casco solo por el material visible.",
          "La configuración para incendio estructural normalmente reúne suspensión con matraca, nuquera de Nomex o aramida, barbiquejo de liberación rápida, visor o goggles, y cintas retrorreflejantes. Cada elemento participa en una interfaz distinta: el ajuste evita que el casco rote al inclinarse, el barbiquejo lo mantiene en posición, la nuquera cubre la transición con el cuello y la protección ocular se coordina con la máscara. Cambiar un accesorio sin revisar el conjunto puede afectar el uso real.",
          "La referencia vigente que usa este catálogo es NFPA 1970, que consolidó la anterior NFPA 1971. Al revisar una oferta todavía es común encontrar declaración bajo NFPA 1971 edición 2018. No basta con que una ficha use la palabra “NFPA”: pide modelo, edición declarada, configuración y documentación que corresponda al casco que se está cotizando.",
        ],
        lista: [
          "Ala trasera para desviar escurrimientos y partículas",
          "Suspensión con matraca para ajuste en campo",
          "Cubrenuca de Nomex o aramida según configuración",
          "Barbiquejo de liberación rápida y protección ocular compatible",
        ],
      },
      {
        h2: "Cómo se integra con ERA, monja y protección ocular",
        parrafos: [
          "El momento crítico no es cuando el casco está solo sobre una mesa, sino cuando se usa con monja, máscara de ERA, chaquetón y guantes. La copa debe permitir que el arnés y la máscara se coloquen sin desplazar el casco; al mover la cabeza, el visor o los goggles no deben interferir con el sello de la máscara. Esta revisión debe hacerse con el ERA que ya opera la corporación, porque una compatibilidad teórica no sustituye una prueba de ajuste.",
          "El cubrenuca no reemplaza una capucha o monja de protección. Son piezas distintas y deben solaparse sin generar bultos que impidan sellar la máscara o cerrar el cuello del chaquetón. Si se van a añadir identificación frontal, lámpara, visor o goggles, anótalos como parte de la configuración. Dejar accesorios para después produce pedidos que no son comparables entre sí.",
          "La protección ocular también se decide por operación. Un visor integrado simplifica el despliegue, mientras goggles pueden ser preferibles en ciertas configuraciones. Lo importante es confirmar cómo se guarda, cómo se usa con la máscara y qué componente se reemplaza si se raya o sufre impacto.",
        ],
        lista: [
          "Prueba física con la máscara y arnés de ERA en uso",
          "Revisa el solape entre cubrenuca, monja y cuello del chaquetón",
          "Define visor, goggles, identificación y cintas antes de ordenar",
          "Pide por escrito la configuración exacta de cada partida",
        ],
      },
      {
        h2: "Qué revisar en una cotización para ataque interior",
        parrafos: [
          "Una cotización útil nombra el modelo, color, tipo de carcasa, sistema de suspensión, barbiquejo, cubrenuca, protección ocular y elementos reflectantes. Si el casco se compra para una licitación, incluye la edición de norma declarada y el documento que respalda esa declaración. También conviene confirmar si los accesorios llegan instalados, si son removibles para limpieza y qué partes se consideran reemplazables.",
          "El peso y el equilibrio influyen en fatiga de cuello, pero no deben tomarse aislados. Un casco más ligero que se mueve con la máscara o expone la nuca no resuelve la operación. La selección parte del riesgo, continúa con compatibilidad y termina con una ficha que permita recibir exactamente lo pedido. Antes de firmar, valida además el color institucional y el esquema de identificación de la corporación.",
          "Los modelos disponibles en el catálogo son Bullard LTX, Bullard UST LW y Sköld Viking. Cada uno conserva su propia declaración de fabricante y accesorios; por eso sus fichas no se intercambian. Usa esta página para definir el tipo de casco y después compara el modelo concreto con la configuración que necesitas.",
        ],
      },
      {
        h2: "Inspección, limpieza y retiro",
        parrafos: [
          "La inspección comienza antes de cada uso: revisa carcasa, suspensión, fijaciones, barbiquejo, cubrenuca, visor o goggles y cintas. Busca grietas, deformación, partes flojas, daños por calor y pérdida de función. Un casco que recibió un golpe o exposición térmica relevante debe evaluarse con las instrucciones del fabricante; no se corrige con pintura, cinta o piezas improvisadas.",
          "Para limpieza y descontaminación, sigue el procedimiento del fabricante de cada modelo. Desarmar componentes removibles puede ser parte de ese proceso, pero usar solventes, calor excesivo o métodos no indicados puede dañar carcasa, lente o textiles. Conserva trazabilidad de fecha de fabricación, asignación e inspecciones para saber qué casco está en servicio y cuándo requiere revisión.",
          "El retiro no se decide por apariencia. Además de la fecha y lineamientos del fabricante, pesan el historial de impacto, temperatura, sustancias y reparaciones. Si una cotización contempla piezas de reemplazo, identifica cuáles son originales y cómo se mantienen la configuración y la documentación del casco.",
        ],
      },
    ],
    especificacion: [
      { campo: "Uso principal", valor: "Combate de incendio estructural" },
      { campo: "Referencia de norma", valor: "NFPA 1970 (antes NFPA 1971)" },
      { campo: "Forma", valor: "Copa alta con ala trasera larga" },
      {
        campo: "Compatibilidad",
        valor: "Se confirma con máscara y ERA de la corporación",
      },
    ],
    normas: [
      {
        norma: "NFPA 1970 (antes NFPA 1971)",
        alcance:
          "Referencia para casco de combate estructural; verifica la declaración del modelo.",
      },
    ],
    errores: [
      "Comprar por color sin definir configuración",
      "Asumir que visor y máscara son compatibles sin probarlos",
      "Aceptar una norma sin edición ni modelo declarado",
      "Usar accesorios no especificados para completar el pedido",
    ],
    faq: [
      {
        q: "¿El casco tradicional sirve para rescate técnico?",
        a: "Puede acompañar una operación, pero el rescate técnico suele pedir un perfil compacto y elementos propios. Selecciona por riesgo principal.",
      },
      {
        q: "¿Qué modelo tradicional se cotiza?",
        a: "Hay fichas para Bullard LTX, Bullard UST LW y Sköld Viking; la configuración se confirma al cotizar.",
      },
    ],
    relacionados: ["bullard-ltx", "bullard-ust-lw", "skold-viking"],
  },
  {
    slug: "casco-estructural-europeo",
    seccion: "cascos",
    nombre: "Casco estructural europeo (tipo jet)",
    nombreCard: "Casco estructural europeo",
    title: "Casco estructural europeo tipo jet para bombero | México",
    description:
      "Casco estructural europeo tipo jet: cobertura, visor integrado, ERA y referencia EN 443:2008 para evaluar una cotización.",
    lead: "Más cobertura lateral y de nuca, visor retráctil y un perfil pensado para coordinar máscara, comunicaciones y protección ocular.",
    imagen: ia(
      "casco-estructural-europeo",
      "Casco estructural europeo tipo jet para bombero",
    ),
    bloques: [
      {
        h2: "Qué cambia en un casco tipo jet",
        parrafos: [
          "El casco estructural europeo, conocido como tipo jet, concentra cobertura lateral, frontal y de nuca en una forma más cerrada que el casco tradicional de ala trasera. Su carcasa suele incorporar visores integrados retráctiles; en algunas configuraciones se usa visor dorado, además de protección ocular interior. La decisión no es estética: el perfil busca resolver protección de cabeza, cara y cuello mientras se mantiene la movilidad necesaria para usar máscara y comunicaciones.",
          "La referencia europea para estos cascos es EN 443:2008. Esa referencia no autoriza a tratar cualquier casco con visor como si fuera estructural. Una cotización debe identificar el modelo, la configuración de visor, el sistema de retención, accesorios y declaración del fabricante. Si el requerimiento de compra tiene otra norma o una versión específica, esa equivalencia se debe revisar por escrito, no inferirse a partir de una fotografía.",
          "En este catálogo no hay modelos tipo jet publicados todavía. Esta ficha existe para que puedas definir el tipo requerido sin suponer marcas o disponibilidad. Cuando haya una ficha concreta, llevará sus datos de fabricante, imágenes y alcance declarado.",
        ],
        lista: [
          "Cobertura lateral y de nuca más envolvente",
          "Visor retráctil integrado según configuración",
          "Interfaz pensada para máscara de ERA y comunicaciones",
          "Referencia EN 443:2008 para el casco europeo declarado",
        ],
      },
      {
        h2: "Visores, máscara y comunicaciones",
        parrafos: [
          "El visor exterior protege frente a radiación, partículas y salpicaduras conforme al diseño declarado, pero no sustituye la máscara de ERA cuando el riesgo exige respiración autónoma. Antes de solicitar un casco, define qué visor se necesita, si se requerirá protección ocular adicional y cómo se retrae sin chocar con la máscara. Un visor que no puede guardarse con rapidez puede convertirse en una interferencia operativa.",
          "Los sistemas de comunicación agregan otro punto de revisión. Micrófono, altavoz, cableado y fijaciones deben convivir con el casco, la máscara y el arnés sin generar presión en puntos de contacto. También importa la limpieza: si el casco se descontamina, hay que saber qué accesorios se desmontan y qué procedimiento admite el fabricante. El equipo no debe perforarse o modificarse para instalar piezas no previstas.",
          "La prueba de compatibilidad se hace con todo el conjunto: capucha, máscara, ERA, casco, visor, guantes y cuello del traje. Pide que esa prueba forme parte de la evaluación técnica antes de una compra por volumen.",
        ],
        lista: [
          "Define si se requiere visor exterior, ocular interior o ambos",
          "Prueba el almacenamiento del visor con la máscara puesta",
          "Revisa montaje de comunicaciones sin alterar la carcasa",
          "Documenta el método de desmontaje para limpieza",
        ],
      },
      {
        h2: "Dónde se usa y cómo se especifica",
        parrafos: [
          "Este tipo de casco se utiliza para combate de incendios en edificios y estructuras cuando la corporación requiere la cobertura y el sistema de visor propios de ese diseño. La selección depende de reglamentos internos, riesgo, ERA disponible y entrenamiento del personal. No se elige como sustituto automático del casco forestal, de rescate o industrial; cada uno responde a un escenario distinto.",
          "En una requisición escribe el uso estructural, la referencia EN 443:2008 si es la exigencia aplicable, color, sistema de retención, protección ocular, cubrenuca, puntos de comunicación y compatibilidad con ERA. Solicita modelo y documentación del fabricante. Si el comprador requiere una correspondencia con otra norma, debe pedir una aclaración documental en vez de llamar “equivalente” a un casco sin respaldo.",
          "Como no hay modelo publicado, la cotización debe partir de tus requerimientos reales. Describe la operación, el ERA existente, si hay comunicación integrada y cuáles son las prioridades de visibilidad y cobertura. Eso permite evaluar una opción concreta sin publicar una promesa de disponibilidad.",
        ],
      },
      {
        h2: "Errores que cambian la protección",
        parrafos: [
          "El error más común es pedir “casco europeo con visor dorado” como si esa frase definiera desempeño. No define norma, retención, protección ocular ni compatibilidad. Otro error es asumir que un visor dorado basta para trabajo con calor radiante sin revisar la configuración completa y la protección requerida para la operación.",
          "Tampoco conviene adoptar este formato sin entrenamiento. La forma de ajustar, guardar el visor, colocar la máscara y usar comunicaciones debe practicarse con el equipo que recibirá la corporación. La ficha técnica y la demostración de ajuste son parte de la compra, no tareas posteriores.",
          "Por último, evita añadir perforaciones, adaptadores o accesorios de origen desconocido. Si se requiere lámpara, protector facial o comunicación, pídelo integrado o aprobado para el modelo específico.",
        ],
      },
    ],
    especificacion: [
      {
        campo: "Uso principal",
        valor: "Combate de incendios en edificios y estructuras",
      },
      { campo: "Referencia de norma", valor: "EN 443:2008" },
      { campo: "Forma", valor: "Perfil jet con cobertura lateral y de nuca" },
      {
        campo: "Protección ocular",
        valor: "Visor integrado según configuración",
      },
    ],
    normas: [
      {
        norma: "EN 443:2008",
        alcance:
          "Referencia europea para cascos de combate de incendios en edificios y estructuras.",
      },
    ],
    errores: [
      "Pedir solo “visor dorado” sin modelo ni alcance",
      "No probar el casco con máscara y comunicaciones",
      "Asumir equivalencia de normas sin documento",
      "Modificar la carcasa para instalar accesorios",
    ],
    faq: [
      {
        q: "¿Hay modelos tipo jet publicados?",
        a: "No por ahora. La página explica cómo especificarlos sin asumir una marca o disponibilidad.",
      },
      {
        q: "¿El visor reemplaza la máscara de ERA?",
        a: "No. El visor y la máscara cumplen funciones distintas y deben revisarse juntos.",
      },
    ],
  },
  {
    slug: "casco-forestal",
    seccion: "cascos",
    nombre: "Casco forestal",
    nombreCard: "Casco forestal",
    title: "Casco forestal para bombero | línea de fuego | México",
    description:
      "Casco forestal para bombero: peso, ala completa, ventilación, goggles y norma de referencia para trabajo prolongado en línea de fuego.",
    lead: "Ligero, con ala completa y preparado para goggles: el casco forestal acompaña jornadas de calor y desplazamiento, no ataque interior.",
    imagen: ia(
      "casco-forestal",
      "Casco forestal para bombero en operación de línea de fuego",
    ),
    bloques: [
      {
        h2: "Para qué se diseña un casco forestal",
        parrafos: [
          "El casco forestal responde a un trabajo prolongado al aire libre, con calor, sol, humo, vegetación y desplazamiento continuo. Por eso busca reducir peso, distribuirlo de forma estable y usar ala completa para sombra y protección frente a partículas. La ventilación, cuando el modelo la incorpora, ayuda a manejar confort, pero no convierte al casco en estructural ni elimina la necesidad de evaluar la exposición real.",
          "Los elementos habituales incluyen clips para goggles, cubrenuca opcional y barbiquejo. Los goggles protegen frente a polvo, ceniza y ramas; el cubrenuca se define según exposición y el resto del conjunto. Estos accesorios deben seleccionarse de acuerdo con el casco y la operación, no añadirse por apariencia. El goggle ESS Striketeam XTO se menciona como complemento de sección de accesorios aún no publicada, por lo que no se enlaza desde esta ficha.",
          "La referencia actual que usa este catálogo para equipo forestal es NFPA 1950, que consolidó la anterior NFPA 1977. En industria, un casco puede también declarar ANSI Z89.1 Tipo I Clase G. La norma declarada por cada modelo puede tener una edición anterior; se reporta tal como aparece y se evalúa con transparencia.",
        ],
        lista: [
          "Ala completa para exposición exterior",
          "Peso y suspensión pensados para jornadas largas",
          "Clips para goggles y cubrenuca opcional",
          "Barbiquejo para estabilidad durante desplazamiento",
        ],
      },
      {
        h2: "Cómo elegir sin sobreproteger ni quedar corto",
        parrafos: [
          "El casco forestal se selecciona después de definir la operación. Para línea de fuego, guardarrayas, liquidación y movilidad exterior, el conjunto necesita permitir disipación de calor y una visión práctica. Para ataque interior en una estructura, el riesgo cambia y se requiere casco estructural junto con ERA y el conjunto correspondiente. Usar un casco forestal donde se necesita estructural deja una brecha de cobertura; usar estructural en tareas largas forestales puede aumentar carga térmica y fatiga.",
          "Pide revisar el casco con goggles, cubrenuca, protección auditiva si aplica, capucha y el resto del EPP. El ajuste debe permanecer estable al mirar arriba, agacharse y caminar en terreno irregular. Define además color, bandas reflejantes y marcado institucional antes de cotizar para no convertir un pedido uniforme en configuraciones distintas.",
          "El modelo disponible es Bullard Wildland FH911H. Su ficha declara datos específicos y una norma con edición antigua; la lectura correcta es conservar esa declaración, pedir la configuración y decidir si satisface el requerimiento actual del comprador. No cambies la evaluación técnica por una afirmación genérica de que todo casco forestal “cumple”.",
        ],
        lista: [
          "Define si el riesgo es forestal o estructural antes de elegir",
          "Revisa estabilidad con goggles y accesorios",
          "Pide color, bandas y marcado como parte de la partida",
          "Compara la edición declarada con el requerimiento vigente",
        ],
      },
      {
        h2: "Normas, industria y brigadas",
        parrafos: [
          "NFPA 1950 reúne la referencia actual de equipo forestal; los documentos de proveedor pueden seguir citando NFPA 1977. En ambientes industriales, ANSI/ISEA Z89.1 distingue protección por impacto y clase eléctrica; esa clasificación no describe por sí sola un casco para incendio forestal. Lee ambos datos en el contexto de la operación y del análisis de riesgo.",
          "Una brigada industrial puede requerir casco forestal si su operación realmente incluye incendios de vegetación o áreas abiertas y el procedimiento lo define así. Para una planta con conato de incendio, puede partir de equipo industrial; para ataque interior, necesita evaluación de casco estructural. NOM-002-STPS-2010 pide dotación conforme al riesgo, no una silueta universal.",
          "Al redactar una requisición, no mezcles referencias. Indica uso forestal, norma o clase que exige el comprador, visor o goggles, barbiquejo, color y accesorios. Después pide evidencia del modelo, no una promesa general de equivalencia.",
        ],
      },
      {
        h2: "Cuidado después de humo, ceniza y vegetación",
        parrafos: [
          "El casco forestal acumula ceniza, polvo y residuos que pueden ocultar daño. Inspecciona carcasa, clips, suspensión, bandas, barbiquejo y cubrenuca antes y después del uso. Si hay impacto, calor o contaminante relevante, sigue el procedimiento del fabricante para retirar, limpiar o evaluar el equipo. No uses pinturas, solventes ni adhesivos que no estén indicados.",
          "Los goggles y sus lentes requieren revisión separada: un lente rayado o con herrajes flojos puede reducir visibilidad justo donde se necesita leer terreno y fuego. Guarda los accesorios de manera que no deformen la suspensión ni presionen la carcasa. La trazabilidad de asignación y fecha de fabricación permite retirar equipo con criterio y no solo cuando ya se ve deteriorado.",
          "El mantenimiento también incluye entrenar al usuario para ajustar el barbiquejo y reconocer cuándo un casco ya no conserva su función. Un buen casco mal ajustado se mueve, distrae y expone.",
        ],
      },
    ],
    especificacion: [
      {
        campo: "Uso principal",
        valor: "Incendio forestal y operación exterior",
      },
      { campo: "Referencia de norma", valor: "NFPA 1950 (antes NFPA 1977)" },
      { campo: "Forma", valor: "Ala completa" },
      {
        campo: "Compatibilidad",
        valor: "Goggles, cubrenuca y accesorios según configuración",
      },
    ],
    normas: [
      {
        norma: "NFPA 1950 (antes NFPA 1977)",
        alcance: "Referencia vigente para equipo forestal.",
      },
      {
        norma: "ANSI/ISEA Z89.1 Tipo I Clase G",
        alcance:
          "Referencia industrial cuando la declara el modelo; no sustituye el análisis de incendio.",
      },
    ],
    errores: [
      "Usarlo para ataque interior estructural",
      "Confundir clase industrial con protección forestal completa",
      "No definir goggles y cubrenuca",
      "Ignorar la edición declarada por el modelo",
    ],
    faq: [
      {
        q: "¿El casco forestal sirve para combate estructural?",
        a: "No se selecciona para ataque interior. Elige casco estructural cuando ese es el riesgo.",
      },
      {
        q: "¿Qué goggles se mencionan?",
        a: "ESS Striketeam XTO se menciona como complemento sin enlace, porque esa sección aún no está publicada.",
      },
    ],
    relacionados: ["bullard-fh911h"],
  },
  {
    slug: "casco-rescate-tecnico",
    seccion: "cascos",
    nombre: "Casco de rescate técnico",
    nombreCard: "Casco de rescate técnico",
    title: "Casco de rescate técnico para bombero | México",
    description:
      "Casco de rescate técnico: perfil compacto, retención de cuatro puntos, lámpara y referencias para rescate vehicular, vertical y espacios confinados.",
    lead: "Sin ala y con retención estable, el casco de rescate técnico prioriza movilidad, iluminación y permanencia en posición durante maniobras.",
    imagen: ia(
      "casco-rescate-tecnico",
      "Casco compacto para rescate técnico de bombero",
    ),
    bloques: [
      {
        h2: "Qué resuelve un casco de rescate técnico",
        parrafos: [
          "El casco de rescate técnico usa un perfil compacto, sin ala amplia, para disminuir enganches y facilitar movimiento en vehículos, estructuras colapsadas, cuerdas y espacios confinados. El barbiquejo de cuatro puntos mantiene el casco estable cuando el usuario mira arriba, trabaja inclinado o se desplaza en vertical. Los portalámparas y puntos de accesorio permiten organizar iluminación sin improvisar amarres.",
          "No es una versión recortada de casco estructural. El rescate técnico tiene riesgos de impacto, corte, atrapamiento, trabajo en altura y visibilidad distinta. La elección debe partir del procedimiento de rescate que ejecuta la organización: vehicular, vertical, espacios confinados u otra tarea. Después se revisa si necesita protector ocular, comunicación, lámpara, protección auditiva o integración con arnés.",
          "La referencia deste catálogo es NFPA 2500 para rescate técnico. En equipos europeos se pueden encontrar EN 12492 y EN 16471-16473 como referencias. No las declares como certificación de un modelo que no tiene ficha: son un marco para formular la solicitud y comparar documentos del fabricante.",
        ],
        lista: [
          "Perfil sin ala para reducir enganches",
          "Barbiquejo de cuatro puntos",
          "Puntos para lámpara y accesorios",
          "Compatibilidad a revisar con arnés y protección ocular",
        ],
      },
      {
        h2: "Vehicular, vertical y espacios confinados no piden lo mismo",
        parrafos: [
          "En rescate vehicular importan proyección de partículas, vidrio, movimiento alrededor de herramientas y visibilidad. En vertical, la estabilidad con cuerda, arnés y mirada ascendente gana peso. En espacios confinados, el perfil y los accesorios deben evitar enganches, pero el ambiente puede requerir además respiración o monitoreo específico. Un solo casco no resuelve todos los riesgos sin la configuración adecuada.",
          "Por eso una ficha de compra describe la operación principal y los accesorios. Define si habrá lámpara frontal, protector ocular, visera, comunicación, portaidentificación y compatibilidad con arnés. Pregunta también cómo se monta cada accesorio: no se debe perforar o alterar la carcasa para resolver una necesidad que el modelo no contempla.",
          "En este catálogo no hay modelos de rescate técnico publicados todavía. La página permite redactar una necesidad clara para solicitar un equipo real, sin inventar un producto o afirmar que una marca no publicada está disponible.",
        ],
        lista: [
          "Vehicular: revisa protección ocular y resistencia a enganches",
          "Vertical: revisa retención y compatibilidad con arnés",
          "Confinados: revisa perfil y necesidades respiratorias del procedimiento",
          "Define accesorios como parte del modelo, no como compra posterior",
        ],
      },
      {
        h2: "Cómo evaluar ajuste y accesorios",
        parrafos: [
          "Coloca el casco con el cabello, protección ocular y elementos que el rescatista realmente usa. Ajusta la suspensión y el barbiquejo de cuatro puntos siguiendo la guía del fabricante; al mover la cabeza, el casco no debe caer sobre los ojos ni despegarse de la nuca. Ensaya mirar hacia arriba, agacharse y pasar por el espacio donde se trabajará.",
          "La lámpara debe quedar sujeta al punto previsto y permitir orientar el haz sin interferir con visor o goggles. Si se requiere identificación, busca una solución declarada para el casco. Cintas, pegamentos y adaptadores no aprobados pueden desprenderse, ocultar inspecciones o afectar la carcasa.",
          "Registra el modelo, accesorios y fecha de fabricación por elemento. Esa trazabilidad ayuda a revisar qué casco estuvo involucrado en un impacto y qué piezas se han reemplazado.",
        ],
      },
      {
        h2: "Límites de uso y entrenamiento",
        parrafos: [
          "El casco de rescate técnico no reemplaza casco estructural para ataque interior ni casco forestal para jornadas de línea de fuego. Puede acompañar ciertas tareas de apoyo, pero el alcance final depende de la evaluación de riesgo y del equipo respiratorio. Cambiar de escena exige revisar el EPP completo, no solo el casco.",
          "El entrenamiento debe incluir ajuste, desmontaje de accesorios, inspección y comunicación con el sistema de comando. En rescate, una lámpara mal colocada o un barbiquejo flojo se detectan bajo presión; por eso se corrigen en práctica. Incluye esos puntos en la recepción del pedido.",
          "Pide al proveedor documentación del modelo propuesto antes de compararlo con la referencia técnica. Una ficha clara evita comprar por apariencia y permite mantener el casco durante su vida de servicio.",
        ],
      },
    ],
    especificacion: [
      {
        campo: "Uso principal",
        valor: "Rescate vehicular, vertical y espacios confinados",
      },
      { campo: "Referencia de norma", valor: "NFPA 2500" },
      { campo: "Forma", valor: "Perfil compacto sin ala" },
      { campo: "Retención", valor: "Barbiquejo de cuatro puntos" },
    ],
    normas: [
      { norma: "NFPA 2500", alcance: "Referencia para rescate técnico." },
      {
        norma: "EN 12492 / EN 16471-16473",
        alcance: "Referencias europeas que pueden aparecer según el equipo.",
      },
    ],
    errores: [
      "Usar casco estructural como sustituto por costumbre",
      "Instalar lámparas perforando la carcasa",
      "No definir operación principal",
      "No probar con arnés y protección ocular",
    ],
    faq: [
      {
        q: "¿Hay modelos publicados?",
        a: "No por ahora; solicita cotización con la operación y accesorios requeridos.",
      },
      {
        q: "¿Sirve para espacios confinados?",
        a: "Puede formar parte del EPP, pero el procedimiento define además requisitos respiratorios y de rescate.",
      },
    ],
  },
  {
    slug: "casco-brigada-industrial",
    seccion: "cascos",
    nombre: "Casco para brigada industrial",
    nombreCard: "Casco para brigada industrial",
    title: "Casco para brigada industrial contra incendio | México",
    description:
      "Casco para brigada industrial: cuándo basta un casco industrial y cuándo el riesgo exige casco estructural para combate interior.",
    lead: "La brigada no se equipa por uniforme: el análisis de riesgo define si basta protección industrial para conatos o se requiere casco estructural para ataque interior.",
    imagen: ia(
      "casco-brigada-industrial",
      "Casco para brigada industrial contra incendio",
    ),
    bloques: [
      {
        h2: "El punto de partida es la tarea de la brigada",
        parrafos: [
          "Una brigada industrial puede intervenir desde conatos hasta escenarios con fuego declarado. NOM-002-STPS-2010 exige dotar equipo conforme al riesgo de la brigada, y ese alcance cambia por instalación, carga de fuego, procesos, evacuación y estrategia de respuesta. El casco correcto no se decide porque “la empresa tiene brigada”, sino por lo que sus integrantes están autorizados y entrenados a hacer.",
          "Para control inicial de conatos y actividades industriales definidas, un casco industrial con careta puede ser suficiente cuando el análisis de riesgo y el procedimiento lo respaldan. En ese contexto, NOM-115-STPS-2009 y ANSI/ISEA Z89.1 ayudan a describir la protección industrial. Pero una clasificación industrial no equivale a casco estructural para incendio en interiores.",
          "Cuando la brigada entra a una estructura con fuego declarado, trabaja con ERA o enfrenta exposición estructural, necesita casco estructural y el conjunto de protección correspondiente. No resuelvas ese salto con una careta añadida a un casco industrial. La interfaz entre casco, máscara, capucha, chaquetón y guantes es parte de la protección.",
        ],
        lista: [
          "Define si la brigada atiende conatos o ataque interior",
          "Relaciona el casco con análisis de riesgo y procedimiento",
          "Usa referencias industriales para protección industrial",
          "Escala a casco estructural cuando existe combate interior",
        ],
      },
      {
        h2: "Cuándo un casco industrial con careta puede bastar",
        parrafos: [
          "Un casco industrial se evalúa para impacto superior y, según clase, aislamiento eléctrico. Con careta adecuada puede formar parte de una respuesta a conato donde la brigada usa extintor, mantiene distancia y no ingresa a un ambiente estructural con humo, temperatura o necesidad de ERA. La careta protege una zona específica; no convierte el conjunto en equipo de ataque interior.",
          "La cotización debe dejar claro casco, clase declarada, careta, barbiquejo si se requiere, color, marcaje y las limitaciones de uso. También debe coordinarse con lentes, protección auditiva, guantes y ropa de brigadista. Si la evaluación identifica calor, llama, humo o exposición mayores, reabre la selección del conjunto completo.",
          "Capacitación y procedimiento importan tanto como el casco. Un elemento no debe cruzar el límite de operación que su EPP y entrenamiento no cubren. Documentar ese límite evita que un casco industrial se use de manera improvisada en una escena estructural.",
        ],
        lista: [
          "Conato: respuesta inicial definida y sin ataque interior",
          "Careta: complemento, no sustituto de casco estructural",
          "Color y marcaje: parte de la partida industrial",
          "Límites de operación: escritos y entrenados",
        ],
      },
      {
        h2: "Cuándo la brigada necesita casco estructural",
        parrafos: [
          "Si la estrategia contempla ataque interior, uso de ERA, incendio en edificio o exposición directa propia de esa operación, la brigada necesita casco estructural. El equipo debe trabajar como conjunto: casco de combate estructural, máscara compatible, capucha o monja, chaquetón, pantalonera, botas y guantes. Comprar una sola pieza “más resistente” no construye un sistema de protección.",
          "El Bullard LTX se relaciona con esta página porque se incluye en el kit brigadista Romak BOM1001. Esa inclusión no modifica la declaración de su ficha ni significa que toda brigada deba usar el mismo modelo. Sirve para identificar una opción concreta si el análisis de riesgo y la configuración la justifican.",
          "Para comparar, solicita ficha del modelo, configuración, norma declarada, color y accesorios. Si falta alguno de esos datos, la cotización todavía no permite decidir si el casco responde a la tarea de la brigada.",
        ],
        lista: [
          "Ataque interior: casco estructural y ERA compatibles",
          "El conjunto se evalúa completo, no por piezas aisladas",
          "Bullard LTX aparece como modelo relacionado con kit brigadista",
          "La configuración exacta se confirma en la cotización",
        ],
      },
      {
        h2: "Cómo convertir el análisis de riesgo en una requisición",
        parrafos: [
          "Escribe primero la tarea: conato, apoyo a evacuación, ataque interior u operación exterior. Después lista peligros, duración, necesidad de ERA y el EPP que ya existe. Con eso se puede determinar si la partida pide casco industrial con careta o casco estructural. Evita copiar una especificación de otra planta sin validar que los riesgos coinciden.",
          "Incluye número de usuarios, color institucional, marcado, accesorios, talla o rango de ajuste y documentación requerida. Si habrá reemplazos, define compatibilidad con el inventario actual. La recepción debe comprobar que cada casco corresponde con la configuración comprada, no solo con la foto de una muestra.",
          "Finalmente, vincula la compra al entrenamiento. Saber ajustar la suspensión, revisar una careta y reconocer cuándo no se debe entrar a una escena es parte de la protección real de una brigada.",
        ],
      },
    ],
    especificacion: [
      {
        campo: "Uso principal",
        valor: "Brigada industrial según análisis de riesgo",
      },
      { campo: "Referencia de brigada", valor: "NOM-002-STPS-2010" },
      {
        campo: "Casco industrial",
        valor: "NOM-115-STPS-2009 / ANSI Z89.1, cuando el alcance lo permite",
      },
      {
        campo: "Ataque interior",
        valor: "Casco estructural y conjunto compatible",
      },
    ],
    normas: [
      {
        norma: "NOM-002-STPS-2010",
        alcance: "Dotación de EPP de brigada conforme al riesgo.",
      },
      {
        norma: "NOM-115-STPS-2009 / ANSI/ISEA Z89.1",
        alcance:
          "Referencias para casco industrial; no sustituyen casco estructural.",
      },
    ],
    errores: [
      "Equipar por uniforme y no por riesgo",
      "Usar casco industrial para ataque interior",
      "Añadir careta como supuesto equivalente estructural",
      "No documentar límites de respuesta de la brigada",
    ],
    faq: [
      {
        q: "¿Un casco industrial puede entrar a un incendio?",
        a: "Solo dentro del alcance definido por análisis de riesgo y procedimiento de conato; no sustituye casco estructural en ataque interior.",
      },
      {
        q: "¿Qué modelo se relaciona con kit brigadista?",
        a: "Bullard LTX, incluido en el kit Romak BOM1001; su configuración se confirma al cotizar.",
      },
    ],
    relacionados: ["bullard-ltx"],
  },
];

import type { Modelo } from "../types";

const proveedor = (src: string, alt: string, credito: string) => ({
  src,
  alt,
  width: 1000,
  height: 1250,
  origen: "proveedor" as const,
  credito,
});

export const MODELOS: Modelo[] = [
  {
    id: "bullard-ltx",
    seccion: "cascos",
    tipo: "casco-estructural-tradicional",
    marca: "Bullard",
    fabricante: "Romak Fire",
    nombre: "LTX",
    codigo: "CBOM1007",
    norma: "NFPA 1971 ed. 2018",
    estatusNorma: "declarado",
    caracteristicas: [
      "Termoplástico de alto impacto, resistente a químicos y altas temperaturas",
      "Forrado interior, ajuste ratchet y suspensión de 6 puntos",
      "Cintas 3M Scotchlite y contorno recubierto en cuero",
      "Protector de cuello y nuca de Nomex",
      "Barbiquejo Nomex de 2 puntos con desenganche rápido metálico",
      "Visor de policarbonato de 4 pulgadas y colgador metálico",
      "Disponible en amarillo o rojo según configuración",
      "Incluido en kit brigadista Romak BOM1001 y kit estructural Profesional",
    ],
    descripcion: [
      "El Bullard LTX es un casco estructural tradicional con carcasa termoplástica de alto impacto. La documentación del fabricante lo describe como resistente a químicos y altas temperaturas, con forro interior, ajuste ratchet y suspensión de seis puntos. Estos elementos se revisan juntos: la carcasa aporta forma y resistencia declarada, mientras la suspensión y el ajuste mantienen la posición durante el uso.",
      "Su configuración incluye cintas 3M Scotchlite, contorno recubierto en cuero, protector de cuello y nuca de Nomex y barbiquejo de dos puntos de Nomex con desenganche rápido metálico. También declara visor de policarbonato de cuatro pulgadas y colgador metálico. El casco puede cotizarse en amarillo o rojo; color y accesorios deben anotarse en la solicitud para recibir la misma configuración que se evaluó.",
      "La documentación del fabricante declara NFPA 1971 edición 2018, pero no incluye número de certificación en los información publicada. Por esa razón este catálogo la presenta como declaración de fabricante, no como certificación verificada. Antes de compra institucional, pide por escrito la configuración, la documentación correspondiente y confirma la interfaz con máscara de ERA, cubrenuca y resto del conjunto.",
      "El LTX se incluye en el kit brigadista Romak BOM1001 y en el kit estructural Profesional. Esa referencia ayuda a ubicarlo en una partida, pero no sustituye la revisión de riesgo: para ataque interior, casco, ERA, capucha, traje y guantes deben operar como sistema.",
    ],
    faq: [
      { q: "¿Qué código tiene el Bullard LTX?", a: "CBOM1007." },
      {
        q: "¿La norma está verificada como certificación?",
        a: "La ficha disponible declara NFPA 1971 ed. 2018, sin número de certificación; por eso se comunica como declaración del fabricante.",
      },
      {
        q: "¿Qué colores se mencionan?",
        a: "Amarillo o rojo, sujetos a la configuración confirmada en cotización.",
      },
    ],
    imagen: proveedor(
      "/images/catalogo/cascos/bullard-ltx.avif",
      "Casco Bullard LTX amarillo",
      "Romak Fire",
    ),
    imagenesExtra: [
      proveedor(
        "/images/catalogo/cascos/bullard-ltx-rojo.avif",
        "Casco Bullard LTX rojo",
        "Romak Fire",
      ),
    ],
  },
  {
    id: "bullard-ust-lw",
    seccion: "cascos",
    tipo: "casco-estructural-tradicional",
    marca: "Bullard",
    fabricante: "Bullard",
    nombre: "UST LW",
    codigoNota: "Código según configuración; confírmalo al cotizar",
    norma: "NFPA 1971-2018",
    estatusNorma: "declarado",
    peso: "Menor a 1.54 kg con ReTrack; menor a 1.77 kg con careta",
    caracteristicas: [
      "Estilo Nueva York ultraligero",
      "Carcasa de fibra de vidrio con resina ignífuga termoestable",
      "Visor integrado ReTrack; careta o goggles opcionales",
      "Ajuste Sure-Lock con perilla y seis combinaciones de inclinación y altura",
      "Barbiquejo de dos piezas de Nomex negro con hebilla de liberación rápida",
      "Nuquera con cubierta exterior de Nomex de 6 oz y tres capas de algodón FR",
      "Componentes removibles para descontaminación y acabado mate",
      "Protección ocular conforme a ANSI/ISEA Z87.1",
    ],
    descripcion: [
      "El Bullard UST LW es un casco de estilo Nueva York ultraligero. El proveedor declara una carcasa de fibra de vidrio con resina ignífuga termoestable y un sistema de ajuste Sure-Lock con perilla. Ese sistema ofrece seis combinaciones de inclinación y altura, un dato útil cuando se necesita alinear casco, máscara y campo de visión sin sacrificar estabilidad.",
      "La configuración incluye visor integrado ReTrack, con opción de careta o goggles, además de barbiquejo de dos piezas de Nomex negro con hebilla de liberación rápida. La nuquera combina cubierta exterior de Nomex de seis onzas con tres capas de algodón FR. Como los accesorios cambian el uso real, confirma por escrito cuál opción de protección ocular se cotiza y prueba su interacción con la máscara de ERA de tu corporación.",
      "El fabricante declara componentes removibles para descontaminación, acabado mate y protección ocular conforme a ANSI/ISEA Z87.1. El peso declarado es menor a 1.54 kg con ReTrack y menor a 1.77 kg con careta. El peso se lee junto con la retención y el equilibrio: un casco ligero debe mantenerse estable cuando el usuario mira arriba, se agacha o trabaja con ERA.",
      "La ficha disponible declara NFPA 1971-2018. Se presenta como declaración del fabricante, no como certificación verificada en esta página. El código depende de la configuración; solicita confirmación antes de emitir orden de compra.",
    ],
    faq: [
      {
        q: "¿Cuál es el código del UST LW?",
        a: "Depende de la configuración; confírmalo al cotizar.",
      },
      {
        q: "¿Qué peso declara?",
        a: "Menor a 1.54 kg con ReTrack y menor a 1.77 kg con careta.",
      },
      {
        q: "¿Tiene foto propia?",
        a: "No en este catálogo; se muestra una imagen ilustrativa del tipo de casco.",
      },
    ],
    imagen: {
      src: "/images/catalogo/cascos/tipo-casco-estructural-tradicional.avif",
      alt: "Imagen ilustrativa de casco estructural tradicional",
      width: 1600,
      height: 900,
      origen: "ia",
    },
  },
  {
    id: "skold-viking",
    seccion: "cascos",
    tipo: "casco-estructural-tradicional",
    marca: "Sköld",
    fabricante: "Sköld",
    nombre: "Viking",
    codigo: "FPCM",
    norma: "NFPA 1971 / EN 443:2009",
    estatusNorma: "declarado",
    caracteristicas: [
      "Termoplástico de alta densidad con costilla central y frente triangular",
      "Faldón con forro interno de Nomex y nuquera aluminizada con forro Nomex",
      "Ajuste tipo matraca y suspensión de red",
      "Barbiquejo de 4 puntos con mentonera y retiro rápido",
      "Bisel protector, acolchado frontal y soporte trasero para colgar",
      "Protector facial de policarbonato antirrayas y antiempaño",
      "Película térmica para 800 °C, según fabricante",
      "Compatible con ERA y color amarillo",
    ],
    descripcion: [
      "El Sköld Viking usa carcasa de termoplástico de alta densidad, costilla central y frente triangular. Su construcción declara faldón con forro interno de Nomex, nuquera aluminizada con forro Nomex, acolchado frontal y ajuste tipo matraca con suspensión de red. La lectura correcta de estos elementos es funcional: carcasa, suspensión y retención deben conservar posición y cobertura cuando el elemento trabaja con protección respiratoria.",
      "El barbiquejo de cuatro puntos incorpora mentonera y retiro rápido. También se declara bisel protector, soporte trasero para colgar y protector facial de policarbonato antirrayas y antiempaño. La ficha menciona película térmica para 800 °C según fabricante. Ese dato no sustituye definir el escenario de operación ni revisar visor, máscara y protección ocular como conjunto.",
      "El proveedor declara compatibilidad con ERA y color amarillo. Esa compatibilidad debe confirmarse con la máscara y arnés que ya opera la corporación, porque geometría, visor y cubrenuca se revisan físicamente. Las fotos disponibles corresponden al fabricante; muestran el modelo, pero la configuración final se confirma por escrito al cotizar.",
      "La norma declarada es NFPA 1971 / EN 443:2009. Se comunica como declaración de fabricante. Para una compra, solicita el código FPCM, accesorios, documentación y confirmación de la edición exigida en tu requisición.",
    ],
    faq: [
      { q: "¿Cuál es el código del Sköld Viking?", a: "FPCM." },
      {
        q: "¿Es compatible con ERA?",
        a: "El fabricante lo declara compatible; confirma físicamente la interfaz con el ERA de tu corporación.",
      },
      {
        q: "¿Qué protección facial declara?",
        a: "Protector de policarbonato antirrayas y antiempaño con película térmica para 800 °C, según fabricante.",
      },
    ],
    imagen: proveedor(
      "/images/catalogo/cascos/skold-viking.avif",
      "Casco Sköld Viking amarillo",
      "Sköld",
    ),
    imagenesExtra: [
      proveedor(
        "/images/catalogo/cascos/skold-viking-frente.avif",
        "Vista frontal de casco Sköld Viking",
        "Sköld",
      ),
    ],
  },
  {
    id: "bullard-fh911h",
    seccion: "cascos",
    tipo: "casco-forestal",
    marca: "Bullard",
    fabricante: "Romak Fire",
    nombre: "Wildland FH911H",
    codigo: "FH911H",
    norma: "NFPA 1977 ed. 1998 · ANSI Z89.1-1997 Tipo 1 Clase C, E y G",
    estatusNorma: "declarado",
    caracteristicas: [
      "Termoplástico Ultem",
      "Suspensión automática de 6 puntos",
      "Clips de retención para goggles y bandas reflejantes",
      "Acepta soportes para viseras y pantallas faciales",
      "Barbiquejo Nomex ajustable",
      "Sombra interior y cierres de velcro",
      "Colores amarillo, rojo, blanco y negro",
    ],
    descripcion: [
      "El Bullard Wildland FH911H es un casco forestal con carcasa de termoplástico Ultem y suspensión automática de seis puntos. La configuración descrita por el proveedor incorpora clips de retención para goggles y bandas reflejantes, además de una sombra interior. Estos componentes responden a una operación exterior donde visibilidad, polvo, ceniza y duración de jornada se evalúan junto con el resto del equipo forestal.",
      "El casco acepta soportes para viseras y pantallas faciales, y declara barbiquejo Nomex ajustable con cierres de velcro. Define por escrito si la partida requiere goggles, visera, pantalla, bandas y color. Los colores disponibles que reporta el proveedor son amarillo, rojo, blanco y negro. La imagen muestra el modelo, pero no sustituye la confirmación de accesorios y color de la configuración exacta.",
      "La ficha declara NFPA 1977 edición 1998 y ANSI Z89.1-1997 Tipo 1 Clase C, E y G. Son ediciones antiguas y se presentan con esa transparencia. La referencia vigente deste catálogo para equipo forestal es NFPA 1950, que consolidó NFPA 1977; corresponde al comprador contrastar el requisito actual con el documento y el modelo que se pretende adquirir.",
      "Este casco se destina a operación forestal y exterior, no a ataque interior estructural. Antes de ordenar, revisa ajuste con goggles, cubrenuca si aplica, protección ocular y la tarea real de la brigada o cuadrilla.",
    ],
    faq: [
      { q: "¿Cuál es el código?", a: "FH911H." },
      {
        q: "¿Qué colores reporta el proveedor?",
        a: "Amarillo, rojo, blanco y negro.",
      },
      {
        q: "¿Por qué se menciona una edición antigua?",
        a: "La ficha declara NFPA 1977 ed. 1998 y ANSI Z89.1-1997; se reporta tal cual para compararla con el requisito vigente.",
      },
    ],
    imagen: proveedor(
      "/images/catalogo/cascos/bullard-fh911h.avif",
      "Casco forestal Bullard Wildland FH911H",
      "Romak Fire",
    ),
  },
];

export const data = { seccion: SECCIONES[0], tipos: TIPOS, modelos: MODELOS };

Object.assign(SECCIONES[0], {
  checklistCompra: {
    titulo: "Qué confirmar antes de ordenar",
    parrafos: [
      "Indica por escrito el modelo, código cuando corresponda, color, protección ocular, accesorios, cantidad y destino de entrega. Si el equipo se integra con protección respiratoria, capucha o identificación institucional, revisa esa interfaz antes de emitir la orden.",
      "Al recibir, valida carcasa, ajuste, barbiquejo, protector ocular y accesorios contra la partida solicitada. Registra fecha de fabricación, asignación e inspecciones conforme al procedimiento de tu organización y las indicaciones del fabricante.",
    ],
  },
  leyendaImagenIlustrativa:
    "Imagen ilustrativa del tipo de casco. Marca, modelo y configuración exactos se confirman por escrito en la cotización.",
});

Object.assign(TIPOS[0], {
  chips: ["NFPA 1970", "Ala trasera", "Compatible con ERA"],
  lead: "El casco estructural tradicional combina ala trasera, cubrenuca de Nomex y retención para ataque en edificaciones bajo la referencia NFPA 1970.",
  bloques: [
    {
      h2: "Casco tradicional para ataque estructural",
      parrafos: [
        "Cotizamos casco estructural tradicional para cuerpos de bomberos y brigadas que entran a edificaciones con ERA. Elige Bullard LTX, Bullard UST LW o Sköld Viking cuando tu partida requiera ala trasera, cubrenuca de Nomex y la referencia NFPA 1970 o NFPA 1971 declarada por fabricante.",
        "Surtimos este formato cuando la operación necesita desviar escurrimientos y conservar cobertura de nuca con máscara de ERA. Pide fibra de vidrio en UST LW si priorizas masa, o termoplástico de alto impacto en LTX y Viking si tu pliego ya define ese material, con cubrenuca de Nomex y retención documentada.",
      ],
    },
    {
      h2: "Partida y configuración del casco",
      parrafos: [
        "En cada cotización escribimos modelo, código, carcasa, suspensión, barbiquejo, visor y norma declarada. Para una compra comparable, elige una sola configuración por partida y pide que color amarillo o rojo, cubrenuca de Nomex y protección ocular queden asentados antes de ordenar, junto con máscara de ERA y chaquetón de la prueba.",
        "Revisamos con tu brigada la interfaz entre máscara de ERA, monja, cuello del chaquetón y visor. Pide la opción ReTrack, careta o goggles en UST LW según esa prueba; para LTX solicita visor de policarbonato de 4 pulgadas si esa es la protección ocular requerida.",
      ],
      lista: [
        "Modelo: Bullard LTX, UST LW o Sköld Viking",
        "Carcasa: termoplástico o fibra de vidrio",
        "Suspensión: 6 puntos, red o Sure-Lock",
        "Retención: barbiquejo de 2 o 4 puntos",
        "Protección ocular: visor, careta o goggles",
        "Norma: NFPA 1971 declarada por fabricante",
      ],
    },
    {
      h2: "Modelos estructurales que surtimos",
      parrafos: [
        "Surtimos Bullard LTX CBOM1007 con termoplástico, suspensión de 6 puntos, Nomex y NFPA 1971 ed. 2018 declarado. Elige LTX para una partida que también se integre al kit brigadista Romak BOM1001 o al kit estructural Profesional; pruébalo con ERA y chaquetón antes de liberar la orden.",
        "Para una configuración ultraligera cotizamos Bullard UST LW con fibra de vidrio, ReTrack y NFPA 1971-2018 declarado; para barbiquejo de 4 puntos proponemos Sköld Viking FPCM, termoplástico y NFPA 1971 / EN 443:2009 declarado. Pide la máscara de ERA y monja de tu corporación en la prueba de uso.",
      ],
    },
    {
      h2: "Errores de pliego que evitamos",
      parrafos: [
        "Vemos órdenes que piden solo casco NFPA 1971 sin modelo, edición ni visor. Escribe Bullard LTX CBOM1007 con suspensión de 6 puntos, o UST LW con ReTrack, para que cotizamos exactamente el casco que tu operación evaluó y no una imagen parecida, con cubrenuca de Nomex y barbiquejo definidos.",
        "También llegan pliegos que mezclan goggles, careta y visor de policarbonato de 4 pulgadas sin definir la máscara de ERA. Pide una configuración de protección ocular y cubrenuca de Nomex por partida; así revisamos que el sello de la máscara y el cuello del chaquetón sigan funcionando.",
      ],
    },
    {
      h2: "Inspección, limpieza y retiro",
      parrafos: [
        "Antes de guardia revisamos contigo carcasa, suspensión, matraca, barbiquejo, Nomex, visor y cintas 3M Scotchlite. Retira el casco con grieta, deformación, impacto o daño térmico, y registra el modelo Bullard o Sköld, NFPA 1971 declarado y color para pedir solo componentes compatibles.",
        "Después de una intervención, pide desmontar los componentes removibles de UST LW según fabricante y revisa el visor de policarbonato del LTX o Viking. Si calor, químicos o golpe cambiaron carcasa, lente o retención, retiramos la pieza y registramos la inspección antes de devolverla al servicio.",
      ],
    },
  ],
  resumen: [
    "El casco estructural tradicional protege en ataque de edificaciones con ala trasera, cubrenuca de Nomex y modelos Bullard LTX, Bullard UST LW o Sköld Viking, cada uno con su norma declarada.",
    "Cotizamos por WhatsApp modelo, visor, retención, color y compatibilidad con ERA. Pide una prueba con máscara, monja y chaquetón para que tu partida llegue con la configuración que realmente usa tu brigada.",
  ],
});
Object.assign(TIPOS[1], {
  chips: ["EN 443:2008", "Visor retráctil", "Perfil jet"],
  lead: "El casco estructural europeo tipo jet concentra cobertura lateral, visor retráctil y coordinación con ERA bajo la referencia EN 443:2008.",
  bloques: [
    {
      h2: "Casco jet para operación estructural",
      parrafos: [
        "Cotizamos casco tipo jet para bomberos que requieren cobertura lateral, frontal y de nuca durante incendios en edificios. Elige este perfil si tu operación usa máscara de ERA, visor retráctil y comunicaciones; pide EN 443:2008 cuando esa referencia forme parte de tu pliego, con protector de nuca y retención declarados.",
        "Surtimos el tipo europeo según la configuración real, porque no hay modelo publicado en este catálogo. Pide visor exterior, ocular interior y retención en la misma partida si tu brigada necesita coordinar casco, máscara y comunicación sin perforar la carcasa, bajo EN 443:2008 y con protector de nuca.",
      ],
    },
    {
      h2: "Datos que ponemos en cotización",
      parrafos: [
        "En la cotización anotamos uso estructural, EN 443:2008, visor, protector de nuca, color, retención y comunicación. Elige visor exterior si tu prueba exige cobertura facial, u ocular interior si tu máscara de ERA requiere otra posición de protección ocular, con chaquetón y guantes puestos.",
        "Revisamos el casco con máscara, regulador y micrófono antes de que ordenes un lote. Pide que el visor se guarde sin rozar ERA y que el cableado quede fuera de enganches; esa configuración define si el tipo jet funciona con tu chaquetón, guantes, protector de nuca y retención bajo EN 443:2008.",
      ],
      lista: [
        "Uso: incendios en edificios y estructuras",
        "Referencia: EN 443:2008",
        "Perfil: cobertura lateral y de nuca",
        "Visor: exterior retráctil u ocular interior",
        "Retención: compatible con máscara de ERA",
        "Accesorios: comunicación y protector de nuca",
      ],
    },
    {
      h2: "Modelo según tu operación",
      parrafos: [
        "No publicamos un modelo tipo jet todavía; proponemos el casco cuando nos compartes operación, ERA, visor y comunicación requeridos. Elige una familia de traje estructural con chaquetón, monja y guantes que se pruebe junto con EN 443:2008, protector de nuca y el casco propuesto por fabricante.",
        "Surtimos la configuración documentada por fabricante, no una equivalencia supuesta. Pide un modelo con visor retráctil, retención y protector de nuca declarados si tu brigada trabaja con máscara de ERA; así la ficha de casco coincide con el conjunto estructural EN 443:2008 que vas a recibir con chaquetón y guantes.",
      ],
    },
    {
      h2: "Errores de compra del tipo jet",
      parrafos: [
        "Vemos requisiciones que dicen visor dorado y omiten EN 443:2008, modelo y retención. Escribe la referencia, visor exterior u ocular interior, protector de nuca y compatibilidad con ERA para que cotizamos una configuración verificable de casco y retención para tu brigada.",
        "Otro error es agregar comunicación después de elegir el casco tipo jet. Pide micrófono, fijaciones y protector de nuca desde el pliego; revisamos que no haya presión sobre la cabeza ni interferencia con máscara, visor, chaquetón, guantes o retención EN 443:2008.",
      ],
    },
    {
      h2: "Revisión y retiro en servicio",
      parrafos: [
        "Antes de cada guardia revisamos visor retráctil, ocular interior, retención, carcasa y fijaciones de comunicación. Retira el equipo si visor, soporte o carcasa pierden función, y registra EN 443:2008 junto con el modelo, protector de nuca y configuración para solicitar el repuesto correcto.",
        "Tras una intervención, pide limpieza conforme al fabricante y desmonta solo los accesorios previstos para el casco tipo jet. Si calor, impacto o contaminantes afectan visor, cableado o protector de nuca, retiramos esa configuración hasta que tu brigada vuelva a probarla con máscara de ERA.",
      ],
    },
  ],
  resumen: [
    "El casco europeo tipo jet es una opción estructural con cobertura lateral, visor retráctil, protector de nuca y referencia EN 443:2008 para integrarse con máscara de ERA, chaquetón, guantes y comunicaciones.",
    "Cotizamos por WhatsApp la operación, visor, retención, protector de nuca y accesorios. Pide la prueba con tu máscara, micrófono, guantes y chaquetón EN 443:2008 antes de definir el modelo que surtiremos.",
  ],
});
Object.assign(TIPOS[2], {
  chips: ["NFPA 1950", "Ala completa", "Operación exterior"],
  lead: "El casco forestal usa ala completa, goggles y suspensión de 6 puntos para línea de fuego y operación exterior bajo NFPA 1950.",
  bloques: [
    {
      h2: "Casco forestal para línea de fuego",
      parrafos: [
        "Cotizamos casco forestal para cuadrillas que caminan en pendiente, trabajan con vegetación y enfrentan ceniza al aire libre. Elige Bullard Wildland FH911H si tu operación necesita termoplástico Ultem, ala completa y suspensión automática de 6 puntos, clips para goggles y barbiquejo Nomex, no ataque interior estructural.",
        "Surtimos este casco cuando el pliego define línea de fuego, goggles y cubrenuca según la tarea. Pide NFPA 1950 como referencia vigente del catálogo o NFPA 1977 ed. 1998 declarado para FH911H, termoplástico Ultem y suspensión de 6 puntos, y separa esa partida del casco estructural con ERA.",
      ],
    },
    {
      h2: "Configuración forestal en la orden",
      parrafos: [
        "Escribimos código FH911H, termoplástico Ultem, suspensión de 6 puntos, barbiquejo Nomex y clips para goggles. Elige amarillo, rojo, blanco o negro antes de ordenar, y pide bandas reflejantes, visera o pantalla facial solo si tu cuadrilla las prueba en pendiente, viento y línea de fuego.",
        "Revisamos goggles, cierres de velcro y sombra interior con tu protección ocular antes de cotizar. Pide soportes para viseras y pantallas faciales en la partida si los usarás; así verificamos que ala completa, cubrenuca, clips y barbiquejo Nomex no se levanten con viento durante la línea de fuego.",
      ],
      lista: [
        "Modelo: Bullard Wildland FH911H",
        "Carcasa: termoplástico Ultem",
        "Suspensión: automática de 6 puntos",
        "Retención: barbiquejo Nomex ajustable",
        "Accesorios: clips para goggles y bandas",
        "Colores: amarillo, rojo, blanco o negro",
      ],
    },
    {
      h2: "Modelo forestal que surtimos",
      parrafos: [
        "Surtimos Bullard Wildland FH911H con código FH911H, termoplástico Ultem y clips de retención para goggles. Elige este modelo para línea de fuego con goggles, cubrenuca, barbiquejo Nomex y ropa forestal; no lo combines como sustituto de casco estructural durante ataque interior con ERA.",
        "El fabricante declara NFPA 1977 ed. 1998 y ANSI Z89.1-1997 Tipo 1 Clase C, E y G. Pide esos datos tal como están declarados y prueba el barbiquejo Nomex con goggles, ala completa y protección ocular; nosotros confirmamos accesorios, color y suspensión automática de 6 puntos antes de liberar la orden.",
      ],
    },
    {
      h2: "Errores que frenan una partida forestal",
      parrafos: [
        "Vemos compras que piden casco ligero sin nombrar FH911H, goggles ni barbiquejo Nomex. Escribe termoplástico Ultem, suspensión automática de 6 puntos, clips de retención y color para que cotizamos una configuración que tu cuadrilla pueda repetir durante la temporada de línea de fuego.",
        "También se confunde ANSI Z89.1-1997 Tipo 1 Clase C, E y G con casco para ataque interior. Pide casco estructural cuando uses ERA y fuego en edificios; deja NFPA 1977 ed. 1998 declarado, termoplástico Ultem y ala completa para la operación forestal que el FH911H sí cubre.",
      ],
    },
    {
      h2: "Limpieza y retiro forestal",
      parrafos: [
        "Antes de salir revisamos ala completa, clips para goggles, velcro, suspensión de 6 puntos y barbiquejo Nomex. Retira FH911H con carcasa Ultem deformada, clip roto o retención sin ajuste, y registra color, código, NFPA 1977 ed. 1998 declarado y accesorios para que el repuesto conserve la partida.",
        "Después de línea de fuego, pide limpieza según fabricante y revisa ceniza, calor y contaminantes en visera, pantalla facial y bandas reflejantes del Bullard FH911H. Si una intervención altera la suspensión automática o los cierres de velcro, retiramos el casco hasta que tu cuadrilla vuelva a probar goggles y retención.",
      ],
    },
  ],
  resumen: [
    "El casco forestal Bullard Wildland FH911H combina termoplástico Ultem, ala completa, suspensión automática de 6 puntos, clips para goggles y barbiquejo Nomex en operación exterior de línea de fuego.",
    "Cotizamos por WhatsApp color, goggles, visera, pantalla, clips y barbiquejo Nomex. Pide la prueba de pendiente y línea de fuego con suspensión de 6 puntos; para ataque interior surtimos casco estructural con ERA.",
  ],
});
Object.assign(TIPOS[3], {
  chips: ["NFPA 2500", "Perfil compacto", "Barbiquejo 4 puntos"],
  lead: "El casco de rescate técnico combina perfil compacto y barbiquejo de 4 puntos para maniobras vehiculares, verticales y espacios confinados bajo NFPA 2500.",
  bloques: [
    {
      h2: "Casco compacto para rescate técnico",
      parrafos: [
        "Cotizamos casco de rescate técnico para equipos que entran a vehículo, ascienden con arnés o trabajan bajo tablero. Elige perfil compacto y barbiquejo de 4 puntos si tu maniobra prioriza reducir enganches; pide NFPA 2500, portalámpara, visor o goggles cuando esa referencia corresponde al riesgo documentado.",
        "Surtimos el tipo según rescate vehicular, vertical o espacios confinados, porque no hay modelo publicado todavía. Pide lámpara, goggles y visor desde el pliego si tu equipo los usa, y combínalo con traje de rescate, arnés, barbiquejo de 4 puntos y herramienta que probarás en acceso real.",
      ],
    },
    {
      h2: "Campos de la cotización técnica",
      parrafos: [
        "En la cotización escribimos NFPA 2500, perfil sin ala, retención de 4 puntos, portalámpara y protección ocular. Elige visor para partículas o goggles para tu maniobra, y pide compatibilidad con arnés, lámpara y herramienta para que el casco no cree enganches al entrar a vehículo o descender.",
        "Revisamos con tu equipo lámpara, cuerda, arnés y protección ocular durante una práctica. Pide EN 12492 o EN 16471-16473 solo si tu requisito las solicita; así proponemos un modelo con el estatus declarado, barbiquejo de 4 puntos y perfil compacto que corresponde a rescate técnico y no a incendio estructural.",
      ],
      lista: [
        "Uso: vehicular, vertical o confinados",
        "Referencia: NFPA 2500",
        "Perfil: compacto sin ala",
        "Retención: barbiquejo de 4 puntos",
        "Accesorios: lámpara, visor o goggles",
        "Interfaz: arnés y herramienta de rescate",
      ],
    },
    {
      h2: "Modelo para cada maniobra",
      parrafos: [
        "No surtimos un modelo publicado de rescate técnico en este catálogo; proponemos el modelo después de revisar NFPA 2500, arnés y lámpara de tu operación. Elige traje de rescate y protección ocular para la misma maniobra, no un casco estructural solo porque comparte color institucional.",
        "Para rescate vertical pedimos prueba con cuerda y arnés; para vehicular, visor y acceso bajo tablero; para confinados, el procedimiento respiratorio. Pide perfil compacto y barbiquejo de 4 puntos según la familia de traje que usará tu equipo, y cotizamos la configuración declarada por fabricante.",
      ],
    },
    {
      h2: "Fallas de pliego que corregimos",
      parrafos: [
        "Vemos pliegos que solicitan casco de rescate sin decir NFPA 2500, vehículo, arnés o lámpara. Escribe la maniobra y protección ocular para que proponemos un modelo con perfil compacto, retención de 4 puntos, visor o goggles y accesorios que tu personal pueda usar.",
        "Otro error es pedir soporte de lámpara sin probarlo con cuerda o visor. Pide portalámpara, goggles, perfil compacto y compatibilidad con arnés en la orden; revisamos enganches y campo visual antes de que tu brigada acepte una partida de rescate técnico con retención de 4 puntos.",
      ],
    },
    {
      h2: "Inspección después de la maniobra",
      parrafos: [
        "Antes de practicar revisamos carcasa, barbiquejo de 4 puntos, portalámpara, visor y goggles. Retira el casco si golpe, cuerda o herramienta dañan retención o perfil compacto, y registra NFPA 2500, modelo, arnés y configuración de lámpara para mantener trazabilidad de cada equipo.",
        "Después de rescate vehicular o vertical, pide limpieza según fabricante y verifica fijaciones de lámpara, visor y arnés. Si contaminantes, impacto o desgaste cambian el ajuste de 4 puntos, retiramos el casco hasta que tu equipo complete una prueba de acceso con la configuración correcta.",
      ],
    },
  ],
  resumen: [
    "El casco de rescate técnico usa perfil compacto, barbiquejo de 4 puntos, portalámpara y referencia NFPA 2500 para maniobras vehiculares, verticales y espacios confinados con arnés, visor o goggles.",
    "Cotizamos por WhatsApp la maniobra, lámpara, goggles, visor, arnés y retención de 4 puntos. Pide una prueba de acceso con tu traje de rescate y NFPA 2500 antes de elegir el modelo que propondremos.",
  ],
});
Object.assign(TIPOS[4], {
  chips: ["NOM-002-STPS-2010", "Conatos", "Según riesgo"],
  lead: "El casco para brigada industrial se elige por análisis de riesgo: casco industrial para conatos o casco estructural con ERA para ataque interior.",
  bloques: [
    {
      h2: "Casco según tarea de brigada",
      parrafos: [
        "Cotizamos casco para brigada industrial a partir de NOM-002-STPS-2010 y de la tarea autorizada. Elige casco industrial con careta para conatos definidos, o casco estructural con ERA si tu procedimiento contempla incendio en edificio, Bullard LTX CBOM1007 y suspensión de 6 puntos, porque ambas partidas responden a riesgos distintos.",
        "Surtimos Bullard LTX cuando tu análisis justifica casco estructural dentro del kit brigadista Romak BOM1001. Pide casco industrial bajo NOM-115-STPS-2009 o ANSI/ISEA Z89.1 solo si tu brigada controla conatos sin ataque interior y prueba lentes, careta, guantes, ropa y barbiquejo juntos.",
      ],
    },
    {
      h2: "Cómo redactamos la partida industrial",
      parrafos: [
        "En cada cotización escribimos conato o ataque interior, NOM-002-STPS-2010, casco industrial o estructural, careta, color y marcaje. Elige la clase industrial aplicable antes de ordenar, y pide barbiquejo, protección ocular y NOM-115-STPS-2009 o ANSI/ISEA Z89.1 si tu brigada los requiere durante evacuación o respuesta inicial.",
        "Revisamos la interfaz con lentes, careta y guantes para conatos, o con ERA, monja y chaquetón para casco estructural. Pide Bullard LTX CBOM1007 con suspensión de 6 puntos si tu partida requiere el kit Romak BOM1001; así la orden deja claro el nivel de operación.",
      ],
      lista: [
        "Escenario: conato o ataque interior",
        "Referencia: NOM-002-STPS-2010",
        "Industrial: NOM-115-STPS-2009",
        "Industrial: ANSI/ISEA Z89.1",
        "Estructural: Bullard LTX CBOM1007",
        "Accesorios: careta, color y marcaje",
      ],
    },
    {
      h2: "Modelo y conjunto que surtimos",
      parrafos: [
        "Surtimos Bullard LTX CBOM1007 para brigada que requiere casco estructural, termoplástico de alto impacto, Nomex y NFPA 1971 ed. 2018 declarado. Elige LTX con ERA, monja, chaquetón, guantes, visor de policarbonato de 4 pulgadas y suspensión de 6 puntos si tu análisis de riesgo permite ataque interior y el conjunto se prueba completo.",
        "Para conatos proponemos casco industrial con careta conforme a NOM-115-STPS-2009 o ANSI/ISEA Z89.1 según el requisito. Pide que el modelo industrial se combine con ropa de brigadista, lentes, guantes y barbiquejo; no lo presentes como sustituto de LTX CBOM1007 cuando la escena exige máscara de ERA y NFPA 1971 ed. 2018 declarado.",
      ],
    },
    {
      h2: "Errores que vemos en órdenes",
      parrafos: [
        "Vemos compras que nombran NOM-002-STPS-2010 y omiten conato o ataque interior. Escribe la tarea, careta, límite de uso, NOM-115-STPS-2009 o ANSI/ISEA Z89.1 para que cotizamos casco industrial o Bullard LTX CBOM1007 sin dejar que tu brigada reciba una partida ambigua.",
        "Otro error es agregar careta a casco industrial para resolver ERA y fuego en edificio. Pide casco estructural LTX CBOM1007, Nomex, visor de policarbonato de 4 pulgadas y suspensión de 6 puntos si corresponde; revisamos máscara, monja y chaquetón para que el conjunto tenga la configuración solicitada.",
      ],
    },
    {
      h2: "Inspección y límites de retiro",
      parrafos: [
        "Antes de turno revisamos casco industrial, careta, barbiquejo, lentes y marcado, o Bullard LTX, Nomex y visor de 4 pulgadas para ataque interior. Retira piezas con grietas, daño térmico o retención sin función y registra NOM-002-STPS-2010, LTX CBOM1007 y suspensión de 6 puntos junto con la asignación.",
        "Después de respuesta a conato o incendio, pide limpieza conforme al fabricante y verifica careta, carcasa, visor y suspensión de 6 puntos. Si la operación rebasó el alcance industrial o dañó el LTX, retiramos el casco y pedimos evaluación del conjunto con ERA antes de devolverlo a tu brigada.",
      ],
    },
  ],
  resumen: [
    "La brigada industrial usa casco industrial con careta para conatos definidos bajo NOM-115-STPS-2009 o ANSI/ISEA Z89.1, o casco estructural Bullard LTX CBOM1007 con ERA para ataque interior, según NOM-002-STPS-2010.",
    "Cotizamos por WhatsApp la tarea, careta, color, marcaje, límite de uso y LTX CBOM1007. Pide que tu brigada pruebe el conjunto completo con ERA, monja, chaquetón y suspensión de 6 puntos antes de ordenar una partida industrial o estructural.",
  ],
});

Object.assign(MODELOS[0], {
  title: "Casco de bombero Bullard LTX estructural | México",
  description:
    "Bullard LTX: casco estructural con ajuste ratchet, suspensión de seis puntos, cubrenuca Nomex y visor. Cotiza por WhatsApp con envío a todo México.",
  material: "Termoplástico de alto impacto",
  colores: "Amarillo o rojo según configuración",
  chips: ["NFPA 1971 ed. 2018", "Suspensión 6 puntos", "Visor de 4 pulgadas"],
  resumen: [
    "Casco estructural tradicional Bullard con ajuste ratchet, suspensión de seis puntos, cubrenuca Nomex y visor de policarbonato.",
    "Puede integrarse a una partida estructural o brigadista; confirma color, visor y accesorios junto con el conjunto de protección.",
  ],
  descripcion: [
    "El Bullard LTX es un casco estructural tradicional para operaciones de combate en edificaciones y brigadas que requieren una configuración de cobertura completa. Su carcasa de termoplástico de alto impacto se combina con forro interior, ajuste ratchet y suspensión de seis puntos para mantener el casco estable durante desplazamiento, ascenso, arrastre y trabajo con la cara elevada.",
    "El conjunto incorpora cintas 3M Scotchlite, contorno recubierto en cuero, protector de cuello y nuca de Nomex, barbiquejo Nomex de dos puntos con desenganche rápido metálico y visor de policarbonato de cuatro pulgadas. Estas piezas se coordinan con la máscara de ERA, la monja y el cuello del chaquetón: conviene probarlas juntas antes de cerrar una compra institucional.",
    "Está disponible en amarillo o rojo según configuración y se incluye en el kit brigadista Romak BOM1001 y en el kit estructural Profesional. Para una partida uniforme, define desde la requisición color, identificación, visor, cubrenuca y accesorios. Si el escenario contempla ataque interior, revisa que casco, ERA, capucha, traje, guantes y botas respondan a la misma operación.",
    "Norma declarada por el fabricante: NFPA 1971 ed. 2018. Solicita la declaración de conformidad con la cotización.",
  ],
});
Object.assign(MODELOS[1], {
  title: "Casco de bombero Bullard UST LW ultraligero | México",
  description:
    "Bullard UST LW: casco ultraligero con ajuste Sure-Lock, visor ReTrack y componentes removibles. Cotiza por WhatsApp con envío a todo México.",
  material: "Fibra de vidrio con resina ignífuga termoestable",
  colores: "No especificado",
  chips: ["NFPA 1971-2018", "Estilo Nueva York", "ReTrack"],
  resumen: [
    "Casco ultraligero de estilo Nueva York con ajuste Sure-Lock, visor ReTrack y componentes removibles para descontaminación.",
    "Configura visor, careta o goggles y prueba la estabilidad con la máscara de ERA de la corporación.",
  ],
  descripcion: [
    "El Bullard UST LW es un casco estructural de estilo Nueva York para quien necesita reducir masa sin perder los elementos de retención y cobertura propios de esa operación. Declara carcasa de fibra de vidrio con resina ignífuga termoestable y ajuste Sure-Lock con perilla, con seis combinaciones de inclinación y altura para acomodar cabeza, máscara y campo de visión.",
    "Su configuración puede incluir visor integrado ReTrack, careta o goggles, junto con barbiquejo de dos piezas de Nomex negro y hebilla de liberación rápida. La nuquera integra cubierta exterior de Nomex de seis onzas y tres capas de algodón FR. Los componentes removibles permiten organizar la descontaminación conforme a las instrucciones aplicables.",
    "El peso declarado es menor a 1.54 kg con ReTrack y menor a 1.77 kg con careta; se debe valorar junto con retención, equilibrio y la interfaz con ERA. Antes de cotizar, define qué protección ocular llevará la partida y prueba que visor, máscara y capucha se usen sin afectar el sello ni el movimiento.",
    "Norma declarada por el fabricante: NFPA 1971-2018. Solicita la declaración de conformidad con la cotización.",
  ],
});
Object.assign(MODELOS[2], {
  title: "Casco de bombero Sköld Viking FPCM | México",
  description:
    "Sköld Viking: casco estructural con matraca, barbiquejo de cuatro puntos y protector facial. Cotiza por WhatsApp con envío a todo México.",
  material: "Termoplástico de alta densidad",
  colores: "Amarillo",
  chips: ["NFPA 1971", "EN 443:2009", "Compatible con ERA"],
  resumen: [
    "Casco Sköld de perfil estructural con suspensión de red, matraca, barbiquejo de cuatro puntos y protector facial.",
    "Su geometría se revisa con máscara, arnés de ERA y cubrenuca antes de definir la configuración final.",
  ],
  descripcion: [
    "El Sköld Viking es un casco estructural para operaciones que requieren retención estable, cobertura de nuca y protección facial integrada. Su carcasa de termoplástico de alta densidad incorpora costilla central y frente triangular; el faldón con forro interno de Nomex, la nuquera aluminizada con forro Nomex y el acolchado frontal ayudan a completar la configuración declarada.",
    "Cuenta con ajuste tipo matraca, suspensión de red, barbiquejo de cuatro puntos con mentonera y retiro rápido, bisel protector y soporte trasero para colgar. El protector facial de policarbonato es antirrayas y antiempaño; la película térmica para 800 °C forma parte de la configuración declarada del fabricante.",
    "Se declara compatible con ERA. Antes de equipar una corporación, verifica físicamente visor, máscara, arnés, capucha y cuello del traje, y define el color amarillo, identificación y accesorios en la requisición. Esta revisión permite confirmar que la cobertura se conserva al mirar arriba, trabajar en escalera o desplazarse con el conjunto puesto.",
    "Norma declarada por el fabricante: NFPA 1971 / EN 443:2009. Solicita la declaración de conformidad con la cotización.",
  ],
});
Object.assign(MODELOS[3], {
  title: "Bullard Wildland FH911H | Cascos",
  description:
    "Bullard Wildland FH911H: casco forestal con suspensión de seis puntos y clips para goggles. Cotiza por WhatsApp con envío a todo México.",
  material: "Termoplástico Ultem",
  colores: "Amarillo, rojo, blanco o negro",
  chips: ["NFPA 1977 ed. 1998", "Ala completa", "Suspensión 6 puntos"],
  resumen: [
    "Casco forestal Bullard con suspensión automática de seis puntos, clips para goggles y barbiquejo Nomex ajustable.",
    "Se combina con goggles, cubrenuca y el equipo de línea de fuego; no corresponde a ataque interior estructural.",
  ],
  descripcion: [
    "El Bullard Wildland FH911H es un casco forestal para operación exterior, línea de fuego y desplazamiento prolongado. Su carcasa de termoplástico Ultem y la suspensión automática de seis puntos buscan un ajuste estable durante trabajo con calor, ceniza, vegetación y movilidad continua.",
    "Integra clips de retención para goggles y bandas reflejantes, acepta soportes para viseras y pantallas faciales, e incorpora barbiquejo Nomex ajustable, sombra interior y cierres de velcro. Define por escrito goggles, visera, pantalla, bandas y color para que la partida responda a la operación y mantenga una configuración homogénea.",
    "Está disponible en amarillo, rojo, blanco o negro. Revisa el ajuste con goggles, cubrenuca si aplica y protección ocular antes de ordenar; esos componentes deben funcionar juntos en pendiente, con viento y frente a partículas. Para ataque interior, selecciona un casco estructural y el conjunto de protección correspondiente.",
    "Norma declarada por el fabricante: NFPA 1977 ed. 1998 y ANSI Z89.1-1997 Tipo 1 Clase C, E y G. Solicita la declaración de conformidad con la cotización.",
  ],
});

Object.assign(MODELOS[0], {
  resumen: [
    "Cotizamos Bullard LTX CBOM1007 para brigadas y bomberos que requieren termoplástico de alto impacto, ajuste ratchet y suspensión de 6 puntos. Elige amarillo o rojo según tu identificación, y pide visor de policarbonato de 4 pulgadas junto con cubrenuca de Nomex, cintas 3M Scotchlite y la configuración que evaluará tu brigada.",
    "Surtimos LTX dentro del kit brigadista Romak BOM1001 o del kit estructural Profesional cuando tu operación lo justifica. Antes de ordenar, pide que tu personal pruebe barbiquejo Nomex de 2 puntos, máscara de ERA, monja y cuello del chaquetón con la misma configuración, visor de policarbonato de 4 pulgadas y ajuste ratchet.",
  ],
  descripcion: [
    "Elige Bullard LTX CBOM1007 si tu partida estructural requiere carcasa de termoplástico de alto impacto, ajuste ratchet y suspensión de 6 puntos. En la orden escribimos CBOM1007, amarillo o rojo, visor de policarbonato de 4 pulgadas y cubrenuca de Nomex para que recibas exactamente la versión que evaluó tu brigada, con cintas 3M Scotchlite, barbiquejo de 2 puntos, monja y máscara de ERA.",
    "La construcción declara forro interior, cintas 3M Scotchlite, contorno recubierto en cuero, termoplástico de alto impacto y suspensión de 6 puntos. En la prueba de talla revisamos ratchet, estabilidad y la posición del visor de 4 pulgadas; pide que el casco no gire al mirar arriba con máscara de ERA puesta, monja, chaquetón y barbiquejo Nomex de 2 puntos ajustados.",
    "El LTX incorpora protector de cuello y nuca de Nomex, barbiquejo Nomex de 2 puntos con desenganche rápido metálico y colgador metálico. Elige este conjunto con monja y chaquetón para trabajo estructural, o pídelo dentro de Romak BOM1001 si tu brigada usa ese kit; confirmamos color, visor de policarbonato de 4 pulgadas, ERA, suspensión de 6 puntos y accesorios antes de surtir.",
    "En operación estructural probamos LTX CBOM1007 con ERA, monja, chaquetón y guantes antes de aceptar un lote. Pide que cada usuario ajuste el ratchet, despliegue el visor de policarbonato de 4 pulgadas y haga movimientos de escalera; así revisamos retención, campo visual, cobertura de Nomex, cintas 3M Scotchlite, barbiquejo de 2 puntos y termoplástico de alto impacto.",
    "El fabricante declara NFPA 1971 ed. 2018; no publicamos número UL ni la presentamos como certificación. Antes de servicio revisamos termoplástico, suspensión de 6 puntos, Nomex y visor; retira LTX con impacto, deformación, daño térmico o retención sin función y registra CBOM1007, color, visor de policarbonato de 4 pulgadas, barbiquejo de 2 puntos, cintas 3M Scotchlite y fecha de inspección.",
  ],
});
Object.assign(MODELOS[1], {
  resumen: [
    "Cotizamos Bullard UST LW cuando tu brigada pide fibra de vidrio con resina ignífuga termoestable, ajuste Sure-Lock y visor ReTrack. Elige careta o goggles y confirma el código según configuración; revisamos las 6 combinaciones de inclinación y altura con tu máscara de ERA, nuquera Nomex de 6 oz y barbiquejo de 2 piezas.",
    "Surtimos UST LW con componentes removibles para descontaminación, nuquera Nomex de 6 oz y protección ocular ANSI/ISEA Z87.1 declarada. Pide ReTrack si tu operación requiere esa configuración, o careta si tu prueba de uso conserva ajuste, visibilidad y retención con el chaquetón, monja y máscara de ERA.",
  ],
  descripcion: [
    "Elige Bullard UST LW si buscas estilo Nueva York con fibra de vidrio, resina ignífuga termoestable y ajuste Sure-Lock. En la orden pedimos código según configuración, visor ReTrack, careta o goggles y NFPA 1971-2018 declarado, para que tu brigada no reciba una protección ocular distinta de la que probó, con nuquera Nomex de 6 oz y barbiquejo de 2 piezas.",
    "La carcasa de fibra de vidrio incorpora resina ignífuga termoestable y Sure-Lock con perilla, 6 combinaciones de inclinación y altura. En prueba de talla revisamos cada ajuste con máscara de ERA y campo visual; pide la posición que mantenga el casco estable al agacharte, mirar arriba y mover la cabeza, con nuquera Nomex de 6 oz, chaquetón y barbiquejo de 2 piezas.",
    "UST LW acepta visor integrado ReTrack, careta o goggles, y usa barbiquejo de 2 piezas de Nomex negro con hebilla de liberación rápida. Elige ReTrack para tu protección ocular si la prueba lo confirma, y pide la nuquera Nomex de 6 oz con 3 capas de algodón FR junto con chaquetón, monja, máscara de ERA y Sure-Lock durante la prueba.",
    "El fabricante declara masa menor a 1.54 kg con ReTrack y menor a 1.77 kg con careta. Antes de aceptar un lote, revisamos Sure-Lock, ReTrack, barbiquejo Nomex y componentes removibles con ERA; pide que el equipo haga movimientos de escalera y no pierda sellado ni equilibrio, con las 6 combinaciones de inclinación, altura, monja, chaquetón y nuquera Nomex de 6 oz.",
    "Bullard declara NFPA 1971-2018 y protección ocular conforme a ANSI/ISEA Z87.1; no publicamos número UL ni la presentamos como certificación. Antes de guardia revisamos fibra de vidrio, perilla, 6 ajustes y retención; retira UST LW tras impacto, calor o daño que afecte carcasa o visor, y registra ReTrack, careta o goggles, nuquera Nomex de 6 oz y barbiquejo de 2 piezas.",
  ],
});
Object.assign(MODELOS[2], {
  resumen: [
    "Cotizamos Sköld Viking FPCM para una partida estructural que requiere termoplástico de alta densidad, matraca y barbiquejo de 4 puntos. Elige color amarillo, protector facial de policarbonato y compatibilidad con ERA declarada; pide prueba con máscara, arnés, monja, chaquetón, faldón Nomex, nuquera aluminizada y película térmica para 800 °C.",
    "Surtimos Viking con faldón Nomex, nuquera aluminizada y película térmica para 800 °C según fabricante. Para tu orden escribe FPCM, protector facial antirrayas y antiempaño, suspensión de red y retiro rápido; revisamos que esa configuración conserve cobertura, campo visual, barbiquejo de 4 puntos y posición con máscara de ERA.",
  ],
  descripcion: [
    "Elige Sköld Viking FPCM si tu orden requiere termoplástico de alta densidad, costilla central, frente triangular y retención de 4 puntos. Nosotros escribimos FPCM, color amarillo y protector facial de policarbonato para que tu brigada reciba la configuración Viking que puede probar con máscara de ERA, faldón Nomex, nuquera aluminizada, matraca y suspensión de red.",
    "Viking declara faldón con forro interno de Nomex, nuquera aluminizada con forro Nomex, acolchado frontal, matraca y suspensión de red. En la prueba de talla revisamos mentonera, ajuste y cobertura de nuca; pide que casco y máscara de ERA se mantengan en posición al mirar arriba y bajar la cabeza, con protector facial de policarbonato desplegado, barbiquejo de 4 puntos y chaquetón.",
    "El modelo integra barbiquejo de 4 puntos con mentonera y retiro rápido, bisel protector y soporte trasero para colgar. Elige protector facial antirrayas y antiempaño si tu maniobra lo requiere, y combínalo con monja, chaquetón, guantes estructurales, máscara de ERA, faldón Nomex y nuquera aluminizada; confirmamos accesorios antes de surtir Viking FPCM.",
    "Durante la prueba de operación revisamos Viking FPCM con arnés de ERA, visor y movimientos de escalera. El fabricante menciona película térmica para 800 °C; pide verificar carcasa, matraca, suspensión de red, faldón Nomex, nuquera aluminizada y protector facial antes de aceptar un lote, sin convertir ese dato en sustituto del conjunto estructural.",
    "Sköld declara NFPA 1971 / EN 443:2009 y compatibilidad con ERA; no publicamos número UL ni la presentamos como certificación. Antes y después de intervención revisamos termoplástico, Nomex, nuquera aluminizada y barbiquejo; retira FPCM si impacto, calor o daño afectan retención, visor, carcasa, protector facial de policarbonato, matraca o suspensión de red.",
  ],
});
Object.assign(MODELOS[3], {
  resumen: [
    "Cotizamos Bullard Wildland FH911H para línea de fuego con termoplástico Ultem, ala completa y suspensión automática de 6 puntos. Elige amarillo, rojo, blanco o negro y pide clips para goggles, bandas reflejantes, visera o pantalla según la prueba de tu cuadrilla, con barbiquejo Nomex ajustable y cubrenuca si aplica.",
    "Surtimos FH911H con barbiquejo Nomex ajustable, sombra interior y velcro para operación exterior. Pide goggles y cubrenuca si tu jornada los requiere, y separa esta partida de casco estructural con ERA; revisamos ajuste en pendiente, viento, contacto con vegetación, clips de retención y suspensión automática de 6 puntos.",
  ],
  descripcion: [
    "Elige Bullard Wildland FH911H para operación forestal si tu partida requiere termoplástico Ultem, ala completa y suspensión automática de 6 puntos. En la orden escribimos FH911H, amarillo, rojo, blanco o negro, y clips para goggles para que tu cuadrilla reciba una configuración de línea de fuego verificable, con barbiquejo Nomex ajustable, bandas reflejantes, sombra interior y velcro.",
    "FH911H declara carcasa Ultem, suspensión automática de 6 puntos, sombra interior, cierres de velcro y clips de retención para goggles y bandas reflejantes. En prueba de talla revisamos ala completa, velcro y ajuste con goggles; pide que el casco conserve posición al caminar en pendiente, agacharte y mirar la línea de fuego, con barbiquejo Nomex ajustable, visera o pantalla facial.",
    "El modelo acepta soportes para viseras y pantallas faciales, e incorpora barbiquejo Nomex ajustable. Elige visera, pantalla, bandas o goggles según tu protección ocular, y pídelo con cubrenuca si corresponde a tu equipo forestal; confirmamos color, clips de retención, suspensión automática de 6 puntos y accesorios antes de surtir Bullard FH911H para operación forestal.",
    "En operación exterior probamos FH911H con goggles, barbiquejo Nomex y movimientos de pendiente antes de aceptar un lote. Pide revisar clips, suspensión de 6 puntos, velcro, ala completa, sombra interior y pantalla facial después de ceniza o viento con tu brigada; el casco forestal no sustituye casco estructural con ERA para incendio interior.",
    "El fabricante declara NFPA 1977 ed. 1998 y ANSI Z89.1-1997 Tipo 1 Clase C, E y G; no publicamos número UL ni la presentamos como certificación. Antes y después de guardia revisamos Ultem, suspensión, clips, velcro y barbiquejo Nomex; retira FH911H por impacto, calor, deformación o retención sin función y registra inspección.",
  ],
});
