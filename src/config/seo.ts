// Configuración SEO centralizada para el sitio web
export const seoConfig = {
  site: {
    name: "Frappé",
    url: "https://creativefrappe.com",
    description: "Empresa de desarrollo web en Benidorm especializada en sitios web rápidos, seguros y optimizados para SEO.",
    keywords: "desarrollo web Benidorm, diseño web Benidorm, SEO local, Google Ads, páginas web profesionales",
    author: "David Pérez",
    email: "frappecreativity@gmail.com",
    phone: "+34608962213",
    address: {
      locality: "Benidorm",
      region: "Comunidad Valenciana", 
      country: "ES"
    }
  },
  
  social: {
    twitter: "https://twitter.com/frappe",
    linkedin: "https://linkedin.com/in/davidperez8619",
    github: "https://github.com/puruwin"
  },
  
  images: {
    default: "/og-image.jpg",
    logo: "/frappe_icon.svg",
    author: "/me.jpg"
  },
  
  // Configuración por defecto para meta tags
  defaultMeta: {
    robots: "index, follow",
    googlebot: "index, follow",
    author: "Frappé",
    themeColor: "#000000",
    formatDetection: "telephone=no"
  },
  
  // Open Graph por defecto
  defaultOG: {
    type: "website",
    locale: "es_ES",
    siteName: "Frappé"
  },
  
  // Twitter por defecto
  defaultTwitter: {
    card: "summary_large_image"
  }
};

// Función helper para generar meta tags
export const generateMetaTags = (page: {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  image?: string;
  noindex?: boolean;
}) => {
  const {
    title,
    description,
    keywords = seoConfig.site.keywords,
    canonical,
    image = seoConfig.images.default,
    noindex = false
  } = page;

  return {
    title,
    description,
    keywords,
    canonical: canonical || seoConfig.site.url,
    image,
    robots: noindex ? "noindex, nofollow" : seoConfig.defaultMeta.robots,
    googlebot: noindex ? "noindex, nofollow" : seoConfig.defaultMeta.googlebot
  };
};

// Schema markup helpers
export const generatePersonSchema = (person: {
  name: string;
  jobTitle: string;
  description: string;
  url: string;
  image: string;
  telephone: string;
  email: string;
  address: {
    locality: string;
    country: string;
  };
  sameAs: string[];
  knowsAbout: string[];
}) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  ...person
});

export const generateLocalBusinessSchema = (business: {
  name: string;
  description: string;
  url: string;
  telephone: string;
  address: {
    locality: string;
    region: string;
    country: string;
  };
  areaServed: string[];
  services?: string[];
}) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  ...business
});

export const generateOrganizationSchema = (organization: {
  name: string;
  url: string;
  logo: string;
  description: string;
  address: {
    country: string;
  };
  sameAs: string[];
}) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  ...organization
});
