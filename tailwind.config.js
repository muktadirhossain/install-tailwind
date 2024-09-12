/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        primary: "#009A74",
        secondary: '#FFC107',
        danger: '#E91E63',
        success: '#4CAF50',
        warning: '#FF9800',
        info: '#2196F3',
        light: '#F5F5F5',
        dark: '#333',
      },
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
      },

      animation: {
        'bounce-slow': 'bounce 2s infinite',
      },
      backgroundImage: {
        'hero-bg': "url('../img/hero-bg.png')",
        
      }

    },
  },
  plugins: [],
}

