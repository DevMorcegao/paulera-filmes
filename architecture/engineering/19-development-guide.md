---
title: Development Guide
project: Paulera Filmes
document: 19-development-guide
version: 1.0.0
status: Draft
owner: Morcegao
language: en-US
target_market: pt-BR
depends_on:
  - engineering/17-tech-blueprint.md
  - engineering/18-frontend-architecture.md
last_updated: 2026-07-14
---

# Development Guide

> Great software is not the result of brilliant developers.
>
> It is the result of consistent decisions.
>
> This document defines how engineering decisions are made throughout the project.

---

# Purpose

This guide establishes the engineering standards for the project.

It defines how code should be written, reviewed, tested and maintained.

Every contributor should produce code that feels like it was written by the same person.

---

# Engineering Philosophy

Readable code outlives clever code.

Choose clarity over cleverness.

Choose simplicity over abstraction.

Choose consistency over personal preference.

Every line of code should reduce future complexity.

---

# Core Principles

## Readability First

Code is read far more often than it is written.

Optimize for the next developer.

---

## Explicit over Implicit

Prefer obvious implementations.

Avoid magic behavior.

---

## Composition over Abstraction

Extract only when repetition reveals a stable pattern.

Never create abstractions in anticipation of future needs.

---

## Server First

Everything starts as a Server Component.

Promote to Client Component only when interaction requires it.

---

## Small Responsibilities

Every module should have one clear purpose.

If a file requires extensive explanation,

it is probably doing too much.

---

# React Principles

Components render.

Hooks coordinate.

Services communicate.

Utilities transform.

Providers configure.

Keep these responsibilities separate.

---

# Server Components

Use whenever possible.

Ideal for:

Content rendering.

CMS queries.

Metadata.

SEO.

Static sections.

---

# Client Components

Use only when required.

Examples:

Animations.

Three.js.

Forms.

Media controls.

Interactive navigation.

Never add `"use client"` without justification.

---

# Component Guidelines

A component should:

Do one thing well.

Receive explicit props.

Avoid hidden dependencies.

Remain reusable.

Avoid business logic.

If a component exceeds roughly 250 lines,

consider decomposition.

---

# Hook Guidelines

Create a hook only when:

Logic is reused.

State coordination becomes complex.

Browser APIs are involved.

Avoid hooks that simply wrap one line of code.

---

# Utility Guidelines

Utilities must be:

Pure.

Predictable.

Framework-independent.

No React.

No side effects.

---

# TypeScript

Strict mode is mandatory.

Avoid:

any

Prefer:

unknown

Generics.

Discriminated unions.

Literal types.

Interfaces for public contracts.

Types for local composition.

---

# Naming

Components

PascalCase

Hooks

useSomething

Utilities

verbNoun

Constants

UPPER_CASE

Files should describe their responsibility.

Avoid generic names.

---

# Imports

Always use aliases.

Group imports in this order:

External libraries.

Internal libraries.

Components.

Hooks.

Types.

Utilities.

Styles.

Sort alphabetically inside groups.

---

# Error Handling

Errors should be meaningful.

Never expose implementation details to users.

Log technical information.

Display human language.

---

# Comments

Good code rarely needs comments.

Comment:

Why.

Never:

What.

Avoid commented-out code.

Delete it.

Git remembers history.

---

# Logging

Use logs only during development.

No stray console statements in production.

Errors should use a centralized strategy.

---

# Styling

Never use arbitrary values unless absolutely necessary.

Prefer Design Tokens.

Prefer utilities.

Avoid inline styles.

---

# Accessibility

Every feature must support:

Keyboard navigation.

Visible focus.

Screen readers.

Reduced motion.

Semantic HTML.

Accessibility is part of development,

not QA.

---

# Performance

Measure before optimizing.

Avoid premature optimization.

Optimize:

Images.

Hydration.

Animations.

Bundle size.

Avoid unnecessary re-renders.

---

# Git Workflow

Main

Always deployable.

Develop

Integration branch (optional).

Feature branches

```
feature/hero-tree

feature/case-page

feature/navigation

fix/mobile-layout

refactor/media-gallery

docs/design-system
```

---

# Commit Convention

Follow Conventional Commits.

Examples

```
feat(hero): add cinematic tree scene

fix(case): preserve scroll position

refactor(media): simplify gallery layout

docs(prd): update roadmap

chore(deps): update motion library
```

---

# Pull Requests

Every PR should answer:

What changed?

Why?

How was it tested?

Does it affect accessibility?

Does it affect performance?

Screenshots or recordings required for UI changes.

---

# Code Review

Review for:

Correctness.

Readability.

Architecture.

Accessibility.

Performance.

Narrative consistency.

Avoid reviewing personal style.

The guide defines style.

---

# Testing Strategy

Unit Tests

Business logic.

Utilities.

Hooks.

---

Component Tests

Rendering.

Interaction.

Accessibility.

---

End-to-End

Critical journeys.

Homepage.

Case page.

Contact flow.

---

# Definition of Done

A feature is complete when:

Documentation updated.

Design approved.

Code reviewed.

Tests passing.

Accessibility validated.

Performance reviewed.

Responsive behavior confirmed.

No TypeScript errors.

No lint errors.

No console warnings.

---

# Refactoring

Refactor only when:

Understanding improves.

Duplication decreases.

Complexity decreases.

Do not refactor simply for preference.

---

# Dependencies

Every dependency must answer:

Why is it necessary?

Does the platform already solve this?

Will it still make sense in two years?

Avoid dependency inflation.

---

# Security

Never trust client input.

Validate on the server.

Protect secrets.

Escape user content.

Review third-party packages.

---

# Continuous Improvement

Engineering evolves.

Standards may improve.

When a better approach is adopted,

update this document first.

Then update the implementation.

Documentation leads.

Code follows.

---

# Decision Log

## D-053

Readability takes priority over cleverness.

Reason

Maintainability.

---

## D-054

Every feature begins with documentation.

Reason

Reduce uncertainty.

---

## D-055

The architecture is a product asset.

Reason

Consistency across contributors.

---

# Next Document

engineering/20-ai-collaboration-guide.md

This document defines how AI assistants should collaborate during the project.

It establishes context management, prompt strategy, task decomposition, review rules and interaction guidelines for tools such as Cursor, Claude Code, Codex, Gemini CLI and Antigravity.

---

# AI Context

When generating code:

Favor clarity.

Respect architecture.

Never introduce undocumented patterns.

Always consult the Design System before creating UI.

Always consult the Motion Bible before creating animations.

If implementation requires a new architectural decision, document it before writing code.

The documentation is the project's source of truth.