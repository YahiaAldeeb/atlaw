import { Header } from "../components/ATLAW/Header";
import { Hero } from "../components/ATLAW/Hero";
import { AwardsMarquee } from "../components/ATLAW/AwardsMarquee";
import { CaseResultsSection } from "../components/ATLAW/CaseResultsSection";
import { NoFeeBanner } from "../components/ATLAW/NoFeeBanner";
import { CapabilitiesSection } from "../components/ATLAW/CapabilitiesSection";
import { HiringUsSection } from "../components/ATLAW/HiringUsSection";
import { AboutDewnyaSection } from "../components/ATLAW/AboutDewnyaSection";
import { TestimonialsSection } from "../components/ATLAW/TestimonialsSection";
import { ProcessSection } from "../components/ATLAW/ProcessSection";
import { WinningsTicker } from "../components/ATLAW/WinningsTicker";
import { IntakeFormSection } from "../components/ATLAW/IntakeFormSection";
import { FAQPreviewSection } from "../components/ATLAW/FAQPreviewSection";
import { FinalCtaSection } from "../components/ATLAW/FinalCtaSection";
import { MobileFloatingCTA } from "../components/ATLAW/MobileFloatingCTA";
import { Footer } from "../components/ATLAW/Footer";

export const ATLAWLandingPage = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-ivory text-ink [zoom:1.12]">
      <Header />
      <main>
        <Hero />
        <AwardsMarquee />
        <CaseResultsSection />
        <NoFeeBanner />
        <CapabilitiesSection />
        <HiringUsSection />
        <AboutDewnyaSection />
        <TestimonialsSection />
        <ProcessSection />
        <WinningsTicker />
        <IntakeFormSection />
        <FAQPreviewSection />
        <FinalCtaSection />
      </main>
      <MobileFloatingCTA />
      <Footer />
    </div>
  );
};
