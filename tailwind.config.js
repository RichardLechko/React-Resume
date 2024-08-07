
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#202225",
        darkviolet: "hsl(257, 27%, 26%)",
        gray: {
          900: "#202225",
          800: "#2f3136",
          700: "#36393f",
          600: "#4f545c",
          400: "#d4d7dc",
          300: "#e3e5e8",
          200: "#ebedef",
          100: "#f2f3f5",
        },
        formBg: "#343f4b",
        primaryColor: "#0076a3",
        customInput: "rgb(53, 53, 53)",
      },
      fontSize: {
        "4xl": "2.4rem",
        "10xl": "4rem",
      },
    },
  },
  plugins: [],
};
