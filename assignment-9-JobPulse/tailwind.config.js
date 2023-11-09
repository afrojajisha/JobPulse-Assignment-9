/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'none': 'none', // Set a custom class for unlimited width if needed
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/bg1.png')",
      },
    },
  },
  plugins: [],
}

