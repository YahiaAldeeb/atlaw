/* ── Icons — drawn in amber to stay within the micro-accent discipline ── */

export const PhoneIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="h-[17px] w-[17px] shrink-0 text-[#B88A2D]"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      d="M3 5.5A2.5 2.5 0 015.5 3h1.4a1 1 0 01.97.757l.94 3.76a1 1 0 01-.27.96l-1.5 1.5a13 13 0 006 6l1.5-1.5a1 1 0 01.96-.27l3.76.94a1 1 0 01.76.97V18.5A2.5 2.5 0 0118.5 21h-.5C9.716 21 3 14.284 3 6v-.5z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.4}
    />
  </svg>
);

export const MailIcon = ({ className = "h-[17px] w-[17px]" }: { className?: string }): JSX.Element => (
  <svg
    aria-hidden="true"
    className={`${className} shrink-0`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      d="M3 8l9 6 9-6M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.4}
    />
  </svg>
);

export const PinIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="h-[17px] w-[17px] shrink-0 text-[#B88A2D]"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.4}
    />
    <circle cx="12" cy="9" r="2.5" strokeWidth={1.4} />
  </svg>
);

export const ArrowRight = ({ className = "" }: { className?: string }): JSX.Element => (
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
