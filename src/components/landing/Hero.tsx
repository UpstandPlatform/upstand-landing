"use client";

import { useState } from "react";
import { Dictionary } from "@/i18n/types";
import {
  Copy,
  Check,
  Server,
  Terminal,
  ExternalLink,
  BookOpen,
} from "lucide-react";

interface HeroProps {
  dict: Dictionary;
}

export function Hero({ dict }: HeroProps) {
  const [copied, setCopied] = useState(false);
  const { hero } = dict;

  const handleCopy = () => {
    navigator.clipboard.writeText(hero.installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative overflow-hidden bg-[#090a0f] pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Main Headline Group */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/80 px-3.5 py-1 text-xs font-mono text-zinc-300">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            <span>{hero.tag}</span>
          </div>

          {/* Solid Headline */}
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-100 sm:text-5xl md:text-6xl">
            {hero.title}
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base leading-relaxed text-zinc-400 sm:text-lg">
            {hero.subtitle}
          </p>

          {/* Action Row */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://upstand.dev/docs"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-500"
            >
              <BookOpen className="size-4" />
              <span>{hero.exploreDocs}</span>
            </a>

            <a
              href="https://github.com/UpstandPlatform/upstand"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/90 px-4 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-700 hover:text-white"
            >
              <span>{hero.viewGithub}</span>
              <ExternalLink className="size-3.5 text-zinc-400" />
            </a>
          </div>

          {/* Clean Install Command Bar */}
          <div className="mt-5 flex justify-center">
            <div
              onClick={handleCopy}
              className="group flex cursor-pointer items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2 font-mono text-xs text-zinc-300 transition-colors hover:border-zinc-700"
              title="Click to copy install command"
            >
              <span className="text-zinc-500">$</span>
              <span className="select-all text-zinc-200">{hero.installCommand}</span>
              <button
                type="button"
                aria-label="Copy install command"
                className="ml-2 flex size-6 items-center justify-center rounded border border-zinc-800 bg-zinc-900 text-zinc-400 transition-colors group-hover:text-zinc-200"
              >
                {copied ? (
                  <Check className="size-3.5 text-emerald-400" />
                ) : (
                  <Copy className="size-3.5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Hero Product Preview Window */}
        <div className="mt-16 rounded-2xl border border-zinc-800/80 bg-zinc-950 overflow-hidden shadow-2xl">
          {/* Window Chrome Header */}
          <div className="flex items-center justify-between border-b border-zinc-800/80 bg-zinc-900/60 px-4 py-3 text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-zinc-700" />
              <span className="size-2.5 rounded-full bg-zinc-700" />
              <span className="size-2.5 rounded-full bg-zinc-700" />
              <span className="ml-2 text-zinc-300 flex items-center gap-1.5">
                <Server className="size-3.5 text-zinc-400" />
                {hero.clusterPreview.title}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="size-1.5 rounded-full bg-emerald-500" />
                {hero.clusterPreview.status}
              </span>
            </div>
          </div>

          {/* Cluster Summary Metrics Bar */}
          <div className="grid grid-cols-2 divide-x divide-zinc-800/80 border-b border-zinc-800/80 bg-zinc-950/40 text-xs sm:grid-cols-4">
            <div className="p-4">
              <div className="font-mono text-zinc-400 text-[11px]">Managers</div>
              <div className="mt-1 font-mono text-zinc-200 font-medium">{hero.clusterPreview.managers}</div>
            </div>
            <div className="p-4">
              <div className="font-mono text-zinc-400 text-[11px]">Workers</div>
              <div className="mt-1 font-mono text-zinc-200 font-medium">{hero.clusterPreview.workers}</div>
            </div>
            <div className="p-4">
              <div className="font-mono text-zinc-400 text-[11px]">Services</div>
              <div className="mt-1 font-mono text-zinc-200 font-medium">{hero.clusterPreview.services}</div>
            </div>
            <div className="p-4">
              <div className="font-mono text-zinc-400 text-[11px]">Edge Ingress</div>
              <div className="mt-1 font-mono text-zinc-200 font-medium truncate">{hero.clusterPreview.routes}</div>
            </div>
          </div>

          {/* Real Workload Inspector Table */}
          <div className="overflow-x-auto p-4 sm:p-6 font-mono text-xs">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-zinc-800 text-zinc-400 text-[11px]">
                  <th className="pb-3 font-normal">SERVICE</th>
                  <th className="pb-3 font-normal">IMAGE</th>
                  <th className="pb-3 font-normal">REPLICAS</th>
                  <th className="pb-3 font-normal">PORTS</th>
                  <th className="pb-3 font-normal">STATUS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-900 text-zinc-300">
                <tr>
                  <td className="py-3 font-medium text-zinc-100">caddy-ingress</td>
                  <td className="py-3 text-zinc-400">caddy:2.8.4-alpine</td>
                  <td className="py-3 text-zinc-300">3/3 (global)</td>
                  <td className="py-3 text-zinc-400">80:80, 443:443</td>
                  <td className="py-3 text-emerald-400">healthy</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-zinc-100">upstand-api</td>
                  <td className="py-3 text-zinc-400">upstand/core:0.14.0</td>
                  <td className="py-3 text-zinc-300">3/3 (replicated)</td>
                  <td className="py-3 text-zinc-400">3000/tcp (internal)</td>
                  <td className="py-3 text-emerald-400">healthy</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-zinc-100">postgres-primary</td>
                  <td className="py-3 text-zinc-400">postgres:18-alpine</td>
                  <td className="py-3 text-zinc-300">1/1 (pinned)</td>
                  <td className="py-3 text-zinc-400">5432/tcp (internal)</td>
                  <td className="py-3 text-emerald-400">healthy</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-zinc-100">redis-queue</td>
                  <td className="py-3 text-zinc-400">redis:8.0-alpine</td>
                  <td className="py-3 text-zinc-300">1/1 (replicated)</td>
                  <td className="py-3 text-zinc-400">6379/tcp (internal)</td>
                  <td className="py-3 text-emerald-400">healthy</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-zinc-100">upgal-agent</td>
                  <td className="py-3 text-zinc-400">upstand/upgal:latest</td>
                  <td className="py-3 text-zinc-300">1/1 (mcp-daemon)</td>
                  <td className="py-3 text-zinc-400">stdio / unix-socket</td>
                  <td className="py-3 text-emerald-400">idle</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
