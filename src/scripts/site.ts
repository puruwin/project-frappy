import {
  getConsent,
  setConsent,
  loadAnalytics,
  trackEvent,
} from "../utils/analytics";
const banner = document.querySelector<HTMLElement>("#cookie-consent");
let settingsTrigger: HTMLElement | null = null;
let viewSent = false;
function trackPageView() {
  const event = document.body.dataset.viewEvent;
  if (viewSent || getConsent() !== "accepted") return;
  if (event === "solution_view" || event === "case_study_view") {
    trackEvent(event, { content_id: document.body.dataset.viewId || "" });
    viewSent = true;
  }
}
if (getConsent() === null && banner) banner.hidden = false;
loadAnalytics();
trackPageView();
document
  .querySelectorAll<HTMLElement>("[data-cookie-settings]")
  .forEach((button) =>
    button.addEventListener("click", () => {
      settingsTrigger = button;
      if (banner) {
        banner.hidden = false;
        banner.focus();
      }
    }),
  );
document.querySelectorAll<HTMLElement>("[data-consent]").forEach((button) =>
  button.addEventListener("click", () => {
    const choice = button.dataset.consent;
    if (choice !== "accepted" && choice !== "rejected") return;
    const withdrawing = getConsent() === "accepted" && choice === "rejected";
    setConsent(choice);
    if (banner) banner.hidden = true;
    settingsTrigger?.focus();
    trackPageView();
    // A reload removes third-party listeners already installed by the container.
    if (withdrawing) location.reload();
  }),
);
document.addEventListener("click", (event) => {
  const target =
    event.target instanceof Element
      ? event.target.closest<HTMLAnchorElement>("a")
      : null;
  if (!target) return;
  const locationName =
    target.closest<HTMLElement>("[data-location]")?.dataset.location ||
    "content";
  const href = target.getAttribute("href") || "";
  if (target.dataset.event === "hero_cta_click")
    trackEvent("hero_cta_click", {
      button_location: locationName,
      cta_id: target.dataset.cta || "primary",
    });
  if (/^https:\/\/(wa\.me|api\.whatsapp\.com)\//.test(href))
    trackEvent("whatsapp_click", { button_location: locationName });
  if (href.startsWith("mailto:"))
    trackEvent("email_click", { button_location: locationName });
});
