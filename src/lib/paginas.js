import fuenteRescatada from '../data/fuente.json';
import { corregirFuente, ajustesFinales } from '../data/correcciones.js';
import { ESCRITAS } from '../data/escritas.js';
import BLOG_TEXTO from '../data/blog-texto.json';
import { ARBOL } from './nav.js';

// contenido rescatado + correcciones de la revisión del 12-nov (src/data/correcciones.js)
const fuente = corregirFuente(fuenteRescatada);

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
// ajustes de contenido sobre lo rescatado
const fix = (x) => x.replace(/\s*\|\s*CBPS\s*$/i, '').replace(/\s*\|\s*/g, ': ').replace(/\.$/, '');
for (const p of Object.values(PAGINAS)) p.h1 = fix(p.h1);
ajustesFinales(PAGINAS);
if (PAGINAS['/contacto/']) {
  const c = PAGINAS['/contacto/'];
  c.h1 = 'Habla con un ingeniero especialista en protección de cargas críticas';
  c.lead = 'Cuéntanos tu proyecto, falla o necesidad de respaldo eléctrico. Un ingeniero de CBPS analizará tu operación y te orientará con una solución real, no con un catálogo genérico.';
  const q = (t, a) => ({ t: 'faq', q: t, a: [{ t: 'p', x: a }] });
  c.faqs = [
    q('¿Qué productos ofrecen para la protección de cargas críticas?', 'Plantas de emergencia, sistemas UPS, baterías industriales, aire acondicionado de precisión, reguladores de voltaje, supresores de picos y convertidores de frecuencia, además de servicios de instalación, mantenimiento y renta.'),
    q('¿Cómo puedo saber qué producto es el adecuado para mi empresa?', 'Nuestro equipo te asesora en la selección según las necesidades específicas de tu operación. Escríbenos por WhatsApp o llena el formulario con el equipo, la capacidad o la falla.'),
    q('¿Ofrecen servicios de instalación y mantenimiento?', 'Sí. CBPS ofrece instalación y mantenimiento para que tus sistemas de protección de energía funcionen correctamente en todo momento.'),
    q('¿Qué garantías tienen sus productos?', 'La garantía varía según el tipo de equipo y el fabricante. Te la indicamos por escrito en cada cotización.'),
    q('¿Cómo contacto al soporte técnico?', 'Por WhatsApp al 55 2171 0020 o con el formulario de esta página.'),
  ];
  c.sections = [
    { h: 'Dónde estamos', body: [ { t: 'p', x: 'Av. Churubusco 303, int. 8, Ciudad de México, CDMX, CP 03340.' }, { t: 'p', x: 'WhatsApp y teléfono: 55 2171 0020.' } ] },
    { h: 'Qué puedes esperar', body: [ { t: 'h3', x: 'Soluciones personalizadas' }, { t: 'p', x: 'Ofrecemos soluciones adaptadas a las necesidades específicas de tu industria.' }, { t: 'h3', x: 'Soporte técnico' }, { t: 'p', x: 'Contamos con un equipo de expertos para brindarte soporte técnico.' } ] },
    { h: 'Preguntas frecuentes sobre CBPS', body: c.faqs },
  ];
}
// Blog (fase 2, 12-nov): 8 artículos que eran solo un iframe (Drive o designrr) pasan a HTML real con el texto
// del documento de CBPS (extraído tal cual; solo ortografía obvia). El iframe sale y queda un enlace al original,
// que conserva los diagramas e imágenes. Los artículos cuyo contenido es una imagen siguen con su iframe.
for (const [ruta, doc] of Object.entries(BLOG_TEXTO)) {
  const p = PAGINAS[ruta]; if (!p) continue;
  const propias = (p.sections || []).map((s) => ({ ...s, body: s.body.filter((b) => b.t !== 'embed' && !/^Te invitamos a que revises el siguiente art/i.test(b.x || '')) })).filter((s) => s.body.length);
  if (/^Te invitamos a que revises el siguiente art/i.test(p.lead || '')) p.lead = '';
  const delDoc = doc.sections.map((s) => ({ h: s.h, body: s.body.map((b) => b.t === 'table' ? { ...b, head: true } : b) }));
  const enlace = { h: '', body: [{ t: 'enlace', href: doc.original, x: doc.fuente === 'designrr' ? 'Ver el documento original con sus imágenes' : 'Ver el documento original (PDF) con sus diagramas e imágenes' }] };
  p.sections = [...propias, ...delDoc, enlace];
  p.words = doc.sections.flatMap((s) => s.body).reduce((n, b) => n + [b.x || '', ...(b.items || []), ...(b.rows || []).flat()].join(' ').split(/\s+/).filter(Boolean).length, 0);
}
// nombre corto para menús y migas
for (const r of Object.keys(PAGINAS)) if (!ARBOL[r] && !r.startsWith('/blog/')) ARBOL[r] = { nombre: PAGINAS[r].h1, padre: '/' };

// artículo sin documento ni texto (roto también en el sitio actual): noindex y fuera del sitemap hasta que CBPS mande el contenido
for (const p of Object.values(PAGINAS)) {
  if (!p.ruta.startsWith('/blog/') || p.ruta === '/blog/') continue;
  const bloques = (p.sections || []).flatMap((s) => s.body || []);
  const palabras = bloques.reduce((n, b) => n + (b.x || '').split(/\s+/).filter(Boolean).length, 0);
  if (!bloques.some((b) => b.t === 'embed') && palabras < 60) p.noindex = true;
}

// los artículos noindex (sin texto todavía) no se listan ni se enlazan hasta que llegue su contenido
export const POSTS = Object.values(PAGINAS).filter((p) => p.ruta.startsWith('/blog/') && p.ruta !== '/blog/' && !p.noindex)
  .sort((a, b) => (b.published || '').localeCompare(a.published || ''));

// rutas viejas -> nuevas (para las páginas puente de la vista previa)
export const VIEJAS = {};
for (const [ruta, f] of Object.entries(fuente)) for (const o of f.olds) if (o !== ruta) VIEJAS[o] = ruta;
