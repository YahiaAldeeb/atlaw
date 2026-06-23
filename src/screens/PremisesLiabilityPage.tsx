import { useEffect } from "react";
import { Header } from "../components/ATLAW/Header";
import { Footer } from "../components/ATLAW/Footer";
import { PracticeAreaDetailTemplate } from "../components/ATLAW/PracticeAreaDetailTemplate";
import { premisesLiabilityData } from "../data/practice/pi/premises-liability";
import "./PersonalInjury.css";

export const PremisesLiabilityPage = (): JSX.Element => {
  useEffect(() => {
    document.title = premisesLiabilityData.seoTitle;
    document.querySelector('meta[name="description"]')?.setAttribute("content", premisesLiabilityData.seoDescription);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <Header />
      <main className="flex-1">
        <PracticeAreaDetailTemplate data={premisesLiabilityData} />
      </main>
      <Footer />
    </div>
  );
};
