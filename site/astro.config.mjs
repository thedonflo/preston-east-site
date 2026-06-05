import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  site: 'https://prestoneastsolutions.com',
  output: 'hybrid',
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  integrations: [tailwind()],
  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 500,
      },
    },
  },
});
