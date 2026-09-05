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
        cream: {
          DEFAULT: "#F3E9DC",
          light: "#FAF5EE",
          dark: "#E8DBC9",
        },
        caramel: {
          DEFAULT: "#C08552",
          light: "#CF9B6D",
          dark: "#A86D3C",
        },
        brownie: {
          DEFAULT: "#5E3023",
          light: "#753E2F",
          dark: "#472319",
        },
        coffee: {
          DEFAULT: "#895737",
          light: "#A06B48",
          dark: "#6F452A",
        },
      },
    },
  },
  plugins: [],
};

export default config;

