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
  calle: 'Av. Churubusco 303, int. 8',
  ciudad: 'Ciudad de México',
  estado: 'CDMX',
  cp: '03340',
  pais: 'MX',
};
export const wa = (texto) => `https://wa.me/${NEGOCIO.whatsapp}?text=${encodeURIComponent(texto)}`;
export const waCotizar = (que) => wa(`Hola, vi su sitio www.cbps.com.mx y quiero solicitar una cotización${que ? ' de ' + que : ''}.\n\nProducto o servicio:\nCantidad:\nEmpresa:\nLocalidad:`);
export const waOrientacion = (que) => wa(`Hola, vi su sitio www.cbps.com.mx y me gustaría recibir orientación técnica${que ? ' sobre ' + que : ' sobre protección de cargas críticas'}.\n\nEquipo o proyecto:\nConsulta:\nEmpresa:\nLocalidad:`);
