/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      scrollBehavior: ["smooth"],
      colors: {
        secondary: "rgb(254 215 170)",
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        h1: {
          fontSize: theme("fontSize.7xl"),
          lineHeight: theme("lineHeight.none"),
        },
        h2: { fontSize: theme("fontSize.3xl") },
        h3: { fontSize: theme("fontSize.2xl") },
        h4: { fontSize: theme("fontSize.xl") },
        h5: { fontSize: theme("fontSize.lg") },
        h6: { fontSize: theme("fontSize.base") },
        strong: {
          fontWeight: theme("fontWeight.bold"),
          color: theme("colors.white"),
          textDecoration: "underline",
          textDecorationColor: theme("colors.sky.500"),
          textDecorationThickness: "2px",
        },
      });
    },
  ],
};
