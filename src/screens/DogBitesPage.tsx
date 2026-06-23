import { useEffect } from "react";
import { Header } from "../components/ATLAW/Header";
import { Footer } from "../components/ATLAW/Footer";
import { PracticeAreaDetailTemplate } from "../components/ATLAW/PracticeAreaDetailTemplate";
import { dogBitesData } from "../data/practice/pi/dog-bites";
import "./PersonalInjury.css";

export const DogBitesPage = (): JSX.Element => {
  useEffect(() => {
    document.title = dogBitesData.seoTitle;
    document.querySelector('meta[name="description"]')?.setAttribute("content", dogBitesData.seoDescription);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <Header />
      <main className="flex-1">
        <PracticeAreaDetailTemplate data={dogBitesData} />
      </main>
      <Footer />
    </div>
  );
};
