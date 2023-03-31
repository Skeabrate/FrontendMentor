/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundImage: {
        'sunnyside-hero-desktop': "url('/sunnyside-agency/desktop/image-header.jpg')",
        'sunnyside-hero-mobile': "url('/sunnyside-agency/mobile/image-header.jpg')",
        'sunnyside-graphic-design-desktop':
          "url('/sunnyside-agency/desktop/image-graphic-design.jpg')",
        'sunnyside-graphic-design-mobile':
          "url('/sunnyside-agency/mobile/image-graphic-design.jpg')",
        'sunnyside-photography-desktop': "url('/sunnyside-agency/desktop/image-photography.jpg')",
        'sunnyside-photography-mobile': "url('/sunnyside-agency/mobile/image-photography.jpg')",
      },
    },
  },
  plugins: [],
};
