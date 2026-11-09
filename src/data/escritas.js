// Páginas nuevas de la arquitectura SEO (no existen hoy en cbps.com.mx).
// Redactadas solo con afirmaciones que CBPS ya publica en su sitio; nada de cifras,
// certificaciones ni clientes nuevos. Validar con Javier antes de lanzar.
const p = (x) => ({ t: 'p', x });
const ul = (...items) => ({ t: 'ul', items });
const faq = (q, ...a) => ({ t: 'faq', q, a: a.map(p) });

export const ESCRITAS = {
  '/servicios/': {
    canon: '/servicios-electricos-para-cargas-criticas-cbps/',
    title: 'Servicios para cargas críticas: mantenimiento, reparación e instalación',
    desc: 'Servicios de CBPS para plantas de emergencia, UPS y baterías: mantenimiento, reparación y modernización, dimensionamiento e instalación, sustitución de bancos y renta.',
    h1: 'Servicios para que tu respaldo eléctrico funcione cuando lo necesitas',
    lead: 'En CBPS no solo te ayudamos a elegir tus equipos. También contamos con servicios técnicos para mantener tus sistemas de respaldo, protección y continuidad eléctrica en condiciones adecuadas de operación.',
    sections: [
      { h: 'Qué servicios ofrece CBPS', body: [
        p('CBPS atiende plantas de emergencia, sistemas UPS y bancos de baterías durante todo su ciclo: estudio y dimensionamiento, instalación y puesta en marcha, mantenimiento preventivo y correctivo, reparación, modernización, sustitución de baterías y renta de equipos.'),
        p('El punto de partida siempre es un diagnóstico técnico. Antes de recomendar un equipo o una reparación, revisamos la carga que se quiere proteger, la instalación eléctrica y el estado de los equipos que ya tienes.'),
      ] },
      { h: 'Cómo trabajamos', body: [
        ul('Ingeniería propia: el proceso comienza con un diagnóstico técnico, no con un catálogo.',
           'Diagnóstico antes de vender: no recomendamos un equipo sin entender el sistema completo.',
           'Acompañamiento real: desde el diseño hasta la operación, el mantenimiento y la capacitación.'),
      ] },
    ],
    faqs: [
      faq('¿CBPS ofrece instalación y mantenimiento?', 'Sí. CBPS ofrece servicios de instalación y mantenimiento para que los sistemas de protección de energía funcionen correctamente, además de reparación, modernización y sustitución de baterías.'),
      faq('¿Atienden equipos que no compré con CBPS?', 'Cuéntanos marca, modelo y capacidad del equipo. Revisamos el caso y te decimos qué alcance de servicio aplica.'),
    ],
  },
  '/servicios/mantenimiento/': {
    canon: '/servicios-electricos-para-cargas-criticas-cbps/',
    title: 'Mantenimiento preventivo y correctivo de plantas de emergencia y UPS',
    desc: 'Mantenimiento preventivo y correctivo de plantas de emergencia y sistemas UPS en sitio, pruebas de funcionamiento, atención de emergencias y pólizas de mantenimiento.',
    h1: 'Mantenimiento de plantas de emergencia y UPS',
    lead: 'Un equipo de respaldo sin mantenimiento puede fallar justo el día que la red se cae. El mantenimiento preventivo permite revisar componentes, detectar condiciones anormales y mantener el equipo preparado para cuando realmente sea necesario.',
    sections: [
      { h: 'Qué incluye el mantenimiento', body: [
        p('CBPS da mantenimiento en sitio a plantas de emergencia y sistemas UPS. El alcance se define para cada instalación e incluye:'),
        ul('Mantenimiento preventivo', 'Mantenimiento correctivo', 'Revisión de componentes', 'Pruebas de funcionamiento', 'Atención de emergencias', 'Pólizas de mantenimiento'),
      ] },
      { h: 'Por qué fallan los sistemas de respaldo', body: [
        p('Las causas más comunes de que una planta no arranque están relacionadas con falta de mantenimiento preventivo, problemas en baterías o en el sistema de arranque, fallas en el control o en la transferencia automática, o falta de capacitación del personal que opera el sistema.'),
        p('En los UPS, las baterías son el punto más sensible: cuando ocurre una interrupción, todo depende de ellas. Por eso el mantenimiento incluye revisar su estado y sustituirlas a tiempo.'),
      ] },
      { h: 'Equipos que atendemos', body: [
        p('Plantas de emergencia de las marcas que maneja CBPS (Generac, IGSA, PLANELEC y plantas CBPS), sistemas UPS (Eaton, Vertiv, CyberPower, ABB, Industronic y Powest) y bancos de baterías para UPS.'),
      ] },
    ],
    faqs: [
      faq('¿Cada cuánto se debe dar mantenimiento a una planta de emergencia?', 'Al menos una vez al año. En instalaciones con operación crítica o uso frecuente se recomienda hacerlo de forma semestral o conforme a las horas de operación del equipo.'),
      faq('¿Una planta de emergencia necesita mantenimiento aunque casi no se use?', 'Sí. El mantenimiento preventivo conserva sus componentes en condiciones adecuadas y aumenta la confiabilidad del sistema para el momento en que se necesite.'),
      faq('¿Ofrecen pólizas de mantenimiento?', 'Sí. CBPS ofrece pólizas de mantenimiento para plantas de emergencia y UPS. El alcance y la frecuencia se definen según el equipo y la criticidad de la operación.'),
    ],
  },
  '/servicios/mantenimiento/plantas-de-emergencia/': {
    canon: '/home/electricas/plantas-de-emergencia/',
    title: 'Mantenimiento de plantas de emergencia preventivo y correctivo',
    desc: 'Mantenimiento preventivo y correctivo de plantas de emergencia: revisión de componentes, pruebas de funcionamiento, transferencia y pólizas de mantenimiento con CBPS.',
    h1: 'Mantenimiento de plantas de emergencia',
    lead: 'Una planta de emergencia debe recibir mantenimiento al menos una vez al año; en operación crítica o uso frecuente, cada seis meses o según sus horas de trabajo. CBPS lo realiza en sitio, con pruebas de funcionamiento y revisión del sistema de transferencia.',
    sections: [
      { h: 'Qué revisamos en una planta de emergencia', body: [
        ul('Mantenimiento preventivo de componentes', 'Mantenimiento correctivo cuando hay una falla', 'Baterías y sistema de arranque', 'Sistema de control y transferencia automática', 'Pruebas de funcionamiento', 'Atención de emergencias'),
        p('El mantenimiento también es el momento de capacitar al personal que opera la planta: la falta de capacitación es una de las causas comunes de que el sistema no responda.'),
      ] },
      { h: 'Plantas que no arrancan: las causas más comunes', body: [
        p('Cuando una planta no arranca, casi siempre la causa está en la falta de mantenimiento preventivo, en las baterías o el sistema de arranque, en el control o la transferencia automática, o en la operación del sistema por personal sin capacitación.'),
        p('Si tu planta emite humo, revisa nuestra guía sobre las causas más frecuentes antes de que el problema crezca.'),
      ] },
      { h: 'Pólizas de mantenimiento', body: [
        p('Con una póliza, el mantenimiento queda programado y la planta llega lista a cada contingencia. CBPS ofrece pólizas para plantas de emergencia; la frecuencia se define según la criticidad de tu operación y las horas de uso del equipo.'),
      ] },
    ],
    related: ['/blog/problemas-plantas-de-emergencia/', '/blog/cuidado-de-plantas-electricas/'],
    faqs: [
      faq('¿Cada cuánto se da mantenimiento a una planta de emergencia?', 'Al menos una vez al año. En instalaciones críticas o con uso frecuente, de forma semestral o conforme a las horas de operación.'),
      faq('¿Dan mantenimiento a plantas Generac, IGSA y PLANELEC?', 'Sí. CBPS atiende las marcas de plantas que comercializa. Para otras marcas, envíanos el modelo y la capacidad y revisamos el alcance.'),
    ],
  },
  '/servicios/mantenimiento/ups/': {
    canon: '/home/electricas/sistemas-ups/',
    title: 'Mantenimiento de UPS preventivo y correctivo en sitio',
    desc: 'Mantenimiento de UPS monofásicos y trifásicos: revisión en sitio, baterías, pruebas y pólizas de mantenimiento para mantener protegidas tus cargas críticas.',
    h1: 'Mantenimiento de UPS',
    lead: 'El mantenimiento de un UPS revisa el equipo, sus baterías y su integración con la instalación para que el respaldo funcione en el momento de una interrupción. CBPS lo realiza en sitio, en UPS monofásicos y trifásicos.',
    sections: [
      { h: 'Qué incluye el mantenimiento de un UPS', body: [
        ul('Mantenimiento preventivo y correctivo', 'Revisión del estado de las baterías y pruebas de capacidad', 'Pruebas de funcionamiento', 'Revisión de bypass, comunicaciones y monitoreo', 'Reemplazo de baterías cuando corresponde', 'Soporte técnico'),
      ] },
      { h: 'Las baterías, el punto más sensible', body: [
        p('Las baterías VRLA selladas tienen una vida útil de diseño de 3 a 5 años en uso flotante; el calor y las descargas frecuentes la reducen. Se recomienda realizar pruebas de capacidad cada año y sustituirlas antes de que fallen.'),
        p('Si tu UPS tiene más de 3 años sin reemplazo de baterías, conviene revisarlo.'),
      ] },
      { h: 'Marcas que atendemos', body: [
        p('Eaton, Vertiv, CyberPower, ABB, Industronic y Powest, además de los bancos de baterías CSB, C&D, Eaton, Kaise, Invermexa, EnerSys y Powest.'),
      ] },
    ],
    related: ['/blog/por-que-fallan-los-ups/', '/blog/cuando-reemplazar-baterias-de-un-ups/'],
    faqs: [
      faq('¿Cada cuánto se reemplazan las baterías de un UPS?', 'Las baterías VRLA tienen una vida útil de diseño de 3 a 5 años en uso flotante. Se recomienda una prueba de capacidad anual y sustituirlas antes de que fallen.'),
      faq('¿Ofrecen pólizas de mantenimiento para UPS?', 'Sí. CBPS ofrece pólizas de mantenimiento para UPS; el alcance depende de la capacidad del equipo y de la criticidad de la carga.'),
    ],
  },
  '/servicios/reparacion-y-modernizacion/': {
    canon: '/servicios-electricos-para-cargas-criticas-cbps/',
    title: 'Reparación y modernización de equipos de respaldo eléctrico',
    desc: 'Reparación y modernización de UPS y sistemas de respaldo: diagnóstico de la falla y decisión técnica entre reparar, modernizar o sustituir el equipo.',
    h1: 'Reparación y modernización',
    lead: 'Cuando un equipo de respaldo falla, la primera decisión es técnica: reparar, modernizar o sustituir. CBPS diagnostica la falla y la condición del equipo antes de recomendar cualquiera de las tres.',
    sections: [
      { h: 'Reparar, modernizar o sustituir', body: [
        p('La respuesta depende del estado del equipo, de la carga que protege hoy y de la que protegerá mañana, de la disponibilidad de refacciones y de la criticidad de la operación. Un UPS elegido solo por capacidad puede quedar sobredimensionado, insuficiente o técnicamente inadecuado cuando la instalación cambia.'),
        p('Por eso revisamos tipo de carga, capacidad requerida, tecnología del UPS, autonomía, crecimiento futuro, condiciones de instalación, redundancia, bypass, comunicaciones y monitoreo.'),
      ] },
    ],
    faqs: [
      faq('¿Conviene reparar o cambiar un UPS?', 'Depende del diagnóstico: estado del equipo, refacciones, capacidad frente a la carga actual y criticidad de la operación. CBPS revisa el caso y te presenta la opción técnica adecuada.'),
    ],
  },
  '/servicios/reparacion-y-modernizacion/ups/': {
    canon: '/home/electricas/sistemas-ups/',
    title: 'Reparación y modernización de UPS',
    desc: 'Reparación de UPS con diagnóstico técnico y modernización del sistema de respaldo cuando la carga o la tecnología del equipo ya no corresponden.',
    h1: 'Reparación y modernización de UPS',
    lead: 'CBPS diagnostica el UPS, sus baterías y su instalación para decidir si conviene repararlo, modernizarlo o sustituirlo. La decisión parte de la carga real que necesitas proteger.',
    sections: [
      { h: 'Por qué fallan los UPS', body: [
        p('La mayoría de las fallas de un UPS se relacionan con las baterías: bancos subdimensionados para la carga real, baterías que pasaron su vida útil o mezcla de baterías nuevas con viejas en el mismo banco. También influyen la temperatura del cuarto y la calidad de la instalación eléctrica.'),
      ] },
      { h: 'Cuándo modernizar', body: [
        p('Conviene modernizar cuando la carga creció, cuando el equipo ya no ofrece la autonomía o la redundancia que la operación necesita, o cuando la tecnología del UPS ya no corresponde a la carga. En esos casos revisamos capacidad, tecnología (por ejemplo, doble conversión), autonomía, bypass y monitoreo.'),
        ul('Diagnóstico del equipo y de sus baterías', 'Reparación o reemplazo de baterías', 'Propuesta de modernización o sustitución', 'Instalación y puesta en marcha'),
      ] },
    ],
    related: ['/blog/por-que-fallan-los-ups/', '/productos/ups/'],
    faqs: [
      faq('¿Puedo mezclar baterías nuevas con las viejas del UPS?', 'No es recomendable. Mezclar baterías de diferente antigüedad o capacidad reduce el desempeño del banco al nivel de la batería más débil y acelera su degradación. Lo correcto es reemplazar el banco completo.'),
    ],
  },
  '/servicios/instalacion-y-dimensionamiento/': {
    canon: '/servicios-electricos-para-cargas-criticas-cbps/',
    title: 'Dimensionamiento e instalación de sistemas de respaldo eléctrico',
    desc: 'Dimensionamiento, instalación y puesta en marcha de plantas de emergencia, UPS y bancos de baterías con base en un levantamiento técnico de la instalación.',
    h1: 'Instalación y dimensionamiento',
    lead: 'El dimensionamiento debe basarse en un levantamiento técnico y un análisis eléctrico de la instalación. Así se define la capacidad necesaria y se evita una planta o un UPS sobredimensionado, o uno insuficiente que falle en la transferencia.',
    sections: [
      { h: 'Qué se analiza al dimensionar', body: [
        ul('Capacidad y tipo de carga', 'Arranque de motores', 'Autonomía requerida', 'Transferencia de carga', 'Integración entre planta de emergencia y UPS', 'Condiciones de instalación y crecimiento futuro'),
      ] },
      { h: 'Instalación bajo norma', body: [
        p('El primer eslabón para garantizar la seguridad de un sitio es la instalación eléctrica: desde la acometida hasta el último contacto, la continuidad y la seguridad deben ser confiables. CBPS instala y pone en marcha los equipos y coordina protecciones y pruebas controladas para que la transferencia sea estable.'),
      ] },
    ],
    related: ['/blog/norma-oficial-mexicana-nom-001-sede-2012-instalaciones-electricas-utilizacion/', '/blog/formulas-electricas-para-instalaciones/'],
    faqs: [
      faq('¿Qué pasa si la planta queda subdimensionada?', 'Puede provocar caídas de voltaje, disparos de protección o incluso un colapso durante la transferencia de carga cuando falla el suministro.'),
    ],
  },
  '/servicios/instalacion-y-dimensionamiento/plantas-de-emergencia/': {
    canon: '/home/electricas/plantas-de-emergencia/',
    title: 'Dimensionamiento e instalación de plantas de emergencia',
    desc: 'Cómo se dimensiona una planta de emergencia: cargas, arranque de motores, autonomía y transferencia. Instalación, integración con UPS y puesta en marcha con CBPS.',
    h1: 'Dimensionamiento e instalación de plantas de emergencia',
    lead: 'La capacidad de una planta de emergencia se define a partir de las cargas que realmente necesitas mantener funcionando. No hace falta comprar una planta sobredimensionada ni arriesgarse con un equipo insuficiente.',
    sections: [
      { h: 'Cómo se dimensiona una planta de emergencia', body: [
        p('La capacidad, la configuración, el tipo de carga, el arranque de motores, la autonomía, la transferencia y las condiciones de instalación deben analizarse para determinar la solución adecuada. Cuando estos elementos no se consideran, la planta puede quedar subdimensionada y provocar caídas de voltaje, disparos de protección o un colapso durante la transferencia.'),
      ] },
      { h: 'Arquitectura del sistema de respaldo', body: [
        p('Definimos la arquitectura completa del sistema: capacidades, protecciones, integración con UPS y transferencias automáticas. El UPS da respaldo inmediato mientras arranca la planta, siempre que el sistema esté correctamente dimensionado y coordinado.'),
        p('Trabajamos con controladores DeepSea para automatizar la transferencia de carga y con tableros de transferencia ASCO para pasar de una fuente a otra de forma rápida y confiable.'),
      ] },
    ],
    related: ['/productos/plantas-de-emergencia/', '/productos/tableros-de-transferencia/', '/blog/adquirir-una-planta-de-emergencia/'],
    faqs: [
      faq('¿Una planta de emergencia puede respaldar toda una empresa?', 'Sí, siempre que su capacidad y configuración se hayan dimensionado correctamente para las cargas que se desean mantener operativas.'),
      faq('¿Se puede integrar la planta con un UPS?', 'Sí. La integración entre UPS y planta debe hacerse con ingeniería adecuada, coordinación de protecciones y pruebas controladas, para que la transferencia de carga sea estable.'),
    ],
  },
  '/servicios/sustitucion-de-bancos-de-baterias/': {
    canon: '/home/electricas/baterias-industriales/respaldo/',
    title: 'Sustitución de bancos de baterías para UPS',
    desc: 'Sustitución de bancos de baterías para UPS: identificación del modelo correcto, reemplazo del banco completo y envío a toda la República Mexicana.',
    h1: 'Sustitución de bancos de baterías para UPS',
    lead: 'Un banco de baterías se sustituye completo, con el modelo correcto para la carga real del UPS. Mezclar baterías nuevas con viejas reduce el desempeño del banco al nivel de la batería más débil.',
    sections: [
      { h: 'Cuándo sustituir el banco', body: [
        p('Las baterías VRLA selladas tienen una vida útil de diseño de 3 a 5 años en uso flotante, en condiciones estándar de 25 °C. Su mayor enemigo es el calor: a 35 °C su vida útil se reduce aproximadamente a la mitad. Se recomienda una prueba de capacidad anual y sustituirlas antes de que fallen.'),
        ul('El UPS tiene más de 3 años sin reemplazo de baterías', 'La autonomía real ya no corresponde a la esperada', 'El banco está subdimensionado para la carga actual'),
      ] },
      { h: 'Cómo lo hacemos', body: [
        p('Te ayudamos a identificar el modelo correcto, suministramos baterías originales y compatibles, y coordinamos el reemplazo para no dejar la carga sin protección. Enviamos baterías a toda la República Mexicana.'),
        p('Trabajamos con CSB, C&D, Eaton, Kaise, Invermexa, EnerSys y Powest, entre otras.'),
      ] },
    ],
    related: ['/productos/baterias-industriales/baterias-para-ups/', '/blog/debo-cambiar-todo-el-banco-de-baterias/', '/blog/baterias-es-mejor-en-serie-o-paralelo/'],
    faqs: [
      faq('¿Debo cambiar todo el banco de baterías?', 'Sí. Mezclar baterías de diferente antigüedad o capacidad reduce el desempeño general al nivel de la batería más débil y acelera la degradación del banco completo.'),
      faq('¿Envían baterías fuera de la Ciudad de México?', 'Sí. CBPS envía baterías a toda la República Mexicana.'),
    ],
  },
  '/productos/tableros-de-transferencia/': {
    canon: '/home/electricas/plantas-de-emergencia/',
    title: 'Tableros de transferencia para plantas de emergencia',
    desc: 'Tableros de transferencia ASCO y control DeepSea para pasar la carga de la red a la planta de emergencia de forma automática, rápida y confiable.',
    h1: 'Tableros de transferencia',
    lead: 'El tablero de transferencia pasa la carga de la red eléctrica a la planta de emergencia, y de regreso, cuando falla el suministro. CBPS integra tableros ASCO y controladores DeepSea para que esa transferencia sea rápida y confiable.',
    sections: [
      { h: 'Transferencia ASCO y control DeepSea', body: [
        p('Los tableros ASCO permiten una transferencia rápida y confiable entre fuentes de energía, protegiendo cargas críticas con control avanzado. DeepSea es el cerebro del sistema: sus controladores automatizan la transferencia de carga y permiten configurar el comportamiento exacto que cada instalación crítica requiere.'),
      ] },
      { h: 'Por qué importa la transferencia', body: [
        p('Las fallas en el control o en la transferencia automática están entre las causas más comunes de que una planta no responda. Si la planta quedó subdimensionada, el momento crítico es justamente la transferencia de carga: ahí aparecen caídas de voltaje o disparos de protección.'),
        p('Por eso la transferencia se dimensiona junto con la planta y, cuando hay UPS, se coordina con él mediante pruebas controladas.'),
      ] },
    ],
    related: ['/productos/plantas-de-emergencia/', '/servicios/instalacion-y-dimensionamiento/plantas-de-emergencia/'],
    faqs: [
      faq('¿Las plantas CBPS funcionan automáticamente?', 'Podemos integrar soluciones de operación automática según las características del proyecto y el sistema de transferencia requerido. La configuración se define para cada instalación.'),
    ],
  },
};
