import type { Modelo, Seccion, Tipo } from "../types";

const proveedor = (src: string, alt: string, credito = "Romak Fire") => ({
  src,
  alt,
  width: 1000,
  height: 1250,
  origen: "proveedor" as const,
  credito,
});

const seccion: Seccion = {
  slug: "capuchas",
  nombre: "Capuchas",
  h1: "Capuchas (monjas) para bombero",
  title: "Capuchas y monjas para bombero | México",
  description:
    "Capuchas y monjas para bombero de Nomex, una o dos capas y barrera contra partículas; revisa apertura facial y ajuste con ERA antes de cotizar.",
  eyebrow: "Protección de cabeza y cuello",
  lead: "La capucha cierra la transición entre casco, máscara y cuello del traje; se selecciona por cobertura, capas, apertura facial y procedimiento de limpieza.",
  hero: {
    src: "/images/catalogo/capuchas/hero-capuchas.avif",
    alt: "Capuchas y monjas de protección para bombero",
  },
  intro: [
    "La capucha, también llamada monja, cubre cabeza, cuello y la transición hacia hombros o pechera. Su función depende de cómo se solapa con el casco, la máscara del equipo de respiración autónoma y el cuello del chaquetón. Una apertura facial demasiado floja, un babero que se acumula o una capa mal colocada pueden afectar esa interfaz aunque el textil parezca adecuado.",
    "Hay capuchas de una o dos capas y configuraciones con barrera contra partículas. La doble capa concentra cobertura en cabeza y puede cambiar la sensación térmica y el ajuste; una barrera contra partículas responde a una necesidad distinta y debe evaluarse con el procedimiento de descontaminación. Ninguna de estas opciones se compara solo por color o por el nombre comercial.",
    "Prueba la capucha con máscara de ERA, casco y chaquetón puestos. Revisa que el elástico recupere posición, que la apertura se acomode al sello de la máscara y que el babero permanezca extendido al mover la cabeza. Para lavado y descontaminación, sigue las instrucciones del fabricante; suavizante, cloro o métodos no previstos pueden alterar la tela y el ajuste.",
  ],
  grupos: [{ titulo: "Capuchas publicadas", tipos: [] }],
  faq: [
    {
      q: "¿Una capucha reemplaza el cubrenuca del casco?",
      a: "No. Son piezas distintas y deben solaparse sin afectar máscara, casco o cuello del traje.",
    },
    {
      q: "¿Qué diferencia hay entre una y dos capas?",
      a: "La configuración de capas cambia la cobertura y el ajuste. Selecciona conforme a la operación y los datos del modelo.",
    },
    {
      q: "¿Cómo se prueba con ERA?",
      a: "Colócala con máscara, casco y chaquetón; revisa apertura facial, sello de máscara y cobertura al mover cabeza y hombros.",
    },
    {
      q: "¿Se puede lavar con cloro?",
      a: "No uses cloro ni suavizante si la instrucción del modelo no lo permite.",
    },
  ],
  checklistCompra: {
    titulo: "Qué confirmar antes de ordenar",
    parrafos: [
      "Define modelo, talla o tamaño universal cuando aplique, número de capas, color, apertura facial y cantidad. Valida la interfaz completa con máscara de ERA, casco y chaquetón.",
      "En recepción, verifica costuras, elástico, apertura, babero y documentación declarada. Entrega el método de lavado y descontaminación aplicable al modelo.",
    ],
  },
};

const ia = (slug: string, alt: string) => ({
  src: `/images/catalogo/capuchas/tipo-${slug}.avif`,
  alt,
  width: 1600,
  height: 900,
  origen: "ia" as const,
});
const tipos: Tipo[] = [];

const modelos: Modelo[] = [
  {
    id: "romak-cap1005",
    seccion: "capuchas",
    marca: "Romak Fire",
    fabricante: "Romak Fire",
    nombre: "Capucha over-face",
    codigo: "CAP1005",
    material: "100 % Nomex",
    colores: "Natural y negro",
    estatusNorma: "sin-norma",
    caracteristicas: [
      "Círculo facial descubierto para uso con ERA",
      "Diseñada para zonas de alta temperatura",
      "Disponible en natural y negro",
    ],
    resumen: [
      "Capucha Romak Fire over-face de 100 % Nomex con círculo facial descubierto para coordinarse con ERA.",
      "Define color y prueba la apertura con máscara, casco y cuello del traje.",
    ],
    descripcion: [
      "La Romak Fire CAP1005 es una capucha over-face fabricada en 100 % Nomex. Deja descubierto el círculo facial para usarla con equipo de respiración autónoma; esa apertura se debe probar con la máscara que utiliza la corporación, no solo medirla sin el resto del conjunto.",
      "Está disponible en color natural y negro. Antes de ordenar, revisa cómo se solapa con casco, cuello del chaquetón y el arnés de ERA, y confirma que el babero permanezca extendido durante los movimientos de cabeza y hombros.",
      "Se indica para zonas de alta temperatura. Esa aplicación no elimina la necesidad de seleccionar el traje, casco y guantes según la operación completa. El modelo no tiene norma declarada; no se debe atribuir una certificación sin documentación aplicable.",
      "Al recibir, inspecciona tela, costuras, apertura facial y color contra la requisición. Sigue las instrucciones aplicables para lavado y descontaminación.",
    ],
    faq: [
      { q: "¿Cuál es el código?", a: "CAP1005." },
      { q: "¿Qué colores hay?", a: "Natural y negro." },
      { q: "¿Tiene norma declarada?", a: "No tiene norma declarada." },
    ],
    imagen: proveedor(
      "/images/catalogo/capuchas/romak-cap1005.avif",
      "Capucha Romak Fire CAP1005 color natural",
    ),
  },
  {
    id: "skold-fpen",
    seccion: "capuchas",
    marca: "Sköld",
    fabricante: "Sköld",
    nombre: "Escafandra Nomex",
    codigo: "FPEN",
    material: "100 % Nomex",
    tallas: "Tamaño universal",
    norma:
      "Valores de tela de referencia NFPA 1971-2013, ASTM F1959, Cal-OSHA y OSHA 29 CFR 1910.269",
    estatusNorma: "declarado",
    caracteristicas: [
      "Dos capas en cabeza y una en hombros",
      "Hilo 100 % Nomex",
      "Cabeza de 13 pulgadas y babero de 4 pulgadas",
      "Apertura facial de 120–145 mm",
      "Elástico que estira a al menos 31 pulgadas (800 mm)",
      "TPP 30.2 cal/cm² y ATPV declarado de 6.3/11.2 cal/cm²",
      "Lavar con agua tibia, sin suavizante ni cloro",
    ],
    resumen: [
      "Escafandra Sköld de Nomex con dos capas en cabeza, una en hombros y tamaño universal.",
      "Los valores de tela se muestran como declaración; confirma apertura y ajuste con ERA antes de ordenar.",
    ],
    descripcion: [
      "La Sköld FPEN es una escafandra de 100 % Nomex con dos capas en la cabeza y una en hombros; las costuras usan hilo de 100 % Nomex. Declara tamaño universal, cabeza de 13 pulgadas y babero de cuatro pulgadas, para un total de 17 pulgadas. La apertura facial mide 120–145 mm y su elástico estira a por lo menos 31 pulgadas, equivalentes a 800 mm.",
      "El fabricante declara TPP de 30.2 cal/cm², ATPV de 6.3 cal/cm² para una capa HRC 1 y 11.2 cal/cm² para dos capas HRC 2. También declara resistencia al rasgado de 865 N, ruptura de costura de 1110 N y contracción de 0 % tras cinco lavadas. Estos valores se revisan junto con el diseño de la capucha y la interfaz con máscara y casco.",
      "Para lavado indica agua tibia, sin suavizante ni cloro y sin lavado en seco. Mantener ese procedimiento evita agregar químicos o procesos que puedan afectar el textil, el elástico o el ajuste.",
      "Valores de tela declarados por el fabricante: NFPA 1971-2013, ASTM F1959, Cal-OSHA y OSHA 29 CFR 1910.269. Solicita la declaración de conformidad con la cotización.",
    ],
    faq: [
      { q: "¿Cuál es el código?", a: "FPEN." },
      { q: "¿Cuántas capas tiene?", a: "Dos en cabeza y una en hombros." },
      {
        q: "¿Cómo se lava?",
        a: "Con agua tibia, sin suavizante, cloro ni lavado en seco.",
      },
    ],
    imagen: proveedor(
      "/images/catalogo/capuchas/skold-fpen.avif",
      "Escafandra Sköld FPEN de Nomex",
      "Sköld",
    ),
  },
  {
    id: "majestic-pac-ii",
    seccion: "capuchas",
    marca: "Majestic",
    fabricante: "Majestic",
    nombre: "PAC II",
    codigo: "CAP1001",
    material: "Nomex blanco 100 %",
    tallas: "Cabeza de 13 pulgadas y babero de 8 pulgadas",
    norma: "NFPA 1971 ed. 2018, listada por UL",
    estatusNorma: "certificado-ul",
    caracteristicas: [
      "Doble capa en cabeza y pechera",
      "Tejida de cara completa",
      "Aberturas para ojos y nariz diseñadas para máscara de ERA",
      "Apertura facial de 120–145 mm",
      "Elástico encapsulado de media pulgada",
      "Estira a al menos 31 pulgadas (800 mm)",
      "Incluida en el kit estructural Profesional",
    ],
    resumen: [
      "Capucha Majestic PAC II de Nomex blanco con doble capa en cabeza y pechera, diseñada para máscara de ERA.",
      "Tiene estatus certificado UL; valida la apertura facial y el solape con el conjunto de protección.",
    ],
    descripcion: [
      "La Majestic PAC II usa Nomex blanco 100 % y construcción de doble capa en cabeza y pechera. Es una capucha tejida de cara completa con aberturas para ojos y nariz diseñadas para coordinarse con máscara de ERA. La cabeza mide 13 pulgadas y el babero ocho pulgadas, para un total de 21 pulgadas.",
      "La apertura facial declarada es de 120–145 mm. El elástico encapsulado de media pulgada estira a por lo menos 31 pulgadas, equivalentes a 800 mm. Al evaluarla, coloca máscara, casco, chaquetón y capucha como se usarán en la operación; la cobertura debe conservarse sin comprometer el sello de la máscara.",
      "Está incluida en el kit estructural Profesional. Para una compra institucional, define cantidades y prueba el ajuste por usuario antes de cerrar tallas o configuraciones del resto del conjunto.",
      "Norma declarada por el fabricante: NFPA 1971 ed. 2018, listada por UL. Solicita la declaración de conformidad con la cotización.",
    ],
    faq: [
      { q: "¿Cuál es el código?", a: "CAP1001." },
      {
        q: "¿Está incluida en un kit?",
        a: "En el kit estructural Profesional.",
      },
      {
        q: "¿Cómo se usa con ERA?",
        a: "Sus aberturas se diseñaron para máscara de ERA; confirma físicamente sello y cobertura.",
      },
    ],
    imagen: proveedor(
      "/images/catalogo/capuchas/majestic-pac-ii.avif",
      "Capucha Majestic PAC II blanca",
      "Majestic",
    ),
  },
];

seccion.grupos = [];
seccion.enlaces = [
  {
    label: "Capucha antipartículas (monja) para traje estructural",
    href: "/trajes/estructural/monja/",
    descripcion:
      "Capucha con barrera contra partículas para ataque interior: interfaz con máscara de ERA, casco y cuello del chaquetón.",
  },
  {
    label: "Monja (capucha) de brigada",
    href: "/trajes/brigadista/monja/",
    descripcion:
      "Capucha para brigadas industriales de fuego incipiente, seleccionada por la tarea autorizada de la brigada.",
  },
  {
    label: "Capucha aluminizada con visor dorado",
    href: "/trajes/aproximacion/capucha/",
    descripcion:
      "Capucha aluminizada para trabajo de proximidad ante calor radiante intenso.",
  },
  {
    label: "Capucha de penetración con visor doble",
    href: "/trajes/entrada/capucha/",
    descripcion:
      "Capucha del conjunto de entrada a la flama para exposiciones breves y severas.",
  },
];
seccion.resumenHero = [
  "La capucha o monja protege una interfaz: la franja que une casco, máscara, cuello y hombros. Una selección correcta no parte de la prenda extendida, sino de una prueba puesta con el ERA y el chaquetón que usa la persona. Apertura facial, elástico, babero y número de capas deben conservar cobertura mientras se mueve la cabeza y el torso.",
  "Las configuraciones de una capa, doble capa y barrera contra partículas tienen propósitos distintos. La última no elimina la necesidad de descontaminar ni de lavar; las capas no convierten por sí solas un modelo en sustituto de otro. Compra el diseño que corresponde al riesgo, registra el cuidado y verifica su condición antes de cada reasignación.",
];
seccion.etiquetas = {
  menuTipos: "Tipos de capucha",
  tiposEyebrow: "Cobertura e interfaz",
  tiposTitulo: "Capuchas según construcción",
  tiposDescripcion:
    "Compara capas, apertura facial y propósito antes de definir modelo.",
  elegirTitulo: "Cómo elegir una monja",
  elegirDescripcion:
    "La compatibilidad con ERA, casco y chaquetón es el primer criterio.",
  modelosTitulo: "Modelos publicados",
  modelosDescripcion:
    "Cada modelo conserva sus medidas, materiales y estatus normativo.",
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
      "Una capa Nomex",
      "Interfaz térmica definida por operación",
      "Modelo y análisis de riesgo",
      "Tejido y babero continuos",
      "Movilidad y cobertura básica",
      "No equivale a barrera de partículas",
    ],
    [
      "Doble capa",
      "Conjunto estructural según modelo",
      "NFPA 1970",
      "Capas declaradas en zonas específicas",
      "Mayor cobertura de construcción",
      "Debe probarse con ERA",
    ],
    [
      "Barrera contra partículas",
      "Exposición a productos de combustión",
      "NFPA 1970",
      "Barrera en zonas declaradas",
      "Complementa control de partículas",
      "No reemplaza descontaminación",
    ],
  ],
};
seccion.criterios = {
  titulo: "Cinco criterios para comprar capuchas",
  items: [
    {
      termino: "Interfaz",
      texto: "Prueba máscara, casco, cuello y babero en movimiento.",
    },
    {
      termino: "Construcción",
      texto: "Define una capa, doble capa o barrera según la operación.",
    },
    {
      termino: "Apertura",
      texto: "Confirma que el elástico acompaña sin afectar el sello.",
    },
    {
      termino: "Higiene",
      texto: "Incluye lavado, descontaminación y asignación personal.",
    },
    {
      termino: "Trazabilidad",
      texto: "Registra modelo, condición y reemplazos por usuario.",
    },
  ],
};
seccion.intro.push(
  "El momento de colocación y retiro merece el mismo cuidado que la compra. La capucha puede quedar expuesta a productos de combustión y después tocar piel, casco o cabina si se guarda sin procesar. Define una ruta de equipo limpio y contaminado, asigna responsables e incorpora el cuidado a la instrucción de uso. Esto mantiene la cobertura y evita que la prenda se convierta en una fuente de transferencia.",
  "Para comparar opciones, solicita construcción, material, apertura, medidas publicadas cuando existan y estatus normativo por modelo. La capucha antipartículas de la familia estructural y la monja de brigada tienen su propia ficha de pieza, enlazada arriba. Sus objetivos no se mezclan con una capucha de Nomex solo porque todas cubren cabeza y cuello.",
);
seccion.faq.push(
  {
    q: "¿Dónde están las fichas de capucha existentes?",
    a: "En las fichas de pieza de cada familia de traje, enlazadas al inicio de esta página.",
  },
  {
    q: "¿Una barrera contra partículas evita lavar?",
    a: "No. El lavado y la descontaminación siguen siendo parte del cuidado.",
  },
  {
    q: "¿Qué reviso en recepción?",
    a: "Modelo, capas, color, costuras, elástico, apertura y documentación contra la requisición.",
  },
  {
    q: "¿Por qué asignarla por persona?",
    a: "Para cuidar higiene, ajuste e historial de condición.",
  },
);
seccion.intro.push(
  "El presupuesto debe contemplar piezas de reemplazo y el tiempo de entrenamiento. La apertura facial y el babero se acomodan con una secuencia que conviene practicar antes de una emergencia; cuando una corporación cambia de máscara o casco, esa práctica se repite. La inversión no se limita al tejido: incluye conservar la interfaz que protege piel y vías respiratorias dentro del conjunto.",
  "Al cerrar una orden, separa los datos de desempeño que pertenecen a un modelo de los criterios operativos de la corporación. Pide los primeros por escrito y define los segundos en el programa de EPP. Este enfoque permite comparar modelos de una o dos capas, o con barrera contra partículas, sin prometer capacidades que no estén expresamente documentadas.",
);
seccion.intro.push(
  "Una ficha de compra bien planteada nombra la capucha, pero también describe la combinación con la que se aprobó: máscara, casco, cuello y usuario. Incluye cantidad de reposición, responsable de recepción y método de cuidado. Con ello, el cambio de una prenda no obliga a redescubrir cómo debe colocarse ni a usar una alternativa sin haber revisado su cobertura.",
);

modelos[0].title = "Romak Fire Capucha over-face | Capucha bombero";
modelos[0].description =
  "Romak Fire Capucha over-face: material, capas, apertura facial y cuidado para validar interfaz con ERA, casco y chaquetón antes de cotizar.";
modelos[0].descripcion.push(
  "La CAP1005 es una construcción over-face: el círculo facial queda descubierto para que la máscara de ERA ocupe ese espacio. No se debe estirar la abertura sobre el sello ni asumir que cualquier máscara tendrá la misma geometría. Coloca primero el conjunto conforme al procedimiento de la corporación y comprueba que el borde de Nomex quede alrededor de la máscara sin subir sobre la superficie de sellado.",
  "Su material publicado es 100 % Nomex y se ofrece en natural y negro. El color forma parte de la requisición cuando la corporación busca separar asignaciones o reposiciones; no describe desempeño. En una prueba de movimiento, gira cabeza, mira hacia arriba y baja el mentón para verificar que el babero no se enrolle fuera del cuello del chaquetón ni deje descubierta la transición de cuello.",
  "Para la inspección, revisa el contorno del círculo facial por hilos sueltos, estiramiento permanente y puntos donde la tela se haya adelgazado por roce con máscara o casco. Examina costuras y babero tras cualquier exposición antes de guardarla. El modelo se indica para zonas de alta temperatura, pero no tiene norma declarada: consigna ese estatus tal como se publica en CAP1005.",
  "En la orden de compra escribe CAP1005, color natural o negro, cantidad y la máscara con la que se aprobó la prueba. Pregunta frecuente: ¿puede cambiarse por otra capucha de Nomex? Solo después de probar otra abertura con la misma máscara, casco y cuello; el material común no garantiza que la interfaz over-face permanezca igual.",
);
modelos[0].faq.push(
  {
    q: "¿Por qué el círculo facial queda descubierto?",
    a: "Porque la construcción over-face deja espacio para la máscara de ERA. La prueba debe confirmar que el borde no invada el sello facial ni se desplace al mover la cabeza.",
  },
  {
    q: "¿Qué debe coincidir al reordenar?",
    a: "Código CAP1005, color requerido, construcción over-face y compatibilidad comprobada con la máscara y el casco que usa la corporación.",
  },
);

modelos[0].descripcion.push(
  "Para entrenar colocación, asigna una CAP1005 limpia a la combinación de máscara y casco que utilizará la persona. Repite el retiro sin jalar el círculo facial contra el sello y observa si el borde recupera su forma. Anota el color entregado y el código CAP1005 en el control de equipo para que una reposición mantenga la misma geometría over-face. No agregues broches, marcas adhesivas ni cortes al borde de la abertura: cualquier modificación altera la zona que se acomoda alrededor de la máscara.",
);

modelos[1].title = "Sköld Escafandra Nomex | Capucha bombero";
modelos[1].description =
  "Sköld Escafandra Nomex: material, capas, apertura facial y cuidado para validar interfaz con ERA, casco y chaquetón antes de cotizar.";
modelos[1].descripcion.push(
  "La FPEN distribuye dos capas de Nomex en la cabeza y una en hombros, con hilo 100 % Nomex. La cabeza publicada mide 13 pulgadas y el babero cuatro, para un total de 17 pulgadas. Esa distribución importa al meter el babero bajo el cuello del chaquetón: una capa adicional en la cabeza no significa que los hombros tengan la misma construcción.",
  "La apertura facial declarada es de 120–145 mm y el elástico estira al menos 31 pulgadas, equivalentes a 800 mm. Mide la compatibilidad poniéndola con la máscara real, no con una plantilla circular. Tras colocarse el casco, pide al usuario girar la cabeza y simular mirar una escalera; observa que el elástico recupere posición y que el babero de cuatro pulgadas siga extendido.",
  "Los valores TPP, ATPV, resistencia al rasgado, ruptura de costura y contracción publicados pertenecen a la declaración de tela del fabricante. En la requisición pide FPEN, tamaño universal, construcción de capas, medidas publicadas y el procedimiento de lavado. No conviertas esos valores en certificación del modelo ni los transfieras a una capucha que solo comparte el material.",
  "El lavado indicado es con agua tibia, sin suavizante, cloro ni lavado en seco. En inspección revisa el elástico completo, el borde de apertura y las costuras entre cabeza y hombros; una pérdida de recuperación puede modificar el asiento de la máscara. Almacena la escafandra limpia y seca, sin doblar el elástico sobre objetos que lo mantengan estirado.",
);
modelos[1].faq.push(
  {
    q: "¿Dónde están las dos capas de FPEN?",
    a: "En la cabeza; los hombros tienen una capa. La orden debe conservar esa distribución y no describirla como doble capa completa.",
  },
  {
    q: "¿Qué hago si el elástico no recupera posición?",
    a: "Sepárala de servicio para evaluación conforme al programa de EPP, pues la apertura declarada depende de que el elástico mantenga su ajuste.",
  },
);

modelos[2].title = "Majestic PAC II | Capucha bombero";
modelos[2].description =
  "Majestic PAC II: material, capas, apertura facial y cuidado para validar interfaz con ERA, casco y chaquetón antes de cotizar.";
modelos[2].descripcion.push(
  "La PAC II combina Nomex blanco 100 % con doble capa en cabeza y pechera. Su construcción de cara completa incorpora aberturas para ojos y nariz diseñadas para máscara de ERA, en vez de un círculo over-face. La medida publicada es cabeza de 13 pulgadas más babero de ocho, total de 21 pulgadas; el babero más largo debe quedar extendido bajo el cuello sin hacer un pliegue que empuje hacia arriba la máscara.",
  "La apertura facial de 120–145 mm trabaja con un elástico encapsulado de media pulgada que estira por lo menos 31 pulgadas, o 800 mm. En la evaluación, coloca capucha, máscara, chaquetón y casco en el orden institucional. Comprueba el sello de la máscara y revisa la cobertura al elevar brazos, mirar a los lados y agacharse. La capucha no debe desplazar el arnés ni acumularse en la nuca.",
  "PAC II está incluida en el kit estructural Profesional. Para una compra, solicita código CAP1001, número de pares por usuario y confirmación de que se requiere la misma capucha del kit, no solo una pieza blanca de Nomex. Su norma declarada es NFPA 1971 edición 2018 y su estatus es certificado UL; conserva la documentación de la oferta junto con la recepción.",
  "La inspección revisa doble capa en cabeza y pechera, aberturas de ojos y nariz, elástico encapsulado y continuidad de costuras. Si las aberturas se deforman, si el elástico deja de recuperar o si la pechera se engancha y pierde caída, retira la pieza para evaluación. Pregunta frecuente: ¿la doble capa elimina el lavado? No; el cuidado y la descontaminación siguen el programa y la instrucción aplicable.",
);
modelos[2].faq.push(
  {
    q: "¿En qué zonas tiene doble capa PAC II?",
    a: "En cabeza y pechera. Esa construcción se distingue del modelo FPEN, que declara dos capas en cabeza y una capa en hombros.",
  },
  {
    q: "¿Qué confirma que es la capucha del kit?",
    a: "El código CAP1001, la construcción declarada, las medidas publicadas y la documentación de la partida; el color blanco por sí solo no identifica el modelo.",
  },
);

export const data = { seccion, tipos, modelos };
