import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream:        "#F7F6EB",
        "green-dark": "#2D4239",
        "green-mid":  "#3d5a4c",
        "green-accent":"#71CE6A",
        "green-faint": "rgba(45,66,57,0.06)",
      },
      fontFamily: {
        garamond: ['"EB Garamond"', "Georgia", "serif"],
        jakarta:  ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        sans:     ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
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
        "reveal": {
          from: { clipPath: "inset(0 100% 0 0)" },
          to:   { clipPath: "inset(0 0% 0 0)" },
        },
      },
      animation: {
        "fade-up":  "fade-up 0.7s ease-out both",
        "wa-pulse": "wa-pulse 2s ease-in-out infinite",
        "reveal":   "reveal 0.9s cubic-bezier(0.77,0,0.18,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
