/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sdnrRegular: ['SDNR_Regular', 'sans-serif'],
        sdnrBold: ['SDNR_Bold', 'sans-serif'],
        mapleLight: ['maplestory_Light', 'sans-serif'],
        mapleBold: ['maplestory_Bold', 'sans-serif']
      },
      backgroundImage: {
        'backgroundImg': "url('/background.png')"
      },
      colors: {
        cream: "#fff9e3",
        fontColor: "#807155",
        borderColor: "#e6d9c6",
      }
    },
  },
  plugins: [],
}
