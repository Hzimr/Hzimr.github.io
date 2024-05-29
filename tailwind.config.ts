import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*tsx'],
  theme: {
    extend: {
      keyframes: {
        textSideLeft: {
          '0%': { transform: 'translateX(-80%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        textSideRight: {
          '0%': { transform: 'translateX(80%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        'text-side-left': 'textSideLeft 1s ease-in-out',
        'text-side-right': 'textSideRight 1s ease-in-out',
      },
      backgroundImage: {
        'custom-radial': 'radial-gradient(circle at 25%, #818cf8, #581c87)',
      },
      height: {
        rem: '25rem',
        rem2: '28rem',
      },
      boxShadow: {
        foto: '0px 35px 80px rgba(0, 0, 0, 0.15)',
      },
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
        auto: 'repeat(auto-fill, 256px)',
      },
      colors: {
        primary: {
          dark: '#212429',
          dark2: '#1F2227',
          darkLine: '#1D2025',
          darkContent: '#22252A',
        },
        second: {
          redcolor1: '#E80D54',
          redcolor2: '#D9124F',
          redDarkColor: '#621732',
        },
        textColor: {
          lightColor1: '#F7F9FA',
          lightColor2: '#C2CBDC',
          lightColor3: '##BAC2CC',
        },
      },
    },
  },
  plugins: [],
}
export default config
