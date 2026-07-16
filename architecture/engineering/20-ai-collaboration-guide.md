---
title: AI Collaboration Guide
project: Paulera Filmes
document: 20-ai-collaboration-guide
version: 1.0.0
status: Draft
owner: Morcegao
language: en-US
target_market: pt-BR
depends_on:
  - ../foundation/*
  - ../product/*
  - ../design/*
  - engineering/*
last_updated: 2026-07-14
---

# AI Collaboration Guide

> AI is a collaborator.
>
> Never the decision maker.
>
> Humans define direction.
>
> AI accelerates execution.

---

# Purpose

This document establishes how AI assistants participate throughout the project.

It defines:

- responsibilities
- limitations
- workflows
- context strategy
- review process

The goal is consistency.

Not automation.

---

# Philosophy

AI should increase quality.

Not quantity.

Never ask AI to "build a website."

Ask AI to solve one well-defined problem.

Small context.

Small tasks.

High quality.

---

# Source of Truth

Whenever AI receives a task, these documents take precedence:

1.

Creative Direction

↓

2.

PRD

↓

3.

Design System

↓

4.

Motion Bible

↓

5.

Component Specification

↓

6.

Engineering Documentation

↓

7.

Current Task

Never invert this order.

---

# AI Responsibilities

AI may:

Generate code.

Generate documentation.

Refactor code.

Suggest improvements.

Review consistency.

Generate tests.

Generate accessibility improvements.

Explain architecture.

Generate migrations.

Document decisions.

---

AI must not:

Invent requirements.

Change architecture without approval.

Rename components arbitrarily.

Ignore Design Tokens.

Ignore Motion Tokens.

Create undocumented patterns.

Change narrative decisions.

---

# Human Responsibilities

Humans decide:

Vision.

Narrative.

Business goals.

Creative direction.

Architecture.

Final approval.

AI assists.

Humans decide.

---

# Context Strategy

Never send the entire repository.

Instead:

Feature

↓

Relevant Documents

↓

Current Files

↓

Task

Smaller context produces better results.

---

# Example

Bad

```
Build my portfolio.
```

Good

```
Read:

09-design-system.md

10-motion-bible.md

12-component-specifications.md

Implement StoryHero.

Requirements:

Responsive

Accessible

Server Component

Motion Tokens

No hardcoded values.
```

---

# Task Size

Prefer tasks that can be completed in:

30–90 minutes.

Avoid:

"Build the entire homepage."

Prefer:

Build Hero.

↓

Review.

↓

Build Roots.

↓

Review.

↓

Build Trunk.

↓

Review.

Iterative development improves quality.

---

# Documentation First

Before implementing:

Architecture exists.

Specification exists.

Design exists.

Then implementation begins.

Documentation always leads.

---

# Prompt Structure

Every implementation prompt follows this order.

Context

↓

Objective

↓

Constraints

↓

Acceptance Criteria

↓

Expected Output

---

Example

```
Context

Read:

09-design-system.md

12-component-specifications.md

17-tech-blueprint.md

Objective

Implement CaseCard.

Constraints

Server Component

Responsive

Accessible

Motion Tokens only

Acceptance Criteria

Matches specification.

No TypeScript errors.

No hardcoded values.
```

---

# AI Review

Every generated output should be reviewed.

Questions

Does it respect architecture?

Does it respect naming?

Does it respect Design Tokens?

Does it respect Motion Tokens?

Does it introduce unnecessary complexity?

Could a simpler solution exist?

---

# Refactoring

Ask AI to refactor only after functionality exists.

Avoid speculative refactoring.

---

# Code Generation

Generate:

One feature.

One component.

One hook.

One service.

One test suite.

Avoid generating multiple unrelated modules.

---

# Documentation Updates

Whenever implementation changes architecture,

update documentation first.

Never allow documentation to become outdated.

---

# Context Windows

Large prompts reduce precision.

Prefer:

Smaller conversations.

Focused tasks.

Clear goals.

---

# AI Personas

During development AI assumes one role at a time.

Architect

↓

Designer

↓

Frontend Engineer

↓

Accessibility Reviewer

↓

Performance Reviewer

↓

QA Reviewer

Never mix responsibilities unnecessarily.

---

# Review Workflow

Specification

↓

Implementation

↓

Accessibility

↓

Performance

↓

Code Review

↓

Documentation

↓

Merge

AI may assist every stage.

---

# Naming

AI never invents names.

Always reuse terminology already defined.

Example

Correct

CaseCard

StoryHero

TreeNavigation

Incorrect

ProjectCard

MovieCard

GalleryHero

---

# Consistency

When uncertain,

AI should follow existing patterns.

Never create new conventions.

---

# Performance Checklist

Generated code should:

Minimize JavaScript.

Prefer Server Components.

Lazy load media.

Avoid layout shifts.

Optimize images.

Avoid unnecessary hydration.

---

# Accessibility Checklist

Generated UI should:

Support keyboard.

Support screen readers.

Provide focus indicators.

Respect reduced motion.

Maintain semantic HTML.

---

# Motion Checklist

Never hardcode animation values.

Always import Motion Tokens.

Never create inconsistent easing.

---

# Design Checklist

Never invent colors.

Never invent spacing.

Never invent typography.

Always consume Design Tokens.

---

# Security Checklist

Never expose secrets.

Validate inputs.

Escape dynamic content.

Avoid unsafe HTML.

---

# AI Limitations

AI does not know:

Business priorities.

Future roadmap.

Client feedback.

Legal decisions.

Humans remain responsible.

---

# Decision Log

## D-056

AI is part of the workflow.

Reason

Increase execution speed.

---

## D-057

Documentation precedes implementation.

Reason

Reduce ambiguity.

---

## D-058

Small tasks produce better outcomes.

Reason

Higher quality generations.

---

# Completion

The project documentation is considered complete when:

Foundation exists.

Product exists.

Design exists.

Engineering exists.

AI Collaboration exists.

Implementation may begin.

---

# Final Principle

The objective is not to write more code.

The objective is to build a product that remains understandable years from now.

Every design decision.

Every engineering decision.

Every line of code.

Every prompt.

Should contribute to the same story.

Like the tree itself,

the project should grow without losing its roots.