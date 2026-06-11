export type NavLink = { label: string; to: string; external?: boolean };

// Footer surfaces the highest-demand practice areas only — not all 21, which
// would flatten the hierarchy. Slugs verified against routing in src/index.tsx.
export const practiceAreaLinks: NavLink[] = [
  { label: "Personal Injury", to: "/practice-areas/personal-injury" },
  { label: "Auto Accidents", to: "/practice-areas/auto-accidents" },
  { label: "Criminal Defense", to: "/practice-areas/criminal-defense" },
  { label: "Business Law", to: "/practice-areas/business-law" },
  { label: "Estate Planning", to: "/practice-areas/estate-planning" },
];

// Labels mirror the primary nav (Header.tsx) exactly: "Our Team" → /our-people,
// "News & Insights" → /news-insights. Careers is intentionally dropped (no page);
// a careers mailto lives in the sub-footer instead.
export const companyLinks: NavLink[] = [
  { label: "About", to: "/about" },
  { label: "Our Team", to: "/our-people" },
  { label: "Global Reach", to: "/global-reach" },
  { label: "News & Insights", to: "/news-insights" },
  { label: "Contact", to: "/contact" },
];

export const socialLinks: { label: string; href: string }[] = [
  { label: "Instagram", href: "https://www.instagram.com/atlawgroup/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/at-law-group/" },
  { label: "Facebook", href: "https://www.facebook.com/atlawgroup/" },
];

// Only the two pages that actually exist as routes (placeholder content pending).
export const legalLinks: { label: string; to: string }[] = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms of Use", to: "/terms" },
];

export const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=3+Park+Ln+Blvd+Suite+1500%2C+Dearborn%2C+MI+48126";
