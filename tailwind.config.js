/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
          sans: ["Cormorant", "sans-serif"],
      },
  },
  screens: {
    ff:"100px",
    xx:"300px",
    xs: "480px",
    ss: "620px",
    sm: "768px",
    md: "1060px",
    lg: "1200px",
    xl: "1700px",
  },
  backgroundImage: {
    'need': "url('./assets/need.jpg')",
    'world': "url('./assets/world.jpg')",
    'world2': "url('./assets/world2.jpg')",
    'world3': "url('./assets/world3.jpg')",
    'world4': "url('./assets/world4.jpg')",
  },
  },
  plugins: [],
}

