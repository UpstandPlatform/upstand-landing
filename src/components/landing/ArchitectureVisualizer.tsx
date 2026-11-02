"use client";

import { useState } from "react";
import { Dictionary } from "@/i18n/types";
import {
  Layers,
  Globe,
  Database,
  Cpu,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

interface ArchitectureVisualizerProps {
  dict: Dictionary;
}

export function ArchitectureVisualizer({ dict }: ArchitectureVisualizerProps) {
  const [selectedStep, setSelectedStep] = useState<number>(1);
  const { architecture } = dict;

  const steps = [
    {
      id: 1,
      title: architecture.details.step1Title,
      desc: architecture.details.step1Desc,
      icon: Globe,
    },
    {
      id: 2,
      title: architecture.details.step2Title,
      desc: architecture.details.step2Desc,
      icon: Database,
    },
    {
      id: 3,
      title: architecture.details.step3Title,
      desc: architecture.details.step3Desc,
      icon: Cpu,
    },
    {
      id: 4,
      title: architecture.details.step4Title,
      desc: architecture.details.step4Desc,
      icon: Layers,
    },
  ];

  return (
    <section id="architecture" className="border-t border-zinc-800/80 bg-[#090a0f] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-400">
            {architecture.badge}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl md:text-5xl">
            {architecture.title}
          </h2>
          <p className="mt-4 text-base text-zinc-400 sm:text-lg">
            {architecture.description}
          </p>
        </div>

        {/* 2-Column Interactive Topology */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
          {/* Steps List */}
          <div className="space-y-3 lg:col-span-5">
            {steps.map((step) => {
              const Icon = step.icon;
              const isActive = selectedStep === step.id;
              return (
                <div
                  key={step.id}
                  onClick={() => setSelectedStep(step.id)}
                  className={`cursor-pointer rounded-2xl border p-5 transition-colors ${
                    isActive
                      ? "border-blue-500/50 bg-zinc-900/90"
                      : "border-zinc-800/80 bg-zinc-950/60 hover:border-zinc-700/80"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex size-8 shrink-0 items-center justify-center rounded-lg border ${
                        isActive
                          ? "border-blue-500/40 bg-blue-600/10 text-blue-400"
                          : "border-zinc-800 bg-zinc-900 text-zinc-400"
                      }`}
                    >
                      <Icon className="size-4" />
                    </div>
                    <div className="text-sm font-semibold text-zinc-100">
                      {step.title}
                    </div>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-400 pl-11">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Interactive Topology Diagram */}
          <div className="rounded-2xl border border-zinc-800/80 bg-zinc-950 p-6 sm:p-8 lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3 text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-emerald-500" />
                SWARM TOPOLOGY SCHEMATIC
              </span>
              <span>Raft Consensus: Active</span>
            </div>

            {/* Layer 1: Ingress */}
            <div
              className={`rounded-xl border p-4 transition-colors ${
                selectedStep === 1
                  ? "border-blue-500/50 bg-blue-950/10"
                  : "border-zinc-800 bg-zinc-900/40"
              }`}
            >
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="font-semibold text-zinc-200">01. INGRESS &amp; CLIENTS</span>
                <span className="text-zinc-400">TLS 1.3 / Port 443</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2 font-mono text-xs text-zinc-300">
                <span className="rounded border border-zinc-800 bg-zinc-900 px-2.5 py-1">Web Console</span>
                <span className="rounded border border-zinc-800 bg-zinc-900 px-2.5 py-1">CLI (`upk_...`)</span>
                <span className="rounded border border-zinc-800 bg-zinc-900 px-2.5 py-1">UpGal MCP Agent</span>
              </div>
            </div>

            <div className="flex justify-center text-zinc-600">
              <ArrowRight className="size-3.5 rotate-90" />
            </div>

            {/* Layer 2: Control Plane */}
            <div
              className={`rounded-xl border p-4 transition-colors ${
                selectedStep === 2
                  ? "border-blue-500/50 bg-blue-950/10"
                  : "border-zinc-800 bg-zinc-900/40"
              }`}
            >
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="font-semibold text-zinc-200">02. CONTROL PLANE CORE</span>
                <span className="text-zinc-400">Isolated Network</span>
              </div>
              <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs text-zinc-300">
                <div className="rounded border border-zinc-800 bg-zinc-900 p-2">Hono API</div>
                <div className="rounded border border-zinc-800 bg-zinc-900 p-2">PostgreSQL 18</div>
                <div className="rounded border border-zinc-800 bg-zinc-900 p-2">Redis / BullMQ</div>
                <div className="rounded border border-zinc-800 bg-zinc-900 p-2">Better Auth</div>
              </div>
            </div>

            <div className="flex justify-center text-zinc-600">
              <ArrowRight className="size-3.5 rotate-90" />
            </div>

            {/* Layer 3: Swarm Overlay */}
            <div
              className={`rounded-xl border p-4 transition-colors ${
                selectedStep === 3
                  ? "border-blue-500/50 bg-blue-950/10"
                  : "border-zinc-800 bg-zinc-900/40"
              }`}
            >
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="font-semibold text-zinc-200">03. DOCKER SWARM SERVICE MESH</span>
                <span className="text-zinc-400">VXLAN 10.0.0.0/8</span>
              </div>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2 font-mono text-xs text-zinc-300">
                <div className="rounded border border-zinc-800 bg-zinc-900 p-2">manager-01 (Leader)</div>
                <div className="rounded border border-zinc-800 bg-zinc-900 p-2">worker-01 (Active)</div>
                <div className="rounded border border-zinc-800 bg-zinc-900 p-2">worker-02 (Active)</div>
              </div>
            </div>

            <div className="flex justify-center text-zinc-600">
              <ArrowRight className="size-3.5 rotate-90" />
            </div>

            {/* Layer 4: Caddy Hot Reload */}
            <div
              className={`rounded-xl border p-4 transition-colors ${
                selectedStep === 4
                  ? "border-blue-500/50 bg-blue-950/10"
                  : "border-zinc-800 bg-zinc-900/40"
              }`}
            >
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="font-semibold text-zinc-200">04. CADDY ATOMIC REVERSE PROXY</span>
                <span className="text-emerald-400 text-[11px]">0ms Downtime Hot-Reload</span>
              </div>
              <div className="mt-3 rounded border border-zinc-800 bg-zinc-900 p-2.5 font-mono text-xs text-zinc-400">
                In-process dry run test → Administrative JSON API reload → Rollback on syntax error
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
