# Project Rules

> **Status:** Active  
> **Version:** 1.0  
> **Last Updated:** 2026-09-05

## 1. Core Principles

- Build for clarity, not complexity.
- The portfolio should demonstrate real engineering ability, not just list technologies.
- Every significant feature should have a clear purpose.
- Prefer evidence over claims.
- Do not add technology merely for the sake of the tech stack.
- The portfolio is an evolving record of the developer's engineering journey.
- Rules may evolve, but changes must be intentional and documented.

## 2. Value-First Rule

Before adding anything, ask:

1. Is this necessary?
2. Does it create meaningful value?
3. Does it improve the experience, solve a real problem, or enable something important?
4. Can the same result be achieved more simply?
5. Does it introduce unnecessary complexity?

If something does not create meaningful value, **remove it**.

This applies to:
- Features
- Components
- Dependencies
- Abstractions
- Animations
- APIs
- Design elements
- Configuration
- Documentation
- Lines of code

### AI Self-Review Rule

AI must continuously challenge its own output.

Code should not exist merely because it can be written. Every implementation should justify its existence.

The preferred outcome is:

**Keep → Simplify → Remove**

rather than automatically adding more.

## 3. Engineering Rules

- Keep components modular, understandable, and appropriately scoped.
- Avoid premature abstractions.
- Prefer simple solutions over clever solutions.
- Minimize dependencies.
- Do not introduce a library when native or existing project capabilities are sufficient.
- Preserve existing functionality when making changes.
- Handle relevant loading, error, empty, and responsive states.
- Treat accessibility as a requirement, not an enhancement.
- Consider performance before introducing heavy assets, libraries, or interactions.
- Do not solve hypothetical problems before they become real problems.

## 4. Design Rules

- Maintain one coherent visual language across the portfolio.
- Prioritize content, hierarchy, and usability over decoration.
- Animations must have a purpose.
- Avoid visual effects that distract from the content.
- Do not add UI elements simply because they look impressive.
- Prefer intentional whitespace and clear hierarchy.
- Design for both mobile and desktop.
- Reuse established patterns instead of creating unnecessary variations.
- The design should feel personal and engineered, not like an unmodified template.

## 5. Documentation Rules

Documentation is part of the implementation.

- Major product, architectural, and technical decisions must be documented.
- Do not silently rewrite important historical decisions.
- When a decision changes, record what changed, why, and when.
- Keep each documentation file responsible for its own domain.

### Documentation Ownership

| File | Responsibility |
|---|---|
| `PRD.md` | What we are building and why |
| `ARCHITECTURE.md` | How the system is technically structured |
| `RULES.md` | How we build and maintain the project |
| `PHASES.md` | What we are doing and in what order |
| `DESIGN.md` | How the product should look and feel |

Avoid duplicating the same information across multiple documents unless the duplication adds useful context.

## 6. AI Collaboration Rules

- AI may propose, generate, explain, debug, research, and improve.
- The developer owns the final decision.
- Never accept generated code without understanding what it does.
- AI should prefer the smallest solution that satisfies the requirement.
- AI must question whether proposed code, dependencies, abstractions, and features are actually necessary.
- AI must remove unnecessary code rather than defending it.
- Important AI-assisted architectural decisions should be documented when they materially affect the project.
- When uncertain, prefer explaining the tradeoff instead of silently making a large architectural change.

## 7. Git & GitHub Rules

- `main` should remain stable and deployable.
- Each commit should represent one logical change.
- Use meaningful commit messages.
- Documentation changes are committed like code.
- Do not mix unrelated changes into one commit when avoidable.
- Do not use Git history to hide mistakes or decisions.
- GitHub is part of the project's external memory and should preserve meaningful project evolution.

### Commit Style

Use clear prefixes where appropriate:

- `feat:` — new functionality
- `fix:` — bug fix
- `refactor:` — code restructuring without intended behavior change
- `docs:` — documentation
- `design:` — visual or UX changes
- `chore:` — maintenance/configuration
- `test:` — tests

Examples:

```text
feat: add project timeline
fix: correct mobile navigation
docs: update architecture
design: refine hero section
refactor: simplify project card
```

## 8. Change Management

Before making a significant change:

1. Identify the problem or opportunity.
2. Check the PRD and current architecture.
3. Apply the Value-First Rule.
4. Decide whether documentation needs to change.
5. Implement the smallest appropriate solution.
6. Test the result.
7. Review the change for unnecessary complexity.
8. Update documentation if required.
9. Commit the complete logical change.

If a change contradicts an existing documented decision, explicitly acknowledge the change and its reason.

## 9. Definition of Done

A feature or change is considered done when:

- It works as intended.
- It does not unnecessarily break existing functionality.
- It is responsive where relevant.
- It meets relevant accessibility requirements.
- There are no obvious errors or warnings introduced by the change.
- Unnecessary code and complexity have been removed.
- Required documentation is updated.
- The change is committed to Git.

## 10. Final Decision Rule

When choosing between two valid solutions:

> **Prefer the solution that provides the required value with less unnecessary complexity.**

When something provides no meaningful value:

> **Do not build it.**

When something used to provide value but no longer does:

> **Remove it.**
