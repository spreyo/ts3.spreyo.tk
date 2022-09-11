/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./comps/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "cpurple": "#8758FF",
        "cblack": "#181818",
        "cgray": "#292929",
        "cblue": "#5CB8E4",
      },
      fontFamily: {
        "dmsans": ["DM Sans", "sans-serif"]
      }
    },
  },
  plugins: [
    // require("daisyui"),
  ],
}
