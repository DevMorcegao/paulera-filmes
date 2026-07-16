---
title: Information Architecture
project: Paulera Filmes
document: 06-information-architecture
version: 1.0.0
status: Draft
owner: Morcegao
language: en-US
target_market: pt-BR
depends_on:
  - ../foundation/*
  - product/05-prd.md
last_updated: 2026-07-14
---

# Information Architecture

> This document defines how information is structured, connected and navigated throughout the project.
>
> It is the blueprint of the content.
>
> Design comes later.

---

# Purpose

The objective of this architecture is to organize information through storytelling rather than conventional navigation.

Users should never feel they are jumping between unrelated pages.

Every destination should feel like another branch of the same living tree.

---

# Navigation Philosophy

The website contains only one primary narrative.

The Home.

Everything else expands from it.

Instead of treating internal pages as isolated destinations, they behave as natural extensions of the Creative Tree.

Navigation should preserve context.

The visitor always knows where they came from.

The visitor always understands where they are.

---

# Site Map

```text
Home
│
├── Roots
├── Trunk
├── Branches
│      ├── Commercials
│      ├── Music Videos
│      ├── Documentaries
│      ├── Short Films
│      └── Authorial Projects
│
├── Featured Cases
│      ├── Case A
│      ├── Case B
│      ├── Case C
│      └── ...
│
└── Contact
```

Notice that visitors never navigate to "About".

Roots replace About.

Trunk replaces Resume.

Branches replace Categories.

Fruits replace Portfolio.

Seeds replace Contact.

The architecture itself tells the story.

---

# Navigation Layers

The project is divided into three layers.

---

## Layer 01

Narrative Layer

Responsible for emotional progression.

```
Arrival

↓

Roots

↓

Trunk

↓

Branches

↓

Fruits

↓

Seeds
```

---

## Layer 02

Content Layer

Contains the actual information.

Biography.

Projects.

Testimonials.

Clients.

Awards.

Contact.

---

## Layer 03

Technical Layer

Defines routes.

Metadata.

SEO.

CMS.

Internal linking.

This layer is invisible to users.

---

# Global Navigation

The navigation should remain minimal.

Avoid large menus.

Suggested desktop navigation:

```
Paulera Filmes

Manifesto

Cases

Contato
```

Notice that "Manifesto" replaces "Sobre".

This reinforces storytelling.

---

# Scroll Navigation

Scrolling is the primary navigation method.

Not clicking.

The Home is experienced vertically.

The visitor naturally progresses through the story.

---

# Case Navigation

Every Case must answer three questions.

Where did I come from?

Where am I?

Where can I go next?

Suggested footer:

Previous Story

↓

Back to Tree

↓

Next Story

Users should never reach dead ends.

---

# Category Navigation

Categories are represented by Branches.

Each Branch reveals only related Fruits.

No page reload.

No filtering UI.

Filtering feels natural.

---

# Related Content

Every Case should automatically recommend:

Similar category.

Same client.

Same production year.

Creative similarities.

The objective is increasing narrative continuity.

Not engagement metrics.

---

# URL Strategy

Home

```
/
```

Cases

```
/cases/project-name
```

Categories

```
/categories/music-videos
```

Optional future:

```
/journal
```

Avoid deep nesting.

Readable URLs.

Stable URLs.

---

# Breadcrumb Philosophy

Traditional breadcrumbs are unnecessary.

Instead:

```
Tree

↓

Branch

↓

Fruit
```

This reinforces the metaphor.

---

# Content Hierarchy

Priority 01

Stories.

---

Priority 02

Projects.

---

Priority 03

Biography.

---

Priority 04

Clients.

---

Priority 05

Technical information.

---

# Metadata Strategy

Every Case contains:

Title.

Description.

Client.

Year.

Category.

Location.

Crew.

Awards.

Related Cases.

Gallery.

Videos.

Credits.

Keywords.

SEO metadata.

Open Graph.

Everything should be CMS-driven.

---

# CMS Model

## Case

Fields

Title

Slug

Cover Image

Hero Video

Gallery

Description

Creative Challenge

Solution

Behind the Scenes

Credits

Category

Tags

Year

Client

Awards

Featured

SEO

---

## Category

Title

Description

Hero Image

SEO

---

## Testimonial

Author

Role

Company

Photo

Quote

---

## Timeline Event

Year

Title

Description

Image

---

# Internal Linking

Every page should point somewhere meaningful.

Examples

Case

↓

Related Cases

↓

Category

↓

Home

↓

Contact

Users should never stop exploring.

---

# Searchability

Version 1 intentionally avoids search.

The project encourages exploration.

Search becomes valuable only when content volume grows significantly.

---

# Scalability

The architecture must support:

50+

100+

200+

Cases

without redesigning navigation.

Adding a new project should require only CMS content.

No structural changes.

---

# SEO Architecture

Every Case receives:

Own metadata.

Own Open Graph.

Own structured data.

Own canonical URL.

XML sitemap inclusion.

The Home remains the strongest authority page.

---

# Future Expansion

The architecture supports future sections.

Examples:

Journal

Behind the Scenes

Creative Process

Awards

Speaking

Teaching

None of these require redesigning navigation.

---

# Content Ownership

The Home introduces.

Cases explain.

The CMS manages.

The Design System presents.

Motion connects.

Each layer has a clear responsibility.

---

# Decision Log

## D-016

The Home is the primary navigation experience.

Reason:

Users should emotionally connect before navigating.

---

## D-017

Cases become first-class citizens.

Reason:

Projects deserve dedicated storytelling.

---

## D-018

Categories are represented by Branches.

Reason:

Navigation and metaphor become the same system.

---

# Next Document

06-content-strategy.md

This document defines what should be written, how it should be written and how every piece of content contributes to storytelling.

---

# AI Context

Never organize information using generic corporate structures.

The Creative Tree is simultaneously:

- navigation
- information architecture
- storytelling
- mental model

Every new section introduced in the future should naturally fit somewhere within this ecosystem.

If a feature cannot be represented by the Tree, question whether it belongs in the product.