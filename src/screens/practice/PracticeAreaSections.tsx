import { Link } from "react-router-dom";
import {
  practiceAreasBySlug,
  type PracticeArea,
} from "../../data/practiceAreas";
import { GOLD, IVORY, NAVY_CANVAS, subHeadlineAxes } from "./practiceAreaTokens";

export { Hero } from "./PracticeAreaHero";

export const Intro = ({ area }: { area: PracticeArea }): JSX.Element => (
  <section
    aria-labelledby="intro-heading"
    className="relative w-full"
    style={{ backgroundColor: "#FFFFFF", color: "#0B1F3A" }}
  >
    <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-20 pt-20 sm:px-10 lg:px-20 lg:pb-[120px] lg:pt-[120px]">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] lg:gap-20">
        <div>
          <p className="font-sans text-[11.5px] font-semibold uppercase leading-none tracking-[0.24em] text-[#B88A2D]">
            <span className="mr-3 inline-block h-px w-8 align-middle bg-[#B88A2D]" />
            Overview
          </p>
          <h2
            className="mt-6 font-serifDisplay text-[32px] font-normal leading-[1.08] tracking-[-0.02em] text-[#0B1F3A] lg:text-[42px]"
            id="intro-heading"
            style={{ fontVariationSettings: subHeadlineAxes }}
          >
            How we practice {area.name.toLowerCase()}
            <span aria-hidden="true" style={{ color: GOLD }}>.</span>
          </h2>
        </div>

        <div className="space-y-6 font-sans text-[16.5px] leading-[1.75] text-[#3A4A63] lg:text-[18px]">
          {area.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const WhatWeHandle = ({ area }: { area: PracticeArea }): JSX.Element => (
  <section
    aria-labelledby="key-areas-heading"
    className="relative w-full"
    style={{ background: NAVY_CANVAS, color: IVORY }}
  >
    <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-20 pt-20 sm:px-10 lg:px-20 lg:pb-[120px] lg:pt-[120px]">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] lg:gap-20">
        <div>
          <p className="font-sans text-[11.5px] font-semibold uppercase leading-none tracking-[0.24em] text-[#D39A2A]">
            <span className="mr-3 inline-block h-px w-8 align-middle bg-[#D39A2A]" />
            Key Areas
          </p>
          <h2
            className="mt-6 font-serifDisplay text-[32px] font-normal leading-[1.08] tracking-[-0.02em] text-[#FFFFFF] lg:text-[42px]"
            id="key-areas-heading"
            style={{ fontVariationSettings: subHeadlineAxes }}
          >
            Specific work inside this practice
            <span aria-hidden="true" style={{ color: GOLD }}>.</span>
          </h2>
        </div>

        <ul className="grid grid-cols-1 divide-y divide-white/10 border-y border-white/10">
          {area.whatWeHandle.map((item, index) => (
            <li
              className="flex items-start gap-6 py-5 font-sans text-[16px] leading-[1.55] text-[#FFFFFF] lg:text-[17.5px]"
              key={item}
            >
              <span
                aria-hidden="true"
                className="mt-[6px] inline-block w-8 shrink-0 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D39A2A]"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export const WhenToCall = ({ area }: { area: PracticeArea }): JSX.Element => (
  <section
    aria-labelledby="when-to-call-heading"
    className="relative w-full"
    style={{ backgroundColor: "#FFFFFF", color: "#0B1F3A" }}
  >
    <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-20 pt-20 sm:px-10 lg:px-20 lg:pb-[120px] lg:pt-[120px]">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] lg:gap-20">
        <div>
          <p className="font-sans text-[11.5px] font-semibold uppercase leading-none tracking-[0.24em] text-[#B88A2D]">
            <span className="mr-3 inline-block h-px w-8 align-middle bg-[#B88A2D]" />
            When to call us
          </p>
          <h2
            className="mt-6 font-serifDisplay text-[32px] font-normal leading-[1.08] tracking-[-0.02em] text-[#0B1F3A] lg:text-[42px]"
            id="when-to-call-heading"
            style={{ fontVariationSettings: subHeadlineAxes }}
          >
            Common triggers for engaging us
            <span aria-hidden="true" style={{ color: GOLD }}>.</span>
          </h2>
          <p className="mt-6 font-sans text-[14.5px] italic leading-[1.6] text-[#7A7466]">
            If any of these apply, the next move usually benefits from being early.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {area.whenToCall.map((item) => (
            <div
              className="flex h-full flex-col rounded-[18px] border border-[#FFFFFF] bg-white p-6 shadow-[0_6px_22px_rgba(11,31,58,0.06)] transition-colors hover:border-[#FFFFFF]"
              key={item}
            >
              <span
                aria-hidden="true"
                className="font-serifDisplay text-[28px] leading-none"
                style={{ color: GOLD }}
              >
                &middot;
              </span>
              <p className="mt-4 font-sans text-[15.5px] leading-[1.65] text-[#3A4A63]">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const Approach = ({ area }: { area: PracticeArea }): JSX.Element => (
  <section
    aria-labelledby="approach-heading"
    className="relative w-full"
    style={{ background: NAVY_CANVAS, color: IVORY }}
  >
    <div className="relative mx-auto w-full max-w-[1180px] px-6 pb-24 pt-24 sm:px-10 lg:px-20 lg:pb-[140px] lg:pt-[140px]">
      <p
        className="text-center font-sans text-[11.5px] font-semibold uppercase leading-none tracking-[0.28em]"
        id="approach-heading"
        style={{ color: GOLD }}
      >
        Our approach
      </p>
      <blockquote
        className="mx-auto mt-8 max-w-[960px] text-center font-serifDisplay font-normal leading-[1.2] tracking-[-0.015em] text-[#FFFFFF]"
        style={{
          fontSize: "clamp(26px, 2.8vw, 42px)",
          fontVariationSettings: subHeadlineAxes,
        }}
      >
        &ldquo;{area.approach}&rdquo;
      </blockquote>
    </div>
  </section>
);

export const RelatedAreas = ({ area }: { area: PracticeArea }): JSX.Element => {
  const related = area.relatedSlugs
    .map((slug) => practiceAreasBySlug[slug])
    .filter((entry): entry is PracticeArea => Boolean(entry));

  if (related.length === 0) return <></>;

  return (
    <section
      aria-labelledby="related-heading"
      className="relative w-full"
      style={{ backgroundColor: "#FFFFFF", color: "#0B1F3A" }}
    >
      <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-20 pt-20 sm:px-10 lg:px-20 lg:pb-[120px] lg:pt-[120px]">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-sans text-[11.5px] font-semibold uppercase leading-none tracking-[0.24em] text-[#B88A2D]">
              <span className="mr-3 inline-block h-px w-8 align-middle bg-[#B88A2D]" />
              Related practice areas
            </p>
            <h2
              className="mt-6 font-serifDisplay text-[28px] font-normal leading-[1.1] tracking-[-0.02em] text-[#0B1F3A] lg:text-[38px]"
              id="related-heading"
              style={{ fontVariationSettings: subHeadlineAxes }}
            >
              Adjacent work that often shows up alongside this
              <span aria-hidden="true" style={{ color: GOLD }}>.</span>
            </h2>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {related.map((entry) => (
            <Link
              className="group flex h-full flex-col rounded-[20px] border border-[#FFFFFF] bg-white p-6 shadow-[0_8px_24px_rgba(11,31,58,0.06)] transition-all duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[3px] hover:border-[rgba(184,138,45,0.5)] hover:shadow-[0_18px_38px_rgba(11,31,58,0.14)]"
              key={entry.slug}
              to={`/practice-areas/${entry.slug}`}
            >
              <p className="font-sans text-[10.5px] font-semibold uppercase leading-none tracking-[0.22em] text-[#B88A2D]">
                {entry.categoryNumber} &mdash; {entry.category}
              </p>
              <h3
                className="mt-4 font-serifDisplay text-[22px] font-normal leading-[1.18] tracking-[-0.015em] text-[#0B1F3A]"
                style={{ fontVariationSettings: subHeadlineAxes }}
              >
                {entry.navLabel ?? entry.name}
              </h3>
              <p className="mt-3 font-sans text-[14px] leading-[1.55] text-[#3A4A63]">
                {entry.subtitle}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 font-sans text-[11.5px] font-semibold uppercase tracking-[0.22em] text-[#0B1F3A] transition-colors group-hover:text-[#B88A2D]">
                Read more
                <span aria-hidden="true">&rarr;</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
