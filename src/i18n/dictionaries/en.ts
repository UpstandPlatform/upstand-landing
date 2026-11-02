import { Dictionary } from "../types";

export const en: Dictionary = {
  seo: {
    title: "Upstand | The Container-First Self-Hostable PaaS Control Plane",
    description:
      "Orchestrate Docker Swarm nodes, deploy applications & databases, configure zero-downtime dynamic Caddy routing, and run AI-assisted operations with Upstand.",
    keywords: [
      "Docker Swarm PaaS",
      "self-hosted PaaS",
      "container control plane",
      "Upstand",
      "Caddy dynamic reverse proxy",
      "UpGal AI assistant",
      "PostgreSQL management",
      "libSQL hosting",
      "Docker Swarm clustering",
      "developer platform self-hosted",
    ],
    ogTitle: "Upstand — Modern Self-Hostable Container Control Plane",
    ogDescription:
      "Deploy apps, databases, and Docker Swarm clusters with atomic Caddy reloads, durable build queues, and an autonomous AI operations assistant.",
  },
  nav: {
    features: "Features",
    architecture: "Architecture",
    databases: "Databases",
    upgal: "UpGal AI",
    compare: "Comparison",
    calculator: "TCO Calculator",
    faq: "FAQ",
    docs: "Documentation",
    github: "GitHub",
    getStarted: "Install Upstand",
    language: "Language",
    theme: "Theme",
  },
  hero: {
    badge: "Open Source PaaS Control Plane v0.14",
    titleStart: "Deploy & Orchestrate",
    titleHighlight: "Docker Swarm Workloads",
    titleEnd: "with Total Operational Clarity",
    description:
      "A developer-first, self-hostable control plane that transforms bare-metal or cloud servers into resilient Docker Swarm clusters. Deploy apps from Git, provision persistent databases, reload Caddy with zero downtime, and manage infrastructure with the UpGal AI copilot.",
    quickInstall: "Quick Install",
    copied: "Copied to clipboard!",
    copyCommand: "Copy command",
    exploreDocs: "Explore Docs",
    viewGithub: "View on GitHub",
    starsBadge: "2.4k+ Stars",
    tabInstall: "Quick Install (Bash)",
    tabCompose: "docker-compose.yml",
    tabSwarm: "Swarm Service",
    tabUpGal: "UpGal AI Agent",
    statusHealthy: "All 12 Swarm Nodes Healthy",
    statusReady: "Ready for Zero-Downtime Deploy",
  },
  stats: {
    uptimeValue: "99.99%",
    uptimeLabel: "Orchestrated Swarm Availability",
    speedValue: "10x",
    speedLabel: "Faster Deployments vs Manual SSH",
    caddyValue: "0 ms",
    caddyLabel: "Downtime on Atomic Caddy Reloads",
    sovereigntyValue: "100%",
    sovereigntyLabel: "Data Sovereignty & Self-Hosted",
  },
  features: {
    badge: "Core Capabilities",
    title: "Everything your team needs to run containers in production",
    description:
      "Eliminate fragmented scripts, manual reverse-proxy updates, and brittle deployment pipelines. Upstand unites multi-node orchestration, database engines, and AI ops in one cohesive console.",
    items: {
      swarm: {
        title: "Docker Swarm Multi-Node Clustering",
        desc: "Seamlessly connect manager and worker nodes over encrypted overlay networks. Rotate join tokens, drain nodes for maintenance, and ensure Raft quorum with zero split-brain risk.",
        tag: "Cluster Management",
      },
      databases: {
        title: "Native Persistent Database Engines",
        desc: "One-click provisioning for PostgreSQL 18, MySQL, MariaDB, MongoDB, Redis, and libSQL (sqld) with persistent volumes, auto-generated secure credentials, and scheduled S3 backups via rclone.",
        tag: "Stateful Storage",
      },
      caddy: {
        title: "Atomic Caddy Reverse Proxy & TLS",
        desc: "Every routing update is dry-run validated inside the container before dynamic compilation. Automatic Let's Encrypt certificates, forward-auth, basic-auth, and strict HSTS.",
        tag: "Edge Routing",
      },
      upgal: {
        title: "UpGal Autonomous AI Copilot",
        desc: "A bounded 12-step ToolLoopAgent with explicit human-in-the-loop approvals for mutating actions. Inspect cluster diagnostics, scale services, and query state using Model Context Protocol (MCP).",
        tag: "AI Operations",
      },
      remoteServers: {
        title: "Zero-Agent SSH Remote Provisioning",
        desc: "Attach any remote Linux server via SSH keys. Upstand installs Docker Engine, initializes Swarm, provisions edge proxy, and runs independent worker queues without agent bloat.",
        tag: "Infrastructure",
      },
      security: {
        title: "Enterprise SSO, SCIM 2.0 & RBAC",
        desc: "Support for SAML 2.0, OIDC, SCIM 2.0 user directory provisioning, DNS TXT ownership challenges, Web SSH terminal restricted to global owners, and scoped API tokens (upk_...).",
        tag: "Enterprise Grade",
      },
    },
  },
  architecture: {
    badge: "System Architecture",
    title: "Engineered for durability, security, and isolation",
    description:
      "Upstand separates the control plane from target workloads. The dashboard talks to the Hono/tRPC server, deployment queues process isolated builds via BullMQ, and Caddy dynamically routes traffic without interrupting live sockets.",
    clientLayer: "Client / Browser & MCP Agents",
    controlPlaneLayer: "Upstand Control Plane (Hono, tRPC, PostgreSQL, Redis)",
    workerNodesLayer: "Docker Swarm Cluster & Remote Node Queues",
    caddyEdgeLayer: "Caddy Dynamic Reverse Proxy with Atomic Rollback",
    details: {
      step1Title: "1. Declarative Workload Intent",
      step1Desc: "Developers push Git code or trigger Compose deploy via Web UI, CLI, or UpGal AI.",
      step2Title: "2. Queue Serialization & BuildKit",
      step2Desc: "Worker queues (`deployments-queue-<nodeId>`) serialize builds using Dockerfile, Railpack, or Nixpacks.",
      step3Title: "3. Rolling Swarm Update",
      step3Desc: "Docker Swarm rolls out new container replicas with health checks and rollback thresholds.",
      step4Title: "4. Atomic Caddy Config Reload",
      step4Desc: "Caddy validates syntax in-memory and reloads routing tables with zero dropped TCP connections.",
    },
  },
  composeTranslator: {
    badge: "Smart Stack Engine",
    title: "Standard Docker Compose to High-Availability Swarm Stacks",
    description:
      "Paste any regular docker-compose.yml file. Upstand automatically converts standard ports, networks, and restart policies into swarm-compatible deploy replicas, rollback policies, and isolated overlay networks.",
    composeTab: "Standard docker-compose.yml",
    swarmTab: "Upstand Swarm Stack Translation",
    featuresList: [
      "Automatic collision-safe volume and network prefixing",
      "Converts restart: always into deploy.restart_policy with exponential backoff",
      "Injects rolling update parallelism and failure delay parameters",
      "Preserves secrets and environment variable bindings securely",
    ],
  },
  comparison: {
    badge: "Honest Comparison",
    title: "How Upstand compares to other PaaS & container tools",
    description:
      "Upstand was built specifically for teams who want Docker Swarm multi-node high availability without Kubernetes complexity or single-server PaaS fragility.",
    colFeature: "Capability",
    colUpstand: "Upstand",
    colCoolify: "Coolify",
    colPortainer: "Portainer",
    colDokploy: "Dokploy",
    colKubernetes: "Kubernetes (k8s)",
    rows: [
      {
        feature: "Multi-Node Swarm Clustering",
        upstand: "Native Multi-Node + Raft",
        coolify: "Single Server / SSH Remote",
        portainer: "Supported (Complex UI)",
        dokploy: "Single Server Swarm",
        kubernetes: "Native (High Overhead)",
        highlight: true,
      },
      {
        feature: "Dynamic Reverse Proxy",
        upstand: "Atomic Caddy (Dry-run verified)",
        coolify: "Traefik",
        portainer: "Manual / Nginx",
        dokploy: "Traefik",
        kubernetes: "Ingress Controller",
      },
      {
        feature: "AI Operations Copilot",
        upstand: "UpGal with Human Approval & MCP",
        coolify: "No Native AI",
        portainer: "No Native AI",
        dokploy: "No Native AI",
        kubernetes: "External Plugins",
        highlight: true,
      },
      {
        feature: "libSQL & Modern DBs",
        upstand: "Postgres 18, MySQL, Mongo, libSQL",
        coolify: "Standard DBs",
        portainer: "Manual Templates",
        dokploy: "Standard DBs",
        kubernetes: "Operators Required",
      },
      {
        feature: "Enterprise SSO & SCIM 2.0",
        upstand: "OIDC, SAML 2.0 & SCIM Built-in",
        coolify: "Basic Auth / SSO in Cloud",
        portainer: "Paid Business Edition",
        dokploy: "Basic Auth Only",
        kubernetes: "RBAC + Dex / Keycloak",
        highlight: true,
      },
      {
        feature: "Resource Footprint",
        upstand: "Lightweight (~400MB RAM)",
        coolify: "Moderate (~1GB RAM)",
        portainer: "Lightweight (~250MB RAM)",
        dokploy: "Moderate (~800MB RAM)",
        kubernetes: "Heavy (2GB+ per node)",
      },
    ],
  },
  calculator: {
    badge: "Cost Savings",
    title: "Calculate your self-hosted cloud savings",
    description:
      "Cloud PaaS services charge hefty markups on compute, egress, and managed databases. See what you save by running Upstand on your own infrastructure.",
    nodesLabel: "Server Nodes",
    appsLabel: "Active Applications",
    dbsLabel: "Database Instances",
    estimatedCloudCost: "Estimated AWS / Managed PaaS Cost",
    upstandCost: "Estimated Upstand Bare-Metal Cost",
    savingsPerYear: "Annual Savings",
    savingsNote:
      "Estimates based on comparable 4 vCPU / 16GB RAM cloud virtual machines vs Hetzner/OVH dedicated hardware and managed database fees.",
  },
  testimonials: {
    badge: "Community Proof",
    title: "Trusted by operators who value control and simplicity",
    description:
      "Hear from engineering leads and sysadmins running container workloads in production.",
    items: [
      {
        quote:
          "Upstand gave us the resilience of Docker Swarm clustering without having to hire a Kubernetes engineer. The atomic Caddy reloads completely eliminated our deployment 502 blips.",
        author: "Alexandre Moreau",
        role: "Lead DevOps Architect",
        company: "Vektor Labs",
      },
      {
        quote:
          "UpGal AI is the first developer copilot that actually respects safety boundaries. The explicit approval card in the UI prevents any accidental destructive changes to production databases.",
        author: "Sarah Chen",
        role: "Head of Infrastructure",
        company: "Nexus Fintech",
      },
      {
        quote:
          "We migrated 45 services from Heroku and AWS ECS to Upstand on three Hetzner dedicated servers. Our monthly cloud bill dropped from $3,400 to $220 with zero downtime.",
        author: "Dmitry Vasiliev",
        role: "Platform Engineer",
        company: "HyperScale Media",
      },
    ],
  },
  faq: {
    badge: "Frequently Asked Questions",
    title: "Everything you need to know about Upstand",
    description:
      "Technical answers to common questions about deployment, architecture, clustering, and security.",
    items: [
      {
        question: "What is Upstand and how is it different from Coolify or Portainer?",
        answer:
          "Upstand is a container-first, self-hostable control plane designed natively for Docker Swarm multi-node clusters. Unlike single-node PaaS tools, Upstand orchestrates high-availability manager and worker nodes, uses atomic Caddy proxy configuration with dry-run verification, includes an autonomous AI agent with human approval loops, and natively provisions modern databases like libSQL alongside PostgreSQL and Redis.",
        category: "Overview",
      },
      {
        question: "What are the minimum system requirements to install Upstand?",
        answer:
          "The recommended production minimum is 2 vCPU cores, 4 GB of RAM, and 30 GB of free disk storage. For evaluation and testing, you can pass UPSTAND_ALLOW_UNDERSIZED_HOST=true on hosts with as little as 1 vCPU and 2 GB RAM.",
        category: "Installation",
      },
      {
        question: "How does Upstand prevent downtime during Caddy reverse proxy reloads?",
        answer:
          "Before applying any routing change, Upstand dry-runs and syntax-checks the compiled Caddyfile inside an isolated container test. If validation succeeds, Caddy performs an in-process atomic reload without terminating existing TLS sessions or dropping in-flight HTTP connections. If validation fails, Upstand preserves the last known-good configuration and alerts the operator.",
        category: "Routing & Edge",
      },
      {
        question: "Can I bring my own remote Docker servers via SSH?",
        answer:
          "Yes! Upstand features agentless remote server provisioning. You simply provide the host's IP address and an SSH private key. Upstand automatically prepares the host, installs Docker Engine if missing, connects it to the Swarm network, and handles remote build queues safely over encrypted tunnels.",
        category: "Clustering",
      },
      {
        question: "How does the UpGal AI assistant handle sensitive infrastructure operations?",
        answer:
          "UpGal operates on a bounded 12-step execution loop with strict role-based authorization. When an action involves mutating operations—such as stopping a container, deleting a volume, or rolling back a database—UpGal pauses execution and surfaces an interactive confirmation card on your dashboard. Nothing changes until an authenticated operator explicitly approves.",
        category: "AI & Security",
      },
      {
        question: "Is Upstand free and open source?",
        answer:
          "Yes, Upstand is open source and completely free to self-host on your own infrastructure. You have 100% control over your data, credentials, and servers with no license keys or telemetry phone-homes.",
        category: "Licensing",
      },
    ],
  },
  cta: {
    badge: "Get Started in Seconds",
    title: "Take total control of your container cloud today",
    description:
      "Run the single-line production installer on any clean Ubuntu/Debian server and have a complete Swarm PaaS running in under 2 minutes.",
    installNow: "Run Installer",
    readDocs: "Read Documentation",
    prerequisites: "Prerequisites: Ubuntu 22.04+, Debian 12+, or Alpine Linux with root access.",
  },
  footer: {
    tagline: "The Modern Container-First Control Plane",
    description:
      "Self-hosted PaaS for Docker Swarm, automated multi-node clustering, dynamic Caddy edge routing, and AI-driven operations.",
    headings: {
      product: "Product",
      resources: "Resources",
      community: "Community",
      compliance: "Enterprise",
    },
    links: {
      docs: "Documentation",
      releases: "Release Notes",
      swarmGuide: "Swarm Clustering Guide",
      mcpProtocol: "UpGal MCP Protocol",
      github: "GitHub Repository",
      discord: "Discord Community",
      securityPolicy: "Security & 2FA",
      architecture: "System Architecture",
    },
    rights: "All rights reserved. Upstand Platform.",
    openSourceNotice: "Open source software licensed under Apache 2.0.",
  },
};
