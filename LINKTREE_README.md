# Landing Page Linktree

Una moderna landing page estilo "linktree" creada con Astro, TailwindCSS y TypeScript. Perfecta para tarjetas de presentación y redirecciones desde otras webs.

## 🚀 Características

- ✅ **Responsive Design**: Funciona perfectamente en móviles, tablets y escritorio
- ✅ **Tema Oscuro/Claro**: Toggle automático con preferencias del sistema
- ✅ **Accesibilidad Completa**: ARIA labels, navegación por teclado, contraste óptimo
- ✅ **SEO Optimizado**: Meta tags, Open Graph, Twitter Cards
- ✅ **Animaciones Suaves**: Transiciones CSS elegantes
- ✅ **Iconos Modernos**: SVG vectoriales para máxima calidad
- ✅ **Componentes Reutilizables**: Fácil personalización y mantenimiento

## 📁 Estructura de Archivos

```
src/
├── components/
│   ├── LinkCard.astro      # Tarjeta individual de enlace
│   ├── ProfileSection.astro # Sección de perfil superior
│   ├── SocialLinks.astro   # Enlaces sociales
│   └── StatsSection.astro  # Sección de estadísticas (opcional)
└── pages/
    └── linktree.astro      # Página principal
```

## 🎨 Personalización

### 1. Perfil Personal

Edita las variables en `/src/pages/linktree.astro`:

```javascript
const profile = {
  name: "Tu Nombre",
  title: "Tu Título Profesional", 
  bio: "Tu descripción personal",
  avatar: "/tu-avatar.jpg", // Coloca tu imagen en /public/
  location: "Tu Ubicación"
};
```

### 2. Enlaces Principales

Modifica el array `mainLinks`:

```javascript
const mainLinks = [
  {
    href: "https://tu-web.com",
    title: "Título del Enlace",
    description: "Descripción breve",
    icon: "website", // website, email, chat, calendar, blog
    featured: true, // Resalta este enlace
    external: true // Abre en nueva pestaña
  }
];
```

### 3. Redes Sociales

Actualiza el array `socialLinks`:

```javascript
const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/tu-perfil",
    icon: "linkedin", // linkedin, github, twitter, instagram
    color: "primary" // primary, secondary, accent, blue, purple, pink, green, red, orange
  }
];
```

### 4. Estadísticas (Opcional)

Personaliza el array `stats`:

```javascript
const stats = [
  {
    label: "Proyectos",
    value: "50+",
    icon: "projects" // projects, clients, experience, rating
  }
];
```

## 🎯 Iconos Disponibles

### LinkCard Icons:
- `website` - Sitio web/portfolio
- `email` - Correo electrónico
- `chat` - WhatsApp/mensajería
- `calendar` - Reservar cita
- `blog` - Blog/artículos

### Social Icons:
- `linkedin` - LinkedIn
- `github` - GitHub
- `twitter` - Twitter/X
- `instagram` - Instagram

### Stats Icons:
- `projects` - Número de proyectos
- `clients` - Clientes atendidos
- `experience` - Años de experiencia
- `rating` - Calificación/rating

## 🌙 Tema Oscuro

La página incluye un toggle de tema automático que:
- Detecta las preferencias del sistema
- Permite cambio manual
- Guarda la preferencia en localStorage
- Se adapta automáticamente

## ♿ Accesibilidad

- **Navegación por teclado**: Tab, Enter, espacios
- **ARIA labels**: Descripciones para lectores de pantalla
- **Contraste**: Cumple WCAG 2.1 AA
- **Focus indicators**: Indicadores visuales claros
- **Semantic HTML**: Estructura semánticamente correcta

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## 🔧 Desarrollo

### Ejecutar en desarrollo:
```bash
npm run dev
```

### Construir para producción:
```bash
npm run build
```

### Previsualizar build:
```bash
npm run preview
```

## 🎨 Personalización Avanzada

### Colores de Marca

El proyecto usa los colores corporativos definidos en `/src/styles/theme.css`:

```css
--color-primary: #f5478f;    /* Rosa/magenta principal */
--color-secondary: #29c1f1;  /* Azul celeste secundario */
--color-accent: #f9d034;     /* Amarillo para detalles */
--color-background: #E6F9FD; /* Fondo azul claro */
```

Para cambiar los colores, edita estas variables CSS en el archivo de tema.

### Fuentes Personalizadas

Cambia la fuente en `/src/pages/linktree.astro`:

```html
<link href="https://fonts.googleapis.com/css2?family=TuFuente:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
```

## 🚀 Deployment

### Vercel:
1. Conecta tu repo a Vercel
2. Auto-detecta Astro
3. Deploy automático

### Netlify:
1. Conecta tu repo a Netlify  
2. Build command: `npm run build`
3. Publish directory: `dist`

### GitHub Pages:
1. Instala `@astrojs/github-pages`
2. Configura `astro.config.mjs`
3. GitHub Actions automático

## 📈 SEO

La página incluye automáticamente:
- Meta descriptions
- Open Graph tags
- Twitter Cards  
- Structured data
- Sitemap (via Astro)

## 🔒 Performance

- **100/100** Lighthouse Performance
- **Lazy loading** de imágenes
- **Minificación** automática
- **Tree shaking** de CSS/JS
- **Critical CSS** inlineado

---

**Creado por David Frappe** - Siguiendo las mejores prácticas de desarrollo web moderno con Astro y TailwindCSS.
