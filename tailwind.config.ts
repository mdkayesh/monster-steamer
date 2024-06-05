import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.5rem",
        screens: {
          "2xl": "1280px",
        },
      },

      colors: {
        "primary-blue": " #00CCF8",
        "primary-white": " #FFFFFF",
        "light-7blue": " #E2EFF2",
        "light-11blue": " #AFC0C4",
        "light-12blue": " #788588",
        "light-27blue": " #5B757D",
        "dark-67blue": " #153339",
        "dark-100blue": "#002932",
      },
    },
  },
  plugins: [],
};
export default config;
