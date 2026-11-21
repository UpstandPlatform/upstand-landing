"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, MoveUpRight } from "lucide-react";
import type { Dictionary } from "@/i18n/types";
import { ScrollReveal } from "@/components/landing/ScrollReveal";

interface IdeaContactFormProps {
  dict: Dictionary;
}

export function IdeaContactForm({ dict }: IdeaContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [idea, setIdea] = useState("");
  const { contact } = dict;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent("A project idea for Upstand");
    const body = encodeURIComponent(
      [`Name: ${name}`, `Email: ${email}`, "", "The idea:", idea].join("\n"),
    );

    window.location.href = `mailto:hello@upstand.dev?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="studio-contact" aria-labelledby="studio-contact-title">
      <div className="studio-shell studio-contact__layout">
        <ScrollReveal className="studio-contact__copy">
          <p className="studio-eyebrow">{contact.badge}</p>
          <h2 id="studio-contact-title" className="studio-contact__title">
            {contact.title}
          </h2>
          <p className="studio-contact__description">{contact.description}</p>
          <a className="studio-contact__email" href="mailto:hello@upstand.dev">
            <span>{contact.directEmailNotice}</span>
            <span className="studio-contact__email-address">
              hello@upstand.dev
              <ArrowUpRight className="icon-directional" aria-hidden="true" />
            </span>
          </a>
        </ScrollReveal>

        <ScrollReveal className="studio-contact__form-wrap" delay={80}>
          <form className="idea-form" onSubmit={handleSubmit}>
            <div className="idea-form__row">
              <div className="idea-form__field">
                <label className="sr-only" htmlFor="idea-name">{contact.namePlaceholder}</label>
                <input
                  id="idea-name"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder={contact.namePlaceholder}
                  maxLength={120}
                />
              </div>
              <div className="idea-form__field">
                <label className="sr-only" htmlFor="idea-email">{contact.emailPlaceholder}</label>
                <input
                  id="idea-email"
                  type="email"
                  autoComplete="email"
                  dir="ltr"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder={contact.emailPlaceholder}
                  maxLength={254}
                />
              </div>
            </div>

            <div className="idea-form__field">
              <label className="sr-only" htmlFor="idea-description">{contact.ideaPlaceholder}</label>
              <textarea
                id="idea-description"
                required
                rows={6}
                value={idea}
                onChange={(event) => setIdea(event.target.value)}
                placeholder={contact.ideaPlaceholder}
                maxLength={4000}
              />
            </div>

            <div className="idea-form__footer">
              <button className="button button--submit" type="submit">
                {contact.submitButton}
                <MoveUpRight className="button__icon icon-directional" aria-hidden="true" />
              </button>
            </div>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
