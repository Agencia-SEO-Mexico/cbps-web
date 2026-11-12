import { defineConfig } from 'astro/config';
import { copyFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
// Vista previa en GitHub Pages: https://agencia-seo-mexico.github.io/cbps-web/
// Al lanzar en www.cbps.com.mx: site = 'https://www.cbps.com.mx', base = '/' (ver README).

// En producción (PREVIEW=false) el build lleva sus 301: lanzamiento/_redirects se copia a dist/_redirects
// (Netlify y Cloudflare Pages lo leen tal cual). Para Apache o Nginx: lanzamiento/.htaccess o nginx-redirecciones.conf.
const redirecciones301 = {
  name: 'cbps-redirecciones-301',
  hooks: {
    'astro:build:done': ({ dir, logger }) => {
      if ((process.env.PREVIEW ?? 'true') !== 'false') return;
      copyFileSync(new URL('./lanzamiento/_redirects', import.meta.url), new URL('_redirects', dir));
      logger.info(`_redirects copiado a ${fileURLToPath(dir)}`);
    },
  },
};

export default defineConfig({
  site: process.env.SITE_URL || 'https://agencia-seo-mexico.github.io',
  base: process.env.BASE_PATH ?? '/cbps-web',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  compressHTML: true,
  integrations: [redirecciones301],
});
