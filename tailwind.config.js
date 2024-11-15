/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        "background": "#ff7979",
        "price": "#5e54a4",
        "button": "#38cc8b"
      },
      screens: {
        desktop: "1440px"
      }
    },
  },
  plugins: [],
}

