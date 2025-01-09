/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#111111",
        colorText: "#ffffff",
        colorWord: "#daa520",
        secandaryColor: "#222222",
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"], // Add Lato font family here
      },
      fontSize: {
        Paragraf: "25px",
        Heading: "45px",
      },
    },
  },
  plugins: [],
};
