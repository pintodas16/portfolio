/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // custom: ['"Montserrat Alternates"', '"sans-serif"'],
        custom: `"Montserrat Alternates", sans-serif`,
      },
      fontWeight: {
        "extra-light": 200,
        bold: 700,
        medium: 500,
        normal: 400,
      },

      animation: {
        text: "text 5s ease infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [],
};
