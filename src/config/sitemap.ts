// Configuración del sitemap para SEO
export const sitemapConfig = {
  // URLs principales con máxima prioridad
  highPriority: [
    {
      url: "https://creativefrappe.com/diseno-web-benidorm",
      lastmod: "2025-01-15",
      changefreq: "weekly",
      priority: "1.0"
    },
    {
      url: "https://creativefrappe.com/servicios-web-digitales", 
      lastmod: "2025-01-15",
      changefreq: "weekly",
      priority: "1.0"
    }
  ],
  
  // URLs secundarias
  mediumPriority: [
    {
      url: "https://creativefrappe.com/desarrollo-web-benidorm",
      lastmod: "2025-01-15", 
      changefreq: "monthly",
      priority: "0.7"
    },
    {
      url: "https://creativefrappe.com/desarrollo-web",
      lastmod: "2025-01-15",
      changefreq: "monthly", 
      priority: "0.6"
    },
    {
      url: "https://creativefrappe.com/portfolio",
      lastmod: "2025-01-15",
      changefreq: "monthly",
      priority: "0.7"
    }
  ],
  
  // URLs de contenido
  contentPages: [
    {
      url: "https://creativefrappe.com/detras-de-frappe",
      lastmod: "2025-01-15",
      changefreq: "monthly",
      priority: "0.5"
    },
    {
      url: "https://creativefrappe.com/blog",
      lastmod: "2025-01-15",
      changefreq: "weekly",
      priority: "0.6"
    }
  ],
  
  // URLs legales (baja prioridad)
  legalPages: [
    {
      url: "https://creativefrappe.com/privacidad",
      lastmod: "2025-01-15",
      changefreq: "yearly",
      priority: "0.3"
    }
  ],
  
  // URLs bloqueadas (no incluir en sitemap)
  blockedPages: [
    "/linktree",
    "/card"
  ]
};

// Función para generar sitemap completo
export const generateSitemap = () => {
  const allUrls = [
    ...sitemapConfig.highPriority,
    ...sitemapConfig.mediumPriority, 
    ...sitemapConfig.contentPages,
    ...sitemapConfig.legalPages
  ];
  
  return allUrls;
};
