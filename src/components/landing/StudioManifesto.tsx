import { Dictionary } from "@/i18n/types";
import { Compass, Sparkles, Feather, ShieldCheck } from "lucide-react";

interface StudioManifestoProps {
  dict: Dictionary;
}

export function StudioManifesto({ dict }: StudioManifestoProps) {
  return (
    <section id="about" className="py-20 md:py-28 relative bg-[#04070e] border-t border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1 text-xs font-semibold text-slate-300">
            <Compass className="size-3.5 text-[#38bdf8]" />
            <span>{dict.manifesto.badge}</span>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            {dict.manifesto.title}
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
            {dict.manifesto.description}
          </p>

          <p className="mt-3 text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {dict.manifesto.subDescription}
          </p>
        </div>

        {/* 3 Core Philosophical Pillars */}
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          <div className="glow-card rounded-2xl border border-slate-800 bg-[#090d18] p-6 sm:p-7 shadow-xl">
            <div className="flex size-10 items-center justify-center rounded-xl bg-[#0068ff]/10 text-[#38bdf8] border border-[#0068ff]/20">
              <Sparkles className="size-5" />
            </div>
            <h3 className="mt-5 text-lg font-bold text-white">
              {dict.manifesto.point1.title}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              {dict.manifesto.point1.desc}
            </p>
          </div>

          <div className="glow-card rounded-2xl border border-slate-800 bg-[#090d18] p-6 sm:p-7 shadow-xl">
            <div className="flex size-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <Feather className="size-5" />
            </div>
            <h3 className="mt-5 text-lg font-bold text-white">
              {dict.manifesto.point2.title}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              {dict.manifesto.point2.desc}
            </p>
          </div>

          <div className="glow-card rounded-2xl border border-slate-800 bg-[#090d18] p-6 sm:p-7 shadow-xl">
            <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <ShieldCheck className="size-5" />
            </div>
            <h3 className="mt-5 text-lg font-bold text-white">
              {dict.manifesto.point3.title}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              {dict.manifesto.point3.desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
