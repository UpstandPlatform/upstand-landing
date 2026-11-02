# Upstand.dev — Modern Container PaaS Landing Platform

A full, world-class redesign of the [Upstand](https://upstand.dev) landing website, engineered with **Next.js 16 App Router**, **React 19**, **Tailwind CSS v4**, and comprehensive **Internationalization (i18n)**, **SEO**, **AEO (Answer Engine Optimization)**, and **GEO (Generative Engine Optimization)**.

---

## 🌟 Key Features

### 1. 🌍 Comprehensive Internationalization (i18n)
Full native localization support for all primary languages, with bidirectional layout handling:
- **English (`en`)**: LTR (Default)
- **Persian / فارسی (`fa`)**: Native RTL with Iranian/Persian typography and bidirectional layout
- **Chinese Simplified / 简体中文 (`zh`)**: LTR
- **Russian / Русский (`ru`)**: LTR
- **French / Français (`fr`)**: LTR
- **Hindi / हिन्दी (`hi`)**: LTR
- **German / Deutsch (`de`)**: LTR
- **Spanish / Español (`es`)**: LTR
- **Arabic / العربية (`ar`)**: Native RTL
- **Japanese / 日本語 (`ja`)**: LTR

Each language includes complete dictionary translations covering the navigation, hero, interactive terminal, core capabilities, architecture flow, compose translator, competitor comparison, TCO cost calculator, testimonials, technical FAQ, CTA banners, and footer.

### 2. 🔍 SEO, AEO & GEO Optimizations
- **Search Engine Optimization (SEO)**:
  - Dynamic localized metadata with custom titles, descriptions, OpenGraph cards, and Twitter Cards per locale.
  - Multi-language XML Sitemap (`/sitemap.xml`) generated dynamically with `xhtml:link` alternate `hreflang` tags.
  - Search crawler directives via `/robots.txt` configured for Googlebot, Bingbot, PerplexityBot, ClaudeBot, GPTBot, and Applebot.
- **Answer Engine Optimization (AEO)**:
  - Rich JSON-LD Schemas embedded in the document head:
    - `SoftwareApplication`: Rating, OS compatibility, features, license.
    - `Organization`: Identity, logo, social links.
    - `FAQPage`: Structured Q&A items indexed for Google AI Overviews and rich snippets.
    - `HowTo`: Step-by-step production installer guide.
  - Concise definition-first technical blocks answering high-intent developer queries.
- **Generative Engine Optimization (GEO)**:
  - Standardized `/llms.txt` and `/llms-full.txt` files directly served for LLM search engines (Perplexity, ChatGPT Search, Claude, Gemini).
  - High information density with zero fluff, concrete commands, and verifiable architectural facts.

### 3. 🎨 Authentic Brand Identity & Assets
- Vector brand icons and logos extracted directly from the official repository:
  - `/brand/icon.svg` & `/brand/logo.svg`
  - High-res PNG & SVG favicons: `/favicon.ico`, `/favicon/favicon.svg`, `/favicon/favicon-96x96.png`, `/favicon/apple-touch-icon.png`
  - Web App Manifest: `/site.webmanifest`
  - Architectural screenshots & illustrations: `/images/dashboard_hero.png`, `/images/terminal_view.png`
- Color palette based on Upstand's electric PaaS blue (`#0068ff`), slate dark mode surfaces (`#070a12`, `#0b101d`), cyan accents (`#38bdf8`), and emerald status glows (`#10b981`).

### 4. ⚡ Interactive Landing Components
- **Interactive Terminal Preview**: 4 live simulated tabs (Quick Install Bash, docker-compose.yml, Swarm Stack, UpGal AI Agent with human approval prompts).
- **Architecture Visualizer**: Step-by-step interactive breakdown of the decoupled control plane, worker node task queues, and atomic Caddy proxy.
- **Docker Compose to Swarm Stack Translator**: Live code preview demonstrating automatic collision-safe volume naming and rolling update policies.
- **Feature Matrix Comparison**: Objective comparison between Upstand, Coolify, Portainer, Dokploy, and Kubernetes.
- **Interactive TCO Calculator**: Real-time sliders for server nodes, applications, and database instances calculating annual cloud savings.
- **Technical FAQ**: Accordion with searchable answers for common migration and configuration questions.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16.4 (App Router, Turbopack, Cache Components)
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React + Custom Brand SVGs
- **Edge Routing**: Next.js Edge Proxy (`src/proxy.ts`)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ (Node 25 tested)
- pnpm 9+ or Bun 1.4+

### Installation & Run

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build optimized production bundle
pnpm build

# Run production server
pnpm start
```

Visit [http://localhost:3000](http://localhost:3000) to view the website.
