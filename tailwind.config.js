module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Gray: "rgba(44, 52, 57, 0.61)",
        blue: "#0000FF",
        purp: "rgba(161, 158, 247,0.5)",
        purpFon: "rgba(161, 158, 247,1)",
        GrayFon: "rgba(44, 52, 57, 1)",
        blur: "rgba(23, 23, 23, 0.53)",
        darkgray: "#2C3439"
      },
      boxShadow: {
        shd: " -6px 3px rgba(161, 158, 247, 1)",
        shdY: "-6px 3px rgba(253, 238, 109, 1)",
        shdW: " -6px 3px rgba(128, 128, 128, 0.2)",
        shdB: " -6px 3px rgba(161, 158, 247, 0.6)",
        shdBR: " 6px 3px rgba(161, 158, 247, 0.6)",
        shdInset: "inset 0 -2px 0 rgba(253, 238, 109, 1)",
        shdInsetPurp: "inset 0 -2px 0 rgba(161, 158, 247, 1)",
      },
      fontFamily: {
        custom: ["Caprasimo", "sans-serif"],
        monteserrat: ["Montserrat", "sans-serif"],
        Oleo_script: ["Oleo Script Swash Caps"],
      },
    },
  },
  plugins: [],
};
