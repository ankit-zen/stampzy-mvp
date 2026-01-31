/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FAF6F3',
          100: '#F5EDE7',
          200: '#E8D5C7',
          300: '#DBBDA7',
          400: '#C18D67',
          500: '#8B5A3C',
          600: '#6B3410',
          700: '#5A2B0D',
          800: '#48220A',
          900: '#371A08',
        },
        accent: {
          50: '#FEF3ED',
          100: '#FCE7DB',
          200: '#F9CFB7',
          300: '#F5B793',
          400: '#EE874B',
          500: '#C85A17',
          600: '#A04812',
          700: '#78360E',
          800: '#50240A',
          900: '#281206',
        },
        background: {
          DEFAULT: '#F5F1ED',
          card: '#FFFFFF',
          secondary: '#FAF8F6',
        },
        text: {
          primary: '#2D2D2D',
          secondary: '#6B6B6B',
          tertiary: '#9B9B9B',
        },
        success: {
          DEFAULT: '#4A7C59',
          light: '#E8F5E9',
        },
        error: {
          DEFAULT: '#C84A17',
          light: '#FFEBEE',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 2px 8px rgba(107, 52, 16, 0.08)',
        'card-hover': '0 4px 16px rgba(107, 52, 16, 0.12)',
        'button': '0 2px 4px rgba(107, 52, 16, 0.1)',
        'button-hover': '0 4px 8px rgba(107, 52, 16, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'shimmer': 'shimmer 2s infinite',
        'ripple': 'ripple 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      transitionDuration: {
        '250': '250ms',
      },
    },
  },
  plugins: [],
}