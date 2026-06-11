import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Absolute base so hashed asset + lazy-chunk URLs resolve from the domain root
  // on every route — deep-route hard-refresh/direct-link otherwise 404s the JS.
  // (Switch back to "./" only for a subdirectory deployment.)
  base: "/",
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
  build: {
    // Modern baseline — smaller output, no legacy down-transpilation.
    target: "es2020",
    // CSS code splitting is on by default; keep it. No prod sourcemaps.
    sourcemap: false,
    // We route-split via React.lazy, so no manualChunks: the vendor chunk is
    // under the ~150 KB gzip threshold and gsap/router are needed by Home too.
  },
});
