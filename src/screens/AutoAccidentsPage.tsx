import { useEffect } from "react";
import { Header } from "../components/ATLAW/Header";
import { Footer } from "../components/ATLAW/Footer";
import { PracticeAreaDetailTemplate } from "../components/ATLAW/PracticeAreaDetailTemplate";
import { autoAccidentsData } from "../data/practice/pi/auto-accidents";
import "./PersonalInjury.css";

export const AutoAccidentsPage = (): JSX.Element => {
  useEffect(() => {
    document.title = autoAccidentsData.seoTitle;
    document.querySelector('meta[name="description"]')?.setAttribute("content", autoAccidentsData.seoDescription);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <Header />
      <main className="flex-1">
        <PracticeAreaDetailTemplate data={autoAccidentsData} />
      </main>
      <Footer />
    </div>
  );
};
