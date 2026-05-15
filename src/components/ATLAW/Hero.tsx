import { Link } from "react-router-dom";

const practiceCards = [
  {
    number: "01",
    label: "ADVISORY",
    title: "Strategic counsel\nfor the long arc\nof a business.",
    href: "/advisory",
  },
  {
    number: "02",
    label: "LITIGATION",
    title: "High-stakes\ndisputes and\ndefense.",
    href: "/litigation",
  },
  {
    number: "03",
    label: "TRANSACTIONS",
    title: "Capital, contracts,\nand cross-border\ndeals.",
    href: "/transactions",
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

export const Hero = (): JSX.Element => {
  return (
    <section className="bg-ivory">
      <div className="mx-auto w-full max-w-[1440px] px-6 pb-14 pt-10 sm:px-8 md:pb-20 md:pt-14 lg:px-12">
        {/* Two-column hero */}
        <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-end md:gap-14">
          {/* Left column */}
          <div className="md:pb-4">
            {/* Eyebrow */}
            <p className="font-sans text-[12px] font-semibold uppercase leading-[1.8] tracking-[0.22em] text-ink/60 md:text-[13px]">
              ATLAW<sup className="text-[0.6em] tracking-normal">™</sup> &mdash; A Global Law Firm
              <br />
              Limitless. Persistent. Inspiring.
            </p>
            <h1 className="mt-6 font-serifDisplay text-[clamp(2.6rem,7.6vw,6.5rem)] font-normal leading-[0.98] tracking-[-0.03em] text-ink md:mt-7">
              If it&rsquo;s law,
              <br />
              it&rsquo;s ATLAW.
            </h1>

            <p className="mt-7 max-w-[36rem] font-sans text-[17px] leading-[1.55] text-ink/75 md:text-[20px] md:leading-[1.5]">
              Sixteen cities. Three pillars. One firm built for clients who operate across borders,
              industries, and time zones &mdash; and who need counsel that moves at the same speed.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 md:gap-5">
              <a
                className="group inline-flex h-[52px] items-center gap-3 rounded-full bg-ink px-7 text-[15px] font-semibold text-ivory transition-colors duration-200 hover:bg-[#17304F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ivory md:text-[16px]"
                href="https://j098jiq3pk7.typeform.com/to/Mslg7Y7f"
                rel="noopener noreferrer"
                target="_blank"
              >
                I need help
                <ArrowRight className="group-hover:translate-x-1" />
              </a>
              <a
                className="group inline-flex h-[52px] items-center gap-3 rounded-full border border-ink/30 bg-transparent px-7 text-[15px] font-semibold text-ink transition-colors duration-200 hover:border-ink/60 hover:bg-ink/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ivory md:text-[16px]"
                href="#firm-thesis"
              >
                Explore the firm
                <ArrowRight className="group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right column — portrait */}
          <div className="relative flex items-end justify-center md:justify-end">
            <img
              alt="ATLAW founding attorney portrait"
              className="h-auto w-full max-w-[440px] object-contain md:max-w-[500px] lg:max-w-[540px]"
              src="/assets/atlaw-portrait.png"
            />
          </div>
        </div>

        {/* Divider above cards */}
        <div className="mt-9 h-px w-full bg-[rgba(11,26,45,0.22)] md:mt-12" />

        {/* Practice cards */}
        <div className="mt-7 grid grid-cols-1 gap-5 md:mt-8 md:grid-cols-3 md:gap-7">
          {practiceCards.map(({ number, label, title, href }) => (
            <Link
              className="group flex min-h-[230px] flex-col justify-between rounded-2xl border border-[rgba(11,26,45,0.12)] bg-[#FAF9F5] p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(11,26,45,0.28)] hover:shadow-[0_14px_30px_-18px_rgba(11,26,45,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:p-9"
              key={label}
              to={href}
            >
              <div>
                <p className="font-sans text-[12px] font-bold uppercase tracking-[0.12em] text-accent md:text-[13px]">
                  {number} &mdash; {label}
                </p>
                <h3 className="mt-5 whitespace-pre-line font-serifDisplay text-[28px] font-normal leading-[1.1] tracking-[-0.015em] text-ink md:mt-6 md:text-[32px] lg:text-[34px]">
                  {title}
                </h3>
              </div>
              <span className="mt-7 inline-flex items-center gap-2 font-sans text-[15px] font-semibold text-accent md:mt-9">
                Explore
                <ArrowRight className="group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
