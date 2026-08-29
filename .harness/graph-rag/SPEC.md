# Graph RAG — Specification

> Version: 1.0 · Owner: marketio-architect · Consumers: all roles
> Implementation: file-based knowledge graph (see rationale below)

## Why File-Based (not vector DB)

For a static Astro site (< ~100 source files), a vector store adds an
embedding pipeline and retrieval drift for zero recall gain. A maintained,
greppable [`codegraph.md`](codegraph.md) gives agents O(1) exact lookup —
deterministic, diffable in git, readable by humans.

`# ponytail: flat markdown graph; swap for an embedding index only if the
repo passes ~300 source files or cross-repo search becomes a need.`

Upgrade path: `index.config.json` already declares scan targets, so a
future script can regenerate nodes/edges mechanically without touching
the schema.

## Graph Model

### Nodes

| Type | ID format | Example |
|---|---|---|
| page | `page:<route>` | `page:/deliverability` |
| component | `cmp:<Path>` | `cmp:src/components/HeroCanvas.astro` |
| layout | `lay:<Path>` | `lay:src/layouts/BaseLayout.astro` |
| content | `cnt:<collection>` | `cnt:blog` |
| config | `cfg:<Path>` | `cfg:tailwind.config.mjs` |
| asset | `ast:<Path>` | `ast:public/llm.txt` |
| spec | `spec:<name>` | `spec:seo-schema` |

### Edges (directed)

| Relation | Meaning |
|---|---|
| `imports` | A imports B (component/layout/script) |
| `renders` | page/layout renders component |
| `belongs-to` | page uses layout / post belongs to collection |
| `constrained-by` | artifact governed by spec |
| `feeds` | asset consumed by crawler/agent (llm.txt → LLM crawlers) |

## Update Protocol

1. After any diff that creates/moves/deletes a file or changes an import:
   edit the matching node + edges **in the same session** (workflow gate G7).
2. Never guess entries from memory — derive from actual diffs.
3. Keep the Overview section (counts + health) accurate; it is what agents
   read first.
4. Full regeneration order is declared in [`index.config.json`](index.config.json).

## Query Patterns (how agents use the graph)

- "What breaks if I change X?" → find node X, follow inbound edges.
- "Where do I add Y?" → find governing spec via `constrained-by`, follow
  outbound to sibling pages/components for the established pattern.
- "What does this page ship?" → page → `renders` → components →
  `constrained-by` → specs touched.
