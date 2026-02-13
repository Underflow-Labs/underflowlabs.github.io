import { ServicePageTemplate } from "../components/sections/ServicePageTemplate";
import { PageMeta } from "../components/seo/PageMeta";
import { softwareService } from "../content/es/services";

export function SoftwareServicePage() {
  return (
    <>
      <PageMeta
        title="Servicio de Software a Medida | Underflow Labs"
        description="Desarrollamos software a medida para resolver necesidades críticas de negocio con arquitectura escalable."
        path="/servicios/software"
      />
      <ServicePageTemplate content={softwareService} />
    </>
  );
}
