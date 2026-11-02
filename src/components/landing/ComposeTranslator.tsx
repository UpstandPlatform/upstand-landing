"use client";

import { useState } from "react";
import { Dictionary } from "@/i18n/types";
import { Check } from "lucide-react";

interface ComposeTranslatorProps {
  dict: Dictionary;
}

export function ComposeTranslator({ dict }: ComposeTranslatorProps) {
  const [view, setView] = useState<"compose" | "swarm">("compose");
  const { composeTranslator } = dict;

  const composeCode = `version: "3.8"
services:
  web:
    image: ghcr.io/org/frontend:latest
    ports:
      - "80:80"
    restart: always
  api:
    image: ghcr.io/org/backend:latest
    ports:
      - "4000:4000"
    restart: always
  db:
    image: postgres:18-alpine
    volumes:
      - pgdata:/var/lib/postgresql/data
volumes:
  pgdata:`;

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
      - upstand_vol_db_data:/var/lib/postgresql/data
    networks:
      - upstand_cluster_overlay
volumes:
  upstand_vol_db_data:
    driver: local
networks:
  upstand_cluster_overlay:
    external: true`;

  return (
    <section id="compose" className="border-t border-zinc-800/80 bg-[#090a0f] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-400">
            {composeTranslator.badge}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl md:text-5xl">
            {composeTranslator.title}
          </h2>
          <p className="mt-4 text-base text-zinc-400 sm:text-lg">
            {composeTranslator.description}
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
          {/* Features Checklist */}
          <div className="space-y-4 lg:col-span-5">
            <h3 className="text-xl font-semibold text-zinc-100">
              Zero-friction translation with safety checks
            </h3>
            <p className="text-sm leading-relaxed text-zinc-400">
              Standard Docker Compose files are built for single-machine development. Upstand parses them and generates resilient, production-ready Swarm stacks without changing your team&apos;s existing workflow.
            </p>

            <ul className="mt-6 space-y-3 pt-4 border-t border-zinc-800/80">
              {composeTranslator.featuresList.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                  <Check className="size-4 shrink-0 text-blue-400 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Interactive Code Viewer */}
          <div className="rounded-2xl border border-zinc-800/80 bg-zinc-950 overflow-hidden lg:col-span-7">
            {/* Tab Controls */}
            <div className="flex border-b border-zinc-800/80 bg-zinc-900/60 p-1.5 gap-1.5 font-mono text-xs">
              <button
                type="button"
                onClick={() => setView("compose")}
                className={`rounded-lg px-3 py-1.5 transition-colors ${
                  view === "compose"
                    ? "bg-zinc-800 text-zinc-100 font-medium"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {composeTranslator.composeTab}
              </button>
              <button
                type="button"
                onClick={() => setView("swarm")}
                className={`rounded-lg px-3 py-1.5 transition-colors ${
                  view === "swarm"
                    ? "bg-zinc-800 text-zinc-100 font-medium"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {composeTranslator.swarmTab}
              </button>
            </div>

            {/* Code Output */}
            <div className="p-5 font-mono text-xs overflow-x-auto text-zinc-300 leading-relaxed">
              <pre>{view === "compose" ? composeCode : swarmCode}</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
