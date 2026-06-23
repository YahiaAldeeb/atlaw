import { RevealBlock } from "../../motion/primitives";

const PhoneIcon = () => (
  <svg
    aria-hidden="true"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg
    aria-hidden="true"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
  >
    <rect height="16" rx="2" width="20" x="2" y="4" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export const NoFeeBanner = (): JSX.Element => {
  return (
    <section
      aria-labelledby="no-fee-heading"
      className="w-full bg-[linear-gradient(180deg,#0e1b33_0%,#0a1428_100%)]"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-6 py-10 text-center sm:px-10 md:py-12 lg:py-14">
        <RevealBlock as="p" className="font-sans text-[13px] font-semibold uppercase tracking-[0.22em] text-white/70 sm:text-[14px]">
          No Fees. No Risk.
        </RevealBlock>

        <span aria-hidden="true" className="mt-4 block h-px w-10 bg-[#B88A2D]" />

        <RevealBlock
          as="h2"
          id="no-fee-heading"
          className="mt-4 font-sans text-[clamp(22px,4.5vw,40px)] font-bold uppercase tracking-[0.08em] text-white"
        >
          You Only Pay When We Win
        </RevealBlock>

        <RevealBlock className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-5">
          <a
            className="inline-flex h-[48px] items-center justify-center gap-2.5 rounded-full border border-white/40 px-8 font-sans text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition-all duration-200 hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88A2D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1428] sm:h-[50px] sm:px-9"
            href="tel:+13134067606"
          >
            <PhoneIcon />
            Call
          </a>
          <a
            className="inline-flex h-[48px] items-center justify-center gap-2.5 rounded-full border border-white/40 px-8 font-sans text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition-all duration-200 hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88A2D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1428] sm:h-[50px] sm:px-9"
            href="mailto:info@atlawgroup.com"
          >
            <MailIcon />
            Email
          </a>
        </RevealBlock>
      </div>
    </section>
  );
};
