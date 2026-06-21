# Code Standards

## General

- Keep components small and single-purpose.
- Fix root causes — do not layer workarounds.
- Do not mix page layout and section content in one component.
- Respect the system boundaries defined in `architecture-context.md`.
- One screen component per route. Screens compose section components.

## TypeScript

- Strict mode is enabled.
- Avoid `any`; use explicit interfaces or narrowly scoped types.
- Practice area data uses typed interfaces from `src/data/practice/types.ts`.
- Props interfaces defined inline or co-located with the component.

## React

- Functional components only. No class components.
- Use React.lazy() for route-level code splitting.
- Keep state minimal — most content is static data, not state.
- Animation state managed by GSAP, not React state.
- Use semantic HTML elements (`section`, `nav`, `article`, `header`, `footer`, `address`).

## Styling

- Tailwind utility classes for all styling.
- Design tokens defined in `tailwind.config.js` — use token names, not raw hex in component code.
- Exception: section-specific colors (grain overlays, gradients) may use inline hex where they form a one-off decorative system.
- Font families: `font-serifDisplay` for headlines, `font-sans` for body/UI.
- Responsive: mobile-first. Use `sm:`, `md:`, `lg:`, `xl:` breakpoints.
- Spacing uses Tailwind scale. No arbitrary pixel values except for precise typographic sizing.

## Color System

| Token           | Value     | Usage                              |
| --------------- | --------- | ---------------------------------- |
| `ivory`         | `#FFFFFF` | Light page backgrounds             |
| `ink`           | `#14233B` | Primary dark text                  |
| `accent`        | `#2E5FA7` | Blue accent                        |
| Navy canvas     | `#0e1b33` | Dark section backgrounds           |
| Navy deep       | `#0a1428` | Dark gradient endpoint             |
| Gold/Amber      | `#B88A2D` | Micro-accents, rules, labels       |
| Gold bright     | `#C6A04A` | Hero accents, CTA highlights       |
| Stone text      | `#3A4A63` | Body copy on light backgrounds     |
| Muted label     | `#7A7466` | Eyebrow labels, metadata           |

## Animation

- All scroll animations use GSAP primitives from `src/motion/primitives/`.
- Do not add new animation libraries without discussion.
- Respect `prefersReducedMotion()` — animations must degrade gracefully.
- Animation delays and durations stay within the system defined in `src/motion/config.ts`.

## Content Data

- All practice area content lives in `src/data/practice/`.
- Navigation links defined in `src/data/navigation.ts`.
- Footer links defined in `src/data/footer.ts`.
- Team data in `src/data/team.ts`.
- Do not hardcode content strings in component markup — extract to data files.

## Images

- Use AVIF as primary format.
- Keep original source files in `Website Materials/`.
- Optimized/converted images go in `public/assets/`.
- Use `<img>` with `loading="lazy"` for below-fold images.
- Hero/LCP images use `fetchPriority="high"` and are preloaded in `index.html`.

## SEO

- Every page has a unique `<title>` and meta description.
- Heading hierarchy: one `<h1>` per page, proper `<h2>`/`<h3>` nesting.
- Practice area pages include schema.org structured data (LegalService).
- City landing pages target "[injury type] lawyer [city]" keywords.
- All images have descriptive `alt` text.

## Accessibility

- Semantic HTML landmarks on every page.
- Focus-visible styles on all interactive elements.
- Skip-to-content link.
- Color contrast meets WCAG AA.
- `aria-label` on icon-only buttons and links.
- `aria-labelledby` on sections with headings.
