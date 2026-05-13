/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F5F1E8',
        cream: '#EDE6D3',
        ink: '#1A1A17',
        ash: '#3A3A35',
        clay: '#A89684',
        ochre: '#B8704A',
        rust: '#8B3A1F',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Geist', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display': ['clamp(3.5rem, 12vw, 11rem)', { lineHeight: '0.92', letterSpacing: '-0.04em' }],
        'headline': ['clamp(2rem, 5vw, 3.75rem)', { lineHeight: '1.0', letterSpacing: '-0.03em' }],
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
