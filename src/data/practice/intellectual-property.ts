import type { AdvisoryCapabilityData } from "./types";

export const intellectualPropertyData: AdvisoryCapabilityData = {
  idPrefix: "ip",
  seoTitle: "Intellectual Property | ATLAW Advisory",
  seoDescription:
    "Protection and enforcement strategies for brands, creative assets, and business ideas — trademarks, patents, copyrights, and the disputes that follow.",
  hero: {
    imageAvif: "/assets/intellectual-property-hero.avif",
    imageFallback: "/assets/intellectual-property-hero.jpg",
    imageAlt:
      "A glowing lightbulb abstraction, evoking original ideas, invention, and protected creative work",
    breadcrumb: "Intellectual Property",
    markerNumber: "02",
    markerWord: "Build",
    title: "Intellectual Property",
    tagline: "Own what you create, and stop others from taking it.",
  },
  intro:
    "For a lot of companies, the most valuable thing they own is not on the balance sheet. It is the brand name customers recognize, the product nobody else has figured out, the code or the design or the process that makes the business worth copying. Intellectual property law is how you turn that into something you actually own and can defend. We help you secure your rights early, before someone else files first, and we go after the people who use your work without asking.",
  howWeWork:
    "The cheapest time to protect an idea is before it becomes valuable enough to steal. We start by figuring out what you have and what is worth protecting, then file the trademarks, patents, and copyrights that lock it down. We also write the agreements that keep your IP from leaking out through employees, contractors, and partners. When someone crosses the line — copies your brand, knocks off your product, walks out with your trade secrets — we send the letter, file the claim, or take it to court. Registration is the foundation, but a right you will not enforce is not worth much.",
  servicesHeading: "What we handle",
  serviceGroups: [
    {
      title: "Trademarks and brand protection",
      body: "Your name and logo are how customers find you, which is exactly why they are worth protecting. We clear the mark before you commit to it, register it, and keep watch so no one else trades on your reputation.",
      items: [
        "Trademark clearance searches",
        "Trademark registration and prosecution",
        "Brand and logo protection",
        "Trademark monitoring and renewals",
        "Domain name and online brand disputes",
      ],
    },
    {
      title: "Patents and inventions",
      body: "A patent turns an invention into a right you can hold, license, or enforce. We assess whether your idea is patentable and handle the application process from filing through to grant.",
      items: [
        "Patentability assessment",
        "Patent application drafting and filing",
        "Patent prosecution",
        "Utility and design patents",
        "Invention and inventor agreements",
      ],
    },
    {
      title: "Copyrights and creative work",
      body: "If you made it — the writing, the art, the software, the music — copyright protects it, and registration makes that protection enforceable. We register your work and structure how others are allowed to use it.",
      items: [
        "Copyright registration",
        "Software and code protection",
        "Content and media licensing",
        "Work-for-hire and assignment agreements",
        "Fair use and infringement analysis",
      ],
    },
    {
      title: "Licensing, trade secrets, and enforcement",
      body: "Most IP makes money when you let someone else use it on your terms, and most IP gets lost when nobody guards it. We draft the licenses and protections, and we enforce your rights when they are crossed.",
      items: [
        "Licensing and royalty agreements",
        "Trade secret protection and NDAs",
        "Technology transfer agreements",
        "Infringement claims and cease-and-desist letters",
        "IP litigation and dispute resolution",
      ],
    },
  ],
  cta: { lead: "Need Help? We’re Here", accent: "!" },
};
