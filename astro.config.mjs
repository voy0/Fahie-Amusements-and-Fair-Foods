import { defineConfig } from "astro/config";
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

export default defineConfig({
  site: 'https://fahieamusements.com',
  output: 'static',
  
  env: {
    schema: {},
  },

  // FIX: Only load Keystatic in development mode
  integrations: [
    react(), 
    keystatic() // Always run the integration so the dashboard builds
  ],

  vite: {
    server: {
      fs: {
        allow: ['..']
      }
    },
    optimizeDeps: {
      include: ['lodash/debounce']
    }
  }
});