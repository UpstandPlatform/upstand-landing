"use client";

import { useState } from "react";
import { Dictionary } from "@/i18n/types";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

interface IdeaContactFormProps {
  dict: Dictionary;
}

export function IdeaContactForm({ dict }: IdeaContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [idea, setIdea] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { contact } = dict;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !idea) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="border-t border-zinc-800/80 bg-[#090a0f] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-400">
            {contact.badge}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl md:text-5xl">
            {contact.title}
          </h2>
          <p className="mt-4 text-base text-zinc-400 sm:text-lg">
            {contact.description}
          </p>
          <div className="mt-3 text-xs text-zinc-400">
            {contact.directEmailNotice}{" "}
            <a
              href="mailto:hello@upstand.dev"
              className="font-mono text-zinc-200 underline hover:text-white"
            >
              hello@upstand.dev
              <ArrowUpRight className="inline size-3.5 ml-0.5" />
            </a>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="mt-16 mx-auto max-w-xl">
          <div className="rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-8 sm:p-10">
            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <CheckCircle2 className="size-6" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-100">
                  {contact.successMessage}
                </h3>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setName("");
                    setEmail("");
                    setIdea("");
                  }}
                  className="mt-4 inline-flex items-center rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2 text-xs font-medium text-zinc-300 hover:bg-zinc-800"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={contact.namePlaceholder}
                      className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-3.5 py-2.5 text-xs text-zinc-100 placeholder-zinc-500 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={contact.emailPlaceholder}
                      className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-3.5 py-2.5 text-xs text-zinc-100 placeholder-zinc-500 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={idea}
                    onChange={(e) => setIdea(e.target.value)}
                    placeholder={contact.ideaPlaceholder}
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-3.5 py-2.5 text-xs text-zinc-100 placeholder-zinc-500 focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-blue-600 py-3 text-xs font-medium text-white transition-colors hover:bg-blue-500"
                >
                  {contact.submitButton}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
