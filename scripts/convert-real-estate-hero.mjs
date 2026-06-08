import sharp from "sharp";
import { statSync } from "node:fs";

const SRC = "C:/Users/conta/Downloads/ChatGPT Image Jun 7, 2026, 11_14_51 PM.png";
const OUT_DIR = "public/assets";
const AVIF = `${OUT_DIR}/real-estate-hero.avif`;
const WEBP = `${OUT_DIR}/real-estate-hero.webp`;

const kb = (p) => (statSync(p).size / 1024).toFixed(1) + " KB";

const meta = await sharp(SRC).metadata();
console.log(`Source: ${meta.width}x${meta.height}  (${kb(SRC)})`);

// Resize longest edge to ~2000px for a full-width hero, keep aspect ratio.
const resize = { width: 2000, height: 2000, fit: "inside", withoutEnlargement: true };

await sharp(SRC).resize(resize).avif({ quality: 52, effort: 5 }).toFile(AVIF);
await sharp(SRC).resize(resize).webp({ quality: 72, effort: 5 }).toFile(WEBP);

const outMeta = await sharp(AVIF).metadata();
console.log(`Output:  ${outMeta.width}x${outMeta.height}`);
console.log(`AVIF:    ${kb(AVIF)}  -> ${AVIF}`);
console.log(`WebP:    ${kb(WEBP)}  -> ${WEBP}`);
