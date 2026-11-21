import { Dictionary } from "../types";

export const en: Dictionary = {
  seo: {
    title: "Upstand — Independent Software Studio & Product Company",
    description:
      "Upstand is an independent product studio building software of our own and selected projects with people who bring ideas worth making.",
    keywords: [
      "Docker Swarm PaaS",
      "self-hosted deployment platform",
      "open source PaaS",
      "Caddy reverse proxy",
      "Upstand product studio",
      "OpenRive",
      "AdsParty",
      "dgrunner",
      "dotTON",
      "lettersbox",
      "Kavero",
      "MindClone",
      "Apache 2.0 PaaS",
    ],
    ogTitle: "Upstand — Independent software, made with care",
    ogDescription:
      "An independent software studio building open-source and proprietary products, plus selected projects with people who bring us good ideas.",
  },
  nav: {
    models: "Deployment",
    manifesto: "Studio",
    ecosystem: "Selected work",
    capabilities: "Capabilities",
    architecture: "Architecture",
    compose: "Compose Translator",
    compare: "Compare",
    partners: "Partners",
    faq: "FAQ",
    contact: "Contact",
    docs: "Docs",
    github: "GitHub",
    getStarted: "Bring us an idea",
    language: "Language",
  },
  hero: {
    tag: "Independent software studio",
    title: "We build software worth keeping.",
    subtitle:
      "Upstand is an independent team of product builders and software engineers. We make our own products, open source and proprietary, and take on select projects from people with ideas worth building. If we see a strong fit, we’ll get in touch.",
    quickInstall: "Copy Install Command",
    copied: "Copied to clipboard",
    exploreDocs: "Documentation",
    viewGithub: "View on GitHub",
    installCommand: "curl -fsSL https://upstand.dev/install.sh | bash",
    clusterPreview: {
      title: "upstand-cluster-01",
      status: "Raft Quorum 3/3",
      managers: "3 Managers Active",
      workers: "6 Workers Connected",
      services: "24 Replicas Running",
      routes: "Caddy Auto-TLS (Let's Encrypt)",
    },
  },
  deploymentModels: {
    tag: "01 — Three deployment shapes",
    title: "Cloud, self-hosted, or both.",
    description:
      "Same platform, three deployment shapes — and you can switch any day.",
    models: [
      {
        id: "cloud",
        number: "01",
        tag: "Managed",
        title: "Upstand Cloud",
        lead: "Deploy web applications and containers from your repository. Managed control plane, automated backups, and unified logs.",
        points: [
          "Managed builds and application runtimes",
          "Automated HTTPS domains with zero configuration",
          "Centralized audit logs and team access control",
          "Hosted backup scheduling to S3 object storage",
        ],
        price: "Cloud Plan",
        pricenote: "Zero infrastructure maintenance",
      },
      {
        id: "self-hosted",
        number: "02",
        tag: "Self-hosted",
        title: "Your Servers",
        lead: "Run the entire platform on machines you own. Any Linux VPS (Hetzner, OVH, DigitalOcean, AWS) or bare-metal hardware.",
        points: [
          "Connect any Linux host over agentless SSH",
          "Native multi-node Docker Swarm clustering",
          "No proprietary agents or daemons on your boxes",
          "Complete data sovereignty and offline capability",
        ],
        price: "Free & Open Source",
        pricenote: "Apache-2.0 — self-host with no core or node limits",
        isFeatured: true,
      },
      {
        id: "hybrid",
        number: "03",
        tag: "Hybrid",
        title: "Mix and Match",
        lead: "Cloud control plane connected to your private server infrastructure over an encrypted WireGuard mesh.",
        points: [
          "Production databases on private metal, previews on Cloud",
          "Move container workloads without rewriting configs",
          "Single dashboard and CLI for all your environments",
          "Unified team permissions and deployment history",
        ],
        price: "Cloud + Your Servers",
        pricenote: "Single subscription, unlimited self-hosted boxes",
      },
    ],
    migrateTag: "Migrate any day",
    migrateTitle: "Cloud ⇄ self-hosted. One click, any time.",
    migrateBody:
      "Your applications are standard OCI containers and your services are plain Docker images. Move workloads between Upstand Cloud and your bare-metal servers without rebuilding, rewriting, or paying an exit tax.",
  },
  manifesto: {
    badge: "02 — How we think",
    title: "We believe the internet can still feel human.",
    description:
      "Upstand is an independent product studio and holding company for focused tools, useful infrastructure, and ideas that deserve care.",
    subDescription:
      "We build what we wish existed: open source tools for developers and engineers, alongside dedicated products for the web. Our work sits between software, craft, and sovereignty.",
    point1: {
      title: "Craft over convenience",
      desc: "Clean, durable primitives engineered to last. No dark patterns, no inflated telemetry, and no lock-in.",
    },
    point2: {
      title: "Sovereignty over lock-in",
      desc: "You should own your infrastructure, your data, and your tools. Open standards and plain container runtimes.",
    },
    point3: {
      title: "Clarity over cleverness",
      desc: "Pragmatic engineering. Docker Swarm instead of Kubernetes sprawl. Straightforward configs you can read in five minutes.",
    },
  },
  ecosystem: {
    badge: "03 — What we're making",
    title: "A collection of focused things. One Upstand point of view.",
    description:
      "Open source tools, creative platforms, and developer infrastructure built with care.",
    visitSite: "Visit Project",
    projects: [
      {
        id: "upstand-paas",
        number: "01",
        name: "Upstand PaaS",
        tagline: "Self-hostable container platform on Docker Swarm & Caddy",
        description:
          "Multi-node clustering, dynamic reverse proxying, persistent databases, and AI-assisted cluster operations with zero vendor lock-in.",
        category: "Infrastructure",
        url: "https://upstand.dev",
        status: "Active Production",
        isFlagship: true,
      },
      {
        id: "openrive",
        number: "02",
        name: "OpenRive",
        tagline: "A local-first editor for Rive animations",
        description:
          "Design vector art, animate timelines, build interactive state machines, and export .riv files for official Rive runtimes. Work in the browser, desktop app, CLI, or with AI agents over MCP.",
        category: "Creative Tools",
        url: "https://openrive.upstand.dev",
        status: "Open Source",
      },
      {
        id: "adsparty",
        number: "03",
        name: "AdsParty",
        tagline: "Advertising across Telegram and the open web",
        description:
          "Plan campaigns or connect publisher inventory across Telegram Mini Apps, bots, channels, and verified websites. Publishers monetize their audiences with USDT payouts.",
        category: "Advertising Platform",
        url: "https://ads.upstand.dev",
        status: "Active",
      },
      {
        id: "dotton",
        number: "04",
        name: "dotTON",
        tagline: "Manage and monetize TON DNS domains and subdomains",
        description:
          "Connect a .ton domain, create subdomains, link them to web2 URLs, and offer paid access with subscription tools.",
        category: "TON Domains",
        url: "https://dot.tongo.run/home",
        status: "Active",
      },
      {
        id: "dgrunner",
        number: "05",
        name: "dgrunner",
        tagline: "Set up and manage self-hosted GitHub Actions runners",
        description:
          "Run on Linux, Windows, WSL, or Docker, or isolate jobs in disposable Hyper-V Linux VMs. Includes security checks, lifecycle controls, and workflow verification.",
        category: "Developer Tooling",
        url: "https://www.npmjs.com/package/@upstand/dgrunner",
        status: "Open Source",
      },
      {
        id: "lettersbox",
        number: "06",
        name: "lettersbox",
        tagline: "Share notes, letters, and voice with friends",
        description:
          "Write public or private notes, send letters and voice messages, and see who reads them. Add passwords or self-destruct timers, publish your own blog, and earn from writing.",
        category: "Writing & Messaging",
        url: "https://lettersbox.ir",
        status: "Active",
      },
      {
        id: "kavero",
        number: "07",
        name: "Kavero",
        tagline: "AI-native catalog and presentation builder",
        description:
          "Turn product data into polished catalogs with AI and MCP imports. Design slides, add motion, and publish as PDF, PowerPoint, JPG, MP4, HTML, or a website.",
        category: "AI & Creative Tools",
        url: "https://github.com/UpstandPlatform/kavero",
        status: "Open Source",
      },
      {
        id: "mindclone",
        number: "08",
        name: "MindClone",
        tagline: "An AI twin that speaks in your voice",
        description:
          "Gradually learns your voice and tone from your communications, then replies for you in text or voice messages. Automate support and other chats directly in Telegram.",
        category: "AI & Messaging",
        url: "https://t.me/MindCloneBot?startapp",
        status: "Telegram Mini App",
      },
    ],
  },
  capabilities: {
    badge: "04 — Platform capabilities",
    title: "Everything needed to ship and run containerized workloads.",
    description:
      "Engineered on battle-tested Linux foundations: Docker Swarm, Caddy, WireGuard, and PostgreSQL.",
    categories: [
      {
        id: "deploy",
        title: "Deploy & Release",
        items: [
          {
            name: "Compose & Multi-service",
            desc: "Deploy multi-container stacks directly from standard Docker Compose files.",
          },
          {
            name: "Git Push to Deploy",
            desc: "Trigger builds on git commits with automated webhook notifications.",
          },
          {
            name: "Instant Rollbacks",
            desc: "Roll back to any previous deployment state with zero downtime.",
          },
          {
            name: "Build Packs & Dockerfile",
            desc: "Build using standard Dockerfile with BuildKit secrets or automatic Nixpacks detection.",
          },
        ],
      },
      {
        id: "orchestrate",
        title: "Cluster & Orchestration",
        items: [
          {
            name: "Docker Swarm Clustering",
            desc: "Native Raft consensus clustering built right into the Docker engine without etcd overhead.",
          },
          {
            name: "Multi-Server Fan-Out",
            desc: "Schedule application replicas across multiple manager and worker servers in different regions.",
          },
          {
            name: "Zero-Downtime Rolling Updates",
            desc: "Gradually roll out new image versions with configurable parallelism and failure rollbacks.",
          },
          {
            name: "Health Checks & Auto-Healing",
            desc: "Restart failed tasks and reassign workloads automatically when a node goes offline.",
          },
        ],
      },
      {
        id: "route",
        title: "Dynamic Edge & Routing",
        items: [
          {
            name: "Atomic Caddy Reverse Proxy",
            desc: "Zero-downtime routing reloads verified in-process before applying changes.",
          },
          {
            name: "Automated Let's Encrypt TLS",
            desc: "Free wildcard and sub-domain SSL certificates issued and renewed automatically.",
          },
          {
            name: "Encrypted Overlay Mesh",
            desc: "Internal inter-service networking isolated with VXLAN and optional IPsec encryption.",
          },
          {
            name: "Path & Subdomain Routing",
            desc: "Route multiple applications and microservices behind single domain endpoints.",
          },
        ],
      },
      {
        id: "storage",
        title: "Persistent Storage",
        items: [
          {
            name: "One-Click Databases",
            desc: "Dedicated PostgreSQL 18, MySQL, Redis, MongoDB, and ClickHouse templates.",
          },
          {
            name: "Persistent Docker Volumes",
            desc: "Mount host and distributed volume drivers with persistent data guarantees.",
          },
          {
            name: "Automated S3 Backups",
            desc: "Scheduled database dumps directly to AWS S3, Cloudflare R2, MinIO, or Backblaze.",
          },
          {
            name: "Safe Migration Tools",
            desc: "Import and restore database dumps with transactional integrity checks.",
          },
        ],
      },
      {
        id: "operate",
        title: "Operations & UpGal",
        items: [
          {
            name: "Agentless SSH Provisioning",
            desc: "Connect any Linux server via SSH keys without installing third-party daemon agents.",
          },
          {
            name: "UpGal Operations Assistant",
            desc: "Bounded Model Context Protocol (MCP) agent for diagnosing logs and service health.",
          },
          {
            name: "Centralized Live Logs",
            desc: "Stream real-time stdout and stderr logs across all cluster nodes and containers.",
          },
          {
            name: "CLI & REST API",
            desc: "Automate cluster management and deployments through scriptable CLI commands and API tokens.",
          },
        ],
      },
      {
        id: "security",
        title: "Security & Governance",
        items: [
          {
            name: "Corporate SSO & SCIM 2.0",
            desc: "Authenticate with Google, GitHub, Okta, or generic SAML/OIDC identity providers.",
          },
          {
            name: "Role-Based Access Control",
            desc: "Manage owner, admin, and member permissions with scoped resource boundaries.",
          },
          {
            name: "Scoped API Tokens",
            desc: "Generate granular deployment tokens with specific project read and write permissions.",
          },
          {
            name: "Immutable Audit Logs",
            desc: "Track every deployment, rollback, node join, and configuration change.",
          },
        ],
      },
    ],
  },
  architecture: {
    badge: "05 — Architecture",
    title: "Engineered for operational durability.",
    description:
      "A layered topology ensuring control plane isolation, encrypted mesh communication, and zero-downtime edge routing.",
    details: {
      step1Title: "Client & Ingress Layer",
      step1Desc:
        "Requests arrive via HTTPS to the edge proxy, while developers connect via the web console, CLI, or UpGal MCP interface.",
      step2Title: "Control Plane & Database",
      step2Desc:
        "The Hono and tRPC API coordinates state in PostgreSQL 18, utilizing BullMQ queues for asynchronous worker execution.",
      step3Title: "Docker Swarm Service Mesh",
      step3Desc:
        "Manager nodes maintain Raft consensus and schedule container tasks across isolated overlay networks with health monitors.",
      step4Title: "Atomic Caddy Reverse Proxy",
      step4Desc:
        "Caddy validates routing configurations via dry-run before applying hot updates, guaranteeing zero dropped connections.",
    },
  },
  composeTranslator: {
    badge: "06 — Compose to Swarm",
    title: "Standard Docker Compose in. Production Swarm Stack out.",
    description:
      "Upstand translates standard Compose files into resilient multi-node Swarm definitions with health checks and rolling update policies.",
    composeTab: "docker-compose.yml (Dev)",
    swarmTab: "swarm-stack.yml (Production)",
    featuresList: [
      "Automatic replica scaling and placement constraints",
      "Rolling update configurations with configurable parallelism",
      "Automatic restart policies on worker node failure",
      "Zero manual Kubernetes YAML manifests required",
    ],
  },
  partners: {
    badge: "07 — In good company",
    title: "Partners, collaborators, and friends of the studio.",
    description:
      "We build with teams who hold the same conviction for craft, performance, and independent software.",
    quote:
      "Good tools are built with good people. We're proud to collaborate with organizations pushing the web forward.",
    visitPartner: "Visit Website",
    items: [
      {
        number: "01",
        name: "Apex Team",
        role: "Strategic Engineering & Infrastructure Partner",
        description:
          "High-performance systems engineering team collaborating on distributed systems reliability, edge networking, and container runtimes.",
        url: "https://apexteam.net",
      },
      {
        number: "02",
        name: "Mansora",
        role: "Design, Product Strategy & Digital Architecture",
        description:
          "Product design consultancy focused on digital craft, human-centered developer interfaces, and typography-first web architecture.",
        url: "https://mansora.dev",
      },
    ],
  },
  comparison: {
    badge: "08 — Technical comparison",
    title: "Where Upstand is genuinely different.",
    description:
      "A factual comparison of architecture, orchestration models, and resource footprints.",
    colFeature: "Capability",
    colUpstand: "Upstand",
    colCoolify: "Coolify",
    colPortainer: "Portainer",
    colDokploy: "Dokploy",
    colKubernetes: "Kubernetes",
    rows: [
      {
        feature: "Orchestration Engine",
        upstand: "Docker Swarm (Native)",
        coolify: "Single Docker / Swarm partial",
        portainer: "Docker / K8s agent",
        dokploy: "Single Docker / Traefik",
        kubernetes: "Kubelet / control plane",
        highlight: true,
      },
      {
        feature: "Multi-Node Clustering",
        upstand: "Built-in (Raft consensus)",
        coolify: "Experimental / Single host",
        portainer: "Requires agent per node",
        dokploy: "Single node primarily",
        kubernetes: "Built-in (High complexity)",
        highlight: true,
      },
      {
        feature: "Reverse Proxy Architecture",
        upstand: "Atomic Caddy (0ms hot reload)",
        coolify: "Traefik",
        portainer: "Edge agent / manual",
        dokploy: "Traefik",
        kubernetes: "Ingress-NGINX / Envoy",
      },
      {
        feature: "Server Overhead Footprint",
        upstand: "~180MB RAM",
        coolify: "~500MB RAM",
        portainer: "~150MB RAM",
        dokploy: "~350MB RAM",
        kubernetes: ">2GB RAM control plane",
        highlight: true,
      },
      {
        feature: "Remote Node Management",
        upstand: "Agentless over SSH",
        coolify: "SSH execution",
        portainer: "Proprietary agent daemon",
        dokploy: "SSH execution",
        kubernetes: "Kubelet agent per node",
      },
      {
        feature: "AI Operational Assistant",
        upstand: "UpGal (MCP Bounded ToolLoop)",
        coolify: "None",
        portainer: "None",
        dokploy: "None",
        kubernetes: "Third-party add-ons",
      },
      {
        feature: "Open Source License",
        upstand: "Apache 2.0 (100% Free)",
        coolify: "Apache 2.0",
        portainer: "Open Source / Business tiers",
        dokploy: "Apache 2.0",
        kubernetes: "Apache 2.0",
      },
    ],
  },
  faq: {
    badge: "09 — FAQ",
    title: "Frequently asked questions.",
    description:
      "Clear answers to technical and operational questions about Upstand.",
    items: [
      {
        question: "Why Docker Swarm instead of Kubernetes?",
        answer:
          "Docker Swarm is built directly into Docker Engine. It provides native multi-node clustering, Raft consensus, and encrypted overlay networks with less than 200MB of overhead, eliminating the 2GB+ footprint and complex manifest sprawl of Kubernetes.",
      },
      {
        question: "How does Upstand achieve zero-downtime Caddy reloads?",
        answer:
          "Upstand compiles Caddyfile configurations and dry-run validates them in-process before issuing an administrative JSON API reload. If validation fails, the existing configuration remains active, ensuring zero dropped client connections.",
      },
      {
        question: "Can I connect servers from different cloud providers?",
        answer:
          "Yes. Upstand uses agentless SSH to initialize nodes into an encrypted WireGuard or Swarm overlay mesh. You can combine bare-metal Hetzner servers with DigitalOcean VPS and AWS EC2 instances into a single unified cluster.",
      },
      {
        question: "Is Upstand free for commercial use?",
        answer:
          "Yes. Upstand is 100% open source under the Apache 2.0 license. You can self-host it in production on unlimited servers with unlimited containers without paying license fees.",
      },
      {
        question: "How does database persistence work across nodes?",
        answer:
          "Databases use Docker volume bindings pegged to specific nodes via Swarm placement constraints, combined with automated S3 snapshot backups to ensure data integrity.",
      },
      {
        question:
          "Can I migrate from Coolify, Dokploy, or manual Docker Compose?",
        answer:
          "Yes. Upstand natively accepts standard Docker Compose syntax and translates it into production Swarm stacks. You can import existing compose files in one click.",
      },
    ],
  },
  contact: {
    badge: "04 — Bring us an idea",
    title: "Have something worth building?",
    description:
      "Tell us what should exist, who it would help, and why now. We review every idea. If it fits the studio and we can commit to it, we’ll reach out.",
    namePlaceholder: "Your name",
    emailPlaceholder: "name@company.com",
    ideaPlaceholder: "Describe what you want built and the problem it solves.",
    budgetLabel: "Estimated scope",
    submitButton: "Open email draft",
    submitting: "Sending...",
    successMessage:
      "Thank you. We have received your inquiry and will be in touch shortly.",
    directEmailNotice: "You can also reach us directly at",
  },
  cta: {
    tag: "Open Source Pledge",
    title: "Yours to run, fork, and ship.",
    description:
      "Deploy Upstand on your own infrastructure today. Free, open source, and self-reliant forever under Apache 2.0.",
    installNow: "Run Installer",
    readDocs: "Read Documentation",
    licenseNotice:
      "Apache License 2.0 · No telemetry tracking · 100% self-hostable",
  },
  footer: {
    description:
      "An independent software studio making focused products and partnering on ideas worth building.",
    headings: {
      platform: "Platform",
      studio: "Studio",
      resources: "Resources",
      legal: "Legal",
    },
    links: {
      models: "Deployment Models",
      capabilities: "Capabilities",
      architecture: "Architecture",
      manifesto: "How we think",
      ecosystem: "Selected work",
      partners: "Partners",
      docs: "Documentation",
      github: "GitHub Repository",
      license: "Apache 2.0 License",
      privacy: "Privacy Policy",
    },
    rights: "Upstand Platform. All rights reserved.",
  },
};
