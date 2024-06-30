/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Adiciona a fonte 'Inter'
        spaceGrotesk: ['Space Grotesk', 'sans-serif'], // Adiciona a fonte 'Space Grotesk'
      },
      fontSize: {
        'xs-placeholder': '0.75rem', // Ajuste este valor conforme necessário
        'lg-placeholder': '1.125rem',
      },
    },
  },
  plugins: [],
}

