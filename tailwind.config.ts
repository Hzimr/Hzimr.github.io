import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*tsx'],
  theme: {
    extend: {
      height: {
        rem: '25rem',
        rem2: '28rem',
      },
      boxShadow: {
        foto: '0px 35px 80px rgba(0, 0, 0, 0.15)',
      },
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
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
