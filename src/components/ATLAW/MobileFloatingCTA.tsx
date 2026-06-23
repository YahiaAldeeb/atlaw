const PhoneIcon = () => (
  <svg
    aria-hidden="true"
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const MobileFloatingCTA = (): JSX.Element => {
  return (
    <a
      aria-label="Call ATLAW — (313) 406-7606"
      className="fixed bottom-6 right-6 z-40 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#C6A04A] text-[#0E1B2C] shadow-[0_4px_20px_rgba(198,160,74,0.5)] animate-pulse-glow lg:hidden"
      href="tel:+13134067606"
    >
      <PhoneIcon />
    </a>
  );
};
