import "./ServiceAreas.css";
import { ServiceLocations } from "./ServiceLocations";

export const ServiceAreas = (): JSX.Element => {
  return (
    <>
      <section
        aria-labelledby="service-areas-title"
        className="atlaw-service-areas"
      >
        {/* ── Background: watermark + orbital arcs ── */}
        <div aria-hidden="true" className="sa-bg">
          <span className="sa-watermark">GLOBAL</span>
          <svg
            className="sa-arcs"
            fill="none"
            preserveAspectRatio="xMidYMid slice"
            viewBox="0 0 1440 900"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="#F4F1EA" strokeOpacity="0.05" strokeWidth="1">
              <path d="M -60 250 Q 720 70 1500 250" />
              <path d="M -60 470 Q 720 300 1500 470" />
            </g>
            <g fill="#C9A24B" fillOpacity="0.55">
              <circle cx="280" cy="176" r="2" />
              <circle cx="1180" cy="158" r="2" />
              <circle cx="980" cy="378" r="1.6" />
            </g>
          </svg>
        </div>

        <div className="sa-inner">
          <div className="sa-reveal sa-top-rule" style={{ animationDelay: "0ms" }} />

          <p className="sa-reveal sa-eyebrow" style={{ animationDelay: "80ms" }}>
            <span className="sa-num">05</span>
            <span className="sa-dash">&mdash;</span>
            <span className="sa-label">Service Areas</span>
          </p>

          <h2
            className="sa-reveal sa-headline"
            id="service-areas-title"
            style={{ animationDelay: "180ms" }}
          >
            Where we show up<span className="sa-gold-dot">.</span>
          </h2>

          <p className="sa-reveal sa-intro" style={{ animationDelay: "300ms" }}>
            A connected network of attorneys and affiliates, so the right counsel
            is never far from you.
          </p>

          <div
            aria-label="Headquarters cities"
            className="sa-reveal sa-hq"
            style={{ animationDelay: "420ms" }}
          >
            <span>Detroit</span>
            <span aria-hidden="true" className="sa-hq-dot">
              &bull;
            </span>
            <span>Dubai</span>
            <span aria-hidden="true" className="sa-hq-dot">
              &bull;
            </span>
            <span>Manila</span>
          </div>
          <div
            aria-hidden="true"
            className="sa-reveal sa-hq-rule"
            style={{ animationDelay: "420ms" }}
          />
        </div>
      </section>

      {/* White counterpart band: tabs + city grid, reused on every page. */}
      <ServiceLocations />
    </>
  );
};
