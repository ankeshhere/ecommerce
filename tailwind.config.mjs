/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"#2a4c09",
        secondary:"#417f06",
        link:"#c7e6ce"
      },
      fontFamily: {
        'heading': ['"Nunito Sans"', 'sans-serif']
      },
    },
  },
  plugins: [],
};
