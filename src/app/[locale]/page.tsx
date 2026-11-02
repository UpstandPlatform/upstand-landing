import { defaultLocale, Locale, isValidLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { StatsSection } from "@/components/landing/StatsSection";
import { FeaturesGrid } from "@/components/landing/FeaturesGrid";
import { ArchitectureVisualizer } from "@/components/landing/ArchitectureVisualizer";
import { ComposeTranslator } from "@/components/landing/ComposeTranslator";
import { ComparisonTable } from "@/components/landing/ComparisonTable";
import { TcoCalculator } from "@/components/landing/TcoCalculator";
import { Testimonials } from "@/components/landing/Testimonials";
import { FaqAccordion } from "@/components/landing/FaqAccordion";
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
    <div className="flex min-h-screen flex-col bg-[#070a12] text-slate-100">
      <Navbar dict={dict} currentLocale={currentLocale} />
      <main className="flex-1">
        <Hero dict={dict} />
        <StatsSection dict={dict} />
        <FeaturesGrid dict={dict} />
        <ArchitectureVisualizer dict={dict} />
        <ComposeTranslator dict={dict} />
        <ComparisonTable dict={dict} />
        <TcoCalculator dict={dict} />
        <Testimonials dict={dict} />
        <FaqAccordion dict={dict} />
        <CtaBanner dict={dict} />
      </main>
      <Footer dict={dict} currentLocale={currentLocale} />
    </div>
  );
}
