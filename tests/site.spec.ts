import { test, expect, type Page } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { resolve } from "node:path";
const consentKey = "frappe.analytics-consent.v1";
const endpoint = "https://formspree.io/f/mjkglyjd";
async function reject(page: Page) {
  await page.getByRole("button", { name: "Rechazar", exact: true }).click();
}
async function fillForm(page: Page, contact = "persona@example.com") {
  await page.getByLabel("Nombre", { exact: true }).fill("Prueba automatizada");
  await page.getByLabel("Email o teléfono").fill(contact);
  await page
    .getByLabel("¿Qué está ocurriendo?")
    .fill("Quiero conectar las consultas de la web con mi trabajo diario.");
  await page.getByRole("checkbox").check();
}
// All provider requests are mocked. No real analytics or contact submissions in this suite.
test.beforeEach(async ({ page }) => {
  await page.route("https://www.googletagmanager.com/**", (route) =>
    route.fulfill({ contentType: "application/javascript", body: "" }),
  );
  await page.route(endpoint, (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: '{"ok":true}',
    }),
  );
});

test("home and mobile navigation work, including keyboard and reduced motion", async ({
  page,
  isMobile,
}) => {
  await page.goto("/");
  await expect(page).toHaveURL(/\/$/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Menos trabajo manual.Menos clientes perdidos.",
  );
  await reject(page);
  await page.keyboard.press("Tab");
  if (isMobile) {
    const menu = page.locator(".mobile-nav");
    await menu.locator("summary").click();
    await expect(menu).toHaveAttribute("open", "");
    await page.keyboard.press("Escape");
    await expect(menu).not.toHaveAttribute("open", "");
    await menu.locator("summary").click();
    await menu.getByRole("link", { name: "Proyectos", exact: true }).click();
  } else {
    await page
      .locator(".desktop-nav")
      .getByRole("link", { name: "Proyectos", exact: true })
      .click();
  }
  await expect(page).toHaveURL(/\/proyectos$/);
  await page.emulateMedia({ reducedMotion: "reduce" });
  expect(
    await page
      .locator("html")
      .evaluate((el) => getComputedStyle(el).scrollBehavior),
  ).toBe("auto");
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Saltar al contenido" }),
  ).toBeFocused();
});

test("consent gates loading and events and supports withdrawal", async ({
  page,
}) => {
  const requests: string[] = [];
  page.on("request", (req) => {
    if (req.url().includes("googletagmanager.com")) requests.push(req.url());
  });
  await page.goto("/soluciones/automatizacion");
  expect(requests).toHaveLength(0);
  await reject(page);
  await page.reload();
  expect(requests).toHaveLength(0);
  await expect(page.locator("#cookie-consent")).toBeHidden();
  await page.getByRole("button", { name: "Preferencias de cookies" }).click();
  await page.getByRole("button", { name: "Aceptar analítica" }).click();
  await expect.poll(() => requests.length).toBe(1);
  const views = await page.evaluate(() =>
    (window.dataLayer || []).filter(
      (item: any) => item.event === "solution_view",
    ),
  );
  expect(views).toHaveLength(1);
  expect(views[0]).toMatchObject({
    content_id: "automatizacion",
    page_path: "/soluciones/automatizacion",
  });
  await page.getByRole("button", { name: "Preferencias de cookies" }).click();
  await page.getByRole("button", { name: "Aceptar analítica" }).click();
  expect(
    await page.evaluate(
      () =>
        (window.dataLayer || []).filter(
          (item: any) => item.event === "solution_view",
        ).length,
    ),
  ).toBe(1);
  await page.getByRole("button", { name: "Preferencias de cookies" }).click();
  await Promise.all([page.waitForEvent("load"), reject(page)]);
  expect(requests).toHaveLength(1);
  expect(
    await page.evaluate((key) => localStorage.getItem(key), consentKey),
  ).toBe("rejected");
  expect(await page.evaluate(() => window.dataLayer)).toBeUndefined();
});

for (const contact of ["persona@example.com", "+34 608 123 456"]) {
  test(`contact accepts ${contact.includes("@") ? "email" : "phone"} and confirms success without personal analytics`, async ({
    page,
  }) => {
    const submissions: URLSearchParams[] = [];
    let body = "";
    await page.route(endpoint, async (route) => {
      body = route.request().postData() || "";
      submissions.push(new URLSearchParams(body));
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: '{"ok":true}',
      });
    });
    await page.goto("/contacto");
    await page.getByRole("button", { name: "Aceptar analítica" }).click();
    await fillForm(page, contact);
    await page.getByRole("button", { name: "Cuéntame el problema" }).click();
    await expect(page.getByRole("status")).toContainText(
      "Tu consulta se ha enviado correctamente",
    );
    await expect(page.getByRole("status")).toHaveAttribute(
      "data-state",
      "success",
    );
    expect(submissions).toHaveLength(1);
    expect(body).toContain(contact);
    await expect(page.getByLabel("Nombre", { exact: true })).toHaveValue("");
    const events = await page.evaluate(() =>
      (window.dataLayer || []).filter((item: any) =>
        item.event?.startsWith("contact_form_"),
      ),
    );
    expect(events).toHaveLength(2);
    expect(events[1]).toMatchObject({
      event: "contact_form_submit",
      form_status: "success",
      page_path: "/contacto",
    });
    expect(JSON.stringify(events)).not.toContain(contact);
    expect(JSON.stringify(events)).not.toContain("Prueba automatizada");
  });
}

test("invalid contact is blocked; provider failures preserve input and retry works without consent", async ({
  page,
}) => {
  let requests = 0;
  await page.route(endpoint, (route) => {
    requests++;
    return route.fulfill({
      status: 422,
      contentType: "application/json",
      body: '{"errors":[{"message":"Rejected"}]}',
    });
  });
  await page.goto("/contacto");
  await reject(page);
  await fillForm(page, "no es un contacto");
  await page.getByRole("button", { name: "Cuéntame el problema" }).click();
  expect(requests).toBe(0);
  await page.getByLabel("Email o teléfono").fill("persona@example.com");
  await page.getByRole("button", { name: "Cuéntame el problema" }).click();
  await expect(page.getByRole("status")).toContainText(
    "No se ha podido confirmar",
  );
  await expect(page.getByRole("status")).toHaveAttribute(
    "data-state",
    "error",
  );
  await expect(page.getByLabel("Nombre", { exact: true })).toHaveValue(
    "Prueba automatizada",
  );
  await page.route(endpoint, (route) => route.abort("failed"));
  await page.getByRole("button", { name: "Cuéntame el problema" }).click();
  await expect(page.getByRole("status")).toContainText(
    "No se ha podido confirmar",
  );
  await expect(
    page.getByRole("button", { name: "Cuéntame el problema" }),
  ).toBeEnabled();
  await page.route(endpoint, (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: '{"ok":true}',
    }),
  );
  await page.getByRole("button", { name: "Cuéntame el problema" }).click();
  await expect(page.getByRole("status")).toContainText("Gracias");
  expect(await page.evaluate(() => window.dataLayer)).toBeUndefined();
});

test("privacy is required and duplicate submits are prevented", async ({
  page,
}) => {
  let requests = 0;
  await page.route(endpoint, async (route) => {
    requests++;
    await new Promise((resolve) => setTimeout(resolve, 500));
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: '{"ok":true}',
    });
  });
  await page.goto("/contacto");
  await reject(page);
  await fillForm(page);
  await page.getByRole("checkbox").uncheck();
  await page.getByRole("button", { name: "Cuéntame el problema" }).click();
  expect(requests).toBe(0);
  await page.getByRole("checkbox").check();
  await page.locator("form").evaluate((form: HTMLFormElement) => {
    form.requestSubmit();
    form.requestSubmit();
  });
  await expect(page.getByRole("status")).toContainText("Gracias");
  expect(requests).toBe(1);
});

test("case views and contact clicks are tracked without destinations or personal data", async ({
  page,
}) => {
  await page.goto("/proyectos/menu-hub");
  await page.getByRole("button", { name: "Aceptar analítica" }).click();
  expect(
    await page.evaluate(
      () =>
        (window.dataLayer || []).filter(
          (item: any) => item.event === "case_study_view",
        ).length,
    ),
  ).toBe(1);
  await page.goto("/");
  await page.getByRole("link", { name: "Cuéntame qué está fallando" }).click();
  // Prevent actual mail/WhatsApp navigation while letting the tracking listener run.
  await page.evaluate(() =>
    document.addEventListener("click", (event) => event.preventDefault()),
  );
  await page.locator('#contacto a[href^="mailto:"]').click();
  await page.locator('#contacto a[href^="https://wa.me"]').click();
  const names = await page.evaluate(() =>
    (window.dataLayer || []).map((item: any) => item.event),
  );
  expect(names).toEqual(
    expect.arrayContaining(["hero_cta_click", "email_click", "whatsapp_click"]),
  );
});

test("blog filters exact tags and keeps existing article URLs", async ({
  page,
}) => {
  await page.goto("/blog?tag=formaci%C3%B3n");
  await reject(page);
  await expect(page.locator("[data-post-tags]:visible")).toHaveCount(1);
  await page.getByRole("button", { name: "Todos", exact: true }).click();
  await expect(page.locator("[data-post-tags]:visible")).toHaveCount(3);
  await page.goto("/blog/posts/diccionario-web");
  await expect(page.locator("h1")).toHaveCount(1);
  await expect(page.locator(".prose")).toContainText("Hosting");
});

test("navigation and form remain available with JavaScript disabled", async ({
  browser,
  baseURL,
  isMobile,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: isMobile ? 390 : 1440, height: 900 },
  });
  const page = await context.newPage();
  await page.goto(`${baseURL}/contacto`);
  if (isMobile) {
    await page.locator(".mobile-nav summary").click();
    await expect(page.locator(".mobile-nav nav")).toBeVisible();
  }
  await expect(page.locator("form")).toHaveAttribute("action", endpoint);
  await expect(page.locator("form")).toHaveAttribute("method", "POST");
  await expect(
    page.getByRole("button", { name: "Cuéntame el problema" }),
  ).toBeEnabled();
  await expect(page.locator("#cookie-consent")).toBeHidden();
  await context.close();
});

const routes = [
  "/",
  "/soluciones/presencia-digital",
  "/soluciones/automatizacion",
  "/soluciones/sistemas-a-medida",
  "/proyectos",
  "/proyectos/bravo-trabajos-verticales",
  "/proyectos/menu-hub",
  "/proyectos/av-mantenimiento-integral",
  "/proyectos/paloma-blanca",
  "/sobre-frappe",
  "/contacto",
  "/linktree",
  "/blog",
  "/blog/posts/diccionario-web",
  "/blog/posts/cuanto-cuesta-web-2025",
  "/blog/posts/en-que-casos-no-necesitas-web",
  "/desarrollo-web-benidorm",
  "/diseno-web-benidorm",
  "/desarrollo-web-callosa-den-sarria",
  "/servicios-web-restaurantes",
  "/privacidad",
];
for (const route of routes) {
  test(`accessible, complete and responsive: ${route}`, async ({
    page,
  }, testInfo) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("head title")).toHaveCount(1);
    await expect(page.locator('meta[name="description"]')).toHaveCount(1);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      `https://creativefrappe.com${route}`,
    );
    const jsonLd = await page
      .locator('script[type="application/ld+json"]')
      .allTextContents();
    jsonLd.forEach((text) => expect(() => JSON.parse(text)).not.toThrow());
    await page.evaluate(() => document.fonts.ready);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(results.violations).toEqual([]);
    expect(errors).toEqual([]);
    if (route === "/") {
      await reject(page);
      await page
        .locator("img[loading=lazy]")
        .evaluateAll((images) =>
          images.forEach((image) => image.setAttribute("loading", "eager")),
        );
      await page.waitForFunction(() =>
        [...document.images].every((image) => image.complete),
      );
      await page.screenshot({
        path: testInfo.outputPath("homepage.png"),
        fullPage: true,
      });
    }
  });
}

test("all built internal links and assets resolve, sitemap excludes redirects and noindex URLs", async () => {
  function htmlFiles(dir: string): string[] {
    return readdirSync(dir, { withFileTypes: true }).flatMap((entry) =>
      entry.isDirectory()
        ? htmlFiles(resolve(dir, entry.name))
        : entry.name.endsWith(".html")
          ? [resolve(dir, entry.name)]
          : [],
    );
  }
  const root = resolve("dist");
  const titles: string[] = [];
  for (const file of htmlFiles(root)) {
    const html = readFileSync(file, "utf8");
    titles.push(html.match(/<title>(.*?)<\/title>/s)?.[1] || "");
    for (const [, raw] of html.matchAll(/(?:href|src)="([^"\s]+)"/g)) {
      if (!raw.startsWith("/") || raw.startsWith("//")) continue;
      const url = new URL(raw, "https://creativefrappe.com");
      const path = decodeURIComponent(url.pathname);
      const candidates = [
        resolve(root, `.${path}`),
        resolve(root, `.${path}`, "index.html"),
      ];
      expect(
        candidates.some((candidate) => existsSync(candidate)),
        `${file}: ${raw}`,
      ).toBe(true);
      if (url.hash) {
        const target =
          path === "/"
            ? resolve(root, "index.html")
            : candidates.find((candidate) => candidate.endsWith(".html"));
        if (target && existsSync(target))
          expect(readFileSync(target, "utf8")).toContain(
            `id="${decodeURIComponent(url.hash.slice(1))}"`,
          );
      }
    }
  }
  expect(new Set(titles).size).toBe(titles.length);
  const sitemap = readFileSync("dist/sitemap.xml", "utf8");
  for (const old of [
    "/linktree",
    "/card",
    "/portfolio",
    "/desarrollo-web",
    "/agencia-automatizacion-ia",
    "/privacidad",
  ])
    expect(sitemap).not.toContain(`https://creativefrappe.com${old}</loc>`);
  const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(
    ([, url]) => new URL(url).href,
  );
  for (const route of routes.filter(
    (route) => !["/privacidad", "/linktree"].includes(route),
  ))
    expect(sitemapUrls).toContain(
      new URL(route, "https://creativefrappe.com").href,
    );
});

test("narrow mobile and tablet retain readable layouts without overflow", async ({
  page,
}) => {
  for (const width of [320, 768]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    await page.goto("/contacto");
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
  }
});

test("migration destinations exist and redirects are permanent without chains", async () => {
  const rules = readFileSync("netlify.toml", "utf8")
    .split("[[redirects]]")
    .slice(1)
    .map((rule) => ({
      from: rule.match(/from\s*=\s*"([^"]+)"/)![1],
      to: rule.match(/to\s*=\s*"([^"]+)"/)![1],
      status: Number(rule.match(/status\s*=\s*(\d+)/)![1]),
    }));
  expect(rules).toContainEqual({
    from: "/card",
    to: "/linktree",
    status: 301,
  });
  const sources = new Set(rules.map((rule) => rule.from));
  for (const rule of rules) {
    expect(rule.status).toBe(301);
    expect(sources.has(rule.to)).toBe(false);
    expect(existsSync(resolve("dist", `.${rule.to}`, "index.html"))).toBe(true);
    expect(existsSync(resolve("dist", `.${rule.from}`, "index.html"))).toBe(
      false,
    );
  }
});
