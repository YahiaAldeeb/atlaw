import { RevealBlock, Counter } from "../../motion/primitives";

const grain =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

const statClass =
  "font-serifDisplay text-[clamp(38px,6vw,60px)] font-normal leading-none tracking-[-0.02em] text-white";

/**
 * ResultsStatBar — firm-wide credibility metrics (client-confirmed totals).
 * Closed cases and total recovered are real aggregate figures, not per-case
 * results, so they carry the standard case-results disclaimer.
 */
export const ResultsStatBar = (): JSX.Element => {
  return (
    <section
      aria-labelledby="results-stats-heading"
      className="relative isolate w-full overflow-hidden bg-[#0e1b33]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{ backgroundImage: grain }}
      />

      <div className="relative mx-auto w-full max-w-[1240px] px-6 py-10 sm:px-10 lg:py-14">
        <h2 id="results-stats-heading" className="sr-only">
          ATLAW results by the numbers
        </h2>

        <RevealBlock>
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-y-0 sm:divide-x sm:divide-white/10">
            <div className="flex flex-col items-center px-4 text-center">
              <Counter as="p" className={statClass} duration={1.4} value={538} />
              <p className="mt-3 font-sans text-[12px] font-semibold uppercase tracking-[0.16em] text-[#C6A04A]">
                Cases Closed
              </p>
            </div>

            <div className="flex flex-col items-center px-4 text-center">
              <Counter as="p" className={statClass} duration={1.6} prefix="$" value={7163973} />
              <p className="mt-3 font-sans text-[12px] font-semibold uppercase tracking-[0.16em] text-[#C6A04A]">
                Recovered for Clients
              </p>
            </div>

            <div className="flex flex-col items-center px-4 text-center">
              <p className={statClass}>2013</p>
              <p className="mt-3 font-sans text-[12px] font-semibold uppercase tracking-[0.16em] text-[#C6A04A]">
                Serving Michigan Since
              </p>
            </div>
          </div>
        </RevealBlock>

        <RevealBlock
          as="p"
          className="mx-auto mt-8 max-w-[760px] text-center font-sans text-[11px] leading-[1.6] text-white/35"
        >
          Case results depend on a variety of factors unique to each case. Case results do not
          guarantee or predict a similar result in any future case.
        </RevealBlock>
      </div>
    </section>
  );
};
