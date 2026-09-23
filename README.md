# Frappé Tech

Web estática de un estudio independiente de software y automatización, construida con Astro, TypeScript y Tailwind CSS.

## Desarrollo

```sh
npm ci
npm run dev
```

## Comprobaciones

```sh
npm run check
npm run build
npx playwright install chromium
npm test
```

Si hay Chrome instalado, se puede evitar la descarga del navegador:

```sh
PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH=/usr/bin/google-chrome-stable npm test
```

`npm run preview` sirve el build. Las pruebas levantan preview automáticamente y cubren escritorio/móvil, navegación, metadatos, enlaces, axe, consentimiento y formulario con respuestas simuladas. No envían solicitudes reales a Formspree ni datos de analítica.

## Contenido

- `src/data/`: soluciones, casos, contacto, proceso y landings locales.
- `src/pages/blog/posts/`: artículos Markdown, conservando sus URLs.
- `src/assets/`: imágenes optimizadas por Astro.
- `src/layouts/Layout.astro`: estructura, SEO, navegación y consentimiento comunes.
- `netlify.toml`: build estático y redirecciones HTTP 301; no las aplica Astro preview.

La analítica solo se carga tras aceptar. Formspree y GTM mantienen los identificadores existentes, centralizados en `src/data/site.ts`.

El componente `PricingPlan.astro` queda preparado para futuras tarifas, sin precios publicados ni uso actual.

Detalles de migración, fuentes de los casos y configuración de GTM: [docs/refactor-frappe.md](docs/refactor-frappe.md).
Resultados de comprobación: [docs/validation.md](docs/validation.md).
