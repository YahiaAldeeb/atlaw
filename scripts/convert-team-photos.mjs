import sharp from "sharp";
import path from "node:path";
import { existsSync } from "node:fs";

const SRC = path.resolve("../Website Materials/ATLAW Updated Photos");
const OUT = path.resolve("public/assets/team");

const photos = [
  { src: "_Professional Headshots/Dewnya Bazzi.jpg", out: "dewnya-bazzi.avif" },
  { src: "_Professional Headshots/Deanna Leila.jpg", out: "deanna-leila.avif" },
  { src: "_Professional Headshots/Hassan Harp.jpg", out: "hassan-harp.avif" },
  { src: "_Professional Headshots/Ahmad Berry.jpg", out: "ahmad-berry.avif" },
  { src: "_Professional Headshots/Lamis Baydoun.jpg", out: "lamis-baydoun.avif" },
  { src: "_Professional Headshots/Abeer Almalahi.jpg", out: "abeer-almalahi.avif" },
  { src: "_Professional Headshots/Mazen Alsamawi.jpg", out: "mazen-alsamawi.avif" },
  { src: "_Professional Headshots/Madison Misovich.jpg", out: "madison-misovich.avif" },
  { src: "_Professional Headshots/Deema Ghamloush.jpg", out: "deema-ghamloush.avif" },
  { src: "_Professional Headshots/Mahmoud Mansour.jpg", out: "mahmoud-mansour.avif" },
  { src: "DB Creative Shots/IMG_5402.jpg", out: "dewnya-creative-1.avif" },
  { src: "DB Creative Shots/IMG_5454.jpg", out: "dewnya-creative-2.avif" },
  { src: "Group Shot.jpg", out: "group-shot.avif" },
];

for (const { src, out } of photos) {
  const inPath = path.join(SRC, src);
  const outPath = path.join(OUT, out);
  if (!existsSync(inPath)) {
    console.log(`SKIP (not found): ${src}`);
    continue;
  }
  await sharp(inPath)
    .resize({ width: 800, withoutEnlargement: true })
    .avif({ quality: 55, effort: 4 })
    .toFile(outPath);
  console.log(`OK: ${out}`);
}

console.log("\nDone.");
