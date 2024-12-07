// Use `import` instead of `require`
import plugin from 'tailwindcss/plugin';
import typography from '@tailwindcss/typography';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [typography], // Use the imported plugin
};
