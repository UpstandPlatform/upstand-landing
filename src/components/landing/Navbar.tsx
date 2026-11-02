"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Dictionary } from "@/i18n/types";
import { Locale, locales, localeDetails } from "@/i18n/config";
import { Globe, Menu, X, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";

interface NavbarProps {
  dict: Dictionary;
  currentLocale: Locale;
}

export function Navbar({ dict, currentLocale }: NavbarProps) {
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { nav } = dict;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-[#090a0f]/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand logo & name */}
        <Link
          href={`/${currentLocale}`}
          className="flex items-center gap-2.5 text-zinc-100 hover:text-white transition-colors"
        >
          <div className="flex size-7 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900">
            <Image
              src="/brand/icon.svg"
              alt="Upstand"
              width={16}
              height={16}
              className="size-4"
              priority
            />
          </div>
          <span className="font-semibold text-sm tracking-tight">
            Upstand
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-5 text-xs text-zinc-400 md:flex">
          <a href="#models" className="transition-colors hover:text-zinc-100">
            {nav.models}
          </a>
          <a href="#manifesto" className="transition-colors hover:text-zinc-100">
            {nav.manifesto}
          </a>
          <a href="#ecosystem" className="transition-colors hover:text-zinc-100">
            {nav.ecosystem}
          </a>
          <a href="#capabilities" className="transition-colors hover:text-zinc-100">
            {nav.capabilities}
          </a>
          <a href="#architecture" className="transition-colors hover:text-zinc-100">
            {nav.architecture}
          </a>
          <a href="#compare" className="transition-colors hover:text-zinc-100">
            {nav.compare}
          </a>
          <a href="#faq" className="transition-colors hover:text-zinc-100">
            {nav.faq}
          </a>
          <a href="#contact" className="transition-colors hover:text-zinc-100">
            {nav.contact}
          </a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5">
          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900 px-2.5 py-1.5 text-xs text-zinc-300 transition-colors hover:border-zinc-700"
              aria-label={nav.language}
            >
              <Globe className="size-3.5 text-zinc-400" />
              <span>{localeDetails[currentLocale]?.nativeName || currentLocale}</span>
            </button>

            {langMenuOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setLangMenuOpen(false)}
                />
                <div className="absolute right-0 top-full mt-1.5 z-50 w-44 rounded-xl border border-zinc-800 bg-zinc-950 p-1.5 shadow-xl">
                  {locales.map((loc) => {
                    const info = localeDetails[loc];
                    const isActive = loc === currentLocale;
                    return (
                      <Link
                        key={loc}
                        href={`/${loc}`}
                        onClick={() => setLangMenuOpen(false)}
                        className={`flex items-center justify-between rounded-lg px-2.5 py-1.5 text-xs transition-colors ${
                          isActive
                            ? "bg-zinc-800 text-zinc-100 font-medium"
                            : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span>{info.flag}</span>
                          <span>{info.nativeName}</span>
                        </span>
                        <span className="font-mono text-[10px] text-zinc-400 uppercase">
                          {loc}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </>
            )}
          </div>

          {/* GitHub Icon Link */}
          <a
            href="https://github.com/UpstandPlatform/upstand"
            target="_blank"
            rel="noreferrer"
            className="flex size-8 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 transition-colors hover:text-zinc-100"
            aria-label="GitHub"
          >
            <GithubIcon className="size-4" />
          </a>

          {/* Get Started Button */}
          <a
            href="https://upstand.dev/docs"
            className="hidden sm:inline-flex items-center rounded-lg bg-blue-600 px-3.5 py-1.5 text-xs font-medium text-white transition-colors hover:bg-blue-500"
          >
            {nav.getStarted}
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex size-8 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-zinc-800 bg-zinc-950 px-4 py-4 md:hidden space-y-2 text-xs">
          <a
            href="#models"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-zinc-300 hover:text-white"
          >
            {nav.models}
          </a>
          <a
            href="#manifesto"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-zinc-300 hover:text-white"
          >
            {nav.manifesto}
          </a>
          <a
            href="#ecosystem"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-zinc-300 hover:text-white"
          >
            {nav.ecosystem}
          </a>
          <a
            href="#capabilities"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-zinc-300 hover:text-white"
          >
            {nav.capabilities}
          </a>
          <a
            href="#architecture"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-zinc-300 hover:text-white"
          >
            {nav.architecture}
          </a>
          <a
            href="#compare"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-zinc-300 hover:text-white"
          >
            {nav.compare}
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-zinc-300 hover:text-white"
          >
            {nav.faq}
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-zinc-300 hover:text-white"
          >
            {nav.contact}
          </a>
        </div>
      )}
    </header>
  );
}
