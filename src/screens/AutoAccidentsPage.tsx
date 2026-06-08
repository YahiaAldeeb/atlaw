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
const heroImage = "/assets/auto-accidents-hero.avif";

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
  "A car crash can change your life in seconds. The medical bills start before you’ve left the hospital, you’re missing work, and the insurance company is already calling. Their goal is to pay you as little as they can get away with. Ours is to get you what the law actually says you’re owed.";

const bodyParagraphs: string[] = [
  "We handle auto accident claims from the first phone call through trial, if it comes to that. We deal with the insurers, gather the evidence, work with your doctors, and put a real number on what the crash cost you, including the costs that haven’t shown up yet.",
];

const accidentTypes: string[] = [
  "Car and passenger vehicle collisions",
  "Truck and commercial vehicle accidents",
  "Motorcycle accidents",
  "Rideshare accidents involving Uber and Lyft",
  "Pedestrian and bicycle accidents",
  "Hit-and-run and uninsured or underinsured driver claims",
  "Crashes caused by drunk or distracted drivers",
  "Wrongful death claims for families who lost someone",
];

const closingParagraphs: string[] = [
  "What you can recover depends on your case. It often includes medical treatment, lost income, future care, vehicle damage, and money for the pain you’re dealing with. You pay us nothing unless we win.",
  "If you’ve been in an accident, talk to us before you sign anything from an insurer or accept a settlement. Once you take their offer, that’s usually the end of it.",
];

/* ─────────────────────────────── sections ─────────────────────────────── */

const Hero = (): JSX.Element => (
  <section
    aria-labelledby="aa-hero-title"
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
            <li><span aria-current="page" className="text-white">Auto Accidents</span></li>
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
          id="aa-hero-title"
          style={{
            animationDelay: "200ms",
            fontSize: "clamp(52px, 8.5vw, 118px)",
            lineHeight: "0.95",
            fontVariationSettings: headlineAxes,
          }}
        >
          Auto Accidents
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
          The insurer is already working to pay you less. We make sure you get what you&rsquo;re owed.
        </p>
      </div>
    </div>
  </section>
);

const Body = (): JSX.Element => (
  <section
    aria-labelledby="aa-body-heading"
    className="relative w-full overflow-hidden"
    style={{ backgroundColor: "#FFFFFF", color: "#0B1F3A" }}
  >
    <div className="relative mx-auto w-full max-w-[820px] px-6 pb-20 pt-20 sm:px-10 lg:pb-[120px] lg:pt-[120px]">
      {/* Overview eyebrow + intro */}
      <p className="pi-reveal flex items-center gap-3 font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#0B1F3A]">
        <span aria-hidden="true" className="h-px w-8" style={{ backgroundColor: "#B88A2D" }} />
        Overview
      </p>
      <h2 className="sr-only" id="aa-body-heading">How we handle auto accident claims</h2>
      <p
        className="pi-reveal mt-7 font-serifDisplay text-[22px] font-normal leading-[1.5] tracking-[-0.01em] text-[#0B1F3A] sm:text-[24px] lg:text-[26px]"
        style={{ animationDelay: "80ms", fontVariationSettings: subHeadAxes }}
      >
        {intro}
      </p>

      {/* Running copy + a single list of accident types — no boxes, single column */}
      <div className="mt-12 space-y-6 lg:mt-14">
        {bodyParagraphs.map((paragraph) => (
          <p className="font-sans text-[18px] leading-[1.7] text-[#3A4A63] lg:text-[19px]" key={paragraph}>
            {paragraph}
          </p>
        ))}

        <p className="font-sans text-[18px] leading-[1.7] text-[#3A4A63] lg:text-[19px]">
          We represent people hurt in:
        </p>

        <ul className="space-y-2.5 pt-1">
          {accidentTypes.map((type) => (
            <li className="flex items-start gap-3 font-sans text-[17px] leading-[1.55] text-[#3A4A63]" key={type}>
              <span aria-hidden="true" className="mt-[8px] h-[5px] w-[5px] shrink-0 rounded-full" style={{ backgroundColor: "#B88A2D" }} />
              <span>{type}</span>
            </li>
          ))}
        </ul>

        {closingParagraphs.map((paragraph) => (
          <p className="font-sans text-[18px] leading-[1.7] text-[#3A4A63] lg:text-[19px]" key={paragraph}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  </section>
);

export const AutoAccidentsPage = (): JSX.Element => {
  useEffect(() => {
    document.title = "Auto Accident Lawyers | ATLAW";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content =
      "Hurt in a car crash? ATLAW handles the insurers, the evidence, and the deadlines so you can focus on recovering. Car, truck, motorcycle, rideshare, and wrongful death claims.";
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return (
    <div className="atlaw-pi min-h-screen bg-ivory text-ink">
      <Header />
      <main>
        <Hero />
        <Body />
        <ServiceAreas />
      </main>
      <Footer />
    </div>
  );
};
