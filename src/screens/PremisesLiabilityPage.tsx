import { useEffect } from "react";
import { Header } from "../components/ATLAW/Header";
import { Footer } from "../components/ATLAW/Footer";
import { PageMeta } from "../components/ATLAW/PageMeta";
import { PracticeAreaDetailTemplate } from "../components/ATLAW/PracticeAreaDetailTemplate";
import { premisesLiabilityData } from "../data/practice/pi/premises-liability";
import { practiceAreaSchema } from "../data/schema-org";
import "./PersonalInjury.css";

export const PremisesLiabilityPage = (): JSX.Element => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <PageMeta
        title={premisesLiabilityData.seoTitle}
        description={premisesLiabilityData.seoDescription}
        canonical="/personal-injury/premises-liability"
        schema={practiceAreaSchema(premisesLiabilityData.title, "Premises Liability Legal Representation")}
      />
      <Header />
      <main id="main-content" className="flex-1">
        <PracticeAreaDetailTemplate data={premisesLiabilityData} />
      </main>
      <Footer />
    </div>
  );
};
