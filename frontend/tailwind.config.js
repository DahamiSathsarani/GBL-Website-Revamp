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
        'sub-services': "url('./assets/images/Service1Background.jpg')",
        'sub-service-card': "url('./assets/images/Sub Services Card Shape.png')",
        'sub-service-card-hover': "url('./assets/images/Sub Services Card Hover Shape.png')"
      }),
      textShadow: {
        'outline': '0 0 2px white',
      },
      screens: {
        'xs': {'max': '350px'},
      },
    },
  },
  plugins: [require('tailwindcss-textshadow')],
};
