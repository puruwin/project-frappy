import { site } from "../data/site";
export type AnalyticsEvent =
  | "hero_cta_click"
  | "solution_view"
  | "case_study_view"
  | "contact_form_start"
  | "contact_form_submit"
  | "whatsapp_click"
  | "email_click";
type Params = Record<string, string | number | boolean>;
type Consent = "accepted" | "rejected";
declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}
const storageKey = "frappe.analytics-consent.v1";
let consent: Consent | null = null;
let initialized = false;
let loaded = false;
export function getConsent(): Consent | null {
  if (initialized) return consent;
  initialized = true;
  try {
    const value = localStorage.getItem(storageKey);
    if (value === "accepted" || value === "rejected") consent = value;
  } catch {
    /* Storage is optional. */
  }
  return consent;
}
function consentCommand(value: "granted" | "denied") {
  window.dataLayer ??= [];
  // GTM/gtag consumes command argument objects, not custom consent event names.
  function gtag(..._args: unknown[]) {
    window.dataLayer!.push(arguments);
  }
  gtag("consent", "update", {
    analytics_storage: value,
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}
export function loadAnalytics() {
  if (getConsent() !== "accepted" || loaded) return;
  loaded = true;
  consentCommand("granted");
  window.dataLayer!.push({ "gtm.start": Date.now(), event: "gtm.js" });
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${site.gtm}`;
  document.head.append(script);
}
export function setConsent(value: Consent) {
  consent = value;
  initialized = true;
  try {
    localStorage.setItem(storageKey, value);
  } catch {
    /* Keep the decision for this page. */
  }
  if (value === "accepted") loadAnalytics();
  else {
    if (loaded) consentCommand("denied");
    // Clear known first-party analytics cookies when consent is withdrawn.
    document.cookie.split(";").forEach((cookie) => {
      const name = cookie.trim().split("=")[0];
      if (!/^(_ga|_gid|_gat)(_|$)/.test(name)) return;
      const parts = location.hostname.split(".");
      document.cookie = `${name}=; Max-Age=0; path=/`;
      for (let i = 0; i < parts.length - 1; i++)
        document.cookie = `${name}=; Max-Age=0; path=/; domain=.${parts.slice(i).join(".")}`;
    });
  }
}
export function trackEvent(event: AnalyticsEvent, params: Params = {}) {
  if (getConsent() !== "accepted") return;
  window.dataLayer ??= [];
  window.dataLayer.push({ event, ...params, page_path: location.pathname });
}
