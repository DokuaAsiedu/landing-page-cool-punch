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
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
        lg: "3rem",
      },
    },
  },
  plugins: [],
};
export default config;
