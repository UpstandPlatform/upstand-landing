"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Globe, Menu, X } from "lucide-react";
import type { Dictionary } from "@/i18n/types";
import { Locale, locales, localeDetails } from "@/i18n/config";

interface NavbarProps {
  dict: Dictionary;
  currentLocale: Locale;
}

export function Navbar({ dict, currentLocale }: NavbarProps) {
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { nav } = dict;
  const links = [
    { href: "#studio", label: nav.manifesto },
    { href: "#work", label: nav.ecosystem },
    { href: "#contact", label: nav.contact },
  ];

  return (
    <header className="studio-header">
      <div className="studio-shell studio-header__inner">
        <Link href={`/${currentLocale}`} className="studio-brand" aria-label="Upstand home">
          <Image src="/brand/icon.svg" alt="" width={28} height={28} priority />
          <span>Upstand</span>
          <span className="studio-brand__descriptor">Independent studio</span>
        </Link>

        <nav className="studio-nav" aria-label="Main navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>

        <div className="studio-header__actions">
          <div className="studio-language">
            <button
              type="button"
              className="studio-language__trigger"
              onClick={() => setLangMenuOpen((open) => !open)}
              aria-label={nav.language}
              aria-expanded={langMenuOpen}
              aria-haspopup="menu"
            >
              <Globe aria-hidden="true" />
              <span>{localeDetails[currentLocale]?.nativeName || currentLocale}</span>
            </button>

            {langMenuOpen && (
              <>
                <button
                  type="button"
                  className="studio-language__scrim"
                  onClick={() => setLangMenuOpen(false)}
                  aria-label="Close language menu"
                />
                <div className="studio-language__menu" role="menu">
                  {locales.map((locale) => {
                    const info = localeDetails[locale];
                    const isActive = locale === currentLocale;

                    return (
                      <Link
                        key={locale}
                        href={`/${locale}`}
                        role="menuitem"
                        onClick={() => setLangMenuOpen(false)}
                        aria-current={isActive ? "page" : undefined}
                        className={isActive ? "is-active" : undefined}
                      >
                        <span><span aria-hidden="true">{info.flag}</span>{info.nativeName}</span>
                        <span className="studio-language__code" dir="ltr">{locale}</span>
                      </Link>
                    );
                  })}
                </div>
              </>
            )}
          </div>

          <a href="#contact" className="studio-header__cta">
            {nav.getStarted}
            <ArrowUpRight className="icon-directional" aria-hidden="true" />
          </a>

          <button
            type="button"
            className="studio-menu-toggle"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="studio-mobile-nav" aria-label="Mobile navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)}>
              {link.label}<ArrowUpRight className="icon-directional" aria-hidden="true" />
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
