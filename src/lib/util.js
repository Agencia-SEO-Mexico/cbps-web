export const slug = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60);
// títulos en MAYÚSCULAS sostenidas → tipo frase, sin perder siglas ni marcas
const SIGLAS = ['CBPS', 'UPS', 'ABB', 'IGSA', 'PLANELEC', 'RPSM', 'CSB', 'HVAC', 'CCTV', 'NEMA', 'IEC', 'NOM', 'SEDE', 'ASCO', 'ATS', 'AGM', 'VRLA', 'GEL', 'TI', 'CDMX', 'LTH', 'STULZ', 'VOGAR', 'POWEST', 'TVSS', 'C&D', 'NEMAS', 'kVA', 'kW', 'México', 'Generac', 'Cummins', 'Stamford', 'DeepSea', 'Eaton', 'Vertiv', 'EnerSys', 'Trojan', 'Crown', 'Kaise', 'Invermexa', 'Industronic', 'CyberPower', 'HiRef', 'Magic Battery', 'CBPS'];
const RE_SIGLAS = new RegExp(`(^|[^a-záéíóúñ])(${SIGLAS.map((x) => x.toLowerCase().replace(/[&]/g, '\\$&')).join('|')})(?![a-záéíóúñ])`, 'g');
const MAPA = Object.fromEntries(SIGLAS.map((x) => [x.toLowerCase(), x]));
export const tc = (s) => {
  if (!(s && s === s.toUpperCase() && /[A-ZÁÉÍÓÚ]{4}/.test(s))) return s;
  const t = s.toLowerCase().replace(RE_SIGLAS, (m, pre, w) => pre + MAPA[w]);
  return t.replace(/[a-zA-ZáéíóúñÁÉÍÓÚÑ]/, (c) => c.toUpperCase());
};
// agrupa bloques consecutivos: imágenes -> fila, faq -> acordeón
export function agrupar(body) {
  const out = [];
  for (const b of body) {
    const last = out[out.length - 1];
    if (b.t === 'img' && last?.t === 'imgs') { last.items.push(b); continue; }
    if (b.t === 'img') { out.push({ t: 'imgs', items: [b] }); continue; }
    if (b.t === 'faq' && last?.t === 'faqs') { last.items.push(b); continue; }
    if (b.t === 'faq') { out.push({ t: 'faqs', items: [b] }); continue; }
    out.push(b);
  }
  return out;
}
