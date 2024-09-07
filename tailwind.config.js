/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'lavender': '#745997',
        'fadegold': '#EFDF88',
        'gray-light': '#d3dce6',
        'platinum': '#E5E5E5',
      },
      fontFamily: {
        tienne: ['Tienne', 'serif'],
      },
      screens: {
        'sm': '576px',
        'md': '960px',
        'lg': '1440px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
}
