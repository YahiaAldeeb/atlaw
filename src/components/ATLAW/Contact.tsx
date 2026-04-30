const reasons = [
  "A Career With ATLAW",
  "Client Services",
  "Business Services",
  "Sponsorship",
  "Privacy Issue",
  "Other",
];

export const Contact = (): JSX.Element => {
  return (
    <section className="bg-surface">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
        <form className="rounded-3xl border border-ink/10 bg-ivory p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">CONTACT</p>
          <div className="mt-6 space-y-4">
            <label className="block">
              <span className="sr-only">Name</span>
              <input
                className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                placeholder="Name"
                type="text"
              />
            </label>
            <label className="block">
              <span className="sr-only">Email</span>
              <input
                className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                placeholder="Email"
                type="email"
              />
            </label>
            <label className="block">
              <span className="sr-only">Select reason</span>
              <select className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20">
                <option>Select reason</option>
                {reasons.map((reason) => (
                  <option key={reason}>{reason}</option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="sr-only">Message</span>
              <textarea
                className="min-h-32 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                placeholder="Message"
              />
            </label>
          </div>
          <button
            className="group mt-6 inline-flex items-center rounded-full bg-ink px-5 py-3 text-sm font-medium text-ivory transition duration-200 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            type="button"
          >
            Send Message
            <span className="ml-2 transition duration-200 group-hover:translate-x-1">&rarr;</span>
          </button>
        </form>

        <div className="self-center">
          <h2 className="font-serifDisplay text-4xl leading-tight md:text-6xl">
            Let&apos;s Talk About What&apos;s Next.
          </h2>
          <p className="mt-5 max-w-xl text-ink/80">
            Tell us about your goals and challenges. ATLAW is here to help you find the right legal
            guidance and solutions.
          </p>
          <div className="mt-8 space-y-4 border-t border-ink/10 pt-6 text-sm">
            <p>
              <span className="block text-xs uppercase tracking-[0.18em] text-ink/60">Phone</span>
              +1 (313) 406-7606
            </p>
            <p>
              <span className="block text-xs uppercase tracking-[0.18em] text-ink/60">Email</span>
              info@atlawgroup.com
            </p>
            <p>
              <span className="block text-xs uppercase tracking-[0.18em] text-ink/60">
                Office Hours
              </span>
              Monday - Friday, 8:30 am to 5:00 pm
            </p>
            <p>
              <span className="block text-xs uppercase tracking-[0.18em] text-ink/60">
                Headquarters
              </span>
              3 Park Ln Blvd Suite 1500, Dearborn, MI 48126
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
