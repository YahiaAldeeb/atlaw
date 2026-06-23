module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#FFFFFF",
        surface: "#FFFFFF",
        bluegray: "#9CA7B5",
        accent: "#2E5FA7",
        ink: "#14233B",
        "gray-900": "var(--gray-900)",
        primaryblack: "var(--primaryblack)",
        primaryneutral: "var(--primaryneutral)",
        primarywhite: "var(--primarywhite)",
        "zinc-300": "var(--zinc-300)",
        "zinc-500": "var(--zinc-500)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        serifDisplay: ["Lustria", "Cormorant Garamond", "Libre Baskerville", "Georgia", "serif"],
        sans: ["Mulish", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 4px 20px rgba(198,160,74,0.5)" },
          "50%": { boxShadow: "0 4px 36px rgba(198,160,74,0.8), 0 0 0 8px rgba(198,160,74,0.15)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee 25s linear infinite",
        "marquee-slow": "marquee 35s linear infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
