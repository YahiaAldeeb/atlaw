import type { AdvisoryCapabilityData } from "./types";

export const businessLawData: AdvisoryCapabilityData = {
  idPrefix: "bl",
  seoTitle: "Business Law | ATLAW Advisory",
  seoDescription:
    "ATLAW handles the legal side of running a company — from forming the business and writing the contracts to financing, deals, and disputes.",
  hero: {
    imageAvif: "/assets/business-law-hero.avif",
    imageFallback: "/assets/business-law-hero.jpg",
    imageAlt: "Business Law and corporate legal services",
    breadcrumb: "Business Law",
    markerNumber: "02",
    markerWord: "Build",
    title: "Business Law",
    tagline: "The legal backbone behind a company that wants to last.",
  },
  intro:
    "Every company runs on agreements, whether or not anyone wrote them down. Who owns what. Who gets paid, and when. What happens if a partner leaves or a deal goes bad. Business law is how those answers get put in writing before they turn into arguments. We work with founders, owners, and management teams to set the company up correctly, keep the paperwork clean as it grows, and step in when a contract or a partner becomes a problem.",
  howWeWork:
    "Good legal work for a business is mostly quiet. It is the operating agreement that settles a fight before it starts, the contract that says exactly who is liable, the structure that keeps your personal assets out of reach when something goes wrong. We handle that groundwork, and we handle the bigger moments too: raising money, buying or selling a company, bringing on a partner, closing a location. When a dispute does land, we negotiate first and litigate when we have to. The goal is the same either way — protect what you have built and keep the business moving.",
  servicesHeading: "What we handle",
  serviceGroups: [
    {
      title: "Starting and structuring a business",
      body: "The choices you make at the start follow you for years: how the company is taxed, who is personally on the hook, how decisions get made, what happens when an owner wants out. We help you pick the right structure and put the founding documents in place so the rules are clear from day one.",
      items: [
        "Entity formation (LLC, corporation, partnership)",
        "Founders and partnership agreements",
        "Operating agreements and bylaws",
        "Equity splits and ownership terms",
        "Licenses and regulatory registration",
      ],
    },
    {
      title: "Contracts and everyday operations",
      body: "Most business problems trace back to a contract that was vague, one-sided, or never signed. We draft and review the agreements you sign all the time, so you know what you are agreeing to and what you can hold the other side to.",
      items: [
        "Commercial contract drafting and review",
        "Vendor, supplier, and service agreements",
        "Employment agreements and contractor terms",
        "Nondisclosure and non-compete agreements",
        "Commercial leases",
      ],
    },
    {
      title: "Growth, deals, and financing",
      body: "At some point the question stops being how to run the company and becomes how to grow it or hand it off. Raising capital, taking on a partner, buying a competitor, selling the whole thing — each one is a transaction with real legal weight, and the terms decide who comes out ahead.",
      items: [
        "Mergers and acquisitions",
        "Buying and selling a business",
        "Financing and capital raises",
        "Joint ventures and strategic partnerships",
        "Shareholder and investor agreements",
      ],
    },
    {
      title: "Compliance, disputes, and exits",
      body: "Running a company means staying on the right side of rules that keep changing, and dealing with the day a partner, customer, or regulator pushes back. We keep you compliant, resolve the disputes that come up, and handle the exit when it is time to wind down or move on.",
      items: [
        "Corporate governance and compliance",
        "Contract and partnership disputes",
        "Negotiation, mediation, and litigation",
        "Business dissolution and succession planning",
      ],
    },
  ],
  cta: { lead: "Need Help? We’re Here", accent: "!" },
};
