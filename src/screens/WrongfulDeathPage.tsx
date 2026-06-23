import { useEffect } from "react";
import { Header } from "../components/ATLAW/Header";
import { Footer } from "../components/ATLAW/Footer";
import { PageMeta } from "../components/ATLAW/PageMeta";
import { PracticeAreaDetailTemplate } from "../components/ATLAW/PracticeAreaDetailTemplate";
import { wrongfulDeathData } from "../data/practice/pi/wrongful-death";
import { practiceAreaSchema } from "../data/schema-org";
import "./PersonalInjury.css";

export const WrongfulDeathPage = (): JSX.Element => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <PageMeta
        title={wrongfulDeathData.seoTitle}
        description={wrongfulDeathData.seoDescription}
        canonical="/personal-injury/wrongful-death"
        schema={practiceAreaSchema(wrongfulDeathData.title, "Wrongful Death Legal Representation")}
      />
      <Header />
      <main className="flex-1">
        <PracticeAreaDetailTemplate data={wrongfulDeathData} />
      </main>
      <Footer />
    </div>
  );
};
