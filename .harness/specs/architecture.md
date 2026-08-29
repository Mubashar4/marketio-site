# Spec — Site Architecture & Conventions

> Version: 1.0 · Owner: marketio-architect · Consumers: all roles

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
│   │   └── PricingCard.astro
│   ├── layouts/
│   │   └── BaseLayout.astro    # SEO shell + JSON-LD injection point
│   ├── lib/
│   │   └── schema.js           # single JSON-LD generator (seo-schema.md)
│   ├── content/
│   │   └── blog/               # technical teardowns ("The Blueprint")
│   ├── pages/
│   │   ├── index.astro
│   │   ├── deliverability.astro
│   │   ├── ai-automation.astro
│   │   ├── synclead-integration.astro
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   └── legal/
│   │       ├── terms.astro
│   │       ├── privacy.astro
│   │       ├── dpa.astro
│   │       └── sla.astro
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

## SyncLead Data-Flow Rule (product promise)

Any page/diagram touching SyncLead must model: sequencer context of the
original outreach flows losslessly into SyncLead scheduling/replies.
Zero-data-loss language is mandatory in copy and architecture diagrams.
