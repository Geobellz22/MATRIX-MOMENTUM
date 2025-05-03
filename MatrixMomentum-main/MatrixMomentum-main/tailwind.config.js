/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Anek Telugu", "sans-serif"],
        sub: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
