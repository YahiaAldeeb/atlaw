import { useEffect } from "react";
import { Header } from "../components/ATLAW/Header";
import { Footer } from "../components/ATLAW/Footer";
import { PracticeAreaDetailTemplate } from "../components/ATLAW/PracticeAreaDetailTemplate";
import { workersCompensationData } from "../data/practice/pi/workers-compensation";
import "./PersonalInjury.css";

export const WorkersCompensationPage = (): JSX.Element => {
  useEffect(() => {
    document.title = workersCompensationData.seoTitle;
    document.querySelector('meta[name="description"]')?.setAttribute("content", workersCompensationData.seoDescription);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <Header />
      <main className="flex-1">
        <PracticeAreaDetailTemplate data={workersCompensationData} />
      </main>
      <Footer />
    </div>
  );
};
