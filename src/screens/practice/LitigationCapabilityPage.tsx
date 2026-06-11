import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/ATLAW/Header";
import { Footer } from "../../components/ATLAW/Footer";
import type { LitigationCapabilityData } from "../../data/practice/types";
// Reuse the Personal Injury page's scoped motion/grain helpers + the
// `.{prefix}-hero-bg` background classes.
import "../PersonalInjury.css";

const GOLD = "#C9A24B";
const headlineAxes = "'opsz' 144, 'wght' 360, 'SOFT' 0, 'WONK' 0";
const subHeadAxes = "'opsz' 96, 'wght' 400, 'SOFT' 0, 'WONK' 0";

const navyCanvas = "linear-gradient(180deg, #0E1B33 0%, #0A1428 100%)";

const grain =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

const Grain = (): JSX.Element => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 opacity-[0.05]"
    style={{ backgroundImage: grain }}
  />
);

/**
 * Litigation / Defend capability-page template.
 * Markup is verbatim from the original per-page implementations (Criminal
 * Defense, DUI, Federal Criminal, White Collar, Civil Litigation); only the
 * copy and the hero-background CSS class are data.
 */
export const LitigationCapabilityPage = ({ data }: { data: LitigationCapabilityData }): JSX.Element => {
  const { idPrefix, heroBgClass, hero, intro, intro2, howWeWork, servicesHeading, serviceAreas, cta } = data;

  useEffect(() => {
    document.title = data.seoTitle;
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = data.seoDescription;
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [data.seoTitle, data.seoDescription]);

  return (
    <div className="atlaw-pi min-h-screen bg-ivory text-ink">
      <Header />
      <main>
        {/* ── Hero ── */}
        <section
          aria-labelledby={`${idPrefix}-hero-title`}
          className="relative isolate w-full overflow-hidden"
          style={{ background: navyCanvas, color: "#F4F1EA" }}
        >
          <div
            aria-hidden="true"
            className={`${heroBgClass} pointer-events-none absolute inset-0 z-0`}
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(19,29,56,0.95) 0%, rgba(19,29,56,0.85) 35%, rgba(19,29,56,0.6) 75%, rgba(19,29,56,0.45) 100%)",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 bg-[rgba(19,29,56,0.55)] md:hidden"
          />

          <Grain />

          <div className="relative z-10 mx-auto w-full max-w-[1180px] px-6 pb-[96px] pt-[72px] sm:px-10 md:pb-[120px] md:pt-[104px] lg:px-16 lg:pb-[140px] lg:pt-[120px]">
            <div className="max-w-[820px]">
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
                  <li><span aria-current="page" className="text-white">{hero.breadcrumb}</span></li>
                </ol>
              </nav>

              <p
                className="pi-reveal font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.28em]"
                style={{ animationDelay: "90ms", color: GOLD, marginBottom: "28px" }}
              >
                <span>{hero.markerNumber}</span>
                <span aria-hidden="true" className="mx-3 text-[rgba(201,162,75,0.55)]">&mdash;</span>
                <span>{hero.markerWord}</span>
              </p>

              <h1
                className="pi-reveal font-serifDisplay font-normal tracking-[-0.03em] text-[#F4F1EA]"
                id={`${idPrefix}-hero-title`}
                style={{
                  animationDelay: "200ms",
                  fontSize: "clamp(52px, 8.5vw, 118px)",
                  lineHeight: "0.95",
                  fontVariationSettings: headlineAxes,
                }}
              >
                {hero.title}
                <span aria-hidden="true" style={{ color: GOLD }}>.</span>
              </h1>

              <span
                aria-hidden="true"
                className="pi-reveal block"
                style={{ animationDelay: "280ms", width: "56px", height: "2px", background: GOLD, marginTop: "28px", marginBottom: "28px" }}
              />

              <p
                className="pi-reveal max-w-[680px] font-sans text-[18px] leading-[1.55] text-[rgba(244,241,234,0.85)] md:text-[20px]"
                style={{ animationDelay: "340ms" }}
              >
                {hero.tagline}
              </p>
            </div>
          </div>
        </section>

        {/* ── Body: intro + how we work (paragraphs) ── */}
        <section
          aria-labelledby={`${idPrefix}-body-heading`}
          className="relative w-full overflow-hidden"
          style={{ backgroundColor: "#FFFFFF", color: "#0B1F3A" }}
        >
          <div className="relative mx-auto w-full max-w-[820px] px-6 pb-20 pt-20 sm:px-10 lg:pb-[120px] lg:pt-[120px]">
            <p className="pi-reveal flex items-center gap-3 font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#0B1F3A]">
              <span aria-hidden="true" className="h-px w-8" style={{ backgroundColor: "#B88A2D" }} />
              Overview
            </p>
            <h2 className="sr-only" id={`${idPrefix}-body-heading`}>{servicesHeading}</h2>
            <p
              className="pi-reveal mt-7 font-serifDisplay text-[22px] font-normal leading-[1.5] tracking-[-0.01em] text-[#0B1F3A] sm:text-[24px] lg:text-[26px]"
              style={{ animationDelay: "80ms", fontVariationSettings: subHeadAxes }}
            >
              {intro}
            </p>
            {intro2 && (
              <p
                className="pi-reveal mt-6 font-sans text-[18px] leading-[1.7] text-[#3A4A63] lg:text-[19px]"
                style={{ animationDelay: "120ms" }}
              >
                {intro2}
              </p>
            )}

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

        {/* ── Service areas grid ── */}
        <section
          aria-labelledby={`${idPrefix}-service-areas-heading`}
          className="relative w-full"
          style={{ backgroundColor: "#FFFFFF", color: "#0B1F3A" }}
        >
          <div className="relative mx-auto w-full max-w-[1180px] px-6 pb-20 pt-20 sm:px-10 lg:px-16 lg:pb-[120px] lg:pt-[120px]">
            <p className="font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.28em] text-[#B88A2D]">
              05&mdash;Service Areas
            </p>
            <h2
              className="mt-6 max-w-[760px] font-serifDisplay font-normal leading-[1.05] tracking-[-0.025em] text-[#0B1F3A]"
              id={`${idPrefix}-service-areas-heading`}
              style={{ fontSize: "clamp(30px, 4vw, 52px)", fontVariationSettings: headlineAxes }}
            >
              {servicesHeading}
              <span aria-hidden="true" style={{ color: "#B88A2D" }}>.</span>
            </h2>

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

        {/* ── Closing CTA ── */}
        <section
          aria-labelledby={`${idPrefix}-cta-heading`}
          className="relative isolate w-full overflow-hidden bg-[linear-gradient(180deg,#0e1b33_0%,#0a1428_100%)] text-white"
        >
          <Grain />
          <div className="relative mx-auto flex w-full max-w-[1180px] flex-col items-center px-6 py-[72px] text-center sm:px-10 md:py-[96px] lg:px-20 lg:py-[112px]">
            <span aria-hidden="true" className="block h-px w-[56px] bg-[#B88A2D]" />
            <h2
              className="mt-8 max-w-[840px] font-serifDisplay font-normal leading-[1.05] tracking-[-0.02em] text-white text-[clamp(34px,5.5vw,68px)]"
              id={`${idPrefix}-cta-heading`}
              style={{ fontVariationSettings: headlineAxes }}
            >
              {cta.lead}
              <span aria-hidden="true" className="text-[#B88A2D]">{cta.accent}</span>
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
      </main>
      <Footer />
    </div>
  );
};
