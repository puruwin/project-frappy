# Objetivo

Reformular creativefrappe.com para que deje de presentar Frappé Tech principalmente como una empresa que hace páginas web o vende servicios técnicos aislados.

El nuevo posicionamiento debe ser:

**Frappé Tech ayuda a pequeñas empresas y negocios de servicios a captar mejor clientes, reducir trabajo manual y evitar que oportunidades se pierdan entre web, WhatsApp, email, formularios y herramientas internas.**

Web, SEO, automatización, IA e integraciones son herramientas para conseguir ese resultado, no los productos principales de la marca.

La web debe poder responder en menos de 10 segundos:

1. ¿Qué hace Frappé?
2. ¿Para quién?
3. ¿Qué problemas resuelve?
4. ¿Por qué debería confiar en Frappé?
5. ¿Cómo contacto?

---

# 1. Auditoría inicial del repositorio

Antes de modificar código:

* Analizar la estructura completa del proyecto.
* Identificar framework, dependencias y versión.
* Identificar componentes reutilizables.
* Identificar páginas y rutas existentes.
* Revisar sistema de estilos actual.
* Revisar SEO existente.
* Revisar Analytics/GTM existente.
* Revisar formularios y cómo se procesan.
* Identificar páginas legales.
* Localizar imágenes, logos, portfolio y contenido reutilizable.
* Identificar código muerto o páginas antiguas.
* Ejecutar build y comprobar errores actuales.

No migrar de framework ni introducir dependencias grandes salvo necesidad clara.

Mantener Astro/TypeScript y la arquitectura existente si es razonable.

---

# 2. Nueva arquitectura web

La raíz `/` debe convertirse en la página comercial principal.

Actualmente no debe depender de una redirección automática hacia una landing de desarrollo web.

Estructura objetivo:

```text
/
├── soluciones/
│   ├── presencia-digital/
│   ├── automatizacion/
│   └── sistemas-a-medida/
│
├── proyectos/
│   └── [slug]/
│
├── sobre-frappe/
├── contacto/
│
├── blog/                  # conservar si ya existe
│
└── páginas legales
```

No crear páginas simplemente para aumentar el número de URLs.

Cada página debe tener una función comercial clara.

---

# 3. Homepage

La homepage es la pieza prioritaria.

## Hero

Evitar mensajes como:

* Desarrollo web
* Agencia de IA
* Automatización con IA
* Soluciones digitales
* Transformación digital

Son demasiado genéricos.

Trabajar alrededor de un mensaje como:

> **Menos trabajo manual. Menos clientes perdidos.**

Supporting copy aproximado:

> Frappé Tech ayuda a pequeños negocios y empresas de servicios a mejorar cómo consiguen clientes y cómo gestionan el trabajo que ocurre después.

CTA principal:

**Cuéntame qué está fallando**

Alternativa válida:

**Cuéntame qué proceso te está dando problemas**

CTA secundario:

**Ver cómo puedo ayudarte**

El CTA debe llevar a contacto o a una sección corta de diagnóstico.

---

# 4. Sección de problemas

No empezar hablando de tecnologías.

Mostrar situaciones en las que un empresario pueda reconocerse.

Ejemplos:

* Tu web lleva años sin tocarse y ya no representa tu negocio.
* Te llegan consultas pero algunas terminan perdiéndose.
* WhatsApp, correo, formularios y Excel no están conectados.
* Haces manualmente tareas que podrían hacerse automáticamente.
* Tienes varias herramientas pero ninguna trabaja bien con las demás.
* No sabes si tu web realmente está generando oportunidades.

Formato visual sencillo.

Después introducir:

> Frappé analiza el problema y construye la solución necesaria. A veces será una web. Otras veces una automatización, una integración o una herramienta interna.

---

# 5. Tres áreas de solución

No presentar diez servicios independientes.

## A. Presencia

Orientada a negocios cuya presencia digital no está funcionando correctamente.

Incluye según proyecto:

* páginas web
* rediseños
* landing pages
* SEO local
* Google Business Profile
* formularios
* WhatsApp
* analítica
* optimización de conversión

Mensaje:

> Que encontrarte sea fácil y contactar contigo todavía más.

---

## B. Flujo

Automatización de procesos concretos.

Ejemplos:

* captación y clasificación de leads
* seguimiento automático
* formularios conectados con sistemas internos
* notificaciones
* generación de documentos
* sincronización entre aplicaciones
* automatización de tareas administrativas
* asistentes cuando realmente aporten valor

No vender “IA” por sí misma.

Mensaje:

> Si una tarea se repite constantemente, probablemente podemos simplificarla.

---

## C. Sistemas

Para necesidades que no encajan en herramientas estándar.

Ejemplos:

* aplicaciones internas
* paneles
* integraciones
* APIs
* herramientas de gestión
* sistemas específicos para operaciones

Mensaje:

> Software pequeño y específico cuando una herramienta genérica no resuelve el problema.

Esta categoría debe transmitir mayor capacidad técnica sin convertir toda la homepage en una lista de tecnologías.

---

# 6. Casos reales en lugar de portfolio

Transformar el portfolio en **casos de trabajo**.

No utilizar únicamente:

> Web realizada para X.

Formato:

### Cliente / proyecto

**Problema**

Qué estaba ocurriendo.

**Solución**

Qué hizo Frappé.

**Resultado**

Qué mejoró.

Si no existen métricas reales, no inventarlas.

Se pueden utilizar resultados cualitativos verificables:

* proceso simplificado
* nueva web adaptada a móvil
* actualización más sencilla
* información centralizada
* reducción de tareas manuales
* integración de sistemas

Reutilizar proyectos reales existentes siempre que sea apropiado.

---

# 7. Sobre Frappé

Evitar presentar una agencia ficticiamente grande.

Frappé puede presentarse como un estudio tecnológico independiente liderado por David.

Concepto:

> Frappé Tech es un estudio independiente de software y automatización. Trabajo directamente con cada negocio para entender primero el problema y construir después únicamente lo necesario.

Usar la experiencia profesional como señal de confianza:

* ingeniería de software
* aplicaciones empresariales
* frontend y backend
* APIs
* automatización
* integraciones
* sistemas internos

No convertir la sección en un CV completo.

La ventaja comercial debe ser:

**el cliente habla directamente con la persona que analiza y construye la solución.**

---

# 8. Proceso comercial

Añadir una sección muy sencilla:

### 1. Hablamos

Entender qué está ocurriendo realmente.

### 2. Detectamos el problema

Determinar qué está fallando y qué merece la pena solucionar.

### 3. Propuesta

Definir alcance, solución, precio y plazo.

### 4. Construcción

Desarrollo e implantación.

### 5. Seguimiento

Mantenimiento o mejora cuando tenga sentido.

Evitar metodologías corporativas artificiales.

---

# 9. Precios

Por ahora NO construir la nueva web alrededor de tarifas rígidas.

No mostrar tablas con Starter / Pro / Growth como elemento central.

Los proyectos actuales pueden variar demasiado entre:

* una web sencilla
* recuperación de una web existente
* automatización
* integración
* software personalizado

Usar mensajes como:

> Presupuesto cerrado antes de empezar.

o:

> Después de analizar el problema recibirás una propuesta con alcance y precio claros.

Preparar los componentes de precios de forma que puedan añadirse posteriormente si se decide publicar productos paquetizados.

---

# 10. CTA final

La página debe terminar con una invitación concreta.

Título:

> ¿Qué parte de tu negocio te está haciendo perder tiempo o clientes?

Texto:

> Cuéntame qué está pasando. No hace falta que sepas qué tecnología necesitas.

CTA:

**Cuéntame el problema**

Formulario corto:

* Nombre
* Empresa
* Email o teléfono
* ¿Qué está ocurriendo?

No preguntar inicialmente presupuesto, número de empleados, tecnología, etc.

---

# 11. Navegación

Mantener navegación muy corta.

```text
Soluciones
Proyectos
Sobre Frappé
Contacto
```

CTA destacado:

```text
Hablemos
```

En móvil debe mantenerse extremadamente sencilla.

---

# 12. Diseño visual

Mantener la identidad de Frappé pero hacerla más madura.

Paleta existente:

```text
#ffffff
#f5478f
#29c1f1
#f9d034
#101a32
```

Usar principalmente:

* blanco
* azul oscuro
* tipografía
* espacios amplios

Rosa, amarillo y azul claro como acentos.

No utilizar todos los colores simultáneamente en cada sección.

Evitar:

* exceso de gradients
* tarjetas por todas partes
* glassmorphism innecesario
* iconos genéricos
* animaciones que distraigan
* apariencia típica de landing de SaaS
* imágenes stock de personas trabajando
* ilustraciones genéricas de IA

Priorizar:

* tipografía
* jerarquía
* espacio
* ejemplos reales
* capturas de proyectos
* pequeños detalles visuales propios de la marca

---

# 13. Componentización

Crear componentes reutilizables cuando tenga sentido:

```text
Hero
ProblemSection
SolutionCard
CaseStudyPreview
ProcessSteps
Testimonial
CTASection
ContactForm
SectionHeader
Navbar
Footer
```

Evitar abstraer componentes que solo se usan una vez si la abstracción no aporta claridad.

Centralizar contenido repetitivo.

Por ejemplo:

```text
src/data/solutions.ts
src/data/projects.ts
```

o utilizar colecciones de Astro si ya existen.

---

# 14. SEO

Cada página debe tener:

* `<title>` único
* meta description
* canonical
* OpenGraph
* Twitter cards cuando corresponda
* heading hierarchy correcta
* alt en imágenes
* URLs limpias
* enlaces internos

Mantener/generar correctamente:

```text
sitemap.xml
robots.txt
```

Añadir datos estructurados razonables:

* Organization
* Service
* BreadcrumbList cuando corresponda

No generar schema artificial o datos que no existan.

---

# 15. SEO local

Frappé trabaja especialmente con pequeñas empresas y negocios de servicios.

Mantener capacidad para crear landings locales posteriormente, por ejemplo:

```text
/desarrollo-web/benidorm/
/automatizacion/alicante/
```

pero NO generar decenas de páginas locales automáticamente.

Primero debe existir contenido realmente útil y diferenciado.

---

# 16. Rendimiento

La web debe ser mayoritariamente estática.

Priorizar:

* Astro estático
* mínimo JavaScript cliente
* imágenes WebP/AVIF
* lazy loading
* fuentes optimizadas
* evitar librerías innecesarias
* evitar hydration cuando no sea necesaria

Objetivo orientativo Lighthouse móvil:

```text
Performance >= 90
Accessibility >= 95
Best Practices >= 95
SEO >= 95
```

---

# 17. Accesibilidad

Comprobar:

* contraste
* navegación por teclado
* estados focus
* labels de formularios
* botones reales
* enlaces descriptivos
* headings
* landmarks
* reduced-motion
* tamaños táctiles adecuados

---

# 18. Analítica

Revisar primero qué sistema existe actualmente.

No introducir otro proveedor si no es necesario.

Registrar como mínimo eventos equivalentes a:

```text
hero_cta_click
solution_view
case_study_view
contact_form_start
contact_form_submit
whatsapp_click
email_click
```

Debe ser posible saber qué páginas generan contactos.

Respetar consentimiento de cookies cuando corresponda.

---

# 19. Limpieza

Después de implementar la nueva estructura:

* eliminar redirecciones antiguas innecesarias
* actualizar redirects necesarios
* eliminar componentes sin uso
* eliminar CSS muerto
* eliminar imágenes sin utilizar
* comprobar enlaces rotos
* comprobar URLs indexadas importantes antes de eliminarlas
* redirigir URLs antiguas relevantes con 301

No eliminar URLs indexadas sin evaluar previamente su sustitución.

---

# 20. Orden de implementación

Trabajar en este orden:

### Fase 1

Auditoría y mapa del proyecto actual.

### Fase 2

Layout global:

* header
* navegación
* footer
* tipografía
* colores
* botones
* componentes base

### Fase 3

Nueva homepage completa.

### Fase 4

Páginas:

* Presencia
* Flujo / Automatización
* Sistemas

### Fase 5

Sistema de proyectos/casos de estudio.

### Fase 6

Sobre Frappé.

### Fase 7

Contacto y formularios.

### Fase 8

SEO, metadata, schema y redirects.

### Fase 9

Analytics.

### Fase 10

Responsive, accesibilidad, rendimiento y limpieza.

---

# 21. Forma de trabajar

Antes de empezar a modificar archivos:

1. inspeccionar el repositorio;
2. describir brevemente la arquitectura encontrada;
3. identificar qué partes se pueden reutilizar;
4. indicar qué se va a eliminar o modificar.

Después comenzar la implementación.

Trabajar en cambios pequeños y coherentes.

No rehacer infraestructura que ya funciona.

No inventar testimonios, clientes, estadísticas o resultados.

No utilizar lorem ipsum.

Cuando falte copy definitivo, crear contenido provisional coherente con este documento y centralizarlo para poder modificarlo fácilmente.

---

# 22. Criterio principal para tomar decisiones

Ante cualquier duda de diseño, copy o arquitectura, utilizar esta prioridad:

```text
Claridad comercial
    ↓
Conversión
    ↓
Credibilidad
    ↓
Usabilidad
    ↓
SEO
    ↓
Estética
    ↓
Tecnología
```

La web no debe intentar demostrar cuántas tecnologías conoce Frappé.

Debe hacer que un propietario de un negocio piense:

> “Este entiende el problema que tengo.”

y darle una forma sencilla de iniciar una conversación.
