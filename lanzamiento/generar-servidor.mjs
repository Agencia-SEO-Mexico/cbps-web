// Genera .htaccess (Apache) y nginx-redirecciones.conf a partir de _redirects, para el hosting que se elija.
// Uso: node lanzamiento/generar-servidor.mjs   (vuelve a correrlo cada vez que cambie _redirects)
import { readFileSync, writeFileSync } from 'node:fs';
const dir = new URL('./', import.meta.url);
const reglas = readFileSync(new URL('_redirects', dir), 'utf8').split('\n')
  .filter((l) => l.trim() && !l.startsWith('#')).map((l) => l.trim().split(/\s+/));
// una regla por ruta, sin importar la barra final (en _redirects van las dos variantes)
const unicas = new Map();
for (const [de, a, cod] of reglas) unicas.set(de.replace(/\/$/, '') || '/', [a, cod]);
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const cab = '# CBPS · redirecciones 301 del lanzamiento. Generado desde lanzamiento/_redirects con generar-servidor.mjs. No editar a mano.\n';

let ht = cab + '# Apache: copiar a la raíz pública del sitio (o pegar en el VirtualHost). Requiere mod_rewrite.\n<IfModule mod_rewrite.c>\nRewriteEngine On\n';
for (const [de, [a, cod]] of unicas) ht += `RewriteRule ^${esc(de.replace(/^\//, ''))}/?$ ${a} [R=${cod},L]\n`;
ht += '</IfModule>\n';
writeFileSync(new URL('.htaccess', dir), ht);

let nx = cab + '# Nginx: incluir este fichero dentro de http {} y la línea if dentro del server {} de www.cbps.com.mx.\n# Si el nginx.conf principal ya fija map_hash_*, borrar estas dos líneas y poner allí valores >= estos.\nmap_hash_bucket_size 128;\nmap_hash_max_size 4096;\nmap $uri $cbps_301 {\n  default "";\n';
for (const [de, [a]] of unicas) { nx += `  ${de} ${a};\n`; if (de !== '/') nx += `  ${de}/ ${a};\n`; }
nx += '}\n# dentro de server { ... } (conserva ?gclid/utm):\n# if ($cbps_301) { return 301 $cbps_301$is_args$args; }\n';
writeFileSync(new URL('nginx-redirecciones.conf', dir), nx);
console.log(`${unicas.size} rutas → .htaccess y nginx-redirecciones.conf`);
