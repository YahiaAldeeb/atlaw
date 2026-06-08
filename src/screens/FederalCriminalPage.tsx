import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/ATLAW/Header";
import { Footer } from "../components/ATLAW/Footer";
// Reuse the Personal Injury page's scoped motion/grain helpers so this page
// reads as a true sibling of Criminal Defense (same `.pi-reveal` reveal language).
import "./PersonalInjury.css";

const GOLD = "#C9A24B";
const headlineAxes = "'opsz' 144, 'wght' 360, 'SOFT' 0, 'WONK' 0";
const subHeadAxes = "'opsz' 96, 'wght' 400, 'SOFT' 0, 'WONK' 0";

const navyCanvas = "linear-gradient(180deg, #0E1B33 0%, #0A1428 100%)";

// Hero photo (served from /public/assets, mirroring the Criminal Defense hero).
// Applied via the `.fc-hero-bg` class in PersonalInjury.css — currently a
// placeholder copy of the Criminal Defense hero; swap
// /assets/federal-criminal-hero.{avif,png} to change it. The navy gradient +
// veil below keep the white headline legible over the image.

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
  "A federal case is not a bigger version of a state case. It is a different fight. By the time you learn you are a target, agents have often been building the case for months, sometimes years, with subpoenas, wiretaps, and cooperating witnesses you never knew about. The government does not bring federal charges unless it believes it can win, and the numbers back that up: the vast majority of federal defendants are convicted, most of them by plea. The smartest move is almost always to get a defense lawyer involved before the indictment, while there is still room to change the outcome.";

const howWeWork: string[] = [
  "The most important work in a federal case often happens before a charge is ever filed. If you have gotten a target letter, a grand jury subpoena, or a knock on the door from the FBI, IRS, DEA, or another agency, what you do in the next few days matters enormously. We deal directly with the prosecutors, control what gets handed over, and look for ways to keep charges from being filed at all, or to narrow them if they are.",
  "Once a case is charged, we work the parts that decide it. We dig through the discovery, which in a federal case can run to hundreds of thousands of pages, and we challenge how the evidence was gathered, whether the search was lawful, and whether the government can actually prove what it claims. We litigate bail and detention so you are not sitting in custody while the case drags on.",
  "Federal sentencing is its own discipline, and it is where a lot of cases are really won or lost. Sentences are driven by the federal Sentencing Guidelines, and there is no parole in the federal system, so the number a judge lands on is close to the number you serve. We build the mitigation case early, fight the Guidelines calculation point by point, and argue hard for a sentence below it.",
  "You will always know where things stand and what we think you should do. No jargon for its own sake, no surprises before a hearing.",
];

type ServiceArea = { title: string; body?: string; items: string[] };

const serviceAreas: ServiceArea[] = [
  {
    title: "Before Charges Are Filed",
    body: "The federal case you can influence most is the one that hasn’t been filed yet.",
    items: [
      "Target-letter and subpoena response",
      "Grand jury representation",
      "FBI, DEA, IRS, and ATF investigations",
      "Pre-indictment negotiation",
      "Internal and white-collar investigations",
    ],
  },
  {
    title: "Federal Drug Crimes",
    body: "Federal drug charges carry mandatory minimums that state cases usually don’t.",
    items: [
      "Drug conspiracy",
      "Trafficking and distribution",
      "Manufacturing",
      "Mandatory-minimum and safety-valve issues",
    ],
  },
  {
    title: "White Collar and Fraud",
    body: "These cases turn on documents and intent, and early defense work pays off.",
    items: [
      "Wire and mail fraud",
      "Bank and securities fraud",
      "Healthcare fraud",
      "Tax evasion and tax fraud",
      "Embezzlement and money laundering",
    ],
  },
  {
    title: "Weapons and Violent Crimes",
    items: [
      "Felon in possession",
      "Firearms trafficking",
      "Armed career criminal cases",
      "RICO and racketeering",
    ],
  },
  {
    title: "Conspiracy and Organized Crime",
    body: "A conspiracy charge can pull you in for what other people did.",
    items: [
      "Federal conspiracy",
      "RICO",
      "Continuing criminal enterprise",
    ],
  },
  {
    title: "Other Federal Offenses",
    items: [
      "Immigration-related crimes",
      "Cybercrime and computer fraud",
      "Public corruption",
      "Counterfeiting and forgery",
    ],
  },
  {
    title: "Sentencing and After",
    body: "The case isn’t over when the verdict comes in.",
    items: [
      "Sentencing Guidelines advocacy and mitigation",
      "Federal appeals",
      "Habeas corpus petitions",
      "Sentence reduction and compassionate release",
    ],
  },
];

/* ─────────────────────────────── sections ─────────────────────────────── */

const Hero = (): JSX.Element => (
  <section
    aria-labelledby="fc-hero-title"
    className="relative isolate w-full overflow-hidden"
    style={{ background: navyCanvas, color: "#F4F1EA" }}
  >
    {/* Background photo — AVIF via image-set() with PNG fallback (see .fc-hero-bg) */}
    <div
      aria-hidden="true"
      className="fc-hero-bg pointer-events-none absolute inset-0 z-0"
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
            <li><span aria-current="page" className="text-white">Federal Criminal</span></li>
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
          id="fc-hero-title"
          style={{
            animationDelay: "200ms",
            fontSize: "clamp(52px, 8.5vw, 118px)",
            lineHeight: "0.95",
            fontVariationSettings: headlineAxes,
          }}
        >
          Federal Criminal
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
          When the government comes with everything, you need more than a local lawyer.
        </p>
      </div>
    </div>
  </section>
);

const Body = (): JSX.Element => (
  <section
    aria-labelledby="fc-body-heading"
    className="relative w-full overflow-hidden"
    style={{ backgroundColor: "#FFFFFF", color: "#0B1F3A" }}
  >
    <div className="relative mx-auto w-full max-w-[820px] px-6 pb-20 pt-20 sm:px-10 lg:pb-[120px] lg:pt-[120px]">
      {/* Overview eyebrow + lead */}
      <p className="pi-reveal flex items-center gap-3 font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#0B1F3A]">
        <span aria-hidden="true" className="h-px w-8" style={{ backgroundColor: "#B88A2D" }} />
        Overview
      </p>
      <h2 className="sr-only" id="fc-body-heading">How we defend federal criminal cases</h2>
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
    aria-labelledby="fc-service-areas-heading"
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
        id="fc-service-areas-heading"
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
    aria-labelledby="fc-cta-heading"
    className="relative isolate w-full overflow-hidden bg-[linear-gradient(180deg,#0e1b33_0%,#0a1428_100%)] text-white"
  >
    <Grain />
    <div className="relative mx-auto flex w-full max-w-[1180px] flex-col items-center px-6 py-[72px] text-center sm:px-10 md:py-[96px] lg:px-20 lg:py-[112px]">
      <span aria-hidden="true" className="block h-px w-[56px] bg-[#B88A2D]" />
      <h2
        className="mt-8 max-w-[840px] font-serifDisplay font-normal leading-[1.05] tracking-[-0.02em] text-white text-[clamp(34px,5.5vw,68px)]"
        id="fc-cta-heading"
        style={{ fontVariationSettings: headlineAxes }}
      >
        Under federal investigation? Call before they charge you
        <span aria-hidden="true" className="text-[#B88A2D]">.</span>
      </h2>
      <Link
        className="group mt-12 inline-flex h-[64px] w-full max-w-[320px] items-center justify-center gap-2.5 rounded-full bg-white px-9 font-sans text-[15px] font-medium text-[#0B1F3A] transition-all duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88A2D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1F3A] lg:h-[68px]"
        to="/connect"
      >
        Get started
        <span aria-hidden="true" className="transition-transform duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">&rarr;</span>
      </Link>
    </div>
  </section>
);

export const FederalCriminalPage = (): JSX.Element => {
  useEffect(() => {
    document.title = "Federal Criminal Defense | ATLAW Practice Areas";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content =
      "Under federal investigation or facing federal charges? ATLAW defends federal drug, fraud, white-collar, weapons, conspiracy, and RICO cases — from pre-indictment and grand jury practice through trial, the Sentencing Guidelines, and appeals.";

    // Carry over the site verification meta tag (managed here so it is present
    // on direct loads of this route). Replace the content value with the real
    // google-site-verification token when available.
    let verify = document.querySelector('meta[name="google-site-verification"]') as HTMLMetaElement | null;
    if (!verify) {
      verify = document.createElement("meta");
      verify.name = "google-site-verification";
      verify.content = "";
      document.head.appendChild(verify);
    }

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
