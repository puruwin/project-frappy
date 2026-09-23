# Reforma de Frappé Tech

## Auditoría y decisiones

La base recibida usa Astro 5.16.15, TypeScript 5.9.2 y Tailwind 3.4.17, con salida estática y Netlify. El build inicial generaba 18 páginas; `astro check` detectaba errores previos y una colección inexistente. La raíz redirigía a `/linktree`. Había layouts completos duplicados, varios formularios y metadatos contradictorios. GTM cargaba sin esperar al consentimiento.

Se conservan Astro, Tailwind, el alojamiento, el endpoint Formspree y el contenedor GTM existentes. Se centralizan los datos y componentes, y se mantiene una sola fuente de metadatos. No se añade un framework de cliente ni un proveedor de analítica. Playwright y axe son dependencias de desarrollo para validar comportamiento y accesibilidad.

Se reutilizan el icono de marca, el retrato, los artículos y sus imágenes, y la captura histórica de Paloma Blanca. Las capturas de Bravo y AV proceden de sus webs públicas. Menu-hub utiliza una composición tipográfica descriptiva, no una interfaz simulada; su ficha funciona sin imágenes y puede recibir capturas reales después.

Se eliminan los componentes antiguos sin referencias, los modales de contacto, Vanta/Three, fuentes e iconos no usados y las configuraciones duplicadas. `PricingPlan` se mantiene deliberadamente como componente futuro sin tarifas publicadas. La trayectoria previa de David se conserva como referencia editorial en `docs/david-background.md`.

## Rutas y SEO

Se contrastó el sitemap publicado en https://creativefrappe.com/sitemap.xml el 23 de septiembre de 2026. Sus 14 URLs quedan conservadas o tienen una sustitución temática. Esto verifica el inventario publicado, no el estado real de indexación en Search Console, al que no se ha accedido.

| Origen                               | Destino o tratamiento                                              |
| ------------------------------------ | ------------------------------------------------------------------ |
| `/`                                  | Homepage con respuesta 200, sin redirección                        |
| `/desarrollo-web`                    | 301 a `/soluciones/presencia-digital`                              |
| `/servicios-web-digitales`           | 301 a `/soluciones/presencia-digital`                              |
| `/agencia-automatizacion-ia`         | 301 a `/soluciones/automatizacion`                                 |
| `/detras-de-frappe`                  | 301 a `/sobre-frappe`                                              |
| `/portfolio`                         | 301 a `/proyectos`                                                 |
| `/portfolio/bravo-verticales`        | 301 a `/proyectos/bravo-trabajos-verticales` (antiguo enlace roto) |
| `/card`                              | 301 a `/linktree`, URL estable para el QR de las tarjetas          |
| `/linktree`                          | Tarjeta digital de contacto (`noindex, follow`)                    |
| `/desarrollo-web-benidorm`           | Conservada y adaptada                                              |
| `/diseno-web-benidorm`               | Conservada y adaptada                                              |
| `/desarrollo-web-callosa-den-sarria` | Conservada y adaptada                                              |
| `/servicios-web-restaurantes`        | Conservada y adaptada                                              |
| `/blog` y sus tres artículos         | Mismas URLs y contenido editorial conservado                       |
| `/contacto`, `/privacidad`           | Conservadas                                                        |

Las reglas HTTP están en `netlify.toml`. Astro preview no aplica reglas de Netlify: los 301 efectivos deben comprobarse en el entorno de Netlify al publicar. No hay páginas HTML de redirección ni cadenas intencionadas. URLs canónicas sin barra final, salvo `/`; sitemap sin redirecciones, página 404 ni privacidad (`noindex, follow`). El hook mantiene `/sitemap.xml` sin el temporizador anterior.

El plan no contempla publicar el sitio. Después de publicarlo: verificar estados HTTP y destinos de estas reglas (también sus variantes con barra final), solicitar lectura del sitemap en Search Console y revisar errores 404 e indexación. No se eliminan las landings locales por falta de datos de tráfico.

## Edición de contenido

- `src/data/site.ts`: contacto, endpoint, GTM, navegación y proceso.
- `src/data/solutions.ts`: las tres soluciones y sus alcances.
- `src/data/projects.ts`: problema, solución, resultado, estado histórico, enlace e imagen opcionales. `sources` son notas internas y no se renderizan.
- `src/data/local-pages.ts`: contenido diferenciado de las cuatro landings preservadas.
- `src/data/blog.ts`: imágenes y resúmenes breves de los artículos existentes.

Bravo: el dato de consultas al mes lo ha confirmado David; no se presenta como ventas, volumen o una promesa repetible. AV: solo se afirma la nueva presencia online. Paloma Blanca: negocio cerrado, captura histórica y sin enlace activo. Menu-hub: menús, platos, alérgenos y pantalla; sin existencias ni ingredientes. No se han inventado testimonios ni estadísticas.

Para añadir capturas de Menu-hub, guardarlas en `src/assets`, importarlas y asignar `image`/`imageAlt` al caso. El sistema optimiza la imagen con Astro y añade dimensiones y variantes responsive.

## Formulario

Un componente sirve a inicio, contacto y landings. Nombre, email o teléfono y mensaje obligatorios; empresa opcional. Privacidad obligatoria, campo honeypot y ruta de origen oculta. Si el contacto es un email, se añade `email` al POST para facilitar la respuesta en Formspree; una solicitud solo con teléfono no lo necesita.

La mejora JavaScript valida el contacto, impide envíos simultáneos, espera confirmación `{ok:true}` y mantiene los datos si hay error HTTP, de red o timeout (15 segundos). La respuesta se anuncia en un estado accesible dentro del formulario. Sin JavaScript conserva POST nativo a Formspree. No se han enviado consultas reales durante las pruebas. Las reglas privadas de Formspree y la entrega al buzón no son inspeccionables desde este repositorio; revisar que el endpoint no tenga una regla adicional de email obligatorio.

## Analítica y consentimiento

Se mantiene `GTM-WV5P6GRH`. Sin elección o al rechazar no se carga GTM ni se emiten eventos. La elección nueva se guarda en `frappe.analytics-consent.v1`; la preferencia antigua no se reutiliza porque no bloqueaba la carga. Si el almacenamiento está bloqueado, la decisión se mantiene durante la página. Al retirar consentimiento se deniega almacenamiento, se eliminan cookies conocidas de GA y se recarga la página para retirar scripts ya ejecutados.

| Evento de dataLayer   | Momento                                                   | Parámetros específicos            |
| --------------------- | --------------------------------------------------------- | --------------------------------- |
| `hero_cta_click`      | Clic en CTA principal o secundario del hero               | `button_location`, `cta_id`       |
| `solution_view`       | Visita a la ficha de solución, una vez con consentimiento | `content_id`                      |
| `case_study_view`     | Visita a ficha de proyecto, una vez con consentimiento    | `content_id`                      |
| `contact_form_start`  | Primera edición del formulario con consentimiento         | `form_id`                         |
| `contact_form_submit` | Respuesta confirmada de Formspree                         | `form_id`, `form_status: success` |
| `whatsapp_click`      | Clic en enlace de WhatsApp                                | `button_location`                 |
| `email_click`         | Clic en enlace de email                                   | `button_location`                 |

Todos incluyen `page_path`, sin query string, email, teléfono, nombre ni mensaje. No se acumulan interacciones anteriores a la aceptación.

Configuración necesaria en el contenedor existente: disparador de evento personalizado para estos siete nombres, etiqueta GA4 que utilice el nombre de evento y variables de dataLayer para los parámetros indicados. Registrar dimensiones si se quieren desglosar informes y marcar `contact_form_submit` como evento clave. Respetar `analytics_storage` y mantener almacenamiento publicitario denegado. Desactivar seguimiento automático de formularios si duplica estos eventos. Verificar con GTM Preview/GA4 DebugView antes de publicar cambios de contenedor. No se han modificado GTM ni GA4 desde este trabajo.

La política existente se conserva y se corrige la referencia técnica a Umami por Formspree/GTM. Sus datos del responsable y demás declaraciones legales no se han reinventado; esta reforma no constituye una nueva revisión jurídica del texto.

## Validación

Consultar el resultado final en `docs/validation.md`. Comandos reproducibles en el README. Las pruebas interceptan Formspree y GTM: nunca envían contactos ni eventos reales.
