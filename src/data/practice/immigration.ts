const intro =
  "Immigration law is complicated, the stakes are high, and the rules seem to shift with every administration. Whether you’re trying to bring family over, get a work visa, become a citizen, or fight a deportation, a small mistake on a form can set you back years. Our attorneys handle the paperwork and the hearings, explain what’s actually going on, and give your case the attention it needs. We work with individuals, families, and employers.";

type Topic = { title: string; body: string; items: string[] };

const topics: Topic[] = [
  {
    title: "Deportation and removal defense",
    body: "More people are facing immigration judges than ever, and the process is confusing and often unfair. We know how immigration court works, and we fight the government’s case while making sure you understand each step.",
    items: [
      "Bond and custody hearings",
      "Release and parole requests",
      "Cancellation of removal",
      "Asylum and withholding of removal",
      "Adjustment of status in court",
      "Credible fear and expedited removal",
      "Appeals to the Board of Immigration Appeals",
    ],
  },
  {
    title: "Family-based immigration",
    body: "Bringing a relative to the United States involves a lot of choices, starting with whether they’ll apply from inside the country or through a consulate abroad. We help you figure out the right path and whether a waiver is needed.",
    items: [
      "Petitions for immediate relatives",
      "Green card (permanent residence) applications",
      "Consular processing",
      "Provisional waivers (I-601A) and I-601 waivers",
      "Fiancé(e) visas",
      "Adjustment of status",
    ],
  },
  {
    title: "Citizenship and naturalization",
    body: "Becoming a citizen is the goal for a lot of people who’ve lived here for years. If you’ve been a permanent resident long enough to qualify, we’ll help you take the last step.",
    items: [
      "Naturalization applications",
      "Certificates of citizenship",
      "Derivative citizenship claims",
      "Passport denial cases in federal court",
    ],
  },
  {
    title: "Asylum and protection from persecution",
    body: "People who fear harm in their home country can ask for protection here, but the law is demanding and the bar is high. We build asylum cases carefully and represent clients who’ve already been denied.",
    items: [
      "Affirmative asylum applications",
      "Asylum in removal proceedings",
      "Withholding of removal",
      "Protection under the Convention Against Torture",
      "Appeals of asylum denials",
    ],
  },
  {
    title: "DACA and deferred action",
    body: "Many people who were brought here as children still haven’t applied for the protection they may qualify for. We’ll look at your history and tell you honestly where you stand.",
    items: [
      "DACA applications and renewals",
      "Eligibility reviews",
      "Work authorization",
      "Advance parole",
    ],
  },
  {
    title: "Work and investment visas",
    body: "U.S. immigration law lets people come here to work or invest, and employers often need help sponsoring the talent they want. We handle these petitions for both workers and companies.",
    items: [
      "H-1B, H-2A, and H-2B visas",
      "TN visas",
      "E-1 and E-2 (treaty trader and investor)",
      "L-1 and L-2 (intracompany transfer)",
      "Employer sponsorship and compliance",
    ],
  },
  {
    title: "Nonimmigrant and visitor visas",
    body: "Not every visa leads to a green card. We also help with the temporary visas people use to visit, study, or fix a problem with their status.",
    items: [
      "B-1 and B-2 visitor visas",
      "212(d)(3) waivers",
      "Extensions and changes of status",
    ],
  },
];

// The seven service areas, mirrored as a plain list (matches the template's
// "Case types" band). The global "05 — Service Areas" geographic band renders
// separately below via <ServiceAreas />.
const serviceAreas: string[] = topics.map((topic) => topic.title);

export { intro, topics, serviceAreas };
export type { Topic };
