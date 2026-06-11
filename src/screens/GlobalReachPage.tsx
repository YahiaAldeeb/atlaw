import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/ATLAW/Header";
import { Footer } from "../components/ATLAW/Footer";

/* ────────────────────────────────────────────────────────────────────────────
   ATLAW — Global Reach
   Editorial "law as quiet authority" system (matches Hero / About / Footer):
   white canvas + deep-navy bands alternating, Fraunces display serif, Inter for
   labels, antique-gold (#C9A24B) used ONLY as hairline / period / marker, steel
   blue (#7E9CC4) reserved for data accents (stat numerals) only.

   Credibility page, one job: prove a founder-led Detroit firm genuinely handles
   cross-border matters — without inflating into "global megafirm" territory.
   No glowing globes, no spinning earths, no pin-cluttered world maps. The only
   "map" is a single gold hairline arc through three nodes. Copy is final per the
   Global Reach master prompt; office addresses/phones for Dubai & Manila are the
   only placeholders (pending bar-compliance confirmation of staffing).
   ──────────────────────────────────────────────────────────────────────────── */

const GOLD = "#C9A24B";
const NAVY = "#0B1F3A";
const INK = "#0E1B2C";
const STEEL = "#7E9CC4"; // data accent only — stat numerals in section 05

// Intake + destinations (real, verified against Footer / Hero — not placeholder).
const TYPEFORM = "https://j098jiq3pk7.typeform.com/to/Mslg7Y7f";
const EMAIL = "info@atlawgroup.com";
const PHONE_HREF = "tel:+13134067606";

/* ── Shared bits (mirror About / Hero exactly) ────────────────────────────── */

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

/* IntersectionObserver "in view" hook — used for reveals and the arc draw. */
const useInView = <T extends HTMLElement>(): [React.RefObject<T>, boolean] => {
  const ref = useRef<T>(null);
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
  return [ref, visible];
};

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
  const [ref, visible] = useInView<HTMLDivElement>();
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

/* CTA renders as a router <Link>, an external <a> (new tab), or a same-tab
   in-page anchor (for #locations). */
const Cta = ({
  children,
  to,
  external = false,
  anchor = false,
  variant,
}: {
  children: React.ReactNode;
  to: string;
  external?: boolean;
  anchor?: boolean;
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
  if (anchor) {
    return (
      <a className={className} href={to}>
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

/* ── Live local clocks ───────────────────────────────────────────────────────
   Proves "time zones are our problem" better than any illustration. The ticking
   clock is aria-hidden (screen readers get the static region label instead).   */

const useLocalTime = (timeZone: string): string => {
  const [time, setTime] = useState("");
  useEffect(() => {
    if (typeof window === "undefined") return;
    const fmt = new Intl.DateTimeFormat("en-US", {
      timeZone,
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = window.setInterval(tick, 15000);
    return () => window.clearInterval(id);
  }, [timeZone]);
  return time;
};

const CityClock = ({ timeZone }: { timeZone: string }): JSX.Element => {
  const time = useLocalTime(timeZone);
  return (
    <span aria-hidden="true" className="tabular-nums">
      {time || "—:—"}
    </span>
  );
};

/* ── The only "map" on the page ──────────────────────────────────────────────
   One continuous gold hairline arc passing through three nodes (one per city
   column). Decorative; draws in via stroke-dashoffset when scrolled into view. */

const LocationsArc = (): JSX.Element => {
  const [ref, visible] = useInView<SVGSVGElement>();
  const nodes = [0.16, 0.5, 0.84]; // x-fraction under each of the three columns
  return (
    <svg
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 -top-2 h-16 w-full md:h-20"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 1000 80"
    >
      <path
        d="M 0 64 C 250 8 750 8 1000 64"
        pathLength={1}
        stroke={GOLD}
        strokeOpacity={0.5}
        strokeWidth={1}
        style={{
          strokeDasharray: 1,
          strokeDashoffset: visible ? 0 : 1,
          transition: "stroke-dashoffset 1600ms ease-out",
        }}
      />
      {nodes.map((fx, i) => {
        // y on the cubic at t≈fx — close enough for three evenly-spaced nodes.
        const x = fx * 1000;
        const y = i === 1 ? 22 : 30;
        return (
          <circle
            key={fx}
            cx={x}
            cy={y}
            fill={GOLD}
            fillOpacity={0.85}
            r={3.5}
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 500ms ease-out",
              transitionDelay: `${700 + i * 180}ms`,
            }}
          />
        );
      })}
    </svg>
  );
};

/* ── Data ─────────────────────────────────────────────────────────────────── */

const matterTypes = [
  {
    title: "Immigration & family",
    desc: "Visas, status, and reunification between the US and abroad.",
  },
  {
    title: "International business",
    desc: "Deals, disputes, and franchising across jurisdictions.",
  },
  {
    title: "Cross-border estates",
    desc: "Assets, heirs, and probate in more than one country.",
  },
];

type LocationBlock = {
  city: string;
  region: string;
  timeZone: string;
  body: string;
  contact: { label: string; href: string };
};

const locations: LocationBlock[] = [
  {
    city: "Detroit",
    region: "Headquarters",
    timeZone: "America/Detroit",
    body: "Where ATLAW was founded and where every matter is ultimately accountable. Michigan courts, US federal matters, and the home base for cross-border coordination.",
    // Real, verified HQ contact (matches Footer).
    contact: { label: "(313) 406-7606 · 3 Park Ln Blvd, Suite 1500, Dearborn, MI", href: PHONE_HREF },
  },
  {
    city: "Dubai",
    region: "Gulf Region",
    timeZone: "Asia/Dubai",
    body: "Business formation, transactions, and disputes for clients working between the US and the GCC.",
    // Placeholder: route through HQ until a local line is confirmed.
    contact: { label: "Gulf matters · info@atlawgroup.com", href: `mailto:${EMAIL}` },
  },
  {
    city: "Manila",
    region: "Southeast Asia",
    timeZone: "Asia/Manila",
    body: "Immigration, family, and business matters connecting the Philippines and the United States.",
    // Placeholder: route through HQ until a local line is confirmed.
    contact: { label: "Southeast Asia matters · info@atlawgroup.com", href: `mailto:${EMAIL}` },
  },
];

const steps = [
  {
    num: "01",
    title: "Tell us once.",
    body:
      "Explain your situation one time, to one attorney. We map which jurisdictions are involved and what has to happen in each.",
  },
  {
    num: "02",
    title: "We assemble the right side of the table.",
    body:
      "Our own attorneys where we have them, vetted affiliates where we don't. You don't search, vet, or translate — we do.",
  },
  {
    num: "03",
    title: "You hear from one firm.",
    body:
      "Updates, documents, and decisions flow through your ATLAW attorney. No chasing three firms in three time zones.",
  },
];

const stats = [
  { num: "22+", label: "Professionals" },
  { num: "6", label: "Cities" },
  { num: "4", label: "Continents" },
];

/* ── Page ─────────────────────────────────────────────────────────────────── */

export const GlobalReachPage = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-white text-[#0E1B2C] [zoom:1.12]">
      <Header />
      <main>
        {/* ══ 01 — HERO (dark navy, centered, hairline arcs) ══════════════ */}
        <section
          aria-labelledby="reach-hero-heading"
          className="relative isolate w-full overflow-hidden text-white"
          style={{ backgroundColor: NAVY }}
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay" style={{ backgroundImage: grain }} />

          {/* Three hairline gold arcs of differing radii — an implied geography. */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full"
            fill="none"
            preserveAspectRatio="xMidYMid slice"
            viewBox="0 0 1440 820"
          >
            <path d="M-120 250 C 420 540 1020 540 1560 230" stroke="rgba(201,162,75,0.20)" strokeWidth="1" />
            <path d="M-120 430 C 460 700 980 700 1560 410" stroke="rgba(201,162,75,0.12)" strokeWidth="1" />
            <path d="M-120 120 C 380 360 1060 360 1560 90" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            <circle cx="250" cy="372" r="3.5" fill={GOLD} fillOpacity="0.75" />
            <circle cx="1150" cy="372" r="3" fill={GOLD} fillOpacity="0.6" />
            <circle cx="700" cy="250" r="3" fill={GOLD} fillOpacity="0.5" />
          </svg>

          {/* Oversized GLOBAL watermark bleeding off both edges. */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-serifDisplay font-normal uppercase leading-none tracking-[-0.045em] text-white opacity-[0.04] md:block"
            style={{ fontSize: "clamp(220px, 30vw, 520px)" }}
          >
            GLOBAL
          </span>

          <div className={`relative ${PAD}`}>
            <div className="mx-auto flex w-full max-w-[680px] flex-col items-center px-6 text-center">
              <Reveal>
                <Eyebrow num="01" label="Global Reach" onDark />
              </Reveal>
              <Reveal delay={80}>
                <h1
                  id="reach-hero-heading"
                  className="mt-8 font-serifDisplay text-[40px] font-normal leading-[1.04] tracking-[-0.02em] text-white sm:text-[54px] md:text-[64px]"
                >
                  Rooted in Detroit. Reachable from anywhere
                  <Period />
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-8 max-w-[600px] font-serifDisplay text-[18px] leading-[1.6] text-white/75 lg:text-[19px]">
                  Legal problems don&rsquo;t respect borders. A family member waiting on a visa, a
                  business deal in the Gulf, an estate with assets in two countries. ATLAW handles
                  cross-border matters from Detroit, with offices in Dubai and Manila and a vetted
                  network beyond them.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <Cta to={TYPEFORM} external variant="primaryDark">
                    Talk to a lawyer
                  </Cta>
                  <Cta to="#locations" anchor variant="secondaryDark">
                    See where we work
                  </Cta>
                </div>
                <p className="mt-6 flex items-center justify-center gap-2.5 font-serifDisplay text-[15px] italic text-white/70 lg:text-[16px]">
                  <span aria-hidden="true" className="h-[6px] w-[6px] shrink-0 rounded-full" style={{ backgroundColor: GOLD }} />
                  30-minute first call. Free. Time zones are our problem, not yours.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ══ 02 — WHY IT MATTERS (light, copy left / cards right) ═════════ */}
        <section aria-labelledby="why-heading" className="w-full bg-white">
          <div className={`${SECTION} ${PAD}`}>
            <div className="grid gap-12 lg:grid-cols-[7fr_5fr] lg:gap-16">
              {/* Copy */}
              <div>
                <Reveal>
                  <Eyebrow num="02" label="Cross-Border Matters" />
                </Reveal>
                <Reveal delay={80}>
                  <h2
                    id="why-heading"
                    className="mt-8 max-w-[18ch] font-serifDisplay text-[34px] font-normal leading-[1.06] tracking-[-0.02em] sm:text-[44px] md:text-[52px]"
                    style={{ color: INK }}
                  >
                    When your matter crosses a border, most firms hand you off
                    <Period />
                  </h2>
                </Reveal>
                <Reveal delay={160}>
                  <p className="mt-8 max-w-[560px] font-serifDisplay text-[18px] leading-[1.62] text-[#3A4A5E] lg:text-[19px]">
                    The usual path: your local lawyer refers you to a stranger in another country, and
                    suddenly you&rsquo;re managing two firms, two bills, and two versions of the story.
                  </p>
                  <p className="mt-5 max-w-[560px] font-serifDisplay text-[18px] leading-[1.62] text-[#3A4A5E] lg:text-[19px]">
                    At ATLAW, the matter stays under one roof. Your Detroit attorney remains your point
                    of contact while our people and partners abroad do the on-the-ground work. One
                    firm. One file. One person who owes you answers.
                  </p>
                </Reveal>
              </div>

              {/* Matter-type cards — hairline rows, gold dot, no shadow */}
              <Reveal delay={120} className="lg:pt-2">
                <ul className="border-t border-[#0E1B2C]/12">
                  {matterTypes.map((m) => (
                    <li key={m.title} className="flex gap-4 border-b border-[#0E1B2C]/12 py-6">
                      <span
                        aria-hidden="true"
                        className="mt-2.5 h-[7px] w-[7px] shrink-0 rounded-full"
                        style={{ backgroundColor: GOLD }}
                      />
                      <div>
                        <h3
                          className="font-serifDisplay text-[21px] font-normal leading-tight tracking-[-0.01em]"
                          style={{ color: INK }}
                        >
                          {m.title}
                        </h3>
                        <p className="mt-2 font-sans text-[14.5px] leading-[1.55] text-[#3A4A5E]/90">
                          {m.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ══ 03 — WHERE WE SHOW UP (dark navy, the centerpiece) ══════════ */}
        <section
          aria-labelledby="locations-heading"
          className="relative isolate w-full overflow-hidden text-white scroll-mt-20"
          id="locations"
          style={{ backgroundColor: NAVY }}
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay" style={{ backgroundImage: grain }} />

          <div className={`relative ${SECTION} ${PAD}`}>
            <Reveal>
              <Eyebrow num="03" label="Our Locations" onDark />
            </Reveal>
            <Reveal delay={80}>
              <h2
                id="locations-heading"
                className="mt-8 font-serifDisplay text-[36px] font-normal leading-[1.06] tracking-[-0.02em] text-white sm:text-[48px] md:text-[58px]"
              >
                Three cities. One standard
                <Period />
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-7 max-w-[640px] font-serifDisplay text-[18px] leading-[1.62] text-white/75 lg:text-[19px]">
                Wherever you reach us, you get the same firm: direct answers, a named attorney, and a
                clear next step.
              </p>
            </Reveal>

            {/* Three broadsheet columns, hairline-separated, with the single gold arc above. */}
            <div className="relative mt-16 md:mt-20">
              <LocationsArc />
              <div className="grid gap-y-12 md:grid-cols-3 md:gap-x-0">
                {locations.map((loc, i) => (
                  <Reveal key={loc.city} delay={140 + i * 120}>
                    <article
                      className={`relative h-full md:px-8 lg:px-10 ${
                        i > 0 ? "md:border-l md:border-white/12" : ""
                      }`}
                    >
                      <h3 className="font-serifDisplay text-[40px] font-normal leading-none tracking-[-0.02em] text-white md:text-[48px]">
                        {loc.city}
                        <Period />
                      </h3>
                      <p className="mt-4 font-sans text-[11.5px] font-semibold uppercase tracking-[0.2em] text-white/55">
                        {loc.region}
                        <span aria-hidden="true" className="mx-2 text-white/30">·</span>
                        <CityClock timeZone={loc.timeZone} />
                      </p>
                      <p className="mt-6 font-sans text-[15px] leading-[1.65] text-white/72">
                        {loc.body}
                      </p>
                      <a
                        href={loc.contact.href}
                        className="mt-6 inline-block font-sans text-[14px] leading-[1.5] text-white/85 underline-offset-4 transition hover:text-[#C9A24B] hover:underline"
                      >
                        {loc.contact.label}
                      </a>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Beyond-these-cities line */}
            <Reveal delay={160}>
              <p className="mt-16 border-t border-white/12 pt-8 font-sans text-[12px] font-semibold uppercase tracking-[0.22em] text-white/55 md:mt-20">
                Beyond these cities &mdash; a vetted network of affiliated attorneys across four
                continents.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ══ 04 — HOW IT WORKS (light, 3 steps) ══════════════════════════ */}
        <section aria-labelledby="how-heading" className="w-full bg-white">
          <div className={`${SECTION} ${PAD}`}>
            <Reveal>
              <Eyebrow num="04" label="How It Works" />
            </Reveal>
            <Reveal delay={80}>
              <h2
                id="how-heading"
                className="mt-8 max-w-[20ch] font-serifDisplay text-[36px] font-normal leading-[1.05] tracking-[-0.02em] sm:text-[48px] md:text-[58px]"
                style={{ color: INK }}
              >
                One point of contact. Wherever the work happens
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
                      className="pointer-events-none absolute -top-10 left-0 select-none font-serifDisplay text-[110px] font-normal leading-none opacity-[0.05]"
                      style={{ color: INK }}
                    >
                      {step.num}
                    </span>
                    <span
                      aria-hidden="true"
                      className="relative inline-block h-[7px] w-[7px] rounded-full"
                      style={{ backgroundColor: GOLD }}
                    />
                    <h3 className="relative mt-7 font-serifDisplay text-[24px] font-normal leading-[1.14] tracking-[-0.01em] md:text-[26px]" style={{ color: INK }}>
                      <span className="font-sans text-[15px] font-semibold tracking-[0.1em] text-[#7A7466]">
                        {step.num}
                      </span>
                      <br />
                      {step.title}
                    </h3>
                    <p className="mt-5 font-sans text-[15px] leading-[1.7] text-[#3A4A5E] md:text-[16px]">
                      {step.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal delay={140}>
              <div className="mt-16 md:mt-20">
                <Cta to={TYPEFORM} external variant="primaryLight">
                  Start with a free call
                </Cta>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ══ 05 — THE NETWORK, HONESTLY (dark navy, quiet, centered) ═════ */}
        <section
          aria-labelledby="network-heading"
          className="relative isolate w-full overflow-hidden text-white"
          style={{ backgroundColor: NAVY }}
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay" style={{ backgroundImage: grain }} />
          <div className={`relative ${PAD}`}>
            <div className="mx-auto flex w-full max-w-[640px] flex-col items-start px-6">
              <Reveal>
                <Eyebrow num="05" label="The Network" onDark />
              </Reveal>
              <Reveal delay={80}>
                <h2
                  id="network-heading"
                  className="mt-8 font-serifDisplay text-[34px] font-normal leading-[1.08] tracking-[-0.02em] text-white sm:text-[44px] md:text-[52px]"
                >
                  Affiliates we&rsquo;d hire ourselves
                  <Period />
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-8 font-serifDisplay text-[18px] leading-[1.62] text-white/75 lg:text-[19px]">
                  &ldquo;Network&rdquo; can mean anything, so here&rsquo;s what it means to us:
                  attorneys we know, whose work we&rsquo;ve checked, operating under clear engagement
                  terms &mdash; not a directory we license. When an affiliate works on your matter,
                  ATLAW stays responsible for keeping the work to our standard and keeping you
                  informed.
                </p>
              </Reveal>

              {/* Stat strip — steel-blue serif numerals on a hairline-topped row */}
              <Reveal delay={220} className="mt-12 w-full">
                <ul className="flex flex-wrap items-baseline gap-x-10 gap-y-6 border-t border-white/15 pt-8">
                  {stats.map((s, i) => (
                    <li key={s.label} className="flex items-baseline gap-3">
                      <span
                        className="font-serifDisplay text-[40px] font-normal leading-none tracking-[-0.02em] md:text-[48px]"
                        style={{ color: STEEL }}
                      >
                        {s.num}
                      </span>
                      <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.18em] text-white/60">
                        {s.label}
                      </span>
                      {i < stats.length - 1 && (
                        <span aria-hidden="true" className="ml-7 hidden h-[5px] w-[5px] self-center rounded-full sm:inline-block" style={{ backgroundColor: GOLD }} />
                      )}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ══ 06 — CLOSING CTA (light, centered, maximum whitespace) ══════ */}
        <section aria-labelledby="closing-heading" className="w-full bg-white">
          <div className={`${SECTION} py-[112px] text-center md:py-[150px] lg:py-[180px]`}>
            <Reveal className="flex flex-col items-center">
              <span className="flex items-center gap-4">
                <span aria-hidden="true" className="h-px w-[52px]" style={{ backgroundColor: GOLD }} />
                <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.22em] text-[#7A7466]">
                  <span style={{ color: GOLD }}>06</span> &mdash; Next Step
                </span>
                <span aria-hidden="true" className="h-px w-[52px]" style={{ backgroundColor: GOLD }} />
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2
                id="closing-heading"
                className="mx-auto mt-8 max-w-[16ch] font-serifDisplay text-[40px] font-normal leading-[1.04] tracking-[-0.02em] sm:text-[54px] md:text-[64px]"
                style={{ color: INK }}
              >
                Wherever it happened, start here
                <Period />
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mx-auto mt-6 max-w-[560px] font-serifDisplay text-[18px] leading-[1.6] text-[#3A4A5E] lg:text-[19px]">
                One free call. We&rsquo;ll tell you which borders your matter actually crosses &mdash;
                and what to do about each one.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-10 flex justify-center">
                <Cta to={TYPEFORM} external variant="primaryLight">
                  Talk to a lawyer
                </Cta>
              </div>
              <p className="mt-7 font-sans text-[14px] text-[#7A7466]">
                Calling from abroad?{" "}
                <a className="font-medium text-[#0E1B2C] underline-offset-4 transition hover:text-[#C9A24B] hover:underline" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>{" "}
                &mdash; we reply within one business day.
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
