# 03 — PI Practice Area Pages

Create dedicated pages for each PI sub-practice. Each page is an SEO-targeted landing page following the Mike Morris practice area detail pattern — deep content, sticky sidebar CTA, FAQ accordion, internal linking.

Reference: `context/mike-morris-reference.md` → "Practice Area Detail Page" section.

## Pages to Build

| Route                                  | Title                           | Lead Attorney |
| -------------------------------------- | ------------------------------- | ------------- |
| `/personal-injury`                     | Personal Injury                 | Dewnya Bazzi  |
| `/personal-injury/auto-accidents`      | Auto Accident & No-Fault Claims | Dewnya Bazzi  |
| `/personal-injury/medical-malpractice` | Medical Malpractice             | Dewnya Bazzi  |
| `/personal-injury/wrongful-death`      | Wrongful Death                  | Dewnya Bazzi  |
| `/personal-injury/premises-liability`  | Premises Liability / Slip & Fall| Dewnya Bazzi  |
| `/personal-injury/dog-bites`           | Dog Bite Injuries               | Dewnya Bazzi  |
| `/personal-injury/workers-compensation`| Workers' Compensation           | Dewnya Bazzi  |

## Page Template (14 sections — mirrors Mike Morris depth)

### 1. Sticky Sub-Nav Bar
- Dark navy bar below header. Stays fixed on scroll.
- Anchor tabs: OVERVIEW | WHAT TO DO | TESTIMONIALS | FAQ | RELATED
- Active tab: gold underline. White uppercase text, tracked.

### 2. Hero
- Light bg. Left-aligned.
- `<h1>`: "Michigan [Practice Area] Lawyer" — large bold serif.
- Social proof subline: "Super Lawyers Rising Star · 3 Consecutive Years" in gold.
- Navy CTA pill: "START YOUR FREE CASE REVIEW" → Typeform.
- No full-bleed image. Clean, text-forward.

### 3. Overview (Two-Column)
- Left column (~65%): "Why Choose ATLAW?" heading. Long-form body copy — experience, approach, Michigan-specific knowledge, results. Multiple paragraphs. Ends with "No fee unless we recover for you."
- Right sticky sidebar (~35%): "3 Ways to Start Your Case" card with navy bg:
  1. "CALL (313) 406-7606" — gold button.
  2. "EMAIL US" — gold button.
  3. "FREE CASE REVIEW" — gold button → Typeform.
  - Sidebar stays fixed as user scrolls content.

### 4. Case Results Comparison
- Dark navy bg. "They Offered Less. We Fought for More." heading.
- 3-card carousel: insurance offer (struck through) vs. ATLAW recovery (large gold number).
- [CONFIRM] placeholder data.
- Left/right arrows.

### 5. What to Do (Steps)
- White bg. Heading: "What to Do After [Injury Type]" — serif, "[Injury Type]" in gold.
- 4 step cards in a row: dark overlay photo + white step number + label:
  1. Contact ATLAW
  2. Get Medical Attention
  3. Document Everything
  4. Let Us Handle the Rest
- Below: Navy banner — "NO FEES. NO RISK. YOU ONLY PAY WHEN WE WIN."

### 6. Long-Form Content
- Heading: "[Michigan-specific legal topic]" — bold serif.
- Left: editorial photo related to injury type.
- Right/below: long body copy with bold subheadings. Michigan law specifics. Actionable advice.
- Navy CTA button at bottom: "CONTACT US TODAY"

### 7. Testimonials
- "Backed by Our Clients" heading with gold stars.
- 3-column card carousel: speech-bubble cards, gold 5 stars, serif italic quotes, client name + date.
- [CONFIRM] placeholder quotes.

### 8. FAQ Accordion
- Heading: "Frequently Asked Questions" — serif.
- 10-15 questions per practice area in clean accordion (hairline borders, chevron toggle).
- Questions target actual Google search queries for this injury type.

### 9. Related Cases Strip
- Horizontal scrolling strip of case results: large gold dollar amounts + case type + county.
- [CONFIRM] placeholder data.

### 10. Related Pages Carousel
- "Related Practice Areas" heading.
- 3 cards: photo bg + dark overlay + white title + "Learn More →" gold link.
- Links to sibling PI sub-practices.

### 11. Inline Intake Form
- Dark navy section. Dewnya photo bg (semi-transparent).
- "See How Much We Can Win for You" — large white serif heading.
- Typeform link button: "GET A FREE CASE REVIEW" — gold pill.
- "Pay nothing until we win." subtext.

### 12. Additional Resources
- White bg. "Additional Resources" heading with gold underline.
- Two-column bulleted link list — gold bullets, navy text links.
- Links to related content, city pages, blog posts.

### 13. City Links
- "We Serve Clients Across Michigan" heading.
- Grid of city links for this practice area:
  - Dearborn · Detroit · Dearborn Heights · Ann Arbor · Wayne County · Oakland County · Macomb County
- Each links to `/personal-injury/[practice]/[city]`.

### 14. Footer
- Standard footer.

## Content Per Practice Area

### Auto Accidents (Highest Priority)
- Michigan No-Fault / PIP benefits are key differentiator.
- Cover: what to do after accident, PIP explained, first-party vs. third-party, Michigan mini-tort.
- FAQ: "How does Michigan No-Fault work?", "What are PIP benefits?", "How long to file?", "Do I need a lawyer for a minor accident?"
- Keywords: "car accident lawyer Dearborn," "Michigan no-fault attorney," "PIP benefits lawyer."

### Medical Malpractice
- Higher content accuracy threshold — do not fabricate legal standards.
- Cover: what constitutes malpractice, statute of limitations, expert review process, Notice of Intent requirement.
- FAQ: "How do I know if I have a malpractice case?", "What's the statute of limitations?", "What damages can I recover?"

### Wrongful Death
- Sensitive tone. Empathetic first, legal second.
- Cover: who can file (personal representative), what damages, Michigan wrongful death statute.
- FAQ: "Who can file a wrongful death lawsuit?", "What compensation is available?", "How long do I have to file?"

### Premises Liability
- Cover: property owner duty of care, slip and fall, unsafe conditions, proving negligence, invitee vs. trespasser.
- FAQ: "What is premises liability?", "How do I prove a slip and fall case?", "What if I was partially at fault?"

### Dog Bites
- Michigan strict liability — owner liable regardless of prior knowledge (MCL 287.351).
- Cover: what to do after a bite, medical documentation, homeowner's insurance, liability.
- FAQ: "Is the dog owner always liable in Michigan?", "What if the dog never bit anyone before?", "What compensation can I get?"

### Workers' Compensation
- Cover: workplace injury process, reporting requirements, employer retaliation protections, third-party claims.
- FAQ: "Can I sue my employer?", "What benefits am I entitled to?", "What if my claim is denied?"

## Data Structure

Create data files in `src/data/practice/` for each sub-practice:

```typescript
interface PracticeAreaPI {
  slug: string;
  title: string;
  heroTitle: string;       // e.g., "Michigan Auto Accident Lawyer"
  tagline: string;
  heroImage: string;
  overview: string[];       // paragraphs
  whyChooseUs: string[];    // paragraphs for "Why Choose ATLAW?" section
  steps: { number: number; title: string; description: string; image: string }[];
  michiganLaw: { heading: string; paragraphs: string[] }[];
  faqs: { question: string; answer: string }[];
  relatedAreas: string[];   // slugs of related PI sub-practices
  keywords: string[];
  cities: string[];          // city slugs for city page links
}
```

## Check When Done

- All 7 PI pages render with 14-section depth.
- Sticky sub-nav works (anchor scrolling to sections).
- Sticky sidebar CTA card stays fixed on scroll.
- FAQ accordions expand/collapse.
- Each page has unique `<h1>` and page title.
- CTA appears every 2-3 sections (3+ per page minimum).
- Related practice areas link to sibling pages.
- City links at bottom connect to city SEO pages.
- [CONFIRM] placeholders clearly marked.
- No references to non-PI practice areas.
- Mobile responsive (sidebar collapses to inline on mobile).
- No build errors.
