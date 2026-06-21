# 04 — SEO City Landing Pages

Create city-specific landing pages for each PI sub-practice area. Modeled after Mike Morris location pages — deep local content, sticky sidebar, FAQ, internal linking.

Reference: `context/mike-morris-reference.md` → "City/Location Pages" section.

## Target Cities

| City / Area      | Priority | Notes                              |
| ---------------- | -------- | ---------------------------------- |
| Dearborn         | High     | Office location, home turf         |
| Detroit          | High     | Largest metro, highest search vol  |
| Dearborn Heights | High     | Adjacent community, strong ties    |
| Ann Arbor        | Medium   | University town, high income       |
| Wayne County     | Medium   | County-level coverage              |
| Oakland County   | Medium   | County-level coverage              |
| Macomb County    | Medium   | County-level coverage              |

## URL Structure

`/personal-injury/[practice]/[city]`

Examples:
- `/personal-injury/auto-accidents/dearborn`
- `/personal-injury/medical-malpractice/detroit`
- `/personal-injury/wrongful-death/ann-arbor`

## Areas Served Index Page

Create `/areas-served` page:

**Mike Morris equivalent:** Sticky left sidebar nav (30+ cities) + stacked city cards with skyline photos.

**ATLAW version:**
- Hero: "Representing the Injured Across Michigan" heading.
- Left sidebar: 7 city links (sticky on desktop, collapses on mobile).
- Right: Stacked city cards — each with city photo bg + dark overlay + city name + "Learn More →".
- Each card links to `/personal-injury/auto-accidents/[city]` (primary practice area for that city).

## City Landing Page Template (10 sections)

### 1. Hero
- `<h1>`: "[Practice Area] Lawyer in [City]" (e.g., "Auto Accident Lawyer in Dearborn").
- Short city-specific tagline.
- Gold CTA pill: "START YOUR FREE CASE REVIEW" → Typeform.
- Social proof line: "Super Lawyers Rising Star · Avvo 10.0"

### 2. Stats Bar
- Horizontal strip: Founded 2013 · Dearborn, MI · Super Lawyers Rising Star · Avvo 10.0
- Same pattern as homepage trust bar, contextualizes the firm for local visitors.

### 3. City Context ("Why Choose ATLAW in [City]")
- Two-column: content left (~65%), sticky sidebar CTA right (~35%).
- Left: 2-3 paragraphs about ATLAW's connection to this area.
  - Dearborn/Dearborn Heights: emphasize bilingual Arab-American community ties.
  - Detroit: emphasize proximity, understanding of urban accident patterns.
  - Ann Arbor: emphasize serving university community, campus-area accidents.
  - Counties: emphasize knowledge of local courts and procedures.
- Right sidebar: "3 Ways to Start Your Case" sticky card (same as practice area pages).

### 4. Practice Area Overview
- Reuse core content from parent practice area page.
- Localize where possible: reference local roads, intersections, hospitals.
- NOT identical copy — vary enough to avoid duplicate content.

### 5. Local Expertise
- "Serving [City] Injury Victims" heading.
- Bullet points: bilingual team, knowledge of local courts, office proximity, community involvement.

### 6. Case Results
- [CONFIRM] placeholder cards specific to this area/county if available.
- Otherwise: general firm results.

### 7. FAQ (City-Specific)
- 5-8 questions localized to this city:
  - "How do I find a personal injury lawyer in [City]?"
  - "What should I do after a car accident in [City]?"
  - "How long do I have to file a claim in Michigan?"
  - "Does ATLAW handle cases in [County] courts?"

### 8. Other Practice Areas in [City]
- Links to other PI sub-practice city pages:
  - "Also serving [City] for: Auto Accidents · Medical Malpractice · Wrongful Death..."

### 9. Other Cities We Serve
- Grid of city links for the same practice area:
  - "Also serving: Dearborn · Detroit · Ann Arbor · ..."
  - Each links to `/personal-injury/[practice]/[other-city]`.

### 10. Inline CTA + Footer

## Implementation

### Dynamic Route

Add to `src/index.tsx`:
```
/personal-injury/:practice/:city → CityLandingPage
/areas-served → AreasServedPage
```

### Data Structure

Create `src/data/cities.ts`:

```typescript
interface CityData {
  slug: string;
  name: string;
  county: string;
  localContext: string[];    // paragraphs
  localExpertise: string[];  // bullet points
  nearbyLandmarks?: string[];
  localCourts?: string[];
  hospitals?: string[];
}

const cities: CityData[] = [
  {
    slug: "dearborn",
    name: "Dearborn",
    county: "Wayne County",
    localContext: ["ATLAW is headquartered in Dearborn..."],
    localExpertise: ["Bilingual Arabic-English team...", "Steps from 19th District Court..."],
  },
  // ... 6 more
];
```

### Page Component

Create `src/screens/CityLandingPage.tsx`:
- Reads `:practice` and `:city` params.
- Looks up practice area data and city data.
- Renders combined template.
- 404 if invalid combination.

## SEO Requirements

- Unique `<title>`: "[Practice Area] Lawyer in [City] | ATLAW"
- Unique meta description per page (150-160 chars).
- Schema.org `LegalService` with `areaServed` set to specific city.
- Canonical URL set.
- Internal links: parent practice area → city pages, city page → parent, city page ↔ sibling cities.

## Scale

- 7 practice areas × 7 cities = 49 city pages.
- 1 areas-served index page.
- Content templated but NOT identical — city context and local references must vary.

## Check When Done

- City pages render for all valid practice/city combinations.
- Invalid combinations show 404.
- Sticky sidebar CTA works on desktop, collapses on mobile.
- Each page has unique title, meta description, and city-specific content.
- Internal linking connects practice areas ↔ cities ↔ siblings.
- Areas Served index page lists all cities with cards.
- FAQ questions localized per city.
- Mobile responsive.
- No build errors.
