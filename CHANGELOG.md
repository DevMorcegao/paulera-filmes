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

## [0.4.0] - 2026-07-17

### Added

- Completed Sprint 03: Hero Section & React Three Fiber canvas.
- `SceneContainer` added as a persistent background canvas supporting the "One Persistent Scene" system design.
- `SceneWrapper` client component implemented to bypass Server-Side Rendering (SSR) issues with React Three Fiber in Next.js.
- Added a performance-friendly ambient 3D particle system (80 floating green/gold dodecahedrons) inside the canvas to demonstrate depth and lighting.
- GSAP and `@gsap/react` added as project dependencies for advanced scroll choreography.
- `FadeIn` reusable motion wrapper component using `useGSAP` for semantic entrance animations, configured with React 19 polymorphic types.
- `Hero` component implementing typography layout and staggered entry animations aligned with Motion Bible.

### Changed

- Replaced transparent layout background with a hybrid structure: Hero is transparent to show the dark canvas, while subsequent editorial sections have solid `bg-mist-100` backgrounds to mask it on scroll.
- Refactored `ChapterRail` to dynamically check the scroll boundaries of individual links, ensuring text toggles between light (on Hero) and dark (on editorial content) to maintain perfect legibility.

---

## [0.3.0] - 2026-07-17

### Added

- Completed Sprint 02: Global Layout & Navigation Rail.
- Primitive layout components: `Container`, `Section`, and `Grid` supporting standard spacing and grid tokens.
- `ChapterRail` vertical navigation indicator, collapsing to collapsible accordion label on mobile using semantic `<details>` to support no-JS fallbacks.
- `Footer` component supporting global and contextual modes.
- `PageTransition` wrapper using `motion/react` presets.
- `useActiveSection` hook tracking the active scroll page segment.

### Changed

- Root layout (`src/app/layout.tsx`) updated to integrate `ChapterRail`, `PageTransition`, and `Footer`.
- Homepage structure (`src/app/page.tsx`) modularized with layout primitives and section IDs matching Chapter Rail targets.

### Fixed

- Fixed vertical navigation click scroll offsets using absolute window coordinates (`getBoundingClientRect().top + window.scrollY`) instead of element offset properties, solving alignment issues in nested layouts.
- Fixed active chapter indicator highlight freezing on document bottom scrolls by adding scroll threshold checks and memoizing array variables (using serialized strings) to prevent IntersectionObserver recreate loops.
- Fixed Tailwind v4 z-index compilation by moving `@theme` custom properties to the correct `--z-index-` prefix namespace.
- Polished `ChapterRail` styling to match borderless clean floating mockups, integrating `lucide-react` icons (Compass, Leaf, TreePine, GitFork, Cherry, Sprout) with thin editorial line strokes and active indicators.

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