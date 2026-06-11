import { useEffect, useMemo } from "react";
import { Header } from "../components/ATLAW/Header";
import { ServiceAreas } from "../components/ATLAW/ServiceAreas";
import { Footer } from "../components/ATLAW/Footer";
import {
  categoryParentSlug,
  practiceAreas,
  type PracticeCategory,
} from "../data/practiceAreas";
import { Hero } from "./practice/CapabilitiesHero";
import { CategoryBlock } from "./practice/CategoryBlock";
import type { CategoryGroup } from "./practice/capabilities-tokens";

const useCategoryGroups = (): CategoryGroup[] =>
  useMemo(() => {
    const order: PracticeCategory[] = ["RECOVER", "BUILD", "PROTECT", "DEFEND"];
    return order.map((category) => {
      const inCategory = practiceAreas.filter((entry) => entry.category === category);
      const parent = inCategory.find((entry) => entry.slug === categoryParentSlug[category])!;
      const children = inCategory.filter((entry) => entry.slug !== categoryParentSlug[category]);
      return { category, number: parent.categoryNumber, parent, children };
    });
  }, []);

export const CapabilitiesLandingPage = (): JSX.Element => {
  const groups = useCategoryGroups();

  useEffect(() => {
    document.title = "Practice Areas — ATLAW Group";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content =
      "Strategic legal counsel for individuals, families, founders, and organizations navigating complex moments.";
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return (
    <div className="min-h-screen bg-ivory text-ink">
      <Header />
      <main>
        <Hero />
        {groups.map((group, index) => (
          <CategoryBlock group={group} index={index} key={group.category} />
        ))}
        <ServiceAreas />
      </main>
      <Footer />
    </div>
  );
};
