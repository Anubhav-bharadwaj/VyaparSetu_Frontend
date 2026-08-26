/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          900: '#0B4632',
          600: '#0F7B54',
          100: '#DCEFE3',
        },
        navy: {
          900: '#0E2B40',
          600: '#17496B',
        },
        beige: {
          50: '#FAF6EC',
          200: '#EFE4CC',
        },
        harvest: {
          500: '#C8862E',
        },
        ink: {
          900: '#1B2420',
          500: '#5B655F',
        },
        success: '#0F7B54',
        danger: '#B3432B',
      },
      fontFamily: {
        fraunces: ['Fraunces', 'serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      boxShadow: {
        'warm': '0 4px 20px -4px rgba(15, 70, 50, 0.12)',
      },
      borderRadius: {
        '2xl': '16px',
        'xl': '12px',
      }
    },
  },
  plugins: [],
}
