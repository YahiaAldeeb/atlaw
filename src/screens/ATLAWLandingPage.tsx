import { Header } from "../components/ATLAW/Header";
import { Hero } from "../components/ATLAW/Hero";
import { CapabilitiesSection } from "../components/ATLAW/CapabilitiesSection";
import { AboutDewnyaSection } from "../components/ATLAW/AboutDewnyaSection";
import { OneFirmSection } from "../components/ATLAW/OneFirmSection";
import { RecognitionSection } from "../components/ATLAW/RecognitionSection";
import { FinalCtaSection } from "../components/ATLAW/FinalCtaSection";
import { FirmStatementSection } from "../components/ATLAW/FirmStatementSection";
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

        {/* ── Visible separator between 05 Recognition and 06 Final CTA ──
            Both sections share the bone canvas, so this rule + gold dot gives them a clear break. */}
        <div aria-hidden="true" className="bg-[#FFFFFF] px-6 sm:px-10 lg:px-20">
          <div className="mx-auto flex w-full max-w-[1320px] items-center gap-4">
            <span className="h-[2px] flex-1 bg-gradient-to-r from-[#0B1F3A]/20 via-[#0B1F3A]/45 to-[#B88A2D]" />
            <span className="h-[10px] w-[10px] shrink-0 rounded-full bg-[#B88A2D] ring-2 ring-[#B88A2D]/25" />
            <span className="h-[2px] flex-1 bg-gradient-to-l from-[#0B1F3A]/20 via-[#0B1F3A]/45 to-[#B88A2D]" />
          </div>
        </div>

        <FinalCtaSection />
        <FirmStatementSection />
      </main>
      <Footer />
    </div>
  );
};
