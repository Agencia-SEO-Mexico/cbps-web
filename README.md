# CBPS · sitio nuevo (vista previa)

Sitio estático de www.cbps.com.mx construido con Astro. Esta versión es una **vista previa** para
revisión con CBPS: no debe competir con el sitio actual en Google.

## Cómo está protegida la vista previa

Mientras `PREVIEW` no sea `false` (por defecto es vista previa):

- todas las páginas llevan `<meta name="robots" content="noindex,nofollow">`;
- `robots.txt` responde `Disallow: /`;
- el `canonical` de cada página apunta a la URL **actual** equivalente en www.cbps.com.mx
  (para las páginas nuevas, a la página actual más cercana);
- las direcciones actuales (`/home/electricas/...`, `/2024/...`) existen como páginas puente con
  `noindex` y redirección inmediata a la página nueva, para que cualquier enlace viejo funcione.

## Cómo quitarlo al lanzar

1. Construir con las variables de producción:
   ```bash
   PREVIEW=false SITE_URL=https://www.cbps.com.mx BASE_PATH= npm run build
   ```
   Con eso desaparece el `noindex`, `robots.txt` pasa a `Allow: /` con el sitemap y el
   `canonical` apunta a la URL nueva de cada página.
2. Borrar del build las páginas puente y sustituirlas por 301 de servidor: copiar
   `lanzamiento/_redirects` a `public/_redirects` (Netlify y Cloudflare Pages lo leen tal cual).
   El detalle URL por URL está en `lanzamiento/redirecciones-301-cbps.csv`.
3. Conectar el formulario al servicio del hosting (Netlify Forms u otro) con un buzón por división
   (matriz pendiente de CBPS). Hoy el formulario valida en la página y abre un modal propio con
   envío por WhatsApp o por correo; no usa ningún servidor.
4. Instalar el contenedor de Google Tag Manager `GTM-TDQRDQCG` en `src/layouts/Base.astro` y
   quitar Site Kit y el gtag manual del WordPress actual. Los clics ya empujan eventos a
   `dataLayer`: `contacto_whatsapp`, `contacto_telefono`, `contacto_formulario`, `form_listo`.
5. Volver a pasar la revisión (enlaces, consola, móvil) sobre el dominio final.

## Estructura

| Carpeta | Qué hay |
|---|---|
| `src/data/fuente.json` | Contenido rescatado de cada página actual de cbps.com.mx (generado) |
| `src/data/escritas.js` | Páginas nuevas de la arquitectura SEO (servicios, tableros de transferencia) |
| `src/lib/nav.js` | Árbol del sitio: menú, migas, hubs y relacionados |
| `src/lib/site.js` | Datos de contacto, WhatsApp, modo vista previa |
| `src/pages/index.astro` | Portada |
| `src/pages/[...ruta].astro` | Plantilla de todas las demás páginas y de las páginas puente |
| `public/img/` | Imágenes del sitio actual recomprimidas en WebP |
| `lanzamiento/` | Mapa 301 (CSV) y archivo `_redirects` |

## Comandos

```bash
npm ci
npm run dev      # http://localhost:4321/cbps-web/
npm run build    # genera dist/
```

GitHub Actions (`.github/workflows/deploy.yml`) publica `dist/` en GitHub Pages en cada push a `main`.

Agencia SEO México
