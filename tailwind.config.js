/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',

  content: ["./index.html", "./src/**/*.{js,jsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#1A73E8",     // main brand color
        secondary: "#333333",  // dark gray

        lightBg: "#1A73E8",
        lightText: "#ffffff",

        darkBg: "#1558b0",
        darkText: "#ffffff",
      },

      spacing: {
        72: "18rem",
      },

      fontFamily: {
        gabriola: ["Gabriola", "serif"],
      },

      /* ✅ Gradient Animation */
      animation: {
        gradient: "gradient 8s ease infinite",
      },

      keyframes: {
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },

  plugins: [
    // ✅ Custom Responsive Grid Utility
    function ({ addUtilities }) {
      const newUtilities = {
        ".grid-responsive": {
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: "1.5rem",
        },
        "@media (max-width: 768px)": {
          ".grid-responsive": {
            gridTemplateColumns: "1fr",
          },
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
