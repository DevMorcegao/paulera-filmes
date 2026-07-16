---
title: UI Principles
project: Paulera Filmes
document: 11-ui-principles
version: 1.0.0
status: Draft
owner: Morcegao
language: en-US
target_market: pt-BR
depends_on:
  - ../foundation/*
  - ../product/*
  - design/09-design-system.md
  - design/10-motion-bible.md
last_updated: 2026-07-14
---

# UI Principles

> This document defines how interfaces should be composed.
>
> It does not define components.
>
> It defines the principles behind every future component.

---

# Purpose

Every screen should feel like it belongs to the same universe.

Not because colors match.

Because composition follows the same language.

Interfaces should disappear.

Stories should remain.

---

# The First Principle

The interface is not the protagonist.

Content is.

Motion is.

Atmosphere is.

The UI quietly supports all three.

Whenever the interface calls too much attention to itself,

it has failed.

---

# Visual Hierarchy

Hierarchy should emerge naturally.

Not aggressively.

The user should always know:

What deserves attention.

What can wait.

What is interactive.

What is contextual.

---

## Hierarchy Levels

Level 01

Narrative.

Hero.

Large imagery.

Primary message.

---

Level 02

Section content.

Titles.

Projects.

---

Level 03

Supporting information.

Metadata.

Descriptions.

---

Level 04

Utility.

Buttons.

Labels.

Navigation.

---

# Composition Philosophy

Every section behaves like a scene.

Scenes contain actors.

Actors have importance.

Not everything deserves the spotlight.

---

# Reading Rhythm

Users should never feel overwhelmed.

Large visual.

↓

Short text.

↓

Whitespace.

↓

Interaction.

↓

Pause.

↓

Continue.

The page breathes.

---

# Grid Philosophy

The grid is invisible.

Design should never feel constrained by columns.

Columns support alignment.

Not creativity.

---

# Alignment

Prefer left alignment.

Centered layouts only when they reinforce emotion.

Avoid mixing multiple alignment strategies inside the same section.

---

# Whitespace

Whitespace is intentional.

It represents silence.

Never fill empty space because it feels empty.

Empty space creates rhythm.

---

# Section Composition

Every section follows the same structure.

```
Introduction

↓

Main Content

↓

Supporting Content

↓

Transition
```

The transition prepares visitors emotionally for the next chapter.

---

# Content Width

Readable.

Comfortable.

Never stretch text across ultra-wide monitors.

Large displays gain whitespace.

Not wider paragraphs.

---

# Cards

Cards are stories.

Not containers.

Every card should feel like an exhibition panel.

Large imagery.

Minimal chrome.

Clear hierarchy.

---

# Buttons

Buttons invite.

They never shout.

Primary actions should feel confident.

Secondary actions should remain quiet.

Avoid multiple primary buttons within the same viewport.

---

# Typography Hierarchy

Display

↓

Heading

↓

Subheading

↓

Body

↓

Caption

Never skip hierarchy levels.

---

# Imagery

Images communicate first.

Text explains second.

Whenever possible,

allow images to introduce the section.

---

# Video

Video should dominate only when it carries narrative value.

Avoid background videos competing with content.

Every video should answer:

Why is this here?

---

# Color Usage

Color communicates meaning.

Not decoration.

Use Forest to indicate identity.

Use Amber sparingly.

Too much Amber removes its emotional impact.

---

# Contrast

Contrast directs attention.

High contrast is precious.

Spend it carefully.

Everything cannot compete for attention simultaneously.

---

# Icon Usage

Icons support recognition.

Never replace clear language.

Prefer text when clarity matters.

---

# Motion Integration

Motion should feel integrated into layout.

Not added afterward.

Every component should be designed assuming it moves.

---

# Scroll Composition

Scrolling reveals.

Never dumps.

Each viewport should communicate one primary idea.

---

# Progressive Disclosure

Show only what is necessary.

Reveal additional information naturally.

Avoid exposing every detail immediately.

Curiosity drives exploration.

---

# Layering

Every interface contains layers.

Background.

Atmosphere.

Content.

Interaction.

Feedback.

These layers should never compete.

---

# Responsive Philosophy

Responsive Design is reframing.

Not resizing.

Desktop

The visitor observes.

Tablet

The visitor approaches.

Mobile

The visitor participates.

The story remains identical.

Only the camera changes.

---

# Accessibility

Hierarchy should never depend solely on color.

Every interaction must remain keyboard accessible.

Reading order follows visual order.

Motion has accessible alternatives.

Touch targets remain generous.

---

# Error Prevention

Prevent mistakes before displaying errors.

Interfaces should guide users naturally.

Not punish them afterward.

---

# Empty States

Every empty state should reinforce the project's narrative.

Instead of

"No projects."

Use

"New stories are already taking root."

---

# Feedback

Feedback should feel subtle.

Hover.

Focus.

Loading.

Success.

Error.

All should respect the same visual language.

Avoid excessive visual noise.

---

# Consistency

Consistency does not mean repetition.

Consistency means shared principles.

Components may differ.

The experience should not.

---

# Decision Log

## D-034

Whitespace is considered content.

Reason

Rhythm is part of storytelling.

---

## D-035

Images introduce.

Typography explains.

Reason

Cinema communicates visually first.

---

## D-036

Responsive layouts preserve narrative.

Reason

Devices change.

Stories do not.

---

# Next Document

design/12-component-specifications.md

This document defines every reusable component in the system.

Each component will include:

- Purpose
- Anatomy
- Variants
- States
- Accessibility
- Motion
- Responsive behavior
- Implementation guidelines

---

# AI Context

When generating interfaces:

Think in scenes.

Not sections.

Think in rhythm.

Not spacing.

Think in atmosphere.

Not decoration.

Every layout should support the Creative Tree narrative established throughout the project.

If a screen looks like a SaaS dashboard,

it is wrong.

If a screen feels like a film still,

you are moving in the right direction.