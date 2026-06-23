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

- [x] Implement Spec 04 — SEO City Landing Pages (June 23, 2026)
  - CityData interface + 7 city data objects in `src/data/cities.ts`
    - Dearborn, Detroit, Dearborn Heights, Ann Arbor, Wayne County, Oakland County, Macomb County
    - Each: slug, name, county, localContext (3 paragraphs), localExpertise (6 bullets), nearbyLandmarks, localCourts, hospitals, faqs (6 city-specific FAQs)
  - Practice area slug→data lookup in `src/data/practice/pi/index.ts`
  - CityLandingTemplate: 10-section template in `src/components/ATLAW/CityLandingTemplate.tsx`
    - Hero: breadcrumb (ATLAW > PI > Practice > City), city-specific h1, tagline, gold CTA → Typeform
    - StatsBar: Founded 2013, county, Super Lawyers, Avvo 10.0
    - CityContext: two-column (62%/35%), city-specific paragraphs left, sticky sidebar CTA right
    - PracticeOverview: reuses parent practice area overview + first Michigan law section, localized heading
    - LocalExpertise: 2-col grid of 6 city-specific bullet cards
    - CaseResults: 3-card carousel with insurance offer vs. recovered, [CONFIRM] placeholders
    - CityFAQ: 6 city-specific questions, accordion with CSS grid-rows animation
    - OtherPracticeAreas: 3-col card grid linking to other PI sub-practices in same city
    - OtherCities: pill-shaped links to same practice area in other cities
    - IntakeForm + FinalCTABand: dark section with Dewnya portrait bg, Typeform CTA, phone band
  - CityLandingPage screen: reads `:practice` and `:city` params, looks up both, 404 → redirect if invalid
  - AreasServedPage: hero + sticky sidebar nav (7 cities) + stacked city cards with county/context/learn more
  - Routes added: `/personal-injury/:practice/:city` → CityLandingPage, `/areas-served` → AreasServedPage
  - Footer updated: "Areas Served" link added to company links
  - Unique `<title>` and meta description per city page
  - CTA appears every 2-3 sections (5+ per page)
  - Internal linking: practice ↔ city, city ↔ sibling cities, city ↔ other practices
  - [CONFIRM] placeholders on case results
  - Mobile responsive (sidebar collapses inline)
  - 7 practice areas × 7 cities = 49 city pages + 1 areas-served index
  - Zero TypeScript errors, zero build errors

- [x] Implement Spec 05 — About & Team Pages (June 23, 2026)
  - About page rebuilt with 8 sections per spec:
    - Hero: dark overlay on group photo, "Our Story" heading, firm mission subtitle
    - Founder Feature: two-column (55%/45%), "Hi, I'm Dewnya Bazzi." personal heading, gold "Founder & CEO", multi-paragraph bio with "unreasonable hospitality" philosophy, "See More" expandable, navy CTA → /contact
    - Timeline: vertical timeline layout, 6 milestones (2013 founding → 2026 3rd Rising Star), gold year markers, navy dot on vertical line, alternating left/right on desktop, mobile single-column
    - Firm Values: 3 cards with icons (Unreasonable Hospitality, Strategic Advocacy, Cultural Awareness)
    - Awards/Media Strip: "Awarded. Featured. Trusted." + 5 gold badge chips (SL 2024-2026, Avvo, NAOPIA)
    - By The Numbers: navy stats strip (Founded 2013 · 29 Team Members · Dearborn, MI · 3× Rising Star)
    - Inline Intake CTA: dark section with Dewnya portrait bg, Typeform CTA, phone number
    - Footer
  - Team page rebuilt with 6 sections per spec:
    - Hero: dark overlay on group photo, "Meet Your Team" centered, subtitle
    - Founder Feature Card: full-width white card, two-column (bio left 55%, photo right 45%), name in large serif, gold "Founder & CEO", shorter bio, navy "View Full Bio" → /about
    - Attorneys Grid: 3 columns centered, circular-cropped headshots (Deanna Leila, Hassan Harp, Ahmad Berry)
    - Key Staff Grid: 4 columns, circular headshots (Lamis Baydoun, Abeer Almalahi, Mazen Alsamawi, Madison Misovich)
    - Bottom CTA: "Get a FREE Case Evaluation Today!" + CALL/EMAIL buttons + phone band
    - Footer
  - Team data rebuilt: typed TeamMember interface, founder/attorneys/staff arrays, PI-focused team only
  - 13 photos converted from source JPGs to AVIF in public/assets/team/
    - Professional Headshots: 10 team members (dewnya-bazzi, deanna-leila, hassan-harp, ahmad-berry, lamis-baydoun, abeer-almalahi, mazen-alsamawi, madison-misovich, deema-ghamloush, mahmoud-mansour)
    - DB Creative Shots: 2 Dewnya feature photos (dewnya-creative-1, dewnya-creative-2)
    - Group Shot: 1 team photo (group-shot) for hero backgrounds
  - About data rebuilt: timeline events, firm values, founder bio content, by-the-numbers stats
  - Removed: old multi-location team data (Dubai/Manila/Baghdad/Kuwait/Beirut), OurPeoplePieces component, ServiceAreas import, location filters
  - Unique SEO titles and meta descriptions per page
  - Mike Morris patterns followed: founder card above grid, circular headshots, dark hero with overlay, vertical timeline with year markers, personal storytelling
  - No "100+ team members," no "Dubai/Manila" — accurate PI-focused team only
  - Bio tone: warm, personal, "unreasonable hospitality" — not corporate
  - Mobile responsive (single-column on mobile, full grid on desktop)
  - Zero TypeScript errors, zero build errors

- [x] Implement Spec 06 — Contact & Intake (June 23, 2026)
  - Full rewrite of ContactPage with 8 sections per spec:
    - ContactHero: dark bg with Dewnya photo overlay, two-column (left text + right CTA card), gold "Start Your Free Case Review" → Typeform popup card with glassmorphic border
    - StatsBar: white strip with Founded 2013 · Dearborn, MI · Super Lawyers Rising Star · Avvo 10.0, gold dot separators
    - DirectContact: "3 Ways to Reach Us" — 3 icon cards (Call/Email/Visit) with gold icon circles, hover lift, clickable links
    - WhatToExpect: "What Happens Next" — 3 navy gradient step cards (Free Consultation → Case Evaluation → We Get to Work) matching ProcessSection pattern
    - OfficeLocation: two-column (Google Maps embed left, group photo + address/phone/email right), serving Michigan cities note
    - ReassuranceSection: navy bg, centered "You Don't Pay Unless We Win." white serif, confidentiality message, gold Typeform CTA
    - ContactFAQ: 6 intake-specific questions, accordion with CSS grid-rows animation, chevron rotation, proper aria-expanded
    - IntakeCTA: dark section with Dewnya portrait bg, "Get a FREE Case Evaluation Today!" + Call/Email buttons + phone number band
  - Typeform integration: popup-style CTA card in hero, direct link buttons throughout, URL = https://j098jiq3pk7.typeform.com/to/Mslg7Y7f
  - Contact info updated: phone (313) 406-7606, email db@atlawgroup.com, address 3 Park Lane Blvd Suite 400W
  - MobileFloatingCTA included for persistent mobile phone button
  - Phone number visible without scrolling (hero + direct contact)
  - CTA appears every 2-3 sections (hero, reassurance, intake — 3+ CTAs)
  - "No fee unless we win" messaging in hero, reassurance, and intake sections
  - Mike Morris patterns followed: dark hero with form/CTA, stats bar, office section, FAQ accordion
  - Removed old ContactForm (custom form replaced by Typeform), removed ServiceAreas import
  - Motion primitives: RevealText, RevealBlock, RevealStagger with consistent grain overlay
  - Mobile responsive (single-column → two-column on lg)
  - Zero TypeScript errors, zero build errors

### Next — Implementation Order

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
