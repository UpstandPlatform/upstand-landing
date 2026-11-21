import Image from "next/image";
import { ArrowDown, ArrowUpRight, Layers3, Terminal } from "lucide-react";
import type { Dictionary } from "@/i18n/types";

interface HeroProps {
  dict: Dictionary;
}

export function Hero({ dict }: HeroProps) {
  const projects = dict.ecosystem.projects;
  const featured = projects.find((project) => project.id === "openrive") ?? projects[0];
  const infrastructure = projects.find((project) => project.id === "upstand-paas") ?? projects[1];
  const writing = projects.find((project) => project.id === "lettersbox") ?? projects[2];

  return (
    <section className="studio-hero" aria-labelledby="studio-hero-title">
      <div className="studio-shell studio-hero__layout">
        <div className="studio-hero__copy">
          <p className="studio-eyebrow studio-hero__eyebrow">
            <span className="studio-eyebrow__mark" aria-hidden="true" />
            {dict.hero.tag}
          </p>

          <h1 id="studio-hero-title" className="studio-hero__title">
            {dict.hero.title}
          </h1>

          <p className="studio-hero__description">{dict.hero.subtitle}</p>

          <div className="studio-hero__actions">
            <a className="button button--primary" href="#work">
              {dict.nav.ecosystem}
            <ArrowDown className="button__icon" aria-hidden="true" />
            </a>
            <a className="button button--text" href="#contact">
              {dict.nav.contact}
              <ArrowUpRight className="button__icon icon-directional" aria-hidden="true" />
            </a>
          </div>

          <p className="studio-hero__note">
            <span aria-hidden="true">{infrastructure.number}</span>
            {infrastructure.name}
            <span className="studio-hero__note-divider" aria-hidden="true" />
            {featured.name}
          </p>
        </div>

        <div
          className="studio-hero__art"
          role="img"
          aria-label="A selection of products made by Upstand"
          dir="ltr"
        >
          <div className="studio-board">
            <div className="studio-board__topline">
              <span>UPSTAND / STUDIO INDEX</span>
              <span>INDEPENDENT BY DESIGN</span>
            </div>

            <div className="studio-board__composition">
              <div className="studio-board__editor">
                <div className="studio-editor__topbar">
                  <span className="studio-editor__brand">
                    <Layers3 aria-hidden="true" />
                    {featured.name}
                  </span>
                  <span className="studio-editor__menu">VECTOR&nbsp;&nbsp; TIMELINE</span>
                </div>

                <div className="studio-editor__stage">
                  <div className="studio-editor__tools" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="studio-editor__canvas" aria-hidden="true">
                    <svg viewBox="0 0 360 220" fill="none" role="presentation">
                      <path d="M66 150C68 106 90 73 134 70C163 68 181 91 190 117C199 143 215 160 246 153C274 147 286 122 289 92" stroke="currentColor" strokeWidth="3" />
                      <path d="M65 152C112 183 154 180 188 150C223 118 244 102 290 92" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 7" />
                      <circle cx="66" cy="150" r="7" fill="currentColor" />
                      <circle cx="134" cy="70" r="6" fill="currentColor" />
                      <circle cx="190" cy="117" r="6" fill="currentColor" />
                      <circle cx="246" cy="153" r="6" fill="currentColor" />
                      <circle cx="289" cy="92" r="7" fill="currentColor" />
                    </svg>
                    <span className="studio-editor__canvas-caption">A curve, in motion</span>
                  </div>
                </div>

                <div className="studio-editor__timeline" aria-hidden="true">
                  <span>Motion</span>
                  <div className="studio-timeline__track"><i /><i /><i /></div>
                  <span>00:04</span>
                </div>

                <div className="studio-board__project-name">
                  <span>{featured.number} / {featured.category}</span>
                  <span>{featured.name}</span>
                </div>
              </div>

              <div className="studio-board__side">
                <div className="studio-index-card studio-index-card--infra">
                  <span className="studio-index-card__icon"><Terminal aria-hidden="true" /></span>
                  <span className="studio-index-card__label">{infrastructure.category}</span>
                  <strong>{infrastructure.name}</strong>
                  <span className="studio-index-card__rule" aria-hidden="true" />
                  <span className="studio-index-card__caption">Built for the people who run it</span>
                </div>

                <div className="studio-index-card studio-index-card--writing">
                  <span className="studio-index-card__label">{writing.category}</span>
                  <strong>{writing.name}</strong>
                  <div className="studio-letter-lines" aria-hidden="true"><i /><i /><i /><i /></div>
                  <span className="studio-index-card__caption">A quieter corner of the web</span>
                </div>
              </div>
            </div>

            <div className="studio-board__footer">
              <span>TOOLS / PLATFORMS / IDEAS</span>
              <Image
                src="/brand/icon.svg"
                alt=""
                width={22}
                height={22}
                priority
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
