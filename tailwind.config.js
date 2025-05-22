/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#f0f7f0',
          100: '#dceddc',
          200: '#b9dbb9',
          300: '#8bc48b',
          400: '#66bb6a',
          500: '#4caf50',
          600: '#3d8b40',
          700: '#2e7d32',
          800: '#276d29',
          900: '#1b4d1b',
        },
      },
    },
  },
  plugins: [],
}; 