# Spec — Brand & Design Tokens

> Version: 1.0 · Owner: marketio-architect · Consumers: all roles

## Palette (locked)

| Token | Hex | Role |
|---|---|---|
| `charcoal` | `#0B0B0B` | Dark-mode page background |
| `black` | `#141414` | Surfaces/cards on dark; dark text accents |
| `white` | `#FAFAFA` | Light-mode background; primary typography |
| `orange` | `#FF5500` | Sole accent: CTAs, badges, logo dot, canvas highlights |

Rules:
- `#FF5500` is the only accent hue. Gradients may interpolate between the
  four tokens only.
- Dark mode: `#0B0B0B` bg / `#FAFAFA` text. Light mode: `#FAFAFA` bg /
  near-`#141414` text. Orange anchors CTAs in both modes.
- No new colors without an ADR in `.harness/memory/DECISIONS.md`.

## Tailwind Config Contract

```js
// tailwind.config.mjs — theme.extend.colors
colors: {
  charcoal: '#0B0B0B',
  black:    '#141414',
  white:    '#FAFAFA',
  orange:   { DEFAULT: '#FF5500' },
}
```

## Typography

- System-native or single self-hosted sans stack. No font-loading JS.
- Fluid scale via Tailwind arbitrary values (`text-[clamp(...)]`) over
  media queries.

## Voice & Positioning (site copy)

- **Positioning:** Marketio is an autonomous AI growth partner for agencies —
  not a deliverability infrastructure vendor. Every headline and subheadline
  must reinforce agent autonomy: pipeline runs itself, meetings booked on
  autopilot, zero manual SDR overhead.
- Audience: owners of established marketing agencies. Mid-to-enterprise tone.
- Sell outcomes (meetings booked autonomously, pipeline self-running, inbox
  placement) — never tech nouns (`OpenClaw`, `n8n`, `Hermes`, DKIM) as
  headline material. Internal tool names are permanently banned from public
  copy.
- Price anchoring: never advertise bargain-basement figures on premium pages.
- Gray-market offers (LinkedIn invites, cheap mailboxes à la carte) are
  **forbidden** anywhere on Marketio properties.
- Approved H1 (homepage): **"Your pipeline runs itself."**
- Approved subheadline: "Stop hiring SDRs. Marketio deploys AI agents that
  prospect across LinkedIn, email and social — and book meetings while your
  team focuses on closing."
- Secondary CTA copy: **"See the AI in Action"** (links to `/ai-automation/`).
  Do not use "Explore Deliverability" on primary hero CTAs.

## Motion

- Hero: interactive HTML5 `<canvas>` node-graph ("Autonomous Agent Pipeline":
  Prospect → Engage → Book → Close). Orange accent (`#FF5500`) marks active
  agent nodes; white (`#FAFAFA`) for data-flow edges. Vanilla JS only.
- Glass-morphism effects: **permanently rejected** (violates performance
  budget and brand spec — see ADR-012).
- Micro-interactions: CSS transitions ≤ 300ms, respect
  `prefers-reduced-motion`.
