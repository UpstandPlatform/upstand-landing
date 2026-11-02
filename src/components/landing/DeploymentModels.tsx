import { Dictionary } from "@/i18n/types";
import { ArrowRightLeft, Check, Server, Cloud, Cpu } from "lucide-react";

interface DeploymentModelsProps {
  dict: Dictionary;
}

export function DeploymentModels({ dict }: DeploymentModelsProps) {
  const { deploymentModels } = dict;

  return (
    <section id="models" className="border-t border-zinc-800/80 bg-[#090a0f] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-400">
            {deploymentModels.tag}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl md:text-5xl">
            {deploymentModels.title}
          </h2>
          <p className="mt-4 text-base text-zinc-400 sm:text-lg">
            {deploymentModels.description}
          </p>
        </div>

        {/* 3 Deployment Shapes Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3 items-stretch">
          {deploymentModels.models.map((model) => {
            const isFeatured = model.isFeatured;
            const Icon = model.id === "cloud" ? Cloud : model.id === "self-hosted" ? Server : Cpu;

            return (
              <div
                key={model.id}
                className={`relative flex flex-col justify-between rounded-2xl border p-8 transition-colors ${
                  isFeatured
                    ? "border-blue-500/40 bg-zinc-900/90 shadow-xl shadow-black/40 lg:-translate-y-2"
                    : "border-zinc-800/80 bg-zinc-950/60 hover:border-zinc-700/80"
                }`}
              >
                <div>
                  {/* Top Meta Bar */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-zinc-400">
                      [{model.number}]
                    </span>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        isFeatured
                          ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                          : "bg-zinc-800 text-zinc-300"
                      }`}
                    >
                      {model.tag}
                    </span>
                  </div>

                  {/* Title & Lead */}
                  <div className="mt-6 flex items-center gap-3">
                    <div
                      className={`flex size-10 shrink-0 items-center justify-center rounded-lg border ${
                        isFeatured
                          ? "border-blue-500/30 bg-blue-600/10 text-blue-400"
                          : "border-zinc-800 bg-zinc-900 text-zinc-400"
                      }`}
                    >
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-zinc-100">
                      {model.title}
                    </h3>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                    {model.lead}
                  </p>

                  {/* Key Capabilities List */}
                  <ul className="mt-6 space-y-2.5 border-t border-zinc-800/80 pt-6">
                    {model.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <Check className="size-4 shrink-0 text-zinc-400 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Price Note */}
                <div className="mt-8 border-t border-zinc-800/80 pt-6">
                  <div className="text-base font-medium text-zinc-100">
                    {model.price}
                  </div>
                  <div className="mt-1 text-xs text-zinc-400">
                    {model.pricenote}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Migration Guarantee Banner */}
        <div className="mt-12 rounded-2xl border border-zinc-800/80 bg-zinc-950/70 p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                {deploymentModels.migrateTag}
              </span>
              <h3 className="mt-2 text-xl font-semibold text-zinc-100">
                {deploymentModels.migrateTitle}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {deploymentModels.migrateBody}
              </p>
            </div>
            <div className="flex shrink-0 items-center">
              <div className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/80 px-4 py-3 font-mono text-xs text-zinc-300">
                <ArrowRightLeft className="size-4 text-blue-400" />
                <span>Zero vendor lock-in</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
