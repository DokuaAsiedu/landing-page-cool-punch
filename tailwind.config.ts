import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brandy-punch": "#CC7F2E",
        onyx: "#121212",
        "dusky-blue": "#525AA0",
        "tea-green": "#C7F4C2",
        "mountain-mist": "#959595",
        "baltic-sea": "#202229",
        "aqua-haze": "#F3F3F3",
        "lightning-yellow": "#FFBE2E",
        "desert-storm": "#F8F8F8",
        "grey-goose": "#D2D2D2",
        "vampire-grey": "#4D4E54",
        "titan-white": "#EDEFFF",
        "storm-dust": "#626367",
        "friar-grey": "#797A7F",
        "dawn-pink": "#ECECEC",
        "lavendar-blue": "#8BA4FD",
        "lavendar-mist": "#E8E8E8",
        "blue-haze": "#C7BAE7",
        "storm-grey": "#77787F",
        "catskill-white": "#F1F3FF",
        "dull-lavendar": "#979FEF",
        "racing-green": "#16171A",
        "santa-grey": "#A3A3A5",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
        lg: "4rem",
      },
    },
  },
  plugins: [],
};
export default config;
