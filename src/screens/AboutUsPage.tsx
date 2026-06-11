import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/ATLAW/Header";
import { Footer } from "../components/ATLAW/Footer";

/* ────────────────────────────────────────────────────────────────────────────
   ATLAW — About Us
   Editorial "law as quiet authority" system (matches Hero / Footer):
   white canvas + deep-navy bands alternating, Lustria display serif, Mulish
   for labels, antique-gold (#C9A24B) used ONLY as hairline / period / marker.
   Copy is final and approved — see the About master prompt.
   ──────────────────────────────────────────────────────────────────────────── */

const GOLD = "#C9A24B";
const NAVY = "#0B1F3A";
const INK = "#0E1B2C";

// Intake + key destinations (real, not placeholder — verified against Footer / Hero).
const TYPEFORM = "https://j098jiq3pk7.typeform.com/to/Mslg7Y7f";
const PRACTICE_AREAS = "/practice-areas";
const OUR_PEOPLE = "/our-people";
const EMAIL = "info@atlawgroup.com";
const PHONE_DISPLAY = "(313) 406-7606";
const PHONE_HREF = "tel:+13134067606";

/* ── Shared bits ──────────────────────────────────────────────────────────── */

const ArrowRight = ({ className = "" }: { className?: string }): JSX.Element => (
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

/* Fade-up 12px on scroll; honours prefers-reduced-motion. */
const Reveal = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}): JSX.Element => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-[600ms] ease-out motion-reduce:transform-none motion-reduce:transition-none ${
        visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      } ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
};

const Eyebrow = ({
  num,
  label,
  onDark = false,
}: {
  num: string;
  label: string;
  onDark?: boolean;
}): JSX.Element => (
  <p className="flex items-center gap-4">
    <span aria-hidden="true" className="h-px w-[52px] shrink-0" style={{ backgroundColor: GOLD }} />
    <span
      className={`font-sans text-[12px] font-semibold uppercase tracking-[0.22em] ${
        onDark ? "text-white/65" : "text-[#7A7466]"
      }`}
    >
      <span style={{ color: GOLD }}>{num}</span> &mdash; {label}
    </span>
  </p>
);

// Gold "brand period" — the signature mark that closes every headline.
const Period = (): JSX.Element => (
  <span aria-hidden="true" style={{ color: GOLD }}>
    .
  </span>
);

type CtaVariant = "primaryLight" | "secondaryLight" | "primaryDark" | "secondaryDark";

const ctaBase =
  "group inline-flex h-[54px] items-center justify-center gap-2.5 rounded-full px-8 font-sans text-[15px] font-medium transition-all duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 lg:h-[58px] lg:px-9";

const ctaVariants: Record<CtaVariant, string> = {
  primaryLight:
    "bg-[#0E1B2C] text-white hover:bg-[#16263B] hover:shadow-[0_8px_24px_rgba(14,27,44,0.18)] focus-visible:ring-[#C9A24B] focus-visible:ring-offset-white",
  secondaryLight:
    "border border-[rgba(14,27,44,0.35)] text-[#0E1B2C] hover:border-[#0E1B2C] hover:bg-[#0E1B2C] hover:text-white focus-visible:ring-[#C9A24B] focus-visible:ring-offset-white",
  primaryDark:
    "bg-white text-[#0B1F3A] hover:shadow-[0_10px_28px_rgba(0,0,0,0.30)] focus-visible:ring-[#C9A24B] focus-visible:ring-offset-[#0B1F3A]",
  secondaryDark:
    "border border-white/35 text-white hover:border-white hover:bg-white hover:text-[#0B1F3A] focus-visible:ring-[#C9A24B] focus-visible:ring-offset-[#0B1F3A]",
};

const Cta = ({
  children,
  to,
  external = false,
  variant,
}: {
  children: React.ReactNode;
  to: string;
  external?: boolean;
  variant: CtaVariant;
}): JSX.Element => {
  const className = `${ctaBase} ${ctaVariants[variant]}`;
  const inner = (
    <>
      {children}
      <ArrowRight className="group-hover:translate-x-1" />
    </>
  );
  if (external) {
    return (
      <a className={className} href={to} rel="noopener noreferrer" target="_blank">
        {inner}
      </a>
    );
  }
  return (
    <Link className={className} to={to}>
      {inner}
    </Link>
  );
};

/* Subtle film grain — keeps navy bands from reading flat (shared with Hero/Footer). */
const grain =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

const SECTION = "mx-auto w-full max-w-[1240px] px-6 sm:px-10 lg:px-16";
const PAD = "py-[96px] md:py-[132px] lg:py-[160px]";

/* ── Data ─────────────────────────────────────────────────────────────────── */

const practiceTags = [
  "Personal Injury",
  "Business",
  "Criminal",
  "Estate",
  "Tax",
  "Immigration",
  "Litigation",
];

const steps = [
  {
    num: "01",
    title: "One call.",
    body:
      "Tell us what's going on. The first 30 minutes are free, and you'll leave the call knowing whether you have a matter worth pursuing — even if it's not with us.",
  },
  {
    num: "02",
    title: "The right attorney.",
    body:
      "We match your matter to the attorney who handles that area for us. No generalists stretching outside their lane.",
  },
  {
    num: "03",
    title: "One firm, start to finish.",
    body:
      "You get straight answers, regular updates, and a single firm accountable for the outcome — from the first call through resolution.",
  },
];

const practiceAreas = [
  { title: "Personal Injury", desc: "Real injuries, fully documented, properly valued." },
  { title: "Auto Accidents", desc: "Michigan no-fault claims handled from day one." },
  { title: "Business Law", desc: "Formation, contracts, disputes, and exits." },
  { title: "Franchising", desc: "Both sides of the franchise relationship." },
  { title: "Estate Planning", desc: "Wills, trusts, and plans that hold up." },
  { title: "Trust Litigation", desc: "When an estate plan becomes a fight." },
  { title: "Criminal Defense", desc: "Your side, prepared and presented properly." },
  { title: "DUI", desc: "Fast deadlines. We move first." },
  { title: "Tax", desc: "Planning, disputes, and IRS matters." },
  { title: "Intellectual Property", desc: "Protecting what you've built." },
  { title: "Immigration", desc: "Family, employment, and status matters." },
  { title: "Real Estate", desc: "Transactions and disputes, residential and commercial." },
  { title: "Litigation", desc: "When negotiation ends, we're ready." },
  { title: "Employment", desc: "For employees and employers alike." },
  { title: "Bankruptcy", desc: "A reset, handled with dignity." },
  { title: "Civil Rights", desc: "When institutions cross the line." },
];

/* ── Page ─────────────────────────────────────────────────────────────────── */

export const AboutUsPage = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-white text-[#0E1B2C] [zoom:1.12]">
      <Header />
      <main>
        {/* ══ 01 — HERO (light, split) ════════════════════════════════════ */}
        <section aria-labelledby="about-hero-heading" className="relative w-full overflow-hidden bg-white">
          <div className={`${SECTION} grid items-center gap-12 pb-20 pt-24 md:pb-24 md:pt-28 lg:grid-cols-[55fr_45fr] lg:gap-16 lg:pb-28 lg:pt-32`}>
            {/* Copy */}
            <div className="order-2 lg:order-1">
              <Reveal>
                <Eyebrow num="01" label="About ATLAW" />
              </Reveal>
              <Reveal delay={80}>
                <h1
                  id="about-hero-heading"
                  className="mt-8 max-w-[16ch] font-serifDisplay text-[40px] font-normal leading-[1.04] tracking-[-0.02em] sm:text-[52px] md:text-[60px] lg:text-[64px]"
                  style={{ color: INK }}
                >
                  Built in Detroit. Run by the person whose name is on the door
                  <Period />
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-7 max-w-[560px] font-serifDisplay text-[18px] leading-[1.6] text-[#3A4A5E] lg:text-[19px]">
                  ATLAW was founded by attorney Dewnya Bazzi on a simple idea: people in serious
                  legal trouble shouldn&rsquo;t have to guess which lawyer to call. You call us. We
                  put the right attorney on your matter and stay with you until it&rsquo;s resolved.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Cta to={TYPEFORM} external variant="primaryLight">
                    Talk to a lawyer
                  </Cta>
                  <Cta to={OUR_PEOPLE} variant="secondaryLight">
                    Meet the team
                  </Cta>
                </div>
                <p className="mt-6 flex items-center gap-2.5 font-serifDisplay text-[15px] italic text-[#3A4A5E] lg:text-[16px]">
                  <span aria-hidden="true" className="h-[6px] w-[6px] shrink-0 rounded-full" style={{ backgroundColor: GOLD }} />
                  30-minute first call. Free. No pressure to hire us.
                </p>
              </Reveal>
            </div>

            {/* Portrait */}
            <Reveal delay={120} className="order-1 lg:order-2">
              <div className="relative mx-auto w-full max-w-[440px] lg:max-w-none">
                <span
                  aria-hidden="true"
                  className="absolute -right-2 bottom-6 top-6 hidden w-px lg:block"
                  style={{ backgroundColor: "rgba(14,27,44,0.10)" }}
                />
                <img
                  alt="Dewnya Bazzi, founder of ATLAW"
                  className="block h-auto w-full object-contain"
                  height={941}
                  src="/assets/atlaw-portrait.avif"
                  width={773}
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ══ 02 — WHY WE EXIST (dark navy, centered) ═════════════════════ */}
        <section
          aria-labelledby="story-heading"
          className="relative isolate w-full overflow-hidden text-white scroll-mt-20"
          id="our-story"
          style={{ backgroundColor: NAVY }}
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay" style={{ backgroundImage: grain }} />
          {/* Oversized ATLAW watermark, offset left */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-[-4%] top-1/2 hidden -translate-y-1/2 whitespace-nowrap font-serifDisplay font-normal uppercase leading-none tracking-[-0.045em] text-white opacity-[0.04] md:block"
            style={{ fontSize: "clamp(220px, 30vw, 520px)" }}
          >
            ATLAW
          </span>

          <div className={`relative ${PAD}`}>
            <div className="mx-auto flex w-full max-w-[680px] flex-col items-start px-6 text-left">
              <Reveal>
                <Eyebrow num="02" label="Why We Exist" onDark />
              </Reveal>
              <Reveal delay={80}>
                <h2
                  id="story-heading"
                  className="mt-8 font-serifDisplay text-[34px] font-normal leading-[1.08] tracking-[-0.02em] text-white sm:text-[44px] md:text-[54px]"
                >
                  Legal problems don&rsquo;t arrive one at a time
                  <Period />
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-8 font-serifDisplay text-[18px] leading-[1.62] text-white/75 lg:text-[19px]">
                  A car accident turns into an insurance dispute, a medical bill, and lost income. A
                  business sale raises tax, real estate, and contract questions all at once. Most
                  firms handle one piece and refer out the rest.
                </p>
                <p className="mt-5 font-serifDisplay text-[18px] leading-[1.62] text-white/75 lg:text-[19px]">
                  We built ATLAW differently. One firm, attorneys across the practice areas that
                  actually overlap in real life, and one point of contact who knows your whole
                  situation.
                </p>
              </Reveal>

              {/* Practice-area tag row */}
              <Reveal delay={220} className="mt-12 w-full">
                <ul className="flex flex-wrap items-center gap-x-1.5 gap-y-3 border-t border-white/15 pt-8">
                  {practiceTags.map((tag, i) => (
                    <li key={tag} className="flex items-center font-sans text-[12px] font-semibold uppercase tracking-[0.16em] text-white/70">
                      {tag}
                      {i < practiceTags.length - 1 && (
                        <span aria-hidden="true" className="mx-3 inline-block h-[5px] w-[5px] rounded-full" style={{ backgroundColor: GOLD }} />
                      )}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ══ 03 — THE FOUNDER (light, reverse split + pull-quote) ═════════ */}
        <section aria-labelledby="founder-heading" className="w-full bg-white">
          <div className={`${SECTION} ${PAD}`}>
            <div className="grid items-center gap-12 lg:grid-cols-[45fr_55fr] lg:gap-16">
              {/* Portrait left */}
              <Reveal className="order-1">
                <div className="overflow-hidden rounded-[20px]" style={{ backgroundColor: NAVY }}>
                  <img
                    alt="Dewnya Bazzi, founder of ATLAW"
                    className="block h-full w-full object-cover"
                    height={563}
                    src="/assets/about-hero.avif"
                    width={1000}
                  />
                </div>
              </Reveal>

              {/* Copy right */}
              <div className="order-2">
                <Reveal>
                  <Eyebrow num="03" label="The Founder" />
                </Reveal>
                <Reveal delay={80}>
                  <h2
                    id="founder-heading"
                    className="mt-8 font-serifDisplay text-[40px] font-normal leading-[1.02] tracking-[-0.02em] sm:text-[52px] md:text-[60px]"
                    style={{ color: INK }}
                  >
                    Dewnya Bazzi
                    <Period />
                  </h2>
                </Reveal>
                <Reveal delay={160}>
                  <p className="mt-7 max-w-[560px] font-serifDisplay text-[18px] leading-[1.6] text-[#3A4A5E]">
                    Dewnya founded ATLAW in Detroit and still leads it today. She built the firm
                    around the way she practices: direct answers, realistic expectations, and a plan
                    you can actually follow.
                  </p>
                  <p className="mt-5 max-w-[560px] font-serifDisplay text-[18px] leading-[1.6] text-[#3A4A5E]">
                    She has been named a Super Lawyers Rising Star three years running &mdash; a
                    peer-reviewed recognition given to a small percentage of attorneys in each state.
                  </p>
                </Reveal>

                {/* Super Lawyers year chips */}
                <Reveal delay={200}>
                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    {["2024", "2025", "2026"].map((year) => (
                      <span
                        key={year}
                        className="inline-flex items-center rounded-full border px-4 py-1.5 font-sans text-[13px] font-semibold tracking-[0.08em]"
                        style={{ borderColor: GOLD, color: GOLD }}
                      >
                        {year}
                      </span>
                    ))}
                    <span className="font-sans text-[12px] uppercase tracking-[0.14em] text-[#7A7466]">
                      Super Lawyers Rising Star
                    </span>
                  </div>
                </Reveal>

                <Reveal delay={240}>
                  <p className="mt-7 max-w-[560px] font-serifDisplay text-[18px] leading-[1.6] text-[#3A4A5E]">
                    When you hire ATLAW, the firm&rsquo;s standards are her standards. That&rsquo;s
                    what founder-led means here.
                  </p>
                  <div className="mt-8">
                    <Cta to={OUR_PEOPLE} variant="secondaryLight">
                      Read Dewnya&rsquo;s full bio
                    </Cta>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Pull-quote, full width */}
            <Reveal delay={120}>
              <figure className="relative mt-20 border-t border-[#0E1B2C]/10 pt-14 md:mt-24 md:pt-16">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-0 top-2 select-none font-serifDisplay leading-none"
                  style={{ color: GOLD, opacity: 0.28, fontSize: "120px" }}
                >
                  &ldquo;
                </span>
                <blockquote className="relative mx-auto max-w-[940px] text-center font-serifDisplay text-[26px] font-normal leading-[1.32] tracking-[-0.01em] text-[#0E1B2C] sm:text-[32px] md:text-[40px]">
                  Clients don&rsquo;t need a lecture on the law. They need to know what happens next,
                  and who&rsquo;s handling it
                  <Period />
                </blockquote>
                <figcaption className="mt-7 text-center font-sans text-[13px] font-semibold uppercase tracking-[0.18em] text-[#7A7466]">
                  Dewnya Bazzi &middot; Founder
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        {/* ══ 04 — HOW WE WORK (dark navy, 3 steps) ═══════════════════════ */}
        <section
          aria-labelledby="how-heading"
          className="relative isolate w-full overflow-hidden text-white"
          style={{ backgroundColor: NAVY }}
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay" style={{ backgroundImage: grain }} />
          <div className={`relative ${SECTION} ${PAD}`}>
            <Reveal>
              <Eyebrow num="04" label="How We Work" onDark />
            </Reveal>
            <Reveal delay={80}>
              <h2
                id="how-heading"
                className="mt-8 max-w-[20ch] font-serifDisplay text-[36px] font-normal leading-[1.06] tracking-[-0.02em] text-white sm:text-[48px] md:text-[58px]"
              >
                Simple to start. Clear the whole way through
                <Period />
              </h2>
            </Reveal>

            <div className="relative mt-16 grid gap-y-12 md:mt-20 md:grid-cols-3 md:gap-x-12 lg:gap-x-16">
              {/* Hairline connecting the steps */}
              <span aria-hidden="true" className="absolute left-0 right-0 top-[14px] hidden h-px md:block" style={{ backgroundColor: "rgba(201,162,75,0.30)" }} />
              {steps.map((step, i) => (
                <Reveal key={step.num} delay={140 + i * 120}>
                  <article className="relative">
                    {/* oversized ghost number */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -top-10 left-0 select-none font-serifDisplay text-[110px] font-normal leading-none text-white opacity-[0.06]"
                    >
                      {step.num}
                    </span>
                    <span
                      aria-hidden="true"
                      className="relative inline-block h-[7px] w-[7px] rounded-full"
                      style={{ backgroundColor: GOLD }}
                    />
                    <h3 className="relative mt-7 font-serifDisplay text-[26px] font-normal leading-[1.12] tracking-[-0.01em] text-white md:text-[28px]">
                      <span className="font-sans text-[15px] font-semibold tracking-[0.1em] text-white/45">
                        {step.num}
                      </span>
                      <br />
                      {step.title}
                    </h3>
                    <p className="mt-5 font-sans text-[15px] leading-[1.7] text-white/72 md:text-[16px]">
                      {step.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal delay={140}>
              <div className="mt-16 md:mt-20">
                <Cta to={TYPEFORM} external variant="primaryDark">
                  Start with a free call
                </Cta>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ══ 05 — PRACTICE AREAS (light, broadsheet grid) ════════════════ */}
        <section aria-labelledby="handle-heading" className="w-full bg-white">
          <div className={`${SECTION} ${PAD}`}>
            <Reveal>
              <Eyebrow num="05" label="Practice Areas" />
            </Reveal>
            <Reveal delay={80}>
              <h2
                id="handle-heading"
                className="mt-8 max-w-[18ch] font-serifDisplay text-[36px] font-normal leading-[1.05] tracking-[-0.02em] sm:text-[48px] md:text-[58px]"
                style={{ color: INK }}
              >
                Serious matters. Sixteen practice areas. One door
                <Period />
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-[640px] font-serifDisplay text-[18px] leading-[1.6] text-[#3A4A5E]">
                If your situation touches more than one of these &mdash; and most do &mdash; it stays
                under one roof.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <ul className="mt-14 grid grid-cols-1 border-t border-[#0E1B2C]/12 sm:grid-cols-2 lg:grid-cols-4">
                {practiceAreas.map((area) => (
                  <li
                    key={area.title}
                    className="group border-b border-[#0E1B2C]/12 px-1 py-6 sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(odd)]:pr-7 sm:[&:nth-child(even)]:pl-7 sm:border-[#0E1B2C]/12 lg:px-6 lg:[&:not(:nth-child(4n))]:border-r lg:[&:nth-child(odd)]:pr-6 lg:[&:nth-child(even)]:pl-6"
                  >
                    <h3
                      className="font-serifDisplay text-[21px] font-normal leading-tight tracking-[-0.01em] transition-colors duration-200 group-hover:text-[#C9A24B]"
                      style={{ color: INK }}
                    >
                      {area.title}
                    </h3>
                    <p className="mt-2 font-sans text-[14px] leading-[1.55] text-[#3A4A5E]/90">
                      {area.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-14">
                <Cta to={PRACTICE_AREAS} variant="secondaryLight">
                  See all practice areas
                </Cta>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ══ 06 — WHERE WE'RE FROM (dark navy) ═══════════════════════════ */}
        <section
          aria-labelledby="detroit-heading"
          className="relative isolate w-full overflow-hidden text-white"
          style={{ backgroundColor: NAVY }}
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay" style={{ backgroundImage: grain }} />
          {/* Curved hairline arcs */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full"
            fill="none"
            preserveAspectRatio="xMidYMid slice"
            viewBox="0 0 1440 760"
          >
            <path d="M-100 120 C 420 360 980 360 1540 100" stroke="rgba(201,162,75,0.16)" strokeWidth="1" />
            <path d="M-100 300 C 460 560 1000 560 1540 320" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            <circle cx="1040" cy="232" r="3" fill={GOLD} fillOpacity="0.7" />
          </svg>

          <div className={`relative ${SECTION} ${PAD}`}>
            <div className="max-w-[760px]">
              <Reveal>
                <Eyebrow num="06" label="Where We're From" onDark />
              </Reveal>
              <Reveal delay={80}>
                <h2
                  id="detroit-heading"
                  className="mt-8 font-serifDisplay text-[36px] font-normal leading-[1.06] tracking-[-0.02em] text-white sm:text-[48px] md:text-[58px]"
                >
                  Detroit is home. The network is national
                  <Period />
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-8 max-w-[660px] font-serifDisplay text-[18px] leading-[1.62] text-white/75 lg:text-[19px]">
                  We know Michigan courts, Michigan insurance law, and Michigan timelines because we
                  work in them every week. And when a matter crosses state lines, our national
                  network of attorneys means you don&rsquo;t have to start over with a stranger.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ══ 07 — NEXT STEP (light, centered) ════════════════════════════ */}
        <section aria-labelledby="next-heading" className="w-full bg-white">
          <div className={`${SECTION} py-[112px] text-center md:py-[150px] lg:py-[180px]`}>
            <Reveal className="flex flex-col items-center">
              <span className="flex items-center gap-4">
                <span aria-hidden="true" className="h-px w-[52px]" style={{ backgroundColor: GOLD }} />
                <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.22em] text-[#7A7466]">
                  <span style={{ color: GOLD }}>07</span> &mdash; Next Step
                </span>
                <span aria-hidden="true" className="h-px w-[52px]" style={{ backgroundColor: GOLD }} />
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2
                id="next-heading"
                className="mx-auto mt-8 max-w-[18ch] font-serifDisplay text-[40px] font-normal leading-[1.04] tracking-[-0.02em] sm:text-[54px] md:text-[64px]"
                style={{ color: INK }}
              >
                Tell us what you&rsquo;re dealing with
                <Period />
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mx-auto mt-6 max-w-[520px] font-serifDisplay text-[18px] leading-[1.6] text-[#3A4A5E] lg:text-[19px]">
                Thirty minutes, free, no pressure. You&rsquo;ll hang up knowing where you stand.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-10 flex justify-center">
                <Cta to={TYPEFORM} external variant="primaryLight">
                  Talk to a lawyer
                </Cta>
              </div>
              <p className="mt-7 font-sans text-[14px] text-[#7A7466]">
                Prefer email?{" "}
                <a className="font-medium text-[#0E1B2C] underline-offset-4 transition hover:text-[#C9A24B] hover:underline" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>{" "}
                &middot; Or call{" "}
                <a className="font-medium text-[#0E1B2C] underline-offset-4 transition hover:text-[#C9A24B] hover:underline" href={PHONE_HREF}>
                  {PHONE_DISPLAY}
                </a>
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
