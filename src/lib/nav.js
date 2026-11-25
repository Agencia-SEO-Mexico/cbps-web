// Árbol del sitio: menú, migas, hubs y páginas relacionadas salen de aquí.
const P = '/productos', S = '/servicios', BI = '/productos/baterias-industriales';
// Auditoría de CBPS (25-nov): plantas de emergencia vuelve a Productos (con sus servicios asociados) y el
// aire acondicionado de precisión sube al nivel de las otras tres líneas principales. `marcas` = marcas que CBPS
// pidió agregar y que todavía no tienen página propia (se muestran en la línea, sin enlace).
export const LINEAS = [
  { ruta: `${P}/plantas-de-emergencia/`, nombre: 'Plantas de emergencia', corto: 'Plantas de emergencia', principal: true, matriz: 'plantas',
    resumen: 'Respaldo ante fallas totales o prolongadas de la red: suministro, dimensionamiento, instalación, mantenimiento y renta.',
    hijos: [
      { ruta: `${P}/plantas-de-emergencia/generac/`, nombre: 'Generac' },
      { ruta: `${P}/plantas-de-emergencia/igsa/`, nombre: 'IGSA' },
      { ruta: `${P}/plantas-de-emergencia/planelec/`, nombre: 'PLANELEC' },
      { ruta: `${P}/plantas-de-emergencia/cbps/`, nombre: 'Plantas CBPS' },
    ],
    marcas: ['Cummins', 'Jianto', 'Comcast', 'GHPower', 'Power Sentinel'] },
  { ruta: `${P}/ups/`, nombre: 'Sistemas UPS', corto: 'UPS', principal: true, matriz: 'ups',
    resumen: 'Protección instantánea ante microcortes, variaciones de voltaje y picos: suministro, mantenimiento, reparación y modernización.',
    hijos: [
      { ruta: `${P}/ups/eaton/`, nombre: 'Eaton' },
      { ruta: `${P}/ups/vertiv/`, nombre: 'Vertiv' },
      { ruta: `${P}/ups/cyberpower/`, nombre: 'CyberPower' },
      { ruta: `${P}/ups/abb/`, nombre: 'ABB' },
      { ruta: `${P}/ups/industronic/`, nombre: 'Industronic' },
      { ruta: `${P}/ups/powest/`, nombre: 'Powest' },
    ],
    marcas: ['Tripp Lite', 'Kenjitzu', 'Complet', 'Forza', 'APC', 'CDP', 'Smartbitt', 'Power All'] },
  { ruta: `${BI}/`, nombre: 'Baterías industriales', corto: 'Baterías', principal: true, matriz: 'baterias',
    resumen: 'Baterías para UPS, de arranque y de ciclo profundo, y sustitución de bancos completos.',
    hijos: [
      { ruta: `${BI}/baterias-para-ups/`, nombre: 'Baterías para UPS (respaldo)', grupo: true, hijos: [
        { ruta: `${BI}/csb/`, nombre: 'CSB' }, { ruta: `${BI}/c-and-d/`, nombre: 'C&D' }, { ruta: `${BI}/eaton/`, nombre: 'Eaton' },
        { ruta: `${BI}/kaise/`, nombre: 'Kaise' }, { ruta: `${BI}/invermexa/`, nombre: 'Invermexa' }, { ruta: `${BI}/enersys/`, nombre: 'EnerSys' },
        { ruta: `${BI}/powest/`, nombre: 'Powest' } ], marcas: ['CBPS', 'Power Sonic', 'Yuasa'] },
      { ruta: `${BI}/baterias-de-arranque/`, nombre: 'Baterías de arranque', grupo: true, hijos: [
        { ruta: `${BI}/lth/`, nombre: 'LTH' }, { ruta: `${BI}/america/`, nombre: 'América' } ] },
      { ruta: `${BI}/baterias-de-ciclo-profundo/`, nombre: 'Baterías de ciclo profundo', grupo: true, hijos: [
        { ruta: `${BI}/trojan/`, nombre: 'Trojan' }, { ruta: `${BI}/crown/`, nombre: 'Crown' } ], marcas: ['Trojan'] },
    ] },
  { ruta: `${P}/aire-de-precision/`, nombre: 'Aire acondicionado de precisión', corto: 'Aire de precisión', principal: true, matriz: 'aire',
    resumen: 'Control de temperatura y humedad para sites, centros de datos y bancos de baterías: suministro, instalación y mantenimiento.',
    hijos: [ { ruta: `${P}/aire-de-precision/vertiv/`, nombre: 'Vertiv' }, { ruta: `${P}/aire-de-precision/stulz/`, nombre: 'STULZ' }, { ruta: `${P}/aire-de-precision/hiref/`, nombre: 'HiRef' } ],
    marcas: ['Power All'] },
  { ruta: `${P}/tableros-de-transferencia/`, nombre: 'Tableros de transferencia', corto: 'Tableros', matriz: 'tableros',
    resumen: 'Transferencia automática entre la red y la planta de emergencia, sin intervención manual.', hijos: [], marcas: ['ASCO', 'ABB'] },
  { ruta: `${P}/reguladores-de-voltaje/`, nombre: 'Reguladores de voltaje', corto: 'Reguladores', matriz: 'reguladores',
    resumen: 'Alimentación estable ante variaciones de voltaje de la red.',
    hijos: [ { ruta: `${P}/reguladores-de-voltaje/industronic/`, nombre: 'Industronic' }, { ruta: `${P}/reguladores-de-voltaje/vogar/`, nombre: 'VOGAR' },
             { ruta: `${P}/reguladores-de-voltaje/power-all/`, nombre: 'Power All' }, { ruta: `${P}/reguladores-de-voltaje/rpsm/`, nombre: 'RPSM' } ] },
  { ruta: `${P}/supresores-de-picos/`, nombre: 'Supresores de picos', corto: 'Supresores', matriz: 'supresores',
    resumen: 'Protección de equipos y tableros frente a sobretensiones transitorias.',
    hijos: [ { ruta: `${P}/supresores-de-picos/industronic/`, nombre: 'Industronic' } ] },
  { ruta: `${P}/convertidores-de-frecuencia/`, nombre: 'Convertidores de frecuencia', corto: 'Convertidores', matriz: 'convertidores',
    resumen: 'Conversión de frecuencia y control de velocidad de motores para bombeo, HVAC y procesos industriales.',
    hijos: [ { ruta: `${P}/convertidores-de-frecuencia/abb/`, nombre: 'ABB' }, { ruta: `${P}/convertidores-de-frecuencia/industronic/`, nombre: 'Industronic' } ],
    marcas: ['Powest'] },
  { ruta: `${P}/magic-battery/`, nombre: 'Magic Battery', corto: 'Magic Battery', resumen: 'Respaldo de energía sin combustible para cargas esenciales de pequeñas instalaciones.', hijos: [] },
];
// Matriz de servicios por producto (Reporte de observaciones de CBPS, 24-nov, sección 3.2), tal cual.
export const SERVICIOS_MATRIZ = ['Flete', 'Maniobra', 'Configuración', 'Instalación', 'Arranque', 'Diagnóstico', 'Mantenimiento preventivo',
  'Mantenimiento correctivo', 'Actualización de infraestructura', 'Visitas de reconocimiento', 'Visita de levantamiento', 'Renta',
  'Capacitaciones', 'Reemplazo de batería', 'Desinstalación', 'Reubicación'];
const TODOS = SERVICIOS_MATRIZ, SIN = (...x) => TODOS.filter((s) => !x.includes(s));
export const MATRIZ = {
  plantas: TODOS, ups: TODOS,
  baterias: ['Flete', 'Maniobra', 'Instalación', 'Diagnóstico', 'Mantenimiento preventivo', 'Visitas de reconocimiento', 'Visita de levantamiento', 'Reemplazo de batería', 'Desinstalación', 'Reubicación'],
  convertidores: SIN('Renta', 'Reemplazo de batería'), tableros: SIN('Renta', 'Reemplazo de batería'), aire: SIN('Renta', 'Reemplazo de batería'),
  reguladores: ['Flete', 'Maniobra', 'Instalación', 'Arranque', 'Diagnóstico', 'Mantenimiento preventivo', 'Mantenimiento correctivo', 'Visitas de reconocimiento', 'Visita de levantamiento', 'Desinstalación', 'Reubicación'],
  supresores: ['Flete', 'Instalación', 'Diagnóstico', 'Mantenimiento correctivo', 'Visitas de reconocimiento', 'Visita de levantamiento', 'Desinstalación', 'Reubicación'],
};
export const SERVICIOS = [
  { ruta: `${S}/mantenimiento/`, nombre: 'Mantenimiento preventivo y correctivo', corto: 'Mantenimiento',
    resumen: 'Mantenimiento en sitio de plantas de emergencia y sistemas UPS, para que respondan cuando falle la red.',
    hijos: [ { ruta: `${S}/mantenimiento/plantas-de-emergencia/`, nombre: 'Mantenimiento de plantas de emergencia' }, { ruta: `${S}/mantenimiento/ups/`, nombre: 'Mantenimiento de UPS' } ] },
  { ruta: `${S}/reparacion-y-modernizacion/`, nombre: 'Reparación y modernización', corto: 'Reparación',
    resumen: 'Diagnóstico de fallas y decisión técnica entre reparar, modernizar o sustituir el equipo.',
    hijos: [ { ruta: `${S}/reparacion-y-modernizacion/ups/`, nombre: 'Reparación y modernización de UPS' } ] },
  { ruta: `${S}/instalacion-y-dimensionamiento/`, nombre: 'Instalación y dimensionamiento', corto: 'Instalación',
    resumen: 'Cálculo de capacidad y autonomía, instalación y puesta en marcha bajo norma.',
    hijos: [ { ruta: `${S}/instalacion-y-dimensionamiento/plantas-de-emergencia/`, nombre: 'Dimensionamiento e instalación de plantas' } ] },
  { ruta: `${S}/sustitucion-de-bancos-de-baterias/`, nombre: 'Sustitución de bancos de baterías', corto: 'Sustitución de baterías',
    resumen: 'Sustitución de bancos de baterías para UPS con modelos compatibles y adecuados para cada aplicación.', hijos: [] },
  { ruta: `${S}/renta-de-plantas-de-emergencia/`, nombre: 'Renta de plantas de emergencia', corto: 'Renta de plantas',
    resumen: 'Plantas en renta para eventos, obras, mantenimientos programados y contingencias.', hijos: [] },
  { ruta: `${S}/renta-y-financiamiento-de-ups-trifasico/`, nombre: 'Renta y financiamiento de UPS trifásico', corto: 'Renta de UPS',
    resumen: 'UPS trifásicos en renta o financiados, con instalación y soporte técnico.', hijos: [] },
];
export const MENU = [
  { nombre: 'Productos', ruta: '/productos/', tipo: 'productos' },
  { nombre: 'Servicios', ruta: '/servicios/', tipo: 'servicios' },
  { nombre: 'Nosotros', ruta: '/nosotros/' },
  { nombre: 'Blog', ruta: '/blog/' },
  { nombre: 'Contacto', ruta: '/contacto/' },
];
// índice plano ruta -> {nombre, padre}
export const ARBOL = {};
const recorrer = (lista, padre) => lista.forEach((n) => { ARBOL[n.ruta] = { nombre: n.nombre, padre, resumen: n.resumen }; if (n.hijos) recorrer(n.hijos, n.ruta); });
ARBOL['/productos/'] = { nombre: 'Productos', padre: '/' };
ARBOL['/servicios/'] = { nombre: 'Servicios', padre: '/' };
recorrer(LINEAS, '/productos/');
recorrer(SERVICIOS, '/servicios/');
Object.assign(ARBOL, {
  '/nosotros/': { nombre: 'Nosotros', padre: '/' }, '/contacto/': { nombre: 'Contacto', padre: '/' }, '/blog/': { nombre: 'Blog', padre: '/' },
  '/promociones/': { nombre: 'Promociones', padre: '/' }, '/alianza-estrategica/': { nombre: 'Alianza estratégica', padre: '/' },
  '/libro-gratis/': { nombre: 'Libro gratis', padre: '/' }, '/politica-privacidad/': { nombre: 'Política de privacidad', padre: '/' },
  '/terminos-y-condiciones/': { nombre: 'Términos y condiciones', padre: '/' },
});
export function migas(ruta, titulo) {
  const out = []; let r = ruta;
  while (r && r !== '/') { const n = ARBOL[r]; out.unshift({ ruta: r, nombre: n?.nombre || titulo }); r = n?.padre || (r.startsWith('/blog/') ? '/blog/' : '/'); if (r === ruta) break; }
  return [{ ruta: '/', nombre: 'Inicio' }, ...out];
}
export function hermanos(ruta) {
  const n = ARBOL[ruta]; if (!n) return [];
  return Object.entries(ARBOL).filter(([r, v]) => v.padre === n.padre && r !== ruta).map(([r, v]) => ({ ruta: r, nombre: v.nombre }));
}
export function hijos(ruta) { return Object.entries(ARBOL).filter(([, v]) => v.padre === ruta).map(([r, v]) => ({ ruta: r, nombre: v.nombre, resumen: v.resumen })); }
