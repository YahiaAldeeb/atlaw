import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/ATLAW/Header";
import { Footer } from "../components/ATLAW/Footer";
// Reuse the Personal Injury page's scoped motion/grain helpers so this page
// reads as a true sibling of Criminal Defense (same `.atlaw-pi` reveal language).
import "./PersonalInjury.css";

const GOLD = "#C9A24B";
const headlineAxes = "'opsz' 144, 'wght' 360, 'SOFT' 0, 'WONK' 0";
const subHeadAxes = "'opsz' 96, 'wght' 400, 'SOFT' 0, 'WONK' 0";

const navyCanvas = "linear-gradient(180deg, #0E1B33 0%, #0A1428 100%)";

// Hero photo (served from /public/assets, mirroring the Criminal Defense hero).
// The image itself is applied via the `.cl-hero-bg` class in PersonalInjury.css,
// which serves AVIF through image-set() with a PNG fallback for browsers without
// AVIF support. Swap /assets/civil-litigation-hero.{avif,png} to change it. The
// navy gradient + veil below keep the white headline legible over the image.

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
  "Most civil disputes are really about one question: is this worth the fight. A contract that fell apart, a partner who walked off with the business, a payment that never came, a deal that turned out to be something other than what was promised. You are not facing jail, but you are facing time, money, and risk, and the wrong call early on can cost you far more than the dispute itself. Our job is to tell you straight what your case is worth, what it will take to win it, and whether a fight is the smart move at all.";

const howWeWork: string[] = [
  "We start by pressure-testing your case the way the other side will. What are the facts, what can actually be proven, and where are you exposed. From there we map out the realistic outcomes and what each one costs, in dollars and in time, so you are deciding with clear eyes rather than emotion.",
  "A lot of disputes are better settled than tried, and we are not shy about saying so when it is true. We push for early resolution through negotiation, mediation, or arbitration when that gets you a better result than years in court. But settlement talks only work when the other side believes you are ready to go to trial, so we build every case as if it is headed to a courtroom. That preparation is what gives you leverage at the table.",
  "When a case does need to be tried, we try it. We handle discovery, motions, expert witnesses, and trial in both state and federal court, and we have taken cases all the way through appeal. Whether you are the one bringing the claim or defending against one, the approach is the same: know the facts cold, know your number, and never let the other side set the pace.",
  "You will always know where things stand, what your options are, and what we think is the smart move. No jargon for its own sake, no surprises before a hearing.",
];

type ServiceArea = { title: string; body?: string; items: string[] };

const serviceAreas: ServiceArea[] = [
  {
    title: "Business and Commercial Disputes",
    body: "When a deal or a relationship breaks down, the fight is usually about money and control.",
    items: [
      "Breach of contract",
      "Partnership and shareholder disputes",
      "Business torts and unfair competition",
      "Non-compete and trade secret disputes",
      "Fraud and misrepresentation",
    ],
  },
  {
    title: "Real Estate and Property",
    items: [
      "Purchase and sale disputes",
      "Landlord-tenant litigation",
      "Boundary and title disputes",
      "Construction defects and disputes",
      "Easement and zoning issues",
    ],
  },
  {
    title: "Employment",
    body: "Workplace disputes cut both ways, and we represent employers and employees alike.",
    items: [
      "Wrongful termination",
      "Discrimination and harassment claims",
      "Wage and hour disputes",
      "Severance and contract disputes",
      "Workplace retaliation",
    ],
  },
  {
    title: "Contract and Financial",
    items: [
      "Breach of contract and warranty",
      "Collections and debt disputes",
      "Loan and guaranty disputes",
      "Indemnity and insurance coverage",
    ],
  },
  {
    title: "Personal and Property Claims",
    items: [
      "Personal injury and negligence",
      "Property damage",
      "Defamation",
      "Consumer disputes",
    ],
  },
  {
    title: "Estate and Fiduciary Disputes",
    items: [
      "Will and trust contests",
      "Probate litigation",
      "Breach of fiduciary duty",
      "Guardianship and conservatorship disputes",
    ],
  },
  {
    title: "Resolution and Alternatives to Trial",
    body: "A win at trial is one option, not the only one.",
    items: [
      "Negotiation and demand strategy",
      "Mediation",
      "Arbitration",
      "Settlement and structured payouts",
    ],
  },
  {
    title: "Appeals and Post-Judgment",
    items: [
      "Appeals",
      "Enforcement of judgments",
      "Post-trial motions",
      "Collection on judgments",
    ],
  },
];

/* ─────────────────────────────── sections ─────────────────────────────── */

const Hero = (): JSX.Element => (
  <section
    aria-labelledby="cl-hero-title"
    className="relative isolate w-full overflow-hidden"
    style={{ background: navyCanvas, color: "#F4F1EA" }}
  >
    {/* Background photo — AVIF via image-set() with PNG fallback (see .cl-hero-bg) */}
    <div
      aria-hidden="true"
      className="cl-hero-bg pointer-events-none absolute inset-0 z-0"
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
            <li><span aria-current="page" className="text-white">Civil Litigation</span></li>
          </ol>
        </nav>

        {/* Marker */}
        <p
          className="pi-reveal font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.28em]"
          style={{ animationDelay: "90ms", color: GOLD, marginBottom: "28px" }}
        >
          <span>04</span>
          <span aria-hidden="true" className="mx-3 text-[rgba(201,162,75,0.55)]">&mdash;</span>
          <span>Resolve</span>
        </p>

        {/* H1 */}
        <h1
          className="pi-reveal font-serifDisplay font-normal tracking-[-0.03em] text-[#F4F1EA]"
          id="cl-hero-title"
          style={{
            animationDelay: "200ms",
            fontSize: "clamp(52px, 8.5vw, 118px)",
            lineHeight: "0.95",
            fontVariationSettings: headlineAxes,
          }}
        >
          Civil Litigation
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
          Some disputes settle. Some go to trial. We prepare for both from day one.
        </p>
      </div>
    </div>
  </section>
);

const Body = (): JSX.Element => (
  <section
    aria-labelledby="cl-body-heading"
    className="relative w-full overflow-hidden"
    style={{ backgroundColor: "#FFFFFF", color: "#0B1F3A" }}
  >
    <div className="relative mx-auto w-full max-w-[820px] px-6 pb-20 pt-20 sm:px-10 lg:pb-[120px] lg:pt-[120px]">
      {/* Overview eyebrow + lead */}
      <p className="pi-reveal flex items-center gap-3 font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#0B1F3A]">
        <span aria-hidden="true" className="h-px w-8" style={{ backgroundColor: "#B88A2D" }} />
        Overview
      </p>
      <h2 className="sr-only" id="cl-body-heading">How we handle civil disputes</h2>
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
    aria-labelledby="cl-service-areas-heading"
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
        id="cl-service-areas-heading"
        style={{ fontSize: "clamp(30px, 4vw, 52px)", fontVariationSettings: headlineAxes }}
      >
        What we handle
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
    aria-labelledby="cl-cta-heading"
    className="relative isolate w-full overflow-hidden bg-[linear-gradient(180deg,#0e1b33_0%,#0a1428_100%)] text-white"
  >
    <Grain />
    <div className="relative mx-auto flex w-full max-w-[1180px] flex-col items-center px-6 py-[72px] text-center sm:px-10 md:py-[96px] lg:px-20 lg:py-[112px]">
      <span aria-hidden="true" className="block h-px w-[56px] bg-[#B88A2D]" />
      <h2
        className="mt-8 max-w-[840px] font-serifDisplay font-normal leading-[1.05] tracking-[-0.02em] text-white text-[clamp(34px,5.5vw,68px)]"
        id="cl-cta-heading"
        style={{ fontVariationSettings: headlineAxes }}
      >
        In a dispute and not sure it&rsquo;s worth the fight? Let&rsquo;s talk it through
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

export const CivilLitigationPage = (): JSX.Element => {
  useEffect(() => {
    document.title = "Civil Litigation | ATLAW Practice Areas";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content =
      "In a civil dispute? ATLAW handles business and commercial litigation, real estate, employment, contract, estate and fiduciary disputes, and appeals — settling when settlement is smarter and building every case for trial in state and federal court.";

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
