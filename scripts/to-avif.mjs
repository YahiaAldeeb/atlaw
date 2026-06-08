// One-off: convert referenced raster images to AVIF siblings for fast loading.
// Keeps originals as a fallback; only the .avif files are what the site loads.
import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve("public");
// Folders of unused source originals — don't bother converting these.
const SKIP_DIRS = new Set(["comp imgs"]);
const RASTER = /\.(png|jpe?g|webp)$/i;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      yield* walk(path.join(dir, entry.name));
    } else if (RASTER.test(entry.name)) {
      yield path.join(dir, entry.name);
    }
  }
}

let beforeTotal = 0;
let afterTotal = 0;
let count = 0;

for await (const file of walk(ROOT)) {
  const out = file.replace(RASTER, ".avif");
  // quality 50 / effort 4 is a strong size↔fidelity balance for web photos.
  await sharp(file).avif({ quality: 50, effort: 4 }).toFile(out);
  const before = (await stat(file)).size;
  const after = (await stat(out)).size;
  beforeTotal += before;
  afterTotal += after;
  count += 1;
  const pct = Math.round((1 - after / before) * 100);
  console.log(
    `${path.relative(ROOT, out).padEnd(60)} ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB  (-${pct}%)`
  );
}

console.log(
  `\n${count} images · ${(beforeTotal / 1024 / 1024).toFixed(2)}MB -> ${(afterTotal / 1024 / 1024).toFixed(2)}MB (saved ${Math.round((1 - afterTotal / beforeTotal) * 100)}%)`
);
