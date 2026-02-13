import { ServicePageTemplate } from "../components/sections/ServicePageTemplate";
import { PageMeta } from "../components/seo/PageMeta";
import { websitesService } from "../content/es/services";

export function WebsitesServicePage() {
  return (
    <>
      <PageMeta
        title="Servicio de Websites | Underflow Labs"
        description="Diseñamos websites que convierten para empresas que buscan vender con claridad y escalar con base técnica."
        path="/servicios/websites"
      />
      <ServicePageTemplate content={websitesService} />
    </>
  );
}
