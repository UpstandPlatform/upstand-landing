"use client";

import { useState } from "react";
import { Dictionary } from "@/i18n/types";
import { ArrowLeftRight, Check, Code, Shield, Sparkles } from "lucide-react";

interface ComposeTranslatorProps {
  dict: Dictionary;
}

export function ComposeTranslator({ dict }: ComposeTranslatorProps) {
  const [view, setView] = useState<"compose" | "swarm">("compose");

  const composeCode = `version: "3.8"
services:
  web:
    image: ghcr.io/org/frontend:latest
    ports:
      - "80:80"
    restart: always
    environment:
      - NODE_ENV=production
  api:
    image: ghcr.io/org/backend:latest
    ports:
      - "4000:4000"
    restart: always
  db:
    image: postgres:18-alpine
    volumes:
      - data:/var/lib/postgresql/data
volumes:
  data:`;

  const swarmCode = `version: "3.8"
services:
  web:
    image: ghcr.io/org/frontend:latest
    deploy:
      replicas: 3
      update_config:
        parallelism: 1
        order: start-first
        failure_action: rollback
      restart_policy:
        condition: on-failure
        max_attempts: 5
    networks:
      - upstand_cluster_overlay
  api:
    image: ghcr.io/org/backend:latest
    deploy:
      replicas: 2
      restart_policy:
        condition: on-failure
    networks:
      - upstand_cluster_overlay
  db:
    image: postgres:18-alpine
    volumes:
      - upstand_vol_prj492_data:/var/lib/postgresql/data
    networks:
      - upstand_cluster_overlay
volumes:
  upstand_vol_prj492_data:
    driver: local
networks:
  upstand_cluster_overlay:
    external: true`;

  return (
    <section id="translator" className="py-20 md:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#0068ff]/30 bg-[#0068ff]/10 px-3 py-1 text-xs font-semibold text-[#38bdf8]">
            <Sparkles className="size-3.5" />
            <span>{dict.composeTranslator.badge}</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            {dict.composeTranslator.title}
          </h2>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            {dict.composeTranslator.description}
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-12 items-center">
          {/* Benefits List */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-bold text-white">
              Zero-friction translation with safety checks
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Standard Docker Compose files are designed for single-machine environments. Upstand transparently synthesizes cluster-ready specifications without breaking your team's workflow.
            </p>
            <div className="mt-6 space-y-3">
              {dict.composeTranslator.featuresList.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="rounded-full bg-emerald-500/10 p-1 text-emerald-400 mt-0.5">
                    <Check className="size-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-200">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Code Preview Window */}
          <div className="lg:col-span-7">
            <div className="glow-card rounded-2xl border border-slate-800 bg-[#0b101d] overflow-hidden shadow-2xl">
              {/* Header with Switcher Tabs */}
              <div className="flex items-center justify-between border-b border-slate-800/80 bg-[#070a12] px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setView("compose")}
                    className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                      view === "compose"
                        ? "bg-slate-800 text-white shadow"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {dict.composeTranslator.composeTab}
                  </button>
                  <ArrowLeftRight className="size-3.5 text-slate-500 mx-1" />
                  <button
                    onClick={() => setView("swarm")}
                    className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                      view === "swarm"
                        ? "bg-[#0068ff] text-white shadow shadow-[#0068ff]/30"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {dict.composeTranslator.swarmTab}
                  </button>
                </div>
                <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
                  YAML v3.8
                </span>
              </div>

              {/* Code display */}
              <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto min-h-[380px] text-slate-300 bg-[#060913]">
                <pre>
                  <code>{view === "compose" ? composeCode : swarmCode}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
