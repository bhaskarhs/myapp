/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary_color: "#f3f4f6",
      buttonbg_color: "#485ec4",
      black: "#000000",
      secondary_button_color: "#e74242",
      proceed_btn_color: "#53a5f1",
      white: "#fff",
      gray: "gray",
      loginbuttooncolor: "#374159",
      bgslate200: "#e2e8f0",
    },
    fontFamily: {
      sans: ["Figtree", "Helvetica", "Arial", "sans-serif"],
    },
  },
  plugins: [],
};
