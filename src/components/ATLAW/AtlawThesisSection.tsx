import { Link } from "react-router-dom";

type Pillar = {
  number: string;
  title: string;
  body: string[];
};

const thesisPillars: Pillar[] = [
  {
    number: "01.",
    title: "Global by design.",
    body: [
      "We operate in sixteen cities across the Americas, MENA, Europe, and Asia — not as a US firm with a few referral partners abroad, but as a firm whose attorneys, affiliations, and case files are genuinely cross-jurisdictional.",
      "For a client buying US counsel from Kuwait, or MENA counsel from Detroit, that distinction is the difference between a deal that closes and a deal that stalls in translation.",
    ],
  },
  {
    number: "02.",
    title: "Tech-enabled delivery.",
    body: [
      "Legal technology is part of how we work, not a slogan on the homepage. Document automation, encrypted client portals, conflict-checking infrastructure, and integrated cross-office workflow let us move faster on the work that matters and spend less time on the work that doesn’t.",
      "Clients feel it as: faster intake, shorter response cycles, and fewer of the back-office delays that define traditional firm engagements.",
    ],
  },
  {
    number: "03.",
    title: "Modern leadership.",
    body: [
      "ATLAW was founded by Dewnya Bazzi, a Muslim American attorney who built the firm she wanted to practice at — a firm that hires across backgrounds, languages, and jurisdictions, and whose leadership team reflects the clients it serves.",
      "This is not a diversity statement. It is an operational advantage. Cross-border deals route to attorneys who speak the client’s first language and understand their jurisdiction before the first meeting.",
    ],
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

export const AtlawThesisSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="firm-thesis-heading"
      className="relative isolate w-full overflow-hidden bg-[#071B33] text-[#F7F3EA] scroll-mt-20"
      id="firm-thesis"
    >
      {/* Decorative background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* Base gradient + soft radial glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 78% 38%, rgba(58, 110, 188, 0.20), transparent 65%), linear-gradient(180deg, #061323 0%, #071B33 50%, #061323 100%)",
          }}
        />

        {/* Faint global route / latitude-longitude linework */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.07]"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1440 900"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Latitudes */}
          <g stroke="#F7F3EA" strokeWidth="1">
            <path d="M0 160 Q 720 100 1440 160" />
            <path d="M0 280 Q 720 230 1440 280" />
            <path d="M0 400 Q 720 360 1440 400" />
            <path d="M0 520 Q 720 480 1440 520" />
            <path d="M0 640 Q 720 600 1440 640" />
            <path d="M0 760 Q 720 720 1440 760" />
          </g>
          {/* Longitudes */}
          <g stroke="#F7F3EA" strokeWidth="1">
            <path d="M220 0 Q 260 450 220 900" />
            <path d="M420 0 Q 460 450 420 900" />
            <path d="M620 0 Q 660 450 620 900" />
            <path d="M820 0 Q 820 450 820 900" />
            <path d="M1020 0 Q 980 450 1020 900" />
            <path d="M1220 0 Q 1180 450 1220 900" />
          </g>
          {/* Curved routes */}
          <g stroke="#6EA4E8" strokeWidth="1" opacity="0.65">
            <path d="M180 620 C 380 380, 760 240, 1180 320" />
            <path d="M260 720 C 540 540, 880 540, 1300 460" />
            <path d="M120 460 C 360 260, 720 320, 1100 220" />
          </g>
          {/* Connection points */}
          <g fill="#6EA4E8" opacity="0.85">
            <circle cx="180" cy="620" r="2.4" />
            <circle cx="1180" cy="320" r="2.4" />
            <circle cx="260" cy="720" r="2.4" />
            <circle cx="1300" cy="460" r="2.4" />
            <circle cx="120" cy="460" r="2.4" />
            <circle cx="1100" cy="220" r="2.4" />
            <circle cx="720" cy="420" r="2.4" />
          </g>
          {/* Light texture dots */}
          <g fill="#F7F3EA" opacity="0.55">
            {Array.from({ length: 14 }).map((_, row) =>
              Array.from({ length: 26 }).map((__, col) => (
                <circle
                  cx={40 + col * 54}
                  cy={60 + row * 56}
                  key={`dot-${row}-${col}`}
                  r="0.7"
                />
              ))
            )}
          </g>
        </svg>

        {/* Oversized ghosted typography */}
        <span
          className="pointer-events-none absolute right-[-2vw] top-1/2 hidden -translate-y-1/2 whitespace-nowrap text-right font-serifDisplay text-[14vw] font-normal uppercase leading-[0.88] tracking-[-0.04em] text-[#F7F3EA] opacity-[0.045] md:block"
        >
          GLOBAL
          <br />
          BY DESIGN
        </span>
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-24 pt-24 sm:px-8 md:pb-28 md:pt-28 lg:px-12 lg:pb-[130px] lg:pt-[110px]">
        {/* Eyebrow */}
        <p className="font-sans text-[12px] font-bold uppercase leading-none tracking-[0.22em] text-[#6EA4E8] md:text-[13px]">
          02 &mdash; THE FIRM
        </p>

        {/* Headline */}
        <h2
          className="mt-7 max-w-[950px] font-serifDisplay text-[40px] font-normal leading-[1.1] tracking-[-0.025em] text-[#F7F3EA] sm:text-[52px] md:text-[62px] lg:text-[72px] lg:leading-[1.08]"
          id="firm-thesis-heading"
        >
          Most law firms were built for the
          <br className="hidden sm:inline" />{" "}
          last century of commerce. ATLAW
          <br className="hidden sm:inline" />{" "}
          was built for this one.
        </h2>

        {/* Intro */}
        <p className="mt-7 max-w-[600px] font-sans text-[16px] leading-[1.6] text-white/76 md:text-[18px] lg:text-[19px]">
          Three things explain why our clients pick us &mdash; and keep us as global counsel through
          the deals, the disputes, and the growth that follows.
        </p>

        {/* Thesis grid */}
        <div className="mt-16 grid grid-cols-1 gap-y-12 md:mt-20 md:grid-cols-2 md:gap-x-12 md:gap-y-14 lg:mt-[80px] lg:grid-cols-3 lg:gap-x-[64px]">
          {thesisPillars.map((pillar, index) => (
            <article
              className={[
                "relative flex flex-col",
                // Vertical dividers on lg: every column after first
                index > 0 ? "lg:border-l lg:border-white/15 lg:pl-[40px] xl:pl-[56px]" : "",
                // Horizontal divider for mobile / md fallback (between stacked pillars)
                index > 0 ? "border-t border-white/10 pt-12 md:border-t-0 md:pt-0" : "",
                // Vertical divider for 2-col md layout: 2nd col only
                index === 1 ? "md:border-l md:border-white/15 md:pl-12" : "",
              ].join(" ")}
              key={pillar.title}
            >
              <p className="font-sans text-[16px] font-bold leading-none tracking-[0.08em] text-[#6EA4E8] md:text-[17px]">
                {pillar.number}
              </p>

              <h3 className="mt-5 font-serifDisplay text-[26px] font-normal leading-[1.15] tracking-[-0.01em] text-[#F7F3EA] md:mt-6 md:text-[30px] lg:text-[32px]">
                {pillar.title}
              </h3>

              <div className="mt-5 space-y-6 font-sans text-[15px] leading-[1.68] text-white/74 md:mt-6 md:text-[16px] md:leading-[1.7]">
                {pillar.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Bottom link */}
        <div className="mt-14 md:mt-16 lg:mt-[64px]">
          <Link
            className="group inline-flex items-center gap-2.5 font-sans text-[17px] font-semibold text-[#6EA4E8] transition-colors duration-200 hover:text-[#A6C7F0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6EA4E8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071B33] md:text-[18px]"
            to="/about"
          >
            Read more about the firm
            <ArrowRight className="group-hover:translate-x-1.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
