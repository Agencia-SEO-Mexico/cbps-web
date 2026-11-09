import fuente from '../data/fuente.json';
import { ESCRITAS } from '../data/escritas.js';
import { ARBOL } from './nav.js';

const titulo = (t) => t.replace(/\s*\|\s*CBPS.*$/i, '').replace(/\s*-\s*CBPS$/i, '').trim();

function desdeFuente(ruta, f) {
  const secciones = JSON.parse(JSON.stringify(f.sections));
  let lead = '';
  let media = null;
  // la primera sección sin H2 aporta la entradilla y la imagen del héroe
  if (secciones.length && !secciones[0].h) {
    const s0 = secciones[0];
    const i = s0.body.findIndex((b) => b.t === 'p' && b.x.length > 60);
    if (i >= 0) lead = s0.body.splice(i, 1)[0].x;
  }
  for (const s of secciones) {
    const j = s.body.findIndex((b) => b.t === 'img' && b.w >= 240);
    if (j >= 0) { media = s.body.splice(j, 1)[0]; break; }
  }
  const limpias = secciones.filter((s) => s.body.length || (s.h && s.body.length));
  return {
    ruta, canon: f.old, olds: f.olds, title: titulo(f.title), desc: f.desc, h1: f.h1, lead, media,
    sections: limpias, faqs: f.faqs, published: f.published, modified: f.modified, words: f.words, wa: f.wa,
  };
}

export const PAGINAS = {};
for (const [ruta, f] of Object.entries(fuente)) PAGINAS[ruta] = desdeFuente(ruta, f);
for (const [ruta, e] of Object.entries(ESCRITAS)) {
  const sections = e.sections.map((s) => ({ ...s, body: [...s.body] }));
  if (e.faqs?.length) sections.push({ h: 'Preguntas frecuentes', body: e.faqs });
  PAGINAS[ruta] = { ruta, canon: e.canon, olds: PAGINAS[ruta]?.olds || [], title: e.title, desc: e.desc, h1: e.h1, lead: e.lead, media: null,
    sections, faqs: e.faqs, related: e.related || [], nueva: true };
}
// nombre corto para menús y migas
for (const r of Object.keys(PAGINAS)) if (!ARBOL[r] && !r.startsWith('/blog/')) ARBOL[r] = { nombre: PAGINAS[r].h1, padre: '/' };

export const POSTS = Object.values(PAGINAS).filter((p) => p.ruta.startsWith('/blog/') && p.ruta !== '/blog/')
  .sort((a, b) => (b.published || '').localeCompare(a.published || ''));

// rutas viejas -> nuevas (para las páginas puente de la vista previa)
export const VIEJAS = {};
for (const [ruta, f] of Object.entries(fuente)) for (const o of f.olds) if (o !== ruta) VIEJAS[o] = ruta;
