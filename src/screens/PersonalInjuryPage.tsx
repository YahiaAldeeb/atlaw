import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/ATLAW/Header";
import { ServiceAreas } from "../components/ATLAW/ServiceAreas";
import { Footer } from "../components/ATLAW/Footer";
import "./PersonalInjury.css";

const GOLD = "#C9A24B";
const headlineAxes = "'opsz' 144, 'wght' 360, 'SOFT' 0, 'WONK' 0";
const subHeadAxes = "'opsz' 96, 'wght' 400, 'SOFT' 0, 'WONK' 0";

const navyCanvas = "linear-gradient(180deg, #0E1B33 0%, #0A1428 100%)";

// Hero photo — subject sits in the right third; the gradient below keeps the left dark.
const heroImage = "/assets/personal-injury-hero.avif";

// Soft grain over the navy canvas — same texture language as the rest of the site.
const grain =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

/* ─────────────────────────────── shared bits ─────────────────────────────── */

const Grain = (): JSX.Element => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 opacity-[0.05]"
    style={{ backgroundImage: grain }}
  />
);

/* ─────────────────────────────── content (verbatim copy) ─────────────────── */

const intro =
  "An injury you didn’t cause can wreck your finances, your health, and your ability to work, often all at once. Personal injury law exists to move that cost back to the person or company responsible for it. Our attorneys handle claims from the first phone call through settlement or trial. We deal with the insurers, the deadlines, and the paperwork so you can put your energy into recovering.";

type Topic = { title: string; body: string; items: string[] };

const topics: Topic[] = [
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

const caseTypes: string[] = [
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

/* ─────────────────────────────── sections ─────────────────────────────── */

const Hero = (): JSX.Element => (
  <section
    aria-labelledby="pi-hero-title"
    className="relative isolate w-full overflow-hidden"
    style={{ background: navyCanvas, color: "#F4F1EA" }}
  >
    {/* Background photo (decorative) */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
      }}
    />
    {/* Navy gradient: solid on the left so the text stays legible, fading toward the subject on the right */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0"
      style={{
        background:
          "linear-gradient(90deg, rgba(19,29,56,0.95) 0%, rgba(19,29,56,0.85) 30%, rgba(19,29,56,0.45) 70%, rgba(19,29,56,0.2) 100%)",
      }}
    />
    {/* Extra veil on narrow screens, where the text column runs full-width over the subject */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 bg-[rgba(19,29,56,0.55)] md:hidden"
    />

    <Grain />

    <div className="relative z-10 mx-auto w-full max-w-[1180px] px-6 pb-[96px] pt-[72px] sm:px-10 md:pb-[120px] md:pt-[104px] lg:px-16 lg:pb-[140px] lg:pt-[120px]">
      <div className="max-w-[820px]">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="pi-reveal mb-9 font-sans text-[11.5px] font-semibold uppercase leading-none tracking-[0.2em]"
          style={{ animationDelay: "0ms" }}
        >
          <ol className="flex flex-wrap items-center gap-x-3 gap-y-1 text-white/55">
            <li><Link className="transition-colors hover:text-white/90" to="/">ATLAW</Link></li>
            <li aria-hidden="true" className="text-white/30">/</li>
            <li><Link className="transition-colors hover:text-white/90" to="/practice-areas">Practice Areas</Link></li>
            <li aria-hidden="true" className="text-white/30">/</li>
            <li><span aria-current="page" className="text-white">Personal Injury</span></li>
          </ol>
        </nav>

        {/* Marker */}
        <p
          className="pi-reveal font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.28em]"
          style={{ animationDelay: "90ms", color: GOLD, marginBottom: "28px" }}
        >
          <span>01</span>
          <span aria-hidden="true" className="mx-3 text-[rgba(201,162,75,0.55)]">&mdash;</span>
          <span>Recover</span>
        </p>

        {/* H1 */}
        <h1
          className="pi-reveal font-serifDisplay font-normal tracking-[-0.03em] text-[#F4F1EA]"
          id="pi-hero-title"
          style={{
            animationDelay: "200ms",
            fontSize: "clamp(52px, 8.5vw, 118px)",
            lineHeight: "0.95",
            fontVariationSettings: headlineAxes,
          }}
        >
          Personal Injury
          <span aria-hidden="true" style={{ color: GOLD }}>.</span>
        </h1>

        {/* Gold accent rule */}
        <span
          aria-hidden="true"
          className="pi-reveal block"
          style={{ animationDelay: "280ms", width: "56px", height: "2px", background: GOLD, marginTop: "28px", marginBottom: "28px" }}
        />

        {/* Tagline */}
        <p
          className="pi-reveal max-w-[680px] font-sans text-[18px] leading-[1.55] text-[rgba(244,241,234,0.85)] md:text-[20px]"
          style={{ animationDelay: "340ms" }}
        >
          When someone else&rsquo;s mistake costs you, we make them answer for it.
        </p>
      </div>
    </div>
  </section>
);

const Body = (): JSX.Element => (
  <section
    aria-labelledby="pi-body-heading"
    className="relative w-full overflow-hidden"
    style={{ backgroundColor: "#FFFFFF", color: "#0B1F3A" }}
  >
    <div className="relative mx-auto w-full max-w-[820px] px-6 pb-20 pt-20 sm:px-10 lg:pb-[120px] lg:pt-[120px]">
      {/* Overview eyebrow + intro */}
      <p className="pi-reveal flex items-center gap-3 font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#0B1F3A]">
        <span aria-hidden="true" className="h-px w-8" style={{ backgroundColor: "#B88A2D" }} />
        Overview
      </p>
      <h2 className="sr-only" id="pi-body-heading">How we handle personal injury claims</h2>
      <p
        className="pi-reveal mt-7 font-serifDisplay text-[22px] font-normal leading-[1.5] tracking-[-0.01em] text-[#0B1F3A] sm:text-[24px] lg:text-[26px]"
        style={{ animationDelay: "80ms", fontVariationSettings: subHeadAxes }}
      >
        {intro}
      </p>

      {/* Sub-topics — single column, no boxes */}
      <div className="mt-20 space-y-16 lg:mt-24 lg:space-y-20">
        {topics.map((topic) => (
          <article key={topic.title}>
            <span aria-hidden="true" className="block h-px w-10" style={{ backgroundColor: "#B88A2D" }} />
            <h3
              className="mt-6 font-serifDisplay font-normal leading-[1.12] tracking-[-0.02em] text-[#0B1F3A]"
              style={{ fontSize: "clamp(26px, 3.4vw, 38px)", fontVariationSettings: subHeadAxes }}
            >
              {topic.title}
            </h3>
            <p className="mt-5 font-sans text-[18px] leading-[1.7] text-[#3A4A63] lg:text-[19px]">
              {topic.body}
            </p>
            <ul className="mt-6 space-y-2.5">
              {topic.items.map((item) => (
                <li className="flex items-start gap-3 font-sans text-[17px] leading-[1.55] text-[#3A4A63]" key={item}>
                  <span aria-hidden="true" className="mt-[8px] h-[5px] w-[5px] shrink-0 rounded-full" style={{ backgroundColor: "#B88A2D" }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const CaseTypes = (): JSX.Element => (
  <section aria-labelledby="pi-casetypes-heading" className="relative w-full" style={{ backgroundColor: "#FFFFFF", color: "#0B1F3A" }}>
    <div className="relative mx-auto w-full max-w-[1180px] px-6 pb-20 pt-20 sm:px-10 lg:px-16 lg:pb-[120px] lg:pt-[120px]">
      <p className="flex items-center gap-3 font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#0B1F3A]">
        <span aria-hidden="true" className="h-px w-8" style={{ backgroundColor: "#B88A2D" }} />
        Case types
      </p>
      <h2
        className="mt-6 max-w-[760px] font-serifDisplay font-normal leading-[1.05] tracking-[-0.025em] text-[#0B1F3A]"
        id="pi-casetypes-heading"
        style={{ fontSize: "clamp(30px, 4vw, 52px)", fontVariationSettings: headlineAxes }}
      >
        Cases we take on
        <span aria-hidden="true" style={{ color: "#B88A2D" }}>.</span>
      </h2>

      <ul className="mt-12 grid grid-cols-1 gap-x-12 gap-y-4 border-t border-[#0B1F3A]/12 pt-10 sm:grid-cols-2 lg:grid-cols-3">
        {caseTypes.map((type) => (
          <li className="flex items-start gap-3 font-sans text-[18px] leading-[1.5] text-[#3A4A63]" key={type}>
            <span aria-hidden="true" className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full" style={{ backgroundColor: "#B88A2D" }} />
            <span>{type}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export const PersonalInjuryPage = (): JSX.Element => {
  useEffect(() => {
    document.title = "Personal Injury Lawyers | ATLAW";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content =
      "Hurt because of someone else? ATLAW handles the insurers, the deadlines, and the paperwork so you can focus on recovering. Car accidents, malpractice, wrongful death, and more.";
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return (
    <div className="atlaw-pi min-h-screen bg-ivory text-ink">
      <Header />
      <main>
        <Hero />
        <Body />
        <CaseTypes />
        <ServiceAreas />
      </main>
      <Footer />
    </div>
  );
};
