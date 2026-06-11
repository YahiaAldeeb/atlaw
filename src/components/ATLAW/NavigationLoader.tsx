import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

/**
 * NAVIGATION LOADER
 *
 * A branded full-screen loader that appears during page transitions:
 *
 *  • On every route change (and the initial load / hard refresh) it shows for a
 *    short minimum window, so even instant client-side navigations get a visible
 *    "loading" beat — and slower transitions keep it on screen until they land.
 *  • When a user clicks a link that points to the page they are already on, React
 *    Router would normally do nothing. Here we intercept that click and reload the
 *    page instead, so "click the current page" refreshes it (loader included).
 *
 * Mounted once, near the app root, inside the Router.
 */

// Canonical navy + gold — matches the Header so the loader reads as one scheme.
const NAVY = "#0a1428";
const GOLD = "#C6A04A";

/** How long the loader stays visible, at minimum, per transition (ms). */
const MIN_VISIBLE_MS = 700;

export const NavigationLoader = (): JSX.Element | null => {
  const location = useLocation();
  // Visible on first mount so a hard load / refresh shows the loader too.
  const [visible, setVisible] = useState(true);
  const timerRef = useRef<number | undefined>(undefined);

  // Show the loader on every route change, then hide it after the min window.
  useEffect(() => {
    setVisible(true);
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => setVisible(false), MIN_VISIBLE_MS);
    return () => window.clearTimeout(timerRef.current);
  }, [location.pathname, location.search]);

  // Intercept clicks on links that target the current page → reload it.
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      // Ignore modified clicks (new tab / download / non-primary button).
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const anchor = (event.target as HTMLElement | null)?.closest("a");
      if (!anchor) return;

      // Only same-tab, internal links without an in-page hash target.
      if (anchor.target && anchor.target !== "_self") return;
      if (anchor.hasAttribute("download")) return;

      const url = new URL(anchor.href, window.location.origin);
      if (url.origin !== window.location.origin) return;
      if (url.hash) return; // in-page anchor — let it scroll, don't reload

      const isSamePage =
        url.pathname === window.location.pathname && url.search === window.location.search;

      if (isSamePage) {
        event.preventDefault();
        setVisible(true);
        window.location.reload();
      }
    };

    // Capture phase so we run before React Router's own link handling.
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-label="Loading"
      aria-live="polite"
      className="animate-fade-in fixed inset-0 z-[200] flex items-center justify-center backdrop-blur-sm"
      role="status"
      style={{ backgroundColor: `${NAVY}f2` }}
    >
      <div className="relative flex h-24 w-24 items-center justify-center">
        {/* Spinning gold ring */}
        <span
          aria-hidden="true"
          className="absolute inset-0 animate-spin rounded-full"
          style={{
            border: "2px solid rgba(198,160,74,0.18)",
            borderTopColor: GOLD,
          }}
        />
        {/* Brand mark — matches the navbar logo */}
        <img alt="ATLAW" className="h-7 w-auto" src="/assets/atlaw logo.svg" />
      </div>
      <span className="sr-only">Loading&hellip;</span>
    </div>
  );
};

export default NavigationLoader;
