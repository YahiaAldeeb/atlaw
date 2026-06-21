# 01 — PI Pivot: Navigation & Routing

Strip the multi-practice navigation and routing down to PI-only. This is the structural foundation for everything else.

## Navigation Changes

### Header

Update `src/data/navigation.ts`:

- Remove the "PRACTICE AREAS" mega-menu dropdown entirely.
- Remove "NEWS & INSIGHTS" dropdown.
- Remove "GLOBAL REACH" link.
- New nav structure:
  - **PERSONAL INJURY** (link to `/personal-injury`)
  - **ABOUT** (link to `/about`)
  - **OUR TEAM** (link to `/team`)
  - **CONTACT** (link to `/contact`)
- Keep the gold "I NEED HELP" CTA linking to `/contact`.

Update `src/components/ATLAW/Header.tsx`:

- Remove `CapabilitiesMegaMenu` and `NewsInsightsDropdown` imports and rendering.
- Simplify to direct links only — no dropdowns needed.
- Keep mobile drawer but simplify to match new nav items.

### Footer

Update `src/data/footer.ts`:

- Replace practice area links with PI sub-areas only:
  - Personal Injury → `/personal-injury`
  - Auto Accidents → `/personal-injury/auto-accidents`
  - Medical Malpractice → `/personal-injury/medical-malpractice`
  - Wrongful Death → `/personal-injury/wrongful-death`
  - Premises Liability → `/personal-injury/premises-liability`
  - Dog Bite Injuries → `/personal-injury/dog-bites`
  - Workers' Compensation → `/personal-injury/workers-compensation`
- Company links: About, Our Team, Contact, Privacy, Terms.
- Remove Global Reach link.
- Update firm description: focus on PI, remove multi-specialty language.

## Routing Changes

Update `src/index.tsx`:

### Keep
- `/` — Homepage
- `/about` — About page (will be rewritten later)
- `/contact` — Contact page
- `/privacy` — Privacy policy
- `/terms` — Terms of use

### Add
- `/team` — Team page (replaces `/our-people`)
- `/personal-injury` — PI landing page
- `/personal-injury/auto-accidents`
- `/personal-injury/medical-malpractice`
- `/personal-injury/wrongful-death`
- `/personal-injury/premises-liability`
- `/personal-injury/dog-bites`
- `/personal-injury/workers-compensation`

### Remove
- `/our-people` (replaced by `/team`)
- `/global-reach`
- `/news-insights`
- `/practice-areas` and all `/practice-areas/*` routes
- All non-PI practice area pages: business law, franchising, M&A, securities, contracts, IP, estate planning, trust litigation, real estate, tax, immigration, criminal defense, DUI, federal criminal, white collar, civil litigation

### Cleanup
- Delete or archive screen files for removed routes.
- Delete or archive data files for removed practice areas.
- Remove lazy imports for deleted pages.

## Check When Done

- Header shows only: PERSONAL INJURY, ABOUT, OUR TEAM, CONTACT, I NEED HELP.
- No mega-menu or dropdown behavior.
- Footer shows PI sub-areas only, no other practice areas.
- All removed routes return 404 (or redirect to `/`).
- No TypeScript errors, no broken imports.
- Mobile nav drawer matches new structure.
