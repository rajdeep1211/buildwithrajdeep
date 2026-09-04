# Architecture

> **Project:** BuildWithRajdeep
> **Status:** V1 — Locked
> **Last Updated:** 2026-09-05

---

## 1. Architecture Overview

BuildWithRajdeep is a **frontend-first personal portfolio** designed to present Rajdeep's work, experience, skills, and projects.

The architecture keeps the website simple while keeping project information and engineering documentation structured and version-controlled.

```text
Visitor
   │
   ▼
Portfolio Website
   │
   ├── Portfolio Content
   ├── Project Content
   └── External Integrations
            │
            ▼
         GitHub
```

The website is responsible for **presentation and user experience**.

GitHub is responsible for **source code, project documentation, and history**.

---

## 2. Tech Stack

### Frontend

* **Next.js** — application framework
* **React** — UI component library
* **TypeScript** — primary programming language

### Styling & UI

* **Tailwind CSS** — styling system
* **Lucide React** — icons
* **Framer Motion** — animations and transitions

### Content

* **Markdown** — project and documentation content
* **TypeScript data** — structured portfolio data

### Development & Quality

* **pnpm** — package manager
* **ESLint** — code quality
* **Vitest** — testing
* **React Testing Library** — component testing

### Version Control & Memory

* **Git**
* **GitHub**

### Deployment

* **Vercel**

---

## 3. Application Structure

The application follows a component-based structure.

```text
Application
│
├── Layout
│   ├── Navigation
│   └── Footer
│
├── Pages / Sections
│   ├── Home
│   ├── Projects
│   ├── Experience
│   ├── Skills
│   └── Contact
│
├── Components
│   ├── Project Card
│   ├── Experience Card
│   ├── Skill Group
│   └── Shared UI
│
└── Data
    ├── Projects
    ├── Experience
    └── Personal Information
```

### Component Responsibility

Components should primarily handle presentation and user interaction.

Content and application logic should remain separate from reusable UI components wherever practical.

For example:

```text
ProjectCard
    │
    ├── receives project data
    ├── displays project information
    └── handles project interaction
```

It should not directly contain unrelated GitHub, analytics, or external-service logic.

---

## 4. Project Data Architecture

Project information should use a consistent structure so that it can be reused across different parts of the portfolio.

```text
Project
│
├── title
├── description
├── status
├── technologies
├── repository
├── live_url
├── highlights
└── documentation
```

The data flows into portfolio components:

```text
Project Data
     │
     ▼
Portfolio Components
     │
     ├── Project Card
     └── Project Detail
```

This prevents project information from being duplicated throughout the application.

---

## 5. Repository Structure

The repository separates application code, public assets, tests, and documentation.

```text
buildwithrajdeep/
│
├── README.md
│
├── docs/
│   ├── prd.md
│   ├── architecture.md
│   ├── design.md
│   ├── rules.md
│   ├── phases.md
│   └── history.md
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── data/
│   └── services/
│
├── public/
│
├── tests/
│
├── package.json
├── tsconfig.json
└── ...
```

The exact implementation structure may evolve with Next.js conventions, but the separation of **application code** and **project documentation** should remain.

---

## 6. Documentation & Project Memory

Project documentation is stored as Markdown inside the repository.

```text
docs/
│
├── prd.md
├── architecture.md
├── design.md
├── rules.md
├── phases.md
└── history.md
```

Each document has one primary responsibility:

| Document          | Responsibility                           |
| ----------------- | ---------------------------------------- |
| `prd.md`          | What we are building and why             |
| `architecture.md` | How the system is structured             |
| `design.md`       | How the product looks and behaves        |
| `rules.md`        | Rules and standards for development      |
| `phases.md`       | What needs to be built and in what order |
| `history.md`      | How the project has evolved              |

Git provides the underlying version history for all documentation.

Meaningful changes to project direction or decisions should also be recorded in `history.md` rather than silently replacing important historical context.

---

## 7. Content Flow

The portfolio follows a simple content flow:

```text
Content / Data
      │
      ▼
Next.js Application
      │
      ▼
Reusable Components
      │
      ▼
Rendered Portfolio
      │
      ▼
Visitor
```

Static portfolio content should remain independent from external services whenever possible.

External services should enhance the portfolio rather than become dependencies for its basic functionality.

---

## 8. External Integration Architecture

External integrations are isolated from the presentation layer.

```text
UI
 │
 ▼
Service Layer
 │
 ├── GitHub
 ├── Contact Service
 └── Future External APIs
```

Components should communicate with services through defined interfaces rather than directly depending on external API implementations.

This keeps external integrations replaceable and prevents them from spreading throughout the application.

---

## 9. Deployment Flow

Deployment follows the Git-based workflow:

```text
Local Development
       │
       ▼
      Git
       │
       ▼
    GitHub
       │
       ▼
    Vercel
       │
       ▼
Production Portfolio
```

GitHub remains the source of truth for the application code.

Production deployments are generated from the repository.

---

## 10. Core Architecture Principle

The portfolio follows one central architectural principle:

> **The website presents the work; the repository preserves the work.**

The website provides:

```text
Presentation
+
Experience
+
Project Discovery
```

The repository preserves:

```text
Code
+
Documentation
+
Decisions
+
History
```

This keeps the public product simple while allowing the underlying project to retain its complete engineering history.

---

## 11. V1 Architecture Boundary

V1 intentionally does **not** introduce infrastructure that is not required by the current product.

There is no dedicated:

* Database
* Backend server
* Authentication system
* CMS
* GraphQL layer
* State-management framework
* Microservice architecture

If a future requirement makes one of these necessary, it should be introduced as a deliberate architectural change rather than added preemptively.
