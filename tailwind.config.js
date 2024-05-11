/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customHsl1: "hsl(136, 65%, 51%)",
        customHsl2: "hsl(192, 70%, 51%)",
      },
      fontFamily: {
        sans: ["Public Sans", "sans-serif"],
      },
      fontWeight: {
        // Define custom font weights
        normal: 300,
        semibold: 400,
        extrabold: 700,
      },
    },
  },
  plugins: [],
};
