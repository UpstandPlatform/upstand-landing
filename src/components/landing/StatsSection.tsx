import { Dictionary } from "@/i18n/types";
import { Activity, Zap, RefreshCw, Lock } from "lucide-react";

interface StatsSectionProps {
  dict: Dictionary;
}

export function StatsSection({ dict }: StatsSectionProps) {
  const stats = [
    {
      value: dict.stats.uptimeValue,
      label: dict.stats.uptimeLabel,
      icon: Activity,
      color: "from-emerald-400 to-teal-300",
      border: "border-emerald-500/20",
    },
    {
      value: dict.stats.speedValue,
      label: dict.stats.speedLabel,
      icon: Zap,
      color: "from-[#38bdf8] to-[#0068ff]",
      border: "border-sky-500/20",
    },
    {
      value: dict.stats.caddyValue,
      label: dict.stats.caddyLabel,
      icon: RefreshCw,
      color: "from-[#818cf8] to-violet-400",
      border: "border-indigo-500/20",
    },
    {
      value: dict.stats.sovereigntyValue,
      label: dict.stats.sovereigntyLabel,
      icon: Lock,
      color: "from-amber-400 to-orange-400",
      border: "border-amber-500/20",
    },
  ];

  return (
    <section className="relative z-10 border-y border-slate-800/80 bg-[#070a12]/80 py-12 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className={`glow-card rounded-2xl border ${stat.border} bg-[#0b101d]/60 p-5 sm:p-6 backdrop-blur-sm`}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`text-2xl font-black tracking-tight sm:text-4xl bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                  >
                    {stat.value}
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-2 text-slate-400">
                    <Icon className="size-4.5 sm:size-5" />
                  </div>
                </div>
                <p className="mt-3 text-xs sm:text-sm font-medium text-slate-300">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
