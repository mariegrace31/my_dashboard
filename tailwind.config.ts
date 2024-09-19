const withMT = require("@material-tailwind/react/utils/withMT");

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
        primary: "#3A5A40",
        secondary: "#588157",
        tertiary: "#A3B18A",
      },
    },
  },
  plugins: [],
};
export default config;
