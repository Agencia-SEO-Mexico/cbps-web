// Ajustes globales. PREVIEW=true mientras sea vista previa (noindex + canonical a cbps.com.mx).
export const PREVIEW = (process.env.PREVIEW ?? 'true') !== 'false';
export const PROD = 'https://www.cbps.com.mx';
export const BASE = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
export const u = (p = '/') => (p.startsWith('http') || p.startsWith('#') || p.startsWith('mailto:') || p.startsWith('tel:')) ? p : `${BASE}${p}`;
export const NEGOCIO = {
  nombre: 'CBPS',
  nombreLargo: 'CBPS · Critical Business Power Systems',
  lema: 'Protección de cargas críticas diseñada con ingeniería',
  whatsapp: '525521710020',
  telVisible: '55 2171 0020',
  tel: '+525521710020',
  correo: 'javier.galindo@cbps.com.mx',
  calle: 'Av. Churubusco 303, interior 8', // escritura que pidió CBPS (auditoría 21-nov, reportes 05 y 06)
  ciudad: 'Ciudad de México',
  estado: 'CDMX',
  cp: '03340',
  pais: 'MX',
};
// WhatsApp por área (auditoría de CBPS, 6.2 y 6.4): cuando CBPS defina un número por línea se pone aquí
// (prefijo de ruta → número con lada 52). Sin número propio, la línea usa el general.
export const WA_POR_AREA = {
  // '/productos/plantas-de-emergencia/': '52XXXXXXXXXX',
  // '/productos/ups/': '52XXXXXXXXXX',
};
export const waNumero = (ruta = '') => Object.entries(WA_POR_AREA).find(([r]) => ruta.startsWith(r))?.[1] || NEGOCIO.whatsapp;
export const wa = (texto, ruta) => `https://wa.me/${waNumero(ruta)}?text=${encodeURIComponent(texto)}`;
// mensaje precargado con el formato que pidió CBPS (reporte de observaciones, 6.3)
const CAMPOS = '\nNombre de contacto:\nEmpresa y giro:\nCorreo:\nProducto o servicio y cantidad:\nLocalidad:';
export const waCotizar = (que, ruta) => wa(`Hola, vi su sitio www.cbps.com.mx y quiero solicitar una cotización${que ? ' de ' + que : ''}.${CAMPOS}`, ruta);
export const waOrientacion = (que, ruta) => wa(`Hola, vi su sitio www.cbps.com.mx y quiero recibir orientación técnica${que ? ' sobre ' + que : ' sobre protección de cargas críticas'}.${CAMPOS}`, ruta);
