import { Header } from "../components/ATLAW/Header";
import { Hero } from "../components/ATLAW/Hero";
import { CapabilitiesSection } from "../components/ATLAW/CapabilitiesSection";
import { AboutDewnyaSection } from "../components/ATLAW/AboutDewnyaSection";
import { OneFirmSection } from "../components/ATLAW/OneFirmSection";
import { RecognitionSection } from "../components/ATLAW/RecognitionSection";
import { FinalCtaSection } from "../components/ATLAW/FinalCtaSection";
import { FirmStatementSection } from "../components/ATLAW/FirmStatementSection";
import { ServiceAreas } from "../components/ATLAW/ServiceAreas";
import { Footer } from "../components/ATLAW/Footer";

export const ATLAWLandingPage = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-ivory text-ink [zoom:1.12]">
      <Header />
      <main>
        <Hero />
        <CapabilitiesSection />
        <AboutDewnyaSection />
        <OneFirmSection />
        <RecognitionSection />
        <FinalCtaSection />
        <FirmStatementSection />
        <ServiceAreas />
      </main>
      <Footer />
    </div>
  );
};
