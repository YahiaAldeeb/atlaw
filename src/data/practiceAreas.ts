import type { PracticeArea } from "./practice-areas/types";
import { recoverPracticeAreas } from "./practice-areas/recover";
import { buildPracticeAreas } from "./practice-areas/build";
import { protectPracticeAreas } from "./practice-areas/protect";
import { defendPracticeAreas } from "./practice-areas/defend";

export type { PracticeCategory, PracticeArea } from "./practice-areas/types";
export { categoryParentSlug, categoryTagline } from "./practice-areas/types";

export const practiceAreas: PracticeArea[] = [
  ...recoverPracticeAreas,
  ...buildPracticeAreas,
  ...protectPracticeAreas,
  ...defendPracticeAreas,
];

export const practiceAreasBySlug: Record<string, PracticeArea> = practiceAreas.reduce(
  (acc, area) => {
    acc[area.slug] = area;
    return acc;
  },
  {} as Record<string, PracticeArea>,
);
