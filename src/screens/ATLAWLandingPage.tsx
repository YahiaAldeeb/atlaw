import { Header } from "../components/ATLAW/Header";
import { Hero } from "../components/ATLAW/Hero";
import { TrustBandSection } from "../components/ATLAW/TrustBandSection";
import { PracticePillarsSection } from "../components/ATLAW/PracticePillarsSection";
import { AtlawThesisSection } from "../components/ATLAW/AtlawThesisSection";
import { HealthcareSpotlightSection } from "../components/ATLAW/HealthcareSpotlightSection";
import { GlobalReach } from "../components/ATLAW/GlobalReach";
import { HowWeWorkSection } from "../components/ATLAW/HowWeWorkSection";
import { LeadershipStorySection } from "../components/ATLAW/LeadershipStorySection";
import { SelectedMattersSection } from "../components/ATLAW/SelectedMattersSection";
import { RepresentativeMattersSection } from "../components/ATLAW/RepresentativeMattersSection";
import { FeaturedInsights } from "../components/ATLAW/FeaturedInsights";
import { BrandPillarsSection } from "../components/ATLAW/BrandPillarsSection";
import { Footer } from "../components/ATLAW/Footer";

export const ATLAWLandingPage = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-ivory text-ink [zoom:1.12]">
      <Header />
      <main>
        <Hero />
        <TrustBandSection />
        <PracticePillarsSection />
        <AtlawThesisSection />
        <HealthcareSpotlightSection />
        <GlobalReach />
        <HowWeWorkSection />
        <LeadershipStorySection />
        <SelectedMattersSection />
        <RepresentativeMattersSection />
        <FeaturedInsights />
        <BrandPillarsSection />
      </main>
      <Footer />
    </div>
  );
};
