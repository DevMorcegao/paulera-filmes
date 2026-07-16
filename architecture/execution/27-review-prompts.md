---
title: Review Prompts
project: Paulera Filmes
document: 27-review-prompts
version: 1.1.0
status: Draft
owner: Morcegao
language: en-US
target_market: pt-BR
depends_on:
  - ../foundation/*
  - ../product/*
  - ../design/*
  - ../engineering/*
  - ../SYSTEM-DESIGN.md
  - execution/*
last_updated: 2026-07-15
---

# Review Prompts

> Great products are built during review.
>
> AI should review code with the same discipline used to generate it.
>
> Never assume generated code is production-ready.

---

# Review Philosophy

Every implementation should pass through multiple review perspectives.

Each review has a single responsibility.

Never combine different review objectives.

---

# Review Order

Implementation

↓

Architecture

↓

Code Quality

↓

Accessibility

↓

Performance

↓

Motion

↓

SEO

↓

Security

↓

Documentation

↓

Final QA

---

# Prompt 01 — Architecture Review

## Context

```
@All related documentation

@Current implementation
```

## Prompt

```
Act as a Staff Software Engineer.

Review only the architecture.

Evaluate:

Folder organization

Dependency flow

Server vs Client Components

Module boundaries

Separation of responsibilities

Future scalability

Do not rewrite code.

Only identify architectural improvements.
```

---

# Prompt 02 — Code Quality Review

## Context

```
@19-development-guide.md

@Current implementation
```

## Prompt

```
Review the codebase.

Evaluate:

Readability

Naming

Duplication

Complexity

Maintainability

TypeScript quality

Suggest improvements.

Do not optimize prematurely.
```

---

# Prompt 03 — React Review

## Prompt

```
Review the React implementation.

Evaluate:

Server Components

Client Components

Hydration

Hooks

Composition

Rendering

State management

Identify unnecessary complexity.
```

---

# Prompt 04 — Performance Review

## Context

```
@17-tech-blueprint.md

@Current implementation
```

## Prompt

```
Review performance.

Evaluate:

Bundle size

Hydration

Images

Videos

Lazy Loading

Tree Shaking

Three.js

Scroll performance

Animation performance

Suggest measurable improvements.
```

---

# Prompt 05 — Accessibility Review

## Context

```
@11-ui-principles.md

@16-component-checklist.md
```

## Prompt

```
Review accessibility.

Validate:

Semantic HTML

ARIA

Keyboard navigation

Focus

Reduced Motion

Contrast

Touch targets

Screen readers

List every issue before proposing fixes.
```

---

# Prompt 06 — Motion Review

## Context

```
@10-motion-bible.md

@14-animation-tokens.ts
```

## Prompt

```
Review all animations.

Validate:

Motion Tokens

Durations

Easing

Timing

Narrative consistency

Reduced Motion

Avoid decorative animations.

Motion should support storytelling.
```

---

# Prompt 07 — Design Consistency Review

## Context

```
@09-design-system.md

@SYSTEM-DESIGN.md

@12-component-specifications.md
```

## Prompt

```
Review visual consistency.

Validate:

Spacing

Typography

Hierarchy

Components

Grid

Colors

Elevation

Radius

Never invent new styles. If the implementation and SYSTEM-DESIGN.md disagree,
SYSTEM-DESIGN.md wins — flag the discrepancy rather than silently picking one.
```

---

# Prompt 08 — SEO Review

## Prompt

```
Review SEO implementation.

Evaluate:

Metadata

Canonical URLs

Open Graph

Twitter Cards

JSON-LD

Sitemap

Robots

Headings

Image alt text

Suggest improvements.
```

---

# Prompt 09 — CMS Review

## Prompt

```
Review CMS integration.

Validate:

Schemas

Queries

Preview Mode

Error handling

Fallback content

Scalability

Avoid duplicated queries.
```

---

# Prompt 10 — Security Review

## Prompt

```
Review security.

Evaluate:

Environment Variables

Secrets

Headers

Input validation

Output escaping

Third-party packages

Potential vulnerabilities

List risks by severity.
```

---

# Prompt 11 — Documentation Review

## Prompt

```
Compare the implementation with the documentation.

Identify:

Missing documentation

Outdated documentation

Architecture divergence

Component divergence

Motion divergence

Documentation should remain the project's source of truth.
```

---

# Prompt 12 — Narrative Review

## Context

```
@03-creative-direction.md

@05-prd.md
```

## Prompt

```
Review the experience as a Creative Director.

Ignore implementation details.

Evaluate:

Storytelling

Emotional pacing

Narrative consistency

Visual rhythm

Editorial quality

Does the website feel cinematic?

Does the tree metaphor remain coherent?

List opportunities to strengthen the narrative.
```

---

# Prompt 13 — Pre-Launch Review

## Prompt

```
Act as a Principal Engineer.

Review the entire project before launch.

Evaluate:

Architecture

Performance

Accessibility

SEO

Motion

Security

Design

Maintainability

Documentation

Provide:

Critical Issues

Important Improvements

Nice-to-have Improvements

Do not rewrite code.

Only review.
```

---

# Prompt 14 — Final Audit

## Context

```
@All documentation

@Entire project
```

## Prompt

```
Perform the final project audit.

Imagine this project will be delivered to a demanding client.

Evaluate every aspect.

Assign scores from 0 to 10 for:

Architecture

Design

Accessibility

Performance

Narrative

Code Quality

SEO

Maintainability

Developer Experience

Conclude with:

Would you approve this project for production?

Explain your decision.

List remaining improvements.
```

---

# Final Principle

Never ask AI:

"Is this code good?"

Instead ask:

"What would prevent this project from being considered world-class?"

The objective is continuous improvement.

Not validation.