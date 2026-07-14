import { useEffect } from "react";
import { Header } from "../components/ATLAW/Header";
import { Footer } from "../components/ATLAW/Footer";
import { PageMeta } from "../components/ATLAW/PageMeta";
import { PracticeAreaDetailTemplate } from "../components/ATLAW/PracticeAreaDetailTemplate";
import { autoAccidentsData } from "../data/practice/pi/auto-accidents";
import { practiceAreaSchema } from "../data/schema-org";
import "./PersonalInjury.css";

export const AutoAccidentsPage = (): JSX.Element => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <PageMeta
        title={autoAccidentsData.seoTitle}
        description={autoAccidentsData.seoDescription}
        canonical="/personal-injury/auto-accidents"
        schema={practiceAreaSchema(autoAccidentsData.title, "Auto Accident Legal Representation")}
      />
      <Header />
      <main id="main-content" className="flex-1">
        <PracticeAreaDetailTemplate data={autoAccidentsData} />
      </main>
      <Footer />
    </div>
  );
};
