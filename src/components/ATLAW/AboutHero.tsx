import { Link } from "react-router-dom";
import "./AboutHero.css";

// Fully-framed founder portrait (dark navy backdrop, no transparency) so the
// panel fills edge-to-edge instead of showing cream behind a cutout.
const founderImage = "/assets/about-hero.avif";

export const AboutHero = (): JSX.Element => {
  return (
    <section aria-labelledby="about-hero-title" className="atlaw-about-hero">
      {/* ── Left: navy editorial panel ── */}
      <div className="ah-navy">
        <span aria-hidden="true" className="ah-watermark">
          ABOUT
        </span>

        {/* Subtle gold orbital sweep + node */}
        <svg
          aria-hidden="true"
          className="ah-orbits"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 900 840"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M -80 120 C 220 300, 620 360, 1040 760"
            stroke="rgba(201,162,75,0.18)"
            strokeWidth="1"
          />
          <path
            d="M -80 360 C 260 460, 560 520, 1040 520"
            stroke="rgba(244,241,234,0.05)"
            strokeWidth="1"
          />
          <circle cx="612" cy="356" fill="#C9A24B" fillOpacity="0.85" r="3.2" />
          <circle cx="232" cy="306" fill="#C9A24B" fillOpacity="0.5" r="2.4" />
        </svg>

        <div className="ah-content">
          <p className="ah-eyebrow ah-reveal" style={{ animationDelay: "0ms" }}>
            <span aria-hidden="true" className="ah-eyebrow-line" />
            <span className="ah-eyebrow-num">00</span>
            <span aria-hidden="true" className="ah-eyebrow-dash">
              &mdash;
            </span>
            <span>About Us</span>
          </p>

          <h1
            className="ah-title ah-reveal"
            id="about-hero-title"
            style={{ animationDelay: "120ms" }}
          >
            Built around
            <br />
            the <em>person,</em>
            <br />
            not the
            <br />
            practice area<span className="ah-gold-dot">.</span>
          </h1>

          <p className="ah-body ah-reveal" style={{ animationDelay: "260ms" }}>
            ATLAW began as one promise &mdash; that no one should have to figure
            out the law alone. Founded in Detroit by Dewnya Bazzi, we&rsquo;ve
            grown into a connected network that pairs every client with the right
            attorney, wherever the matter takes them.
          </p>

          <p className="ah-founder ah-reveal" style={{ animationDelay: "380ms" }}>
            <span aria-hidden="true" className="ah-bullet">
              &bull;
            </span>
            <em>Founded by Dewnya Bazzi &middot; Headquartered in Dearborn.</em>
          </p>

          <div className="ah-actions ah-reveal" style={{ animationDelay: "380ms" }}>
            <Link className="ah-cta ah-cta-primary" to="/our-people">
              Meet our people
              <span aria-hidden="true" className="ah-arrow">
                &rarr;
              </span>
            </Link>
            <a className="ah-cta ah-cta-secondary" href="#our-story">
              Our story
              <span aria-hidden="true" className="ah-arrow">
                &rarr;
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Right: off-white portrait panel ── */}
      <div className="ah-portrait-panel">
        <img
          alt="Dewnya Bazzi, founder of ATLAW"
          className="ah-portrait"
          height={941}
          src={founderImage}
          width={1672}
        />
      </div>

      {/* ── Floating "At a glance" card overlapping the seam ── */}
      <Link
        aria-label="At a glance — explore ATLAW's global reach"
        className="ah-stat-card ah-reveal"
        style={{ animationDelay: "520ms" }}
        to="/#global-reach"
      >
        <span aria-hidden="true" className="ah-card-rule" />
        <h2>At a glance</h2>
        <p>
          A Detroit-founded firm with a connected global network built around
          people, purpose, and the right counsel.
        </p>
        <span aria-hidden="true" className="ah-card-divider" />
        <div className="ah-stats">
          <span>
            <strong>22+</strong>
            <small>Professionals</small>
          </span>
          <span>
            <strong>6</strong>
            <small>Cities</small>
          </span>
          <span>
            <strong>4</strong>
            <small>Continents</small>
          </span>
        </div>
      </Link>
    </section>
  );
};
