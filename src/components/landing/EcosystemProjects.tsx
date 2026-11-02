import { Dictionary } from "@/i18n/types";
import { ArrowUpRight, Code2, Sparkles, Terminal, Shield, MessageCircle, Tv, ExternalLink } from "lucide-react";

interface EcosystemProjectsProps {
  dict: Dictionary;
}

export function EcosystemProjects({ dict }: EcosystemProjectsProps) {
  const getIconForProject = (id: string) => {
    switch (id) {
      case "upstand-paas":
        return Terminal;
      case "openrive":
        return Sparkles;
      case "adsparty":
        return Tv;
      case "tongo":
        return Code2;
      case "dgrunner":
        return Shield;
      case "lettersbox":
        return MessageCircle;
      default:
        return ExternalLink;
    }
  };

  return (
    <section id="ecosystem" className="py-20 md:py-28 relative bg-[#070a12] border-t border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-semibold text-[#38bdf8]">
            <Code2 className="size-3.5" />
            <span>{dict.ecosystem.badge}</span>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            {dict.ecosystem.title}
          </h2>

          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            {dict.ecosystem.description}
          </p>
        </div>

        {/* 6 Projects Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dict.ecosystem.projects.map((proj) => {
            const Icon = getIconForProject(proj.id);
            return (
              <a
                key={proj.id}
                href={proj.url}
                target={proj.url.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className={`glow-card group relative flex flex-col justify-between rounded-2xl border p-6 sm:p-7 backdrop-blur-sm transition-all duration-300 ${
                  proj.isFlagship
                    ? "border-[#0068ff]/40 bg-gradient-to-br from-[#0c142b] via-[#090e1d] to-[#070b16] shadow-xl shadow-[#0068ff]/10"
                    : "border-slate-800 bg-[#0b101d] hover:border-slate-700 hover:bg-[#0e1424]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs font-bold text-slate-400">
                        {proj.number}
                      </span>
                      <span className="rounded-full border border-slate-800 bg-slate-900/80 px-2 py-0.5 text-[10px] font-medium text-slate-300">
                        {proj.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[11px] font-mono text-emerald-400">
                        {proj.status}
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#38bdf8] transition-colors flex items-center gap-2">
                      <Icon className="size-5 text-[#38bdf8]" />
                      <span>{proj.name}</span>
                    </h3>
                    <ArrowUpRight className="size-4.5 text-slate-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                  </div>

                  <div className="mt-1 text-xs font-medium text-slate-400">
                    {proj.tagline}
                  </div>

                  <p className="mt-3.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-800/80 text-xs">
                  <span className="font-mono text-slate-400 group-hover:text-slate-200 transition-colors">
                    {proj.url.replace(/^https?:\/\//, "")}
                  </span>
                  <span className="font-semibold text-[#38bdf8] group-hover:underline">
                    {dict.ecosystem.visitSite} →
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
