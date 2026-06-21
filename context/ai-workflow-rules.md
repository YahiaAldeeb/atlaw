# Development Workflow

## Approach

Build this project incrementally using a spec-driven workflow. Context files define what to build, how to build it, and what the current state of progress is. Always implement against these specs — do not infer or invent behavior from scratch.

## Scoping Rules

- Work on one feature unit or page at a time.
- Prefer small, verifiable increments over large speculative changes.
- Do not combine unrelated pages or systems in a single implementation step.

## When To Split Work

Split an implementation step if it combines:

- Multiple unrelated pages
- Navigation restructuring and content changes
- Animation system changes and layout changes
- SEO infrastructure and visual design

If a change cannot be verified in the browser quickly, the scope is too broad — split it.

## Handling Missing Requirements

- Do not invent copy, case results, or testimonials that are not provided in the briefs.
- If content is marked "CONFIRM" in the briefs, use a placeholder with a visible "[CONFIRM]" marker.
- If a requirement is ambiguous, resolve it in the relevant context file before implementing.
- If a requirement is missing, add it as an open question in `progress-tracker.md`.

## Content Rules

- All marketing copy must reflect PI-only positioning. No references to other practice areas.
- Dewnya Bazzi is the only attorney featured in hero/authority sections.
- Team page may show other PI-relevant attorneys and staff.
- Tone: "unreasonable hospitality" — warm, strategic, client-centered. Not aggressive, not clinical.
- Do not use stock legal language. Write like a person, not a brochure.

## Protected Components

Do not modify these without explicit instruction:

- `src/motion/primitives/*` — Animation system.
- `src/motion/config.ts` — Animation configuration.
- `src/motion/SmoothScroll.tsx` — Lenis wrapper.

These are shared infrastructure. Extend them, do not modify them.

## Keeping Docs In Sync

Update the relevant context file whenever implementation changes:

- Site structure or routing
- Design tokens or color system
- Content data model
- Page inventory

Progress state must reflect the actual state of the implementation, not the intended state.

## Before Moving To The Next Unit

1. The current unit renders correctly in the browser on desktop and mobile.
2. No TypeScript or build errors.
3. Content matches the briefs (or has visible "[CONFIRM]" placeholders).
4. `progress-tracker.md` reflects the completed work.
