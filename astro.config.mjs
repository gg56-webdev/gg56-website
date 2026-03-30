// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://gg56.com",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [{
    provider: fontProviders.fontsource(),
    name: "Noto Sans KR",
    cssVariable: "--font-noto-sans-kr",
    weights: ["100 900"]
  }],
  integrations: [
    icon({
      iconDir: "src/assets/svgs",
    }),
  ],
});
