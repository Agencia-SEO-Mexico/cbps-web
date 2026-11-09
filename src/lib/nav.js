// Árbol del sitio: menú, migas, hubs y páginas relacionadas salen de aquí.
const P = '/productos', S = '/servicios', BI = '/productos/baterias-industriales';
export const LINEAS = [
  { ruta: `${P}/plantas-de-emergencia/`, nombre: 'Plantas de emergencia', corto: 'Plantas', prioridad: 1,
    resumen: 'Respaldo ante fallas totales o prolongadas de la red: suministro, dimensionamiento, instalación y mantenimiento.',
    hijos: [
      { ruta: `${P}/plantas-de-emergencia/generac/`, nombre: 'Generac' },
      { ruta: `${P}/plantas-de-emergencia/igsa/`, nombre: 'IGSA' },
      { ruta: `${P}/plantas-de-emergencia/planelec/`, nombre: 'PLANELEC' },
      { ruta: `${P}/plantas-de-emergencia/cbps/`, nombre: 'Plantas CBPS' },
      { ruta: `${P}/tableros-de-transferencia/`, nombre: 'Tableros de transferencia' },
    ] },
  { ruta: `${P}/ups/`, nombre: 'Sistemas UPS', corto: 'UPS', prioridad: 2,
    resumen: 'Protección instantánea ante microcortes, variaciones de voltaje y picos: suministro, mantenimiento, reparación y modernización.',
    hijos: [
      { ruta: `${P}/ups/eaton/`, nombre: 'Eaton' },
      { ruta: `${P}/ups/vertiv/`, nombre: 'Vertiv' },
      { ruta: `${P}/ups/cyberpower/`, nombre: 'CyberPower' },
      { ruta: `${P}/ups/abb/`, nombre: 'ABB' },
      { ruta: `${P}/ups/industronic/`, nombre: 'Industronic' },
      { ruta: `${P}/ups/powest/`, nombre: 'Powest' },
    ] },
  { ruta: `${BI}/`, nombre: 'Baterías industriales', corto: 'Baterías', prioridad: 3,
    resumen: 'Baterías para UPS, de arranque y de ciclo profundo, y sustitución de bancos completos.',
    hijos: [
      { ruta: `${BI}/baterias-para-ups/`, nombre: 'Baterías para UPS (respaldo)', grupo: true, hijos: [
        { ruta: `${BI}/csb/`, nombre: 'CSB' }, { ruta: `${BI}/c-and-d/`, nombre: 'C&D' }, { ruta: `${BI}/eaton/`, nombre: 'Eaton' },
        { ruta: `${BI}/kaise/`, nombre: 'Kaise' }, { ruta: `${BI}/invermexa/`, nombre: 'Invermexa' }, { ruta: `${BI}/enersys/`, nombre: 'EnerSys' },
        { ruta: `${BI}/powest/`, nombre: 'Powest' } ] },
      { ruta: `${BI}/baterias-de-arranque/`, nombre: 'Baterías de arranque', grupo: true, hijos: [
        { ruta: `${BI}/lth/`, nombre: 'LTH' }, { ruta: `${BI}/america/`, nombre: 'América' } ] },
      { ruta: `${BI}/baterias-de-ciclo-profundo/`, nombre: 'Baterías de ciclo profundo', grupo: true, hijos: [
        { ruta: `${BI}/trojan/`, nombre: 'Trojan' }, { ruta: `${BI}/crown/`, nombre: 'Crown' } ] },
    ] },
  { ruta: `${P}/aire-de-precision/`, nombre: 'Aire acondicionado de precisión', corto: 'Aire de precisión',
    resumen: 'Control de temperatura y humedad para sites, centros de datos y bancos de baterías.',
    hijos: [ { ruta: `${P}/aire-de-precision/vertiv/`, nombre: 'Vertiv' }, { ruta: `${P}/aire-de-precision/stulz/`, nombre: 'STULZ' }, { ruta: `${P}/aire-de-precision/hiref/`, nombre: 'HiRef' } ] },
  { ruta: `${P}/reguladores-de-voltaje/`, nombre: 'Reguladores de voltaje', corto: 'Reguladores',
    resumen: 'Alimentación estable ante variaciones de voltaje de la red.',
    hijos: [ { ruta: `${P}/reguladores-de-voltaje/industronic/`, nombre: 'Industronic' }, { ruta: `${P}/reguladores-de-voltaje/vogar/`, nombre: 'VOGAR' },
             { ruta: `${P}/reguladores-de-voltaje/power-all/`, nombre: 'Power All' }, { ruta: `${P}/reguladores-de-voltaje/rpsm/`, nombre: 'RPSM' } ] },
  { ruta: `${P}/supresores-de-picos/`, nombre: 'Supresores de picos', corto: 'Supresores',
    resumen: 'Protección de equipos y tableros frente a sobretensiones transitorias.',
    hijos: [ { ruta: `${P}/supresores-de-picos/industronic/`, nombre: 'Industronic' } ] },
  { ruta: `${P}/convertidores-de-frecuencia/`, nombre: 'Convertidores de frecuencia', corto: 'Convertidores',
    resumen: 'Control de velocidad de motores para bombeo, HVAC y procesos industriales.',
    hijos: [ { ruta: `${P}/convertidores-de-frecuencia/abb/`, nombre: 'ABB' }, { ruta: `${P}/convertidores-de-frecuencia/industronic/`, nombre: 'Industronic' } ] },
  { ruta: `${P}/magic-battery/`, nombre: 'Magic Battery', corto: 'Magic Battery', resumen: 'Respaldo de energía para el hogar y pequeños negocios.', hijos: [] },
];
export const SERVICIOS = [
  { ruta: `${S}/mantenimiento/`, nombre: 'Mantenimiento preventivo y correctivo', corto: 'Mantenimiento',
    resumen: 'Plantas de emergencia y UPS revisados en sitio para que respondan el día que falla la red.',
    hijos: [ { ruta: `${S}/mantenimiento/plantas-de-emergencia/`, nombre: 'Mantenimiento de plantas de emergencia' }, { ruta: `${S}/mantenimiento/ups/`, nombre: 'Mantenimiento de UPS' } ] },
  { ruta: `${S}/reparacion-y-modernizacion/`, nombre: 'Reparación y modernización', corto: 'Reparación',
    resumen: 'Diagnóstico de fallas y decisión técnica entre reparar, modernizar o sustituir el equipo.',
    hijos: [ { ruta: `${S}/reparacion-y-modernizacion/ups/`, nombre: 'Reparación y modernización de UPS' } ] },
  { ruta: `${S}/instalacion-y-dimensionamiento/`, nombre: 'Instalación y dimensionamiento', corto: 'Instalación',
    resumen: 'Cálculo de capacidad y autonomía, instalación y puesta en marcha bajo norma.',
    hijos: [ { ruta: `${S}/instalacion-y-dimensionamiento/plantas-de-emergencia/`, nombre: 'Dimensionamiento e instalación de plantas' } ] },
  { ruta: `${S}/sustitucion-de-bancos-de-baterias/`, nombre: 'Sustitución de bancos de baterías', corto: 'Sustitución de baterías',
    resumen: 'Cambio de bancos completos para UPS con el modelo correcto y sin dejar la carga sin protección.', hijos: [] },
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
