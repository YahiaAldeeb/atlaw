// Convert practice-area / hero source images (.jpg/.jpeg/.png) to .avif.
//
// Usage:
//   node scripts/convert-images-to-avif.mjs                 # convert the known hero sources
//   node scripts/convert-images-to-avif.mjs path/to/img.jpg # convert a specific file
//
// AVIF is dramatically smaller than JPG/PNG at equivalent quality, which is
// why every hero on the site should ship as .avif. Sources are kept on disk so
// re-conversion is always possible; only the .avif is referenced by the app.

import sharp from "sharp";
import { existsSync } from "node:fs";
import { resolve, parse, join } from "node:path";

// Default set: the practice-area hero photos. Add new sources here as they land.
const DEFAULT_SOURCES = [
  "public/assets/auto-accidents-hero.jpg",
  "public/assets/personal-injury-hero.png",
  "public/assets/medical-malpractice-hero.jpg",
  "public/assets/wrongful-death-hero.png",
];

const QUALITY = 55; // visually lossless for large photographic heroes
const EFFORT = 6; // 0-9, higher = smaller file / slower encode

async function convert(src) {
  const abs = resolve(src);
  if (!existsSync(abs)) {
    console.warn(`skip (missing): ${src}`);
    return;
  }
  const { dir, name } = parse(abs);
  const out = join(dir, `${name}.avif`);
  const info = await sharp(abs).avif({ quality: QUALITY, effort: EFFORT }).toFile(out);
  console.log(`ok: ${src} -> ${name}.avif (${(info.size / 1024).toFixed(0)} KB)`);
}

const args = process.argv.slice(2);
const sources = args.length > 0 ? args : DEFAULT_SOURCES;
for (const src of sources) {
  await convert(src);
}
