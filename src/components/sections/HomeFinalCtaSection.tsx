import { Link } from "react-router-dom";
import { BOOK_CALL_URL } from "../../config/links";

const primaryCtaClasses =
  "signal-sweep inline-flex items-center justify-center rounded-xl bg-accent-primary px-5 py-3 text-sm font-semibold tracking-wide text-bg-primary shadow-signal transition-all duration-200 hover:-translate-y-0.5";

export function HomeFinalCtaSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="site-container">
        <div className="rounded-2xl border border-border-base bg-bg-surface p-8 sm:p-10">
          <h2 className="max-w-3xl font-heading text-3xl leading-tight text-text-primary sm:text-4xl">
            Tu empresa puede operar mejor y vender más.
          </h2>
          <p className="mt-3 text-lg text-text-secondary">Hablemos.</p>
          <div className="mt-8">
            <Link to={BOOK_CALL_URL} className={primaryCtaClasses} aria-label="Agendar llamada">
              Agendar llamada
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
