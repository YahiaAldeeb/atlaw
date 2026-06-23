import { useEffect } from "react";
import { Header } from "../components/ATLAW/Header";
import { Footer } from "../components/ATLAW/Footer";
import { PageMeta } from "../components/ATLAW/PageMeta";
import { PracticeAreaDetailTemplate } from "../components/ATLAW/PracticeAreaDetailTemplate";
import { medicalMalpracticeData } from "../data/practice/pi/medical-malpractice";
import { practiceAreaSchema } from "../data/schema-org";
import "./PersonalInjury.css";

export const MedicalMalpracticePage = (): JSX.Element => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <PageMeta
        title={medicalMalpracticeData.seoTitle}
        description={medicalMalpracticeData.seoDescription}
        canonical="/personal-injury/medical-malpractice"
        schema={practiceAreaSchema(medicalMalpracticeData.title, "Medical Malpractice Legal Representation")}
      />
      <Header />
      <main className="flex-1">
        <PracticeAreaDetailTemplate data={medicalMalpracticeData} />
      </main>
      <Footer />
    </div>
  );
};
