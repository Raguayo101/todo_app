/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      letterSpacing: {
        tightest: "-.075em",
        tight: "-.025em",
        normal: "0",
        wider: ".05em",
        widest: ".50em",
      },
      colors: {
        midnight: "#393A4B",
        grey: "#767992",
        rainbow: "#55DDFF",
        navy: {
          50: "#f3f8f9",
          100: "#daf1fa",
          200: "#afe0f5",
          300: "#7cc2e7",
          400: "#479ed3",
          500: "#357dc0",
          600: "#2d62a9",
          700: "#254a87",
          800: "#1b3260",
          900: "#101f3f",
        },
      },
    },
  },
  plugins: [],
};
