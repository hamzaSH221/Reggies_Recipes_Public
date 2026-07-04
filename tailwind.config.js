/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Brand palette — "fresh market" theme
        pine: "#1E3A2B",     // deep green: headings, nav, footer
        basil: "#3E7C4F",    // mid green: buttons, links
        saffron: "#E8A020",  // warm accent: highlights, badges
        paper: "#FBF8F1",    // warm off-white page background
        ink: "#242A22",      // body text
        leaf: "#EAF0E4"      // soft green tint for sections/chips
      },
      fontFamily: {
        display: ['"Young Serif"', "serif"],
        body: ['"Nunito Sans"', "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"]
      }
    }
  },
  plugins: []
};
