import { RevealText, RevealBlock, RevealStagger } from "../../motion/primitives";
import { STAGGER } from "../../motion/config";

const grain =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

const headlineAxes = "'opsz' 144, 'wght' 380, 'SOFT' 0, 'WONK' 0";

type Step = {
  number: string;
  title: string;
  description: string;
  gradient: string;
  icon: JSX.Element;
  image: string;
  imageAlt: string;
};

const iconCls = "h-11 w-11";
const iconProps = {
  className: iconCls,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

const PhoneIcon = (): JSX.Element => (
  <svg {...iconProps}>
    <path d="M3 5.5C3 4.1 4.1 3 5.5 3H7l1.6 4-2 1.3a12 12 0 0 0 5.1 5.1l1.3-2 4 1.6v1.5c0 1.4-1.1 2.5-2.5 2.5A13.5 13.5 0 0 1 3 5.5Z" />
  </svg>
);

const SearchIcon = (): JSX.Element => (
  <svg {...iconProps}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m20 20-3.8-3.8" />
  </svg>
);

const ScalesIcon = (): JSX.Element => (
  <svg {...iconProps}>
    <path d="M12 3v16M7 20h10M5 7h14M12 5 6 8m6-3 6 3" />
    <path d="M6 8 3.5 13.5a2.5 2.5 0 0 0 5 0L6 8Zm12 0-2.5 5.5a2.5 2.5 0 0 0 5 0L18 8Z" />
  </svg>
);

const HeartIcon = (): JSX.Element => (
  <svg {...iconProps}>
    <path d="M12 20s-7-4.4-7-9.3A3.7 3.7 0 0 1 12 8a3.7 3.7 0 0 1 7-.7C19 12.6 12 20 12 20Z" />
  </svg>
);

const steps: Step[] = [
  {
    number: "01",
    title: "Call ATLAW",
    description: "Contact us for a free case review.",
    gradient: "linear-gradient(170deg, #162d50 0%, #0e1b33 40%, #0a1428 100%)",
    icon: <PhoneIcon />,
    image: "/assets/steps/step-1.jpg",
    imageAlt: "Client reaching out to ATLAW for a free case review",
  },
  {
    number: "02",
    title: "We Investigate",
    description: "We gather evidence and handle the paperwork.",
    gradient: "linear-gradient(170deg, #1a2a3e 0%, #12243c 35%, #0e1b33 70%, #0a1428 100%)",
    icon: <SearchIcon />,
    image: "/assets/steps/step-2.jpg",
    imageAlt: "ATLAW attorney consulting with a client",
  },
  {
    number: "03",
    title: "We Fight",
    description: "We negotiate or litigate for maximum recovery.",
    gradient: "linear-gradient(170deg, #0e1b33 0%, #0a1428 100%)",
    icon: <ScalesIcon />,
    image: "/assets/steps/step-3.jpg",
    imageAlt: "Scales of justice and gavel representing ATLAW fighting your case",
  },
  {
    number: "04",
    title: "You Recover",
    description: "Focus on healing. We handle the rest.",
    gradient: "linear-gradient(170deg, #142640 0%, #0f1e35 50%, #0c1729 100%)",
    icon: <HeartIcon />,
    image: "/assets/steps/step-4.jpg",
    imageAlt: "Client celebrating a successful case resolution",
  },
];

const StepCard = ({ step }: { step: Step }): JSX.Element => (
  <article className="group relative flex min-h-[440px] flex-col justify-end overflow-hidden rounded-[18px] shadow-[0_12px_34px_rgba(5,15,28,0.28)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[6px] hover:shadow-[0_24px_54px_rgba(5,15,28,0.42)] lg:min-h-[500px]">
    {/* full-bleed photo */}
    <img
      alt={step.imageAlt}
      className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
      loading="lazy"
      src={step.image}
    />
    {/* dark readability overlay */}
    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#0a1428] via-[#0a1428]/55 to-[#0a1428]/25" />
    <div aria-hidden="true" className="absolute inset-0 bg-[#0a1428]/20" />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
      style={{ backgroundImage: grain }}
    />
    {/* gold accent bar reveals on hover */}
    <span
      aria-hidden="true"
      className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#C6A04A] via-[#E4C36A] to-[#C6A04A]/40 transition-transform duration-300 group-hover:scale-x-100"
    />

    <div className="relative z-10 flex flex-col p-7 pb-8 lg:p-8 lg:pb-9">
      <span className="text-white drop-shadow-[0_2px_8px_rgba(5,15,28,0.5)]">
        {step.icon}
      </span>

      <p className="mt-7 font-sans text-[27px] font-bold leading-none tracking-[-0.01em] text-white lg:text-[30px]">
        Step {Number(step.number)}
      </p>
      <p className="mt-2.5 font-sans text-[16px] font-semibold leading-[1.3] text-white lg:text-[17px]">
        {step.title}
      </p>
      <p className="mt-1.5 font-sans text-[14px] leading-[1.5] text-white/70">
        {step.description}
      </p>
    </div>
  </article>
);

export const ProcessSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="process-heading"
      className="relative isolate w-full overflow-hidden bg-[#FFFFFF]"
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
            <path d="M-50 180 Q 420 50 900 180 T 1520 140" />
            <path d="M-50 360 Q 480 230 980 360 T 1520 320" />
          </g>
        </svg>
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-20 pt-20 sm:px-10 md:pb-24 md:pt-28 lg:px-20 lg:pb-[120px] lg:pt-[140px]">
        <header className="mx-auto flex flex-col items-center text-center">
          <RevealBlock
            as="p"
            className="font-sans text-[12px] font-semibold uppercase leading-none tracking-[0.22em] text-[#B88A2D]"
          >
            How It Works
          </RevealBlock>

          <RevealText
            as="h2"
            className="mt-5 font-serifDisplay font-normal leading-[1.08] tracking-[-0.02em] text-[#0B1F3A] text-[clamp(36px,5.5vw,68px)]"
            id="process-heading"
            style={{ fontVariationSettings: headlineAxes }}
          >
            What to Do After an{" "}
            <span className="text-[#B88A2D]">Injury</span>
          </RevealText>

          <RevealBlock
            as="p"
            className="mt-6 max-w-[680px] font-sans text-[18px] leading-[1.6] text-[#3A4A63] lg:text-[19px]"
          >
            Four steps between your injury and your recovery. We handle steps two and three so you can focus on four.
          </RevealBlock>
        </header>

        <RevealStagger
          amount={STAGGER.grid}
          className="mt-14 grid grid-cols-1 items-stretch gap-5 md:mt-16 md:grid-cols-2 lg:mt-[64px] lg:gap-6 xl:grid-cols-4"
        >
          {steps.map((step) => (
            <StepCard key={step.number} step={step} />
          ))}
        </RevealStagger>
      </div>
    </section>
  );
};
