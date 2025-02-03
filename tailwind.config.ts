import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#3674B5", // Main Primary Color
          light: "#578FCA", // Lighter Primary
          dark: "#2B5A8A", // Slightly Darker Variant
        },
        secondary: {
          DEFAULT: "#578FCA", // Secondary Blue
          light: "#A1E3F9", // Lighter Shade
          dark: "#3674B5", // Darker Variant
        },
        accent: {
          DEFAULT: "#A1E3F9", // Accent Color
          light: "#D1F8EF", // Lighter Accent
          dark: "#578FCA", // Darker Accent
        },
        background: "#D1F8EF", // Soft Background Color
        text: "#3674B5", // Darker Text Color
      },
    },
  },
  plugins: [],
} satisfies Config;
