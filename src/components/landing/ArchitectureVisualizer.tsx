"use client";

import { useState } from "react";
import { Dictionary } from "@/i18n/types";
import {
  Layers,
  Server,
  Cpu,
  Globe,
  Database,
  ArrowRight,
  ShieldAlert,
  GitBranch,
} from "lucide-react";

interface ArchitectureVisualizerProps {
  dict: Dictionary;
}

export function ArchitectureVisualizer({ dict }: ArchitectureVisualizerProps) {
  const [selectedStep, setSelectedStep] = useState<number>(1);

  const steps = [
    {
      id: 1,
      title: dict.architecture.details.step1Title,
      desc: dict.architecture.details.step1Desc,
      icon: GitBranch,
      highlightLayer: "client",
    },
    {
      id: 2,
      title: dict.architecture.details.step2Title,
      desc: dict.architecture.details.step2Desc,
      icon: Layers,
      highlightLayer: "control",
    },
    {
      id: 3,
      title: dict.architecture.details.step3Title,
      desc: dict.architecture.details.step3Desc,
      icon: Cpu,
      highlightLayer: "swarm",
    },
    {
      id: 4,
      title: dict.architecture.details.step4Title,
      desc: dict.architecture.details.step4Desc,
      icon: Globe,
      highlightLayer: "caddy",
    },
  ];

  return (
    <section id="architecture" className="py-20 md:py-28 bg-[#05080f] relative border-t border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-400">
            <Layers className="size-3.5" />
            <span>{dict.architecture.badge}</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            {dict.architecture.title}
          </h2>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            {dict.architecture.description}
          </p>
        </div>

        {/* Interactive Architecture Flow Diagram */}
        <div className="mt-14 grid gap-8 lg:grid-cols-12 items-center">
          {/* Step Selector List */}
          <div className="lg:col-span-5 space-y-3">
            {steps.map((step) => {
              const Icon = step.icon;
              const isActive = selectedStep === step.id;
              return (
                <div
                  key={step.id}
                  onClick={() => setSelectedStep(step.id)}
                  className={`cursor-pointer rounded-xl border p-4.5 transition-all duration-200 ${
                    isActive
                      ? "border-[#0068ff] bg-[#0068ff]/10 shadow-lg shadow-[#0068ff]/10 translate-x-1"
                      : "border-slate-800 bg-[#0b101d]/60 hover:border-slate-700 hover:bg-[#0b101d]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex size-8 shrink-0 items-center justify-center rounded-lg ${
                        isActive
                          ? "bg-[#0068ff] text-white"
                          : "bg-slate-800 text-slate-400"
                      }`}
                    >
                      <Icon className="size-4.5" />
                    </div>
                    <h3
                      className={`text-sm sm:text-base font-bold ${
                        isActive ? "text-white" : "text-slate-200"
                      }`}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-2 pl-11 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Visual Architecture Topology Display */}
          <div className="lg:col-span-7">
            <div className="glow-card rounded-2xl border border-slate-800 bg-[#090d18] p-6 sm:p-8 backdrop-blur-xl space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                  UPSTAND CLUSTER TOPOLOGY ENGINE
                </span>
                <span className="text-slate-500">Raft Quorum: 3/3 Managers</span>
              </div>

              {/* Layer 1: Client & Ingress */}
              <div
                className={`rounded-xl border p-4 transition-all duration-300 ${
                  selectedStep === 1
                    ? "border-[#38bdf8] bg-sky-500/10 shadow-md shadow-sky-500/10"
                    : "border-slate-800/80 bg-slate-900/40"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Ingress Layer
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">
                    HTTPS / tRPC / WebSocket
                  </span>
                </div>
                <div className="mt-2 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-lg border border-slate-700 bg-slate-800/80 px-2.5 py-1 text-slate-200">
                    Next.js Web Console
                  </span>
                  <span className="rounded-lg border border-slate-700 bg-slate-800/80 px-2.5 py-1 text-slate-200">
                    UpGal MCP Client
                  </span>
                  <span className="rounded-lg border border-slate-700 bg-slate-800/80 px-2.5 py-1 text-slate-200">
                    CLI (`upk_...`)
                  </span>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center -my-2 text-slate-600">
                <ArrowRight className="size-4 rotate-90" />
              </div>

              {/* Layer 2: Control Plane */}
              <div
                className={`rounded-xl border p-4 transition-all duration-300 ${
                  selectedStep === 2
                    ? "border-[#0068ff] bg-[#0068ff]/15 shadow-md shadow-[#0068ff]/20"
                    : "border-slate-800/80 bg-slate-900/40"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#38bdf8]">
                    {dict.architecture.controlPlaneLayer}
                  </span>
                  <span className="rounded bg-sky-500/20 px-1.5 py-0.5 text-[10px] font-mono text-sky-300">
                    Isolated
                  </span>
                </div>
                <div className="mt-2 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                  <div className="rounded border border-slate-700/80 bg-slate-900/80 p-2 text-slate-200">
                    Hono API Server
                  </div>
                  <div className="rounded border border-slate-700/80 bg-slate-900/80 p-2 text-slate-200">
                    PostgreSQL 18
                  </div>
                  <div className="rounded border border-slate-700/80 bg-slate-900/80 p-2 text-slate-200">
                    Redis 8 / BullMQ
                  </div>
                  <div className="rounded border border-slate-700/80 bg-slate-900/80 p-2 text-slate-200">
                    Better Auth (SSO)
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center -my-2 text-slate-600">
                <ArrowRight className="size-4 rotate-90" />
              </div>

              {/* Layer 3: Swarm Worker Mesh */}
              <div
                className={`rounded-xl border p-4 transition-all duration-300 ${
                  selectedStep === 3
                    ? "border-emerald-500 bg-emerald-500/10 shadow-md shadow-emerald-500/10"
                    : "border-slate-800/80 bg-slate-900/40"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                    {dict.architecture.workerNodesLayer}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400/80">
                    Encrypted Overlay Mesh
                  </span>
                </div>
                <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  <div className="rounded border border-slate-700/70 bg-slate-900/80 p-2 text-slate-300">
                    Node 01 (Swarm Leader)
                  </div>
                  <div className="rounded border border-slate-700/70 bg-slate-900/80 p-2 text-slate-300">
                    Node 02 (Worker + DB)
                  </div>
                  <div className="rounded border border-slate-700/70 bg-slate-900/80 p-2 text-slate-300">
                    Node 03 (Worker + Apps)
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center -my-2 text-slate-600">
                <ArrowRight className="size-4 rotate-90" />
              </div>

              {/* Layer 4: Edge Routing */}
              <div
                className={`rounded-xl border p-4 transition-all duration-300 ${
                  selectedStep === 4
                    ? "border-purple-500 bg-purple-500/10 shadow-md shadow-purple-500/10"
                    : "border-slate-800/80 bg-slate-900/40"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">
                    {dict.architecture.caddyEdgeLayer}
                  </span>
                  <span className="text-[11px] font-mono text-purple-300">
                    Let's Encrypt TLS / Auto HSTS
                  </span>
                </div>
                <p className="mt-2 text-xs text-slate-300">
                  Atomic Caddy reloads verified in-container before memory swap. 0 ms dropped TCP connections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
