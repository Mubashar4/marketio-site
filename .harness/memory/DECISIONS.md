# Decision Log (append-only)

> Format: `ADR-### | date | decision | rationale` — supersessions are noted
> inside the Decision cell of the NEW entry (never edit old rows)
> Never rewrite entries. Supersede by referencing the old ID.

| ID | Date | Decision | Rationale |
|---|---|---|---|
| ADR-001 | 2026-08-25 | Marketio repositions as high-ticket service agency for marketing agencies (not SaaS) | SyncLead.io covers SaaS; Marketio becomes premium implementation layer |
| ADR-002 | 2026-08-25 | Four-tier offering architecture: Deliverability-as-a-Service, AI Growth Engine, SyncLead Ops Layer, White-Label Backend | Outcome-based high-ticket packaging over commodity tasks |
| ADR-003 | 2026-08-25 | Gray-market offers (LinkedIn invites, à-la-carte mailboxes) permanently banned from Marketio properties | Protects premium positioning; sold via unbranded burner channel only |
| ADR-004 | 2026-08-25 | Stack locked: Astro + Tailwind, static output, Cloudflare Pages; AMP rejected; React/Vue/Svelte forbidden in repo | Zero-JS default, edge TTFB < 100ms, hero canvas via vanilla JS |
| ADR-005 | 2026-08-25 | Brand palette locked to #0B0B0B / #141414 / #FAFAFA / #FF5500 | Matches logo identity; single orange accent anchors CTAs |
| ADR-006 | 2026-08-25 | Agent harness = 3 roles (marketio-code, marketio-architect, marketio-ask), specs authoritative over inline prompts | Deterministic handoffs; specs are single source of truth |
| ADR-007 | 2026-08-25 | Graph RAG implemented as file-based markdown graph, not vector DB | Repo size << vector-store payoff threshold; deterministic + git-diffable |
| ADR-008 | 2026-08-26 | Harness audit v1.0: codegraph seed corrected (nodes 7→11, added ai-context.json + robots.txt, removed undefined meta-edges, normalized feeds direction); DECISIONS format header aligned to actual columns; README backtick typo; index.config.json constraintMap repointed to .harness/specs/*; architecture.md tree gains src/lib/schema.js; seo-schema.md JSON-LD scope clarified (legal exempt); .roomodes grants architect scoped edit over .harness/ | Gate G6 demands zero open decisions; architect-mandated bookkeeping was unexecutable without edit rights |
| ADR-009 | 2026-08-28 | Marketio repositions from "deliverability infrastructure provider" to "autonomous AI growth partner for agencies" — all public copy, specs, and schema must reflect this pivot | Product owner decision: AI SDR/BDR agent autonomy is the primary differentiator; deliverability becomes a supporting capability, not the headline offering |
| ADR-010 | 2026-08-28 | Homepage H1 locked to "Your pipeline runs itself." and subheadline locked to "Stop hiring SDRs. Marketio deploys AI agents that prospect across LinkedIn, email and social — and book meetings while your team focuses on closing." (Supersedes any prior H1 copy in specs) | Approved by product owner; outcome-first framing that leads with agent autonomy |
| ADR-011 | 2026-08-28 | HeroCanvas redesigned from delivery-engine node graph (Leads→Gateway→Mailboxes→SyncLead) to autonomous agent pipeline (Prospect→Engage→Book→Close); architecture.md and brand.md Motion section updated accordingly | Canvas must visually reinforce the AI-first repositioning; old flow exposed internal tooling metaphors incompatible with public brand |
| ADR-012 | 2026-08-28 | Glass-morphism effects permanently rejected on all Marketio pages | Violates performance budget (Lighthouse ≥ 98 target) and brand spec (four-token palette only, no backdrop-filter compositing layers); ADR is final — no override permitted |
| ADR-013 | 2026-10-10 | Harness spec reconciliation & target tree alignment: architecture.md updated to reflect 5 legal compliance pages, /pipeline-sync/ route, careers and contact pages; codegraph.md audited and normalized (node count 29, duplicate edges and meta-edges pruned) | Aligns single source of truth with actual production codebase; resolves harness audit discrepancies |
