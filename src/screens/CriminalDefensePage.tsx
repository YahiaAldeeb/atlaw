import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/ATLAW/Header";
import { Footer } from "../components/ATLAW/Footer";
// Reuse the Personal Injury page's scoped motion/grain helpers so this page
// reads as a true sibling (same `.atlaw-pi` reveal + watermark language).
import "./PersonalInjury.css";

const GOLD = "#C9A24B";
const headlineAxes = "'opsz' 144, 'wght' 360, 'SOFT' 0, 'WONK' 0";
const subHeadAxes = "'opsz' 96, 'wght' 400, 'SOFT' 0, 'WONK' 0";

const navyCanvas = "linear-gradient(180deg, #0E1B33 0%, #0A1428 100%)";

// Hero photo (served from /public/assets, mirroring the Personal Injury hero).
// The image itself is applied via the `.cd-hero-bg` class in PersonalInjury.css,
// which serves AVIF (~26 KB) through image-set() with a PNG (~1.8 MB) fallback
// for browsers without AVIF support. The navy gradient + veil below keep the
// white headline legible over the image.

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
  "A criminal charge puts your freedom, your job, and your name on the line, and the system does not wait for you to catch up. From the first arrest, the government is building a case. We get in early, look at how the evidence against you was actually gathered, and start pushing back before the situation hardens. You work with a lawyer who answers your calls, tells you plainly where you stand, and keeps one charge from deciding the rest of your life.";

const howWeWork: string[] = [
  "We read your file the way the prosecutor will. We look at how you were stopped, searched, and questioned, whether the police followed the rules, and whether the evidence holds up under pressure. A bad stop or an unlawful search can take a case apart before it ever reaches trial.",
  "Where the facts are on your side, we fight to get the charges dropped or thrown out. Where they are not, we negotiate hard for reduced charges, diversion, or a sentence that lets you keep your life together. And when a case needs to be tried, we try it. We have handled matters in both state and federal court, and we prepare every file as if it is going in front of a jury.",
  "We keep you in the loop the whole way through. No legal jargon for its own sake, no surprises the day before a hearing. You will know what is happening, what your options are, and what we think you should do.",
];

type ServiceArea = { title: string; body?: string; items: string[] };

const serviceAreas: ServiceArea[] = [
  {
    title: "DUI and DWI",
    body: "A first arrest and a third arrest are different problems, and we treat them that way.",
    items: [
      "Breathalyzer and field sobriety challenges",
      "License suspension hearings",
      "Felony and repeat-offense DUI",
      "Underage DUI",
    ],
  },
  {
    title: "Drug Charges",
    body: "From simple possession to trafficking, the right defense often starts with how the drugs were found.",
    items: [
      "Possession",
      "Possession with intent to distribute",
      "Trafficking and distribution",
      "Prescription fraud",
      "Drug-court and diversion eligibility",
    ],
  },
  {
    title: "Assault and Violent Crimes",
    items: [
      "Simple and aggravated assault",
      "Battery",
      "Domestic violence",
      "Robbery",
      "Weapons charges",
    ],
  },
  {
    title: "Theft and Property Crimes",
    items: [
      "Shoplifting and petty theft",
      "Grand theft and larceny",
      "Burglary",
      "Fraud and forgery",
      "Receiving stolen property",
    ],
  },
  {
    title: "White Collar Crimes",
    body: "These cases turn on documents and intent, and they reward early, careful defense work.",
    items: [
      "Embezzlement",
      "Wire and mail fraud",
      "Identity theft",
      "Money laundering",
      "Tax-related charges",
    ],
  },
  {
    title: "Federal Crimes",
    body: "Federal cases carry their own rules, their own court, and tougher sentencing. We are ready for both.",
    items: [
      "Federal drug and weapons charges",
      "Conspiracy",
      "Federal fraud",
      "Grand jury representation",
    ],
  },
  {
    title: "Juvenile Defense",
    body: "One mistake should not follow a kid into adulthood.",
    items: [
      "Juvenile court proceedings",
      "School discipline matters",
      "Sealing of juvenile records",
    ],
  },
  {
    title: "After the Case",
    body: "A conviction does not have to be the end of the conversation.",
    items: [
      "Expungement and record sealing",
      "Probation violation hearings",
      "Appeals",
      "Restoration of rights",
    ],
  },
];

/* ─────────────────────────────── sections ─────────────────────────────── */

const Hero = (): JSX.Element => (
  <section
    aria-labelledby="cd-hero-title"
    className="relative isolate w-full overflow-hidden"
    style={{ background: navyCanvas, color: "#F4F1EA" }}
  >
    {/* Background photo — AVIF via image-set() with PNG fallback (see .cd-hero-bg) */}
    <div
      aria-hidden="true"
      className="cd-hero-bg pointer-events-none absolute inset-0 z-0"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
    {/* Navy wash so the white headline stays legible across the full width */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0"
      style={{
        background:
          "linear-gradient(90deg, rgba(19,29,56,0.95) 0%, rgba(19,29,56,0.85) 35%, rgba(19,29,56,0.6) 75%, rgba(19,29,56,0.45) 100%)",
      }}
    />
    {/* Extra veil on narrow screens, where the text column runs full-width over the image */}
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
            <li><span aria-current="page" className="text-white">Criminal Defense</span></li>
          </ol>
        </nav>

        {/* Marker */}
        <p
          className="pi-reveal font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.28em]"
          style={{ animationDelay: "90ms", color: GOLD, marginBottom: "28px" }}
        >
          <span>04</span>
          <span aria-hidden="true" className="mx-3 text-[rgba(201,162,75,0.55)]">&mdash;</span>
          <span>Defend</span>
        </p>

        {/* H1 */}
        <h1
          className="pi-reveal font-serifDisplay font-normal tracking-[-0.03em] text-[#F4F1EA]"
          id="cd-hero-title"
          style={{
            animationDelay: "200ms",
            fontSize: "clamp(52px, 8.5vw, 118px)",
            lineHeight: "0.95",
            fontVariationSettings: headlineAxes,
          }}
        >
          Criminal Defense
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
          When the charge is serious, the defense has to be too.
        </p>
      </div>
    </div>
  </section>
);

const Body = (): JSX.Element => (
  <section
    aria-labelledby="cd-body-heading"
    className="relative w-full overflow-hidden"
    style={{ backgroundColor: "#FFFFFF", color: "#0B1F3A" }}
  >
    <div className="relative mx-auto w-full max-w-[820px] px-6 pb-20 pt-20 sm:px-10 lg:pb-[120px] lg:pt-[120px]">
      {/* Overview eyebrow + lead */}
      <p className="pi-reveal flex items-center gap-3 font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#0B1F3A]">
        <span aria-hidden="true" className="h-px w-8" style={{ backgroundColor: "#B88A2D" }} />
        Overview
      </p>
      <h2 className="sr-only" id="cd-body-heading">How we defend criminal charges</h2>
      <p
        className="pi-reveal mt-7 font-serifDisplay text-[22px] font-normal leading-[1.5] tracking-[-0.01em] text-[#0B1F3A] sm:text-[24px] lg:text-[26px]"
        style={{ animationDelay: "80ms", fontVariationSettings: subHeadAxes }}
      >
        {intro}
      </p>

      {/* How we work — single column, no boxes */}
      <div className="mt-20 lg:mt-24">
        <span aria-hidden="true" className="block h-px w-10" style={{ backgroundColor: "#B88A2D" }} />
        <h3
          className="mt-6 font-serifDisplay font-normal leading-[1.12] tracking-[-0.02em] text-[#0B1F3A]"
          style={{ fontSize: "clamp(26px, 3.4vw, 38px)", fontVariationSettings: subHeadAxes }}
        >
          How we work
        </h3>
        <div className="mt-5 space-y-6">
          {howWeWork.map((paragraph) => (
            <p
              className="font-sans text-[18px] leading-[1.7] text-[#3A4A63] lg:text-[19px]"
              key={paragraph}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const ServiceAreasSection = (): JSX.Element => (
  <section
    aria-labelledby="cd-service-areas-heading"
    className="relative w-full"
    style={{ backgroundColor: "#FFFFFF", color: "#0B1F3A" }}
  >
    <div className="relative mx-auto w-full max-w-[1180px] px-6 pb-20 pt-20 sm:px-10 lg:px-16 lg:pb-[120px] lg:pt-[120px]">
      {/* Numbered overline — rendered exactly as 05—Service Areas */}
      <p className="font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.28em] text-[#B88A2D]">
        05&mdash;Service Areas
      </p>
      <h2
        className="mt-6 max-w-[760px] font-serifDisplay font-normal leading-[1.05] tracking-[-0.025em] text-[#0B1F3A]"
        id="cd-service-areas-heading"
        style={{ fontSize: "clamp(30px, 4vw, 52px)", fontVariationSettings: headlineAxes }}
      >
        What we defend
        <span aria-hidden="true" style={{ color: "#B88A2D" }}>.</span>
      </h2>

      {/* Two-column on desktop, one column on mobile */}
      <div className="mt-12 grid grid-cols-1 gap-x-16 gap-y-14 border-t border-[#0B1F3A]/12 pt-12 sm:grid-cols-2">
        {serviceAreas.map((area) => (
          <div key={area.title}>
            <h3 className="font-sans text-[18px] font-semibold leading-[1.3] tracking-[-0.005em] text-[#0B1F3A] lg:text-[19px]">
              {area.title}
            </h3>
            {area.body && (
              <p className="mt-3 font-sans text-[16px] leading-[1.6] text-[#3A4A63]">
                {area.body}
              </p>
            )}
            <ul className="mt-4 space-y-2.5">
              {area.items.map((item) => (
                <li className="flex items-start gap-3 font-sans text-[17px] leading-[1.5] text-[#3A4A63]" key={item}>
                  <span aria-hidden="true" className="mt-[8px] h-[5px] w-[5px] shrink-0 rounded-full" style={{ backgroundColor: "#B88A2D" }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ClosingCta = (): JSX.Element => (
  <section
    aria-labelledby="cd-cta-heading"
    className="relative isolate w-full overflow-hidden bg-[linear-gradient(180deg,#0e1b33_0%,#0a1428_100%)] text-white"
  >
    <Grain />
    <div className="relative mx-auto flex w-full max-w-[1180px] flex-col items-center px-6 py-[72px] text-center sm:px-10 md:py-[96px] lg:px-20 lg:py-[112px]">
      <span aria-hidden="true" className="block h-px w-[56px] bg-[#B88A2D]" />
      <h2
        className="mt-8 max-w-[840px] font-serifDisplay font-normal leading-[1.05] tracking-[-0.02em] text-white text-[clamp(34px,5.5vw,68px)]"
        id="cd-cta-heading"
        style={{ fontVariationSettings: headlineAxes }}
      >
        Charged with a crime? Talk to us today
        <span aria-hidden="true" className="text-[#B88A2D]">.</span>
      </h2>
      <Link
        className="group mt-12 inline-flex h-[64px] w-full max-w-[320px] items-center justify-center gap-2.5 rounded-full bg-white px-9 font-sans text-[15px] font-medium text-[#0B1F3A] transition-all duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88A2D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1F3A] lg:h-[68px]"
        to="/contact"
      >
        Get started
        <span aria-hidden="true" className="transition-transform duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">&rarr;</span>
      </Link>
    </div>
  </section>
);

export const CriminalDefensePage = (): JSX.Element => {
  useEffect(() => {
    document.title = "Criminal Defense | ATLAW Litigation";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content =
      "Facing serious criminal charges? ATLAW defends DUI, drug, assault, theft, white-collar, federal, and juvenile cases in state and federal court — from the first arrest through trial, sentencing, and expungement.";
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return (
    <div className="atlaw-pi min-h-screen bg-ivory text-ink">
      <Header />
      <main>
        <Hero />
        <Body />
        <ServiceAreasSection />
        <ClosingCta />
      </main>
      <Footer />
    </div>
  );
};
