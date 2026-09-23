import type { ImageMetadata } from "astro";
import price from "../assets/cuanto-cuesta-web-2025.webp";
import dictionary from "../assets/diccionario-web.webp";
import need from "../assets/en-que-casos-no-necesitas-web.webp";
export const blogImages: Record<string, ImageMetadata> = {
  "/blog/cuanto-cuesta-web-2025.webp": price,
  "/blog/diccionario-web.webp": dictionary,
  "/blog/en-que-casos-no-necesitas-web.webp": need,
};
export const blogDescriptions: Record<string, string> = {
  "/blog/posts/cuanto-cuesta-web-2025":
    "Qué influye en el precio de una web y cómo comparar propuestas con criterio. Una guía publicada en 2025.",
  "/blog/posts/diccionario-web":
    "Hosting, dominio, CMS y otros términos explicados con ejemplos sencillos para quien prepara su primera web.",
  "/blog/posts/en-que-casos-no-necesitas-web":
    "Cómo decidir si tu negocio necesita una web ahora o si una presencia más sencilla puede ser suficiente.",
};
