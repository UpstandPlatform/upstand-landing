import { Dictionary } from "../types";

export const fr: Dictionary = {
  seo: {
    title:
      "Upstand — Plateforme de conteneurs Open Source et Studio Indépendant",
    description:
      "Orchestration de conteneurs auto-hébergée sur Docker Swarm et Caddy avec TLS automatique et multi-nœuds sans dépendance propriétaire. 100% open source sous Apache 2.0.",
    keywords: [
      "Docker Swarm PaaS",
      "PaaS auto-hébergé",
      "open source PaaS",
      "proxy Caddy",
      "studio Upstand",
      "Apache 2.0",
    ],
    ogTitle: "Upstand — Déployez tout. Maîtrisez tout.",
    ogDescription:
      "Plateforme d'orchestration de conteneurs auto-hébergée et studio indépendant. Exécutez sur vos propres serveurs sans verrouillage.",
  },
  nav: {
    models: "Déploiement",
    manifesto: "Manifeste",
    ecosystem: "Projets",
    capabilities: "Fonctionnalités",
    architecture: "Architecture",
    compose: "Traducteur Compose",
    compare: "Comparatif",
    partners: "Partenaires",
    faq: "FAQ",
    contact: "Contact",
    docs: "Documentation",
    github: "GitHub",
    getStarted: "Commencer",
    language: "Langue",
  },
  hero: {
    tag: "PaaS Open Source & Studio Indépendant",
    title: "Déployez tout sur votre propre infrastructure.",
    subtitle:
      "Plateforme de conteneurs auto-hébergée propulsée par Docker Swarm et Caddy. Clustering multi-serveurs, TLS automatique et bases de données persistantes sans la complexité de Kubernetes. 100% open source sous Apache 2.0.",
    quickInstall: "Copier la commande",
    copied: "Copié dans le presse-papiers",
    exploreDocs: "Documentation",
    viewGithub: "Voir sur GitHub",
    installCommand: "curl -fsSL https://upstand.dev/install.sh | bash",
    clusterPreview: {
      title: "upstand-cluster-01",
      status: "Quorum Raft 3/3",
      managers: "3 Managers Actifs",
      workers: "6 Workers Connectés",
      services: "24 Répliques en Cours",
      routes: "Caddy Auto-TLS (Let's Encrypt)",
    },
  },
  deploymentModels: {
    tag: "01 — Trois modes de déploiement",
    title: "Cloud, auto-hébergé, ou les deux.",
    description:
      "La même plateforme, trois modes d'exécution — changez à tout moment.",
    models: [
      {
        id: "cloud",
        number: "01",
        tag: "Géré",
        title: "Upstand Cloud",
        lead: "Déployez vos applications et conteneurs depuis votre dépôt Git. Plan de contrôle infogéré, sauvegardes automatiques et logs unifiés.",
        points: [
          "Runtimes d'application et builds gérés",
          "Domaines HTTPS automatiques sans configuration",
          "Journal d'audit et contrôle d'accès d'équipe",
          "Sauvegardes planifiées vers le stockage S3",
        ],
        price: "Offre Cloud",
        pricenote: "Zéro maintenance d'infrastructure",
      },
      {
        id: "self-hosted",
        number: "02",
        tag: "Auto-hébergé",
        title: "Vos Serveurs",
        lead: "Exécutez toute la plateforme sur des machines vous appartenant. Tout VPS Linux (Hetzner, OVH, Scaleway, AWS) ou serveur dédié.",
        points: [
          "Connexion SSH sans agent tiers sur vos hôtes",
          "Clustering multi-nœuds natif Docker Swarm",
          "Aucun démon propriétaire sur vos machines",
          "Souveraineté totale des données et fonctionnement hors-ligne",
        ],
        price: "Gratuit & Open Source",
        pricenote: "Apache-2.0 — sans limite de cœurs ni de nœuds",
        isFeatured: true,
      },
      {
        id: "hybrid",
        number: "03",
        tag: "Hybride",
        title: "Mix & Match",
        lead: "Plan de contrôle Cloud relié à vos serveurs privés via un réseau maillé chiffré WireGuard.",
        points: [
          "Bases de données sur vos serveurs, prévisualisations sur le Cloud",
          "Déplacement des conteneurs sans réécrire les configs",
          "Un seul tableau de bord et CLI pour tous vos environnements",
          "Gestion unifiée des droits et historique des déploiements",
        ],
        price: "Cloud + Vos serveurs",
        pricenote: "Un abonnement unique, serveurs privés illimités",
      },
    ],
    migrateTag: "Migration libre à tout moment",
    migrateTitle: "Cloud ⇄ Auto-hébergé. En un clic, sans contrainte.",
    migrateBody:
      "Vos applications sont de simples conteneurs OCI et vos services des images Docker standards. Transférez vos charges entre Upstand Cloud et vos serveurs sans recompilation ni frais de sortie.",
  },
  manifesto: {
    badge: "02 — Notre raison d'être",
    title: "Nous croyons qu'Internet peut encore être humain.",
    description:
      "Upstand est un studio de produit indépendant et une société pour concevoir des outils soignés, des infrastructures utiles et des idées exigeantes.",
    subDescription:
      "Nous créons ce que nous aurions aimé trouver : des outils open source pour les développeurs, ainsi que des plateformes dédiées pour le web. Notre travail allie logiciel, artisanat et souveraineté.",
    point1: {
      title: "L'artisanat plutôt que la facilité",
      desc: "Des composants durables et épurés. Pas de dark patterns, pas de télémétrie abusive et aucun verrouillage propriétaire.",
    },
    point2: {
      title: "La souveraineté plutôt que la dépendance",
      desc: "Vous devez rester propriétaire de votre infrastructure, de vos données et de vos outils. Respect strict des standards ouverts.",
    },
    point3: {
      title: "La clarté plutôt que la complexité superflue",
      desc: "Une ingénierie pragmatique. Docker Swarm plutôt que la démesure de Kubernetes. Des configurations lisibles en cinq minutes.",
    },
  },
  ecosystem: {
    badge: "03 — Наши проекты",
    title: "Коллекция полезных вещей с единым подходом Upstand.",
    description:
      "Инструменты с открытым кодом, творческие платформы и инфраструктура, созданные с заботой.",
    visitSite: "Открыть проект",
    projects: [
      {
        id: "upstand-paas",
        number: "01",
        name: "Upstand PaaS",
        tagline: "Self-hosted контейнерная платформа на Docker Swarm и Caddy",
        description:
          "Многоузловые кластеры, динамический обратный прокси, персистентные БД и AI-ассистент без вендор-лока.",
        category: "Инфраструктура",
        url: "https://upstand.dev",
        status: "Продакшн",
        isFlagship: true,
      },
      {
        id: "openrive",
        number: "02",
        name: "OpenRive",
        tagline:
          "Открытая среда выполнения и инструментарий интерактивной векторной анимации",
        description:
          "Высокопроизводительный движок и конвертер векторных форматов для веба и нативных платформ.",
        category: "Креативные инструменты",
        url: "https://openrive.upstand.dev",
        status: "Публичная бета",
      },
      {
        id: "adsparty",
        number: "03",
        name: "AdsParty",
        tagline: "Контекстная рекламная биржа без нарушения конфиденциальности",
        description:
          "Прямая реклама без поведенческого трекинга, сторонних cookies и агрессивного профилирования.",
        category: "Веб-протокол",
        url: "https://ads.upstand.dev",
        status: "Активен",
      },
      {
        id: "tongo",
        number: "04",
        name: "Tongo",
        tagline:
          "Холст совместной работы в реальном времени для продуктовых команд",
        description:
          "Бесконечное полотно для проектирования архитектуры и совместного мозгового штурма с локальной синхронизацией.",
        category: "Продуктивность",
        url: "https://tongo.run",
        status: "Ранний доступ",
      },
      {
        id: "dgrunner",
        number: "05",
        name: "dgrunner",
        tagline: "Легковесный эфемерный CI-раннер на базе MicroVM",
        description:
          "Безопасные изолированные раннеры для CI/CD, стартующие MicroVM менее чем за 200мс.",
        category: "Инструменты разработки",
        url: "https://https://www.npmjs.com/package/@upstand/dgrunner",
        status: "Open Source",
      },
      {
        id: "lettersbox",
        number: "06",
        name: "lettersbox",
        tagline: "Почтовые рассылки без трекинга подписчиков",
        description:
          "Платформа публикаций на Markdown с криптографическим подтверждением доставки и без пикселей слежения.",
        category: "Издательство",
        url: "https://lettersbox.ir",
        status: "Активен",
      },
    ],
  },
  capabilities: {
    badge: "04 — Возможности платформы",
    title: "Все необходимое для доставки и работы контейнеров.",
    description:
      "Построено на проверенных временем технологиях Linux: Docker Swarm, Caddy, WireGuard и PostgreSQL.",
    categories: [
      {
        id: "deploy",
        title: "Деплой и релизы",
        items: [
          {
            name: "Compose и мультисервисы",
            desc: "Развертывание стеков прямо из стандартных файлов docker-compose.",
          },
          {
            name: "Деплой по Git Push",
            desc: "Автоматический запуск сборки при каждом коммите через безопасные вебхуки.",
          },
          {
            name: "Мгновенные откаты (Rollback)",
            desc: "Откат к любой предыдущей версии без простоя сервиса.",
          },
          {
            name: "Разнообразные билдеры",
            desc: "Поддержка Dockerfile с секретами BuildKit или автоопределение Nixpacks.",
          },
        ],
      },
      {
        id: "orchestrate",
        title: "Кластеризация и оркестрация",
        items: [
          {
            name: "Нативный Docker Swarm",
            desc: "Консенсус Raft, встроенный в движок Docker, без тяжелого etcd.",
          },
          {
            name: "Мультисерверное распределение",
            desc: "Балансировка реплик контейнеров между менеджерами и воркерами.",
          },
          {
            name: "Плавные обновления без простоя",
            desc: "Пошаговый rollout новых версий с автоматическим откатом при сбоях.",
          },
          {
            name: "Мониторинг здоровья и самолечение",
            desc: "Перезапуск упавших задач и миграция на здоровые ноды.",
          },
        ],
      },
      {
        id: "route",
        title: "Маршрутизация и сеть",
        items: [
          {
            name: "Атомарный реверс-прокси Caddy",
            desc: "Перезагрузка конфигурации с предварительной валидацией без потери трафика.",
          },
          {
            name: "Автоматический TLS Let's Encrypt",
            desc: "Автовыпуск и продление SSL-сертификатов для доменов и поддоменов.",
          },
          {
            name: "Зашифрованная сеть Overlay",
            desc: "Изоляция межсервисного взаимодействия через VXLAN с шифрованием IPsec.",
          },
          {
            name: "Маршрутизация по путям и поддоменам",
            desc: "Распределение трафика между приложениями и микросервисами.",
          },
        ],
      },
      {
        id: "storage",
        title: "Хранилище и базы данных",
        items: [
          {
            name: "Базы данных в один клик",
            desc: "Готовые шаблоны PostgreSQL 18, MySQL, Redis, MongoDB и ClickHouse.",
          },
          {
            name: "Персистентные Docker тома",
            desc: "Подключение локальных и распределенных томов с гарантией сохранности данных.",
          },
          {
            name: "Автобэкапы в S3",
            desc: "Дампы баз данных по расписанию в AWS S3, Cloudflare R2 или MinIO.",
          },
          {
            name: "Безопасный импорт данных",
            desc: "Восстановление бэкапов с проверкой транзакционной целостности.",
          },
        ],
      },
      {
        id: "operate",
        title: "Эксплуатация и ассистент UpGal",
        items: [
          {
            name: "Подключение серверов без агентов",
            desc: "Добавление серверов по SSH без установки сторонних демонов.",
          },
          {
            name: "AI-ассистент UpGal",
            desc: "Умный агент по протоколу MCP для диагностики логов и состояния сервисов.",
          },
          {
            name: "Централизованные живые логи",
            desc: "Потоковый вывод stdout и stderr со всех нод и контейнеров кластера.",
          },
          {
            name: "Полнофункциональный CLI и API",
            desc: "Автоматизация управления кластером через консоль и API токены.",
          },
        ],
      },
      {
        id: "security",
        title: "Безопасность и контроль",
        items: [
          {
            name: "Корпоративный SSO и SCIM 2.0",
            desc: "Вход через Google, GitHub, Okta, SAML и OIDC провайдеры.",
          },
          {
            name: "Ролевой доступ (RBAC)",
            desc: "Разграничение прав владельцев, администраторов и участников.",
          },
          {
            name: "Ограниченные API токены",
            desc: "Выпуск токенов с доступом только к определенным проектам.",
          },
          {
            name: "Неизменяемый журнал аудита",
            desc: "Фиксация всех изменений конфигурации, деплоев и откатов.",
          },
        ],
      },
    ],
  },
  architecture: {
    badge: "05 — Архитектура",
    title: "Спроектировано для промышленной надежности.",
    description:
      "Многоуровневая топология с изолированным control plane, шифрованной сетью и надежной маршрутизацией.",
    details: {
      step1Title: "Клиентский и входной слой",
      step1Desc:
        "Запросы приходят по HTTPS на краевой прокси, а инженеры работают через веб-консоль, CLI или MCP-ассистента.",
      step2Title: "Control Plane и база состояния",
      step2Desc:
        "API на базе Hono и tRPC координирует состояние в PostgreSQL 18, а задачи исполняются через очереди BullMQ.",
      step3Title: "Сервисная сетка Docker Swarm",
      step3Desc:
        "Менеджеры поддерживают консенсус Raft и распределяют задачи в изолированных overlay-сетях.",
      step4Title: "Атомарный реверс-прокси Caddy",
      step4Desc:
        "Перед применением конфигурации Caddy тестирует ее в контейнере, гарантируя нулевой простой соединений.",
    },
  },
  composeTranslator: {
    badge: "06 — Конвертер Compose в Swarm",
    title: "Стандартный Compose на входе. Отказоустойчивый Swarm на выходе.",
    description:
      "Upstand конвертирует файлы Compose в надежные стеки Swarm с политиками автовосстановления и обновления.",
    composeTab: "docker-compose.yml (Dev)",
    swarmTab: "swarm-stack.yml (Production)",
    featuresList: [
      "Автогенерация реплик и ограничений размещения на нодах",
      "Настройка постепенного обновления с контролем параллелизма",
      "Автоматический перезапуск задач при выходе ноды из строя",
      "Без необходимости писать сотни строк YAML для Kubernetes",
    ],
  },
  partners: {
    badge: "07 — В хорошей компании",
    title: "Партнеры, единомышленники и друзья студии.",
    description:
      "Мы работаем с командами, которые разделяют наши ценности ремесла, производительности и независимости ПО.",
    quote:
      "Хорошие инструменты создаются хорошими людьми. Мы гордимся сотрудничеством с теми, кто двигает веб вперед.",
    visitPartner: "Открыть сайт",
    items: [
      {
        number: "01",
        name: "Apex Team",
        role: "Стратегический партнер по инфраструктуре",
        description:
          "Команда системных инженеров, специализирующаяся на распределенных системах и контейнерных средах.",
        url: "https://apexteam.net",
      },
      {
        number: "02",
        name: "Mansora",
        role: "Дизайн продукта, цифровая стратегия и архитектура",
        description:
          "Консалтинговая студия, ориентированная на человечный дизайн, типографику и интерфейсы для разработчиков.",
        url: "https://mansora.dev",
      },
    ],
  },
  comparison: {
    badge: "08 — Техническое сравнение",
    title: "В чем реальное отличие Upstand.",
    description:
      "Фактическое сравнение архитектуры, моделей оркестрации и потребления системных ресурсов.",
    colFeature: "Параметр",
    colUpstand: "Upstand",
    colCoolify: "Coolify",
    colPortainer: "Portainer",
    colDokploy: "Dokploy",
    colKubernetes: "Kubernetes",
    rows: [
      {
        feature: "Движок оркестрации",
        upstand: "Нативный Docker Swarm",
        coolify: "Одиночный Docker / Swarm частично",
        portainer: "Агент Docker / K8s",
        dokploy: "Одиночный Docker / Traefik",
        kubernetes: "Kubelet и сложный control plane",
        highlight: true,
      },
      {
        feature: "Кластеризация из коробки",
        upstand: "Встроена (Raft консенсус)",
        coolify: "Экспериментально / один хост",
        portainer: "Требует агента на каждом хосте",
        dokploy: "В основном один хост",
        kubernetes: "Встроена (высокая сложность)",
        highlight: true,
      },
      {
        feature: "Архитектура обратного прокси",
        upstand: "Атомарный Caddy (0мс перезагрузка)",
        coolify: "Traefik",
        portainer: "Edge агент / ручная настройка",
        dokploy: "Traefik",
        kubernetes: "Ingress-NGINX / Envoy",
      },
      {
        feature: "Потребление RAM контрольной панелью",
        upstand: "~180 МБ RAM",
        coolify: "~500 МБ RAM",
        portainer: "~150 МБ RAM",
        dokploy: "~350 МБ RAM",
        kubernetes: ">2 ГБ RAM только на мастера",
        highlight: true,
      },
      {
        feature: "Управление удаленными узлами",
        upstand: "Без агентов (по SSH)",
        coolify: "Выполнение через SSH",
        portainer: "Проприетарный агент",
        dokploy: "Выполнение через SSH",
        kubernetes: "Kubelet на каждом узле",
      },
      {
        feature: "AI-ассистент для运维",
        upstand: "UpGal (стандартный протокол MCP)",
        coolify: "Нет",
        portainer: "Нет",
        dokploy: "Нет",
        kubernetes: "Сторонние надстройки",
      },
      {
        feature: "Лицензия",
        upstand: "Apache 2.0 (100% бесплатно)",
        coolify: "Apache 2.0",
        portainer: "Open Source / коммерческие тарифы",
        dokploy: "Apache 2.0",
        kubernetes: "Apache 2.0",
      },
    ],
  },
  faq: {
    badge: "09 — Частые вопросы",
    title: "Ответы на ключевые вопросы.",
    description:
      "Прямые технические ответы об устройстве и эксплуатации Upstand.",
    items: [
      {
        question: "Почему Docker Swarm, а не Kubernetes?",
        answer:
          "Docker Swarm встроен прямо в движок Docker. Он дает мультисерверную кластеризацию, консенсус Raft и оверлейную сеть с потреблением менее 200 МБ RAM, избавляя от 2 ГБ+ оверхеда и сотен строк манифестов Kubernetes.",
      },
      {
        question: "Как достигается перезагрузка Caddy без простоя?",
        answer:
          "Перед применением конфигурация проверяется во временном тестовом контейнере. Только при успешной проверке подается команда перезагрузки во внутренний JSON API Caddy. В случае ошибки старая конфигурация продолжает работать без обрыва соединений.",
      },
      {
        question: "Можно ли объединять серверы от разных провайдеров?",
        answer:
          "Да. Upstand соединяет узлы по SSH в зашифрованную сеть WireGuard и Swarm. Вы можете легко объединить bare-metal серверы Hetzner с VPS от Selectel и инстансами AWS в единый кластер.",
      },
      {
        question: "Бесплатен ли Upstand для коммерческого использования?",
        answer:
          "Да. Upstand полностью открыт под лицензией Apache 2.0. Вы можете развертывать его в продакшне на неограниченном числе серверов с любым числом контейнеров без лицензионных платежей.",
      },
      {
        question: "Как сохраняются данные баз данных при миграциях?",
        answer:
          "Базы данных привязываются к локальным томам конкретных нод через правила размещения Swarm, а автоматические бэкапы в S3 гарантируют сохранность данных.",
      },
      {
        question:
          "Можно ли мигрировать с Coolify, Dokploy или чистого Compose?",
        answer:
          "Да. Upstand понимает стандартный синтаксис Docker Compose и автоматически конвертирует его в стеки Swarm. Вы можете импортировать проекты в один клик.",
      },
    ],
  },
  contact: {
    badge: "10 — Обсудить идею",
    title: "Начните диалог с нашей инженерной командой.",
    description:
      "Планируете ли вы миграцию инфраструктуры, разработку интеграций или открытое сотрудничество — мы будем рады обсудить это с вами.",
    namePlaceholder: "Ваше имя",
    emailPlaceholder: "name@company.com",
    ideaPlaceholder: "Расскажите о вашей инфраструктуре или идее проекта...",
    budgetLabel: "Масштаб проекта",
    submitButton: "Отправить запрос",
    submitting: "Отправка...",
    successMessage:
      "Спасибо! Мы получили ваш запрос и свяжемся с вами в ближайшее время.",
    directEmailNotice: "Вы также можете написать нам напрямую на почту:",
  },
  cta: {
    tag: "Открытый манифест",
    title: "Создано, чтобы работать, форкаться и развиваться вами.",
    description:
      "Разверните Upstand на своих серверах уже сегодня. Бесплатно, независимо и открыто под лицензией Apache 2.0.",
    installNow: "Команда установки",
    readDocs: "Открыть документацию",
    licenseNotice:
      "Лицензия Apache 2.0 · Без скрытой телеметрии · 100% self-hosted",
  },
  footer: {
    description:
      "Studio de produit indépendant et plateforme d'orchestration de conteneurs. Nous concevons des outils dignes d'intérêt.",
    headings: {
      platform: "Plateforme",
      studio: "Studio",
      resources: "Ressources",
      legal: "Mentions légales",
    },
    links: {
      models: "Modèles de déploiement",
      capabilities: "Fonctionnalités",
      architecture: "Architecture",
      manifesto: "Manifeste du studio",
      ecosystem: "Projets de l'écosystème",
      partners: "Partenaires",
      docs: "Documentation",
      github: "Dépôt GitHub",
      license: "Licence Apache 2.0",
      privacy: "Politique de confidentialité",
    },
    rights: "Upstand Platform. Tous droits réservés.",
  },
};
