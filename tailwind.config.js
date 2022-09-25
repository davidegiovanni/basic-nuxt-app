module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    fontFamily: {
      'sans': ['Times New Roman', 'serif']
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
