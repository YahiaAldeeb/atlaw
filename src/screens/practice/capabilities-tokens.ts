import type { PracticeArea, PracticeCategory } from "../../data/practiceAreas";

export const NAVY_DEEP = "#0a1428";
export const IVORY = "#FFFFFF";
export const GOLD = "#D39A2A";

export const headlineAxes = "'opsz' 144, 'wght' 380, 'SOFT' 0, 'WONK' 0";
export const subHeadlineAxes = "'opsz' 96, 'wght' 400, 'SOFT' 0, 'WONK' 0";

export type CategoryGroup = {
  category: PracticeCategory;
  number: PracticeArea["categoryNumber"];
  parent: PracticeArea;
  children: PracticeArea[];
};
