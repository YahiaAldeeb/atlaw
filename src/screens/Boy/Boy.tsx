import { Card, CardContent } from "../../components/ui/card";
import { BioOverviewSection } from "./sections/BioOverviewSection";
import { ContactCalloutSection } from "./sections/ContactCalloutSection";
import { ContactFormSection } from "./sections/ContactFormSection";
import { FooterCreditsSection } from "./sections/FooterCreditsSection";
import { IntroHeroSection } from "./sections/IntroHeroSection";
import { ProjectsShowcaseSection } from "./sections/ProjectsShowcaseSection";
import { SkillsGridSection } from "./sections/SkillsGridSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { TopNavigationSection } from "./sections/TopNavigationSection";

const sections = [
  { id: "top-navigation", component: TopNavigationSection },
  { id: "intro-hero", component: IntroHeroSection },
  { id: "skills-grid", component: SkillsGridSection },
  { id: "testimonials", component: TestimonialsSection },
  { id: "bio-overview", component: BioOverviewSection },
  { id: "projects-showcase", component: ProjectsShowcaseSection },
  { id: "contact-callout", component: ContactCalloutSection },
  { id: "contact-form", component: ContactFormSection },
  { id: "footer-credits", component: FooterCreditsSection },
];

export const Boy = (): JSX.Element => {
  return (
    <main className="w-full bg-white text-primaryblack">
      <Card className="h-auto w-full rounded-none border-0 bg-transparent shadow-none">
        <CardContent className="flex flex-col gap-0 p-0">
          {sections.map(({ id, component: Section }) => (
            <section key={id} className="relative w-full">
              <Section />
            </section>
          ))}
        </CardContent>
      </Card>
    </main>
  );
};
