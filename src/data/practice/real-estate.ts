export const intro =
  "Real estate is one of the biggest financial moves most people and businesses ever make, and the paperwork behind it decides whether it goes smoothly or turns into a problem later. Our attorneys handle the legal side of buying, selling, leasing, developing, and fighting over property, so you know what you’re signing and what you’re actually getting. We work with homeowners, buyers and sellers, landlords and tenants, investors, developers, and businesses.";

export type Topic = { title: string; body: string; items: string[] };

export const topics: Topic[] = [
  {
    title: "Buying and selling property",
    body: "Most deals look simple until something in the contract or the title gets in the way. We review and negotiate the agreements, check that the title is clean, and handle the closing so ownership transfers the way it’s supposed to.",
    items: [
      "Residential purchases and sales",
      "Commercial purchases and sales",
      "Purchase agreement review and negotiation",
      "Title review and clearing title defects",
      "Closings and escrow",
      "For-sale-by-owner transactions",
    ],
  },
  {
    title: "Leasing",
    body: "A lease is a long commitment, and the terms matter more than people expect. We draft and negotiate leases for landlords and tenants, and we step in when one side isn’t holding up their end.",
    items: [
      "Commercial leases",
      "Residential leases",
      "Lease negotiation and review",
      "Assignments and subleases",
      "Lease disputes",
    ],
  },
  {
    title: "Land use, zoning, and development",
    body: "Before you build or change how a property is used, the local rules have to line up. We handle approvals, permits, and the hearings that come with them, and we push back when a decision is wrong.",
    items: [
      "Zoning applications and variances",
      "Land use approvals and permits",
      "Subdivision and platting",
      "Development agreements",
      "Appeals of zoning and planning decisions",
    ],
  },
  {
    title: "Construction",
    body: "Building projects involve a lot of money and a lot of moving parts, and disputes are common. We handle the contracts up front and the claims when a project goes sideways.",
    items: [
      "Construction contracts",
      "Owner, contractor, and subcontractor agreements",
      "Mechanic’s liens",
      "Construction defect claims",
      "Payment disputes",
    ],
  },
  {
    title: "Financing and title",
    body: "A property is only as good as its title and the terms of the loan against it. We work through the financing documents and resolve the title problems that can hold up or unwind a deal.",
    items: [
      "Mortgage and loan documents",
      "Refinancing",
      "Title insurance claims",
      "Liens and encumbrances",
      "Easements and rights of way",
    ],
  },
  {
    title: "Property disputes",
    body: "When a deal or a boundary turns into a fight, it usually comes down to what the documents say versus what happened on the ground. We handle these through negotiation when we can, and in court when we have to.",
    items: [
      "Breach of purchase or sale agreements",
      "Boundary and easement disputes",
      "Adverse possession claims",
      "Specific performance claims",
      "Quiet title actions",
    ],
  },
  {
    title: "Landlord and tenant matters",
    body: "Both sides have rights, and both sides have obligations that are easy to get wrong. We represent landlords and tenants in the disputes that come up during and after a tenancy.",
    items: [
      "Evictions",
      "Security deposit disputes",
      "Habitability and repair claims",
      "Lease enforcement",
      "Commercial tenant defaults",
    ],
  },
  {
    title: "HOA and condominium matters",
    body: "Living in a community with shared rules brings its own conflicts. We advise associations, boards, and owners on the rules, the dues, and the disputes that follow.",
    items: [
      "Association governance and bylaws",
      "Assessment and dues disputes",
      "Covenant enforcement",
      "Owner and board disputes",
    ],
  },
];

// Service areas — the eight topics above, surfaced as a plain text list.
export const serviceAreas: string[] = topics.map((topic) => topic.title);
