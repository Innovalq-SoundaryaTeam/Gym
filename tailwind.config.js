/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './**/*.html',
    '!./node_modules/**',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f4f6f8',
          100: '#e6eaee',
          200: '#c9d1d9',
          300: '#9fadbb',
          400: '#6d7c8d',
          500: '#4d5b6b',
          600: '#3a4553',
          700: '#2c343f',
          800: '#1c2128',
          850: '#151a20',
          900: '#101418',
          950: '#0a0d10',
        },
        volt: {
          50: '#f7ffe0',
          100: '#edffb3',
          200: '#e0ff80',
          300: '#d2ff4d',
          400: '#c8ff26',
          500: '#c4ff1e',
          600: '#a3d919',
          700: '#7cad12',
          800: '#57810c',
          900: '#375406',
        },
        coral: {
          400: '#ff7a59',
          500: '#ff5a36',
          600: '#e8431f',
        },
        azure: {
          400: '#5bc6ff',
          500: '#2fb0ff',
          600: '#128fe0',
        },
      },
      fontFamily: {
        display: ['"Sora"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(196,255,30,0.15), 0 8px 30px -8px rgba(196,255,30,0.35)',
        card: '0 1px 2px rgba(16,20,24,0.04), 0 8px 24px -8px rgba(16,20,24,0.08)',
        'card-dark': '0 1px 2px rgba(0,0,0,0.3), 0 8px 30px -8px rgba(0,0,0,0.6)',
      },
      backgroundImage: {
        'dot-grid': 'radial-gradient(currentColor 1px, transparent 1px)',
        'grid-fade': 'linear-gradient(to bottom, transparent, var(--tw-gradient-stops))',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      keyframes: {
        floaty: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        floaty: 'floaty 4s ease-in-out infinite',
        marquee: 'marquee 22s linear infinite',
      },
    },
  },
  plugins: [],
};
