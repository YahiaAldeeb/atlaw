// Intake + destinations (real, verified against Footer / Hero — not placeholder).
export const TYPEFORM = "https://j098jiq3pk7.typeform.com/to/Mslg7Y7f";
export const EMAIL = "info@atlawgroup.com";
export const PHONE_HREF = "tel:+13134067606";

/* ── Data ─────────────────────────────────────────────────────────────────── */

export const matterTypes = [
  {
    title: "Immigration & family",
    desc: "Visas, status, and reunification between the US and abroad.",
  },
  {
    title: "International business",
    desc: "Deals, disputes, and franchising across jurisdictions.",
  },
  {
    title: "Cross-border estates",
    desc: "Assets, heirs, and probate in more than one country.",
  },
];

export type LocationBlock = {
  city: string;
  region: string;
  timeZone: string;
  body: string;
  contact: { label: string; href: string };
};

export const locations: LocationBlock[] = [
  {
    city: "Detroit",
    region: "Headquarters",
    timeZone: "America/Detroit",
    body: "Where ATLAW was founded and where every matter is ultimately accountable. Michigan courts, US federal matters, and the home base for cross-border coordination.",
    // Real, verified HQ contact (matches Footer).
    contact: { label: "(313) 406-7606 · 3 Park Ln Blvd, Suite 1500, Dearborn, MI", href: PHONE_HREF },
  },
  {
    city: "Dubai",
    region: "Gulf Region",
    timeZone: "Asia/Dubai",
    body: "Business formation, transactions, and disputes for clients working between the US and the GCC.",
    // Placeholder: route through HQ until a local line is confirmed.
    contact: { label: "Gulf matters · info@atlawgroup.com", href: `mailto:${EMAIL}` },
  },
  {
    city: "Manila",
    region: "Southeast Asia",
    timeZone: "Asia/Manila",
    body: "Immigration, family, and business matters connecting the Philippines and the United States.",
    // Placeholder: route through HQ until a local line is confirmed.
    contact: { label: "Southeast Asia matters · info@atlawgroup.com", href: `mailto:${EMAIL}` },
  },
];

export const steps = [
  {
    num: "01",
    title: "Tell us once.",
    body:
      "Explain your situation one time, to one attorney. We map which jurisdictions are involved and what has to happen in each.",
  },
  {
    num: "02",
    title: "We assemble the right side of the table.",
    body:
      "Our own attorneys where we have them, vetted affiliates where we don't. You don't search, vet, or translate — we do.",
  },
  {
    num: "03",
    title: "You hear from one firm.",
    body:
      "Updates, documents, and decisions flow through your ATLAW attorney. No chasing three firms in three time zones.",
  },
];

export const stats = [
  { num: "22+", label: "Professionals" },
  { num: "6", label: "Cities" },
  { num: "4", label: "Continents" },
];
