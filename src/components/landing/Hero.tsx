"use client";

import { useState } from "react";
import { Dictionary } from "@/i18n/types";
import {
  Terminal,
  Copy,
  Check,
  Play,
  Layers,
  Bot,
  ShieldCheck,
  Cpu,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

interface HeroProps {
  dict: Dictionary;
}

export function Hero({ dict }: HeroProps) {
  const [activeTab, setActiveTab] = useState<"install" | "compose" | "swarm" | "upgal">("install");
  const [copied, setCopied] = useState(false);

  const installCommand = "curl -fsSL https://upstand.dev/install.sh | sudo bash";

  const handleCopy = () => {
    navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 bg-grid-pattern">
      {/* Background glow highlights */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[580px] w-[950px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-[#0068ff]/25 via-[#38bdf8]/15 to-transparent blur-[120px]" />
      <div className="pointer-events-none absolute right-1/4 top-1/3 -z-10 h-72 w-72 rounded-full bg-[#818cf8]/15 blur-[90px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          {/* Release Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-3.5 py-1 text-xs font-semibold text-slate-200 shadow-inner backdrop-blur-md">
            <span className="flex size-2 rounded-full bg-[#10b981] animate-pulse" />
            <span className="text-slate-400">v0.14 Release</span>
            <span className="text-slate-600">|</span>
            <span className="bg-gradient-to-r from-[#38bdf8] to-[#818cf8] bg-clip-text text-transparent font-medium">
              {dict.hero.badge}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
            {dict.hero.titleStart}{" "}
            <span className="bg-gradient-to-r from-[#0068ff] via-[#38bdf8] to-[#93c5fd] bg-clip-text text-transparent">
              {dict.hero.titleHighlight}
            </span>{" "}
            {dict.hero.titleEnd}
          </h1>

          {/* Subtitle Description */}
          <p className="mt-6 max-w-2xl text-base text-slate-300 sm:text-lg sm:leading-relaxed">
            {dict.hero.description}
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={handleCopy}
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#0068ff] to-[#0052cc] px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-[#0068ff]/25 transition-all hover:brightness-110 hover:shadow-[#0068ff]/40 active:scale-95"
            >
              <Terminal className="size-4.5 text-[#7cb0ff]" />
              <span>{copied ? dict.hero.copied : dict.hero.quickInstall}</span>
              {copied ? (
                <Check className="size-4 text-emerald-400" />
              ) : (
                <Copy className="size-4 text-slate-300 transition-transform group-hover:scale-110" />
              )}
            </button>

            <a
              href="https://github.com/UpstandPlatform/upstand"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-5 py-3.5 text-sm font-semibold text-slate-200 transition-all hover:border-slate-600 hover:bg-slate-800 active:scale-95"
            >
              <span>{dict.hero.viewGithub}</span>
              <ExternalLink className="size-4 text-slate-400" />
            </a>
          </div>

          {/* One-line copy snippet pill */}
          <div
            onClick={handleCopy}
            className="mt-4 flex cursor-pointer items-center gap-3 rounded-lg border border-slate-800 bg-slate-950/70 px-3.5 py-1.5 font-mono text-xs text-slate-300 transition-colors hover:border-slate-700 hover:text-white"
            title="Click to copy"
          >
            <span className="text-[#38bdf8]">$</span>
            <span>{installCommand}</span>
            {copied ? (
              <Check className="size-3.5 text-emerald-400 ml-1" />
            ) : (
              <Copy className="size-3.5 text-slate-500 ml-1" />
            )}
          </div>
        </div>

        {/* Live Interactive Terminal & Stack Preview Card */}
        <div id="install" className="mt-14 mx-auto max-w-5xl">
          <div className="glow-card rounded-2xl border border-slate-800 bg-[#0b101d]/90 shadow-2xl backdrop-blur-xl overflow-hidden">
            {/* Terminal Window Header */}
            <div className="flex flex-wrap items-center justify-between border-b border-slate-800/80 bg-[#070a12]/90 px-4 py-3 gap-2">
              <div className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-rose-500/80" />
                <span className="size-3 rounded-full bg-amber-500/80" />
                <span className="size-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-mono text-xs text-slate-400 flex items-center gap-1.5">
                  <Terminal className="size-3.5 text-slate-400" />
                  upstand-control-plane ~ console
                </span>
              </div>

              {/* Node health status pill */}
              <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-400">
                <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{dict.hero.statusHealthy}</span>
              </div>
            </div>

            {/* Interactive Tab Switcher */}
            <div className="flex items-center border-b border-slate-800/80 bg-slate-950/50 px-3 text-xs overflow-x-auto">
              <button
                onClick={() => setActiveTab("install")}
                className={`flex items-center gap-1.5 px-3 py-2.5 font-medium transition-colors border-b-2 whitespace-nowrap ${
                  activeTab === "install"
                    ? "border-[#38bdf8] text-[#38bdf8] bg-slate-900/60"
                    : "border-transparent text-slate-400 hover:text-slate-200"
                }`}
              >
                <Play className="size-3.5" />
                <span>{dict.hero.tabInstall}</span>
              </button>
              <button
                onClick={() => setActiveTab("compose")}
                className={`flex items-center gap-1.5 px-3 py-2.5 font-medium transition-colors border-b-2 whitespace-nowrap ${
                  activeTab === "compose"
                    ? "border-[#38bdf8] text-[#38bdf8] bg-slate-900/60"
                    : "border-transparent text-slate-400 hover:text-slate-200"
                }`}
              >
                <Layers className="size-3.5" />
                <span>{dict.hero.tabCompose}</span>
              </button>
              <button
                onClick={() => setActiveTab("swarm")}
                className={`flex items-center gap-1.5 px-3 py-2.5 font-medium transition-colors border-b-2 whitespace-nowrap ${
                  activeTab === "swarm"
                    ? "border-[#38bdf8] text-[#38bdf8] bg-slate-900/60"
                    : "border-transparent text-slate-400 hover:text-slate-200"
                }`}
              >
                <Cpu className="size-3.5" />
                <span>{dict.hero.tabSwarm}</span>
              </button>
              <button
                onClick={() => setActiveTab("upgal")}
                className={`flex items-center gap-1.5 px-3 py-2.5 font-medium transition-colors border-b-2 whitespace-nowrap ${
                  activeTab === "upgal"
                    ? "border-[#38bdf8] text-[#38bdf8] bg-slate-900/60"
                    : "border-transparent text-slate-400 hover:text-slate-200"
                }`}
              >
                <Bot className="size-3.5 text-[#818cf8]" />
                <span className="text-[#818cf8] font-semibold">{dict.hero.tabUpGal}</span>
              </button>
            </div>

            {/* Tab Contents */}
            <div className="p-4 sm:p-6 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto min-h-[300px]">
              {activeTab === "install" && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-slate-400 border-b border-slate-800/60 pb-2">
                    <span className="text-slate-500"># Run the non-interactive production installer</span>
                    <button
                      onClick={handleCopy}
                      className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white"
                    >
                      {copied ? <Check className="size-3 text-emerald-400" /> : <Copy className="size-3" />}
                      <span>{copied ? "Copied" : "Copy"}</span>
                    </button>
                  </div>
                  <p className="text-slate-100 flex items-center gap-2">
                    <span className="text-[#38bdf8]">$</span>
                    <span className="font-semibold">{installCommand}</span>
                  </p>
                  <p className="text-slate-500">[1/5] Verifying host capacity: 8 vCPUs, 32GB RAM, 240GB NVMe... <span className="text-emerald-400">OK</span></p>
                  <p className="text-slate-500">[2/5] Initializing Docker Swarm overlay mesh on <span className="text-slate-300">upstand-network</span>... <span className="text-emerald-400">Active</span></p>
                  <p className="text-slate-500">[3/5] Launching core services: PostgreSQL 18, Redis 8, BullMQ queues... <span className="text-emerald-400">Running</span></p>
                  <p className="text-slate-500">[4/5] Provisioning Caddy dynamic reverse proxy with auto TLS & dry-run validator... <span className="text-emerald-400">Healthy</span></p>
                  <p className="text-slate-500">[5/5] Control plane online at <span className="text-[#38bdf8] underline">http://192.168.1.100:3001</span></p>
                  <div className="mt-3 rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-3 text-emerald-300">
                    ✓ Upstand v0.14.0 bootstrap complete! Initial owner registration unlocked.
                  </div>
                </div>
              )}

              {activeTab === "compose" && (
                <div className="text-slate-300 space-y-1">
                  <p className="text-slate-500"># Standard microservice docker-compose.yml</p>
                  <p><span className="text-[#818cf8]">services:</span></p>
                  <p className="pl-4"><span className="text-[#38bdf8]">api:</span></p>
                  <p className="pl-8"><span className="text-amber-300">image:</span> <span className="text-slate-200">ghcr.io/myorg/backend:latest</span></p>
                  <p className="pl-8"><span className="text-amber-300">ports:</span> [<span className="text-emerald-300">"3000:3000"</span>]</p>
                  <p className="pl-8"><span className="text-amber-300">environment:</span></p>
                  <p className="pl-12">- <span className="text-slate-200">DATABASE_URL=postgres://app:secret@db:5432/production</span></p>
                  <p className="pl-4"><span className="text-[#38bdf8]">db:</span></p>
                  <p className="pl-8"><span className="text-amber-300">image:</span> <span className="text-slate-200">postgres:18-alpine</span></p>
                  <p className="pl-8"><span className="text-amber-300">volumes:</span> [<span className="text-emerald-300">"pgdata:/var/lib/postgresql/data"</span>]</p>
                  <p className="pl-8"><span className="text-amber-300">restart:</span> <span className="text-slate-200">always</span></p>
                  <p className="text-slate-500 pt-2"># Upstand automatically adds collision-safe prefixes and Swarm replicas</p>
                </div>
              )}

              {activeTab === "swarm" && (
                <div className="text-slate-300 space-y-1">
                  <p className="text-slate-500"># Auto-translated Docker Swarm Stack Specification</p>
                  <p><span className="text-[#818cf8]">services:</span></p>
                  <p className="pl-4"><span className="text-[#38bdf8]">api:</span></p>
                  <p className="pl-8"><span className="text-amber-300">deploy:</span></p>
                  <p className="pl-12"><span className="text-sky-300">replicas:</span> <span className="text-emerald-300">4</span></p>
                  <p className="pl-12"><span className="text-sky-300">update_config:</span></p>
                  <p className="pl-16"><span className="text-slate-400">parallelism: 1</span></p>
                  <p className="pl-16"><span className="text-slate-400">failure_action: rollback</span></p>
                  <p className="pl-16"><span className="text-slate-400">order: start-first</span></p>
                  <p className="pl-12"><span className="text-sky-300">restart_policy:</span></p>
                  <p className="pl-16"><span className="text-slate-400">condition: on-failure</span></p>
                  <p className="pl-8"><span className="text-amber-300">networks:</span> [<span className="text-indigo-300">upstand_cluster_overlay</span>]</p>
                </div>
              )}

              {activeTab === "upgal" && (
                <div className="space-y-3">
                  <div className="flex items-start gap-2 text-slate-300">
                    <span className="font-semibold text-[#38bdf8]">Operator:</span>
                    <span>"Diagnose memory spikes on worker-node-03 and scale the web service to 6 replicas."</span>
                  </div>
                  <div className="flex items-start gap-2 text-[#818cf8]">
                    <span className="font-semibold text-[#818cf8]">UpGal AI:</span>
                    <span>"Inspected worker-node-03: memory usage is at 78% due to redis-cache container. No OOM errors recorded."</span>
                  </div>
                  {/* Human-in-the-loop Approval Card */}
                  <div className="rounded-xl border border-amber-500/40 bg-amber-500/10 p-3.5">
                    <div className="flex items-center gap-2 text-amber-300 font-semibold text-xs">
                      <ShieldCheck className="size-4" />
                      <span>Human Approval Required (ToolLoop Step 4/12)</span>
                    </div>
                    <p className="mt-1.5 text-xs text-slate-300 font-sans">
                      UpGal is requesting permission to mutate infrastructure state:
                      <br />
                      <strong className="text-white font-mono text-[11px]">scale service `production_web` from 3 to 6 replicas on node-cluster-swarm</strong>
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <button className="rounded-lg bg-emerald-600 px-3 py-1 text-xs font-semibold text-white hover:bg-emerald-500">
                        Approve Mutation
                      </button>
                      <button className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300 hover:bg-slate-700">
                        Reject
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
