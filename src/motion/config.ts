// ─────────────────────────────────────────────────────────────────────────────
// Motion config — single source of truth for the ATLAW animation system.
// Every animation imports easing / duration / stagger from here. No magic
// numbers scattered across components. Calibrated for "premium law firm":
// confident, smooth, never playful.
// ─────────────────────────────────────────────────────────────────────────────

export const EASE = {
  out: "power3.out",
  inOut: "power3.inOut",
  text: "power4.out",
} as const;

export const DUR = {
  fast: 0.5,
  base: 0.8,
  slow: 1.2,
} as const;

export const STAGGER = {
  lines: 0.08,
  items: 0.06,
  grid: 0.04,
} as const;

// Brand tokens, mirrored from the editorial design system so motion code never
// hardcodes a hex inline. (Site is currently all-white; ink + gold hairline.)
export const COLOR = {
  ink: "#0E1B2C",
  gold: "#C6A04A",
  paper: "#FFFFFF",
} as const;

// Standard ScrollTrigger entry point for "reveal once on scroll-in".
export const REVEAL_START = "top 85%";

// Default toggleActions for play-once reveals.
export const REVEAL_TOGGLE = "play none none none";

// True when the user has asked the OS to minimise motion. Read this at call
// time (not module load) so it stays correct if the setting flips mid-session.
export const prefersReducedMotion = (): boolean =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
