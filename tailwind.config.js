/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    "bg-lime-500",
    "bg-purple-500",
    "bg-gray-500",
    "text-gray-400",
    "bg-blue-500",
    "bg-black",
  ],
};
