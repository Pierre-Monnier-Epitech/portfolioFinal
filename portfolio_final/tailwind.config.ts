import daisyui from "daisyui";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      Poetsen_One: ["Poetsen One", "sans-serif"],
      Zen_dots: ["Zen Dots", "sans-serif"],
    },
    extend: {
      colors: {
        background: "#12265A",
      },
    },
  },

  plugins: [daisyui],
};
export default config;