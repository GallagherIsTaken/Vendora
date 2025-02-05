import type { Config } from "tailwindcss";

export default {
  /** @type {import('tailwindcss').Config} */
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-100": "var(--primary-100)",
      },
      fontFamily: {
        "header-h1": "var(--header-h1-font-family)",
        "header-h2": "var(--header-h2-font-family)",
        "header-h5": "var(--header-h5-font-family)",
        "paragraph-p1-regular": "var(--paragraph-p1-regular-font-family)",
        "paragraph-p2-bold": "var(--paragraph-p2-bold-font-family)",
        "paragraph-p2-medium": "var(--paragraph-p2-medium-font-family)",
        "paragraph-p2-regular": "var(--paragraph-p2-regular-font-family)",
        "paragraph-p3-medium": "var(--paragraph-p3-medium-font-family)",
        "paragraph-p3-regular": "var(--paragraph-p3-regular-font-family)",
      },
    },
  },
  plugins: [],
} satisfies Config;
