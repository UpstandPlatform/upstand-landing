import Image from "next/image";
import Link from "next/link";
import { Dictionary } from "@/i18n/types";
import { Locale, locales, localeDetails } from "@/i18n/config";
import { GithubIcon } from "@/components/ui/icons";

interface FooterProps {
  dict: Dictionary;
  currentLocale: Locale;
}

export function Footer({ dict, currentLocale }: FooterProps) {
  const { footer, nav } = dict;

  return (
    <footer className="border-t border-zinc-800/80 bg-[#090a0f] py-16 text-xs text-zinc-400">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {/* Brand Info */}
          <div className="col-span-2 space-y-3">
            <Link
              href={`/${currentLocale}`}
              className="flex items-center gap-2 text-zinc-100 hover:text-white transition-colors"
            >
              <div className="flex size-7 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900">
                <Image
                  src="/brand/icon.svg"
                  alt="Upstand"
                  width={16}
                  height={16}
                  className="size-4"
                />
              </div>
              <span className="font-semibold text-sm tracking-tight">
                Upstand
              </span>
            </Link>

            <p className="max-w-sm text-xs leading-relaxed text-zinc-400">
              {footer.description}
            </p>

            <div className="pt-2 font-mono text-[11px] text-zinc-400 flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              <span>v0.14.0 · Apache 2.0 License</span>
            </div>
          </div>

          {/* Platform Links */}
          <div className="space-y-2.5">
            <h4 className="font-medium text-zinc-200">
              {footer.headings.platform}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#models" className="hover:text-zinc-200 transition-colors">
                  {footer.links.models}
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-zinc-200 transition-colors">
                  {footer.links.capabilities}
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-zinc-200 transition-colors">
                  {footer.links.architecture}
                </a>
              </li>
              <li>
                <a href="#compare" className="hover:text-zinc-200 transition-colors">
                  {nav.compare}
                </a>
              </li>
            </ul>
          </div>

          {/* Studio Links */}
          <div className="space-y-2.5">
            <h4 className="font-medium text-zinc-200">
              {footer.headings.studio}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#manifesto" className="hover:text-zinc-200 transition-colors">
                  {footer.links.manifesto}
                </a>
              </li>
              <li>
                <a href="#ecosystem" className="hover:text-zinc-200 transition-colors">
                  {footer.links.ecosystem}
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:text-zinc-200 transition-colors">
                  {footer.links.partners}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-zinc-200 transition-colors">
                  {nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Resources & Open Standards Links */}
          <div className="space-y-2.5">
            <h4 className="font-medium text-zinc-200">
              {footer.headings.resources}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://upstand.dev/docs"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-zinc-200 transition-colors"
                >
                  {footer.links.docs}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/UpstandPlatform/upstand"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-zinc-200 transition-colors"
                >
                  {footer.links.github}
                </a>
              </li>
              <li>
                <a href="/llms.txt" className="hover:text-zinc-200 transition-colors font-mono">
                  llms.txt
                </a>
              </li>
              <li>
                <a href="/sitemap.xml" className="hover:text-zinc-200 transition-colors font-mono">
                  sitemap.xml
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Language Switcher */}
        <div className="mt-12 flex flex-col gap-4 border-t border-zinc-800/80 pt-6 sm:flex-row sm:items-center sm:justify-between text-[11px] text-zinc-400">
          <div>
            &copy; 2026 {footer.rights}
          </div>

          {/* Inline Language switcher */}
          <div className="flex flex-wrap gap-2.5 font-mono">
            {locales.map((loc) => {
              const isActive = loc === currentLocale;
              return (
                <Link
                  key={loc}
                  href={`/${loc}`}
                  className={`hover:text-zinc-200 transition-colors ${
                    isActive ? "text-zinc-100 font-medium underline" : "text-zinc-400"
                  }`}
                >
                  {localeDetails[loc]?.nativeName || loc}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
