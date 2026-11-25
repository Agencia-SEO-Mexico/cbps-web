// Revisión editorial integral pedida por CBPS (Reporte 05 de su auditoría, 21-nov-2026), aplicada el 25-nov.
// editorial.json = relación de correcciones {url, ubicacion, original, corregido, tipo}: la misma tabla que se
// entrega a CBPS. Cada corrección se aplica a todo el texto de su página (title, desc, H1, entradilla,
// encabezados, párrafos, listas, tablas, FAQ y alt). Las del código (portada, componentes) se editaron en su archivo.
import EDITORIAL from './editorial.json';

const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const sp = (s) => s.replace(/[\s ]+/g, ' ');
function reemplazar(s, lista) {
  if (typeof s !== 'string' || !s) return s;
  for (const c of lista) {
    if (s.includes(c.original)) s = s.split(c.original).join(c.corregido);
    // saltos de línea dentro de títulos rescatados y espacio duro de «99 %»: se compara con los espacios normalizados
    else if (sp(s).includes(sp(c.original))) s = sp(s).split(sp(c.original)).join(c.corregido);
    else if (c.original.length >= 8) {
      // títulos rescatados en MAYÚSCULAS: el texto publicado pasa a tipo frase, la fuente no
      const re = new RegExp(esc(c.original), 'i');
      if (re.test(s)) s = s.replace(re, c.corregido);
    }
  }
  return s;
}
function recorrer(b, lista) {
  if (!b || typeof b !== 'object') return;
  for (const k of ['x', 'q', 'alt', 'h']) if (typeof b[k] === 'string') b[k] = reemplazar(b[k], lista);
  if (Array.isArray(b.items)) b.items = b.items.map((i) => (typeof i === 'string' ? reemplazar(i, lista) : (recorrer(i, lista), i)));
  if (Array.isArray(b.rows)) b.rows = b.rows.map((r) => r.map((c) => reemplazar(c, lista)));
  if (Array.isArray(b.a)) b.a.forEach((a) => recorrer(a, lista));
  if (Array.isArray(b.body)) b.body.forEach((x) => recorrer(x, lista));
}
export function aplicarEditorial(paginas) {
  const porUrl = {};
  for (const c of EDITORIAL) if (c.original && c.corregido !== c.original && !c.enCodigo) (porUrl[c.url] ||= []).push(c);
  // correcciones de texto que se ve en una página pero vive en otra (p. ej. la descripción de una marca listada en su línea)
  const globales = EDITORIAL.filter((c) => c.global && c.original && c.corregido !== c.original);
  if (globales.length) for (const url of Object.keys(paginas)) (porUrl[url] ||= []).push(...globales);
  for (const [url, lista] of Object.entries(porUrl)) {
    const p = paginas[url]; if (!p) continue;
    // el title publicado lleva « | CBPS»: la corrección puede venir con o sin ese sufijo
    const l2 = [...lista, ...lista.filter((c) => / \| CBPS$/.test(c.original)).map((c) => ({ original: c.original.replace(/ \| CBPS$/, ''), corregido: c.corregido.replace(/ \| CBPS$/, '') }))];
    for (const k of ['title', 'desc', 'h1', 'lead']) p[k] = reemplazar(p[k], l2);
    if (p.media) recorrer(p.media, l2);
    (p.sections || []).forEach((s) => recorrer(s, l2));
    (p.faqs || []).forEach((f) => recorrer(f, l2));
    // bloques que la corrección dejó vacíos (duplicados que se quitan)
    for (const s of p.sections || []) s.body = (s.body || []).filter((b) => !(typeof b.x === 'string' && !b.x.trim() && !b.items && !b.rows));
  }
}
