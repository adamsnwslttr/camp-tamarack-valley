import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif']
      },
      colors: {
        primary: '#2C6E49',
        accent: '#FFCB77',
        background: '#FDFDFD',
        text: '#1E1E1E',
        darkbg: '#1C1C1E',
        lighttext: '#EAEAEA'
      }
    }
  },
  plugins: []
};

export default config;
