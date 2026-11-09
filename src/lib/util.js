export const slug = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60);
export const tc = (s) => (s && s === s.toUpperCase() && /[A-ZÁÉÍÓÚ]{4}/.test(s)) ? s.charAt(0) + s.slice(1).toLowerCase() : s;
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
