import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Flora palette
        "flora-base":    "#0c1510",   // fondo base, casi negro con verde
        "flora-surface": "#111f17",   // superficies / cards base
        "flora-dark":    "#2D4239",   // verde oscuro original
        "flora-accent":  "#71CE6A",   // verde brillante
        "flora-cream":   "#F7F6EB",   // crema
        // Glass
        border: "hsl(var(--border))",
        ring:   "hsl(var(--ring))",
      },
      fontFamily: {
        garamond: ['"EB Garamond"', "Georgia", "serif"],
        jakarta:  ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        sans:     ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "blob-1": {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "33%":     { transform: "translate(60px,-40px) scale(1.1)" },
          "66%":     { transform: "translate(-30px,30px) scale(0.95)" },
        },
        "blob-2": {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "33%":     { transform: "translate(-50px,40px) scale(1.05)" },
          "66%":     { transform: "translate(40px,-30px) scale(1.1)" },
        },
        "blob-3": {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "50%":     { transform: "translate(30px,50px) scale(0.9)" },
        },
        "cursor-glow": {
          "0%,100%": { opacity: "0.6" },
          "50%":     { opacity: "1" },
        },
        "accordion-down": {
          from: { height: "0" },
          to:   { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to:   { height: "0" },
        },
        "wa-pulse": {
          "0%,100%": { boxShadow: "0 4px 20px rgba(37,211,102,0.4)" },
          "50%":     { boxShadow: "0 4px 32px rgba(37,211,102,0.7)" },
        },
        "chat-in": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "blob-1":          "blob-1 14s ease-in-out infinite",
        "blob-2":          "blob-2 18s ease-in-out infinite",
        "blob-3":          "blob-3 22s ease-in-out infinite",
        "wa-pulse":        "wa-pulse 2s ease-in-out infinite",
        "chat-in":         "chat-in 0.35s ease-out both",
        "accordion-down":  "accordion-down 0.2s ease-out",
        "accordion-up":    "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
