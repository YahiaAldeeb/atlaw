import { useEffect } from "react";
import { Header } from "../components/ATLAW/Header";
import { Footer } from "../components/ATLAW/Footer";
import { PageMeta } from "../components/ATLAW/PageMeta";
import { PracticeAreaDetailTemplate } from "../components/ATLAW/PracticeAreaDetailTemplate";
import { personalInjuryData } from "../data/practice/pi/personal-injury";
import { practiceAreaSchema } from "../data/schema-org";
import "./PersonalInjury.css";

export const PersonalInjuryPage = (): JSX.Element => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <PageMeta
        title={personalInjuryData.seoTitle}
        description={personalInjuryData.seoDescription}
        canonical="/personal-injury"
        schema={practiceAreaSchema(personalInjuryData.title, "Personal Injury Legal Representation")}
      />
      <Header />
      <main className="flex-1">
        <PracticeAreaDetailTemplate data={personalInjuryData} />
      </main>
      <Footer />
    </div>
  );
};
