import type { PracticeArea } from "./types";

export const defendPracticeAreas: PracticeArea[] = [
  {
    slug: "criminal-defense",
    name: "Criminal Defense",
    category: "DEFEND",
    categoryNumber: "04",
    subtitle:
      "Strong defense for individuals facing investigations, charges, and high-stakes allegations.",
    intro: [
      "A criminal charge is the rare matter where the worst phase is often the first phase: the arraignment, the bond hearing, the first prosecutor contact. Decisions made in the first 72 hours frequently shape the case for the next year.",
      "We represent clients in Michigan state courts on felony and misdemeanor matters and coordinate with co-counsel for federal-court work.",
    ],
    whatWeHandle: [
      "Pre-charge representation during investigation",
      "Misdemeanor and felony defense in district and circuit court",
      "Bond reviews, pretrial motions, and suppression hearings",
      "Plea negotiation and sentencing advocacy",
      "Expungement and set-aside petitions",
    ],
    whenToCall: [
      "You have been contacted by a detective or asked to come in voluntarily for an interview.",
      "An arrest has been made and an arraignment is scheduled.",
      "A search warrant has been served at your home or business.",
      "A prior conviction is now affecting employment or licensing and may be eligible for set-aside.",
    ],
    approach:
      "Quiet, fast, and surgical. Many of the cases we accept never make it to charging because the early work changed the prosecutor's calculus.",
    relatedSlugs: ["dui", "federal-criminal", "white-collar", "civil-litigation"],
  },
  {
    slug: "dui",
    name: "DUI",
    category: "DEFEND",
    categoryNumber: "04",
    subtitle:
      "Defense for alcohol and drug-related driving charges, license issues, and court proceedings.",
    intro: [
      "A DUI arrest sets two separate cases in motion at the same time: a criminal case in district court, and an administrative driver's-license action through the Secretary of State. They run on different clocks and the early deadlines are easy to miss.",
      "We defend operating-while-intoxicated charges from arraignment through trial and handle the related license matters that determine whether a client can keep driving in the meantime.",
    ],
    whatWeHandle: [
      "First-, second-, and third-offense OWI defense",
      "High-BAC (Super Drunk) and OWI with controlled-substance matters",
      "Implied-consent and breath-test refusal hearings",
      "Hardship license and restricted-license petitions",
      "Administrative hearings before the Michigan Secretary of State (DAAD)",
    ],
    whenToCall: [
      "You have been arrested and the implied-consent paperwork has been served.",
      "A district-court arraignment is scheduled within the next two weeks.",
      "A prior OWI is now a third-offense felony exposure.",
      "Your license has been suspended or revoked and a Secretary of State hearing is required to restore it.",
    ],
    approach:
      "OWI cases are forensic. Breath-test calibration, blood-draw chain of custody, traffic-stop justification — those are the points that move outcomes, and we work them first.",
    relatedSlugs: ["criminal-defense", "federal-criminal", "white-collar"],
  },
  {
    slug: "federal-criminal",
    name: "Federal Criminal",
    category: "DEFEND",
    categoryNumber: "04",
    subtitle:
      "Representation in federal investigations, indictments, white-collar matters, and trials.",
    intro: [
      "Federal criminal work operates on a different posture than state-court defense. Investigations are longer, charging decisions are slower, and by the time a defendant becomes aware of an investigation, the government has often already done the bulk of its work.",
      "We represent clients during pre-indictment investigations, through grand-jury practice, and at trial. The earlier a case is engaged, the more there is to do.",
    ],
    whatWeHandle: [
      "Pre-indictment investigation and government-interview preparation",
      "Grand-jury subpoenas, document requests, and target/subject responses",
      "Federal fraud, conspiracy, and money-laundering matters",
      "Federal drug, firearm, and immigration-related prosecutions",
      "Federal sentencing advocacy and downward-departure motions",
    ],
    whenToCall: [
      "A federal agent has contacted you, your business, or your accountant.",
      "A grand-jury subpoena has been served on you or your records custodian.",
      "A target letter has arrived.",
      "An indictment has been returned and arraignment is scheduled.",
    ],
    approach:
      "In federal work, the case that is never charged is the best outcome. Most of our federal practice happens before any public filing exists.",
    relatedSlugs: ["criminal-defense", "white-collar", "dui", "civil-litigation"],
  },
  {
    slug: "white-collar",
    name: "White-Collar",
    category: "DEFEND",
    categoryNumber: "04",
    subtitle:
      "Defense for fraud, financial crime, regulatory, and corporate investigation matters.",
    intro: [
      "White-collar matters are typically slow, document-heavy, and quiet. They begin as inquiries — a subpoena, a regulator's letter, a whistleblower complaint — and become criminal exposure only if the early steps are mishandled.",
      "We represent companies, executives, and professionals during investigations by federal and state authorities, regulators, and self-regulatory bodies, and we run internal investigations when a company needs an independent look at its own conduct.",
    ],
    whatWeHandle: [
      "Federal and state investigations (DOJ, SEC, IRS-CI, state AGs)",
      "Regulatory enforcement (SEC, FINRA, CMS, OIG, state licensing boards)",
      "Internal investigations and audit-committee work",
      "Whistleblower and qui tam matters",
      "Compliance program review and remediation",
    ],
    whenToCall: [
      "A subpoena duces tecum has been received by your business.",
      "An executive or director has been notified of a regulatory inquiry.",
      "An internal complaint has been raised and the board wants outside counsel to look at it.",
      "A compliance audit has flagged conduct that may have legal exposure.",
    ],
    approach:
      "White-collar engagements turn on judgment more than litigation. The right early move — voluntary disclosure, declination request, remediation — often makes the rest of the case unnecessary.",
    relatedSlugs: ["federal-criminal", "criminal-defense", "civil-litigation", "securities"],
  },
  {
    slug: "civil-litigation",
    name: "Civil Litigation",
    category: "DEFEND",
    categoryNumber: "04",
    subtitle:
      "Strategic representation in disputes involving individuals, companies, and institutions.",
    intro: [
      "Civil litigation is the firm's general dispute practice. Cases come in as contract disputes, partner disputes, professional-liability claims, or regulatory crossover matters, and most of them resolve before trial — but only if the file is built as if it will not.",
      "We try cases when we have to. The willingness to do so is what makes pre-trial resolutions possible on the right terms.",
    ],
    whatWeHandle: [
      "Commercial and contract disputes",
      "Shareholder, partner, and LLC-member disputes",
      "Business torts (fraud, tortious interference, civil conspiracy)",
      "Professional-liability defense (legal, accounting, financial services)",
      "Appellate work in state and federal courts",
    ],
    whenToCall: [
      "A demand letter has been received and a response is due.",
      "A lawsuit has been filed against you or your business.",
      "A partner or shareholder is threatening to sue.",
      "A trial-court decision needs to be reviewed for appeal.",
    ],
    approach:
      "Litigation is leverage. We build leverage through preparation — discovery work that is real, motions that have been read by an actual judge, and a trial posture that the other side can feel.",
    relatedSlugs: ["business-law", "trust-litigation", "white-collar", "criminal-defense"],
  },
];
