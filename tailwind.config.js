/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dotgothic: ["DotGothic16", "sans-serif"],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        float: {
          "0%": { transform: "translateY(-6px)" },
          "100%": { transform: "translateY(6px)" },
        },
        blink: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        "main-enter": "fade-in 1.5s steps(5, end)",
        "fade-in": "fade-in 300ms ease-in",
        float: "float 3s ease-in-out infinite alternate",
        blink: "blink 0.75s steps(2) infinite alternate",
      },
    },
  },
  plugins: [],
};
