import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ServiceLocations.css";

type Location = { city: string; region: string };

const usLocations: Location[] = [
  { city: "Detroit, MI", region: "Michigan" },
  { city: "San Antonio, TX", region: "Texas" },
  { city: "Atlanta, GA", region: "Georgia" },
  { city: "Chicago, IL", region: "Illinois" },
  { city: "New York, NY", region: "New York" },
  { city: "Washington, D.C.", region: "District of Columbia" },
  { city: "Phoenix, AZ", region: "Arizona" },
  { city: "Tampa, FL", region: "Florida" },
];

const internationalLocations: Location[] = [
  { city: "Windsor, ON", region: "Canada" },
  { city: "London, UK", region: "United Kingdom" },
  { city: "Dubai, UAE", region: "United Arab Emirates" },
  { city: "Kuwait City, Kuwait", region: "Kuwait" },
  { city: "Beirut, Lebanon", region: "Lebanon" },
  { city: "Baghdad, Iraq", region: "Iraq" },
  { city: "Erbil, Iraq", region: "Iraq" },
  { city: "Kuala Lumpur, Malaysia", region: "Malaysia" },
  { city: "Manila, Philippines", region: "Philippines" },
];

type TabKey = "us" | "international";

const LocationItem = ({ city, region }: Location): JSX.Element => (
  <Link className="sl-item" to="/contact">
    <span>
      <h3 className="sl-city">{city}</h3>
      <p className="sl-region">{region}</p>
      <span aria-hidden="true" className="sl-underline" />
    </span>
    <span aria-hidden="true" className="sl-arrow">
      &rarr;
    </span>
  </Link>
);

export const ServiceLocations = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<TabKey>("us");
  const activeLocations =
    activeTab === "us" ? usLocations : internationalLocations;

  // Auto-switch between regions every 10 seconds. The interval resets whenever
  // activeTab changes, so a manual selection restarts the 10s countdown.
  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveTab((prev) => (prev === "us" ? "international" : "us"));
    }, 10000);
    return () => window.clearInterval(id);
  }, [activeTab]);

  return (
    <section aria-label="Service areas by region" className="atlaw-service-locations">
      <div className="sl-inner">
        <div
          className="sl-tabs"
          role="tablist"
          aria-label="Filter service areas by region"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "us"}
            className={`sl-tab${activeTab === "us" ? " is-active" : ""}`}
            onClick={() => setActiveTab("us")}
          >
            United States
          </button>
          <span aria-hidden="true" className="sl-tab-sep" />
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "international"}
            className={`sl-tab${activeTab === "international" ? " is-active" : ""}`}
            onClick={() => setActiveTab("international")}
          >
            International
          </button>
        </div>

        <div className="sl-grid" key={activeTab}>
          {activeLocations.map((loc, i) => (
            <LocationItem
              city={loc.city}
              key={`${loc.city}-${loc.region}-${i}`}
              region={loc.region}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
