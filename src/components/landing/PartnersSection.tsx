import { ArrowUpRight } from "lucide-react";
import type { Dictionary } from "@/i18n/types";
import { ScrollReveal } from "@/components/landing/ScrollReveal";

interface PartnersSectionProps {
  dict: Dictionary;
}

export function PartnersSection({ dict }: PartnersSectionProps) {
  const { partners } = dict;

  return (
    <section
      id="partners"
      className="studio-partners"
      aria-labelledby="studio-partners-title"
    >
      <div className="studio-shell">
        <ScrollReveal className="studio-partners__intro">
          <div>
            <p className="studio-eyebrow">{partners.badge}</p>
            <h2 id="studio-partners-title" className="studio-section-title">
              {partners.title}
            </h2>
          </div>
          <p className="studio-partners__description">{partners.description}</p>
        </ScrollReveal>

        <div className="partners-grid">
          {partners.items.map((partner, index) => {
            const domain = partner.url.replace(/^https?:\/\//, "").replace(/\/$/, "");

            return (
              <ScrollReveal key={partner.url} delay={index * 65}>
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noreferrer"
                  className="partner-card"
                >
                  <div className="partner-card__meta">
                    <span>{partner.number}</span>
                    <span className="partner-card__role">
                      <i aria-hidden="true" />
                      {partner.role}
                    </span>
                  </div>

                  <div className="partner-card__body">
                    <div className="partner-card__title-row">
                      <h3>{partner.name}</h3>
                      <ArrowUpRight
                        className="partner-card__arrow icon-directional"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="partner-card__description">
                      {partner.description}
                    </p>
                  </div>

                  <div className="partner-card__footer">
                    <span className="partner-card__domain" dir="ltr">
                      {domain}
                    </span>
                    <span className="partner-card__visit">
                      {partners.visitPartner}
                      <ArrowUpRight
                        className="icon-directional"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </a>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal className="studio-partners__note" delay={110}>
          <span className="studio-eyebrow__mark" aria-hidden="true" />
          <p>{partners.quote}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
