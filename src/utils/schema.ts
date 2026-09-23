import { site } from "../data/site";
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Inicio", path: "/" }, ...items].map(
      (item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: new URL(item.path, site.url).href,
      }),
    ),
  };
}
export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: new URL(path, site.url).href,
    provider: { "@id": `${site.url}/#organization` },
  };
}
