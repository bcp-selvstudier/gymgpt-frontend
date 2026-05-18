# Agent Instructions For `webmatbot2`

## Project Goal

This project is a local React + Tailwind frontend clone of `https://www.gymgpt.dk/`.
It recreates the visible public pages only. Do not add WordPress, jQuery, analytics,
cookie-plugin scripts, AI backend behavior, or CMS functionality.

The local pages currently include:

- `/`
- `/matematik/`
- `/fysik/`
- `/kemi/`
- `/biologi/`
- `/privatlivspolitik/`

## Project-Local Skills

Use project-local skills when their triggers match:

- Use `$clone-website` for cloning or updating a local copy of a public GymGPT
  page. It covers live-page inspection, visual fidelity, asset localization,
  link audits, and frontend-only guardrails.
- Use `$dry-refactor` before adding repeated pages, duplicated UI, repeated
  route/link data, or maintainability cleanup. It covers shared templates,
  config-driven pages, reusable CSS, and behavior-preserving refactors.

## Planning Documents

- `PLAN.md` contains the current long-term improvement plan for frontend quality
  and FastAPI readiness.
- Read `PLAN.md` before making architectural, routing, chat, API-boundary, or
  backend-readiness changes.
- Do not implement `PLAN.md` automatically. Follow it when the user asks for
  plan work or when it directly clarifies the requested change.

## Commands

Use `npm.cmd` on Windows PowerShell:

- Install dependencies: `npm.cmd install`
- Start dev server: `npm.cmd run dev -- --host 127.0.0.1 --port 5174`
- Lint: `npm.cmd run lint`
- Build: `npm.cmd run build`
- Preview production build: `npm.cmd run preview`

Before finishing code changes, run:

1. `npm.cmd run lint`
2. `npm.cmd run build`

If relevant, smoke-test local routes with `Invoke-WebRequest` or the browser.

## Architecture

- `src/App.tsx` owns simple path-based routing. Do not add React Router unless the
  app grows beyond this small static clone.
- `src/data/subjects.ts` is the single source of truth for subject names, slugs,
  local links, document titles, hero image paths, chat intro text, and input
  placeholder text.
- Subject pages must use the shared `SubjectPage` template. Do not copy subject
  page components for individual subjects.
- Shared layout components live in `src/components/layout`.
- Homepage components live in `src/components/home`.
- Subject-page components live in `src/components/subject`.
- Privacy-policy content lives in `src/components/privacy`.
- Small inline SVG icons live in `src/icons/Icons.tsx`; do not add an icon
  dependency for small one-off icons.
- This frontend is expected to connect to a Python FastAPI backend in a later
  step. Keep frontend code structured so API integration can be added cleanly:
  isolate future network calls, avoid hard-coding backend behavior into visual
  components, keep chat UI state easy to replace with API-backed state, and do
  not introduce a mock backend inside React unless explicitly requested.

## Live Clone Workflow

- Inspect the live page before cloning or updating it. Capture the page title,
  route, hero image, visible headings, menus, body content, footer, cookie
  notice, and special UI states.
- Use screenshots or browser checks when visual fidelity is the point of the
  task. Compare desktop, tablet, and mobile layouts before calling the page done.
- Localize assets needed for the clone. Do not hotlink GymGPT media except while
  temporarily inspecting the live page.
- When a live page becomes local, update all local navigation surfaces and then
  search the source for the old live URL.

## DRY Page Additions

- Before adding multiple similar pages, identify the shared template and shared
  data. Add or improve the template first, then enable pages through config.
- Do not create one component per subject when `SubjectPage` and
  `src/data/subjects.ts` can express the difference.
- Do not create one-off CSS for a page if a reusable selector already fits.
- User-chosen local routes override live-site slugs; for example, local Kemi is
  `/kemi/`, not the original live `/kemi-c/`.

## Styling

- Styling is Tailwind-enabled, but this clone also uses reusable classes in
  `src/index.css` to match the WordPress/Education Base visual details.
- Keep CSS grouped by the existing section comments in `src/index.css`.
- Reuse generic classes such as `subject-*` and shared layout classes. Avoid
  subject-specific CSS such as `math-*`, `physics-*`, or similar.
- Preserve the live-site visual language: Poppins-style type, centered 1170px
  container, white header, deep blue footer variants, and orange accent `#fd5308`.
- Do not import WordPress theme CSS, Bootstrap, Gutentor, jQuery, or WordPress
  scripts.

## Links And Routing

- Internal local links should point to local paths:
  - `/`
  - `/matematik/`
  - `/fysik/`
  - `/kemi/`
  - `/biologi/`
  - `/privatlivspolitik/`
- The footer and cookie notice privacy links should point to `/privatlivspolitik/`.
- Email links and true third-party links may remain external.
- Unknown routes intentionally fall back to the homepage.
- Do a link audit after route work. Check homepage cards, card buttons, desktop
  dropdown links, mobile menu links, breadcrumbs, footer links, cookie notice
  links, and content links.

## Content And Text

- All user-visible Danish strings in `src/` must be valid UTF-8 with proper
  letters (æ, ø, å). Do not use `ae`, `oe`, or `aa` as substitutes in UI copy.
- When cloning visible wording, use correct Danish spellings such as `lærer`,
  `spørgsmål`, `hjælpe`, and `Mød AI lærerne`. Match the live GymGPT pages for
  exact phrasing, but do not copy backend behavior or plugin scripts.
- Mojibake is garbled text from encoding mistakes (for example UTF-8 read or
  saved with the wrong charset). Fix the file encoding; do not repair broken
  text by stripping special letters.
- After editing text-heavy files, search `src` for broken fallbacks that must
  not appear in UI copy: `laerer`, `spoergsmaal`, `hjaelpe`. Also search menu
  labels, placeholders, and privacy-policy paragraphs.
- Do not paste unstable mojibake byte sequences into `AGENT.md`, `.codex/skills`,
  or other project instructions. PowerShell or editor display may rewrite them.
  Use the ASCII fallback list above for searches instead.
- Save edited files as UTF-8 before committing Danish text changes.

## Chat UI

- The subject chat box is a static visual clone.
- The input is a real typeable text field and the arrow is a real submit button,
  but submit must remain inert with `preventDefault()`.
- Do not add API calls, message storage, streaming, authentication, or AI
  integration unless explicitly requested.

## Semantic HTML

- Use `<button>` for non-navigation actions and toggles.
- Use text or headings for labels that do not navigate.
- Use `<a>` only when activating it changes location or opens a real target.
- If an element looks like an input or button, prefer a real HTML input or button
  even when the behavior is intentionally inert.

## Assets

- The shared hero image is stored locally at:
  `public/images/university-student-1872810_1280.jpg`
- Prefer local assets for cloned public page visuals. Do not hotlink GymGPT media
  unless temporarily inspecting the live site.

## Change Discipline

- Keep edits scoped to the requested page or shared component.
- Do not refactor unrelated code while adding a page.
- Do not revert user changes.
- Preserve the static frontend-only nature of the clone.

## Verification Checklist

- Run `npm.cmd run lint`.
- Run `npm.cmd run build` when source files changed.
- Smoke-test changed local routes with the dev server when routing changed.
- Smoke-test unknown-route fallback after routing changes.
- Search for live GymGPT links that should now be local.
- After Danish text edits, search `src` for broken fallbacks (`laerer`,
  `spoergsmaal`, `hjaelpe`) and other encoding damage in menus and body copy.
