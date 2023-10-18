/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        'custom-blue-button': '#3FBAC2',
        'custom-white-text': '#F5F5F5',
        'custom-blue-hover': '#0b8185',
        'custom-blue-hover-text':'#1bb0ce',
      },
    },
  },
  plugins: [],
}

