import { defineConfig } from 'astro/config';
// Vista previa en GitHub Pages: https://agencia-seo-mexico.github.io/cbps-web/
// Al lanzar en www.cbps.com.mx: site = 'https://www.cbps.com.mx', base = '/' (ver README).
export default defineConfig({
  site: process.env.SITE_URL || 'https://agencia-seo-mexico.github.io',
  base: process.env.BASE_PATH ?? '/cbps-web',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  compressHTML: true,
});
