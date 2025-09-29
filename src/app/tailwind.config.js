/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          blueAccent: "#0F72BF",
          orangeAccent: "#E37D4A",
          black: "#000000",
          white: "#FFFFFF",
        },
      },
    },
    plugins: [],
  };
  