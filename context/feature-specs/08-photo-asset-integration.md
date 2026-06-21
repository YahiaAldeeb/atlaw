# 08 — Photo & Asset Integration

Replace placeholder and stock images with real ATLAW photography.

## Source Directory

`Website Materials/ATLAW Updated Photos/`

## Asset Inventory

### Dewnya Bazzi — Creative Shots (18 photos)
- Source: `DB Creative Shots/IMG_5303.jpg` through `IMG_5633.jpg`
- Usage: Hero section, About page, featured sections.
- Select 3-5 best shots. Convert to AVIF. Place in `public/assets/dewnya/`.

### Professional Headshots (11 people)
- Source: `_Professional Headshots/`
- Available: Abeer Almalahi, Ahmad Berry, Deanna Leila, Deema Ghamloush, Dewnya Bazzi, Hassan Harp (×2), Lamis Baydoun, Madison Misovich, Mahmoud Mansour, Mazen Alsamawi.
- Usage: Team page cards.
- Convert to AVIF. Place in `public/assets/team/`.

### Corporate Portraits (6 people)
- Source: `_Corporate Portraits/`
- Available: Ahmad Berry, Deanna Leila, Dewnya Bazzi, Hassan Harp, Mahmoud Mansour, Nehme Bazzi.
- Usage: Alternate team photos, About page.
- Convert to AVIF. Place in `public/assets/team/`.

### Office Photos (24 photos)
- Source: `ATLAW Office/DSC06554.JPG` through `DSC06577.JPG`
- Usage: About page, Contact page, background imagery.
- Select 5-8 best shots. Convert to AVIF. Place in `public/assets/office/`.

### Group & Team Photos
- `Group Shot.jpg` — Full team photo. Use on About or Team page.
- `Team Composite2026.jpg` — Team composite. Use as backup.
- Convert to AVIF. Place in `public/assets/team/`.

### Logos
- Source: `ATLAW Logos/`
- Black: `ATLAW LOGO_BLK.png`
- White: `ATLAW LOGO_WHT.png`
- Brand guide: `ATLAW_MASTER BRAND GUIDE 2025.pdf`
- Current SVGs in `public/assets/` (`atlaw logo.svg`, `atlaw-wordmark.svg`) — keep unless client provides updated versions.

## Conversion Process

Use existing `scripts/to-avif.mjs` (sharp-based) to convert:

1. Select best photos from each category.
2. Resize to web-appropriate dimensions (max 1920px wide for heroes, 800px for portraits).
3. Convert to AVIF with quality 70-80.
4. Keep originals in `Website Materials/` — don't modify source files.

## Replacements

| Current Asset                     | Replace With                        |
| --------------------------------- | ----------------------------------- |
| `hero/atlaw-founder-cutout.avif`  | Best Dewnya creative shot (cutout)  |
| `atlaw-portrait.avif`             | Dewnya corporate portrait           |
| `about-hero.avif`                 | Office or Dewnya photo              |
| `our-people-hero.avif`            | Group shot or team composite        |
| Placeholder team photos           | Real headshots from `_Professional Headshots/` |

## Check When Done

- All hero/featured images use real ATLAW photography.
- Team page shows real headshots.
- Images are AVIF format with appropriate file sizes.
- No broken image links.
- LCP hero image is preloaded in `index.html`.
