type Commitment = {
  title: string;
  body: string;
};

type Props = {
  items: Commitment[];
};

export const Commitments = ({ items }: Props): JSX.Element => {
  return (
    <section className="bg-surface">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">OUR COMMITMENTS</p>
        <h2 className="mt-4 font-serifDisplay text-4xl md:text-6xl">Principles That Guide Us.</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              className="rounded-2xl border border-ink/10 bg-ivory p-5 transition duration-200 hover:-translate-y-1"
              key={item.title}
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/80">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
