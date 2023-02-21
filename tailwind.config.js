/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    screens:{
    sm: '640px',

    md: '768px',

    lg: '1024px',

    xl: '1280px',

    '2xl': '1536px'
    },
    colors:{
      mysticRed: '#FF5300',
      onyx: '#373737',
      white :'#FFFFFF',
      floralWhite: '#FFF7F4',
      gray: '#7B7B7B',
      "vivid-cerise": '#E11A7D'
    },
    fontFamily:{
      Poppins : ['Poppins'],
      workSans : ['Work Sans'],
      sans: ["Source Sans Pro", "sans-serif"]
    }

  },
  plugins: [],
};
