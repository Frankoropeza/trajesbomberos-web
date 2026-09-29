// Spotlights 08–12. Archivo de datos: una entrada por categoría, en orden.
import { waUrl } from '@lib/wa';
import type { SpotProps } from './types';

export const SPOT_B: SpotProps[] = [
  {
    id: 'spot-hazmat',
    numero: '08',
    eyebrow: 'Trajes Hazmat',
    titulo: 'Trajes Hazmat con la barrera química correcta para cada sustancia',
    parrafos: [
      'En una fuga química no hay espacio para adivinar. Los <strong>trajes Hazmat</strong> se eligen por la sustancia, su concentración, la forma de contacto y el tiempo de exposición, no por color ni por apariencia. Un nivel de menos deja al personal expuesto; uno de más lo sobrecarga sin necesidad. Por eso definimos el nivel contigo antes de cotizar, con la tabla de compatibilidad del fabricante.',
      'Cotizamos <a href="/trajes/hazmat/">trajes de protección química</a> por nivel: <a href="/trajes/hazmat/traje-encapsulado-nivel-a/">encapsulados nivel A</a> para vapores que exigen encapsular el ERA, <a href="/trajes/hazmat/traje-nivel-b/">trajes químicos nivel B</a> para salpicadura con ERA exterior, <a href="/trajes/hazmat/traje-nivel-c/">trajes nivel C</a> cuando el contaminante permite respiración purificadora y <a href="/trajes/hazmat/overol-quimico-desechable/">overoles químicos desechables</a> para tareas delimitadas, con <a href="/trajes/hazmat/guantes-quimicos/">guantes químicos</a> y <a href="/trajes/hazmat/botas-quimicas/">botas químicas</a> compatibles.',
      'Un conjunto Hazmat solo protege si sus uniones cierran: traslape de guantes y botas, talla con movilidad suficiente y un procedimiento claro de descontaminación y retiro. La referencia técnica es NFPA 1990. Cuéntanos qué sustancia manejas y qué tarea harán tus brigadistas, y te enviamos una configuración documentada, lista para revisar al recibirla.',
    ],
    puntos: [
      { titulo: 'Te orientamos primero', texto: 'Definimos contigo el nivel A, B o C según la sustancia y la tarea.' },
      { titulo: 'Uniones que cierran', texto: 'Guantes, botas y protección respiratoria se cotizan como un solo conjunto.' },
      { titulo: 'Compatibilidad por escrito', texto: 'Tabla del fabricante y alcance declarado para cada componente.' },
      { titulo: 'Compra a tu medida', texto: 'Traje, guantes y botas por pieza o en conjunto, sin compra mínima.' },
    ],
    cta: { label: 'Trajes Hazmat por nivel', href: '/trajes/hazmat/' },
    wa: { label: 'Cotizar trajes Hazmat', href: waUrl('Hola, quiero cotizar trajes Hazmat.') },
    nota: 'Cotización formal con ficha técnica en día hábil, sin compra mínima y con envío a los 32 estados.',
    imagenes: [
      {
        src: '/images/escenas/spot-hazmat.avif', width: 1600, height: 900,
        alt: 'Brigadistas con trajes químicos y ERA exterior frente a un corredor de descontaminación en planta industrial',
        caption: 'Respuesta química con ERA exterior',
      },
      {
        src: '/images/catalogo/hazmat/tipo-traje-nivel-b.avif', width: 1000, height: 1250,
        alt: 'Traje químico nivel B para respuesta a materiales peligrosos con ERA exterior',
        caption: 'Traje químico nivel B',
      },
      {
        src: '/images/catalogo/hazmat/tipo-traje-nivel-c.avif', width: 1000, height: 1250,
        alt: 'Traje químico nivel C para protección contra salpicadura y partículas',
        caption: 'Traje químico nivel C',
      },
    ],
  },
  {
    id: 'spot-rescate',
    numero: '09',
    eyebrow: 'Equipo de rescate',
    titulo: 'Equipo de rescate para bomberos que funciona como un sistema completo',
    parrafos: [
      'En un rescate vehicular o en altura, lo que falla casi nunca es la pieza más cara: es el conector que no corresponde, la cuerda del diámetro equivocado o el arnés que nadie ajustó. Por eso el <strong>equipo de rescate para bomberos</strong> lo cotizamos como sistema, partiendo de la maniobra que hace tu equipo, de sus anclajes y de su entrenamiento.',
      'Trabajamos <a href="/rescate/">equipo de rescate</a> para extricación y cuerda: <a href="/rescate/herramienta-hidraulica-de-rescate/">herramienta hidráulica de rescate</a> para separar, cortar y empujar; <a href="/rescate/arnes-de-rescate/">arneses de rescate</a>, <a href="/rescate/cuerda-de-rescate/">cuerdas de rescate</a> estáticas y <a href="/rescate/mosquetones-de-rescate/">mosquetones de rescate</a> para armar sistemas de cuerda, y <a href="/rescate/kit-de-rescate-vertical/">kits de rescate vertical</a> integrados para una maniobra definida.',
      'La referencia técnica es NFPA 2500 y la declaración concreta la da cada fabricante por modelo. Contigo definimos tallas, puntos de conexión, diámetro y longitud de cuerda, fuente de energía de la herramienta y compatibilidad con el traje de extricación y los guantes. Recibes cada componente identificado, con su documentación y su criterio de inspección y retiro.',
    ],
    puntos: [
      { titulo: 'Te orientamos primero', texto: 'Partimos de la maniobra: extricación, acceso, descenso o rescate en altura.' },
      { titulo: 'Sistema compatible', texto: 'Arnés, cuerda, conectores y anclajes se revisan juntos.' },
      { titulo: 'Componentes identificados', texto: 'Cada pieza llega con su documentación para inspección y resguardo.' },
      { titulo: 'Compra a tu medida', texto: 'Kit completo o componentes sueltos, con factura CFDI 4.0.' },
    ],
    cta: { label: 'Equipo de rescate por tipo', href: '/rescate/' },
    wa: { label: 'Cotizar equipo de rescate para bomberos', href: waUrl('Hola, quiero cotizar equipo de rescate para bomberos.') },
    nota: 'Cotización formal con ficha técnica en día hábil, sin compra mínima y con envío a los 32 estados.',
    imagenes: [
      {
        src: '/images/escenas/spot-rescate.avif', width: 1600, height: 900,
        alt: 'Rescatista operando una herramienta hidráulica de rescate para abrir la puerta de un vehículo accidentado',
        caption: 'Extricación con herramienta hidráulica',
      },
      {
        src: '/images/catalogo/rescate/tipo-arnes-de-rescate.avif', width: 1000, height: 1250,
        alt: 'Arnés de rescate de cuerpo completo para bomberos en trabajo con cuerda',
        caption: 'Arnés de rescate',
      },
      {
        src: '/images/catalogo/rescate/tipo-kit-de-rescate-vertical.avif', width: 1000, height: 1250,
        alt: 'Kit de rescate vertical con cuerda, poleas, descensores y mosquetones',
        caption: 'Kit de rescate vertical',
      },
    ],
  },
  {
    id: 'spot-herramientas',
    numero: '10',
    eyebrow: 'Herramientas para bomberos',
    titulo: 'Herramientas para bomberos que abren paso en los primeros minutos',
    parrafos: [
      'Los primeros minutos de un servicio se ganan con herramienta: abrir una puerta, ventilar o cortar una línea de fuego. Unas <strong>herramientas para bomberos</strong> con el peso, la longitud o el acero equivocados cansan, se doblan o no entran donde se necesitan. Por eso te ayudamos a elegir cada herramienta de un bombero por la maniobra que va a resolver, no por la foto.',
      'Cotizamos <a href="/herramientas/">herramientas de entrada forzada y forestales</a>: <a href="/herramientas/hacha-de-bombero/">hachas de bombero</a> para corte y golpe, <a href="/herramientas/barra-halligan/">barras Halligan</a> para apalancar y forzar accesos, <a href="/herramientas/gancho-bichero/">ganchos bicheros</a> para abrir plafones y remover material con alcance, <a href="/herramientas/pulaski/">herramientas Pulaski</a> para cavar y cortar en línea forestal y <a href="/herramientas/bomba-de-mochila-forestal/">bombas de mochila forestal</a> para liquidación con agua.',
      'Antes de comprar compara cabeza, acero, mango, longitud y peso, y prueba el agarre con guantes puestos. Las herramientas manuales no tienen una norma común de producto, así que pedimos la especificación del fabricante para cada pieza. Trabajamos la barra Halligan de Romak Fire y cotizamos por pieza o dotación completa, con fundas y soportes para el traslado.',
    ],
    puntos: [
      { titulo: 'Te orientamos primero', texto: 'Te recomendamos la herramienta según la maniobra que vas a resolver.' },
      { titulo: 'Agarre probado', texto: 'Mango, peso y longitud se revisan con guantes puestos.' },
      { titulo: 'Especificación por escrito', texto: 'Material, medidas y peso declarados por el fabricante en cada partida.' },
      { titulo: 'Compra a tu medida', texto: 'Por pieza o dotación completa, con fundas para el traslado.' },
    ],
    cta: { label: 'Herramientas para bomberos por tipo', href: '/herramientas/' },
    wa: { label: 'Cotizar herramientas para bomberos', href: waUrl('Hola, quiero cotizar herramientas para bomberos.') },
    nota: 'Cotización formal con ficha técnica en día hábil, sin compra mínima y con envío a los 32 estados.',
    imagenes: [
      {
        src: '/images/escenas/spot-herramientas.avif', width: 1600, height: 900,
        alt: 'Bombero forzando una puerta metálica con barra Halligan y hacha de bombero en una entrada forzada',
        caption: 'Entrada forzada con Halligan y hacha',
      },
      {
        src: '/images/catalogo/herramientas/tipo-hacha-de-bombero.avif', width: 1000, height: 1250,
        alt: 'Hacha de bombero para corte y golpe en entrada forzada',
        caption: 'Hacha de bombero',
      },
      {
        src: '/images/catalogo/herramientas/tipo-bomba-de-mochila-forestal.avif', width: 1000, height: 1250,
        alt: 'Bomba de mochila forestal para liquidación y apoyo con agua en incendio de vegetación',
        caption: 'Bomba de mochila forestal',
      },
    ],
  },
  {
    id: 'spot-mangueras',
    numero: '11',
    eyebrow: 'Mangueras y accesorios',
    titulo: 'Mangueras contra incendio y conexiones que acoplan a la primera',
    parrafos: [
      'Una <strong>manguera de bombero</strong> solo sirve si conecta. Diámetro, acople, rosca y pitón tienen que coincidir con tu bomba, tus hidrantes y el resto de la línea; si falta un adaptador o la rosca es distinta, el abastecimiento se detiene en plena emergencia. Ese error se descubre en la escena, no en el almacén, y por eso lo revisamos contigo antes de cotizar.',
      'Cotizamos <a href="/mangueras-y-accesorios/">mangueras contra incendio</a> y sus accesorios: <a href="/mangueras-y-accesorios/manguera-de-ataque/">mangueras de ataque</a> de 1 ½ y 2 ½ pulgadas, <a href="/mangueras-y-accesorios/piton-boquilla/">pitones y boquillas</a> para chorro directo o niebla, <a href="/mangueras-y-accesorios/llave-para-hidrante/">llaves para hidrante</a> para operar tomas y conexiones, y <a href="/mangueras-y-accesorios/conexiones-y-adaptadores/">conexiones y adaptadores</a> para resolver cambios de diámetro o de rosca entre equipos.',
      'Documentamos longitud, chaqueta, diámetro y ambos extremos de cada tramo, e identificamos la rosca —NH/NST o NPSH— antes de pedir. Cada modelo se cotiza con la norma NFPA que declare su fabricante. Recibes la línea completa, con juntas y accesorios, lista para probar los acoples con tu propio equipo desde el primer día.',
    ],
    puntos: [
      { titulo: 'Te orientamos primero', texto: 'Diámetro, rosca y pitón se definen según tu bomba y tus hidrantes.' },
      { titulo: 'Acople comprobado', texto: 'Identificamos NH/NST o NPSH antes de pedir, sin adivinar.' },
      { titulo: 'Medidas por escrito', texto: 'Longitud, chaqueta y ambos extremos de cada tramo en la cotización.' },
      { titulo: 'Compra a tu medida', texto: 'Por tramo o línea completa con pitón, juntas y adaptadores.' },
    ],
    cta: { label: 'Mangueras contra incendio por tipo', href: '/mangueras-y-accesorios/' },
    wa: { label: 'Cotizar mangueras contra incendio', href: waUrl('Hola, quiero cotizar mangueras contra incendio.') },
    nota: 'Cotización formal con ficha técnica en día hábil, sin compra mínima y con envío a los 32 estados.',
    imagenes: [
      {
        src: '/images/escenas/spot-mangueras.avif', width: 1600, height: 900,
        alt: 'Línea de manguera contra incendio conectada a un hidrante con acople de bronce y llave para hidrante',
        caption: 'Línea conectada al hidrante',
      },
      {
        src: '/images/catalogo/mangueras/tipo-piton-boquilla.avif', width: 1000, height: 1250,
        alt: 'Pitón para manguera contra incendio con control de chorro directo y niebla',
        caption: 'Pitón de chorro y niebla',
      },
      {
        src: '/images/catalogo/mangueras/tipo-conexiones-y-adaptadores.avif', width: 1000, height: 1250,
        alt: 'Conexiones y adaptadores de bronce para mangueras contra incendio',
        caption: 'Conexiones y adaptadores',
      },
    ],
  },
  {
    id: 'spot-accesorios',
    numero: '12',
    eyebrow: 'Accesorios para bomberos',
    titulo: 'Accesorios para bomberos que suman luz, visión y alerta sin estorbar',
    parrafos: [
      'Una lámpara sin soporte para el casco, unos goggles que chocan con la máscara o una alarma tapada por el arnés dejan de servir justo cuando hacen falta. Los <strong>accesorios para bomberos</strong> tienen que integrarse al equipo que ya usas, no sumarse encima. Por eso los elegimos contigo pensando en el casco, el ERA y la maniobra de tu gente.',
      'Cotizamos <a href="/accesorios/">accesorios para bombero</a> de uso diario: <a href="/accesorios/lampara-de-casco/">lámparas de casco</a> para trabajar con las manos libres, <a href="/accesorios/linterna-de-bombero/">linternas de bombero</a> para el chaquetón, <a href="/accesorios/goggles/">goggles para bombero</a> para protección ocular, <a href="/accesorios/camara-termica/">cámaras térmicas</a> para localizar focos y víctimas en el humo, <a href="/accesorios/dispositivo-pass/">dispositivos PASS</a> de alerta personal y <a href="/accesorios/maleta-porta-equipo/">maletas porta-equipo</a>.',
      'Probamos montaje, controles con guantes, batería y campo visual con tu casco y tu ERA. En alarmas PASS la referencia vigente es NFPA 1970, que absorbió a la NFPA 1982. Trabajamos modelos como la Streamlight Vantage y los goggles ESS Striketeam XTO, con repuestos y cargadores identificados en la misma cotización para que nada se quede sin carga.',
    ],
    puntos: [
      { titulo: 'Te orientamos primero', texto: 'Te decimos qué accesorio suma a tu operación y cuál no hace falta.' },
      { titulo: 'Montaje comprobado', texto: 'Soportes, casco, visor y máscara se prueban juntos.' },
      { titulo: 'Norma por escrito', texto: 'Cada modelo llega con su referencia declarada y ficha técnica.' },
      { titulo: 'Compra a tu medida', texto: 'Por pieza, con repuestos, baterías y cargadores incluidos en la partida.' },
    ],
    cta: { label: 'Accesorios para bomberos por tipo', href: '/accesorios/' },
    wa: { label: 'Cotizar accesorios para bomberos', href: waUrl('Hola, quiero cotizar accesorios para bomberos.') },
    nota: 'Cotización formal con ficha técnica en día hábil, sin compra mínima y con envío a los 32 estados.',
    imagenes: [
      {
        src: '/images/escenas/spot-accesorios.avif', width: 1600, height: 900,
        alt: 'Bombero usando una cámara térmica en un cuarto con humo, con lámpara de casco y dispositivo PASS',
        caption: 'Cámara térmica en humo',
      },
      {
        src: '/images/catalogo/accesorios/tipo-linterna-de-bombero.avif', width: 1000, height: 1250,
        alt: 'Linterna de bombero de ángulo recto para porte en el chaquetón',
        caption: 'Linterna de bombero',
      },
      {
        src: '/images/catalogo/accesorios/tipo-goggles.avif', width: 1000, height: 1250,
        alt: 'Goggles para bombero con banda elástica para uso sobre el casco',
        caption: 'Goggles para bombero',
      },
    ],
  },
];
