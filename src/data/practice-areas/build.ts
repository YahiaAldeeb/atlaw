import type { PracticeArea } from "./types";

export const buildPracticeAreas: PracticeArea[] = [
  {
    slug: "business-law",
    name: "Business Law",
    category: "BUILD",
    categoryNumber: "02",
    subtitle:
      "Practical legal guidance for companies, founders, investors, and growing organizations.",
    intro: [
      "Most legal work for a private company is invisible when it is done well. Operating agreements that match what the partners actually intend. Vendor contracts that allocate risk where it belongs. A cap table that does not surprise anyone at exit.",
      "We act as outside general counsel to closely held businesses and as deal counsel for transactions when one comes up. The retainer scales to whatever the company needs in a given quarter.",
    ],
    whatWeHandle: [
      "Entity formation, conversions, and reorganizations",
      "Operating agreements, shareholder agreements, and buy-sell terms",
      "Commercial contracts, supplier agreements, and customer terms",
      "Employment agreements, equity grants, and contractor classification",
      "Founder, partner, and minority-shareholder disputes",
    ],
    whenToCall: [
      "You are starting a venture and have not yet chosen an entity form.",
      "An existing operating agreement no longer matches how the partners actually behave.",
      "A partner is leaving, joining, or being bought out.",
      "You need an in-house lawyer's judgment without an in-house lawyer's overhead.",
    ],
    approach:
      "We sit with founders the way an experienced partner would: pragmatic, plain-spoken, and focused on what will hold up later, not just what closes today.",
    relatedSlugs: ["franchising", "m-and-a", "contracts", "intellectual-property"],
  },
  {
    slug: "franchising",
    name: "Franchising",
    category: "BUILD",
    categoryNumber: "02",
    subtitle:
      "Counsel for franchise formation, agreements, compliance, disputes, and expansion.",
    intro: [
      "Franchising is one of the most heavily regulated forms of business expansion in the United States. The FTC Franchise Rule, state registration regimes, and disclosure timing rules turn an otherwise ordinary transaction into a compliance exercise.",
      "We represent both sides: emerging franchisors building a system, and franchisees who want to know what they are actually buying before they sign.",
    ],
    whatWeHandle: [
      "Franchise Disclosure Document (FDD) preparation and updates",
      "State registration and renewal filings",
      "Franchise agreements, area development agreements, and master franchise structures",
      "Franchisee review and negotiation of FDDs and franchise agreements",
      "Franchise system disputes, terminations, and post-term enforcement",
    ],
    whenToCall: [
      "You are scaling a concept and a franchise model is being considered.",
      "You are about to sign an FDD and want it reviewed before the disclosure clock runs out.",
      "A franchisor has issued a notice of default or non-renewal.",
      "Your franchise system needs a 2026 FDD update.",
    ],
    approach:
      "We treat franchise work as a long-cycle relationship, not a one-off filing. The work continues after the system is registered — the disputes, the renewals, the system-wide changes that follow.",
    relatedSlugs: ["business-law", "m-and-a", "contracts", "civil-litigation"],
  },
  {
    slug: "m-and-a",
    name: "Mergers & Acquisitions",
    navLabel: "M&A",
    category: "BUILD",
    categoryNumber: "02",
    subtitle:
      "Transaction support for mergers, acquisitions, due diligence, and deal negotiation.",
    intro: [
      "Most M&A work happens in the gap between LOI and close. Diligence findings reshape price. Reps and warranties shift risk. Working-capital mechanics decide who actually wins the deal at the closing table.",
      "We represent founders selling closely held businesses, buyers acquiring them, and the lenders or investors who fund the work. The engagement is built around the deal, not around a billable target.",
    ],
    whatWeHandle: [
      "Stock and asset purchase agreements",
      "Letters of intent, term sheets, and exclusivity periods",
      "Legal and contractual due diligence",
      "Reps & warranties, indemnification, escrow, and earn-out terms",
      "Post-closing integration, transition services, and dispute resolution",
    ],
    whenToCall: [
      "A buyer has approached you about your business and an LOI is being drafted.",
      "You are acquiring a competitor and need diligence run quickly.",
      "An earn-out or working-capital true-up is in dispute after closing.",
      "Your investors require deal counsel separate from your day-to-day corporate lawyer.",
    ],
    approach:
      "Deals close because the lawyers anticipate the next move, not the current one. We staff lean, communicate directly with principals, and avoid the document tennis that drags closings.",
    relatedSlugs: ["business-law", "franchising", "securities", "contracts"],
  },
  {
    slug: "securities",
    name: "Securities",
    category: "BUILD",
    categoryNumber: "02",
    subtitle:
      "Legal guidance for securities compliance, investment matters, and regulatory obligations.",
    intro: [
      "Raising capital is a securities-law event whether the parties think of it that way or not. A friends-and-family round, a SAFE, a convertible note, a fund close — each carries federal and state filing obligations.",
      "We handle private capital-raising work for operating companies, sponsors, and funds, with an emphasis on getting the structure right before the first dollar moves.",
    ],
    whatWeHandle: [
      "Regulation D Rule 506(b) and 506(c) private placements",
      "SAFEs, convertible notes, and priced equity rounds",
      "Fund formation (PE, VC, real-estate, and SPV structures)",
      "Investor questionnaires, accreditation verification, and bad-actor diligence",
      "Form D filings and state blue-sky compliance",
    ],
    whenToCall: [
      "You are raising outside capital for the first time.",
      "A sponsor is forming a fund or SPV and needs formation counsel.",
      "A 506(c) offering is being publicly marketed and verification is required.",
      "A state regulator has sent a notice about a prior raise.",
    ],
    approach:
      "Capital-raising work is unforgiving — small drafting mistakes become recission risk years later. We document everything carefully and keep the offering file clean for the life of the company.",
    relatedSlugs: ["business-law", "m-and-a", "contracts"],
  },
  {
    slug: "contracts",
    name: "Contracts",
    category: "BUILD",
    categoryNumber: "02",
    subtitle:
      "Drafting, review, negotiation, and enforcement of business-critical agreements.",
    intro: [
      "A contract is a forecast of the dispute it is trying to prevent. The clauses that matter most — limitations of liability, indemnification, termination, IP ownership — are the ones that look identical across deals but read very differently when something goes wrong.",
      "We draft, redline, and negotiate commercial agreements as a regular line of work for our corporate clients and on a project basis for companies without in-house counsel.",
    ],
    whatWeHandle: [
      "Master services agreements, SOWs, and consulting agreements",
      "Supply, distribution, reseller, and channel-partner contracts",
      "Software, SaaS, and licensing agreements",
      "NDAs, non-compete, and non-solicitation agreements",
      "Vendor contract reviews and counter-redlines",
    ],
    whenToCall: [
      "A counter-party has sent a contract for signature and you want a real review, not a rubber stamp.",
      "Your standard form has not been updated in years and is starting to lose negotiations.",
      "You need a redline turned around quickly to keep a deal on schedule.",
      "An indemnification or liability clause is the only thing standing between signature and the next quarter.",
    ],
    approach:
      "We negotiate from a position of knowing what the market will actually accept — not a maximalist position that wastes both sides' time.",
    relatedSlugs: ["business-law", "m-and-a", "franchising", "intellectual-property"],
  },
  {
    slug: "intellectual-property",
    name: "Intellectual Property",
    category: "BUILD",
    categoryNumber: "02",
    subtitle:
      "Protection and enforcement strategies for brands, creative assets, and business ideas.",
    intro: [
      "Most early IP value sits in a few assets — a brand name, a piece of code, a customer list — that nobody has registered, documented, or assigned to the company. That gap is fixable, but it is much cheaper to fix early than after a dispute.",
      "We handle the trademark portfolio work, the IP-assignment hygiene, and the licensing agreements that determine who actually owns what when a company is sold.",
    ],
    whatWeHandle: [
      "U.S. trademark clearance, registration, and portfolio management",
      "Trademark opposition and cancellation proceedings before the TTAB",
      "Copyright registration and DMCA enforcement",
      "Trade-secret protection, including agreements and litigation",
      "Inbound and outbound IP licensing and assignment",
    ],
    whenToCall: [
      "You are launching a brand and want clearance before product hits the market.",
      "An infringer is using your mark or your content and a takedown is not enough.",
      "A buyer's diligence has flagged that contractor work was never assigned to the company.",
      "A former employee left with trade-secret material.",
    ],
    approach:
      "IP work pays off years later. We document early, register strategically, and avoid the over-filing that runs up cost without protecting value.",
    relatedSlugs: ["business-law", "contracts", "m-and-a", "civil-litigation"],
  },
];
