module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)', ...require('tailwindcss/defaultTheme').fontFamily.sans],
        // You can add more custom font families here
        // mono: ['var(--font-mono)', ...require('tailwindcss/defaultTheme').fontFamily.mono],
      },
    },
  },
  plugins: [],
};