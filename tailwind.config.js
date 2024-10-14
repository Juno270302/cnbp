/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mainB: ["OSBold"],
        mainR: ["RBRegular"],
      },

      screens: {
        sm: "440px",
        md: "733px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1550px",
      },
    },
  },
  plugins: [],
};
