"use client";

import { useState } from "react";
import { Dictionary } from "@/i18n/types";
import { ChevronDown } from "lucide-react";

interface FaqAccordionProps {
  dict: Dictionary;
}

export function FaqAccordion({ dict }: FaqAccordionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const { faq } = dict;

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="border-t border-zinc-800/80 bg-[#090a0f] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-400">
            {faq.badge}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl md:text-5xl">
            {faq.title}
          </h2>
          <p className="mt-4 text-base text-zinc-400 sm:text-lg">
            {faq.description}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-16 mx-auto max-w-3xl space-y-3">
          {faq.items.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/60 transition-colors hover:border-zinc-700/80"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-5 text-left transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-sm text-zinc-100 pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`size-4 text-zinc-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-zinc-200" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-zinc-800/80 bg-zinc-950 px-5 py-4 text-xs leading-relaxed text-zinc-400">
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
