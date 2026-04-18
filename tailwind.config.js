/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
        playfair: ['"Playfair Display"', 'serif'],
        bebas: ['"Bebas Neue"', 'sans-serif'],
      },
      colors: {
        paper: '#f7f4ee',
        paper2: '#ede9e0',
        ink: '#0e0d0b',
        rule: '#c8c2b4',
        muted: '#8a8478',
        'mn-red': '#c0392b',
        'mn-green': '#00e5a0',
        'mn-green-text': '#1a6b45',
        'mn-green-bg': '#e8f4ee',
        border: '#d0c9bc',
        surface: '#ede9e1',
        surface2: '#e4dfd5',
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.3em',
      },
    },
  },
  plugins: [],
}
