import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  experimental: {
    fonts: [
      {
        name: "Comfortaa",
        cssVariable: "--comfortaa",
        provider: fontProviders.google(),
        // weights: [300, 400, 700],
        // styles: ["normal"],
      },
      {
        name: "Coiny",
        cssVariable: "--coiny",
        provider: fontProviders.google(),
        // weights: [500],
        // styles: ["italic"],
      },
    ],
  },
});
