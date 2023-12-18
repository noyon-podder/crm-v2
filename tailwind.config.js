/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBG: "#F8FAFC",
        mainGray: "#717171",
      },
    },
  },
  plugins: [],
}

