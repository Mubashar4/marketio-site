# CodeGraph — Live Dependency Map

> Version: 1.0.0 · Regenerated from actual diffs only (see SPEC.md)
> Last updated: 2026-08-29 · 4 navbar pages built (3 solutions + blog index)

## Overview

| Metric | Value |
|---|---|
| Nodes | 33 (4 spec · 5 asset · 2 cfg · 1 layout · 3 component · 1 lib · 12 page · 1 style · 4 build-output) |
| Edges | 46 |
| Site source files | 19 (`src/` populated with solutions, blog, legal, careers, contact) |
| Graph health | ACTIVE |

## Nodes

### spec
- `spec:brand` — [`.harness/specs/brand.md`](../specs/brand.md)
- `spec:architecture` — [`.harness/specs/architecture.md`](../specs/architecture.md)
- `spec:seo-schema` — [`.harness/specs/seo-schema.md`](../specs/seo-schema.md)
- `spec:workflow` — [`.harness/specs/workflow.md`](../specs/workflow.md)

### cfg
- `cfg:tailwind.config.mjs` — [`tailwind.config.mjs`](../../tailwind.config.mjs) — brand tokens
- `cfg:astro.config.mjs` — [`astro.config.mjs`](../../astro.config.mjs) — site URL + sitemap

### asset (crawler-facing)
- `ast:public/robots.txt` — [`public/robots.txt`](../../public/robots.txt)
- `ast:public/llm.txt` — *(planned)*
- `ast:public/ai-context.json` — *(planned)*
- `ast:public/_headers` — *(planned)*
- `ast:public/_redirects` — *(planned)*

### lay (layout)
- `lay:src/layouts/BaseLayout.astro` — [`src/layouts/BaseLayout.astro`](../../src/layouts/BaseLayout.astro) — SEO shell + JSON-LD injection

### cmp (component)
- `cmp:src/components/Navbar.astro` — [`src/components/Navbar.astro`](../../src/components/Navbar.astro)
- `cmp:src/components/Footer.astro` — [`src/components/Footer.astro`](../../src/components/Footer.astro)
- `cmp:src/components/HeroCanvas.astro` — [`src/components/HeroCanvas.astro`](../../src/components/HeroCanvas.astro) — animated autonomous agent pipeline: Prospect→Engage→Book→Close (vanilla JS)

### lib (shared helper)
- `cmp:src/lib/schema.js` — [`src/lib/schema.js`](../../src/lib/schema.js) — single JSON-LD generator

### style
- `ast:src/styles/global.css` — [`src/styles/global.css`](../../src/styles/global.css) — Tailwind directives + base layer

### page
- `page:/` — [`src/pages/index.astro`](../../src/pages/index.astro) — homepage
- `page:/deliverability` — [`src/pages/deliverability.astro`](../../src/pages/deliverability.astro) — Deliverability-as-a-Service solution page (Service JSON-LD)
- `page:/ai-automation` — [`src/pages/ai-automation.astro`](../../src/pages/ai-automation.astro) — AI Growth Engine solution page (Service JSON-LD)
- `page:/pipeline-sync` — [`src/pages/pipeline-sync.astro`](../../src/pages/pipeline-sync.astro) — Pipeline Sync solution page (Service JSON-LD)
- `page:/blog` — [`src/pages/blog/index.astro`](../../src/pages/blog/index.astro) — The Blueprint blog index (placeholder posts)
- `page:/careers` — [`src/pages/careers.astro`](../../src/pages/careers.astro) — Careers page
- `page:/contact` — [`src/pages/contact.astro`](../../src/pages/contact.astro) — Contact page
- `page:/legal/privacy` — [`src/pages/legal/privacy.astro`](../../src/pages/legal/privacy.astro) — Privacy Policy page
- `page:/legal/terms` — [`src/pages/legal/terms.astro`](../../src/pages/legal/terms.astro) — Terms of Service page
- `page:/legal/acceptable-use` — [`src/pages/legal/acceptable-use.astro`](../../src/pages/legal/acceptable-use.astro) — Acceptable Use page
- `page:/legal/security` — [`src/pages/legal/security.astro`](../../src/pages/legal/security.astro) — Security Overview page
- `page:/legal/cookie` — [`src/pages/legal/cookie.astro`](../../src/pages/legal/cookie.astro) — Cookie Policy page

## Edges

Only SPEC-defined relations appear here ([`SPEC.md`](SPEC.md)):
`imports` / `renders` / `belongs-to` / `constrained-by` / `feeds`.

| From | Relation | To |
|---|---|---|
| `page:/` | belongs-to | `lay:src/layouts/BaseLayout.astro` |
| `page:/` | renders | `cmp:src/components/Navbar.astro` |
| `page:/` | renders | `cmp:src/components/HeroCanvas.astro` |
| `page:/` | renders | `cmp:src/components/Footer.astro` |
| `page:/careers` | belongs-to | `lay:src/layouts/BaseLayout.astro` |
| `page:/careers` | renders | `cmp:src/components/Navbar.astro` |
| `page:/careers` | renders | `cmp:src/components/Footer.astro` |
| `page:/deliverability` | belongs-to | `lay:src/layouts/BaseLayout.astro` |
| `page:/deliverability` | renders | `cmp:src/components/Navbar.astro` |
| `page:/deliverability` | renders | `cmp:src/components/Footer.astro` |
| `page:/ai-automation` | belongs-to | `lay:src/layouts/BaseLayout.astro` |
| `page:/ai-automation` | renders | `cmp:src/components/Navbar.astro` |
| `page:/ai-automation` | renders | `cmp:src/components/Footer.astro` |
| `page:/pipeline-sync` | belongs-to | `lay:src/layouts/BaseLayout.astro` |
| `page:/pipeline-sync` | renders | `cmp:src/components/Navbar.astro` |
| `page:/pipeline-sync` | renders | `cmp:src/components/Footer.astro` |
| `page:/blog` | belongs-to | `lay:src/layouts/BaseLayout.astro` |
| `page:/blog` | renders | `cmp:src/components/Navbar.astro` |
| `page:/blog` | renders | `cmp:src/components/Footer.astro` |
| `lay:src/layouts/BaseLayout.astro` | imports | `cmp:src/lib/schema.js` (service helper added) |
| `page:/contact` | belongs-to | `lay:src/layouts/BaseLayout.astro` |
| `page:/contact` | renders | `cmp:src/components/Navbar.astro` |
| `page:/contact` | renders | `cmp:src/components/Footer.astro` |
| `page:/legal/privacy` | belongs-to | `lay:src/layouts/BaseLayout.astro` |
| `page:/legal/privacy` | renders | `cmp:src/components/Navbar.astro` |
| `page:/legal/privacy` | renders | `cmp:src/components/Footer.astro` |
| `page:/legal/terms` | belongs-to | `lay:src/layouts/BaseLayout.astro` |
| `page:/legal/terms` | renders | `cmp:src/components/Navbar.astro` |
| `page:/legal/terms` | renders | `cmp:src/components/Footer.astro` |
| `page:/legal/acceptable-use` | belongs-to | `lay:src/layouts/BaseLayout.astro` |
| `page:/legal/acceptable-use` | renders | `cmp:src/components/Navbar.astro` |
| `page:/legal/acceptable-use` | renders | `cmp:src/components/Footer.astro` |
| `page:/legal/security` | belongs-to | `lay:src/layouts/BaseLayout.astro` |
| `page:/legal/security` | renders | `cmp:src/components/Navbar.astro` |
| `page:/legal/security` | renders | `cmp:src/components/Footer.astro` |
| `page:/legal/cookie` | belongs-to | `lay:src/layouts/BaseLayout.astro` |
| `page:/legal/cookie` | renders | `cmp:src/components/Navbar.astro` |
| `page:/legal/cookie` | renders | `cmp:src/components/Footer.astro` |
| `lay:src/layouts/BaseLayout.astro` | imports | `cmp:src/lib/schema.js` |
| `lay:src/layouts/BaseLayout.astro` | imports | `ast:src/styles/global.css` |
| `cfg:tailwind.config.mjs` | constrained-by | `spec:brand` |
| `lay:src/layouts/BaseLayout.astro` | constrained-by | `spec:seo-schema` |
| `page:/` | constrained-by | `spec:seo-schema` |
| all site artifacts | constrained-by | `spec:architecture` |
| styled artifacts | constrained-by | `spec:brand` |
| `ast:public/robots.txt` | feeds | sitemap crawlers |
| `ast:public/llm.txt` | feeds | LLM crawlers |
| `cfg:astro.config.mjs` | imports | `@astrojs/sitemap` (pinned 3.2.1) |
| `cfg:astro.config.mjs` | imports | `@astrojs/tailwind` |
| `cmp:src/components/HeroCanvas.astro` | constrained-by | `spec:brand` (canvas script uses only `#FF5500` / `#FAFAFA`) |

## Change Log

| Date | Change | By |
|---|---|---|
| 2026-08-25 | Seeded graph with harness nodes; no site source yet | marketio-code |
| 2026-08-26 | Audit fix: node count corrected, asset seed completed, meta-edges removed | marketio-code |
| 2026-08-27 | Homepage build: added cfg (2), lay (1), cmp (3), lib (1), style (1), page (1) nodes + 16 edges. Graph status → ACTIVE | marketio-code |
| 2026-08-27 | `page:/` AI Growth Engine blurb rewritten — dropped jargon ("token-cost engineering"), aligned to autonomous-agent product vision per brand spec | marketio-code |
| 2026-08-28 | AI-first repositioning pivot: `cmp:HeroCanvas` label updated (delivery-engine→autonomous agent pipeline); `spec:brand` Voice & Positioning + Motion sections updated; `spec:architecture` HeroCanvas comment updated; `spec:seo-schema` ProfessionalService description updated. ADR-009–ADR-012 recorded. | marketio-architect |
| 2026-08-28 | Homepage AI-first redesign implemented per `homepage-redesign-brief.md`: `page:/` H1→"Your pipeline runs itself.", tiers reordered (AI SDRs first), steps rewritten, CTAs updated, closing copy updated; `cmp:HeroCanvas` labels→Prospect/Engage/Book/Close, id→agent-pipeline, comments updated; `cmp:src/lib/schema.js` description→autonomous AI growth, offers reordered (AI SDR first). Build passes. | marketio-code |
| 2026-08-28 | Copy refinement pass: `page:/` SyncLead tier renamed "SyncLead Integration" + blurb rewritten for clarity; tiers H2→"Everything your pipeline needs to run itself" + support text updated; `cmp:src/lib/schema.js` SyncLead offer name+desc aligned. `cmp:HeroCanvas` stage labels moved below canvas (overlap fix). Build passes. | marketio-code |
| 2026-08-28 | Rename "SyncLead Integration" → "Unified Pipeline Sync" in `page:/` tier card + `cmp:src/lib/schema.js` offer. Blurb updated to CRM-agnostic copy. Build passes. | marketio-code |
| 2026-08-29 | Legal page suite scaffolding: added terms, privacy, cookie, acceptable-use, and security pages under legal subroute. Updated Footer to include complete 5-link section. Build passes. | marketio-code |
| 2026-08-29 | Careers & Contact implementation: added careers and contact pages, updated footer navigation links. Build passes. | marketio-code |
| 2026-08-29 | SyncLead de-branding: renamed "SyncLead Ops" → "Pipeline Sync" in `cmp:Navbar` and `cmp:Footer` links and routes (`/synclead-integration/` → `/pipeline-sync/`). Removed "SyncLead layer" from careers role description. Redesigned `page:/careers` layout (fixed section overlap, added values cards, general-application CTA, closing CTA). Build passes. | marketio-code |
| 2026-08-29 | Four navbar pages built: added `page:/deliverability`, `page:/ai-automation`, `page:/pipeline-sync` (all with Service JSON-LD via new `service()` helper in schema.js + `schema="service"` prop in BaseLayout), and `page:/blog` index with placeholder posts. 12 pages total. Build passes. | marketio-code |
