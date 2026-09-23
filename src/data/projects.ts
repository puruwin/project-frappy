import type { ImageMetadata } from "astro";
import bravo from "../assets/bravo.webp";
import av from "../assets/av.webp";
import paloma from "../assets/paloma-blanca.webp";
export interface Project {
  slug: string;
  name: string;
  category: "Presencia" | "Sistemas";
  title: string;
  summary: string;
  problem: string;
  solution: string;
  result: string;
  deliverables: string[];
  historical?: boolean;
  url?: string;
  image?: ImageMetadata;
  imageAlt?: string;
  sources: string[];
}
// Las fuentes son notas editoriales internas; no son testimonios ni métricas de analítica.
export const projects: Project[] = [
  {
    slug: "bravo-trabajos-verticales",
    name: "Bravo Trabajos Verticales",
    category: "Presencia",
    title: "De no tener presencia online a recibir consultas de presupuesto.",
    summary:
      "Web, presencia en Google y una vía directa para pedir presupuesto a una empresa de trabajos en altura.",
    problem:
      "Bravo realizaba trabajos en altura con cuerda, pero no tenía presencia online. Necesitaba un lugar donde explicar sus servicios y facilitar el contacto a quienes buscaban profesionales en la Costa Blanca.",
    solution:
      "Creé una web que presenta sus servicios de rehabilitación de fachadas, limpieza en altura, sistemas antiaves y mantenimiento, con una galería de trabajos y un formulario de presupuesto. Completé esa presencia con una ficha de Google Business Profile y el contacto por correo corporativo.",
    result:
      "Al mes de poner en marcha su presencia online, Bravo ya estaba recibiendo consultas de presupuesto en el correo corporativo.",
    deliverables: [
      "Web de servicios y zona de actuación",
      "Galería de trabajos",
      "Formulario de presupuesto",
      "Google Business Profile y correo corporativo",
    ],
    url: "https://bravotrabajosverticales.es/",
    image: bravo,
    imageAlt: "Captura de la web de Bravo Trabajos Verticales",
    sources: [
      "David: situación inicial, intervención y consultas al mes.",
      "https://bravotrabajosverticales.es/: servicios, zona, galería y contacto revisados en septiembre de 2026.",
    ],
  },
  {
    slug: "menu-hub",
    name: "Menu-hub",
    category: "Sistemas",
    title: "Del menú impreso a una pantalla con el menú del día.",
    summary:
      "Una aplicación de cocina para gestionar platos y alérgenos y mostrar el menú en una pantalla del comedor.",
    problem:
      "El menú se imprimía en papel para que los comensales pudieran consultar qué había de comer. El equipo necesitaba una forma de gestionar esa información y mostrarla de manera dinámica.",
    solution:
      "Desarrollé una aplicación de gestión de menús con platos y alérgenos almacenados en base de datos. Una vista de kiosco muestra el menú del día en una pantalla que también instalamos en el comedor.",
    result:
      "El equipo dispone de un catálogo reutilizable de platos con sus alérgenos y puede presentar el menú del día en pantalla, en lugar de depender del papel para comunicarlo.",
    deliverables: [
      "Gestión de menús y platos",
      "Platos y alérgenos persistentes en base de datos",
      "Vista de kiosco para el menú del día",
      "Instalación de la pantalla",
    ],
    sources: [
      "David: aplicación, base de datos, alérgenos e instalación. No incluye inventario ni gestión de ingredientes. Capturas pendientes.",
    ],
  },
  {
    slug: "av-mantenimiento-integral",
    name: "AV Mantenimiento Integral",
    category: "Presencia",
    title: "Una presencia online para un negocio que empieza.",
    summary:
      "Una web para presentar los servicios de un autónomo y facilitar el contacto en Benidorm y la Marina Baixa.",
    problem:
      "Un profesional que comenzaba su actividad de mantenimiento y limpieza no tenía presencia online. Necesitaba explicar qué trabajos ofrecía y dar a sus posibles clientes una forma sencilla de contactar.",
    solution:
      "Creé una web que organiza sus servicios de jardinería, piscinas, limpieza de cristales, pintura, fontanería y mantenimiento. La zona de actuación y los accesos a WhatsApp, teléfono y email ayudan a pasar de la consulta al contacto.",
    result:
      "El negocio cuenta con una presencia online propia donde presentar sus servicios, indicar dónde trabaja y recibir solicitudes de presupuesto por sus canales de contacto.",
    deliverables: [
      "Web y páginas de servicios",
      "Zona de actuación: Benidorm y Marina Baixa",
      "Contacto por WhatsApp, teléfono y email",
    ],
    url: "https://avmantenimientointegral.es/",
    image: av,
    imageAlt: "Captura de la web de AV Mantenimiento Integral",
    sources: [
      "David: inicio de actividad y primera presencia online.",
      "https://avmantenimientointegral.es/: servicios, zona y canales revisados en septiembre de 2026. No hay datos de captación confirmados.",
    ],
  },
  {
    slug: "paloma-blanca",
    name: "Paloma Blanca",
    category: "Presencia",
    historical: true,
    title: "Dar presencia en internet a una empresa de eventos.",
    summary:
      "La primera web de una empresa de eventos. Un proyecto histórico cuyo negocio ya ha cerrado.",
    problem:
      "La empresa organizaba eventos, pero no contaba con presencia online para dar a conocer su actividad.",
    solution:
      "Creé una web para presentar la empresa y su actividad en internet, con un espacio propio al que dirigir a las personas interesadas.",
    result:
      "La empresa pasó a disponer de una web para presentar su actividad. El negocio ha cerrado y la web ya no está disponible; este caso recoge el trabajo realizado en su momento.",
    deliverables: [
      "Primera web de la empresa",
      "Presentación de su actividad de eventos",
    ],
    image: paloma,
    imageAlt: "Captura histórica de la web de La Paloma Blanca",
    sources: [
      "David: primera web y cierre del negocio.",
      "Captura histórica del portfolio existente; no se enlaza el antiguo dominio.",
    ],
  },
];
