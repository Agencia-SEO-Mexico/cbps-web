import { PREVIEW } from '../lib/site.js';
// Vista previa: nada se rastrea. Al lanzar (PREVIEW=false) se abre y apunta al sitemap.
export function GET({ site }) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const body = PREVIEW
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\n\nSitemap: ${new URL(base + '/sitemap.xml', site).href}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
