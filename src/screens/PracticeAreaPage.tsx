import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Header } from "../components/ATLAW/Header";
import { ServiceAreas } from "../components/ATLAW/ServiceAreas";
import { Footer } from "../components/ATLAW/Footer";
import { practiceAreasBySlug } from "../data/practiceAreas";
import {
  Approach,
  Hero,
  Intro,
  RelatedAreas,
  WhatWeHandle,
  WhenToCall,
} from "./practice/PracticeAreaSections";

export const PracticeAreaPage = (): JSX.Element => {
  const { slug } = useParams<{ slug: string }>();
  const area = slug ? practiceAreasBySlug[slug] : undefined;

  useEffect(() => {
    if (!area) return;
    document.title = `${area.name} — ATLAW Group`;
    // SEO: meta description
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = area.subtitle;

    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [area]);

  if (!area) {
    return <Navigate replace to="/practice-areas" />;
  }

  return (
    <div className="min-h-screen bg-ivory text-ink">
      <Header />
      <main>
        <Hero area={area} />
        <Intro area={area} />
        <WhatWeHandle area={area} />
        <WhenToCall area={area} />
        <Approach area={area} />
        <RelatedAreas area={area} />
        <ServiceAreas />
      </main>
      <Footer />
    </div>
  );
};
