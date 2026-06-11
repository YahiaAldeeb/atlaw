/**
 * Typed content model for the templated practice-area pages.
 *
 * The pages fall into a few structural archetypes that share identical markup
 * and differ only in copy/images. Each archetype has a template component under
 * `src/screens/practice/` driven by one of these data shapes; the per-page copy
 * lives in `src/data/practice/<slug>.ts`.
 */

/** A titled group of service bullet points (Advisory/Transactions archetype). */
export type ServiceGroup = { title: string; body: string; items: string[] };

/** A service area with an optional lead sentence (Litigation archetype). */
export type ServiceArea = { title: string; body?: string; items: string[] };

/** Hero band content shared by all archetypes. */
export type CapabilityHero = {
  /** Primary AVIF source. */
  imageAvif: string;
  /** JPG/PNG fallback for browsers without AVIF. */
  imageFallback: string;
  imageAlt: string;
  /** Current-page label in the breadcrumb. */
  breadcrumb: string;
  /** Two-character category number, e.g. "02". */
  markerNumber: string;
  /** Category word, e.g. "Build". */
  markerWord: string;
  /** H1 text (a gold period is appended by the template). */
  title: string;
  tagline: string;
};

/** Closing navy CTA band: renders `{ctaLead}<gold>{ctaAccent}</gold>`. */
export type CapabilityCta = { lead: string; accent: string };

/**
 * Advisory / Transactions archetype:
 *   Hero → Body (intro + "How we work" prose) → "What we handle" service
 *   groups → global <ServiceAreas /> → closing CTA band.
 * Used by Business Law, Franchising, M&A, Securities, Contracts, IP.
 */
export type AdvisoryCapabilityData = {
  /** Stable prefix for aria ids, e.g. "bl". */
  idPrefix: string;
  seoTitle: string;
  seoDescription: string;
  hero: CapabilityHero;
  intro: string;
  howWeWork: string;
  servicesHeading: string;
  serviceGroups: ServiceGroup[];
  cta: CapabilityCta;
};

/**
 * Litigation / Defend archetype:
 *   Hero (background via a `.{prefix}-hero-bg` CSS class in PersonalInjury.css)
 *   → Body (intro + "How we work" as multiple paragraphs) → numbered
 *   "05—Service Areas" grid → closing CTA. No global <ServiceAreas />.
 *   Used by Criminal Defense, DUI, Federal Criminal, White Collar, Civil Litigation.
 */
export type LitigationCapabilityData = {
  idPrefix: string;
  seoTitle: string;
  seoDescription: string;
  /** CSS class that paints the hero background image (defined in PersonalInjury.css). */
  heroBgClass: string;
  hero: {
    breadcrumb: string;
    markerNumber: string;
    markerWord: string;
    title: string;
    tagline: string;
  };
  intro: string;
  /** Optional second lead paragraph (sans), rendered below the serif intro. */
  intro2?: string;
  howWeWork: string[];
  servicesHeading: string;
  serviceAreas: ServiceArea[];
  cta: CapabilityCta;
};
