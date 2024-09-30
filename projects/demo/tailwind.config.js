/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './projects/**/*.{html,ts,css,scss,sass,less,styl}'
  ],
  theme: {
    extend: {
      colors: {
        // menu
        menu        : 'var(--menu)',
        menu_light  : 'var(--menu-light)',
        menu_dark   : 'var(--menu-dark)',

        // background
        primary     : 'var(--primary)',
        secondary   : 'var(--secondary)',
        tertiary    : 'var(--tertiary)',
        accent      : 'var(--accent)',
        accent_lighter: 'var(--accent-lighter)',

        // text
        dark        : 'var(--dark)',
        darker      : 'var(--darker)',
        light       : 'var(--light)',
        lighter     : 'var(--lighter)',
        disabled    : 'var(--disabled)',
        placeholder : 'var(--placeholder)',
        static_gray : 'var(--static-gray)',
        icon        : 'var(--icon)',

        // border
        borderline  : 'var(--borderline)',

        // input
        label       : 'var(--label)',
        input       : 'var(--input)',
        icon        : 'var(--icon)'
      },
      height: {
        '192': '48rem',
      },
      inset: {
        '30': '7.5rem'
      },
      width: {
        '30': '7.5rem',
        '128': '32rem',
      },
      zIndex: {
        '90': '90',
        '100': '100',
        '110': '110',
        '120': '120'
      }
    },
  },
  plugins: [],
}

