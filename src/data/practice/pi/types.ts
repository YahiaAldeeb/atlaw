export interface PracticeAreaPI {
  slug: string;
  title: string;
  heroTitle: string;
  tagline: string;
  seoTitle: string;
  seoDescription: string;
  overview: string[];
  whyChooseUs: string[];
  caseResults: {
    name: string;
    initials: string;
    caseType: string;
    insuranceOffer: number;
    recovered: number;
  }[];
  steps: {
    number: number;
    title: string;
    description: string;
  }[];
  michiganLaw: {
    heading: string;
    paragraphs: string[];
  }[];
  testimonials: {
    quote: string;
    name: string;
    initials: string;
    date: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedAreas: {
    slug: string;
    title: string;
  }[];
  relatedCases: {
    amount: number;
    caseType: string;
    county: string;
  }[];
  resources: {
    title: string;
    href: string;
  }[];
  keywords: string[];
  cities: string[];
}
