module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './modules/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '468px',
      md: '640px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      noise: '#1f1f27',
      red: '#CD0001',
      blue: '#416C9F',
      yellow: '#C9BC5F',
      white: '#ffffff',
      'white-05': '#ffffff05',
      'white-20': '#ffffff33',
      'white-60': '#ffffff99',
      black: '#222222',
      transparent: 'transparent',
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      1.5: '1.5px',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
    },
    fontSize: {
      h0: [
        '140px',
        {
          letterSpacing: 0,
          lineHeight: '140%',
        },
      ],
      h1: [
        '92px',
        {
          letterSpacing: 0,
          lineHeight: 1,
        },
      ],
      h2: [
        '80px',
        {
          letterSpacing: 0,
          lineHeight: 1,
        },
      ],
      h3: [
        '40px',
        {
          letterSpacing: 0,
          lineHeight: 0,
        },
      ],
      body: [
        '16px',
        {
          letterSpacing: 0,
          lineHeight: '140%',
        },
      ],
      button: [
        '16px',
        {
          letterSpacing: 0,
          lineHeight: '140%',
        },
      ],
      buttonBig: [
        '140px',
        {
          letterSpacing: 0,
          lineHeight: '140%',
        },
      ],
      h0Lg: [
        '120px',
        {
          letterSpacing: 0,
          lineHeight: 1,
        },
      ],
      h0Mob: [
        '62px',
        {
          letterSpacing: 0,
          lineHeight: 1,
        },
      ],
      h1Mob: [
        '80px',
        {
          letterSpacing: '-5px',
          lineHeight: 0,
        },
      ],
      h2Mob: [
        '42px',
        {
          letterSpacing: 0,
          lineHeight: 0,
        },
      ],
      h3Mob: [
        '24px',
        {
          letterSpacing: 0,
          lineHeight: '140%',
        },
      ],
      bodyMob: [
        '16px',
        {
          letterSpacing: 0,
          lineHeight: '140%',
        },
      ],
      buttonMob: [
        '14px',
        {
          letterSpacing: 0,
          lineHeight: '140%',
        },
      ],
      buttonBigMob: [
        '80px',
        {
          letterSpacing: '-5px',
          lineHeight: '140%',
        },
      ],
      12: '12px',
      24: '24px',
      16: '16px',
    },
    fontFamily: {
      kharkiv: ['Kharkiv Tone', 'sans-serif'],
      mariupol: ['Mariupol', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        root: 'url("../public/background.png")',
        'title-background': 'url("../public/title-image.svg")',
        'ukraine-emblem': 'url("../public/Emblem.svg")',
        'arrow-left': 'url("../public/Arrow Left.png")',
        'arrow-right': 'url("../public/Arrow Right.png")',
        'arrow-left-active': 'url("../public/Arrow Left Active.png")',
        'arrow-right-active': 'url("../public/Arrow Right Active.png")',
      },
      skew: {
        20: ['20deg'],
      },
      linearBorderGradients: ({ theme }) => ({
        colors: {
          'blue-yellow': ['#416C9F', '#C9BC5F'],
          'dark-transparent': ['#00000033', '#00000000'],
        },
      }),
    },
  },
  plugins: [require('tailwindcss-text-fill-stroke')()],
};
