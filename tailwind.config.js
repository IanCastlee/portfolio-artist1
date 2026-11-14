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
        canvas: {
          DEFAULT: '#0a0a0d',
          subtle: '#121217',
          surface: '#181820',
          elevated: '#21212c',
          border: '#2a2a38',
        },
        accent: {
          DEFAULT: '#ff4d2e', // kinetic vermilion
          hover: '#ff684d',
          glow: 'rgba(255, 77, 46, 0.25)',
          electric: '#d4ff3f', // neon cyber lime
          purple: '#9353d3',
        },
        ink: {
          primary: '#fbfbff',
          secondary: '#b3b3c2',
          muted: '#717182',
          faint: '#414152',
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        accent: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        'glow-accent': '0 0 30px -5px rgba(255, 77, 46, 0.35)',
        'glow-lime': '0 0 30px -5px rgba(212, 255, 63, 0.35)',
        'slam-hard': '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
};
