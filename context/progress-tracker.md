# Progress Tracker

## Current Phase: Phase 1 — PI Pivot

### Completed

- [x] Read all project materials (meeting notes, briefs, staff directory, photos, logos)
- [x] Read existing codebase (`atlaw_start/`)
- [x] Analyze Mike Morris website (166 screenshots, 20 page types, 5 parallel analyses)
- [x] Create context files (project-overview, architecture, code-standards, ui-context, ai-workflow-rules)
- [x] Create Mike Morris design reference (`context/mike-morris-reference.md`)
- [x] Write feature spec 01 — PI Pivot Navigation
- [x] Write feature spec 02 — Homepage Rebuild (updated with Mike Morris patterns)
- [x] Write feature spec 03 — PI Practice Area Pages (updated with 14-section template)
- [x] Write feature spec 04 — SEO City Landing Pages (updated with Areas Served index)
- [x] Write feature spec 05 — About & Team Pages (updated with founder-as-brand pattern)
- [x] Write feature spec 06 — Contact & Intake (updated with Mike Morris contact pattern)
- [x] Write feature spec 07 — SEO Meta & Schema
- [x] Write feature spec 08 — Photo Asset Integration
- [x] Write feature spec 09 — Legal Compliance

- [x] Implement Spec 01 — PI Pivot Navigation (June 22, 2026)
  - Navigation data: stripped to PI, ABOUT, OUR TEAM, CONTACT
  - Header: removed mega-menu/dropdowns, direct links only, mobile drawer simplified
  - Footer: PI sub-areas only, updated firm description, removed Global Reach/News links
  - Routes: `/personal-injury/*` structure, `/team` replaces `/our-people`, legacy redirects
  - Deleted: CapabilitiesMegaMenu, NewsInsightsDropdown, MobileDrawer, useCategoryGroups, Icons (header/)
  - Created: PremisesLiabilityPage, DogBitesPage stub pages
  - Removed routes: all non-PI practice areas, global-reach, news-insights, capabilities landing

- [x] Implement Spec 02 — Homepage Rebuild (June 22, 2026)
  - 12-section homepage mirroring Mike Morris depth with ATLAW branding
  - Hero: dark bg, Dewnya cutout right, PI headline, gold CTA → Typeform, stat bar
  - TrustBar: "Awarded. Featured. Trusted." with Super Lawyers, Avvo, NAOPIA badges
  - CaseResultsSection: 3-card carousel, insurance offer vs. ATLAW recovery, [CONFIRM] placeholders
  - CapabilitiesSection: 2×3 PI icon card grid, light gray bg, links to sub-practice pages
  - AboutDewnyaSection: two-column bio + portrait, PI-focused, "See More" toggle, stats strip
  - NoFeeBanner: navy full-width "NO FEES. NO RISK." with Call/Email buttons
  - ProcessSection: 4-step cards (Call, Investigate, Fight, Recover)
  - TestimonialsSection: 3-card carousel with gold stars, [CONFIRM] placeholder quotes
  - FAQPreviewSection: 5-question accordion, light gray bg
  - IntakeFormSection: dark section with portrait bg, "See How Much We Can Win" + Typeform CTA
  - FinalCtaSection: navy gradient, "FREE Case Evaluation", gold Call button, phone band
  - Removed from homepage: OneFirmSection, FirmStatementSection, RecognitionSection, ServiceAreas
  - All [CONFIRM] placeholders clearly marked for client approval
  - CTA appears every 2-3 sections, phone number repeated 3+ times
  - Zero build errors, zero TypeScript errors

- [x] Homepage Enhancement — Mike Morse Alignment (June 23, 2026)
  - Hero stat bar: replaced static "Super Lawyers" text with 4 animated counter stats (Founded 2013, Avvo 10.0, 3× Super Lawyers, Top 10 Under 40)
  - AwardsMarquee: replaced static TrustBar with CSS-animated auto-scrolling award badges (marquee pattern from Morse)
  - HiringUsSection: NEW — dark bg "Hiring Us Means More Money" visual comparison (insurance offer $15K → ATLAW recovered $127.5K), [CONFIRM] placeholders
  - WinningsTicker: NEW — auto-scrolling horizontal strip of dollar amounts with case types (dark bg, gold numbers), [CONFIRM] placeholders
  - MobileFloatingCTA: NEW — fixed-position pulsing gold phone button on mobile (<1024px), always visible
  - Tailwind config: added marquee, marquee-slow, pulse-glow keyframe animations
  - Section reorder to match Morse flow: Hero → Awards → Results → NoFee → Capabilities → HiringUs → About → Testimonials → Process → WinningsTicker → Intake → FAQ → FinalCTA
  - Removed TrustBar import (replaced by AwardsMarquee)
  - Zero build errors, zero TypeScript errors

- [x] Implement Spec 03 — PI Practice Area Pages (June 23, 2026)
  - PracticeAreaDetailTemplate: 14-section reusable template component
    - StickySubNav: dark navy bar, 5 anchor tabs (Overview/What To Do/Testimonials/FAQ/Related), IntersectionObserver active highlighting, gold underline
    - Hero: light bg, breadcrumb nav, clamp-sized h1, gold social proof line, dark CTA pill → Typeform
    - Overview: two-column (62%/35%), "Why Choose ATLAW?" content left, sticky sidebar CTA right (3 gold buttons: Call/Email/Free Case Review), collapses inline on mobile
    - CaseResultsComparison: dark navy bg, 3-card carousel with prev/next, insurance offer (struck through) vs recovered amount, gold case type pill, [CONFIRM] placeholders
    - WhatToDoSteps: 4 navy gradient step cards + No Fee Banner (full-width dark strip with Call/Email)
    - LongFormContent: Michigan law sections, serif headings, centered max-width column, CTA at bottom
    - Testimonials: light gray bg, 3-card carousel with gold stars, speech bubble cards with avatar pointers, pagination, [CONFIRM] placeholders
    - FAQAccordion: 10-15 questions per page, CSS grid-rows animation, chevron rotation, proper aria-expanded
    - RelatedCasesStrip: dark navy bg, horizontal scroll with prev/next, dollar amounts + case types, [CONFIRM]
    - RelatedPages: 3-card grid linking to sibling sub-practices, dark navy cards with gold "Learn More"
    - IntakeForm: dark section with Dewnya portrait bg, Typeform CTA, "See How Much We Can Win"
    - AdditionalResources: two-column bulleted links to other practice areas
    - CityLinks: pill-shaped city links grid, routes to city SEO pages
    - FinalCTABand: navy gradient, gold Call + ghost Email buttons, phone number band
  - 7 data files in src/data/practice/pi/:
    - personal-injury.ts — landing page, links to all 6 sub-practices
    - auto-accidents.ts — Michigan No-Fault, PIP, mini-tort, 15 FAQs
    - medical-malpractice.ts — NOI/Affidavit of Merit, 2-year SOL, 10 FAQs
    - wrongful-death.ts — MCL 600.2922, estate vs survivor damages, sensitive tone, 10 FAQs
    - premises-liability.ts — invitee/licensee/trespasser duty, comparative fault, 10 FAQs
    - dog-bites.ts — MCL 287.351 strict liability, insurance coverage, 10 FAQs
    - workers-compensation.ts — no-fault system, denial appeals, retaliation protections, 12 FAQs
  - PracticeAreaPI type interface at src/data/practice/pi/types.ts
  - All 7 screen files rewritten to use template + data pattern
  - Unique h1, seoTitle, seoDescription per page
  - CTA every 2-3 sections (5+ per page)
  - Related practice areas link to siblings
  - City links connect to city SEO pages
  - [CONFIRM] placeholders on case results, testimonials, related cases
  - Mobile responsive (sidebar collapses inline)
  - pi-reveal CSS animations (existing PersonalInjury.css)
  - Zero TypeScript errors, zero build errors

### Next — Implementation Order

3. **Spec 05 — About & Team Pages** — Founder story + team grid.
4. **Spec 06 — Contact & Intake** — Typeform integration + office info.
5. **Spec 04 — SEO City Pages** — 49 city × practice pages.
7. **Spec 07 — SEO Meta & Schema** — Page titles, meta, structured data.
8. **Spec 08 — Photo Assets** — Convert and integrate photos.
9. **Spec 09 — Legal Compliance** — Disclaimers, privacy, terms.

### Open Questions

- [ ] **Case results** — Need real case results from Dewnya. All specs use [CONFIRM] placeholders.
- [ ] **Testimonials** — Need approved client quotes. Using [CONFIRM] placeholders.
- [ ] **Office hours** — What hours is the Dearborn office open?
- [ ] **Typeform routing** — Where do Typeform submissions go?
- [ ] **Blog** — Include blog/news section in Phase 1 or defer?
- [ ] **City pages content** — Do we have city-specific photos/content or template everything?
- [ ] **Team page scope** — Show all 29 staff or only attorneys + key PI staff?

### Architecture Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| PI-only site | Yes | Meeting directive — no Visionary Builders, no coaching |
| Dubai/Manila removed | Yes | Single office: Dearborn |
| Model site | mikemorris.com | Client directive from meeting |
| Intake method | Typeform | Already set up, URL confirmed |
| Design system | Keep existing navy/gold/white | Already built, works well |
| Animation system | Keep GSAP/ScrollTrigger | Already built, well-structured |
| Photo format | AVIF primary | Existing pipeline with sharp scripts |
| Tone | "Unreasonable hospitality" | Will Guidara book — warm, strategic, client-first |
| Staff count display | 29 (real) not "100+" | Accuracy over inflation |

### Session Notes

- Client meeting (June 17, 2026) confirmed PI-only pivot. Dewnya Bazzi made the decision.
- Sam Kassem leading project from agency side. Arlyn Dungao is firm-side contact.
- Updated photos, headshots, and brand guide available in `Website Materials/ATLAW Updated Photos/`.
