import { Dictionary } from "../types";

export const es: Dictionary = {
  seo: {
    title: "Upstand | Panel de Control PaaS Autoalojado para Docker Swarm",
    description:
      "Orqueste nodos Docker Swarm, despliegue aplicaciones y bases de datos con recargas atómicas de Caddy sin caídas y asistencia de IA con UpGal.",
    keywords: [
      "Docker Swarm PaaS",
      "PaaS autoalojado",
      "panel de control contenedores",
      "Upstand",
      "proxy inverso Caddy",
      "asistente IA UpGal",
      "gestión PostgreSQL",
      "hosting libSQL",
      "clustering Docker Swarm",
      "alternativa Coolify Portainer",
    ],
    ogTitle: "Upstand — Panel de Control Moderno para Contenedores",
    ogDescription:
      "Despliegue aplicaciones, bases de datos y clusters Docker Swarm con colas de construcción duraderas y un asistente de IA autónomo.",
  },
  nav: {
    features: "Características",
    architecture: "Arquitectura",
    databases: "Bases de datos",
    upgal: "IA UpGal",
    compare: "Comparativa",
    calculator: "Calculadora TCO",
    faq: "Preguntas Frecuentes",
    docs: "Documentación",
    github: "GitHub",
    getStarted: "Instalar Upstand",
    language: "Idioma",
    theme: "Tema",
  },
  hero: {
    badge: "Panel de Control PaaS Open Source v0.14",
    titleStart: "Despliegue y orqueste sus",
    titleHighlight: "cargas de trabajo Docker Swarm",
    titleEnd: "con total claridad operativa",
    description:
      "Una plataforma de control moderna y autoalojada que transforma sus servidores dedicados o en la nube en clusters Docker Swarm altamente resilientes. Despliegues desde Git, bases de datos persistentes, recargas atómicas de Caddy sin interrupción y el copiloto de IA UpGal.",
    quickInstall: "Instalación Rápida",
    copied: "¡Comando copiado al portapapeles!",
    copyCommand: "Copiar comando",
    exploreDocs: "Explorar Documentación",
    viewGithub: "Ver en GitHub",
    starsBadge: "2.4k+ Estrellas",
    tabInstall: "Instalación Rápida (Bash)",
    tabCompose: "docker-compose.yml",
    tabSwarm: "Servicio Swarm",
    tabUpGal: "Agente IA UpGal",
    statusHealthy: "Los 12 nodos Swarm están operativos",
    statusReady: "Listo para despliegue sin caída de tráfico",
  },
  stats: {
    uptimeValue: "99.99%",
    uptimeLabel: "Disponibilidad de orquestación Swarm",
    speedValue: "10x",
    speedLabel: "Más rápido que despliegues manuales por SSH",
    caddyValue: "0 ms",
    caddyLabel: "Interrupción en recargas atómicas de Caddy",
    sovereigntyValue: "100%",
    sovereigntyLabel: "Soberanía de datos y autoalojamiento",
  },
  features: {
    badge: "Capacidades Clave",
    title: "Todo lo que su equipo necesita para operar contenedores en producción",
    description:
      "Deje atrás scripts frágiles y configuraciones manuales de proxy. Upstand reúne orquestación multinodo, motores de bases de datos y operaciones inteligentes en una consola moderna y unificada.",
    items: {
      swarm: {
        title: "Clustering multinodo Docker Swarm",
        desc: "Conecte nodos manager y worker a través de redes overlay cifradas. Rotación segura de tokens, drenado de nodos sin riesgo de corte y consenso Raft garantizado.",
        tag: "Gestión de Cluster",
      },
      databases: {
        title: "Motores de bases de datos persistentes",
        desc: "Aprovisionamiento en 1 clic de PostgreSQL 18, MySQL, MariaDB, MongoDB, Redis y libSQL (sqld) con volúmenes persistentes, credenciales seguras y copias a S3 con rclone.",
        tag: "Almacenamiento Persistente",
      },
      caddy: {
        title: "Proxy inverso Caddy atómico y TLS auto",
        desc: "Cada cambio de enrutamiento se valida en un contenedor de prueba antes de aplicarse. Certificados Let's Encrypt automáticos, autenticación y cero desconexiones de sockets activos.",
        tag: "Enrutamiento Edge",
      },
      upgal: {
        title: "Copiloto autónomo de IA UpGal",
        desc: "Agente con límite estricto de 12 pasos y confirmación humana requerida para acciones críticas. Diagnóstico de clusters, escalado de servicios y protocolo MCP.",
        tag: "Operaciones con IA",
      },
      remoteServers: {
        title: "Aprovisionamiento remoto sin agentes por SSH",
        desc: "Vincule cualquier servidor Linux remoto mediante claves SSH. Upstand instala Docker, inicializa Swarm y opera colas de construcción en túneles seguros.",
        tag: "Infraestructura",
      },
      security: {
        title: "SSO Corporativo, SCIM 2.0 y Terminal Seguro",
        desc: "Compatibilidad con SAML 2.0, OIDC, aprovisionamiento de usuarios por SCIM 2.0, validación de dominio DNS TXT y terminal Web SSH reservado al propietario.",
        tag: "Seguridad Empresarial",
      },
    },
  },
  architecture: {
    badge: "Arquitectura del Sistema",
    title: "Diseñado para durabilidad, seguridad y aislamiento estricto",
    description:
      "El plano de control está aislado de las cargas de trabajo de los clientes. El panel se comunica con el servidor Hono/tRPC, las construcciones corren en colas BullMQ aisladas y Caddy redirige tráfico sin cortes.",
    clientLayer: "Navegador de Usuario y Agentes IA (MCP)",
    controlPlaneLayer: "Plano de Control Upstand (Hono, tRPC, PostgreSQL, Redis)",
    workerNodesLayer: "Cluster Docker Swarm y colas de tareas por nodo",
    caddyEdgeLayer: "Proxy Caddy dinámico con reversión automática",
    details: {
      step1Title: "1. Declaración de especificación",
      step1Desc: "Los desarrolladores envían código Git o archivos Compose desde la web, CLI o UpGal.",
      step2Title: "2. Serialización en cola y BuildKit",
      step2Desc: "La cola del nodo genera la imagen de forma aislada mediante Dockerfile, Railpack o Nixpacks.",
      step3Title: "3. Despliegue progresivo en Swarm",
      step3Desc: "Docker Swarm reemplaza contenedores verificando la salud del servicio y aplicando reversión si falla.",
      step4Title: "4. Recarga atómica de Caddy",
      step4Desc: "Caddy valida la sintaxis en memoria y reasigna rutas sin cerrar conexiones TCP abiertas.",
    },
  },
  composeTranslator: {
    badge: "Traductor Inteligente",
    title: "De Docker Compose convencional a Swarm Stacks de Alta Disponibilidad",
    description:
      "Pegue cualquier archivo docker-compose.yml habitual. Upstand convierte automáticamente puertos, políticas de reinicio y redes en especificaciones distribuidas de Swarm con réplicas y redes overlay.",
    composeTab: "docker-compose.yml habitual",
    swarmTab: "Swarm Stack traducido por Upstand",
    featuresList: [
      "Prevención automática de colisiones con prefijos seguros en volúmenes y redes",
      "Transforma restart: always en deploy.restart_policy con espera exponencial",
      "Configura paralelismo en actualizaciones progresivas y tolerancia a fallos",
      "Inyección segura y cifrada de variables de entorno y secretos",
    ],
  },
  comparison: {
    badge: "Comparativa Honesta",
    title: "Cómo se compara Upstand frente a otras alternativas PaaS",
    description:
      "Upstand fue diseñado para equipos que necesitan la resiliencia multinodo de Swarm sin la agobiante complejidad de Kubernetes.",
    colFeature: "Capacidad",
    colUpstand: "Upstand",
    colCoolify: "Coolify",
    colPortainer: "Portainer",
    colDokploy: "Dokploy",
    colKubernetes: "Kubernetes (K8s)",
    rows: [
      {
        feature: "Clustering Swarm multinodo",
        upstand: "Multinodo nativo + Raft",
        coolify: "Servidor único / Control SSH",
        portainer: "Soportado (Interfaz compleja)",
        dokploy: "Swarm en servidor único",
        kubernetes: "Nativo (Consumo masivo)",
        highlight: true,
      },
      {
        feature: "Proxy inverso dinámico",
        upstand: "Caddy atómico (con test previo)",
        coolify: "Traefik",
        portainer: "Manual / Nginx",
        dokploy: "Traefik",
        kubernetes: "Ingress Controller",
      },
      {
        feature: "Copiloto IA con aprobación",
        upstand: "UpGal con tarjetas de confirmación y MCP",
        coolify: "Sin IA nativa",
        portainer: "Sin IA nativa",
        dokploy: "Sin IA nativa",
        kubernetes: "Plugins externos",
        highlight: true,
      },
      {
        feature: "Bases de datos modernas y libSQL",
        upstand: "Postgres 18, MySQL, Mongo, libSQL",
        coolify: "Bases convencionales",
        portainer: "Plantillas manuales",
        dokploy: "Bases convencionales",
        kubernetes: "Requiere operadores complejos",
      },
      {
        feature: "SSO Empresarial y SCIM 2.0",
        upstand: "OIDC, SAML 2.0 y SCIM de serie",
        coolify: "Solo en versión Cloud de pago",
        portainer: "Solo en versión Business de pago",
        dokploy: "Solo login básico",
        kubernetes: "Requiere configurar Dex/Keycloak",
        highlight: true,
      },
      {
        feature: "Consumo de memoria RAM",
        upstand: "Muy ligero (~400 MB)",
        coolify: "Moderado (~1 GB)",
        portainer: "Ligero (~250 MB)",
        dokploy: "Moderado (~800 MB)",
        kubernetes: "Muy pesado (2+ GB por nodo)",
      },
    ],
  },
  calculator: {
    badge: "Ahorro de Costes",
    title: "Calcule su ahorro anual migrando a infraestructura propia",
    description:
      "Los proveedores cloud aplican enormes márgenes en computación, tráfico y bases de datos. Descubra cuánto ahorra con Upstand.",
    nodesLabel: "Nodos de servidor",
    appsLabel: "Aplicaciones activas",
    dbsLabel: "Instancias de base de datos",
    estimatedCloudCost: "Coste mensual estimado en AWS / Cloud PaaS",
    upstandCost: "Coste mensual con Upstand en servidores propios",
    savingsPerYear: "Ahorro anual estimado",
    savingsNote:
      "Cálculos basados en instancias equivalentes de AWS ECS / RDS frente a servidores dedicados en Hetzner / OVH.",
  },
  testimonials: {
    badge: "Opiniones de la Comunidad",
    title: "Recomendado por ingenieros de plataformas y DevOps",
    description:
      "Conozca la experiencia de equipos que ejecutan contenedores en producción con Upstand.",
    items: [
      {
        quote:
          "Upstand nos brindó la resiliencia del cluster Swarm sin tener que contratar a un ingeniero dedicado a Kubernetes. Las recargas atómicas de Caddy eliminaron por completo los errores 502 durante los despliegues.",
        author: "Alexandre Moreau",
        role: "Arquitecto Jefe de DevOps",
        company: "Vektor Labs",
      },
      {
        quote:
          "UpGal AI es el primer asistente que respeta de verdad los límites de seguridad. La tarjeta de confirmación en pantalla impide cualquier borrado accidental de bases de datos en producción.",
        author: "Sarah Chen",
        role: "Directora de Infraestructura",
        company: "Nexus Fintech",
      },
      {
        quote:
          "Migramos 45 microservicios de la nube a tres servidores dedicados con Upstand. Nuestra factura mensual se redujo de 3.400 $ a 220 $ sin un solo segundo de inactividad.",
        author: "Dmitry Vasiliev",
        role: "Ingeniero de Plataforma",
        company: "HyperScale Media",
      },
    ],
  },
  faq: {
    badge: "Preguntas Frecuentes",
    title: "Todo lo que necesita saber sobre Upstand",
    description:
      "Respuestas técnicas y concisas sobre instalación, arquitectura, clusters y seguridad.",
    items: [
      {
        question: "¿Qué es Upstand y en qué se diferencia de Coolify o Portainer?",
        answer:
          "Upstand es un panel de control PaaS nativo para clusters multinodo de Docker Swarm. A diferencia de las herramientas diseñadas para un único servidor, Upstand gestiona nodos manager y worker con consenso Raft, utiliza Caddy con validación sintáctica previa, incluye un copiloto de IA con aprobación humana obligatoria y soporta bases de datos modernas como libSQL además de PostgreSQL 18.",
        category: "General",
      },
      {
        question: "¿Cuáles son los requisitos mínimos de sistema?",
        answer:
          "Para entornos de producción se recomiendan como mínimo 2 núcleos vCPU, 4 GB de RAM y 30 GB de almacenamiento en disco. Para pruebas y evaluación es posible ejecutarlo con 1 vCPU y 2 GB de RAM activando UPSTAND_ALLOW_UNDERSIZED_HOST=true.",
        category: "Instalación",
      },
      {
        question: "¿Cómo evita Caddy la caída de conexiones al recargar rutas?",
        answer:
          "Antes de hacer efectivo cualquier cambio, Upstand prueba el archivo Caddyfile en un contenedor aislado. Si la prueba es satisfactoria, Caddy recarga la tabla de enrutamiento en memoria sin cerrar sockets TCP abiertos ni sesiones TLS activas.",
        category: "Enrutamiento",
      },
      {
        question: "¿Puedo conectar servidores externos mediante SSH?",
        answer:
          "Sí, perfectamente. Upstand ofrece aprovisionamiento remoto sin instalar agentes pesados. Solo necesita indicar la IP y una clave privada SSH. Upstand configura el servidor, instala Docker si falta y lo conecta al Swarm mediante túneles seguros.",
        category: "Clustering",
      },
      {
        question: "¿Cómo protege UpGal AI las acciones de infraestructura crítica?",
        answer:
          "UpGal opera en un ciclo cerrado de 12 pasos. Siempre que una acción implique modificar o eliminar recursos (detener contenedores, borrar volúmenes o restaurar bases de datos), la IA pausa su ejecución y muestra una tarjeta interactiva para que un administrador la apruebe de forma explícita.",
        category: "IA y Seguridad",
      },
      {
        question: "¿Upstand es completamente gratuito y de código abierto?",
        answer:
          "Sí, Upstand es software libre bajo licencia Apache 2.0. Puede alojarlo libremente en su propia infraestructura con control absoluto sobre sus datos y servidores.",
        category: "Licencia",
      },
    ],
  },
  cta: {
    badge: "Listo en 2 minutos",
    title: "Tome el control total de su infraestructura de contenedores",
    description:
      "Ejecute el instalador de una sola línea en cualquier servidor limpio con Ubuntu o Debian y disfrute de un PaaS completo de inmediato.",
    installNow: "Ejecutar comando de instalación",
    readDocs: "Ver documentación",
    prerequisites: "Requisitos: Ubuntu 22.04+ o Debian 12+ con privilegios de root.",
  },
  footer: {
    tagline: "El Panel de Control Moderno para Contenedores",
    description:
      "PaaS autoalojado para Docker Swarm, clustering multinodo automatizado, enrutamiento dinámico Caddy y operaciones impulsadas por IA.",
    headings: {
      product: "Producto",
      resources: "Recursos",
      community: "Comunidad",
      compliance: "Empresa",
    },
    links: {
      docs: "Documentación",
      releases: "Notas de lanzamiento",
      swarmGuide: "Guía de Swarm Clusters",
      mcpProtocol: "Protocolo UpGal MCP",
      github: "Repositorio en GitHub",
      discord: "Comunidad en Discord",
      securityPolicy: "Seguridad y 2FA",
      architecture: "Arquitectura del Sistema",
    },
    rights: "Todos los derechos reservados. Upstand Platform.",
    openSourceNotice: "Software de código abierto bajo licencia Apache 2.0.",
  },
};
