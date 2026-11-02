import { Dictionary } from "@/i18n/types";

interface StudioManifestoProps {
  dict: Dictionary;
}

export function StudioManifesto({ dict }: StudioManifestoProps) {
  const { manifesto } = dict;

  return (
    <section id="manifesto" className="border-t border-zinc-800/80 bg-[#090a0f] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-400">
            {manifesto.badge}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl md:text-5xl">
            {manifesto.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
            {manifesto.description}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">
            {manifesto.subDescription}
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-8 transition-colors hover:border-zinc-700/80">
            <span className="font-mono text-xs text-zinc-400">[01]</span>
            <h3 className="mt-4 text-lg font-semibold text-zinc-100">
              {manifesto.point1.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              {manifesto.point1.desc}
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-8 transition-colors hover:border-zinc-700/80">
            <span className="font-mono text-xs text-zinc-400">[02]</span>
            <h3 className="mt-4 text-lg font-semibold text-zinc-100">
              {manifesto.point2.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              {manifesto.point2.desc}
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-8 transition-colors hover:border-zinc-700/80">
            <span className="font-mono text-xs text-zinc-400">[03]</span>
            <h3 className="mt-4 text-lg font-semibold text-zinc-100">
              {manifesto.point3.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              {manifesto.point3.desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
