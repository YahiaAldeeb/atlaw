export const ChevronDown = ({ open }: { open: boolean }): JSX.Element => (
  <svg
    aria-hidden="true"
    className={`ml-2 h-[10px] w-[10px] shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
  </svg>
);

export const ArrowRight = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="ml-2 h-3 w-3 shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} />
  </svg>
);
