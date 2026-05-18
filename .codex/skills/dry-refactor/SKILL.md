---
name: dry-refactor
description: Use when Codex needs to reduce duplication, prepare repeated pages/components, add several similar routes, evaluate maintainability, or respond to DRY/refactor requests. Triggers include repeated UI cards, page templates, route/link config, subject-like pages, shared layout extraction, monolithic component cleanup, and preserving behavior while centralizing data or structure.
---

# DRY Refactor

## Workflow

1. Identify repeated data separately from repeated structure. Move repeated facts into config and repeated markup into shared components.
2. Preserve behavior and visuals first. Do not use a DRY cleanup as an excuse for unrelated redesigns or broad rewrites.
3. Add or reuse a template before adding multiple similar pages. Enable new pages through config when the layout is shared.
4. Keep route and link data single-source where practical. Avoid manually maintaining the same URL in menus, cards, buttons, and page components.
5. Rename overly specific classes to reusable names only when they truly apply beyond the first page.
6. Keep abstractions small. Prefer boring shared components and plain data over clever frameworks or new dependencies.

## GymGPT Defaults

- `src/data/subjects.ts` owns subject names, slugs, links, page titles, chat intro text, placeholders, and hero image paths.
- Subject pages should use `SubjectPage`; do not copy a subject page per subject.
- Shared layout belongs in `src/components/layout`.
- Reusable CSS should use generic names such as `subject-*`, not old one-page names such as `math-*`.
- Do not add React Router unless simple path-based routing is no longer enough.

## Verification

Run the relevant checks before finishing:

- `npm.cmd run lint`
- `npm.cmd run build`
- Smoke-test routes affected by routing/config changes.
- Verify links still point to the intended local or external target.
- Confirm the refactor did not change visible output unless the user requested a visual change.
