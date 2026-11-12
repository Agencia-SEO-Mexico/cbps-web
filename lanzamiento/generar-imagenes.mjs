// Variantes responsive de public/img: para cada imagen de más de 560 px de ancho genera
// public/img/r/<nombre>-560.webp, -560.avif y <nombre>.avif (ancho original).
// Uso: node lanzamiento/generar-imagenes.mjs  (idempotente: salta lo que ya existe)
import sharp from 'sharp';
import { readdirSync, existsSync, mkdirSync } from 'node:fs';
const dir = new URL('../public/img/', import.meta.url).pathname;
const out = dir + 'r/';
mkdirSync(out, { recursive: true });
let n = 0;
for (const f of readdirSync(dir).filter((x) => x.endsWith('.webp'))) {
  const base = f.replace(/\.webp$/, '');
  const meta = await sharp(dir + f).metadata();
  if ((meta.width || 0) <= 560) continue;
  const tareas = [
    [`${base}-560.webp`, (s) => s.resize({ width: 560 }).webp({ quality: 74, effort: 5 })],
    [`${base}-560.avif`, (s) => s.resize({ width: 560 }).avif({ quality: 50, effort: 4 })],
    [`${base}.avif`, (s) => s.avif({ quality: 50, effort: 4 })],
  ];
  for (const [nombre, fn] of tareas) if (!existsSync(out + nombre)) { await fn(sharp(dir + f)).toFile(out + nombre); n++; }
}
console.log(`variantes nuevas: ${n}`);
