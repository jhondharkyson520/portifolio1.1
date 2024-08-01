/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        'custom-blue-button': '#6E6E6E',
        'custom-white-text': '#F5F5F5',
        'custom-blue-hover': '#3B3B3B',
        'custom-blue-hover-text':'#087BB9',
        'theme-dark-projects': '#3D3B4A',
        'theme-light-projects': '#fff',
        'theme-light-footer':'#252525',
        'theme-dark-footer':'#1D1B22',
       
      },
    },
  },
  plugins: [],
}

