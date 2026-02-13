import { Link } from "react-router-dom";
import { BOOK_CALL_URL } from "../../config/links";
import { ServicePageContent } from "../../content/es/services";

const primaryCtaClasses =
  "signal-sweep inline-flex items-center justify-center rounded-xl bg-accent-primary px-5 py-3 text-sm font-semibold tracking-wide text-bg-primary shadow-signal transition-all duration-200 hover:-translate-y-0.5";

const secondaryCtaClasses =
  "inline-flex items-center justify-center rounded-xl border border-border-base bg-transparent px-5 py-3 text-sm font-semibold tracking-wide text-text-primary transition-all duration-200 hover:border-border-hover hover:bg-bg-surface";

type ServicePageTemplateProps = {
  content: ServicePageContent;
};

export function ServicePageTemplate({ content }: ServicePageTemplateProps) {
  return (
    <>
      <section className="border-b border-border-base py-16 sm:py-20">
        <div className="site-container">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-alt">{content.eyebrow}</p>
          <h1 className="mt-4 max-w-4xl font-heading text-4xl leading-tight sm:text-5xl">{content.title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-text-secondary sm:text-lg">
            {content.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to={BOOK_CALL_URL} className={primaryCtaClasses} aria-label={content.primaryCta}>
              {content.primaryCta}
            </Link>
            <Link to="/servicios" className={secondaryCtaClasses} aria-label={content.secondaryCta}>
              {content.secondaryCta}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="site-container grid gap-4 lg:grid-cols-2">
          <article className="rounded-2xl border border-border-base bg-bg-surface p-6 sm:p-8">
            <h2 className="font-heading text-2xl sm:text-3xl">{content.painsTitle}</h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-text-secondary sm:text-base">
              {content.pains.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-accent-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-border-base bg-bg-surface p-6 sm:p-8">
            <h2 className="font-heading text-2xl sm:text-3xl">{content.deliverablesTitle}</h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-text-secondary sm:text-base">
              {content.deliverables.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-accent-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="site-container">
          <h2 className="max-w-3xl font-heading text-3xl leading-tight sm:text-4xl">{content.processTitle}</h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4" aria-label={content.processTitle}>
            {content.process.map((step, index) => (
              <li key={step} className="rounded-2xl border border-border-base bg-bg-surface p-5">
                <p className="font-mono text-xs tracking-[0.16em] text-accent-alt">
                  0{index + 1}
                </p>
                <h3 className="mt-2 font-heading text-xl">{step}</h3>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="site-container">
          <div className="rounded-2xl border border-border-base bg-bg-surface p-8 sm:p-10">
            <h2 className="max-w-3xl font-heading text-3xl leading-tight sm:text-4xl">{content.closingTitle}</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-secondary">{content.closingBody}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to={BOOK_CALL_URL} className={primaryCtaClasses} aria-label={content.closingCta}>
                {content.closingCta}
              </Link>
              <Link to="/contacto" className={secondaryCtaClasses} aria-label="Hablar con el equipo">
                Hablar con el equipo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
