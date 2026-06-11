import type { AdvisoryCapabilityData } from "./types";

export const franchisingData: AdvisoryCapabilityData = {
  idPrefix: "fr",
  seoTitle: "Franchising | ATLAW Advisory",
  seoDescription:
    "ATLAW helps founders franchise their business and helps buyers invest in one — from disclosure documents and registration to multi-unit growth and franchise disputes.",
  hero: {
    imageAvif: "/assets/franchising-hero.avif",
    imageFallback: "/assets/franchising-hero.jpg",
    imageAlt: "Franchising and multi-location business growth",
    breadcrumb: "Franchising",
    markerNumber: "02",
    markerWord: "Build",
    title: "Franchising",
    tagline: "Build a brand that can travel — or buy into one that already does.",
  },
  intro:
    "Franchising is how a business grows by lending out its name and its system instead of opening every location itself. The franchisor owns the brand and the playbook. The franchisee pays to run a location under that brand and agrees to follow the rules that come with it. Set up well, both sides make money for years. Set up badly, you get lawsuits, regulators, and a brand nobody trusts. We handle the legal side so the system you build, or buy into, actually holds together.",
  howWeWork:
    "The paperwork decides almost everything in a franchise: what you pay, what you are owed, who controls the brand, and what happens the day someone wants out. We write and review that paperwork, register it in the states that require registration, and keep you compliant with the FTC’s Franchise Rule. When a deal falls apart, we handle the negotiation, the arbitration, or the courtroom, whichever it comes to. We work on both sides — for founders turning one location into a system, and for buyers deciding whether a franchise is worth signing into.",
  servicesHeading: "What we handle",
  serviceGroups: [
    {
      title: "Building a franchise",
      body: "You cannot franchise a business on a handshake. Federal law makes you give every prospective buyer a Franchise Disclosure Document, and several states will not let you sell until you have registered it with them first. We prepare the FDD, draft the franchise agreement, and build a structure that keeps your brand and your standards intact as locations multiply.",
      items: [
        "Franchise Disclosure Documents (FDDs)",
        "Franchise agreements",
        "State registration and FTC Franchise Rule compliance",
        "Trademark and brand protection",
        "Operations manuals and system standards",
      ],
    },
    {
      title: "Buying a franchise",
      body: "A franchise agreement is a long contract the franchisor wrote to protect the franchisor. Before you sign your savings into it, you want someone reading it for your side. We go through the disclosure document, point out the terms that will cost you later, and negotiate the ones that can still be moved.",
      items: [
        "Disclosure document review and risk analysis",
        "Franchise agreement negotiation",
        "Lease and financing review",
        "Setting up your business entity",
      ],
    },
    {
      title: "Growing and scaling",
      body: "Once a system works, the question becomes how far it can travel. A multi-unit deal, an area development plan, a master franchise in another country — each one shifts both the economics and the legal risk. We structure these so your growth never gets ahead of your control over the brand.",
      items: [
        "Multi-unit and area development agreements",
        "Master franchise agreements",
        "International expansion",
        "Supplier and vendor contracts",
      ],
    },
    {
      title: "When things go wrong",
      body: "Most franchise relationships run their course quietly. Some end in a fight: an early termination, a refusal to renew, a new location that eats into someone’s territory, a claim that the disclosures left something out. We take these cases on either side of the table.",
      items: [
        "Termination and non-renewal disputes",
        "Territory and encroachment claims",
        "Disclosure and misrepresentation claims",
        "Mediation, arbitration, and litigation",
      ],
    },
  ],
  cta: { lead: "Need Help? We’re Here", accent: "!" },
};
