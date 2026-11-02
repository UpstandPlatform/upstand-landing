import { Dictionary } from "@/i18n/types";
import { ArrowUpRight, Terminal, Layers, Radio, Layout, Shield, Mail } from "lucide-react";

interface EcosystemProjectsProps {
  dict: Dictionary;
}

export function EcosystemProjects({ dict }: EcosystemProjectsProps) {
  const { ecosystem } = dict;

  const getIconForProject = (id: string) => {
    switch (id) {
      case "upstand-paas":
        return Terminal;
      case "openrive":
        return Layers;
      case "adsparty":
        return Radio;
      case "tongo":
        return Layout;
      case "dgrunner":
        return Shield;
      case "lettersbox":
        return Mail;
      default:
        return Terminal;
    }
  };

  return (
    <section id="ecosystem" className="border-t border-zinc-800/80 bg-[#090a0f] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-400">
            {ecosystem.badge}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl md:text-5xl">
            {ecosystem.title}
          </h2>
          <p className="mt-4 text-base text-zinc-400 sm:text-lg">
            {ecosystem.description}
          </p>
        </div>

        {/* 6 Projects Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ecosystem.projects.map((proj) => {
            const Icon = getIconForProject(proj.id);
            return (
              <a
                key={proj.id}
                href={proj.url}
                target={proj.url.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex flex-col justify-between rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-7 transition-colors hover:border-zinc-700/80"
              >
                <div>
                  {/* Top Bar: Number & Category & Status */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-zinc-400">
                        [{proj.number}]
                      </span>
                      <span className="rounded-full bg-zinc-900 border border-zinc-800 px-2 py-0.5 text-[10px] text-zinc-400">
                        {proj.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400">
                      <span className="size-1.5 rounded-full bg-emerald-500" />
                      <span>{proj.status}</span>
                    </div>
                  </div>

                  {/* Project Name & Icon */}
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="flex size-8 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300">
                        <Icon className="size-4" />
                      </div>
                      <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-white transition-colors">
                        {proj.name}
                      </h3>
                    </div>
                    <ArrowUpRight className="size-4 text-zinc-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-zinc-200" />
                  </div>

                  {/* Tagline & Description */}
                  <div className="mt-2 text-xs font-medium text-zinc-400">
                    {proj.tagline}
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-zinc-400">
                    {proj.description}
                  </p>
                </div>

                {/* Footer Domain Link */}
                <div className="mt-6 border-t border-zinc-800/80 pt-4 font-mono text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors">
                  {proj.url.replace(/^https?:\/\//, "")}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
