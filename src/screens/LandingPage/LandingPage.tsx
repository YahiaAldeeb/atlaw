const styles = `
  .landing-page-root {
    --ivory: #FFFFFF;
    --surface: #FFFFFF;
    --bluegray: #9ca7b5;
    --accent: #2e5fa7;
    --ink: #14233b;
    --ink-80: rgba(20, 35, 59, 0.8);
    --ink-60: rgba(20, 35, 59, 0.6);
    --ink-40: rgba(20, 35, 59, 0.4);
    --ink-12: rgba(20, 35, 59, 0.12);
    --ink-08: rgba(20, 35, 59, 0.08);
    --serif: "Fraunces", Georgia, serif;
    --sans: "Inter", -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
    background: var(--ivory);
    color: var(--ink);
    font-family: var(--sans);
  }
  .landing-page-root * {
    box-sizing: border-box;
  }
  .landing-stage {
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    overflow: hidden;
  }
  .header {
    position: sticky;
    top: 0;
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 22px 56px;
    background: rgba(20, 35, 59, 0.94);
    border-bottom: 1px solid rgba(243, 241, 235, 0.08);
  }
  .brand img.wordmark {
    height: 28px;
  }
  .nav {
    display: flex;
    gap: 32px;
    color: rgba(243, 241, 235, 0.78);
    font-size: 14px;
    font-weight: 500;
  }
  .nav a.active {
    color: var(--ivory);
  }
  .cta-pill {
    border-radius: 999px;
    background: var(--ivory);
    color: var(--ink);
    padding: 11px 18px;
    font-size: 14px;
    font-weight: 500;
  }
  .hero {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 48px;
    align-items: end;
    padding: 96px 56px 60px;
  }
  .hero h1 {
    margin: 20px 0 24px;
    font-family: var(--serif);
    font-size: 96px;
    line-height: 0.96;
    font-weight: 400;
  }
  .hero h1 em {
    color: var(--accent);
    font-style: italic;
    font-weight: 300;
  }
  .hero p {
    max-width: 540px;
    color: var(--ink-80);
    line-height: 1.6;
  }
  .hero-portrait {
    height: 640px;
    border: 1px solid var(--ink-12);
    border-radius: 18px;
    background: linear-gradient(160deg, #FFFFFF 0%, #9ca7b5 100%);
  }
  .section {
    padding: 100px 56px;
  }
  .section.alt {
    background: var(--surface);
  }
  .section.dark {
    background: var(--ink);
    color: var(--ivory);
  }
  .section h2 {
    margin: 18px 0 22px;
    font-family: var(--serif);
    font-size: 56px;
    line-height: 1;
    font-weight: 400;
  }
  .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
  .card {
    border: 1px solid var(--ink-12);
    border-radius: 16px;
    background: var(--ivory);
    padding: 22px;
  }
  .section.dark .card {
    border-color: rgba(243, 241, 235, 0.12);
    background: rgba(243, 241, 235, 0.05);
  }
  .footer {
    background: var(--ink);
    color: var(--ivory);
    padding: 40px 56px;
    font-size: 12px;
    opacity: 0.8;
  }
  @media (max-width: 1024px) {
    .header,
    .hero,
    .section,
    .footer {
      padding-left: 24px;
      padding-right: 24px;
    }
    .hero {
      grid-template-columns: 1fr;
    }
    .cards {
      grid-template-columns: 1fr;
    }
  }
`;

export const LandingPage = (): JSX.Element => {
  return (
    <main className="landing-page-root">
      <style>{styles}</style>
      <div className="landing-stage">
        <header className="header">
          <a className="brand" href="#">
            <img className="wordmark" src="/assets/atlaw-wordmark.svg" alt="ATLAW" />
          </a>
          <nav className="nav">
            <a className="active" href="#">
              About Us
            </a>
            <a href="#">Practice Areas</a>
            <a href="#">Insights</a>
            <a href="#">Contact</a>
          </nav>
          <a className="cta-pill" href="#">
            I Need Help
          </a>
        </header>

        <section className="hero">
          <div>
            <h1>
              Law, Powered by <em>Insight.</em>
            </h1>
            <p>
              ATLAW is a global law firm that uses advanced technology and data to provide expert
              legal services and solutions.
            </p>
          </div>
          <div className="hero-portrait" />
        </section>

        <section className="section">
          <h2>Practice Areas Built for Complex Business Needs.</h2>
          <div className="cards">
            <article className="card">Planning</article>
            <article className="card">Trusts & Estate</article>
            <article className="card">Privacy & Cybersecurity</article>
          </div>
        </section>

        <section className="section alt">
          <h2>Principles That Guide Us.</h2>
          <div className="cards">
            <article className="card">Ethical Conduct</article>
            <article className="card">Innovation</article>
            <article className="card">Collaboration</article>
          </div>
        </section>

        <section className="section dark">
          <h2>Featured Insights.</h2>
          <div className="cards">
            <article className="card">Seeking New Frontiers in Kuwait</article>
            <article className="card">Estate Planning Team Expansion</article>
            <article className="card">Corporate Team Growth</article>
          </div>
        </section>

        <footer className="footer">Copyright © 2022 ATLAW. All rights reserved.</footer>
      </div>
    </main>
  );
};
