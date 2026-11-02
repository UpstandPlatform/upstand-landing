import { Dictionary } from "@/i18n/types";
import { Scale, Check, Minus } from "lucide-react";

interface ComparisonTableProps {
  dict: Dictionary;
}

export function ComparisonTable({ dict }: ComparisonTableProps) {
  return (
    <section id="compare" className="py-20 md:py-28 bg-[#05080f] relative border-t border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-semibold text-[#38bdf8]">
            <Scale className="size-3.5" />
            <span>{dict.comparison.badge}</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            {dict.comparison.title}
          </h2>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            {dict.comparison.description}
          </p>
        </div>

        {/* Responsive Table Card */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-slate-800 bg-[#0b101d] shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-800 bg-[#070a12]/90 text-slate-300">
                  <th className="py-4 px-4 sm:px-6 font-semibold">
                    {dict.comparison.colFeature}
                  </th>
                  <th className="py-4 px-4 sm:px-6 font-bold text-[#38bdf8] bg-[#0068ff]/10">
                    <span className="flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-[#38bdf8] animate-pulse" />
                      {dict.comparison.colUpstand}
                    </span>
                  </th>
                  <th className="py-4 px-4 sm:px-6 font-medium text-slate-400">
                    {dict.comparison.colCoolify}
                  </th>
                  <th className="py-4 px-4 sm:px-6 font-medium text-slate-400">
                    {dict.comparison.colPortainer}
                  </th>
                  <th className="py-4 px-4 sm:px-6 font-medium text-slate-400">
                    {dict.comparison.colDokploy}
                  </th>
                  <th className="py-4 px-4 sm:px-6 font-medium text-slate-400">
                    {dict.comparison.colKubernetes}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {dict.comparison.rows.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`transition-colors hover:bg-slate-800/30 ${
                      row.highlight ? "bg-[#0068ff]/5" : ""
                    }`}
                  >
                    <td className="py-4 px-4 sm:px-6 font-medium text-white">
                      {row.feature}
                    </td>
                    <td className="py-4 px-4 sm:px-6 font-semibold text-[#7cb0ff] bg-[#0068ff]/10">
                      {row.upstand}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-slate-400">
                      {row.coolify}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-slate-400">
                      {row.portainer}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-slate-400">
                      {row.dokploy}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-slate-400">
                      {row.kubernetes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
