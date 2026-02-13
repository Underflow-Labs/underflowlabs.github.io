import { ContactFormSection } from "../components/sections/ContactFormSection";
import { PageMeta } from "../components/seo/PageMeta";
import { contactContent } from "../content/es/contact";
import { CONTACT_EMAIL } from "../config/links";

const primaryCtaClasses =
  "signal-sweep inline-flex items-center justify-center rounded-xl bg-accent-primary px-5 py-3 text-sm font-semibold tracking-wide text-bg-primary shadow-signal transition-all duration-200 hover:-translate-y-0.5";

const secondaryCtaClasses =
  "inline-flex items-center justify-center rounded-xl border border-border-base bg-transparent px-5 py-3 text-sm font-semibold tracking-wide text-text-primary transition-all duration-200 hover:border-border-hover hover:bg-bg-surface";

export function ContactPage() {
  return (
    <>
      <PageMeta
        title="Contacto | Underflow Labs"
        description="Agendá un diagnóstico para mejorar ventas y operación con websites, automatización o software a medida."
        path="/contacto"
      />

      <header className="border-b border-border-base py-16 sm:py-20">
        <div className="site-container">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-alt">{contactContent.eyebrow}</p>
          <h1 className="mt-4 max-w-4xl font-heading text-4xl leading-tight sm:text-5xl">{contactContent.title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-text-secondary sm:text-lg">
            {contactContent.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#formulario-diagnostico" className={primaryCtaClasses} aria-label={contactContent.primaryCta}>
              {contactContent.primaryCta}
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className={secondaryCtaClasses}
              aria-label={contactContent.secondaryCta}
            >
              {contactContent.secondaryCta}
            </a>
          </div>
        </div>
      </header>

      <ContactFormSection />
    </>
  );
}
