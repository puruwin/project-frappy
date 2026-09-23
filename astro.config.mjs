import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import { copyFile, unlink } from "node:fs/promises";

// Keep the established public sitemap URL without a timed build hook.
const publicSitemap = {
  name: "public-sitemap",
  hooks: {
    "astro:build:done": async ({ dir }) => {
      await copyFile(
        new URL("sitemap-0.xml", dir),
        new URL("sitemap.xml", dir),
      );
      await unlink(new URL("sitemap-0.xml", dir));
      await unlink(new URL("sitemap-index.xml", dir));
    },
  },
};
export default defineConfig({
  site: "https://creativefrappe.com",
  output: "static",
  // Hostinger serves the generated directory routes with a trailing slash.
  // Generate matching routes, canonicals and sitemap entries.
  trailingSlash: "always",
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      filter: (url) =>
        !["/privacidad", "/card", "/linktree", "/404"].includes(
          new URL(url).pathname.replace(/\/$/, ""),
        ),
    }),
    publicSitemap,
  ],
});
