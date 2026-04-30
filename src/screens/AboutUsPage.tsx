import { Header } from "../components/ATLAW/Header";
import { Footer } from "../components/ATLAW/Footer";

type Commitment = {
  title: string;
  body: string;
  icon: JSX.Element;
};

type Step = {
  num: string;
  title: string;
  subtitle: string;
  body: string;
};

const ShieldIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
  </svg>
);

const GlobeIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
  </svg>
);

const UsersIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
  </svg>
);

const LightbulbIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
  </svg>
);

const BookIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
  </svg>
);

const HandshakeIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
  </svg>
);

const commitments: Commitment[] = [
  {
    title: "Ethical Conduct",
    body: "We believe in acting with integrity and transparency, and in being accountable for our actions.",
    icon: <ShieldIcon />,
  },
  {
    title: "Social Responsibility",
    body: "We are committed to addressing the social and environmental impacts of our business and contributing to our community.",
    icon: <GlobeIcon />,
  },
  {
    title: "Customer Focus",
    body: "Our customers are at the center of what we do. We strive to deliver an exceptional customer experience.",
    icon: <UsersIcon />,
  },
  {
    title: "Innovation",
    body: "We believe that a commitment to innovation is key to providing the best possible solutions for our clients.",
    icon: <LightbulbIcon />,
  },
  {
    title: "Continuous Learning",
    body: "Continuous learning helps us stay up-to-date and adapt to an ever-changing market.",
    icon: <BookIcon />,
  },
  {
    title: "Collaboration",
    body: "Our team is dedicated to working together and sharing knowledge, fostering collaboration that helps us achieve our goals.",
    icon: <HandshakeIcon />,
  },
];

const steps: Step[] = [
  {
    num: "01",
    title: "Global Affiliations",
    subtitle: "Understanding your goals, culture, and challenges.",
    body: "Our global affiliations allow us to bring together teams of experts from different locations to work on complex projects, providing a comprehensive range of services to our clients. Our international network helps us maintain a strong presence and credibility in markets around the world, making us a trusted partner for companies looking to expand globally.",
  },
  {
    num: "02",
    title: "Specialized Resources Network",
    subtitle: "Navigating the complexities of business.",
    body: "With a team of experts across subject matters, ATLAW has a deep understanding of the unique challenges and opportunities facing businesses. Our specialized resources network allows us to provide highly targeted, effective solutions for clients.",
  },
  {
    num: "03",
    title: "Innovative Solutions",
    subtitle: "Transforming the status quo.",
    body: "ATLAW thinks outside the box and develops creative solutions to complex challenges. The team is constantly looking for new ways to help clients succeed.",
  },
];

export const AboutUsPage = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-ivory text-ink [zoom:1.12]">
      <Header />
      <main>

        {/* ── 1. HERO ────────────────────────────────────────────────── */}
        <section className="relative min-h-[78vh] overflow-hidden" aria-label="About ATLAW hero">
          {/* background image */}
          <div
            aria-hidden="true"
            className="absolute inset-0 scale-105 bg-cover bg-center bg-no-repeat blur-sm"
            style={{ backgroundImage: "url('/about%20us.png')" }}
          />
          {/* dark overlay for text legibility */}
          <div aria-hidden="true" className="absolute inset-0 bg-ink/70" />

          <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-20 md:flex-row md:items-center md:px-6 md:py-28 lg:py-32">
            {/* left — headline block */}
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                ABOUT ATLAW
              </p>
              <h1 className="mt-5 font-serifDisplay text-[clamp(2.4rem,5vw,4.8rem)] leading-[0.95] tracking-[-0.02em] text-ivory">
                Providing Innovative
                <br />
                <span className="italic text-accent">Global Legal</span>
                <br />
                Solutions.
              </h1>
              <p className="mt-6 max-w-md text-base leading-relaxed text-ivory/75">
                ATLAW's focus on expanding globally and collaborating with law firms across different
                continents sets it apart from traditional law firms and allows it to offer a unique
                perspective on legal issues.
              </p>
            </div>

            {/* right — floating consultation card */}
            <div className="w-full shrink-0 md:w-80 lg:w-96">
              <article className="rounded-2xl border border-ivory/15 bg-white/8 p-7 backdrop-blur-md">
                <div className="mb-1 h-0.5 w-8 bg-accent" />
                <h2 className="mt-4 font-serifDisplay text-2xl leading-snug text-ivory">
                  Global Legal Counsel
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ivory/80">
                  Advanced technology, data-driven insight, and global collaboration help ATLAW
                  deliver efficient, effective legal solutions.
                </p>
                <a
                  className="group mt-6 inline-flex items-center rounded-full bg-accent px-5 py-3 text-sm font-medium text-ivory transition duration-200 hover:bg-accent/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory"
                  href="/"
                >
                  Explore Capabilities
                  <span className="ml-2 transition duration-200 group-hover:translate-x-1">&rarr;</span>
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* ── 2. WHY WE EXIST ────────────────────────────────────────── */}
        <section className="bg-ivory" aria-labelledby="why-heading">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-24">
            <div className="grid gap-12 md:grid-cols-2 md:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">
                  WHY WE EXIST
                </p>
                <h2
                  id="why-heading"
                  className="mt-4 font-serifDisplay text-4xl leading-tight md:text-5xl"
                >
                  Built for Global Complexity.
                </h2>
              </div>

              <div className="border-l-2 border-accent/30 pl-7">
                <p className="text-base leading-relaxed text-ink/75">
                  ATLAW's focus on expanding globally and collaborating with other law firms on
                  different continents sets it apart from traditional law firms and allows it to offer
                  a unique perspective on legal issues. By incorporating legal technology solutions,
                  ATLAW improves the efficiency and effectiveness of its services, making it a leader
                  in the legal field.
                </p>
                <div className="mt-8 flex items-start gap-4">
                  <div
                    aria-hidden="true"
                    className="h-10 w-10 shrink-0 rounded-full bg-surface"
                  />
                  <div>
                    <p className="font-semibold text-ink">Dewnya Bazzi</p>
                    <p className="text-sm text-ink/60">Chief Executive Officer &amp; Founding Partner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. CULTURE ─────────────────────────────────────────────── */}
        <section className="bg-ink text-ivory" aria-labelledby="culture-heading">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-24">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ivory/50">
                  OUR CULTURE
                </p>
                <h2
                  id="culture-heading"
                  className="mt-4 font-serifDisplay text-4xl leading-tight md:text-5xl"
                >
                  Collaboration, Innovation, and Excellence.
                </h2>
              </div>

              <div>
                <p className="text-base leading-relaxed text-ivory/75">
                  At ATLAW, we have a strong culture centered around collaboration, innovation, and
                  excellence. By working together as a team, we achieve great things for our clients
                  and for the company. We encourage team members to be creative and think outside the
                  box to find innovative solutions to the legal challenges our clients face.
                </p>
                <div className="mt-8 grid grid-cols-3 gap-4 border-t border-ivory/15 pt-8">
                  {["Global Reach", "Tech-Driven", "Client First"].map((trait) => (
                    <div key={trait}>
                      <div className="mb-2 h-0.5 w-5 bg-accent" />
                      <p className="text-sm font-medium text-ivory">{trait}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. COMMITMENTS ─────────────────────────────────────────── */}
        <section className="bg-surface" aria-labelledby="commitments-heading">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-24">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">
              OUR COMMITMENTS
            </p>
            <h2 id="commitments-heading" className="mt-4 font-serifDisplay text-4xl md:text-5xl">
              Principles That Guide Us.
            </h2>

            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {commitments.map((item) => (
                <article
                  className="rounded-2xl border border-ink/10 bg-ivory p-5 transition duration-200 hover:-translate-y-1"
                  key={item.title}
                >
                  <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-accent">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/80">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. HOW WE WORK ─────────────────────────────────────────── */}
        <section className="bg-ink text-ivory" aria-labelledby="how-heading">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-24">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ivory/50">
              HOW WE WORK
            </p>
            <h2 id="how-heading" className="mt-4 font-serifDisplay text-4xl md:text-5xl">
              An Integrated Approach to Complex Legal Challenges.
            </h2>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {steps.map((step) => (
                <article
                  className="rounded-2xl border border-ivory/10 bg-ivory/5 p-6 transition duration-200 hover:-translate-y-1"
                  key={step.num}
                >
                  <div className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    {step.num}
                  </div>
                  <h3 className="font-serifDisplay text-2xl leading-tight text-ivory">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-accent/80">{step.subtitle}</p>
                  <p className="mt-4 text-sm leading-relaxed text-ivory/70">{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. CLOSING CTA ─────────────────────────────────────────── */}
        <section className="bg-ivory" aria-labelledby="cta-heading">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-24">
            <div className="rounded-3xl bg-ink px-8 py-16 text-center md:px-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ivory/50">
                OUR PROMISE
              </p>
              <h2
                id="cta-heading"
                className="mx-auto mt-4 max-w-2xl font-serifDisplay text-4xl leading-tight text-ivory md:text-5xl"
              >
                If It's Law, It's ATLAW.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ivory/70">
                At ATLAW, we value collaboration, innovation, and excellence. Together, we achieve
                great things for our clients and company. We encourage creativity and
                outside-the-box thinking to find innovative legal solutions.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  className="group inline-flex items-center rounded-full bg-ivory px-5 py-3 text-sm font-medium text-ink transition duration-200 hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory"
                  href="/"
                >
                  Explore Capabilities
                  <span className="ml-2 transition duration-200 group-hover:translate-x-1">&rarr;</span>
                </a>
                <a
                  className="group inline-flex items-center rounded-full border border-ivory/30 px-5 py-3 text-sm font-medium text-ivory transition duration-200 hover:bg-ivory/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory"
                  href="/"
                >
                  Contact Us
                  <span className="ml-2 transition duration-200 group-hover:translate-x-1">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};
