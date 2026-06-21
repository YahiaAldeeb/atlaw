# Mike Morris Website — Design Reference

Full analysis of 855mikewins.com / mikemorris.com, extracted from 166 screenshots across 20 page types. This is the model site for ATLAW's PI rebuild.

**Screenshots location:** `C:\Users\yahia\OneDrive\Desktop\ATLAW\screenshots`

Organized into 20 folders: homepage, practice-areas-landing, practice-area-detail, results, team-grid, attorney-profile, FAQ, locations, city-pages, contact, settlement-calculator, free-consultation, blog-listing, blog-post, community-initiative, mike-stands, no-fault-guide, areas-served, careers, and more.

## Design Language

### Color System

| Role | Mike Morris | ATLAW Adaptation |
|------|-------------|------------------|
| Action/CTA | Red `#C41E2A` | Navy `#0E1B2C` or Gold `#C6A04A` |
| Dark sections | Charcoal `#2a2a2a` | Navy `#0e1b33` → `#0a1428` |
| Light sections | White / Light gray `#f5f5f5` | White `#FFFFFF` / Ivory |
| Text (light bg) | Black | Ink `#0B1F3A` |
| Text (dark bg) | White | White |
| Accent highlights | Red on key words | Gold `#B88A2D` brand period / accents |
| Dollar amounts | Red bold | Gold or Navy bold |

### Typography

| Role | Mike Morris | ATLAW Adaptation |
|------|-------------|------------------|
| Headlines | Bold serif (Playfair Display-like) | Lustria `font-serifDisplay` |
| Body | Sans-serif (Lato-like) | Mulish `font-sans` |
| Nav/labels | All-caps tracked sans-serif | All-caps tracked Mulish |
| Quote text | Serif italic | Lustria italic |
| Stat numbers | Massive bold serif | Lustria large with Counter animation |

### CTA Buttons

| Mike Morris | ATLAW Adaptation |
|-------------|------------------|
| Red pill, white uppercase text | Navy pill `bg-[#0E1B2C]` or Gold pill, white text |
| Outlined white on dark | Outlined white/gold on navy |
| Outlined red on white | Outlined navy on white |
| Always rounded-full | Keep `rounded-full` |
| ~14px letter-spaced uppercase | `text-[15px] font-medium uppercase tracking-[0.02em]` |

## Page Architecture

### Homepage (12 sections)

| # | Section | Mike Morris | ATLAW Version |
|---|---------|------------|---------------|
| 1 | **Announcement bar** | Red bar, "We're growing!" | Optional — skip for now |
| 2 | **Hero** | Dark cityscape bg, founder cutout right, headline left, CTA, "$2B won" stat | Keep existing split layout. Dewnya cutout right. PI-focused headline left. Stat below. |
| 3 | **Case Results Comparison** | "They Offered Less. We Fought for More." 3-card carousel with insurance offer vs. won amount | Adapt when case results confirmed. [CONFIRM] placeholders. |
| 4 | **Practice Areas** | "Types of Injury Cases We Handle" — 2×3 icon card grid | PI sub-practices: 6 cards with icons. Link to sub-pages. |
| 5 | **Team Carousel** | "Michigan's Top Injury Lawyers" — 4-across headshot carousel | Simplified — Dewnya featured + 2-3 team members. |
| 6 | **Case Results Strip** | "Hiring Us Means More Money" — dark bg, 4-col result cards | Adapt when results confirmed. |
| 7 | **Awards/Media Strip** | "Awarded. Featured. Trusted." — grayscale logo marquee | Super Lawyers, Avvo, NAOPIA logos. |
| 8 | **Reviews** | "5,000+ Five-Star Reviews" — 3-col testimonial cards | Adapt when testimonials confirmed. [CONFIRM] placeholders. |
| 9 | **Inline Intake Form** | Dark photo bg, left form, right portrait | Dark navy section, Typeform embed or link, Dewnya photo. |
| 10 | **Media Wins** | "Wins That Made Headlines" — video carousel + scrolling results ticker | Skip — ATLAW doesn't have media coverage yet. |
| 11 | **Community** | "Winning for Clients & Our Community" — 3 initiative cards | Skip for now. |
| 12 | **Final CTA** | Red gradient, "FREE Case Evaluation", Call/Email buttons | Navy gradient, "Tell us what happened", Phone + Typeform. |

### Practice Area Landing Page

**Mike Morris pattern:**
- Two-column: sticky left sidebar (all practice areas list) + right content area with stacked photo cards.
- Each card: background photo + dark overlay + white heading + "Learn More →" link.

**ATLAW adaptation:**
- Simpler — we have 7 PI sub-practices, not 20+. No need for sidebar nav.
- Grid of 6-7 cards with photos. Each links to sub-practice page.
- Hero at top with "Personal Injury" heading + intro text.

### Practice Area Detail Page (Most Important Pattern)

**Mike Morris structure (14+ sections per page):**

1. **Sticky sub-nav bar** — Dark bar with anchor tabs: OVERVIEW | STEPS TO TAKE | CLIENT TESTIMONIALS | FAQ | RELATED CASES. Active tab has red underline.
2. **Hero** — Light bg, left-aligned headline "[Type] Lawyer in Michigan", social proof subline ("5,000+ Five-Star Reviews"), red CTA button. Text-forward, no full-bleed image.
3. **Overview** — Two-column: long-form content left (65%), sticky sidebar right (35%) with "3 Ways to Start Your Case" card (Call, Email, Estimate buttons).
4. **Case Results Comparison** — Dark bg, "They Offered Less" heading, 3-card carousel with insurance vs. won amounts.
5. **Steps/Process** — "What to Do After [Type]" — 4 step cards with photos + dark overlay + numbered labels.
6. **No Fees Banner** — Full-width red strip: "NO FEES. NO RISK. YOU ONLY PAY WHEN WE WIN."
7. **Long-form Content** — Michigan-specific legal info, bold subheadings, actionable advice, CTA at bottom.
8. **Testimonials** — "5,000+ Five-Star Reviews" heading, 3-col card carousel with stars, quotes, names.
9. **FAQ Accordion** — "FAQs" heading, 15+ questions in clean accordion (hairline borders, chevron toggle).
10. **Related Cases Strip** — Horizontal scrolling dollar amounts + case type + county.
11. **Related Pages Carousel** — 3 cards with photo bg + overlay + title + "Learn More →".
12. **Inline Intake Form** — Dark section, portrait bg, left form fields, "GET A FREE CASE REVIEW" CTA.
13. **Additional Resources** — Two-column bulleted link list to related content.
14. **Office Locations Grid** — 4-col dark cards with city skyline backgrounds.

**ATLAW adaptation:**
- Keep the overall depth — these are the main SEO pages.
- Sticky sub-nav: adapt with ATLAW colors (navy bar, gold active underline).
- Two-column layout with sticky sidebar CTA card.
- FAQ accordion with ATLAW styling.
- Simplify what we don't have yet (case results, testimonials) with [CONFIRM] placeholders.

### City/Location Pages

**Mike Morris pattern:**
- Areas Served index page: sticky left sidebar nav (30+ cities) + stacked city cards with skyline photos.
- Individual city page: ~14 sections — hero, stats bar, "Why Choose Us in [City]", practice area cards, case results, testimonials, FAQ, intake form, office grid.
- Neighborhood sublocation pages: similar but lighter (~10 sections).

**ATLAW adaptation:**
- 7 target cities × 7 practice areas = 49 pages.
- Template-driven: city context paragraph + practice area content.
- Lighter than Mike Morris — don't need 14 sections per city page.
- Key sections: Hero, overview, Michigan law context, FAQ, CTA, related areas.

### FAQ/Subtopic Pages

**Mike Morris pattern:**
- Tab navigation within page (same sticky sub-nav pattern).
- Long-form SEO content with internal links.
- Sticky sidebar intake form.
- FAQ accordion at bottom.
- Related pages carousel.

**ATLAW adaptation:**
- Use for deeper keyword targeting ("What to do after a car accident in Michigan").
- Same template as practice area detail but with topic-specific content.
- Phase 2 — build after core pages launch.

### Team Grid

**Mike Morris pattern:**
- Hero: dark overlay on office photo, "Meet Your Team" heading.
- Founder featured card: full-width, two-column (photo right, bio left), larger than grid cards, red "VIEW FULL BIO" button.
- Staff grid: 4-column, circular-cropped headshots, uniform gray studio backdrop, name + title below.
- Bottom CTA: "FREE Case Evaluation" + phone band.

**ATLAW adaptation:**
- Hero with team/office photo.
- Dewnya featured card at top (same two-column pattern).
- Grid below: 4 attorneys + key staff. Use professional headshots.
- Circular crop or keep rectangular — discuss with client.

### Attorney Profile

**Mike Morris pattern:**
- Two-column hero: "Hi, I'm Mike Morse." personal greeting, bio, red CTA. Large portrait right.
- Vertical timeline: year markers in red, personal milestones with photos. Very human storytelling.
- Must-see videos carousel.
- Awards/media logo strip.
- Testimonials carousel.
- Inline intake form.

**ATLAW adaptation:**
- Dewnya's page: personal story, "unreasonable hospitality" narrative.
- Timeline: founding story, growth milestones, awards.
- Skip videos unless client provides.
- Awards: Super Lawyers, Avvo, NAOPIA.

### Results & Reviews

**Mike Morris pattern:**
- Hero with heading + stars + sticky right sidebar form.
- Featured case banner (dark, client photo, verdict amount).
- Big number stat banner (red bg, "$2B+ WON").
- Case results list: large red dollar amounts, case type, county. Stacked vertically, largest first.
- Video testimonials carousel.
- Written reviews carousel (speech-bubble cards, gold stars, quote, name, date).

**ATLAW adaptation:**
- All [CONFIRM] until client provides case results and testimonials.
- Design the template — populate when approved.

### Contact Page

**Mike Morris pattern:**
- Dark hero with bg photo, inline form (First, Last, Phone, Email, "What happened?"), CTA button.
- Stats bar below.
- "1 Call, 5 Rings, 24/7" promise section.
- Office locations grid.

**ATLAW adaptation:**
- Typeform embed or link instead of inline form.
- Stats: Founded 2013, Dearborn MI, Super Lawyers Rising Star.
- Single office: Dearborn. Google Map embed.
- Phone number prominent.

### Settlement Calculator (Aspirational)

**Mike Morris pattern:**
- Multi-step wizard form. One question-group per step.
- Left sidebar progress indicator.
- Clean white background.
- Positions as helpful, not committal.

**ATLAW adaptation:**
- Phase 2/3 — not for initial launch. Good future feature.

## Recurring Patterns to Adopt

### 1. Persistent Intake CTA
Every content page has at least one of:
- Sticky sidebar form (right column)
- Inline dark-section form
- CTA banner between sections

**ATLAW:** Use Typeform link/button as persistent CTA. Sticky sidebar on practice area pages.

### 2. Social Proof Layering
Multiple formats, repeated across pages:
- Big stat numbers ($2B won, 5K+ reviews)
- Case result comparisons (insurance offer vs. won)
- Video testimonials
- Written review cards (speech-bubble, stars)
- Media/award logo strip

**ATLAW:** Super Lawyers badges, Avvo rating, NAOPIA. Case results when confirmed. Reviews when confirmed.

### 3. Section Rhythm (Alternating Contrast)
White → Dark → White → Red/CTA → White → Dark → Footer.
Creates visual breaks, prevents monotony on long pages.

**ATLAW:** Already doing this with ivory/navy alternation. Keep it.

### 4. Internal Linking Density
- Sidebar nav to all practice areas
- "Related Pages" carousels
- "Additional Resources" link lists
- In-text hyperlinks to practice area pages
- City grid linking to location pages

**ATLAW:** Build this into every page — related practice areas, city links, cross-references.

### 5. Office Locations Grid (Footer Pattern)
Dark section above footer with office cards. Each card: city skyline bg photo, overlay, white text (city name, address, phone).

**ATLAW:** Single office — adapt to "Our Office" section with photo + map + address. Less grid, more hero.

### 6. Founder as Brand
Mike Morris appears on nearly every page. Portrait in hero, intake form bg, team page featured card, attorney profile, blog bio blurb.

**ATLAW:** Dewnya Bazzi is the brand. Feature her similarly — hero, about section, intake sections, team page.

### 7. "No Fee" Messaging
Repeated in multiple formats:
- "NO FEES. NO RISK. YOU ONLY PAY WHEN WE WIN." (red banner)
- "Pay nothing until we win." (form subtext)
- "You Pay Nothing Unless We Win Your Case — Guaranteed." (CTA section)

**ATLAW:** "No fee unless we recover for you." — repeat in hero, CTA sections, footer area, form areas.
