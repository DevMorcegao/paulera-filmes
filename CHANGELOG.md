# Changelog

All notable changes to the Paulera Filmes project are documented in this file.

This changelog follows the principles of Keep a Changelog and Semantic Versioning.

## Versioning

Project versions follow Semantic Versioning (MAJOR.MINOR.PATCH):

- **MAJOR** — Breaking architectural or product changes.
- **MINOR** — New features, completed sprints, significant improvements.
- **PATCH** — Bug fixes, documentation updates, small refinements.

Documentation files maintain their own independent version numbers.

Architecture Decisions (ADRs) are immutable and are not versioned through this file.

---

## [0.2.0] - 2026-07-16

### Added

- Completed Sprint 01: Core Architecture Implementation.
- `next-themes` integrated for semantic dark mode management.
- `Providers` component created for centralized React Context management.
- `src/design/tokens.ts` exporting programmatic design tokens for 3D/JS usage.
- `src/design/motion.ts` exporting programmatic motion tokens powered by the `motion` package.
- Centralized global `Metadata` and `Viewport` configuration in `src/constants/metadata.ts`.

### Changed

- `src/app/layout.tsx` refactored to consume the new Providers and centralized metadata.

---

## [0.1.0] - 2026-07-16

### Added

- Completed Sprint 00: Project Infrastructure scaffolded.
- Next.js 16 (App Router) project initialized with TypeScript and strict mode.
- Integrated dependencies: `motion`, `@react-three/fiber`, `@react-three/drei`, `three`, `react-hook-form`, `zod`.
- Integrated `shadcn/ui` for accessible component primitives without design lock-in.
- Full `src/` folder architecture initialized per `18-frontend-architecture.md`.
- `13-design-tokens.v2.json` added to align machine-readable tokens with `SYSTEM-DESIGN.md`.

### Changed

- Replaced default Tailwind v4 theme in `globals.css` with the complete Paulera Filmes nature-derived token system.
- Replaced demo fonts with project fonts (EB Garamond, Hanken Grotesk) in `layout.tsx`.
- Updated `17-tech-blueprint.md` (v1.1.0) to officially include `shadcn/ui`.

### Fixed

- Renamed Sprint 08 in `21-implementation-roadmap.md` from "Leaves" to "Atmosphere" to resolve conflict with ADR-0009.

### Removed

- Removed Next.js boilerplate demo content.