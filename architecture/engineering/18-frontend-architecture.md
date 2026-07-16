---
title: Frontend Architecture
project: Paulera Filmes
document: 18-frontend-architecture
version: 1.0.0
status: Draft
owner: Morcegao
language: en-US
target_market: pt-BR
depends_on:
  - engineering/17-tech-blueprint.md
last_updated: 2026-07-14
---

# Frontend Architecture

> Architecture is communication.
>
> A good architecture makes the codebase predictable.
>
> Developers should spend time solving problems,
> not searching for files.

---

# Purpose

This document defines how the frontend is organized.

Every folder.

Every module.

Every dependency.

Every naming convention.

The architecture should scale from one page to hundreds of Cases without structural changes.

---

# Architectural Principles

## Feature over File Type

Group by responsibility.

Not by extension.

---

## Server First

Every route starts as a Server Component.

Only interactive islands become Client Components.

---

## Components are Pure

Components render UI.

They never fetch data.

They never contain business logic.

---

## Composition over Inheritance

Compose.

Never extend.

---

## Predictability

Every developer should immediately know where something belongs.

---

# Folder Structure

```
src/

│
├── app/
│
├── components/
│
├── features/
│
├── content/
│
├── hooks/
│
├── lib/
│
├── services/
│
├── providers/
│
├── styles/
│
├── types/
│
├── utils/
│
├── constants/
│
└── design/
```

---

# app/

Contains routing.

Only routing.

Example

```
app/

layout.tsx

page.tsx

loading.tsx

error.tsx

not-found.tsx

cases/

categories/
```

Never place reusable UI here.

---

# components/

Pure reusable UI.

```
components/

ui/

layout/

navigation/

media/

content/

feedback/
```

No business logic.

---

# features/

Feature-oriented modules.

Example

```
features/

hero/

roots/

trunk/

branches/

fruits/

seeds/

case/

timeline/

contact/
```

Each feature owns:

Components

Hooks

Types

Utilities

Animations

Feature-specific logic.

---

# content/

Content definitions.

Future static data.

Fallback content.

Narrative constants.

---

# hooks/

Reusable React hooks.

Example

```
useScrollProgress

useReducedMotion

useMediaQuery

useParallax

useIntersection
```

Hooks never render UI.

---

# lib/

Third-party integrations.

Examples

```
sanity.ts

motion.ts

three.ts

metadata.ts

analytics.ts
```

---

# services/

Communication layer.

CMS.

API.

Future endpoints.

Services never render UI.

---

# providers/

React Providers.

Examples

Theme

Analytics

MotionConfig

Future CMS Preview

---

# styles/

Global styling.

```
globals.css

tokens.css

typography.css

animations.css
```

Only truly global styles.

---

# design/

Generated design artifacts.

Examples

```
tokens.ts

motion.ts

themes.ts
```

Mirrors the Design documentation.

---

# constants/

Application constants.

Route names.

Metadata.

Configuration.

Never business logic.

---

# utils/

Pure utility functions.

Formatting.

Math.

Dates.

String helpers.

Never React.

---

# types/

Global TypeScript types.

Shared interfaces.

CMS models.

API contracts.

---

# Import Rules

Prefer aliases.

Example

```ts
import Hero from "@/features/hero"
```

Never

```ts
../../../components
```

---

# Feature Structure

Every feature follows the same organization.

```
hero/

components/

hooks/

animations/

types/

utils/

constants/

index.ts
```

Consistency matters more than personal preference.

---

# Component Structure

```
Component/

Component.tsx

Component.types.ts

Component.test.tsx

Component.stories.tsx (future)

index.ts
```

Every component lives in its own folder.

---

# Naming Convention

Components

PascalCase

Example

```
CaseCard

StoryHero

MediaGallery
```

Hooks

camelCase

```
useHeroScroll

useTreeGrowth
```

Utilities

camelCase

```
formatDuration

createSlug
```

Constants

UPPER_CASE

```
MAX_VIDEO_SIZE

DEFAULT_LANGUAGE
```

---

# Server vs Client

Server Components

Content.

SEO.

Metadata.

Static rendering.

---

Client Components

Hover.

Motion.

Three.js.

Forms.

Video interaction.

Only when required.

---

# Dependency Rules

Allowed

```
Feature

↓

Component

↓

UI
```

Forbidden

```
UI

↓

Feature
```

Dependencies flow downward.

Never upward.

---

# Data Flow

```
CMS

↓

Service

↓

Server Component

↓

Feature

↓

Component
```

Never bypass layers.

---

# Styling Rules

Tailwind only.

Global CSS only for:

Resets

Variables

Typography

Utilities

Never create page-specific CSS files.

---

# Icons

Single icon library.

Never mix icon styles.

Icons remain secondary.

---

# Error Boundaries

Every major route should support:

Loading

Error

Not Found

Graceful recovery

---

# Performance

Every feature should:

Code split automatically.

Lazy load when appropriate.

Optimize media.

Avoid unnecessary hydration.

---

# Environment Variables

```
NEXT_PUBLIC_

↓

Client

APP_

↓

Server
```

Secrets never reach the client.

---

# Testing

Every feature owns its tests.

Never centralize tests.

Tests evolve with features.

---

# Documentation

Every exported module should be discoverable.

No hidden architecture.

No magic folders.

---

# Decision Log

## D-050

Architecture follows features.

Reason

Scalability.

---

## D-051

Server Components by default.

Reason

Performance.

---

## D-052

Business logic stays outside UI.

Reason

Maintainability.

---

# Next Document

engineering/19-development-guide.md

This document defines coding standards, Git workflow, commit conventions, pull request rules, review process, branching strategy and engineering best practices.

---

# AI Context

When generating code:

Respect folder boundaries.

Never place business logic inside UI components.

Prefer composition.

Prefer server rendering.

Use aliases.

Follow the established naming conventions.

Every new file should have an obvious home.

If a file's location is unclear, revisit this document before creating it.