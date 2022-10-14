/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#1A1A1A",
        "purple-100": "#AE62F9",
        gray: "#ECECEC",
        "dark-blue": "#1d3557",
        "dark-purple": "#10002b"
      },
    },
  },
  plugins: [],
};
