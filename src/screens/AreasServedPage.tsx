import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/ATLAW/Header";
import { Footer } from "../components/ATLAW/Footer";
import { PageMeta } from "../components/ATLAW/PageMeta";
import { cities } from "../data/cities";
import "./PersonalInjury.css";

const GOLD = "#C9A24B";
const GOLD_ACCENT = "#B88A2D";
const GOLD_BRIGHT = "#C6A04A";
const INK = "#0B1F3A";
const STONE = "#3A4A63";
const NAVY_CANVAS = "linear-gradient(180deg, #0E1B33 0%, #0A1428 100%)";
const TYPEFORM_URL = "https://j098jiq3pk7.typeform.com/to/Mslg7Y7f";

const headlineAxes = "'opsz' 144, 'wght' 360, 'SOFT' 0, 'WONK' 0";
const subHeadAxes = "'opsz' 96, 'wght' 400, 'SOFT' 0, 'WONK' 0";

const grain =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

const Grain = ({ opacity = "0.05" }: { opacity?: string }) => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0"
    style={{ backgroundImage: grain, opacity: Number(opacity) }}
  />
);

const ArrowRight = ({ className = "" }: { className?: string }) => (
  <svg
    aria-hidden="true"
    className={`h-[14px] w-[14px] transition-transform duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${className}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
  </svg>
);

const PhoneIcon = () => (
  <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24">
    <rect height="16" rx="2" width="20" x="2" y="4" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export const AreasServedPage = (): JSX.Element => {
  const [activeCity, setActiveCity] = useState(cities[0].slug);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <PageMeta
        title="Areas Served | Personal Injury Lawyers | ATLAW"
        description="ATLAW represents injured clients across Southeast Michigan — Dearborn, Detroit, Dearborn Heights, Ann Arbor, Wayne County, Oakland County, and Macomb County. Free case review."
        canonical="/areas-served"
      />
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section
          aria-labelledby="areas-hero-title"
          className="relative w-full overflow-hidden"
          style={{ background: NAVY_CANVAS }}
        >
          <Grain opacity="0.05" />
          <div className="relative mx-auto w-full max-w-[1180px] px-6 pb-14 pt-20 text-center sm:px-10 md:pb-20 md:pt-28 lg:px-16">
            <h1
              className="pi-reveal mx-auto max-w-[800px] font-serifDisplay font-normal tracking-[-0.02em] text-white"
              id="areas-hero-title"
              style={{
                fontSize: "clamp(36px, 6vw, 72px)",
                lineHeight: "1.05",
                fontVariationSettings: headlineAxes,
              }}
            >
              Representing the Injured Across Michigan
              <span style={{ color: GOLD_ACCENT }}>.</span>
            </h1>

            <p
              className="pi-reveal mx-auto mt-5 max-w-[600px] font-sans text-[18px] leading-[1.6] text-white/75 md:text-[19px]"
              style={{ animationDelay: "120ms" }}
            >
              From our Dearborn headquarters, ATLAW fights for injury victims throughout Southeast Michigan.
            </p>

            <a
              className="pi-reveal group mt-8 inline-flex h-[56px] items-center justify-center gap-2.5 rounded-full px-9 font-sans text-[14px] font-semibold uppercase tracking-[0.04em] text-[#0E1B2C] transition-all duration-[240ms] hover:shadow-[0_8px_24px_rgba(198,160,74,0.35)] lg:h-[60px]"
              href={TYPEFORM_URL}
              rel="noopener noreferrer"
              style={{ animationDelay: "200ms", backgroundColor: GOLD_BRIGHT }}
              target="_blank"
            >
              Start Your Free Case Review
              <ArrowRight className="group-hover:translate-x-1" />
            </a>
          </div>
        </section>

        {/* City sidebar + cards layout */}
        <section aria-labelledby="areas-cities-heading" className="relative w-full overflow-hidden bg-white">
          <div className="relative mx-auto flex w-full max-w-[1180px] flex-col gap-8 px-6 py-16 sm:px-10 md:py-20 lg:flex-row lg:gap-12 lg:px-16 lg:py-24">
            {/* Sidebar nav */}
            <nav
              aria-label="City navigation"
              className="shrink-0 lg:sticky lg:top-[100px] lg:self-start lg:basis-[220px]"
            >
              <h2 className="sr-only" id="areas-cities-heading">Cities We Serve</h2>
              <p className="mb-4 font-sans text-[12px] font-semibold uppercase tracking-[0.22em]" style={{ color: STONE }}>
                Cities &amp; Counties
              </p>
              <ul className="flex flex-wrap gap-2 lg:flex-col lg:gap-0">
                {cities.map((c) => (
                  <li key={c.slug}>
                    <button
                      className={`w-full rounded-lg px-4 py-2.5 text-left font-sans text-[15px] font-medium transition-all duration-200 lg:rounded-none lg:border-l-2 lg:px-5 ${
                        activeCity === c.slug
                          ? "border-[#B88A2D] bg-[#B88A2D]/8 text-[#0B1F3A] lg:bg-transparent"
                          : "border-transparent text-[#3A4A63] hover:bg-[#F7F7F5] hover:text-[#0B1F3A]"
                      }`}
                      onClick={() => {
                        setActiveCity(c.slug);
                        const el = document.getElementById(`city-card-${c.slug}`);
                        if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
                      }}
                      type="button"
                    >
                      {c.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* City cards */}
            <div className="flex flex-1 flex-col gap-6">
              {cities.map((c) => (
                <article
                  className="group relative overflow-hidden rounded-[20px] shadow-[0_6px_24px_rgba(5,15,28,0.12)] transition-all duration-[300ms] hover:-translate-y-[2px] hover:shadow-[0_14px_36px_rgba(5,15,28,0.18)]"
                  id={`city-card-${c.slug}`}
                  key={c.slug}
                >
                  <div
                    className="relative flex min-h-[200px] flex-col justify-end px-8 pb-8 pt-16 sm:min-h-[240px] md:min-h-[260px]"
                    style={{ background: NAVY_CANVAS }}
                  >
                    <Grain opacity="0.06" />

                    <p
                      className="relative font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50"
                    >
                      {c.county}
                    </p>

                    <h3
                      className="relative mt-2 font-serifDisplay font-normal leading-[1.08] tracking-[-0.02em] text-white"
                      style={{
                        fontSize: "clamp(28px, 4vw, 44px)",
                        fontVariationSettings: subHeadAxes,
                      }}
                    >
                      {c.name}
                    </h3>

                    <p className="relative mt-3 max-w-[520px] font-sans text-[15px] leading-[1.6] text-white/70">
                      {c.localContext[0].substring(0, 180)}…
                    </p>

                    <Link
                      className="relative mt-5 inline-flex w-fit items-center gap-2 font-sans text-[13px] font-semibold uppercase tracking-[0.04em] transition-colors group-hover:text-white"
                      style={{ color: GOLD_BRIGHT }}
                      to={`/personal-injury/auto-accidents/${c.slug}`}
                    >
                      Learn More
                      <ArrowRight className="group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section aria-labelledby="areas-final-cta" className="w-full">
          <div className="relative isolate overflow-hidden text-white" style={{ background: NAVY_CANVAS }}>
            <Grain opacity="0.06" />
            <div className="relative mx-auto flex w-full max-w-[1180px] flex-col items-center px-6 py-12 text-center sm:px-10 md:py-16 lg:py-20">
              <h2
                className="font-serifDisplay font-normal leading-[1.06] tracking-[-0.02em] text-white"
                id="areas-final-cta"
                style={{ fontSize: "clamp(30px, 5vw, 56px)", fontVariationSettings: headlineAxes }}
              >
                Get a FREE Case Evaluation Today!
              </h2>
              <p className="mt-4 font-sans text-[16px] leading-[1.5] text-white/75 lg:text-[18px]">
                You Pay Nothing Unless We Win Your Case &mdash; Guaranteed.
              </p>
              <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
                <a
                  className="inline-flex h-[56px] w-full max-w-[280px] items-center justify-center gap-2.5 rounded-full px-8 font-sans text-[14px] font-semibold uppercase tracking-[0.04em] text-[#0B1F3A] transition-all duration-[240ms] hover:shadow-[0_8px_24px_rgba(198,160,74,0.35)] sm:w-auto lg:h-[60px]"
                  href="tel:+13134067606"
                  style={{ backgroundColor: GOLD_BRIGHT }}
                >
                  <PhoneIcon /> CALL
                </a>
                <a
                  className="inline-flex h-[56px] w-full max-w-[280px] items-center justify-center gap-2.5 rounded-full border border-white/40 bg-transparent px-8 font-sans text-[14px] font-semibold uppercase tracking-[0.04em] text-white transition-all duration-[240ms] hover:border-white hover:bg-white/10 sm:w-auto lg:h-[60px]"
                  href="mailto:info@atlawgroup.com"
                >
                  <MailIcon /> EMAIL
                </a>
              </div>
            </div>
          </div>
          <div className="w-full bg-[#081120]">
            <div className="mx-auto flex max-w-[1180px] flex-col items-center gap-1.5 px-6 py-7 text-center sm:px-10">
              <a
                className="font-serifDisplay font-normal leading-none tracking-[-0.02em] text-white transition-colors duration-200 hover:text-[#C6A04A] text-[clamp(24px, 4vw, 42px)]"
                href="tel:+13134067606"
                style={{ fontVariationSettings: headlineAxes }}
              >
                (313) 406-7606
              </a>
              <p className="font-sans text-[13px] tracking-[0.02em] text-white/55">We&rsquo;re here to help.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
