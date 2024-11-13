/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        // Usando o alias que configuramos no Vite
        background: "url('@assets/background.svg')",
      },
      colors: {
        "custom-green-low-trans": "rgba(193, 207, 161, 0.30)",
        "custom-green-low": "#C1CFA1",
        "custom-green-high": "#A5B68D",
        "custom-pink-high": "#EE946C",
        "custom-orange": "#FB6C2B", // Essas cores são exemplos de personalização aqui você pode colocar a paleta que escolhemos.
      },
      fontFamily: {
        "josefin-sans": ["Josefin Sans", "sans-serif"],
        "josefin-slab": ["Josefin Slab", "serif"],
      },
      letterSpacing: {
        widest: "0.5em",
      },
    },
  },
  plugins: [],
};
