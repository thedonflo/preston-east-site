import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  site: 'https://prestoneastsolutions.com',
  output: 'hybrid',
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  integrations: [tailwind(), sitemap()],
  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 500,
      },
    },
  },
});
