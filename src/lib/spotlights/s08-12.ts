// Spotlights 08–12. Archivo de datos: una entrada por categoría, en orden.
import { waUrl } from '@lib/wa';
import type { SpotProps } from './types';

export const SPOT_B: SpotProps[] = [
  {
    id: 'spot-hazmat',
    numero: '08',
    eyebrow: 'Trajes Hazmat',
    titulo: 'Trajes Hazmat con la barrera química correcta para cada sustancia y nivel de riesgo',
    parrafos: [
      'Los <strong>trajes Hazmat</strong> no se eligen por color ni por apariencia: la barrera correcta depende de la sustancia, su concentración, la vía de contacto y el tiempo de exposición. Equivocarse de nivel deja al personal expuesto o lo sobrecarga sin necesidad. Por eso definimos el nivel contigo antes de cotizar, con la tabla de compatibilidad del fabricante en la mano.',
      'Cotizamos <a href="/trajes/hazmat/traje-encapsulado-nivel-a/">trajes encapsulados nivel A</a> para vapores que exigen encapsular el ERA, <a href="/trajes/hazmat/traje-nivel-b/">trajes químicos nivel B</a> para salpicadura con ERA exterior, <a href="/trajes/hazmat/traje-nivel-c/">trajes nivel C</a> cuando el contaminante permite respiración purificadora y <a href="/trajes/hazmat/overol-quimico-desechable/">overoles químicos desechables</a> para tareas delimitadas, con <a href="/trajes/hazmat/guantes-quimicos/">guantes químicos</a> y <a href="/trajes/hazmat/botas-quimicas/">botas químicas</a> compatibles.',
      'Un conjunto Hazmat funciona solo si sus interfaces cierran: traslape de guantes y botas, talla con movilidad suficiente y un procedimiento de descontaminación y retiro. La referencia técnica es NFPA 1990. Cuéntanos sustancia, concentración y tarea, y te enviamos una configuración documentada por componente, lista para inspeccionar a la recepción.',
    ],
    puntos: [
      { titulo: 'Barrera por agente', texto: 'La compatibilidad se revisa con sustancia, concentración, temperatura y tiempo de exposición.' },
      { titulo: 'Interfaces definidas', texto: 'Guantes, botas y protección respiratoria se cotizan como parte del mismo conjunto.' },
      { titulo: 'Tallas por usuario', texto: 'La talla se confirma con movilidad y traslapes antes de liberar la partida.' },
      { titulo: 'Documentación por modelo', texto: 'Solicita ficha y alcance declarado del fabricante para cada componente ofertado.' },
    ],
    cta: { label: 'Trajes Hazmat por nivel de protección', href: '/trajes/hazmat/' },
    wa: { label: 'Cotizar trajes Hazmat', href: waUrl('Hola, quiero cotizar trajes Hazmat.') },
    nota: 'Comparte sustancia, concentración y tarea para revisar la configuración.',
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
    titulo: 'Equipo de rescate para bomberos: extricación y trabajo con cuerda como un solo sistema',
    parrafos: [
      'El <strong>equipo de rescate para bomberos</strong> se compra como sistema, no como piezas sueltas. En un rescate vehicular o en altura, un conector incompatible, una cuerda del diámetro equivocado o un arnés mal ajustado detienen la maniobra y ponen en riesgo a la víctima y al rescatista. La operación, los anclajes y el entrenamiento de tu equipo definen la compra.',
      'Cotizamos <a href="/rescate/herramienta-hidraulica-de-rescate/">herramienta hidráulica de rescate</a> para separar, cortar y empujar en extricación; <a href="/rescate/arnes-de-rescate/">arneses de rescate</a>, <a href="/rescate/cuerda-de-rescate/">cuerdas de rescate</a> estáticas y <a href="/rescate/mosquetones-de-rescate/">mosquetones de rescate</a> para sistemas de cuerda, y <a href="/rescate/kit-de-rescate-vertical/">kits de rescate vertical</a> integrados para una maniobra definida.',
      'La referencia técnica es NFPA 2500; la declaración concreta la da cada fabricante por modelo. Definimos contigo tallas, puntos de conexión, diámetro y longitud de cuerda, fuente de energía de la herramienta y compatibilidad con el traje de extricación y los guantes. Recibes cada componente identificado, con su documentación y su criterio de inspección y retiro.',
    ],
    puntos: [
      { titulo: 'Maniobra primero', texto: 'La cotización parte de extricación, acceso, descenso o rescate definidos por tu procedimiento.' },
      { titulo: 'Sistema compatible', texto: 'Arnés, cuerda, conectores y anclajes se revisan juntos antes de integrar la partida.' },
      { titulo: 'Trazabilidad prevista', texto: 'Cada componente puede identificarse para inspección, historial, cuarentena y resguardo.' },
      { titulo: 'Compra por componente', texto: 'El kit se desglosa para confirmar tallas, longitudes y configuraciones reales.' },
    ],
    cta: { label: 'Equipo de rescate por maniobra', href: '/rescate/' },
    wa: { label: 'Cotizar equipo de rescate para bomberos', href: waUrl('Hola, quiero cotizar equipo de rescate para bomberos.') },
    nota: 'Describe la maniobra, usuarios y sistema existente para cotizar con criterio.',
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
    titulo: 'Herramientas para bomberos de entrada forzada y combate forestal, elegidas por maniobra',
    parrafos: [
      'Las <strong>herramientas para bomberos</strong> hacen la diferencia en los primeros minutos: abrir una puerta, ventilar o cortar una línea de fuego. Una herramienta con el peso, la longitud o el acero equivocados cansa, se dobla o no entra donde se necesita. Por eso las cotizamos por maniobra y por material, no por silueta.',
      'Cotizamos <a href="/herramientas/hacha-de-bombero/">hachas de bombero</a> para corte y golpe, <a href="/herramientas/barra-halligan/">barras Halligan</a> para apalancar y forzar accesos, <a href="/herramientas/gancho-bichero/">ganchos bicheros</a> para abrir plafones y remover material con alcance, <a href="/herramientas/pulaski/">herramientas Pulaski</a> para cavar y cortar en línea forestal y <a href="/herramientas/bomba-de-mochila-forestal/">bombas de mochila forestal</a> para liquidación y apoyo con agua.',
      'Antes de comprar compara cabeza, acero, mango, longitud y peso, y prueba el agarre con guantes puestos. Las herramientas manuales no tienen una norma común de producto, así que pedimos la especificación del fabricante para cada pieza. Trabajamos la barra Halligan de Romak Fire y cotizamos por pieza o dotación completa, con fundas y soportes para el traslado en la unidad.',
    ],
    puntos: [
      { titulo: 'Función delimitada', texto: 'Cada herramienta se selecciona por corte, palanca, alcance o trabajo forestal autorizado.' },
      { titulo: 'Material declarado', texto: 'Confirma cabeza, mango, longitud y peso cuando el fabricante los publique.' },
      { titulo: 'Transporte protegido', texto: 'Fundas y soportes reducen golpes, enganches y exposición de filos durante traslado.' },
      { titulo: 'Inspección visible', texto: 'Piezas limpias y secas permiten detectar fisuras, holguras, corrosión y deformaciones.' },
    ],
    cta: { label: 'Herramientas para bomberos por maniobra', href: '/herramientas/' },
    wa: { label: 'Cotizar herramientas para bomberos', href: waUrl('Hola, quiero cotizar herramientas para bomberos.') },
    nota: 'Indica maniobra, cantidad y método de transporte para comparar partidas.',
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
    titulo: 'Mangueras contra incendio y accesorios que conectan a la primera con tu equipo',
    parrafos: [
      'Una <strong>manguera contra incendio</strong> solo sirve si conecta: diámetro, acople, rosca y pitón tienen que coincidir con la bomba, el hidrante y el resto de la línea. Un adaptador que falta o una rosca distinta pueden detener el abastecimiento en plena emergencia, y ese error se descubre en la escena, no en el almacén.',
      'Cotizamos <a href="/mangueras-y-accesorios/manguera-de-ataque/">mangueras de ataque</a> de 1 ½ y 2 ½ pulgadas, <a href="/mangueras-y-accesorios/piton-boquilla/">pitones y boquillas</a> para controlar chorro directo o niebla, <a href="/mangueras-y-accesorios/llave-para-hidrante/">llaves para hidrante</a> para operar tomas y conexiones, y <a href="/mangueras-y-accesorios/conexiones-y-adaptadores/">conexiones y adaptadores</a> para resolver cambios de diámetro o de rosca entre equipos. Todo se cotiza por pieza o como línea completa, sin compra mínima.',
      'Para cotizar bien documentamos longitud, chaqueta, diámetro y ambos extremos de cada tramo, e identificamos la rosca —NH/NST o NPSH— antes de pedir. Cada modelo se cotiza con la norma NFPA que declare su fabricante. Recibes la línea completa, con juntas y accesorios, lista para probar los acoples con tu propio equipo.',
    ],
    puntos: [
      { titulo: 'Rosca comprobada', texto: 'NH/NST y NPSH se distinguen mediante identificación y prueba física de acople.' },
      { titulo: 'Línea completa', texto: 'Manguera, pitón, adaptador y fuente se cotizan como un sistema compatible.' },
      { titulo: 'Medidas escritas', texto: 'Diámetro, longitud y ambos extremos evitan recibir una conexión nominalmente parecida.' },
      { titulo: 'Cuidado operativo', texto: 'Secado, juntas, roscas e inventario conservan la condición de cada componente.' },
    ],
    cta: { label: 'Mangueras contra incendio por sistema', href: '/mangueras-y-accesorios/' },
    wa: { label: 'Cotizar mangueras contra incendio', href: waUrl('Hola, quiero cotizar mangueras contra incendio.') },
    nota: 'Comparte diámetro, rosca y conexiones existentes para revisar compatibilidad.',
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
    titulo: 'Accesorios para bomberos que suman visión, luz y alerta sin estorbar al equipo',
    parrafos: [
      'Los <strong>accesorios para bomberos</strong> amplían lo que tu equipo puede ver, iluminar y comunicar dentro de una emergencia. Pero cada uno tiene que integrarse con el conjunto: una lámpara sin soporte para el casco, unos goggles que chocan con la máscara o una alarma cubierta por el arnés dejan de servir justo cuando hacen falta.',
      'Cotizamos <a href="/accesorios/lampara-de-casco/">lámparas de casco</a> para iluminación manos libres, <a href="/accesorios/linterna-de-bombero/">linternas de bombero</a> para porte en el chaquetón, <a href="/accesorios/goggles/">goggles para bombero</a> para protección ocular, <a href="/accesorios/camara-termica/">cámaras térmicas</a> para localizar focos y víctimas en el humo, <a href="/accesorios/dispositivo-pass/">dispositivos PASS</a> de alerta personal y <a href="/accesorios/maleta-porta-equipo/">maletas porta-equipo</a> para transportar el conjunto.',
      'Probamos montaje, controles con guantes, batería y campo visual con tu casco y tu ERA. En alarmas PASS la referencia vigente es NFPA 1970, que absorbió a la NFPA 1982. Trabajamos modelos como la Streamlight Vantage y los goggles ESS Striketeam XTO, con repuestos y cargadores identificados en la misma cotización.',
    ],
    puntos: [
      { titulo: 'Montaje validado', texto: 'Soportes, casco, visor y máscara se prueban juntos antes de asignar el accesorio.' },
      { titulo: 'Energía definida', texto: 'Baterías, cargadores y bases se incluyen por modelo y punto de uso.' },
      { titulo: 'Alerta accesible', texto: 'El PASS se revisa con prenda y arnés para no cubrir alarma o controles.' },
      { titulo: 'Repuestos identificados', texto: 'Lentes, clips y soportes se piden por configuración compatible, no por apariencia.' },
    ],
    cta: { label: 'Accesorios para bomberos por función', href: '/accesorios/' },
    wa: { label: 'Cotizar accesorios para bomberos', href: waUrl('Hola, quiero cotizar accesorios para bomberos.') },
    nota: 'Confirma casco, ERA y maniobra para validar cada interfaz.',
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
