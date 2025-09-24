import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#0B1220", // графитовый тёмный
          gold: "#F7C948",
          teal: "#0F766E",
          card: "#161C2C",
          line: "#1E2435"
        }
      },
      boxShadow: {
        gold: "0 0 25px rgba(247, 201, 72, 0.25)"
      }
    },
  },
  plugins: [],
} satisfies Config;
