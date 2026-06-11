export type PracticeCategory = "RECOVER" | "BUILD" | "PROTECT" | "DEFEND";

export type PracticeArea = {
  slug: string;
  name: string;
  navLabel?: string;
  category: PracticeCategory;
  categoryNumber: "01" | "02" | "03" | "04";
  subtitle: string;
  intro: string[];
  whatWeHandle: string[];
  whenToCall: string[];
  approach: string;
  relatedSlugs: string[];
};

// Parent slug for each category — used by the nav dropdown and Capabilities landing.
export const categoryParentSlug: Record<PracticeCategory, string> = {
  RECOVER: "personal-injury",
  BUILD: "business-law",
  PROTECT: "estate-planning",
  DEFEND: "criminal-defense",
};

export const categoryTagline: Record<PracticeCategory, string> = {
  RECOVER: "For people hurt in accidents, collisions, medical errors, or on the job.",
  BUILD: "For founders, owners, and investors building something durable.",
  PROTECT: "For families planning ahead or sorting out a dispute.",
  DEFEND: "For clients facing criminal charges, a DUI, or a federal investigation.",
};
