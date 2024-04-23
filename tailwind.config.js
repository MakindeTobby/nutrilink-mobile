/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#32D74B",
        },
        "dark-primary": {
          DEFAULT: "#217D51",
        },
        dark: {
          DEFAULT: "#1C1C1E",
        },
        "soft-dark": {
          DEFAULT: "#2A2A2F",
        },
      },
    },
  },

  plugins: [],
};
