# Architecture Decision Records

> Good architecture is not defined by the decisions that were made.
>
> It is defined by the reasons those decisions were made.

---

## Purpose

This directory stores all Architecture Decision Records (ADR).

An ADR documents an important decision taken during the project.

Each ADR explains:

- What was decided
- Why
- Alternatives considered
- Consequences
- Status

The objective is to preserve context over time.

---

## When to Create an ADR

Create an ADR whenever a decision:

- changes the architecture
- changes the user experience
- affects performance
- affects scalability
- changes the technology stack
- introduces a new dependency
- changes navigation
- changes content strategy
- changes animation philosophy
- changes design philosophy

Do NOT create ADRs for:

- bug fixes
- CSS tweaks
- copywriting
- component implementation
- minor refactors

---

## Status

Each ADR must contain one status.

Accepted

Proposed

Deprecated

Rejected

Superseded

---

## Naming

0001-short-title.md

0002-short-title.md

...

Never rename existing ADRs.

If a decision changes:

Create a new ADR.

Reference the previous one.

---

## Principle

Architecture evolves.

History should not.

## Prompt Example

Before implementing this request, check whether it changes any architectural, product, UX, design, or infrastructure decision that is already documented.

If it does NOT change any existing decision:

  - reply only with “No ADR needed” and give a brief explanation.

If it does change or introduces a relevant decision:

  - propose a new Architecture Decision Record (ADR).
  - DO NOT implement anything yet.
  - wait for my approval
