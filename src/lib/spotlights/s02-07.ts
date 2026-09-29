// Spotlights 02–07. Archivo de datos: una entrada por categoría, en orden.
import { waUrl } from '@lib/wa';
import type { SpotProps } from './types';

export const SPOT_A: SpotProps[] = [
  {
    id: 'spot-cascos',
    numero: '02',
    eyebrow: 'Cascos para bomberos',
    titulo: 'Cascos para bomberos que protegen la cabeza sin estorbar a la máscara ni a la visión',
    parrafos: [
      'Un <strong>casco para bomberos</strong> tiene que hacer tres cosas a la vez: resistir impacto y calor, dejar ver con claridad y convivir con la máscara del ERA y la monja sin empujarlas. Cuando una de las tres falla, el bombero lo resiente en plena maniobra. Por eso elegimos contigo el casco por operación, no por color ni por silueta.',
      'Cotizamos <a href="/cascos/casco-estructural-tradicional/">cascos estructurales tradicionales</a> para ataque interior, <a href="/cascos/casco-estructural-europeo/">cascos estructurales europeos</a> tipo jet con visor integrado, <a href="/cascos/casco-forestal/">cascos forestales</a> ligeros para línea de fuego, <a href="/cascos/casco-rescate-tecnico/">cascos de rescate técnico</a> para maniobras vehiculares y verticales, y <a href="/cascos/casco-brigada-industrial/">cascos para brigada industrial</a> cuando la respuesta se limita a conatos.',
      'Antes de cerrar la compra probamos la combinación completa: suspensión, barbiquejo, visor o goggles, máscara del ERA y cuello del traje. Cada cotización indica la norma de referencia del tipo —NFPA 1970 para el estructural, EN 443:2008 para el europeo, NFPA 1950 para el forestal y NFPA 2500 para rescate— y trabajamos modelos Bullard y Sköld, para que recibas un casco que ajusta con el equipo que tu corporación ya usa.',
    ],
    puntos: [
      { titulo: 'Interfaz revisada', texto: 'Casco, máscara de ERA, capucha y cuello se evalúan como conjunto.' },
      { titulo: 'Operación definida', texto: 'Estructural, forestal, rescate o brigada según el riesgo documentado.' },
      { titulo: 'Configuración escrita', texto: 'Visor, goggles, cubrenuca, color e identificación quedan por partida.' },
      { titulo: 'Documentos por modelo', texto: 'La cotización incluye la declaración técnica disponible para cada casco.' },
    ],
    cta: { label: 'Cascos para bomberos por operación', href: '/cascos/' },
    wa: { label: 'Cotizar cascos para bomberos', href: waUrl('Hola, quiero cotizar cascos para bomberos.') },
    nota: 'Define operación y accesorios antes de cerrar la requisición.',
    imagenes: [
      {
        src: '/images/escenas/spot-cascos.avif', width: 1600, height: 900,
        alt: 'Bombero con casco estructural, visor abatido y máscara del equipo de respiración autónoma durante un incendio',
        caption: 'Casco, visor y máscara de ERA en ataque',
      },
      {
        src: '/images/catalogo/cascos/tipo-casco-estructural-europeo.avif', width: 1000, height: 1250,
        alt: 'Casco estructural europeo tipo jet para bombero con visor integrado',
        caption: 'Casco estructural europeo',
      },
      {
        src: '/images/catalogo/cascos/tipo-casco-forestal.avif', width: 1000, height: 1250,
        alt: 'Casco forestal para bombero con ala completa y goggles',
        caption: 'Casco forestal',
      },
    ],
  },
  {
    id: 'spot-era',
    numero: '03',
    eyebrow: 'Equipo de respiración autónoma',
    titulo: 'Equipo de respiración autónoma para entrar al humo con aire, sello y autonomía confiables',
    parrafos: [
      'El <strong>equipo de respiración autónoma (ERA)</strong> es lo que permite a un bombero trabajar dentro del humo o de una atmósfera peligrosa, y es la pieza donde menos se puede improvisar. Una máscara que no sella con la monja, un regulador incompatible o un cilindro con la autonomía equivocada convierten una maniobra controlada en una salida de emergencia.',
      'Cotizamos <a href="/equipo-de-respiracion-autonoma/era-de-combate/">ERA de combate</a> para ataque interior, <a href="/equipo-de-respiracion-autonoma/era-industrial/">ERA industrial</a> para brigadas de planta, <a href="/equipo-de-respiracion-autonoma/era-de-escape/">ERA de escape</a> para evacuación, <a href="/equipo-de-respiracion-autonoma/cilindros-de-fibra-de-carbono/">cilindros de fibra de carbono</a> para ganar autonomía con menos peso y <a href="/equipo-de-respiracion-autonoma/mascaras-y-reguladores-era/">máscaras y reguladores</a> para reponer o completar equipos en servicio.',
      'Especificamos el conjunto completo —máscara, regulador, arnés y cilindro— y revisamos el sello con el casco y la monja que ya usas. Cada partida indica su referencia declarada: NFPA 1970 para el ERA de combate y NIOSH 42 CFR Parte 84 para el uso industrial. Trabajamos el Sköld Phantöm de 60 minutos y el MSA G1 Industrial, con la documentación por escrito antes de que ordenes.',
    ],
    puntos: [
      { titulo: 'Conjunto respiratorio', texto: 'Máscara, regulador, arnés y cilindro se especifican en la misma partida.' },
      { titulo: 'Sello comprobable', texto: 'La interfaz se revisa con casco, capucha y cuello del traje.' },
      { titulo: 'Autonomía definida', texto: 'El cilindro se selecciona según duración, tarea y procedimiento.' },
      { titulo: 'Componentes declarados', texto: 'Modelo y documentación disponible se detallan antes de ordenar.' },
    ],
    cta: { label: 'ERA por tipo de operación', href: '/equipo-de-respiracion-autonoma/' },
    wa: { label: 'Cotizar equipo de respiración autónoma', href: waUrl('Hola, quiero cotizar equipo de respiración autónoma (ERA).') },
    nota: 'La prueba de ajuste completa la selección del ERA.',
    imagenes: [
      {
        src: '/images/escenas/spot-era.avif', width: 1600, height: 900,
        alt: 'Bombero con equipo de respiración autónoma y cilindro de fibra de carbono avanzando por un pasillo con humo',
        caption: 'ERA en avance por humo',
      },
      {
        src: '/images/catalogo/era/tipo-era-de-combate.avif', width: 1000, height: 1250,
        alt: 'Equipo de respiración autónoma de combate con arnés, cilindro y máscara',
        caption: 'ERA de combate',
      },
      {
        src: '/images/catalogo/era/tipo-mascaras-y-reguladores-era.avif', width: 1000, height: 1250,
        alt: 'Máscara de cara completa y regulador para equipo de respiración autónoma',
        caption: 'Máscara y regulador',
      },
    ],
  },
  {
    id: 'spot-botas',
    numero: '04',
    eyebrow: 'Botas para bomberos',
    titulo: 'Botas para bomberos con tracción, protección y ajuste para todo el turno',
    parrafos: [
      'Las <strong>botas para bomberos</strong> cargan con todo: calor desde el piso, agua, escombro, vidrio y horas de pie. Una bota con la talla o la construcción equivocada se paga en ampollas, resbalones y una unión deficiente con la pantalonera, justo donde el traje necesita cerrar sin huecos.',
      'Cotizamos <a href="/botas/bota-de-hule-estructural/">botas de hule estructurales</a>, la opción clásica para incendio en edificaciones; <a href="/botas/bota-de-piel-estructural/">botas de piel estructurales</a>, con cierre para un ajuste más firme en maniobras largas; <a href="/botas/bota-forestal/">botas forestales</a> para marcha y línea de fuego, y <a href="/botas/bota-de-brigada-industrial/">botas de brigada industrial</a> para la respuesta que define tu procedimiento interno.',
      'Revisamos puntera, entresuela, suela y altura de caña, y definimos la talla por usuario probando con calcetín y pantalonera. La referencia depende del tipo: NFPA 1970 para estructural, NFPA 1950 para forestal y NOM-113-STPS-2009 para brigada industrial. Trabajamos modelos Romak Fire Workman Fire, Croydon Filtrex y Sköld Workman, por par o por partida completa.',
    ],
    puntos: [
      { titulo: 'Talla por usuario', texto: 'La prueba considera ambos pies, calcetín y pantalón de trabajo.' },
      { titulo: 'Planta especificada', texto: 'Suela, puntera y entresuela se revisan por separado.' },
      { titulo: 'Tipo por tarea', texto: 'Estructural, forestal o industrial no son construcciones intercambiables.' },
      { titulo: 'Compra por par', texto: 'Se cotizan pares individuales o la partida completa por usuario.' },
    ],
    cta: { label: 'Botas para bomberos por operación', href: '/botas/' },
    wa: { label: 'Cotizar botas para bomberos', href: waUrl('Hola, quiero cotizar botas para bomberos.') },
    nota: 'Confirma talla, terreno y tipo de pantalón por usuario.',
    imagenes: [
      {
        src: '/images/escenas/spot-botas.avif', width: 1600, height: 900,
        alt: 'Botas estructurales de hule para bombero pisando agua y escombro durante un incendio nocturno',
        caption: 'Botas estructurales en escena',
      },
      {
        src: '/images/catalogo/botas/tipo-bota-de-hule-estructural.avif', width: 1000, height: 1250,
        alt: 'Botas de hule estructurales para bombero con puntera reforzada',
        caption: 'Bota de hule estructural',
      },
      {
        src: '/images/catalogo/botas/tipo-bota-de-piel-estructural.avif', width: 1000, height: 1250,
        alt: 'Botas de piel estructurales para bombero con cierre y suela antiderrapante',
        caption: 'Bota de piel estructural',
      },
    ],
  },
  {
    id: 'spot-guantes',
    numero: '05',
    eyebrow: 'Guantes para bomberos',
    titulo: 'Guantes para bomberos con protección real y la destreza que exige cada maniobra',
    parrafos: [
      'Unos <strong>guantes para bomberos</strong> mal elegidos obligan a quitárselos justo cuando más se necesitan: para abrir un acople, sujetar una herramienta o asegurar a una víctima. Calor, vidrio, metal cortado y vegetación exigen construcciones distintas, y un solo guante no resuelve todas las operaciones de tu equipo.',
      'Cotizamos <a href="/guantes/guante-estructural/">guantes estructurales</a> para combate interior, <a href="/guantes/guante-rescate-extricacion/">guantes de rescate y extricación</a> con destreza para riesgo mecánico, <a href="/guantes/guante-forestal/">guantes forestales</a> para herramienta manual en línea de fuego y <a href="/guantes/guante-brigadista/">guantes para brigadista</a> para la respuesta inicial en industria. Cada tipo cubre un riesgo distinto y no se sustituyen entre sí.',
      'Antes de cotizar definimos la talla por usuario y revisamos palma, costuras, puño y solape con la manga del chaquetón, para que no quede piel expuesta al levantar los brazos. La referencia es NFPA 1970 para estructural y NFPA 1950 para rescate y forestal. Trabajamos Romak Fire Firemax VI, Sköld FPGS y Veridian Fire Pro II, con ficha técnica en cada partida.',
    ],
    puntos: [
      { titulo: 'Destreza probada', texto: 'La selección se valida con la herramienta y maniobra autorizadas.' },
      { titulo: 'Puño compatible', texto: 'Manga y guante deben solaparse sin abrir zonas expuestas.' },
      { titulo: 'Material revisado', texto: 'Palma, costuras y refuerzos corresponden al riesgo previsto.' },
      { titulo: 'Talla documentada', texto: 'Cada usuario recibe la medida solicitada en la cotización.' },
    ],
    cta: { label: 'Guantes para bomberos por tarea', href: '/guantes/' },
    wa: { label: 'Cotizar guantes para bomberos', href: waUrl('Hola, quiero cotizar guantes para bomberos.') },
    nota: 'Define la maniobra antes de elegir material y puño.',
    imagenes: [
      {
        src: '/images/escenas/spot-guantes.avif', width: 1600, height: 900,
        alt: 'Bombero con guantes estructurales de piel controlando el pitón de una línea de ataque',
        caption: 'Guantes estructurales en el pitón',
      },
      {
        src: '/images/catalogo/guantes/tipo-guante-estructural.avif', width: 1000, height: 1250,
        alt: 'Guantes estructurales para bombero de piel con puño de protección',
        caption: 'Guante estructural',
      },
      {
        src: '/images/catalogo/guantes/tipo-guante-rescate-extricacion.avif', width: 1000, height: 1250,
        alt: 'Guantes de rescate y extricación para bombero con refuerzos en nudillos',
        caption: 'Guante de extricación',
      },
    ],
  },
  {
    id: 'spot-capuchas',
    numero: '06',
    eyebrow: 'Monjas y escafandras',
    titulo: 'Monjas y escafandras para bombero que cierran el hueco entre casco, máscara y chaquetón',
    parrafos: [
      'La <strong>monja para bombero</strong>, también llamada escafandra o capucha, protege la zona que queda expuesta entre el casco, la máscara del ERA y el cuello del chaquetón: orejas, cuello y mandíbula. Es una pieza pequeña con un trabajo crítico, y una apertura facial que no coincide con la máscara puede comprometer el sello justo cuando más se necesita.',
      'Cotizamos la <a href="/capuchas/romak-cap1005/">capucha over-face Romak Fire</a>, pensada para coordinar apertura facial y máscara; la <a href="/capuchas/skold-fpen/">escafandra Nomex Sköld</a>; la <a href="/capuchas/majestic-pac-ii/">monja Majestic PAC II</a> de Nomex con doble capa en cabeza y pechera, y las monjas propias de cada familia de traje, como la <a href="/trajes/estructural/monja/">monja antipartículas</a> y la <a href="/trajes/brigadista/monja/">monja de brigada</a>.',
      'Probamos la monja con máscara, casco y cuello del traje puestos, y verificamos que el elástico recupere su forma después del lavado que indica el fabricante. La Majestic PAC II está listada por UL bajo NFPA 1971 edición 2018; en cada cotización recibes por escrito la norma declarada de cada modelo, su apertura, color y número de capas.',
    ],
    puntos: [
      { titulo: 'Apertura revisada', texto: 'La máscara de ERA conserva sello y cobertura al mover la cabeza.' },
      { titulo: 'Capas definidas', texto: 'La configuración se especifica por modelo y operación prevista.' },
      { titulo: 'Lavado indicado', texto: 'El cuidado se alinea con la instrucción publicada del fabricante.' },
      { titulo: 'Solape completo', texto: 'Casco, capucha y cuello del traje se prueban juntos.' },
    ],
    cta: { label: 'Monjas y escafandras por modelo', href: '/capuchas/' },
    wa: { label: 'Cotizar monja para bombero', href: waUrl('Hola, quiero cotizar monja para bombero.') },
    nota: 'La apertura facial se confirma con la máscara en uso.',
    imagenes: [
      {
        src: '/images/escenas/spot-capuchas.avif', width: 1600, height: 900,
        alt: 'Monja de Nomex, máscara de ERA y casco estructural preparados sobre una banca de la estación de bomberos',
        caption: 'Monja, máscara y casco en conjunto',
      },
      {
        src: '/images/catalogo/capuchas/majestic-pac-ii.avif', width: 1000, height: 1250,
        alt: 'Monja para bombero Majestic PAC II de Nomex con doble capa',
        caption: 'Monja Majestic PAC II',
      },
      {
        src: '/images/catalogo/capuchas/romak-cap1005.avif', width: 1000, height: 1250,
        alt: 'Capuchas para bombero Romak Fire en versión blanca y negra',
        caption: 'Capucha Romak Fire',
      },
    ],
  },
  {
    id: 'spot-kits',
    numero: '07',
    eyebrow: 'Kits para bomberos',
    titulo: 'Kits para bomberos: equipo completo y compatible en una sola cotización',
    parrafos: [
      'Un <strong>kit para bombero</strong> resuelve el problema más común al equipar a una corporación o a una brigada: comprar piezas sueltas que después no ajustan entre sí. Traje, casco, monja, guantes y botas se definen juntos, por usuario y por riesgo, para que el conjunto llegue listo para trabajar y sin huecos entre prendas.',
      'Armamos <a href="/kits/kit-estructural/">kits estructurales</a> para incendio en edificaciones, <a href="/kits/kit-brigadista/">kits brigadistas</a> para la respuesta que autoriza tu centro de trabajo y <a href="/kits/kit-forestal/">kits forestales</a> para línea de fuego y operación en campo. Cada kit parte de la <a href="/trajes/">familia de traje</a> correcta y suma los complementos que esa operación exige, ni más ni menos.',
      'La referencia técnica depende del kit: NFPA 1970 para estructural, NFPA 1950 para forestal y NOM-002-STPS-2010 para la dotación de brigadas. El equipo de respiración autónoma se especifica aparte, según atmósfera y tarea. Recibes una sola cotización con tallas, códigos y documentación por componente, sin compra mínima y con factura CFDI 4.0.',
    ],
    puntos: [
      { titulo: 'Partida integral', texto: 'Componentes, tallas y accesorios se concentran en una sola requisición.' },
      { titulo: 'Interfaz en movimiento', texto: 'El conjunto se revisa al subir, arrodillarse y trabajar con brazos arriba.' },
      { titulo: 'Usuario identificado', texto: 'La configuración final se asigna por persona, no por talla única.' },
      { titulo: 'Recepción controlada', texto: 'Se comparan códigos, cierres y documentos contra la partida solicitada.' },
    ],
    cta: { label: 'Kits para bomberos por operación', href: '/kits/' },
    wa: { label: 'Cotizar kit para bombero', href: waUrl('Hola, quiero cotizar kit para bombero.') },
    nota: 'El ERA se define por separado según atmósfera y tarea.',
    imagenes: [
      {
        src: '/images/escenas/spot-kits.avif', width: 1600, height: 900,
        alt: 'Kit completo de bombero listo para la salida: traje estructural, botas, casco, guantes y monja',
        caption: 'Equipo completo listo para la salida',
      },
      {
        src: '/images/catalogo/kits/tipo-kit-estructural.avif', width: 1000, height: 1250,
        alt: 'Kit estructural para bombero con traje, casco, monja, guantes y botas',
        caption: 'Kit estructural',
      },
      {
        src: '/images/catalogo/kits/tipo-kit-forestal.avif', width: 1000, height: 1250,
        alt: 'Kit forestal para bombero con overol, casco, goggles, guantes y botas',
        caption: 'Kit forestal',
      },
    ],
  },
];
