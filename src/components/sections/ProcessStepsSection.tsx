const processSteps = [
  "Diagnóstico estratégico",
  "Propuesta técnica clara",
  "Desarrollo iterativo",
  "Implementación y optimización",
];

export function ProcessStepsSection() {
  return (
    <section id="como-trabajamos" className="py-16 sm:py-20">
      <div className="site-container">
        <h2 className="max-w-3xl font-heading text-3xl leading-tight text-text-primary sm:text-4xl">Cómo trabajamos</h2>

        <ol className="mt-10 flex flex-col gap-5 lg:flex-row lg:gap-4" aria-label="Proceso de trabajo">
          {processSteps.map((step, index) => (
            <li key={step} className="relative flex-1 pl-8 lg:pl-0 lg:pt-8">
              {index < processSteps.length - 1 ? (
                <span
                  className="absolute left-[0.44rem] top-10 h-[calc(100%-0.9rem)] w-px bg-border-base lg:left-[calc(50%+0.9rem)] lg:top-[0.45rem] lg:h-px lg:w-[calc(100%-1.8rem)]"
                  aria-hidden="true"
                />
              ) : null}
              <span
                className="absolute left-0 top-5 h-4 w-4 rounded-full border border-accent-primary bg-bg-primary lg:left-1/2 lg:top-0 lg:-translate-x-1/2"
                aria-hidden="true"
              />

              <article className="h-full rounded-2xl border border-border-base bg-bg-surface p-5">
                <p className="font-mono text-xs tracking-[0.16em] text-accent-alt">0{index + 1}</p>
                <h3 className="mt-2 font-heading text-xl text-text-primary">{step}</h3>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
