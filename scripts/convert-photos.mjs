// Spec 08 — Convert selected ATLAW photos to web-optimized AVIF
import sharp from "sharp";
import { mkdir, stat } from "node:fs/promises";
import path from "node:path";

const SRC = "C:/Users/yahia/OneDrive/Desktop/ATLAW/Website Materials/ATLAW Updated Photos";
const OUT = path.resolve("public/assets");

async function convert(src, dest, maxWidth, quality = 75) {
  await mkdir(path.dirname(dest), { recursive: true });
  const img = sharp(src);
  const meta = await img.metadata();
  const pipeline = meta.width > maxWidth ? img.resize(maxWidth) : img;
  await pipeline.avif({ quality, effort: 4 }).toFile(dest);
  const before = (await stat(src)).size;
  const after = (await stat(dest)).size;
  const pct = Math.round((1 - after / before) * 100);
  console.log(
    `${path.relative(OUT, dest).padEnd(55)} ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB  (-${pct}%)`
  );
}

// --- Dewnya Creative Shots → public/assets/dewnya/ ---
const dewnyaCreative = [
  { file: "IMG_5303.jpg", name: "dewnya-standing-black" },
  { file: "IMG_5341.jpg", name: "dewnya-seated-desk" },
  { file: "IMG_5377.jpg", name: "dewnya-chair-portrait" },
  { file: "IMG_5585.jpg", name: "dewnya-navy-pinstripe" },
  { file: "IMG_5633.jpg", name: "dewnya-merch-branded" },
];
for (const { file, name } of dewnyaCreative) {
  await convert(
    `${SRC}/DB Creative Shots/${file}`,
    `${OUT}/dewnya/${name}.avif`,
    1920
  );
}

// --- Office Photos → public/assets/office/ ---
const officePhotos = [
  { file: "DSC06554.JPG", name: "office-entrance-sign" },
  { file: "DSC06558.JPG", name: "office-case-posters" },
  { file: "DSC06562.JPG", name: "office-tagline-poster" },
  { file: "DSC06572.JPG", name: "office-reception-entry" },
  { file: "DSC06574.JPG", name: "office-reception-desk" },
  { file: "DSC06576.JPG", name: "office-lounge-area" },
];
for (const { file, name } of officePhotos) {
  await convert(
    `${SRC}/ATLAW Office/${file}`,
    `${OUT}/office/${name}.avif`,
    1920
  );
}

// --- Corporate Portrait: Dewnya Bazzi (hero cutout replacement) ---
await convert(
  `${SRC}/_Corporate Portraits/Dewnya Bazzi.jpg`,
  `${OUT}/hero/dewnya-corporate-cutout.avif`,
  1920,
  80
);
// Also create portrait-sized version for non-hero use
await convert(
  `${SRC}/_Corporate Portraits/Dewnya Bazzi.jpg`,
  `${OUT}/dewnya/dewnya-corporate-portrait.avif`,
  800,
  75
);

// --- Corporate Portraits: Nehme Bazzi (not in team/ yet) ---
await convert(
  `${SRC}/_Corporate Portraits/Nehme Bazzi.jpg`,
  `${OUT}/team/nehme-bazzi.avif`,
  800,
  75
);

// --- Team Composite ---
await convert(
  `${SRC}/Team Composite2026.jpg`,
  `${OUT}/team/team-composite-2026.avif`,
  1920,
  75
);

// --- Group Shot (re-convert at higher quality for hero bg use) ---
await convert(
  `${SRC}/Group Shot.jpg`,
  `${OUT}/team/group-shot-hero.avif`,
  1920,
  75
);

console.log("\nDone. All photos converted.");
