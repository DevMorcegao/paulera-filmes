---
title: Design System
project: Paulera Filmes
document: 09-design-system
version: 1.0.0
status: Draft
owner: Morcegao
language: en-US
target_market: pt-BR
depends_on:
  - ../foundation/*
  - ../product/*
last_updated: 2026-07-14
---

# Design System

> This document defines the visual language of Paulera Filmes.
>
> It is not a UI Kit.
>
> It is not a Figma Library.
>
> It defines the rules from which every future interface should emerge.

---

# Philosophy

The Design System should disappear.

Visitors should never notice components.

They should notice atmosphere.

Every decision should reinforce the feeling of walking through a living forest.

Consistency is invisible.

That is its greatest strength.

---

# Design Principles

## Nature over Technology

The interface should feel organic.

Avoid interfaces that resemble software.

Prefer experiences that resemble places.

---

## Story over Decoration

Every visual element should communicate something.

Nothing exists solely because it looks beautiful.

---

## Motion over Static

Everything has life.

Nothing feels frozen.

The website breathes.

---

## Space over Density

Whitespace is narrative.

Do not fear empty space.

Silence creates rhythm.

---

## Timeless over Trendy

Avoid visual trends.

Avoid excessive glassmorphism.

Avoid excessive neumorphism.

Avoid AI-generated aesthetics.

Build something that still feels elegant in ten years.

---

# Design Foundations

The system is composed of six foundations.

```
Color

↓

Typography

↓

Spacing

↓

Grid

↓

Elevation

↓

Motion
```

Everything else derives from these.

---

# Color Philosophy

The palette represents the forest.

Not software.

Never refer to colors numerically.

Always use semantic names.

---

## Mist

The lightest neutral.

Represents air.

Negative space.

Breathing.

Used for:

Backgrounds.

Large surfaces.

---

## Fog

Soft neutral.

Secondary surfaces.

Subtle containers.

---

## Stone

Muted medium neutral.

Supporting typography.

Borders.

Icons.

---

## Bark

Primary dark neutral.

Navigation.

Titles.

Depth.

---

## Forest

Primary identity color.

Growth.

Nature.

Hope.

---

## Moss

Support green.

Interactive states.

Hover.

Selection.

---

## Amber

Golden hour.

Highlights.

CTA accents.

Important moments.

Never overused.

---

## Moon

Bright contrast.

Focus.

Reflection.

Used sparingly.

---

# Color Hierarchy

```
Mist

↓

Fog

↓

Stone

↓

Bark

↓

Forest

↓

Amber
```

Contrast should emerge naturally.

Never aggressively.

---

# Typography

Typography should resemble editorial publishing.

Not dashboards.

---

## Display

Large cinematic headlines.

Used only in Hero sections.

Maximum emotional impact.

---

## Heading

Section titles.

Strong hierarchy.

Comfortable rhythm.

---

## Body

Readable.

Comfortable.

Editorial.

Long-form friendly.

---

## Caption

Supporting information.

Metadata.

Credits.

Awards.

---

# Typography Rules

Never use more than two font families.

Large headings should breathe.

Avoid excessive bold text.

Use weight to create hierarchy.

Not color.

---

# Spacing System

Spacing names derive from tree growth.

Instead of numbers.

---

## Seed

The smallest spacing.

Tiny separation.

---

## Root

Compact spacing.

---

## Twig

Small groups.

---

## Branch

Section spacing.

---

## Trunk

Large layout spacing.

---

## Forest

Major narrative transitions.

The Home relies heavily on this token.

---

# Border Radius

Inspired by nature.

Never perfectly sharp.

Never excessively rounded.

---

## Pebble

Small radius.

---

## Leaf

Default radius.

---

## River

Large radius.

---

## Horizon

Hero sections.

Media.

---

# Shadows

Shadows simulate natural light.

Not floating cards.

Prefer soft ambient shadows.

Avoid dark hard shadows.

---

# Elevation

Instead of "Elevation 1"

Use

Ground

↓

Leaf

↓

Branch

↓

Canopy

↓

Sky

Each level represents visual depth.

---

# Grid

Desktop

12 Columns.

---

Tablet

8 Columns.

---

Mobile

4 Columns.

---

Maximum Content Width

Readable.

Never ultra-wide.

Large screens should increase whitespace.

Not line length.

---

# Layout Rhythm

Every section should feel like a chapter.

Spacing between chapters should be generous.

Avoid compressed layouts.

---

# Imagery

Images dominate.

UI supports.

Never the opposite.

---

# Video

Videos should never autoplay with sound.

Transitions should respect loading.

Poster frames matter.

---

# Icons

Minimal.

Outlined.

Elegant.

Consistent stroke width.

Never playful.

---

# Buttons

Buttons should feel calm.

Primary

Forest.

Secondary

Bark.

Ghost

Transparent.

Text

Minimal.

Avoid multiple competing CTA styles.

---

# Cards

Cards are exhibition pieces.

Not dashboards.

Large media.

Minimal chrome.

Breathing room.

---

# Forms

Invisible until necessary.

Simple labels.

Large click targets.

Accessible.

Human.

---

# Navigation

Navigation should never dominate.

The story dominates.

Navigation quietly supports it.

---

# States

Every component defines:

Default

Hover

Focus

Active

Disabled

Loading

Error

Success

Reduced Motion

Dark Mode

---

# Motion Tokens

Motion is standardized.

Fast

Micro feedback.

Normal

Most interactions.

Slow

Narrative transitions.

Cinematic

Scene changes.

Detailed timings belong in Motion Bible.

---

# Responsive Philosophy

The story never changes.

Only the camera.

Desktop feels expansive.

Tablet feels intimate.

Mobile feels personal.

---

# Accessibility

Color contrast.

Keyboard navigation.

Reduced Motion.

Screen readers.

Focus visibility.

Every component must support accessibility by default.

---

# Naming Convention

Never use generic names.

Instead of:

Gray 100

Use:

Mist

Instead of:

Spacing 32

Use:

Branch

Instead of:

Radius Large

Use:

River

Instead of:

Elevation 2

Use:

Branch

Every token reinforces the project's identity.

---

# Design Tokens

```
color.mist

color.fog

color.stone

color.bark

color.forest

color.amber

spacing.seed

spacing.root

spacing.twig

spacing.branch

spacing.trunk

spacing.forest

radius.pebble

radius.leaf

radius.river

radius.horizon

elevation.ground

elevation.leaf

elevation.branch

elevation.canopy

motion.fast

motion.normal

motion.slow

motion.cinematic
```

---

# Decision Log

## D-028

Semantic naming replaces numeric naming.

Reason

The Design System should communicate intent.

---

## D-029

Spacing reflects narrative pacing.

Reason

Whitespace is part of storytelling.

---

## D-030

Every token should reinforce the Creative Tree metaphor.

Reason

The Design System is an extension of the project's identity.

---

# Next Document

design/10-motion-bible.md

This document defines every animation, transition, easing curve, camera movement, parallax layer, scroll choreography and interaction behavior.

It is the cinematic director's handbook for the entire experience.

---

# AI Context

Never invent colors or spacing values arbitrarily.

Always derive new decisions from the semantic token system.

Every future component should be built from these foundations.

If a component requires a new token, question whether it truly belongs in the system before creating it.