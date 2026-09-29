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
    title: "Romak Fire Capucha over-face | Capucha bombero",
    description:
      "Romak Fire Capucha over-face: material, capas, apertura facial y cuidado para validar interfaz con ERA, casco y chaquetón antes de cotizar.",
    estatusNorma: "sin-norma",
    caracteristicas: [
      "Círculo facial descubierto para uso con ERA",
      "Diseñada para zonas de alta temperatura",
      "Disponible en natural y negro",
    ],
    resumen: [
      "La Romak Fire CAP1005 es una capucha over-face de 100 % Nomex con círculo facial descubierto para ERA. Si tu corporación requiere que la máscara ocupe esa abertura, cotizamos CAP1005 en natural o negro y probamos el borde con casco, chaquetón y la máscara que ya usan.",
      "Para reponer una capucha Romak Fire, pídenos CAP1005, color natural o negro y la combinación de máscara aprobada. Te entregamos una configuración over-face para zonas de alta temperatura, pero la ficha publica el estatus sin norma y así debe quedar escrito en tu orden.",
    ],
    descripcion: [
      "Elige Romak Fire CAP1005 si tu máscara de ERA debe ocupar un círculo facial descubierto; el 100 % Nomex queda alrededor del sello, no encima. En la orden escribimos CAP1005, construcción over-face, color natural o negro y la máscara con la que tu brigada aprobó el ajuste, para que una reposición conserve la misma geometría.",
      "La CAP1005 usa 100 % Nomex y deja el círculo facial abierto para ERA. En la prueba de talla te pedimos colocar máscara, casco y chaquetón, girar la cabeza, mirar arriba y bajar el mentón; elige esta configuración si el borde rodea la máscara sin invadir el sello y el babero permanece extendido.",
      "Puedes pedir CAP1005 en natural o negro, y nosotros registramos ese color junto con la construcción over-face. Combínala con la máscara de ERA, el casco y el cuello del chaquetón que usa tu equipo; si cambias cualquiera de esas piezas, mándanos la combinación para repetir la prueba antes de surtir una reposición.",
      "La Romak Fire CAP1005 se indica para zonas de alta temperatura. Antes de recibir un lote, te pedimos montar ERA, casco y chaquetón, mover cabeza y hombros, y revisar que el 100 % Nomex no forme pliegues en el sello; escribe esa prueba de interfaz en la orden para cotejar la partida.",
      "El fabricante publica CAP1005 sin norma declarada, por lo que nosotros la cotizamos como sin norma y no como certificada. Antes de guardia revisamos círculo facial, tela de 100 % Nomex, costuras y babero; retira la pieza si el borde pierde forma, hay hilos sueltos o la tela se adelgaza, y registra código y color.",
    ],
    faq: [
      { q: "¿Cuál es el código?", a: "CAP1005." },
      { q: "¿Qué colores hay?", a: "Natural y negro." },
      { q: "¿Tiene norma declarada?", a: "No tiene norma declarada." },
      {
        q: "¿Por qué el círculo facial queda descubierto?",
        a: "Porque la construcción over-face deja espacio para la máscara de ERA. La prueba debe confirmar que el borde no invada el sello facial ni se desplace al mover la cabeza.",
      },
      {
        q: "¿Qué debe coincidir al reordenar?",
        a: "Código CAP1005, color requerido, construcción over-face y compatibilidad comprobada con la máscara y el casco que usa la corporación.",
      },
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
    title: "Sköld Escafandra Nomex | Capucha bombero",
    description:
      "Sköld Escafandra Nomex: material, capas, apertura facial y cuidado para validar interfaz con ERA, casco y chaquetón antes de cotizar.",
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
      "La Sköld FPEN es una escafandra de 100 % Nomex, tamaño universal, con dos capas en cabeza y una en hombros. La cotizamos para tu operación con apertura de 120–145 mm, elástico de al menos 31 pulgadas y la declaración de tela NFPA 1971-2013, ASTM F1959, Cal-OSHA y OSHA 29 CFR 1910.269.",
      "Pídenos FPEN cuando necesitas dos capas en cabeza, no una doble capa completa. Te entregamos la configuración con hilo 100 % Nomex, cabeza de 13 pulgadas y babero de 4 pulgadas; antes de cerrar tu partida, prueba máscara de ERA, casco y chaquetón para confirmar que el elástico de 800 mm recupera posición.",
    ],
    descripcion: [
      "Elige Sköld FPEN si tu partida requiere tamaño universal con dos capas en cabeza y una en hombros, no doble capa en todo el contorno. En tu orden escribimos FPEN, 100 % Nomex, hilo 100 % Nomex, cabeza de 13 pulgadas y babero de 4 pulgadas, para que recibas la distribución de capas que comparaste.",
      "La FPEN combina 100 % Nomex, apertura facial de 120–145 mm y elástico que estira al menos 31 pulgadas, equivalentes a 800 mm. Durante la prueba de uso te pedimos ponértela con máscara de ERA y casco, mirar una escalera y girar la cabeza; elige este modelo si el babero de 4 pulgadas sigue extendido y el elástico vuelve a su lugar.",
      "Cotizamos Sköld FPEN con tamaño universal y su construcción de dos capas en cabeza, una en hombros. Para combinarla con tu traje, casco y máscara de ERA, revisamos la apertura de 120–145 mm y el solape antes de surtir; pídela con el conjunto que ya usa tu brigada, no como una escafandra intercambiable por material.",
      "En operación, la FPEN declara TPP de 30.2 cal/cm² y ATPV de 6.3/11.2 cal/cm² para una o dos capas. Antes de aceptar un lote, te proponemos probar máscara, casco y chaquetón, luego comparar apertura, capas y costuras de hilo 100 % Nomex contra la orden; así la talla universal no sustituye la prueba física.",
      "Sköld declara valores de tela NFPA 1971-2013, ASTM F1959, Cal-OSHA y OSHA 29 CFR 1910.269; nosotros los comunicamos como declarado, no como certificación. Antes de guardia revisamos elástico, costuras y apertura de 120–145 mm; retira FPEN si el elástico no recupera, hay ruptura de costura o daño en Nomex, y registra el lavado con agua tibia sin cloro.",
    ],
    faq: [
      { q: "¿Cuál es el código?", a: "FPEN." },
      { q: "¿Cuántas capas tiene?", a: "Dos en cabeza y una en hombros." },
      {
        q: "¿Cómo se lava?",
        a: "Con agua tibia, sin suavizante, cloro ni lavado en seco.",
      },
      {
        q: "¿Dónde están las dos capas de FPEN?",
        a: "En la cabeza; los hombros tienen una capa. La orden debe conservar esa distribución y no describirla como doble capa completa.",
      },
      {
        q: "¿Qué hago si el elástico no recupera posición?",
        a: "Sepárala de servicio para evaluación conforme al programa de EPP, pues la apertura declarada depende de que el elástico mantenga su ajuste.",
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
    title: "Majestic PAC II | Capucha bombero",
    description:
      "Majestic PAC II: material, capas, apertura facial y cuidado para validar interfaz con ERA, casco y chaquetón antes de cotizar.",
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
      "La Majestic PAC II CAP1001 es una capucha tejida de cara completa en Nomex blanco 100 %, con doble capa en cabeza y pechera. La surtimos para máscara de ERA con apertura de 120–145 mm, elástico encapsulado de media pulgada y babero de 8 pulgadas, incluida en el kit estructural Profesional.",
      "Si tu compra requiere el mismo modelo del kit estructural Profesional, pide CAP1001 y no solo una capucha blanca. Cotizamos la PAC II con cabeza de 13 pulgadas, total de 21 pulgadas y estatus certificado UL bajo NFPA 1971 ed. 2018, después de revisar solape con tu casco, máscara y chaquetón.",
    ],
    descripcion: [
      "Elige Majestic PAC II cuando tu orden requiere doble capa en cabeza y pechera, cara completa y la capucha del kit estructural Profesional. Nosotros escribimos CAP1001, Nomex blanco 100 %, cabeza de 13 pulgadas y babero de 8 pulgadas; así tu área de compras no sustituye esta construcción por una capucha blanca de otro modelo.",
      "La PAC II está tejida de cara completa con aberturas para ojos y nariz diseñadas para máscara de ERA, apertura facial de 120–145 mm y elástico encapsulado de media pulgada que estira al menos 31 pulgadas, o 800 mm. En la prueba te pedimos montar máscara, casco y chaquetón; elige PAC II si conserva el sello y la pechera queda extendida.",
      "Surtimos Majestic PAC II con doble capa en cabeza y pechera, incluida en el kit estructural Profesional. Pídela con tu máscara de ERA, casco y chaquetón, porque las aberturas para ojos y nariz se deben probar con ese conjunto; si repones piezas, mándanos CAP1001 y confirma que buscas la misma configuración de 21 pulgadas.",
      "Para uso operativo, la PAC II tiene cabeza de 13 pulgadas, babero de 8 pulgadas y apertura de 120–145 mm. Antes de aceptar un lote, te pedimos elevar brazos, mirar a los lados y agacharte con ERA y casco; compara que el elástico de media pulgada, las aberturas y la doble capa sigan la orden CAP1001.",
      "Majestic publica PAC II como certificado UL bajo NFPA 1971 ed. 2018, y nosotros conservamos ese estatus en la cotización. Antes de guardia revisamos Nomex blanco 100 %, doble capa, aberturas y elástico de 800 mm; retira CAP1001 si las aberturas se deforman, el elástico no recupera o la pechera se engancha, y registra la condición.",
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
      {
        q: "¿En qué zonas tiene doble capa PAC II?",
        a: "En cabeza y pechera. Esa construcción se distingue del modelo FPEN, que declara dos capas en cabeza y una capa en hombros.",
      },
      {
        q: "¿Qué confirma que es la capucha del kit?",
        a: "El código CAP1001, la construcción declarada, las medidas publicadas y la documentación de la partida; el color blanco por sí solo no identifica el modelo.",
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
  "Las configuraciones de una capa, doble capa y barrera contra partículas tienen propósitos distintos. La última no elimina la necesidad de descontaminar ni de lavar; las capas no convierten por sí solas un modelo en sustituto de otro. Compra el diseño que corresponde al riesgo, registra el cuidado y verifica su condición antes de cada reasignación. LORICA cotiza la monja junto con el casco y el ERA de tu equipo para revisar esa interfaz.",
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

export const data = { seccion, tipos, modelos };
