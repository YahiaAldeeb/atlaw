import { Link } from "react-router-dom";
import { RevealText, RevealBlock, RevealStagger } from "../../motion/primitives";
import { STAGGER } from "../../motion/config";

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

type CaseType = {
  title: string;
  description: string;
  href: string;
  icon: JSX.Element;
};

const iconClass = "h-10 w-10 stroke-[#B88A2D] fill-none";

const caseTypes: CaseType[] = [
  {
    title: "Auto Accidents",
    description:
      "Car crashes, truck collisions, rideshare accidents, and hit-and-runs. We fight the insurance companies so you can focus on recovering.",
    href: "/personal-injury/auto-accidents",
    icon: (
      <svg className={iconClass} viewBox="0 0 40 40" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="16" width="28" height="12" rx="3" />
        <path d="M10 16l3-7h14l3 7" />
        <circle cx="12" cy="28" r="3" />
        <circle cx="28" cy="28" r="3" />
        <line x1="14" y1="22" x2="26" y2="22" />
      </svg>
    ),
  },
  {
    title: "Medical Malpractice",
    description:
      "Surgical errors, misdiagnosis, birth injuries, and medication mistakes. Holding healthcare providers accountable when they fall short.",
    href: "/personal-injury/medical-malpractice",
    icon: (
      <svg className={iconClass} viewBox="0 0 40 40" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="20" cy="14" r="8" />
        <path d="M20 10v8M16 14h8" />
        <path d="M14 22l-2 12h16l-2-12" />
      </svg>
    ),
  },
  {
    title: "Wrongful Death",
    description:
      "When negligence takes a life, families deserve justice and financial security. We pursue full compensation for your loss.",
    href: "/personal-injury/wrongful-death",
    icon: (
      <svg className={iconClass} viewBox="0 0 40 40" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6v20" />
        <path d="M14 12h12" />
        <path d="M12 26h16" />
        <path d="M16 26v8" />
        <path d="M24 26v8" />
        <path d="M10 34h20" />
      </svg>
    ),
  },
  {
    title: "Premises Liability",
    description:
      "Slip-and-fall injuries, unsafe conditions, inadequate security, and building code violations. Property owners owe you a duty of care.",
    href: "/personal-injury/premises-liability",
    icon: (
      <svg className={iconClass} viewBox="0 0 40 40" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 36h28" />
        <path d="M10 36V18l10-12 10 12v18" />
        <rect x="17" y="24" width="6" height="12" />
        <rect x="13" y="18" width="4" height="4" />
        <rect x="23" y="18" width="4" height="4" />
      </svg>
    ),
  },
  {
    title: "Dog Bite Injuries",
    description:
      "Michigan's strict liability law holds dog owners responsible. We help you recover medical costs, lost wages, and damages for scarring.",
    href: "/personal-injury/dog-bites",
    icon: (
      <svg className={iconClass} viewBox="0 0 40 40" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 12c0-3 2-6 5-6s4 3 4 6" />
        <path d="M32 12c0-3-2-6-5-6s-4 3-4 6" />
        <ellipse cx="20" cy="22" rx="12" ry="10" />
        <circle cx="16" cy="20" r="1.5" fill="#B88A2D" stroke="none" />
        <circle cx="24" cy="20" r="1.5" fill="#B88A2D" stroke="none" />
        <ellipse cx="20" cy="25" rx="3" ry="2" />
        <path d="M14 32l-2 4M26 32l2 4" />
      </svg>
    ),
  },
  {
    title: "Workers' Compensation",
    description:
      "Workplace injuries, repetitive stress, toxic exposure, and on-the-job accidents. Get the benefits and compensation you're owed.",
    href: "/personal-injury/workers-compensation",
    icon: (
      <svg className={iconClass} viewBox="0 0 40 40" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 6h8v6h-8z" />
        <circle cx="20" cy="6" r="0" />
        <path d="M14 12h12l2 22H12z" />
        <path d="M20 18v8M16 22h8" />
        <path d="M10 16l-4 2M30 16l4 2" />
      </svg>
    ),
  },
];

const CaseCard = ({ item }: { item: CaseType }): JSX.Element => (
  <Link
    to={item.href}
    className="group flex h-full flex-col rounded-[24px] border border-[rgba(11,31,58,0.08)] bg-white p-6 shadow-[0_4px_20px_rgba(11,31,58,0.06)] transition-all duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[3px] hover:shadow-[0_12px_36px_rgba(11,31,58,0.12)] sm:p-7 lg:p-8"
  >
    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F7F7F5]">
      {item.icon}
    </div>

    <h3 className="mt-5 font-serifDisplay text-[20px] font-normal leading-[1.18] tracking-[-0.015em] text-[#0B1F3A] lg:text-[22px]">
      {item.title}
    </h3>

    <p className="mt-3 font-sans text-[14px] leading-[1.6] text-[#3A4A63]">
      {item.description}
    </p>

    <div className="mt-auto pt-6">
      <span className="inline-flex items-center gap-2 font-sans text-[13px] font-medium uppercase tracking-[0.06em] text-[#B88A2D] transition-colors duration-150 group-hover:text-[#0B1F3A]">
        Learn more
        <ArrowRight className="group-hover:translate-x-1" />
      </span>
    </div>
  </Link>
);

export const CapabilitiesSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="capabilities-heading"
      className="relative isolate w-full overflow-hidden bg-[#F7F7F5] scroll-mt-[72px] lg:scroll-mt-[88px]"
      id="capabilities"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-multiply"
        style={{ backgroundImage: grain }}
      />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none overflow-hidden">
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.05]"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1440 900"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="#0B1F3A" strokeWidth="1">
            <path d="M-50 230 Q 380 90 840 250 T 1500 210" />
            <path d="M-50 410 Q 440 270 920 410 T 1500 380" />
          </g>
        </svg>

        <span className="absolute left-1/2 top-[40%] hidden -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-serifDisplay text-[34vw] font-normal uppercase leading-none tracking-[-0.05em] text-[#0B1F3A] opacity-[0.015] md:block">
          ATLAW
        </span>
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-20 pt-20 sm:px-10 md:pb-24 md:pt-28 lg:px-20 lg:pb-[120px] lg:pt-[140px]">
        <header className="mx-auto flex flex-col items-center text-center">
          <RevealBlock as="p" className="font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#B88A2D]">
            Practice Areas
          </RevealBlock>

          <RevealText
            as="h2"
            className="mt-5 font-serifDisplay font-normal leading-[1.06] tracking-[-0.02em] text-[#0B1F3A] text-[clamp(32px,5vw,58px)]"
            id="capabilities-heading"
            style={{ fontVariationSettings: headlineAxes }}
          >
            Types of Injury Cases We Handle<span className="text-[#B88A2D]">.</span>
          </RevealText>

          <RevealBlock as="p" className="mt-7 max-w-[680px] font-sans text-[18px] leading-[1.6] text-[#3A4A63] lg:text-[19px]">
            From car accidents to workplace injuries, we fight for maximum recovery so you can focus on healing.
          </RevealBlock>
        </header>

        <RevealStagger
          amount={STAGGER.grid}
          className="mt-14 grid grid-cols-1 items-stretch gap-5 md:mt-16 md:grid-cols-2 lg:mt-[64px] lg:gap-6 xl:grid-cols-3"
        >
          {caseTypes.map((item) => (
            <CaseCard item={item} key={item.title} />
          ))}
        </RevealStagger>

        <RevealBlock className="mt-14 flex justify-center lg:mt-16">
          <Link
            className="group inline-flex h-[56px] items-center justify-center gap-2.5 rounded-full border border-[rgba(11,31,58,0.35)] bg-transparent px-8 font-sans text-[15px] font-medium text-[#0B1F3A] transition-all duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88A2D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F7F5] lg:h-[60px] lg:px-9"
            to="/personal-injury"
          >
            SEE ALL PRACTICE AREAS
            <ArrowRight className="group-hover:translate-x-1" />
          </Link>
        </RevealBlock>
      </div>
    </section>
  );
};
