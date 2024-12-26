/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/assets/images/R-C.jpg')",
      },
      colors: {
        // Using legacy `rgba`
        trt: 'rgba(var(--trans-bg-color), 0.7)',

        redp: '#ffffff80',
      },
      boxShadow: {
        full: '19 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
    },
    fontSize: {
      min: '0.8rem',
    },
  },
  plugins: [],
}

