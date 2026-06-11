export const intro =
  "Taxes touch almost everything you do with money, whether you’re running a business, selling property, passing on an estate, or just trying to file correctly. The rules are dense, they change often, and a mistake can cost far more than the tax itself. Our attorneys help you plan ahead to lower what you owe, and they step in to defend you when the IRS or the state comes after you. We work with individuals, families, businesses, and nonprofits.";

export type Topic = { title: string; body: string; items: string[] };

export const topics: Topic[] = [
  {
    title: "Tax planning",
    body: "The best time to deal with a tax problem is before it happens. We structure transactions, businesses, and estates so you keep more of your money and avoid surprises when the return is due.",
    items: [
      "Individual and family tax planning",
      "Business and entity structuring",
      "Mergers, acquisitions, and reorganizations",
      "Real estate and 1031 exchanges",
      "Compensation and equity planning",
    ],
  },
  {
    title: "Business and corporate tax",
    body: "How a business is set up and run has a direct effect on its tax bill. We advise companies at every stage on the choices that drive what they pay.",
    items: [
      "Choice of entity and formation",
      "Partnership and LLC taxation",
      "S corporation and C corporation matters",
      "Buy-sell and ownership transfers",
      "Tax credits and incentives",
    ],
  },
  {
    title: "Estate, gift, and trust tax",
    body: "Passing wealth to the next generation works best with a plan that accounts for the tax. We work alongside our estate planning team to reduce estate and gift tax and keep more in the family.",
    items: [
      "Estate and gift tax planning",
      "Generation-skipping transfer tax",
      "Trust taxation",
      "Charitable giving strategies",
      "Valuation and reporting",
    ],
  },
  {
    title: "IRS and state tax disputes",
    body: "A letter from the IRS doesn’t have to turn into a disaster. We deal with the agency directly, respond to audits, and fight assessments we think are wrong.",
    items: [
      "Audit representation",
      "Responding to notices and assessments",
      "Appeals within the IRS and state agencies",
      "Penalty abatement",
      "Innocent spouse relief",
    ],
  },
  {
    title: "Tax litigation",
    body: "When a dispute can’t be settled with the agency, it goes to court. We litigate tax cases in U.S. Tax Court and in federal court.",
    items: [
      "U.S. Tax Court cases",
      "Federal refund litigation",
      "Collection due process hearings",
      "Summons enforcement disputes",
    ],
  },
  {
    title: "Tax debt and collections",
    body: "Owing back taxes is stressful, but there are usually more options than people realize. We work out arrangements the IRS will accept and that you can actually live with.",
    items: [
      "Installment agreements",
      "Offers in compromise",
      "Liens and levies",
      "Currently-not-collectible status",
      "Wage garnishment relief",
    ],
  },
  {
    title: "International tax",
    body: "Money and people that cross borders bring rules that are easy to trip over. We help individuals and businesses stay compliant on both sides of the line.",
    items: [
      "Foreign account reporting (FBAR and FATCA)",
      "Cross-border business and investment",
      "Inbound and outbound structuring",
      "Voluntary disclosure of unreported accounts",
      "Tax treaty issues",
    ],
  },
  {
    title: "Nonprofit and tax-exempt organizations",
    body: "Tax-exempt status comes with strings, and losing it can sink an organization. We help nonprofits get exempt and stay that way.",
    items: [
      "Applying for tax-exempt status",
      "Maintaining 501(c) compliance",
      "Unrelated business income tax",
      "Governance and reporting",
      "Responding to IRS examinations",
    ],
  },
];

// The eight service areas — same labels as the body sub-topics above.
export const serviceAreas: string[] = topics.map((topic) => topic.title);
