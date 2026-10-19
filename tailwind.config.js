/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        silkscreen: ["Silkscreen", "cursive"],
        syncopate: ["Syncopate", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"],
        gravitor: ["Syncopate", "sans-serif"], // Alias for Gravitor DEMO using Syncopate as fallback
      },
    },
  },
  plugins: [],
};
