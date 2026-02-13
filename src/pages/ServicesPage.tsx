import { Link } from "react-router-dom";
import { BOOK_CALL_URL } from "../config/links";
import { PageMeta } from "../components/seo/PageMeta";
import { servicesHub } from "../content/es/services";

const primaryCtaClasses =
  "signal-sweep inline-flex items-center justify-center rounded-xl bg-accent-primary px-5 py-3 text-sm font-semibold tracking-wide text-bg-primary shadow-signal transition-all duration-200 hover:-translate-y-0.5";

const secondaryCtaClasses =
  "inline-flex items-center justify-center rounded-xl border border-border-base bg-transparent px-5 py-3 text-sm font-semibold tracking-wide text-text-primary transition-all duration-200 hover:border-border-hover hover:bg-bg-surface";

export function ServicesPage() {
  return (
    <>
      <PageMeta
        title="Servicios | Underflow Labs"
        description="Servicios de ingeniería digital: websites que convierten, automatización inteligente y software a medida."
        path="/servicios"
      />

      <section className="border-b border-border-base py-16 sm:py-20">
        <div className="site-container">
          <h1 className="max-w-4xl font-heading text-4xl leading-tight sm:text-5xl">{servicesHub.title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-text-secondary sm:text-lg">
            {servicesHub.description}
          </p>
          <div className="mt-8">
            <Link to={BOOK_CALL_URL} className={primaryCtaClasses} aria-label="Agendar diagnóstico">
              Agendar diagnóstico
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="site-container grid gap-4 md:grid-cols-3">
          {servicesHub.cards.map((card) => (
            <article key={card.path} className="h-full rounded-2xl border border-border-base bg-bg-surface p-6">
              <h2 className="font-heading text-2xl">{card.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{card.description}</p>
              <Link to={card.path} className="mt-6 inline-block text-sm font-semibold text-accent-primary hover:underline">
                {card.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="site-container grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <div>
            <h2 className="font-heading text-3xl leading-tight sm:text-4xl">{servicesHub.whyTitle}</h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-text-secondary">{servicesHub.whyBody}</p>
          </div>

          <ul className="space-y-3 rounded-2xl border border-border-base bg-bg-surface p-6">
            {servicesHub.whyBullets.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-text-secondary">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-accent-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="site-container">
          <div className="rounded-2xl border border-border-base bg-bg-surface p-8 sm:p-10">
            <h2 className="max-w-3xl font-heading text-3xl leading-tight sm:text-4xl">{servicesHub.closingTitle}</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-secondary">{servicesHub.closingBody}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to={BOOK_CALL_URL} className={primaryCtaClasses} aria-label={servicesHub.closingCta}>
                {servicesHub.closingCta}
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
