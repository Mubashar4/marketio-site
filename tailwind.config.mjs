/** @type {import('tailwindcss').Config} */
// Brand token contract — specs/brand.md. These four hues are the entire palette.
// Adding any hue requires an ADR in .harness/memory/DECISIONS.md first.
export default {
  content: ['./src/**/*.{astro,html,js}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#0B0B0B', // page background
        black: '#141414', // surfaces/cards
        white: '#FAFAFA', // primary typography
        orange: { DEFAULT: '#FF5500' }, // sole accent: CTAs, highlights
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
