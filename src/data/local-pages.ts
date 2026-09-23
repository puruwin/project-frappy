export interface LocalPage {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  intro: string;
  problems: string[];
  sections: { title: string; text: string }[];
  faqs: { question: string; answer: string }[];
  projectSlug: string;
}
export const localPages: LocalPage[] = [
  {
    slug: "diseno-web-benidorm",
    title: "Diseño web en Benidorm para que contactar sea fácil",
    description:
      "Diseño y rediseño de webs en Benidorm para pequeños negocios: servicios claros, buena lectura en móvil y contacto directo. Habla con David, de Frappé Tech.",
    eyebrow: "Presencia digital · Benidorm",
    heading: "Tu web debería explicar tu negocio tan bien como tú.",
    intro:
      "Si tu web se ha quedado atrás, cuesta leerla en el móvil o no deja claro cómo pedir presupuesto, revisamos qué necesita cambiar. Diseño web en Benidorm con un objetivo: facilitar el siguiente contacto.",
    problems: [
      "Tu web no refleja los servicios que ofreces hoy.",
      "Las personas que llegan desde el móvil no encuentran cómo contactar.",
      "Tienes información útil, pero está desordenada o resulta difícil de leer.",
    ],
    sections: [
      {
        title: "Una estructura que ayude a decidir",
        text: "Ordenamos servicios, ejemplos de trabajo y preguntas habituales para que una persona entienda qué haces antes de llamarte. Para un negocio local, indicar dónde trabajas es tan importante como explicar el servicio.",
      },
      {
        title: "Rediseño con sentido",
        text: "Revisamos contenido, navegación, legibilidad y formularios de tu web actual. Conservamos lo que funciona y acordamos qué merece la pena mejorar, sin dar por hecho que haya que rehacerlo todo.",
      },
      {
        title: "Contacto pensado para el móvil",
        text: "WhatsApp, teléfono o formulario según cómo atiendes a tus clientes. Los accesos tienen que ser visibles y las preguntas, las mínimas para iniciar una conversación.",
      },
      {
        title: "Una base para que te encuentren",
        text: "Páginas de servicio claras, metadatos, imágenes optimizadas y coherencia con tu ficha de Google Business Profile. El posicionamiento se trabaja; no se prometen posiciones.",
      },
    ],
    faqs: [
      {
        question: "¿Puedes mejorar mi web sin crear otra desde cero?",
        answer:
          "Sí. Primero reviso qué tienes y qué problema quieres resolver. La propuesta puede ser una mejora concreta, un rediseño o una web nueva si es necesario.",
      },
      {
        question: "¿Cómo se define el precio?",
        answer:
          "Después de revisar contenido, páginas y funciones necesarias, recibirás una propuesta con alcance, precio y plazo antes de empezar.",
      },
      {
        question: "¿Puedo actualizar el contenido después?",
        answer:
          "Definimos qué necesitas cambiar y con qué frecuencia para acordar una forma de actualización adecuada a tu negocio.",
      },
    ],
    projectSlug: "av-mantenimiento-integral",
  },
  {
    slug: "desarrollo-web-benidorm",
    title: "Desarrollo web en Benidorm para pequeños negocios",
    description:
      "Webs para empresas de servicios en Benidorm y la Costa Blanca. Presenta tu actividad, facilita las consultas y conecta la web con tu trabajo diario.",
    eyebrow: "Desarrollo web · Benidorm",
    heading: "De una búsqueda local a una conversación contigo.",
    intro:
      "Una empresa de servicios necesita algo más que estar en internet: explicar qué hace, dónde trabaja y cómo pedir presupuesto. Construyo webs para negocios de Benidorm y la Costa Blanca con ese recorrido en mente.",
    problems: [
      "Tu negocio todavía no tiene una presencia online propia.",
      "Recibes consultas por diferentes canales y te cuesta seguirlas.",
      "Necesitas que la web encaje con las herramientas que ya utilizas.",
    ],
    sections: [
      {
        title: "Tu actividad, bien explicada",
        text: "Una web para presentar servicios, zona de actuación y trabajos reales. En un negocio que atiende Benidorm y otros municipios de la Costa Blanca, la información local ayuda a que cada persona sepa si puedes atenderla.",
      },
      {
        title: "Solicitudes que llegan al lugar adecuado",
        text: "Formularios y accesos a tus canales de contacto. Si el proceso lo requiere, podemos conectar las solicitudes con herramientas internas para evitar copiar datos o perder consultas.",
      },
      {
        title: "Rápida y preparada para móvil",
        text: "Una base técnica ligera, imágenes optimizadas y navegación sencilla. La tecnología se elige para sostener el uso real de la web, no para complicar su mantenimiento.",
      },
      {
        title: "Después de publicar",
        text: "Acordamos qué soporte necesita la web, cómo se actualiza y qué conviene medir para conocer de dónde llegan los contactos. Hosting y mantenimiento se concretan en la propuesta.",
      },
    ],
    faqs: [
      {
        question: "¿Trabajas solo con negocios de Benidorm?",
        answer:
          "No. Trabajo desde Benidorm con negocios de la Costa Blanca y también a distancia. Lo importante es poder entender bien el trabajo que necesitas resolver.",
      },
      {
        question: "¿La web puede conectarse con otras aplicaciones?",
        answer:
          "Sí, cuando esas herramientas permiten integraciones. Antes de presupuestar revisamos qué datos deben compartir y qué posibilidades ofrece cada sistema.",
      },
      {
        question: "¿Cuánto tarda una web?",
        answer:
          "Depende del alcance y del contenido disponible. El plazo se acuerda en la propuesta, antes de empezar.",
      },
    ],
    projectSlug: "bravo-trabajos-verticales",
  },
  {
    slug: "desarrollo-web-callosa-den-sarria",
    title: "Desarrollo web en Callosa d’en Sarrià para negocios locales",
    description:
      "Webs y presencia digital para autónomos y empresas de Callosa d’en Sarrià. Servicios, zona de trabajo, SEO local y contacto con trato directo.",
    eyebrow: "Presencia digital · Callosa d’en Sarrià",
    heading: "Que tus próximos clientes sepan qué haces y dónde encontrarte.",
    intro:
      "Para un autónomo o una empresa de servicios de Callosa d’en Sarrià, una web puede ser el punto donde reunir servicios, trabajos y contacto. Te ayudo a construir esa presencia y conectarla con tu forma de atender.",
    problems: [
      "Dependes de que alguien facilite tu teléfono para dar a conocer el negocio.",
      "Tus servicios y tu zona de trabajo no están claros en internet.",
      "Quieres una web útil sin contratar funciones que no necesitas.",
    ],
    sections: [
      {
        title: "Información útil para quien está cerca",
        text: "Explicamos si atiendes solo en Callosa d’en Sarrià o también en Polop, La Nucía y otros municipios de la Marina Baixa. La zona se define según tu actividad real, sin crear páginas repetidas para cada localidad.",
      },
      {
        title: "Una presencia local coherente",
        text: "Revisamos que nombre comercial, servicios, horarios y contacto sean consistentes entre la web y Google Business Profile. El contenido tiene que resolver las dudas de quien busca tu servicio.",
      },
      {
        title: "Presupuesto desde el canal que utilizas",
        text: "Elegimos formulario, teléfono o WhatsApp según cómo trabajas. Si atiendes mientras estás fuera, conviene pedir información suficiente para poder responder después sin intercambios innecesarios.",
      },
      {
        title: "Acompañamiento directo",
        text: "Hablarás con David durante el análisis y la construcción. Puedes empezar con una web sencilla y añadir conexiones o herramientas cuando exista una necesidad concreta.",
      },
    ],
    faqs: [
      {
        question: "¿Incluyes SEO local?",
        answer:
          "La propuesta puede incluir estructura de servicios, información de la zona, metadatos y revisión de Google Business Profile. Definimos las acciones según tu situación de partida.",
      },
      {
        question: "¿Puedo contratar mantenimiento?",
        answer:
          "Sí. Acordamos qué actualizaciones, soporte y mejoras necesitas, con un alcance claro.",
      },
      {
        question: "¿Tengo que saber qué tecnología usar?",
        answer:
          "No. Basta con explicar tu actividad, qué tienes ahora y qué está fallando. Yo te ayudo a definir la solución.",
      },
    ],
    projectSlug: "av-mantenimiento-integral",
  },
  {
    slug: "servicios-web-restaurantes",
    title: "Web y herramientas para restaurantes en la Marina Baixa",
    description:
      "Ayuda a tus clientes a consultar la carta, encontrar tu restaurante y contactar. Webs, menús digitales e integraciones según las necesidades del negocio.",
    eyebrow: "Hostelería · Marina Baixa",
    heading: "Menos dudas antes de reservar. Menos pasos detrás del servicio.",
    intro:
      "Una carta difícil de consultar, horarios desactualizados o solicitudes repartidas entre canales pueden complicar el día a día. Revisamos qué necesita tu restaurante para informar mejor y trabajar con menos pasos manuales.",
    problems: [
      "La carta o los horarios no están actualizados en todos los sitios.",
      "Los clientes no encuentran cómo consultar o solicitar una reserva.",
      "Repites tareas entre la web, las reservas y otras herramientas.",
    ],
    sections: [
      {
        title: "Web, carta y contacto",
        text: "Información clara de ubicación, horarios, carta y canales de contacto, con buena lectura en móvil. Si tu público lo necesita, definimos versiones en otros idiomas y cómo mantenerlas al día.",
      },
      {
        title: "Menús digitales y alérgenos",
        text: "Una carta accesible por QR o una pantalla con el menú pueden facilitar la consulta. Acordamos quién actualiza platos y alérgenos y qué información se muestra. Menu-hub es un ejemplo real de gestión de menús para un comedor.",
      },
      {
        title: "Reservas y herramientas conectadas",
        text: "Si utilizas una herramienta de reservas o TPV, revisamos sus opciones de integración antes de proponer conexiones. El objetivo es evitar trabajo duplicado y tener claro dónde se gestiona cada solicitud.",
      },
      {
        title: "Presencia local",
        text: "Revisamos la coherencia entre la web y Google Business Profile para que quien busca en Benidorm y la Marina Baixa encuentre datos útiles. Las mejoras parten del restaurante real, sin prometer reservas ni posiciones.",
      },
    ],
    faqs: [
      {
        question: "¿Tengo que cambiar mi sistema de reservas?",
        answer:
          "No necesariamente. Primero revisamos lo que ya utilizas y si puede conectarse con la web. Sustituirlo solo tiene sentido si no resuelve lo que necesitas.",
      },
      {
        question: "¿Puedo actualizar el menú?",
        answer:
          "Sí. Si necesitas cambios frecuentes, definimos una herramienta para que puedas gestionar la información y acordamos qué campos debe incluir.",
      },
      {
        question: "¿Menu-hub controla ingredientes y existencias?",
        answer:
          "No. Ese proyecto gestiona menús, platos y alérgenos, con una vista de kiosco. Una necesidad de inventario requeriría un alcance diferente.",
      },
    ],
    projectSlug: "menu-hub",
  },
];
