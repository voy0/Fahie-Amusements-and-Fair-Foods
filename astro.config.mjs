import { defineConfig } from "astro/config";
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

export default defineConfig({
  site: 'https://fahieamusements.com', // Updated to your new custom domain!
  output: 'static',
  
  env: {
    schema: {},
  },

  // Include Keystatic unconditionally so it deploys to production
  integrations: [react(), keystatic()],

  vite: {
    server: {
      fs: {
        allow: ['..']
      }
    },
    // Fixes the blank white screen / lodash hydration error
    optimizeDeps: {
      include: ['lodash/debounce']
    }
  }
});