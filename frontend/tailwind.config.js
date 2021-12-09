module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        logo: ['Luxurious Script', 'cursive'],
      },
      animation: {
        menu: 'menu 400ms linear 0s 1 normal none',
      },
      keyframes: {
        menu: {
          '0%': {
            opacity: 0,
            transform: 'rotateY(-100deg)',
            transformOrigin: 'right',
          },
          '100%': {
            opacity: 1,
            transform: 'rotateY(0)',
            transformOrigin: 'right',
          },
        },
      },
      height: {
        halfScreen: '50vh',
      },
    },
  },
  variants: {
    extend: {
      margin: ['last'],
      display: ['group-hover'],
    },
  },
};
