import { Dictionary } from "@/i18n/types";

interface ComparisonTableProps {
  dict: Dictionary;
}

export function ComparisonTable({ dict }: ComparisonTableProps) {
  const { comparison } = dict;

  return (
    <section id="compare" className="border-t border-zinc-800/80 bg-[#090a0f] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-400">
            {comparison.badge}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl md:text-5xl">
            {comparison.title}
          </h2>
          <p className="mt-4 text-base text-zinc-400 sm:text-lg">
            {comparison.description}
          </p>
        </div>

        {/* Factual Comparison Table */}
        <div className="mt-16 overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-zinc-800/80 bg-zinc-900/60 font-mono text-zinc-400">
                  <th className="py-4 px-5 font-normal">
                    {comparison.colFeature}
                  </th>
                  <th className="py-4 px-5 font-medium text-zinc-100 bg-zinc-900/80 border-x border-zinc-800/80">
                    {comparison.colUpstand}
                  </th>
                  <th className="py-4 px-5 font-normal">
                    {comparison.colCoolify}
                  </th>
                  <th className="py-4 px-5 font-normal">
                    {comparison.colPortainer}
                  </th>
                  <th className="py-4 px-5 font-normal">
                    {comparison.colDokploy}
                  </th>
                  <th className="py-4 px-5 font-normal">
                    {comparison.colKubernetes}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-900 text-zinc-300">
                {comparison.rows.map((row, idx) => (
                  <tr
                    key={idx}
                    className="transition-colors hover:bg-zinc-900/30"
                  >
                    <td className="py-3.5 px-5 font-medium text-zinc-200">
                      {row.feature}
                    </td>
                    <td className="py-3.5 px-5 font-medium text-blue-400 bg-zinc-900/50 border-x border-zinc-800/80">
                      {row.upstand}
                    </td>
                    <td className="py-3.5 px-5 text-zinc-400">
                      {row.coolify}
                    </td>
                    <td className="py-3.5 px-5 text-zinc-400">
                      {row.portainer}
                    </td>
                    <td className="py-3.5 px-5 text-zinc-400">
                      {row.dokploy}
                    </td>
                    <td className="py-3.5 px-5 text-zinc-400">
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
