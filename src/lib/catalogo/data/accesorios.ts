import type { Modelo, Seccion, Tipo } from "../types";

const ia = (slug: string, alt: string) => ({
  src: `/images/catalogo/accesorios/tipo-${slug}.avif`,
  alt,
  width: 1600,
  height: 900,
  origen: "ia" as const,
});
const seccion: Seccion = {
  slug: "accesorios",
  nombre: "Accesorios",
  h1: "Accesorios para bombero: iluminación, protección ocular y transporte",
  title: "Accesorios para bombero: iluminación y transporte | México",
  description:
    "Accesorios para bombero: lámparas de casco, linternas, goggles, cámara térmica, dispositivo PASS y maletas porta-equipo. Cómo especificarlos y cotizarlos.",
  eyebrow: "Accesorios operativos",
  lead: "Cada accesorio se compra para una maniobra y una interfaz física concretas.",
  hero: {
    src: "/images/catalogo/accesorios/hero-accesorios.avif",
    alt: "Accesorios para bombero de iluminación, protección ocular y transporte",
  },
  intro: [
    "La compra de accesorios comienza por la maniobra, el casco, guantes, ERA, vehículo y resguardo con que convivirá cada pieza. Una apariencia parecida no confirma montaje, alimentación ni funcionamiento.",
    "NFPA 1970 incorporó la anterior NFPA 1982 para PASS. Una referencia publicada se conserva como declaración del modelo y no se transfiere a otro accesorio.",
    "En la requisición mexicana anota unidad, cantidad, modelo o configuración, componentes incluidos y prueba de aceptación.",
  ],
  grupos: [
    {
      titulo: "Por función",
      tipos: [
        "lampara-de-casco",
        "linterna-de-bombero",
        "goggles",
        "camara-termica",
        "dispositivo-pass",
        "maleta-porta-equipo",
      ],
    },
  ],
  faq: [
    {
      q: "¿Qué debe incluir una cotización?",
      a: "Modelo, cantidad, componentes, método de montaje o transporte y la prueba de aceptación aplicable a la pieza.",
    },
  ],
  checklistCompra: {
    titulo: "Qué confirmar antes de ordenar",
    parrafos: [
      "Relaciona la pieza con su maniobra y equipo adyacente.",
      "Recibe componentes y función contra la requisición.",
    ],
  },
  leyendaImagenIlustrativa:
    "Imagen ilustrativa. Marca, modelo y configuración exactos se confirman por escrito en la cotización.",
};

type Texto = {
  slug: string;
  nombre: string;
  lead: string;
  referencia: string;
  bloques: { h2: string; parrafos: string[] }[];
  errores: string[];
  faq: { q: string; a: string }[];
  resumen?: string[];
};
const textos: Texto[] = [
  {
    slug: "lampara-de-casco",
    nombre: "Lámpara de casco",
    lead: "La lámpara de casco Streamlight Vantage deja las manos libres con LED C4, giro de 360° y dos baterías CR123A de 3 V para el casco con ala que validamos contigo.",
    referencia: "Según modelo",
    errores: [
      "Comprar soporte sin probar casco",
      "No definir baterías",
      "Perforar el casco para forzar montaje",
    ],
    faq: [
      {
        q: "¿Cómo se acepta?",
        a: "Montando soporte, visor y máscara sobre el casco real, con guantes, y comprobando que el haz mantenga su orientación durante movimientos de trabajo.",
      },
    ],
    bloques: [
      {
        h2: "Lámpara de casco para guardia",
        parrafos: [
          "Cotizamos lámpara de casco para búsqueda, escalera y reconocimiento cuando tu brigada necesita conservar ambas manos en radio, herramienta o pasamanos. La Streamlight Vantage declara LED C4, 115 lúmenes y giro de 360°; elige este montaje si tu casco tiene ala y el haz debe seguir la mirada, no si requieres iluminar un punto fuera de ella.",
          "Te entregamos la Vantage con clip para casco con ala, dos CR123A de 3 V y luz trasera azul según su ficha. Antes de comprarla, monta casco, visor y máscara con guantes: si el lente de vidrio borofloat rebota en el visor o el soporte pierde retención, pide otra interfaz en vez de forzar el casco con cinta o perforaciones.",
        ],
      },
      {
        h2: "Cotización de lámpara de casco",
        parrafos: [
          "En nuestra cotización escribimos cada partida de Streamlight Vantage por separado: lámpara, clip, baterías CR123A y casco muestra. Pide dos CR123A de 3 V iniciales y reserva del mismo formato si eliges este modelo; así el giro de 360° y los 167 m declarados se reciben con la energía y montaje que realmente usarán.",
          "Para una compra comparable anotamos marca, modelo, soporte y la declaración de clasificación NFPA 1971 sin presentarla como certificación. Elige lámpara de casco si el comprador valida 7,000 candelas, seis horas declaradas e IPX7 de 1 m durante 30 min contra la maniobra; si falta el clip compatible, dejamos la partida pendiente.",
        ],
        lista: [
          "Marca y modelo: Streamlight Vantage",
          "Emisor: LED C4",
          "Soporte: clip para casco con ala",
          "Energía: dos CR123A de 3 V",
          "Haz: 7,000 candelas y 115 lúmenes",
          "Referencia: clasificación NFPA 1971 declarada",
        ],
      },
      {
        h2: "Modelo Vantage y compatibilidad",
        parrafos: [
          "Surtimos la Streamlight Vantage para casco con ala; su cuerpo es de aluminio anodizado de grado aeronáutico y usa lente de vidrio borofloat de alta temperatura. Pídela con tu casco, visor y máscara si buscas una luz de manos libres; si la operación exige orientar el haz lejos de la mirada, combínala con una linterna portátil, no con otro soporte improvisado.",
          "La Vantage declara 167 m de alcance, seis horas de duración e IPX7 a 1 m durante 30 min. En la prueba de talla y uso, gira el cabezal 360°, activa el interruptor con guante y sube una escalera con máscara; aceptamos el lote solo si el clip conserva posición y el haz no queda tapado por el ala.",
        ],
      },
      {
        h2: "Errores en pliego de lámparas",
        parrafos: [
          "Vemos pliegos que piden 115 lúmenes pero omiten el clip para casco con ala. Para evitarlo, escribe Streamlight Vantage, LED C4, clip y dos CR123A de 3 V en el mismo renglón; elige otra propuesta si no identifica la batería, porque una lámpara sin energía definida no queda lista para guardia.",
          "También recibimos órdenes que copian IPX7 de 1 m durante 30 min como si definiera montaje o uso. Escribe lente de vidrio borofloat, giro de 360° y prueba con visor y máscara; si el soporte golpea el visor, pide compatibilidad comprobada y no presentes la clasificación NFPA 1971 declarada como certificación.",
        ],
      },
      {
        h2: "Inspección y retiro Vantage",
        parrafos: [
          "Antes de guardia revisamos LED C4, lente de vidrio borofloat, aro, interruptor, clip y tapa de las dos CR123A de 3 V. Enciende la Vantage, mueve el cabezal 360° y comprueba el haz con visor y máscara; si hay parpadeo, corrosión o giro sin retención, retírala y registra marca, modelo y condición.",
          "Después de una intervención, revisa aluminio anodizado, lente, contactos y clip antes de devolver la Vantage al casco con ala. Aparta la unidad con IPX7 comprometido, lente quebrado o soporte flojo; registra el cambio de CR123A y pide evaluación del fabricante tras golpe o humedad, sin usar cinta como reparación.",
        ],
      },
    ],
    resumen: [
      "La lámpara de casco Streamlight Vantage combina LED C4, 115 lúmenes, giro de 360° y dos CR123A de 3 V para casco con ala. La surtimos cuando visor, máscara y clip conservan orientación y retención durante la maniobra.",
      "Cotizamos Vantage por pieza con clip, baterías, reserva y prueba sobre tu casco. Mándanos WhatsApp con foto o modelo del casco, visor y máscara para revisar la interfaz antes de integrar los 167 m y seis horas declaradas a tu partida.",
    ],
  },
  {
    slug: "linterna-de-bombero",
    nombre: "Linterna de bombero",
    lead: "La linterna de bombero dirige luz manual con lente, interruptor y carcasa; la cotizamos con funda o clip para que tu brigada la recupere con guante durante la maniobra.",
    referencia: "Según modelo",
    errores: [
      "Omitir funda",
      "Elegir interruptor inaccesible",
      "Mezclar baterías",
    ],
    faq: [
      {
        q: "¿Qué se prueba?",
        a: "Sacar, encender, dirigir y devolver la linterna a su funda con el guante y la prenda que utilizará la persona asignada.",
      },
    ],
    bloques: [
      {
        h2: "Linterna de bombero y agarre",
        parrafos: [
          "Cotizamos linterna de bombero para reconocimiento, gabinete o escalera cuando necesitas dirigir el haz fuera de la mirada. Elige carcasa de aluminio, lente, interruptor y funda si tu cuadrilla debe recuperar la pieza con guante; si requiere manos libres, pide lámpara de casco con LED C4 y giro de 360° como configuración distinta.",
          "Te proponemos probar la linterna con guante, funda y radio antes de ordenar. Sácala, ilumina un escalón y devuélvela sin activarla dentro del bolsillo; si el clip de aluminio obliga a soltar pasamanos o herramienta, elegimos otro sistema de porte para tu prenda.",
        ],
      },
      {
        h2: "Cotización de linterna de bombero",
        parrafos: [
          "En nuestra cotización escribimos unidad, modelo, carcasa de aluminio, lente, interruptor, alimentación y funda o clip. Elige batería reemplazable si tu almacén controla formato y reserva; elige recargable si puedes asignar cargador y punto de carga. Sin modelo publicado para esta categoría, pedimos al proveedor la tecnología y material exactos antes de cerrar la partida.",
          "Separamos lámparas, cargadores, bases, tapas y fundas para evitar una entrega incompleta. Pide cantidad por persona, vehículo o puesto y anota la declaración del fabricante; si ofrece aluminio y lúmenes sin describir lente, energía y retención, te pedimos esos datos antes de elegir el modelo.",
        ],
        lista: [
          "Unidad: linterna por pieza",
          "Cuerpo: carcasa de aluminio, lente e interruptor",
          "Porte: funda, clip o anillo",
          "Energía: batería o sistema recargable",
          "Refacciones: tapa, cargador o base según modelo",
          "Documento: declaración del fabricante",
        ],
      },
      {
        h2: "Modelo propuesto y compatibilidad",
        parrafos: [
          "No hay un modelo de linterna de bombero publicado en este catálogo, así que proponemos la pieza según tu operación y combinamos carcasa de aluminio, casco, guante, prenda y radio reales. Elige funda si debe viajar en cinturón; pide clip si la ubicación no choca con ERA, máscara o herramienta al agacharte.",
          "Antes de aceptar la propuesta, probamos lente, interruptor, carcasa de aluminio y retención durante escalera, arrastre y revisión de gabinete. Si usa batería recargable, verifica cargador, base y puerto; si usa reemplazable, pide el formato exacto y no mezcles unidades de condición distinta en guardia.",
        ],
      },
      {
        h2: "Errores en órdenes de compra",
        parrafos: [
          "Vemos órdenes que piden una linterna de aluminio y omiten funda, clip o anillo. Para evitarlo, escribe lente, interruptor, porte y energía en cada renglón; si llevará batería recargable, agrega cargador y base, no los supongas incluidos por el nombre comercial.",
          "Te pedimos no elegir por alcance sin probar el agarre con guante y prenda. Escribe prueba de sacar, encender, dirigir y devolver a funda; si el interruptor se activa al flexionar o el clip de aluminio choca con radio, pide otra configuración antes de autorizar la compra.",
        ],
      },
      {
        h2: "Inspección, limpieza y retiro",
        parrafos: [
          "Antes de guardia revisamos carcasa de aluminio, lente, aro, interruptor, contactos, tapa, puerto de carga y funda. Enciende la linterna con guante y verifica retención; si aparece parpadeo, lente opaco, corrosión o tapa floja, retírala y registra modelo, energía y componente afectado.",
          "Después de intervención, limpiamos lente y carcasa de aluminio con el método del fabricante, revisamos clip, anillo o costuras de funda y probamos el interruptor. Aparta la pieza con cuerpo fisurado, puerto flojo, cargador incompatible o funda rota; no tapes una junta con cinta ni guardes batería con metal.",
        ],
      },
    ],
    resumen: [
      "La linterna de bombero aporta dirección manual de luz con lente, interruptor, carcasa de aluminio y funda o clip. Como no hay modelo publicado, la proponemos según el uso y la probamos con guante, prenda, radio y casco de tu brigada.",
      "Cotizamos la pieza con alimentación, porte, cargador o reserva y prueba de recuperación. Escríbenos por WhatsApp qué maniobra cubres, dónde la llevarás y si requieres cuerpo de aluminio para definir la configuración antes de pedirla al proveedor.",
    ],
  },
  {
    slug: "goggles",
    nombre: "Goggles para bombero",
    lead: "Los goggles ESS Striketeam XTO combinan lente de policarbonato de 2.4–2.6 mm, Speed-Clip y ventilación perimetral para conservar la visión con casco forestal o de rescate.",
    referencia: "Según modelo",
    errores: [
      "No definir repuestos de lente",
      "Ignorar ventilación",
      "Usarlos como máscara de ERA",
    ],
    faq: [
      {
        q: "¿Sustituyen una máscara de ERA?",
        a: "No. Los goggles son protección ocular; la máscara de un equipo de respiración autónoma tiene otra interfaz y función dentro de una atmósfera que exige respiración protegida.",
      },
    ],
    bloques: [
      {
        h2: "Goggles para bombero forestal",
        parrafos: [
          "Cotizamos goggles ESS Striketeam XTO para combate forestal y rescate cuando tu brigada necesita leer terreno y herramienta frente a partículas. Elige este modelo si requiere lente intercambiable de policarbonato de 2.4–2.6 mm y Speed-Clip; si la atmósfera requiere ERA, pide la máscara respiratoria correspondiente porque el goggle no la sustituye.",
          "La Striketeam XTO usa acolchado facial de celda cerrada y correa envolvente de una pieza con velcro. En la prueba, coloca casco forestal o de rescate, ajusta correa y mira arriba, abajo y a los lados; si el marco se desplaza o el clip no retiene, cotizamos otra interfaz y no declaramos compatibilidad universal.",
        ],
      },
      {
        h2: "Cotización de goggles ESS",
        parrafos: [
          "En la cotización anotamos ESS Striketeam XTO, código BLL1006, kit #740-0283, lente transparente y dos cubiertas desprendibles. Pide por separado lentes, correa, Speed-Clip y funda si necesitas reserva; así eliges el repuesto compatible con el policarbonato de 2.4–2.6 mm y no una mica de apariencia parecida.",
          "Escribimos NFPA 1500-2007, ANSI Z87.1-2010, CE EN 166 B y OSHA como referencias declaradas por el fabricante. Si el comprador elige anteojos graduados, prueba esa interfaz con ClearZone FlowCoat; si reduce campo visual o presiona el lente, deja fuera esa configuración antes de liberar la orden.",
        ],
        lista: [
          "Marca y modelo: ESS Striketeam XTO",
          "Código: BLL1006 y kit #740-0283",
          "Lente: policarbonato de 2.4–2.6 mm",
          "Tratamiento: ClearZone FlowCoat",
          "Montaje: Speed-Clip para casco forestal o rescate",
          "Contenido: lente transparente y dos cubiertas",
          "Estatus: referencias NFPA, ANSI, CE y OSHA declaradas",
        ],
      },
      {
        h2: "Striketeam XTO y casco",
        parrafos: [
          "Surtimos ESS Striketeam XTO con Speed-Clip para casco forestal o de rescate, ventilación y filtración perimetral contra humo y partículas declaradas. Elige el kit BLL1006 si necesitas lente transparente y dos cubiertas desprendibles; si tu casco desplaza el marco, pide prueba física antes de combinarlo con visor o herramienta.",
          "El lente intercambiable de policarbonato de 2.4–2.6 mm declara ClearZone FlowCoat antiempaño y antirrayas, además de protección UVA/UVB. Durante la prueba de uso, camina, agáchate y gira la cabeza con casco y anteojos graduados si aplican; aceptamos el lote cuando correa, clip y campo visual conservan posición sin levantar el goggle.",
        ],
      },
      {
        h2: "Errores en pliegos de goggles",
        parrafos: [
          "Vemos pliegos que solicitan goggles sin lente, clip ni casco de referencia. Para evitarlo, escribe ESS Striketeam XTO, BLL1006, Speed-Clip y policarbonato de 2.4–2.6 mm; si la brigada usa casco de rescate, pide instalar el clip sobre muestra y no compres solo por la frase de adaptación.",
          "También aparecen órdenes que presentan ANSI Z87.1-2010 o CE EN 166 B como certificación de ERA. Escribe estatus declarado, lente transparente y dos cubiertas del kit #740-0283; si hay empañamiento repetido o campo visual reducido con graduación, pide ajuste, ventilación o combinación distinta antes de liberar el lote.",
        ],
      },
      {
        h2: "Inspección y retiro de goggles",
        parrafos: [
          "Antes de guardia revisamos lente de policarbonato de 2.4–2.6 mm, marco, espuma de celda cerrada, ventilación perimetral, velcro y Speed-Clip. Prueba la correa con casco forestal o de rescate; si hay fisura, opacidad, clip flojo o lente rayado, aparta el conjunto y registra BLL1006 para pedir la pieza compatible.",
          "Después de una intervención, guarda Striketeam XTO con lente transparente y cubiertas fuera de arena y herrajes, y limpia ClearZone FlowCoat con el método del fabricante. Retira el goggle BLL1006 cuando la correa pierda tensión, el marco deforme o el lente distorsione; no uses abrasivos, solventes, cinta o una mica no identificada para recuperar el equipo.",
        ],
      },
    ],
    resumen: [
      "Los goggles ESS Striketeam XTO aportan lente intercambiable de policarbonato de 2.4–2.6 mm, Speed-Clip y ventilación perimetral para casco forestal o de rescate. Surtimos BLL1006 con lente transparente y dos cubiertas desprendibles.",
      "Cotizamos el kit #740-0283 con lente, clip, correa y prueba sobre tu casco. Escríbenos por WhatsApp el modelo de casco y si usas graduación para validar campo visual, ClearZone FlowCoat y retención antes de ordenar.",
    ],
  },
  {
    slug: "camara-termica",
    nombre: "Cámara térmica",
    lead: "La cámara térmica convierte contrastes de radiación infrarroja en imagen de pantalla para búsqueda y reconocimiento; la cotizamos con energía, porte y entrenamiento para que tu brigada la interprete dentro de la escena.",
    referencia: "Según modelo",
    errores: [
      "Comprar sin entrenamiento",
      "Omitir carga",
      "Tomar la imagen como diagnóstico total",
      "Confundir contraste térmico con diagnóstico concluyente",
      "Pedir una pantalla sin baterías intercambiables o base",
      "Dejar la capacitación fuera de la recepción",
    ],
    faq: [
      {
        q: "¿Ve a través de paredes?",
        a: "No debe describirse así. Muestra diferencias térmicas de superficies observadas; materiales, vapor, reflejos y otros factores exigen confirmar la lectura con la evaluación de escena.",
      },
      {
        q: "¿La cámara confirma que no hay fuego oculto?",
        a: "No por sí sola. Muestra información térmica de las superficies que observa y se interpreta con la inspección, el procedimiento y el contexto del inmueble. Materiales, agua o reflejos pueden cambiar la lectura aparente.",
      },
      {
        q: "¿Qué se practica antes de asignarla?",
        a: "Escaneo, enfoque de la observación, comunicación por radio, cambio de batería y lectura de objetos conocidos. El objetivo es reconocer tanto la información útil como los límites que pueden llevar a una interpretación incorrecta.",
      },
      {
        q: "¿Qué debe incluir un cargador en la requisición?",
        a: "Su compatibilidad con el modelo, cantidad, base o adaptador y ubicación de uso. Una cámara para unidad móvil puede requerir un esquema de carga distinto del equipo que se conserva en estación.",
      },
      {
        q: "¿Por qué no se limpia como una cámara fotográfica?",
        a: "La lente infrarroja puede tener materiales y recubrimientos distintos. Solo se usa el método indicado por el fabricante para evitar rayas, residuos o daño que afecte la imagen térmica.",
      },
    ],
    bloques: [
      {
        h2: "Cámara térmica para búsqueda y reconocimiento",
        parrafos: [
          "Cotizamos cámara térmica para búsqueda, reconocimiento interior y revisión posterior a extinción cuando tu brigada necesita observar contrastes de radiación infrarroja en una pantalla. No hay un modelo Romak Fire publicado para esta categoría; elige una cámara con sensor infrarrojo, lente, controles, batería, carcasa y correa si el personal puede entrenar su lectura.",
          "Te pedimos probar la cámara frente a objetos de contraste conocido y comunicar el hallazgo por radio antes de elegir configuración. Sin un modelo Romak Fire publicado, vapor, agua, metales reflectivos, geometría y materiales cambian la lectura de superficies; pídela con entrenamiento y método de escena.",
        ],
      },
      {
        h2: "Cotización de cámara térmica",
        parrafos: [
          "En nuestra cotización anotamos cámara, sensor infrarrojo, lente, pantalla, batería, cargador, base, funda y correa como partidas identificadas. Sin modelo Romak Fire publicado, elige batería intercambiable si necesitas relevo durante guardia y pide base para estación y otra para vehículo.",
          "También dejamos escrito el modelo, sus controles y cualquier captura de imagen, video, modos de ganancia o temperatura aparente que el fabricante publique. Romak Fire no publica aquí una cámara térmica, así que proponemos la configuración según tu operación y pedimos documentación técnica. Romak Fire no aporta valores de resolución.",
        ],
        lista: [
          "Unidad: cámara con sensor y lente infrarroja",
          "Pantalla y controles: según modelo ofertado",
          "Energía: batería, cargador y base identificados",
          "Porte: funda y correa según operación",
          "Ubicación: estación o vehículo por separado",
          "Documento: especificación del fabricante",
        ],
      },
      {
        h2: "Configuración y compatibilidad térmica",
        parrafos: [
          "No hay un modelo de cámara térmica publicado en este catálogo ni una configuración Romak Fire, por eso proponemos el modelo conforme a búsqueda, reconocimiento o revisión posterior a extinción. Pídelo con radio, ERA, guantes y traje; si el porte interfiere con máscara, arnés o herramienta, cambiamos funda o correa. Romak Fire no declara compatibilidad.",
          "La cámara se combina con el conjunto real, no con una promesa de compatibilidad universal ni con una ficha Romak Fire ajena a esta categoría. En la prueba de uso, el operador enciende pantalla y controles con guantes y protege la lente infrarroja durante traslado.",
        ],
      },
      {
        h2: "Errores en pliegos de cámara térmica",
        parrafos: [
          "Vemos pliegos que piden solo pantalla y omiten batería, cargador, base, funda y correa. Romak Fire no publica un modelo térmico aquí; escribe cámara con sensor infrarrojo, energía y porte, y pide bases diferenciadas para estación y vehículo. Romak Fire identifica el dato verificable del catálogo.",
          "También recibimos órdenes que nombran resolución, rango, frecuencia o autonomía sin identificar modelo ni documento. Como Romak Fire no publica la cámara en este catálogo, escribe el modelo ofertado, prueba con objetos de contraste conocido y capacitación de lectura. Romak Fire queda identificado en la cotización.",
        ],
      },
      {
        h2: "Inspección y retiro de cámara térmica",
        parrafos: [
          "Antes de guardia revisamos lente infrarroja, tapa, pantalla, carcasa, botones, puerta de batería, contactos, correa y condición de carga. Sin ficha Romak Fire de cámara térmica, enciende la cámara y confirma imagen y ciclo de calibración; si fallan, retírala y registra condición. Romak Fire queda identificado.",
          "Después de una intervención, protegemos la lente y limpiamos sus recubrimientos solo con el método del fabricante. No aplicamos una instrucción Romak Fire sin modelo publicado; aparta la cámara con lente rayada, pantalla ilegible, correa dañada o comportamiento irregular. Romak Fire no declara limpieza.",
        ],
      },
    ],
    resumen: [
      "La cámara térmica apoya búsqueda y reconocimiento al mostrar contrastes de radiación infrarroja en pantalla. Romak Fire no publica modelo; proponemos configuración con sensor, lente, energía y porte según tu maniobra.",
      "Cotizamos cámara, batería, cargador, base, funda, correa y capacitación de lectura por partida. Romak Fire no aporta cámara publicada; escríbenos por WhatsApp para definir carga y prueba de uso.",
    ],
  },
  {
    slug: "dispositivo-pass",
    nombre: "Dispositivo PASS",
    lead: "El dispositivo PASS emite una alarma personal para una respuesta institucional; lo cotizamos como integrado o independiente con NFPA 1970, antes NFPA 1982, declarada según el modelo.",
    referencia: "NFPA 1970 (antes NFPA 1982)",
    errores: [
      "Comprar sin respuesta ensayada",
      "No probar alarma",
      "Atribuir certificación no declarada",
      "Elegir PASS independiente sin definir dónde se fija",
      "No ensayar la señal dentro del ruido operativo",
      "Ocultar el botón manual bajo arnés o radio",
    ],
    faq: [
      {
        q: "¿Qué ocurre cuando suena?",
        a: "La corporación debe ejecutar su procedimiento: reconocer señal, comunicar, ubicar, verificar y escalar la respuesta. El dispositivo no define por sí mismo la táctica ni reemplaza supervisión.",
      },
      {
        q: "¿El PASS reemplaza el procedimiento de bombero caído?",
        a: "No. Es un medio de alerta dentro de ese procedimiento. La corporación debe definir y entrenar reconocimiento, comunicación, búsqueda, verificación y escalamiento; la alarma por sí sola no coordina la respuesta.",
      },
      {
        q: "¿Se activa solo por inmovilidad?",
        a: "Depende del modelo y de su configuración. Además de la función de inmovilidad, los equipos pueden tener activación manual. La forma correcta de operar y reiniciar se confirma en el manual del fabricante.",
      },
      {
        q: "¿Cómo se compra para un ERA?",
        a: "Con marca y modelo del ERA, configuración integrada requerida, cantidad por conjunto, batería o cargador y declaración del fabricante. No se asume que un PASS de otra plataforma se conectará o montará igual.",
      },
      {
        q: "¿Qué hace que una alarma no sea aceptable?",
        a: "Que no active como indica el equipo, quede obstruida, tenga energía insuficiente, presente controles inaccesibles o muestre daño en carcasa y fijación. Se aparta para evaluación, no se corrige con cinta o ajustes improvisados.",
      },
    ],
    bloques: [
      {
        h2: "Dispositivo PASS para respuesta de emergencia",
        parrafos: [
          "Cotizamos dispositivo PASS para brigadas que deben reconocer una alarma personal dentro de su respuesta de bombero caído. NFPA 1970 declarada. Elige PASS integrado si corresponde al ERA exacto de tu conjunto; pide uno independiente con soporte y ubicación corporal si no depende del ERA, porque carcasa, sensor de inmovilidad, alarma audible, controles, batería y fijación cambian con el modelo.",
          "Antes de comprar, colocamos PASS, prenda, radio, arnés, máscara y ERA sobre el usuario. NFPA 1970 guía la referencia declarada. Si el botón manual queda cubierto o la salida de alarma se apoya contra una superficie, pedimos otra interfaz o punto de fijación; si la cuadrilla no ensaya reconocer, comunicar, ubicar, verificar y escalar, integra capacitación a la partida en lugar de recibir solo la alarma.",
        ],
      },
      {
        h2: "Cotización de dispositivo PASS",
        parrafos: [
          "En nuestra cotización escribimos fabricante, modelo, modalidad integrada o independiente, interfaz de montaje, batería o cargador, cantidad por usuario o conjunto de ERA, refacciones y capacitación. NFPA 1970 se conserva como referencia. Elige integración al ERA si el fabricante la declara para esa plataforma; pide soporte independiente cuando la fijación se prueba con traje, arnés y radio reales, no solo en una muestra vacía.",
          "Conservamos NFPA 1970, antes NFPA 1982, como referencia declarada y pedimos la declaración documental del modelo ofertado. Si el proveedor no declara certificación, escribimos su estatus declarado y no certificado; además anotamos herramientas de prueba y energía por separado para que la entrega no deje una alarma sin medios para mantenerse disponible.",
        ],
        lista: [
          "Modalidad: PASS integrado o independiente",
          "Interfaz: ERA, soporte y ubicación corporal",
          "Energía: batería o cargador del modelo",
          "Cantidad: por usuario o conjunto de ERA",
          "Referencia: NFPA 1970 antes NFPA 1982 declarada",
          "Recepción: prueba, capacitación y documentación",
        ],
      },
      {
        h2: "PASS y compatibilidad con ERA",
        parrafos: [
          "No hay un modelo PASS publicado en este catálogo, así que proponemos el equipo según tu operación y el ERA que realmente usa la corporación. NFPA 1970 queda declarada; pídelo con traje, casco, máscara, radio y arnés para revisar accesibilidad y conservar el control manual.",
          "La prueba de uso se realiza con el conjunto puesto: activamos la función manual y la condición de inmovilidad conforme al manual, escuchamos la alarma y localizamos su procedencia. Si radio, tirante o herramienta cubren altavoz o botón, no aceptamos ese montaje; pedimos soporte distinto o modelo compatible antes de incorporar el PASS al conjunto de protección. NFPA 1970 queda declarada. NFPA 1970 permanece declarada.",
        ],
      },
      {
        h2: "Errores en pliegos de PASS",
        parrafos: [
          "Vemos pliegos que solicitan PASS sin aclarar si es integrado o independiente ni nombrar el ERA. Para evitarlo, escribe modelo del ERA, modalidad, soporte, ubicación, batería y cargador; si será independiente, pide prueba con traje y arnés para que una fijación parecida no llegue a bloquear el control. NFPA 1970 exige identificar el modelo declarado.",
          "También aparecen órdenes que copian NFPA 1970 como si certificara cualquier alarma. Escribe referencia declarada, documento del fabricante y prueba de reconocimiento dentro del ruido operativo; si no incluye capacitación para comunicar, buscar, verificar y escalar, te pedimos agregarla antes de liberar la compra. NFPA 1970 queda como referencia declarada.",
        ],
      },
      {
        h2: "Inspección y retiro de PASS",
        parrafos: [
          "Antes de guardia revisamos carcasa, fijación, botones, indicadores, salida de alarma, sensor según la prueba autorizada y estado de energía. NFPA 1970 es la referencia declarada. Ponte traje, arnés y ERA, activa la prueba indicada por el manual y confirma que control y señal permanezcan accesibles; si hay alarma débil, indicador anómalo o batería sin retención, retira la unidad y registra la condición. NFPA 1970 no sustituye la inspección.",
          "Después de golpe, inmersión o reparación aplicamos el procedimiento del fabricante antes de devolver el PASS a servicio. Aparta una unidad con carcasa fisurada, fijación dañada, botón inaccesible o respuesta distinta de la indicada; la bitácora conserva unidad, fecha de prueba, energía y causa de retiro, sin abrir sellos ni intentar calibraciones ajenas al fabricante. NFPA 1970 se conserva en el registro.",
        ],
      },
    ],
    resumen: [
      "El dispositivo PASS alerta sobre una posible emergencia personal mediante carcasa, sensor, alarma audible, controles, energía y fijación. NFPA 1970 queda declarada; proponemos integrado o independiente para el ERA de tu brigada.",
      "Cotizamos modalidad, soporte, batería, cargador, cantidad, capacitación y NFPA 1970, antes NFPA 1982, como referencia declarada. Mándanos WhatsApp con el modelo de ERA, radio y arnés para revisar dónde queda audible y accesible.",
    ],
  },
  {
    slug: "maleta-porta-equipo",
    nombre: "Maleta porta-equipo",
    lead: "La maleta porta-equipo Romak Fire BPS1005 traslada casco, botas, prendas y accesorios en poliéster repelente al agua de 25 × 13 × 14 pulgadas, validada con la carga real de tu brigada.",
    referencia: "No aplica",
    errores: [
      "Comprar solo por medidas",
      "Mezclar equipo contaminado",
      "Ignorar costuras y cierres",
      "Tomar «kit completo» como medida de capacidad comprobada",
      "Pedir compartimientos sin definir qué equipo separan",
      "Estibar maletas sin verificar el espacio de la unidad",
    ],
    faq: [
      {
        q: "¿La maleta descontamina?",
        a: "No. Transporta y organiza; las piezas contaminadas se manejan según el procedimiento aplicable y no deben mezclarse con equipo listo solo por caber en el mismo compartimiento.",
      },
      {
        q: "¿Qué se usa como muestra para la prueba?",
        a: "El casco, botas, prendas y accesorios que realmente se asignarán, idealmente en una talla representativa. Las fotografías o una lista de piezas no muestran los volúmenes y puntos de presión que aparecen al cerrar.",
      },
      {
        q: "¿Una bolsa interior separa equipo contaminado?",
        a: "No por sí misma. La clasificación, limpieza y resguardo de piezas contaminadas siguen el procedimiento de la organización. Un bolsillo solo organiza los artículos que se haya definido colocar en él.",
      },
      {
        q: "¿Qué se recibe además de la maleta?",
        a: "Modelo, medidas, asas, cierres, bolsas y cualquier rueda o accesorio declarado. La recepción carga el conjunto muestra, levanta la maleta y verifica que pueda guardarse en el espacio previsto.",
      },
      {
        q: "¿Cuándo se retira una maleta?",
        a: "Cuando costuras, asas, base o cierres ya no soportan la carga prevista, o cuando su condición impide un resguardo adecuado. No se conserva en servicio mediante amarras que cambian el modo de transporte.",
      },
    ],
    bloques: [
      {
        h2: "Maleta porta-equipo para traslado",
        parrafos: [
          "Cotizamos la maleta porta-equipo Romak Fire BPS1005 cuando tu brigada debe trasladar casco, botas, chaquetón, pantalón, tirantes, guantes y monja entre almacén, vehículo y punto de entrega. Elige BPS1005 si el conjunto cabe en sus 25 × 13 × 14 pulgadas; si tus tallas o accesorios cambian el volumen, pide prueba de carga antes de decidir por medidas externas.",
          "La BPS1005 usa poliéster de alta resistencia repelente al agua, asas de polipropileno de 1 ½ pulgadas y dos bolsas con zipper. Pídela para organizar el conjunto identificado, no como impermeabilidad total ni descontaminación; si debes separar piezas húmedas o contaminadas, define ese procedimiento por fuera de las bolsas y no mezcles equipo listo solo porque cabe en el mismo contenedor.",
        ],
      },
      {
        h2: "Cotización de maleta porta-equipo",
        parrafos: [
          "En nuestra cotización escribimos Romak Fire BPS1005 por pieza, poliéster de alta resistencia repelente al agua, 25 × 13 × 14 pulgadas, asas de polipropileno de 1 ½ pulgadas y dos bolsas con zipper. Elige cantidad por persona, reserva o unidad móvil según tu operación; si una maleta va a vehículo, pide comprobar además el espacio de estiba.",
          "Anotamos como contenido declarado chaquetón, pantalón, tirantes, casco, botas, guantes y monja, y definimos qué artículo va en cada bolsa. Romak Fire BPS1005 identifica la partida. Si la compra solicita un «kit completo», pedimos la lista del conjunto institucional y prueba física; así el cierre, las asas y el volumen se comparan contra la carga real en lugar de asumir una capacidad universal.",
        ],
        lista: [
          "Marca y modelo: Romak Fire BPS1005",
          "Material: poliéster repelente al agua",
          "Medidas: 25 × 13 × 14 pulgadas",
          "Asas: polipropileno de 1 ½ pulgadas",
          "Bolsas: dos con zipper",
          "Carga: casco, botas, prendas y accesorios",
          "Estatus: sin norma declarada",
        ],
      },
      {
        h2: "BPS1005 y conjunto de bombero",
        parrafos: [
          "Surtimos Romak Fire BPS1005 para chaquetón, pantalón, tirantes, casco, botas, guantes y monja; la combinamos con la familia de traje que use tu brigada y con su casco real. Elige esta maleta si la prueba permite cerrar sin forzar costuras o zipper; si casco y botas presionan esquinas, pedimos otra configuración de transporte antes de asignarla al conjunto.",
          "En la recepción cargamos una talla representativa, cerramos BPS1005, levantamos por las asas de polipropileno de 1 ½ pulgadas y acomodamos la pieza en vehículo o almacén. Si tiradores, dientes o costuras no trabajan sin presión, apartamos la propuesta; la maleta no recibe la norma del traje o casco que transporta porque BPS1005 no tiene norma declarada. Romak Fire identifica la partida.",
        ],
      },
      {
        h2: "Errores en órdenes de maletas",
        parrafos: [
          "Vemos órdenes que escriben solo medidas y omiten modelo, material, asas, bolsas y cierre. Para evitarlo, pide Romak Fire BPS1005, poliéster repelente al agua, 25 × 13 × 14 pulgadas, asas de 1 ½ pulgadas y dos bolsas con zipper; si falta alguno, no se puede comparar la forma de traslado.",
          "También recibimos pliegos que piden compartimientos sin decir qué equipo separan o trasladan la norma del EPP a la maleta. Escribe chaquetón, pantalón, tirantes, casco, botas, guantes y monja como carga muestra, y especifica sin norma declarada; si la unidad móvil no admite la estiba cargada, pide otra solución antes de liberar la orden. Romak Fire BPS1005 debe quedar escrito.",
        ],
      },
      {
        h2: "Inspección y retiro de BPS1005",
        parrafos: [
          "Antes de guardia revisamos poliéster, base, costuras, uniones de asa, tiradores, dientes, recorrido del zipper y dos bolsas bajo la carga del conjunto. Cierra BPS1005, levántala por sus asas de polipropileno de 1 ½ pulgadas y confirma que no abra costura ni se separen dientes; si hay hilos sueltos, humedad o cierre trabado, retírala y registra condición.",
          "Después de una salida vaciamos la maleta, clasificamos el contenido y la secamos conforme al procedimiento aplicable. Aparta BPS1005 si una costura abre, un asa pierde unión, la base se perfora o el zipper se atora bajo carga; no usamos cordones, cinta o cierre forzado para recuperar una capacidad de transporte que ya no conserva.",
        ],
      },
    ],
    resumen: [
      "La Romak Fire BPS1005 es una maleta de poliéster repelente al agua de 25 × 13 × 14 pulgadas, con asas de polipropileno de 1 ½ pulgadas y dos bolsas con zipper para el conjunto de bombero declarado.",
      "Cotizamos BPS1005 por pieza con carga muestra, estiba y prueba de asas y cierres. Escríbenos por WhatsApp qué casco, botas, prendas y accesorios llevará tu brigada para validar el volumen antes de ordenar.",
    ],
  },
];

const tipos: Tipo[] = textos.map(
  ({ slug, nombre, lead, referencia, bloques, errores, faq, resumen }) => ({
    slug,
    seccion: "accesorios",
    nombre,
    nombreCard: nombre,
    title: `${/bombero/i.test(nombre) ? nombre : `${nombre} para bombero`} | México`,
    description:
      `${nombre}: ${lead.charAt(0).toLowerCase()}${lead.slice(1)} Cotiza con ficha técnica y envío a todo México.`.slice(
        0,
        160,
      ),
    lead,
    imagen: ia(
      slug,
      /bombero/i.test(nombre) ? nombre : `${nombre} para bombero`,
    ),
    bloques,
    especificacion: [
      { campo: "Uso principal", valor: nombre },
      { campo: "Referencia", valor: referencia },
      { campo: "Validación", valor: "Prueba con equipo y maniobra reales" },
    ],
    normas: referencia.includes("NFPA")
      ? [{ norma: referencia, alcance: "Confirma la declaración del modelo." }]
      : undefined,
    errores,
    faq,
    chips: [referencia, "Configuración", "Prueba de uso"],
    resumen: resumen ?? [lead],
  }),
);

const modelos: Modelo[] = [
  {
    id: "streamlight-vantage",
    seccion: "accesorios",
    tipo: "lampara-de-casco",
    marca: "Streamlight",
    fabricante: "Streamlight",
    nombre: "Vantage",
    description:
      "Lámpara de casco Streamlight Vantage: LED C4, giro de 360°, clip para el ala del casco y dos CR123A incluidas. Compatibilidad con tu casco al cotizar.",
    codigoNota: "Código por confirmar al cotizar",
    norma: "Clasificación NFPA 1971",
    estatusNorma: "declarado",
    caracteristicas: [
      "LED C4 y haz de 7,000 candelas",
      "115 lúmenes y alcance de 167 m",
      "Duración de 6 h y luz trasera azul",
      "Aluminio anodizado de grado aeronáutico",
      "Lente de vidrio borofloat de alta temperatura",
      "IPX7: 1 m durante 30 min",
      "Giro de 360° y dos baterías CR123A de 3 V incluidas",
      "Se adapta a casi cualquier casco con ala",
    ],
    resumen: [
      "La Streamlight Vantage es una lámpara de casco con LED C4, 115 lúmenes, giro de 360° y dos CR123A de 3 V. La surtimos para casco con ala cuando tu visor y máscara conservan el haz visible durante búsqueda, escalera o reconocimiento.",
      "Cotizamos Vantage por pieza con soporte, dos CR123A iniciales y reserva del mismo formato; pedimos tu casco, visor y máscara para validar el montaje. Mándanos WhatsApp con esos datos y revisamos los 167 m, seis horas e IPX7 declarados antes de ordenar.",
    ],
    descripcion: [
      "Elige Streamlight Vantage si tu casco con ala requiere luz de manos libres y el haz debe seguir la mirada; para una linterna que apunte fuera de ella cotizamos otra configuración. En la orden escribimos Vantage, LED C4, 115 lúmenes, 7,000 candelas, giro de 360° y dos CR123A de 3 V, para que llegue la lámpara que tu brigada probó y no una pieza parecida.",
      "La Vantage combina aluminio anodizado de grado aeronáutico, lente de vidrio borofloat de alta temperatura, luz trasera azul y cabezal de giro de 360°. En la prueba con guantes montamos soporte, visor y máscara sobre tu casco con ala, encendemos la luz y cambiamos la orientación; si el lente golpea el borde o el cabezal pierde posición, pedimos otra interfaz antes de recibir el lote.",
      "La configuramos con dos baterías de litio CR123A de 3 V y soporte para casco con ala. Pídela junto con visor y máscara si buscas conservar ambas manos libres; si el clip no retiene o el haz queda tapado, combinamos la maniobra con una linterna portátil en lugar de perforar el casco o fijar la Vantage con cinta. Separamos lámpara, soporte, energía inicial y reserva en tu cotización.",
      "Para búsqueda, escalera o reconocimiento probamos los 167 m, seis horas y 7,000 candelas declarados con casco, visor, máscara y guantes. Antes de aceptar el lote, verificamos el interruptor, el giro de 360°, la tapa y la luz trasera azul; si hay parpadeo o el clip se mueve al subir una escalera, apartamos la unidad y registramos el soporte que falló.",
      "Streamlight declara clasificación NFPA 1971 e IPX7 de 1 m durante 30 min; la cotizamos como declaración del modelo, no como certificación. Antes de guardia revisamos lente borofloat, aro, aluminio, contactos y CR123A; después de intervención retiramos la Vantage con corrosión, lente quebrado, humedad o soporte flojo y pedimos evaluación del fabricante antes de devolverla al casco.",
    ],
    faq: [
      {
        q: "¿Qué alcance declara?",
        a: "Streamlight declara 167 m y 7,000 candelas para Vantage. Esa cifra se complementa con la prueba de orientación en el casco, visor y máscara que usa la corporación.",
      },
      {
        q: "¿Qué baterías incluye?",
        a: "Dos baterías de litio CR123A de 3 V. La orden debe distinguir lámpara, soporte y baterías para mantener reserva del formato exacto.",
      },
      {
        q: "¿Qué significa el giro de 360° en Vantage?",
        a: "Permite orientar el cabezal a distintas posiciones sobre el casco. La utilidad real se confirma con visor, máscara y casco con ala, pues una posición disponible puede no resultar útil si rebota en el visor o queda obstruida.",
      },
      {
        q: "¿La declaración IPX7 permite sumergirla durante cualquier limpieza?",
        a: "No. IPX7 es una especificación que Streamlight publica para este modelo; la limpieza, inspección y respuesta después de exposición se realizan conforme a su manual, no mediante inmersiones añadidas por el usuario.",
      },
      {
        q: "¿Qué se registra al aceptar una Vantage?",
        a: "Marca, modelo, casco con ala probado, soporte, orientación del cabezal, baterías CR123A y resultado de la prueba con visor, máscara y guantes. Ese registro permite repetir la configuración al reponer una unidad.",
      },
    ],
    imagen: ia("lampara-de-casco", "Lámpara Streamlight Vantage para casco"),
  },
  {
    id: "ess-striketeam-xto",
    seccion: "accesorios",
    tipo: "goggles",
    marca: "ESS",
    fabricante: "ESS",
    nombre: "Striketeam XTO",
    description:
      "Goggles ESS Striketeam XTO para bombero forestal: Speed-Clip, ventilación perimetral, lente intercambiable y normas declaradas por el fabricante. Cotízalos.",
    codigo: "BLL1006 (kit #740-0283)",
    norma: "NFPA 1500-2007 · ANSI Z87.1-2010 · CE EN 166 B · OSHA",
    estatusNorma: "declarado",
    caracteristicas: [
      "Goggle forestal con acolchado facial de celda cerrada",
      "Correa envolvente de una pieza con velcro",
      "Speed-Clip para cascos forestales y de rescate",
      "Ventilación y filtración perimetral contra humo y partículas",
      "Lentes intercambiables de policarbonato de 2.4–2.6 mm",
      "ClearZone FlowCoat antiempaño y antirrayas",
      "Protección UVA/UVB y admite anteojos graduados",
      "Kit con lente transparente y dos cubiertas desprendibles",
    ],
    resumen: [
      "Los ESS Striketeam XTO son goggles forestales con Speed-Clip, ventilación perimetral y lente intercambiable de policarbonato de 2.4–2.6 mm. Los surtimos para casco forestal o de rescate cuando tu brigada conserva retención, protección ocular y campo visual con la maniobra real.",
      "Cotizamos BLL1006, kit #740-0283, lente transparente, dos cubiertas y repuestos compatibles. Mándanos WhatsApp con casco, graduación y uso previsto; probamos Speed-Clip, ClearZone FlowCoat y la correa antes de pedir el modelo exacto publicado, sin confundirlo con una máscara de ERA.",
    ],
    descripcion: [
      "Elige ESS Striketeam XTO para casco forestal o de rescate si necesitas goggle con Speed-Clip; para atmósfera que exige ERA cotizamos la máscara respiratoria correspondiente. En la orden escribimos BLL1006, kit #740-0283, lente transparente y dos cubiertas desprendibles, para que tu brigada reciba lente, clip y contenido identificados, no solo goggles sin interfaz definida.",
      "El modelo lleva acolchado facial de celda cerrada, correa envolvente de una pieza con velcro, ventilación y filtración perimetral, además de lente de policarbonato de 2.4–2.6 mm con ClearZone FlowCoat. Durante la prueba montamos el Speed-Clip en tu casco, ajustamos correa y caminamos, miramos arriba y abajo; si el marco se desplaza, hay presión con graduación o aparece empañamiento, pedimos otra configuración.",
      "Surtimos Striketeam XTO con Speed-Clip para casco forestal o de rescate, lente intercambiable, correa y cubiertas compatibles. Pídelo con anteojos graduados si los usa tu personal y prueba campo visual, visor y herramienta; si la correa o el clip estorban otro accesorio, dejamos fuera esa combinación en vez de asumir compatibilidad universal. La protección UVA/UVB queda como característica declarada de ESS.",
      "Para trabajo forestal y rescate abrimos el kit BLL1006 #740-0283 antes de aceptar un lote y contamos goggle, lente transparente y dos cubiertas desprendibles. Probamos retención al agacharse, ventilación al caminar y visibilidad con casco; si hay lente rayado, espuma degradada, velcro fatigado o Speed-Clip sin retención, apartamos el conjunto y pedimos el repuesto compatible, no una mica de grosor parecido.",
      "ESS declara NFPA 1500-2007, ANSI Z87.1-2010, CE EN 166 B y OSHA; las registramos como referencias declaradas, nunca como certificación de casco o ERA. Antes de guardia revisamos lente, marco, espuma, ventilaciones, velcro y clip; después de intervención retiramos Striketeam XTO con fisura, opacidad, deformación o pérdida de tensión y lo guardamos lejos de arena y herrajes.",
    ],
    faq: [
      {
        q: "¿Cuál es el código?",
        a: "BLL1006; el kit se identifica como #740-0283. Confirma que la propuesta detalle goggle, lente transparente y dos cubiertas desprendibles.",
      },
      {
        q: "¿Acepta lentes graduados?",
        a: "ESS declara que admite anteojos graduados. La persona usuaria debe confirmar la interfaz con su graduación, casco y campo visual de trabajo.",
      },
      {
        q: "¿Para qué sirve el Speed-Clip?",
        a: "ESS lo declara para cascos forestales y de rescate. Su función se acepta instalándolo en el casco que recibirá el kit y comprobando que retenga el goggle sin mover marco, visera ni suspensión durante los movimientos de trabajo.",
      },
      {
        q: "¿Qué incluyen las cubiertas desprendibles?",
        a: "El kit declarado incluye dos cubiertas además del lente transparente. En la recepción se coteja el contenido abierto y se identifica cómo se almacenarán para que no se rayen ni se confundan con lentes de otro modelo.",
      },
      {
        q: "¿Las referencias del modelo aplican a todo el conjunto?",
        a: "No se extienden automáticamente a casco, ERA o accesorios. Se conservan como referencias declaradas de Striketeam XTO y se solicitan en la documentación que acompañe exactamente el modelo y kit cotizados.",
      },
    ],
    imagen: ia("goggles", "Goggles ESS Striketeam XTO"),
  },
  {
    id: "romak-bps1005",
    seccion: "accesorios",
    tipo: "maleta-porta-equipo",
    marca: "Romak Fire",
    fabricante: "Romak Fire",
    nombre: "Maleta porta-equipo",
    description:
      "Maleta porta-equipo Romak Fire BPS1005 en poliéster repelente al agua para trasladar el conjunto del bombero: casco, botas, prendas y accesorios.",
    codigo: "BPS1005",
    material: "Poliéster de alta resistencia repelente al agua",
    estatusNorma: "no-aplica",
    caracteristicas: [
      "Medidas de 25 × 13 × 14 pulgadas",
      "Cabe kit completo: chaquetón, pantalón, tirantes, casco, botas, guantes y monja",
      "Asas de polipropileno de 1 ½ pulgadas",
      "Dos bolsas con zipper",
    ],
    resumen: [
      "La Romak Fire BPS1005 es una maleta de poliéster de alta resistencia repelente al agua, de 25 × 13 × 14 pulgadas, para casco, botas, prendas y accesorios. La surtimos cuando tu conjunto real cierra y se traslada sin forzar costuras ni zipper.",
      "Cotizamos BPS1005 por pieza con asas de polipropileno de 1 ½ pulgadas, dos bolsas con zipper y prueba de carga. Mándanos WhatsApp con casco, botas, prendas y vehículo de tu brigada; revisamos volumen, estiba y cierre antes de solicitar la cantidad requerida.",
    ],
    descripcion: [
      "Elige Romak Fire BPS1005 si tu conjunto de casco, botas, chaquetón, pantalón, tirantes, guantes y monja cabe en 25 × 13 × 14 pulgadas; si tus tallas cambian el volumen, cotizamos otro transporte. En la orden escribimos BPS1005, poliéster de alta resistencia repelente al agua y cantidad por persona, reserva o unidad móvil, para que tu compra describa la pieza completa.",
      "La BPS1005 se construye en poliéster repelente al agua con asas de polipropileno de 1 ½ pulgadas y dos bolsas con zipper. Durante la prueba de carga colocamos tu casco y botas en las esquinas, cerramos sin forzar dientes o costuras y levantamos la maleta; si el cierre se atora o las asas pierden unión, pedimos otra configuración antes de asignarla al traslado.",
      "Surtimos Romak Fire BPS1005 para chaquetón, pantalón, tirantes, casco, botas, guantes y monja, junto con la familia de traje que use tu brigada. Pídela con una carga muestra y define qué artículo va en las dos bolsas con zipper; si hay piezas húmedas o contaminadas, seguimos tu procedimiento fuera de la maleta y no mezclamos equipo listo solo porque entra en el mismo compartimiento.",
      "En almacén, vehículo o punto de entrega probamos Romak Fire BPS1005 de 25 × 13 × 14 pulgadas con una talla representativa: cargamos el conjunto, cerramos el zipper, levantamos por las asas de polipropileno de 1 ½ pulgadas y revisamos estiba. Antes de aceptar el lote, cotejamos dos bolsas, tiradores, dientes, costuras y base; si casco o botas presionan el cierre, apartamos esa opción y cotizamos el volumen que corresponda.",
      "Romak Fire no declara norma para BPS1005; la anotamos como sin norma declarada y nunca trasladamos la del traje o casco. Antes de guardia revisamos poliéster, base, asas, costuras y zipper; después de salida vaciamos, clasificamos y secamos la maleta, y la retiramos con costura abierta, base perforada, asa floja o cierre que separa dientes bajo carga.",
    ],
    faq: [
      {
        q: "¿Qué medidas declara?",
        a: "25 × 13 × 14 pulgadas. Carga físicamente el kit institucional antes de ordenar volumen, porque casco, botas y accesorios cambian el espacio disponible.",
      },
      {
        q: "¿Qué se revisa al recibir?",
        a: "Poliéster, costuras, asas, cierres, dos bolsas y capacidad con el conjunto muestra. La prueba incluye levantar y trasladar la maleta cargada.",
      },
      {
        q: "¿Las medidas aseguran que cabe cualquier conjunto?",
        a: "No. Son medidas declaradas de la BPS1005; casco, botas, tallas y accesorios cambian el volumen útil. La aceptación debe cargar el conjunto real, cerrar sin forzar y comprobar la estiba en el vehículo o almacén.",
      },
      {
        q: "¿Para qué sirven las dos bolsas con zipper?",
        a: "Para organizar artículos que la corporación defina, no para declarar descontaminación. En recepción se revisa que ambas bolsas, sus tiradores y sus cierres funcionen sin presión indebida cuando la maleta lleva la carga prevista.",
      },
      {
        q: "¿Qué condición obliga a retirar la BPS1005?",
        a: "Costura abierta, asa sin unión firme, base perforada o zipper que se atora o separa dientes bajo carga. No se mantiene en uso con amarras que cambian la capacidad de traslado del modelo.",
      },
    ],
    imagen: ia("maleta-porta-equipo", "Maleta Romak Fire BPS1005"),
  },
];

export const data = { seccion, tipos, modelos };
