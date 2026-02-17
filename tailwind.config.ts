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
        primary: {
          DEFAULT: "#FFB400", // Construction Yellow
          light: "#FFCA28",
          dark: "#F57C00",
        },
        secondary: {
          DEFAULT: "#1E1E1E", // Dark gray/black
          light: "#2D2D2D",
        },
        accent: {
          DEFAULT: "#E8A838",
          light: "#F0BD5A",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        heading: ["var(--font-outfit)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-right": {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out forwards",
        "fade-in": "fade-in 1s ease-out forwards",
        "slide-right": "slide-right 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
