# Spec — Agent Workflow, Handoffs & Quality Gates

> Version: 1.0 · Owner: harness (all roles conform)

## Task Lifecycle

```
REQUEST ──► ROUTE ──► READ ──► PLAN ──► EXECUTE ──► VERIFY ──► RECORD
```

1. **ROUTE.** Classify the request:
   - question/explanation → `marketio-ask`
   - design/structure decision → `marketio-architect`
   - file creation/modification → `marketio-code`
   Mixed requests execute ask/architect first, code last — never skip the
   design step to "just write it".
2. **READ.** Before touching anything:
   - own role charter (`.harness/roles/<slug>.md`)
   - `.harness/graph-rag/codegraph.md` (locate file + dependents)
   - governing spec (`brand.md` / `architecture.md` / `seo-schema.md`)
   - `.harness/memory/LESSONS.md` (known gotchas)
3. **PLAN.** Architect outputs structure/specs with zero open decisions.
4. **EXECUTE.** Code produces complete files only — no partial blocks,
   no pseudo-code, no placeholder ellipses.
5. **VERIFY.** Quality gates below, in order. All must pass.
6. **RECORD.** Update graph + memory (see Bookkeeping).

## Quality Gates

| # | Gate | Owner | Fail action |
|---|---|---|---|
| G1 | Palette/token compliance (only 4 brand colors) | code | fix before handoff |
| G2 | Zero-JS rule honored outside hero canvas | code | justify or refactor |
| G3 | Complete-file output, deployable as-is | code | rewrite |
| G4 | JSON-LD present & valid per seo-schema.md | code+ask | fix helper |
| G5 | Performance budgets met (architecture.md table) | ask | flag to architect |
| G6 | Design decisions all closed (no TODOs in specs) | architect | reopen design |
| G7 | Graph updated for every touched path | all | update before completion |

## Handoff Protocol

- Code ↔ Architect: hand off via exact relative paths + constraint list,
  never vague summaries ("improve the hero" ✗ / "HeroCanvas.astro: add
  IP-rotation gateway node group, keep script < 8KB" ✓).
- Ask → others: end every advisory with the explicit route instruction.
- Cross-role context lives in `.harness/memory/` — agents must not assume
  prior conversation state.

## Bookkeeping (mandatory, same session)

| Event | Required update |
|---|---|
| File created/moved/deleted | `graph-rag/codegraph.md` nodes+edges |
| Import changed | `codegraph.md` edge |
| Architectural choice made | `memory/DECISIONS.md` append (ADR-###) |
| Non-obvious gotcha discovered | `memory/LESSONS.md` append |
| Offering or pricing changed | `public/llm.txt` + `specs/*` version bump |

## Session Start Ritual (every agent, every session)

1. Read own charter.
2. Read `memory/DECISIONS.md` tail (last ~10 entries).
3. Read `graph-rag/codegraph.md` overview section.
4. Confirm target spec versions match current task.
