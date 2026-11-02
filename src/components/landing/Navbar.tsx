"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Dictionary } from "@/i18n/types";
import { Locale, locales, localeDetails } from "@/i18n/config";
import { Globe, Menu, X, ArrowUpRight, Terminal } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";

interface NavbarProps {
  dict: Dictionary;
  currentLocale: Locale;
}

export function Navbar({ dict, currentLocale }: NavbarProps) {
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-[#070a12]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand logo & name */}
        <Link
          href={`/${currentLocale}`}
          className="flex items-center gap-3 transition-opacity hover:opacity-90"
        >
          <div className="relative flex size-9 items-center justify-center rounded-xl bg-gradient-to-tr from-[#0068ff] via-[#38bdf8] to-[#818cf8] p-0.5 shadow-lg shadow-[#0068ff]/20">
            <div className="flex size-full items-center justify-center rounded-[10px] bg-[#070a12]">
              <Image
                src="/brand/icon.svg"
                alt="Upstand"
                width={22}
                height={22}
                className="size-5.5"
                priority
              />
            </div>
          </div>
          <span className="font-bold text-xl tracking-tight text-white">
            Upstand<span className="text-[#38bdf8]">.dev</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-300 md:flex">
          <a
            href="#features"
            className="transition-colors hover:text-[#38bdf8]"
          >
            {dict.nav.features}
          </a>
          <a
            href="#architecture"
            className="transition-colors hover:text-[#38bdf8]"
          >
            {dict.nav.architecture}
          </a>
          <a
            href="#translator"
            className="transition-colors hover:text-[#38bdf8]"
          >
            {dict.composeTranslator.badge}
          </a>
          <a
            href="#compare"
            className="transition-colors hover:text-[#38bdf8]"
          >
            {dict.nav.compare}
          </a>
          <a
            href="#calculator"
            className="transition-colors hover:text-[#38bdf8]"
          >
            {dict.nav.calculator}
          </a>
          <a
            href="#faq"
            className="transition-colors hover:text-[#38bdf8]"
          >
            {dict.nav.faq}
          </a>
        </nav>

        {/* Right side actions: Language Picker + GitHub + CTA */}
        <div className="flex items-center gap-3">
          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/60 px-2.5 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:border-slate-700 hover:bg-slate-800"
              aria-label={dict.nav.language}
            >
              <Globe className="size-3.5 text-slate-400" />
              <span>{localeDetails[currentLocale].flag}</span>
              <span className="hidden sm:inline">
                {localeDetails[currentLocale].nativeName}
              </span>
            </button>

            {langMenuOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setLangMenuOpen(false)}
                />
                <div className="absolute right-0 top-full z-50 mt-2 w-48 rounded-xl border border-slate-800 bg-[#0b101d] p-1.5 shadow-2xl shadow-black/80 backdrop-blur-xl">
                  <div className="px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    {dict.nav.language}
                  </div>
                  <div className="mt-1 space-y-0.5">
                    {locales.map((loc) => {
                      const details = localeDetails[loc];
                      const isActive = loc === currentLocale;
                      return (
                        <Link
                          key={loc}
                          href={`/${loc}`}
                          onClick={() => setLangMenuOpen(false)}
                          className={`flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-xs transition-colors ${
                            isActive
                              ? "bg-[#0068ff]/15 font-semibold text-[#38bdf8]"
                              : "text-slate-300 hover:bg-slate-800/80 hover:text-white"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span>{details.flag}</span>
                            <span>{details.nativeName}</span>
                          </div>
                          {isActive && (
                            <span className="size-1.5 rounded-full bg-[#38bdf8]" />
                          )}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* GitHub Star Pill */}
          <a
            href="https://github.com/UpstandPlatform/upstand"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-1.5 text-xs font-medium text-slate-200 transition-all hover:border-slate-700 hover:bg-slate-800 sm:flex"
          >
            <GithubIcon className="size-3.5 text-slate-300" />
            <span>GitHub</span>
            <span className="rounded bg-slate-800 px-1 py-0.2 text-[10px] font-semibold text-slate-300">
              2.4k★
            </span>
          </a>

          {/* Quick Install CTA */}
          <a
            href="#install"
            className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#0068ff] to-[#0051c9] px-3.5 py-1.5 text-xs font-semibold text-white shadow-md shadow-[#0068ff]/20 transition-all hover:brightness-110 hover:shadow-[#0068ff]/30 active:scale-95"
          >
            <Terminal className="size-3.5" />
            <span>{dict.nav.getStarted}</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex size-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/60 text-slate-300 md:hidden"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-800 bg-[#070a12]/95 px-4 py-4 md:hidden backdrop-blur-xl">
          <nav className="flex flex-col gap-3 text-sm font-medium text-slate-300">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 transition-colors hover:text-[#38bdf8]"
            >
              {dict.nav.features}
            </a>
            <a
              href="#architecture"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 transition-colors hover:text-[#38bdf8]"
            >
              {dict.nav.architecture}
            </a>
            <a
              href="#translator"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 transition-colors hover:text-[#38bdf8]"
            >
              {dict.composeTranslator.badge}
            </a>
            <a
              href="#compare"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 transition-colors hover:text-[#38bdf8]"
            >
              {dict.nav.compare}
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 transition-colors hover:text-[#38bdf8]"
            >
              {dict.nav.calculator}
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 transition-colors hover:text-[#38bdf8]"
            >
              {dict.nav.faq}
            </a>
            <a
              href="https://github.com/UpstandPlatform/upstand"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between border-t border-slate-800/80 pt-3 text-slate-200"
            >
              <div className="flex items-center gap-2">
                <GithubIcon className="size-4" />
                <span>GitHub Repository</span>
              </div>
              <ArrowUpRight className="size-4 text-slate-400" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
