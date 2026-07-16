# ADR-0009

Status

Accepted

---

# Title

Correct the final chapter name in the navigation sequence: Seeds, not Leaves.

---

# Context

ADR-0003 describes the chapter sequence as "Roots → Trunk → Branches → Fruits →
Leaves." Every foundation document that defines the narrative in detail —
02-brand-strategy.md, 03-creative-direction.md, 04-user-experience.md — ends
the sequence in "Seeds" instead, always with the same meaning: the contact
section, framed as the beginning of another story rather than a conclusion.

25-design-system-generation.md (the prompt used to generate the Design System)
independently carried the same "Leaves" drift, which is corrected in its own
v2.1.0.

"Leaves" is not simply an error, though — it independently appears in
21-implementation-roadmap.md (Sprint 08) and 26-implementation-prompts.md
(Prompt 11) as a distinct engineering pass: ambient motion, micro-interactions,
atmosphere, sitting between Fruits and Seeds, not replacing Seeds.
08-roadmap.md's higher-level Phase 07 activity list confirms this reading — it
names the narrative chapters as "Hero, Roots, Trunk, Branches, Fruits, Seeds,"
without Leaves.

This ADR does not reopen the decision made in ADR-0003 (the tree as the
primary navigation metaphor). It corrects a naming drift that crept into
ADR-0003's writeup.

---

# Decision

The narrative chapter sequence is:

Roots

↓

Trunk

↓

Branches

↓

Fruits

↓

Seeds

"Leaves" remains a valid, separate concept: the implementation sprint that adds
an ambient-detail motion layer across the experience. It is not a sixth
narrative chapter, has no emotional beat of its own in 04-user-experience.md's
chapter walkthrough, and should not appear in any document that lists the
narrative/navigation chapter sequence.

---

# Alternatives Considered

Leave ADR-0003 as written and treat "Leaves" as the intended final chapter,
demoting "Seeds" instead. Rejected — three separate foundation documents
already define Seeds in detail, with matching copy and intent
("Vamos criar a próxima história?"); none define an equivalent "Leaves"
chapter with its own emotional objective.

---

# Consequences

25-design-system-generation.md is updated to match (v2.1.0).

26-implementation-prompts.md's Prompt 11 gets a short note clarifying Leaves is
an engineering pass, not a chapter, to prevent the same drift from recurring.

0003-tree-metaphor.md is left exactly as originally written, per this
repository's own rule against editing existing ADRs (see decisions/README.md).
This ADR supersedes it on this one detail; the core decision in ADR-0003
stands unchanged.

---

# Supersedes

ADR-0003 — partially. Only the chapter-naming detail changes; the decision to
use the tree as the primary navigation metaphor is unaffected.

---

# Date

2026-07-15