import { defineConfig } from "astro/config";
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

export default defineConfig({
  output: 'static',
  
  env: {
    schema: {},
  },

  integrations: [
    react(), 
    keystatic()
  ],

  vite: {
    // REMOVED the ssr: external block so Astro can do its job!
    server: {
      fs: {
        allow: ['..']
      }
    }
  }
});