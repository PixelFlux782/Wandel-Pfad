import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './lib/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#F6F2EB',
        surface: '#FFFFFF',
        border: '#E8E1D8',
        text: '#1F1C18',
        muted: '#7B746D',
        accent: '#886F58',
        accentSoft: '#D9CBBF'
      },
      boxShadow: {
        soft: '0 24px 80px rgba(31, 25, 18, 0.08)'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif']
      },
      backgroundImage: {
        'soft-gradient': 'radial-gradient(circle at top, rgba(232, 220, 204, 0.25), transparent 40%)'
      }
    }
  },
  plugins: []
};

export default config;
