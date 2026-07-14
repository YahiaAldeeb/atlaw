import { useEffect } from "react";
import { Header } from "../components/ATLAW/Header";
import { Footer } from "../components/ATLAW/Footer";
import { PageMeta } from "../components/ATLAW/PageMeta";
import { PracticeAreaDetailTemplate } from "../components/ATLAW/PracticeAreaDetailTemplate";
import { workersCompensationData } from "../data/practice/pi/workers-compensation";
import { practiceAreaSchema } from "../data/schema-org";
import "./PersonalInjury.css";

export const WorkersCompensationPage = (): JSX.Element => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <PageMeta
        title={workersCompensationData.seoTitle}
        description={workersCompensationData.seoDescription}
        canonical="/personal-injury/workers-compensation"
        schema={practiceAreaSchema(workersCompensationData.title, "Workers Compensation Legal Representation")}
      />
      <Header />
      <main id="main-content" className="flex-1">
        <PracticeAreaDetailTemplate data={workersCompensationData} />
      </main>
      <Footer />
    </div>
  );
};
