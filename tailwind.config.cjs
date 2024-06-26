/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      fontSize: {
        'clamp': ['clamp(30px, 5vw, 80px)']
      },
      spacing: {
        'clamp': 'clamp(20px, 10vw,450px)'
      },
      boxShadow: {
        'custom': '3px 3px 5px rgba(0, 0, 0, 0.2)',
      },
      fontFamily: {
        'genos': ['Genos', 'sans-serif'],
        'gruppo': ['gruppo', 'sans-serif'],
        'Lora': ['Lora', 'sans-serif'],
      },
      animation: {
        shine: "shine 1s",
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
      },
      
    },
  },
  plugins: [],
  
}


