import type { Config } from "tailwindcss";

// ─────────────────────────────────────────────────────────
//  PALETA OFICIAL FLORA
//  Tokens únicos — no modificar sin aprobación de marca
// ─────────────────────────────────────────────────────────
const FLORA = {
  violet:  "#381F56",   // color principal de marca
  lila:    "#9B7BBF",   // acento, hover, highlights
  forest:  "#0B5845",   // fondos oscuros, contraste
  sage:    "#3B967E",   // acento secundario, íconos, badges
  cream:   "#F7F6EB",   // fondo claro
  base:    "#0A0514",   // base muy oscura (body bg)
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Fondos
    "bg-cream", "bg-green-dark", "bg-green-accent",
    "bg-brand-violet", "bg-brand-lila", "bg-brand-forest", "bg-brand-sage",
    // Texto
    "text-cream", "text-green-dark", "text-green-accent",
    "text-brand-violet", "text-brand-lila", "text-brand-forest", "text-brand-sage",
    // Bordes
    "border-green-dark", "border-green-accent",
    "border-brand-violet", "border-brand-lila",
    // Tipografía
    "font-noodle", "font-redhat", "font-display", "font-garamond", "font-jakarta",
    // Clases custom CSS
    "title-brutal", "title-impact", "title-section", "section-tag",
    "section-dark", "section-cream",
    "chat-bubble-bot", "chat-bubble-user", "botanical-texture",
  ],
  theme: {
    extend: {
      colors: {
        // ── Tokens semánticos Flora (nombres de marca) ──
        "brand-violet": FLORA.violet,
        "brand-lila":   FLORA.lila,
        "brand-forest": FLORA.forest,
        "brand-sage":   FLORA.sage,
        // ── Aliases funcionales (usados en componentes) ──
        // Se mapean a la paleta oficial para no tocar cada componente
        "cream":        FLORA.cream,
        "green-dark":   FLORA.forest,    // fondos oscuros → forest
        "green-accent": FLORA.lila,      // accents/CTA → lila
        "green-mid":    "#0d6b54",       // hover forest
        "green-sage":   FLORA.sage,      // íconos, badges → sage
      },
      fontFamily: {
        noodle:   ['"Big Noodle Titling"', '"Red Hat Display"', "sans-serif"],
        redhat:   ['"Red Hat Text"', "system-ui", "sans-serif"],
        display:  ['"Red Hat Display"', "system-ui", "sans-serif"],
        garamond: ['"Big Noodle Titling"', '"Red Hat Display"', "sans-serif"],
        jakarta:  ['"Red Hat Text"', "system-ui", "sans-serif"],
        sans:     ['"Red Hat Text"', "system-ui", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        "wa-pulse": {
          "0%,100%": { boxShadow: "0 4px 20px rgba(37,211,102,0.4)" },
          "50%":     { boxShadow: "0 4px 32px rgba(37,211,102,0.7)" },
        },
      },
      animation: {
        "fade-up":  "fade-up 0.7s ease-out both",
        "wa-pulse": "wa-pulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
