// Spotlights 02–07. Archivo de datos: una entrada por categoría, en orden.
import { waUrl } from '@lib/wa';
import type { SpotProps } from './types';

export const SPOT_A: SpotProps[] = [
  {
    id: 'spot-cascos',
    numero: '02',
    eyebrow: 'Cascos para bomberos',
    titulo: 'Cascos para bomberos que protegen sin pelearse con la máscara ni con la visión',
    parrafos: [
      'Un <strong>casco de bombero</strong> se nota cuando falla: el visor que empuja la máscara del ERA, la suspensión que se afloja al agacharse, el ala que estorba en un pasillo estrecho. Por eso no lo elegimos por color ni por foto. Te preguntamos cómo trabaja tu equipo y te recomendamos el casco que va a sentirse bien en la cabeza durante todo el servicio.',
      'Tenemos <a href="/cascos/">cascos para bomberos</a> para cada operación: <a href="/cascos/casco-estructural-tradicional/">estructurales tradicionales</a> para ataque interior, <a href="/cascos/casco-estructural-europeo/">estructurales europeos</a> tipo jet con visor integrado, <a href="/cascos/casco-forestal/">forestales</a> ligeros para línea de fuego, <a href="/cascos/casco-rescate-tecnico/">de rescate técnico</a> para maniobras vehiculares y en altura, y <a href="/cascos/casco-brigada-industrial/">para brigada industrial</a> cuando la respuesta se limita a conatos.',
      'Antes de cerrar la compra revisamos que casco, monja, máscara y cuello del chaquetón trabajen juntos. Cada cotización indica la norma de referencia del tipo —NFPA 1970, EN 443:2008 para el europeo, NFPA 1950 para el forestal o NFPA 2500 para rescate— e incluye modelos Bullard y Sköld con su ficha, para que tu equipo reciba un casco que ajusta desde el primer día.',
    ],
    puntos: [
      { titulo: 'Te orientamos primero', texto: 'Estructural, europeo, forestal o de rescate: te decimos cuál corresponde a tu operación.' },
      { titulo: 'Ajuste comprobado', texto: 'Casco, máscara del ERA, monja y cuello del chaquetón se prueban como conjunto.' },
      { titulo: 'Norma por escrito', texto: 'Cada casco llega con su referencia declarada y ficha del fabricante.' },
      { titulo: 'Configuración a tu medida', texto: 'Visor, goggles, cubrenuca y color definidos por partida, sin compra mínima.' },
    ],
    cta: { label: 'Cascos para bomberos por tipo', href: '/cascos/' },
    wa: { label: 'Cotizar cascos para bomberos', href: waUrl('Hola, quiero cotizar cascos para bomberos.') },
    nota: 'Cotización formal con ficha técnica en día hábil, sin compra mínima y con envío a los 32 estados.',
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
    titulo: 'Equipo de respiración autónoma para trabajar en el humo con aire y confianza',
    parrafos: [
      'Dentro del humo, el <strong>equipo de respiración autónoma</strong> es lo único que separa a tu bombero de una atmósfera que no se puede respirar. Ahí no hay margen para improvisar: una máscara que no sella con la monja, un regulador incompatible o un cilindro con poca autonomía convierten una maniobra controlada en una salida de emergencia. Por eso lo especificamos contigo, pieza por pieza.',
      'Cotizamos <a href="/equipo-de-respiracion-autonoma/">equipos de respiración autónoma (ERA)</a> para cada uso: <a href="/equipo-de-respiracion-autonoma/era-de-combate/">ERA de combate</a> para ataque interior, <a href="/equipo-de-respiracion-autonoma/era-industrial/">ERA industrial</a> para brigadas de planta, <a href="/equipo-de-respiracion-autonoma/era-de-escape/">ERA de escape</a> para evacuación, <a href="/equipo-de-respiracion-autonoma/cilindros-de-fibra-de-carbono/">cilindros de fibra de carbono</a> para ganar autonomía con menos peso y <a href="/equipo-de-respiracion-autonoma/mascaras-y-reguladores-era/">máscaras y reguladores</a> para completar los equipos que ya tienes.',
      'Revisamos que máscara, regulador, arnés y cilindro funcionen como un solo conjunto y que la máscara selle con el casco y la monja de tu equipo. La cotización indica la referencia declarada —NFPA 1970 para combate y NIOSH 42 CFR Parte 84 para uso industrial— e incluye opciones como el Sköld Phantöm de 60 minutos y el MSA G1 Industrial.',
    ],
    puntos: [
      { titulo: 'Te orientamos primero', texto: 'Combate, industria o escape: te decimos qué ERA pide tu operación.' },
      { titulo: 'Sello comprobado', texto: 'La máscara se revisa con el casco, la monja y el cuello de tu equipo.' },
      { titulo: 'Conjunto documentado', texto: 'Máscara, regulador, arnés y cilindro con su referencia declarada por escrito.' },
      { titulo: 'Autonomía a tu medida', texto: 'Cilindro según duración y tarea; equipo completo o solo las piezas que faltan.' },
    ],
    cta: { label: 'Equipos de respiración autónoma por uso', href: '/equipo-de-respiracion-autonoma/' },
    wa: { label: 'Cotizar equipo de respiración autónoma', href: waUrl('Hola, quiero cotizar equipo de respiración autónoma.') },
    nota: 'Cotización formal con ficha técnica en día hábil, sin compra mínima y con envío a los 32 estados.',
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
    titulo: 'Botas para bomberos que aguantan agua, calor y escombro turno tras turno',
    parrafos: [
      'Las <strong>botas para bomberos</strong> son lo que más castiga un turno largo: agua, escombro, vidrio, calor que sube del piso y horas de pie. Una bota mal elegida se paga en ampollas, resbalones y una unión floja con la pantalonera, justo donde el traje tiene que cerrar. Por eso definimos la talla y el tipo de bota con cada usuario, no con una tabla genérica.',
      'Te ayudamos a elegir entre cuatro tipos de <a href="/botas/">botas para bombero</a>: <a href="/botas/bota-de-hule-estructural/">de hule estructurales</a>, la opción clásica para incendio en edificaciones; <a href="/botas/bota-de-piel-estructural/">de piel estructurales</a>, con cierre para un ajuste más firme; <a href="/botas/bota-forestal/">forestales</a> para caminar y trabajar en línea de fuego, y <a href="/botas/bota-de-brigada-industrial/">de brigada industrial</a> para la respuesta que define tu procedimiento interno.',
      'Revisamos puntera, entresuela, suela y altura de caña, y te pedimos probarlas con calcetín y pantalonera antes de pedir el lote. La referencia depende del tipo —NFPA 1970 para estructural, NFPA 1950 para forestal y NOM-113-STPS-2009 para brigada industrial— y trabajamos modelos como Romak Fire Workman Fire, Croydon Filtrex y Sköld Workman.',
    ],
    puntos: [
      { titulo: 'Te orientamos primero', texto: 'Hule, piel, forestal o brigada: te decimos cuál aguanta tu terreno.' },
      { titulo: 'Talla que sí queda', texto: 'Se prueba con calcetín y pantalonera, pie por pie y usuario por usuario.' },
      { titulo: 'Norma por escrito', texto: 'Cada modelo llega con su referencia declarada y ficha del fabricante.' },
      { titulo: 'Compra a tu medida', texto: 'Por par o por partida completa, con factura CFDI 4.0.' },
    ],
    cta: { label: 'Botas para bomberos por tipo', href: '/botas/' },
    wa: { label: 'Cotizar botas para bomberos', href: waUrl('Hola, quiero cotizar botas para bomberos.') },
    nota: 'Cotización formal con ficha técnica en día hábil, sin compra mínima y con envío a los 32 estados.',
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
    titulo: 'Guantes para bomberos que protegen las manos sin quitarles el tacto',
    parrafos: [
      'Unos <strong>guantes para bomberos</strong> mal elegidos terminan en la bolsa del chaquetón justo cuando más se necesitan: para abrir un acople, sujetar la herramienta o asegurar a una víctima. Calor, vidrio, metal cortado y vegetación exigen construcciones distintas. Por eso te ayudamos a elegir el guante de cada operación en lugar de un solo modelo que no convence a nadie.',
      'Trabajamos <a href="/guantes/">guantes para bombero</a> por tipo de riesgo: <a href="/guantes/guante-estructural/">estructurales</a> para combate interior, <a href="/guantes/guante-rescate-extricacion/">de rescate y extricación</a> con destreza para riesgo mecánico, <a href="/guantes/guante-forestal/">forestales</a> para herramienta manual en línea de fuego y <a href="/guantes/guante-brigadista/">para brigadista</a> para la respuesta inicial en industria. Cada uno cubre algo distinto y no se sustituyen entre sí.',
      'Antes de cotizar definimos la talla por usuario y revisamos palma, costuras, puño y solape con la manga del chaquetón, para que no quede piel expuesta al levantar los brazos. La referencia es NFPA 1970 para estructural y NFPA 1950 para rescate y forestal, con modelos como Romak Fire Firemax VI, Sköld FPGS y Veridian Fire Pro II.',
    ],
    puntos: [
      { titulo: 'Te orientamos primero', texto: 'Te decimos qué guante pide cada operación, sin venderte uno para todo.' },
      { titulo: 'Puño que cierra', texto: 'El solape con la manga se revisa para no dejar piel expuesta.' },
      { titulo: 'Norma por escrito', texto: 'Cada modelo llega con su referencia declarada y ficha técnica.' },
      { titulo: 'Tallas por usuario', texto: 'Cada par se cotiza con la medida de quien lo va a usar.' },
    ],
    cta: { label: 'Guantes para bomberos por tipo', href: '/guantes/' },
    wa: { label: 'Cotizar guantes para bomberos', href: waUrl('Hola, quiero cotizar guantes para bomberos.') },
    nota: 'Cotización formal con ficha técnica en día hábil, sin compra mínima y con envío a los 32 estados.',
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
    titulo: 'Monjas y escafandras para bombero que cierran el hueco que el casco no cubre',
    parrafos: [
      'Orejas, cuello y mandíbula: es la zona que queda expuesta entre el casco, la máscara del ERA y el cuello del chaquetón, y la que protege la <strong>monja para bombero</strong>. Es una pieza pequeña con un trabajo enorme. Si la apertura facial no coincide con la máscara puede comprometer el sello justo cuando más se necesita, así que la elegimos pensando en el equipo que ya usas.',
      'Cotizamos <a href="/capuchas/">monjas y escafandras para bombero</a> de uso profesional: la <a href="/capuchas/romak-cap1005/">capucha over-face Romak Fire</a>, la <a href="/capuchas/skold-fpen/">escafandra Nomex Sköld</a>, la <a href="/capuchas/majestic-pac-ii/">monja Majestic PAC II</a> de doble capa en cabeza y pechera, y las monjas propias de cada familia de traje, como la <a href="/trajes/estructural/monja/">monja antipartículas</a> y la <a href="/trajes/brigadista/monja/">monja de brigada</a>.',
      'Te recomendamos probarla con máscara, casco y chaquetón puestos, y cuidar que el elástico recupere su forma después del lavado que indica el fabricante. La Majestic PAC II está listada por UL bajo NFPA 1971 edición 2018; en cada cotización recibes por escrito la norma declarada de cada modelo, su apertura, color y número de capas.',
    ],
    puntos: [
      { titulo: 'Te orientamos primero', texto: 'Te decimos qué monja corresponde a tu traje y a tu máscara.' },
      { titulo: 'Sello protegido', texto: 'La apertura facial se revisa con la máscara del ERA que ya usas.' },
      { titulo: 'Norma por escrito', texto: 'Cada modelo llega con su referencia declarada, capas y cuidados.' },
      { titulo: 'Compra a tu medida', texto: 'Por pieza o junto con el traje, sin compra mínima.' },
    ],
    cta: { label: 'Monjas y escafandras por tipo', href: '/capuchas/' },
    wa: { label: 'Cotizar monjas para bombero', href: waUrl('Hola, quiero cotizar monjas para bombero.') },
    nota: 'Cotización formal con ficha técnica en día hábil, sin compra mínima y con envío a los 32 estados.',
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
    titulo: 'Kits para bomberos: el equipo completo y compatible en una sola cotización',
    parrafos: [
      'Equipar a una corporación o a una brigada pieza por pieza suele terminar igual: tallas que no cuadran, cascos que no ajustan con la monja y guantes que no cierran con la manga. Un <strong>kit para bomberos</strong> evita ese problema desde el inicio. Definimos traje, casco, monja, guantes y botas juntos, por usuario y por riesgo, para que el equipo de bombero completo llegue listo para trabajar.',
      'Armamos <a href="/kits/">kits de equipo para bombero</a> según la operación: <a href="/kits/kit-estructural/">kits estructurales</a> para incendio en edificaciones, <a href="/kits/kit-brigadista/">kits brigadistas</a> para la respuesta que autoriza tu centro de trabajo y <a href="/kits/kit-forestal/">kits forestales</a> para línea de fuego y trabajo en campo. Cada kit parte de la <a href="/trajes/">familia de traje</a> correcta y suma solo lo que esa operación exige.',
      'La referencia técnica depende del kit —NFPA 1970 para estructural, NFPA 1950 para forestal y NOM-002-STPS-2010 para la dotación de brigadas— y el equipo de respiración autónoma se especifica aparte, según la atmósfera y la tarea. Recibes una sola cotización con tallas, códigos y documentación por componente, lista para tu área de compras.',
    ],
    puntos: [
      { titulo: 'Te orientamos primero', texto: 'Estructural, brigadista o forestal: armamos el kit que pide tu operación.' },
      { titulo: 'Todo ajusta', texto: 'Casco, monja, guantes, botas y traje se revisan como un solo equipo.' },
      { titulo: 'Una sola cotización', texto: 'Tallas, códigos y documentación por componente en el mismo documento.' },
      { titulo: 'Compra a tu medida', texto: 'Kit completo o solo las piezas que te faltan, con factura CFDI 4.0.' },
    ],
    cta: { label: 'Kits para bomberos por tipo', href: '/kits/' },
    wa: { label: 'Cotizar kits para bomberos', href: waUrl('Hola, quiero cotizar kits para bomberos.') },
    nota: 'Cotización formal con ficha técnica en día hábil, sin compra mínima y con envío a los 32 estados.',
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
