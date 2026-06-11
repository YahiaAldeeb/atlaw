export const intro =
  "An injury you didn’t cause can wreck your finances, your health, and your ability to work, often all at once. Personal injury law exists to move that cost back to the person or company responsible for it. Our attorneys handle claims from the first phone call through settlement or trial. We deal with the insurers, the deadlines, and the paperwork so you can put your energy into recovering.";

export type Topic = { title: string; body: string; items: string[] };

export const topics: Topic[] = [
  {
    title: "Car and Vehicle Accidents",
    body: "Most of our injury cases start on the road. A crash can leave you with medical bills, a wrecked car, and an insurance company that wants to close the file for far less than your claim is worth. We build the case, handle the adjusters, and push for the full amount.",
    items: [
      "Car, truck, and motorcycle collisions",
      "Rideshare and commercial vehicle accidents",
      "Pedestrian and bicycle injuries",
      "Hit-and-run, uninsured, and underinsured motorist claims",
      "Whiplash, fractures, and traumatic brain injury",
    ],
  },
  {
    title: "Slip, Trip, and Fall",
    body: "Property owners have to keep their spaces reasonably safe. When they don’t and someone gets hurt, they can be held responsible. These cases usually come down to what the owner knew about the hazard and what they failed to fix.",
    items: [
      "Wet floors and unmarked hazards",
      "Broken stairs, railings, and walkways",
      "Poor lighting and inadequate security",
      "Injuries at stores, restaurants, and rental properties",
    ],
  },
  {
    title: "Medical Malpractice",
    body: "You go to a doctor to get better, not worse. When a provider’s mistake causes real harm, we work with medical experts to show exactly what went wrong and what it has cost you.",
    items: [
      "Surgical errors",
      "Misdiagnosis and delayed diagnosis",
      "Medication and anesthesia mistakes",
      "Birth injuries",
      "Negligent hospital and nursing care",
    ],
  },
  {
    title: "Product Liability",
    body: "A product that hurts you because it was badly designed, badly made, or sold without a proper warning is the manufacturer’s problem, not yours. We take on the companies and their lawyers to recover what you’re owed.",
    items: [
      "Defective auto parts",
      "Dangerous drugs and medical devices",
      "Faulty machinery and consumer products",
      "Failure to warn of known risks",
    ],
  },
  {
    title: "Workplace and Construction Injuries",
    body: "Getting hurt on the job can mean a workers’ compensation claim, a separate lawsuit against a third party, or both. We figure out which path fits your situation and go after every source of recovery available to you.",
    items: [
      "Construction site accidents",
      "Falls, equipment, and machinery injuries",
      "Repetitive strain and occupational illness",
      "Third-party liability claims",
    ],
  },
  {
    title: "Catastrophic and Permanent Injuries",
    body: "Some injuries change the rest of your life. These claims have to account for long-term care, lost earning power, and the daily reality of living with the injury, not just the bills already on the table.",
    items: [
      "Spinal cord injuries and paralysis",
      "Traumatic brain injury",
      "Amputations and severe burns",
      "Permanent disability and disfigurement",
    ],
  },
  {
    title: "Wrongful Death",
    body: "When negligence takes a family member, nothing makes it right. What a claim can do is cover the financial loss and hold the responsible party accountable. We handle these cases with the care they call for.",
    items: [
      "Fatal vehicle and workplace accidents",
      "Medical negligence resulting in death",
      "Funeral costs, lost income, and loss of support",
      "Claims brought on behalf of surviving family",
    ],
  },
  {
    title: "Insurance Disputes and Bad Faith",
    body: "Sometimes the fight is with your own insurer. When a company stalls, lowballs, or denies a valid claim, we hold them to the policy you paid for.",
    items: [
      "Denied and underpaid claims",
      "Delayed settlements",
      "Bad-faith insurance practices",
      "Uninsured and underinsured motorist disputes",
    ],
  },
];

export const caseTypes: string[] = [
  "Car and Truck Accidents",
  "Motorcycle Accidents",
  "Pedestrian and Bicycle Injuries",
  "Slip, Trip, and Fall",
  "Premises Liability",
  "Medical Malpractice",
  "Birth Injuries",
  "Product Liability",
  "Defective Drugs and Devices",
  "Construction and Workplace Injuries",
  "Catastrophic Injury",
  "Traumatic Brain Injury",
  "Spinal Cord Injury",
  "Burn Injuries",
  "Wrongful Death",
  "Insurance Bad Faith",
  "Uninsured and Underinsured Motorist Claims",
  "Dog Bites and Animal Attacks",
];
