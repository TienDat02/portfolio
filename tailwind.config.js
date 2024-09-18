/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container:{
      center: true,
      padding: "1px",
    },
    screens:{
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-robotoSlab)",
    },
  	extend: {
      colors: {
        primary: "#010203",
        accent:  "#04D9FF",
        card: "#282828"
      }

  	}
  },
  plugins: [require("tailwindcss-animate")],
};
