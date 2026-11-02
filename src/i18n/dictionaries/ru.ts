import { Dictionary } from "../types";

export const ru: Dictionary = {
  seo: {
    title: "Upstand | Современная self-hosted PaaS-панель управления Docker Swarm",
    description:
      "Оркестрация узлов Docker Swarm, развертывание приложений и баз данных, атомарный роутинг Caddy без простоев и AI-ассистент UpGal в одной панели.",
    keywords: [
      "Docker Swarm PaaS",
      "self-hosted PaaS",
      "панель управления контейнерами",
      "Upstand",
      "Caddy обратный прокси",
      "UpGal AI ассистент",
      "PostgreSQL управление",
      "libSQL хостинг",
      "кластеризация Docker",
      "альтернатива Coolify и Portainer",
    ],
    ogTitle: "Upstand — Надежная панель управления контейнерами и кластерами",
    ogDescription:
      "Развертывайте приложения, базы данных и кластеры Docker Swarm с надежными очередями сборки и автономным AI-ассистентом.",
  },
  nav: {
    features: "Возможности",
    architecture: "Архитектура",
    databases: "Базы данных",
    upgal: "AI-ассистент UpGal",
    compare: "Сравнение",
    calculator: "Калькулятор выгоды",
    faq: "Вопросы и ответы",
    docs: "Документация",
    github: "GitHub",
    getStarted: "Установить Upstand",
    language: "Язык",
    theme: "Тема",
  },
  hero: {
    badge: "Open-source PaaS-панель v0.14",
    titleStart: "Развертывание и оркестрация",
    titleHighlight: "кластеров Docker Swarm",
    titleEnd: "с полной операционной прозрачностью",
    description:
      "Self-hosted платформа для разработчиков и DevOps, превращающая серверы в отказоустойчивые кластеры Docker Swarm. Деплой из Git, базы данных с персистентными томами, атомарная перезагрузка Caddy без обрыва соединений и автономный AI-ассистент UpGal.",
    quickInstall: "Быстрая установка",
    copied: "Команда скопирована в буфер!",
    copyCommand: "Копировать",
    exploreDocs: "Документация",
    viewGithub: "Открыть GitHub",
    starsBadge: "2.4k+ звезд",
    tabInstall: "Установка (Bash)",
    tabCompose: "docker-compose.yml",
    tabSwarm: "Сервис Swarm",
    tabUpGal: "Ассистент UpGal",
    statusHealthy: "Все 12 узлов Swarm активны",
    statusReady: "Готовность к развертыванию без простоя",
  },
  stats: {
    uptimeValue: "99.99%",
    uptimeLabel: "Доступность оркестрируемых узлов",
    speedValue: "в 10 раз",
    speedLabel: "Быстрее ручного деплоя через SSH",
    caddyValue: "0 мс",
    caddyLabel: "Простоя при атомарных релоадах Caddy",
    sovereigntyValue: "100%",
    sovereigntyLabel: "Суверенитет данных на собственных серверах",
  },
  features: {
    badge: "Ключевые возможности",
    title: "Всё необходимое для запуска контейнеров в проде",
    description:
      "Забудьте о разрозненных скриптах и ручной правке Nginx. Upstand объединяет кластеризацию, базы данных и AI-автоматизацию в единой удобной панели.",
    items: {
      swarm: {
        title: "Кластеризация Docker Swarm из коробки",
        desc: "Связывайте мастер- и воркер-узлы через шифрованные overlay-сети. Ротация токенов, безопасный вывод узлов на обслуживание и консенсус Raft без риска split-brain.",
        tag: "Управление кластером",
      },
      databases: {
        title: "Нативные базы данных с хранилищем",
        desc: "Развертывание в 1 клик: PostgreSQL 18, MySQL, MariaDB, MongoDB, Redis и libSQL (sqld) с персистентными томами, генерацией паролей и бэкапами в S3 через rclone.",
        tag: "Хранение данных",
      },
      caddy: {
        title: "Атомарный реверс-прокси Caddy и SSL",
        desc: "Каждая конфигурация тестируется в изолированном контейнере перед применением. Автоматические сертификаты Let's Encrypt и нулевой сброс текущих TCP-соединений.",
        tag: "Маршрутизация",
      },
      upgal: {
        title: "Автономный AI-помощник UpGal",
        desc: "Агент с лимитом в 12 шагов и обязательным подтверждением человеком для любых опасных операций. Диагностика кластера, масштабирование и протокол MCP.",
        tag: "AI-операции",
      },
      remoteServers: {
        title: "Подключение удаленных серверов по SSH",
        desc: "Подключайте любые Linux-серверы без агентов. Upstand сам установит Docker, настроит Swarm и запустит локальные очереди сборки через защищенный туннель.",
        tag: "Инфраструктура",
      },
      security: {
        title: "Корпоративный SSO, SCIM 2.0 и аудит",
        desc: "Интеграция с SAML 2.0, OIDC, синхронизация пользователей по SCIM 2.0, DNS TXT валидация доменов и защищенный Web SSH терминал исключительно для владельца.",
        tag: "Безопасность",
      },
    },
  },
  architecture: {
    badge: "Архитектура системы",
    title: "Надежность, отказоустойчивость и строгая изоляция",
    description:
      "Управляющий контур изолирован от рабочих нагрузок. Веб-панель взаимодействует с сервером Hono/tRPC, сборки выполняются в очередях BullMQ, а Caddy бесшовно распределяет трафик.",
    clientLayer: "Пользовательский браузер и AI-агенты MCP",
    controlPlaneLayer: "Контур управления (Hono, tRPC, PostgreSQL, Redis)",
    workerNodesLayer: "Кластер Swarm и очереди узлов",
    caddyEdgeLayer: "Caddy прокси с автоматическим откатом при сбое",
    details: {
      step1Title: "1. Декларативная спецификация",
      step1Desc: "Разработчик пушит код в Git или отправляет Compose через UI, CLI или ассистента UpGal.",
      step2Title: "2. Очередь сборки и BuildKit",
      step2Desc: "Очередь воркера последовательно выполняет сборку через Dockerfile, Railpack или Nixpacks.",
      step3Title: "3. Rolling Update в Swarm",
      step3Desc: "Docker Swarm поэтапно обновляет контейнеры с проверкой healthcheck и лимитами отката.",
      step4Title: "4. Атомарное обновление Caddy",
      step4Desc: "Caddy проверяет синтаксис в памяти и переключает маршруты без разрыва соединений.",
    },
  },
  composeTranslator: {
    badge: "Конвертер конфигураций",
    title: "Преобразование Docker Compose в отказоустойчивые Swarm Stacks",
    description:
      "Вставьте стандартный docker-compose.yml. Upstand автоматически преобразует порты, политики перезапуска и сети в отказоустойчивую спецификацию Swarm с репликами и оверлей-сетями.",
    composeTab: "Обычный docker-compose.yml",
    swarmTab: "Преобразованный Swarm Stack",
    featuresList: [
      "Автоматическое предотвращение конфликтов имен томов и сетей",
      "Замена restart: always на deploy.restart_policy с экспоненциальной задержкой",
      "Настройка параметров параллелизма и порогов сбоя при обновлении",
      "Надежное шифрование переменных окружения и секретов",
    ],
  },
  comparison: {
    badge: "Объективное сравнение",
    title: "Upstand в сравнении с другими PaaS-решениями",
    description:
      "Создан специально для команд, которым нужна высокая доступность нескольких узлов без чудовищной сложности Kubernetes.",
    colFeature: "Функция",
    colUpstand: "Upstand",
    colCoolify: "Coolify",
    colPortainer: "Portainer",
    colDokploy: "Dokploy",
    colKubernetes: "Kubernetes (K8s)",
    rows: [
      {
        feature: "Многоузловой кластер Swarm",
        upstand: "Нативный Swarm + Raft",
        coolify: "Один сервер / SSH Remote",
        portainer: "Сложная настройка",
        dokploy: "Одиночный узел Swarm",
        kubernetes: "Нативно (Высокие накладные расходы)",
        highlight: true,
      },
      {
        feature: "Динамический обратный прокси",
        upstand: "Атомарный Caddy (с валидацией)",
        coolify: "Traefik",
        portainer: "Вручную / Nginx",
        dokploy: "Traefik",
        kubernetes: "Ingress Controller",
      },
      {
        feature: "AI-ассистент с подтверждением",
        upstand: "UpGal с картами подтверждений и MCP",
        coolify: "Нет встроенного AI",
        portainer: "Нет встроенного AI",
        dokploy: "Нет встроенного AI",
        kubernetes: "Внешние плагины",
        highlight: true,
      },
      {
        feature: "Современные БД и libSQL",
        upstand: "Postgres 18, MySQL, Mongo, libSQL",
        coolify: "Стандартные БД",
        portainer: "Шаблоны вручную",
        dokploy: "Стандартные БД",
        kubernetes: "Требуются тяжелые операторы",
      },
      {
        feature: "Корпоративный SSO и SCIM 2.0",
        upstand: "OIDC, SAML 2.0 и SCIM в комплекте",
        coolify: "Только в Cloud-подписке",
        portainer: "Только в Business Edition",
        dokploy: "Только базовый логин",
        kubernetes: "Настройка через Dex/Keycloak",
        highlight: true,
      },
      {
        feature: "Потребление памяти (RAM)",
        upstand: "Легковесный (~400 МБ)",
        coolify: "Среднее (~1 ГБ)",
        portainer: "Легковесный (~250 МБ)",
        dokploy: "Среднее (~800 МБ)",
        kubernetes: "Тяжелый (2+ ГБ на узел)",
      },
    ],
  },
  calculator: {
    badge: "Экономия бюджета",
    title: "Рассчитайте выгоду от перехода на self-hosted",
    description:
      "Облачные PaaS берут огромную наценку за процессор, трафик и базы данных. Оцените свою экономию при переходе на Upstand.",
    nodesLabel: "Серверных узлов",
    appsLabel: "Активных приложений",
    dbsLabel: "Баз данных",
    estimatedCloudCost: "Ориентировочная стоимость в облаке / AWS",
    upstandCost: "Стоимость выделенных серверов с Upstand",
    savingsPerYear: "Экономия в год",
    savingsNote:
      "Расчет основан на тарифах виртуальных машин AWS ECS / RDS в сравнении с выделенными серверами Hetzner / OVH.",
  },
  testimonials: {
    badge: "Отзывы инженеров",
    title: "Выбор разработчиков и DevOps-специалистов",
    description:
      "Мнения специалистов, эксплуатирующих контейнерные нагрузки в продакшене.",
    items: [
      {
        quote:
          "Upstand дал нам стабильность Swarm-кластера без необходимости нанимать Kubernetes-инженера. Атомарные релоады Caddy полностью избавили нас от ошибок 502 во время релизов.",
        author: "Alexandre Moreau",
        role: "Ведущий DevOps-архитектор",
        company: "Vektor Labs",
      },
      {
        quote:
          "UpGal AI — первый помощник, который действительно заботится о безопасности. Карточка с подтверждением в интерфейсе гарантирует, что прод-база не будет затронута случайно.",
        author: "Sarah Chen",
        role: "Руководитель инфраструктуры",
        company: "Nexus Fintech",
      },
      {
        quote:
          "Мы перенесли 45 микросервисов из облака на 3 выделенных сервера с Upstand. Наш ежемесячный счет упал с $3400 до $220 без единой секунды простоя.",
        author: "Дмитрий Васильев",
        role: "Платформенный инженер",
        company: "HyperScale Media",
      },
    ],
  },
  faq: {
    badge: "Часто задаваемые вопросы",
    title: "Всё, что нужно знать об Upstand",
    description:
      "Технические ответы на ключевые вопросы об установке, архитектуре и безопасности.",
    items: [
      {
        question: "Что такое Upstand и чем он отличается от Coolify или Portainer?",
        answer:
          "Upstand — это нативная PaaS-панель для многоузловых кластеров Docker Swarm. В отличие от односерверных утилит, Upstand обеспечивает отказоустойчивость мастер- и воркер-узлов, использует атомарный Caddy с предварительной верификацией конфига, включает AI-ассистента с подтверждением действий и нативно поддерживает libSQL наряду с PostgreSQL.",
        category: "Обзор",
      },
      {
        question: "Каковы минимальные требования к серверу?",
        answer:
          "Для продакшена рекомендуется минимум 2 ядра vCPU, 4 ГБ RAM и 30 ГБ места на диске. Для тестов и разработки допустимо использование на машинах с 1 vCPU и 2 ГБ RAM с параметром UPSTAND_ALLOW_UNDERSIZED_HOST=true.",
        category: "Установка",
      },
      {
        question: "Как Caddy перезагружается без простоя трафика?",
        answer:
          "Перед применением любого изменения Upstand тестирует скомпилированный Caddyfile в изолированном контейнере. Если проверка прошла успешно, Caddy обновляет конфигурацию в памяти без разрыва активных TLS-сессий и HTTP-соединений. При ошибке сохраняется предыдущая рабочая версия.",
        category: "Сеть и прокси",
      },
      {
        question: "Можно ли подключить сторонние серверы по SSH?",
        answer:
          "Да! Upstand поддерживает безагентное подключение. Достаточно указать IP-адрес и приватный SSH-ключ. Upstand сам настроит окружение, установит Docker при необходимости и подключит узел к кластеру по защищенному каналу.",
        category: "Кластеризация",
      },
      {
        question: "Как UpGal AI обеспечивает безопасность операций?",
        answer:
          "UpGal действует в рамках жесткого лимита из 12 шагов. При попытке совершить мутирующую операцию (остановка сервиса, удаление тома или сброс базы данных) выполнение приостанавливается, а на экране появляется диалоговое окно для подтверждения администратором.",
        category: "AI и безопасность",
      },
      {
        question: "Upstand полностью бесплатен и открыт?",
        answer:
          "Да, Upstand — это программное обеспечение с открытым исходным кодом под лицензией Apache 2.0. Вы полностью контролируете свои данные, серверы и конфигурации без скрытых ограничений.",
        category: "Лицензия",
      },
    ],
  },
  cta: {
    badge: "Запуск за 2 минуты",
    title: "Возьмите под контроль свое частное контейнерное облако",
    description:
      "Выполните одну команду на чистом сервере Ubuntu или Debian и получите готовую к бою платформу Docker Swarm PaaS.",
    installNow: "Команда установки",
    readDocs: "Документация",
    prerequisites: "Требования: Ubuntu 22.04+, Debian 12+ с root-доступом.",
  },
  footer: {
    tagline: "Современная панель управления контейнерами",
    description:
      "Self-hosted PaaS для Docker Swarm, многоузловая кластеризация, динамический прокси Caddy и AI-автоматизация.",
    headings: {
      product: "Продукт",
      resources: "Ресурсы",
      community: "Сообщество",
      compliance: "Enterprise",
    },
    links: {
      docs: "Документация",
      releases: "Журнал релизов",
      swarmGuide: "Руководство по Swarm",
      mcpProtocol: "Протокол UpGal MCP",
      github: "Репозиторий GitHub",
      discord: "Чат в Discord",
      securityPolicy: "Безопасность и 2FA",
      architecture: "Архитектура системы",
    },
    rights: "Все права защищены. Upstand Platform.",
    openSourceNotice: "Открытое программное обеспечение под лицензией Apache 2.0.",
  },
};
