import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Colores base garantizados
    "bg-cream", "bg-green-dark", "bg-green-mid", "bg-green-accent",
    "text-cream", "text-green-dark", "text-green-mid", "text-green-accent",
    "border-cream", "border-green-dark", "border-green-accent",
    // Tipografía
    "font-noodle", "font-redhat", "font-display",
    "font-garamond", "font-jakarta",
    // Clases custom
    "title-brutal", "title-impact", "title-section", "section-tag",
    "chat-bubble-bot", "chat-bubble-user",
  ],
  theme: {
    extend: {
      colors: {
        cream:         "#F7F6EB",
        "green-dark":  "#2D4239",
        "green-mid":   "#3d5a4c",
        "green-accent":"#71CE6A",
      },
      fontFamily: {
        noodle:   ['"Big Noodle Titling"', '"Red Hat Display"', "sans-serif"],
        redhat:   ['"Red Hat Text"', "system-ui", "sans-serif"],
        display:  ['"Red Hat Display"', "system-ui", "sans-serif"],
        // aliases para compatibilidad con clases existentes
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
