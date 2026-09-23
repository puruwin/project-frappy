import { trackEvent, getConsent } from "../utils/analytics";
export function validContact(value: string): boolean {
  const trimmed = value.trim();
  if (trimmed.includes("@")) return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
  if (!/^\+?[\d\s().-]+$/.test(trimmed)) return false;
  const digits = trimmed.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 15;
}
document
  .querySelectorAll<HTMLFormElement>("[data-contact-form]")
  .forEach((form) => {
    const contact = form.elements.namedItem("contact") as HTMLInputElement;
    const submit = form.querySelector<HTMLButtonElement>('[type="submit"]')!;
    const status = form.querySelector<HTMLElement>('[role="status"]')!;
    let started = false;
    let sending = false;
    const validate = () =>
      contact.setCustomValidity(
        validContact(contact.value)
          ? ""
          : "Introduce un email válido o un teléfono con entre 7 y 15 cifras.",
      );
    contact.addEventListener("input", validate);
    form.addEventListener("input", () => {
      if (!started && getConsent() === "accepted") {
        trackEvent("contact_form_start", { form_id: form.id });
        started = true;
      }
    });
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (sending) return;
      validate();
      if (!form.reportValidity()) return;
      sending = true;
      submit.disabled = true;
      submit.textContent = "Enviando…";
      status.textContent = "";
      const controller = new AbortController();
      const timeout = window.setTimeout(() => controller.abort(), 15000);
      try {
        const data = new FormData(form);
        // Formspree can use email as reply-to, but phone-only enquiries remain valid.
        if (contact.value.includes("@"))
          data.set("email", contact.value.trim());
        const response = await fetch(form.action, {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
          signal: controller.signal,
        });
        if (!response.ok) throw new Error("Submission rejected");
        const result: { ok?: boolean } = await response.json();
        if (result.ok !== true) throw new Error("Submission not confirmed");
        trackEvent("contact_form_submit", {
          form_id: form.id,
          form_status: "success",
        });
        form.reset();
        contact.setCustomValidity("");
        started = false;
        status.textContent =
          "Gracias por contarme qué está pasando. Te responderé por el medio que has indicado.";
      } catch {
        status.textContent =
          "No se ha podido confirmar el envío. Tus datos siguen aquí: puedes reintentarlo o escribirme por WhatsApp o email.";
      } finally {
        window.clearTimeout(timeout);
        sending = false;
        submit.disabled = false;
        submit.textContent = "Cuéntame el problema ↗";
        status.focus();
      }
    });
  });
