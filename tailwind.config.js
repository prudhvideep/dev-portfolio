/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "9/10": "90%",
        "8/10": "80%",
      },
      transitionTimingFunction: {
        'bounce-pronounced': 'cubic-bezier(0.25, 0.1, 0.5, 3)',
      },
    },
  },
  plugins: [],
};