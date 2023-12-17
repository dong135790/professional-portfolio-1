/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    // transform: (content) => content.replace(/taos:/g, ''),
    files: ["./{views,public}/**/*.{handlebars,js}", "./node_modules/flowbite/**/*.js"],
  },
  theme: {
    extend: {
      screens: {
        'tablet': '640px',
      },
      fontFamily: {
        'main-bold': ['Manrope', 'ExtraBold'],
        'main-semi': ['Manrope', 'SemiBold'],
        'main-normal': ['Manrope', 'Regular']
      }
    },
  },
  plugins: [
    // require('taos/plugin')
    require('flowbite/plugin')

  ],
  // safelist: [
  //   '!duration-[0ms]',
  //   '!delay-[0ms]',
  //   'html.js :where([class*="taos:"]:not(.taos-init))'
  // ],
}

