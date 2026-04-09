import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Set your production URL before deploy (used for canonicals, sitemap, RSS).
export default defineConfig({
  site: "https://amarafilmco.com",
  trailingSlash: "always",
  integrations: [sitemap()],
});
