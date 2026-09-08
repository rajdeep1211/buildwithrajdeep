# BuildWithRajdeep 🚀

> **"Software Engineer building AI systems, solving real-world problems, and bringing ideas and people together."**

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![pnpm](https://img.shields.io/badge/pnpm-9.x-F69220?style=flat-square&logo=pnpm)](https://pnpm.io/)
[![Status](https://img.shields.io/badge/Build-Passing-brightgreen?style=flat-square)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

---

## 🌟 Overview

**BuildWithRajdeep** is the personal portfolio and engineering platform of **Rajdeep Bakliwal**. Designed as much more than an online resume, it serves as a central digital ecosystem that unifies software engineering depth, applied AI systems, live developer telemetry, enterprise client work, academic credentials, and community initiatives into a high-performance, responsive experience.

### Core Philosophy
> **"The website presents the work; the repository preserves the work."**

The repository functions as the project's external memory. Every architectural choice, design guideline, and implementation step is maintained with complete transparency and engineering discipline.

---

## 🧭 Live Pages & Key Features

### 1. Homepage (`/`)
* **Hero Experience:** Dynamic headline framing, tactile call-to-actions, and an interactive developer terminal window featuring a desert/mountain landscape silhouette with live system telemetry.
* **Interactive Capabilities Matrix:** Six core discipline cards (AI Systems, Software Engineering, Full-Stack Development, AI/ML Engineering, Product Building, Community Leadership) engineered with **3D cursor tilt**, light specular reflections, surface noise grain, and a smooth 350ms dark hover inversion.
* **Tactile Navigation:** Floating neumorphic navigation dock with quick page transitions and back-to-top micro-interactions.

### 2. Education & Credentials (`/education`)
* **Academic History:**
  * **Bachelor of Technology in Computer and Communication Engineering** — *Manipal University Jaipur* (2022 — 2025). Specializing in Artificial Intelligence, Machine Learning, Computer Networks, and Systems Architecture.
  * **Higher Secondary Certificate (Class XII)** — *Yeshwantrao Chavan College* (2021 — 2022). PCMB + Information Technology.
* **Leadership & Awards:** Event Head for IEEE Aerospace & Electronic Systems Society (AESS) and Smart India Hackathon (SIH) campus round winner.
* **10 Verified Certifications:** CCNA Switching, Routing & Wireless Essentials, CCNA Introduction to Networks, Foundations of Data Science, Introduction to Generative AI, AI for Everyone, Software Engineering UML, Algorithmic Toolbox, Symmetric Cryptography, and Fashion & Luxury Management.
* **Credential Cards:** Tactile 3D perspective cards with certificate ID watermarks, issuing organization details, embedded PDF previews, and direct verification links.

### 3. Projects Showcase (`/projects`)
Presented in an editorial card aesthetic with chocolate Brownie gradients (`#472319` via `#5E3023`), Caramel accents, dual-layer drop shadows, and live links:
* **[DrawTogether](https://collaborative-canvas-36g9.onrender.com/) (Full-Stack Web Application):** Real-time multi-user collaborative canvas built with React.js, WebSockets, HTML5 Canvas, and Tailwind CSS.
* **[Uniform Shop ERP & POS System](https://github.com/rajdeep1211/uniform-shop-erp) (Enterprise Software):** Full-stack retail management platform featuring live inventory tracking, thermal barcode printing, supplier purchase automation, and billing workflows.
* **AI-Powered System Platform (AI Systems & LLMs):** Autonomous AI system featuring intelligent retrieval pipelines (RAG), multi-agent orchestration, streaming APIs, and Docker containerization.
* **Algorithmic Problem-Solving Engine (Algorithms & DSA):** Comprehensive suite of 380+ optimized algorithmic solutions spanning graph theory, dynamic programming, trees, and system design.

### 4. Engineering Activity & Dashboards (`/experience`)
* **Live LeetCode Telemetry Dashboard (`@rajdeep_jain`):**
  * Real-time metrics: 385+ problems solved, streak tracking, acceptance rate, and global ranking.
  * Composite difficulty breakdown bar (Easy, Medium, Hard distribution).
  * 32-week interactive question activity heatmap with 5-tier intensity progression and tooltips.
* **Live GitHub Developer Dashboard (`@rajdeep1211`):**
  * Verified telemetry: 1,200+ contributions, streak tracking, and public repository counts.
  * 52-week activity calendar with month labels, day-of-week axis, and interactive hover cards.
* **Four Full-Width Editorial Experience Accordions:**
  * **Internship:** Tech Support Intern at *ERA Nexus International School* (IT operations, school website development, and systems troubleshooting).
  * **Micro Internships:** Clean active engineering pipeline.
  * **Volunteering & Leadership:** Senior Event Head at *PHI Research Club*, Event Head at *IEEE AESS*, and Founder & Community Builder at *Social Life* ([Instagram](https://www.instagram.com/sociallife.in/)).
  * **Freelancing:** Production ERP client implementation with direct collaboration CTAs.

### 5. Interactive Developer Contact Console (`/contact`)
* **Locked 8-Step Communication Flow:** Hero intro, active availability focus tags (`● Currently Open`), verified channels, interactive developer console, capability cards, creative connection status indicator, personal closing note, and minimal footer.
* **Interactive 3D Terminal Contact Form:** Terminal window with macOS controls (`#E06C55`, `#E5A93C`, `#6BB377`), `rajdeep@portfolio: ~ %` prompt, `$ ./start-conversation` execution header, blinking cursors, dynamic input focus highlights, and simulated terminal dispatch receipts.
* **Quick Connect Actions:** 1-click clipboard copy for email (`rajdeep.bakliwal1211@gmail.com`), Jaipur location map trigger, and direct social dock.

---

## 🛠️ Architecture & Tech Stack

```text
Visitor Browser
      │
      ▼
Next.js 14 App Router (React 18 + TypeScript)
      │
      ├── UI Layer: Tailwind CSS (Cream, Caramel, Brownie, Coffee Palette)
      ├── 3D Interaction: Native CSS 3D Transforms & Pointer Physics (Zero Bloat)
      └── Telemetry Proxy & Caching Layer (Next.js Route Handlers)
               │
               ├── /api/github ─── In-Memory Cache (60s TTL) ───► GitHub REST & Contribution API
               └── /api/leetcode ── In-Memory Cache (60s TTL) ───► LeetCode GraphQL API
```

| Layer | Technologies | Purpose |
|---|---|---|
| **Framework** | Next.js 14.2 (App Router) | Hybrid static pre-rendering & dynamic edge execution |
| **Language** | TypeScript 5.6 | Strict type-safety across components and data layers |
| **Styling** | Tailwind CSS 3.4 + PostCSS | Custom design tokens, tactile neumorphic shadows, responsive layouts |
| **State & Interactivity** | React 18.3 (Hooks & Native State) | 60 FPS lightweight physical tilt, accordion transitions, tab state |
| **API & Caching** | Next.js Route Handlers (`force-dynamic`) | Server-side API proxying, DNS IPv4 resolution, and in-memory TTL caching with `stale-while-revalidate` |
| **Package Manager** | pnpm 9.x | Fast, deterministic, space-efficient dependency management |
| **Code Quality** | ESLint + TypeScript Compiler | Continuous linting and type verification |
| **Deployment** | Vercel | Global edge CDN, zero-config builds, and serverless route handling |

---

## 🎨 Design System

The portfolio features a warm, editorial, and tactile visual identity centered around natural coffee and bakery tones:

| Token | Hex | Role |
|---|---|---|
| **`cream-light`** | `#FAF5EE` | Crisp card highlights, badges, and code snippets |
| **`cream`** | `#F3E9DC` | Primary canvas and page background |
| **`cream-dark`** | `#E8DBC9` | Subtle borders and elevated surfaces |
| **`caramel`** | `#C08552` | Accent buttons, active indicators, borders, and hover states |
| **`coffee`** | `#895737` | Secondary text, subheadings, and metadata pills |
| **`brownie`** | `#5E3023` | Primary body typography, high-contrast headings, and dark hero cards |
| **`brownie-dark`**| `#472319` | Terminal backgrounds and deep gradient anchors |

### Zero-Bloat Motion
Instead of adding heavy 3D rendering engines (such as Three.js or Babylon.js), all 3D tilt effects, cursor tracking, and specular reflections are implemented using pure mathematical calculations mapped to CSS `perspective` and `rotate3d` transforms. This ensures instant load times and optimal mobile performance.

---

## 📁 Repository Structure

```text
buildwithrajdeep/
├── AGENTS.md                  # Autonomous agent workflow, principles & handoff rules
├── CHANGELOG.md               # Version changelog
├── README.md                  # Project overview, architecture & setup guide
├── package.json               # Scripts and dependencies
├── pnpm-lock.yaml             # Strict dependency lockfile
├── tailwind.config.ts         # Custom palette, typography & theme extensions
├── tsconfig.json              # TypeScript compiler configuration
│
├── docs/                      # Project External Memory & Living Documentation
│   ├── PRD.md                 # Product Requirements Document & positioning strategy
│   ├── ARCHITECTURE.md        # Technical architecture, component layout & data flow
│   ├── DESIGN.md              # Visual language, typography, and motion principles
│   ├── RULES.md               # Core engineering principles & Value-First rule
│   ├── PHASES.md              # Execution roadmap and phase exit criteria
│   └── WORKLOG.md             # Chronological work history and active task state
│
├── public/                    # Static Assets
│   ├── certificates/          # 10 verified academic and professional certification PDFs
│   └── projects/              # High-resolution screenshots and project mockups
│
└── src/
    ├── app/                   # Next.js App Router (8 routes)
    │   ├── layout.tsx         # Global RootLayout (Navbar + metadata + background)
    │   ├── page.tsx           # Homepage (`/`)
    │   ├── education/         # Education & Certifications (`/education`)
    │   ├── projects/          # Featured Projects (`/projects`)
    │   ├── experience/        # Live Dashboards & Experience Accordions (`/experience`)
    │   ├── contact/           # Contact Console & 3D Terminal Form (`/contact`)
    │   ├── globals.css        # Custom scrollbars, animations & Tailwind imports
    │   └── api/               # Server-side API Proxy Endpoints
    │       ├── github/        # In-memory cached GitHub contributions proxy
    │       └── leetcode/      # In-memory cached LeetCode GraphQL proxy
    │
    ├── components/            # Reusable UI Components
    │   ├── Navbar.tsx         # Responsive floating navigation bar
    │   ├── InteractiveCapabilityCard.tsx     # 3D tilt card with specular highlights
    │   ├── InteractiveCertificationCard.tsx  # Credential card with PDF modal
    │   └── experience/
    │       ├── LeetCodeDashboard.tsx         # LeetCode activity dashboard
    │       ├── GitHubDashboard.tsx           # GitHub activity dashboard
    │       └── ExperienceAccordion.tsx       # 4-tier editorial experience accordions
    │
    └── data/
        └── experienceData.ts  # Decoupled data models for LeetCode, GitHub & Experience
```

---

## 🧠 Project Memory & Agent System

This repository follows a strict **Project Memory** architecture specified in [`AGENTS.md`](./AGENTS.md). Any AI agent or developer joining the project can reconstruct the complete context through the canonical docs:

* **[`docs/WORKLOG.md`](./docs/WORKLOG.md):** The single source of truth for the project's current state, completed scopes, and verified work history.
* **[`docs/RULES.md`](./docs/RULES.md):** Defines the **Value-First Rule** (*Keep → Simplify → Remove*), accessibility standards, and definition of done.
* **[`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md):** Technical structure and data separation rules.
* **[`docs/PHASES.md`](./docs/PHASES.md):** Roadmap tracking from Phase 0 (Foundation) to Launch.
* **[`docs/PRD.md`](./docs/PRD.md):** Product requirements, audience personas, and positioning goals.
* **[`docs/DESIGN.md`](./docs/DESIGN.md):** Color tokens, typographic hierarchy, and interaction mechanics.

---

## 🚀 Getting Started

### Prerequisites
* **Node.js:** `v18.17.0` or higher
* **pnpm:** `v9.0.0` or higher (`npm install -g pnpm`)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rajdeep1211/buildwithrajdeep.git
   cd buildwithrajdeep
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Start the development server:**
   ```bash
   pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Available Scripts

| Script | Command | Purpose |
|---|---|---|
| **Dev** | `pnpm dev` | Starts the Next.js development server with hot-reload |
| **Build** | `pnpm build` | Compiles an optimized production build across all static & dynamic routes |
| **Start** | `pnpm start` | Runs the compiled Next.js production server |
| **Lint** | `pnpm lint` | Validates code formatting and TypeScript types via ESLint |

---

## 🚢 Deployment

The application is fully optimized for continuous deployment on **Vercel**:

1. Push your changes to the `main` branch.
2. Link the repository to your Vercel project.
3. The framework preset is automatically detected as **Next.js**.
4. Deploy with zero environment variable requirements (API routes gracefully fall back to structured data if external services are unreachable).

---

## 📬 Contact & Connect

* **Author:** Rajdeep Bakliwal
* **Positioning:** Software Engineer building AI systems
* **Location:** Jaipur, Rajasthan, India
* **Email:** [rajdeep.bakliwal1211@gmail.com](mailto:rajdeep.bakliwal1211@gmail.com)
* **GitHub:** [@rajdeep1211](https://github.com/rajdeep1211)
* **LinkedIn:** [Rajdeep Bakliwal](https://www.linkedin.com/in/rajdeep-bakliwal/)
* **LeetCode:** [@rajdeep_jain](https://leetcode.com/u/rajdeep_jain/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).