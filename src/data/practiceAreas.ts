export type PracticeCategory = "RECOVER" | "BUILD" | "PROTECT" | "DEFEND";

export type PracticeArea = {
  slug: string;
  name: string;
  navLabel?: string;
  category: PracticeCategory;
  categoryNumber: "01" | "02" | "03" | "04";
  subtitle: string;
  intro: string[];
  whatWeHandle: string[];
  whenToCall: string[];
  approach: string;
  relatedSlugs: string[];
};

// Parent slug for each category — used by the nav dropdown and Capabilities landing.
export const categoryParentSlug: Record<PracticeCategory, string> = {
  RECOVER: "personal-injury",
  BUILD: "business-law",
  PROTECT: "estate-planning",
  DEFEND: "criminal-defense",
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "personal-injury",
    name: "Personal Injury",
    category: "RECOVER",
    categoryNumber: "01",
    subtitle:
      "Advocacy for people harmed by negligence, unsafe conditions, and serious accidents.",
    intro: [
      "A personal injury matter starts before the case does. Medical bills arrive. An insurer calls. A claim is opened. What happens in those first weeks often shapes what is recoverable later.",
      "Our personal injury practice handles serious-injury matters from intake through resolution. We deal directly with insurance carriers, manage records and lien resolution, and litigate when an insurer refuses to make a fair offer.",
    ],
    whatWeHandle: [
      "Catastrophic injury and traumatic brain injury claims",
      "Premises liability — slip-and-fall, inadequate security, property hazards",
      "Product liability and defective-product injuries",
      "Insurance bad-faith claims arising from injury matters",
      "Lien negotiation with health insurers, hospitals, and Medicare/Medicaid",
    ],
    whenToCall: [
      "You or a family member was seriously injured and the cause was someone else's negligence.",
      "An insurer has offered a settlement and you are unsure whether it is fair.",
      "You are being asked to give a recorded statement to an adjuster.",
      "Medical bills are mounting and you do not know who will ultimately pay them.",
    ],
    approach:
      "We do not run a volume settlement mill. Each file is built as if it will be tried, which is what produces serious offers from insurers and a clean record if a trial does become necessary.",
    relatedSlugs: ["auto-accidents", "medical-malpractice", "workers-compensation", "wrongful-death"],
  },
  {
    slug: "auto-accidents",
    name: "Auto Accidents",
    category: "RECOVER",
    categoryNumber: "01",
    subtitle:
      "Focused representation for drivers, passengers, pedestrians, and families after collisions.",
    intro: [
      "Michigan auto law sits on top of one of the most complex no-fault statutes in the country. The wrong form, the wrong deadline, or the wrong assignment of benefits can foreclose a recovery that would otherwise be straightforward.",
      "We handle the full arc — PIP benefits, third-party negligence claims, uninsured and underinsured motorist coverage, and disputes with the carrier when they cut off attendant care or wage loss.",
    ],
    whatWeHandle: [
      "Michigan no-fault PIP claims (medical, attendant care, wage loss, replacement services)",
      "Third-party tort claims for serious impairment of body function",
      "Uninsured and underinsured motorist (UM/UIM) claims",
      "Commercial trucking and rideshare collision matters",
      "Motorcycle and pedestrian collision cases",
    ],
    whenToCall: [
      "You were injured in a collision and the at-fault driver is denying responsibility.",
      "Your no-fault insurer has cut off attendant care, wage loss, or medical treatment.",
      "The other driver was uninsured or had minimum limits that will not cover your loss.",
      "You were hit by a commercial vehicle or rideshare driver.",
    ],
    approach:
      "We file PIP applications correctly the first time, document treatment in a way that survives an IME challenge, and litigate against carriers that under-pay. The work begins inside the no-fault system; it ends, when needed, in front of a jury.",
    relatedSlugs: ["personal-injury", "wrongful-death", "workers-compensation", "civil-litigation"],
  },
  {
    slug: "medical-malpractice",
    name: "Medical Malpractice",
    category: "RECOVER",
    categoryNumber: "01",
    subtitle:
      "Claims involving medical errors, delayed diagnoses, surgical mistakes, and preventable harm.",
    intro: [
      "Medical malpractice is among the most procedurally demanding civil work in Michigan. Notice of intent, affidavits of merit, expert qualification, and damage caps all gate whether a case ever reaches discovery.",
      "We screen carefully. Cases we accept have been reviewed by qualified experts in the same specialty, and we build the record from intake forward to meet every statutory requirement.",
    ],
    whatWeHandle: [
      "Birth injury and obstetric negligence",
      "Surgical errors and anesthesia complications",
      "Misdiagnosis and delayed-diagnosis claims (cancer, stroke, sepsis)",
      "Hospital-acquired infections and pressure injuries",
      "Nursing-home negligence and elder-care abuse",
    ],
    whenToCall: [
      "A loved one's outcome does not match what the medical team said to expect.",
      "Records have been requested by a hospital risk-management office.",
      "A physician has acknowledged that something was missed or done wrong.",
      "A nursing-home resident has suffered a fall, pressure injury, or unexplained decline.",
    ],
    approach:
      "Medical malpractice cases are won or lost on expert work and chronology. We invest in both before filing — not after — which is why our docket is smaller than most plaintiff firms and our trial readiness is higher.",
    relatedSlugs: ["personal-injury", "wrongful-death", "civil-litigation"],
  },
  {
    slug: "workers-compensation",
    name: "Workers’ Compensation",
    category: "RECOVER",
    categoryNumber: "01",
    subtitle:
      "Workplace injury claims, benefit disputes, and third-party employer matters.",
    intro: [
      "Workers' compensation is supposed to be a no-fault bargain. In practice, employees routinely have benefits delayed, partially paid, or terminated based on an independent medical exam they had no part in choosing.",
      "We represent injured workers in front of the Michigan Workers' Disability Compensation Agency and pursue third-party recoveries when a non-employer is also responsible for the injury.",
    ],
    whatWeHandle: [
      "Initial benefit claims and disputed Form WC-100 matters",
      "Wage loss, medical, and vocational rehabilitation benefits",
      "Independent medical exam (IME) challenges and benefit terminations",
      "Redemption negotiations and settlement structuring",
      "Third-party liability claims against non-employer wrongdoers",
    ],
    whenToCall: [
      "Your employer or its carrier has denied a workplace injury claim.",
      "Benefits were cut off after an IME you did not control.",
      "A redemption offer has been made and you are unsure if it is fair.",
      "A subcontractor, equipment manufacturer, or property owner may also be responsible for the injury.",
    ],
    approach:
      "We handle workers' compensation as a litigation practice, not a paperwork practice. That posture changes what carriers offer and how quickly disputes resolve.",
    relatedSlugs: ["personal-injury", "auto-accidents", "wrongful-death"],
  },
  {
    slug: "wrongful-death",
    name: "Wrongful Death",
    category: "RECOVER",
    categoryNumber: "01",
    subtitle:
      "Compassionate legal support for families after fatal negligence or misconduct.",
    intro: [
      "Wrongful death cases sit on top of grief. The legal work — opening an estate, identifying beneficiaries, valuing the loss — has to happen at exactly the moment a family is least able to do it.",
      "We move quietly. Most of the early work is administrative and out of view of the family. When a claim is filed, it is filed because the evidence supports it and the family wants to proceed.",
    ],
    whatWeHandle: [
      "Wrongful-death actions arising from motor-vehicle collisions",
      "Wrongful-death claims tied to medical negligence",
      "Workplace-fatality and construction-site cases",
      "Premises and security-failure deaths",
      "Estate administration tied to a wrongful-death recovery",
    ],
    whenToCall: [
      "A family member has died and the circumstances suggest negligence or misconduct.",
      "An autopsy or police investigation is underway and you do not know what it will conclude.",
      "An insurer has reached out before a personal representative has been appointed.",
      "You need help opening an estate solely to pursue a wrongful-death claim.",
    ],
    approach:
      "We carry both the litigation and the probate work in-house so the family is not navigating two firms during the worst period of their lives.",
    relatedSlugs: ["personal-injury", "medical-malpractice", "auto-accidents", "estate-planning"],
  },

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

export const practiceAreasBySlug: Record<string, PracticeArea> = practiceAreas.reduce(
  (acc, area) => {
    acc[area.slug] = area;
    return acc;
  },
  {} as Record<string, PracticeArea>,
);

export const categoryTagline: Record<PracticeCategory, string> = {
  RECOVER: "For people hurt in accidents, collisions, medical errors, or on the job.",
  BUILD: "For founders, owners, and investors building something durable.",
  PROTECT: "For families planning ahead or sorting out a dispute.",
  DEFEND: "For clients facing criminal charges, a DUI, or a federal investigation.",
};
