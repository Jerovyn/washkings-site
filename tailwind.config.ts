import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1B5377",
        secondary: "#0fb9c6",
        accent: "#1dd7e0",
        teal: {
          500: "#1dd7e0",
          600: "#0fb9c6",
        },
        background: "#FFFFFF",
        text: {
          primary: "#282828",
          secondary: "#666666",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

