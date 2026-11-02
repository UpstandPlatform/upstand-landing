import { Dictionary } from "../types";

export const zh: Dictionary = {
  seo: {
    title: "Upstand | 现代化容器 PaaS 控制面板与独立产品工作室 — 我们创造值得使用的产品",
    description:
      "独立产品工作室与 Docker Swarm 控制面板。编排集群、部署应用与数据库、配置零宕机 Caddy 路由，并探索我们的开源工具生态。",
    keywords: [
      "Upstand 产品工作室",
      "Docker Swarm PaaS",
      "开源开发者工具",
      "OpenRive 动画编辑器",
      "AdsParty 广告网络",
      "dgrunner 自托管运行器",
      "Tongo 平台",
      "lettersbox 私密沟通",
      "UpGal AI 运维助手",
    ],
    ogTitle: "Upstand — 我们创造真正值得使用的产品",
    ogDescription:
      "独立产品工作室，打造有温度的实用软件、开源工具与高可用 Docker Swarm 容器控制平台。",
  },
  nav: {
    features: "核心功能",
    architecture: "系统架构",
    databases: "原生数据库",
    upgal: "UpGal 助手",
    ecosystem: "旗下作品",
    partners: "生态伙伴",
    compare: "产品对比",
    calculator: "TCO 成本计算器",
    faq: "常见问题",
    contact: "联系合作",
    docs: "技术文档",
    github: "GitHub",
    getStarted: "安装 Upstand",
    language: "语言",
    theme: "外观",
  },
  hero: {
    badge: "开源自托管 PaaS 控制面板 v0.14",
    titleStart: "全面掌控与编排",
    titleHighlight: "Docker Swarm 容器集群",
    titleEnd: "体验极致的运维清晰度",
    description:
      "面向开发者的自托管 PaaS 控制面板。将裸金属服务器或云主机快速组建为弹性 Docker Swarm 集群。支持 Git 代码直推构建、一键拉起持久化数据库、原子级零宕机 Caddy 重载，并内置具备人工确认流的 UpGal AI 运维助手。",
    quickInstall: "快速安装",
    copied: "命令已复制到剪贴板！",
    copyCommand: "复制命令",
    exploreDocs: "浏览文档",
    viewGithub: "访问 GitHub",
    starsBadge: "2.4k+ Stars",
    tabInstall: "一键安装 (Bash 终端)",
    tabCompose: "docker-compose.yml 示例",
    tabSwarm: "Swarm 集群服务",
    tabUpGal: "UpGal AI 智能助手",
    statusHealthy: "全部 12 个 Swarm 节点健康运行",
    statusReady: "已就绪：支持零停机滚动更新",
  },
  manifesto: {
    badge: "01 — 我们的初衷",
    title: "我们相信，互联网依然可以充满人性的温度。",
    description:
      "Upstand 是一家独立的产品控股工作室，致力于打造充满好奇心的产品、实用的基础设施，以及值得更多关注的灵感。",
    subDescription:
      "我们创造那些渴望存在的东西：面向开发者、设计师与编程社区的开源工具，以及服务更广阔网络的专注平台。我们的作品立足于软件、文化与未来的无限可能之间。",
    point1: {
      title: "秉持信念的软件",
      desc: "拒绝冗余的层级与诱导性暗黑模式。以纯粹、坚固的底层原语打造经得起时间检验的系统。",
    },
    point2: {
      title: "追求极致的匠人文化",
      desc: "专为注重人机工效、排版美学、键盘快捷操作与极致性能的人群而设计。",
    },
    point3: {
      title: "毫不妥协的真正主权",
      desc: "独立自主的工具，帮助开发者与企业真正拿回对数据和服务器的完全控制权。",
    },
  },
  ecosystem: {
    badge: "02 — 旗下作品与生态",
    title: "一系列精心打磨的实用工具。源自 Upstand 的独立视角。",
    description:
      "用心雕琢的开源工具、创意平台与开发者基础设施。",
    visitSite: "访问项目",
    projects: [
      {
        id: "upstand-paas",
        number: "01",
        name: "Upstand PaaS",
        tagline: "旗舰产品 · 容器控制面板",
        description:
          "面向 Docker Swarm 的容器优先自托管 PaaS，内置动态 Caddy 路由与 AI 自动化运维系统。",
        category: "控制平面",
        url: "https://upstand.dev",
        status: "v0.14 活跃",
        isFlagship: true,
      },
      {
        id: "openrive",
        number: "02",
        name: "OpenRive",
        tagline: "开源项目 · 创意动画工具",
        description:
          "免登录、本地优先的 Rive 动画 Web 编辑器。直接在浏览器中调试状态机与实时运行效果。",
        category: "创意工具",
        url: "https://openrive.upstand.dev",
        status: "已上线 免费",
      },
      {
        id: "adsparty",
        number: "03",
        name: "AdsParty",
        tagline: "商业平台 · 智能广告网络",
        description:
          "覆盖 Telegram 与开放网络的高效广告平台，提供精准定位与透明实时的投放分析。",
        category: "广告网络",
        url: "https://ads.upstand.dev",
        status: "生产运营中",
      },
      {
        id: "tongo",
        number: "04",
        name: "Tongo",
        tagline: "创新产品 · 新一代 Web 平台",
        description:
          "探索无摩擦去中心化工具与未来网络交互形态的实验性产品。",
        category: "平台工具",
        url: "https://tongo.run",
        status: "在线可用",
      },
      {
        id: "dgrunner",
        number: "05",
        name: "dgrunner",
        tagline: "开源项目 · 开发者运维工具",
        description:
          "轻松搭建、管理并自动扩展私有 GitHub Actions 执行器（Runner），支持无缝清理与临时隔离。",
        category: "DevOps",
        url: "https://github.com/UpstandPlatform/dgrunner",
        status: "开源发布",
      },
      {
        id: "lettersbox",
        number: "06",
        name: "lettersbox",
        tagline: "私密空间 · 沉浸私信交流",
        description:
          "一个宁静、无算法干扰的专属空间，用于记录笔记、书信、语音留言和私密对话。",
        category: "隐私通讯",
        url: "https://lettersbox.ir",
        status: "已发布",
      },
    ],
  },
  partners: {
    badge: "03 — 携手同行",
    title: "与卓越的伙伴共同成长。",
    description:
      "我们与深究细节、关注真实用户，并在产品上线后始终全情投入的团队紧密合作。",
    quote: "我们无意盲目生产更多；我们只专注创造未来所需之物。",
    visitPartner: "访问工作室",
    items: [
      {
        number: "01",
        name: "Apex Team",
        role: "软件与人工智能工作室",
        description:
          "一群富有创造力的工程师，将宏大构想转化为现实世界中的成熟产品与商业业务。",
        url: "https://apexteam.net",
      },
      {
        number: "02",
        name: "Mansora",
        role: "高阶技术咨询机构",
        description:
          "为高成长团队提供软件架构、AI 系统、云原生设施、安全审计与平台工程咨询服务。",
        url: "https://mansora.dev",
      },
    ],
  },
  stats: {
    uptimeValue: "99.99%",
    uptimeLabel: "编排集群的高可用运行时间",
    speedValue: "10 倍",
    speedLabel: "相比传统手动 SSH 部署提速",
    caddyValue: "0 ms",
    caddyLabel: "Caddy 动态重载造成的停机时间",
    sovereigntyValue: "100%",
    sovereigntyLabel: "数据主权与完全自托管掌控",
  },
  features: {
    badge: "核心能力",
    title: "团队在生产环境中运行容器所需的一切能力",
    description:
      "告别散碎的脚本、易错的手动 Nginx 配置与脆弱的 CI/CD 流程。Upstand 将多节点集群编排、数据库引擎与智能运维深度集成在统一的现代控制台中。",
    items: {
      swarm: {
        title: "Docker Swarm 多节点集群编排",
        desc: "在加密 Overlay 覆盖网络上轻松连接 Manager 与 Worker 节点。支持自动轮换加入令牌、安全排空节点以供维护，以及零脑裂风险的 Raft 共识保障。",
        tag: "集群管理",
      },
      databases: {
        title: "原生持久化数据库引擎",
        desc: "一键开箱即用 PostgreSQL 18、MySQL、MariaDB、MongoDB、Redis 及 libSQL (sqld)，附带持久卷保护、自动加密强口令，以及基于 rclone 的 S3 定时备份。",
        tag: "有状态存储",
      },
      caddy: {
        title: "原子级 Caddy 反向代理与自动 TLS",
        desc: "每次路由规则更新前均在隔离容器中预检语法。自动签发 Let's Encrypt 证书、支持前置认证与基础认证，永不断开正在进行的 TCP 连接。",
        tag: "边缘路由",
      },
      upgal: {
        title: "UpGal 自主 AI 运维助手",
        desc: "基于 12 步约束循环的 ToolLoopAgent。在执行涉及容器启停、卷删除或数据库重置的操作时必须人工审批。支持 Model Context Protocol (MCP)。",
        tag: "智能运维",
      },
      remoteServers: {
        title: "零客户端 SSH 远程主机初始化",
        desc: "只需提供 SSH 密钥即可接入任意远端 Linux 服务器。Upstand 自动安装 Docker Engine、初始化 Swarm 网络，并安全拉起独立的构建队列。",
        tag: "云端基础设施",
      },
      security: {
        title: "企业级 SSO、SCIM 2.0 与特权终端",
        desc: "原生支持 SAML 2.0、OIDC、企业员工目录自动同步 SCIM 2.0、DNS TXT 域名所有权校验，以及仅限主管理员访问的 Web SSH 终端与细粒度 API Token。",
        tag: "企业合规",
      },
    },
  },
  architecture: {
    badge: "系统架构",
    title: "专为持久性、企业安全与绝对隔离而设计",
    description:
      "Upstand 将控制平面与实际运行的业务负载完全解耦。Web 面板与 Hono/tRPC 服务通信，通过 BullMQ 队列驱动独立构建，并通过 Caddy 动态路由请求。",
    clientLayer: "客户端浏览器与 MCP AI 智能体",
    controlPlaneLayer: "Upstand 控制平面 (Hono, tRPC, PostgreSQL, Redis)",
    workerNodesLayer: "Docker Swarm 集群与各节点任务队列",
    caddyEdgeLayer: "具备自动回滚保障的 Caddy 动态边缘网关",
    details: {
      step1Title: "1. 声明式工作负载配置",
      step1Desc: "开发者通过 Git 提交、Web 控制台或 UpGal AI 发送 Compose 或应用配置清单。",
      step2Title: "2. 队列序列化与 BuildKit 编译",
      step2Desc: "目标节点的部署队列串行拉取并使用 Dockerfile、Railpack 或 Nixpacks 安全构建镜像。",
      step3Title: "3. Swarm 滚动发布与健康探测",
      step3Desc: "Docker Swarm 逐步替换容器副本，严格检验探针指标并在异常时快速回滚。",
      step4Title: "4. Caddy 内存原子热重载",
      step4Desc: "Caddy 预先校验新配置，在内存中完成反向代理切换，保持既有长连接不中断。",
    },
  },
  composeTranslator: {
    badge: "智能配置转换",
    title: "标准 Docker Compose 自动转换为高可用 Swarm Stack",
    description:
      "粘贴常规的 docker-compose.yml 文件，Upstand 将自动把端口映射、重启策略与网络声明转化为具备自动副本扩展、回滚阈值与覆盖网络的高可用集群定义。",
    composeTab: "标准 docker-compose.yml",
    swarmTab: "Upstand Swarm Stack 转换成果",
    featuresList: [
      "自动规避卷与网络名称冲突，添加安全隔离前缀",
      "将 restart: always 自动转换为带指数退避的 Swarm 部署策略",
      "注入滚动更新并发度 (parallelism) 与失败容错阈值",
      "安全加密注入集群密钥与环境变量",
    ],
  },
  comparison: {
    badge: "客观对比",
    title: "Upstand 与其他 PaaS 及容器工具对比",
    description:
      "Upstand 专为追求 Docker Swarm 多节点高可用、又不想被 Kubernetes 复杂度拖垮的研发团队而打造。",
    colFeature: "核心特性",
    colUpstand: "Upstand",
    colCoolify: "Coolify",
    colPortainer: "Portainer",
    colDokploy: "Dokploy",
    colKubernetes: "Kubernetes (K8s)",
    rows: [
      {
        feature: "多节点 Swarm 集群编排",
        upstand: "原生多节点 + Raft 共识",
        coolify: "单机模式 / SSH 远程控制",
        portainer: "支持 (界面操作复杂)",
        dokploy: "仅单机 Swarm 模式",
        kubernetes: "原生支持 (极重运维成本)",
        highlight: true,
      },
      {
        feature: "动态反向代理",
        upstand: "Caddy 原子预校验热更",
        coolify: "Traefik",
        portainer: "手动配置 / Nginx",
        dokploy: "Traefik",
        kubernetes: "Ingress Controller",
      },
      {
        feature: "具备人工审批的 AI 运维",
        upstand: "UpGal 带安全确认卡片与 MCP",
        coolify: "无原生 AI 支持",
        portainer: "无原生 AI 支持",
        dokploy: "无原生 AI 支持",
        kubernetes: "依赖第三方外挂",
        highlight: true,
      },
      {
        feature: "现代数据库与 libSQL",
        upstand: "Postgres 18、MySQL、Mongo、libSQL",
        coolify: "传统基础数据库",
        portainer: "手动编写模板",
        dokploy: "传统数据库",
        kubernetes: "需配置复杂的 Operator",
      },
      {
        feature: "企业 SSO 与 SCIM 2.0 同步",
        upstand: "OIDC、SAML 2.0 与 SCIM 开箱即用",
        coolify: "仅云端商业版支持",
        portainer: "仅昂贵的企业商业版支持",
        dokploy: "仅基础账密登录",
        kubernetes: "需自建 Dex / Keycloak",
        highlight: true,
      },
      {
        feature: "控制平面内存占用",
        upstand: "轻量级 (~400MB RAM)",
        coolify: "中等 (~1GB RAM)",
        portainer: "轻量级 (~250MB RAM)",
        dokploy: "中等 (~800MB RAM)",
        kubernetes: "沉重 (每节点 2GB+)",
      },
    ],
  },
  calculator: {
    badge: "降本增效",
    title: "测算迁移至自托管云的成本节省",
    description:
      "公有云 PaaS 对计算、网络出口与托管数据库收取数倍溢价。测算使用 Upstand 运行自有服务器所能节省的预算。",
    nodesLabel: "服务器节点数",
    appsLabel: "运行应用数量",
    dbsLabel: "数据库实例数量",
    estimatedCloudCost: "预估公有云 PaaS / AWS 月度账单",
    upstandCost: "使用 Upstand 自建裸金属月度成本",
    savingsPerYear: "每年为您节省",
    savingsNote:
      "对比数据参考同等配置的 AWS ECS / RDS 实例计费与 Hetzner / OVH 专用独立硬件服务器开支。",
  },
  testimonials: {
    badge: "用户评价",
    title: "深受注重稳定性与开发体验的工程师青睐",
    description:
      "倾听在生产环境中运行 Upstand 的架构师与系统管理员的真实体验。",
    items: [
      {
        quote:
          "Upstand 为我们带来了多节点 Docker Swarm 的稳定性，完全无需雇佣专职的 Kubernetes 工程师。Caddy 的原子级重载彻底解决了以往部署时的 502 短暂抖动。",
        author: "Alexandre Moreau",
        role: "DevOps 首席架构师",
        company: "Vektor Labs",
      },
      {
        quote:
          "UpGal AI 是我们见过的第一个真正尊重安全边界的 AI 运维助手。界面上清晰的确认卡片，彻底杜绝了任何误删生产数据库的危险。",
        author: "Sarah Chen",
        role: "基础设施负责人",
        company: "Nexus Fintech",
      },
      {
        quote:
          "我们将 45 个服务从云端全数迁移到三台专用服务器上的 Upstand 集群。每月账单直接从 3400 美元降到了 220 美元，期间零事故平稳过渡。",
        author: "Dmitry Vasiliev",
        role: "平台工程师",
        company: "HyperScale Media",
      },
    ],
  },
  faq: {
    badge: "常见问题解答",
    title: "关于 Upstand 的一切技术细节",
    description:
      "有关系统部署、架构设计、集群网络及企业合规的详细技术说明。",
    items: [
      {
        question: "什么是 Upstand？它与 Coolify 或 Portainer 有何不同？",
        answer:
          "Upstand 是一款专为 Docker Swarm 多节点集群量身打造的现代化容器 PaaS 控制面板。与市面上的单机版工具不同，Upstand 原生协调 Manager 与 Worker 节点的高可用共识，采用带预先语法检验的 Caddy 原子重载机制，内置具备人工确认流的自主 AI 智能体，并原生支持 libSQL、PostgreSQL 18 及持久化备份体系。",
        category: "概述",
      },
      {
        question: "Upstand 工作室旗下还有哪些主要产品？",
        answer:
          "除旗舰 Docker Swarm PaaS 控制平台外，Upstand 工作室还打造了 OpenRive（本地优先 Rive 动画编辑器）、AdsParty（Telegram 及开放网络智能广告系统）、Tongo（下一代 Web 创新产品）、dgrunner（自托管 GitHub Actions 调度工具）与 lettersbox（沉浸私密通讯平台）。",
        category: "工作室与生态",
      },
      {
        question: "安装 Upstand 的最低硬件与系统要求是什么？",
        answer:
          "生产环境推荐最低配置为 2 核 CPU、4 GB 内存以及 30 GB 可用磁盘空间。用于评估和测试时，可在 1 核 CPU、2 GB 内存的主机上使用 UPSTAND_ALLOW_UNDERSIZED_HOST=true 环境变量完成部署。",
        category: "安装与部署",
      },
      {
        question: "Upstand 如何保证 Caddy 在热重载时不产生业务停机？",
        answer:
          "每次配置变更生效前，Upstand 都会在独立的隔离沙箱中执行 Caddyfile 语法干跑测试 (Dry-run)。只有确认完全合法后，Caddy 才在进程内直接接管新路由，全程不中断既有 TLS 会话与活动 HTTP/WebSocket 连接。若测试失败则自动保留上一次生效的完好配置。",
        category: "网关与网络",
      },
      {
        question: "能否通过 SSH 接入我自备的远端 Docker 服务器？",
        answer:
          "完全可以。Upstand 采用无 Agent 的轻量级设计。只需提供远程主机的 IP 地址与 SSH 私钥，Upstand 即可自动完成主机初始化、安全接入 Swarm 集群网络，并通过加密隧道托管远程构建与发布任务。",
        category: "多集群扩展",
      },
      {
        question: "UpGal AI 助手如何保障敏感基础设施的操作安全？",
        answer:
          "UpGal 的执行步骤受到严格的 12 步约束。一旦遇到修改容器、销毁数据卷或重置数据库等具有破坏性的写操作，AI 智能体将主动挂起，并在控制面板中向管理员推送交互式审批卡片，未经明确授权决不会自行执行。",
        category: "AI 与安全",
      },
      {
        question: "Upstand 是否完全免费与开源？",
        answer:
          "是的，Upstand 是采用 Apache 2.0 许可证的开源软件，可以完全自由地自托管在您的私有基础设施上，拥有对代码、数据和服务器的 100% 自主控制权。",
        category: "开源与授权",
      },
    ],
  },
  contact: {
    badge: "04 — 带来您的灵感",
    title: "有一个好点子？开启一场深入的对话。",
    description:
      "告诉我们您脑海中挥之不去的想法。即使只是粗略的草图也已足够，其余交给我们来实现。",
    emailLabel: "直达邮箱",
    namePlaceholder: "您的姓名",
    emailPlaceholder: "电子邮箱",
    ideaPlaceholder: "描述您的产品构想或技术挑战...",
    submitButton: "将想法发送给我们",
    successMessage: "非常感谢！我们已收到您的构思，会尽快与您取得联系。",
  },
  cta: {
    badge: "两分钟极速就绪",
    title: "立即掌控专属于您的私有容器云平台",
    description:
      "在干净的 Ubuntu 或 Debian 服务器上运行一行安装命令，立刻拥有功能完整的生产级 Docker Swarm PaaS 控制面板。",
    installNow: "复制安装命令",
    readDocs: "阅读技术文档",
    prerequisites: "系统前置要求：Ubuntu 22.04+ 或 Debian 12+，具备 root 权限。",
  },
  footer: {
    tagline: "我们创造真正值得使用的产品。",
    description:
      "独立产品工作室与 Docker Swarm PaaS 控制平台，专注打造富有温度的开源工具与韧性基础设施。",
    headings: {
      product: "作品与生态",
      resources: "开发者资源",
      community: "伙伴与社区",
      compliance: "企业合规",
    },
    links: {
      docs: "技术文档",
      releases: "版本更新日志",
      swarmGuide: "Swarm 集群指南",
      mcpProtocol: "UpGal MCP 协议",
      github: "GitHub 代码仓库",
      discord: "Discord 开发者社区",
      securityPolicy: "安全策略与双重认证",
      architecture: "系统架构白皮书",
    },
    rights: "© 2026 upstand, inc. 为好奇心而生。保留所有权利。",
    openSourceNotice: "基于 Apache 2.0 许可证的开源软件。",
  },
};
