"use client";

import { useState } from "react";
import { Dictionary } from "@/i18n/types";
import { Calculator, DollarSign, TrendingDown, Server, Box, Database } from "lucide-react";

interface TcoCalculatorProps {
  dict: Dictionary;
}

export function TcoCalculator({ dict }: TcoCalculatorProps) {
  const [nodes, setNodes] = useState<number>(3);
  const [apps, setApps] = useState<number>(12);
  const [dbs, setDbs] = useState<number>(4);

  // Cloud PaaS model: ~$90 per 4 vCPU VM, ~$30 compute surcharge per active app, ~$120 per managed DB instance
  const cloudMonthly = nodes * 95 + apps * 28 + dbs * 115;

  // Upstand Self-Hosted model: ~$45 per dedicated Hetzner/OVH server, $0 per app, $0 per DB (included in Upstand)
  const upstandMonthly = nodes * 45;

  const monthlySavings = cloudMonthly - upstandMonthly;
  const annualSavings = monthlySavings * 12;
  const savingsPercent = Math.round((monthlySavings / cloudMonthly) * 100);

  return (
    <section id="calculator" className="py-20 md:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
            <Calculator className="size-3.5" />
            <span>{dict.calculator.badge}</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            {dict.calculator.title}
          </h2>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            {dict.calculator.description}
          </p>
        </div>

        <div className="mt-14 mx-auto max-w-4xl">
          <div className="glow-card rounded-2xl border border-slate-800 bg-[#0b101d] p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              {/* Sliders Control Panel */}
              <div className="space-y-6">
                {/* Nodes Slider */}
                <div>
                  <div className="flex items-center justify-between text-sm font-semibold text-white">
                    <span className="flex items-center gap-2">
                      <Server className="size-4 text-[#38bdf8]" />
                      {dict.calculator.nodesLabel}
                    </span>
                    <span className="rounded-lg bg-slate-800 px-2.5 py-0.5 font-mono text-sm text-[#38bdf8]">
                      {nodes} {nodes === 1 ? "host" : "hosts"}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    value={nodes}
                    onChange={(e) => setNodes(Number(e.target.value))}
                    className="mt-3 w-full cursor-pointer accent-[#0068ff]"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500">
                    <span>1 node</span>
                    <span>10 nodes</span>
                    <span>20 nodes</span>
                  </div>
                </div>

                {/* Apps Slider */}
                <div>
                  <div className="flex items-center justify-between text-sm font-semibold text-white">
                    <span className="flex items-center gap-2">
                      <Box className="size-4 text-emerald-400" />
                      {dict.calculator.appsLabel}
                    </span>
                    <span className="rounded-lg bg-slate-800 px-2.5 py-0.5 font-mono text-sm text-emerald-400">
                      {apps} {apps === 1 ? "app" : "apps"}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="60"
                    value={apps}
                    onChange={(e) => setApps(Number(e.target.value))}
                    className="mt-3 w-full cursor-pointer accent-emerald-500"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500">
                    <span>2 apps</span>
                    <span>30 apps</span>
                    <span>60 apps</span>
                  </div>
                </div>

                {/* Databases Slider */}
                <div>
                  <div className="flex items-center justify-between text-sm font-semibold text-white">
                    <span className="flex items-center gap-2">
                      <Database className="size-4 text-purple-400" />
                      {dict.calculator.dbsLabel}
                    </span>
                    <span className="rounded-lg bg-slate-800 px-2.5 py-0.5 font-mono text-sm text-purple-400">
                      {dbs} {dbs === 1 ? "DB" : "DBs"}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="15"
                    value={dbs}
                    onChange={(e) => setDbs(Number(e.target.value))}
                    className="mt-3 w-full cursor-pointer accent-purple-500"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500">
                    <span>1 instance</span>
                    <span>8 instances</span>
                    <span>15 instances</span>
                  </div>
                </div>
              </div>

              {/* Calculated Results Summary Box */}
              <div className="rounded-xl border border-slate-700/80 bg-[#070a12]/90 p-6 flex flex-col justify-between space-y-6">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {dict.calculator.estimatedCloudCost}
                  </div>
                  <div className="mt-1 text-2xl font-bold line-through text-slate-500 font-mono">
                    ${cloudMonthly.toLocaleString()}{" "}
                    <span className="text-xs font-normal text-slate-500">/month</span>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#38bdf8]">
                    {dict.calculator.upstandCost}
                  </div>
                  <div className="mt-1 text-3xl font-extrabold text-white font-mono">
                    ${upstandMonthly.toLocaleString()}{" "}
                    <span className="text-xs font-normal text-slate-400">/month</span>
                  </div>
                </div>

                <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-emerald-400">
                      {dict.calculator.savingsPerYear}
                    </span>
                    <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-xs font-bold text-emerald-300">
                      {savingsPercent}% Savings
                    </span>
                  </div>
                  <div className="mt-2 text-3xl font-black text-emerald-400 font-mono">
                    ${annualSavings.toLocaleString()}
                  </div>
                </div>

                <p className="text-[11px] text-slate-500 leading-normal">
                  {dict.calculator.savingsNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
