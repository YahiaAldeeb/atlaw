# 05 — About & Team Pages

Rebuild About and Team pages following Mike Morris patterns — founder as brand, personal storytelling, team grid with hierarchy.

Reference: `context/mike-morris-reference.md` → "Team Grid" and "Attorney Profile" sections.

## About Page (`/about`)

### Purpose
Tell Dewnya's story. Build authority. Personal narrative, not corporate bio.

### Sections (8 sections)

#### 1. Hero
- Dark overlay on office/Dewnya photo.
- `<h1>`: "About ATLAW" or "Our Story" — large white serif.
- Subtitle about firm mission.

#### 2. Founder Feature (Two-Column)
- Left (~55%): "Hi, I'm Dewnya Bazzi." — personal, first-person heading.
- "Founder & CEO" in gold below.
- Multi-paragraph personal bio — conversational, warm. Why she became a PI attorney. "Unreasonable hospitality" philosophy.
- "See More" expandable for full story.
- Navy CTA: "CONTACT US NOW" → `/contact`.
- Right (~45%): Large portrait from `DB Creative Shots/`.

**Mike Morris equivalent:** "Hi, I'm Mike Morse." Two-column hero with personal greeting + large portrait.

#### 3. Timeline
- Heading: "A Decade of Fighting for What's Right" — centered serif.
- Subtitle: "A Legacy of Results. A Commitment to You."
- Vertical timeline layout:
  - 2013: "Founded ATLAW in Dearborn"
  - [CONFIRM]: Key growth milestones
  - 2024: "Super Lawyers Rising Star"
  - 2025: "Rising Star, Second Consecutive Year"
  - 2026: "Rising Star, Third Year Running"
- Year markers in gold. Red dot/circle on vertical line.
- Intersperse photos: office, team, community.

**Mike Morris equivalent:** Vertical timeline with year markers, personal milestones, interspersed old photos. Very human.

#### 4. Firm Values
- 3 value cards in a row (icon + title + description):
  - **Unreasonable Hospitality** — "Every client gets more than they expect."
  - **Strategic Advocacy** — "We prepare cases to win, not just to settle."
  - **Cultural Awareness** — "A bilingual team that understands its community."

#### 5. Awards/Media Strip
- "Awarded. Featured. Trusted." — centered serif.
- Award badges: Super Lawyers Rising Star (2024–2026), Avvo 10.0, NAOPIA Top 10 Under 40.

#### 6. By The Numbers
- Stats strip: Founded 2013 · 29 Team Members · Dearborn, MI · 3× Rising Star.

#### 7. Inline Intake CTA
- Dark section: "See How We Can Help" + Typeform link.

#### 8. Footer

## Team Page (`/team`)

### Purpose
Show the people. Build trust through real faces.

### Sections (6 sections)

#### 1. Hero
- Dark overlay on group photo or office photo.
- `<h1>`: "Meet Your Team" — large white serif centered.
- Subtitle: "The people behind your case."

#### 2. Founder Feature Card
- Full-width white card. Two-column: large photo right (~45%), bio left (~55%).
- Name in large bold serif, "Founder & CEO" in gold.
- Multi-paragraph bio (shorter than About page version).
- Navy "VIEW FULL BIO" button → `/about`.
- Card sits ABOVE the staff grid — clear visual hierarchy.

**Mike Morris equivalent:** Full-width founder card above grid, larger photo, personal bio, red "VIEW FULL BIO" button.

#### 3. Attorneys Grid
- 4 columns desktop, 2 mobile.
- Cards: circular-cropped headshot (uniform bg), centered name + title below.
- Consistent photo treatment across all: same backdrop, same crop, same lighting.

**Featured attorneys:**

| Name           | Title                    | Photo Source                    |
| -------------- | ------------------------ | ------------------------------- |
| Dewnya Bazzi   | Founder & CEO            | `_Professional Headshots/Dewnya Bazzi.jpg` |
| Deanna Leila   | Attorney — PI & Criminal | `_Professional Headshots/Deanna Leila.jpg` |
| Hassan Harp    | Attorney                 | `_Professional Headshots/Hassan Harp.jpg`  |
| Ahmad Berry    | Attorney                 | `_Professional Headshots/Ahmad Berry.jpg`  |

#### 4. Key Staff Grid (Optional Section)
- Same card style as attorneys but grouped under "Our Team" subheading.
- Include PI-relevant support staff:
  - Janet Sprung — Supervising Paralegal
  - Lamis Baydoun — Senior Client Advocate
  - Abeer Almalahi — Paralegal
  - Mazen Alsamawi — Paralegal
  - Madison Misovich — Client Advocate

#### 5. Bottom CTA
- "Get a FREE Case Evaluation Today!" — large bold centered.
- "You Pay Nothing Unless We Win Your Case — Guaranteed."
- Two buttons: "CALL" + "EMAIL".
- Dark band below: "(313) 406-7606" large + "We're here to help."

#### 6. Footer

### Photo Sources

Use from `Website Materials/ATLAW Updated Photos/`:
- `_Professional Headshots/` — primary for team cards.
- `_Corporate Portraits/` — alternate.
- `DB Creative Shots/` — Dewnya's featured/About sections.
- `Group Shot.jpg` — hero background or About page.

Convert all to AVIF via `scripts/to-avif.mjs`.

## Check When Done

- About page tells Dewnya's PI-focused personal story.
- Timeline shows firm milestones with year markers.
- Team page has founder featured card above grid.
- All headshots are real photos, circular-cropped, uniform treatment.
- No "100+ team members," no "Dubai/Manila."
- Bio tone: warm, personal, "unreasonable hospitality" — not corporate.
- Mobile responsive.
- No build errors.
