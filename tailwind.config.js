/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      secondaryColor: '#E4C59E',
      white: '#fff',
      buttonBackground: '#322C2B'
    },
    extend: {
      backgroundColor:{
        'bgColor': '#803D3B',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'gara': ['Garamond', 'serif'],
      },
    },
  },
  plugins: [],
};
