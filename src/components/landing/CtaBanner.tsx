"use client";

import { useState } from "react";
import { Dictionary } from "@/i18n/types";
import { Copy, Check } from "lucide-react";

interface CtaBannerProps {
  dict: Dictionary;
}

export function CtaBanner({ dict }: CtaBannerProps) {
  const [copied, setCopied] = useState(false);
  const installCmd = "curl -fsSL https://upstand.dev/install.sh | bash";
  const { cta } = dict;

  const handleCopy = () => {
    navigator.clipboard.writeText(installCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="border-t border-zinc-800/80 bg-[#090a0f] py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-zinc-800/80 bg-zinc-950 p-8 sm:p-14 text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-400">
            {cta.tag}
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl md:text-5xl">
            {cta.title}
          </h2>

          <p className="mt-4 mx-auto max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            {cta.description}
          </p>

          {/* Clean Command Box */}
          <div className="mt-8 mx-auto max-w-lg">
            <div
              onClick={handleCopy}
              className="group flex cursor-pointer items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900/80 p-3 sm:p-3.5 font-mono text-xs text-zinc-300 transition-colors hover:border-zinc-700"
            >
              <div className="flex items-center gap-2 overflow-x-auto">
                <span className="text-zinc-500 select-none">$</span>
                <span className="select-all text-zinc-200">{installCmd}</span>
              </div>
              <button
                type="button"
                aria-label="Copy install command"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCopy();
                }}
                className="ml-3 flex shrink-0 items-center gap-1.5 rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-blue-500"
              >
                {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
                <span>{copied ? "Copied" : cta.installNow}</span>
              </button>
            </div>
          </div>

          <p className="mt-4 font-mono text-xs text-zinc-400">
            {cta.licenseNotice}
          </p>
        </div>
      </div>
    </section>
  );
}
