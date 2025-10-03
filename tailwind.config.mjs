/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue,md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#AFFF00',
        secondary: '#111111',
        darkgray: '#1A1A1A',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
