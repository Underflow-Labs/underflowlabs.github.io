import { Panel } from "../ui/Panel";

const services = [
  {
    title: "Websites que convierten",
    description: "Creamos sitios modernos, rápidos y optimizados para generar clientes reales.",
  },
  {
    title: "Automatización inteligente",
    description:
      "Reducimos tareas manuales y conectamos tus herramientas para que tu equipo trabaje mejor.",
  },
  {
    title: "Software a medida",
    description:
      "Desarrollamos sistemas y aplicaciones personalizadas para resolver necesidades específicas de tu empresa.",
  },
];

export function ServicesDualSection() {
  return (
    <section id="que-hacemos" className="py-16 sm:py-20">
      <div className="site-container">
        <h2 className="max-w-3xl font-heading text-3xl leading-tight text-text-primary sm:text-4xl">
          Construimos la infraestructura digital de tu empresa.
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <Panel key={service.title} className="h-full">
              <h3 className="font-heading text-2xl text-text-primary">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{service.description}</p>
            </Panel>
          ))}
        </div>
      </div>
    </section>
  );
}
