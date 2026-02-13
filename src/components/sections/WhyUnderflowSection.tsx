const differentiators = [
  "No hacemos “solo diseño”: construimos sistemas.",
  "Base técnica sólida y escalable.",
  "Pensado para crecimiento a largo plazo.",
  "Integraciones reales con tu operación.",
];

export function WhyUnderflowSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="site-container grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-start">
        <div>
          <h2 className="font-heading text-3xl leading-tight text-text-primary sm:text-4xl">Por qué Underflow Labs</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-text-secondary">
            Somos un equipo de ingenieros en sistemas enfocados en resultados reales. No solo diseñamos interfaces:
            construimos soluciones escalables, medibles y bien arquitecturadas desde el día uno.
          </p>
        </div>

        <ul className="space-y-3 rounded-2xl border border-border-base bg-bg-surface p-6" aria-label="Diferenciales de Underflow Labs">
          {differentiators.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-text-secondary">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-accent-primary" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
