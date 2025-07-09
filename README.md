# Frappé Website

This is the official website for [Frappé](https://creativefrappe.com/card), my digital agency, built with modern web technologies for optimal performance and developer experience.

## 🚀 Tech Stack

- **Astro** - Static site generator for fast, content-focused websites
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **TypeScript** - Type-safe JavaScript for better development experience

## 📁 Project Structure

```
frappe-website/
├── src/
│   ├── components/     # Reusable UI components
│   ├── layouts/        # Page layouts and templates
│   ├── pages/          # Astro pages (routes)
│   ├── styles/         # Global styles and Tailwind config
│   └── content/        # Content collections (if using)
├── public/             # Static assets (images, fonts, etc.)
├── astro.config.mjs    # Astro configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── package.json        # Dependencies and scripts
```

## 🎨 Astro Framework

This project uses **Astro** as the static site generator. Astro provides:

- **Zero JavaScript by default** - Pages render to static HTML
- **Component Islands** - Interactive components only where needed
- **Multiple framework support** - Use React, Vue, Svelte, or vanilla JS
- **Built-in optimizations** - Automatic image optimization, CSS bundling, and more

### Key Astro Features We Use

- **File-based routing** - Create pages by adding `.astro` files to `src/pages/`
- **Layouts** - Reusable page templates in `src/layouts/`
- **Components** - Modular UI components in `src/components/`
- **Content Collections** - Type-safe content management for the blog

### Example Astro Page

```astro
---
// Frontmatter - runs at build time
import Layout from '../layouts/Layout.astro';
const title = "Welcome to Frappé";
---

<Layout title={title}>
  <main class="container mx-auto px-4">
    <h1 class="text-4xl font-bold text-gray-900">
      Welcome to Frappé
    </h1>
    <p class="mt-4 text-gray-600">
      Your trusted partner in [industry/solution].
    </p>
  </main>
</Layout>
```

## 🎨 Tailwind CSS

We use **Tailwind CSS** for styling, which provides:

- **Utility-first approach** - Apply styles directly in HTML
- **Responsive design** - Built-in responsive utilities
- **Customizable** - Easy to extend with custom design tokens
- **PurgeCSS integration** - Automatically removes unused styles

### Tailwind Configuration

Our `tailwind.config.js` includes:
- Custom color palette matching Frappé brand
- Typography scale
- Custom spacing and breakpoints
- Component-specific utilities

### Example Tailwind Usage

```html
<!-- Responsive card component -->
<div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
  <h3 class="text-xl font-semibold text-gray-900 mb-2">
    Service Title
  </h3>
  <p class="text-gray-600 leading-relaxed">
    Service description goes here.
  </p>
  <button class="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
    Learn More
  </button>
</div>
```

For questions about this website or Frappé services, contact us at [frappecreativity@gmail.com](mailto:frappecreativity@gmail.com)
