const steps = [
  {
    title: "Global Affiliations",
    body: "ATLAW brings together teams of experts from different locations to work on complex projects, providing a more comprehensive range of services to clients.",
  },
  {
    title: "Specialized Resources Network",
    body: "ATLAW provides highly targeted, effective solutions through a network of experts across subject matters.",
  },
  {
    title: "Innovative Solutions",
    body: "ATLAW thinks outside the box to solve complex challenges and help clients succeed.",
  },
];

export const HowWeWork = (): JSX.Element => {
  return (
    <section className="border-y border-ink/10 bg-ivory/50">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">HOW WE WORK</p>
        <h2 className="mt-4 font-serifDisplay text-4xl md:text-6xl">An Integrated Approach.</h2>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <article
              className="rounded-2xl border border-ink/10 bg-white/80 p-6 transition duration-200 hover:-translate-y-1"
              key={step.title}
            >
              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                0{index + 1}
              </div>
              <h3 className="font-serifDisplay text-2xl leading-tight">{step.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-ink/80">{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
