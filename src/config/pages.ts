// Configuración SEO específica por página
export const pageConfig = {
  "diseno-web-benidorm": {
    title: "Diseño Web en Benidorm: páginas rápidas, seguras y pensadas para convertir | Frappé",
    description: "Empresa de diseño y desarrollo web en Benidorm. Páginas rápidas con Astro y TypeScript, SEO local, tiendas online, Google Ads y mantenimiento. Especialistas en pymes locales, inmobiliarias, hoteles y restaurantes de la Costa Blanca.",
    keywords: "diseño web Benidorm, desarrollo web Benidorm, creación de páginas web Benidorm, diseño de sitios web Benidorm, agencia diseño web Benidorm, diseño tiendas online Benidorm, SEO local Benidorm, empresa diseño web Benidorm, programador web Benidorm, sitios web Benidorm",
    geo: {
      region: "ES-V",
      placename: "Benidorm",
      position: "38.5366;-0.1312",
      icbm: "38.5366, -0.1312"
    }
  },
  
  "servicios-web-digitales": {
    title: "Servicios Web Digitales para Autónomos y Pymes | Frappé",
    description: "Servicios web profesionales para particulares y pymes: creación de páginas web, SEO, Google Ads, soporte técnico informático y consultoría en IA. Soluciones digitales personalizadas para hacer crecer tu negocio.",
    keywords: "servicios web digitales, creación páginas web pymes, SEO local, Google Ads, soporte técnico informático, consultoría IA empresas, reactivación webs abandonadas, mantenimiento web, diseño web profesional, automatización procesos IA"
  },
  
  "desarrollo-web": {
    title: "Frappé | Agencia de Desarrollo Web",
    description: "Creamos sitios web de alto rendimiento que impulsan el crecimiento de tu negocio. Expertos en desarrollo web con tecnologías modernas y diseños adaptados a tu marca.",
    keywords: "desarrollo web, diseño web, agencia digital, sitios web rápidos, desarrollo frontend, landing pages, SEO, diseño personalizado, desarrollo web para autónomos, desarrollo web para pequeñas empresas, desarrollo web para startups"
  },
  
  "desarrollo-web-benidorm": {
    title: "Empresa de desarrollo web en Benidorm",
    description: "Somos expertos en desarrollo web en Benidorm, ofreciendo soluciones digitales personalizadas para empresas que buscan destacar en internet. Nuestros sitios web son rápidos, seguros y optimizados para SEO.",
    keywords: "desarrollo web Benidorm, diseño web Benidorm, agencia digital Benidorm, programador web Benidorm, sitios web Benidorm, SEO local Benidorm, páginas web profesionales Benidorm",
    geo: {
      region: "ES-V",
      placename: "Benidorm", 
      position: "38.5366;-0.1312",
      icbm: "38.5366, -0.1312"
    }
  },
  
  "linktree": {
    title: "David Pérez - Desarrollador Frontend & Diseñador Web",
    description: "Experto en programación web y diseño moderno. Creando experiencias digitales excepcionales. Encuentra todos mis enlaces en un solo lugar.",
    keywords: "David Pérez, desarrollador web, diseñador web, Benidorm, servicios digitales, contacto profesional"
  },
  
  "detras-de-frappe": {
    title: "Detrás de Frappé - Conoce a David Pérez",
    description: "Conoce a David Pérez, el desarrollador web detrás de Frappé. Especialista en crear sitios web rápidos y seguros para empresas en Benidorm.",
    keywords: "David Pérez, desarrollador web, Frappé, Benidorm, programador, diseñador web, experiencia profesional"
  }
};

// Función helper para obtener configuración de página
export const getPageConfig = (page: string) => {
  return pageConfig[page] || {
    title: "Frappé | Desarrollo Web Profesional",
    description: "Empresa de desarrollo web especializada en sitios web rápidos, seguros y optimizados para SEO.",
    keywords: "desarrollo web, diseño web, SEO, páginas web profesionales"
  };
};
