import { FormEvent, useState } from "react";
import { contactContent } from "../../content/es/contact";
import { BOOK_CALL_URL, CONTACT_EMAIL, CONTACT_FORM_ENDPOINT } from "../../config/links";
import { Button } from "../ui/Button";
import { ScrollReveal } from "../ui/ScrollReveal";

type FormState = "idle" | "busy" | "done" | "error";

export function ContactFormSection() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");
    setState("busy");

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);

    formData.set("_subject", "Nuevo diagnostico desde underflowlabs.com");
    formData.set("_template", "table");
    formData.set("_captcha", "false");

    try {
      const response = await fetch(CONTACT_FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const payload = (await response.json()) as { success?: string; message?: string };

      if (!response.ok || payload.success !== "true") {
        throw new Error(payload.message || "No se pudo enviar el formulario.");
      }

      setState("done");
      formElement.reset();
    } catch (error) {
      setState("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "No se pudo enviar el formulario. Escribinos directo por email.",
      );
    }
  }

  return (
    <section id="formulario-diagnostico" className="py-16 sm:py-20">
      <div className="site-container grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <ScrollReveal width="100%" variant="fade" delay={0.02} amount={0.16}>
          <form onSubmit={onSubmit} className="rounded-2xl border border-border-base bg-bg-surface p-6 sm:p-8">
            <h2 className="font-heading text-2xl">{contactContent.formTitle}</h2>
            <p className="mt-2 text-sm text-text-secondary">{contactContent.formIntro}</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm">
                <span className="text-text-secondary">Nombre</span>
                <input
                  required
                  name="nombre"
                  autoComplete="name"
                  className="w-full rounded-lg border border-border-base bg-bg-elevated px-3 py-2 text-text-primary outline-none transition-colors focus:border-border-hover"
                />
              </label>
              <label className="space-y-2 text-sm">
                <span className="text-text-secondary">Email corporativo</span>
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="w-full rounded-lg border border-border-base bg-bg-elevated px-3 py-2 text-text-primary outline-none transition-colors focus:border-border-hover"
                />
              </label>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm">
                <span className="text-text-secondary">Empresa</span>
                <input
                  required
                  name="empresa"
                  autoComplete="organization"
                  className="w-full rounded-lg border border-border-base bg-bg-elevated px-3 py-2 text-text-primary outline-none transition-colors focus:border-border-hover"
                />
              </label>
              <label className="space-y-2 text-sm">
                <span className="text-text-secondary">Servicio de interes</span>
                <select
                  required
                  name="servicio"
                  className="w-full rounded-lg border border-border-base bg-bg-elevated px-3 py-2 text-text-primary outline-none transition-colors focus:border-border-hover"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Seleccionar
                  </option>
                  <option value="websites">Websites</option>
                  <option value="automatizaciones">Automatizacion</option>
                  <option value="software">Software a medida</option>
                  <option value="multiple">Mas de uno</option>
                </select>
              </label>
            </div>

            <label className="mt-4 block space-y-2 text-sm">
              <span className="text-text-secondary">Que queres mejorar?</span>
              <textarea
                required
                rows={5}
                name="mensaje"
                className="w-full rounded-lg border border-border-base bg-bg-elevated px-3 py-2 text-text-primary outline-none transition-colors focus:border-border-hover"
              />
            </label>

            <input
              type="text"
              name="_honey"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="primary" isBusy={state === "busy"} type="submit">
                Enviar diagnostico
              </Button>
              <a href={BOOK_CALL_URL}>
                <Button variant="outline" type="button">
                  Agendar diagnostico
                </Button>
              </a>
            </div>

            {state === "done" ? (
              <p className="mt-4 text-sm text-accent-primary">{contactContent.success}</p>
            ) : null}
            {state === "error" ? (
              <p className="mt-4 text-sm text-red-300">
                {errorMessage}{" "}
                <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>
                  {CONTACT_EMAIL}
                </a>
              </p>
            ) : null}
          </form>
        </ScrollReveal>

        <ScrollReveal width="100%" variant="slide" delay={0.04} amount={0.18}>
          <aside className="space-y-4">
            <article className="rounded-2xl border border-border-base bg-bg-surface p-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-alt">{contactContent.nextTitle}</p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-text-secondary">
                {contactContent.nextSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </article>

            <article className="rounded-2xl border border-border-base bg-bg-surface p-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-alt">{contactContent.directTitle}</p>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                Si preferis, escribinos a{" "}
                <a className="text-accent-primary hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </article>
          </aside>
        </ScrollReveal>
      </div>
    </section>
  );
}
