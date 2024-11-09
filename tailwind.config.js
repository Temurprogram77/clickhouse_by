/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./**html"],
  theme: {
    extend: {
      backgroundColor:{
        'header-bg-color': '#F8F8F8',
        'wrt-color': '#FF9900',
        'button-color': '#FF9900',
        'white-color': '#fff',
        'black-color': '#000',
        'gray-color': '#00000062',
        'footer': '#F8F8F8',
        'card-title': '#7D7D7D',
      }
    },
  },
  plugins: [],
}