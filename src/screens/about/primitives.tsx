import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/* ────────────────────────────────────────────────────────────────────────────
   ATLAW — About Us shared primitives
   Editorial "law as quiet authority" system (matches Hero / Footer):
   white canvas + deep-navy bands alternating, Lustria display serif, Mulish
   for labels, antique-gold (#C9A24B) used ONLY as hairline / period / marker.
   ──────────────────────────────────────────────────────────────────────────── */

export const GOLD = "#C9A24B";
export const NAVY = "#0B1F3A";
export const INK = "#0E1B2C";

/* ── Shared bits ──────────────────────────────────────────────────────────── */

export const ArrowRight = ({ className = "" }: { className?: string }): JSX.Element => (
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

/* Fade-up 12px on scroll; honours prefers-reduced-motion. */
export const Reveal = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}): JSX.Element => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-[600ms] ease-out motion-reduce:transform-none motion-reduce:transition-none ${
        visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      } ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
};

export const Eyebrow = ({
  num,
  label,
  onDark = false,
}: {
  num: string;
  label: string;
  onDark?: boolean;
}): JSX.Element => (
  <p className="flex items-center gap-4">
    <span aria-hidden="true" className="h-px w-[52px] shrink-0" style={{ backgroundColor: GOLD }} />
    <span
      className={`font-sans text-[12px] font-semibold uppercase tracking-[0.22em] ${
        onDark ? "text-white/65" : "text-[#7A7466]"
      }`}
    >
      <span style={{ color: GOLD }}>{num}</span> &mdash; {label}
    </span>
  </p>
);

// Gold "brand period" — the signature mark that closes every headline.
export const Period = (): JSX.Element => (
  <span aria-hidden="true" style={{ color: GOLD }}>
    .
  </span>
);

export type CtaVariant = "primaryLight" | "secondaryLight" | "primaryDark" | "secondaryDark";

export const ctaBase =
  "group inline-flex h-[54px] items-center justify-center gap-2.5 rounded-full px-8 font-sans text-[15px] font-medium transition-all duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 lg:h-[58px] lg:px-9";

export const ctaVariants: Record<CtaVariant, string> = {
  primaryLight:
    "bg-[#0E1B2C] text-white hover:bg-[#16263B] hover:shadow-[0_8px_24px_rgba(14,27,44,0.18)] focus-visible:ring-[#C9A24B] focus-visible:ring-offset-white",
  secondaryLight:
    "border border-[rgba(14,27,44,0.35)] text-[#0E1B2C] hover:border-[#0E1B2C] hover:bg-[#0E1B2C] hover:text-white focus-visible:ring-[#C9A24B] focus-visible:ring-offset-white",
  primaryDark:
    "bg-white text-[#0B1F3A] hover:shadow-[0_10px_28px_rgba(0,0,0,0.30)] focus-visible:ring-[#C9A24B] focus-visible:ring-offset-[#0B1F3A]",
  secondaryDark:
    "border border-white/35 text-white hover:border-white hover:bg-white hover:text-[#0B1F3A] focus-visible:ring-[#C9A24B] focus-visible:ring-offset-[#0B1F3A]",
};

export const Cta = ({
  children,
  to,
  external = false,
  variant,
}: {
  children: React.ReactNode;
  to: string;
  external?: boolean;
  variant: CtaVariant;
}): JSX.Element => {
  const className = `${ctaBase} ${ctaVariants[variant]}`;
  const inner = (
    <>
      {children}
      <ArrowRight className="group-hover:translate-x-1" />
    </>
  );
  if (external) {
    return (
      <a className={className} href={to} rel="noopener noreferrer" target="_blank">
        {inner}
      </a>
    );
  }
  return (
    <Link className={className} to={to}>
      {inner}
    </Link>
  );
};

/* Subtle film grain — keeps navy bands from reading flat (shared with Hero/Footer). */
export const grain =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export const SECTION = "mx-auto w-full max-w-[1240px] px-6 sm:px-10 lg:px-16";
export const PAD = "py-[96px] md:py-[132px] lg:py-[160px]";
