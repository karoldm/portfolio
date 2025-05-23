// @ts-check
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  site: "https://karoldm.github.io",
  base: "/portfolio",
  output: "static",
  assets: {
    version: true,
  },
});
