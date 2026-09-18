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
    process.env.NODE_ENV === 'development' ? keystatic() : null
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