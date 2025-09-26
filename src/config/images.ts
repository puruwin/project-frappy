// Configuración de imágenes optimizadas para SEO
export const imageConfig = {
  // Imagen Open Graph única (1200x630px recomendado)
  og: {
    default: "/og-image.jpg"
  },
  
  // Imágenes de perfil y autor
  profile: {
    author: "/me.jpg",
    logo: "/frappe_icon.svg",
    logoInverted: "/icon_inv_code.svg"
  },
  
  // Imágenes de contenido
  content: {
    hero: "/images/web-development.jpg",
    digitalServices: "/images/digital-services.jpg",
    skyline: "/skyline-benidorm.webp",
    splash: "/splash.png"
  },
  
  // Favicons
  favicon: {
    svg: "/frappe_icon.svg",
    png: "/frappe_icon.png",
    ico: "/favicon.ico"
  }
};

// Función helper para obtener imagen OG (siempre la misma)
export const getOGImage = (): string => {
  return imageConfig.og.default;
};
