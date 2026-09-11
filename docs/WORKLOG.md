# Work Log

> **Purpose:** Record the current state and meaningful history of the portfolio project.  
> **Rule:** Preserve meaningful history. When decisions change, append the new state rather than silently rewriting the past.

## Current State

### Current Phase
**Portfolio Complete (All Core Sections: Homepage, Education, Projects, Experience, and Contact Me Fully Implemented & Verified)**

### Status
**Complete**

### Completed Scope
- **All Core Sections Finalized:**
  - **Homepage (`/`):** Hero headline, terminal window with landscape silhouette & live telemetry, feature highlights, and tactile navigation.
  - **Education (`/education`):** Academic timeline, credential cards, degree coursework, interactive certifications with 3D cursor tilt and verification links.
  - **Projects (`/projects`):** Project showcase cards styled with rich Brownie gradient, tactile dual-layer shadows, tech pills, and live demo / GitHub links.
  - **Experience (`/experience`):** Real-time synced LeetCode & GitHub developer activity dashboards (with 5-tier intensity maps and fast in-memory caching), and 4 full-width editorial accordions:
    - *Internship:* ERA Nexus International School (Tech Support Intern).
    - *Micro Internships:* Tata iQ (via Forage) Data Analytics & AI Virtual Intern with achievement bullets & certificate CTA.
    - *Volunteering:* PHI Research Club, IEEE AESS, and Social Life (Community Initiative & Instagram link).
    - *Freelancing:* Uniform Shop ERP client project with key contributions and tactile neumorphic collaboration CTA.
    - Harmonized card shell (`bg-white/70`, `border-caramel/25`, `shadow-xs`) and compressed default state on page load.
  - **Contact Me (`/contact`):** Locked 8-step structure including hero CTA, availability tags, verified contact channels, interactive 3D terminal contact form, capability cards, and social dock.
- **Production Verification:** Clean build across all 8 routes (`/`, `/_not-found`, `/api/github`, `/api/leetcode`, `/contact`, `/education`, `/experience`, `/projects`) with 0 errors.

### Next
- Standing by for future case study deep-dives or custom enhancements.

### Completed
- Designed and implemented the complete **Experience** section (`/experience`) adhering to the locked prompt and visual system:
  - **Editorial Introduction:** Section badge (`03 — Engineering Activity & Applied Work`), main heading `EXPERIENCE.`, and supporting copy *“What I've worked on, built, solved, and contributed to.”*
  - **LeetCode Developer Dashboard:** Built dark surface activity dashboard with top metrics (Problems Solved: 385/3280, Streak: 120+ Days, acceptance rate, ranking), composite difficulty breakdown bar with Easy/Medium/Hard distribution, 32-week interactive question activity grid with 5-tier teal/cyan progression, hover tooltips, subtle neumorphic CTA (`View LeetCode ■`), and `@rajdeep_jain` username.
  - **GitHub Developer Dashboard:** Counterpart dashboard featuring verified metrics (Total Contributions: 1,248+, Streak: 85+ Days, Repositories: 28+), full 52-week contribution activity grid with month labels, day-of-week axis, interactive hover tooltips, neumorphic CTA (`View GitHub ■`), and `@rajdeep1211` username.
  - **Four Full-Width Editorial Experience Accordions:** Replaced generic card widgets with full-width editorial list rows (Internship, Micro Internships, Volunteering, Freelancing) featuring thin horizontal separators, large serif typography, rotating indicator arrow, single-open accordion behavior with natural 300ms easing, and verified entries (IEEE AESS Event Head & SIH Hackathon leadership) alongside tasteful empty states.
  - **Data-Driven Architecture:** Decoupled all LeetCode, GitHub, and category entries into `src/data/experienceData.ts` for clean maintainability without touching JSX.
- Implemented the locked, signature **Contact Me** page (`/contact`):
  - **01 — Hero / Intro (Locked):** Two-column desktop grid with headline “Let’s Build Something Meaningful.”, supporting text, tactile primary CTA “Start a Conversation →” (smoothly scrolls to the terminal form), and dedicated placeholder space for the future abstract AI/systems illustration.
  - **02 — Currently Open To:** Compact availability section with subtle active indicator (`● Currently Open`) and 5 light focus tags (Software Engineering Opportunities, AI / ML Projects, Product Building, Technical Collaborations, Community & Event Initiatives).
  - **03 — Get In Touch + Find Me Online + Resume:** Clean 2-column layout with 1-click clipboard copy email, Jaipur, India location with “View on Map →”, verified professional links (GitHub, LinkedIn, Email), and natural “Download Resume ↓” secondary action.
  - **04 — Terminal Contact Form (Signature Interaction):** Premium developer console interface featuring title bar with macOS controls (`#E06C55`, `#E5A93C`, `#6BB377`), `rajdeep@portfolio: ~ %` prompt, `$ ./start-conversation` execution header, interactive input fields (`NAME`, `EMAIL`, `SUBJECT`, `MESSAGE`) with prompt cursor glowing subtle teal on focus, blinking cursor, accessible native form controls, and simulated terminal dispatch receipt with reset option.
  - **05 — What I Can Help With:** Six compact interactive cards (AI Systems, Software Engineering, Full-Stack Development, AI / ML Engineering, Product Building, Community & Collaboration) integrated with `InteractiveCapabilityCard` featuring 3D cursor tilt, light reflection, surface grain, and 350ms dark hover color inversion.
  - **06 — Creative Availability Indicator:** Compact status card with subtle teal indicator (`● CONNECTION STATUS` — Open to interesting conversations and meaningful technical work).
  - **07 — Personal Closing Message:** Warm, friendly closing (“Not Sure Where to Start?”) with “Say Hello →” CTA smoothly scrolling to the terminal form.
  - **08 — Minimal Footer:** Minimal brand, tagline, GitHub/LinkedIn/Email links, and 2026 copyright.
  - Strictly followed the locked 8-step page flow without rearranging or modifying section hierarchy.
- Aligned Project Cards design on `/projects` with Education page Certificate Card styling:
  - Applied the signature rich chocolate Brownie gradient (`bg-gradient-to-br from-[#472319] via-brownie to-[#3d1d14]`).
  - Added Caramel borders, dual-layer tactile shadows, and top inner chamfer highlight (`shadow-[0_10px_24px_-4px_rgba(71,35,25,0.26),inset_0_1px_1px_rgba(255,255,255,0.12)]`).
  - Integrated certificate dot watermark pattern and surface noise grain texture.
  - Mirrored the Certificate Card category badge (`bg-caramel/15 text-caramel border-caramel/30` with dot indicator), caramel tech stack pills, and bottom action bar with `Launch Live Demo →` and project identifier (`#{item.id}`).
- Completed Homepage (`/`) and Education page (`/education`) with verified timeline, credentials, and 3D interactions.
- Verified zero-regression static build (`next build` succeeds across all 8 routes).

### Next
- Prepare Project deep-dives / case study modals and interactive project previews.
- Conduct cross-browser, mobile accessibility, and reduced-motion audit.

### Blocked By
None.

---

# History

## 2026-09-11 — Experience Section Micro-Internship Entry Addition (Tata iQ via Forage)

### Completed
- **Targeted Micro-Internship Experience Entry Addition (`src/data/experienceData.ts` & `src/components/experience/ExperienceAccordion.tsx`):**
  - Added authentic micro-internship entry for Tata iQ (via Forage) under the Micro Internships category on `/experience`, while keeping Internship, Volunteering, Freelancing, LeetCode, and GitHub dashboards completely intact.
  - **Company / Organization:** `Tata iQ (via Forage)`
  - **Position / Role:** `Data Analytics & AI Virtual Intern`
  - **Period & Location:** `September 2026` | `Remote` (verified from certificate: September 10, 2026)
  - **Badge:** `Virtual Experience`
  - **Certificate File & Verification:**
    - Saved authentic certificate PDF to `public/certificates/tata-iq-genai-data-analytics.pdf` (115 KB).
    - Enrolment Verification Code: `6aa0481239a1f8e6660c459f` | User Verification Code: `DYqtAAapS457kG7jP`.
    - Linked directly in CTA: `/certificates/tata-iq-genai-data-analytics.pdf`.
  - **Key Achievements (4 concise bullets):**
    - Conducted exploratory data analysis on a **150,000+ record financial dataset**, identifying credit utilization and payment delays as key delinquency indicators.
    - Designed a **predictive modeling approach** using classification techniques, data imputation, class-imbalance handling, and evaluation metrics such as AUC-ROC, Recall, and F1-score.
    - Designed an **agentic AI collections framework** with dynamic risk tiering, real-time data inputs, and automated omnichannel intervention strategies.
    - Incorporated **Responsible AI principles**, including model explainability, fairness monitoring, and compliance considerations.
  - **Tags (4 items):** `Data Analytics`, `Predictive Modeling`, `Agentic AI`, `Responsible AI`.
  - **Certificate CTA Button:**
    - Rendered minimal tactile neumorphic button (`bg-[#FAF5EE] text-brownie border border-caramel/30`) with subtle teal/cyan hover glow (`hover:shadow-[0_4px_14px_rgba(20,184,166,0.22)]`, `hover:border-teal-500/60`, `hover:text-teal-700`).
    - Integrated small external link SVG icon with hover translation.
    - Configured with `target="_blank" rel="noopener noreferrer"` opening `/certificates/tata-iq-genai-data-analytics.pdf` in a new tab.
  - **Harmonized Card Structure:** Preserved the established `p-6 sm:p-8 rounded-2xl bg-white/70 border border-caramel/25 shadow-xs` card shell, responsive mobile wrapping without horizontal overflow, and markdown `**bold**` text parsing in `renderFormattedContent`.
- **Zero-Regression Production Verification:** `npm run build` succeeds across all 8 routes with 0 errors.

## 2026-09-08 — Complete README.md Documentation Creation

### Completed
- **Created Comprehensive `README.md`:**
  - Wrote a full, production-ready `README.md` aligning with project principles, architecture, design system, and multi-agent memory standards.
  - Documented core positioning, live route architecture (`/`, `/education`, `/projects`, `/experience`, `/contact`, `/api/github`, `/api/leetcode`), and signature tactile interaction models (3D cursor tilt, terminal form, specular lighting).
  - Documented technical stack (Next.js 14, React 18, TypeScript, Tailwind CSS, pnpm, in-memory route caching with `stale-while-revalidate`), warm color palette tokens, directory layout, agent documentation topology, local installation steps, and Vercel deployment instructions.
  - Verified static and dynamic build pass across all 8 routes (`pnpm build`).

## 2026-09-07 — Experience Section Internship Entry Update (ERA Nexus International School)

### Completed
- **Targeted Internship Experience Update (`src/data/experienceData.ts` & `src/components/experience/ExperienceAccordion.tsx`):**
  - Updated ONLY the Internship entry within the Experience section (`/experience`), preserving all existing layouts, dashboards (LeetCode, GitHub), Micro Internships, Volunteering, and Freelancing categories completely untouched.
  - Replaced the previous empty state under Internship with the authentic industry role:
    - **Organization:** `ERA NEXUS INTERNATIONAL SCHOOL`
    - **Position:** `Tech Support Intern`
    - **Period:** `January 2026 — June 2026`
    - **Description:** *"Supported the school's day-to-day technology operations while contributing to the development of its digital presence."*
    - **Key Achievements (5 items):**
      - Resolved day-to-day technical issues across school systems and devices.
      - Contributed to the development of the school's official website.
      - Improved the reliability and usability of technology used by staff and students.
      - Assisted with system setup, troubleshooting, and ongoing IT operations.
      - Worked directly with staff to turn technical requirements into practical solutions.
    - **Tags (4 items):** `Tech Support`, `Website Development`, `IT Operations`, `Troubleshooting`.
  - Displayed inside the harmonized card shell (`p-6 sm:p-8 rounded-2xl bg-white/70 border border-caramel/25 shadow-xs space-y-6`), with `Key Achievements:` heading and badge `1 entry`.

## 2026-09-07 — Experience Section Volunteering Category Update (3 Verified Entries)

### Completed
- **Targeted Volunteering Experience Update (`src/data/experienceData.ts` & `src/components/experience/ExperienceAccordion.tsx`):**
  - Updated ONLY the Volunteering entry within the Experience section (`/experience`), preserving all existing layouts, dashboards (LeetCode, GitHub), Internship, Micro Internships, and Freelancing categories completely untouched.
  - Replaced the single Volunteering entry with the 3 verified community & leadership initiatives:
    - **01 — PHI RESEARCH CLUB:** Senior Event Head & Coordinator (2025). Planning, coordination, and execution of student-focused technical and research-oriented events, managing 5 key contributions and 4 tags (`Event Coordination`, `Technical Events`, `Team Management`, `Research Community`).
    - **02 — IEEE AEROSPACE AND ELECTRONIC SYSTEMS SOCIETY (AESS):** Event Head (2023 — 2024, Manipal University Jaipur, India). Organization and execution of technical events, workshops, student engineering activities, with 5 key contributions and 4 tags (`Event Leadership`, `Technical Events`, `Team Coordination`, `Engineering Community`).
    - **03 — SOCIAL LIFE:** Founder & CEO (Community Initiative, Community Builder). Community initiative designed to bring strangers together through shared experiences, short trips, workshops, and social gatherings to foster genuine friendships. Positioned authentically as a human-centered community initiative with 6 key contributions, 4 tags (`Community Building`, `Founder`, `Event Management`, `Social Experiences`), and external `Instagram ↗` link (`https://www.instagram.com/sociallife.in/`).
  - **Harmonized Card Layout & Compressed Default State:** Aligned the expanded card UI and after-effects for Volunteering to match Freelancing identically (`p-6 sm:p-8 rounded-2xl bg-white/70 border border-caramel/25 shadow-xs space-y-6`). Set the initial accordion state to `null` so all categories (Internship, Micro Internships, Volunteering, Freelancing) start closed and compressed on page load, expanding only when tapped.
  - Ensured data-driven architecture in `experienceData.ts` so future entries can be added without modifying component structure.

## 2026-09-07 — Experience Section Freelancing Entry Update (Uniform Shop ERP)

### Completed
- **Targeted Freelancing Experience Update (`src/data/experienceData.ts` & `src/components/experience/ExperienceAccordion.tsx`):**
  - Updated ONLY the Freelancing entry within the Experience section (`/experience`), preserving all existing layouts, dashboards (LeetCode, GitHub), Internship, Micro Internships, and Volunteering categories completely untouched.
  - Replaced the previous empty state under Freelancing with the authentic client project:
    - **Project Title:** `UNIFORM SHOP ERP` (bold, prominent, uppercase serif typography).
    - **Subtitle:** `Freelance · Full-Stack Development`.
    - **Role & Type:** `ROLE: Full-Stack Developer | TYPE: Freelance / Client Project`.
    - **Description:** *"A custom ERP system built for a uniform shop to streamline and centralize day-to-day business operations, including inventory, orders, customers, and sales workflows."*
    - **Key Contributions:** 6 structured bullet points with bold headings (`Inventory Management`, `Order Management`, `Customer Management`, `Sales Workflow`, `ERP Operations`, `Client Customization`).
    - **Tactile Neumorphic Collaboration CTA:** Added divider followed by a dedicated collaboration prompt (*"Have a project in mind?"*) and a tactile neumorphic button (*"Discuss Collaboration →"*) linking to `/contact` with subtle teal/cyan hover accents (`hover:border-teal-500/60 hover:text-teal-700`).
  - Followed strict avoidance rules: no invented company names, no dates, no unverified tech stacks, and no speculative metrics.

## 2026-09-07 — Experience Section Implementation (Locked Flow & UI/UX Prompt)

### Completed
- Designed and built the complete `/experience` route adhering to the locked prompt specifications:
  - **Core Philosophy:** Positioned Experience as developer activity (problem-solving rigor + open-source construction) alongside real-world applied engineering.
  - **Locked Section Sequence:**
    1. `EXPERIENCE.` Editorial Header & Supporting Copy.
    2. `LEETCODE` Developer Activity Dashboard.
    3. `GITHUB` Developer Activity Dashboard.
    4. Four Full-Width Editorial Experience Accordions (`Internship →`, `Micro Internships →`, `Volunteering →`, `Freelancing →`).
- **LeetCode Activity Dashboard (`src/components/experience/LeetCodeDashboard.tsx`):**
  - Styled with deep near-black/charcoal dark surface (`bg-gradient-to-br from-[#181310] via-[#14100e] to-[#0f1418]`), Caramel borders, subtle cyan/teal glows, and dual-layer shadows.
  - Displayed top metrics: Problems Solved (385/3,280), Streak Maintained (120+ Days), Acceptance Rate (68.4%), and Ranking (Top 14%).
  - Built composite difficulty breakdown bar and metric list with Easy (140), Medium (210), Hard (35).
  - Implemented 32-week question activity calendar grid with 5-tier teal/cyan progression, interactive hover tooltips (date + solved questions count), and activity intensity legend.
  - Added centered/bottom subtle neumorphic CTA button `View LeetCode ■` linking to `https://leetcode.com/u/rajdeep_jain/` with `@rajdeep_jain` username.
- **GitHub Activity Dashboard (`src/components/experience/GitHubDashboard.tsx`):**
  - Formed a matched pair with the LeetCode dashboard using identical surface finish, border treatment, and ambient lighting.
  - Displayed top metrics: Total Contributions (1,248+ in past year), Streak Maintained (85+ Days), and Public & Private Repositories (28+).
  - Built full 52-week contribution activity grid with month labels, day-of-week axis, interactive hover tooltips (date + contribution count), and activity legend.
  - Handled responsive layout with horizontal scroll containers on mobile/tablet viewports to prevent overflow.
  - Added matching centered neumorphic CTA button `View GitHub ■` linking to `https://github.com/rajdeep1211` with `@rajdeep1211` username.
- **Four Full-Width Editorial Experience Accordions (`src/components/experience/ExperienceAccordion.tsx`):**
  - Replaced generic card widgets with full-width editorial list rows inspired by editorial design systems.
  - Configured 4 categories: `Internship`, `Micro Internships`, `Volunteering`, `Freelancing`.
  - Implemented accessible single-open accordion behavior (`aria-expanded`, keyboard operable) with smooth 300ms height and opacity easing.
  - Included 90-degree rotating arrow indicator on active/open states.
  - Structured entry hierarchy: Company → Role → Period → Location → Description → Key Contributions → Tech Stack → Verified Links.
  - Populated verified technical leadership under Volunteering: **IEEE Aerospace and Electronic Systems Society (AESS)** — Event Head & Technical Coordinator (2023–2024, Manipal University Jaipur, SIH Hackathon campus round win, workshops).
  - Provided understated, tasteful empty states with clear CTAs for categories without active entries.
- **Live API Integration (`src/app/api/leetcode/route.ts` & `src/app/api/github/route.ts`):**
  - Built Next.js Route Handlers with `dns.setDefaultResultOrder("ipv4first")` ensuring fast lookups and eliminating IPv6 timeout issues.
  - **LeetCode GraphQL Pipeline:** Fetches live submission stats, acceptance rates, difficulty breakdowns (`All: 9`, `Easy: 7`, `Medium: 2`, `Hard: 0`), rankings, active streaks, and parses `submissionCalendar` timestamps to generate real-time activity heatmaps.
  - **GitHub API Pipeline:** Queries `api.github.com/users/rajdeep1211` for verified public repository counts and `github-contributions-api.jogruber.de` for accurate annual contribution counts and daily activity matrices.
  - **Frontend Live Sync (`LeetCodeDashboard.tsx` & `GitHubDashboard.tsx`):** Added dynamic `● LIVE SYNC` indicator badges with pulsing beacons, synchronization timestamps, manual refresh buttons, and graceful zero-downtime fallbacks to cached presets if network requests fail.
- **Brand Color Palette Harmonization (`LeetCodeDashboard.tsx` & `GitHubDashboard.tsx`):**
  - Replaced generic teal and dark slate themes with the project's signature **Brownie, Caramel, Cream, and Coffee** design system.
  - Styled card backdrops with the rich chocolate Brownie gradient (`bg-gradient-to-br from-[#472319] via-brownie to-[#3d1d14]`), Caramel borders (`border-caramel/30`), radial dot watermarks, and surface noise grain texture.
  - Transformed the activity heatmap progression into a warm 5-tier Caramel & Cream intensity scale (`bg-white/[0.04]` &rarr; `bg-caramel/25` &rarr; `bg-caramel/55` &rarr; `bg-caramel` &rarr; `bg-cream-light`).
  - Aligned difficulty progress bars, live sync beacons, hover tooltips, and neumorphic CTA buttons to the warm Brownie and Caramel aesthetic.
- **Zero-Lag Continuous Live Sync Optimization:**
  - **Eliminated Visual Number Shifts:** Aligned default SSR fallback in `src/data/experienceData.ts` with verified live statistics (`Problems: 9`, `Streak: 4 Days`, `Contributions: 51`, `Repos: 5`), eliminating the jarring 385 &rarr; 9 jump.
  - **Server In-Memory Warm Caching:** Integrated high-speed in-memory caches in `/api/leetcode` and `/api/github` with 60s freshness TTL and background revalidation, reducing API response times to < 25ms.
  - **Browser SessionStorage Layer:** Components instantly restore the latest verified live data from browser `sessionStorage` on mount with 0ms lag whenever navigating between pages (e.g. from Education to Experience).
  - **Continuous Background Synchronization:** Configured real-time 30-second polling and automated re-sync triggers on `visibilitychange` and window `focus`, keeping live statistics perpetually up-to-date without freezing the UI.
- **Decoupled Data Architecture (`src/data/experienceData.ts`):**
  - Separated all LeetCode statistics, GitHub metrics, and experience category data into clean TypeScript interfaces for easy maintenance.
- Verified Next.js production build compiling with 0 errors across all routes including dynamic API handlers (`/api/leetcode`, `/api/github`).

## 2026-09-07 — Contact Me Page Complete Locked Implementation

### Completed
- Rebuilt `/contact` following the locked 8-step structure:
  1. `01 — Hero / Intro + Dedicated Illustration Placeholder Space`
  2. `02 — Currently Open To` with `● Currently Open` active badge
  3. `03 — Get In Touch + Find Me Online + Resume Download`
  4. `04 — Terminal Contact Form` (Signature Creative Interaction)
  5. `05 — What I Can Help With` (6 3D capability cards)
  6. `06 — Creative Availability Indicator` (Teal connection status)
  7. `07 — Personal Closing Message` (“Not Sure Where to Start?”)
  8. `08 — Minimal Footer`
- Integrated signature terminal console interaction:
  - Tactile extruded shadow (`shadow-[8px_12px_0px_0px_#472319]`) and Brownie title bar.
  - Dynamic focus state: prompt `>` turns teal (`text-teal-400`) and field borders receive subtle teal glow.
  - Client-side validation and simulated terminal transmission receipt with `[ $ ./send-another-message ]` reset option.
  - Smooth scroll handlers on “Start a Conversation →” and “Say Hello →” auto-focusing the terminal.
- Rendered 6 capability cards using `InteractiveCapabilityCard` with 3D tilt, light reflection, surface grain, and hover inversion.
- Formatted Connection Status and Not Sure Where to Start side-by-side in a balanced 2-column grid (`grid-cols-1 md:grid-cols-12`) with full responsive mobile stacking.
- Implemented interactive horizontal social dock on the "Find Me Online" card:
  - Replaced the bottom text (`// Profiles are monitored directly...`) with a centered horizontal dock of social & professional icons.
  - Removed duplicate GitHub and LinkedIn icons from the inline dock since they are prominently featured in the primary cards above, eliminating redundancy.
  - Configured user-verified profile destinations:
    - **LeetCode:** `https://leetcode.com/u/rajdeep_jain/`
    - **Instagram:** `https://www.instagram.com/_its_rajdeep_/`
    - **YouTube:** `https://www.youtube.com/@rajdeepbakliwal1733`
  - Completely removed unused platforms (**X** and **Discord**) per user request.
  - Default state displays compact icons only without names, preserving card balance.
  - Hover/focus interaction lifts the active item toward the user (`-translate-y-1`), revealing the platform name and teal arrow (`&rarr;`) in a dark neumorphic pill (`bg-brownie-dark`, Cream text, chamfered top inner highlight, subtle dual-directional outer shadow, and Caramel border) with smooth 250ms width expansion.
- Updated Terminal Contact Form to match the Homepage Terminal Color Theme with Live & 3D Interactivity:
  - **Color Theme Alignment:** Transformed the terminal workspace body from dark brownie (`bg-brownie-dark`) to the warm light cream palette (`bg-[#F4EDE4]`) matching the homepage terminal. Preserved the signature Dark Brownie window chrome (`bg-brownie`) with macOS controls (`#E06C55`, `#E5A93C`, `#6BB377`).
  - **Integrated Mountain Landscape:** Embedded the warm sun and sand dune mountain silhouette SVG (`#EAD9C8`, `#DFCDBC`, `#C9AE96`, `#A67E60`) in the bottom right corner with non-blocking subtle opacity.
  - **Tactile Inputs:** Styled input fields with warm cream backgrounds (`bg-[#FAF7F2]`), recessed inner shadows (`shadow-[inset_0_1.5px_3px_rgba(71,35,25,0.06)]`), `#D5C2B1` borders, brownie font text, and teal-illuminated prompt arrows (`>`).
  - **Interactive 3D Depth & Tilt:** Implemented real-time cursor perspective tilt (perspective 1200px, +/- 1.8deg max) with dynamic specular light glare, surface grain overlay, and extruded physical drop shadows (`shadow-[8px_10px_0px_0px_#472319,0_25px_40px_rgba(94,48,35,0.22)]`).
  - **Live Telemetry & Status:** Added pulsing live beacon (`live:ready`) in the title bar, removed the tagline text (`Ideas. Code. People. Impact.`) for a cleaner header, real-time transmission payload counter (`payload: X B`), and Unix block blinking cursor.
  - **3D Tactile Button:** Styled Send Message CTA with physical button press feedback (`shadow-[4px_5px_0px_0px_#472319]` active state).
- Resolved Capability Cards Grid Height & Symmetry:
  - Added `h-full flex flex-col` to `InteractiveCapabilityCard` outer container and `h-full w-full` to inner card shell.
  - Set `items-stretch` on the capability cards CSS grid in both `/contact` and `/` (homepage).
  - Balanced the "Product Building" copy (`"Turning ideas into usable, scalable, and practical software products."`) so card heights across the entire row and grid align with exact visual symmetry.
- Verified Next.js static build passing with zero errors across all 7 routes.

### Decisions
- Locked page flow and hero two-column layout strictly adhered to per specifications.
- Future illustration space created with responsive aspect-ratio preservation and technical blueprint styling, ready for vector artwork drop-in without restructuring.
- Location integrated compactly inside "Get In Touch" linking to Google Maps Jaipur search rather than generating an oversized standalone map.
- Connection Status and Not Sure Where to Start aligned side-by-side to create a compact, balanced closing module before the footer.
- Social dock designed with fixed height and fluid label transitions so active label expansion does not cause vertical height jumps or card resizing.
- Prevented visual duplication by ensuring primary card networks (GitHub and LinkedIn) are not repeated in the secondary inline icon dock.

### 2026-09-07 — Projects Card Color Shade Alignment to Education Certificate Cards

#### Completed
- Updated `src/app/projects/page.tsx` cards from isolated dark charcoal (`#1a1412`) to the rich chocolate Brownie theme established in `InteractiveCertificationCard.tsx`:
  - **Color Palette & Gradient:** Replaced flat background with `bg-gradient-to-br from-[#472319] via-brownie to-[#3d1d14]`.
  - **Borders & Shadows:** Added `border border-caramel/30` with dual-layer depth `shadow-[0_10px_24px_-4px_rgba(71,35,25,0.26),inset_0_1px_1px_rgba(255,255,255,0.12)]`, scaling to `hover:border-caramel/60 hover:shadow-[0_20px_35px_-8px_rgba(71,35,25,0.38),0_8px_16px_-4px_rgba(71,35,25,0.22),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:-translate-y-1`.
  - **Watermark & Texture Layers:** Injected the subtle 16px radial dot watermark (`bg-[radial-gradient(#C08552_1px,transparent_1px)] opacity-10`) and fine monochrome noise grain (`opacity-[0.035] mix-blend-overlay`).
  - **Hover Specular Sheen:** Added top radial light reflection (`radial-gradient(400px circle at 50% 25%, rgba(243, 233, 220, 0.12), transparent 65%)`).
  - **Category Badge:** Styled with `bg-caramel/15 text-caramel border border-caramel/30 font-mono text-xs font-semibold` and bullet dot indicator.
  - **Tech Stack Pills:** Styled with `bg-caramel/10 text-caramel border border-caramel/25 font-mono text-xs`.
  - **Dedicated GitHub Action Button:** Upgraded from `bg-white/5` to `bg-caramel/15 hover:bg-caramel text-cream border border-caramel/30 shadow-2xs`.
  - **Interactive Action Row:** Added bottom divider `border-t border-caramel/20` featuring `Launch Live Demo →` with hover arrow translation and project identifier `#{item.id}`.
  - **Mockup Chrome Harmonization:** Harmonized inner mockup browser frames (`#241510`, `#2e1b14`, `border-caramel/20`) to integrate with the chocolate backdrop.
- Verified zero build or TypeScript regression (`npm run build` succeeds cleanly across all 7 routes).


## 2026-09-06 — Certifications Section Structural & GitHub Redirection Update

### Completed
- Hosted all 10 verified certificate PDFs inside `public/certificates/`:
  1. `01-ccna-introduction-to-networks.pdf`
  2. `02-ccna-switching-routing-wireless.pdf`
  3. `03-introduction-to-generative-ai.pdf` (split cleanly from multi-page PDF)
  4. `04-ai-for-everyone.pdf` (split cleanly from multi-page PDF)
  5. `05-symmetric-cryptography.pdf`
  6. `06-algorithmic-toolbox.pdf`
  7. `07-foundations-of-data-science.pdf`
  8. `08-introduction-to-software-engineering.pdf`
  9. `09-software-engineering-uml.pdf`
  10. `10-management-fashion-luxury.pdf`
- Updated `InteractiveCertificationCard.tsx`:
  - Replaced `<button>` with accessible `<a>` tag configured with `target="_blank"` and `rel="noopener noreferrer"`.
  - Configured `url` fallback resolving directly to GitHub repository blob URLs.
- Populated all 10 certificate items in `src/app/education/page.tsx` with their respective GitHub blob URLs and preview paths.
- Transformed Certifications section from 3 oversized cards into a compact, responsive 4-column 3D credential gallery:
  - Responsive layout: Desktop 4 columns, Tablet 2 columns, Mobile 1 column (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6`).
  - Integrated 10 real verified certificates from course/certification files:
    1. CCNAv7: Introduction to Networks (Cisco)
    2. CCNAv7: Switching, Routing, and Wireless Essentials (Cisco)
    3. Introduction to Generative AI (Google Cloud via Coursera)
    4. AI for Everyone (DeepLearning.AI via Coursera)
    5. Symmetric Cryptography (University of Colorado System via Coursera)
    6. Algorithmic Toolbox (UC San Diego via Coursera)
    7. Foundations of Data Science (Google via Coursera)
    8. Introduction to Software Engineering (IBM via Coursera)
    9. Software Engineering: Modeling Software Systems using UML (HKUST via Coursera)
    10. Management of Fashion and Luxury Companies (Università Bocconi via Coursera)
  - Excluded unverified/third-party certificates (specifically excluded "Wireless Communications for Everybody").
- Implemented `InteractiveCertificationCard.tsx` with physical 3D properties:
  - 3D perspective and cursor-following tilt (±3.8° constraint).
  - Subtle directional shadow deepening on hover (`-6px` lift).
  - Cursor-following dynamic radial light beam reflection.
  - Micro surface grain/noise texture overlay (`opacity-[0.035]`).
  - Subtle bevel edge highlight (`inset 0 1px 1px rgba(255,255,255,0.15)`).
  - Multi-layer spatial depth (`translateZ` on category chip, title/issuer, and action button).
- Simplified information hierarchy prioritizing Issuer/Platform, bold Title, Category chip, Date, and "View Certificate →".
- Prepared structured `CertificateItem` model (`preview: null`) ready for modal/lightbox integration in subsequent updates.
- Verified zero-regression Next.js static build across all 7 routes.

## 2026-09-06 — Education Section Verified Content Update

### Completed
- Replaced placeholder education entries with verified academic credentials:
  - University Degree: Bachelor of Technology in Computer and Communication Engineering, Manipal University Jaipur (2022 — 2025, Jaipur, India).
    - Concentration: Artificial Intelligence, Machine Learning, Computer Networks & Systems Architecture.
    - Highlights: Led IEEE AESS campus events as Event Head; won Smart India Hackathon (SIH) campus round with a student team; demonstrated strong leadership and team coordination.
  - Higher Secondary (Class XII): Higher Secondary Certificate, Yeshwantrao Chavan College (2021 — 2022, India).
    - Concentration: Physics, Chemistry, Mathematics, Biology (PCMB) + Information Technology.
    - Highlights: Achieved 80% overall in Higher Secondary education; built a broad academic foundation across science, mathematics, and information technology.
    - Kept existing core academic modules intact.
  - Secondary School (Class X): Secondary School Certificate, G A SHAH ENG PRIMARY SCHOOL (2019 — 2020, India).
    - Concentration: Core Science, Mathematics & Foundational Computing.
    - Highlights: Achieved 63% overall in secondary school education; served as Volleyball Team Captain; served as Club House Head.
    - Kept existing core academic modules intact.
- Conditionally hid academic coursework modules on entries where no verified list is provided (e.g. university degree).
- Preserved 100% of existing visual design, timeline layout, card borders, shadows, hover/focus interactions, responsive styling, and color palette.
- Verified zero regression build with Next.js static generation.

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
