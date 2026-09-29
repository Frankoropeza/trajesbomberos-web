import type { Duo } from './index';

export const DUO_P_E: Record<string, Record<string, Duo>> = {
  '/mangueras-y-accesorios/conexiones-y-adaptadores/': {
    errores: [
      'Las conexiones y adaptadores fallan desde la compra cuando se pide solo «un adaptador» y no se anotan sus dos extremos. Confundir NH/NST con NPSH, o no indicar género y diámetro, deja una transición que no asienta y puede cortar la continuidad de la línea.',
      'En una licitación, describe entrada, salida, rosca, género, material y si se requiere reducción o siamesa. Pide también la función dentro de la unidad; así la recepción puede probar el acople con mangueras, pitones e hidrantes reales antes de asignarlo.',
    ],
    faq: [
      'Las dudas sobre conexiones y adaptadores suelen concentrarse en si NH/NST y NPSH son equivalentes, y en cómo se define una siamesa. Ambas respuestas dependen de identificar físicamente rosca, diámetros y configuración de entradas y salida, no de la apariencia del cuerpo.',
      'Al escribir por WhatsApp, manda fotos de ambos extremos, medidas, tipo de equipo al que se unirá y cantidad por unidad. Con esa información se puede pedir una propuesta que documente la transición, en vez de dejarla abierta para resolverla al recibir.',
    ],
    ficha: [
      'Para requisitar conexiones y adaptadores, registra diámetro, rosca NH/NST o NPSH y género en cada extremo; para una siamesa, agrega sus entradas y salida. El material y sentido de reducción también deben quedar escritos porque el nombre comercial no define la compatibilidad.',
      'Solicita la norma NFPA aplicable que declare el fabricante para cada modelo y conserva esos campos en el anexo técnico. Una comprobación física de roscas y juntas al recibir evita que una partida aparentemente correcta llegue a la unidad sin poder integrarse.',
    ],
  },
  '/mangueras-y-accesorios/llave-para-hidrante/': {
    errores: [
      'Una llave para hidrante no se elige por parecerse a otra herramienta. Pedirla sin geometría, medidas ni componente que atenderá puede dejar una llave que no toma la válvula o una spanner que no ajusta los acoples de la corporación.',
      'Evita completar la orden con una cantidad global sin distribuirla por vehículo. Anota tipo de llave, material declarado, conexiones y sitio de resguardo; después valida el ajuste en una maniobra controlada, sin extender palancas ni forzar piezas instaladas.',
    ],
    faq: [
      'Las preguntas frecuentes sobre llave para hidrante distinguen la operación del hidrante del ajuste de acoples con llaves spanner. También aclaran por qué una medida nominal no prueba que la herramienta coincida con las conexiones y válvulas que ya están instaladas.',
      'Para cotizar, comparte el tipo de llave requerido, fotografías del hidrante o acople, sus medidas y cuántas unidades deben equiparse. Ese detalle permite definir material y dimensiones por escrito, con una partida verificable al momento de la entrega.',
    ],
    ficha: [
      'La ficha de una llave para hidrante debe indicar si es de hidrante o spanner, las medidas que atenderá y el material declarado. Esos tres datos delimitan su función y evitan comparar una herramienta de operación con otra destinada únicamente a ajustar acoples.',
      'Incluye cantidad por vehículo y solicita la norma NFPA aplicable declarada por el fabricante cuando corresponda. Dejar dimensiones y conexiones en la requisición permite cotejar la partida contra el sistema existente, no contra una fotografía o una descripción genérica.',
    ],
  },
  '/mangueras-y-accesorios/manguera-de-ataque/': {
    errores: [
      'Comprar manguera de ataque por longitud sin definir diámetro, acoples ni rosca deja la línea incompleta. Una de 1 ½ o 2 ½ pulgadas solo funciona cuando bomba, pitón y conexiones corresponden a la misma configuración de operación.',
      'No conviertas una presión de trabajo en un dato supuesto ni omitas la doble chaqueta cuando aplica. Pide por escrito longitud, construcción, acoples y uso previsto; así la inspección de chaqueta, forro y juntas puede contrastarse contra la orden recibida.',
    ],
    faq: [
      'Las dudas sobre manguera de ataque suelen ser si conviene 1 ½ o 2 ½ pulgadas y qué rosca debe solicitarse. La respuesta parte de la línea existente, caudal y maniobra, porque NH/NST y NPSH no deben tratarse como equivalentes.',
      'Manda por WhatsApp diámetro, longitud, bomba, pitón, acoples y roscas de los extremos. También señala si será línea de ataque, reserva o una aplicación definida; con ello la cotización puede detallar configuración y norma NFPA aplicable declarada por fabricante.',
    ],
    ficha: [
      'En la requisición de manguera de ataque escribe diámetro de 1 ½ o 2 ½ pulgadas, longitud y construcción de doble chaqueta según configuración. Los acoples y la rosca de ambos extremos completan el dato que permitirá integrarla a una línea existente.',
      'La norma NFPA debe ser la que declare el fabricante para el modelo, no una cifra asignada sin ficha. Solicitarla junto con el uso de la línea ayuda a revisar etiquetas, acoples y condición de entrega antes de incorporarla al inventario operativo.',
    ],
  },
  '/mangueras-y-accesorios/piton-boquilla/': {
    errores: [
      'El error típico al pedir un pitón o boquilla es comprarlo por diámetro visual y olvidar entrada, rosca y caudal declarado. Un selector de chorro o niebla no resuelve una incompatibilidad con la manguera, el acople o la bomba de la unidad.',
      'Tampoco conviene aceptar un cuerpo sin definir patrón de descarga y maniobra autorizada. Incluye esos campos en la cotización y solicita una prueba controlada al recibir; una fuga, selector atascado o sello deteriorado debe evaluarse antes del servicio.',
    ],
    faq: [
      'Las preguntas sobre pitón o boquilla aclaran cuándo se requiere chorro, niebla o patrón combinado y qué significa el caudal declarado. También resuelven cómo confirmar la entrada y rosca contra una línea que ya tiene manguera y acoples definidos.',
      'Para una respuesta útil por WhatsApp, indica patrón requerido, caudal, entrada, rosca, bomba y aplicación prevista. Comparte si la cuadrilla usa guantes o una maniobra particular; esos datos permiten revisar la interfaz completa antes de preparar la propuesta.',
    ],
    ficha: [
      'La especificación de un pitón o boquilla reúne patrón de chorro, niebla o combinado, caudal declarado y entrada compatible. Añade rosca, tipo de acople y uso previsto: son los campos que vinculan la descarga con la manguera y fuente de agua.',
      'Pide la norma NFPA aplicable que el fabricante declare para el modelo y conserva la configuración en la requisición. Al recibir, se puede comprobar selector, válvula, empuñadura, sellos y acople con la línea real, sin inferir desempeño por apariencia.',
    ],
  },
  '/rescate/arnes-de-rescate/': {
    errores: [
      'Un arnés de rescate no se compra solo por talla: definirlo sin puntos de conexión, usuario y maniobra puede colocar un equipo de acceso donde se requiere evacuación. La compatibilidad con cuerda, conectores y dispositivos empieza en la configuración escrita.',
      'Evita mezclar arneses sin inspección, historial o identificación. En la cotización anota talla, puntos, ajustes y uso; después coteja marcados y condición inicial por persona. Una pieza sin trazabilidad no se vuelve apta porque el conjunto parezca completo.',
    ],
    faq: [
      'Las dudas de arnés de rescate suelen preguntar qué punto sirve para acceso o rescate y cómo se define la talla. También importa saber qué conectores, cuerda y dispositivo acompañarán el sistema, porque el arnés no opera aislado.',
      'Envía por WhatsApp la maniobra, número de usuarios, tallas, puntos de conexión y demás componentes previstos. Con esa información la propuesta puede separar configuraciones y evitar que una misma descripción cubra de manera imprecisa tareas con exigencias distintas.',
    ],
    ficha: [
      'Para especificar un arnés de rescate, incorpora talla, puntos de conexión, ajustes y la maniobra prevista, además de la identificación individual. Esos campos indican cómo se integrará con conectores, cuerda y dispositivos, y permiten recibir cada elemento contra una configuración concreta.',
      'Solicita las referencias o marcados declarados por fabricante sin atribuir una certificación no publicada. Dejar el uso y los usuarios por escrito facilita la inspección inicial, el inventario y la separación de cualquier arnés que requiera evaluación.',
    ],
  },
  '/rescate/cuerda-de-rescate/': {
    errores: [
      'La cuerda de rescate no debe pedirse como un rollo genérico. Omitir diámetro, longitud, construcción y maniobra puede dejar una línea insuficiente para el borde, el descenso o la evacuación, incluso si visualmente parece nueva y sin daño.',
      'Otra falla es reincorporarla tras calor, combustibles, bordes o carga relevante sin registrar exposición. Describe bolsa, terminaciones y uso en la orden; así cada cuerda puede identificarse, inspeccionarse palmo a palmo y mantenerse separada cuando su condición no sea clara.',
    ],
    faq: [
      'Las preguntas sobre cuerda de rescate resuelven qué longitud y diámetro pide una maniobra, y cuándo una exposición obliga a evaluación. La funda, los cambios de diámetro y el historial importan tanto como la etiqueta para decidir si vuelve al sistema.',
      'Al contactar por WhatsApp, explica acceso, altura, usuarios, método de descenso o izado y longitud disponible. Indica si requiere bolsa o terminaciones; esos datos permiten cotizar una cuerda identificable y no una partida que después deba adaptarse en campo.',
    ],
    ficha: [
      'La requisición de cuerda de rescate debe contener diámetro, longitud, construcción, terminaciones y bolsa, vinculados a la maniobra. Escribir el escenario y número de usuarios evita que una línea de acceso se compre para una evacuación sin revisar sus interfaces.',
      'Pide el marcado y referencia que declare el fabricante, y conserva un campo para identificación e historial desde recepción. Esa información permite registrar inspecciones, separar cuerdas expuestas a contaminantes y evitar que la limpieza sustituya una evaluación de condición.',
    ],
  },
  '/rescate/herramienta-hidraulica-de-rescate/': {
    errores: [
      'Una herramienta hidráulica de rescate se compra mal cuando se confunde cortar, separar y levantar en una sola descripción. Sin tipo de herramienta, fuerza declarada, apertura y fuente de energía, la partida puede no corresponder al acceso que exige la extricación.',
      'También es riesgoso ignorar mangueras, baterías, cargadores y transporte. Define operación, espacio de trabajo y accesorios en la requisición; eso permite comprobar configuración y mantenimiento, en lugar de descubrir durante una práctica que el conjunto no está listo para desplegarse.',
    ],
    faq: [
      'Las preguntas frecuentes de herramienta hidráulica de rescate distinguen cuándo se requiere cortador, separador o cilindro, y cómo influye la fuente de energía. La selección también considera la apertura, fuerza declarada y el espacio disponible alrededor del vehículo.',
      'Para cotizar por WhatsApp, describe los escenarios de extricación, tipo de unidad, accesorios requeridos y si se integrará con baterías o mangueras. Esa información ayuda a desglosar herramienta, alimentación, cargador y resguardo en una propuesta operable.',
    ],
    ficha: [
      'Una ficha de herramienta hidráulica de rescate debe identificar tipo de intervención, apertura o recorrido, fuerza declarada y fuente de energía. Sumarse accesorios, mangueras o baterías evita que el equipo se compre como una herramienta aislada sin el sistema que permite utilizarla.',
      'Solicita por escrito el modelo y documentación técnica declarada por fabricante, junto con necesidades de carga y transporte. Estos datos sirven para cotejar la entrega contra la requisición y programar pruebas controladas de despliegue, sin adjudicar capacidades no declaradas.',
    ],
  },
  '/rescate/kit-de-rescate-vertical/': {
    errores: [
      'Pedir un kit de rescate vertical como «completo» oculta la maniobra que debe resolver. Sin usuarios, tallas, longitudes y lista de cuerda, arneses, conectores, dispositivos, anclajes y bolsa, un paquete puede traer piezas ajenas o faltantes críticos.',
      'No recibas el kit de rescate vertical como una sola caja cerrada. Cada componente tiene marcado, condición e historial propios; pedirlo desglosado permite revisar interfaces y dejar en cuarentena una pieza expuesta sin perder trazabilidad del resto del sistema.',
    ],
    faq: [
      'Según la maniobra, las dudas normalmente comparan acceso, descenso, ascenso o evacuación, y preguntan por qué se revisa cada pieza por separado. La respuesta depende de la secuencia, borde, usuarios, método de izado y ambiente que enfrentará la brigada.',
      'Manda por WhatsApp el escenario, número de rescatistas y víctimas, altura, acceso y método de evacuación. Añade si ya existen componentes compatibles; así se puede enlistar arneses, cuerdas, conectores y dispositivos sin presentar una bolsa como solución universal.',
    ],
    ficha: [
      'En la requisición, enumera cuerda por diámetro y longitud, arneses por talla, conectores por material y seguro, dispositivos, anclajes y bolsa. La secuencia de acceso o evacuación da sentido a cada partida y evita omisiones.',
      'Incluye usuarios, escenario y marcados declarados para recibir los componentes uno por uno. Con ese desglose se registra condición inicial, ubicación y responsable, y se puede comparar el contenido real con la configuración que necesita la maniobra prevista.',
    ],
  },
  '/rescate/mosquetones-de-rescate/': {
    errores: [
      'Los mosquetones de rescate no deben comprarse solo por peso o color. Pedirlos sin material, forma, seguro y uso puede dejar un conector que carga sobre el gatillo, no asienta en el anillo del arnés o resulta difícil de manipular con guantes.',
      'No reincorpores un mosquetón caído con rebabas, corrosión o cierre irregular. Especifica el punto de conexión y cantidad por configuración; al recibir, revisa marcado, nariz, bisagra y bloqueo para separar cualquier pieza que no cierre de forma controlada.',
    ],
    faq: [
      'Las preguntas sobre mosquetones de rescate suelen comparar acero y aluminio, además de cierre de rosca o automático. También aclaran cuándo una rebaba, deformación o gatillo irregular obliga a retirar el conector hasta aplicar la evaluación correspondiente.',
      'Comparte por WhatsApp el anclaje, arnés o dispositivo que conectará, junto con material, forma y seguro requeridos. Describe si se usará con guantes; esos datos permiten proponer conectores que asienten en su interfaz y no únicamente una cantidad de inventario.',
    ],
    ficha: [
      'En la ficha de mosquetones de rescate declara material de acero o aluminio, forma, tipo de seguro y uso asignado. El marcado de resistencia debe solicitarse como lo publique el fabricante, porque sin él no se atribuye una función o capacidad al conector.',
      'Anota cantidad por configuración y las interfaces de arnés, anclaje o dispositivo. La requisición detallada permite revisar nariz, gatillo y bloqueo al recibir, además de conservar conectores secos, identificados y protegidos de impactos dentro de la unidad.',
    ],
  },
  '/trajes/entrada/': {
    completa: [
      'El traje de entrada a la flama requiere que casco integrado, capucha, guantes mitón, botas aluminizadas y ERA funcionen como un sistema. La compatibilidad no termina al sumar piezas: visor, traslapes, respiración y movilidad se verifican con la maniobra de ingreso prevista.',
      'Al cotizar el conjunto, separa cada complemento y confirma su interfaz con el equipo de respiración autónoma. Pide una propuesta escrita con configuración, tallas y condiciones; así la compra respalda un ingreso breve con protocolo, no una acumulación de piezas brillantes.',
    ],
  },
  '/trajes/entrada/accesorios/': {
    aplicaciones: [
      'Los pasamontañas y talega para traje de entrada se usan al preparar el conjunto, reponer piezas y conservarlo entre intervenciones. El pasamontañas cubre la interfaz de cabeza, cuello y rostro; la talega protege la superficie aluminizada durante traslado y almacenamiento.',
      'Quien administra el equipo y quien prepara al operador deben especificar estos accesorios. Al solicitar reposición, identifica conjunto, talla de talega y condición de la superficie; eso evita resolver una pieza de higiene o conservación con un accesorio que no corresponde.',
    ],
    comparativa: [
      'La reposición se decide cuando falta higiene o protección de almacenamiento, no cuando el conjunto ya está opaco. Cambiar a tiempo conserva la reflectancia y evita compartir una prenda de contacto directo con la piel.',
      'La decisión se define por la condición: pasamontañas tras uso y talega con costuras abiertas, rasgaduras o cierre fallido. Cotiza la reposición con el modelo del conjunto para que la bolsa admita el volumen sin pliegues forzados.',
    ],
    errores: [
      'Al guardar el conjunto sin bolsa, la capa aluminizada se raya contra el locker. Usar el pasamontañas como aislamiento también confunde su función: cierra la interfaz, mientras capucha y conjunto aportan la protección térmica.',
      'Para evitar ambos errores, solicita pasamontañas de fibra ignífuga y talega de nailon balístico como partidas separadas de reposición. Anota que la talla o capacidad corresponde al conjunto; una bolsa chica obliga a doblar de más la superficie reflejante.',
    ],
    faq: [
      'La pregunta frecuente es si la prenda protege del calor y por qué la bolsa importa. El pasamontañas se lava tras uso por contacto con piel, mientras la talega limita abrasión y desgarre durante el resguardo.',
      'Al escribir por WhatsApp, indica si necesitas higiene personal, reemplazo de bolsa o ambos, además del conjunto que operan. Señala costuras, cierre o tamaño de talega cuando aplique; así la reposición mantiene la función sin sustituir piezas que no faltan.',
    ],
    ficha: [
      'La ficha de pasamontañas y talega para traje de entrada reúne tejido ignífugo elástico, nailon balístico y cierre según modelo. También precisa talla única habitual del pasamontañas y tamaño de bolsa compatible; son campos que conviene copiar al anexo técnico.',
      'Pide la ficha por escrito para conservar referencia técnica voluntaria, inclusión con el conjunto y reposición independiente. Especificar que la talega evita pliegues forzados permite comparar cotizaciones y recibir accesorios que protejan tanto al operador como al equipo.',
    ],
    hermanas: [
      'La familia de entrada incorpora capucha con visor doble, guantes mitón, conjunto de corta duración, conjunto avanzado y variante para hornos, además de estos accesorios. Cada pieza puede reponerse, pero su interfaz determina si conviene pedirla sola o como conjunto.',
      'Revisa el <a href="/trajes/entrada/">traje de entrada</a> para relacionar accesorios, protección de cabeza, manos y nivel de exposición. Una requisición por pieza funciona cuando identifica el conjunto en servicio; para una configuración nueva, conviene cotejar todas las interfaces.',
    ],
    incluye: [
      'La reposición incluye un pasamontañas de fibra ignífuga y una bolsa de nailon balístico para transporte. La capucha, el traje, guantes y otros elementos no forman parte de esta reposición, aunque integren el mismo sistema operativo.',
      'Separa esos alcances en la cotización para comparar partidas equivalentes. Indicar que se busca una bolsa para almacenamiento o una prenda personal de higiene evita que una propuesta parezca completa mientras omite el accesorio que realmente requiere el conjunto.',
    ],
    relacionados: [
      'Antes de reponer estos accesorios, conviene verificar el conjunto de corta duración y la capucha de entrada. La bolsa debe proteger la superficie aluminizada y el pasamontañas debe cerrar correctamente la interfaz bajo el visor y cobertor.',
      'Consulta la <a href="/trajes/entrada/conjunto-corta-duracion/">penetración de corta duración</a> y la <a href="/trajes/entrada/capucha/">capucha de entrada</a> antes de pedir reposición. Así se confirma el modelo que acompaña los accesorios y se evita adaptar una pieza de otra configuración.',
    ],
  },
  '/trajes/entrada/capucha/': {
    aplicaciones: [
      'La capucha de entrada a la flama con visor de doble capa acompaña ingreso breve, rescate industrial y operaciones con conjunto aluminizado. Su casco duro, película dorada y cobertor de hombro se definen para la exposición del sistema, no como una capucha aislada.',
      'Mando de operación y responsables de EPP deben especificar la capucha junto con conjunto, guantes y ERA. Al solicitarla, comunica nivel de penetración, estado del visor y talla; esos datos permiten comprobar que cubra el mismo escenario que el equipo en servicio.',
    ],
    comparativa: [
      'Para ingreso y engullimiento se usa esta protección, mientras una de aproximación atiende calor radiante sin penetrar la flama. El criterio decisivo es la maniobra y tiempo de exposición declarados, no el acabado aluminizado.',
      'Describe si la cuadrilla entrará a la flama o trabajará cerca de la fuente, además de visor y conjunto actual. Esa información permite elegir protección y movilidad coherentes, en vez de subir de nivel sin verificar protocolo de entrada, salida y respiración.',
    ],
    errores: [
      'Comprar esta protección de cabeza para entrada a la flama como si fuera una pieza universal deja sin revisar su integración. Un visor rayado o una película dorada opaca reduce la función de visión y reflexión; no debe ocultarse dentro de una cotización genérica.',
      'También conviene evitar capucha sin confirmar casco, cobertor de hombro y traslape con guantes y conjunto. Solicita esos componentes y condición del visor por escrito para cotejar la reposición contra la exposición prevista, antes de destinarla a una maniobra de ingreso.',
    ],
    faq: [
      'La película dorada y su diferencia frente a una capucha de aproximación son dudas frecuentes. El visor controla deslumbramiento y la geometría se integra al conjunto de penetración, con casco y cobertor.',
      'Para pedir orientación por WhatsApp, señala si buscas reposición, el nivel de conjunto, visor dorado o transparente y daños visibles. Incluye cómo se conecta con ERA; con esos datos se revisa la pieza necesaria sin asumir que cualquier capucha aluminizada cumple la misma tarea.',
    ],
    ficha: [
      'La ficha de capucha de entrada a la flama con visor de doble capa debe describir casco duro, ajuste dentado, película dorada y cobertor de hombro. También registra su referencia técnica voluntaria y compatibilidad con el conjunto, campos que se integran al anexo de compra.',
      'Solicita la ficha por escrito con tiempo de exposición y condiciones declaradas por fabricante. Esa evidencia permite diferenciar visor, estructura y nivel de conjunto al comparar propuestas, sin presentar una norma NFPA de producto específica para entrada que no existe.',
    ],
    hermanas: [
      'La protección de cabeza trabaja junto con guantes mitón, pasamontañas y talega, conjuntos de corta duración o avanzados, y equipo para hornos. Son piezas distintas que se seleccionan por exposición y por las interfaces del operador.',
      'En la familia de <a href="/trajes/entrada/">traje de entrada</a> puedes revisar qué conjunto corresponde a cada capucha. La compra por pieza sirve para reposición identificada; una configuración nueva debe considerar visor, respiración, manos y almacenamiento desde la misma requisición.',
    ],
    incluye: [
      'La pieza para entrada a la flama considera casco duro, visor con película dorada y cobertor para hombros. El conjunto aluminizado, guantes, pasamontañas y ERA se cotizan según la configuración requerida para el ingreso.',
      'Aclara el alcance por partida para que dos propuestas sean comparables. Si se reemplaza visor o capucha, anota qué componente presenta desgaste y el conjunto asociado; así se evita pagar por accesorios no solicitados o recibir una pieza sin la interfaz necesaria.',
    ],
    relacionados: [
      'Durante la revisión de ingreso, se verifican los conjuntos de penetración y los accesorios que cierran rostro y cuello. El estado del visor también afecta la decisión de reposición porque debe permitir una revisión controlada antes del ingreso.',
      'Contrasta la <a href="/trajes/entrada/conjunto-avanzado/">penetración avanzada</a> con los <a href="/trajes/entrada/accesorios/">accesorios del conjunto</a>. Esos destinos aclaran aislamiento, pasamontañas y talega para sostener una especificación que no deje abierta la integración de la cabeza ni la conservación posterior.',
    ],
  },
  '/trajes/entrada/conjunto-avanzado/': {
    aplicaciones: [
      'El traje de entrada a fuego avanzado para engullimiento total se destina a ingreso breve con flama, rescate industrial o intervención térmica severa. Su aislamiento reforzado responde a una exposición extrema y requiere ERA, protocolo de entrada y una salida definida antes de la maniobra.',
      'La jefatura operativa y seguridad industrial deben definir cuándo esta configuración supera al conjunto de corta duración. Al cotizar, comparte escenario, número de usuarios, integración con respiración y tiempo declarado; esos datos limitan la compra al riesgo que realmente se enfrentará.',
    ],
    comparativa: [
      'Cuando la operación prevé flama envolvente, se elige este nivel y no solo por preferir más volumen. Frente a aproximación, cambia el escenario: aquí el aislamiento reforzado reduce movilidad y está pensado para penetrar durante un tiempo muy limitado.',
      'Define por escrito si el objetivo es trabajar cerca de radiación o ingresar a la flama, además de tiempo de exposición declarado y ERA. Esa comparación permite seleccionar el nivel correcto y evita equipar una intervención de aproximación con restricciones innecesarias de penetración avanzada.',
    ],
    errores: [
      'Tratar el traje de entrada avanzado como ropa de trabajo prolongado conduce a una compra incorrecta. Su volumen y movilidad limitada son parte de la protección; usarlo sin salida definida o sin ERA transforma el aislamiento en una falsa autorización operativa.',
      'Tampoco basta pedir «máximo nivel» sin revisar visor, guantes, capucha y talega. Cotiza el conjunto con tiempo y condiciones declaradas por fabricante, y compara cada interfaz antes de una práctica; así el pliego no sustituye el protocolo de ingreso.',
    ],
    faq: [
      'La duración de exposición y la exigencia de aire autónomo en un traje de entrada son las preguntas centrales. El tiempo depende de ficha y condiciones declaradas; el conjunto da margen para entrar, resolver y salir, no para permanecer.',
      'Al contactar por WhatsApp, explica si hay flama envolvente, proceso industrial, usuarios y ERA disponible. Incluye la operación que se resolverá y el tiempo esperado; con ello se puede pedir la ficha técnica pertinente y distinguir una configuración avanzada de otra de corta duración.',
    ],
    ficha: [
      'La ficha del traje de entrada a fuego avanzado para engullimiento total debe incluir aislamiento reforzado, visor, capucha, guantes y talega, además del tiempo de exposición declarado. La configuración con ERA y tallas completa los datos que se copian al anexo técnico.',
      'Pide por escrito las condiciones de evaluación del fabricante y su referencia ISO 11612 cuando la declare. No existe una norma NFPA de producto específica para entrada; conservar la ficha permite comparar exposición, componentes y restricciones sin convertir referencias en certificaciones.',
    ],
    hermanas: [
      'La familia de penetración incluye corta duración, capucha de visor doble, guantes mitón, accesorios y conjunto para hornos. Cada pieza responde a una función concreta; la más robusta no sustituye automáticamente el uso de las demás.',
      'Revisa el <a href="/trajes/entrada/">traje de entrada</a> para ubicar los niveles y complementos disponibles. Puedes cotizar reposiciones individuales, pero el conjunto completo exige verificar traslapes, respiración y almacenamiento antes de definir una partida institucional.',
    ],
    incluye: [
      'La configuración publicada del traje de entrada incluye conjunto aluminizado, capucha, guantes y talega. El equipo de respiración autónoma y el protocolo de intervención no se incorporan por asumir que el traje cubre la atmósfera.',
      'Separa ERA, tallas y accesorios en la cotización para comparar el alcance real. Esa distinción revela si la partida considera el conjunto de ingreso o solo parte de sus elementos, y permite pedir por escrito los componentes necesarios para la maniobra definida.',
    ],
    relacionados: [
      'Al especificar una penetración avanzada, compara el conjunto de corta duración y la capucha con visor doble. Esas piezas delimitan nivel de exposición, visión y protección de cabeza, aspectos que no se resuelven al nombrar el traje solamente.',
      'Consulta la <a href="/trajes/entrada/conjunto-corta-duracion/">penetración de corta duración</a> y la <a href="/trajes/entrada/capucha/">capucha de entrada</a> para cerrar la configuración. La comparación ayuda a documentar qué cambia entre una intervención breve y una de engullimiento total, desde el visor hasta el aislamiento.',
    ],
  },
  '/trajes/entrada/conjunto-corta-duracion/': {
    aplicaciones: [
      'El traje de penetración a la flama de corta duración se utiliza para ingreso rápido, rescate o cierre de válvula con exposición intensa y salida inmediata. El aluminizado multicapa integra capucha, guantes y talega, pero requiere ERA y un procedimiento previo de entrada y retirada.',
      'La operación debe ser definida por mandos de emergencia o seguridad industrial antes de pedirlo. Describe fuente térmica, usuarios, recorrido y atmósfera al cotizar; esa información permite vincular el conjunto con la maniobra, no confundirlo con equipo para trabajar junto a un horno.',
    ],
    comparativa: [
      'Para una entrada rápida y salida se usa el nivel de corta duración, mientras el avanzado añade aislamiento para engullimiento total. La decisión depende de la exposición declarada y el objetivo de la maniobra, no de cuál nombre parece ofrecer más protección.',
      'Explica si se requiere rescate, cierre de válvula o una entrada con flama envolvente, junto con el tiempo previsto y ERA. Esos datos orientan la elección entre corta duración y nivel avanzado, evitando imponer peso y movilidad limitada cuando el escenario no lo justifica.',
    ],
    errores: [
      'En un traje de entrada, un tiempo breve no autoriza operar durante una jornada. Convertirlo en permiso de permanencia ignora que el conjunto es pesado, limita movilidad y depende de aire autónomo, control externo y ruta de salida.',
      'Otro error es pedirlo sin tiempo de exposición ni condiciones del fabricante. Incluye en la cotización visor, guantes, capucha, talla y ERA requerido; así la configuración se evalúa como sistema y no como una prenda aluminizada aislada del protocolo.',
    ],
    faq: [
      'La permanencia permitida en entrada a la flama y la existencia de una norma NFPA específica son dudas frecuentes. La respuesta se toma de la ficha del fabricante; este nivel se usa con aire y nunca sustituye una evaluación de atmósfera.',
      'Manda por WhatsApp el proceso, presencia de flama, trayecto, usuarios y ERA disponible. Indica qué se resolverá durante el ingreso; con esos datos se solicita la ficha con condiciones declaradas y se evita presentar el conjunto como solución para cualquier exposición térmica.',
    ],
    ficha: [
      'La ficha del traje de penetración a la flama de corta duración reúne aluminizado multicapa, capucha, guantes, talega y tiempo máximo de exposición declarado. Anota también tallas, integración con ERA y condiciones de prueba para trasladar la configuración al expediente técnico.',
      'Pide la ficha por escrito y conserva la referencia ISO 11612 cuando el fabricante la declare. La entrada no tiene norma NFPA de producto específica; documentar los componentes y límites evita que una referencia técnica voluntaria se presente de manera incorrecta en una licitación.',
    ],
    hermanas: [
      'La familia de entrada a la flama reúne conjunto avanzado, capucha de visor doble, guantes mitón, accesorios y variante para hornos. La selección entre piezas depende del objetivo de ingreso, visión y contacto esperado en cada maniobra.',
      'Explora el <a href="/trajes/entrada/">traje de entrada</a> para cotejar el conjunto completo con sus reposiciones. Puedes adquirir componentes por separado, pero una configuración nueva exige confirmar ERA, traslapes y la forma de resguardar superficies aluminizadas entre servicios.',
    ],
    incluye: [
      'La partida del traje de entrada incluye el conjunto aluminizado, capucha, guantes y talega de transporte. ERA, ropa interior de fibra no inflamable y elementos de intervención se definen aparte porque dependen de la atmósfera y procedimiento de cada operación.',
      'Aclara esos límites al comparar propuestas para identificar qué partida incorpora protección corporal y qué falta para una maniobra habilitada. Separar por escrito respiración, talla y accesorios evita que una cotización de conjunto se interprete como un sistema de ingreso listo para usar.',
    ],
    relacionados: [
      'Antes del ingreso, se revisan el conjunto avanzado y los guantes mitón junto con esta configuración. La comparación muestra cuándo sube el aislamiento y cómo la protección de manos condiciona la tarea que puede realizarse dentro de la exposición.',
      'Consulta la <a href="/trajes/entrada/conjunto-avanzado/">penetración avanzada</a> y los <a href="/trajes/entrada/guantes/">guantes mitón</a>. Revisar ambos destinos ayuda a documentar el límite de exposición, la destreza disponible y las interfaces que deben verificarse antes de cerrar la requisición.',
    ],
  },
  '/trajes/entrada/guantes/': {
    aplicaciones: [
      'Los guantes mitón para entrada a la flama máximo aislamiento se destinan a ingreso con contacto térmico directo y corto. Su palma aislante y forma cerrada priorizan protección sobre destreza, por lo que el procedimiento debe prever tareas realizables sin manipulación fina dentro del conjunto.',
      'La jefatura que define la entrada y quien administra EPP deben especificar estos guantes con capucha y mangas compatibles. Al cotizar, indica exposición, talla, estado de palma y puño; así se revisa el traslape que evita dejar la muñeca expuesta.',
    ],
    comparativa: [
      'La forma mitón privilegia masa térmica y pocas costuras, mientras un guante de tres dedos ofrece mayor movimiento. La elección depende de contacto directo y duración prevista, no de preferir comodidad durante una tarea de ingreso.',
      'Indica qué trabajo debe ejecutarse y si exige precisión, agarre o solo protección de manos. Cuando la operación pide destreza fina, hay que revisar el procedimiento o el nivel de exposición; no sustituir mitones de penetración por una opción menos aislante sin definir el riesgo.',
    ],
    errores: [
      'Elegir esta protección de entrada a la flama para una tarea de precisión es un error. La destreza mínima es una consecuencia del aislamiento; si se necesita manipular piezas finas, la maniobra y no solo el guante requiere revisión.',
      'También falla una compra que omite puño y traslape con la manga. Solicita palma aislante, talla y condición de costuras por escrito; un forro comprimido, palma vitrificada o dorso opaco exige retiro, aunque el guante conserve una apariencia exterior completa.',
    ],
    faq: [
      'La pérdida de destreza y la diferencia frente a guantes de aproximación son dudas habituales. También se aclara que el puño debe traslapar la manga para no exponer la muñeca en ingreso.',
      'Al escribir por WhatsApp, comparte nivel de conjunto, talla, tipo de tarea y daño observado en palma o forro. Menciona si se requiere reposición individual; con esos datos se puede identificar el mitón compatible sin minimizar las restricciones de la operación.',
    ],
    ficha: [
      'La ficha de guantes mitón para entrada a la flama máximo aislamiento debe registrar forma mitón, palma de alto aislamiento, puño de traslape y talla. Estos campos explican la protección y limitación de movimiento que deben quedar visibles en la requisición técnica.',
      'Pide la ficha por escrito junto con referencia del conjunto de entrada y condiciones declaradas por fabricante. Documentar material, interfaz de muñeca y reposición separada permite comparar la partida sin atribuir una certificación que no haya sido publicada para el modelo.',
    ],
    hermanas: [
      'La protección mitón acompaña capucha con visor doble, pasamontañas, talega, conjunto de corta duración, avanzado y equipo para hornos. La mano es una interfaz crítica: cada opción debe coincidir con la manga y exposición correspondiente.',
      'Revisa el <a href="/trajes/entrada/">traje de entrada</a> para ver cómo se integra cada componente. Los mitones pueden reponerse por separado, pero el pedido debe señalar conjunto y talla para que el puño cubra correctamente la unión con la manga.',
    ],
    incluye: [
      'El par se incluye con el conjunto publicado y se cotiza suelto para reposición. Capucha, traje, talega y ERA no son parte de una partida individual de guantes, aunque operen juntos durante el ingreso.',
      'Distinguir esas partidas hace comparables dos cotizaciones. Especifica si buscas un par de reemplazo, talla y conjunto asociado; así el alcance de la orden no confunde protección de manos con un sistema completo de entrada a la flama.',
    ],
    relacionados: [
      'Antes de seleccionar los mitones, conviene revisar el conjunto de corta duración y la capucha. Ambas piezas definen exposición y traslape, mientras el visor y la movilidad establecen qué trabajo puede realizarse en el tiempo disponible.',
      'Consulta la <a href="/trajes/entrada/conjunto-corta-duracion/">penetración de corta duración</a> y la <a href="/trajes/entrada/capucha/">capucha con visor doble</a>. Esa revisión conecta protección de manos, cabeza, traslape de muñeca y tiempo de ingreso en una misma especificación técnica operativa.',
    ],
  },
  '/trajes/entrada/hornos/': {
    aplicaciones: [
      'El traje para mantenimiento de hornos visor transparente se utiliza al revisar refractario, retirar material o realizar reparación puntual en caliente. Conserva aislamiento de corta duración, pero suma visor transparente y parches de codos y rodillas para tareas donde hay que ver y apoyarse.',
      'Seguridad industrial y responsables de mantenimiento deben definir proceso, atmósfera y necesidad de ERA. Al solicitarlo, describe superficie caliente, postura y material a inspeccionar; así la configuración responde al trabajo dentro del horno y no a una entrada estándar de rescate.',
    ],
    comparativa: [
      'Cuando hay que distinguir el color real del refractario, se prefiere esta variante frente al conjunto de entrada estándar. El visor doble transparente reduce el efecto de la película dorada y los parches soportan apoyos repetidos de trabajo.',
      'La elección se define por la tarea: mantenimiento y observación requieren visor transparente, mientras el ingreso general puede usar visor dorado. Indica tiempo de exposición, codos, rodillas y temperatura de superficie para revisar aislamiento, suela y parches dentro de la misma propuesta.',
    ],
    errores: [
      'Usar visor dorado en un traje de entrada para hornos altera la percepción del refractario y del material. También resulta insuficiente pedir el conjunto estándar para un trabajo de apoyo: sin parches, codos y rodillas concentran desgaste acelerado.',
      'Evita asumir que la atmósfera es respirable por tratarse de mantenimiento. Solicita visor de doble capa, parches y suela apta para superficie caliente, y define si requiere ERA; así la cotización incorpora los límites del proceso además de la protección corporal.',
    ],
    faq: [
      'La diferencia del visor transparente y el aislamiento de la variante son preguntas habituales. Conserva el nivel de corta duración, pero permite ver color real y añade refuerzo donde el operador se apoya.',
      'Para pedir información por WhatsApp, indica horno, tipo de mantenimiento, superficie caliente, necesidad de ERA y talla. Describe rayas del visor o desgaste de parches si es reposición; esos datos ayudan a diferenciar una intervención de horno de otra entrada aluminizada.',
    ],
    ficha: [
      'La ficha del traje para mantenimiento de hornos visor transparente debe incluir visor transparente de doble capa, parches en codos y rodillas y suela apta para superficie caliente. Agrega aislamiento de corta duración, talla y definición de ERA al anexo técnico.',
      'Pide por escrito la referencia ISO 11612 y condiciones declaradas por fabricante cuando aplique. Su estatus es referencia técnica voluntaria en México; conservar la ficha permite evaluar proceso, tiempo y materiales sin tratar la referencia como certificación de producto.',
    ],
    hermanas: [
      'Dentro de la familia de entrada, esta variante convive con corta duración, penetración avanzada, capucha, guantes mitón y accesorios. Se distingue por el visor y refuerzos, no porque elimine la necesidad de aire, protocolo o límites de exposición.',
      'Consulta el <a href="/trajes/entrada/">traje de entrada</a> para comparar las piezas de la familia. Puedes comprar esta variante completa o reponer componentes, siempre que la requisición registre visor, superficie de trabajo, talla e interfaces con el resto del conjunto.',
    ],
    incluye: [
      'La configuración del traje de entrada incluye conjunto aluminizado con parches, capucha de visor transparente doble, guantes mitón y talega. No incluye ERA, ropa de trabajo de fibra no inflamable ni herramienta de intervención, que se determinan con el proceso.',
      'Separa esos elementos para que las ofertas sean comparables. Una cotización clara muestra qué protege cuerpo y visión, y qué corresponde a respiración o herramientas; así se evita interpretar una variante para hornos como un paquete total para intervenir la instalación.',
    ],
    relacionados: [
      'Para trabajo en caliente, se revisan el conjunto de corta duración y los guantes mitón junto con esta variante. El primero establece la base de aislamiento y los segundos condicionan manipulación, mientras visor y parches adaptan el sistema.',
      'Compara la <a href="/trajes/entrada/conjunto-corta-duracion/">configuración de corta duración</a> y los <a href="/trajes/entrada/guantes/">guantes mitón</a> antes de cotizar. Esa lectura conecta aislamiento, visión, apoyo, suela y destreza para documentar el alcance real de mantenimiento dentro del horno.',
    ],
  },
};
