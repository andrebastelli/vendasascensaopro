/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#faf9f7",
        ink: "#1c1c1c",
        gold: "#b8972f",
        "gold-soft": "#d4b04a",
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        elegant: "0 30px 60px -30px rgba(28,28,28,0.30), 0 10px 30px -15px rgba(184,151,47,0.25)",
        soft: "0 8px 24px -12px rgba(28,28,28,0.18)",
      },
      backgroundImage: {
        "gradient-gold": "linear-gradient(135deg, #b8972f 0%, #d4b04a 100%)",
      },
    },
  },
  plugins: [],
};
