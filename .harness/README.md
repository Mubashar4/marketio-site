# Marketio Agent Harness

Operational harness for AI agents working on the Marketio.net codebase
(Astro + Tailwind CSS, deployed to Cloudflare Pages).

## Directory Layout

```
.harness/
├── README.md              ← you are here
├── roles/                 ← role charters (one per agent mode)
│   ├── marketio-code.md
│   ├── marketio-architect.md
│   └── marketio-ask.md
├── specs/                 ← single source of truth, shared by all roles
│   ├── brand.md           ← palette, typography, voice, CTA rules
│   ├── architecture.md    ← stack rules, file conventions, deploy contract
│   ├── seo-schema.md      ← SEO metadata + JSON-LD + llm.txt protocol
│   └── workflow.md        ← task lifecycle, quality gates, handoff protocol
├── graph-rag/
│   ├── SPEC.md            ← how the knowledge graph is built & queried
│   ├── codegraph.md       ← THE live dependency map (agents read this first)
│   └── index.config.json  ← what gets indexed, in what order
└── memory/
    ├── DECISIONS.md       ← append-only decision log (ADR-lite)
    └── LESSONS.md         ← post-task learnings agents must consult
```

## How Agents Use This

1. **On boot**, an agent reads its charter in `roles/<mode>.md`.
2. Before writing anything, it reads `graph-rag/codegraph.md` to locate
   every file it will touch and everything that depends on it.
3. It follows `specs/workflow.md` for the task lifecycle.
4. It checks `specs/brand.md` and `specs/architecture.md` before any
   styling or structural decision — these files override agent memory.
5. On completion, it appends to `memory/DECISIONS.md` (architectural
   choices) or `memory/LESSONS.md` (gotchas discovered mid-build).
6. Any file created/moved/deleted updates `graph-rag/codegraph.md`
   **in the same session** — a stale graph is worse than no graph.

## Rules

- `.harness/specs/` is authoritative. If inline role text contradicts a
  spec, the spec wins.
- `graph-rag/codegraph.md` is regenerated, never hand-guessed: update
  from actual diffs only.
- `memory/DECISIONS.md` is append-only. Never rewrite history; supersede
  with a new entry referencing the old ID.

## Maintenance

- After each completed feature: refresh `codegraph.md` nodes/edges for
  touched subtrees only.
- After each pivot/rebrand: architect reviews all specs, bumps version
  header in each file.
