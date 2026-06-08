/* ────────────────────────────────────────────────────────────────────────────
   Firm positioning statement — standalone band between the Final CTA and Footer.
   White canvas, deep-navy ("blue") type, gold quatrefoil micro-accent. Keeps the
   editorial system (serif display, hairline gold rules) but on a clean white BG.
   ──────────────────────────────────────────────────────────────────────────── */

// Fraunces variable axes for the display lockup (mirrors Hero / Final CTA / Footer).
const headlineAxes = "'opsz' 144, 'wght' 380, 'SOFT' 0, 'WONK' 0";

// Gold quatrefoil — same ornament motif used across the homepage.
const Quatrefoil = (): JSX.Element => (
  <svg
    aria-hidden="true"
    fill="none"
    height="24"
    stroke="#B88A2D"
    strokeWidth="1"
    viewBox="0 0 26 26"
    width="24"
  >
    <circle cx="13" cy="7" r="4" />
    <circle cx="13" cy="19" r="4" />
    <circle cx="7" cy="13" r="4" />
    <circle cx="19" cy="13" r="4" />
    <circle cx="13" cy="13" fill="#B88A2D" r="1.2" stroke="none" />
  </svg>
);

export const FirmStatementSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="firm-statement-heading"
      className="relative w-full bg-white"
    >
      <div className="mx-auto flex max-w-[1060px] flex-col items-center px-6 py-[88px] text-center sm:px-10 md:py-[120px] lg:px-16">
        {/* gold ornament flanked by hairline rules */}
        <div
          className="hero-rise flex w-full max-w-[520px] items-center justify-center gap-5"
          style={{ animationDelay: "0ms" }}
        >
          <span className="h-px flex-1 bg-gradient-to-l from-[#B88A2D]/45 to-transparent" />
          <Quatrefoil />
          <span className="h-px flex-1 bg-gradient-to-r from-[#B88A2D]/45 to-transparent" />
        </div>

        {/* positioning statement — deep navy */}
        <h2
          id="firm-statement-heading"
          className="hero-rise mt-9 max-w-[1000px] font-serifDisplay font-normal leading-[1.18] tracking-[-0.015em] text-[#0B1F3A] text-[clamp(30px,4.6vw,54px)]"
          style={{ fontVariationSettings: headlineAxes, animationDelay: "80ms" }}
        >
          ATLAW is a Detroit law firm serving people, families, and businesses
          across the United States.
        </h2>

        {/* supporting SEO line — softer navy */}
        <p
          className="hero-rise mt-6 max-w-[760px] font-sans text-[15px] leading-[1.6] text-[#3A4A63] [text-wrap:balance] lg:text-[17px]"
          style={{ animationDelay: "160ms" }}
        >
          ATLAW handles injury, business, estate, criminal, tax, and immigration
          matters for clients in Michigan and beyond.
        </p>
      </div>
    </section>
  );
};
