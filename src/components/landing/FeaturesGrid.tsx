import { Dictionary } from "@/i18n/types";
import {
  Network,
  Database,
  Globe,
  Bot,
  Server,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

interface FeaturesGridProps {
  dict: Dictionary;
}

export function FeaturesGrid({ dict }: FeaturesGridProps) {
  const items = [
    {
      data: dict.features.items.swarm,
      icon: Network,
      color: "from-blue-500/20 via-sky-500/10 to-transparent",
      iconColor: "text-[#38bdf8]",
      borderColor: "border-sky-500/30",
    },
    {
      data: dict.features.items.databases,
      icon: Database,
      color: "from-emerald-500/20 via-teal-500/10 to-transparent",
      iconColor: "text-emerald-400",
      borderColor: "border-emerald-500/30",
    },
    {
      data: dict.features.items.caddy,
      icon: Globe,
      color: "from-indigo-500/20 via-violet-500/10 to-transparent",
      iconColor: "text-indigo-400",
      borderColor: "border-indigo-500/30",
    },
    {
      data: dict.features.items.upgal,
      icon: Bot,
      color: "from-purple-500/20 via-fuchsia-500/10 to-transparent",
      iconColor: "text-purple-400",
      borderColor: "border-purple-500/30",
    },
    {
      data: dict.features.items.remoteServers,
      icon: Server,
      color: "from-amber-500/20 via-orange-500/10 to-transparent",
      iconColor: "text-amber-400",
      borderColor: "border-amber-500/30",
    },
    {
      data: dict.features.items.security,
      icon: ShieldCheck,
      color: "from-rose-500/20 via-pink-500/10 to-transparent",
      iconColor: "text-rose-400",
      borderColor: "border-rose-500/30",
    },
  ];

  return (
    <section id="features" className="py-20 md:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-semibold text-[#38bdf8]">
            <CheckCircle2 className="size-3.5" />
            <span>{dict.features.badge}</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            {dict.features.title}
          </h2>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            {dict.features.description}
          </p>
        </div>

        {/* 6 Feature Grid Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glow-card group relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-[#0b101d]/80 p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:border-slate-700 hover:bg-[#0e1424]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div
                      className={`inline-flex rounded-xl border border-slate-700/80 bg-slate-900/90 p-3 shadow-lg ${item.iconColor}`}
                    >
                      <Icon className="size-6 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <span className="rounded-full border border-slate-800 bg-slate-900/70 px-2.5 py-0.5 text-[11px] font-medium text-slate-400">
                      {item.data.tag}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold tracking-tight text-white group-hover:text-[#38bdf8] transition-colors">
                    {item.data.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {item.data.desc}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 pt-4 border-t border-slate-800/60 text-xs font-semibold text-slate-400 group-hover:text-slate-200 transition-colors">
                  <span className="size-1.5 rounded-full bg-[#38bdf8]" />
                  <span>Production-Ready in v0.14</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
