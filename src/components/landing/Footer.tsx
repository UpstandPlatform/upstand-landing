import Image from "next/image";
import Link from "next/link";
import { Dictionary } from "@/i18n/types";
import { Locale, locales, localeDetails } from "@/i18n/config";
import { FileText, Bot, Shield, CheckCircle } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";

interface FooterProps {
  dict: Dictionary;
  currentLocale: Locale;
}

export function Footer({ dict, currentLocale }: FooterProps) {
  return (
    <footer className="border-t border-slate-800 bg-[#04060b] py-14 text-xs sm:text-sm text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href={`/${currentLocale}`}
              className="flex items-center gap-2.5 transition-opacity hover:opacity-90"
            >
              <div className="relative flex size-8 items-center justify-center rounded-xl bg-gradient-to-tr from-[#0068ff] to-[#38bdf8] p-0.5">
                <div className="flex size-full items-center justify-center rounded-[10px] bg-[#070a12]">
                  <Image
                    src="/brand/icon.svg"
                    alt="Upstand"
                    width={18}
                    height={18}
                    className="size-4.5"
                  />
                </div>
              </div>
              <span className="font-bold text-lg text-white">
                Upstand<span className="text-[#38bdf8]">.dev</span>
              </span>
            </Link>

            <p className="max-w-sm text-xs leading-relaxed text-slate-400">
              {dict.footer.description}
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="flex size-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-slate-300">
                All Systems Operational · v0.14.0
              </span>
            </div>
          </div>

          {/* Links Column 1: Product */}
          <div>
            <h4 className="font-semibold text-white tracking-wider uppercase text-xs">
              {dict.footer.headings.product}
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs">
              <li>
                <a href="#features" className="hover:text-[#38bdf8] transition-colors">
                  {dict.nav.features}
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-[#38bdf8] transition-colors">
                  {dict.nav.architecture}
                </a>
              </li>
              <li>
                <a href="#translator" className="hover:text-[#38bdf8] transition-colors">
                  {dict.composeTranslator.badge}
                </a>
              </li>
              <li>
                <a href="#compare" className="hover:text-[#38bdf8] transition-colors">
                  {dict.nav.compare}
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-[#38bdf8] transition-colors">
                  {dict.nav.calculator}
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Resources & GEO */}
          <div>
            <h4 className="font-semibold text-white tracking-wider uppercase text-xs">
              {dict.footer.headings.resources}
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs">
              <li>
                <a
                  href="https://upstand.dev/docs"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#38bdf8] transition-colors"
                >
                  {dict.footer.links.docs}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/UpstandPlatform/upstand/releases"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#38bdf8] transition-colors"
                >
                  {dict.footer.links.releases}
                </a>
              </li>
              <li>
                <a
                  href="/llms.txt"
                  target="_blank"
                  className="hover:text-[#38bdf8] transition-colors font-mono text-[11px] text-[#38bdf8]"
                >
                  /llms.txt (AI GEO Standard)
                </a>
              </li>
              <li>
                <a
                  href="/llms-full.txt"
                  target="_blank"
                  className="hover:text-[#38bdf8] transition-colors font-mono text-[11px] text-slate-400"
                >
                  /llms-full.txt
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Community & Compliance */}
          <div>
            <h4 className="font-semibold text-white tracking-wider uppercase text-xs">
              {dict.footer.headings.community}
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs">
              <li>
                <a
                  href="https://github.com/UpstandPlatform/upstand"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#38bdf8] transition-colors flex items-center gap-1.5"
                >
                  <GithubIcon className="size-3.5" />
                  <span>{dict.footer.links.github}</span>
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/upstand"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#38bdf8] transition-colors"
                >
                  {dict.footer.links.discord}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/UpstandPlatform/upstand/blob/master/SECURITY.md"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#38bdf8] transition-colors flex items-center gap-1.5"
                >
                  <Shield className="size-3.5" />
                  <span>{dict.footer.links.securityPolicy}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Language Selector & Copyright */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between border-t border-slate-800/80 pt-8 gap-4">
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="text-slate-500">{dict.nav.language}:</span>
            {locales.map((loc) => {
              const details = localeDetails[loc];
              const isActive = loc === currentLocale;
              return (
                <Link
                  key={loc}
                  href={`/${loc}`}
                  className={`rounded px-1.5 py-0.5 text-[11px] transition-colors ${
                    isActive
                      ? "bg-[#0068ff]/20 font-bold text-[#38bdf8]"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {details.flag} {details.nativeName}
                </Link>
              );
            })}
          </div>

          <div className="text-center sm:text-right text-[11px] text-slate-500">
            <p>{dict.footer.rights}</p>
            <p className="mt-0.5">{dict.footer.openSourceNotice}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
