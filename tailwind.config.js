/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1604px",
      },
      fontFamily: {
        dm: ["DM Sans", "sans-serif"],
      },
      container: {
        center: true,
      },
      colors: {
        black: "#262626",
        gray: "#767676",
      },
    },
  },
  plugins: [],
};
