import { Dictionary } from "../types";

export const ja: Dictionary = {
  seo: {
    title: "Upstand — オープンソースコンテナ基盤＆独立系プロダクトスタジオ",
    description:
      "Docker Swarm と Caddy をベースにしたセルフホスト型コンテナオーケストレーション。自動TLS、マルチノードクラスタリングに対応し、ベンダーロックインを排除。Apache 2.0で完全オープンソース。",
    keywords: [
      "Docker Swarm PaaS",
      "セルフホスト PaaS",
      "オープンソース PaaS",
      "Caddy リバースプロキシ",
      "Upstand スタジオ",
      "Apache 2.0",
    ],
    ogTitle: "Upstand — すべてをデプロイし、すべてを所有する。",
    ogDescription:
      "セルフホスト型コンテナオーケストレーション基盤と独立系スタジオ。ベンダーロックインなしで自社サーバー上で稼働。",
  },
  nav: {
    models: "導入モデル",
    manifesto: "マニフェスト",
    ecosystem: "制作実績",
    capabilities: "機能一覧",
    architecture: "アーキテクチャ",
    compose: "Compose変換器",
    compare: "製品比較",
    partners: "パートナー",
    faq: "FAQ",
    contact: "お問い合わせ",
    docs: "ドキュメント",
    github: "GitHub",
    getStarted: "今すぐ始める",
    language: "言語",
  },
  hero: {
    tag: "オープンソース PaaS ＆ 独立系スタジオ",
    title: "独自のインフラ上ですべてをデプロイする。",
    subtitle:
      "Docker Swarm と Caddy をベースに構築されたセルフホスト型コンテナプラットフォーム。Kubernetesの煩雑さを排除し、マルチノードクラスタ、自動TLS、永続データベースを実現。Apache 2.0の完全オープンソース。",
    quickInstall: "インストールコマンドをコピー",
    copied: "クリップボードにコピーしました",
    exploreDocs: "ドキュメントを見る",
    viewGithub: "GitHubで見る",
    installCommand: "curl -fsSL https://upstand.dev/install.sh | bash",
    clusterPreview: {
      title: "upstand-cluster-01",
      status: "Raft クォーラム 3/3",
      managers: "3基のマネージャー稼働中",
      workers: "6基のワーカー接続中",
      services: "24基のレプリカ稼働中",
      routes: "Caddy 自動TLS (Let's Encrypt)",
    },
  },
  deploymentModels: {
    tag: "01 — 3つの導入形態",
    title: "クラウド、セルフホスト、またはその両方。",
    description:
      "同一のプラットフォームで3つの運用形態 — いつでも自由に移行可能。",
    models: [
      {
        id: "cloud",
        number: "01",
        tag: "マネージド",
        title: "Upstand Cloud",
        lead: "リポジトリからWebアプリやコンテナを直接デプロイ。マネージドコントロールプレーン、自動バックアップ、一元化ログ。",
        points: [
          "マネージドビルドとアプリケーション実行環境",
          "設定不要のHTTPSドメイン自動発行",
          "監査ログの一元化とチーム権限制御",
          "S3互換ストレージへのスケジュールバックアップ",
        ],
        price: "クラウドプラン",
        pricenote: "サーバー管理の手間ゼロ",
      },
      {
        id: "self-hosted",
        number: "02",
        tag: "セルフホスト",
        title: "自社サーバー",
        lead: "自社が保有・契約するマシン上でプラットフォーム全体を実行。Linux VPS（Hetzner、AWS、さくらのVPS）やベアメタルに対応。",
        points: [
          "エージェント不要のSSH接続でサーバー追加",
          "Docker Swarmによるネイティブな複数台クラスタリング",
          "独自デーモンをサーバーに常駐させないクリーン構成",
          "完全なデータ主権とオフライン稼働能力",
        ],
        price: "無料＆オープンソース",
        pricenote: "Apache-2.0 — CPUコア数やノード数の制限なし",
        isFeatured: true,
      },
      {
        id: "hybrid",
        number: "03",
        tag: "ハイブリッド",
        title: "柔軟な組み合わせ",
        lead: "暗号化されたWireGuardメッシュを通じて、クラウドのコントロールプレーンとプライベート基盤を連携。",
        points: [
          "本番データベースは自社サーバー、プレビュー環境はクラウド",
          "設定ファイルを書き換えることなくワークロードを移行",
          "単一のダッシュボードとCLIですべての環境を管理",
          "一元化されたチーム権限とデプロイ履歴",
        ],
        price: "クラウド ＋ 自社サーバー",
        pricenote: "1契約で自社セルフホストサーバー無制限接続",
      },
    ],
    migrateTag: "いつでもスムーズな移行",
    migrateTitle: "クラウド ⇄ 自社サーバー。いつでも1クリック。",
    migrateBody:
      "お客様のアプリケーションは標準的なOCIコンテナであり、Dockerイメージです。Upstand Cloudと自社サーバー間で、再構築や高額な移転費用なしに自由に移動できます。",
  },
  manifesto: {
    badge: "02 — 私たちの哲学",
    title: "インターネットは今も人間的であり続けられると信じています。",
    description:
      "Upstand は、洗練されたツール、堅牢なインフラ、そして丁寧に向き合う価値のあるアイデアを創出する独立系プロダクトスタジオです。",
    subDescription:
      "私たちが欲しかったものを形にしています：開発者のためのオープンソース基盤と、Web全体に向けた専用プロダクト。私たちの仕事は、ソフトウェア、技術的クラフト、そして主権の交差点にあります。",
    point1: {
      title: "安易な便利さよりも確かなクラフト",
      desc: "永続的でクリーンな基盤構造。ダークパターン、過剰な追跡テレメトリ、不必要なロックインを排除。",
    },
    point2: {
      title: "依存よりも自律と主権",
      desc: "インフラ、データ、ツールの真の所有権をあなたへ。オープンスタンダードとコンテナランタイムを支持。",
    },
    point3: {
      title: "見せかけの複雑さよりも明快さ",
      desc: "実践的なエンジニアリング。肥大化したKubernetesの代わりにシンプルなDocker Swarm。5分で理解できる設定。",
    },
  },
  ecosystem: {
    badge: "03 — 我们的作品",
    title: "精心打造的实用工具集。一致的 Upstand 视角。",
    description: "以工匠精神打磨的开源工具、创意平台与开发者基础设施。",
    visitSite: "访问项目",
    projects: [
      {
        id: "upstand-paas",
        number: "01",
        name: "Upstand PaaS",
        tagline: "基于 Docker Swarm 与 Caddy 的自托管容器平台",
        description:
          "多节点集群、动态反向代理、持久化数据库与 AI 辅助运维，绝无厂商锁定。",
        category: "云原生基础设施",
        url: "https://upstand.dev",
        status: "稳定生产环境",
        isFlagship: true,
      },
      {
        id: "openrive",
        number: "02",
        name: "OpenRive",
        tagline: "交互式矢量动画的开源运行时与工具链",
        description:
          "超高性能矢量动画引擎与格式转换器。支持在 Web 和原生平台上运行动态交互动效。",
        category: "创意设计工具",
        url: "https://openrive.upstand.dev",
        status: "公测中",
      },
      {
        id: "adsparty",
        number: "03",
        name: "AdsParty",
        tagline: "尊重隐私的上下文广告与赞助交易协议",
        description:
          "直接且契合上下文的广告交易，不含行为追踪、第三方 Cookie 或侵入式用户画像。",
        category: "Web 协议",
        url: "https://ads.upstand.dev",
        status: "运行中",
      },
      {
        id: "tongo",
        number: "04",
        name: "Tongo",
        tagline: "专为产品团队打造的实时协作画布",
        description:
          "支持无限多人协作的可视化规划画布，适合系统架构图绘制与头脑风暴，支持本地优先同步。",
        category: "团队生产力",
        url: "https://tongo.run",
        status: "抢先体验",
      },
      {
        id: "dgrunner",
        number: "05",
        name: "dgrunner",
        tagline: "基于 MicroVM 的轻量级临时 CI 运行器",
        description:
          "安全可靠的自托管构建运行器，可在 200 毫秒内启动隔离的 MicroVM 沙箱并彻底清理。",
        category: "开发者工具",
        url: "https://https://www.npmjs.com/package/@upstand/dgrunner",
        status: "开源",
      },
      {
        id: "lettersbox",
        number: "06",
        name: "lettersbox",
        tagline: "零追踪的邮件通讯与阅读基础设施",
        description:
          "原生 Markdown 发布与订阅平台，具备加密送达证明，不含任何追踪像素。",
        category: "内容发布",
        url: "https://lettersbox.ir",
        status: "运行中",
      },
    ],
  },
  capabilities: {
    badge: "04 — 平台能力矩阵",
    title: "交付与运行容器化工作负载所需的全部能力。",
    description:
      "构建于久经考验的 Linux 基础之上：Docker Swarm、Caddy、WireGuard 与 PostgreSQL。",
    categories: [
      {
        id: "deploy",
        title: "部署与发布",
        items: [
          {
            name: "Compose 与多服务协同",
            desc: "直接从标准 Docker Compose 文件部署多容器服务栈。",
          },
          {
            name: "Git Push 自动化部署",
            desc: "通过安全 Webhook 在 Git 提交时自动触发构建流水线。",
          },
          {
            name: "零停机即时回滚",
            desc: "秒级回滚到任意历史部署状态，业务连接零中断。",
          },
          {
            name: "多样化构建工具",
            desc: "支持标准 Dockerfile（含 BuildKit 密钥）及 Nixpacks 自动检测。",
          },
        ],
      },
      {
        id: "orchestrate",
        title: "集群编排",
        items: [
          {
            name: "Docker Swarm 原生集群",
            desc: "Docker 引擎内置 Raft 共识机制，无需维护沉重的 etcd。",
          },
          {
            name: "跨节点多机分发",
            desc: "在跨地域的管理与工作节点之间智能调度容器副本。",
          },
          {
            name: "滚动更新无缝切换",
            desc: "配置并发度逐步滚动更新镜像，遇错自动回退。",
          },
          {
            name: "健康检查与故障自愈",
            desc: "节点宕机时自动拉起受损任务并重新分配到健康机器。",
          },
        ],
      },
      {
        id: "route",
        title: "边缘路由",
        items: [
          {
            name: "Caddy 原子化反向代理",
            desc: "内存中预演校验路由配置后再执行重载，确保零断流。",
          },
          {
            name: "Let's Encrypt 自动 TLS",
            desc: "全自动化签发并续期泛域名和子域名的 SSL/TLS 证书。",
          },
          {
            name: "加密 Overlay 网络",
            desc: "利用隔离的 VXLAN 叠加网络及可选 IPsec 保护容器间通信。",
          },
          {
            name: "路径与多域名路由",
            desc: "在统一入口后灵活分发多款应用与微服务流量。",
          },
        ],
      },
      {
        id: "storage",
        title: "持久化存储",
        items: [
          {
            name: "一键部署数据库",
            desc: "开箱即用的 PostgreSQL 18、MySQL、Redis、MongoDB 和 ClickHouse。",
          },
          {
            name: "Docker 卷持久保障",
            desc: "持久挂载本地主机卷与分布式存储驱动，保证数据绝不丢失。",
          },
          {
            name: "自动定时 S3 备份",
            desc: "定时将数据库全量快照推送到 AWS S3、Cloudflare R2 或 MinIO。",
          },
          {
            name: "安全数据迁移工具",
            desc: "事务完整性校验加持下的数据库备份导入与恢复机制。",
          },
        ],
      },
      {
        id: "operate",
        title: "运维与 UpGal 助手",
        items: [
          {
            name: "无代理 SSH 节点扩容",
            desc: "通过标准 SSH 密钥一键纳入新 Linux 服务器，无需额外守护进程。",
          },
          {
            name: "UpGal 智能运维助手",
            desc: "基于 MCP 协议的有界智能代理，自主排查容器日志与集群健康。",
          },
          {
            name: "集中式实时日志",
            desc: "跨所有服务器和容器无缝流式传输标准输出与错误日志。",
          },
          {
            name: "CLI 与完整 REST API",
            desc: "支持通过命令行脚本与权限 Token 实现集群自动化管理。",
          },
        ],
      },
      {
        id: "security",
        title: "企业安全与治理",
        items: [
          {
            name: "企业级 SSO 与 SCIM",
            desc: "支持 Google、GitHub、Okta 以及通用 SAML / OIDC 身份对接。",
          },
          {
            name: "细粒度 RBAC 权限",
            desc: "按所有者、管理员和成员区分资源读写作用域。",
          },
          {
            name: "范围受限 API Token",
            desc: "按项目生成具有精确权限控制的自动化部署密钥。",
          },
          {
            name: "不可篡改审计追踪",
            desc: "完整记录每次部署、回滚、节点加入及配置变更。",
          },
        ],
      },
    ],
  },
  architecture: {
    badge: "05 — 系统架构",
    title: "专为持久可靠的工业级运维设计。",
    description:
      "严格分层的网络拓扑，保障控制平面隔离、加密通信网格与边缘零中断路由。",
    details: {
      step1Title: "客户端与接入层",
      step1Desc:
        "外部流量通过 HTTPS 接入边缘代理，工程师通过 Web 控制台、CLI 或 MCP 助手进行操作。",
      step2Title: "控制平面与元数据库",
      step2Desc:
        "基于 Hono 和 tRPC 的 API 服务协同 PostgreSQL 18，由 BullMQ 驱动异步执行队列。",
      step3Title: "Docker Swarm 服务网格",
      step3Desc:
        "管理节点维持 Raft 共识，并在彼此隔离的 Overlay 专用网络中调度容器工作任务。",
      step4Title: "Caddy 原子化反向代理",
      step4Desc:
        "配置更新前在容器内进行预演检查，确认无误后秒级热重载，杜绝客户端断连。",
    },
  },
  composeTranslator: {
    badge: "06 — Compose 转换器",
    title: "输入标准 Compose，输出生产级 Swarm 部署栈。",
    description:
      "Upstand 将单机 Compose 文件自动翻译为具备健康检查和滚动更新策略的高可用集群配置。",
    composeTab: "docker-compose.yml (单机开发)",
    swarmTab: "swarm-stack.yml (生产集群)",
    featuresList: [
      "自动生成容器副本数与节点亲和性约束",
      "配置具备并发控制的滚动更新参数",
      "节点异常时的工作任务自动恢复策略",
      "无需手写上百行晦涩难懂的 Kubernetes YAML",
    ],
  },
  partners: {
    badge: "07 — 合作伙伴",
    title: "与我们同行的团队、伙伴与益友。",
    description:
      "我们与同样秉持工匠精神、重视系统性能和独立软件开发的优秀团队紧密协作。",
    quote:
      "优秀的工具出自专注的人。我们很荣幸能与推动 Web 前进的先锋团队并肩合作。",
    visitPartner: "访问官网",
    items: [
      {
        number: "01",
        name: "Apex Team",
        role: "战略工程与基础设施合作伙伴",
        description:
          "专注于高并发分布式系统稳定性、边缘网络优化和容器运行时的资深工程团队。",
        url: "https://apexteam.net",
      },
      {
        number: "02",
        name: "Mansora",
        role: "产品设计、数字化战略与架构",
        description:
          "专注于数字化工艺、人性化开发者界面与排版美学的知名设计咨询机构。",
        url: "https://mansora.dev",
      },
    ],
  },
  comparison: {
    badge: "08 — 技术对比",
    title: "客观剖析 Upstand 的独特优势。",
    description: "架构设计、编排模式及资源消耗的真实对比。",
    colFeature: "特性",
    colUpstand: "Upstand",
    colCoolify: "Coolify",
    colPortainer: "Portainer",
    colDokploy: "Dokploy",
    colKubernetes: "Kubernetes",
    rows: [
      {
        feature: "编排引擎",
        upstand: "原生 Docker Swarm",
        coolify: "单机 Docker / 实验性 Swarm",
        portainer: "Docker / K8s 代理",
        dokploy: "单机 Docker / Traefik",
        kubernetes: "Kubelet 控制平面",
        highlight: true,
      },
      {
        feature: "原生多机集群",
        upstand: "内置 Raft 共识",
        coolify: "实验性质 / 主推单机",
        portainer: "每节点需安装专有 Agent",
        dokploy: "仅单机架构为主",
        kubernetes: "内置（配置极度繁琐）",
        highlight: true,
      },
      {
        feature: "反向代理架构",
        upstand: "Caddy 原子化（零断流热重载）",
        coolify: "Traefik",
        portainer: "边缘代理 / 手动配置",
        dokploy: "Traefik",
        kubernetes: "Ingress-NGINX / Envoy",
      },
      {
        feature: "控制面板内存开销",
        upstand: "约 180MB RAM",
        coolify: "约 500MB RAM",
        portainer: "约 150MB RAM",
        dokploy: "约 350MB RAM",
        kubernetes: "主控节点需 >2GB RAM",
        highlight: true,
      },
      {
        feature: "远程服务器纳管",
        upstand: "无代理（标准 SSH 互联）",
        coolify: "SSH 命令执行",
        portainer: "专有 Agent 守护进程",
        dokploy: "SSH 命令执行",
        kubernetes: "每台机器均需安装 Kubelet",
      },
      {
        feature: "AI 智能运维助手",
        upstand: "UpGal（标准 MCP 协议）",
        coolify: "无",
        portainer: "无",
        dokploy: "无",
        kubernetes: "需依赖第三方插件",
      },
      {
        feature: "开源协议",
        upstand: "Apache 2.0（永久免费）",
        coolify: "Apache 2.0",
        portainer: "开源版与商业授权双轨",
        dokploy: "Apache 2.0",
        kubernetes: "Apache 2.0",
      },
    ],
  },
  faq: {
    badge: "09 — 常见问题",
    title: "答疑解惑。",
    description: "关于 Upstand 架构与日常运用的直接技术解答。",
    items: [
      {
        question: "为什么选择 Docker Swarm 而非 Kubernetes？",
        answer:
          "Docker Swarm 原生集成在 Docker 引擎中。它仅需不到 200MB 的内存即可实现多机集群、Raft 共识与加密 Overlay 网络，免去了 Kubernetes 2GB+ 的巨大开销与漫天 YAML 配置文件的困扰。",
      },
      {
        question: "Upstand 如何实现 Caddy 的零停机重载？",
        answer:
          "Upstand 在每次配置更新前均先在沙箱容器内进行试运行检测。确认语法及连通性无误后，才向 Caddy 内部的 JSON API 发送热重载指令。即便配置有误，既有路由也会毫发无损地持续提供服务。",
      },
      {
        question: "能否纳管来自不同云厂商的异构服务器？",
        answer:
          "完全可以。Upstand 通过无代理 SSH 将各个节点安全接入 WireGuard 或 Swarm 叠加网格。您可以轻松将 Hetzner 裸金属、阿里云 ECS 与 AWS 实例聚合为统一管理集群。",
      },
      {
        question: "Upstand 商业使用是否免费？",
        answer:
          "完全免费。Upstand 在 Apache 2.0 协议下完全开源。您可以在生产环境中自托管运行，不限服务器数量、不限容器副本，无需支付任何授权费用。",
      },
      {
        question: "跨节点的数据库持久化数据如何保障？",
        answer:
          "数据库通过 Swarm 亲和性规则固定绑定到指定节点的主机挂载卷上，同时支持将全量数据自动定时备份至第三方 S3 存储桶，保障灾备无忧。",
      },
      {
        question: "能否从 Coolify、Dokploy 或既有 Compose 文件迁移？",
        answer:
          "当然可以。Upstand 原生解析标准 Docker Compose 语法，并能直接将其翻译成高可用 Swarm 服务栈，点击即可快速导入。",
      },
    ],
  },
  contact: {
    badge: "10 — 提出构想",
    title: "与我们的工程团队展开对话。",
    description:
      "无论您是在规划基础设施迁移、构建生态扩展，还是探讨开源协作，我们都非常期待与您交流。",
    namePlaceholder: "您的姓名",
    emailPlaceholder: "name@company.com",
    ideaPlaceholder: "请简述您的基础设施现状或合作想法...",
    budgetLabel: "预计项目规模",
    submitButton: "发送咨询",
    submitting: "正在发送...",
    successMessage:
      "感谢您的来信！我们已收到您的咨询，团队将尽快与您取得联系。",
    directEmailNotice: "您也可以直接通过邮件与我们取得联系：",
  },
  cta: {
    tag: "开源承诺",
    title: "由您掌控、自由运行、永久独立。",
    description:
      "今天即可在您自己的基础设施上部署 Upstand。基于 Apache 2.0 永久自由、开源。",
    installNow: "执行安装命令",
    readDocs: "查阅完整文档",
    licenseNotice: "Apache 2.0 协议 · 零隐私追踪 · 100% 支持自托管",
  },
  footer: {
    description: "独立产品工作室与容器编排平台。我们只做真正值得使用的软件。",
    headings: {
      platform: "平台",
      studio: "工作室",
      resources: "资源",
      legal: "法律",
    },
    links: {
      models: "部署模式",
      capabilities: "功能矩阵",
      architecture: "系统架构",
      manifesto: "工作室宣言",
      ecosystem: "作品集",
      partners: "合作伙伴",
      docs: "官方文档",
      github: "GitHub 代码仓",
      license: "Apache 2.0 协议",
      privacy: "隐私政策",
    },
    rights: "Upstand 平台版权所有。",
  },
};
