import type { PracticeArea } from "../../data/practiceAreas";

export const headlineAxes = "'opsz' 144, 'wght' 380, 'SOFT' 0, 'WONK' 0";
export const subHeadlineAxes = "'opsz' 96, 'wght' 400, 'SOFT' 0, 'WONK' 0";

export const NAVY_DEEP = "#0a1428";
// Canonical navy band — matches the Service Areas scheme used site-wide.
export const NAVY_CANVAS = "linear-gradient(180deg, #0e1b33 0%, #0a1428 100%)";
export const IVORY = "#FFFFFF";
export const GOLD = "#D39A2A";

export const microcopyByCategory: Record<PracticeArea["category"], string> = {
  RECOVER: "For people hurt in accidents, collisions, medical errors, or on the job.",
  BUILD: "For founders, owners, and investors building something durable.",
  PROTECT: "For families and individuals planning ahead or sorting out a dispute.",
  DEFEND: "For clients facing criminal charges, investigations, or serious civil exposure.",
};
