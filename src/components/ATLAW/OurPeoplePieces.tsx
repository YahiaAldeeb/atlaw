import { useEffect, useRef, useState } from "react";
import type { Member } from "../../data/team";

// Section-local palette (team-page hero only — self-contained, not global tokens):
//   navy #0A1B33 · paper #FAF8F4 · gold #C9A24B · steel #7E9CC4
export const HeroArrow = ({ className = "" }: { className?: string }) => (
  <svg
    aria-hidden="true"
    className={`h-[14px] w-[14px] transition-transform duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${className}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
  </svg>
);

// Engraved stat number that counts up from 0 once it scrolls into view.
// Respects prefers-reduced-motion (jumps straight to the final value).
export const CountUpStat = ({
  target,
  suffix = "",
  label,
}: {
  target: number;
  suffix?: string;
  label: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setValue(target);
      return;
    }

    let raf = 0;
    let start = 0;
    const duration = 900;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const step = (ts: number) => {
          if (!start) start = ts;
          const progress = Math.min((ts - start) / duration, 1);
          // ease-out
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(Math.round(eased * target));
          if (progress < 1) raf = window.requestAnimationFrame(step);
        };
        raf = window.requestAnimationFrame(step);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(raf);
    };
  }, [target]);

  return (
    <div ref={ref}>
      <p className="font-serifDisplay text-[34px] leading-none text-[#7E9CC4] tabular-nums">
        {value}
        {suffix}
      </p>
      <p className="mt-2 font-sans text-[12px] uppercase tracking-[0.16em] text-white/55">
        {label}
      </p>
    </div>
  );
};

const LocationPinIcon = () => (
  <svg className="h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} />
    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} />
  </svg>
);

export const MemberCard = ({ member }: { member: Member }) => (
  <article className="group flex flex-col rounded-2xl border border-ink/10 bg-ivory overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/8">
    {/* photo with dark blue overlay */}
    <div className="relative h-64 overflow-hidden bg-gray-300">
      <img
        alt={member.name}
        className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        src={member.img}
      />
      {/* grey shade */}
      <div className="absolute inset-0 bg-gray-500/30 mix-blend-multiply" />
      {/* accent underline on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </div>

    {/* info */}
    <div className="flex flex-col flex-1 p-5">
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-accent">
        {member.specialty}
      </p>
      <h3 className="mt-1.5 font-serifDisplay text-xl leading-tight text-ink">
        {member.name}
      </h3>
      <p className="mt-1 text-sm text-ink/60">{member.title}</p>
      <div className="mt-auto pt-4 flex items-center gap-1.5 text-xs text-ink/50">
        <LocationPinIcon />
        <span>{member.location}</span>
      </div>
    </div>
  </article>
);
