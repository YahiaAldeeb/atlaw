import { useMemo } from "react";
import {
  categoryParentSlug,
  practiceAreas,
  type PracticeArea,
  type PracticeCategory,
} from "../../../data/practiceAreas";

export type CategoryGroup = {
  category: PracticeCategory;
  number: PracticeArea["categoryNumber"];
  parent: PracticeArea;
  children: PracticeArea[];
};

export const useCategoryGroups = (): CategoryGroup[] =>
  useMemo(() => {
    const order: PracticeCategory[] = ["RECOVER", "BUILD", "PROTECT", "DEFEND"];
    return order.map((category) => {
      const inCategory = practiceAreas.filter((entry) => entry.category === category);
      const parent = inCategory.find((entry) => entry.slug === categoryParentSlug[category]);
      const children = inCategory.filter((entry) => entry.slug !== categoryParentSlug[category]);
      return {
        category,
        number: parent ? parent.categoryNumber : ("01" as PracticeArea["categoryNumber"]),
        parent: parent!,
        children,
      };
    });
  }, []);
