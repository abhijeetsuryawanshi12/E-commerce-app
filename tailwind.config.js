/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#FF6B6B',     // Coral Red
          light: '#FF8787',
          dark: '#FA5252',
        },
        secondary: {
          main: '#4ECDC4',     // Turquoise
          light: '#6BE4DC',
          dark: '#36B5AC',
        },
        accent: {
          main: '#FFE66D',     // Sunny Yellow
          light: '#FFF3A3',
          dark: '#FFD93D',
        },
        background: {
          main: '#F7F0FF',     // Light Lavender
          card: '#FFFFFF',
          dark: '#2C2C54',     // Deep Purple
        },
        success: {
          main: '#95E1D3',     // Mint Green
          light: '#A8E6DB',
          dark: '#7DCFBF',
        },
        error: {
          main: '#FF7675',     // Soft Red
          light: '#FF9B9B',
          dark: '#FF5252',
        },
      },
    },
  },
  plugins: [],
}; 