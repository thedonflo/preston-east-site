/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: '#0E0E0E',
        fg: '#E8E8E8',
        muted: '#888888',
        lime: '#C5F82A',
        card: '#171717',
        border: '#262626',
      },
      fontFamily: {
        serif: ['Lora', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        label: '0.2em',
      },
    },
  },
  plugins: [],
};
