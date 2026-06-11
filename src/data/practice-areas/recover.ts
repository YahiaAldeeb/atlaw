import type { PracticeArea } from "./types";

export const recoverPracticeAreas: PracticeArea[] = [
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
];
