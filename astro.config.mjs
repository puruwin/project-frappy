import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import fs from "node:fs";
import path from "node:path";
import { defineConfig } from "astro/config";

// Hook para consolidar sitemap después del build
const consolidateSitemap = {
  name: 'consolidate-sitemap',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      // Usar un pequeño delay para asegurar que sitemap termine de escribir
      await new Promise(resolve => setTimeout(resolve, 100));

      const distPath = dir.pathname;
      const sitemap0Path = path.join(distPath, 'sitemap-0.xml');
      const sitemapIndexPath = path.join(distPath, 'sitemap-index.xml');
      const sitemapPath = path.join(distPath, 'sitemap.xml');

      try {
        // Si existe sitemap-0.xml, renombrarlo a sitemap.xml
        if (fs.existsSync(sitemap0Path)) {
          fs.copyFileSync(sitemap0Path, sitemapPath);
          fs.unlinkSync(sitemap0Path);
          console.log('✅ Sitemap consolidado: sitemap.xml');
        }

        // Eliminar sitemap-index.xml si existe
        if (fs.existsSync(sitemapIndexPath)) {
          fs.unlinkSync(sitemapIndexPath);
          console.log('✅ Eliminado sitemap-index.xml redundante');
        }
      } catch (error) {
        console.error('❌ Error consolidando sitemap:', error);
      }
    }
  }
};

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
        return !['/card', '/linktree', '/portfolio', '/privacidad'].includes(normalized);
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
          '/blog': 'src/pages/blog/index.astro',
          '/contacto': 'src/pages/contacto.astro',
          '/blog/posts/cuanto-cuesta-web-2025': 'src/pages/blog/posts/cuanto-cuesta-web-2025.md',
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
          '/blog': { changefreq: 'weekly', priority: 0.8 },
          '/contacto': { changefreq: 'monthly', priority: 0.6 },
          '/blog/posts/cuanto-cuesta-web-2025': { changefreq: 'monthly', priority: 0.7 },
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
    consolidateSitemap,
  ],
});
