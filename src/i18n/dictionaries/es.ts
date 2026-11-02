import { Dictionary } from "../types";

export const es: Dictionary = {
  "seo": {
    "title": "Upstand — Plataforma de contenedores Open Source y Estudio Independiente",
    "description": "Orquestación autoalojada en Docker Swarm y Caddy con TLS automático y clustering multiserver sin dependencia de proveedores. 100% código abierto bajo Apache 2.0.",
    "keywords": [
      "Docker Swarm PaaS",
      "PaaS autoalojado",
      "Open Source PaaS",
      "proxy Caddy",
      "estudio Upstand",
      "Apache 2.0"
    ],
    "ogTitle": "Upstand — Despliega lo que sea. Sé dueño de todo.",
    "ogDescription": "Plataforma de orquestación de contenedores autoalojada y estudio independiente. Ejecuta en tus propios servidores sin bloqueos."
  },
  "nav": {
    "models": "Despliegue",
    "manifesto": "Manifiesto",
    "ecosystem": "Proyectos",
    "capabilities": "Capacidades",
    "architecture": "Arquitectura",
    "compose": "Traductor Compose",
    "compare": "Comparativa",
    "partners": "Socios",
    "faq": "Preguntas",
    "contact": "Contacto",
    "docs": "Documentación",
    "github": "GitHub",
    "getStarted": "Empezar",
    "language": "Idioma"
  },
  "hero": {
    "tag": "PaaS de Código Abierto y Estudio Independiente",
    "title": "Despliega cualquier servicio en tu propia infraestructura.",
    "subtitle": "Plataforma autoalojada basada en Docker Swarm y Caddy. Clustering multinodo, certificados TLS automáticos y bases de datos persistentes sin la complejidad de Kubernetes. 100% código abierto con licencia Apache 2.0.",
    "quickInstall": "Copiar comando",
    "copied": "Copiado al portapapeles",
    "exploreDocs": "Documentación",
    "viewGithub": "Ver en GitHub",
    "installCommand": "curl -fsSL https://upstand.dev/install.sh | bash",
    "clusterPreview": {
      "title": "upstand-cluster-01",
      "status": "Quórum Raft 3/3",
      "managers": "3 Managers Activos",
      "workers": "6 Workers Conectados",
      "services": "24 Réplicas en Ejecución",
      "routes": "Caddy Auto-TLS (Let's Encrypt)"
    }
  },
  "deploymentModels": {
    "tag": "01 — Tres formas de despliegue",
    "title": "Cloud, autoalojado o híbrido.",
    "description": "Una misma plataforma, tres modelos de ejecución — cambia cuando quieras.",
    "models": [
      {
        "id": "cloud",
        "number": "01",
        "tag": "Gestionado",
        "title": "Upstand Cloud",
        "lead": "Despliega aplicaciones web y contenedores desde tu repositorio. Panel de control administrado, copias automáticas y logs unificados.",
        "points": [
          "Compilaciones y entornos de ejecución gestionados",
          "Dominios HTTPS automáticos sin configuración",
          "Registro de auditoría y permisos de equipo centralizados",
          "Copias de seguridad programadas a almacenamiento S3"
        ],
        "price": "Plan Cloud",
        "pricenote": "Cero mantenimiento de servidores"
      },
      {
        "id": "self-hosted",
        "number": "02",
        "tag": "Autoalojado",
        "title": "Tus Servidores",
        "lead": "Ejecuta toda la plataforma en máquinas de tu propiedad. Cualquier VPS Linux (Hetzner, OVH, DigitalOcean, AWS) o servidores dedicados.",
        "points": [
          "Conexión de servidores por SSH sin necesidad de agentes",
          "Clustering multinodo nativo con Docker Swarm",
          "Sin demonios propietarios en tus máquinas",
          "Soberanía total de datos y capacidad offline"
        ],
        "price": "Gratuito y Open Source",
        "pricenote": "Apache-2.0 — sin límite de núcleos ni servidores",
        "isFeatured": true
      },
      {
        "id": "hybrid",
        "number": "03",
        "tag": "Híbrido",
        "title": "Combinación flexible",
        "lead": "Panel de control en la nube conectado a tus servidores privados mediante una red cifrada WireGuard.",
        "points": [
          "Bases de datos en servidores propios, vistas previas en la nube",
          "Mueve cargas de trabajo sin reescribir configuraciones",
          "Un único panel de control y CLI para todos tus entornos",
          "Permisos de equipo e historial de despliegues compartidos"
        ],
        "price": "Cloud + tus servidores",
        "pricenote": "Una suscripción, servidores propios ilimitados"
      }
    ],
    "migrateTag": "Migración sencilla en cualquier momento",
    "migrateTitle": "Cloud ⇄ Autoalojado. Un clic, cuando quieras.",
    "migrateBody": "Tus aplicaciones son contenedores OCI estándares y tus servicios imágenes Docker estándar. Mueve cargas entre la nube y tus servidores físicos sin costes de salida."
  },
  "manifesto": {
    "badge": "02 — Nuestro propósito",
    "title": "Creemos que internet todavía puede sentirse humano.",
    "description": "Upstand es un estudio de productos independiente para crear herramientas sólidas, infraestructura útil e ideas con propósito.",
    "subDescription": "Construimos lo que nos gustaría usar: herramientas de código abierto para desarrolladores y plataformas enfocadas para la web. Nuestro trabajo une software, artesanía técnica y soberanía.",
    "point1": {
      "title": "Artesanía antes que comodidad superficial",
      "desc": "Componentes limpios y duraderos. Sin patrones oscuros, sin telemetría invasiva y sin dependencia cautiva."
    },
    "point2": {
      "title": "Soberanía antes que ataduras",
      "desc": "Debes ser el dueño de tu infraestructura, tus datos y tus herramientas. Fieles a estándares abiertos y contenedores."
    },
    "point3": {
      "title": "Claridad antes que complejidad artificial",
      "desc": "Ingeniería pragmática. Docker Swarm en lugar del laberinto de Kubernetes. Configuraciones legibles en cinco minutos."
    }
  },
  "ecosystem": {
    "badge": "03 — What we're making",
    "title": "A collection of focused things. One Upstand point of view.",
    "description": "Open source tools, creative platforms, and developer infrastructure built with care.",
    "visitSite": "Visit Project",
    "projects": [
      {
        "id": "upstand-paas",
        "number": "01",
        "name": "Upstand PaaS",
        "tagline": "Self-hostable container platform on Docker Swarm & Caddy",
        "description": "Multi-node clustering, dynamic reverse proxying, persistent databases, and AI-assisted cluster operations with zero vendor lock-in.",
        "category": "Infrastructure",
        "url": "https://upstand.dev",
        "status": "Active Production",
        "isFlagship": true
      },
      {
        "id": "openrive",
        "number": "02",
        "name": "OpenRive",
        "tagline": "Open runtime and toolchain for interactive vector animations",
        "description": "High-performance vector animation engine and format converter. Run dynamic interactive motion across web and native targets.",
        "category": "Creative Tools",
        "url": "https://openrive.com",
        "status": "Public Beta"
      },
      {
        "id": "adsparty",
        "number": "03",
        "name": "AdsParty",
        "tagline": "Privacy-preserving advertising and sponsorship exchange",
        "description": "Direct, contextual advertising exchange without behavioral tracking, third-party cookies, or invasive user profiling.",
        "category": "Web Protocol",
        "url": "https://adsparty.com",
        "status": "Active"
      },
      {
        "id": "tongo",
        "number": "04",
        "name": "Tongo",
        "tagline": "Real-time collaborative canvas for product teams",
        "description": "Infinite multiplayer canvas for visual planning, system diagrams, and architectural brainstorming with local-first sync.",
        "category": "Productivity",
        "url": "https://tongo.app",
        "status": "Early Access"
      },
      {
        "id": "dgrunner",
        "number": "05",
        "name": "dgrunner",
        "tagline": "Lightweight ephemeral CI runner for microVMs",
        "description": "Secure, self-hosted build runners that spin up isolated microVM sandboxes in under 200ms and tear down cleanly.",
        "category": "Developer Tooling",
        "url": "https://dgrunner.dev",
        "status": "Open Source"
      },
      {
        "id": "lettersbox",
        "number": "06",
        "name": "lettersbox",
        "tagline": "Zero-tracking newsletter and reader infrastructure",
        "description": "Publishing and subscriber platform with cryptographic proof of delivery, plain markdown authoring, and no spy pixels.",
        "category": "Publishing",
        "url": "https://lettersbox.io",
        "status": "Active"
      }
    ]
  },
  "capabilities": {
    "badge": "04 — Platform capabilities",
    "title": "Everything needed to ship and run containerized workloads.",
    "description": "Engineered on battle-tested Linux foundations: Docker Swarm, Caddy, WireGuard, and PostgreSQL.",
    "categories": [
      {
        "id": "deploy",
        "title": "Deploy & Release",
        "items": [
          {
            "name": "Compose & Multi-service",
            "desc": "Deploy multi-container stacks directly from standard Docker Compose files."
          },
          {
            "name": "Git Push to Deploy",
            "desc": "Trigger builds on git commits with automated webhook notifications."
          },
          {
            "name": "Instant Rollbacks",
            "desc": "Roll back to any previous deployment state with zero downtime."
          },
          {
            "name": "Build Packs & Dockerfile",
            "desc": "Build using standard Dockerfile with BuildKit secrets or automatic Nixpacks detection."
          }
        ]
      },
      {
        "id": "orchestrate",
        "title": "Cluster & Orchestration",
        "items": [
          {
            "name": "Docker Swarm Clustering",
            "desc": "Native Raft consensus clustering built right into the Docker engine without etcd overhead."
          },
          {
            "name": "Multi-Server Fan-Out",
            "desc": "Schedule application replicas across multiple manager and worker servers in different regions."
          },
          {
            "name": "Zero-Downtime Rolling Updates",
            "desc": "Gradually roll out new image versions with configurable parallelism and failure rollbacks."
          },
          {
            "name": "Health Checks & Auto-Healing",
            "desc": "Restart failed tasks and reassign workloads automatically when a node goes offline."
          }
        ]
      },
      {
        "id": "route",
        "title": "Dynamic Edge & Routing",
        "items": [
          {
            "name": "Atomic Caddy Reverse Proxy",
            "desc": "Zero-downtime routing reloads verified in-process before applying changes."
          },
          {
            "name": "Automated Let's Encrypt TLS",
            "desc": "Free wildcard and sub-domain SSL certificates issued and renewed automatically."
          },
          {
            "name": "Encrypted Overlay Mesh",
            "desc": "Internal inter-service networking isolated with VXLAN and optional IPsec encryption."
          },
          {
            "name": "Path & Subdomain Routing",
            "desc": "Route multiple applications and microservices behind single domain endpoints."
          }
        ]
      },
      {
        "id": "storage",
        "title": "Persistent Storage",
        "items": [
          {
            "name": "One-Click Databases",
            "desc": "Dedicated PostgreSQL 18, MySQL, Redis, MongoDB, and ClickHouse templates."
          },
          {
            "name": "Persistent Docker Volumes",
            "desc": "Mount host and distributed volume drivers with persistent data guarantees."
          },
          {
            "name": "Automated S3 Backups",
            "desc": "Scheduled database dumps directly to AWS S3, Cloudflare R2, MinIO, or Backblaze."
          },
          {
            "name": "Safe Migration Tools",
            "desc": "Import and restore database dumps with transactional integrity checks."
          }
        ]
      },
      {
        "id": "operate",
        "title": "Operations & UpGal",
        "items": [
          {
            "name": "Agentless SSH Provisioning",
            "desc": "Connect any Linux server via SSH keys without installing third-party daemon agents."
          },
          {
            "name": "UpGal Operations Assistant",
            "desc": "Bounded Model Context Protocol (MCP) agent for diagnosing logs and service health."
          },
          {
            "name": "Centralized Live Logs",
            "desc": "Stream real-time stdout and stderr logs across all cluster nodes and containers."
          },
          {
            "name": "CLI & REST API",
            "desc": "Automate cluster management and deployments through scriptable CLI commands and API tokens."
          }
        ]
      },
      {
        "id": "security",
        "title": "Security & Governance",
        "items": [
          {
            "name": "Corporate SSO & SCIM 2.0",
            "desc": "Authenticate with Google, GitHub, Okta, or generic SAML/OIDC identity providers."
          },
          {
            "name": "Role-Based Access Control",
            "desc": "Manage owner, admin, and member permissions with scoped resource boundaries."
          },
          {
            "name": "Scoped API Tokens",
            "desc": "Generate granular deployment tokens with specific project read and write permissions."
          },
          {
            "name": "Immutable Audit Logs",
            "desc": "Track every deployment, rollback, node join, and configuration change."
          }
        ]
      }
    ]
  },
  "architecture": {
    "badge": "05 — Architecture",
    "title": "Engineered for operational durability.",
    "description": "A layered topology ensuring control plane isolation, encrypted mesh communication, and zero-downtime edge routing.",
    "details": {
      "step1Title": "Client & Ingress Layer",
      "step1Desc": "Requests arrive via HTTPS to the edge proxy, while developers connect via the web console, CLI, or UpGal MCP interface.",
      "step2Title": "Control Plane & Database",
      "step2Desc": "The Hono and tRPC API coordinates state in PostgreSQL 18, utilizing BullMQ queues for asynchronous worker execution.",
      "step3Title": "Docker Swarm Service Mesh",
      "step3Desc": "Manager nodes maintain Raft consensus and schedule container tasks across isolated overlay networks with health monitors.",
      "step4Title": "Atomic Caddy Reverse Proxy",
      "step4Desc": "Caddy validates routing configurations via dry-run before applying hot updates, guaranteeing zero dropped connections."
    }
  },
  "composeTranslator": {
    "badge": "06 — Compose to Swarm",
    "title": "Standard Docker Compose in. Production Swarm Stack out.",
    "description": "Upstand translates standard Compose files into resilient multi-node Swarm definitions with health checks and rolling update policies.",
    "composeTab": "docker-compose.yml (Dev)",
    "swarmTab": "swarm-stack.yml (Production)",
    "featuresList": [
      "Automatic replica scaling and placement constraints",
      "Rolling update configurations with configurable parallelism",
      "Automatic restart policies on worker node failure",
      "Zero manual Kubernetes YAML manifests required"
    ]
  },
  "partners": {
    "badge": "07 — In good company",
    "title": "Partners, collaborators, and friends of the studio.",
    "description": "We build with teams who hold the same conviction for craft, performance, and independent software.",
    "quote": "Good tools are built with good people. We're proud to collaborate with organizations pushing the web forward.",
    "visitPartner": "Visit Website",
    "items": [
      {
        "number": "01",
        "name": "Apex Team",
        "role": "Strategic Engineering & Infrastructure Partner",
        "description": "High-performance systems engineering team collaborating on distributed systems reliability, edge networking, and container runtimes.",
        "url": "https://apexteam.io"
      },
      {
        "number": "02",
        "name": "Mansora",
        "role": "Design, Product Strategy & Digital Architecture",
        "description": "Product design consultancy focused on digital craft, human-centered developer interfaces, and typography-first web architecture.",
        "url": "https://mansora.com"
      }
    ]
  },
  "comparison": {
    "badge": "08 — Technical comparison",
    "title": "Where Upstand is genuinely different.",
    "description": "A factual comparison of architecture, orchestration models, and resource footprints.",
    "colFeature": "Capability",
    "colUpstand": "Upstand",
    "colCoolify": "Coolify",
    "colPortainer": "Portainer",
    "colDokploy": "Dokploy",
    "colKubernetes": "Kubernetes",
    "rows": [
      {
        "feature": "Orchestration Engine",
        "upstand": "Docker Swarm (Native)",
        "coolify": "Single Docker / Swarm partial",
        "portainer": "Docker / K8s agent",
        "dokploy": "Single Docker / Traefik",
        "kubernetes": "Kubelet / control plane",
        "highlight": true
      },
      {
        "feature": "Multi-Node Clustering",
        "upstand": "Built-in (Raft consensus)",
        "coolify": "Experimental / Single host",
        "portainer": "Requires agent per node",
        "dokploy": "Single node primarily",
        "kubernetes": "Built-in (High complexity)",
        "highlight": true
      },
      {
        "feature": "Reverse Proxy Architecture",
        "upstand": "Atomic Caddy (0ms hot reload)",
        "coolify": "Traefik",
        "portainer": "Edge agent / manual",
        "dokploy": "Traefik",
        "kubernetes": "Ingress-NGINX / Envoy"
      },
      {
        "feature": "Server Overhead Footprint",
        "upstand": "~180MB RAM",
        "coolify": "~500MB RAM",
        "portainer": "~150MB RAM",
        "dokploy": "~350MB RAM",
        "kubernetes": ">2GB RAM control plane",
        "highlight": true
      },
      {
        "feature": "Remote Node Management",
        "upstand": "Agentless over SSH",
        "coolify": "SSH execution",
        "portainer": "Proprietary agent daemon",
        "dokploy": "SSH execution",
        "kubernetes": "Kubelet agent per node"
      },
      {
        "feature": "AI Operational Assistant",
        "upstand": "UpGal (MCP Bounded ToolLoop)",
        "coolify": "None",
        "portainer": "None",
        "dokploy": "None",
        "kubernetes": "Third-party add-ons"
      },
      {
        "feature": "Open Source License",
        "upstand": "Apache 2.0 (100% Free)",
        "coolify": "Apache 2.0",
        "portainer": "Open Source / Business tiers",
        "dokploy": "Apache 2.0",
        "kubernetes": "Apache 2.0"
      }
    ]
  },
  "faq": {
    "badge": "09 — FAQ",
    "title": "Frequently asked questions.",
    "description": "Clear answers to technical and operational questions about Upstand.",
    "items": [
      {
        "question": "Why Docker Swarm instead of Kubernetes?",
        "answer": "Docker Swarm is built directly into Docker Engine. It provides native multi-node clustering, Raft consensus, and encrypted overlay networks with less than 200MB of overhead, eliminating the 2GB+ footprint and complex manifest sprawl of Kubernetes."
      },
      {
        "question": "How does Upstand achieve zero-downtime Caddy reloads?",
        "answer": "Upstand compiles Caddyfile configurations and dry-run validates them in-process before issuing an administrative JSON API reload. If validation fails, the existing configuration remains active, ensuring zero dropped client connections."
      },
      {
        "question": "Can I connect servers from different cloud providers?",
        "answer": "Yes. Upstand uses agentless SSH to initialize nodes into an encrypted WireGuard or Swarm overlay mesh. You can combine bare-metal Hetzner servers with DigitalOcean VPS and AWS EC2 instances into a single unified cluster."
      },
      {
        "question": "Is Upstand free for commercial use?",
        "answer": "Yes. Upstand is 100% open source under the Apache 2.0 license. You can self-host it in production on unlimited servers with unlimited containers without paying license fees."
      },
      {
        "question": "How does database persistence work across nodes?",
        "answer": "Databases use Docker volume bindings pegged to specific nodes via Swarm placement constraints, combined with automated S3 snapshot backups to ensure data integrity."
      },
      {
        "question": "Can I migrate from Coolify, Dokploy, or manual Docker Compose?",
        "answer": "Yes. Upstand natively accepts standard Docker Compose syntax and translates it into production Swarm stacks. You can import existing compose files in one click."
      }
    ]
  },
  "contact": {
    "badge": "10 — Bring us an idea",
    "title": "Start a conversation with our engineering team.",
    "description": "Whether you are planning a cluster migration, building an ecosystem integration, or looking to collaborate on software, we'd like to hear from you.",
    "namePlaceholder": "Your name",
    "emailPlaceholder": "name@company.com",
    "ideaPlaceholder": "Tell us about your infrastructure or project...",
    "budgetLabel": "Estimated scope",
    "submitButton": "Send Inquiry",
    "submitting": "Sending...",
    "successMessage": "Thank you. We have received your inquiry and will be in touch shortly.",
    "directEmailNotice": "You can also reach us directly at"
  },
  "cta": {
    "tag": "Open Source Pledge",
    "title": "Yours to run, fork, and ship.",
    "description": "Deploy Upstand on your own infrastructure today. Free, open source, and self-reliant forever under Apache 2.0.",
    "installNow": "Run Installer",
    "readDocs": "Read Documentation",
    "licenseNotice": "Apache License 2.0 · No telemetry tracking · 100% self-hostable"
  },
  "footer": {
    "description": "An independent product studio and container orchestration platform. We make things worth using.",
    "headings": {
      "platform": "Platform",
      "studio": "Studio",
      "resources": "Resources",
      "legal": "Legal"
    },
    "links": {
      "models": "Deployment Models",
      "capabilities": "Capabilities",
      "architecture": "Architecture",
      "manifesto": "Studio Manifesto",
      "ecosystem": "Ecosystem Works",
      "partners": "Partners",
      "docs": "Documentation",
      "github": "GitHub Repository",
      "license": "Apache 2.0 License",
      "privacy": "Privacy Policy"
    },
    "rights": "Upstand Platform. All rights reserved."
  }
};
