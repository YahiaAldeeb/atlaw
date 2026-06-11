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
