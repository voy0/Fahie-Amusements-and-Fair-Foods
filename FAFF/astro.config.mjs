import { defineConfig } from "astro/config";
import react from '@astrojs/react';

const integrations = [react()];

if (process.env.NODE_ENV !== 'production') {
  const { default: keystatic } = await import('@keystatic/astro');
  integrations.push(keystatic());
}

export default defineConfig({
  site: 'https://voy0.github.io',
  base: '/Fahie-Amusements-and-Fair-Foods',
  output: 'static',
  
  env: {
    schema: {},
  },

  integrations,

  vite: {
    // REMOVED the ssr: external block so Astro can do its job!
    server: {
      fs: {
        allow: ['..']
      }
    }
  }
});