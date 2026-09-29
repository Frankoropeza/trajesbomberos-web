import type { Duo } from './index';

export const DUO_P_H: Record<string, Record<string, Duo>> = {
  '/botas/bota-de-brigada-industrial/': {
    errores: [
      'La bota para brigada industrial se compra según la tarea autorizada, no por apariencia. Pedir calzado de seguridad para un conato sin definir el análisis de riesgo puede dejar fuera la protección necesaria; usarlo para ataque interior rebasa el límite de la partida y de la operación.',
      'Evita anotar solo talla y cantidad. La requisición debe distinguir la referencia NOM-113-STPS-2009, el riesgo industrial y la interfaz con el resto del EPP; así la licitación no confunde una bota de seguridad con una bota para bombero.',
    ],
    faq: [
      'La bota para brigada industrial aclara si el alcance es control inicial de conatos o una operación que requiere equipo estructural, y cómo confirmar talla. También separa una referencia industrial de una autorización para entrar a un incendio en interiores.',
      'Al escribir por WhatsApp, comparte la tarea de la brigada, número de usuarios, tallas, peligros identificados y si usan pantalón de protección. Con esos datos se puede solicitar una configuración que respete el análisis de riesgo y el procedimiento.',
    ],
    ficha: [
      'Para requisitar bota para brigada industrial, deja por escrito el uso limitado por análisis de riesgo, la referencia NOM-113-STPS-2009 y la talla o equivalencia por usuario. El calzado de seguridad se selecciona por la tarea, no como sustituto de protección para combate interior.',
      'Pide que la cotización identifique modelo, componentes declarados, tallas y alcance de uso. Registrar esos campos permite cotejar los pares recibidos contra la partida y documentar por qué el equipo corresponde a una brigada industrial específica.',
    ],
  },
  '/botas/bota-de-hule-estructural/': {
    errores: [
      'La bota de hule estructural pierde sentido si se compra por talla anotada sin prueba con calcetín y pantalón. Un talón que se levanta o dedos contra la puntera reducen control en escalera; secarla con calor directo también puede afectar hule, forro y uniones.',
      'No atribuyas certificación por bandas o por la construcción impermeable. En una licitación, solicita la declaración del modelo, puntera, entresuela y referencia NFPA 1970; comparar fotos en lugar de esos datos deja partidas técnicamente distintas bajo el mismo nombre.',
    ],
    faq: [
      'La bota de hule estructural responde si cada modelo incorpora puntera de acero y cómo descontaminarla. El caucho facilita la limpieza, pero el procedimiento del fabricante define el cuidado de hule, suela, forro y agarraderas después de una exposición.',
      'Para resolver la cotización por WhatsApp, manda tallas en centímetros, operación prevista, cantidad y si se requiere puntera o entresuela. Indicar el pantalón y calcetín de trabajo ayuda a confirmar una prueba de ajuste que no dependa solo de una equivalencia.',
    ],
    ficha: [
      'La requisición de una bota de hule estructural debe separar caucho o hule vulcanizado, puntera, entresuela y forro aislante, además de talla confirmada. La referencia publicada es NFPA 1970, antes NFPA 1971, y debe contrastarse con la declaración del modelo concreto.',
      'Solicita esos campos por escrito junto con suela y uso previsto. Así recepción puede revisar planta, talla y componentes contra la orden, sin transferir la norma o la configuración de una bota similar a la que realmente se entrega.',
    ],
  },
  '/botas/bota-de-piel-estructural/': {
    errores: [
      'La bota de piel estructural no se elige solo porque se siente cómoda en una prueba corta. Ignorar membrana, forro, puntera, entresuela y suela puede producir un par adecuado para caminar pero sin la construcción documentada que pide la operación estructural.',
      'Secar piel con calor directo o reparar cierre y membrana con adhesivos improvisados altera sus materiales. Para una compra defendible, pide configuración y referencia NFPA 1970 por escrito; como no hay modelos publicados, no conviene inferir componentes ni certificaciones.',
    ],
    faq: [
      'La bota de piel estructural explica que no hay un modelo publicado y que el peso depende de la construcción, no del material aislado. Las preguntas ayudan a definir membrana, cierre, talla y las condiciones de la jornada antes de comparar propuestas.',
      'Envía por WhatsApp la operación, número de pares, tallas, necesidad de puntera, entresuela, membrana y horas de uso. Esa información permite pedir una ficha del modelo propuesto y comprobar el ajuste con pantalón y calcetín de trabajo.',
    ],
    ficha: [
      'En la requisición de bota de piel estructural indica combate estructural según modelo, construcción de piel, forro y membrana, además de talla validada con el conjunto. NFPA 1970 es la referencia publicada; la documentación debe corresponder al modelo que se oferte.',
      'Poner estos datos en la partida evita que la comodidad sustituya la especificación. Solicita también cierre, suela, puntera y entresuela cuando se requieran, para comparar configuraciones completas y recibir un par verificable por cada usuario.',
    ],
  },
  '/botas/bota-forestal/': {
    errores: [
      'La bota forestal para brigadista no sustituye una bota estructural para ataque interior. Confundir línea de fuego exterior con combate en edificio deja una brecha de protección; también es un error pedir caña y agujetas sin probar estabilidad en pendiente y terreno irregular.',
      'No uses calor directo para secar piel ni determines la talla por una tabla sin caminar con calcetín de trabajo. La partida debe precisar suela, caña, ajuste y referencia NFPA 1950 para que operación, mantenimiento y licitación hablen del mismo tipo de bota.',
    ],
    faq: [
      'La bota forestal para brigadista resuelve por qué no debe entrar a ataque estructural y cómo evaluar una talla mexicana. Sus agujetas, caña y suela se revisan para marcha, ceniza y pendiente, no como una etiqueta intercambiable con calzado de combate interior.',
      'Comparte por WhatsApp el tipo de terreno, tiempo de marcha, tallas, tamaño de cuadrilla y exposición prevista. Con ello se pueden solicitar datos de piel, suela, caña y mantenimiento para una opción que se pruebe con el equipo de trabajo.',
    ],
    ficha: [
      'Una bota forestal para brigadista se requisita con uso para línea de fuego y terreno irregular, corte de piel con agujetas y caña, además de talla probada. La referencia publicada es NFPA 1950, que absorbió NFPA 1977, sin trasladar esa referencia a modelos no documentados.',
      'Exige por escrito suela para alta temperatura según modelo, sistema de ajuste y declaración aplicable. Esos campos ayudan a recibir pares homogéneos, programar limpieza y evitar que una compra para operación exterior se presente como equipo estructural.',
    ],
  },
  '/botas/croydon-filtrex/': {
    caracteristicas: [
      'Croydon Filtrex combina construcción de caucho vulcanizado, altura de 13 pulgadas y puntera con entresuela de acero. El color negro con bandas amarillas y su integración al kit estructural Profesional son datos de configuración; la talla y el ajuste siguen definiéndose por usuario.',
      'Al cotizar Croydon Filtrex, confirma por escrito altura, tallas de 25 a 31 cm, puntera, entresuela y componentes recibidos. Así la orden conserva la misma configuración evaluada y permite revisar su compatibilidad con pantalón, calcetín y operación estructural.',
    ],
    faq: [
      'Croydon Filtrex responde qué código identifica el modelo, qué altura declara y en qué kit aparece. Esas preguntas ubican la bota dentro de una partida estructural, pero no reemplazan la prueba individual de talla ni la confirmación de componentes de la configuración ofertada.',
      'Para pedir información por WhatsApp, incluye código BOT1002, tallas de los usuarios, cantidad y si formará parte del kit Profesional. Solicita además la declaración de norma y confirma que puntera, entresuela y altura sean las que llevará cada par.',
    ],
    ficha: [
      'Croydon Filtrex se identifica con código BOT1002, caucho vulcanizado, 13 pulgadas de altura y tallas de 25 a 31 cm. Declara NFPA 1971 y ASTM F903-10 como información del fabricante, no como certificación verificada.',
      'Pide la ficha con código, talla, puntera y entresuela de acero antes de emitir orden. Registrar la declaración normativa y la configuración evita que una referencia general se convierta en una afirmación sobre un par que no se ha confirmado.',
    ],
    otros: [
      'Croydon Filtrex pertenece al grupo de botas de hule estructural junto con Romak Fire Workman Fire y Sköld Workman. Filtrex declara 13 pulgadas y tallas de 25 a 31 cm; las otras alternativas cambian en altura, códigos, peso y construcción interior publicada.',
      'Compara los modelos por puntera, entresuela, forro, talla y declaración de norma, no por el color. Una cotización con las tres configuraciones separadas permite decidir cuál se integra mejor al pantalón y a la operación de cada usuario.',
    ],
  },
  '/botas/romak-fire-ranger-bota/': {
    caracteristicas: [
      'Romak Fire Fire Ranger es una bota forestal de piel negra con agujetas y caña alta, identificada dentro de la línea Fire Ranger. No hay código, altura, suela, puntera ni norma declarados; esos datos no deben completarse a partir de la fotografía o del nombre comercial.',
      'Al solicitar esta bota forestal, pide por escrito ficha técnica, construcción final, tallas y alcance de uso. Describe terreno, marcha y exposición de la cuadrilla para que la cotización confirme lo que se entrega, sin convertirla en equivalente estructural.',
    ],
    faq: [
      'La consulta aclara que el código debe confirmarse al cotizar, que el fabricante no declara una norma y que solo están identificadas piel negra, agujetas y caña alta. Así se delimita con honestidad la información disponible del modelo forestal.',
      'Manda por WhatsApp la actividad forestal, tallas, cantidad, terreno y tiempo de marcha. Pide la ficha técnica junto con la cotización para confirmar suela, componentes y configuración antes de asignar la bota a una cuadrilla.',
    ],
    ficha: [
      'La ficha publicada describe una bota forestal de piel negra, agujetas y caña alta, sin código ni norma declarados. No permite afirmar altura, puntera, membrana o desempeño; esos campos deben llegar documentados con la cotización.',
      'Solicita por escrito ficha técnica, tallas y declaración de conformidad antes de comparar alternativas. Esta precaución mantiene la requisición dentro de los datos reales del modelo y evita asignarlo para una operación que la documentación no respalda.',
    ],
    otros: [
      'Frente a Strong Fire Bota brigadista forestal caña corta, esta alternativa comparte uso forestal, pero su ficha solo identifica piel negra, agujetas y caña alta. Strong Fire declara materiales, planta y suela adicionales; ningún modelo tiene norma declarada.',
      'Para compararlas, solicita en la misma cotización talla, altura, sistema de cierre, suela, planta y ficha técnica. Así la diferencia entre información publicada y configuración confirmada queda clara antes de decidir qué bota corresponde a la marcha de la cuadrilla.',
    ],
  },
  '/botas/romak-workman-fire/': {
    caracteristicas: [
      'Romak Fire Workman Fire declara 33 cm de altura, caucho natural vulcanizado en autoclave y espuma aislante de PU impermeable. La suela antiderrapante, puntera y entresuela de acero se leen como componentes distintos para revisar protección de planta, dedos y estabilidad.',
      'Para cotizar este modelo, confirma código BOT1004, tallas mexicanas de 26 a 31 cm, altura y componentes por escrito. Una orden detallada permite comprobar que el par recibido conserva la configuración revisada con pantalón y calcetín de trabajo.',
    ],
    faq: [
      'El código BOT1004, el rango de 26 a 31 cm mexicanos y el peso promedio declarado de 3,520 g orientan la selección. La prueba con el usuario determina que talón, puntera y caña funcionen juntos.',
      'Al consultar por WhatsApp, indica tallas, cantidad, operación y si requieres confirmar altura o peso. Solicita la declaración de norma del fabricante para que NFPA 1971, ASTM F903-10 e ISO 9001:2008 de proceso se registren con precisión.',
    ],
    ficha: [
      'La ficha de la bota usa código BOT1004 y declara caucho natural vulcanizado, 33 cm de altura, espuma de PU, puntera y entresuela de acero. Las tallas mexicanas van de 26 a 31 cm y el peso promedio publicado es 3,520 g.',
      'La norma se declara como NFPA 1971, ASTM F903-10 e ISO 9001:2008 para proceso, sin certificación verificada. Pide esa declaración y la talla por escrito para recibir una configuración que pueda inspeccionarse contra la orden.',
    ],
    otros: [
      'Entre las botas de hule estructural publicadas, este modelo se compara con Croydon Filtrex y Sköld Workman. Workman Fire declara 33 cm y espuma de PU; Filtrex informa 13 pulgadas, mientras Sköld publica forro de lana ignífuga y códigos FPBSK.',
      'Revisa tallas, peso, puntera, entresuela, forro y norma declarada de cada una en una sola matriz. Esa comparación evita decidir por bandas reflejantes o marca y permite solicitar una bota compatible con el conjunto estructural de la corporación.',
    ],
  },
  '/botas/skold-workman/': {
    caracteristicas: [
      'Sköld Workman declara caucho natural vulcanizado, forro de lana ignífuga con espuma insulada y PU expandido. Suma protector de tobillo, puntera y entresuela de acero, cambrión metálico, tacón moldeado y suela antideslizante para revisar cada parte dentro de la configuración.',
      'Antes de cotizar Sköld Workman, confirma código FPBSK, equivalencia mexicana y estadounidense, peso de 3,150 g y componentes. Estos datos por escrito permiten contrastar el par con la orden y probar estabilidad con pantalón, calcetín y movimientos de operación.',
    ],
    faq: [
      'Sköld Workman resuelve el código FPBSK, el peso declarado de 3,150 g y la forma de expresar tallas: FPBSK-05 a FPBSK-11, equivalente a mexicano 5 a 11 y americano 6 a 12. La equivalencia debe confirmarse con cada usuario.',
      'Comparte por WhatsApp los códigos o tallas requeridas, cantidad, operación y si necesitas puntera o entresuela. Pide que la cotización incluya la declaración de norma para distinguir los datos del fabricante de una certificación que no está verificada.',
    ],
    ficha: [
      'Sköld Workman se identifica con código FPBSK, caucho natural vulcanizado y 3,150 g declarados. Publica puntera y entresuela de acero, forro de lana ignífuga, plantilla de caucho acolchada y tallas FPBSK-05 a FPBSK-11 con equivalencias mexicana y estadounidense.',
      'El fabricante declara NFPA 1971-2007, NFPA 1992-2005, ASTM F2413-05 y CSA Z195-02. Solicita esa declaración junto con códigos y talla, para evaluar el requisito vigente sin presentar las ediciones publicadas como certificación verificada.',
    ],
    otros: [
      'Sköld Workman comparte categoría con Croydon Filtrex y Romak Fire Workman Fire. Su diferencia publicada incluye forro de lana ignífuga, cambrión metálico y códigos de talla binacionales; Filtrex y Workman Fire comunican otros rangos de talla, alturas y materiales interiores.',
      'Pide una comparación por talla, peso, planta, forro y norma declarada. Revisar esos criterios junto al pantalón de cada usuario permite elegir una bota de hule estructural con datos comprobables, en vez de equiparar configuraciones distintas por su forma exterior.',
    ],
  },
  '/botas/strongfire-bota-forestal/': {
    caracteristicas: [
      'Strong Fire Bota brigadista forestal caña corta declara piel hidrofugada de 2.0 a 2.4 mm, tubo de 24 cm según talla y planta de Kevlar antiperforación. También publica doble membrana, cierre YKK y suela de hule acrilonitrilo para altas temperaturas.',
      'Al cotizar esta bota de caña corta, confirma por escrito talla, código, cierre, planta y suela. La configuración debe relacionarse con terreno, marcha y cuidado de piel y membrana, pues no hay norma declarada para el modelo.',
    ],
    faq: [
      'La ficha de la bota responde qué material publica, qué planta declara y cuál es su estatus normativo. Identifica piel hidrofugada y planta de Kevlar, pero confirma que no hay norma declarada para convertir esas características en certificación.',
      'Para solicitarla por WhatsApp, comparte tallas, cantidad, recorrido, terreno y necesidad de cierre o ajuste. Pide también código y ficha técnica para que piel, membrana, planta y suela de la partida queden definidos antes de la orden.',
    ],
    ficha: [
      'La bota declara piel hidrofugada de 2.0 a 2.4 mm, tubo de 24 cm según talla, planta de Kevlar antiperforación y suela de hule acrilonitrilo. El código se confirma al cotizar y no hay norma declarada.',
      'Solicita por escrito cierre YKK, doble membrana, talla y alcance de la configuración propuesta. Dejar esos campos en la requisición permite comparar lo que se cotiza contra el uso forestal real, sin atribuir certificación a los materiales publicados.',
    ],
    otros: [
      'Dentro del calzado forestal, esta bota se compara con Romak Fire Fire Ranger. Strong Fire publica piel hidrofugada, planta de Kevlar, cierre y suela; Fire Ranger solo identifica piel negra, agujetas y caña alta. Ninguna ficha declara norma.',
      'La comparación útil pide talla, cierre o agujetas, altura, suela, planta y documentación de ambos modelos. Así la cuadrilla puede evaluar movilidad y mantenimiento en su terreno sin suponer que dos botas forestales tienen el mismo alcance.',
    ],
  },
  '/cascos/bullard-fh911h/': {
    caracteristicas: [
      'Bullard Wildland FH911H declara carcasa de termoplástico Ultem, suspensión automática de seis puntos y clips para goggles y bandas reflejantes. Acepta soportes para viseras y pantallas faciales, mientras el barbiquejo Nomex ajustable y la sombra interior se confirman dentro de la configuración.',
      'En la cotización de Bullard Wildland FH911H confirma código FH911H, color, goggles, visera, pantalla y bandas. Especificar esos accesorios por escrito permite recibir el conjunto forestal evaluado y probarlo con protección ocular, cubrenuca y la tarea exterior prevista.',
    ],
    faq: [
      'Bullard Wildland FH911H responde el código FH911H, los colores amarillo, rojo, blanco y negro, y por qué su ficha cita ediciones antiguas. Declara NFPA 1977 edición 1998 y ANSI Z89.1-1997; se reportan tal cual para contrastarlas con el requisito de compra.',
      'Manda por WhatsApp color, cantidad, operación forestal, goggles o visor requeridos y marcaje institucional. Solicita además la documentación del modelo para confirmar la configuración, sin asumir que una clase industrial o una edición anterior resuelven toda la operación.',
    ],
    ficha: [
      'Bullard Wildland FH911H se identifica con código FH911H, termoplástico Ultem, suspensión de seis puntos y barbiquejo Nomex ajustable. La ficha declara NFPA 1977 ed. 1998 y ANSI Z89.1-1997 Tipo 1 Clase C, E y G como declaración del fabricante.',
      'Pide por escrito color, clips, bandas, goggles y soportes de visor o pantalla. Conservar el estatus declarado y esos accesorios en la partida permite comparar la edición publicada con el requisito actual, sin llamar certificado a un dato que no lo declara.',
    ],
  },
  '/cascos/bullard-ltx/': {
    caracteristicas: [
      'Bullard LTX declara termoplástico de alto impacto, forro interior, ajuste ratchet y suspensión de seis puntos. Añade cintas 3M Scotchlite, contorno recubierto en cuero, cubrenuca de Nomex y visor de policarbonato de cuatro pulgadas para revisar la configuración como sistema.',
      'Al cotizar Bullard LTX, confirma código CBOM1007, amarillo o rojo, visor, cubrenuca y barbiquejo de dos puntos. Anotar esos elementos permite comprobar la interfaz con máscara de ERA y recibir el casco que se evaluó, no una variante visualmente parecida.',
    ],
    faq: [
      'Bullard LTX responde el código CBOM1007, sus colores disponibles y el estatus de la norma. La ficha declara NFPA 1971 edición 2018 sin número de certificación, por lo que se comunica como declaración del fabricante y no como certificación verificada.',
      'Para pedir datos por WhatsApp, comparte cantidad, color, uso estructural, visor y compatibilidad con ERA. Solicita que la respuesta incluya código, accesorios y declaración de norma, de modo que la partida pueda compararse con claridad antes de una compra institucional.',
    ],
    ficha: [
      'Bullard LTX publica código CBOM1007, carcasa termoplástica de alto impacto, suspensión de seis puntos, protector de nuca de Nomex y visor de policarbonato de cuatro pulgadas. Declara NFPA 1971 ed. 2018, sin número de certificación publicado.',
      'Solicita por escrito color, ajuste ratchet, barbiquejo, visor y documentación correspondiente. Mantener la norma como declaración del fabricante permite especificar el casco con rigor y comprobar que la configuración entregada funciona con máscara, capucha y ERA.',
    ],
    otros: [
      'Bullard LTX comparte casco estructural tradicional con Bullard UST LW y Sköld Viking. LTX publica termoplástico, visor de cuatro pulgadas y colores amarillo o rojo; UST LW declara fibra de vidrio y ReTrack, mientras Viking usa barbiquejo de cuatro puntos.',
      'Compara carcasa, retención, cubrenuca, protección ocular, código y norma declarada de los tres modelos. Esa revisión ayuda a definir cuál se prueba con la máscara de ERA de la corporación, sin intercambiar accesorios o estatus normativos entre fichas.',
    ],
  },
  '/cascos/bullard-ust-lw/': {
    caracteristicas: [
      'Bullard UST LW declara carcasa de fibra de vidrio con resina ignífuga termoestable, ajuste Sure-Lock y visor ReTrack integrado. Careta o goggles son opcionales, mientras el barbiquejo Nomex de dos piezas y la nuquera con Nomex y algodón FR deben definirse por configuración.',
      'Para cotizar Bullard UST LW, especifica ReTrack o careta, goggles, código según configuración y compatibilidad con ERA. El peso declarado cambia entre menos de 1.54 kg con ReTrack y menos de 1.77 kg con careta, por lo que debe quedar anotado en la partida.',
    ],
    faq: [
      'Bullard UST LW aclara que el código depende de la configuración, que el peso declarado varía con ReTrack o careta y que no tiene foto propia en el catálogo. Estas respuestas centran la compra en accesorios, ajuste y documentación, no en una imagen ilustrativa.',
      'Comparte por WhatsApp cantidad, opción de visor, careta o goggles, uso y máscara de ERA existente. Pide el código final y la declaración de NFPA 1971-2018 para que la cotización corresponda a la combinación concreta que se pretende recibir.',
    ],
    ficha: [
      'Bullard UST LW publica carcasa de fibra de vidrio, ajuste Sure-Lock con seis combinaciones y visor ReTrack, careta o goggles según configuración. Declara NFPA 1971-2018 y protección ocular ANSI/ISEA Z87.1; la norma se presenta como declaración del fabricante.',
      'El código debe confirmarse al cotizar. Solicita por escrito la opción de protección ocular, barbiquejo, nuquera y peso aplicable, para comprobar que casco y accesorios se integran con el ERA sin llamar certificación verificada a la declaración publicada.',
    ],
    otros: [
      'Bullard UST LW se compara con Bullard LTX y Sköld Viking como casco estructural tradicional. UST LW destaca por ReTrack, careta o goggles y ajuste Sure-Lock; LTX publica termoplástico y visor de cuatro pulgadas, mientras Viking declara retención de cuatro puntos.',
      'Revisa peso, carcasa, protección ocular, cubrenuca y declaración de norma por modelo. Solicitar esos criterios en paralelo facilita una prueba con máscara de ERA y evita elegir solo por el estilo Nueva York o por un accesorio aislado.',
    ],
  },
  '/cascos/skold-viking/': {
    caracteristicas: [
      'Sköld Viking declara termoplástico de alta densidad, faldón con Nomex, nuquera aluminizada y ajuste tipo matraca con suspensión de red. El barbiquejo de cuatro puntos, protector facial de policarbonato y soporte trasero requieren confirmarse con la máscara y el ERA de la corporación.',
      'Al cotizar Sköld Viking, solicita código FPCM, color amarillo, visor, retención y compatibilidad con ERA por escrito. La ficha menciona película térmica para 800 °C según fabricante; ese dato debe leerse junto con el escenario y no como un alcance universal.',
    ],
    faq: [
      'Sköld Viking responde el código FPCM, la compatibilidad con ERA que declara el fabricante y la protección facial publicada. La interfaz con máscara y arnés se confirma físicamente, aunque el modelo reporte compatibilidad, porque visor, cubrenuca y geometría se usan como conjunto.',
      'Envía por WhatsApp cantidad, máscara de ERA, color y accesorios necesarios. Pide la configuración y la declaración NFPA 1971 / EN 443:2009 para que la cotización mantenga el estatus de fabricante y la edición requerida por tu requisición.',
    ],
    ficha: [
      'Sköld Viking se identifica con código FPCM, termoplástico de alta densidad, ajuste tipo matraca y barbiquejo de cuatro puntos. Publica protector facial de policarbonato antirrayas y antiempaño, color amarillo y compatibilidad con ERA declarada por el fabricante.',
      'La norma declarada es NFPA 1971 / EN 443:2009, sin certificación verificada. Solicita código, visor, accesorios y documentación por escrito para probar la interfaz real con máscara y mantener el estatus normativo exacto en la partida.',
    ],
    otros: [
      'Sköld Viking pertenece a los cascos estructurales tradicionales con Bullard LTX y Bullard UST LW. Viking publica termoplástico, retención de cuatro puntos y visor antirrayas; LTX declara suspensión de seis puntos, mientras UST LW integra ajuste Sure-Lock y visor ReTrack.',
      'Compara retenedor, carcasa, protección ocular, cubrenuca, código y norma declarada antes de ordenar. Una prueba con ERA y capucha permite elegir por compatibilidad operativa, sin suponer que los tres modelos conservan el mismo visor o la misma documentación.',
    ],
  },
  '/cascos/casco-brigada-industrial/': {
    errores: [
      'Un casco para brigada industrial se compra por análisis de riesgo, no para completar uniforme. Usar casco industrial con careta en ataque interior, cuando la tarea exige casco estructural y ERA, deja una brecha entre el alcance del equipo y la exposición real.',
      'Tampoco basta anotar una clase industrial sin definir conato, evacuación o entrada a estructura. La licitación debe registrar NOM-002-STPS-2010, límites de respuesta, careta y accesorios para impedir que una partida industrial se use de forma improvisada.',
    ],
    faq: [
      'El casco para brigada industrial aclara cuándo un casco industrial puede atender un conato dentro del procedimiento y cuándo no sustituye un casco estructural. También identifica Bullard LTX como modelo relacionado con el kit Romak BOM1001, sin generalizarlo a toda brigada.',
      'Al escribir por WhatsApp, describe tarea autorizada, peligros, necesidad de ERA, número de usuarios, color y careta. Esos datos permiten pedir una configuración y documentación que se ajusten al análisis de riesgo, no solo a la apariencia del casco.',
    ],
    ficha: [
      'Para requisitar casco para brigada industrial indica uso según análisis de riesgo, NOM-002-STPS-2010 y si la partida es casco industrial bajo NOM-115-STPS-2009 / ANSI Z89.1. Si habrá ataque interior, debe especificarse casco estructural y un conjunto compatible.',
      'Incluye careta, color, marcaje, ajuste y límites de operación por escrito. Con esos campos, recepción puede comprobar que el casco responde a la tarea autorizada y que una referencia industrial no se haya convertido en un supuesto equipo de combate interior.',
    ],
  },
  '/cascos/casco-estructural-europeo/': {
    errores: [
      'El casco estructural europeo tipo jet no queda definido al pedir visor dorado. Sin modelo, retención, cobertura, protección ocular y documentación, la compra puede recibir un casco que no se integra con máscara, comunicaciones ni el alcance estructural solicitado.',
      'Asumir equivalencia entre EN 443:2008 y otra norma sin respaldo documental también compromete la licitación. Antes de instalar accesorios, evita perforaciones o adaptadores no previstos: lámpara y comunicación deben corresponder al modelo y mantenerse durante limpieza e inspección.',
    ],
    faq: [
      'Sin modelos publicados, la consulta del casco aclara que el visor no reemplaza una máscara de ERA. Delimita visor exterior, protección ocular y compatibilidad con comunicaciones para formular una solicitud real, sin inventar disponibilidad.',
      'Manda por WhatsApp el uso estructural, ERA existente, color, visor, comunicación y cantidad. Solicita un modelo con documentación de fabricante y describe qué cobertura necesitas; así se puede evaluar una configuración concreta antes de comprometer una compra por volumen.',
    ],
    ficha: [
      'Para combate en edificios, el tipo jet se especifica con cobertura lateral y de nuca, y visor integrado según configuración. EN 443:2008 es la referencia publicada; no hay modelo, código ni certificación declarados.',
      'Pide por escrito retención, visor, cubrenuca, comunicación y compatibilidad con ERA. Esta información convierte el tipo de casco en una requisición comprobable y evita llamar equivalente a una opción que todavía no cuenta con documentación del fabricante.',
    ],
  },
  '/cascos/casco-estructural-tradicional/': {
    errores: [
      'El casco estructural tradicional no debe elegirse por color ni por ala trasera sin definir suspensión, cubrenuca, visor y barbiquejo. Asumir que visor y máscara de ERA son compatibles sin prueba puede desplazar el casco, interferir con el sello o exponer la nuca.',
      'Otro fallo de licitación es aceptar la palabra NFPA sin modelo ni edición declarada. Especifica accesorios como parte de la partida y confirma la interfaz completa; completar después con piezas no previstas vuelve distintas las configuraciones de una misma compra.',
    ],
    faq: [
      'El casco estructural tradicional aclara que el rescate técnico suele requerir un perfil compacto y que hay fichas de Bullard LTX, Bullard UST LW y Sköld Viking. Cada modelo conserva accesorios y declaración propios, por lo que no se intercambian entre sí.',
      'Comparte por WhatsApp uso, máscara de ERA, color, visor o goggles, cubrenuca y cantidad. Con esos datos puedes pedir una cotización por modelo y una prueba de compatibilidad, antes de elegir una copa alta con ala trasera por costumbre.',
    ],
    ficha: [
      'La requisición de casco estructural tradicional indica combate estructural, copa alta con ala trasera, referencia NFPA 1970 y prueba con máscara y ERA. Anota suspensión, barbiquejo, cubrenuca y protección ocular, porque cada uno interviene en la cobertura y la estabilidad.',
      'Pide que modelo, color, accesorios y edición declarada aparezcan por escrito. Así se puede revisar el casco recibido contra una configuración definida y distinguir la referencia general NFPA 1970 de la declaración concreta que publique cada fabricante.',
    ],
  },
  '/cascos/casco-forestal/': {
    errores: [
      'El casco forestal no sustituye casco estructural para ataque interior. Confundir una clase industrial o el ala completa con protección estructural completa puede dejar al usuario fuera de la cobertura que pide la escena; también es un error omitir goggles y cubrenuca de la configuración.',
      'No ignores la edición declarada del modelo al preparar la licitación. La referencia vigente del catálogo es NFPA 1950, pero Bullard Wildland FH911H publica otra edición; registra el dato real, color, bandas y accesorios antes de emitir la orden.',
    ],
    faq: [
      'El casco forestal responde que no se selecciona para combate estructural y que el complemento mencionado es ESS Striketeam XTO, sin enlace porque esa sección no está publicada. Las preguntas ayudan a separar línea de fuego, goggles y operación exterior del ataque interior.',
      'Para cotizar por WhatsApp, comparte trabajo forestal, terreno, cantidad, color, goggles, cubrenuca y marcado. Indicar exposición, ajuste y accesorios permite solicitar un conjunto para jornada exterior y revisar la declaración del modelo frente al requisito de compra.',
    ],
    ficha: [
      'Un casco forestal se requisita para incendio forestal y operación exterior, con ala completa, goggles, cubrenuca y accesorios según configuración. NFPA 1950, antes NFPA 1977, es la referencia publicada; ANSI/ISEA Z89.1 aplica solo cuando el modelo la declara y no sustituye el análisis.',
      'Anota por escrito barbiquejo, protección ocular, color, bandas y edición normativa. Esos campos permiten cotejar el casco recibido con su uso de línea de fuego, sin transferir una clase industrial ni una declaración antigua a otra configuración.',
    ],
  },
  '/cascos/casco-rescate-tecnico/': {
    errores: [
      'Un casco de rescate técnico no se sustituye por casco estructural solo por costumbre. En maniobras vehiculares, verticales o de espacios confinados, perfil compacto, retención y accesorios responden a riesgos de enganche, impacto e iluminación que deben definirse antes de cotizar.',
      'Instalar lámparas perforando la carcasa o no probar arnés y protección ocular cambia el uso del equipo. La partida debe describir la operación principal y los accesorios previstos, porque no hay modelos publicados que permitan asumir una configuración o certificación.',
    ],
    faq: [
      'El casco de rescate técnico aclara que no hay modelos publicados y que puede formar parte de EPP para espacios confinados, pero el procedimiento define además requisitos respiratorios y de rescate. Las preguntas distinguen perfil, retención y límites de operación.',
      'Manda por WhatsApp si el rescate es vehicular, vertical o en confinados, junto con arnés, lámpara, protector ocular, comunicación y cantidad. Esa información permite solicitar un modelo real con accesorios compatibles, sin modificar una carcasa para resolverlo después.',
    ],
    ficha: [
      'Para requisitar casco de rescate técnico define rescate vehicular, vertical o espacios confinados, perfil compacto sin ala y barbiquejo de cuatro puntos. NFPA 2500 es la referencia publicada; EN 12492 y EN 16471-16473 pueden aparecer como referencias europeas según el equipo.',
      'Incluye lámpara, protector ocular, comunicación y compatibilidad con arnés por escrito. Como no hay modelo publicado, estos datos orientan una solicitud técnica sin declarar norma, código o certificación para una opción que aún no cuenta con ficha.',
    ],
  },
};
