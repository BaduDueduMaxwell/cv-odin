/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sky: {
          400: "#38bdf8",
          600: "#0284c7",
        },
        teal: {
          200: "#99f6e4",
        },
        slate: {
          50: "#f8fafc",
        },
        gray: {
          400: "#9ca3af",
        },
      },
    },
  },
  plugins: [],
};
