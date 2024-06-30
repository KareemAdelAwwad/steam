/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '3rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '0rem',
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1440px',
      // => @media (min-width: 1536px) { ... }
      
      '2xl': '1920px', 
      // => @media (min-width: 1920px) { ... }
    },
    colors: {
      primary: "#66C0F4",
      secondary: "#4B619B", 
      text: {
        main: "#F3F3F3", 
        dim: "#76808C",
      },
      bg: {
        main: "#0E141B",
        highlight: "#1E2329",
        hover: "#313843",
        secondary: "#14344B",
        tertiary: "#212B45",
      },
      accent: {
        green: "#A1CD44",
        red: "#CD5444",
        yellow: "#C1B15F",
      },
    },
    fontFamily: {
      MotivaSans: ["Motiva Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}