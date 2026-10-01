/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#030712', // Deep space noir
          900: '#060d1b',
          850: '#0b1326',
          800: '#101c36',
          750: '#152445',
          700: '#1b2d55',
          600: '#253d70',
        },
        brand: {
          cyan: '#00f0ff',
          teal: '#14b8a6',
          blue: '#3b82f6',
          indigo: '#6366f1',
          purple: '#8b5cf6',
          fuchsia: '#d946ef',
          pink: '#ec4899',
          emerald: '#10b981',
          amber: '#f59e0b'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'gradient-x': 'gradient-x 8s ease infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s infinite',
        'border-beam': 'border-beam 4s linear infinite',
        'spin-slow': 'spin 10s linear infinite',
        'card-enter': 'cardEnter 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 16px rgba(0,240,255,0.4))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 30px rgba(139,92,246,0.7))' },
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        'border-beam': {
          '0%': { 'offset-distance': '0%' },
          '100%': { 'offset-distance': '100%' },
        },
        'cardEnter': {
          '0%': { opacity: '0', transform: 'translateY(16px) scale(0.96)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        }
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -4px rgba(0, 240, 255, 0.45)',
        'glow-purple': '0 0 30px -4px rgba(139, 92, 246, 0.45)',
        'glow-fuchsia': '0 0 30px -4px rgba(217, 70, 239, 0.4)',
        'glow-emerald': '0 0 25px -4px rgba(16, 185, 129, 0.4)',
        'glass-hover': '0 16px 40px -10px rgba(0, 240, 255, 0.25), 0 0 0 1px rgba(0, 240, 255, 0.35)',
      }
    },
  },
  plugins: [],
}
