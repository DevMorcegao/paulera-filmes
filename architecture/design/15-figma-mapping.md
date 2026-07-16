---
title: Figma Mapping
project: Paulera Filmes
document: 15-figma-mapping
version: 1.0.0
status: Draft
owner: Morcegao
language: en-US
target_market: pt-BR
depends_on:
  - design/09-design-system.md
  - design/12-component-specifications.md
  - design/13-design-tokens.json
  - design/14-animation-tokens.ts
last_updated: 2026-07-14
---

# Figma Mapping

> This document defines how the Design System should be organized inside Figma.
>
> Organization is part of the product.
>
> Every designer should understand the project structure within minutes.

---

# Purpose

The Figma workspace should mirror the project architecture.

Design and development must speak the same language.

Nothing should exist in Figma that cannot exist in code.

Nothing should exist in code that cannot be represented in Figma.

---

# Workspace Philosophy

Figma is not a canvas.

It is a system.

Every page has a clear responsibility.

Every component has a single source of truth.

Every variable maps directly to Design Tokens.

---

# File Structure

```
Paulera Filmes

↓

Foundations

↓

Components

↓

Patterns

↓

Templates

↓

Pages

↓

Prototype

↓

Archive
```

---

# Page 01 — Foundations

Contains the project's visual language.

Sections

Color

Typography

Spacing

Grid

Radius

Elevation

Icons

Illustration

Motion Overview

Design Tokens

This page is never used for interface design.

Only documentation.

---

# Page 02 — Components

Contains every reusable component.

Structure

```
Primitives

↓

Navigation

↓

Content

↓

Media

↓

Feedback

↓

Experimental
```

Every component includes:

Default

Variants

States

Annotations

Usage Notes

---

# Page 03 — Patterns

Combinations of components.

Examples

Hero

Timeline

Gallery

Case Section

Contact Section

Testimonial Section

Navigation

Footer

Patterns are reusable.

Pages are not.

---

# Page 04 — Templates

High-level layouts.

Examples

Homepage

Case

Category

404

Journal

Templates contain placeholders.

Never real content.

---

# Page 05 — Pages

Real screens.

Desktop

Tablet

Mobile

Only production-ready interfaces belong here.

---

# Page 06 — Prototype

Complete navigation.

Transitions.

Interactions.

Motion validation.

Stakeholder presentations.

---

# Page 07 — Archive

Deprecated explorations.

Old versions.

Rejected concepts.

Never delete.

Archive.

---

# Component Organization

Naming Convention

```
Component

↓

Variant

↓

State
```

Example

```
CaseCard

/

Featured

/

Hover
```

---

Another Example

```
Button

/

Primary

/

Disabled
```

---

# Variables

Every Figma Variable mirrors Design Tokens.

Never create visual values manually.

Example

```
Color

↓

Forest

↓

500
```

Spacing

```
Branch
```

Radius

```
Leaf
```

Motion

```
Normal
```

Typography

```
Heading / H2
```

---

# Collections

Color

Spacing

Radius

Typography

Elevation

Motion

Opacity

Blur

Every collection maps directly to code.

---

# Auto Layout

Auto Layout is mandatory.

No manual positioning.

Every frame should resize correctly.

Every component supports intrinsic sizing.

---

# Constraints

Desktop

Responsive Width

Tablet

Flexible Width

Mobile

Fill Width

Avoid fixed dimensions whenever possible.

---

# Component Properties

Every reusable component exposes only meaningful properties.

Example

CaseCard

Variant

Featured

Default

Compact

Related

Media

Image

Video

Orientation

Horizontal

Vertical

Interactive

True

False

Avoid excessive properties.

---

# Documentation

Every component includes:

Purpose

Usage

Do

Don't

Accessibility

Responsive Behavior

Motion Notes

Developer Notes

---

# Naming Convention

Pages

```
01 Foundations

02 Components

03 Patterns

04 Templates

05 Pages

06 Prototype

07 Archive
```

Frames

```
Homepage Desktop

Homepage Tablet

Homepage Mobile
```

Components

```
CaseCard

TreeNavigation

StoryHero

MediaGallery

SeedsCTA
```

Never

```
Frame 32

Rectangle 18

Component 7

Copy

Final Final

New Version
```

---

# Grid

Desktop

12 Columns

Tablet

8 Columns

Mobile

4 Columns

Margins follow Design Tokens.

---

# Libraries

Single Local Library.

Future support for Team Libraries.

No duplicated components.

---

# Prototype Rules

Every prototype should simulate:

Scrolling

Navigation

Hover

Case Transition

Contact Flow

Reduced Motion

Prototype is for validating experience.

Not aesthetics.

---

# Handoff

Developers should never inspect arbitrary values.

Everything comes from Variables.

Spacing

↓

Tokens

Colors

↓

Tokens

Typography

↓

Tokens

Motion

↓

Motion Tokens

---

# Versioning

Major

Breaking visual changes.

Minor

New components.

Patch

Fixes.

Archive previous versions.

Never overwrite history.

---

# Quality Checklist

Every screen must satisfy:

✓ Auto Layout

✓ Variables only

✓ Components only

✓ Responsive

✓ Accessible

✓ Prototype connected

✓ Documentation completed

✓ Naming conventions respected

---

# Decision Log

## D-040

Figma mirrors code architecture.

Reason

Reduce friction between design and development.

---

## D-041

Variables are mandatory.

Reason

Single source of truth.

---

## D-042

Patterns precede Pages.

Reason

Reuse before customization.

---

# Next Document

design/16-component-checklist.md

This document defines the mandatory quality checklist for every component before it can be considered production-ready.

---

# AI Context

When generating Figma structures:

Never create disconnected components.

Never introduce arbitrary values.

Always organize assets according to this document.

The Figma file should feel like a direct visual representation of the Design System.

Every decision made in Figma should be reproducible in code without reinterpretation.