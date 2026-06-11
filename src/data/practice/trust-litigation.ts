export const intro =
  "Trust litigation is what happens when a dispute over a trust or estate ends up in court. Maybe a trustee is mismanaging the money, a will was signed under pressure, or the family can't agree on what a document actually means. These cases are hard because they're usually about money, grief, and family all at once. Our attorneys handle the legal fight so you can hold the right people accountable and protect what you're owed. We represent beneficiaries, heirs, trustees, and executors, on either side of the dispute.";

export type Topic = { id: string; title: string; body: string; items: string[] };

export const topics: Topic[] = [
  {
    id: "breach-of-fiduciary-duty",
    title: "Breach of fiduciary duty",
    body: "A trustee or executor has to act in the interest of the people the trust is meant to serve. When they put themselves first, hide information, or let assets waste away, they can be held responsible. We bring claims to recover what was lost and, where it's warranted, to remove the person in charge.",
    items: [
      "Trustee and executor misconduct",
      "Self-dealing and conflicts of interest",
      "Mismanagement or loss of trust assets",
      "Failure to provide an accounting",
      "Trustee removal and replacement",
      "Surcharge claims to recover losses",
    ],
  },
  {
    id: "will-and-trust-contests",
    title: "Will and trust contests",
    body: "Not every document reflects what the person who signed it actually wanted. We challenge wills and trusts, and defend them, when there's a real question about how they were created.",
    items: [
      "Lack of mental capacity",
      "Undue influence and coercion",
      "Fraud and forgery",
      "Improperly signed or witnessed documents",
      "Disputes over amendments and later versions",
    ],
  },
  {
    id: "beneficiary-and-inheritance-disputes",
    title: "Beneficiary and inheritance disputes",
    body: "Beneficiaries often have to fight just to get information, let alone their share. We step in when distributions stall, when a document is unclear, or when one heir is being treated unfairly.",
    items: [
      "Petitions to compel distribution",
      "Disputes over the meaning of trust or will terms",
      "Claims of unequal or improper treatment",
      "Challenges to a beneficiary's interest",
      "Disinheritance disputes",
    ],
  },
  {
    id: "accountings-and-financial-review",
    title: "Accountings and financial review",
    body: "You have a right to know what's happening with money that's supposed to be yours. We force trustees and executors to open the books, and we dig into the records when the numbers don't add up.",
    items: [
      "Petitions to compel an accounting",
      "Objections to a trustee's accounting",
      "Tracing missing or misused funds",
      "Reviewing fees charged by the trustee",
    ],
  },
  {
    id: "financial-elder-abuse",
    title: "Financial elder abuse",
    body: "Older adults are frequent targets for people who want control of their money or property. When someone uses a position of trust to take advantage of an elderly person, we pursue both the return of the assets and the legal consequences.",
    items: [
      "Misuse of a power of attorney",
      "Coerced gifts and transfers",
      "Theft of money or property",
      "Claims against caregivers, family, or advisors",
    ],
  },
  {
    id: "administration-disputes",
    title: "Administration disputes",
    body: "Even an honest trustee can end up in a fight over how to do the job. We handle the disagreements that come up while a trust or estate is being administered, and we go to court when the parties can't work it out themselves.",
    items: [
      "Interpretation of trust and will terms",
      "Trust modification, reformation, and termination",
      "Disputes among co-trustees",
      "Creditor claims against an estate or trust",
      "Property title and ownership disputes",
    ],
  },
  {
    id: "defending-trustees-and-executors",
    title: "Defending trustees and executors",
    body: "Being named in a lawsuit doesn't mean you did anything wrong. If you're a trustee or executor facing claims, we defend your decisions and keep the administration moving while the dispute gets resolved.",
    items: [
      "Defense against breach of duty claims",
      "Defense of accountings and fee disputes",
      "Responding to removal petitions",
      "Guidance to limit personal liability",
    ],
  },
  {
    id: "mediation-and-settlement",
    title: "Mediation and settlement",
    body: "Most of these cases settle, and many should. Where it makes sense, we work to resolve things without a drawn-out trial, so more of the estate stays with the family and less of it goes to legal fees.",
    items: [
      "Mediation and settlement negotiations",
      "Family settlement agreements",
      "Pre-litigation resolution",
    ],
  },
];
