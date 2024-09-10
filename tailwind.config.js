/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors:{
        primary: {
          50: '#3490DC',
          100: '#2989CC',
          200: '#207CC9',
          300: '#1670B3',
          400: '#0D5CAF',
          500: '#004587',
        },
        secondary: '#FFC107',
        danger: '#E91E63',
        success: '#4CAF50',
        warning: '#FF9800',
        info: '#2196F3',
        light: '#F5F5F5',
        dark: '#333',
      },
      
    },
  },
  plugins: [],
}

