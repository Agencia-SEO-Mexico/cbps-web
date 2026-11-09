import { PAGINAS } from '../lib/paginas.js';
import { PROD } from '../lib/site.js';
// URLs finales en www.cbps.com.mx (las de lanzamiento), solo páginas reales, sin puentes.
export function GET() {
  const hoy = '2026-11-09';
  const urls = Object.values(PAGINAS).map((p) => `<url><loc>${PROD}${p.ruta}</loc><lastmod>${(p.modified || p.published || hoy).slice(0, 10)}</lastmod></url>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
