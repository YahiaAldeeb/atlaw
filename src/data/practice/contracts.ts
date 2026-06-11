import type { AdvisoryCapabilityData } from "./types";

export const contractsData: AdvisoryCapabilityData = {
  idPrefix: "contracts",
  seoTitle: "Contracts | ATLAW Transactions",
  seoDescription:
    "Drafting, review, negotiation, and enforcement of business-critical agreements — so every deal you sign says exactly what you meant it to.",
  hero: {
    imageAvif: "/assets/contracts-hero.avif",
    imageFallback: "/assets/contracts-hero.jpg",
    imageAlt: "A pen resting on a signed agreement, evoking contract drafting and review",
    breadcrumb: "Contracts",
    markerNumber: "02",
    markerWord: "Build",
    title: "Contracts",
    tagline: "Know what you signed, and hold the other side to it.",
  },
  intro:
    "A contract is just a promise the law will enforce, but only if it says what you think it says. Most disputes do not come from bad faith. They come from a clause nobody read closely, a term that meant two different things to two parties, or a deal that was never written down at all. We draft the agreements you rely on, read the ones put in front of you before you sign, and step in when the other side stops holding up their end.",
  howWeWork:
    "We start by asking what you actually want the agreement to do, then write it so a stranger reading it in two years would reach the same conclusion you did today. When you are the one being handed a contract, we go through it line by line, flag the terms that quietly shift risk onto you, and tell you which ones are worth pushing back on. If a deal goes wrong, we already understand the document and can move straight to enforcing it or defending you under it. Good contract work is mostly about being clear now so you are not arguing about it later.",
  servicesHeading: "What we handle",
  serviceGroups: [
    {
      title: "Drafting and building agreements",
      body: "A contract written from a generic template tends to protect whoever wrote the template, not you. We draft agreements around your actual deal, your risks, and the outcome you are after, so the document works in your favor when it matters.",
      items: [
        "Custom contract drafting",
        "Reusable templates and form agreements",
        "Terms of service and privacy policies",
        "Statements of work and service agreements",
        "Amendments and addenda",
      ],
    },
    {
      title: "Review and negotiation",
      body: "Before you sign, someone should read the contract on your side and understand what it commits you to. We review the terms, mark up what needs to change, and negotiate the points that carry the most risk or money.",
      items: [
        "Contract review and risk analysis",
        "Redlining and revisions",
        "Term negotiation",
        "Plain-language summaries of key obligations",
        "Renewal and termination clause review",
      ],
    },
    {
      title: "Common business agreements",
      body: "Most companies sign the same handful of contracts over and over. We handle the ones you use most, so the language is consistent and the protections are actually there.",
      items: [
        "Vendor, supplier, and service contracts",
        "Employment and independent contractor agreements",
        "Nondisclosure and confidentiality agreements",
        "Licensing and intellectual property agreements",
        "Commercial leases and purchase agreements",
      ],
    },
    {
      title: "Enforcement and disputes",
      body: "When the other side misses a payment, walks away, or breaks a term, the contract decides what you can do about it. We enforce the agreements you hold and defend you against claims under the ones you have signed.",
      items: [
        "Breach of contract claims",
        "Demand letters and enforcement",
        "Contract termination and exit strategy",
        "Negotiation, mediation, and litigation",
        "Defense against contract claims",
      ],
    },
  ],
  cta: { lead: "Need Help? We’re Here", accent: "!" },
};
