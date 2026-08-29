# Implementation Brief — Homepage AI-First Redesign

> Version: 1.0 · Date: 2026-08-28 · Authority: marketio-architect
> Authorising ADRs: ADR-009 · ADR-010 · ADR-011 · ADR-012
> Consumer: marketio-code — execute verbatim, zero decisions open

---

## Scope

Two source files require edits. One helper function requires a one-field update.
No other files change in this pass.

| File | Type of change |
|---|---|
| `src/pages/index.astro` | Copy, order, props |
| `src/components/HeroCanvas.astro` | Labels, id, comments |
| `src/lib/schema.js` | `description` field in `professionalService()` |

---

## File 1 — `src/pages/index.astro`

### 1.1 — `<BaseLayout>` props

```
title="Marketio — Your Pipeline Runs Itself"
description="Marketio deploys AI agents that prospect, engage and book meetings across LinkedIn, email and social — on autopilot. Built for established marketing agencies."
```

Both satisfy ≤ 60 / ≤ 155 char limits. `path="/"` and `schema="home"` are unchanged.

---

### 1.2 — `tiers` array — full replacement (reorder + copy)

Replace the entire `tiers` const with:

```js
const tiers = [
  {
    name: 'AI SDR / BDR Agents',
    blurb:
      'Autonomous agents prospect across LinkedIn, email and social, personalise at scale and book meetings — no SDR headcount required.',
  },
  {
    name: 'Deliverability-as-a-Service',
    blurb:
      'Dedicated IP pools, domain architecture, continuous warmup and rotation — inbox placement as a managed SLA.',
  },
  {
    name: 'SyncLead Ops Layer',
    blurb:
      'Original outreach context flows losslessly into scheduling and replies. Zero data loss, end to end.',
  },
  {
    name: 'White-Label Backend',
    blurb:
      'Your brand on our infrastructure. SLA-backed deliverability and AI ops under your agency name.',
  },
];
```

---

### 1.3 — `steps` array — full replacement

Replace the entire `steps` const with:

```js
const steps = [
  {
    n: '01',
    title: 'Pipeline audit',
    body: 'We map your current outreach stack, sequences and ICP — and show exactly where agents can replace manual SDR effort.',
  },
  {
    n: '02',
    title: 'Deploy & authenticate',
    body: 'AI agents go live across channels. Deliverability infrastructure (SPF, DKIM, DMARC, dedicated IPs) runs underneath — invisible and reliable.',
  },
  {
    n: '03',
    title: 'Watch meetings book',
    body: 'Volume ramps against live reply and booking data. Your team closes; the pipeline feeds itself.',
  },
];
```

---

### 1.4 — Hero `<h1>` — full replacement

Replace the entire `<h1>` element (currently two-line with gradient span) with:

```html
<h1 class="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
  Your pipeline runs itself.
</h1>
```

No gradient span. No line break. Verbatim approved copy including the period.

---

### 1.5 — Hero subheadline `<p>` — full replacement

Replace the subheadline paragraph with:

```html
<p class="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
  Stop hiring SDRs. Marketio deploys AI agents that prospect across
  LinkedIn, email and social — and book meetings while your team
  focuses on closing.
</p>
```

---

### 1.6 — Secondary CTA `<a>` — href + text only

Current: `href="/deliverability/"` · text: `Explore Deliverability`
New: `href="/ai-automation/"` · text: `See the AI in Action`

All Tailwind classes on the element are unchanged. Primary CTA (`Book a Discovery Call →` → Calendly) is unchanged.

---

### 1.7 — Process section heading `<h2>` — text only

Current: `From audit to inbox in three moves`
New: `From zero to autonomous pipeline in three moves`

---

### 1.8 — Closing CTA section — heading + paragraph

**`<h2>` text:**
```
Stop building a sales team. Deploy one.
```

**Support `<p>` text:**
```
One call. We show you exactly which parts of your outreach an AI agent
replaces on day one — and what that's worth at your current volume.
```

CTA button text (`Book a Discovery Call →`) and `href` (Calendly): unchanged.

---

### 1.9 — No-change declarations for `index.astro`

| Element | Status |
|---|---|
| Stats strip (`stats` const + markup) | UNCHANGED — placeholder comment already present; owner supplies real numbers |
| Badge text ("For established marketing agencies") | UNCHANGED |
| Primary CTA button | UNCHANGED |
| All Tailwind utility classes | UNCHANGED — palette already correct |
| Section structure / grid layout | UNCHANGED |

---

## File 2 — `src/components/HeroCanvas.astro`

### 2.1 — File header comment block (lines 2–5)

Replace with:

```js
// HeroCanvas — interactive "Autonomous Agent Pipeline" node graph (specs/brand.md Motion).
// Pipeline: Prospect → Engage → Book → Close.
// Orange nodes = active agent stages (Engage, Book); white edges = data-flow paths.
// Zero dependencies. Script < 8KB unminified (specs/architecture.md budget).
```

### 2.2 — `<section>` `aria-label`

```
aria-label="Marketio autonomous agent pipeline diagram"
```

### 2.3 — `<canvas>` `id` attribute

Change `id="delivery-engine"` → `id="agent-pipeline"`

### 2.4 — `<canvas>` `aria-label`

```
aria-label="Animated diagram: AI agents move prospects through Prospect, Engage, Book and Close stages autonomously"
```

### 2.5 — Stage labels overlay: four `<span>` text nodes

| Position | Current text | New text | Color class |
|---|---|---|---|
| 1st (left) | `Leads` | `Prospect` | `text-white/40` |
| 2nd | `Gateway` | `Engage` | `text-orange/70` |
| 3rd | `Mailboxes` | `Book` | `text-orange/70` |
| 4th (right) | `SyncLead` | `Close` | `text-white/40` |

Color-class logic: active agent stages (Engage, Book) = orange; boundary stages (Prospect, Close) = white/dim. Matches current Gateway/SyncLead treatment.

### 2.6 — JavaScript `getElementById` selector

```js
const canvas = document.getElementById('agent-pipeline') as HTMLCanvasElement | null;
```

### 2.7 — Topology inline comment (line 40)

```js
// ---- Topology: 4 stage columns of nodes (Prospect / Engage / Book / Close) ----
```

### 2.8 — Gateway ring highlight inline comment (line 130)

```js
// Active-agent ring on Engage (stage 1) and Book (stage 2) columns
```

### 2.9 — No-change declarations for `HeroCanvas.astro`

| Element | Status |
|---|---|
| Canvas dimensions (960×600) | UNCHANGED |
| All physics: packet system, velocity, bezier curves | UNCHANGED |
| Node topology: `colX`, `colYs`, radii, stage indices | UNCHANGED |
| Pointer proximity / hover interaction | UNCHANGED |
| Palette constants (`ORANGE`, `WHITE`, `DIM`) | UNCHANGED |
| Ring pulse animation math | UNCHANGED |
| `prefers-reduced-motion` guard | UNCHANGED |

---

## File 3 — `src/lib/schema.js`

### `professionalService()` — `description` field only

Update the `description` value inside the `professionalService` function to:

```
"Autonomous AI growth infrastructure provider for marketing agencies — deploying AI SDR/BDR agents and managed deliverability systems that run outbound pipelines on autopilot."
```

No other fields in `professionalService()` or `organization()` change in this pass.

---

## Validation Gates (post-implementation)

1. `npm run build` passes with zero TypeScript errors.
2. Rendered HTML at `/` contains exactly one `<script type="application/ld+json">` block of type `ProfessionalService` — run Google Rich Results Test.
3. Lighthouse CI: ≥ 98 all categories (Performance, Accessibility, Best Practices, SEO).
4. HeroCanvas script size: unminified JS in `<script>` block ≤ 8 KB.
5. Secondary CTA `href` resolves to `/ai-automation/` — confirm no 404 (route exists per `architecture.md` target tree).
6. H1 text on rendered page is verbatim: `Your pipeline runs itself.`
7. Tiers section: first card heading reads `AI SDR / BDR Agents`.

---

## Route Readiness Confirmation

`/ai-automation/` (`src/pages/ai-automation.astro`) is listed in the target file tree in `architecture.md` line 39. The secondary CTA can safely point there. Page does not need to exist at launch — a `_redirects` entry pointing to the Calendly URL is acceptable as a temporary measure if the page is not yet built; this is a `marketio-code` decision.
