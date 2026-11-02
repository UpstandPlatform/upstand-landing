import { Dictionary } from "@/i18n/types";
import {
  GitCommit,
  Network,
  Database,
  Cpu,
  ShieldCheck,
  Terminal,
} from "lucide-react";

interface CapabilitiesGridProps {
  dict: Dictionary;
}

export function CapabilitiesGrid({ dict }: CapabilitiesGridProps) {
  const { capabilities } = dict;

  const categoryIcons: Record<string, React.ElementType> = {
    deploy: GitCommit,
    orchestrate: Network,
    route: Terminal,
    storage: Database,
    operate: Cpu,
    security: ShieldCheck,
  };

  return (
    <section id="capabilities" className="border-t border-zinc-800/80 bg-[#090a0f] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-400">
            {capabilities.badge}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl md:text-5xl">
            {capabilities.title}
          </h2>
          <p className="mt-4 text-base text-zinc-400 sm:text-lg">
            {capabilities.description}
          </p>
        </div>

        {/* 6 Category Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.categories.map((category) => {
            const Icon = categoryIcons[category.id] || GitCommit;

            return (
              <div
                key={category.id}
                className="flex flex-col justify-between rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-7 transition-colors hover:border-zinc-700/80"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 border-b border-zinc-800/80 pb-5">
                    <div className="flex size-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300">
                      <Icon className="size-4.5" />
                    </div>
                    <h3 className="text-base font-semibold text-zinc-100">
                      {category.title}
                    </h3>
                  </div>

                  {/* Items List */}
                  <div className="mt-5 space-y-4">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="text-xs font-medium text-zinc-200">
                          {item.name}
                        </div>
                        <p className="text-xs leading-relaxed text-zinc-400">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
