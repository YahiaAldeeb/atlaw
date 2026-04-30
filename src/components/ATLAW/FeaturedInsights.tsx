type Insight = {
  category: string;
  title: string;
};

type Props = {
  items: Insight[];
};

const imageByTitle: Record<string, string> = {
  "Seeking New Frontiers: ATLAW Team Explores Investment Prospects in Kuwait":
    "/assets/insight-kuwait.png",
  "Mohamed Ali Banoon Joins ATLAW's Estate Planning Team": "/assets/insight-mohamed.png",
  "Nadia Hamade Joins ATLAW's Corporate Team": "/assets/insight-nadia.png",
};

export const FeaturedInsights = ({ items }: Props): JSX.Element => {
  return (
    <section className="bg-ink text-ivory">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ivory/70">
          NEWS & INSIGHTS
        </p>
        <h2 className="mt-4 font-serifDisplay text-4xl md:text-6xl">Featured Insights</h2>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <article
              className="rounded-2xl border border-ivory/15 bg-white/5 p-4 transition duration-200 hover:-translate-y-1"
              key={item.title}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  alt={item.title}
                  className="h-full w-full object-cover object-center"
                  src={imageByTitle[item.title]}
                />
              </div>
              <span className="mt-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                {item.category}
              </span>
              <h3 className="mt-4 font-serifDisplay text-2xl leading-tight">{item.title}</h3>
              <a className="group mt-6 inline-flex items-center text-sm font-medium text-[#6FB2FF]" href="#">
                Read More
                <span className="ml-2 transition duration-200 group-hover:translate-x-1">&rarr;</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
