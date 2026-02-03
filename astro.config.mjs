// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  image: {
    service: { entrypoint: 'astro/assets/services/compile' }
  },
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
});