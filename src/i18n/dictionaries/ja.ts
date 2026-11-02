import { Dictionary } from "../types";

export const ja: Dictionary = {
  seo: {
    title: "Upstand | コンテナファースト・セルフホスト型 Docker Swarm PaaS 統合管理プレーン",
    description:
      "Docker Swarm ノードのオーケストレーション、Git からのアプリ＆永続DBデプロイ、ダウンタイムゼロの Caddy アトミックリロード、自律型 AI アシスタント UpGal を単一画面で提供。",
    keywords: [
      "Docker Swarm PaaS",
      "セルフホスト PaaS",
      "コンテナ統合管理",
      "Upstand",
      "Caddy リバースプロキシ",
      "UpGal AI アシスタント",
      "PostgreSQL 運用",
      "libSQL ホスティング",
      "Docker Swarm クラスタリング",
      "Coolify Portainer 代替",
    ],
    ogTitle: "Upstand — 現代的なコンテナ＆クラスタ統合管理コントロールプレーン",
    ogDescription:
      "ベアメタルおよびクラウドサーバー上で、アトミックな Caddy リロードと承認フロー付き自律 AI エージェントを備えた Swarm クラスタを構築。",
  },
  nav: {
    features: "主な機能",
    architecture: "アーキテクチャ",
    databases: "永続データベース",
    upgal: "UpGal AI",
    compare: "他社比較",
    calculator: "コスト試算",
    faq: "よくある質問",
    docs: "ドキュメント",
    github: "GitHub",
    getStarted: "Upstand を導入",
    language: "言語",
    theme: "テーマ",
  },
  hero: {
    badge: "オープンソース PaaS コントロールプレーン v0.14",
    titleStart: "本番コンテナ環境の",
    titleHighlight: "Docker Swarm ワークロード",
    titleEnd: "を完全な透明性でオーケストレーション",
    description:
      "専用サーバーやクラウドインスタンスを高可用性 Docker Swarm クラスタへ変革する、開発者ファーストのセルフホスト型コントロールプレーン。Git からの直接ビルド、永続ボリューム付き DB、瞬断ゼロの Caddy アトミックリロード、人間の承認を重視する UpGal AI アシスタントを統合。",
    quickInstall: "クイックインストール",
    copied: "コマンドをコピーしました！",
    copyCommand: "コマンドをコピー",
    exploreDocs: "公式ドキュメント",
    viewGithub: "GitHub を表示",
    starsBadge: "2,400+ スター",
    tabInstall: "クイックインストール (Bash)",
    tabCompose: "docker-compose.yml",
    tabSwarm: "Swarm サービス仕様",
    tabUpGal: "UpGal AI エージェント",
    statusHealthy: "全 12 台の Swarm ノードが正常稼働中",
    statusReady: "ダウンタイムゼロのローリングデプロイ待機完了",
  },
  stats: {
    uptimeValue: "99.99%",
    uptimeLabel: "クラスタオーケストレーション稼働率",
    speedValue: "10倍",
    speedLabel: "手動 SSH デプロイと比較した速度向上",
    caddyValue: "0 ms",
    caddyLabel: "Caddy 動的リロードによるサービス停止時間",
    sovereigntyValue: "100%",
    sovereigntyLabel: "自社インフラによる完全なデータ主権",
  },
  features: {
    badge: "主要機能",
    title: "本番環境でコンテナを安定運用するために必要なすべて",
    description:
      "複雑なシェルスクリプトや手動でのリバースプロキシ編集はもう不要です。Upstand はマルチノード運用、データベース、AI オペレーションを洗練された 1 つのコンソールに統合します。",
    items: {
      swarm: {
        title: "Docker Swarm マルチノードクラスタリング",
        desc: "暗号化されたオーバーレイネットワーク上で Manager と Worker ノードを安全に接続。トークン自動更新、メンテ時の安全なドレイン、スプリットブレインを防ぐ Raft 合意を担保。",
        tag: "クラスタ管理",
      },
      databases: {
        title: "ネイティブ永続データベースエンジン",
        desc: "PostgreSQL 18、MySQL、MariaDB、MongoDB、Redis、libSQL (sqld) を 1 クリック構築。永続ボリューム、暗号化パスワード生成、rclone による S3 自動バックアップを完備。",
        tag: "ステートフルストレージ",
      },
      caddy: {
        title: "アトミック Caddy プロキシ & 自動 TLS",
        desc: "すべてのルーティング更新は隔離コンテナで文法を事前検証。Let's Encrypt 自動証明書、Forward 認証、接続中の TCP セッションを切断しない完全無停止リロード。",
        tag: "エッジルーティング",
      },
      upgal: {
        title: "自律型 AI コパイロット UpGal",
        desc: "厳格な 12 ステップ制約と破壊的操作に対する人間承認フローを備えた ToolLoopAgent。クラスタ状態の診断、オートスケール、Model Context Protocol (MCP) をサポート。",
        tag: "AI オペレーション",
      },
      remoteServers: {
        title: "エージェント不要の SSH リモート構築",
        desc: "SSH 秘密鍵を登録するだけで任意の Linux サーバーを追加可能。Upstand が Docker を自動導入し、Swarm に組み込み、暗号化トンネル上で安全なビルドキューを起動します。",
        tag: "クラウド基盤",
      },
      security: {
        title: "エンタープライズ SSO、SCIM 2.0 & Web SSH",
        desc: "SAML 2.0、OIDC、SCIM 2.0 ユーザーディレクトリ自動同期、DNS TXT ドメイン所有権確認、グローバルオーナー限定の Web SSH ターミナルを標準搭載。",
        tag: "企業セキュリティ",
      },
    },
  },
  architecture: {
    badge: "システム設計",
    title: "堅牢性、セキュリティ、完全な分離性を追求",
    description:
      "コントロールプレーンは業務ワークロードから完全に隔離されています。UI は Hono/tRPC サーバーと通信し、ビルドは独立した BullMQ キューで処理され、Caddy が瞬断なくルーティングします。",
    clientLayer: "クライアントブラウザ & MCP AI エージェント",
    controlPlaneLayer: "Upstand コントロールプレーン (Hono, tRPC, PostgreSQL, Redis)",
    workerNodesLayer: "Docker Swarm クラスタ & 各ノード独立キュー",
    caddyEdgeLayer: "自動ロールバック機構付き Caddy 動的エッジプロキシ",
    details: {
      step1Title: "1. ワークロード定義の発行",
      step1Desc: "開発者が Git コミットまたは Web UI、CLI、UpGal から Compose を送信します。",
      step2Title: "2. キューの直列化と BuildKit",
      step2Desc: "対象ノードのキューが Dockerfile、Railpack、Nixpacks を用いて隔離ビルドを実行。",
      step3Title: "3. Swarm ローリングアップデート",
      step3Desc: "Swarm がヘルスチェックを行いながらコンテナを順次更新し、障害時は即時自動ロールバック。",
      step4Title: "4. Caddy のメモリ内ホットリロード",
      step4Desc: "Caddy が事前検証済みの新ルールをメモリ内でアトミック適用し、既存接続を維持します。",
    },
  },
  composeTranslator: {
    badge: "スマート変換エンジン",
    title: "標準 Docker Compose から高可用性 Swarm Stack への自動変換",
    description:
      "普段の docker-compose.yml を貼り付けるだけ。Upstand がポート、再起動ポリシー、ネットワーク設定を Swarm のレプリカ分散、ロールバック閾値、オーバーレイネットワークへ自動変換します。",
    composeTab: "通常の docker-compose.yml",
    swarmTab: "Upstand Swarm Stack 変換結果",
    featuresList: [
      "ボリュームやネットワーク名の衝突を防ぐプレフィックス自動付与",
      "restart: always を指数バックオフ付き deploy.restart_policy に自動置換",
      "ローリングアップデートの並列度と失敗判定遅延パラメータを適正設定",
      "環境変数と Docker シークレットの安全な暗号化インジェクション",
    ],
  },
  comparison: {
    badge: "公平な比較",
    title: "Upstand と他の PaaS・コンテナツールの違い",
    description:
      "Kubernetes の過剰な複雑さに悩まされることなく、マルチノード Swarm の高可用性を手に入れたい開発チームのために設計されています。",
    colFeature: "機能・特性",
    colUpstand: "Upstand",
    colCoolify: "Coolify",
    colPortainer: "Portainer",
    colDokploy: "Dokploy",
    colKubernetes: "Kubernetes (K8s)",
    rows: [
      {
        feature: "マルチノード Swarm クラスタ",
        upstand: "標準対応 + Raft 合意",
        coolify: "単一サーバー中心 / SSH 遠隔",
        portainer: "対応 (UI が極めて複雑)",
        dokploy: "単一ノード Swarm のみ",
        kubernetes: "標準対応 (運用負荷が極大)",
        highlight: true,
      },
      {
        feature: "動的リバースプロキシ",
        upstand: "アトミック Caddy (事前検証付き)",
        coolify: "Traefik",
        portainer: "手動設定 / Nginx",
        dokploy: "Traefik",
        kubernetes: "Ingress Controller",
      },
      {
        feature: "人間承認付き AI コパイロット",
        upstand: "UpGal (承認カード & MCP 連携)",
        coolify: "AI 機能なし",
        portainer: "AI 機能なし",
        dokploy: "AI 機能なし",
        kubernetes: "サードパーティ拡張が必要",
        highlight: true,
      },
      {
        feature: "最新データベース & libSQL",
        upstand: "Postgres 18, MySQL, Mongo, libSQL",
        coolify: "一般的な DB",
        portainer: "手動テンプレート",
        dokploy: "一般的な DB",
        kubernetes: "複雑な Operator 構築が必要",
      },
      {
        feature: "エンタープライズ SSO & SCIM 2.0",
        upstand: "OIDC, SAML 2.0 & SCIM 標準搭載",
        coolify: "Cloud 有料版のみ",
        portainer: "高価な Business Edition のみ",
        dokploy: "基本ログインのみ",
        kubernetes: "Dex / Keycloak 等の自作が必要",
        highlight: true,
      },
      {
        feature: "コントロールプレーン メモリ消費",
        upstand: "超軽量 (~400MB RAM)",
        coolify: "中程度 (~1GB RAM)",
        portainer: "軽量 (~250MB RAM)",
        dokploy: "中程度 (~800MB RAM)",
        kubernetes: "極めて重い (ノード毎 2GB+)",
      },
    ],
  },
  calculator: {
    badge: "コスト削減",
    title: "自社インフラ導入による年間コスト削減を試算",
    description:
      "クラウド PaaS はコンピュート、通信、マネージド DB に莫大なマージンを上乗せしています。Upstand を自社専用機で動かした場合の差額を確認してください。",
    nodesLabel: "サーバーノード台数",
    appsLabel: "稼働アプリケーション数",
    dbsLabel: "データベースインスタンス数",
    estimatedCloudCost: "AWS / クラウド PaaS 想定月額コスト",
    upstandCost: "Upstand 自社専用サーバー想定月額コスト",
    savingsPerYear: "年間削減見込み額",
    savingsNote:
      "AWS ECS / RDS と、Hetzner / OVH 等の同等スペック専用ベアメタルサーバーの利用料比較に基づきます。",
  },
  testimonials: {
    badge: "利用者の声",
    title: "本番環境を支える DevOps エンジニアからの高評価",
    description:
      "実際に Upstand でコンテナ基盤を運用しているエンジニアチームの体験談です。",
    items: [
      {
        quote:
          "Upstand のおかげで Kubernetes 専任を採用することなく Swarm の耐障害性を手に入れることができました。Caddy のアトミックリロードにより、デプロイ時の 502 エラーが完全にゼロになりました。",
        author: "Alexandre Moreau",
        role: "リード DevOps アーキテクト",
        company: "Vektor Labs",
      },
      {
        quote:
          "UpGal AI はセキュリティの境界を真に尊重してくれる最初の AI アシスタントです。画面に表示される明示的な承認カードのおかげで、本番 DB の誤削除が絶対に起きません。",
        author: "Sarah Chen",
        role: "インフラ責任者",
        company: "Nexus Fintech",
      },
      {
        quote:
          "45 のマイクロサービスをクラウドから 3 台の専用サーバーへ移行しました。月々のインフラ請求は 3,400 ドルから 220 ドルへ激減し、ダウンタイムは 1 秒も発生していません。",
        author: "Dmitry Vasiliev",
        role: "プラットフォームエンジニア",
        company: "HyperScale Media",
      },
    ],
  },
  faq: {
    badge: "よくあるご質問",
    title: "Upstand に関する技術的な疑問にお答えします",
    description:
      "導入、アーキテクチャ、Swarm ネットワーク、セキュリティに関する明快な回答です。",
    items: [
      {
        question: "Upstand とは？ Coolify や Portainer と何が違いますか？",
        answer:
          "Upstand は Docker Swarm マルチノードクラスタのために専用設計されたコンテナ PaaS コントロールプレーンです。単一サーバー向けの PaaS と異なり、Raft 合意による高可用性クラスタ運用、事前テスト付き Caddy アトミックリロード、人間承認付き AI エージェント、そして libSQL や PostgreSQL 18 のネイティブ構築を標準サポートしています。",
        category: "概要",
      },
      {
        question: "Upstand をインストールするための最小スペックは？",
        answer:
          "本番環境では 2 vCPU コア、4 GB RAM、30 GB の空きストレージを推奨します。テストや検証目的であれば、環境変数 UPSTAND_ALLOW_UNDERSIZED_HOST=true を指定することで 1 vCPU、2 GB RAM の軽量サーバーでも起動可能です。",
        category: "インストール",
      },
      {
        question: "Caddy のリロード時にダウンタイムが起きない仕組みは？",
        answer:
          "ルーティング変更を適用する前に、Upstand は隔離されたテストコンテナ内で Caddyfile の構文を事前検証します。合格した場合のみ、Caddy が稼働中の TCP セッションや WebSocket を切断することなくメモリ内でアトミックに適用します。",
        category: "ネットワーク",
      },
      {
        question: "SSH 経由で外部の Docker サーバーを追加できますか？",
        answer:
          "はい、エージェント不要で追加可能です。IP アドレスと SSH 秘密鍵を指定するだけで、Upstand が Docker をセットアップし、Swarm ネットワークへ安全に接続して暗号化トンネル越しにビルドタスクを割り当てます。",
        category: "クラスタ管理",
      },
      {
        question: "UpGal AI はどのようにインフラの安全性を担保しますか？",
        answer:
          "UpGal は厳格な 12 ステップの実行ループ内で動作します。サービスの停止やボリュームの削除など、状態を変更する操作を検知すると自動的に一時停止し、ダッシュボード上に確認カードを表示して管理者の明示的な承認を要求します。",
        category: "AI & セキュリティ",
      },
      {
        question: "Upstand は完全に無料かつオープンソースですか？",
        answer:
          "はい、Upstand は Apache 2.0 ライセンスに基づくオープンソースソフトウェアであり、自社インフラ上で完全無料でセルフホストできます。テレメトリによる情報収集もなく、100% データを自社で掌握できます。",
        category: "ライセンス",
      },
    ],
  },
  cta: {
    badge: "わずか 2 分で導入完了",
    title: "自社専用のコンテナクラウド環境を今すぐ手に入れましょう",
    description:
      "クリーンな Ubuntu または Debian サーバー上でワンライナーを実行するだけで、本番仕様の Docker Swarm PaaS が即座に稼働します。",
    installNow: "インストールコマンドを実行",
    readDocs: "ドキュメントを確認",
    prerequisites: "前提条件: Ubuntu 22.04+ または Debian 12+ (root 権限必須)",
  },
  footer: {
    tagline: "現代的なコンテナファースト統合コントロールプレーン",
    description:
      "Docker Swarm 向けセルフホスト PaaS、マルチノード自動クラスタリング、Caddy 動的ルーティング、AI 支援オペレーション基盤。",
    headings: {
      product: "プロダクト",
      resources: "リソース",
      community: "コミュニティ",
      compliance: "企業情報",
    },
    links: {
      docs: "公式ドキュメント",
      releases: "リリースノート",
      swarmGuide: "Swarm クラスタガイド",
      mcpProtocol: "UpGal MCP プロトコル",
      github: "GitHub リポジトリ",
      discord: "Discord コミュニティ",
      securityPolicy: "セキュリティ & 2FA",
      architecture: "システム構成白書",
    },
    rights: "All rights reserved. Upstand Platform.",
    openSourceNotice: "Apache 2.0 ライセンスに基づくオープンソースソフトウェアです。",
  },
};
