// ============================================================
// CONJUNTOS POR FAMILIA — qué complementos concretos (tipos y modelos
// del catálogo) acompañan a cada familia de traje. Alimenta el bloque
// «Completa el conjunto» de las fichas de familia (L3) y de los 14
// modelos de traje: enlaces contextuales hacia cascos, guantes, botas,
// capuchas, ERA, herramientas y accesorios (auditoría 2026-09-29, E2).
// Cada href se valida en build con rutaExiste(); un slug inexistente
// rompe la compilación a propósito.
// ============================================================
import { rutaExiste } from '@lib/rutas';

export interface Complemento {
  href: string;
  nombre: string;
  porQue: string; // una línea concreta: qué resuelve junto a esta familia
}

export interface ConjuntoFamilia {
  duo: [string, string]; // p1 informativo/SEO · p2 comercial (formato dúo del sitio)
  piezas: Complemento[];
}

export const CONJUNTOS: Record<string, ConjuntoFamilia> = {
  estructural: {
    duo: [
      'El traje estructural trabaja en sistema: el casco tiene que asentar sobre la monja sin levantar el cuello del chaquetón, el guante solapa 5 cm con el puño y la bota recibe la pantalonera con el traslape completo al arrodillarse. Un componente fuera de norma o de talla rompe la cobertura aunque el traje esté certificado.',
      'Cotizamos el conjunto completo con una sola ficha técnica por partida: casco, guante, bota, monja y ERA compatibles con el modelo de traje que elijas. Si ya tienes alguna pieza, dinos marca y modelo y te decimos por WhatsApp cuál de las nuestras embona sin cambiar lo que ya funciona.',
    ],
    piezas: [
      { href: '/cascos/casco-estructural-tradicional/', nombre: 'Casco estructural tradicional', porQue: 'Ala ancha y suspensión que asienta sobre la monja sin desplazar la máscara del ERA.' },
      { href: '/cascos/casco-estructural-europeo/', nombre: 'Casco estructural tipo jet', porQue: 'Visor integrado y menor peso para cuerpos que trabajan con máscara de cinco puntos.' },
      { href: '/guantes/guante-estructural/', nombre: 'Guante estructural', porQue: 'Guantelete que solapa con el puño Nomex del chaquetón y conserva agarre en la boquilla.' },
      { href: '/botas/bota-de-hule-estructural/', nombre: 'Bota de hule estructural', porQue: 'Barrera continua con agua y escombro; caña de 13 in que recibe la pantalonera.' },
      { href: '/botas/bota-de-piel-estructural/', nombre: 'Bota de piel estructural', porQue: 'Más movilidad y menos peso para turnos largos; exige secado y cuidado de la piel.' },
      { href: '/capuchas/skold-fpen/', nombre: 'Escafandra Nomex Sköld', porQue: 'Cierra el hueco entre cuello del chaquetón, casco y máscara.' },
      { href: '/equipo-de-respiracion-autonoma/era-de-combate/', nombre: 'ERA de combate', porQue: 'Arnés y máscara probados con el cuello y el DRD del chaquetón.' },
      { href: '/kits/kit-estructural/', nombre: 'Kit estructural completo', porQue: 'Traje, casco, monja, guantes y botas compatibles en una sola cotización.' },
    ],
  },
  brigadista: {
    duo: [
      'La NOM-002-STPS-2010 obliga a dotar a la brigada de equipo conforme al análisis de riesgo, y la NOM-017-STPS-2024 define cómo se asigna. Para un conato, el traje de brigadista se completa con casco de brigada, guante de brigadista, bota con puntera y monja; el ERA entra solo si el procedimiento contempla atmósferas con humo.',
      'Armamos el kit de brigada por elemento, con ficha técnica y CFDI 4.0 por partida, para que el comprador de la empresa entregue el expediente completo al área de seguridad. Escríbenos con el número de brigadistas y el riesgo de la planta y te cotizamos el conjunto en el día hábil.',
    ],
    piezas: [
      { href: '/cascos/casco-brigada-industrial/', nombre: 'Casco para brigada industrial', porQue: 'Protección de cabeza para conato de incendio, compatible con goggles y monja.' },
      { href: '/guantes/guante-brigadista/', nombre: 'Guante para brigadista', porQue: 'Destreza para extintor, hidrante y válvulas con protección térmica de brigada.' },
      { href: '/botas/bota-de-brigada-industrial/', nombre: 'Bota para brigada industrial', porQue: 'Puntera y suela dieléctrica para planta; traslape con la pantalonera de brigada.' },
      { href: '/capuchas/romak-cap1005/', nombre: 'Capucha Romak CAP1005', porQue: 'Cubre cuello y orejas bajo el casco de brigada.' },
      { href: '/equipo-de-respiracion-autonoma/era-industrial/', nombre: 'ERA industrial', porQue: 'Para brigadas que atienden áreas de proceso con atmósferas con humo o vapores.' },
      { href: '/kits/kit-brigadista/', nombre: 'Kit brigadista completo', porQue: 'El conjunto NOM-002 por brigadista en una sola partida.' },
    ],
  },
  forestal: {
    duo: [
      'En línea de fuego el traje forestal se acompaña de casco forestal ventilado con nuquera, guante forestal de piel, bota de caña alta con suela de agarre y las herramientas manuales de la cuadrilla: Pulaski, McLeod, batefuego y bomba de mochila. El peso total del conjunto decide cuánto rinde la brigada en pendiente.',
      'Cotizamos el conjunto forestal por cuadrilla, con herramientas y goggles incluidos si los necesitas, y con envío a cualquier estado de la República. Dinos cuántos elementos y en qué terreno trabajan y te proponemos el kit completo con ficha técnica.',
    ],
    piezas: [
      { href: '/cascos/casco-forestal/', nombre: 'Casco forestal', porQue: 'Ventilado y ligero, con nuquera y compatible con goggles.' },
      { href: '/guantes/guante-forestal/', nombre: 'Guante forestal', porQue: 'Piel con puño corto para herramienta manual y marcha larga.' },
      { href: '/botas/bota-forestal/', nombre: 'Bota forestal', porQue: 'Caña alta, suela de agarre y peso contenido para jornadas en pendiente.' },
      { href: '/accesorios/goggles/', nombre: 'Goggles forestales', porQue: 'Protegen del humo y la ceniza sin empañarse con el esfuerzo.' },
      { href: '/herramientas/pulaski/', nombre: 'Pulaski', porQue: 'Hacha y azadón en una herramienta para abrir brecha.' },
      { href: '/herramientas/mcleod/', nombre: 'McLeod', porQue: 'Rastrillo y azada para limpiar la línea de control.' },
      { href: '/herramientas/batefuego/', nombre: 'Batefuego', porQue: 'Ataque directo a fuego de pasto con brigada ligera.' },
      { href: '/herramientas/bomba-de-mochila-forestal/', nombre: 'Bomba de mochila', porQue: 'Enfriamiento y liquidación donde no llega la manguera.' },
      { href: '/kits/kit-forestal/', nombre: 'Kit forestal completo', porQue: 'Traje, casco, guantes, botas y goggles por elemento.' },
    ],
  },
  aproximacion: {
    duo: [
      'El traje aluminizado de aproximación se usa con ERA de combate, casco estructural bajo la capucha aluminizada, bota de hule que reciba la polaina y guantes aluminizados. La cámara térmica ayuda a leer el calor radiante antes de acercarse; sin ese conjunto el traje no se aprovecha.',
      'Cotizamos el conjunto de aproximación completo para aeropuertos, refinerías y fundiciones, con la ficha técnica del reflejo de calor radiante de cada capa. Escríbenos con la operación y te decimos qué ERA y qué casco caben bajo la capucha.',
    ],
    piezas: [
      { href: '/equipo-de-respiracion-autonoma/era-de-combate/', nombre: 'ERA de combate', porQue: 'El traje de aproximación se opera siempre con aire autónomo; el arnés va bajo la capa aluminizada.' },
      { href: '/cascos/casco-estructural-tradicional/', nombre: 'Casco estructural', porQue: 'Va bajo la capucha aluminizada; se prueba que el visor dorado no lo desplace.' },
      { href: '/botas/bota-de-hule-estructural/', nombre: 'Bota de hule estructural', porQue: 'Recibe la polaina aluminizada y aísla del piso caliente.' },
      { href: '/accesorios/camara-termica/', nombre: 'Cámara térmica', porQue: 'Lee el calor radiante y el punto de fuga antes de la aproximación.' },
    ],
  },
  entrada: {
    duo: [
      'Entrar a la flama exige ERA de combate con cilindro de fibra de carbono de 60 minutos, dispositivo PASS y bota de hule bajo el traje multicapa; el traje de entrada nunca se usa sin aire autónomo ni sin equipo de respaldo fuera de la zona caliente.',
      'Cotizamos el traje de entrada con su ERA, cilindro y PASS en la misma partida y te entregamos la ficha técnica de cada componente para el procedimiento de la planta. Escríbenos con el escenario y el tiempo de exposición previsto.',
    ],
    piezas: [
      { href: '/equipo-de-respiracion-autonoma/era-de-combate/', nombre: 'ERA de combate', porQue: 'Aire autónomo obligatorio dentro del traje de entrada.' },
      { href: '/equipo-de-respiracion-autonoma/cilindros-de-fibra-de-carbono/', nombre: 'Cilindro de fibra de carbono', porQue: '60 minutos nominales con el menor peso sobre el traje multicapa.' },
      { href: '/accesorios/dispositivo-pass/', nombre: 'Dispositivo PASS', porQue: 'Alerta de inmovilidad para el elemento que entra a la flama.' },
      { href: '/botas/bota-de-hule-estructural/', nombre: 'Bota de hule estructural', porQue: 'Va bajo la polaina del traje de entrada; aísla del piso caliente.' },
    ],
  },
  extricacion: {
    duo: [
      'En rescate vehicular el traje de extricación se combina con guante de rescate de alta destreza, casco de rescate técnico con barbiquejo, linterna y la herramienta hidráulica, cuerda, arnés y mosquetones certificados bajo NFPA 2500. El traje protege de vidrio y bordes; la herramienta define el tiempo de liberación.',
      'Cotizamos el equipo de rescate vehicular completo —traje, guantes, casco y herramienta hidráulica— para cuerpos de bomberos y grupos de rescate, con ficha técnica por partida y capacitación de uso si la necesitas. Dinos qué unidad equipas y te armamos la propuesta.',
    ],
    piezas: [
      { href: '/guantes/guante-rescate-extricacion/', nombre: 'Guante de rescate y extricación', porQue: 'Destreza para herramienta hidráulica con protección contra corte.' },
      { href: '/cascos/casco-rescate-tecnico/', nombre: 'Casco de rescate técnico', porQue: 'Ligero, con barbiquejo y sin ala, para trabajar dentro del vehículo.' },
      { href: '/rescate/herramienta-hidraulica-de-rescate/', nombre: 'Herramienta hidráulica de rescate', porQue: 'Separador, cizalla y ram para liberar al ocupante.' },
      { href: '/rescate/arnes-de-rescate/', nombre: 'Arnés de rescate', porQue: 'Clase II o III para rescate en desnivel y maniobras con cuerda.' },
      { href: '/rescate/cuerda-de-rescate/', nombre: 'Cuerda de rescate', porQue: 'Kernmantle estática para anclaje y descenso.' },
      { href: '/rescate/mosquetones-de-rescate/', nombre: 'Mosquetones de rescate', porQue: 'Seguro automático y resistencia marcada para el sistema.' },
      { href: '/accesorios/linterna-de-bombero/', nombre: 'Linterna de bombero', porQue: 'Luz de manos libres para rescate nocturno.' },
    ],
  },
  hazmat: {
    duo: [
      'El traje Hazmat nivel A o B se usa con ERA de combate dentro o fuera del encapsulado, máscara con sello verificado, dispositivo PASS y guantes y botas químicas compatibles con la sustancia. La barrera del traje no sirve si el ERA o los guantes no resisten el mismo agente.',
      'Cotizamos el conjunto Hazmat completo por nivel —traje, ERA, máscara, guantes y botas químicas— con la tabla de compatibilidad química de cada componente. Escríbenos con la sustancia y el nivel de protección que marca tu procedimiento.',
    ],
    piezas: [
      { href: '/equipo-de-respiracion-autonoma/era-de-combate/', nombre: 'ERA de combate', porQue: 'Aire autónomo obligatorio en nivel A y B.' },
      { href: '/equipo-de-respiracion-autonoma/mascaras-y-reguladores-era/', nombre: 'Máscara y regulador del ERA', porQue: 'El sello facial decide la protección dentro del encapsulado.' },
      { href: '/accesorios/dispositivo-pass/', nombre: 'Dispositivo PASS', porQue: 'Alerta de inmovilidad para el elemento dentro de la zona caliente.' },
      { href: '/accesorios/linterna-de-bombero/', nombre: 'Linterna intrínsecamente segura', porQue: 'Iluminación sin fuente de ignición en atmósfera química.' },
    ],
  },
};

for (const [familia, conjunto] of Object.entries(CONJUNTOS)) {
  for (const pieza of conjunto.piezas) {
    if (!rutaExiste(pieza.href)) throw new Error(`[conjuntos] ${familia}: la ruta ${pieza.href} no existe`);
  }
}

export const conjuntoDeFamilia = (slug: string): ConjuntoFamilia | undefined => CONJUNTOS[slug];
