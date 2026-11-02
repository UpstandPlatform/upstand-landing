"use client";

import { useState } from "react";
import { Dictionary } from "@/i18n/types";
import { Terminal, Copy, Check, Rocket, ArrowRight } from "lucide-react";

interface CtaBannerProps {
  dict: Dictionary;
}

export function CtaBanner({ dict }: CtaBannerProps) {
  const [copied, setCopied] = useState(false);
  const installCmd = "curl -fsSL https://upstand.dev/install.sh | sudo bash";

  const handleCopy = () => {
    navigator.clipboard.writeText(installCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#05080f] to-[#070a12]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="glow-card relative rounded-3xl border border-sky-500/30 bg-gradient-to-br from-[#0c1326] via-[#080d1a] to-[#0b101f] p-8 sm:p-14 text-center shadow-2xl overflow-hidden">
          {/* Background decorative glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-[#0068ff]/20 blur-[80px]" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 size-72 rounded-full bg-[#38bdf8]/20 blur-[80px]" />

          <div className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 px-3.5 py-1 text-xs font-semibold text-[#38bdf8]">
            <Rocket className="size-3.5" />
            <span>{dict.cta.badge}</span>
          </div>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            {dict.cta.title}
          </h2>

          <p className="mt-4 mx-auto max-w-2xl text-sm sm:text-base text-slate-300">
            {dict.cta.description}
          </p>

          {/* Copyable Terminal Box */}
          <div className="mt-8 mx-auto max-w-xl">
            <div
              onClick={handleCopy}
              className="flex cursor-pointer items-center justify-between rounded-xl border border-slate-700 bg-slate-950/80 p-3 sm:p-4 font-mono text-xs sm:text-sm text-slate-200 shadow-inner transition-colors hover:border-[#0068ff]"
            >
              <div className="flex items-center gap-2 overflow-x-auto">
                <span className="text-[#38bdf8] select-none">$</span>
                <span>{installCmd}</span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleCopy();
                }}
                className="ml-3 flex shrink-0 items-center gap-1.5 rounded-lg bg-[#0068ff] px-3 py-1.5 text-xs font-semibold text-white shadow hover:bg-[#0052cc]"
              >
                {copied ? <Check className="size-3.5 text-emerald-300" /> : <Copy className="size-3.5" />}
                <span>{copied ? dict.hero.copied : dict.cta.installNow}</span>
              </button>
            </div>
          </div>

          <p className="mt-4 text-xs text-slate-500">
            {dict.cta.prerequisites}
          </p>
        </div>
      </div>
    </section>
  );
}
