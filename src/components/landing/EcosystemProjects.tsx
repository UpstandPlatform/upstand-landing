import Image from "next/image";
import {
  ArrowUpRight,
  AudioLines,
  Globe2,
  Mail,
  MessageCircle,
  PanelsTopLeft,
  Radio,
  ShieldCheck,
  Smartphone,
  Terminal,
} from "lucide-react";
import type { ReactNode } from "react";
import type { Dictionary } from "@/i18n/types";
import { ScrollReveal } from "@/components/landing/ScrollReveal";

interface EcosystemProjectsProps {
  dict: Dictionary;
}

function ProjectArtwork({ id }: { id: string }) {
  let artwork: ReactNode;

  switch (id) {
    case "upstand-paas":
      artwork = (
        <div className="work-art__screenshot">
          <Image
            src="/images/dashboard_hero.png"
            alt=""
            width={1280}
            height={800}
            sizes="(max-width: 768px) 100vw, 54vw"
          />
        </div>
      );
      break;
    case "openrive":
      artwork = (
        <div className="art-editor">
          <div className="art-editor__stage">
            <svg viewBox="0 0 320 180" fill="none" role="presentation">
              <path d="M44 123C46 80 73 52 111 58C149 64 154 128 192 127C228 126 235 74 278 62" stroke="currentColor" strokeWidth="3" />
              <circle cx="44" cy="123" r="6" fill="currentColor" />
              <circle cx="111" cy="58" r="6" fill="currentColor" />
              <circle cx="192" cy="127" r="6" fill="currentColor" />
              <circle cx="278" cy="62" r="6" fill="currentColor" />
            </svg>
          </div>
          <div className="art-editor__timeline"><i /><i /><i /><i /></div>
        </div>
      );
      break;
    case "adsparty":
      artwork = (
        <div className="art-campaign">
          <div className="art-campaign__poster"><span /><i /><b /></div>
          <div className="art-campaign__details"><i /><i /><i /><span /></div>
          <div className="art-campaign__orbit"><span /><i /></div>
        </div>
      );
      break;
    case "dotton":
      artwork = (
        <div className="art-domain">
          <div className="art-domain__root">.ton</div>
          <div className="art-domain__branch"><i /><span /><i /></div>
          <div className="art-domain__nodes"><b>name</b><b>studio</b><b>store</b></div>
        </div>
      );
      break;
    case "dgrunner":
      artwork = (
        <div className="art-runner">
          <div className="art-runner__top"><span /><span /><span /> workflow.yml</div>
          <div><i>$</i> runner start</div>
          <div><i>✓</i> connected to GitHub</div>
          <div><i>›</i> waiting for next job</div>
        </div>
      );
      break;
    case "lettersbox":
      artwork = (
        <div className="art-letter">
          <span>Dear world,</span>
          <i /><i /><i /><i />
          <b>keep a little room for words.</b>
        </div>
      );
      break;
    case "kavero":
      artwork = (
        <div className="art-deck">
          <div><span /><i /><i /><b /></div>
          <div><span /><i /><b /><i /></div>
          <div><span /><b /><i /><i /></div>
        </div>
      );
      break;
    case "mindclone":
      artwork = (
        <div className="art-dialogue">
          <span className="art-dialogue__avatar">M</span>
          <div><i /><i /><b /></div>
          <span className="art-dialogue__reply">A thought, in your own voice.</span>
        </div>
      );
      break;
    case "mobile-use":
      artwork = (
        <div className="art-mobile-use">
          <div className="art-mobile-use__phone">
            <div className="art-mobile-use__screen">
              <span className="art-mobile-use__device-header"><i /> LOCAL</span>
              <div className="art-mobile-use__screen-mark"><Smartphone aria-hidden="true" /></div>
              <div className="art-mobile-use__screen-lines"><i /><i /><i /></div>
              <span className="art-mobile-use__home" />
            </div>
          </div>
          <span className="art-mobile-use__connector"><i /><i /></span>
          <div className="art-mobile-use__session">
            <span className="art-mobile-use__session-header"><i /> SESSION / 01</span>
            <strong>Agent access</strong>
            <span className="art-mobile-use__capabilities"><i>SCREEN</i><i>TOUCH</i></span>
            <span className="art-mobile-use__approval"><i /> Owner approved</span>
          </div>
        </div>
      );
      break;
    default:
      artwork = <PanelsTopLeft aria-hidden="true" />;
  }

  return <div className={`work-art work-art--${id}`} aria-hidden="true">{artwork}</div>;
}

function ProjectMark({ id }: { id: string }) {
  const icons = {
    "upstand-paas": Terminal,
    openrive: AudioLines,
    adsparty: Radio,
    dotton: Globe2,
    dgrunner: ShieldCheck,
    lettersbox: Mail,
    kavero: PanelsTopLeft,
    mindclone: MessageCircle,
    "mobile-use": Smartphone,
  };
  const Icon = icons[id as keyof typeof icons] ?? PanelsTopLeft;

  return <Icon className="work-card__mark" aria-hidden="true" strokeWidth={1.6} />;
}

export function EcosystemProjects({ dict }: EcosystemProjectsProps) {
  const { ecosystem } = dict;
  const featuredProject = ecosystem.projects.find((project) => project.isFlagship) ?? ecosystem.projects[0];
  const otherProjects = ecosystem.projects.filter((project) => project.id !== featuredProject?.id);

  return (
    <section id="work" className="studio-work" aria-labelledby="studio-work-title">
      <div className="studio-shell">
        <ScrollReveal className="studio-work__intro">
          <div>
            <p className="studio-eyebrow">{ecosystem.badge}</p>
            <h2 id="studio-work-title" className="studio-section-title">
              {ecosystem.title}
            </h2>
          </div>
          <p className="studio-work__description">{ecosystem.description}</p>
        </ScrollReveal>

        {featuredProject && (
          <ScrollReveal className="work-feature">
            <a
              className="work-feature__link"
              href={featuredProject.url}
              target="_blank"
              rel="noreferrer"
            >
              <ProjectArtwork id={featuredProject.id} />
              <div className="work-feature__copy">
                <div className="work-card__meta">
                  <span>{featuredProject.number} / {featuredProject.category}</span>
                  <span className="work-card__status"><i />{featuredProject.status}</span>
                </div>
                <div className="work-feature__title-row">
                  <div>
                    <h3>{featuredProject.name}</h3>
                    <p className="work-card__tagline">{featuredProject.tagline}</p>
                  </div>
                  <ArrowUpRight className="work-card__arrow icon-directional" aria-hidden="true" />
                </div>
                <p className="work-card__description">{featuredProject.description}</p>
                <span className="work-card__visit">
                  {ecosystem.visitSite}
                  <ArrowUpRight className="icon-directional" aria-hidden="true" />
                </span>
              </div>
            </a>
          </ScrollReveal>
        )}

        <div className="work-grid">
          {otherProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={(index % 3) * 45}>
              <a
                className="work-card"
                href={project.url}
                target="_blank"
                rel="noreferrer"
              >
                <ProjectArtwork id={project.id} />
                <div className="work-card__content">
                  <div className="work-card__meta">
                    <span>{project.number} / {project.category}</span>
                    <span className="work-card__status"><i />{project.status}</span>
                  </div>
                  <div className="work-card__title-row">
                    <span className="work-card__identity">
                      <ProjectMark id={project.id} />
                      <h3>{project.name}</h3>
                    </span>
                    <ArrowUpRight className="work-card__arrow icon-directional" aria-hidden="true" />
                  </div>
                  <p className="work-card__tagline">{project.tagline}</p>
                  <p className="work-card__description">{project.description}</p>
                  <span className="work-card__visit">
                    {ecosystem.visitSite}
                    <ArrowUpRight className="icon-directional" aria-hidden="true" />
                  </span>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
