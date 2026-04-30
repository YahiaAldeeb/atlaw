type Props = {
  locations: string[];
};

export const GlobalReach = ({ locations }: Props): JSX.Element => {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">GLOBAL REACH</p>
        <h2 className="mt-4 font-serifDisplay text-4xl md:text-6xl">Global Reach, Lasting Footprint.</h2>
        <p className="mt-5 text-ink/80">
          ATLAW has established strong global affiliations and partnerships with law firms and legal
          professionals around the world, allowing clients to receive representation no matter where
          their legal needs may take them.
        </p>
      </div>

      <div className="mt-10 rounded-3xl border border-ink/10 bg-surface/25 p-6">
        <div className="relative aspect-[16/8] overflow-hidden rounded-2xl border border-ink/10 bg-ivory">
          <img
            alt="Global network map showing ATLAW reach"
            className="h-full w-full object-cover object-center"
            src="/assets/global-reach-map.png"
          />
        </div>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {locations.map((location) => (
          <span
            className="rounded-full border border-ink/10 bg-white px-3 py-1.5 text-xs font-medium text-ink/80"
            key={location}
          >
            {location}
          </span>
        ))}
      </div>
    </section>
  );
};
