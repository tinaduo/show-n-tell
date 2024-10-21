/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        shadow: "var(--shadow)",
      },
      fontFamily: {
        rebond: ['ES_Rebond_Grotesque_TRIAL-Semibold', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
