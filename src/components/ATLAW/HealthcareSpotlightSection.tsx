import { Link } from "react-router-dom";

const healthcareServices = [
  "Healthcare M&A",
  "Provider Group Acquisitions",
  "Regulatory & Compliance",
  "Payor Disputes & Recovery",
  "Healthcare Real Estate",
  "Recovery & Renewal",
];

const featuredMatter = {
  label: "REPRESENTATION",
  title:
    "ATLAW represented Personic Healthcare in the $2M acquisition of Tennessee-based American Wound Care Centers.",
  meta: "Healthcare M&A · 2023",
  href: "/news/atlaw-represents-personic-healthcare-in-2m-acquisition-of-tennessee-based-american-wound-care-centers",
};

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

const TennesseeMatterGraphic = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="absolute inset-0 h-full w-full"
    fill="none"
    preserveAspectRatio="xMidYMid slice"
    viewBox="0 0 800 420"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Soft radial glow */}
    <defs>
      <radialGradient id="hc-glow" cx="62%" cy="46%" r="55%">
        <stop offset="0%" stopColor="#3D7DCC" stopOpacity="0.28" />
        <stop offset="55%" stopColor="#1B3A66" stopOpacity="0.10" />
        <stop offset="100%" stopColor="#06182B" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="hc-panel" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#08223C" />
        <stop offset="100%" stopColor="#05172A" />
      </linearGradient>
    </defs>

    <rect fill="url(#hc-panel)" height="420" width="800" />
    <rect fill="url(#hc-glow)" height="420" width="800" />

    {/* Dotted texture */}
    <g fill="#FFFFFF" opacity="0.10">
      {Array.from({ length: 9 }).map((_, row) =>
        Array.from({ length: 18 }).map((__, col) => (
          <circle
            cx={32 + col * 44}
            cy={28 + row * 44}
            key={`hc-dot-${row}-${col}`}
            r="0.9"
          />
        ))
      )}
    </g>

    {/* Faint document overlays */}
    <g opacity="0.10" stroke="#FFFFFF" strokeWidth="1">
      <rect height="150" rx="3" width="110" x="60" y="60" />
      <line x1="78" x2="178" y1="92" y2="92" />
      <line x1="78" x2="170" y1="110" y2="110" />
      <line x1="78" x2="160" y1="128" y2="128" />
      <line x1="78" x2="172" y1="146" y2="146" />
      <line x1="78" x2="150" y1="164" y2="164" />

      <rect height="120" rx="3" width="90" x="640" y="240" />
      <line x1="654" x2="716" y1="262" y2="262" />
      <line x1="654" x2="720" y1="278" y2="278" />
      <line x1="654" x2="708" y1="294" y2="294" />
      <line x1="654" x2="716" y1="310" y2="310" />
    </g>

    {/* Faint medical cross outline */}
    <g opacity="0.08" stroke="#FFFFFF" strokeWidth="1.4">
      <path d="M708 80 h28 v22 h22 v28 h-22 v22 h-28 v-22 h-22 v-28 h22 z" />
    </g>

    {/* Tennessee outline (stylized) */}
    <g
      stroke="#C9DCF5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity="0.88"
      strokeWidth="1.4"
      fill="none"
    >
      <path d="M180 232 L 200 224 L 232 220 L 268 216 L 304 214 L 340 210 L 380 208 L 420 206 L 460 206 L 500 208 L 540 210 L 580 214 L 612 218 L 640 222 L 656 230 L 650 248 L 644 264 L 636 280 L 624 290 L 600 296 L 568 300 L 530 302 L 488 302 L 446 300 L 404 296 L 360 290 L 314 282 L 270 272 L 232 260 L 200 248 L 184 240 Z" />
    </g>

    {/* Soft inner highlight of TN */}
    <g fill="#C9DCF5" opacity="0.04">
      <path d="M200 230 L 232 222 L 304 218 L 420 212 L 540 214 L 640 224 L 644 254 L 600 290 L 488 298 L 360 286 L 232 258 L 200 244 Z" />
    </g>

    {/* Route arcs between cities */}
    <g
      fill="none"
      stroke="#EBD7A8"
      strokeDasharray="2 5"
      strokeLinecap="round"
      strokeWidth="1.2"
      opacity="0.85"
    >
      <path d="M232 254 C 320 200, 420 200, 484 244" />
      <path d="M484 244 C 560 222, 620 232, 612 260" />
    </g>

    {/* Solid route line subtle */}
    <g fill="none" opacity="0.30" stroke="#EBD7A8" strokeWidth="1">
      <path d="M232 254 C 320 200, 420 200, 484 244" />
      <path d="M484 244 C 560 222, 620 232, 612 260" />
    </g>

    {/* City pins: Memphis, Nashville, Knoxville */}
    <g>
      {/* Memphis */}
      <circle cx="232" cy="254" fill="#EBD7A8" opacity="0.18" r="14" />
      <circle cx="232" cy="254" fill="#EBD7A8" r="5" />
      <text
        fill="#FFFFFF"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="11"
        fontWeight="600"
        letterSpacing="0.16em"
        textAnchor="middle"
        x="232"
        y="284"
      >
        MEMPHIS
      </text>

      {/* Nashville */}
      <circle cx="484" cy="244" fill="#FFFFFF" opacity="0.18" r="16" />
      <circle cx="484" cy="244" fill="#FFFFFF" r="6" />
      <text
        fill="#FFFFFF"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="11"
        fontWeight="700"
        letterSpacing="0.18em"
        textAnchor="middle"
        x="484"
        y="222"
      >
        NASHVILLE
      </text>

      {/* Knoxville */}
      <circle cx="612" cy="260" fill="#EBD7A8" opacity="0.18" r="14" />
      <circle cx="612" cy="260" fill="#EBD7A8" r="5" />
      <text
        fill="#FFFFFF"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="11"
        fontWeight="600"
        letterSpacing="0.16em"
        textAnchor="middle"
        x="612"
        y="290"
      >
        KNOXVILLE
      </text>
    </g>

    {/* Top-right meta strip */}
    <g opacity="0.78">
      <text
        fill="#AFCBED"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="10"
        fontWeight="700"
        letterSpacing="0.28em"
        x="60"
        y="40"
      >
        TENNESSEE · HEALTHCARE M&amp;A
      </text>
      <line
        stroke="#AFCBED"
        strokeOpacity="0.35"
        strokeWidth="1"
        x1="60"
        x2="220"
        y1="48"
        y2="48"
      />
    </g>

    {/* Bottom right legend */}
    <g opacity="0.65">
      <text
        fill="#FFFFFF"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="10"
        letterSpacing="0.22em"
        textAnchor="end"
        x="744"
        y="396"
      >
        ACQUISITION ROUTE · 2023
      </text>
    </g>
  </svg>
);

export const HealthcareSpotlightSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="healthcare-spotlight-heading"
      className="relative isolate w-full overflow-hidden bg-[#FFFFFF] scroll-mt-20"
      id="healthcare-spotlight"
    >
      {/* Decorative background */}
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
            <path d="M-50 180 Q 460 60 940 220 T 1500 200" />
            <path d="M-50 380 Q 520 260 980 380 T 1500 360" />
            <path d="M-50 620 Q 480 500 940 620 T 1500 600" />
            <path d="M-50 800 Q 460 680 920 800 T 1500 780" />
          </g>
          {/* Faint grid dots */}
          <g fill="#0B1A2D" opacity="0.55">
            {Array.from({ length: 9 }).map((_, row) =>
              Array.from({ length: 14 }).map((__, col) => (
                <circle
                  cx={120 + col * 90}
                  cy={120 + row * 84}
                  key={`hc-grid-${row}-${col}`}
                  r="0.9"
                />
              ))
            )}
          </g>
        </svg>

        {/* Oversized vertical HEALTHCARE wordmark on the left */}
        <span
          className="absolute left-[-3vw] top-1/2 hidden -translate-y-1/2 -rotate-90 whitespace-nowrap font-serifDisplay text-[18vw] font-normal uppercase leading-none tracking-[-0.04em] text-[#0B1A2D] opacity-[0.022] md:block"
          style={{ transformOrigin: "left center" }}
        >
          HEALTHCARE
        </span>

        {/* Mobile: smaller HEALTHCARE word at top for ambience */}
        <span className="absolute -right-[6vw] top-[4%] block whitespace-nowrap font-serifDisplay text-[28vw] font-normal uppercase leading-none tracking-[-0.04em] text-[#0B1A2D] opacity-[0.018] md:hidden">
          HEALTHCARE
        </span>
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-24 pt-24 sm:px-8 md:pb-28 md:pt-28 lg:px-12 lg:pb-[140px] lg:pt-[120px]">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-12 lg:gap-x-[80px] xl:gap-x-[96px]">
          {/* Left column */}
          <div className="lg:col-span-5">
            <p className="font-sans text-[12px] font-bold uppercase leading-none tracking-[0.22em] text-accent md:text-[13px]">
              03 &mdash; INDUSTRY FOCUS
            </p>

            <h2
              className="mt-7 font-serifDisplay text-[38px] font-normal leading-[1.08] tracking-[-0.025em] text-ink sm:text-[48px] md:text-[58px] lg:text-[64px] lg:leading-[1.06] xl:text-[68px]"
              id="healthcare-spotlight-heading"
            >
              Healthcare, as
              <br />
              a standalone practice.
            </h2>

            <div className="mt-8 max-w-[560px] space-y-6 font-sans text-[16px] leading-[1.6] text-ink/82 md:text-[17px] md:leading-[1.65]">
              <p>
                ATLA Healthcare is the firm&rsquo;s healthcare-dedicated brand &mdash;
                built around the regulatory, transactional, and operational
                complexity of running and investing in healthcare businesses.
              </p>
              <p>
                From hospital and physician-group acquisitions to provider network
                restructuring, payor disputes, and the day-to-day governance of
                healthcare operators, the healthcare practice runs as its own
                integrated team.
              </p>
            </div>

            <ul className="mt-9 max-w-[560px] border-t border-b border-[rgba(11,26,45,0.14)]">
              {healthcareServices.map((service, index) => (
                <li
                  className={`flex items-center gap-3 py-[13px] font-sans text-[15px] font-medium leading-[1.4] text-ink md:text-[16px] ${
                    index > 0 ? "border-t border-[rgba(11,26,45,0.10)]" : ""
                  }`}
                  key={service}
                >
                  <span aria-hidden="true" className="text-accent">
                    &rarr;
                  </span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 md:mt-10">
              <a
                className="group inline-flex h-[54px] items-center gap-2.5 rounded-full bg-[#071B33] px-8 font-sans text-[15px] font-semibold text-white shadow-[0_10px_24px_rgba(7,27,51,0.18)] transition-all duration-200 hover:bg-[#0B2649] hover:shadow-[0_14px_30px_rgba(7,27,51,0.24)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F67B1] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFFFFF] md:h-[56px] md:px-9 md:text-[16px]"
                href="https://www.atlahealthcare.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Visit ATLA Healthcare
                <ArrowRight className="group-hover:translate-x-1.5" />
              </a>
            </div>
          </div>

          {/* Right column: featured matter card */}
          <div className="lg:col-span-7">
            <article className="group relative w-full overflow-hidden rounded-[22px] border border-[rgba(11,26,45,0.12)] bg-white p-2 shadow-[0_18px_45px_rgba(7,27,51,0.10)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(7,27,51,0.14)]">
              {/* Top dark navy visual panel */}
              <div className="relative h-[240px] w-full overflow-hidden rounded-[16px] bg-[#06182B] sm:h-[300px] md:h-[340px] lg:h-[360px]">
                <div
                  aria-label="Abstract healthcare acquisition map graphic showing Tennessee deal locations."
                  className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  role="img"
                >
                  <TennesseeMatterGraphic />
                </div>
              </div>

              {/* Card body */}
              <div className="px-6 pb-9 pt-9 md:px-10 md:pb-10 md:pt-10 lg:px-11 lg:pb-11 lg:pt-11">
                <p className="font-sans text-[11px] font-bold uppercase leading-none tracking-[0.22em] text-accent md:text-[12px]">
                  {featuredMatter.label}
                </p>

                <h3 className="mt-6 max-w-[720px] font-serifDisplay text-[26px] font-normal leading-[1.18] tracking-[-0.02em] text-ink md:mt-7 md:text-[32px] lg:text-[36px] lg:leading-[1.15]">
                  {featuredMatter.title}
                </h3>

                <p className="mt-6 font-sans text-[14px] leading-[1.5] text-ink/70 md:text-[15px]">
                  {featuredMatter.meta}
                </p>

                <div className="mt-7 md:mt-8">
                  <Link
                    className="group/link inline-flex items-center gap-2 font-sans text-[15px] font-semibold text-accent transition-colors duration-200 hover:text-[#3D7DCC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white md:text-[16px]"
                    to={featuredMatter.href}
                  >
                    Read the matter
                    <ArrowRight className="group-hover/link:translate-x-1.5" />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
