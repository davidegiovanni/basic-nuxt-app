module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    fontFamily: {
      'sans': ['bookmania', 'serif'],
      'display': ['fino', 'serif']
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
