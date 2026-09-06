# Work Log

> **Purpose:** Record the current state and meaningful history of the portfolio project.  
> **Rule:** Preserve meaningful history. When decisions change, append the new state rather than silently rewriting the past.

## Current State

### Current Phase
**Phase 2 — Core Portfolio (Homepage & Contact Me Page Completed)**

### Status
**In Progress**

### Currently Working On
- Preparing Experience section implementation (`/experience`).

### Completed
- `PRD.md`, `ARCHITECTURE.md`, `RULES.md`, `PHASES.md`, and `DESIGN.md` established.
- Initialized Next.js, React, TypeScript, and Tailwind CSS foundation with locked color palette (`cream`, `caramel`, `brownie`, `coffee`).
- Implemented Contact Me page (`/contact`) with Cream, Caramel, Brownie, and Coffee documentation palette.
- Completed Homepage (`/`):
  - Editorial Developer Terminal Workspace hero with interactive commands (`whoami`, `about`, `quote`, `clear`).
  - Core Capabilities showcase with 6 interactive cards featuring 3D cursor tilt, cursor-following light reflection, layered depth, surface grain texture, viewport entrance animation, and smooth 350ms dark Brownie hover color inversion.
  - Tightened card-to-footer spacing and darkened footer top boundary (`border-brownie/25`) for crisp visual separation.
  - Minimal engineering footer with copyright and branding.
- Implemented Progressive Neumorphic Navbar:
  - Extracted shared navigation into `src/components/Navbar.tsx` and mounted in `RootLayout`.
  - Initial/Hero State: Full-width container (`max-w-[1360px]`), seamless cream hero integration, full-sized brand typography (`< Rajdeep Bakliwal \>`) in Brownie with animated Caramel angle brackets, Coffee secondary links, and Caramel active indicator.
  - Scrolled State: Smoothly detaches and transforms into a floating Dark Brownie Neumorphic capsule (`max-w-4xl`, solid tactile `bg-brownie-dark`, dual-directional light highlight `-4px -4px 14px rgba(255,255,255,0.75)` and deep shadow `6px 10px 24px rgba(71,35,25,0.32)`, chamfered top inner reflection `inset 0 1px 1px rgba(255,255,255,0.2)`, translucent caramel border `border-caramel/40`, light shade Cream text, and solid Caramel active route indicator).
  - Preserved the documented portfolio palette throughout both states: Cream (`#F3E9DC`), Caramel (`#C08552`), Brownie (`#5E3023`), and Coffee (`#895737`).
  - Scroll direction intelligence: Compresses on scroll down and fully restores upon returning to top.
  - Responsive mobile neumorphic sheet dropdown.
  - Zero layout shift guarantee on page content.
  - Header Personal Branding: Wrapped personal name with `<` and `\>` in monospace Caramel font with pulsing animation (`< Rajdeep Bakliwal \>`).
- Verified production build with Next.js static generation.

### Next
- Implement Experience section (`/experience`).

### Blocked By
None.

---

# History

## 2026-09-06 — Homepage Completion & Interactive Capabilities Refinement

### Completed
- Implemented interactive capabilities prototype component in `src/components/InteractiveCapabilityCard.tsx`:
  - 3D cursor tilt calculated from mouse position (limited to ~3–4° for subtle, non-distracting motion).
  - Cursor-following light reflection with dynamic radial gradient mask.
  - Multi-layer spatial depth (`translateZ` on icon badge, title, and description).
  - Subtle surface grain texture overlay for physical paper/matte tactile feel.
  - 8px hover lift with layered shadow deepening.
  - Smooth 350ms dual-state hover color inversion: default light card + dark text transitions into dark Brownie (`#5E3023`) card + light Cream (`#F3E9DC`) typography without altering original color identity.
  - Staggered viewport entrance animation via `IntersectionObserver`.
- Layout & Spacing Polish:
  - Reduced vertical spacing between the capabilities card grid and the footer (`pt-16 pb-8 sm:pt-20 sm:pb-10 lg:pt-24 lg:pb-12`).
  - Darkened the footer top border from `border-caramel/15` to `border-brownie/25` for distinct sectional separation.
- Header Branding Enhancement:
  - Updated left navbar personal branding to `< Rajdeep Bakliwal \>` in `src/components/Navbar.tsx`.
  - Both `<` and `\>` styled in monospace bold Caramel (`text-caramel font-mono font-bold`) with terminal pulse animation (`animate-pulse`).
  - Fluid scale transition between top hero state (`text-2xl sm:text-3xl`) and scrolled capsule state (`text-lg sm:text-xl`).
- Verified zero regression build with Next.js static generation across all 7 routes.

### Decisions
- Preserved documented color palette (Cream `#F3E9DC`, Caramel `#C08552`, Brownie `#5E3023`, Coffee `#895737`) during hover inversion, ensuring no arbitrary or unapproved colors entered the design.
- Maintained card tilt and light interactions as an isolated component (`InteractiveCapabilityCard.tsx`) for clean maintainability.
- Selected `border-brownie/25` for footer divider to establish grounding separation against the light cream background.

## 2026-09-06 — Progressive Neumorphic Navbar Implementation

### Completed
- Created `src/components/Navbar.tsx` implementing a progressive two-state navigation system:
  - State 1 (Top / Hero): Full-width (`max-w-[1360px]`), seamless cream hero background, full-size Brownie typography (`Rajdeep Bakliwal_`), Coffee links, and Caramel active underline.
  - State 2 (Scrolled Neumorphism): Floating solid tactile capsule (`max-w-4xl lg:max-w-5xl`, `rounded-full`), dark shade background (`bg-brownie-dark`), tactile light reflection and deep shadow (`shadow-[6px_10px_24px_rgba(71,35,25,0.32),-4px_-4px_14px_rgba(255,255,255,0.75),inset_0_1px_1px_rgba(255,255,255,0.2)]`), translucent caramel border (`border-caramel/40`), and light shade typography (`text-cream` with Caramel active indicator).
  - Smooth 500ms easing (`cubic-bezier(0.22, 1, 0.36, 1)`) with scroll restoration upon returning to top.
  - Strictly enforced the documented portfolio color palette (Cream `#F3E9DC`, Caramel `#C08552`, Brownie `#5E3023`, Coffee `#895737`) across both initial and scrolled states.
  - Fully responsive mobile floating sheet with smooth transitions.
  - Zero layout shift architecture preserving document flow.
- Consolidated navigation architecture by mounting `<Navbar />` in `src/app/layout.tsx` and removing duplicated `<header>` blocks across `page.tsx`, `contact/page.tsx`, `education/page.tsx`, and `projects/page.tsx`.
- Verified production build passes with 0 errors across all 7 static pages.

### Decisions
- Replaced glassmorphism (translucent blur) with Neumorphism (solid tactile surface with dual-directional light/shadow modeling) in the scrolled state, matching the physical 3D aesthetic of the developer terminal window.
- Replaced 4 duplicated header implementations across route files with a single reusable client component in `src/components/Navbar.tsx`.
- Used CSS transitions with `cubic-bezier(0.22, 1, 0.36, 1)` for hardware-accelerated animations rather than introducing external heavy animation dependencies, strictly adhering to the Value-First Rule.

---

## 2026-09-06 — Splash Screen Discarded & Asset Cleanup

### Completed
- Prototyped and evaluated animated boot sequence and circular reveal splash screen implementations.
- Deleted all code, components, and files associated with the splash screen concept, including `public/rb-logo.png`.
- Verified that no splash-related dependencies, styles, or artifacts remain in the codebase.

### Decisions
- Fully discarded the splash screen / intro animation per the Value-First principle: portfolios must prioritize instant content accessibility without loading delays or decorative friction.
- Decided not to retain the RB logo file or deferred splash assets to keep the repository clean, lean, and intentional.
- Homepage (`/`) remains immediately accessible with zero loading delay.

---

## 2026-09-05 — Foundation


### Completed
- Defined the portfolio documentation architecture.
- Established the separation of responsibilities between:
  - `PRD.md` — what and why
  - `ARCHITECTURE.md` — how
  - `RULES.md` — how we work
  - `PHASES.md` — roadmap
  - `DESIGN.md` — visual/product decisions
  - `WORKLOG.md` — current state and history

### Decisions
- GitHub will serve as the project's external memory.
- Meaningful project history should be preserved rather than silently overwritten.
- The Value-First Rule is a core project principle.
- AI-generated work must be reviewed for necessity, value, and complexity.
- The portfolio will evolve through outcome-driven phases rather than arbitrary task lists.
- AI functionality will only be built when it provides meaningful value.

### Notes
The documentation system is intentionally lightweight. It should support the project rather than become work for the sake of documentation.

---
### 2026-09-05 — Foundation Documentation Completed
## Status

# Phase 0 — Foundation: Complete

## Completed
Finalized PHASES.md.
Created and finalized DESIGN.md.
Established AGENTS.md as the universal entry point for AI agents.
Established GitHub/repository documentation as the project's external memory.
Established the project documentation system:
AGENTS.md — AI-agent operating instructions
PRD.md — product requirements and direction
ARCHITECTURE.md — technical architecture
RULES.md — project and development rules
PHASES.md — execution roadmap
DESIGN.md — visual and interaction direction
WORKLOG.md — current state and meaningful history
## Foundation Decisions
The repository is the project's external memory.
The project must remain portable across AI agents.
No individual AI agent should be the single source of project memory.
Meaningful progress and decisions must be recorded in WORKLOG.md.
The portfolio should be built using a Value-First approach.
Complexity should only be introduced when it provides meaningful value.
AI functionality should only be added when it improves the portfolio experience or demonstrates meaningful engineering capability.
Design and implementation details that are not yet necessary remain intentionally flexible.

## Current State

The documentation foundation is now sufficiently defined for implementation.

The project has moved from:

# Definition → Planning

to:

Implementation

## Next Phase

# Phase 1 — Design / Implementation Planning

Before building individual portfolio sections:

Inspect the existing repository/codebase.
Confirm the application stack and current state.
Create the initial implementation plan.
Establish the core visual/design system.
Build the application foundation.
Begin implementing the portfolio experience.
Handoff State

A new AI agent should now be able to enter the repository through AGENTS.md, read the project memory, understand the roadmap and design direction, and continue implementation without relying on previous conversation history.

---

### 2026-09-05 — AI Agent Handoff & Project Memory System

### Completed
- Created `AGENTS.md` as the universal entry point for AI agents working on the portfolio repository.
- Established a tool-agnostic workflow so the project can be continued by ChatGPT, Claude, Cursor, Antigravity, or other agents.
- Established the agent workflow:

  **Understand → Inspect → Plan → Apply Value-First → Build → Verify → Update Memory**

- Established that the repository is the project's external memory.
- Defined the relationship between:
  - `AGENTS.md` — how any AI agent should enter and work on the project
  - `PRD.md` — what and why
  - `ARCHITECTURE.md` — how
  - `RULES.md` — how we work
  - `PHASES.md` — roadmap
  - `DESIGN.md` — visual/product decisions
  - `WORKLOG.md` — current state, progress, decisions, and history
- Established that previous AI conversations are context, not the permanent source of truth.
- Established an explicit handoff process so another AI agent can continue the project without depending on the previous agent's memory.

### Decision
> **No AI agent should be the single source of memory for this project.**

The repository must preserve the project's decisions, progress, constraints, and next steps so the active AI agent can be replaced at any point without losing project context.

### Handoff Flow
A new AI agent should enter the project through:

```text
AGENTS.md
    ↓
docs/WORKLOG.md
    ↓
docs/PHASES.md
    ↓
docs/RULES.md
    ↓
relevant project documentation
    ↓
current code + git state
```

### Next
- Finalize `PHASES.md`.
- Create and discuss `DESIGN.md`.
- Verify that the project-management documents are aligned.
- Commit the documentation changes.
- Begin implementation after the foundation is sufficiently defined.

---

## 2026-09-05 — Minimal Homepage Implementation

### Completed
- Initialized Next.js, React, TypeScript, and Tailwind CSS toolchain with zero unnecessary dependencies.
- Configured theme tokens with Cream (`#F3E9DC`), Caramel (`#C08552`), Brownie (`#5E3023`), and Coffee (`#895737`).
- Implemented homepage (`/`) featuring:
  - Sticky header navigation with personal branding.
  - Hero section with large typography, handle `( buildwithrajdeep )`, builder statement, and "Star Me On GitHub" CTA.
  - Bespoke developer workspace & AI system vector illustration.
  - Recognized circular social badges (GitHub, LinkedIn, YouTube, Email, X, Discord, Instagram).
  - 6 Core capabilities cards (*AI Systems*, *Software Engineering*, *Full-Stack Development*, *AI / ML Engineering*, *Product Building*, *Community & Collaboration*).
  - Floating scroll-to-top button.
- Verified build and responsive layout.

### Decisions
- Replaced narrow centered layout with wide expansive grid (`max-w-[1400px]`) to match reference spacing.
- Scoped homepage strictly to Header, Hero, Social, and Capabilities, deferring Education/Experience/Projects/Contact to dedicated routes.
- Typography and font animations will be iterated upon in subsequent passes.

---

## 2026-09-05 — Education & Certifications Implementation

### Completed
- Implemented `/education` route with:
  - Vertical timeline with 3 academic milestones (B.Tech in CSE, Class XII Science, Class X).
  - Hover/focus interaction expanding to show concentration, key modules, and engagements.
  - Certifications section with 3 horizontal cards (Deep Learning, Machine Learning, Cloud & Full-Stack Systems) featuring verifiable credential seals and external links.
- Fixed performance lag by replacing expensive CSS blur filters with GPU-accelerated opacity transitions.
- Restored strictly the PRD color palette (Cream `#F3E9DC`, Caramel `#C08552`, Brownie `#5E3023`, Coffee `#895737`).
- Verified build passes with zero errors (`next build` generates 5 static pages).

---

## 2026-09-05 — Projects Page Implementation

### Completed
- Implemented `/projects` route matching the dark-card reference design:
  - Upper visual mockup/preview frame.
  - Category label, project title, tech stack pills, and GitHub repository button.
  - Tapping card opens the live demo directly; clicking the GitHub icon opens repository in a new tab without triggering card live demo.
  - Wired real live demo URL (`https://collaborative-canvas-36g9.onrender.com/`) and asset screenshot for DrawTogether (`/projects/drawtogether.png`).
- Verified production build and responsive layout.

---

## 2026-09-05 — Contact Me Page Redesign (PRD Documentation Palette)

### Completed
- Remade `/contact` route aligning with the PRD and Design system documentation:
  - Base palette: Cream (`#F3E9DC`) page background, Caramel (`#C08552`) interactive accents & badges, Brownie (`#5E3023`) headings & primary buttons, and Coffee (`#895737`) secondary text and subtle borders.
  - Hero header: `GET IN TOUCH` uppercase badge and `Let's Build Something Together.` headline.
  - 2-Column desktop grid:
    - Left column: "Open to conversations" live status badge with pulsing caramel dot, personal welcoming note, direct email (`rajdeepbakliwal@gmail.com`) with 1-click clipboard copy and mailto action, and 6 clean platform connection links (GitHub, LinkedIn, YouTube, Instagram, X/Twitter, Discord) with caramel hover states and arrows.
    - Right column: Clean, minimal contact form (Name, Email, Subject, Message) with cream input surfaces, accessible validation indicators, and Brownie/Caramel primary button (`Send Message →`).
    - Submission success state: Transitions seamlessly to a confirmation card ("Message Sent ✓", "Thanks for reaching out", "Back to Home", "Send Another Message").
  - Minimal engineering footer: "Rajdeep Bakliwal — Building software, AI systems, and ideas."
  - Omitted clutter: no maps, no office addresses, no phone numbers, no FAQ, no newsletters.
- Verified build (`next build` succeeds with 7 static routes) and zero-lag interactions.

---

## 2026-09-05 — Homepage Developer Terminal Workspace Redesign

### Completed
- Replaced the hero section on `/` with a sophisticated, editorial-style developer terminal workspace:
  - Terminal styling: Caramel outer frame/shell (`#C08552`), Brownie title bar chrome (`#5E3023`), Coffee interior workspace background (`#895737`), and rich combinations of Cream (`#F3E9DC`) and Caramel (`#C08552`) for all typography and commands.
  - Background: Page background remains clean Cream (`#F3E9DC`) throughout the entire page including the hero section.
  - Left terminal content:
    - `whoami` &rarr; prominent `Rajdeep Bakliwal` in Cream serif + `Software Engineer building AI systems.` in Caramel.
    - `cat about.txt` &rarr; quote container with Cream statement.
    - `ls` &rarr; four interactive directory cards (`/education`, `/experience`, `/projects`, `/contact`) with folder icons and Caramel accents.
    - `status` &rarr; live indicators with Caramel highlights (`● Building`, `● Learning`, `● Collaborating`, `● Open to`) and Cream descriptions.
    - Blinking terminal cursor.
  - Right information panel:
    - `// LOCATION` &rarr; India 🇮🇳 in Cream.
    - `// FOCUS` &rarr; Software Engineering, AI Systems, Communities & Impact in Cream.
    - Quote &rarr; *"Building a better tomorrow, one line of code at a time."* in Cream italic &mdash; Rajdeep Bakliwal in Caramel.
    - Subtle abstract mountain/landscape silhouette with layered Cream and Caramel ridges against the Coffee background.
  - Scroll continuation: Seamless transition into the **Core Capabilities** 6-card grid and floating scroll-to-top button matching the user's reference image.
- Strictly enforced documentation color palette (Cream `#F3E9DC`, Caramel `#C08552`, Brownie `#5E3023`, Coffee `#895737`).
- Verified build passes with zero errors.

---

## 2026-09-05 — Pixel-Accurate Terminal Matching Reference Image

### Completed
- Aligned homepage (`/`) navigation and developer terminal window pixel-by-pixel with user-provided reference screenshot (`media_1788623908587.png`):
  - **Navigation Bar**:
    - Clean horizontal spacing without separator dots (`Home`, `Education`, `Experience`, `Projects`, `Contact Me`).
    - Active `Home` indicator with a centered solid Caramel pill underline.
    - Preserved `Rajdeep Bakliwal_` with animated Caramel cursor.
  - **Terminal Window**:
    - Rounded 24px container with thin `#D5C2B1` warm border and soft drop shadow on Cream page background.
    - Dark Brownie (`#5E3023`) top bar chrome with red, amber, and green window dots, monospace title `buildwithrajdeep@portfolio: ~`, tagline `Ideas. Code. People. Impact.`, and corner-bracket expand icon.
    - Interior light warm surface (`#F4EDE4`) with subtle vertical divider dividing main terminal (8 cols) and right info panel (4 cols).
  - **Left Terminal Workspace**:
    - `whoami` &rarr; Bold technical monospace `Rajdeep Bakliwal` heading in Brownie with `Software Engineer building AI systems.` subtitle.
    - `cat about.txt` &rarr; Clean unboxed monospace paragraph in Brownie.
    - `ls` &rarr; Horizontal row of folders (`education/`, `experience/`, `projects/`, `contact/`) with solid coffee folder icons and clickable links.
    - `status` &rarr; Precisely aligned 3-column table with coffee bullets `●`, coffee keywords (`Building`, `Learning`, `Collaborating`, `Open to`), and brownie values (`AI-powered products`, `New technologies`, `With amazing people`, `Opportunities`).
    - Active prompt `rajdeep@buildwithrajdeep:~$` with solid animated block cursor `█`.
  - **Right Information Panel**:
    - `// LOCATION` with solid map pin and `India 🇮🇳`.
    - `// FOCUS` with `</>`, isometric cube, and community icons for Software Engineering, AI Systems, Communities & Impact.
    - Thin divider line and large quotation mark with italic quote: *"Building a better tomorrow, one line of code at a time."* &mdash; Rajdeep Bakliwal.
    - Integrated multi-ridge mountain landscape and soft sun disc SVG in the bottom right quadrant.
  - **Continuation on Scroll**:
    - Seamless flow into the Core Capabilities 6-card grid and floating scroll-to-top button.
- Validated with `pnpm build` (exit code 0 across all 7 static pages).
- Next.js dev server live on `http://localhost:3001/`.
- Adjusted terminal window scale and max-width (`max-w-[1360px]`, `min-h-[560px]`, expanded padding) to give the terminal more visual presence and breathing room while keeping the exact design proportions intact.
- Updated terminal window boundary to matching Brownie (`border-2 border-brownie`, `#5E3023`).
- Enhanced terminal window with 3D physical depth:
  - Extruded bottom-right physical shadow (`8px 10px 0px 0px #472319`) combined with soft ambient occlusion (`0 25px 40px rgba(94,48,35,0.22)`).
  - Chamfered top light reflection on the Brownie header bar (`inset 0 1px 0 rgba(255,255,255,0.18)`).
  - Subtle recessed inner screen shadow (`inset 0 3px 12px rgba(94,48,35,0.06)`).
  - Interactive 3D lift on hover (`-translate-y-1` and expanded shadow).

---

# Worklog Rules

- Update the current state when meaningful project work changes what we are doing.
- Add a dated history entry for meaningful decisions, completed milestones, reversals, or changes in direction.
- Do not log every trivial edit.
- Keep entries concise enough to remain useful.
- If an earlier decision changes, record the new decision and why.
- Keep implementation details in the appropriate project documentation unless they are important to the project's history.
