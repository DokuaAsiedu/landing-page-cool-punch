import type { Config } from "tailwindcss"

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
        'brandy-punch': '#CC7F2E',
        'onyx': '#121212'
      }
    },
    container: {
      center: true,
      padding: {
        'DEFAULT': "1rem",
      },
    },
  },
  plugins: [],
}
export default config
