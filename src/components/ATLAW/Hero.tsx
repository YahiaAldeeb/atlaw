export const Hero = (): JSX.Element => {
  return (
    <section className="mx-auto grid w-full max-w-7xl gap-12 px-5 pb-16 pt-1 md:grid-cols-[1fr_1.15fr] md:items-end md:px-8 md:pb-20 md:pt-2">
      <div className="md:-mt-6">
        <h1 className="mt-6 font-serifDisplay text-[clamp(2.6rem,6vw,5.8rem)] leading-[0.95] tracking-[-0.02em]">
          Law,
          <br />
          Powered by
          <br />
          <span className="italic text-accent">Insight.</span>
        </h1>
        <p className="mt-7 max-w-xl text-base leading-relaxed text-ink/80 md:text-lg">
          ATLAW is a global law firm that uses advanced technology and data to provide expert legal
          services and solutions. We help clients create value and achieve their business goals.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            className="group inline-flex items-center rounded-full bg-ink px-5 py-3 text-sm font-medium text-ivory transition duration-200 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            href="#"
          >
            Explore Capabilities
            <span className="ml-2 transition duration-200 group-hover:translate-x-1">&rarr;</span>
          </a>
          <a
            className="group inline-flex items-center rounded-full border border-ink/20 px-5 py-3 text-sm font-medium transition duration-200 hover:border-ink/40 hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            href="#"
          >
            Talk to Us
            <span className="ml-2 transition duration-200 group-hover:translate-x-1">&rarr;</span>
          </a>
        </div>

      </div>

      <div className="mx-auto w-full max-w-lg md:max-w-xl">
        <img
          alt="ATLAW portrait visual"
          className="mx-auto h-auto max-h-[38rem] w-[115%] max-w-none object-contain"
          src="/assets/atlaw-portrait.png"
        />
        <div className="h-px w-full bg-ink" />
      </div>
    </section>
  );
};
