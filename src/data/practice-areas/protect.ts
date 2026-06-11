import type { PracticeArea } from "./types";

export const protectPracticeAreas: PracticeArea[] = [
  {
    slug: "estate-planning",
    name: "Estate Planning",
    category: "PROTECT",
    categoryNumber: "03",
    subtitle:
      "Planning strategies that protect families, assets, legacies, and future decisions.",
    intro: [
      "A good estate plan does two things: it transfers what the client owns to the people they choose, and it avoids the procedural cost — probate, contests, guardianship hearings — that erodes the estate during the transfer.",
      "We build plans for individuals and families across the wealth spectrum, from single-document wills to multi-trust structures with charitable and business-succession components.",
    ],
    whatWeHandle: [
      "Revocable living trusts and pour-over wills",
      "Durable powers of attorney and patient advocate designations",
      "Irrevocable trusts (ILITs, SLATs, GRATs, dynasty trusts)",
      "Business-succession planning and buy-sell coordination",
      "Beneficiary-designation review across retirement and life-insurance assets",
    ],
    whenToCall: [
      "You have never executed a will or trust and want a base plan.",
      "A major life event — marriage, divorce, birth, sale of a business — has changed what the plan should say.",
      "You own real estate or a business in more than one state.",
      "You expect a beneficiary to contest the plan and want it built to withstand that.",
    ],
    approach:
      "We do not sell template trusts. Each plan is built around what the client actually owns and who they actually trust to carry it out.",
    relatedSlugs: ["trust-litigation", "real-estate", "tax", "wrongful-death"],
  },
  {
    slug: "trust-litigation",
    name: "Trust Litigation",
    category: "PROTECT",
    categoryNumber: "03",
    subtitle:
      "Representation in trust disputes, fiduciary conflicts, and contested estate matters.",
    intro: [
      "Trust litigation tends to surface during the worst possible weeks — after a death, during a family transition, while old grievances are still raw. The legal work has to move forward even when the family cannot.",
      "We represent beneficiaries, trustees, and personal representatives in contested probate and trust matters in Michigan and through co-counsel relationships in other jurisdictions.",
    ],
    whatWeHandle: [
      "Will contests and trust contests (undue influence, capacity, fraud)",
      "Breach-of-fiduciary-duty claims against trustees and personal representatives",
      "Accounting demands and trust-instrument construction proceedings",
      "Removal and surcharge of fiduciaries",
      "Disputes over real estate, business interests, and digital assets in an estate",
    ],
    whenToCall: [
      "A trustee has stopped communicating or is refusing to provide an accounting.",
      "A will or trust appears to have been changed under suspicious circumstances.",
      "A beneficiary believes assets are being mismanaged or self-dealt.",
      "A personal representative needs to be defended against a removal petition.",
    ],
    approach:
      "Most trust disputes settle. The ones that do not are the ones that should not — and those need a litigator who has tried them. We invest in the record early so settlement happens on the right terms.",
    relatedSlugs: ["estate-planning", "real-estate", "civil-litigation", "wrongful-death"],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    category: "PROTECT",
    categoryNumber: "03",
    subtitle:
      "Legal guidance for property transactions, disputes, development, and ownership issues.",
    intro: [
      "Real-estate work spans transactions, leasing, financing, and the disputes that follow when a closing was rushed or a lease was vague. The thread across all of it is title — who has clean rights, against what claims, and how to keep them.",
      "We handle deals from contract through close, draft and negotiate commercial leases, and resolve the disputes that show up once tenants and landlords are inside the four corners of an executed document.",
    ],
    whatWeHandle: [
      "Commercial purchase, sale, and 1031 exchange transactions",
      "Commercial leasing (office, retail, industrial, mixed-use)",
      "Title clearance, quiet-title actions, and easement disputes",
      "Construction and renovation contract drafting",
      "Landlord-tenant disputes and commercial eviction",
    ],
    whenToCall: [
      "A purchase agreement is in front of you and a closing date has been set.",
      "A commercial lease is up for renewal and the landlord has proposed new terms.",
      "Title insurance has flagged an issue that needs to be cleared before close.",
      "A tenant or co-owner is refusing to comply with a written agreement.",
    ],
    approach:
      "Real-estate problems compound. A clean contract, a clear title, and a tight lease prevent most of the work; we do that work first so the rest stays small.",
    relatedSlugs: ["estate-planning", "business-law", "contracts", "tax"],
  },
  {
    slug: "tax",
    name: "Tax",
    category: "PROTECT",
    categoryNumber: "03",
    subtitle:
      "Strategic counsel for tax planning, disputes, compliance, and business tax matters.",
    intro: [
      "Tax law is structural. The right entity, the right elections, and the right transaction sequencing determine effective rate more than any year-end planning can.",
      "We work alongside CPAs on the planning side and represent clients directly in front of the IRS and the Michigan Department of Treasury when an audit, examination, or collection matter is underway.",
    ],
    whatWeHandle: [
      "Entity selection and tax-classification elections (S-corp, partnership, C-corp)",
      "Transaction-level planning for sales, recapitalizations, and 1031 exchanges",
      "IRS examination, appeals, and U.S. Tax Court controversy",
      "State and local tax audits and notices",
      "Voluntary disclosure and offshore-account compliance",
    ],
    whenToCall: [
      "An audit notice has arrived from the IRS or the state.",
      "A transaction is being structured and the tax outcome is unclear.",
      "An entity choice was made years ago and may no longer be the right one.",
      "Prior returns omitted income or assets that need to be brought into compliance.",
    ],
    approach:
      "Tax controversy is won by the firm that has done the structuring work, not just the dispute work. We bring both to the table.",
    relatedSlugs: ["estate-planning", "business-law", "real-estate", "m-and-a"],
  },
  {
    slug: "immigration",
    name: "Immigration",
    category: "PROTECT",
    categoryNumber: "03",
    subtitle:
      "Support for individuals, families, and businesses navigating immigration processes.",
    intro: [
      "Immigration law sits at the intersection of statute, agency policy, and individual circumstance. The same petition that succeeds in one quarter can be denied in the next because the underlying agency posture has shifted.",
      "Our immigration practice covers business and family matters and the removal-defense work that follows when an immigration status is at risk.",
    ],
    whatWeHandle: [
      "Employment-based visas (H-1B, L-1, O-1, E-2, EB-1, EB-2 NIW, EB-5)",
      "Family-based petitions and adjustment of status",
      "Naturalization, derivative citizenship, and consular processing",
      "Removal defense, asylum, and cancellation of removal",
      "Inadmissibility waivers and reentry permits",
    ],
    whenToCall: [
      "An employer wants to sponsor you and the timing of the filing matters.",
      "A pending green-card case has hit an RFE or NOID.",
      "A removal proceeding has been initiated against you or a family member.",
      "A prior immigration record could affect a new application.",
    ],
    approach:
      "Immigration outcomes turn on facts more than law. We build the factual record carefully — declarations, evidence, expert support — before USCIS or the immigration court sees the petition.",
    relatedSlugs: ["business-law", "tax", "estate-planning", "civil-litigation"],
  },
];
