import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Custom Gold & Green Theme
        gold: {
          50: '#FFF9E6',
          100: '#FFF0C2',
          200: '#FFE699',
          300: '#FFD966',
          400: '#E6C84D',
          500: '#D4AF37',
          600: '#C5A046',
          700: '#A68535',
          800: '#876A24',
          900: '#6B5418',
        },
        'italian-green': {
          50: '#E6F5EE',
          100: '#B3E5D1',
          200: '#80D4B3',
          300: '#4DC396',
          400: '#26B67E',
          500: '#009246',
          600: '#00843D',
          700: '#007033',
          800: '#005C29',
          900: '#003D1C',
        },
        'dark-green': {
          50: '#E6F0ED',
          100: '#B3D4C7',
          200: '#80B8A1',
          300: '#4D9C7B',
          400: '#268763',
          500: '#003D2E',
          600: '#003729',
          700: '#002F22',
          800: '#00261B',
          900: '#001912',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
