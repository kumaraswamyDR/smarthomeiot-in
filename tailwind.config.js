export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#00ADEF",   // main logo blue
          dark: "#002E46",      // dark teal background
          accent: "#7EE8FA",    // glow accent
          light: "#E6F9FF",     // subtle background
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 15px rgba(0, 173, 239, 0.3)",
      },
    },
  },
  plugins: [],
};
