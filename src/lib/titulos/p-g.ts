import type { Duo } from './index';

export const DUO_P_G: Record<string, Record<string, Duo>> = {
  '/trajes/hazmat/': {
    completa: [
      'El equipo Hazmat se cierra al definir la compatibilidad entre traje químico, casco, guantes, botas y respiración. No basta sumar piezas: las uniones de manga, puño, caña y protección respiratoria deben responder al agente y a la tarea evaluada.',
      'Integra el conjunto con <a href="/equipo-de-respiracion-autonoma/">equipo de respiración autónoma</a> cuando el análisis lo requiera y confirma interfaces por escrito. Una cotización completa separa cada partida, talla y condición de uso para evitar vacíos entre componentes.',
    ],
  },
  '/trajes/hazmat/botas-quimicas/': {
    aplicaciones: [
      'Las botas químicas completan el sellado inferior en control de derrames, descontaminación técnica y reconocimiento delimitado. Quien diseña la respuesta debe definir agente, concentración, piso y traslape con el traje, porque la apariencia de una bota no establece compatibilidad.',
      'La requisición debe unir operación, talla, condición de suela y tabla del fabricante. Pide que el responsable de seguridad valide el movimiento con la prenda Hazmat; así la caña no pierde continuidad cuando la persona camina, se agacha o sube escalones.',
    ],
    comparativa: [
      'Las botas químicas corresponden a contacto químico evaluado, con compatibilidad documentada por agente y condiciones. Una bota estructural responde a calor, agua y operación de incendio; no se presume apta para una sustancia específica ni para el traslape Hazmat.',
      'La elección parte de la evaluación: sustancia, concentración, duración, piso y configuración del traje. Anota esos datos en la compra y solicita la tabla aplicable, en lugar de decidir por puntera, color o porque ambas opciones cubren el tobillo.',
    ],
    errores: [
      'Comprar botas químicas sin agente y concentración impide revisar la tabla de compatibilidad. El material puede comportarse distinto ante otra mezcla, temperatura o tiempo, aun cuando el calzado parezca resistente y la caña tenga la altura esperada.',
      'También falla una orden que olvida la unión con el traje. Define traslape, talla y suela para el piso de la maniobra; pedir una prueba en movimiento antes de adjudicar evita que el sellado inferior quede sólo descrito en papel.',
    ],
    faq: [
      'Las dudas sobre botas químicas aclaran cómo se confirma compatibilidad, por qué el traslape con la prenda importa y qué revisar en caña, corte y unión de suela. La descontaminación previa al retiro también forma parte de su uso.',
      'Al consultar por WhatsApp, indica agente, concentración, talla, piso y tipo de traje. Con esos datos se puede preparar una solicitud útil para el área de seguridad y distinguir una bota para Hazmat de una opción estructural.',
    ],
    ficha: [
      'La especificación de botas químicas registra compatibilidad por agente, traslape con traje Hazmat y suela elegida por condición de piso. Añade talla, inspección de caña y unión de suela para que el anexo técnico describa la pieza completa.',
      'Copia esos campos a la requisición y pide la ficha por escrito. El documento permite cotejar material, construcción y uso previsto durante la recepción, sin sustituir la tabla de compatibilidad por una afirmación genérica de resistencia química.',
    ],
    hermanas: [
      'Dentro del equipo Hazmat, las botas químicas trabajan con guantes químicos, overol desechable, traje encapsulado nivel A y configuraciones nivel B o nivel C. Cada pieza cubre una interfaz distinta y no se debe intercambiar sin evaluar la exposición.',
      'La compra puede hacerse por pieza o como <a href="/trajes/hazmat/">equipo Hazmat</a> completo. Describe el agente y la maniobra para que botas, prenda y respiración se cotizen con tallas e interfaces que sí funcionen como sistema.',
    ],
    incluye: [
      'Una partida de botas químicas incluye el calzado en talla y construcción solicitadas, junto con la especificación de compatibilidad requerida. No incorpora automáticamente el traje, la evaluación del agente ni el procedimiento operativo de descontaminación.',
      'Separa en la cotización las botas, la prenda química y el control de retiro. Esa distinción permite comparar alcance real entre ofertas y evita asumir que una pieza de pie trae consigo la protección respiratoria o manual necesaria.',
    ],
    relacionados: [
      'Al revisar botas químicas conviene enlazar la barrera inferior con <a href="/trajes/hazmat/traje-nivel-b/">traje químico nivel B</a> y <a href="/trajes/hazmat/guantes-quimicos/">guantes químicos</a>. Los tres elementos necesitan compatibilidad por agente, talla y secuencia de descontaminación para no dejar una interfaz expuesta.',
      'Incluye esos destinos en el expediente de compra cuando la operación contempla salpicadura o manejo de sustancias. Comparar sus fichas ayuda a definir un conjunto coherente antes de recibir partidas que no fueron seleccionadas en común.',
    ],
  },
  '/trajes/hazmat/guantes-quimicos/': {
    aplicaciones: [
      'Los guantes químicos se usan en muestreo técnico, control de válvulas, descontaminación y mantenimiento delimitado. La selección la especifica quien conoce agente, concentración, temperatura, duración y maniobra, porque destreza y barrera deben comprobarse a la vez.',
      'Antes de comprar, prueba el par con válvula, muestra, herramienta o radio. El responsable de seguridad debe documentar material, longitud de puño y pares de repuesto para que una sustitución urgente no introduzca una composición incompatible.',
    ],
    comparativa: [
      'Los guantes químicos responden al contacto con un agente identificado mediante tabla de compatibilidad y prueba de tarea. El guante estructural se selecciona para calor, abrasión y herramientas de bombero; su capacidad térmica no demuestra barrera química específica.',
      'La decisión se define con sustancia, concentración, exposición y destreza requerida. Solicita el material y la longitud de puño por escrito, sin elegir por grosor o color ni trasladar una certificación estructural a una operación Hazmat.',
    ],
    errores: [
      'Elegir guantes químicos por color o espesor ignora que la compatibilidad depende de material y agente. Un tiempo de permeación genérico tampoco sirve: concentración, temperatura y duración cambian la lectura de la tabla del fabricante.',
      'Dejar el puño enrollado o no probar una válvula puede abrir una ruta de exposición durante la maniobra. Define manga, tarea y retiro controlado en la orden, y pide pares identificados para reemplazo ante daño o contaminación.',
    ],
    faq: [
      'Las preguntas sobre guantes químicos distinguen permeación, degradación y penetración, y aclaran por qué EN ISO 374 no reemplaza una tabla de compatibilidad. También resuelven cómo elegir puño con la manga y cuándo retirar un par.',
      'Para una respuesta útil por WhatsApp, manda sustancia, concentración, temperatura, tiempo de contacto, talla y tarea. Esa información permite revisar material y destreza sin declarar que un guante comercial sirve frente a cualquier químico.',
    ],
    ficha: [
      'La ficha de guantes químicos debe fijar agente, mezcla, concentración, contacto, salpicadura y duración. Añade material declarado, referencia EN ISO 374 cuando aplique, longitud de puño y prueba de destreza para que la selección sea auditable.',
      'Pide la ficha de compatibilidad y cuidado del fabricante por escrito. Copiar esos datos al anexo técnico evita tiempos de permeación inventados y permite verificar el par recibido antes de integrarlo con manga, traje y descontaminación.',
    ],
    hermanas: [
      'Los guantes químicos se articulan con botas químicas, overol químico desechable, traje encapsulado nivel A, traje nivel B y traje nivel C. Cada alternativa protege una parte del sistema y se selecciona según respiración, agente y exposición.',
      'Puedes solicitar las piezas sueltas o el <a href="/trajes/hazmat/">equipo Hazmat</a> armado. Entrega al cotizador la maniobra y el contaminante para revisar puños, botas y prenda antes de establecer una combinación de materiales apta para la tarea.',
    ],
    incluye: [
      'La partida de guantes químicos comprende el par en material, talla y longitud de puño solicitados, además de la ficha de compatibilidad y cuidado del fabricante. No incluye por sí sola guante adicional, prueba de respirador ni descontaminación operativa.',
      'Especifica esos límites en la comparación de ofertas para saber qué corresponde a cada proveedor. Separar el par de los accesorios de retiro y respiración hace visible lo que todavía debe integrarse para la tarea química.',
    ],
    relacionados: [
      'Los guantes químicos suelen revisarse con <a href="/trajes/hazmat/traje-nivel-c/">traje químico nivel C</a> y <a href="/trajes/hazmat/botas-quimicas/">botas químicas</a>, porque manga, puño y salida de zona deben sostener una barrera continua. La compatibilidad del conjunto se documenta por agente.',
      'Reúne las fichas de esos componentes antes de firmar una requisición. Así se puede probar destreza, traslape y retiro con el mismo escenario, en vez de reunir materiales elegidos por separado para una operación no definida.',
    ],
  },
  '/trajes/hazmat/overol-quimico-desechable/': {
    aplicaciones: [
      'El overol químico desechable se destina a muestreo, limpieza controlada, mantenimiento delimitado y tareas con partículas o salpicadura según su construcción declarada. El área de seguridad especifica el tipo de exposición, no sólo que la prenda será de un uso.',
      'Define con anticipación el agente, tipo de costura, cierre, talla y disposición posterior. Probar el overol con guantes y botas permite comprobar movilidad y evita que una prenda para polvo se interprete como barrera para salpicadura.',
    ],
    comparativa: [
      'Tras el uso o la contaminación, esta prenda Hazmat se retira y se recibe por unidad, empaque y talla. El traje reutilizable exige inspección, limpieza y control de condición, por lo que el ciclo de servicio forma parte de la decisión.',
      'Elige con base en barrera declarada, tarea y proceso de descontaminación, no sólo cantidad de usos. Registra si habrá exposición delimitada o programa de mantenimiento; esa información separa una compra por unidades de una prenda con historial.',
    ],
    errores: [
      'Confundir una prenda Hazmat de uso único con compatibilidad universal expone la operación a una barrera no evaluada. Partículas, salpicadura y contacto requieren construcciones distintas, por lo que costura y cierre deben figurar desde la solicitud.',
      'Reutilizar una prenda por apariencia o ignorar el empaque compromete el control de condición. Pide talla, cantidad, disposición y agente previsto en la cotización para que recepción y retiro sigan un alcance definido.',
    ],
    faq: [
      'Antes del ingreso, la consulta Hazmat debe distinguir barrera contra partículas y salpicadura, además de la función de costuras, cierre y talla. También define por qué se planean el retiro y la disposición.',
      'Al escribir por WhatsApp, comparte tipo de exposición, agente, número de usuarios, tallas y si habrá botas o guantes compatibles. Con esos datos se identifica una configuración útil sin tratar todos los overoles como equivalentes.',
    ],
    ficha: [
      'La especificación de la prenda Hazmat debe nombrar material de barrera, tipo de costura, cierre, capucha y rango de tallas. Incluye exposición prevista y condición de empaque para trasladar a la requisición lo que realmente define la prenda.',
      'Solicita la ficha por escrito y agrega instrucciones de retiro y disposición a la partida. Ese anexo permite contrastar el modelo contra la tarea delimitada sin convertir una descripción de uso único en una declaración de protección universal.',
    ],
    hermanas: [
      'Dentro de la familia Hazmat, la prenda de uso único convive con botas químicas, guantes químicos, encapsulado nivel A y configuraciones nivel B o nivel C. La barrera corporal no sustituye manos, pie ni respiración durante la operación prevista.',
      'Cotiza por pieza o mediante <a href="/trajes/hazmat/">equipo Hazmat</a> completo según la maniobra. Compartir agente, condiciones y tallas deja que el conjunto se configure con interfaces consistentes en vez de acumular artículos independientes sin evaluación previa.',
    ],
    incluye: [
      'La compra Hazmat incluye la prenda con talla, barrera, costuras y cierre solicitados, además del empaque que corresponda. No incluye automáticamente guantes, botas, respirador ni el procedimiento de descontaminación y disposición operativa.',
      'Distingue cada rubro al comparar cotizaciones para evitar alcances aparentes. Cuando el retiro controlado es parte de la tarea, debe quedar asignado en la operación y no suponerse incluido por el carácter desechable del overol.',
    ],
    relacionados: [
      'Para distinguir barrera corporal, respiración y protección inferior, revisa esta prenda Hazmat junto con <a href="/trajes/hazmat/traje-nivel-c/">traje químico nivel C</a> y <a href="/trajes/hazmat/botas-quimicas/">botas químicas</a>. Esa lectura conjunta evita elegir solo por el ciclo de uso de la prenda.',
      'Consulta las fichas relacionadas antes de formalizar la compra. Comparar exposición, material, talla y descontaminación ayuda a decidir si la tarea permite una prenda de uso único o exige otra configuración de protección.',
    ],
  },
  '/trajes/hazmat/traje-encapsulado-nivel-a/': {
    aplicaciones: [
      'El traje encapsulado nivel A se utiliza en reconocimiento de vapor, control de fuga y entrada a zona con peligro químico que exige encapsular el ERA. El mando de incidente y seguridad determinan la configuración a partir de sustancia, concentración y atmósfera.',
      'Describe la tarea, tiempo de aire, temperatura, movilidad y plan de descontaminación antes de solicitarlo. Esa información permite revisar cierre, visor, guantes, botas e interfaces, en lugar de tratar nivel A como respuesta automática a cualquier derrame.',
    ],
    comparativa: [
      'Cuando el peligro de vapor exige que el ERA quede dentro de la envolvente, la configuración encapsulada protege el conjunto. Nivel B conserva el equipo de aire exterior y corresponde a salpicadura líquida evaluada, no a una versión menor del mismo riesgo.',
      'La variable decisiva es la exposición de vapor y la necesidad de encapsular respiración y arnés. Documenta agente, concentración, presión, temperatura y duración para que la decisión entre nivel A o nivel B tenga respaldo técnico.',
    ],
    errores: [
      'Comprar una configuración encapsulada sin definir agente, concentración o tabla de compatibilidad puede producir una barrera inadecuada. El encapsulado no elimina la necesidad de revisar visor, guantes, botas, cierres y tiempo de aire para la maniobra.',
      'Olvidar la descontaminación y el plan de salida convierte una compra en protección incompleta. Solicita interfaces, talla y secuencia de retiro por escrito para que el equipo se pueda usar sin contaminar ERA, usuario o zona limpia.',
    ],
    faq: [
      'La consulta técnica Hazmat explica cuándo el ERA va dentro de la prenda, cómo se distingue de nivel B y por qué la compatibilidad depende de agente y condiciones. También aborda talla, movilidad, descontaminación y retiro asistido.',
      'Manda por WhatsApp sustancia, concentración, tipo de vapor, tarea, tallas y equipo respiratorio disponible. Esos datos permiten discutir una configuración realista y documentar lo que debe confirmarse antes de ingresar a una zona peligrosa.',
    ],
    ficha: [
      'La ficha Hazmat debe registrar barrera declarada, nivel A según análisis de riesgo, visor, cierre, interfaces de guantes y botas, además de ERA interior. La referencia publicada es NFPA 1990, edición 2022.',
      'Copia a la requisición sustancia, concentración, exposición y tallas, y pide el documento técnico por escrito. Así se valida la configuración concreta del fabricante sin asumir compatibilidad de un material frente a otro agente.',
    ],
    hermanas: [
      'La selección encapsulada se complementa con botas químicas, guantes químicos, overol desechable y soluciones nivel B o nivel C. Son piezas de la familia Hazmat que cambian con vapor, salpicadura y respiración requerida en cada maniobra planificada.',
      'Solicita cada componente o el <a href="/trajes/hazmat/">equipo Hazmat</a> completo con el análisis de riesgo. La cotización puede entonces definir talla, material e interfaces sin confundir distintas categorías de protección química durante la selección operativa.',
    ],
    incluye: [
      'La configuración Hazmat incluye prenda química, visor, cierre e interfaces especificadas para guantes y botas. No comprende por defecto ERA, aire de reserva, descontaminación operativa ni una tabla de compatibilidad para un agente no declarado.',
      'Pide que esos límites aparezcan por separado en la cotización. Distinguir prenda, respiración y procedimiento permite comparar propuestas sin suponer que el encapsulado cubre todos los recursos necesarios para la entrada y salida controladas.',
    ],
    relacionados: [
      'Antes de decidir una configuración encapsulada Hazmat revisa <a href="/trajes/hazmat/traje-nivel-b/">traje químico nivel B</a> y <a href="/trajes/hazmat/guantes-quimicos/">guantes químicos</a>. La comparación con ambos destinos aclara qué exposición exige encapsular el ERA y qué material debe proteger las manos.',
      'Reúne las fichas de ambos elementos con el análisis de atmósfera. Esa revisión conecta barrera corporal, respiración y destreza, y evita sustituir el criterio de vapor por una elección basada en el nombre del nivel.',
    ],
  },
  '/trajes/hazmat/traje-nivel-b/': {
    aplicaciones: [
      'El traje químico nivel B se aplica en control de derrame, descontaminación técnica y reconocimiento delimitado cuando hay salpicadura líquida y se requiere ERA exterior. El responsable de análisis de riesgo define agente, concentración, presión, temperatura y tiempo de aire.',
      'Antes de solicitarlo, prueba el conjunto con arnés, válvulas, guantes y botas. Esa revisión operativa confirma que la persona puede moverse y retirar el equipo, sin asumir que una prenda resistente a líquido resolverá exposición a vapor.',
    ],
    comparativa: [
      'Con ERA exterior, esta configuración Hazmat atiende una atmósfera que puede ser peligrosa al respirar y una barrera para salpicadura. Nivel C sólo procede con contaminante conocido, monitoreo y respirador purificador dentro de sus condiciones aplicables.',
      'La autonomía respiratoria y la información sobre el ambiente deciden la elección. Registra monitoreo, agente, concentración y posibilidad de oxígeno deficiente; si faltan esas condiciones, no se debe reducir la configuración a nivel C.',
    ],
    errores: [
      'Ante vapor sin evaluación, usar esta configuración Hazmat deja el ERA fuera de la envolvente cuando el riesgo puede demandar encapsulado. Comprar sin concentración también falla, porque un mismo agente cambia con temperatura y condiciones de exposición.',
      'No definir botas y guantes abre rutas de entrada en extremidades. Especifica traslapes, material, tallas y descontaminación junto con la prenda para que la partida responda a salpicadura líquida y no sólo a una categoría escrita.',
    ],
    faq: [
      'La revisión Hazmat de nivel B explica la diferencia con nivel A, el uso de ERA exterior y la necesidad de confirmar compatibilidad por sustancia. También aclara que no protege automáticamente contra fuego ni frente a cualquier líquido.',
      'Envía por WhatsApp el agente, concentración, presión, temperatura, tarea y equipo de aire. Con esos datos se puede revisar si la barrera, el traslape y la respiración propuestos corresponden a la exposición descrita.',
    ],
    ficha: [
      'La ficha Hazmat consigna nivel B conforme al análisis de riesgo, ERA exterior y referencia NFPA 1990, edición 2022. Para compra se documentan sustancia, concentración, salpicadura, temperatura, duración y material de barrera declarado.',
      'Pide el anexo técnico por escrito y agrega interfaces solicitadas para guantes y botas. Esa información permite cotejar la configuración real del fabricante y no asumir equivalencias entre materiales o entre condiciones de contacto líquido.',
    ],
    hermanas: [
      'Dentro de Hazmat, nivel B convive con encapsulado nivel A, traje nivel C, overol químico desechable, guantes químicos y botas químicas. La familia cubre escenarios distintos y cada pieza se decide por atmósfera, agente y exposición.',
      'Se puede cotizar por componentes o como <a href="/trajes/hazmat/">equipo Hazmat</a>. Presenta el análisis de riesgo al pedir propuesta para que respiración, prenda y extremidades queden especificadas con una misma lógica operativa para el escenario previsto.',
    ],
    incluye: [
      'La oferta Hazmat incluye prenda configurada para el nivel, interfaces solicitadas y ficha técnica de material. ERA, cartuchos o respirador purificador y descontaminación operativa se cotizan aparte, porque no forman parte automática de la prenda.',
      'Identifica cada alcance en el cuadro de partidas antes de comparar proveedores. Esa separación muestra qué necesita adquirir la organización para montar el conjunto con aire autónomo y una salida de zona controlada.',
    ],
    relacionados: [
      'Quien evalúa nivel B Hazmat debe contrastarlo con <a href="/trajes/hazmat/traje-encapsulado-nivel-a/">traje encapsulado nivel A</a> y <a href="/trajes/hazmat/botas-quimicas/">botas químicas</a>. El primer destino aclara el umbral de vapor; el segundo completa la interfaz inferior frente a salpicadura.',
      'Revisa esos documentos durante la preparación de la orden. La comparación relaciona respiración, barrera corporal y pie con las condiciones del agente, en vez de elegir cada rubro sin considerar el sistema completo.',
    ],
  },
  '/trajes/hazmat/traje-nivel-c/': {
    aplicaciones: [
      'El traje químico nivel C se usa en muestreo, mantenimiento delimitado, descontaminación y reconocimiento cuando el contaminante es conocido y el monitoreo sostiene una atmósfera apta para respirador purificador. Seguridad industrial define cartucho, barrera y criterio de salida.',
      'La orden debe registrar agente, concentración, lectura ambiental, tarea y ajuste facial. Probar válvulas, herramientas y traslapes con guantes y botas permite comprobar la configuración antes de depender de una prenda durante la operación.',
    ],
    comparativa: [
      'Con contaminante conocido, monitoreo continuo y respirador purificador compatible, nivel C Hazmat puede ser pertinente. Nivel B incorpora ERA exterior para una atmósfera peligrosa al respirar y ofrece independencia del aire ambiente.',
      'La elección se decide por información disponible, oxígeno y alcance del respirador. Si la concentración es desconocida, falta monitoreo o el ambiente es deficiente en oxígeno, nivel C deja de corresponder aunque la prenda parezca suficiente.',
    ],
    errores: [
      'Pedir nivel C Hazmat sin identificar contaminante o cartucho compatible elimina la base de la configuración. El respirador purificador no se selecciona por costumbre y requiere monitoreo continuo, ajuste facial y una condición definida para salir.',
      'Ignorar la compatibilidad de guantes, botas y barrera corporal crea un conjunto discontinuo. Describe agente, concentración, movimiento y secuencia de descontaminación en la solicitud para que cada interfaz se revise antes de la compra.',
    ],
    faq: [
      'Antes de elegir respirador purificador, la consulta Hazmat aclara por qué el contaminante debe ser conocido y cómo se diferencia nivel C de nivel B. También cubre monitoreo, cartuchos, sello facial, retirada y descontaminación.',
      'Para consultar por WhatsApp comparte sustancia, concentración, medición ambiental, tarea, tallas y respirador disponible. Esa información permite valorar la configuración y no convertir una categoría condicionada en respuesta automática ante cualquier atmósfera.',
    ],
    ficha: [
      'La ficha Hazmat debe señalar contaminante identificado, monitoreo continuo, respirador purificador con cartucho compatible y referencia NFPA 1990, edición 2022. Incluye material de barrera, talla, guantes, botas y criterio de salida seguro.',
      'Pide la especificación escrita con las condiciones de atmósfera y ajuste facial. Llevar esos datos al anexo técnico evita que el modelo se compre sin la información que determina si el respirador puede operar dentro de su alcance.',
    ],
    hermanas: [
      'Nivel C Hazmat se relaciona con traje nivel B, encapsulado nivel A, overol desechable, botas químicas y guantes químicos. No son sustitutos directos: cada opción cambia de acuerdo con aire ambiente, barrera y la tarea concreta evaluada.',
      'Cotiza partes independientes o el <a href="/trajes/hazmat/">equipo Hazmat</a> completo después de compartir monitoreo y agente. Así el conjunto puede incluir cartuchos, puños y calzado con criterios compatibles para la entrada planeada y su retiro posterior.',
    ],
    incluye: [
      'La configuración Hazmat incluye prenda de barrera, interfaces solicitadas y ficha del material para el escenario documentado en el análisis de riesgo. No incluye automáticamente respirador purificador, cartuchos, prueba de ajuste ni procedimiento de descontaminación operativa.',
      'Desglosa esos elementos en la cotización para comparar alcance y responsabilidades. Distinguir ropa, respiración y control de uso ayuda a evitar que una propuesta omita recursos indispensables para una tarea condicionada por monitoreo.',
    ],
    relacionados: [
      'Al especificar nivel C Hazmat revisa <a href="/trajes/hazmat/traje-nivel-b/">traje químico nivel B</a> y <a href="/trajes/hazmat/overol-quimico-desechable/">overol químico desechable</a>. La primera comparación técnica define autonomía respiratoria; la segunda separa ciclo de uso y tipo de barrera corporal evaluada.',
      'Incluye esas referencias al preparar el expediente. Contrastar atmósfera, descontaminación y material permite justificar la categoría elegida con información de operación, no con una similitud visual entre prendas o con una costumbre de compra.',
    ],
  },
};
