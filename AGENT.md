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

## Content And Text

- Keep visible Danish text as valid UTF-8.
- Avoid mojibake in source files. Typical warning signs are broken Danish letters
  in words like "laerer", "spoergsmaal", "hjaelpe", and menu labels.
- After editing text-heavy files, search `src` for suspicious mojibake fragments.
- Use the live GymGPT pages as the source of truth when cloning visible content,
  but do not copy backend behavior or plugin scripts.

## Chat UI

- The subject chat box is a static visual clone.
- The input is a real typeable text field and the arrow is a real submit button,
  but submit must remain inert with `preventDefault()`.
- Do not add API calls, message storage, streaming, authentication, or AI
  integration unless explicitly requested.

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
