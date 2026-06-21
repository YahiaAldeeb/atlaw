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

### Next — Implementation Order

2. **Spec 02 — Homepage Rebuild** — 12-section homepage with Mike Morris depth.
3. **Spec 05 — About & Team Pages** — Founder story + team grid.
4. **Spec 06 — Contact & Intake** — Typeform integration + office info.
5. **Spec 03 — PI Practice Area Pages** — 7 sub-practice pages with 14-section depth.
6. **Spec 04 — SEO City Pages** — 49 city × practice pages.
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
