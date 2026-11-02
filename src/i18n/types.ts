export interface Dictionary {
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
  };
  nav: {
    features: string;
    architecture: string;
    databases: string;
    upgal: string;
    compare: string;
    calculator: string;
    faq: string;
    docs: string;
    github: string;
    getStarted: string;
    language: string;
    theme: string;
  };
  hero: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    titleEnd: string;
    description: string;
    quickInstall: string;
    copied: string;
    copyCommand: string;
    exploreDocs: string;
    viewGithub: string;
    starsBadge: string;
    tabInstall: string;
    tabCompose: string;
    tabSwarm: string;
    tabUpGal: string;
    statusHealthy: string;
    statusReady: string;
  };
  stats: {
    uptimeValue: string;
    uptimeLabel: string;
    speedValue: string;
    speedLabel: string;
    caddyValue: string;
    caddyLabel: string;
    sovereigntyValue: string;
    sovereigntyLabel: string;
  };
  features: {
    badge: string;
    title: string;
    description: string;
    items: {
      swarm: {
        title: string;
        desc: string;
        tag: string;
      };
      databases: {
        title: string;
        desc: string;
        tag: string;
      };
      caddy: {
        title: string;
        desc: string;
        tag: string;
      };
      upgal: {
        title: string;
        desc: string;
        tag: string;
      };
      remoteServers: {
        title: string;
        desc: string;
        tag: string;
      };
      security: {
        title: string;
        desc: string;
        tag: string;
      };
    };
  };
  architecture: {
    badge: string;
    title: string;
    description: string;
    clientLayer: string;
    controlPlaneLayer: string;
    workerNodesLayer: string;
    caddyEdgeLayer: string;
    details: {
      step1Title: string;
      step1Desc: string;
      step2Title: string;
      step2Desc: string;
      step3Title: string;
      step3Desc: string;
      step4Title: string;
      step4Desc: string;
    };
  };
  composeTranslator: {
    badge: string;
    title: string;
    description: string;
    composeTab: string;
    swarmTab: string;
    featuresList: string[];
  };
  comparison: {
    badge: string;
    title: string;
    description: string;
    colFeature: string;
    colUpstand: string;
    colCoolify: string;
    colPortainer: string;
    colDokploy: string;
    colKubernetes: string;
    rows: Array<{
      feature: string;
      upstand: string;
      coolify: string;
      portainer: string;
      dokploy: string;
      kubernetes: string;
      highlight?: boolean;
    }>;
  };
  calculator: {
    badge: string;
    title: string;
    description: string;
    nodesLabel: string;
    appsLabel: string;
    dbsLabel: string;
    estimatedCloudCost: string;
    upstandCost: string;
    savingsPerYear: string;
    savingsNote: string;
  };
  testimonials: {
    badge: string;
    title: string;
    description: string;
    items: Array<{
      quote: string;
      author: string;
      role: string;
      company: string;
    }>;
  };
  faq: {
    badge: string;
    title: string;
    description: string;
    items: Array<{
      question: string;
      answer: string;
      category: string;
    }>;
  };
  cta: {
    badge: string;
    title: string;
    description: string;
    installNow: string;
    readDocs: string;
    prerequisites: string;
  };
  footer: {
    tagline: string;
    description: string;
    headings: {
      product: string;
      resources: string;
      community: string;
      compliance: string;
    };
    links: {
      docs: string;
      releases: string;
      swarmGuide: string;
      mcpProtocol: string;
      github: string;
      discord: string;
      securityPolicy: string;
      architecture: string;
    };
    rights: string;
    openSourceNotice: string;
  };
}
