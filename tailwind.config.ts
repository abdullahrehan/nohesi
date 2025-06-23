import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        // Custom text size for your normal text style
        base: [
          "14px",
          {
            lineHeight: "20px",
            letterSpacing: "0",
          },
        ],
      },
      fontWeight: {
        medium: "500",
      },
      fontFamily: {
        inter: ["var(--font-inter-tight)", "sans-serif"],
        roboto: ["var(--font-roboto-flex)", "sans-serif"], // ✅ new
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        brand: {
          black: "#08060a", // main background
          bg_secoundary: "#0d0b0f",
          logo_bg: "#141216",
          nav_border: "#121115",
          font_primary: "#d0cfd0",
          icons_color: "#565457",
          font_secoundary: "#949495",
          selected_card: "#201e22",
          selected_card_text: "#acabad",
          border_color: "#19171B",
          pink: "#f60048",
          card_border: "#1a181c",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
