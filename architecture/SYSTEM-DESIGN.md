---
title: System Design — Final
project: Paulera Filmes
document: SYSTEM-DESIGN (supersedes DESIGN.md v1.0.0 and its own v3.0.0 draft)
version: 3.1.0
status: Accepted — proceed to Sprint 01 unless the theme direction below is challenged before then
owner: Morcegao
language: en-US
target_market: pt-BR
depends_on:
  - foundation/02-brand-strategy.md
  - foundation/03-creative-direction.md
  - design/09-design-system.md
  - design/10-motion-bible.md
  - design/13-design-tokens.v2.json
  - design/14-animation-tokens.ts
  - decisions/0009-seeds-chapter-correction.md
  - execution/24-bootstrap-prompt.md
last_updated: 2026-07-15
---

# System Design — Final

> This is the document to open when Sprint 01 begins. It supersedes `DESIGN.md`
> (Google Stitch output — kept as historical record, status updated to
> `Superseded`) and its own earlier draft. `09-design-system.md` remains valid
> for philosophy and naming; this document carries the exact values.
>
> Nothing here is new relative to the previous draft's decisions — what changed
> is that every other document in the repository now points here consistently,
> the light/dark direction is being treated as decided rather than pending, and
> this version adds the CSS implementation layer needed to actually start
> coding, which the previous draft didn't include.

---

# The Theme Direction (Decided)

`13-design-tokens.json` (light, paper-toned) and `DESIGN.md` (dark, near-black)
encoded two different visual directions. This system goes with **light-primary**:

1. `13-design-tokens.json` is the file every other document treats as the
   actual implementation source — `12-component-specifications.md` calls it
   *"the source of truth consumed by Tailwind, CSS Variables, Motion, Figma,
   Components, Themes."* It represents the more deliberate decision.
2. It resolves a real contrast risk for free: Forest (`#48693D`) on a
   near-white background reads clearly as a primary button; the same green on
   `DESIGN.md`'s near-black background did not.
3. `12-component-specifications.md` and `16-component-checklist.md` both list
   Dark Mode as a state to support, worded `(future)` — that phrasing only
   makes sense if light is primary.

**The Three.js canvas stays dark and cinematic regardless of page chrome.**
The page is a light, airy, editorial frame; the canvas is a dark cinematic
window inside that frame — a sunlit gallery holding a dark screening room,
not a dark room throughout.

---

# Color Tokens

| Token | Lightest | Mid | Deepest | Use |
|---|---|---|---|---|
| `mist` | `#FCFCFB` | `#F7F6F3` | `#EFEDE8` | Page background, largest surfaces |
| `fog` | `#E8E5DF` | `#D9D5CC` | `#C8C2B8` | Secondary surfaces, card backgrounds |
| `stone` | `#BDB7AE` | `#9B948A` | `#7B746C` | Borders, icons, supporting typography |
| `bark` | `#51483F` | `#3E362F` | `#2A241F` | Body text, navigation, structure — the only dark neutral |
| `forest` | `#6E8C62` | `#48693D` | `#2F4728` | Primary identity + primary buttons |
| `moss` | `#879E6F` | — | `#60754B` | Success, active/hover feedback |
| `amber` | `#D7A14A` | — | `#B97824` | Rare accent — golden-hour moments, awards |
| `moon` | `#FFFFFF` | — | `#FDFDFD` | Rare bright highlight — focus glow, a single magical moment |
| `ember` | — | — | `#A85D3E` | Error states — brand-derived, not a generic red |

Semantic reuse rather than new hues: `success` → `moss-700`, `warning` →
`amber-700`, `error` → `ember-500`, `info` → `stone-300`.

The Three.js scene renders its own dark, atmospheric environment independent
of these tokens — don't force it into `mist`/`bark`, it's lit, not painted.

---

# Typography

| Role | Family | Size | Line-height | Weight |
|---|---|---|---|---|
| `display` | EB Garamond | 84px | 1.095 | 400 |
| `heading-lg` | EB Garamond | 48px | 1.167 | 500 |
| `heading-md` | EB Garamond | 32px | 1.25 | 500 |
| `heading-sm` | EB Garamond | 24px | 1.333 | 500 |
| `body-lg` | Hanken Grotesk | 19px | 1.68 | 400 |
| `body` | Hanken Grotesk | 16px | 1.75 | 400 |
| `caption` | Hanken Grotesk | 13px | 1.54 | 500 |

Reading width 60–72ch, max line length 75 characters.

---

# Spacing, Radius, Motion, Breakpoints, Shadow, Z-index

Deferring to `13-design-tokens.v2.json` — already concrete and already what
every implementation prompt in `26-implementation-prompts.md` reads from.

**Spacing** (rem): `seed` .25 · `root` .5 · `twig` 1 · `branch` 1.5 · `trunk` 2.5 · `forest` 4 · `canopy` 6 · `horizon` 10

**Radius** (px): `pebble` 6 · `leaf` 12 · `river` 20 · `horizon` 32 · `circle` 9999

**Motion duration** (ms): `instant` 120 · `fast` 180 · `normal` 320 · `slow` 650 · `cinematic` 1200
**Easing**: `standard` `cubic-bezier(.4,0,.2,1)` · `soft` `cubic-bezier(.22,.61,.36,1)` · `dramatic` `cubic-bezier(.16,1,.3,1)` · `cinematic` `cubic-bezier(.19,1,.22,1)`
Use `14-animation-tokens.ts`'s existing presets (`revealUp`, `cardHover`, `imageHover`, `buttonHover`, `treeGrowth`, `leafFloating`, `cinematicTransition`) directly.

**Breakpoints** (px): `sm` 640 · `md` 768 · `lg` 1024 · `xl` 1280 · `2xl` 1440

**Shadow** (soft, ambient — never hard/dark): `ground` `0 2px 4px rgba(0,0,0,.04)` · `leaf` `0 8px 20px rgba(0,0,0,.08)` · `branch` `0 20px 48px rgba(0,0,0,.12)` · `canopy` `0 40px 96px rgba(0,0,0,.18)`

**Z-index**: `ground` 0 · `content` 10 · `navigation` 50 · `overlay` 100 · `modal` 500 · `toast` 1000

---

# Ready to Use: Tailwind v4 Theme Block

Paste into `app/globals.css`. Verified against current Tailwind v4 `@theme`
conventions: `--color-*`, `--font-*` (family), `--text-*` (size, paired with
`--text-*--line-height` and `--text-*--font-weight` using the double-hyphen
companion syntax), `--spacing-*`, `--radius-*`, `--breakpoint-*` and `--shadow-*`
each auto-generate their matching utilities. Motion durations and z-index stay
as plain custom properties — they're consumed by `14-animation-tokens.ts` and
component logic, not by a Tailwind utility namespace.

```css
@import "tailwindcss";

@theme {
  /* Color */
  --color-mist-50: #FCFCFB;
  --color-mist-100: #F7F6F3;
  --color-mist-200: #EFEDE8;

  --color-fog-100: #E8E5DF;
  --color-fog-200: #D9D5CC;
  --color-fog-300: #C8C2B8;

  --color-stone-100: #BDB7AE;
  --color-stone-200: #9B948A;
  --color-stone-300: #7B746C;

  --color-bark-500: #51483F;
  --color-bark-700: #3E362F;
  --color-bark-900: #2A241F;

  --color-forest-300: #6E8C62;
  --color-forest-500: #48693D;
  --color-forest-700: #2F4728;

  --color-moss-300: #879E6F;
  --color-moss-500: #60754B;

  --color-amber-300: #D7A14A;
  --color-amber-500: #B97824;

  --color-moon-100: #FFFFFF;
  --color-moon-200: #FDFDFD;

  --color-ember-500: #A85D3E;

  /* Typography — family */
  --font-display: "EB Garamond", serif;
  --font-body: "Hanken Grotesk", sans-serif;

  /* Typography — size, paired with line-height/weight */
  --text-display: 5.25rem;
  --text-display--line-height: 1.095;
  --text-display--font-weight: 400;

  --text-heading-lg: 3rem;
  --text-heading-lg--line-height: 1.167;
  --text-heading-lg--font-weight: 500;

  --text-heading-md: 2rem;
  --text-heading-md--line-height: 1.25;
  --text-heading-md--font-weight: 500;

  --text-heading-sm: 1.5rem;
  --text-heading-sm--line-height: 1.333;
  --text-heading-sm--font-weight: 500;

  --text-body-lg: 1.1875rem;
  --text-body-lg--line-height: 1.68;

  --text-body: 1rem;
  --text-body--line-height: 1.75;

  --text-caption: 0.8125rem;
  --text-caption--line-height: 1.54;
  --text-caption--font-weight: 500;

  /* Spacing */
  --spacing-seed: 0.25rem;
  --spacing-root: 0.5rem;
  --spacing-twig: 1rem;
  --spacing-branch: 1.5rem;
  --spacing-trunk: 2.5rem;
  --spacing-forest: 4rem;
  --spacing-canopy: 6rem;
  --spacing-horizon: 10rem;

  /* Radius */
  --radius-pebble: 6px;
  --radius-leaf: 12px;
  --radius-river: 20px;
  --radius-horizon: 32px;
  --radius-circle: 9999px;

  /* Breakpoints */
  --breakpoint-sm: 40rem;
  --breakpoint-md: 48rem;
  --breakpoint-lg: 64rem;
  --breakpoint-xl: 80rem;
  --breakpoint-2xl: 90rem;

  /* Shadow — soft, ambient, never hard/dark */
  --shadow-ground: 0 2px 4px rgba(0,0,0,.04);
  --shadow-leaf: 0 8px 20px rgba(0,0,0,.08);
  --shadow-branch: 0 20px 48px rgba(0,0,0,.12);
  --shadow-canopy: 0 40px 96px rgba(0,0,0,.18);

  /* Easing */
  --ease-standard: cubic-bezier(.4,0,.2,1);
  --ease-soft: cubic-bezier(.22,.61,.36,1);
  --ease-dramatic: cubic-bezier(.16,1,.3,1);
  --ease-cinematic: cubic-bezier(.19,1,.22,1);
}

/* Motion durations and z-index — plain variables, consumed by
   14-animation-tokens.ts and component logic, not a Tailwind namespace. */
:root {
  --duration-instant: 120ms;
  --duration-fast: 180ms;
  --duration-normal: 320ms;
  --duration-slow: 650ms;
  --duration-cinematic: 1200ms;

  --z-ground: 0;
  --z-content: 10;
  --z-navigation: 50;
  --z-overlay: 100;
  --z-modal: 500;
  --z-toast: 1000;
}
```

This gives `bg-mist-100`, `text-bark-900`, `font-display`, `text-heading-lg`,
`rounded-river`, `p-branch`, `gap-trunk`, `shadow-leaf`, `sm:`/`lg:`/`xl:`
variants — all directly, with no `tailwind.config.js` file.

---

# Component Starters

## Button
Primary: fill `forest-500` · text `mist-100` · hover `forest-700` · focus 2px
`moss-700` outline · radius `circle` · motion `normal` (320ms — unhurried by
design, not a bug; see `03-creative-direction.md`'s Motion Philosophy before
making it feel snappier).
Secondary: transparent · 1px `stone-300` border · `fog-100` hover fill.
Ghost: transparent · underline reveal · motion `fast`.

## Card
Background `fog-100` · shadow `leaf` at rest, `branch` on hover · radius
`river` · hover scale 1 → 1.015 via `cardHover` from `14-animation-tokens.ts` ·
media dominant, minimal chrome.

## Navigation — chapter rail, not a navbar
Slim fixed vertical rail, one tick per chapter (Arrival · Roots · Trunk ·
Branches · Fruits · Seeds — Leaves is not a chapter, see
`decisions/0009-seeds-chapter-correction.md`). Inactive tick `stone-300` at 40%
opacity, active tick fills `amber-700`. Mobile collapses to a single bottom-fixed
chapter label. Must work as plain in-page anchors with JS disabled (`05-prd.md`
FR-004).

---

# Where to Start

Reading order and the exact bootstrap prompt now live in
`execution/24-bootstrap-prompt.md` — this document doesn't duplicate that list
anymore, since keeping it in two places is what caused it to drift out of sync
the first time.

Sprint 01 (`21-implementation-roadmap.md`) checklist against what now exists:

- [x] Design Tokens — this document + `13-design-tokens.v2.json`
- [x] Motion Tokens — `14-animation-tokens.ts`
- [x] Typography — this document
- [ ] Global Layout, Metadata, Fonts, Providers — not yet built; next.

---

# Resolved in This Pass

- ~~Fix `0003`/`25`: Leaves vs. Seeds~~ — done via `decisions/0009-seeds-chapter-correction.md` and `25-design-system-generation.md` v2.1.0
- ~~`00-index.md` missing execution/ and decisions/~~ — done, v1.1.0
- ~~`23-definition-of-done.md` missing Reduced Motion~~ — done, v1.1.0
- ~~`24`/`26` conflicting bootstrap reading orders~~ — done, `26` Prompt 01 now points to `24`
- ~~`26` Prompt 02 reading `09-design-system.md` and `DESIGN.md` together~~ — done, points here instead
- ~~Generic error/warning/success/info colors~~ — done, `13-design-tokens.v2.json`

Remaining: update `DESIGN.md`'s frontmatter `status` field to `Superseded by
SYSTEM-DESIGN.md` — a one-line manual edit, not a regeneration, to keep it as
an honest historical record of what Stitch actually produced.