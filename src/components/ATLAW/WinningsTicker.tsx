type CaseAmount = {
  amount: string;
  caseType: string;
};

const cases: CaseAmount[] = [
  { amount: "$127,500", caseType: "Auto Accident" },
  { amount: "$385,000", caseType: "Medical Malpractice" },
  { amount: "$1,250,000", caseType: "Wrongful Death" },
  { amount: "$92,000", caseType: "Workers' Comp" },
  { amount: "$215,000", caseType: "Premises Liability" },
  { amount: "$78,500", caseType: "Dog Bite" },
];

const TickerItem = ({ item }: { item: CaseAmount }) => (
  <span className="flex shrink-0 items-center gap-4 px-6 sm:gap-5 sm:px-8">
    <span className="font-serifDisplay text-[20px] font-normal tracking-[-0.01em] text-[#C6A04A] sm:text-[24px]">
      {item.amount}
    </span>
    <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40 sm:text-[11px]">
      {item.caseType}
    </span>
    <span
      aria-hidden="true"
      className="h-1 w-1 shrink-0 rounded-full bg-[#C6A04A]/40"
    />
  </span>
);

export const WinningsTicker = (): JSX.Element => {
  return (
    <section
      aria-label="Case results"
      className="w-full overflow-hidden bg-[#081120] py-5 sm:py-6"
    >
      <p className="sr-only">[CONFIRM] Placeholder amounts — pending client approval. Case results depend on a variety of factors unique to each case and do not guarantee or predict a similar result in any future case.</p>

      <div className="relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_5%,black_95%,transparent)]">
        <div className="animate-marquee-slow flex shrink-0 items-center">
          {cases.map((item, i) => (
            <TickerItem item={item} key={`a-${i}`} />
          ))}
        </div>
        <div
          aria-hidden="true"
          className="animate-marquee-slow flex shrink-0 items-center"
        >
          {cases.map((item, i) => (
            <TickerItem item={item} key={`b-${i}`} />
          ))}
        </div>
      </div>
    </section>
  );
};
