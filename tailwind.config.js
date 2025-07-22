/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./contexts/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik-Regular", "sans-serif"],
        "rubik-bold": ["Rubik-Bold", "sans-serif"],
        "rubik-extrabold": ["Rubik-ExtraBold", "sans-serif"],
        "rubik-medium": ["Rubik-Medium", "sans-serif"],
        "rubik-semibold": ["Rubik-SemiBold", "sans-serif"],
        "rubik-light": ["Rubik-Light", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#0061FF0A",
          200: "#0061FF1A",
          300: "#0061FF",
          400: "#4A90E2", // Lighter blue for dark mode
        },
        accent: {
          100: "#FBFBFD",
          200: "#F5F5F5", // Light gray for dark mode borders
        },
        black: {
          DEFAULT: "#000000",
          100: "#8C8E98",
          200: "#666876",
          300: "#191D31",
        },
        dark: {
          100: "#1A1A1A", // Main dark background
          200: "#2D2D2D", // Secondary dark background (cards, modals)
          300: "#404040", // Tertiary dark background (inputs, borders)
          400: "#525252", // Dark border color
          500: "#737373", // Dark text secondary
          600: "#A3A3A3", // Dark text muted
          700: "#D4D4D4", // Dark text primary
        },
        danger: "#f75555",
      },
    },
  },
  plugins: [],
};
