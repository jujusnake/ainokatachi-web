/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dotgothic: ["DotGothic16", "sans-serif"],
      },
      keyframes: {
        "main-enter": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        "main-enter": "main-enter 1.5s ease-in",
      },
    },
  },
  plugins: [],
};
