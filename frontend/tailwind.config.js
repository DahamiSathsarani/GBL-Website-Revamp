module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], 
      },
      backgroundImage: theme => ({
        'success-stories': "url('./assets/images/Background Picture.jpg')",
      }),
    },
  },
  plugins: [],
};
