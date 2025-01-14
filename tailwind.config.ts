module.exports = {
  darkMode: 'class', // Use class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'light-gradient': 'linear-gradient(30deg, #e6d5f7, #d0e8f2, #ffd1dc)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Use the required plugin
  ],
};
