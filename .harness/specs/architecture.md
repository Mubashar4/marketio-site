# Spec — Site Architecture & Conventions

> Version: 1.1 · Owner: marketio-architect · Consumers: all roles

## Stack (locked)

- **Framework:** Astro (static output) + Tailwind CSS
- **Interactivity:** vanilla JS only. Hero canvas = inline script or tiny
  island-free module. React/Vue/Svelte/Preact forbidden.
- **Hosting:** Cloudflare Pages. Deploy artifacts: `_headers`, `_redirects`
  in `public/`. Wrangler CLI for previews. GitHub Pages rejected.
- **AMP:** rejected permanently.

## Target File Tree

```
marketio-site/
├── public/
│   ├── llm.txt                 # AI-crawler manifesto & service specs
│   ├── ai-context.json         # structured positioning for LLM summarizers
│   ├── robots.txt
│   ├── _headers                # cache-control, security headers
│   └── _redirects
├── src/
│   ├── components/
│   │   ├── HeroCanvas.astro    # animated autonomous agent pipeline (Prospect→Engage→Book→Close)
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   └── PricingCard.astro   # *(planned)*
│   ├── layouts/
│   │   └── BaseLayout.astro    # SEO shell + JSON-LD injection point
│   ├── lib/
│   │   └── schema.js           # single JSON-LD generator (seo-schema.md)
│   ├── content/
│   │   └── blog/               # *(planned for Content Collections migration)* technical teardowns ("The Blueprint")
│   ├── pages/
│   │   ├── index.astro
│   │   ├── deliverability.astro
│   │   ├── ai-automation.astro
│   │   ├── pipeline-sync.astro
│   │   ├── careers.astro
│   │   ├── contact.astro
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro # *(planned for Content Collections migration)*
│   │   └── legal/
│   │       ├── terms.astro
│   │       ├── privacy.astro
│   │       ├── cookie.astro
│   │       ├── acceptable-use.astro
│   │       └── security.astro
│   └── styles/global.css       # @tailwind directives + base layer only
├── astro.config.mjs            # site URL, sitemap integration
├── tailwind.config.mjs         # brand tokens per specs/brand.md
└── package.json
```

## Component Conventions

- One concern per component. Components receive data via typed Astro props;
  no global mutable state.
- Pages compose components; business logic never lives in pages.
- Content collections with Zod schemas for blog posts (frontmatter
  validation at build time).

## Performance Budgets

| Metric | Budget |
|---|---|
| Client JS (non-hero pages) | 0 KB |
| Hero canvas script | < 8 KB unminified |
| Lighthouse | ≥ 98 all categories |
| TTFB (Cloudflare edge) | < 100 ms |

## Mobile Responsiveness

- Mobile-first utilities, fluid `clamp()` sizing. Media queries allowed
  only where fluid techniques genuinely fail.

## Unified Pipeline Sync Data-Flow Rule (product promise)

Any page/diagram touching pipeline synchronization must model: sequencer context
of the original outreach flows losslessly into CRM and calendar scheduling with
zero data loss. Zero-data-loss language is mandatory in copy and architecture diagrams.
Internal tooling names (such as SyncLead) are strictly banned from customer-facing materials.
