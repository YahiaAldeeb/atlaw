# 06 — Contact & Intake Page

Contact page with Typeform integration, office info, and conversion-optimized layout. Modeled after Mike Morris contact page pattern.

Reference: `context/mike-morris-reference.md` → "Contact Page" section.

## Route

`/contact`

## Sections (8 sections)

### 1. Hero with Inline CTA
- Dark bg (office photo or Dewnya photo with overlay).
- Two-column: left text + right CTA.
- Left: "We're Here for You. Let's Get Started." — large white serif heading. Subtext: "Free case review. No fees unless we win."
- Right: Typeform embed (if possible) or prominent link card with "START YOUR FREE CASE REVIEW" gold button → `https://j098jiq3pk7.typeform.com/to/Mslg7Y7f`.

**Mike Morris equivalent:** Dark hero with bg photo, inline form fields, "GET A FREE CASE REVIEW" red CTA.

### 2. Stats Bar
- White bg. Horizontal strip: Founded 2013 · Dearborn, MI · Super Lawyers Rising Star · Avvo 10.0.

### 3. Direct Contact ("3 Ways to Reach Us")
- White bg. Centered heading.
- 3 icon cards in a row:
  1. **Call** — gold phone icon, "(313) 406-7606", "Available [CONFIRM: hours]".
  2. **Email** — gold email icon, "db@atlawgroup.com", "We respond within 24 hours."
  3. **Visit** — gold location icon, "3 Park Lane Blvd., Suite 400W, Dearborn, MI 48126", "Walk-ins welcome [CONFIRM]."

**Mike Morris equivalent:** "1 Call, 5 Rings, 24/7" promise section with icon cards.

### 4. What to Expect (3-Step Process)
- Light gray bg. "What Happens Next" heading.
- 3 numbered steps:
  1. "Free Consultation" — "Tell us what happened. We listen."
  2. "Case Evaluation" — "Our team reviews your situation and advises on options."
  3. "We Get to Work" — "If we take your case, you pay nothing unless we win."

### 5. Office Location
- White bg. Two-column: map left (~50%), info right (~50%).
- Left: Google Maps embed — 3 Park Lane Blvd., Suite 400W, Dearborn, MI 48126.
- Right: Office photo, address, phone, email, hours [CONFIRM].
- Below: "Serving clients across Michigan — Dearborn, Detroit, Dearborn Heights, Ann Arbor, and beyond."

### 6. Reassurance Section
- Navy bg. Centered white serif text.
- "You Don't Pay Unless We Win."
- "Your consultation is free. Your information is confidential."
- Gold pill button: "START YOUR FREE CASE REVIEW" → Typeform.

### 7. FAQ
- Light bg. 5-6 intake-related questions:
  - "How much does a consultation cost?" → "Free."
  - "Do I need to come to the office?" → "No. We offer phone and video consultations."
  - "What should I bring to my consultation?" → List.
  - "How long does it take to hear back?" → "Within 24 hours."
  - "What if I'm not sure I have a case?" → "Let us evaluate it for you — no obligation."

### 8. Footer

## Typeform Integration

- URL: `https://j098jiq3pk7.typeform.com/to/Mslg7Y7f`
- Options for embedding:
  1. **Inline embed** — Typeform SDK `@typeform/embed-react` (best UX, most complex).
  2. **Popup on button click** — Typeform popup mode (good middle ground).
  3. **Direct link** — Simple `<a>` to Typeform URL (simplest, leaves site).

Recommendation: Popup mode for hero CTA, direct link as fallback. Keep users on site.

## Lead Routing

Per ops brief:
- Phone: (313) 406-7606 → office main line.
- Email: db@atlawgroup.com → Dewnya directly.
- Typeform submissions → [CONFIRM: where do these route?]

## Check When Done

- Contact page has prominent Typeform CTA in hero.
- Phone number and email visible without scrolling.
- Google Maps embed loads correctly.
- Stats bar matches homepage trust bar.
- FAQ accordion works.
- "No fee unless we win" messaging present.
- Attorney advertising disclaimer in footer.
- Mobile responsive.
- No build errors.
