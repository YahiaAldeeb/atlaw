import { useEffect } from "react";
import { Header } from "../components/ATLAW/Header";
import { Footer } from "../components/ATLAW/Footer";
import { PracticeAreaDetailTemplate } from "../components/ATLAW/PracticeAreaDetailTemplate";
import { medicalMalpracticeData } from "../data/practice/pi/medical-malpractice";
import "./PersonalInjury.css";

export const MedicalMalpracticePage = (): JSX.Element => {
  useEffect(() => {
    document.title = medicalMalpracticeData.seoTitle;
    document.querySelector('meta[name="description"]')?.setAttribute("content", medicalMalpracticeData.seoDescription);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <Header />
      <main className="flex-1">
        <PracticeAreaDetailTemplate data={medicalMalpracticeData} />
      </main>
      <Footer />
    </div>
  );
};
