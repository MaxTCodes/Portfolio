/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{jsx,tsx}",
  ],
  safelist: [
    'decoration-auraside',
    'decoration-mantle',
    'decoration-goldfish',
    'decoration-linkedin',
    'decoration-github',
    'decoration-sirius',
    'decoration-email',
  ],
  theme: {
    extend: {
      textDecorationColor: {
        auraside: "#ed1c49",
        mantle: "#fd3a4a",
        goldfish: "#F6A01A",
        linkedin: "#0A66C2",
        github: "#777",
        sirius: "#fff",
        email: "#823AFD"
      },
      colors: {
        primary: "#00050e",
      }
    },
  },
  plugins: [],
}
