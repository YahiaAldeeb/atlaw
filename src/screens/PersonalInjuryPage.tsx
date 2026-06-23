import { useEffect } from "react";
import { Header } from "../components/ATLAW/Header";
import { Footer } from "../components/ATLAW/Footer";
import { PracticeAreaDetailTemplate } from "../components/ATLAW/PracticeAreaDetailTemplate";
import { personalInjuryData } from "../data/practice/pi/personal-injury";
import "./PersonalInjury.css";

export const PersonalInjuryPage = (): JSX.Element => {
  useEffect(() => {
    document.title = personalInjuryData.seoTitle;
    document.querySelector('meta[name="description"]')?.setAttribute("content", personalInjuryData.seoDescription);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <Header />
      <main className="flex-1">
        <PracticeAreaDetailTemplate data={personalInjuryData} />
      </main>
      <Footer />
    </div>
  );
};
