/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#ffffff',
        accent: '#f5f5f5',
        'text-dark': '#000000',
        'text-light': '#ffffff',
        'glass-bg': 'rgba(255, 255, 255, 0.1)',
        'glass-border': 'rgba(255, 255, 255, 0.2)',
        'glass-shadow': 'rgba(0, 0, 0, 0.1)',
        'highlight': '#FFD700',
      },
      fontFamily: {
        tajawal: ['Tajawal', 'sans-serif'],
      },
      spacing: {
        'xs': '0.5rem',
        'sm': '1rem',
        'md': '2rem',
        'lg': '3rem',
        'xl': '5rem',
      },
      borderRadius: {
        'sm': '5px',
        'md': '10px',
        'lg': '20px',
      },
      transitionDuration: {
        'fast': '300ms',
        'medium': '500ms',
        'slow': '800ms',
      },
      transitionTimingFunction: {
        'ease': 'ease',
      },
      animation: {
        'rotate': 'rotate 20s linear infinite',
        'rotate-reverse': 'rotate 15s linear infinite reverse',
        'fade-in': 'fadeIn 1s ease forwards',
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
          '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' },
        },
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '10px',
        'lg': '16px',
      },
    },
  },
  plugins: [],
}
