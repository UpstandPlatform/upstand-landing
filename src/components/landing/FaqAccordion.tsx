"use client";

import { useState } from "react";
import { Dictionary } from "@/i18n/types";
import { HelpCircle, ChevronDown } from "lucide-react";

interface FaqAccordionProps {
  dict: Dictionary;
}

export function FaqAccordion({ dict }: FaqAccordionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-semibold text-[#38bdf8]">
            <HelpCircle className="size-3.5" />
            <span>{dict.faq.badge}</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            {dict.faq.title}
          </h2>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            {dict.faq.description}
          </p>
        </div>

        <div className="mt-14 mx-auto max-w-3xl space-y-3">
          {dict.faq.items.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-xl border border-slate-800 bg-[#0b101d] transition-colors hover:border-slate-700"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-5 text-left transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-sm sm:text-base text-white pr-4">
                    {item.question}
                  </span>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="hidden sm:inline rounded-full bg-slate-800 px-2.5 py-0.5 text-[11px] font-medium text-slate-400">
                      {item.category}
                    </span>
                    <ChevronDown
                      className={`size-4.5 text-slate-400 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#38bdf8]" : ""
                      }`}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-slate-800/80 bg-[#070a12]/60 px-5 py-4 text-xs sm:text-sm leading-relaxed text-slate-300">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
