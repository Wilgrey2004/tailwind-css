/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "azul-oscuro": "#01204E",
        "azul-claro": "#615EFC",
      },
    
      spacing: {
        '42': "170px",
      },
    },
  },
  plugins: [],
};
