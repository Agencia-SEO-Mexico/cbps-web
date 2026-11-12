// Correcciones sobre el contenido rescatado del WordPress (fuente.json), revisión del 12-nov-2026.
// Se aplican en cada build antes de armar las páginas, así no reaparecen si fuente.json se regenera.
// Regla: no se inventa nada. Lo que depende de CBPS se oculta y queda en la lista de pendientes.

// 1) Erratas y siglas: se aplican a todo el texto visible (title, desc, H1, encabezados, párrafos, listas, FAQ y tablas).
export const REEMPLAZOS = [
  [/finaciamiento/g, 'financiamiento'],
  [/POWESTE/g, 'POWEST'],
  [/Telecomuni-caciones/g, 'Telecomunicaciones'],
  [/sistemas crítico(?!s)/g, 'sistemas críticos'],
  [/Una generador/g, 'Un generador'],
  [/Generadores Stanford/g, 'Generadores Stamford'],
  [/(^|[^¿])Por qué adquirir tu planta/g, '$1¿Por qué adquirir tu planta'],
  [/Tranferencias asco/gi, 'Transferencias ASCO'],
  [/RSPM/g, 'RPSM'], // la marca es RPSM (logo, title y 7 menciones en la misma página)
  [/C&D de Dinasty/g, 'C&D Dynasty'], // la misma página dice «Dynasty High Rate Max»
  [/Enersys/g, 'EnerSys'],
  [/infromación/g, 'información'],
  [/explicamos porque/g, 'explicamos por qué'],
  [/emergecia/g, 'emergencia'],
  [/emiciones/g, 'emisiones'],
  [/técnical/g, 'técnica'],
  [/líneal/g, 'lineal'],
  [/(\d) ?mtrs\b/g, '$1 m'],
  [/(\d)hrs\b/g, '$1 h'],
  [/(^|[^¡])Sin más pretextos!/g, '$1¡Sin más pretextos!'],
  [/(^|[^¡])No lo compres!/g, '$1¡No lo compres!'],
  [/Nosostros/g, 'Nosotros'],
  [/el quipo es/g, 'el equipo es'],
  [/diltro/g, 'filtro'],
  [/baerías/g, 'baterías'],
  [/sitema/g, 'sistema'],
  [/fotovoltáicos/g, 'fotovoltaicos'],
  [/equipos \./g, 'equipos.'],
  [/enrgía/g, 'energía'],
  [/eléctric(?![a-záéíóúñ])/g, 'eléctrica'],
  [/porfesional/g, 'profesional'],
  [/eleccielección ý/g, 'elección y'],
  [/todo méxico/g, 'todo México'],
  [/ciégamente/g, 'ciegamente'],
  [/protegamos/g, 'protejamos'],
  [/ ,/g, ','],
  [/Memebresía/g, 'Membresía'],
  [/paoyo/g, 'apoyo'],
  [/ténico/g, 'técnico'],
  [/routeadores/g, 'enrutadores'],
  [/ són\b/g, ' son'],
  [/¿Éste negocio/g, '¿Este negocio'],
  [/soluciones,desarrollar/g, 'soluciones, desarrollar'],
  [/alaración/g, 'aclaración'],
  [/comaprtir/g, 'compartir'],
  [/podido lograra/g, 'podido lograr'],
  [/dando click aquí/g, 'dando clic aquí'],
  [/recopilamosestos/g, 'recopilamos estos'],
  [/Através/g, 'A través'],
  [/en laces/g, 'enlaces'],
  [/La presentes Políticas/g, 'Las presentes Políticas'],
  [/El NEMA contribuyen/g, 'Las normas NEMA contribuyen'],
  [/^La configuración de cuchilla\. Las normas NEMA/g, 'Configuración de clavija de vuelta: las normas NEMA'],
  [/^¿Baterías es mejor en serie o paralelo\?$/g, '¿Baterías en serie o en paralelo?'],
  [/(\d)años/g, '$1 años'],
  [/(?<![\w.@/-])cbps(?![\w.@-])/g, 'CBPS'], // la marca en minúscula (fuera de correos y dominios)
];

// 2) Bloques que se quitan en todo el sitio (texto de plantilla Divi, cifras de experiencia que se contradicen, restos sueltos).
export const BLOQUES_FUERA = [
  /^Your content goes here/i,
  /^Más de 15 años en soluciones de energía/i, // 15 / 10 / 17 años: la home actual no da cifra → pendiente de CBPS
  /^\.$/,
  /^(Solicitar asesoría para mi planta\s*)?Ver plantas disponibles/i, // etiquetas de botones sueltas de la promo caducada
];

// 3) Por página: secciones o bloques fuera, y H1/title/desc completos (keyword del pen de Diego, sección 3).
const tituloSeccion = (re) => (s) => re.test(s.h || '');
const bloque = (re) => (b) => re.test(b.x || b.q || '');

export const POR_PAGINA = {
  '/servicios/plantas-de-emergencia/': {
    // promo «últimas 3 plantas premium» (landing del 28-jul-2026, existencias, bonos y vino sin confirmar para noviembre)
    seccionesFuera: [/^Nos quedan pocas Unidades/i, /^TODAS LAS CONFIGURACIONES/i, /^DISPONIBLE EN TRES CAPACIDADES/i, /^Venta de planta de \d+ kW/i,
      /^Conoce el precio especial de lanzamiento/i, /^Inventario limitado/i, /^ASEGURA LA CONTINUIDAD DE TU OPERACIÓN$/, /^¡SEGURO TE CONVIENE/i,
      /^¿TODAVÍA TE QUEDAN DUDAS/i, /^¡NO HAY MÁS PRETEXTOS/i, /^¡QUIERO COMPRAR/i],
    desc: 'Plantas de emergencia y plantas eléctricas diésel para empresas e industria. Te ayudamos a elegir la capacidad correcta ante cortes de energía.',
  },
  '/politica-privacidad/': {
    // texto por defecto de WordPress (comentarios, Gravatar, cuentas, spam): en un sitio estático no aplica
    seccionesFuera: [/^Tus comentarios$/, /^Medios$/, /^Con quién compartimos tus datos$/, /^Cuánto tiempo conservamos tus datos$/, /^Dónde enviamos tus datos$/],
    bloquesFuera: [/^ENLACES DE INTERÉS$/, /^Si tienes una cuenta o has dejado comentarios/],
    reemplazos: [[/SuprePicos/g, 'CBPS']],
    // responsable = CBPS; razón social y domicilio fiscal: pendientes de CBPS (no se muestran para no dejar un hueco)
    agregar: { seccion: /^Quiénes somos$/, alInicio: true, bloques: [{ t: 'p', x: 'El responsable del tratamiento de tus datos personales es CBPS.' }] },
    agregar2: { seccion: /^Qué derechos tienes sobre tus datos$/, alInicio: true, bloques: [{ t: 'p', x: 'Puedes solicitar a CBPS el acceso, la rectificación o la cancelación de tus datos personales, u oponerte a su uso, por los medios de contacto de este sitio.' }] },
    desc: 'Aviso de privacidad de CBPS: qué datos personales recogemos en este sitio, para qué los usamos, cómo los protegemos y cómo ejercer tus derechos.',
  },
  '/blog/formulas-electricas-para-instalaciones/': { seccionesFuera: [/Comments?$/i] },
  '/servicios/renta-de-plantas-de-emergencia/': {
    seccionesFuera: [/^Testimonios de Clientes$/i], // testimonios genéricos sin respaldo → a confirmar con CBPS
    bloquesFuera: [/^Soporte Técnico 24\/7$/i, /^Disponibilidad de soporte técnico especializado las 24 horas/i],
    desc: 'Renta de plantas de emergencia IGSA y Generac por 10 h: incluye operador, atención de los equipos rentados y cableado lineal de hasta 30 m.',
  },
  '/servicios/renta-y-financiamiento-de-ups-trifasico/': {
    // restos del módulo de blog de Divi y bloque de contacto con otra dirección (CP 03040)
    seccionesFuera: [/^Testimonios de Clientes$/i, /^Últimas Publicaciones del Blog$/i, /^¿Por qué una planta de emergencia emite humo\?$/, /^Tabla de la NEMA$/],
    bloquesFuera: [/^Apoyo técnico 24\/7/i, /^Soporte Técnico 24\/7$/i, /^Monitoreo Remoto$/i, /^Garantía Extendida$/i,
      /^Ago 27, 2024/, /^CONSEJOS TÉCNICOS$/, /^Phone$/, /^\(55\) 2171-0020$/, /^Email$/, /^javier\.galindo@cbps\.com\.mx$/, /^Dirección$/, /^Av\. Río churubusco/],
    seccionHAnula: [/^Cuidado de plantas eléctricas$/],
    reemplazos: [[/24\/70/g, '24/7']],
    h1: 'No compres tu UPS: renta y financiamiento de UPS trifásico',
  },
  '/promociones/': {
    bloquesFuera: [/^“Gracias a CBPS, hemos podido mantener/, /^“La renta de UPS con CBPS ha sido/, /^Monitoreo Continuo$/, /^Con tecnología de monitoreo en tiempo real/],
    seccionHAnula: [/^Testimonios de Clientes$/],
    desc: 'Renta y financiamiento de sistemas UPS, pólizas anuales de mantenimiento y consultoría para proteger las cargas eléctricas críticas de tu empresa.',
  },
  '/libro-gratis/': {
    reemplazos: [[/Con más de diez años de experiencia, he podido lograra? dejar/g, 'A lo largo de mi experiencia he podido dejar'], [/^Con 49 años de edad y más de 17 años de experiencia en el sector, Javier/g, 'Javier']],
  },
  '/nosotros/': { seccionHAnula: [/^n conttarnos$/] },
  '/productos/': {
    h1: 'Protección de cargas críticas: sistema integral eléctrico', seccionHAnula: [/^SISTEMA INTEGRAL ELÉCTRICO\|CBPS$/],
  },
  '/productos/aire-de-precision/': {
    h1: 'Aires acondicionados de precisión para infraestructura crítica', seccionHAnula: [/^Infraestructura Crítica$/],
  },
  '/productos/aire-de-precision/stulz/': {
    desc: 'Aires acondicionados STULZ para data centers, cuartos de servidores e infraestructura crítica. CBPS te asesora para elegir la climatización adecuada.',
  },
  '/productos/baterias-industriales/baterias-de-ciclo-profundo/': {
    h1: 'Baterías de ciclo profundo: qué son, cómo funcionan y dónde se utilizan', seccionHAnula: [/^Qué son, cómo funcionan y dónde se utilizan\.$/],
  },
  '/productos/baterias-industriales/enersys/': { h1: 'Baterías EnerSys para UPS y sistemas de respaldo', title: 'Baterías EnerSys para UPS' },
  '/productos/baterias-industriales/trojan/': { h1: 'Baterías Trojan de ciclo profundo' },
  '/productos/baterias-industriales/invermexa/': {
    h1: 'Baterías Invermexa Forza para UPS y telecomunicaciones', title: 'Baterías Invermexa para UPS',
    desc: 'Baterías Invermexa para UPS, telecomunicaciones, centros de datos y aplicaciones donde la continuidad operativa es crítica. Asesoría de CBPS.',
  },
  '/productos/baterias-industriales/csb/': {
    h1: 'Baterías CSB para UPS: evita fallas por una batería mal seleccionada', title: 'Baterías CSB para UPS',
  },
  '/productos/baterias-industriales/powest/': {
    h1: 'Baterías Powest para UPS, energía solar y sistemas de respaldo',
    desc: 'Powest tiene series de baterías para aplicaciones específicas: UPS, energía solar y respaldo. Te ayudamos a elegir la serie y el modelo adecuados.',
  },
  '/productos/baterias-industriales/baterias-para-ups/': {
    desc: 'Las baterías de respaldo se parecen por fuera; lo que importa está adentro: química, ciclo de vida y compatibilidad con tu UPS. Guía para elegirla.',
  },
  '/productos/ups/eaton/': {
    desc: 'Sistemas UPS Eaton para respaldo y protección de energía en infraestructura de TI y aplicaciones críticas. CBPS te ayuda a elegir el modelo.',
  },
  '/productos/baterias-industriales/lth/': {
    // B2B: el pen deja fuera el mercado residencial y de consumo; se usa lo que ya dice la fuente (vehículos comerciales, servicio pesado)
    h1: 'Baterías LTH de arranque para vehículos comerciales y servicio pesado', title: 'Baterías LTH de arranque',
    desc: 'Baterías LTH de arranque para vehículos comerciales, equipos y servicio pesado. En CBPS te ayudamos a elegir el modelo compatible con tu aplicación.',
    reemplazos: [[/^Encuentra la batería LTH ideal para tu vehículo o equipo/g, 'Encuentra la batería LTH adecuada para tus vehículos o equipos'], [/^¿No sabes qué batería necesita tu vehículo\?$/g, '¿No sabes qué batería necesita tu equipo?']],
  },
  '/productos/magic-battery/': {
    // la fuente dice «proyectos residenciales y pequeñas instalaciones»: se enfoca en pequeñas instalaciones, sin datos nuevos
    h1: 'Magic Battery: respaldo de energía sin combustible para pequeñas instalaciones', title: 'Magic Battery | Respaldo de energía sin combustible',
    desc: 'Magic Battery de CBPS: inversor POWEST con baterías de ciclo profundo para respaldar cargas esenciales de pequeñas instalaciones, sin combustible.',
    reemplazos: [[/tu hogar no tiene por qué quedarse/g, 'tu instalación no tiene por qué quedarse'], [/Respaldo eléctrico para tu hogar,/g, 'Respaldo eléctrico para pequeñas instalaciones,'],
      [/respaldar todo tu hogar/g, 'respaldar toda tu instalación'], [/^Iluminación residencial$/g, 'Iluminación'], [/áreas prioritarias de tu hogar/g, 'áreas prioritarias de tu instalación'],
      [/respaldar tu hogar/g, 'respaldar tu instalación'], [/^!MÁS QUE UN EQUIPO/g, '¡MÁS QUE UN EQUIPO'], [/TU HOGAR/g, 'TU INSTALACIÓN'], [/tu hogar o instalación/g, 'tu instalación'], [/tu hogar/g, 'tu instalación'], [/toda mi casa/g, 'toda mi instalación']],
  },
  '/productos/baterias-industriales/america/': { h1: 'Baterías América: venta y asesoría especializada' },
  '/productos/ups/cyberpower/': { h1: 'UPS CyberPower: sistemas de respaldo y protección' },
  '/blog/como-hacer-la-instalacion-de-un-ups/': {
    h1: 'Cómo hacer la instalación de un UPS según sus características', title: 'Cómo hacer la instalación de un UPS según sus características',
  },
  '/blog/configuracion-de-clavija-de-vuelta/': {},
};

// los títulos rescatados en MAYÚSCULAS pasan a tipo frase después (tc): también se corrigen en mayúsculas
for (const [re, to] of [...REEMPLAZOS]) {
  if (!re.source.includes('\\') && !re.source.includes('(') && re.source !== re.source.toUpperCase()) REEMPLAZOS.push([new RegExp(re.source.toUpperCase(), re.flags), to.toUpperCase()]);
}

// ---- aplicación ----
const textoDe = (b) => b.x || b.q || '';
function cambiaTexto(obj, reglas) {
  const r = (s) => reglas.reduce((acc, [re, to]) => acc.replace(re, to), s);
  if (typeof obj.x === 'string') obj.x = r(obj.x);
  if (typeof obj.q === 'string') obj.q = r(obj.q);
  if (Array.isArray(obj.items)) obj.items = obj.items.map((i) => (typeof i === 'string' ? r(i) : i));
  if (Array.isArray(obj.rows)) obj.rows = obj.rows.map((row) => row.map((c) => (typeof c === 'string' ? r(c) : c)));
  if (Array.isArray(obj.a)) obj.a.forEach((a) => cambiaTexto(a, reglas));
}
function limpiaBloques(body, fuera) {
  return body.filter((b) => {
    if (fuera.some((re) => re.test(textoDe(b).trim()))) return false;
    // FAQ cuya respuesta es texto de plantilla: fuera la pregunta entera
    if (b.t === 'faq' && b.a?.some((a) => fuera.some((re) => re.test((a.x || '').trim())))) return false;
    return true;
  });
}

export function corregirFuente(fuenteOriginal) {
  const fuente = JSON.parse(JSON.stringify(fuenteOriginal));
  for (const [ruta, p] of Object.entries(fuente)) {
    const c = POR_PAGINA[ruta] || {};
    const reglas = [...(c.reemplazos || []), ...REEMPLAZOS];
    const fuera = [...BLOQUES_FUERA, ...(c.bloquesFuera || [])];
    const r = (s) => reglas.reduce((acc, [re, to]) => acc.replace(re, to), s || '');
    p.title = r(p.title); p.desc = r(p.desc); p.h1 = r(p.h1);
    p.sections = p.sections.filter((s) => !(c.seccionesFuera || []).some((re) => re.test(s.h || '')));
    for (const s of p.sections) {
      if ((c.seccionHAnula || []).some((re) => re.test(s.h || ''))) s.h = null;
      if (s.h) s.h = r(s.h);
      s.body = limpiaBloques(s.body, fuera);
      s.body.forEach((b) => cambiaTexto(b, reglas));
    }
    for (const k of ['agregar', 'agregar2']) {
      const a = c[k]; if (!a) continue;
      const s = p.sections.find((x) => a.seccion.test(x.h || ''));
      if (s) s.body = a.alInicio ? [...a.bloques, ...s.body] : [...s.body, ...a.bloques];
    }
    p.faqs = limpiaBloques(p.faqs || [], fuera);
    p.faqs.forEach((f) => cambiaTexto(f, reglas));
  }
  return fuente;
}

// H1, title y desc finales (después de normalizar el H1 rescatado)
export function ajustesFinales(paginas) {
  for (const [ruta, c] of Object.entries(POR_PAGINA)) {
    const p = paginas[ruta]; if (!p) continue;
    if (c.h1) p.h1 = c.h1;
    if (c.title) p.title = c.title;
    if (c.desc) p.desc = c.desc;
  }
}
