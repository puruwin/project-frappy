import { site } from "../data/site";

export function canonicalPath(pathname: string) {
  if (pathname === "/") return pathname;
  return `${pathname.replace(/\/+$/, "")}/`;
}

export function canonicalUrl(pathname: string) {
  return new URL(canonicalPath(pathname), site.url).href;
}
