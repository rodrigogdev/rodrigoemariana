/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'wedding-primary': {
          DEFAULT: '#08312f',
          50: '#f0f8f8',
          100: '#dbeeed',
          200: '#badddc',
          300: '#8bc5c3',
          400: '#56a5a2',
          500: '#3b8985',
          600: '#2f6f6c',
          700: '#285a58',
          800: '#244a48',
          900: '#08312f',
          950: '#051f1d',
        },
        'wedding-secondary': {
          DEFAULT: '#f8d68b',
          50: '#fefbf3',
          100: '#fef5e1',
          200: '#fce9c2',
          300: '#f8d68b',
          400: '#f5c96b',
          500: '#f1b73c',
          600: '#e29d20',
          700: '#bb7c18',
          800: '#976119',
          900: '#7a4f18',
          950: '#42290a',
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
