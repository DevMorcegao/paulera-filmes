---
title: Technical Blueprint
project: Paulera Filmes
document: 17-tech-blueprint
version: 1.0.0
status: Draft
owner: Morcegao
language: en-US
target_market: pt-BR
depends_on:
  - ../foundation/*
  - ../product/*
  - ../design/*
last_updated: 2026-07-14
---

# Technical Blueprint

> Technology exists to support storytelling.
>
> Frameworks may change.
>
> Principles should remain.

---

# Purpose

This document defines the technical architecture of the project.

It explains not only **what** technologies are used, but **why** they were chosen.

Every engineering decision should support one or more project goals:

- Narrative
- Performance
- Maintainability
- Accessibility
- Scalability

---

# Engineering Philosophy

Technology should disappear.

The visitor should remember the stories.

Not React.

Not Three.js.

Not animations.

Engineering exists to make the experience invisible.

---

# Core Principles

## Performance First

Beautiful experiences that are slow fail.

Every decision should preserve Core Web Vitals.

---

## Progressive Enhancement

The website must work before it impresses.

3D.

Motion.

Parallax.

Particles.

All are enhancements.

Never dependencies.

---

## Server First

Prefer rendering on the server.

Hydrate only what requires interaction.

---

## Accessibility by Default

Accessibility is part of the architecture.

Not a later feature.

---

## Scalability

Adding the 200th Case should require zero architectural changes.

Only new content.

---

# Technology Stack

## Framework

Next.js (App Router)

Reason

Modern React architecture.

Server Components.

Excellent SEO.

Streaming.

Image optimization.

Route-based layouts.

Metadata API.

---

## Language

TypeScript

Reason

Predictability.

Tooling.

AI-assisted development.

Maintainability.

---

## Styling

Tailwind CSS

Reason

Token-driven styling.

Utility-first.

Excellent DX.

Easy mapping to Design Tokens.

---

## Animation

Motion

Reason

Modern API.

Composable animations.

Lightweight.

Compatible with React Server Components.

---

## 3D

React Three Fiber

Reason

React ecosystem.

Declarative.

Excellent integration with Motion.

---

## Rendering Helpers

@react-three/drei

Reason

Utilities.

Camera controls.

Loaders.

Performance helpers.

---

## CMS

Sanity

Reason

Structured content.

Excellent developer experience.

Portable Text.

Powerful querying.

Real-time previews.

Content modeling.

Future scalability.

---

## Forms

React Hook Form

Zod

Reason

Type-safe validation.

Performance.

Developer experience.

---

## Deployment

Vercel

Reason

Native Next.js support.

Edge Network.

Image Optimization.

Analytics.

Preview Deployments.

---

# Rendering Strategy

## Server Components

Use by default.

Examples

Navigation

Footer

Timeline

Case Pages

Static Sections

SEO Metadata

---

# Scene Architecture

The homepage is built around one persistent 3D environment.

The Tree is loaded only once.

The Three.js canvas remains mounted throughout the entire homepage.

Narrative chapters do not create new scenes.

Instead:

• Camera position changes.

• Lighting evolves.

• Atmospheric effects change.

• HTML overlays appear and disappear.

The environment remains continuous.

Only the narrative focus changes.

---

## Client Components

Only when interaction exists.

Examples

Tree interaction

3D Scene

Forms

Video controls

Scroll observers

Animations

---

# Route Architecture

```
/

↓

/cases

↓

/cases/[slug]

↓

/categories/[slug]

↓

/404
```

Future

```
/journal

/contact

/search
```

---

# Data Flow

```
CMS

↓

Server Components

↓

Serialized Data

↓

Client Components (when necessary)
```

Avoid unnecessary client-side fetching.

---

# State Management

Default

React State

Context (when shared)

Server State

Handled by Next.js.

Avoid global state unless clearly justified.

---

# Asset Strategy

Images

next/image

Responsive.

Optimized.

Lazy-loaded.

---

Videos

Streaming.

Poster image.

Adaptive quality.

Lazy loading.

---

3D Assets

GLTF.

Compressed.

Lazy loaded.

Only loaded when entering Hero.

---

# SEO Strategy

Every Case receives:

Metadata API

Open Graph

Twitter Card

Canonical URL

Structured Data

XML Sitemap

Robots

Dynamic metadata generated from CMS.

---

# Performance Targets

Lighthouse

Performance

95+

Accessibility

100

Best Practices

100

SEO

100

Core Web Vitals

Green.

---

# Code Organization

Business logic never lives inside components.

Components render.

Hooks coordinate.

Services communicate.

Utilities transform.

---

# Error Handling

Graceful.

Human.

Narrative-friendly.

404

"This story hasn't grown yet."

500

"The forest is temporarily quiet."

Avoid generic browser errors.

---

# Security

Headers configured.

CSP.

Image domains restricted.

Environment variables isolated.

Secrets never exposed.

---

# Internationalization

Architecture prepared.

Primary language

Portuguese.

Future support

English.

Spanish.

No architectural changes required.

---

# Monitoring

Vercel Analytics.

Web Vitals.

Error monitoring.

Future

Sentry.

---

# Testing Strategy

Unit Tests.

Component Tests.

Accessibility Tests.

End-to-End Tests.

Visual Regression (future).

---

# Engineering Decisions

## D-046

Server Components by default.

Reason

Performance.

---

## D-047

Client Components only when interaction requires.

Reason

Reduce JavaScript.

---

## D-048

CMS-driven content.

Reason

Scalability.

---

## D-049

Technology never becomes the experience.

Reason

Narrative first.

---

# Success Criteria

The architecture succeeds when:

Pages load instantly.

SEO is excellent.

The experience remains accessible.

New Cases require no code changes.

Developers understand the project quickly.

AI assistants generate consistent implementations.

---

# Next Document

engineering/18-frontend-architecture.md

This document defines the complete project structure, folder organization, naming conventions, module boundaries and dependency rules.

---

# AI Context

When making engineering decisions:

Prefer simplicity.

Prefer server rendering.

Prefer composition.

Avoid unnecessary abstractions.

Every technical choice must reinforce the project's narrative, performance and long-term maintainability.

If a new dependency does not clearly improve the project, do not add it.