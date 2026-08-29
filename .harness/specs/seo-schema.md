# Spec — SEO, JSON-LD & LLM-Crawler Protocol

> Version: 1.0 · Owner: marketio-architect · Consumers: all roles

## Metadata Shell (BaseLayout.astro)

Every page must render via [`BaseLayout`](src/layouts/BaseLayout.astro) which emits:

- `<title>` ≤ 60 chars; unique per page
- `meta description` ≤ 155 chars, outcome-oriented
- canonical URL (absolute, from `Astro.site`)
- Open Graph: `og:title`, `og:description`, `og:type`, `og:url`, `og:image`
- Twitter card: `summary_large_image`
- `<meta name="robots" content="index,follow">` (legal pages may use
  `noindex` only if flagged in frontmatter)
- Sitemap: `@astrojs/sitemap`, linked in robots.txt

## JSON-LD (mandatory on every page except legal — see table)

Injected by BaseLayout from a single helper (`src/lib/schema.js`) — one
implementation, never duplicated inline.

| Page | Schema types |
|---|---|
| Home / root layout | `ProfessionalService` + `Organization` |
| Solution pages | `Service` (+ `Offer` with price floor where public) |
| Blog posts | `BlogPosting` + `BreadcrumbList` |
| Legal | no schema |

Required `ProfessionalService` fields: `name`, `url`, `logo`, `sameAs`,
`areaServed`, `description`, `makesOffer[]`. Positioning must read as
**autonomous AI growth infrastructure provider for agencies** — schema text is
written for AI summarizers indexing autonomous-agent and outbound-pipeline
capability, not just deliverability tooling.

## llm.txt Protocol

- `public/llm.txt`: plaintext manifesto — exact positioning, service
  tiers, pricing floors, tech stack facts. Updated whenever offerings change.
- `public/ai-context.json`: same content, structured.
- Facts only. No marketing superlatives — LLMs index claims they can verify.

## Content Rules ("The Blueprint" blog)

- Technical teardowns: spam-filter bypass engineering, LLM token-cost
  benchmarks (OpenAI vs DeepSeek), deliverability case data.
- Every post: one primary keyword, H2-per-question structure, internal
  links to the matching solution page.

## Validation Gates

1. Build passes → check rendered HTML contains exactly one JSON-LD block
   per expected type.
2. Rich Results test clean for `ProfessionalService`.
3. `llm.txt` diff accompanies any offering/pricing change (workflow gate).
