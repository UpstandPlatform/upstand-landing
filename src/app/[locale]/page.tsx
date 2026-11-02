import { defaultLocale, Locale, isValidLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { DeploymentModels } from "@/components/landing/DeploymentModels";
import { StudioManifesto } from "@/components/landing/StudioManifesto";
import { EcosystemProjects } from "@/components/landing/EcosystemProjects";
import { CapabilitiesGrid } from "@/components/landing/CapabilitiesGrid";
import { ArchitectureVisualizer } from "@/components/landing/ArchitectureVisualizer";
import { ComposeTranslator } from "@/components/landing/ComposeTranslator";
import { PartnersSection } from "@/components/landing/PartnersSection";
import { ComparisonTable } from "@/components/landing/ComparisonTable";
import { FaqAccordion } from "@/components/landing/FaqAccordion";
import { IdeaContactForm } from "@/components/landing/IdeaContactForm";
import { CtaBanner } from "@/components/landing/CtaBanner";
import { Footer } from "@/components/landing/Footer";

export default async function LocalizedLandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const currentLocale: Locale = isValidLocale(locale) ? locale : defaultLocale;
  const dict = getDictionary(currentLocale);

  return (
    <div className="flex min-h-screen flex-col bg-[#090a0f] text-zinc-100 selection:bg-blue-600 selection:text-white">
      <Navbar dict={dict} currentLocale={currentLocale} />
      <main className="flex-1">
        <Hero dict={dict} />
        <DeploymentModels dict={dict} />
        <StudioManifesto dict={dict} />
        <EcosystemProjects dict={dict} />
        <CapabilitiesGrid dict={dict} />
        <ArchitectureVisualizer dict={dict} />
        <ComposeTranslator dict={dict} />
        <PartnersSection dict={dict} />
        <ComparisonTable dict={dict} />
        <FaqAccordion dict={dict} />
        <IdeaContactForm dict={dict} />
        <CtaBanner dict={dict} />
      </main>
      <Footer dict={dict} currentLocale={currentLocale} />
    </div>
  );
}
