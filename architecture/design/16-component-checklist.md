---
title: Component Checklist
project: Paulera Filmes
document: 16-component-checklist
version: 1.0.0
status: Draft
owner: Morcegao
language: en-US
target_market: pt-BR
depends_on:
  - design/*
last_updated: 2026-07-14
---

# Component Checklist

> Every component must satisfy this checklist before being considered production-ready.
>
> Quality is not inspected afterwards.
>
> It is built into the process.

---

# Purpose

The checklist guarantees consistency across the entire product.

Every component is evaluated using the same criteria.

Regardless of who designed or implemented it.

---

# Definition of Done

A component is complete only when **every item** below has been validated.

No exceptions.

---

# 01 — Design

The component follows the Design System.

Checklist

- Uses only Design Tokens
- Correct typography hierarchy
- Correct spacing
- Correct elevation
- Correct radius
- Correct colors
- Visual consistency
- Responsive layout
- Supports dark/light themes (future)

---

# 02 — Interaction

Checklist

- Hover implemented
- Focus implemented
- Active state implemented
- Disabled state implemented
- Loading state implemented
- Skeleton state implemented (if applicable)
- Empty state implemented (if applicable)

---

# 03 — Motion

Checklist

- Uses Motion Tokens
- No hardcoded durations
- No hardcoded easing
- Reduced Motion supported
- Motion communicates intention
- Motion does not reduce usability

---

# 04 — Accessibility

Checklist

- Semantic HTML
- Keyboard navigation
- Visible focus
- Screen reader labels
- Correct ARIA attributes
- WCAG AA contrast
- Touch target ≥ 44×44px
- Reading order preserved
- No interaction depends solely on color
- Reduced Motion respected

---

# 05 — Responsive

Checklist

Desktop

✓ Layout validated

Tablet

✓ Layout validated

Mobile

✓ Layout validated

Landscape

✓ No visual breakage

---

# 06 — Performance

Checklist

- Images optimized
- Lazy loading (when applicable)
- Route prefetching (when applicable)
- GPU-friendly animations
- No unnecessary renders
- Memoization where appropriate
- No layout shifts (CLS)
- Bundle impact reviewed

---

# 07 — Code Quality

Checklist

- TypeScript strict mode
- No `any`
- No duplicated logic
- Small, focused API
- Readable props
- No magic numbers
- No inline styles without justification
- Comments only when necessary
- ESLint passes
- Formatter passes

---

# 08 — Architecture

Checklist

- Correct folder
- Correct naming
- Correct exports
- Barrel exports updated
- Tests colocated
- Story/example updated (future)

---

# 09 — Documentation

Checklist

- Component specification updated
- Figma updated
- Usage documented
- Props documented
- Accessibility documented
- Motion documented

---

# 10 — Testing

Checklist

- Render test
- Interaction test
- Keyboard test
- Accessibility test
- Snapshot only when justified
- Responsive validation
- Manual QA completed

---

# 11 — UX Validation

Questions

Does the component support the story?

Does it feel calm?

Does it guide attention?

Does it disappear behind the content?

If not,

revisit the design.

---

# Anti-Patterns

Reject components that:

- Hardcode colors
- Hardcode spacing
- Ignore Design Tokens
- Ignore Motion Tokens
- Duplicate existing functionality
- Introduce inconsistent naming
- Create accessibility regressions
- Optimize prematurely
- Depend on global side effects

---

# Pull Request Checklist

Every PR introducing a component must confirm:

- [ ] Specification followed
- [ ] Design reviewed
- [ ] Accessibility validated
- [ ] Responsive validated
- [ ] Motion validated
- [ ] Performance reviewed
- [ ] Documentation updated
- [ ] Naming conventions respected
- [ ] No console warnings
- [ ] No TypeScript errors

---

# Review Criteria

Reviewers should evaluate:

Correctness

↓

Consistency

↓

Accessibility

↓

Performance

↓

Maintainability

↓

Visual Quality

↓

Narrative Quality

The last item is unique to this project.

Every component contributes to storytelling.

---

# Component Lifecycle

```
Idea

↓

Specification

↓

Design

↓

Prototype

↓

Implementation

↓

Testing

↓

Review

↓

Documentation

↓

Production
```

Skipping stages is not allowed.

---

# Decision Log

## D-043

Quality is validated through process.

Reason

Avoid subjective reviews.

---

## D-044

Accessibility is mandatory.

Reason

Inclusive experiences are part of good design.

---

## D-045

Every component contributes to the narrative.

Reason

The interface exists to support storytelling.

---

# Next Document

engineering/17-tech-blueprint.md

This document defines the complete technical architecture of the project, including framework decisions, rendering strategy, folder organization, state management, CMS integration, deployment, performance goals and engineering principles.

---

# AI Context

Never consider a component complete after implementation alone.

A component is complete only when design, accessibility, motion, responsiveness, performance and documentation all satisfy this checklist.

When generating new components, use this document as the final validation layer before considering the task finished.