/**
 * LOADER OVERLAY (presentational)
 *
 * The branded navy + spinning-gold-ring overlay, with no behavior of its own.
 * Shared by:
 *   • NavigationLoader — shows it for a minimum window on every route change.
 *   • The router's <Suspense fallback> — shows it while a lazily-loaded screen
 *     chunk is still downloading, so code-split load time hides inside the same
 *     transition visual (never a bare spinner or blank screen).
 */

// Canonical navy + gold — matches the Header so the loader reads as one scheme.
const NAVY = "#0a1428";
const GOLD = "#C6A04A";

export const LoaderOverlay = (): JSX.Element => {
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
