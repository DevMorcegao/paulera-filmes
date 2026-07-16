---
title: Implementation Prompts
project: Paulera Filmes
document: 26-implementation-prompts
version: 1.1.0
status: Draft
owner: Morcegao
language: en-US
target_market: pt-BR
depends_on:
  - ../00-index.md
  - ../foundation/*
  - ../product/*
  - ../design/*
  - ../engineering/*
  - ../SYSTEM-DESIGN.md
  - execution/*
last_updated: 2026-07-15
---

# Implementation Prompts

> This document defines the standard prompts used throughout the implementation.
>
> Every implementation follows the same workflow.
>
> Never skip steps.
>
> Never combine multiple phases into a single prompt.

---

# General Rules

Every implementation prompt follows this structure:

1. Context
2. Objective
3. Constraints
4. Acceptance Criteria
5. Expected Output

---

# Prompt 01 — Architecture Bootstrap

> This step now lives in a single place: `24-bootstrap-prompt.md`. Use that
> file directly instead of the version previously duplicated here — the two
> used to list different documents to read first, which is exactly the kind
> of drift this project's documentation is meant to prevent.

---

# Prompt 02 — Project Setup

## Context

```
@17-tech-blueprint.md

@18-frontend-architecture.md

@19-development-guide.md

@SYSTEM-DESIGN.md
```

## Prompt

```
Create the project foundation.

Implement only:

- Next.js configuration
- TypeScript
- Tailwind
- Motion
- React Three Fiber
- Sanity integration
- Folder structure
- Path aliases
- Metadata
- Providers
- Fonts
- Tokens
- Layout
- Theme
- Shadcn

Do not create pages.

Do not create UI components.

Do not implement any feature.

Explain every architectural decision.
```

---

# Prompt 03 — Design Tokens

## Context

```
@SYSTEM-DESIGN.md

@13-design-tokens.v2.json

@14-animation-tokens.ts
```

## Prompt

```
Implement the complete Design Token system.

Requirements:

- Colors
- Typography
- Radius
- Spacing
- Shadows
- Motion Tokens

No components.

No pages.

No examples.

Output only the implementation required for the project.
```

---

# Prompt 04 — Base Components

## Context

```
@09-design-system.md

@12-component-specifications.md

@16-component-checklist.md
```

## Prompt

```
Implement only the primitive components.

Components:

Button

Container

Section

Heading

Text

Stack

Grid

Spacer

Requirements:

Accessible.

Responsive.

Typed.

Token-based.

No business logic.

Do not implement homepage sections.
```

---

# Prompt 05 — Global Layout

## Context

```
@18-frontend-architecture.md

@09-design-system.md
```

## Prompt

```
Implement only:

Navbar

Footer

Layout

Metadata

Providers

Responsive navigation.

Do not implement page content.
```

---

# Prompt 06 — Hero

## Context

```
@03-creative-direction.md

@05-prd.md

@09-design-system.md

@10-motion-bible.md

@12-component-specifications.md
```

## Prompt

```
Implement only the Hero section.

Requirements:

Server Component.

Responsive.

Tree prepared for React Three Fiber.

Motion Tokens only.

Accessible.

No temporary content.

No placeholder assets.

Do not implement any other section.
```

---

# Prompt 07 — Roots

## Context

```
@05-prd.md

@12-component-specifications.md

@10-motion-bible.md
```

## Prompt

```
Implement only the Roots section.

Focus on:

Manifesto.

Storytelling.

Typography.

Scrolling rhythm.

No other sections.
```

---

# Prompt 08 — Trunk

## Context

```
@05-prd.md

@12-component-specifications.md
```

## Prompt

```
Implement only the Trunk section.

Include:

Timeline.

Career.

Major milestones.

Responsive layout.

Accessible markup.

No other sections.
```

---

# Prompt 09 — Branches

## Context

```
@05-prd.md

@12-component-specifications.md

@10-motion-bible.md
```

## Prompt

```
Implement the Branches section.

Represent the filmmaker's areas of expertise.

Each branch must support future navigation to related Cases.

No Case pages yet.

Only homepage implementation.
```

---

# Prompt 10 — Fruits

## Context

```
@05-prd.md

@12-component-specifications.md
```

## Prompt

```
Implement the Fruits section.

Display featured works.

Use reusable CaseCard components.

Support future CMS integration.

Do not implement filters.
```

---

# Prompt 11 — Leaves

> Leaves is an ambient-detail engineering pass, not a sixth narrative chapter —
> the emotional journey is Roots → Trunk → Branches → Fruits → Seeds (see
> decisions/0009-seeds-chapter-correction.md). This prompt adds atmosphere on
> top of what Prompts 06–10 already built; it does not introduce new content
> or a new section of its own.

## Context

```
@03-creative-direction.md

@10-motion-bible.md
```

## Prompt

```
Implement only the Leaves layer.

Focus on subtle ambient motion.

Micro-interactions.

Atmosphere.

Do not distract from the narrative.

Do not introduce a new visible section — this layers on top of Roots,
Trunk, Branches and Fruits, it does not sit between Fruits and Seeds as
its own chapter.
```

---

# Prompt 12 — Seeds (CTA)

## Context

```
@05-prd.md

@12-component-specifications.md
```

## Prompt

```
Implement the final CTA.

Message:

"Vamos criar a próxima história?"

Accessible.

Responsive.

Prepared for future contact form integration.
```

---

# Prompt 13 — Case Page

## Context

```
@05-prd.md

@06-information-architecture.md

@12-component-specifications.md
```

## Prompt

```
Implement the Case template.

Include:

Hero.

Gallery.

Video.

Credits.

Related Cases.

Navigation back to Home.

Support CMS-driven content.
```

---

# Prompt 14 — CMS Integration

## Context

```
@17-tech-blueprint.md

@18-frontend-architecture.md
```

## Prompt

```
Integrate Sanity CMS.

Create:

Schemas.

Queries.

Portable Text rendering.

Preview mode.

No visual redesign.
```

---

# Prompt 15 — SEO

## Context

```
@17-tech-blueprint.md
```

## Prompt

```
Implement:

Metadata API.

Open Graph.

Twitter Cards.

JSON-LD.

Sitemap.

Robots.

Canonical URLs.

Do not modify visual components.
```

---

# Prompt 16 — Performance

## Context

```
@17-tech-blueprint.md

@19-development-guide.md
```

## Prompt

```
Review the project.

Optimize:

Images.

Videos.

Hydration.

Bundle size.

Lazy loading.

Three.js performance.

Explain every optimization performed.
```

---

# Prompt 17 — Accessibility Review

## Context

```
@11-ui-principles.md

@16-component-checklist.md
```

## Prompt

```
Review the entire application.

Validate:

Keyboard navigation.

ARIA.

Focus management.

Contrast.

Semantic HTML.

Reduced Motion.

List every issue found before proposing fixes.
```

---

# Prompt 18 — Final QA

## Context

```
@All project documentation
```

## Prompt

```
Act as a Senior Staff Engineer.

Review the entire project.

Evaluate:

Architecture.

Design consistency.

Performance.

Accessibility.

Narrative.

Code quality.

Maintainability.

List every improvement opportunity.

Do not rewrite code unless requested.
```

---

# Recommended Workflow

```
Bootstrap

↓

Setup

↓

Tokens

↓

Base Components

↓

Layout

↓

Hero

↓

Roots

↓

Trunk

↓

Branches

↓

Fruits

↓

Leaves

↓

CTA

↓

Case Page

↓

CMS

↓

SEO

↓

Performance

↓

Accessibility

↓

QA

↓

Launch
```

---

# Final Principle

Never ask an AI to build the entire application.

Always provide:

The minimum necessary context.

A single objective.

Clear constraints.

Well-defined acceptance criteria.

Large projects are built through small, validated iterations.

Consistency is the result of disciplined execution.