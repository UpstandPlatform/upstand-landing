"use client";

import { useState } from "react";
import { Dictionary } from "@/i18n/types";
import { Mail, Send, CheckCircle2, MessageSquare, ArrowUpRight } from "lucide-react";

interface IdeaContactFormProps {
  dict: Dictionary;
}

export function IdeaContactForm({ dict }: IdeaContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [idea, setIdea] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !idea) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-[#070a12] border-t border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-semibold text-[#38bdf8]">
            <MessageSquare className="size-3.5" />
            <span>{dict.contact.badge}</span>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            {dict.contact.title}
          </h2>

          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            {dict.contact.description}
          </p>

          <div className="mt-4 inline-flex items-center gap-2">
            <span className="text-xs text-slate-400">{dict.contact.emailLabel}:</span>
            <a
              href="mailto:hello@upstand.dev"
              className="inline-flex items-center gap-1 font-mono text-sm font-semibold text-[#38bdf8] hover:underline"
            >
              hello@upstand.dev
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>
        </div>

        {/* Contact Form Container */}
        <div className="mt-12 mx-auto max-w-2xl">
          <div className="glow-card rounded-3xl border border-slate-800 bg-[#0b101d] p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
            {submitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <CheckCircle2 className="size-7" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {dict.contact.successMessage}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
                  We look forward to reviewing your thoughts and exploring the possibilities together.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName("");
                    setEmail("");
                    setIdea("");
                  }}
                  className="mt-4 inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-xs font-medium text-slate-200 hover:bg-slate-700"
                >
                  Submit another idea
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={dict.contact.namePlaceholder}
                      className="w-full rounded-xl border border-slate-700/80 bg-slate-900/90 px-4 py-2.5 text-sm text-white placeholder-slate-500 shadow-inner focus:border-[#0068ff] focus:outline-none focus:ring-1 focus:ring-[#0068ff]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={dict.contact.emailPlaceholder}
                      className="w-full rounded-xl border border-slate-700/80 bg-slate-900/90 px-4 py-2.5 text-sm text-white placeholder-slate-500 shadow-inner focus:border-[#0068ff] focus:outline-none focus:ring-1 focus:ring-[#0068ff]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    The Idea
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={idea}
                    onChange={(e) => setIdea(e.target.value)}
                    placeholder={dict.contact.ideaPlaceholder}
                    className="w-full rounded-xl border border-slate-700/80 bg-slate-900/90 p-4 text-sm text-white placeholder-slate-500 shadow-inner focus:border-[#0068ff] focus:outline-none focus:ring-1 focus:ring-[#0068ff]"
                  />
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#0068ff] to-[#0051cc] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0068ff]/25 transition-all hover:brightness-110 active:scale-95"
                  >
                    <span>{dict.contact.submitButton}</span>
                    <Send className="size-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
