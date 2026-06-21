# 07 — SEO, Meta Tags & Structured Data

Add proper SEO infrastructure to every page.

## Page Titles

Format: `[Page Title] | ATLAW — Dearborn Personal Injury Lawyers`

Examples:
- Homepage: `ATLAW — Dearborn Personal Injury Lawyers`
- Auto Accidents: `Auto Accident Lawyer | ATLAW — Dearborn Personal Injury Lawyers`
- City page: `Auto Accident Lawyer in Detroit | ATLAW`

## Meta Descriptions

Each page needs a unique meta description (150-160 characters). Focus on:
- What the page is about.
- Location (Dearborn / Michigan).
- Value prop (free consultation, no fee unless we win).

## Implementation

### React Helmet or Document Title

Since this is a Vite SPA (not Next.js), use one of:
- `react-helmet-async` for full `<head>` management.
- `document.title` in a `useEffect` for simple title-only.

Recommendation: Install `react-helmet-async` for full control over title, meta description, canonical, and structured data.

### Per-Page Meta Component

Create `src/components/ATLAW/PageMeta.tsx`:

```typescript
interface PageMetaProps {
  title: string;
  description: string;
  canonical?: string;
  schema?: object;
}
```

Each screen component wraps its content with `<PageMeta>`.

## Structured Data (Schema.org)

### Homepage — Organization + LegalService

```json
{
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "ATLAW — AT Law Group",
  "description": "Dearborn personal injury law firm...",
  "url": "https://atlawgroup.com",
  "telephone": "+1-313-406-7606",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "3 Park Lane Blvd., Suite 400W",
    "addressLocality": "Dearborn",
    "addressRegion": "MI",
    "postalCode": "48126"
  },
  "founder": {
    "@type": "Person",
    "name": "Dewnya Bazzi"
  },
  "areaServed": ["Dearborn", "Detroit", "Wayne County", "Oakland County", "Macomb County"]
}
```

### Practice Area Pages — Service

```json
{
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Auto Accident Lawyer — ATLAW",
  "serviceType": "Auto Accident Legal Representation",
  "provider": { "@type": "Organization", "name": "ATLAW" },
  "areaServed": "Southeast Michigan"
}
```

### City Pages — LegalService with specific areaServed

Same as practice area but `areaServed` narrowed to the specific city.

### Attorney Profile — Person

On the team page, Dewnya's profile:

```json
{
  "@context": "https://schema.org",
  "@type": "Attorney",
  "name": "Dewnya Bazzi",
  "jobTitle": "Founder & CEO",
  "worksFor": { "@type": "Organization", "name": "ATLAW" },
  "award": ["Super Lawyers Rising Star 2024", "Super Lawyers Rising Star 2025", "Super Lawyers Rising Star 2026"]
}
```

## Open Graph / Social

- `og:title`, `og:description`, `og:image` for each page.
- `og:image`: Use a branded share image (create one from logo + tagline).
- Twitter card: `summary_large_image`.

## Robots & Sitemap

- Add `public/robots.txt` allowing all crawlers.
- Generate `sitemap.xml` listing all pages (can be static or build-time generated).

## Check When Done

- Every page has a unique `<title>` and meta description.
- Structured data validates in Google's Rich Results Test.
- Open Graph tags render correctly in link previews.
- `robots.txt` and `sitemap.xml` exist.
- No duplicate titles or descriptions across pages.
