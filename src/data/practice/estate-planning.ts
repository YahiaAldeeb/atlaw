export const intro =
  "Estate planning is how you decide what happens to your property, your money, and your care if you can't manage things yourself or after you pass away. A lot of people put it off because it feels uncomfortable, or because they assume it's only for the wealthy. Neither is true. Our attorneys make the process clear, draft the documents correctly, and make sure your wishes actually hold up when they're needed. We work with individuals, young families, and business owners at every stage of life.";

export type Topic = { id: string; title: string; body: string; items: string[] };

export const topics: Topic[] = [
  {
    id: "wills-and-trusts",
    title: "Wills and trusts",
    body: "A will tells the court how you want your property divided and who should raise your minor children. A trust can do more than that. It can keep your family out of probate, keep your affairs private, and manage assets over time on your terms. We help you pick the right tools and draft them so they do what you actually intend.",
    items: [
      "Last will and testament",
      "Revocable living trusts",
      "Irrevocable trusts",
      "Special needs trusts",
      "Pet trusts",
      "Trust funding and asset transfers",
    ],
  },
  {
    id: "powers-of-attorney",
    title: "Powers of attorney and health care directives",
    body: "If you're ever unable to speak for yourself, someone you trust should be allowed to step in. These documents name that person and set out what they can and can't decide, so your family isn't left guessing or fighting in court.",
    items: [
      "Durable power of attorney for finances",
      "Medical power of attorney",
      "Living wills and advance health care directives",
      "HIPAA authorizations",
      "Guardianship and conservatorship designations",
    ],
  },
  {
    id: "probate-and-administration",
    title: "Probate and estate administration",
    body: "When someone dies, their estate usually has to go through probate before anything can be distributed. We guide executors and families through the court process, deal with creditor claims, and step in when disputes come up.",
    items: [
      "Probate of wills",
      "Estate and trust administration",
      "Executor and trustee representation",
      "Creditor claims and debt settlement",
      "Will and trust contests",
      "Heirship determinations",
    ],
  },
  {
    id: "tax-and-asset-protection",
    title: "Tax and asset protection",
    body: "For larger estates, taxes can take a real bite out of what you leave behind. We build plans that lower estate and gift tax exposure and protect assets from lawsuits and creditors while you're still living.",
    items: [
      "Estate and gift tax planning",
      "Generation-skipping transfer planning",
      "Charitable trusts and gifting strategies",
      "Family limited partnerships",
      "Asset protection trusts",
    ],
  },
  {
    id: "business-succession",
    title: "Business succession",
    body: "If you own a business, your plan should say what happens to it. We help owners hand the company to the next generation or sell on their own terms, instead of leaving partners and family to sort it out later.",
    items: [
      "Succession and continuity plans",
      "Buy-sell agreements",
      "Ownership transfers",
      "Coordination with your corporate documents",
    ],
  },
  {
    id: "guardianship",
    title: "Guardianship for children and dependents",
    body: "Naming a guardian is one of the hardest calls a parent makes, and one of the most important. We help you put it in writing so a judge isn't the one deciding who raises your kids.",
    items: [
      "Guardianship nominations for minor children",
      "Standby guardianship",
      "Care plans for dependents with special needs",
    ],
  },
  {
    id: "reviewing-and-updating",
    title: "Reviewing and updating your plan",
    body: "Marriage, divorce, a new child, a move to another state, a death in the family: a plan that fit five years ago may not fit now. We review what you already have and update it so it keeps up with your life.",
    items: [
      "Plan reviews and updates",
      "Beneficiary designation reviews",
      "Out-of-state document review",
      "Coordination after major life events",
    ],
  },
];
