import { defaultLocale, Locale, isValidLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { StudioManifesto } from "@/components/landing/StudioManifesto";
import { EcosystemProjects } from "@/components/landing/EcosystemProjects";
import { IdeaContactForm } from "@/components/landing/IdeaContactForm";
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
    <div className="studio-page">
      <Navbar dict={dict} currentLocale={currentLocale} />
      <main>
        <Hero dict={dict} />
        <StudioManifesto dict={dict} />
        <EcosystemProjects dict={dict} />
        <IdeaContactForm dict={dict} />
      </main>
      <Footer dict={dict} currentLocale={currentLocale} />
    </div>
  );
}
