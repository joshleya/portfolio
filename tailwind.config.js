/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          dark: '#050505',
          elevated: '#0A0A0C',
        },
        surface: {
          DEFAULT: '#0F0F12',
          card: '#141418',
          border: 'rgba(255, 255, 255, 0.08)',
          hover: 'rgba(255, 255, 255, 0.04)',
        },
        text: {
          primary: '#F5F5F5',
          secondary: '#B8B8B8',
          muted: '#6E6E73',
        },
        accent: {
          gold: '#D4AF37',
          goldSoft: '#C5A880',
          blue: '#38BDF8',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Satoshi', 'system-ui', 'sans-serif'],
        display: ['Syne', 'Clash Display', 'General Sans', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
