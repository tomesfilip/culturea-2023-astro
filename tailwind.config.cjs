/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: { flushOrange: '#FF8400', lightOrange: '#F9BA7E' },
      fontFamily: {
        body: ['GalanoGrotesqueRegular'],
        headline: ['GalanoGrotesqueBold'],
      },
    },
  },
  plugins: [],
};
