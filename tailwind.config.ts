/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        heading: 'var(--font-heading)',
        body: 'var(--font-body)',
      },
      colors: {
        hero: '#F4F1EE', // soft parchment background
        forest: '#264027', // dark evergreen
        trail: '#BFA873', // classic camp khaki
        moss: '#6C7A50', // muted green
        pine: '#3D5B3B', // deeper woodsy green
        ember: '#D96C3F', // warm orange accent
        bark: '#5A4634', // grounding dark brown
      },
    },
  },
  plugins: [],
}
