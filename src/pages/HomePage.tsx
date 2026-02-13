import { HomeFinalCtaSection } from "../components/sections/HomeFinalCtaSection";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { HomeHeroSection } from "../components/sections/HomeHeroSection";
import { ProcessStepsSection } from "../components/sections/ProcessStepsSection";
import { ServicesDualSection } from "../components/sections/ServicesDualSection";
import { TeamSection } from "../components/sections/TeamSection";
import { WhyUnderflowSection } from "../components/sections/WhyUnderflowSection";
import { PageMeta } from "../components/seo/PageMeta";

export function HomePage() {
  return (
    <>
      <PageMeta
        title="Underflow Labs | Ingeniería digital para empresas"
        description="Diseñamos websites que convierten, automatizamos procesos y desarrollamos software a medida para que tu empresa venda más y opere mejor."
        path="/"
      />
      <HomeHeroSection />

      <ScrollReveal width="100%" variant="fade" delay={0.02} amount={0.16}>
        <ServicesDualSection />
      </ScrollReveal>

      <ScrollReveal width="100%" variant="fade" delay={0.04} amount={0.16}>
        <WhyUnderflowSection />
      </ScrollReveal>

      <ScrollReveal width="100%" variant="slide" delay={0.04} amount={0.18}>
        <ProcessStepsSection />
      </ScrollReveal>

      <TeamSection />

      <ScrollReveal width="100%" variant="fade" delay={0.02} amount={0.14}>
        <HomeFinalCtaSection />
      </ScrollReveal>
    </>
  );
}
