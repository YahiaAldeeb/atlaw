import type { AdvisoryCapabilityData } from "./types";

export const securitiesData: AdvisoryCapabilityData = {
  idPrefix: "securities",
  seoTitle: "Securities | ATLAW Transactions",
  seoDescription:
    "Legal guidance for securities compliance, investment matters, and regulatory obligations — from raising capital to SEC and FINRA enforcement defense.",
  hero: {
    imageAvif: "/assets/securities-hero.avif",
    imageFallback: "/assets/securities-hero.jpg",
    imageAlt: "A financial-district skyline at dusk, evoking capital markets and securities work",
    breadcrumb: "Securities",
    markerNumber: "02",
    markerWord: "Build",
    title: "Securities",
    tagline: "Raise capital, stay compliant, and answer regulators with confidence.",
  },
  intro:
    "Securities law governs how money is raised and how investments are bought and sold, and it is unforgiving about the details. A line missing from a disclosure, a filing made a few days late, an offering sold to the wrong kind of investor — any of these can turn a routine capital raise into an enforcement action. We advise companies, funds, and investors on how to raise money the right way, keep up with the rules once the money is in, and respond when the SEC, FINRA, or a state regulator comes asking questions.",
  howWeWork:
    "Most of what we do here is preventive. We structure offerings to fit a clear exemption or registration path, write the disclosures so investors get what the law requires, and keep your reporting current so nothing falls through the cracks. When a problem does arrive — an investigation, a subpoena, an investor claim — we already know your file and can answer fast. We work with private companies raising their first outside money, funds bringing on investors, and people who suddenly have a regulator on the phone.",
  servicesHeading: "What we handle",
  serviceGroups: [
    {
      title: "Raising capital and offerings",
      body: "Every dollar raised from investors comes with rules about how you can ask and what you have to tell them. We map the offering to the right exemption or registration, prepare the paperwork, and keep the raise inside the lines so it does not come back to haunt you.",
      items: [
        "Private placements and Regulation D offerings",
        "Public offerings and registration statements",
        "Exemption analysis (Reg A, Reg S, crowdfunding)",
        "Private placement memoranda and subscription documents",
        "Convertible notes and SAFE agreements",
      ],
    },
    {
      title: "Compliance and regulatory filings",
      body: "The obligations do not end when the money arrives. We keep your filings, disclosures, and registrations current, and we set up the internal policies that keep you compliant before a regulator ever asks to see them.",
      items: [
        "Securities registration and exemption filings",
        "Ongoing reporting and disclosure obligations",
        "Broker-dealer and investment adviser registration",
        "Insider trading and trading-window policies",
        "Corporate governance and securities compliance",
      ],
    },
    {
      title: "Funds and investment vehicles",
      body: "Pooling other people's money to invest carries its own layer of rules. We form the fund, draft the documents that govern it, and keep the manager on the right side of the regulations that follow the structure.",
      items: [
        "Investment fund formation",
        "Private equity and venture capital fund structuring",
        "Fund offering and governing documents",
        "Investment adviser compliance",
        "Investor and limited partner agreements",
      ],
    },
    {
      title: "Enforcement, investigations, and disputes",
      body: "When a regulator or an investor pushes, the early moves matter most. We respond to investigations, defend enforcement actions, and handle the disputes that come out of a deal gone wrong — on either side.",
      items: [
        "SEC and FINRA investigations",
        "Enforcement action defense",
        "Securities fraud and misrepresentation claims",
        "Regulatory inquiries and subpoenas",
        "Shareholder and investor disputes",
      ],
    },
  ],
  cta: { lead: "Need Help? We’re Here", accent: "!" },
};
