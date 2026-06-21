# 02 — Homepage Rebuild

Rebuild the homepage as a PI-focused authority landing page. Modeled after mikemorris.com (855mikewins.com) — Dewnya as the face, personal injury as the singular focus, strong CTA flow.

Reference: `context/mike-morris-reference.md` for full pattern analysis.

## Section Order (12 sections — mirrors Mike Morris depth)

1. **Hero** — Dark bg, Dewnya cutout right, PI headline left, CTA, big stat.
2. **Trust Bar** — "Awarded. Featured. Trusted." — award/media logo strip.
3. **Case Results Comparison** — "They Offered Less. We Fought for More." [CONFIRM] placeholders.
4. **What We Handle** — "Types of Injury Cases We Handle" — 2×3 icon card grid.
5. **About Dewnya** — Founder feature card: photo + bio + personal story.
6. **No Fee Banner** — Full-width navy strip: "NO FEES. NO RISK. YOU ONLY PAY WHEN WE WIN."
7. **How It Works** — 4-step process cards with photos + dark overlay + numbered labels.
8. **Testimonials** — "Backed by [X] Five-Star Reviews" — 3-col card carousel. [CONFIRM] placeholders.
9. **FAQ Preview** — 5-6 top questions in accordion format. Links to full FAQ.
10. **Inline Intake Form** — Dark section with Dewnya photo bg, Typeform embed/link, "See How Much We Can Win."
11. **Final CTA Banner** — Navy gradient, "Get a FREE Case Evaluation Today!", Call + Email buttons, phone number band.
12. **Footer** — Standard footer.

## Section Details

### 1. Hero

Rewrite `src/components/ATLAW/Hero.tsx`:

**Layout:** Full-width, dark background (city photo or office photo with overlay). Dewnya portrait cutout right-of-center. Text left-aligned on left ~55%.

**Content:**
- Eyebrow: "Dearborn Personal Injury Attorneys"
- Headline: "You Focus on Healing. We Focus on Fighting for You." — large serif, white.
- CTA: Navy/gold pill button — "START YOUR FREE CASE REVIEW" → Typeform.
- Below hero fold stat: Large number — use one of (all [CONFIRM] until client provides):
  - "[CONFIRM: $X] RECOVERED FOR INJURY VICTIMS"
  - Or: "SUPER LAWYERS RISING STAR · 3 CONSECUTIVE YEARS"

**Mike Morris equivalent:** Dark cityscape bg, founder cutout, "$2B WON" stat, "START MY FREE CASE REVIEW" CTA.

### 2. Trust Bar

Create `src/components/ATLAW/TrustBar.tsx`:

**Layout:** Horizontal strip, white or light bg. Centered row of grayscale award/media logos.

**Content:**
- Heading: "Awarded. Featured. Trusted." — centered serif.
- Logo/badge items: Super Lawyers Rising Star, Avvo 10.0, NAOPIA Top 10 Under 40.
- Style: Grayscale logos in a horizontal marquee or static row.

**Mike Morris equivalent:** "Awarded. Featured. Trusted." with Detroit News, Top Lawyers, TODAY, etc.

### 3. Case Results Comparison

Create `src/components/ATLAW/CaseResultsSection.tsx`:

**Layout:** White/light bg. Centered heading. 3-column carousel of result cards.

**Content:**
- Heading: "They Offered Less. We Fought for More." — serif, centered. "More" underlined in gold.
- Cards: Each shows insurance offer (struck through) vs. ATLAW recovery (large gold/navy number).
- All cards use [CONFIRM] placeholder data until client approves real case results.
- Left/right carousel arrows.
- Below cards: Navy banner strip — "NO FEES. NO RISK." heading, "YOU ONLY PAY WHEN WE WIN" subhead.

**Mike Morris equivalent:** 3-card carousel with strikethrough insurance offer vs. large red recovery amount.

### 4. What We Handle

Rewrite `src/components/ATLAW/CapabilitiesSection.tsx`:

**Layout:** Light gray bg. Centered heading. 2×3 grid of icon cards.

**Content:**
- Heading: "Types of Injury Cases We Handle" — serif, centered.
- 6 cards: Auto Accidents, Medical Malpractice, Wrongful Death, Premises Liability, Dog Bite Injuries, Workers' Compensation.
- Each card: line icon (gold/navy), bold title, 3-line description, links to sub-practice page.
- Bottom: Outlined pill button — "SEE ALL PRACTICE AREAS" → `/personal-injury`.

**Mike Morris equivalent:** 2×3 grid with red line icons + title + description.

### 5. About Dewnya

Rewrite `src/components/ATLAW/AboutDewnyaSection.tsx`:

**Layout:** White bg. Two-column: bio text left (~55%), large portrait right (~45%).

**Content:**
- Heading: Dewnya's name, "Founder & CEO" in gold.
- Multi-paragraph personal bio — conversational, warm, "unreasonable hospitality" tone.
- "See More" expandable for longer text.
- Navy CTA button: "MEET DEWNYA" → `/about` or `/team`.
- Stats strip below: Founded 2013 · Dearborn, MI · Super Lawyers Rising Star · Avvo 10.0.

**Mike Morris equivalent:** Founder featured card with photo + bio + "VIEW FULL BIO" button.

### 6. No Fee Banner

Create `src/components/ATLAW/NoFeeBanner.tsx`:

**Layout:** Full-width navy bg with grain overlay.

**Content:**
- "NO FEES. NO RISK." — large white serif heading.
- "YOU ONLY PAY WHEN WE WIN" — white subheading.
- Two outlined-white pill buttons: "CALL" + "EMAIL".

**Mike Morris equivalent:** Red full-width strip with same messaging.

### 7. How It Works

Create `src/components/ATLAW/ProcessSection.tsx`:

**Layout:** Light bg. Centered heading. 4-column card row.

**Content:**
- Heading: "What to Do After an Injury" — serif, centered. "Injury" in gold.
- 4 step cards with dark overlay photos and white text:
  1. Call ATLAW — "Contact us for a free case review."
  2. We Investigate — "We gather evidence and handle the paperwork."
  3. We Fight — "We negotiate or litigate for maximum recovery."
  4. You Recover — "Focus on healing. We handle the rest."

**Mike Morris equivalent:** 4-step cards with photos + dark gradient + numbered labels.

### 8. Testimonials

Create `src/components/ATLAW/TestimonialsSection.tsx`:

**Layout:** White bg. Centered heading. 3-column card carousel.

**Content:**
- Heading: "Backed by Our Clients" — serif, centered. Star icons.
- Cards: Speech-bubble white cards with gold 5 stars at top, serif italic quote text, client first name + last initial, gold accent marks.
- [CONFIRM] placeholder quotes until client provides real testimonials.
- Left/right carousel arrows.

**Mike Morris equivalent:** "5,000+ Five-Star Reviews" with speech-bubble cards, gold stars, circular avatars.

### 9. FAQ Preview

Create `src/components/ATLAW/FAQPreviewSection.tsx`:

**Layout:** Light gray bg. Centered heading. Accordion below.

**Content:**
- Heading: "Frequently Asked Questions" — serif.
- 5-6 common PI questions in accordion (hairline borders, chevron toggle):
  - How much is my case worth?
  - Do I need a lawyer after a car accident?
  - How long do I have to file a claim in Michigan?
  - What if I can't afford a lawyer?
  - How long does a personal injury case take?
- Link at bottom: "See All FAQs →"

**Mike Morris equivalent:** Full FAQ accordion with 15+ questions per practice area.

### 10. Inline Intake Form

Rewrite into `src/components/ATLAW/IntakeFormSection.tsx`:

**Layout:** Full-width dark section. Dewnya photo as bg (semi-transparent overlay). Form left (~50%).

**Content:**
- Heading: "See How Much We Can Win for You" — large white serif.
- Subtext: "Pay nothing unless we win."
- Either embed Typeform inline or large prominent link button to Typeform.
- If using link: "GET A FREE CASE REVIEW" — gold pill button.

**Mike Morris equivalent:** Dark photo bg, inline form fields, "GET A FREE CASE REVIEW" red CTA.

### 11. Final CTA Banner

Update `src/components/ATLAW/FinalCtaSection.tsx`:

**Layout:** Navy gradient bg.

**Content:**
- Heading: "Get a FREE Case Evaluation Today!" — large white serif.
- Subtext: "You Pay Nothing Unless We Win Your Case — Guaranteed."
- Two buttons: Gold pill "CALL (313) 406-7606" + Outlined white "EMAIL".
- Below: Dark band with phone number large: "(313) 406-7606" + "We're here to help."

**Mike Morris equivalent:** Red gradient, same messaging, Call + Email buttons, phone band.

### 12. Footer

Keep existing footer structure, updated per spec 01 (PI-only links).

## Remove / Archive

- `OneFirmSection` — multi-practice messaging.
- `FirmStatementSection` — multi-practice positioning.
- `ServiceAreas` + `ServiceLocations` — global reach.
- `RecognitionSection` — folded into TrustBar.

## Check When Done

- Homepage mirrors Mike Morris depth (12+ sections) with ATLAW branding.
- CTA appears every 2-3 sections. Phone number repeated 3+ times.
- Only PI sub-practices mentioned. No other practice areas.
- No "100+ team members," no "Dubai," no "Manila."
- All [CONFIRM] placeholders clearly marked for client approval.
- Sections flow with alternating light/dark rhythm.
- Mobile responsive.
- No build errors.
