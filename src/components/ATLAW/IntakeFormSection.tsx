import { RevealText, RevealBlock } from "../../motion/primitives";

const grain =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

const headlineAxes = "'opsz' 144, 'wght' 380, 'SOFT' 0, 'WONK' 0";

const ArrowRight = ({ className = "" }: { className?: string }) => (
  <svg
    aria-hidden="true"
    className={`h-[14px] w-[14px] transition-transform duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${className}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      d="M5 12h14M13 5l7 7-7 7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);

export const IntakeFormSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="intake-form-heading"
      className="relative isolate w-full overflow-hidden bg-[#0e1b33]"
    >
      <img
        aria-hidden="true"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-top opacity-20"
        src="/assets/dewnya-intake-bg.avif"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0e1b33] via-[rgba(14,27,51,0.92)] to-[rgba(14,27,51,0.6)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{ backgroundImage: grain }}
      />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col justify-center px-6 py-20 sm:px-10 md:py-28 lg:flex-row lg:items-center lg:px-20 lg:py-[120px]">
        <div className="max-w-[620px] lg:basis-[55%]">
          <RevealText
            as="h2"
            className="font-serifDisplay font-normal leading-[1.06] tracking-[-0.02em] text-white text-[clamp(36px,5.5vw,64px)]"
            id="intake-form-heading"
            style={{ fontVariationSettings: headlineAxes }}
          >
            See How Much We Can Win for You<span className="text-[#B88A2D]">.</span>
          </RevealText>

          <RevealBlock
            as="p"
            className="mt-6 font-sans text-[18px] leading-[1.6] text-white/80 lg:text-[20px]"
          >
            Pay nothing unless we win.
          </RevealBlock>

          <RevealBlock className="mt-10 lg:mt-12">
            <a
              className="group inline-flex h-[60px] items-center justify-center gap-2.5 rounded-full bg-[#C6A04A] px-9 font-sans text-[15px] font-medium uppercase tracking-[0.04em] text-[#0E1B2C] transition-all duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#d4b35a] hover:shadow-[0_8px_24px_rgba(198,160,74,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A04A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e1b33] lg:h-[64px] lg:px-10"
              href="https://j098jiq3pk7.typeform.com/to/Mslg7Y7f"
              rel="noopener noreferrer"
              target="_blank"
            >
              Get a Free Case Review
              <ArrowRight className="group-hover:translate-x-1" />
            </a>
          </RevealBlock>
        </div>
      </div>
    </section>
  );
};
