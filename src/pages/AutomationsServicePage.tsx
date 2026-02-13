import { ServicePageTemplate } from "../components/sections/ServicePageTemplate";
import { PageMeta } from "../components/seo/PageMeta";
import { automationsService } from "../content/es/services";

export function AutomationsServicePage() {
  return (
    <>
      <PageMeta
        title="Servicio de Automatización | Underflow Labs"
        description="Automatizamos procesos críticos para reducir fricción operativa y mejorar velocidad de ejecución."
        path="/servicios/automatizaciones"
      />
      <ServicePageTemplate content={automationsService} />
    </>
  );
}
