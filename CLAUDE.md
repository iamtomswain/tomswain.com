# Design System Rules

## Before you write any CSS/SCSS

**ALWAYS** read the design system first. Do not guess at values.

1. Read [src/styles/_tokens.scss](src/styles/_tokens.scss) — the single source of truth for colors, typography, spacing, radii, shadows, motion, and breakpoints.
2. Read [src/styles/_mixins.scss](src/styles/_mixins.scss) — reusable patterns (`wrap`, `section`, `card-surface`, `eyebrow`, `display-type`, `below`).
3. Skim [src/styles/_base.scss](src/styles/_base.scss) and [src/styles/_components.scss](src/styles/_components.scss) to see how existing components consume tokens.

This is non-negotiable for every session.

## No magic numbers. Ever.

Hard-coded values in component styles are prohibited. Every color, radius, spacing value, duration, shadow, font, and breakpoint must come from a token.

**Wrong:**
```scss
.thing {
  padding: 1.5rem;
  border-radius: 12px;
  color: #6b6b66;
  transition: all 200ms ease-out;
}
```

**Right:**
```scss
.thing {
  padding: var(--space-lg);
  border-radius: var(--radius-md);
  color: var(--ink-muted);
  transition: all var(--dur-base) var(--ease-out);
}
```

The only acceptable raw values are:
- `0`, `auto`, `100%`, `50%`, `1fr` — structural values with no design meaning
- Values inside token definitions themselves (`_tokens.scss`)
- Aspect ratios tied to specific asset dimensions (e.g. `aspect-ratio: 1458 / 2500` for a known image)

If you find yourself typing a pixel, rem, hex, or ms value anywhere other than `_tokens.scss`, stop.

## Adding a new token requires approval

If no existing token fits, **do not invent one silently**. Stop and ask:

> "I need a new token `--foo-bar: <value>` for <use case>. Existing <related tokens> don't cover this because <reason>. OK to add?"

Wait for explicit approval before editing `_tokens.scss`. This keeps the system coherent — token sprawl is how design systems rot.

When proposing a new token:
- Name it by role, not appearance (`--ink-muted`, not `--gray-6`)
- Follow existing naming conventions (`--space-*`, `--radius-*`, `--dur-*`, etc.)
- Place it in the correct section of `_tokens.scss`

## Token inventory

Current categories in `_tokens.scss`:
- **Surfaces**: `--bg`, `--surface`, `--hover`
- **Ink**: `--ink`, `--ink-muted`, `--ink-subtle`
- **Borders**: `--border`, `--border-strong`
- **Dark palette**: `--dark-bg`, `--dark-surface`, `--dark-ink`, `--dark-muted`, `--dark-border`
- **Accent**: `--status-ok`
- **Shadows**: `--shadow-card`, `--shadow-nav`
- **Radii**: `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-xl`, `--radius-2xl`, `--radius-pill`
- **Spacing**: `--space-md`, `--space-lg`
- **Typography**: `--font-sans`, `--font-display`
- **Layout**: `--wrap-max`, `--wrap-pad`, `--section-pad-y`, `--section-pad-x`
- **Motion**: `--ease-out`, `--dur-fast`, `--dur-base`
- **Breakpoints** (SCSS): `$bp-md`, `$bp-sm`

Always check this list before assuming a token exists or proposing a new one.

## Architecture

- Single SCSS entry: [src/styles/index.scss](src/styles/index.scss) — composes `tokens`, `base`, `components`.
- No per-component CSS modules. All component styles live in `_components.scss` under BEM blocks (`.project-card`, `.project-card__visual`, `.project-card__image--cta`).
- Media queries use the `below` mixin with breakpoint variables: `@include m.below(t.$bp-sm)`.

## Other project conventions

- TypeScript strict. Run `npm run typecheck` before declaring work done.
- "Tom" never "Thomas" in copy.
- Display font: Neue Haas Grotesk Display (Adobe Typekit kit `hyg3bib`). Body: Inter Tight.
- Site data lives in [src/data/site.ts](src/data/site.ts) and [src/data/projects.ts](src/data/projects.ts) — never hard-code copy in components.
