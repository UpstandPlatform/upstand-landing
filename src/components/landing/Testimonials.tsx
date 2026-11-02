import { Dictionary } from "@/i18n/types";
import { MessageSquareQuote, Star } from "lucide-react";

interface TestimonialsProps {
  dict: Dictionary;
}

export function Testimonials({ dict }: TestimonialsProps) {
  return (
    <section className="py-20 md:py-28 bg-[#05080f] relative border-t border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400">
            <MessageSquareQuote className="size-3.5" />
            <span>{dict.testimonials.badge}</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            {dict.testimonials.title}
          </h2>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            {dict.testimonials.description}
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dict.testimonials.items.map((item, idx) => (
            <div
              key={idx}
              className="glow-card flex flex-col justify-between rounded-2xl border border-slate-800 bg-[#0b101d] p-6 sm:p-8 shadow-xl"
            >
              <div>
                <div className="flex gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-4 fill-amber-400" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-slate-300 italic">
                  "{item.quote}"
                </blockquote>
              </div>

              <div className="mt-6 flex items-center gap-3 pt-4 border-t border-slate-800/80">
                <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-tr from-[#0068ff] to-[#38bdf8] font-bold text-xs text-white">
                  {item.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="text-sm font-bold text-white">
                    {item.author}
                  </div>
                  <div className="text-xs text-slate-400">
                    {item.role} · <span className="text-[#38bdf8]">{item.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
