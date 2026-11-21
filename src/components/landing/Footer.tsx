import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Dictionary } from "@/i18n/types";
import { Locale, locales, localeDetails } from "@/i18n/config";

interface FooterProps {
  dict: Dictionary;
  currentLocale: Locale;
}

export function Footer({ dict, currentLocale }: FooterProps) {
  const { footer, nav } = dict;

  return (
    <footer className="studio-footer">
      <div className="studio-shell">
        <div className="studio-footer__main">
          <div className="studio-footer__brand-block">
            <Link href={`/${currentLocale}`} className="studio-brand studio-footer__brand">
              <Image src="/brand/icon.svg" alt="" width={28} height={28} />
              <span>Upstand</span>
            </Link>
            <p>{footer.description}</p>
            <a className="studio-footer__email" href="mailto:hello@upstand.dev">
              hello@upstand.dev<ArrowUpRight className="icon-directional" aria-hidden="true" />
            </a>
          </div>

          <div className="studio-footer__group">
            <h2>{footer.headings.studio}</h2>
            <a href="#studio">{footer.links.manifesto}</a>
            <a href="#work">{footer.links.ecosystem}</a>
            <a href="#contact">{nav.contact}</a>
          </div>

          <div className="studio-footer__group">
            <h2>{footer.headings.resources}</h2>
            <a href="https://upstand.dev/docs" target="_blank" rel="noreferrer">
              {footer.links.docs}<ArrowUpRight className="icon-directional" aria-hidden="true" />
            </a>
            <a href="https://github.com/UpstandPlatform/upstand" target="_blank" rel="noreferrer">
              {footer.links.github}<ArrowUpRight className="icon-directional" aria-hidden="true" />
            </a>
            <a href="/llms.txt">llms.txt</a>
          </div>
        </div>

        <div className="studio-footer__bottom">
          <span>© 2026 Upstand. {footer.rights}</span>
          <div className="studio-footer__languages" aria-label={nav.language}>
            {locales.map((locale) => (
              <Link
                key={locale}
                href={`/${locale}`}
                aria-current={locale === currentLocale ? "page" : undefined}
                className={locale === currentLocale ? "is-active" : undefined}
              >
                {localeDetails[locale]?.nativeName || locale}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
