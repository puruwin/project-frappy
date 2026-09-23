# Validación de la reforma

Comprobaciones realizadas sobre el build estático el 23 de septiembre de 2026.

## Resultado

- `npm run build`: 23 páginas generadas correctamente.
- `npm run check`: 0 errores, 0 advertencias y 0 avisos.
- Playwright: 68 pruebas superadas en escritorio y móvil.
- axe: ninguna infracción WCAG A/AA detectada en las 21 rutas públicas revisadas.
- Enlaces y recursos internos: todos resuelven en el build.
- Sitemap: contiene las rutas canónicas y excluye páginas retiradas, privacidad y 404.
- Redirecciones declaradas para Hostinger: todos los destinos existen, usan 301 y no forman cadenas. La respuesta HTTP efectiva debe comprobarse después del despliegue.
- Responsive: sin desbordamiento horizontal a 320, 768 y los perfiles de escritorio y Pixel 7.
- Formulario: email o teléfono, privacidad, envío confirmado, errores, timeout, reintento, prevención de duplicados y funcionamiento sin JavaScript.
- Consentimiento: GTM bloqueado antes de aceptar y después de rechazar; eventos sin datos personales y retirada de consentimiento comprobada.

Los POST a Formspree y las peticiones a GTM se interceptan en las pruebas. No se envían contactos ni eventos reales.

## Lighthouse

Medición local con Chrome sobre el build de producción, sin aceptar analítica:

| Página representativa | Rendimiento | Accesibilidad | Buenas prácticas | SEO |
| --------------------- | ----------: | ------------: | ---------------: | --: |
| Homepage              |         100 |           100 |              100 | 100 |
| Solución: Presencia   |         100 |           100 |              100 | 100 |
| Caso: Bravo           |         100 |           100 |              100 | 100 |
| Contacto              |         100 |           100 |              100 | 100 |
| Artículo del blog     |         100 |           100 |              100 | 100 |

Las puntuaciones locales pueden variar al publicar por red, cabeceras, scripts configurados en GTM y respuesta del alojamiento. Los avisos informativos restantes de Lighthouse no reducen estas puntuaciones.

## Límites de la validación

- Astro preview no ejecuta `.htaccess`. Los estados 301 deben verificarse de nuevo en Hostinger después del despliegue.
- Se verificó el sitemap público anterior para inventariar URLs, pero no se accedió a Search Console ni a sus datos de tráfico o indexación.
- Se comprobó el comportamiento del formulario con respuestas simuladas. La entrega real depende de la configuración privada del endpoint de Formspree.
- La recepción en GA4 depende de configurar y publicar los disparadores y variables indicados en `docs/refactor-frappe.md` dentro del contenedor GTM.
