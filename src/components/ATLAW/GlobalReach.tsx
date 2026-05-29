import { Link } from "react-router-dom";

type Region = {
  label: string;
  cities: string;
  description: string;
};

const regions: Region[] = [
  {
    label: "AMERICAS",
    cities: "Detroit · Chicago · New York · Washington, D.C.",
    description:
      "US-based counsel for domestic and international clients entering, expanding, investing, or defending matters across North American markets.",
  },
  {
    label: "MENA",
    cities: "Dubai · Kuwait · Riyadh · Doha",
    description:
      "Legal support for clients operating between the Middle East, North Africa, and the United States — including investors, family offices, founders, healthcare operators, and multinational businesses.",
  },
  {
    label: "EUROPE",
    cities: "London · Paris · Istanbul",
    description:
      "Cross-border legal coordination for businesses, investors, and families with European legal, commercial, or regulatory exposure.",
  },
  {
    label: "ASIA",
    cities: "Singapore · Kuala Lumpur · Manila",
    description:
      "Support for clients moving capital, contracts, operations, and business relationships between Asia, MENA, Europe, and North America.",
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

type City = {
  name: string;
  x: number;
  y: number;
  size?: "primary" | "secondary";
  labelOffset?: { x: number; y: number };
  anchor?: "start" | "middle" | "end";
};

// All coordinates are in a 1200 x 900 SVG viewBox (4:3 aspect).
// Map content occupies roughly y = 220 to y = 720.
const cities: City[] = [
  // Americas
  { name: "DETROIT", x: 268, y: 372, size: "primary", labelOffset: { x: 0, y: -16 }, anchor: "middle" },
  { name: "CHICAGO", x: 244, y: 378, size: "secondary", labelOffset: { x: -10, y: 4 }, anchor: "end" },
  { name: "NEW YORK", x: 312, y: 382, size: "secondary", labelOffset: { x: 12, y: 0 }, anchor: "start" },
  { name: "WASHINGTON, D.C.", x: 304, y: 400, size: "secondary", labelOffset: { x: 14, y: 10 }, anchor: "start" },
  // Europe
  { name: "LONDON", x: 568, y: 348, size: "secondary", labelOffset: { x: -10, y: -8 }, anchor: "end" },
  { name: "PARIS", x: 588, y: 368, size: "secondary", labelOffset: { x: -10, y: 4 }, anchor: "end" },
  { name: "ISTANBUL", x: 644, y: 388, size: "secondary", labelOffset: { x: 12, y: 4 }, anchor: "start" },
  // MENA
  { name: "KUWAIT", x: 692, y: 416, size: "primary", labelOffset: { x: -12, y: -10 }, anchor: "end" },
  { name: "RIYADH", x: 686, y: 438, size: "secondary", labelOffset: { x: -12, y: 6 }, anchor: "end" },
  { name: "DOHA", x: 712, y: 438, size: "secondary", labelOffset: { x: 0, y: 18 }, anchor: "middle" },
  { name: "DUBAI", x: 730, y: 432, size: "primary", labelOffset: { x: 14, y: 2 }, anchor: "start" },
  // Asia
  { name: "MANILA", x: 1006, y: 482, size: "secondary", labelOffset: { x: 14, y: 0 }, anchor: "start" },
  { name: "KUALA LUMPUR", x: 938, y: 508, size: "secondary", labelOffset: { x: -12, y: -8 }, anchor: "end" },
  { name: "SINGAPORE", x: 946, y: 522, size: "primary", labelOffset: { x: 0, y: 20 }, anchor: "middle" },
];

const regionLabels = [
  { label: "AMERICAS", x: 240, y: 270 },
  { label: "EUROPE", x: 600, y: 270 },
  { label: "MENA", x: 720, y: 360 },
  { label: "ASIA", x: 990, y: 280 },
];

const GlobalMapVisual = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="absolute inset-0 h-full w-full"
    fill="none"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 1200 900"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="gr-panel" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#0A2444" />
        <stop offset="55%" stopColor="#071B33" />
        <stop offset="100%" stopColor="#04111F" />
      </linearGradient>
      <radialGradient
        cx="600"
        cy="470"
        fx="600"
        fy="470"
        gradientUnits="userSpaceOnUse"
        id="gr-center-glow"
        r="560"
      >
        <stop offset="0%" stopColor="#3D7DCC" stopOpacity="0.22" />
        <stop offset="55%" stopColor="#1B3A66" stopOpacity="0.08" />
        <stop offset="100%" stopColor="#04111F" stopOpacity="0" />
      </radialGradient>
      <radialGradient
        cx="600"
        cy="900"
        fx="600"
        fy="900"
        gradientUnits="userSpaceOnUse"
        id="gr-bottom-glow"
        r="600"
      >
        <stop offset="0%" stopColor="#6EA4E8" stopOpacity="0.18" />
        <stop offset="100%" stopColor="#04111F" stopOpacity="0" />
      </radialGradient>
      <radialGradient
        cx="710"
        cy="430"
        fx="710"
        fy="430"
        gradientUnits="userSpaceOnUse"
        id="gr-mena-glow"
        r="110"
      >
        <stop offset="0%" stopColor="#E6C382" stopOpacity="0.36" />
        <stop offset="100%" stopColor="#E6C382" stopOpacity="0" />
      </radialGradient>
      <radialGradient
        cx="600"
        cy="450"
        fx="600"
        fy="450"
        gradientUnits="userSpaceOnUse"
        id="gr-vignette"
        r="700"
      >
        <stop offset="60%" stopColor="#04111F" stopOpacity="0" />
        <stop offset="100%" stopColor="#04111F" stopOpacity="0.6" />
      </radialGradient>
      <pattern
        height="7"
        id="gr-dots"
        patternUnits="userSpaceOnUse"
        width="7"
      >
        <circle cx="1" cy="1" fill="#FFFFFF" fillOpacity="0.5" r="0.9" />
      </pattern>
      <pattern
        height="9"
        id="gr-dots-sparse"
        patternUnits="userSpaceOnUse"
        width="9"
      >
        <circle cx="1" cy="1" fill="#FFFFFF" fillOpacity="0.28" r="0.75" />
      </pattern>
    </defs>

    {/* Panel base */}
    <rect fill="url(#gr-panel)" height="900" width="1200" />
    <rect fill="url(#gr-center-glow)" height="900" width="1200" />
    <rect fill="url(#gr-bottom-glow)" height="900" width="1200" />

    {/* Longitude / latitude curved lines */}
    <g
      fill="none"
      stroke="#FFFFFF"
      strokeOpacity="0.07"
      strokeWidth="1"
    >
      <path d="M 0 250 Q 600 220 1200 250" />
      <path d="M 0 370 Q 600 340 1200 370" />
      <path d="M 0 490 Q 600 460 1200 490" />
      <path d="M 0 610 Q 600 580 1200 610" />
      <path d="M 0 720 Q 600 690 1200 720" />
      <path d="M 200 80 Q 230 460 200 820" />
      <path d="M 460 80 Q 490 460 460 820" />
      <path d="M 720 80 Q 750 460 720 820" />
      <path d="M 980 80 Q 1010 460 980 820" />
    </g>

    {/* Continent silhouettes filled with dot pattern */}
    <g>
      {/* North America */}
      <path
        d="M 150 315 Q 175 295 215 300 Q 260 302 295 310 Q 330 318 355 335 Q 372 360 365 395 Q 355 430 325 450 Q 295 462 260 458 Q 225 454 200 440 Q 175 425 160 400 Q 145 365 150 315 Z"
        fill="url(#gr-dots)"
      />
      {/* Central America narrow strip */}
      <path
        d="M 270 455 Q 285 460 295 475 Q 300 490 295 505 Q 285 510 278 500 Q 270 485 270 455 Z"
        fill="url(#gr-dots-sparse)"
      />
      {/* South America */}
      <path
        d="M 295 510 Q 325 508 345 530 Q 360 565 350 610 Q 335 655 310 660 Q 290 652 285 620 Q 280 580 285 545 Q 290 525 295 510 Z"
        fill="url(#gr-dots)"
      />

      {/* Europe */}
      <path
        d="M 540 325 Q 580 315 625 325 Q 660 338 668 365 Q 660 388 625 395 Q 590 395 565 388 Q 545 375 540 350 Z"
        fill="url(#gr-dots)"
      />

      {/* Africa */}
      <path
        d="M 595 400 Q 645 395 680 420 Q 700 455 690 500 Q 680 545 645 575 Q 615 590 595 580 Q 575 560 575 520 Q 575 470 585 430 Q 590 410 595 400 Z"
        fill="url(#gr-dots)"
      />

      {/* Middle East */}
      <path
        d="M 670 380 Q 710 385 740 405 Q 760 430 745 455 Q 720 470 695 465 Q 670 455 665 430 Q 665 400 670 380 Z"
        fill="url(#gr-dots)"
      />

      {/* Asia (large) */}
      <path
        d="M 700 325 Q 790 308 880 318 Q 970 328 1040 345 Q 1085 370 1085 405 Q 1075 440 1020 455 Q 950 468 880 462 Q 810 458 760 448 Q 720 435 705 405 Q 695 365 700 325 Z"
        fill="url(#gr-dots)"
      />

      {/* Southeast Asia / Indonesia */}
      <path
        d="M 930 465 Q 980 462 1020 475 Q 1050 490 1040 510 Q 1010 522 975 518 Q 945 510 930 495 Z"
        fill="url(#gr-dots-sparse)"
      />
      <path
        d="M 985 470 Q 1005 472 1015 490 Q 1010 505 998 502 Q 988 490 985 470 Z"
        fill="url(#gr-dots-sparse)"
      />

      {/* Philippines */}
      <path
        d="M 998 458 Q 1014 460 1018 478 Q 1012 492 1002 488 Q 996 472 998 458 Z"
        fill="url(#gr-dots-sparse)"
      />

      {/* India peninsula */}
      <path
        d="M 815 418 Q 845 420 855 440 Q 858 470 840 490 Q 825 498 818 485 Q 812 460 815 418 Z"
        fill="url(#gr-dots-sparse)"
      />

      {/* Australia */}
      <path
        d="M 985 560 Q 1035 555 1075 568 Q 1095 585 1080 608 Q 1045 622 1005 618 Q 975 610 978 585 Q 980 568 985 560 Z"
        fill="url(#gr-dots)"
      />
    </g>

    {/* MENA gold glow */}
    <rect fill="url(#gr-mena-glow)" height="900" width="1200" />

    {/* Decorative concentric arcs over MENA */}
    <g fill="none" stroke="#E6C382" strokeOpacity="0.22" strokeWidth="0.8">
      <circle cx="710" cy="430" r="42" />
      <circle cx="710" cy="430" r="70" />
      <circle cx="710" cy="430" r="104" />
    </g>

    {/* Route lines */}
    <g fill="none" strokeLinecap="round">
      {/* Primary: Detroit -> Dubai (cream/gold) */}
      <path
        d="M 268 372 C 380 270, 560 280, 730 432"
        stroke="#E6C382"
        strokeOpacity="0.8"
        strokeWidth="1.5"
      />
      {/* Primary: Kuwait -> New York */}
      <path
        d="M 692 416 C 540 300, 420 310, 312 382"
        stroke="#E6C382"
        strokeOpacity="0.72"
        strokeWidth="1.4"
      />
      {/* Primary: Singapore -> New York (long arc) */}
      <path
        d="M 946 522 C 720 220, 500 220, 312 382"
        stroke="#E6C382"
        strokeOpacity="0.55"
        strokeWidth="1.2"
      />
      {/* Secondary (dotted): London -> Dubai */}
      <path
        d="M 568 348 C 620 370, 680 390, 730 432"
        stroke="#6EA4E8"
        strokeDasharray="2 5"
        strokeOpacity="0.78"
        strokeWidth="1.2"
      />
      {/* Secondary (dotted): Istanbul -> Kuala Lumpur */}
      <path
        d="M 644 388 C 780 410, 880 470, 938 508"
        stroke="#6EA4E8"
        strokeDasharray="2 5"
        strokeOpacity="0.7"
        strokeWidth="1.2"
      />
      {/* Secondary (dotted): Manila -> Dubai */}
      <path
        d="M 1006 482 C 900 380, 820 380, 730 432"
        stroke="#6EA4E8"
        strokeDasharray="2 5"
        strokeOpacity="0.55"
        strokeWidth="1.1"
      />
      {/* Secondary (dotted): Paris -> Detroit */}
      <path
        d="M 588 368 C 470 300, 360 300, 268 372"
        stroke="#6EA4E8"
        strokeDasharray="2 5"
        strokeOpacity="0.55"
        strokeWidth="1.1"
      />
    </g>

    {/* Region labels */}
    <g fill="#6EA4E8" fontFamily="Inter, system-ui, sans-serif" fontWeight="700">
      {regionLabels.map((r) => (
        <text
          fillOpacity="0.9"
          fontSize="15"
          key={r.label}
          letterSpacing="3.2"
          textAnchor="middle"
          x={r.x}
          y={r.y}
        >
          {r.label}
        </text>
      ))}
    </g>

    {/* City pins + labels */}
    <g>
      {cities.map((c) => {
        const isPrimary = c.size === "primary";
        const glowR = isPrimary ? 13 : 8;
        const ringR = isPrimary ? 6.5 : 4.5;
        const dotR = isPrimary ? 3 : 2;
        const lx = c.x + (c.labelOffset?.x ?? 0);
        const ly = c.y + (c.labelOffset?.y ?? -10);
        return (
          <g key={c.name}>
            <circle
              cx={c.x}
              cy={c.y}
              fill="#E6C382"
              fillOpacity="0.2"
              r={glowR}
            />
            <circle
              cx={c.x}
              cy={c.y}
              fill="none"
              r={ringR}
              stroke="#FFFFFF"
              strokeOpacity="0.5"
              strokeWidth="1"
            />
            <circle cx={c.x} cy={c.y} fill="#FFFFFF" r={dotR} />
            <text
              fill="#FFFFFF"
              fillOpacity="0.85"
              fontFamily="Inter, system-ui, sans-serif"
              fontSize="10"
              fontWeight="600"
              letterSpacing="1.7"
              textAnchor={c.anchor ?? "middle"}
              x={lx}
              y={ly}
            >
              {c.name}
            </text>
          </g>
        );
      })}
    </g>

    {/* Edge vignette */}
    <rect fill="url(#gr-vignette)" height="900" width="1200" />
  </svg>
);

export const GlobalReach = (): JSX.Element => {
  return (
    <section
      aria-labelledby="global-reach-heading"
      className="relative isolate w-full overflow-hidden bg-[#071B33] scroll-mt-20"
      id="global-reach"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 select-none"
      >
        {/* Radial wash + faint grid lines */}
        <svg
          className="absolute inset-0 h-full w-full"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1440 1000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="gr-bg-wash" cx="68%" cy="35%" r="60%">
              <stop offset="0%" stopColor="#10355F" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#071B33" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect fill="url(#gr-bg-wash)" height="1000" width="1440" />
          <g stroke="#FFFFFF" strokeOpacity="0.05" strokeWidth="1">
            <path d="M -40 220 Q 480 120 960 240 T 1500 220" />
            <path d="M -40 440 Q 520 340 980 440 T 1500 420" />
            <path d="M -40 660 Q 480 560 940 660 T 1500 640" />
            <path d="M -40 860 Q 460 760 920 860 T 1500 840" />
          </g>
        </svg>

        {/* Oversized GLOBAL REACH ghost text */}
        <span className="absolute left-1/2 top-[4%] -translate-x-1/2 whitespace-nowrap font-serifDisplay text-[18vw] font-normal uppercase leading-none tracking-[-0.04em] text-[#FFFFFF] opacity-[0.02] sm:text-[16vw] md:text-[13vw]">
          GLOBAL REACH
        </span>
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-24 pt-24 sm:px-8 md:pb-28 md:pt-28 lg:px-10 lg:pb-[130px] lg:pt-[120px] xl:px-12">
        <div className="grid grid-cols-1 gap-y-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.38fr)] lg:gap-x-14 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.42fr)] xl:gap-x-[64px] 2xl:gap-x-[80px]">
          {/* Left column */}
          <div className="relative">
            <p className="font-sans text-[12px] font-bold uppercase leading-none tracking-[0.24em] text-[#6EA4E8] md:text-[13px]">
              04 &mdash; GLOBAL REACH
            </p>

            <h2
              className="mt-7 max-w-[620px] font-serifDisplay text-[36px] font-normal leading-[1.06] tracking-[-0.025em] text-[#FFFFFF] sm:text-[44px] md:text-[54px] lg:text-[46px] xl:text-[58px] 2xl:text-[64px]"
              id="global-reach-heading"
            >
              Built across markets,
              <br />
              not handed off between them.
            </h2>

            <div className="mt-7 max-w-[560px] space-y-6 font-sans text-[15px] leading-[1.6] text-white/[0.78] md:text-[16px] md:leading-[1.65]">
              <p>
                ATLAW serves clients across the Americas, MENA, Europe, and Asia
                through a connected network of attorneys, affiliates, and
                strategic relationships.
              </p>
              <p>
                For clients moving between markets &mdash; from Detroit to
                Dubai, Kuwait to the United States, or Asia into North America
                &mdash; the difference is continuity. One team can help
                coordinate the legal, commercial, and cultural details that
                make cross-border work move.
              </p>
            </div>

          </div>

          {/* Right column: global map panel */}
          <div className="relative lg:self-start">
            <div
              aria-label="Global network map illustrating ATLAW's presence across the Americas, Europe, MENA, and Asia."
              className="relative w-full overflow-hidden rounded-[24px] border border-white/[0.18] bg-[#06182B] shadow-[0_24px_70px_rgba(0,0,0,0.35)] md:rounded-[28px]"
              role="img"
            >
              <div className="relative aspect-[5/4] w-full sm:aspect-[16/11] md:aspect-[4/3]">
                <GlobalMapVisual />
              </div>

              {/* Bottom meta strip */}
              <div className="pointer-events-none absolute bottom-4 left-6 right-6 flex items-center justify-between font-sans text-[9.5px] font-bold uppercase tracking-[0.26em] text-white/[0.55] md:bottom-5 md:text-[11px]">
                <span aria-hidden="true">SIXTEEN CITIES</span>
                <span aria-hidden="true">CROSS-BORDER NETWORK</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width horizontal region columns */}
        <div className="mt-16 border-t border-white/[0.14] md:mt-20 lg:mt-[88px]">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 md:gap-x-10 lg:grid-cols-4 lg:gap-x-8 xl:gap-x-12">
            {regions.map((region, index) => (
              <article
                className="group relative flex flex-col gap-y-5 pt-8 transition-colors duration-200 lg:pt-10"
                key={region.label}
              >
                {/* Vertical divider between columns on lg+ */}
                {index > 0 ? (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute left-[-16px] top-8 hidden h-[calc(100%-2rem)] w-px bg-white/[0.12] lg:block xl:left-[-24px]"
                  />
                ) : null}

                <h3 className="font-sans text-[12px] font-bold uppercase leading-none tracking-[0.20em] text-[#6EA4E8] md:text-[13px]">
                  {region.label}
                </h3>

                <p className="font-serifDisplay text-[19px] font-normal leading-[1.32] tracking-[-0.005em] text-[#FFFFFF] md:text-[20px] lg:text-[21px]">
                  {region.cities}
                </p>

                <p className="font-sans text-[13px] leading-[1.6] text-white/[0.72] md:text-[13.5px]">
                  {region.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 md:mt-14 lg:mt-16">
          <Link
            className="group inline-flex items-center gap-2 font-sans text-[15px] font-semibold text-[#6EA4E8] transition-colors duration-200 hover:text-[#A6C8F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6EA4E8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071B33] md:text-[16px]"
            to="/global-reach"
          >
            <span className="border-b border-transparent group-hover:border-current">
              Explore Global Reach
            </span>
            <ArrowRight className="group-hover:translate-x-1.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
