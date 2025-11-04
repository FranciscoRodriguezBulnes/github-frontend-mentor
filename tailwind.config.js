/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // 👈 esto es lo que Tailwind necesita para reaccionar a document.documentElement.classList.add('dark')
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
