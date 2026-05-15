import { Link } from "react-router-dom";

type Variant = "light" | "dark";

type Pillar = {
  number: string;
  label: string;
  title: string;
  body: string;
  practices: string[];
  cta: string;
  href: string;
  variant: Variant;
};

const practicePillars: Pillar[] = [
  {
    number: "01",
    label: "ADVISORY",
    title: "Strategic counsel for\nthe long arc of a business.",
    body: "Advisory work at ATLAW is the work that shapes a decision before it has to be defended. Corporate governance, employee benefits, ESG strategy, IP prosecution, executive compensation, succession and estate planning — the counsel that runs upstream of every transaction and every dispute.",
    practices: [
      "Mergers & Acquisitions",
      "Trusts & Estate",
      "Corporate Counseling & Governance",
      "Privacy & Cybersecurity",
      "Immigration & Global Mobility",
      "Government Relations & Policy",
    ],
    cta: "Explore Advisory",
    href: "/advisory",
    variant: "light",
  },
  {
    number: "02",
    label: "LITIGATION",
    title: "High-stakes disputes,\ndefended end-to-end.",
    body: "ATLAW's litigation practice runs across commercial disputes, intellectual property, class actions, white collar defense, securities, real estate, and international dispute resolution. We try cases, arbitrate matters, and handle the regulatory investigations that precede them.",
    practices: [
      "Commercial Litigation",
      "International Dispute Resolution",
      "Class & Collective Actions",
      "White Collar Defense & Investigations",
      "Securities & Fiduciary Duty",
      "Workplace Arbitration & ADR",
    ],
    cta: "Explore Litigation",
    href: "/litigation",
    variant: "dark",
  },
  {
    number: "03",
    label: "TRANSACTIONS",
    title: "Capital, contracts, and\ncross-border deals.",
    body: "The transactional practice handles M&A, capital markets, real estate finance, infrastructure and project finance, venture capital, commercial finance, and the long form contracts that structure complex businesses. Cross-border deal flow is a core competence, not a marketing claim.",
    practices: [
      "Mergers & Acquisitions",
      "Venture Capital & Emerging Companies",
      "Real Estate Finance",
      "Capital Markets",
      "Infrastructure & Project Finance",
      "Commercial Finance",
    ],
    cta: "Explore Transactions",
    href: "/transactions",
    variant: "light",
  },
];

const ArrowRight = ({ className = "" }: { className?: string }) => (
  <svg
    aria-hidden="true"
    className={`h-[1em] w-[1em] transition-transform duration-200 ${className}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      d="M5 12h14M13 5l7 7-7 7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
    />
  </svg>
);

const PillarCard = ({ pillar }: { pillar: Pillar }): JSX.Element => {
  const isDark = pillar.variant === "dark";

  const cardClasses = isDark
    ? "border-white/15 text-[#F7F3EA] shadow-[0_18px_45px_rgba(5,15,28,0.20)] hover:border-white/25 hover:shadow-[0_22px_55px_rgba(5,15,28,0.28)]"
    : "border-[rgba(11,26,45,0.14)] bg-[#FAF8F2] text-ink shadow-[0_8px_22px_rgba(11,26,45,0.05)] hover:border-[rgba(11,26,45,0.24)] hover:shadow-[0_14px_32px_rgba(11,26,45,0.10)]";

  const darkBgStyle = isDark
    ? { background: "linear-gradient(180deg, #08213A 0%, #06182B 100%)" }
    : undefined;

  const labelColor = isDark ? "text-[#C9DCF5]" : "text-accent";
  const bodyColor = isDark ? "text-white/80" : "text-ink/85";
  const dividerColor = isDark ? "bg-white/20" : "bg-[rgba(11,26,45,0.12)]";
  const featuredLabelColor = isDark ? "text-[#AFCBED]" : "text-accent";
  const practiceColor = isDark ? "text-white/90" : "text-ink";
  const practiceHover = isDark
    ? "hover:decoration-white/60"
    : "hover:decoration-ink/40";
  const arrowColor = isDark ? "text-[#AFCBED]" : "text-accent";
  const ctaColor = isDark ? "text-[#AFCBED]" : "text-accent";
  const titleColor = isDark ? "text-[#F7F3EA]" : "text-ink";

  return (
    <article
      className={`group relative flex h-full flex-col rounded-2xl border p-7 transition-all duration-300 ease-out hover:-translate-y-1.5 md:p-9 lg:min-h-[600px] lg:p-10 ${cardClasses}`}
      style={darkBgStyle}
    >
      <p
        className={`font-sans text-[12px] font-bold uppercase leading-none tracking-[0.2em] ${labelColor}`}
      >
        {pillar.number} &mdash; {pillar.label}
      </p>

      <h3
        className={`mt-6 whitespace-pre-line font-serifDisplay text-[28px] font-normal leading-[1.1] tracking-[-0.015em] md:text-[30px] lg:text-[32px] ${titleColor}`}
      >
        {pillar.title}
      </h3>

      <p
        className={`mt-6 font-sans text-[14.5px] leading-[1.6] md:text-[15px] lg:text-[15.5px] ${bodyColor}`}
      >
        {pillar.body}
      </p>

      <div className={`mt-7 h-px w-full ${dividerColor}`} />

      <p
        className={`mt-6 font-sans text-[11px] font-bold uppercase leading-none tracking-[0.22em] ${featuredLabelColor}`}
      >
        FEATURED PRACTICES
      </p>

      <ul className="mt-4 space-y-2">
        {pillar.practices.map((practice) => (
          <li
            className={`flex items-start gap-2 font-sans text-[14.5px] leading-[1.85] ${practiceColor}`}
            key={practice}
          >
            <span aria-hidden="true" className={`mt-px ${arrowColor}`}>
              &rarr;
            </span>
            <span
              className={`underline decoration-transparent underline-offset-4 transition-colors duration-200 ${practiceHover}`}
            >
              {practice}
            </span>
          </li>
        ))}
      </ul>

      <div className={`mt-7 h-px w-full ${dividerColor}`} />

      <div className="mt-6 flex flex-1 items-end">
        <Link
          className={`group/cta inline-flex items-center gap-2 font-sans text-[15px] font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
            isDark ? "focus-visible:ring-offset-[#08213A]" : "focus-visible:ring-offset-[#FAF8F2]"
          } ${ctaColor}`}
          to={pillar.href}
        >
          {pillar.cta}
          <ArrowRight className="group-hover/cta:translate-x-1.5" />
        </Link>
      </div>
    </article>
  );
};

export const PracticePillarsSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="practice-pillars-heading"
      className="relative isolate w-full overflow-hidden bg-[#F4F1EA]"
    >
      {/* Decorative background: faint oversized words + editorial contour lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 select-none"
      >
        {/* Subtle curved linework */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.05]"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1440 900"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="#0B1A2D" strokeWidth="1">
            <path d="M-50 220 Q 360 80 820 240 T 1500 200" />
            <path d="M-50 360 Q 420 220 900 360 T 1500 340" />
            <path d="M-50 640 Q 460 520 940 640 T 1500 620" />
            <path d="M-50 780 Q 420 660 880 780 T 1500 760" />
          </g>
        </svg>

        {/* Oversized faint words */}
        <span
          className="absolute left-[-2vw] top-[24%] whitespace-nowrap font-serifDisplay text-[18vw] font-normal uppercase leading-none tracking-[-0.04em] text-[#0B1A2D] opacity-[0.035]"
          style={{ transform: "translateY(-50%)" }}
        >
          ADVISORY
        </span>
        <span className="absolute bottom-[6%] left-1/2 -translate-x-1/2 whitespace-nowrap font-serifDisplay text-[16vw] font-normal uppercase leading-none tracking-[-0.04em] text-[#0B1A2D] opacity-[0.03]">
          LITIGATION
        </span>
        <span className="absolute bottom-[2%] right-[-3vw] whitespace-nowrap font-serifDisplay text-[14vw] font-normal uppercase leading-none tracking-[-0.04em] text-[#0B1A2D] opacity-[0.028]">
          TRANSACTIONS
        </span>
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-24 pt-24 sm:px-8 md:pb-28 md:pt-24 lg:px-12 lg:pb-[130px] lg:pt-[110px]">
        {/* Header */}
        <div className="mx-auto flex flex-col items-center text-center">
          <p className="font-sans text-[12px] font-bold uppercase leading-none tracking-[0.22em] text-accent md:text-[13px]">
            01 &mdash; CAPABILITIES
          </p>

          <h2
            className="mt-6 max-w-[1100px] font-serifDisplay text-[40px] font-normal leading-[1.05] tracking-[-0.025em] text-ink sm:text-[52px] md:text-[62px] lg:text-[68px]"
            id="practice-pillars-heading"
          >
            Three pillars. Fifty practices. One firm.
          </h2>

          <p className="mt-6 max-w-[900px] font-sans text-[16px] leading-[1.6] text-ink/80 md:text-[17.5px] lg:text-[18px]">
            ATLAW is organized into three practice pillars that cover the full arc of a
            client&rsquo;s legal needs &mdash; from strategic advisory at the early-stage planning
            level, through the transactions that move a business forward, into the litigation that
            protects what&rsquo;s been built.
          </p>
        </div>

        {/* Card grid */}
        <div className="mt-14 grid grid-cols-1 gap-7 md:mt-16 md:grid-cols-2 lg:mt-[60px] lg:grid-cols-3 lg:gap-8">
          {practicePillars.map((pillar) => (
            <PillarCard key={pillar.label} pillar={pillar} />
          ))}
        </div>
      </div>
    </section>
  );
};
