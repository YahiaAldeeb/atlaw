import { Fragment } from "react";
import { Link } from "react-router-dom";

const toSlug = (value: string): string =>
  value
    .toLowerCase()
    .replace(/['‘’]/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

// Subtle film grain over the bone canvas — matches the Hero so the section reads as one system.
const grain =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

// Fraunces variable axes — large editorial headline (mirrors the Hero lockup).
const headlineAxes = "'opsz' 144, 'wght' 380, 'SOFT' 30, 'WONK' 0";
// Lighter optical size for the smaller card titles.
const cardTitleAxes = "'opsz' 48, 'wght' 400, 'SOFT' 20, 'WONK' 0";

type Variant = "light" | "dark";

type Capability = {
  number: string;
  label: string;
  title: string;
  body: string;
  keyAreas: string[];
  variant: Variant;
};

// Single source of truth for the section's content — edit copy here, not in the markup.
const capabilities: Capability[] = [
  {
    number: "01",
    label: "RECOVER",
    title: "For people hurt in accidents, collisions, medical errors, or on the job.",
    body: "We handle the insurance carriers and the recovery process so you don’t have to do both.",
    keyAreas: [
      "Personal Injury",
      "Auto Accidents",
      "Medical Malpractice",
      "Workers’ Compensation",
      "Wrongful Death",
    ],
    variant: "light",
  },
  {
    number: "02",
    label: "BUILD",
    title: "For founders, owners, and investors.",
    body: "Legal work for decisions that need to hold up later, not just close today.",
    keyAreas: ["Business Law", "Franchising", "M&A", "Securities", "Contracts", "Intellectual Property"],
    variant: "dark",
  },
  {
    number: "03",
    label: "PROTECT",
    title: "For families planning ahead or sorting out a dispute.",
    body: "Estate plans, trusts, and the disputes that show up around a will, trust, or piece of property.",
    keyAreas: ["Estate Planning", "Trust Litigation", "Real Estate", "Tax", "Immigration"],
    variant: "light",
  },
  {
    number: "04",
    label: "DEFEND",
    title: "For clients facing criminal charges, a DUI, or a federal investigation.",
    body: "A quiet, fast response, with a defense built from the first phone call.",
    keyAreas: ["Criminal Defense", "DUI", "Federal Criminal", "White-Collar", "Civil Litigation"],
    variant: "light",
  },
];

const CapabilityCard = ({ item }: { item: Capability }): JSX.Element => {
  // All cards render white on the navy section so the row reads as one clean set.
  const cardClasses =
    "border-[#E8E1D3] bg-white shadow-[0_10px_30px_rgba(5,15,28,0.18)] hover:border-[#D8D2C4] hover:shadow-[0_18px_42px_rgba(5,15,28,0.30)]";

  const titleColor = "text-[#0B1F3A]";
  const bodyColor = "text-[#3A4A63]";
  const dividerColor = "bg-[#E8E1D3]";
  const keyAreaColor = "text-[#3A4A63]";

  return (
    <article
      className={`group flex h-full flex-col rounded-[24px] border p-6 transition-all duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[3px] sm:p-7 lg:min-h-[420px] lg:p-8 ${cardClasses}`}
    >
      {/* 1 — tracked uppercase label (amber on both variants) */}
      <p className="font-sans text-[11.5px] font-semibold uppercase leading-none tracking-[0.2em] text-[#B88A2D]">
        {item.number} &mdash; {item.label}
      </p>

      {/* 2 — serif title */}
      <h3
        className={`mt-5 font-serifDisplay text-[21px] font-normal leading-[1.18] tracking-[-0.015em] lg:text-[23px] ${titleColor}`}
        style={{ fontVariationSettings: cardTitleAxes }}
      >
        {item.title}
      </h3>

      {/* 3 — supporting body */}
      <p className={`mt-4 font-sans text-[14px] leading-[1.55] ${bodyColor}`}>{item.body}</p>

      {/* 4–6 — divider + KEY AREAS pinned to the bottom so all four align across the row */}
      <div className="mt-auto pt-6">
        <div className={`h-px w-full ${dividerColor}`} />

        <p className="mt-6 font-sans text-[10.5px] font-semibold uppercase leading-none tracking-[0.22em] text-[#B88A2D]">
          Key Areas
        </p>

        <p
          className={`mt-3.5 flex flex-wrap items-center gap-x-2 gap-y-1.5 font-sans text-[12.5px] leading-[1.65] ${keyAreaColor}`}
        >
          {item.keyAreas.map((area, index) => (
            <Fragment key={area}>
              {index > 0 && (
                <span aria-hidden="true" className="text-[#B88A2D]">
                  &middot;
                </span>
              )}
              <Link
                className="rounded-sm underline-offset-[3px] transition-colors duration-150 hover:text-[#0B1F3A] hover:underline focus-visible:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88A2D]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                to={`/capabilities/${toSlug(area)}`}
              >
                {area}
              </Link>
            </Fragment>
          ))}
        </p>
      </div>
    </article>
  );
};

export const CapabilitiesSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="capabilities-heading"
      className="relative isolate w-full overflow-hidden bg-[#0B1F3A]"
    >
      {/* 3% grain overlay — same texture as the Hero canvas */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-multiply"
        style={{ backgroundImage: grain }}
      />

      {/* Decorative background: ghost "ATLAW" wordmark + faint curved linework (behind content) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none overflow-hidden">
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.06]"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1440 900"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="#F4EFE6" strokeWidth="1">
            <path d="M-50 230 Q 380 90 840 250 T 1500 210" />
            <path d="M-50 410 Q 440 270 920 410 T 1500 380" />
            <path d="M-50 690 Q 460 560 940 690 T 1500 660" />
          </g>
        </svg>

        <span className="absolute left-1/2 top-[40%] hidden -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-serifDisplay text-[34vw] font-normal uppercase leading-none tracking-[-0.05em] text-[#F4EFE6] opacity-[0.018] md:block">
          ATLAW
        </span>
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-20 pt-20 sm:px-10 md:pb-24 md:pt-28 lg:px-20 lg:pb-[120px] lg:pt-[140px]">
        {/* ── Centered editorial header ── */}
        <header className="mx-auto flex flex-col items-center text-center">
          <p className="font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#B88A2D]">
            01 &mdash; CAPABILITIES
          </p>

          <h2
            className="mt-5 max-w-[1000px] font-serifDisplay font-normal leading-[1.02] tracking-[-0.03em] text-[#F4EFE6] text-[clamp(40px,5.5vw,86px)]"
            id="capabilities-heading"
            style={{ fontVariationSettings: headlineAxes }}
          >
            What we do, by what brought you in<span className="text-[#B88A2D]">.</span>
          </h2>

          <p className="mt-7 max-w-[760px] font-sans text-[18px] leading-[1.6] text-[rgba(244,239,230,0.80)] lg:text-[19px]">
            Legal problems rarely arrive in one category. We help you figure out where yours sits and
            what to do about it.
          </p>
        </header>

        {/* ── Card row: 1 col mobile · 2 col tablet · 4 col desktop ── */}
        <div className="mt-14 grid grid-cols-1 items-stretch gap-6 md:mt-16 md:grid-cols-2 lg:mt-[64px] lg:gap-8 xl:grid-cols-4">
          {capabilities.map((item) => (
            <CapabilityCard item={item} key={item.label} />
          ))}
        </div>
      </div>
    </section>
  );
};
