/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#faf7f2',
        sand: '#efe9e1',
        ink: '#1c1917',
        wine: {
          DEFAULT: '#7b2d3b',
          dark: '#5e2230',
          light: '#f6e9eb',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
