import type { Dictionary } from "@/i18n/types";
import { ScrollReveal } from "@/components/landing/ScrollReveal";

interface StudioManifestoProps {
  dict: Dictionary;
}

export function StudioManifesto({ dict }: StudioManifestoProps) {
  const { manifesto } = dict;
  const principles = [manifesto.point1, manifesto.point2, manifesto.point3];

  return (
    <section id="studio" className="studio-story" aria-labelledby="studio-story-title">
      <div className="studio-shell">
        <ScrollReveal className="studio-story__intro">
          <div className="studio-story__heading">
            <p className="studio-eyebrow">{manifesto.badge}</p>
            <h2 id="studio-story-title" className="studio-section-title">
              {manifesto.title}
            </h2>
          </div>

          <div className="studio-story__copy">
            <p className="studio-story__lead">{manifesto.description}</p>
            <p>{manifesto.subDescription}</p>
          </div>
        </ScrollReveal>

        <div className="studio-principles">
          {principles.map((principle, index) => (
            <ScrollReveal key={principle.title} delay={index * 55}>
              <article className="studio-principle">
                <span className="studio-principle__number" aria-hidden="true">
                  0{index + 1}
                </span>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.desc}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
