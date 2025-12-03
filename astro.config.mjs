// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@styles': '/src/styles',
        '@components': '/src/components',
        '@utils': '/src/utils',
      }
    }
  },
  integrations: [react()]
});