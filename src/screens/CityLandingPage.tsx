import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Header } from "../components/ATLAW/Header";
import { Footer } from "../components/ATLAW/Footer";
import { PageMeta } from "../components/ATLAW/PageMeta";
import { CityLandingTemplate } from "../components/ATLAW/CityLandingTemplate";
import { practiceAreaBySlug } from "../data/practice/pi";
import { cityBySlug } from "../data/cities";
import { cityPracticeSchema } from "../data/schema-org";
import "./PersonalInjury.css";

export const CityLandingPage = (): JSX.Element => {
  const { practice, city } = useParams<{ practice: string; city: string }>();

  const practiceData = practice ? practiceAreaBySlug[practice] : undefined;
  const cityData = city ? cityBySlug(city) : undefined;

  useEffect(() => { window.scrollTo(0, 0); }, [practiceData, cityData]);

  if (!practiceData || !cityData) {
    return <Navigate to="/personal-injury" replace />;
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <PageMeta
        title={`${practiceData.title} Lawyer in ${cityData.name} | ATLAW`}
        description={`Injured in ${cityData.name}? ATLAW handles ${practiceData.title.toLowerCase()} claims in ${cityData.name} and ${cityData.county}. No fee unless we win. Free case review.`}
        canonical={`/personal-injury/${practiceData.slug}/${cityData.slug}`}
        schema={cityPracticeSchema(practiceData.title, `${practiceData.title} Legal Representation`, cityData.name)}
      />
      <Header />
      <main className="flex-1">
        <CityLandingTemplate practice={practiceData} city={cityData} />
      </main>
      <Footer />
    </div>
  );
};
