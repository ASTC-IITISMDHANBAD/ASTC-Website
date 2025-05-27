/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        space: {
          dark: '#0B1026',
          primary: '#1E3A8A',
          secondary: '#4A148C',
          accent: '#00BCD4',
          light: '#E0F7FA',
          success: '#00C853',
          warning: '#FFD600',
          error: '#D50000',
        },
        // Planet & Sun Colors
        'blue-500': '#3B82F6',
        'purple-600': '#9333EA',
        'blue-300': '#93C5FD',
        'yellow-400': '#FACC15',
        'orange-500': '#F97316',
        'red-500': '#EF4444',
        'gray-400': '#9CA3AF',
        'green': '#22C55E',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'sun': '0 0 15px 4px rgba(255, 220, 100, 0.5)', // For suns if needed (applied via className)
      },
      animation: {
        'float': 'float 6s ease-in-out infinite', // Kept if used elsewhere
        'twinkle': 'twinkle 4s ease-in-out infinite', // Kept if used elsewhere
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite', // For loader text
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        pulse: {
          '50%': { opacity: '.5' },
        },
      },
    },
  },
  plugins: [],
};