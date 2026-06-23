import { RevealBlock, RevealStagger } from "../../motion/primitives";
import { STAGGER } from "../../motion/config";

export const TrustBar = (): JSX.Element => {
  return (
    <section
      aria-labelledby="trust-bar-heading"
      className="w-full bg-white"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 py-10 sm:px-10 md:py-14 lg:px-20">
        <RevealBlock
          as="h2"
          className="text-center font-serifDisplay italic leading-[1.1] tracking-[-0.01em] text-[#0B1F3A] text-[clamp(26px,4vw,42px)]"
          id="trust-bar-heading"
        >
          Awarded. Featured. Trusted.
        </RevealBlock>

        <RevealStagger
          amount={STAGGER.grid}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:mt-10 md:gap-x-14 lg:gap-x-20"
        >
          <div className="flex flex-col items-center opacity-60 transition-opacity duration-300 hover:opacity-90">
            <p className="font-sans text-[11px] font-black uppercase tracking-[0.22em] text-[#555]">
              Super Lawyers
            </p>
            <p className="mt-0.5 font-serifDisplay text-[18px] italic tracking-[-0.01em] text-[#777]">
              Rising Star
            </p>
          </div>

          <span aria-hidden="true" className="hidden h-10 w-px bg-[#d0d0d0] sm:block" />

          <div className="flex flex-col items-center opacity-60 transition-opacity duration-300 hover:opacity-90">
            <p className="font-sans text-[22px] font-black uppercase tracking-[0.08em] text-[#666]">
              AVVO
            </p>
            <div className="mt-0.5 flex items-baseline gap-1.5">
              <span className="font-sans text-[15px] font-extrabold text-[#777]">10.0</span>
              <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#999]">Superb</span>
            </div>
          </div>

          <span aria-hidden="true" className="hidden h-10 w-px bg-[#d0d0d0] sm:block" />

          <div className="flex flex-col items-center opacity-60 transition-opacity duration-300 hover:opacity-90">
            <p className="font-sans text-[13px] font-extrabold uppercase tracking-[0.18em] text-[#555]">
              NAOPIA
            </p>
            <p className="mt-1 rounded-full border border-[#bbb] px-3 py-0.5 font-sans text-[9px] font-bold uppercase tracking-[0.14em] text-[#888]">
              Top 10 Under 40
            </p>
          </div>

          <span aria-hidden="true" className="hidden h-10 w-px bg-[#d0d0d0] sm:block" />

          <div className="flex flex-col items-center opacity-60 transition-opacity duration-300 hover:opacity-90">
            <p className="font-serifDisplay text-[12px] font-normal uppercase tracking-[0.12em] text-[#666]">
              Top Attorneys
            </p>
            <p className="mt-0.5 font-sans text-[9px] font-semibold uppercase tracking-[0.1em] text-[#999]">
              Outstanding Young Women
            </p>
          </div>

          <span aria-hidden="true" className="hidden h-10 w-px bg-[#d0d0d0] sm:block" />

          <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#999] opacity-60 transition-opacity duration-300 hover:opacity-90">
            <span className="font-sans text-[16px] font-black text-[#666]">A+</span>
          </div>
        </RevealStagger>
      </div>
    </section>
  );
};
