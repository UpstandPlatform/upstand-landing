import { Dictionary } from "@/i18n/types";
import { Locale } from "@/i18n/config";

interface StructuredDataProps {
  dict: Dictionary;
  locale: Locale;
}

export function StructuredData({ dict, locale }: StructuredDataProps) {
  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Upstand",
    operatingSystem: "Linux, macOS, Windows",
    applicationCategory: "DevOpsApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: dict.seo.description,
    softwareVersion: "0.14.0",
    license: "https://www.apache.org/licenses/LICENSE-2.0",
    url: `https://upstand.dev/${locale}`,
    author: {
      "@type": "Organization",
      name: "Upstand Platform",
      url: "https://upstand.dev",
    },
    featureList: [
      "Docker Swarm Multi-Node Orchestration",
      "Atomic Caddy Reverse Proxy with 0ms downtime",
      "Native Managed PostgreSQL 18, Redis, and libSQL",
      "UpGal AI Autonomous Copilot with Human Approval Flow",
      "Zero-Agent SSH Remote Host Provisioning",
      "Enterprise SAML 2.0, OIDC, and SCIM 2.0",
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Upstand Platform",
    url: "https://upstand.dev",
    logo: "https://upstand.dev/brand/logo.svg",
    sameAs: [
      "https://github.com/UpstandPlatform/upstand",
      "https://twitter.com/UpstandPlatform",
      "https://discord.gg/upstand",
    ],
    description:
      "Modern container-first PaaS control plane for Docker Swarm and high-availability workloads.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dict.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to deploy Upstand Docker Swarm PaaS",
    description:
      "Step-by-step guide to installing the Upstand PaaS control plane on Ubuntu or Debian Linux.",
    step: [
      {
        "@type": "HowToStep",
        name: "Connect to Linux host",
        text: "Log into your clean Ubuntu 22.04+ or Debian 12+ server via SSH as root.",
      },
      {
        "@type": "HowToStep",
        name: "Run the Upstand installer",
        text: "Execute the single-line installer: curl -fsSL https://upstand.dev/install.sh | sudo bash",
      },
      {
        "@type": "HowToStep",
        name: "Access the web console",
        text: "Open your browser to http://<server-ip>:3001 and create the Global Owner account.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
    </>
  );
}
