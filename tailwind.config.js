/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./Index.tsx",
    "./components/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
    "./utils/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // Ensure compatibility
  corePlugins: {
    preflight: true,
  },
}
