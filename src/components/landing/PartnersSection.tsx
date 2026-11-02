import { Dictionary } from "@/i18n/types";
import { Handshake, ArrowUpRight, Sparkles } from "lucide-react";

interface PartnersSectionProps {
  dict: Dictionary;
}

export function PartnersSection({ dict }: PartnersSectionProps) {
  return (
    <section id="partners" className="py-20 md:py-28 relative bg-[#05080f] border-t border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-300">
            <Handshake className="size-3.5" />
            <span>{dict.partners.badge}</span>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            {dict.partners.title}
          </h2>

          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            {dict.partners.description}
          </p>
        </div>

        {/* 2 Partner Cards */}
        <div className="mt-14 mx-auto max-w-4xl grid gap-6 sm:grid-cols-2">
          {dict.partners.items.map((partner, idx) => (
            <a
              key={idx}
              href={partner.url}
              target="_blank"
              rel="noreferrer"
              className="glow-card group relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-[#0b101d] p-7 sm:p-8 shadow-xl transition-all hover:border-slate-700 hover:bg-[#0e1424]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-slate-500">
                    {partner.number}
                  </span>
                  <span className="rounded-full border border-slate-800 bg-slate-900/80 px-2.5 py-0.5 text-[11px] font-medium text-[#38bdf8]">
                    {partner.role}
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#38bdf8] transition-colors">
                    {partner.name}
                  </h3>
                  <ArrowUpRight className="size-5 text-slate-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                </div>

                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  {partner.description}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-800/80 text-xs">
                <span className="font-mono text-slate-400 group-hover:text-slate-200 transition-colors">
                  {partner.url.replace(/^https?:\/\//, "")}
                </span>
                <span className="font-semibold text-purple-400 group-hover:underline">
                  {dict.partners.visitPartner} →
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Studio Motto Banner */}
        <div className="mt-14 mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-2xl border border-slate-800/80 bg-slate-900/60 px-6 py-3 text-xs sm:text-sm text-slate-300 shadow-inner backdrop-blur-md">
            <span className="text-amber-400">✳</span>
            <span className="italic font-medium">{dict.partners.quote}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
