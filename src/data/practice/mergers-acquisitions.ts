import type { AdvisoryCapabilityData } from "./types";

export const mergersAcquisitionsData: AdvisoryCapabilityData = {
  idPrefix: "ma",
  seoTitle: "Mergers & Acquisitions | ATLAW Transactions",
  seoDescription:
    "ATLAW guides buyers and sellers through the whole deal — diligence, structure, negotiation, and closing — so the transaction holds up long after the ink dries.",
  hero: {
    imageAvif: "/assets/m-and-a-hero.avif",
    imageFallback: "/assets/m-and-a-hero.jpg",
    imageAlt: "Two parties shaking hands across a table over a signed acquisition agreement",
    breadcrumb: "Mergers & Acquisitions",
    markerNumber: "02",
    markerWord: "Build",
    title: "Mergers & Acquisitions",
    tagline: "Buy well, sell well, and close without surprises.",
  },
  intro:
    "A merger or acquisition is one of the largest moves a company ever makes, and the price on the term sheet is rarely the part that decides whether it was a good one. What decides it is everything underneath: what you are actually buying, what liabilities ride along with it, who is on the hook if the numbers turn out to be wrong, and what each side is bound to do after the deal closes. We represent buyers and sellers through that entire process, from the first conversation to the day the money moves and well past it.",
  howWeWork:
    "We run diligence to find what the other side would rather you not notice, and we build it into the price and the protections instead of letting it surface after closing. We structure the deal — asset or stock, the tax consequences, how the payment is staged — so it works the way you intended. Then we draft and negotiate the agreements that hold all of it together, and we manage the closing so nothing slips. Most deals come down to a handful of terms that matter far more than the rest. Our job is to know which ones those are and to win them for you.",
  servicesHeading: "What we handle",
  serviceGroups: [
    {
      title: "Buying a company",
      body: "The risk in an acquisition is mostly hidden, which is the whole point of doing this carefully. We dig into the target’s contracts, finances, liabilities, and legal exposure, then turn what we find into leverage — a lower price, stronger warranties, or money held back until the seller’s promises prove out.",
      items: [
        "Due diligence and risk assessment",
        "Letters of intent and term sheets",
        "Purchase agreement drafting and negotiation",
        "Representations, warranties, and indemnification",
        "Escrow, holdback, and earnout terms",
      ],
    },
    {
      title: "Selling a company",
      body: "Selling well starts long before a buyer shows up. We help you get the company in order, control the information that goes out, and negotiate terms that protect you after you have handed over the keys, so the sale price is not quietly clawed back later.",
      items: [
        "Exit and sale readiness",
        "Deal marketing support and confidentiality agreements",
        "Negotiating sale terms and price protections",
        "Seller disclosures and liability limits",
        "Transition and non-compete arrangements",
      ],
    },
    {
      title: "Structuring and financing the deal",
      body: "How a deal is built decides how it is taxed, who carries which risks, and what happens if part of it goes wrong. We pick the structure that fits your goals and wire in the financing, whether the payment is cash, stock, debt, or a mix that pays out over time.",
      items: [
        "Asset vs. stock purchase structuring",
        "Tax-efficient deal planning",
        "Acquisition financing and debt arrangements",
        "Joint ventures and strategic combinations",
        "Cross-border and multi-entity transactions",
      ],
    },
    {
      title: "Closing and after the deal",
      body: "Signing is not the finish line. We coordinate the closing, clear the regulatory and approval conditions, and handle what comes next — the integration steps, the post-closing adjustments, and the disputes that surface when reality does not match the spreadsheet.",
      items: [
        "Closing coordination and conditions",
        "Regulatory and antitrust clearance",
        "Post-closing adjustments and integration",
        "Earnout and purchase-price disputes",
        "Successor liability and indemnity claims",
      ],
    },
  ],
  cta: { lead: "Need Help? We’re Here", accent: "!" },
};
