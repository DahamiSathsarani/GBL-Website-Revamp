module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        poppins: ['Poppins', 'sans-serif'],      
      },
      backgroundImage: theme => ({
        'success-stories': "url('./assets/images/Background Picture.jpg')",
      }),
      textShadow: {
        'outline': '0 0 2px white',
      },
    },
  },
  plugins: [require('tailwindcss-textshadow')],
};
