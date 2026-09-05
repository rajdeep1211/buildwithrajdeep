# AGENTS.md

## Purpose

This repository is the source of truth for the portfolio project.

Any AI agent working on this project must be able to understand:

- what the project is
- what has been completed
- what is currently being worked on
- what should happen next
- why important decisions were made
- how to safely continue the work

The repository is designed to be portable across AI agents.

---

## Project Principle

> **The website presents the work; the repository preserves the work.**

The repository is not only code. It is also the project's external memory.

---

## Before Starting Work

Every AI agent should follow this order:

1. Read `AGENTS.md`.
2. Read `docs/WORKLOG.md`.
3. Read `docs/PHASES.md`.
4. Read `docs/RULES.md`.
5. Read the relevant project documentation.
6. Inspect the current code and repository state.
7. Check `git status` and recent Git history.
8. Identify:
   - current phase
   - completed work
   - active work
   - next intended work
   - relevant decisions and constraints

If documentation conflicts with the actual code or Git state, verify the repository and update the documentation rather than assuming the documentation is correct.

---

## How to Work

Follow this workflow:

**Understand → Inspect → Plan → Apply Value-First → Build → Verify → Update Memory**

### Understand
Understand the current project state before making changes.

### Inspect
Inspect existing code, documentation, structure, and Git state before modifying anything.

### Plan
Determine the smallest coherent set of changes required for the current objective.

### Apply Value-First
Prioritize work that creates meaningful portfolio value. Avoid unnecessary complexity, premature optimization, and work that does not directly serve the project.

### Build
Implement the planned changes while respecting the existing architecture, rules, and decisions.

### Verify
Verify that the implementation works and that documentation still reflects reality.

### Update Memory
Update the relevant project documentation so the next agent can continue without reconstructing the project's history.

---

## Project Memory

The primary project memory is maintained inside the repository.

### `docs/WORKLOG.md`

Tracks the project's working state:

- what has been completed
- what is currently in progress
- what comes next
- important decisions
- meaningful changes

This is the first document to check when determining the current state of the project.

### `docs/PHASES.md`

Defines the project roadmap and phases.

Use it to understand where the project is going and what stage the project is currently in.

### `docs/RULES.md`

Defines the rules and constraints that should be followed while building the project.

Do not violate these rules without explicitly revisiting and changing the relevant decision.

### `docs/ARCHITECTURE.md`

Defines the project's architectural structure and how the major pieces fit together.

### Git

Git history provides an additional record of what actually changed.

When necessary, use:

- `git status`
- `git log`
- `git diff`

Git is used to verify the actual state of the repository.

---

## Documentation Rules

Documentation is part of the project, not an afterthought.

When meaningful work is completed:

1. Update the relevant documentation.
2. Update `docs/WORKLOG.md`.
3. Record important decisions when they affect future work.
4. Keep documentation concise and factual.
5. Do not document assumptions as completed work.
6. Do not create duplicate sources of truth.

The goal is that another AI agent can enter the repository and continue the work with minimal context.

---

## Git Rules

Before making changes:

- inspect the current Git state
- do not overwrite or discard existing work without understanding it
- preserve intentional changes

After meaningful work:

- verify the changes
- update project memory
- commit the completed work when appropriate
- push when the established workflow requires the remote repository to be updated

Git history should remain understandable and useful.

---

## Agent Handoff

When ending a work session, leave the repository ready for another agent.

The next agent should be able to determine from the repository:

- **Current phase**
- **Completed**
- **In progress**
- **Next**
- **Important decisions**
- **Relevant files**

The current agent is responsible for updating project memory before handing off.

---

## Agent Independence

This project must not depend on the memory of a particular AI agent.

A new agent should be able to start from the repository and understand the project without relying on previous chat history.

The workflow, decisions, progress, and next steps should therefore be preserved in the repository.

---

## Change Discipline

Keep changes focused.

Do not:

- introduce unnecessary technologies
- change established architecture without reason
- duplicate existing documentation
- add complexity without portfolio value
- assume unfinished decisions are finalized
- modify unrelated files without a clear reason

When a decision is not finalized, treat it as undecided.

When a significant decision changes, update the appropriate documentation.

---

## Source of Truth

When determining project reality, use this priority:

1. **Current code and repository state**
2. **Git history**
3. **Project documentation**
4. **Previous AI conversation**

Previous conversation is context, not permanent project memory.

The repository should contain everything necessary for continued development.