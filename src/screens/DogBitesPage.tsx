import { useEffect } from "react";
import { Header } from "../components/ATLAW/Header";
import { Footer } from "../components/ATLAW/Footer";
import { PageMeta } from "../components/ATLAW/PageMeta";
import { PracticeAreaDetailTemplate } from "../components/ATLAW/PracticeAreaDetailTemplate";
import { dogBitesData } from "../data/practice/pi/dog-bites";
import { practiceAreaSchema } from "../data/schema-org";
import "./PersonalInjury.css";

export const DogBitesPage = (): JSX.Element => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <PageMeta
        title={dogBitesData.seoTitle}
        description={dogBitesData.seoDescription}
        canonical="/personal-injury/dog-bites"
        schema={practiceAreaSchema(dogBitesData.title, "Dog Bite Legal Representation")}
      />
      <Header />
      <main id="main-content" className="flex-1">
        <PracticeAreaDetailTemplate data={dogBitesData} />
      </main>
      <Footer />
    </div>
  );
};
