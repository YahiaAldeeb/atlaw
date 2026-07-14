// Convert Areas Served city photos to web-optimized AVIF (city landing heroes).
import sharp from "sharp";
import { mkdir, stat } from "node:fs/promises";
import path from "node:path";

const SRC = "C:/Users/yahia/OneDrive/Desktop/ATLAW/Areas Served";
const OUT = path.resolve("public/assets/cities");

async function convert(srcFile, name, maxWidth = 1600, quality = 62) {
  const src = `${SRC}/${srcFile}`;
  const dest = `${OUT}/${name}.avif`;
  await mkdir(path.dirname(dest), { recursive: true });
  const img = sharp(src);
  const meta = await img.metadata();
  const pipeline = meta.width > maxWidth ? img.resize(maxWidth) : img;
  await pipeline.avif({ quality, effort: 4 }).toFile(dest);
  const before = (await stat(src)).size;
  const after = (await stat(dest)).size;
  const pct = Math.round((1 - after / before) * 100);
  console.log(`${name.padEnd(20)} ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB (-${pct}%)`);
}

const map = [
  ["Dearborn.jpg", "dearborn"],
  ["Detriot.avif", "detroit"],
  ["Dearborn Heights.jpg", "dearborn-heights"],
  ["Ann Arbor.jpeg", "ann-arbor"],
  ["Wayne Country.jpg", "wayne-county"],
  ["Oakland County.jpg", "oakland-county"],
  ["Macomb County .jpg", "macomb-county"],
  ["Michigan.jpg", "michigan"],
];

for (const [file, name] of map) {
  await convert(file, name);
}

console.log("\nDone. City photos converted.");
