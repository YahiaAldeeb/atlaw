import { useEffect } from "react";
import { Header } from "../components/ATLAW/Header";
import { Footer } from "../components/ATLAW/Footer";
import { PracticeAreaDetailTemplate } from "../components/ATLAW/PracticeAreaDetailTemplate";
import { wrongfulDeathData } from "../data/practice/pi/wrongful-death";
import "./PersonalInjury.css";

export const WrongfulDeathPage = (): JSX.Element => {
  useEffect(() => {
    document.title = wrongfulDeathData.seoTitle;
    document.querySelector('meta[name="description"]')?.setAttribute("content", wrongfulDeathData.seoDescription);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <Header />
      <main className="flex-1">
        <PracticeAreaDetailTemplate data={wrongfulDeathData} />
      </main>
      <Footer />
    </div>
  );
};
