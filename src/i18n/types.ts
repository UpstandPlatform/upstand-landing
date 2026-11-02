export interface Dictionary {
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
  };
  nav: {
    models: string;
    manifesto: string;
    ecosystem: string;
    capabilities: string;
    architecture: string;
    compose: string;
    compare: string;
    partners: string;
    faq: string;
    contact: string;
    docs: string;
    github: string;
    getStarted: string;
    language: string;
  };
  hero: {
    tag: string;
    title: string;
    subtitle: string;
    quickInstall: string;
    copied: string;
    exploreDocs: string;
    viewGithub: string;
    installCommand: string;
    clusterPreview: {
      title: string;
      status: string;
      managers: string;
      workers: string;
      services: string;
      routes: string;
    };
  };
  deploymentModels: {
    tag: string;
    title: string;
    description: string;
    models: Array<{
      id: string;
      number: string;
      tag: string;
      title: string;
      lead: string;
      points: string[];
      price: string;
      pricenote: string;
      isFeatured?: boolean;
    }>;
    migrateTag: string;
    migrateTitle: string;
    migrateBody: string;
  };
  manifesto: {
    badge: string;
    title: string;
    description: string;
    subDescription: string;
    point1: { title: string; desc: string };
    point2: { title: string; desc: string };
    point3: { title: string; desc: string };
  };
  ecosystem: {
    badge: string;
    title: string;
    description: string;
    visitSite: string;
    projects: Array<{
      id: string;
      number: string;
      name: string;
      tagline: string;
      description: string;
      category: string;
      url: string;
      status: string;
      isFlagship?: boolean;
    }>;
  };
  capabilities: {
    badge: string;
    title: string;
    description: string;
    categories: Array<{
      id: string;
      title: string;
      items: Array<{
        name: string;
        desc: string;
      }>;
    }>;
  };
  architecture: {
    badge: string;
    title: string;
    description: string;
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
  partners: {
    badge: string;
    title: string;
    description: string;
    quote: string;
    visitPartner: string;
    items: Array<{
      number: string;
      name: string;
      role: string;
      description: string;
      url: string;
    }>;
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
  faq: {
    badge: string;
    title: string;
    description: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  contact: {
    badge: string;
    title: string;
    description: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    ideaPlaceholder: string;
    budgetLabel: string;
    submitButton: string;
    submitting: string;
    successMessage: string;
    directEmailNotice: string;
  };
  cta: {
    tag: string;
    title: string;
    description: string;
    installNow: string;
    readDocs: string;
    licenseNotice: string;
  };
  footer: {
    description: string;
    headings: {
      platform: string;
      studio: string;
      resources: string;
      legal: string;
    };
    links: {
      models: string;
      capabilities: string;
      architecture: string;
      manifesto: string;
      ecosystem: string;
      partners: string;
      docs: string;
      github: string;
      license: string;
      privacy: string;
    };
    rights: string;
  };
}
