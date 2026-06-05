/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // Primary institutional palette
        'forest-green': {
          DEFAULT: '#0D4428',
          50: '#E8F1EC',
          100: '#C8DDD1',
          200: '#94BBA3',
          300: '#5E9476',
          400: '#2F6B4B',
          500: '#0D4428',
          600: '#0B3A22',
          700: '#08301C',
          800: '#062315',
          900: '#03160D',
        },
        'gold-accent': {
          DEFAULT: '#D4AF37',
          50: '#FBF7EA',
          100: '#F5EBC6',
          200: '#EBD78D',
          300: '#E1C254',
          400: '#D4AF37',
          500: '#B6942A',
          600: '#917420',
          700: '#6C5618',
          800: '#473910',
          900: '#231C08',
        },
        'off-white': '#F8F9FA',
        'slate-gray': '#334155',
      },
      fontFamily: {
        // Authoritative serif for headings (full Cyrillic support),
        // clean sans-serif for body copy.
        serif: ['Lora', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontWeight: {
        // Numeric aliases used throughout the components (font-400 … font-700)
        400: '400',
        500: '500',
        600: '600',
        700: '700',
      },
      maxWidth: {
        content: '1200px',
      },
      boxShadow: {
        card: '0 4px 24px -8px rgba(13, 68, 40, 0.16)',
        'card-hover': '0 18px 48px -12px rgba(13, 68, 40, 0.28)',
        nav: '0 2px 16px -6px rgba(13, 68, 40, 0.18)',
      },
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(135deg, #03160D 0%, #08301C 45%, #0D4428 100%)',
        'gold-gradient': 'linear-gradient(135deg, #E1C254 0%, #D4AF37 50%, #B6942A 100%)',
      },
      letterSpacing: {
        institutional: '0.18em',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 0.9s ease both',
      },
    },
  },
  plugins: [],
};
