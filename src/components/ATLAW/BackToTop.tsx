import { useEffect, useState } from "react";
import "./BackToTop.css";

// Floating "back to top" control — appears once the user has scrolled down,
// and smooth-scrolls to the top of the page. Mounted globally so it shows on
// every route. Gold-on-white to match the ATLAW accent.
export const BackToTop = (): JSX.Element => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Back to top"
      className={`atlaw-back-to-top${visible ? " is-visible" : ""}`}
      onClick={scrollToTop}
      tabIndex={visible ? 0 : -1}
    >
      <svg
        aria-hidden="true"
        className="btt-arrow"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V5" />
        <path d="M6 11l6-6 6 6" />
      </svg>
    </button>
  );
};
