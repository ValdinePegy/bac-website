/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2c3e50",
        accent: "#2980b9",
        light: "#ecf0f1",
        dark: "#2c3e50",
      },
    },
  },
  plugins: [],
};
