---
title: Stitch Design System Generation
project: Paulera Filmes
document: 25-stitch-prompt
version: 2.1.0
status: Ready
owner: Morcegao
language: en-US
target_market: pt-BR
depends_on:
  - foundation/02-brand-strategy.md
  - foundation/03-creative-direction.md
  - foundation/04-user-experience.md
  - product/05-prd.md
  - design/09-design-system.md
  - design/10-motion-bible.md
  - SYSTEM-DESIGN.md
last_updated: 2026-07-15
---

# Google Stitch — Design System Generation Prompt

## Role

You are a Principal Product Designer specialized in premium editorial experiences, cinematic interfaces and scalable Design Systems.

Your task is **not** to design a single landing page.

Your responsibility is to establish the complete visual language that will guide the entire project.

Think like a Lead Designer creating the foundation of a world-class digital product.

---

# Existing Constraints — Read Before Generating

If `13-design-tokens.json` and/or `SYSTEM-DESIGN.md` already exist in this
project, treat their color, typography, spacing, radius, motion and breakpoint
values as **fixed constraints**, not as a starting suggestion. Generate the
components, layouts and interaction concepts requested below using those exact
values. Do not propose a different color direction (for example, a darker or
lighter overall theme) without flagging it explicitly as an alternative rather
than presenting it as the output.

The previous run of this prompt produced a color direction that conflicted
with `13-design-tokens.json` (dark vs. light) — this section exists so that
doesn't happen again.

---

# Project

Paulera Filmes is an audiovisual production studio.

This website should feel like entering a film.

It should never resemble:

- a marketing agency
- a SaaS website
- a startup landing page
- a template portfolio

Instead, it should feel like:

- an interactive documentary
- an editorial publication
- an art exhibition
- a premium film studio

---

# Creative Direction

The entire experience is inspired by the metaphor of a living tree.

The tree is **not** an illustration.

The tree is the visual language of the project.

Every design decision should reinforce this metaphor through:

- composition
- typography
- rhythm
- scale
- whitespace
- lighting
- atmosphere
- visual hierarchy

The homepage represents a continuous journey through a single tree.

The narrative unfolds in five chapters:

• Roots

• Trunk

• Branches

• Fruits

• Seeds

These chapters are narrative moments.

They are **not** independent visual sections.

---

# Cinematic Philosophy

The experience should feel directed.

Visitors should feel like a camera is exploring a living world.

The interface should communicate:

silence

curiosity

nature

craft

art

time

memory

growth

Avoid excessive decoration.

Prioritize atmosphere.

---

# Design System Objectives

Create a reusable Design System.

Do not design isolated pages.

Focus on defining:

## Typography System

Editorial hierarchy.

Large cinematic titles.

Elegant body text.

Readable long-form content.

Consistent spacing.

---

## Color System

Natural palette.

Earth.

Wood.

Stone.

Fog.

Moss.

Soft light.

Avoid saturated colors.

---

## Spacing System

Generous whitespace.

Comfortable reading rhythm.

Editorial spacing.

Vertical breathing.

---

## Grid System

Flexible editorial layouts.

Asymmetrical compositions.

High-end magazine inspiration.

Strong alignment principles.

---

## Navigation

Desktop navigation.

Mobile navigation.

Section navigation.

Sticky behaviors.

Navigation states.

---

## Components

Buttons

Cards

Video cards

Case cards

Section headers

Editorial blocks

Image galleries

Quotes

Metrics

Testimonials

Contact form

Footer

Navigation items

Interactive links

Badges

Labels

Dividers

Media containers

---

## Responsive Behavior

Desktop

Laptop

Tablet

Mobile

Maintain visual consistency across all breakpoints.

---

## Component States

Default

Hover

Focus

Pressed

Disabled

Loading

Active

---

# Visual Language

The interface should communicate:

organic

editorial

minimal

timeless

premium

cinematic

contemplative

immersive

Avoid trends.

Avoid glassmorphism.

Avoid flashy gradients.

Avoid startup aesthetics.

Avoid unnecessary visual noise.

---

# Three.js Integration

The Hero section will contain a persistent Three.js experience.

Do NOT attempt to visualize or implement the 3D tree.

Instead:

Reserve a large immersive canvas area.

Design the surrounding interface so it naturally coexists with this future experience.

Treat the Three.js scene as a permanent stage where HTML content will live around it.

The canvas itself may remain dark and cinematic even where the surrounding
interface is light — see SYSTEM-DESIGN.md for how the two coexist.

---

# Content

Use placeholders.

Do not invent copywriting.

Do not generate real project descriptions.

Examples:

Heading

Supporting Text

Case Title

Video Placeholder

Editorial Paragraph

CTA

Contact Form

The purpose is to validate structure rather than content.

---

# Interaction Principles

Interactions should feel calm.

Deliberate.

Meaningful.

Avoid playful microinteractions.

Every interaction should support storytelling.

---

# Motion

Represent motion visually when appropriate.

Do not design decorative animations.

Motion should appear subtle.

Elegant.

Purposeful.

---

# Inspiration

The final result should feel closer to:

Independent cinema

Editorial magazines

Architecture portfolios

Museum exhibitions

Luxury publications

Nature documentaries

rather than:

Creative agencies

Corporate websites

Technology startups

Marketing templates

---

# Deliverables

Generate a complete Design System proposal including:

- Typography
- Colors
- Layout principles
- Component library
- Navigation
- Cards
- Forms
- Editorial blocks
- Responsive behavior
- UI patterns
- Visual hierarchy
- Interaction concepts

Focus on reusable systems instead of individual pages.

The Design System should serve as the visual foundation for the entire project.