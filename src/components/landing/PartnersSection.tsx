import { Dictionary } from "@/i18n/types";
import { ArrowUpRight } from "lucide-react";

interface PartnersSectionProps {
  dict: Dictionary;
}

export function PartnersSection({ dict }: PartnersSectionProps) {
  const { partners } = dict;

  return (
    <section id="partners" className="border-t border-zinc-800/80 bg-[#090a0f] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-400">
            {partners.badge}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl md:text-5xl">
            {partners.title}
          </h2>
          <p className="mt-4 text-base text-zinc-400 sm:text-lg">
            {partners.description}
          </p>
        </div>

        {/* 2 Partner Cards */}
        <div className="mt-16 mx-auto max-w-4xl grid grid-cols-1 gap-6 sm:grid-cols-2">
          {partners.items.map((partner, idx) => (
            <a
              key={idx}
              href={partner.url}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col justify-between rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-8 transition-colors hover:border-zinc-700/80"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-zinc-400">
                    [{partner.number}]
                  </span>
                  <span className="rounded-full bg-zinc-900 border border-zinc-800 px-2.5 py-0.5 text-[11px] text-zinc-300">
                    {partner.role}
                  </span>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-white transition-colors">
                    {partner.name}
                  </h3>
                  <ArrowUpRight className="size-4 text-zinc-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-zinc-200" />
                </div>

                <p className="mt-3 text-xs leading-relaxed text-zinc-400">
                  {partner.description}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-zinc-800/80 pt-4 text-xs font-mono text-zinc-400">
                <span>{partner.url.replace(/^https?:\/\//, "")}</span>
                <span className="text-zinc-300 group-hover:text-white transition-colors">
                  {partners.visitPartner} →
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Studio Quote */}
        <div className="mt-14 mx-auto max-w-xl text-center">
          <p className="border-l-2 border-zinc-800 pl-4 text-xs text-zinc-400 leading-relaxed text-left mx-auto italic">
            &ldquo;{partners.quote}&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
