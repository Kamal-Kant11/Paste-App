/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // your source files to scan for classes
  ],
  theme: {
    extend: {
      screens: {
        xs: "400px",  // custom breakpoint at 400px
      },
    },
  },
  plugins: [],
};
