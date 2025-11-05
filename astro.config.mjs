import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import fs from "node:fs";
import path from "node:path";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: 'https://creativefrappe.com',
  trailingSlash: 'never',
  integrations: [
    tailwind(),
    icon(),
    sitemap({
      filter: (entry) => {
        let pathname = '';
        try {
          pathname = entry.startsWith('http') ? new URL(entry).pathname : entry;
        } catch {
          pathname = entry;
        }
        const normalized = pathname.replace(/\/$/, '');
        return !['/card', '/linktree', '/blog', '/portfolio', '/privacidad'].includes(normalized);
      },
      serialize: (item) => {
        const url = typeof item === 'string' ? item : item.url;
        let pathname = '';
        try {
          pathname = url.startsWith('http') ? new URL(url).pathname : url;
        } catch {
          pathname = url;
        }
        const p = pathname.replace(/\/$/, '');

        // Mapear rutas a archivos fuente para obtener mtime real
        const routeToFile = {
          '/': 'src/pages/index.astro',
          '/desarrollo-web': 'src/pages/desarrollo-web.astro',
          '/desarrollo-web-benidorm': 'src/pages/desarrollo-web-benidorm.astro',
          '/desarrollo-web-callosa-den-sarria': 'src/pages/desarrollo-web-callosa-den-sarria.astro',
          '/detras-de-frappe': 'src/pages/detras-de-frappe.astro',
          '/diseno-web-benidorm': 'src/pages/diseno-web-benidorm.astro',
          '/servicios-web-digitales': 'src/pages/servicios-web-digitales.astro',
        };

        const filePath = routeToFile[p] ? path.resolve(process.cwd(), routeToFile[p]) : null;
        let lastmod = new Date().toISOString();
        if (filePath) {
          try {
            const stat = fs.statSync(filePath);
            lastmod = stat.mtime.toISOString();
          } catch {
            // fallback al timestamp de build ya establecido
          }
        }
        const map = {
          '/': { changefreq: 'monthly', priority: 0.8 },
          '/diseno-web-benidorm': { changefreq: 'weekly', priority: 1.0 },
          '/servicios-web-digitales': { changefreq: 'weekly', priority: 1.0 },
          '/desarrollo-web-benidorm': { changefreq: 'monthly', priority: 0.7 },
          '/desarrollo-web-callosa-den-sarria': { changefreq: 'monthly', priority: 0.7 },
          '/detras-de-frappe': { changefreq: 'monthly', priority: 0.5 },
        };
        const meta = map[p] ?? { changefreq: 'monthly', priority: 0.5 };
        return {
          url,
          lastmod,
          changefreq: meta.changefreq,
          priority: meta.priority,
        };
      },
    }),
  ],
});
