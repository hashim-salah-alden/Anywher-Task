/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customDarkBlue: "#003A64",
        customLightBlue: "#4C92C3",
        customStart: "#28B487", 
        customEnd: "#54C4CC", 
      },
    },
  },
  plugins: [],
};
