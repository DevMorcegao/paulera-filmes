---
title: Motion Bible
project: Paulera Filmes
document: 10-motion-bible
version: 1.0.0
status: Draft
owner: Morcegao
language: en-US
target_market: pt-BR
depends_on:
  - ../foundation/*
  - ../product/*
  - design/09-design-system.md
last_updated: 2026-07-14
---

# Motion Bible

> Motion is not decoration.
>
> Motion is storytelling.
>
> Every animation exists because something meaningful is happening.
>
> If movement does not communicate intention,
> it should not exist.

---

# Purpose

This document defines every movement throughout the experience.

Motion should feel alive.

Not mechanical.

Visitors should never notice animations.

They should notice emotion.

---

# Motion Philosophy

Nature never moves in straight lines.

Nature never starts instantly.

Nature never stops abruptly.

Every movement accelerates.

Breathes.

Settles.

The interface should behave the same way.

---

# The Five Motion Principles

## Principle 01

Motion communicates hierarchy.

Large elements move less.

Small elements move more.

---

## Principle 02

Motion follows attention.

Animations should guide the eye.

Never distract it.

---

## Principle 03

Motion represents time.

Scrolling is the passing of time.

Not navigation.

---

## Principle 04

Motion creates continuity.

Users should never feel transported.

Only guided.

---

## Principle 05

Everything has weight.

Leaves move differently than branches.

Branches move differently than the trunk.

Nothing moves identically.

---

# Narrative Motion

The experience follows one continuous camera movement.

The camera never teleports.

The camera never cuts abruptly.

Everything connects.

---

## One Persistent Scene

The homepage is composed of one continuous Three.js scene.

The tree never disappears.

The scene never reloads.

Scrolling moves the camera through different regions of the same environment.

HTML content fades in and out around the scene.

The environment always remains alive.

---

# Chapter Motion

## Arrival

Feeling

Wonder.

Motion

Very subtle breathing.

Soft wind.

Floating particles.

Volumetric light.

Almost static.

---

## Roots

Feeling

Connection.

Motion

Roots slowly emerge.

Fog drifts horizontally.

Cursor slightly influences nearby roots.

Nothing follows the cursor directly.

The world simply reacts.

---

## Trunk

Feeling

Growth.

Motion

The camera slowly climbs.

The trunk reveals itself naturally.

Light gradually increases.

Tiny insects.

Dust.

Small branches moving.

---

## Branches

Feeling

Discovery.

Motion

Branches gently sway.

Hover increases local movement.

Leaves react.

Soft illumination appears.

Nothing scales dramatically.

---

## Fruits

Feeling

Reward.

Motion

Fruits remain still.

Hover introduces subtle life.

Click disconnects the fruit.

The camera follows it.

The transition becomes the Case page.

---

## Seeds

Feeling

Hope.

Motion

Small particles rise.

Leaves slowly disappear.

The forest becomes quieter.

The journey concludes.

---

# Camera Language

The camera behaves like a filmmaker.

Never like a drone.

Never like a videogame.

Small dolly movements.

Soft pans.

Very limited zoom.

Movement should always feel intentional.

---

# Scroll Choreography

Scrolling represents walking.

Not page navigation.

Every scroll advances the narrative.

Never rush.

Never stop suddenly.

---

# Cursor Philosophy

The cursor should almost disappear.

Avoid exaggerated cursor effects.

Instead:

Nearby elements respond.

The environment reacts.

The cursor itself remains simple.

---

# Parallax

Parallax must have purpose.

Foreground

Leaves.

Branches.

Particles.

Midground

Tree.

Content.

Background

Forest.

Fog.

Mountains.

Sky.

Every layer has different speed.

Never exaggerated.

---

# Lighting Animation

Light changes slowly.

Morning.

Afternoon.

Golden Hour.

Twilight.

Visitors should almost never consciously notice this transition.

---

# Wind System

Wind is a global actor.

Leaves.

Grass.

Particles.

Small branches.

Fog.

Everything reacts together.

Wind intensity changes subtly throughout the journey.

---

# Particle System

Particles represent atmosphere.

Dust.

Seeds.

Pollen.

Tiny leaves.

Never excessive.

Never continuous noise.

---

# Hover Motion

Hover should feel alive.

Not interactive.

Cards breathe.

Images shift slightly.

Light changes.

Depth increases.

Nothing jumps.

---

# Page Transition Philosophy

Pages should not exist.

Scenes exist.

Users move between scenes.

Every transition preserves narrative continuity.

---

# Home → Case

The Fruit is selected.

↓

Camera approaches.

↓

Fruit fills the screen.

↓

Scene transforms.

↓

Case begins.

No fade.

No flash.

No loading screen.

---

# Case → Home

Camera slowly leaves.

↓

Fruit reconnects.

↓

Visitor returns exactly where they left.

Context preserved.

---

# Section Reveal

Elements appear progressively.

Never simultaneously.

Never from random directions.

Reveal follows reading order.

---

# Timing Philosophy

Micro Interaction

Immediate.

---

Component

Comfortable.

---

Section

Slow.

---

Scene

Cinematic.

Exact durations belong to motion tokens.

---

# Easing Philosophy

No aggressive easing.

Avoid elastic.

Avoid bounce.

Prefer:

Natural acceleration.

Natural deceleration.

Organic curves.

---

# Reduced Motion

Every animation has an accessible alternative.

No information depends on movement.

Story remains intact.

Only movement changes.

---

# Performance

Animation budget is finite.

Never animate:

width

height

top

left

box-shadow

filter

Prefer:

transform

opacity

clip-path (carefully)

CSS variables

GPU-friendly properties

---

# Three.js Philosophy

Three.js is not the protagonist.

The Tree is.

Technology should disappear.

The visitor should remember the forest.

Not WebGL.

---

# Audio Synchronization (Optional)

Future versions may synchronize:

Wind.

Leaves.

Birds.

Ambient forest.

No background music.

Silence remains valuable.

---

# Motion Tokens

```
motion.instant

motion.fast

motion.normal

motion.slow

motion.cinematic

motion.hover

motion.scene

motion.wind

motion.camera

motion.reveal
```

---

# Motion Checklist

Every animation should answer:

Why does this move?

What emotion does it create?

Does it improve understanding?

Can accessibility preserve it?

Does it affect performance?

If any answer is "No",

remove it.

---

# Decision Log

## D-031

The camera never teleports.

Reason

Narrative continuity.

---

## D-032

Motion follows natural behavior.

Reason

Supports immersion.

---

## D-033

Transitions are scene changes.

Reason

Reinforce cinematic storytelling.

---

# Next Document

design/11-ui-principles.md

This document defines composition, hierarchy, grids, layout philosophy, responsive behavior and how interfaces should be assembled using the Design System.

---

# AI Context

Never animate because animation is possible.

Animate only when movement communicates meaning.

The best animation is the one users remember emotionally,

not technically.