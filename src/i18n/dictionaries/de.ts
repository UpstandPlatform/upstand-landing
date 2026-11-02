import { Dictionary } from "../types";

export const de: Dictionary = {
  seo: {
    title: "Upstand | Die moderne container-zentrierte Self-Hosted PaaS-Steuerungskonsole",
    description:
      "Orchestrieren Sie Docker Swarm-Knoten, stellen Sie Apps & Datenbanken bereit und verwalten Sie Caddy unterbrechungsfrei mit dem KI-Copiloten UpGal.",
    keywords: [
      "Docker Swarm PaaS",
      "Self-Hosted PaaS",
      "Container Control Plane",
      "Upstand",
      "Caddy Reverse Proxy",
      "UpGal KI Assistent",
      "PostgreSQL Verwaltung",
      "libSQL Hosting",
      "Docker Swarm Cluster",
      "Coolify Portainer Alternative",
    ],
    ogTitle: "Upstand — Moderne Open-Source Container-Steuerungskonsole",
    ogDescription:
      "Verwalten Sie Anwendungen, Datenbanken und Swarm-Cluster mit atomaren Caddy-Reloads ohne Ausfallzeit.",
  },
  nav: {
    features: "Funktionen",
    architecture: "Architektur",
    databases: "Datenbanken",
    upgal: "UpGal KI",
    compare: "Vergleich",
    calculator: "TCO-Rechner",
    faq: "FAQ",
    docs: "Dokumentation",
    github: "GitHub",
    getStarted: "Upstand installieren",
    language: "Sprache",
    theme: "Design",
  },
  hero: {
    badge: "Open-Source PaaS-Steuerung v0.14",
    titleStart: "Bereitstellung & Orchestrierung von",
    titleHighlight: "Docker Swarm Clustern",
    titleEnd: "mit vollständiger operativer Klarheit",
    description:
      "Eine moderne, selbst gehostete Plattform, die Ihre Bare-Metal- oder Cloud-Server in hochverfügbare Docker Swarm-Cluster verwandelt. Git-Deployments, persistente Datenbanken, unterbrechungsfreie Caddy-Aktualisierungen und der KI-Assistent UpGal.",
    quickInstall: "Schnellinstallation",
    copied: "Befehl in Zwischenablage kopiert!",
    copyCommand: "Befehl kopieren",
    exploreDocs: "Dokumentation lesen",
    viewGithub: "Auf GitHub ansehen",
    starsBadge: "2.4k+ Sterne",
    tabInstall: "Schnellinstallationsbefehl (Bash)",
    tabCompose: "docker-compose.yml",
    tabSwarm: "Swarm-Dienst",
    tabUpGal: "UpGal KI-Agent",
    statusHealthy: "Alle 12 Swarm-Knoten fehlerfrei",
    statusReady: "Bereit für unterbrechungsfreies Deployment",
  },
  stats: {
    uptimeValue: "99.99%",
    uptimeLabel: "Verfügbarkeit der Swarm-Orchestrierung",
    speedValue: "10x",
    speedLabel: "Schneller als manuelle SSH-Deployments",
    caddyValue: "0 ms",
    caddyLabel: "Ausfallzeit bei atomaren Caddy-Reloads",
    sovereigntyValue: "100%",
    sovereigntyLabel: "Datensouveränität & Self-Hosted",
  },
  features: {
    badge: "Kernfunktionen",
    title: "Alles, was Ihr Team für Container in der Produktion benötigt",
    description:
      "Schluss mit unübersichtlichen Skripten und fehleranfälligen Reverse-Proxy-Konfigurationen. Upstand vereint Multi-Node-Clustering, Datenbanken und KI-gestützte Abläufe in einer einheitlichen Konsole.",
    items: {
      swarm: {
        title: "Docker Swarm Multi-Node Clustering",
        desc: "Verbinden Sie Manager- und Worker-Knoten nahtlos über verschlüsselte Overlay-Netzwerke. Automatische Token-Rotation, sicheres Draining für Wartungen und Raft-Konsens ohne Split-Brain-Risiko.",
        tag: "Cluster-Verwaltung",
      },
      databases: {
        title: "Native persistente Datenbank-Engines",
        desc: "1-Klick-Bereitstellung für PostgreSQL 18, MySQL, MariaDB, MongoDB, Redis und libSQL (sqld) mit persistenten Volumes, verschlüsselten Zugangsdaten und automatischen S3-Backups via rclone.",
        tag: "Persistente Speicherung",
      },
      caddy: {
        title: "Atomarer Caddy Reverse Proxy & TLS",
        desc: "Jede Routing-Änderung wird vor der Anwendung in einem isolierten Container getestet. Automatische Let's Encrypt-Zertifikate, Forward-Auth und null Verbindungsabbrüche.",
        tag: "Edge Routing",
      },
      upgal: {
        title: "Autonomer KI-Copilot UpGal",
        desc: "Auf 12 Schritte begrenzter ToolLoopAgent mit zwingender menschlicher Bestätigung für mutierende Aktionen. Clusterdiagnose, Skalierung und Model Context Protocol (MCP).",
        tag: "KI-Operations",
      },
      remoteServers: {
        title: "Agentenloses SSH-Server-Provisioning",
        desc: "Binden Sie beliebige entfernte Linux-Server per SSH-Schlüssel an. Upstand installiert Docker, initialisiert Swarm und betreibt isolierte Build-Warteschlangen über verschlüsselte Tunnel.",
        tag: "Infrastruktur",
      },
      security: {
        title: "Enterprise SSO, SCIM 2.0 & Web-SSH",
        desc: "Unterstützung für SAML 2.0, OIDC, Verzeichnissynchronisation via SCIM 2.0, DNS TXT-Domänenverifizierung und Web-SSH-Terminal exklusiv für Hauptadministratoren.",
        tag: "Unternehmenssicherheit",
      },
    },
  },
  architecture: {
    badge: "Systemarchitektur",
    title: "Entwickelt für Ausfallsicherheit, Sicherheit und Isolation",
    description:
      "Die Steuerungskonsole ist strikt von den Zielworkloads entkoppelt. Das Dashboard kommuniziert mit dem Hono/tRPC-Server, Builds laufen in isolierten BullMQ-Warteschlangen und Caddy leitet Datenverkehr unterbrechungsfrei weiter.",
    clientLayer: "Client-Browser und MCP-KI-Agenten",
    controlPlaneLayer: "Upstand Steuerungsebene (Hono, tRPC, PostgreSQL, Redis)",
    workerNodesLayer: "Docker Swarm Cluster & Knoten-Warteschlangen",
    caddyEdgeLayer: "Caddy Dynamic Proxy mit automatischem Rollback",
    details: {
      step1Title: "1. Deklarative Spezifikation",
      step1Desc: "Entwickler übergeben Git-Code oder Compose-Definitionen über Web, CLI oder UpGal.",
      step2Title: "2. Warteschlange & BuildKit",
      step2Desc: "Lokale Knoten-Queues bauen Images isoliert mit Dockerfile, Railpack oder Nixpacks.",
      step3Title: "3. Rolling Update im Swarm",
      step3Desc: "Docker Swarm ersetzt Container schrittweise mit Health-Checks und automatischem Rollback.",
      step4Title: "4. Atomarer Caddy-Reload",
      step4Desc: "Caddy validiert Konfigurationen im Speicher und schaltet um, ohne offene TCP-Sockets zu trennen.",
    },
  },
  composeTranslator: {
    badge: "Smarte Konvertierung",
    title: "Vom Standard Docker Compose zum hochverfügbaren Swarm Stack",
    description:
      "Fügen Sie eine herkömmliche docker-compose.yml ein. Upstand konvertiert Ports, Netzwerke und Restart-Policies automatisch in Swarm-Deployments mit Repliken und Overlay-Netzen.",
    composeTab: "Klassisches docker-compose.yml",
    swarmTab: "Konvertierter Upstand Swarm Stack",
    featuresList: [
      "Automatische Präfixe zur Vermeidung von Namenskonflikten bei Volumes und Netzen",
      "Wandelt restart: always in deploy.restart_policy mit exponentiellem Backoff um",
      "Konfiguriert Parallelität für Rolling Updates und sichere Fehlertoleranzgrenzen",
      "Sichere Verschlüsselung und Injektion von Secrets und Umgebungsvariablen",
    ],
  },
  comparison: {
    badge: "Objektiver Vergleich",
    title: "Upstand im Vergleich zu anderen PaaS-Lösungen",
    description:
      "Speziell entwickelt für Teams, die Multi-Node-Hochverfügbarkeit ohne die massive Komplexität von Kubernetes suchen.",
    colFeature: "Funktion",
    colUpstand: "Upstand",
    colCoolify: "Coolify",
    colPortainer: "Portainer",
    colDokploy: "Dokploy",
    colKubernetes: "Kubernetes (K8s)",
    rows: [
      {
        feature: "Multi-Node Swarm Clustering",
        upstand: "Natives Multi-Node + Raft",
        coolify: "Einzelserver / SSH-Remote",
        portainer: "Unterstützt (Komplexe UI)",
        dokploy: "Nur Einzelserver Swarm",
        kubernetes: "Nativ (Extremer Overhead)",
        highlight: true,
      },
      {
        feature: "Dynamischer Reverse Proxy",
        upstand: "Atomarer Caddy (Vorab-Test)",
        coolify: "Traefik",
        portainer: "Manuell / Nginx",
        dokploy: "Traefik",
        kubernetes: "Ingress Controller",
      },
      {
        feature: "KI-Copilot mit Genehmigung",
        upstand: "UpGal mit Bestätigungskarten & MCP",
        coolify: "Keine native KI",
        portainer: "Keine native KI",
        dokploy: "Keine native KI",
        kubernetes: "Externe Plugins",
        highlight: true,
      },
      {
        feature: "Moderne DBs & libSQL",
        upstand: "Postgres 18, MySQL, Mongo, libSQL",
        coolify: "Klassische Datenbanken",
        portainer: "Manuelle Vorlagen",
        dokploy: "Klassische Datenbanken",
        kubernetes: "Schwere Operatoren nötig",
      },
      {
        feature: "Enterprise SSO & SCIM 2.0",
        upstand: "OIDC, SAML 2.0 & SCIM integriert",
        coolify: "Nur im Cloud-Abonnement",
        portainer: "Nur in teurer Business Edition",
        dokploy: "Nur einfacher Login",
        kubernetes: "Einrichtung via Dex/Keycloak",
        highlight: true,
      },
      {
        feature: "Arbeitsspeicherbedarf (RAM)",
        upstand: "Leichtgewichtig (~400 MB)",
        coolify: "Mittel (~1 GB)",
        portainer: "Leichtgewichtig (~250 MB)",
        dokploy: "Mittel (~800 MB)",
        kubernetes: "Sehr schwer (2+ GB pro Knoten)",
      },
    ],
  },
  calculator: {
    badge: "Kosteneinsparungen",
    title: "Berechnen Sie Ihre Ersparnis mit eigener Infrastruktur",
    description:
      "Cloud-PaaS-Dienste berechnen extreme Aufschläge für Rechenleistung und Datenbanken. Ermitteln Sie Ihr Einsparpotenzial mit Upstand.",
    nodesLabel: "Serverknoten",
    appsLabel: "Aktive Anwendungen",
    dbsLabel: "Datenbank-Instanzen",
    estimatedCloudCost: "Geschätzte monatliche Kosten bei AWS / Cloud-PaaS",
    upstandCost: "Geschätzte Kosten mit Upstand auf eigenen Servern",
    savingsPerYear: "Jährliche Ersparnis",
    savingsNote:
      "Kalkulation basierend auf vergleichbaren AWS ECS / RDS Instanzen gegenüber dedizierter Hardware bei Hetzner / OVH.",
  },
  testimonials: {
    badge: "Kundenstimmen",
    title: "Geschätzt von DevOps-Ingenieuren und Architekten",
    description:
      "Erfahren Sie, wie Teams ihre Container-Produktionsumgebungen mit Upstand betreiben.",
    items: [
      {
        quote:
          "Upstand hat uns die Ausfallsicherheit eines Swarm-Clusters gebracht, ohne dass wir einen Kubernetes-Spezialisten einstellen mussten. Die atomaren Caddy-Reloads haben 502-Fehler bei Deployments komplett beseitigt.",
        author: "Alexandre Moreau",
        role: "Lead DevOps Architect",
        company: "Vektor Labs",
      },
      {
        quote:
          "UpGal AI ist der erste Assistent, der Sicherheitsgrenzen wirklich respektiert. Die Bestätigungskarte in der Benutzeroberfläche verhindert jedes versehentliche Löschen von Produktionsdaten.",
        author: "Sarah Chen",
        role: "Head of Infrastructure",
        company: "Nexus Fintech",
      },
      {
        quote:
          "Wir haben 45 Microservices aus der Cloud auf drei dedizierte Server migriert. Unsere monatlichen Kosten sanken von 3.400 $ auf 220 $ – ohne eine Sekunde Ausfall.",
        author: "Dmitry Vasiliev",
        role: "Platform Engineer",
        company: "HyperScale Media",
      },
    ],
  },
  faq: {
    badge: "Häufig gestellte Fragen",
    title: "Alles Wissenswerte über Upstand",
    description:
      "Fundierte technische Antworten zu Installation, Architektur, Clustering und Sicherheit.",
    items: [
      {
        question: "Was ist Upstand und wie unterscheidet es sich von Coolify oder Portainer?",
        answer:
          "Upstand ist eine container-zentrierte PaaS-Steuerungskonsole, die nativ für Multi-Node-Cluster mit Docker Swarm entwickelt wurde. Anders als reine Einzelserver-Tools bietet Upstand Raft-Konsens-Clustering, Caddy-Konfigurationsprüfungen vor dem Reload, einen autonomen KI-Agenten mit Bestätigungsschleife und nativen Support für moderne Datenbanken wie libSQL und PostgreSQL 18.",
        category: "Überblick",
      },
      {
        question: "Was sind die Mindestsystemanforderungen für Upstand?",
        answer:
          "Für den Produktivbetrieb werden mindestens 2 vCPU-Kerne, 4 GB RAM und 30 GB freier Festplattenspeicher empfohlen. Für Testzwecke genügt 1 vCPU und 2 GB RAM bei Aktivierung von UPSTAND_ALLOW_UNDERSIZED_HOST=true.",
        category: "Installation",
      },
      {
        question: "Wie verhindert Upstand Ausfallzeiten bei Caddy-Reloads?",
        answer:
          "Vor jeder Änderung führt Upstand einen Syntax-Test der Caddyfile-Konfiguration in einem isolierten Testcontainer durch. Ist die Prüfung erfolgreich, aktualisiert Caddy die Routing-Tabellen im Speicher, ohne bestehende TLS-Verbindungen oder offene WebSockets zu beenden.",
        category: "Routing & Netzwerk",
      },
      {
        question: "Kann ich eigene Server per SSH einbinden?",
        answer:
          "Ja! Upstand verfügt über ein agentenloses Provisioning. Geben Sie einfach IP-Adresse und SSH-Schlüssel an. Upstand richtet den Server automatisch ein, installiert Docker und bindet den Knoten sicher an das Swarm-Netzwerk an.",
        category: "Clustering",
      },
      {
        question: "Wie schützt UpGal AI vor riskanten Infrastruktureingriffen?",
        answer:
          "UpGal arbeitet in einem 12-Schritte-Ausführungsrahmen. Sobald eine Operation potenziell destruktiv ist (z. B. Stoppen eines Dienstes oder Löschen eines Volumes), pausiert der Agent und fordert eine interaktive Bestätigung im Dashboard an.",
        category: "KI & Sicherheit",
      },
      {
        question: "Ist Upstand kostenlos und Open Source?",
        answer:
          "Ja, Upstand ist unter der Apache 2.0-Lizenz vollständig quelloffen und kostenlos selbst hostbar. Sie behalten die 100%ige Kontrolle über Daten, Schlüssel und Server.",
        category: "Lizenzierung",
      },
    ],
  },
  cta: {
    badge: "In 2 Minuten einsatzbereit",
    title: "Übernehmen Sie heute die volle Kontrolle über Ihre Container-Cloud",
    description:
      "Führen Sie den Einzeiler auf einem frischen Ubuntu- oder Debian-Server aus und starten Sie Ihr komplettes Swarm PaaS sofort.",
    installNow: "Installationsbefehl ausführen",
    readDocs: "Dokumentation lesen",
    prerequisites: "Voraussetzungen: Ubuntu 22.04+ oder Debian 12+ mit Root-Zugriff.",
  },
  footer: {
    tagline: "Die moderne container-zentrierte Steuerungskonsole",
    description:
      "Self-Hosted PaaS für Docker Swarm, automatisiertes Multi-Node Clustering, dynamisches Caddy-Routing und KI-gestützte Steuerung.",
    headings: {
      product: "Produkt",
      resources: "Ressourcen",
      community: "Community",
      compliance: "Enterprise",
    },
    links: {
      docs: "Dokumentation",
      releases: "Versionshinweise",
      swarmGuide: "Swarm Cluster Guide",
      mcpProtocol: "UpGal MCP Protokoll",
      github: "GitHub Repository",
      discord: "Discord Community",
      securityPolicy: "Sicherheit & 2FA",
      architecture: "Systemarchitektur",
    },
    rights: "Alle Rechte vorbehalten. Upstand Platform.",
    openSourceNotice: "Open-Source-Software lizenziert unter Apache 2.0.",
  },
};
