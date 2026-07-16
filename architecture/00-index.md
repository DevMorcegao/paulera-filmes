---
title: Project Index
project: Paulera Filmes
document: 00-index
version: 1.1.0
status: Draft
owner: Morcegao
language: en-US
target_market: pt-BR
depends_on: []
last_updated: 2026-07-15
---

# Paulera Filmes

Welcome.

This repository contains the complete documentation for the Paulera Filmes website.

This project is documentation-driven.

Documentation defines the product.

Implementation follows documentation.

---

# Reading Order

Read the documents in the following order.

## Foundation

01 Vision

02 Brand Strategy

03 Creative Direction

04 User Experience

---

## Product

05 PRD

06 Information Architecture

07 Content Strategy

08 Roadmap

---

## Design

09 Design System *(philosophy and naming — still current)*

10 Motion Bible

11 UI Principles

12 Component Specifications

13 Design Tokens *(use `13-design-tokens.v2.json` — corrected)*

14 Animation Tokens

15 Figma Mapping

16 Component Checklist

**SYSTEM-DESIGN.md** — the current source of truth for concrete color, type,
spacing, radius, motion and breakpoint values. Reconciles 09, `DESIGN.md` (Google
Stitch output, historical — see status below) and `13-design-tokens.json`.
Read this alongside 09, not instead of it: 09 explains *why*, SYSTEM-DESIGN.md
gives the exact values.

---

## Engineering

17 Tech Blueprint

18 Frontend Architecture

19 Development Guide

20 AI Collaboration Guide

---

## Execution

21 Implementation Roadmap

22 Definition of Ready

23 Definition of Done

24 Bootstrap Prompt

25 Design System Generation

26 Implementation Prompts

27 Review Prompts

---

## Decisions

All Architecture Decision Records live in `decisions/` (`0001` through `0009`
at time of writing). See `decisions/README.md` for the convention. Decisions
are never edited after acceptance — if one changes, a new ADR is created
referencing the old one. Check whether a task needs a new ADR before writing
any code.

---

# Principles

Never skip documents.

Never invent requirements.

Never change architecture without updating documentation.

Never hardcode values already defined in Design Tokens.

Always use Motion Tokens.

---

# Current Status

Documentation

✅ Complete — all 28 documents plus decisions/0001–0009 exist

Design

✅ Explored and reconciled — see SYSTEM-DESIGN.md. Pending final sign-off on
the light-primary direction it recommends before Sprint 01 begins.

Implementation

⏳ Pending

CMS

⏳ Pending

Deployment

⏳ Pending

---

# Repository Philosophy

Everything should have one source of truth.

Documentation.

↓

Design.

↓

Implementation.

↓

Testing.

↓

Deployment.