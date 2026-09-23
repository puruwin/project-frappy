export interface Solution {
  slug: string;
  name: string;
  number: string;
  tagline: string;
  description: string;
  problems: string[];
  includes: { title: string; text: string }[];
  example: string;
  boundary: string;
  projectSlugs: string[];
}
export const solutions: Solution[] = [
  {
    slug: "presencia-digital",
    name: "Presencia",
    number: "01",
    tagline: "Que encontrarte sea fácil y contactar contigo todavía más.",
    description:
      "Una presencia online que explique bien lo que haces y dé a tus futuros clientes un camino claro para hablar contigo.",
    problems: [
      "Tu negocio no tiene web o la que tiene ya no lo representa.",
      "Tus servicios, horarios o formas de contacto son difíciles de encontrar.",
      "No sabes si las visitas a tu web se convierten en consultas.",
    ],
    includes: [
      {
        title: "Una web con un propósito",
        text: "Web nueva, rediseño o página para un servicio concreto. Con contenidos claros, buena lectura en móvil y contacto a mano.",
      },
      {
        title: "Visibilidad en tu zona",
        text: "SEO local y Google Business Profile cuando corresponda, con información coherente sobre tu actividad y dónde trabajas.",
      },
      {
        title: "Del interés a la consulta",
        text: "Formularios, WhatsApp y analítica para facilitar el contacto y entender qué páginas generan oportunidades.",
      },
    ],
    example:
      "Por ejemplo: una empresa de mantenimiento necesita explicar sus servicios, mostrar su zona de trabajo y facilitar que le pidan presupuesto desde el móvil.",
    boundary:
      "Primero revisamos lo que ya tienes. A veces basta con recuperar o mejorar tu web actual; no siempre hace falta empezar de cero.",
    projectSlugs: ["bravo-trabajos-verticales", "av-mantenimiento-integral"],
  },
  {
    slug: "automatizacion",
    name: "Flujo",
    number: "02",
    tagline:
      "Si una tarea se repite constantemente, probablemente podemos simplificarla.",
    description:
      "Conectamos los pasos que hoy dependen de copiar datos, revisar correos o acordarse de hacer un seguimiento.",
    problems: [
      "Copias la misma información entre formularios, correo y hojas de cálculo.",
      "Algunas consultas se quedan sin respuesta o sin seguimiento.",
      "Tienes varias herramientas, pero cada una funciona por su cuenta.",
    ],
    includes: [
      {
        title: "Consultas bien encaminadas",
        text: "Recogida y clasificación de solicitudes, avisos a la persona adecuada y seguimiento según las reglas que acordemos.",
      },
      {
        title: "Menos tareas repetidas",
        text: "Generación de documentos, notificaciones y tareas administrativas a partir de información que ya existe.",
      },
      {
        title: "Herramientas conectadas",
        text: "Sincronización entre aplicaciones y formularios conectados con tus sistemas internos. Asistentes solo cuando aporten valor.",
      },
    ],
    example:
      "Ejemplo de lo que podemos construir: una solicitud entra por un formulario, se registra en tu herramienta de trabajo y genera un aviso para que no quede olvidada.",
    boundary:
      "Empezamos por un proceso concreto y comprobamos sus excepciones. La IA es una opción cuando ayuda; muchos problemas se resuelven con una conexión sencilla.",
    projectSlugs: [],
  },
  {
    slug: "sistemas-a-medida",
    name: "Sistemas",
    number: "03",
    tagline: "Una herramienta que encaje en tu trabajo.",
    description:
      "Software pequeño y específico cuando una herramienta genérica no resuelve el problema de tu negocio.",
    problems: [
      "Una hoja de cálculo se ha quedado corta para organizar el trabajo.",
      "Las herramientas disponibles te obligan a adaptar todo tu proceso.",
      "Necesitas consultar o actualizar información desde un lugar común.",
    ],
    includes: [
      {
        title: "Aplicaciones internas",
        text: "Herramientas de gestión centradas en las tareas que realmente necesitas, con información guardada y disponible para trabajar.",
      },
      {
        title: "Paneles y vistas específicas",
        text: "Interfaces para consultar datos, gestionar operaciones o mostrar información en una pantalla, como el menú de un comedor.",
      },
      {
        title: "Integraciones a medida",
        text: "Conexiones y APIs para que los sistemas compartan información sin tener que duplicarla a mano.",
      },
    ],
    example:
      "En Menu-hub, una aplicación guarda platos y alérgenos y permite mostrar el menú del día en una pantalla. Una necesidad concreta, una herramienta con un alcance definido.",
    boundary:
      "Definimos primero lo imprescindible. Acordamos qué incluye la aplicación, cómo se utilizará y qué mantenimiento necesita, sin añadir funciones porque sí.",
    projectSlugs: ["menu-hub"],
  },
];
