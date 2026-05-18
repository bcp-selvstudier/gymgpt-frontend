# Major Improvement Plan For Frontend Quality And FastAPI Readiness

## Summary

The project is in a solid state: it follows the local-page clone goal, uses shared subject templates, passes lint/build, and all local routes respond. The next improvements should avoid a big framework jump while creating cleaner seams for future FastAPI chat integration.

Recommended direction: prepare frontend seams only. Add typed boundaries and cleaner state structure, but keep behavior static until the FastAPI backend exists.

## Key Improvements

### Centralize Routes And Site Constants

- Add a small `src/config/routes.ts` for `/`, subject routes, and `/privatlivspolitik/`.
- Replace hardcoded route strings in `App`, footer, cookie notice, hero breadcrumbs, and links with route constants.
- Keep simple path-based routing for now.
- Do not add React Router yet.

### Strengthen Data-Driven Structure

- Keep `src/data/subjects.ts` as the subject source of truth.
- Add helper functions only where they reduce repeated string logic.
- Keep subject pages rendered through `SubjectPage`.
- Keep Kemi local route as `/kemi/`.

### Prepare Chat UI For FastAPI Later

- Split subject chat into:
  - a presentational chat shell
  - an inert subject wrapper
  - a future submit-handler boundary
- Define a small submit-handler shape that can later call FastAPI.
- Keep current behavior inert with `preventDefault()`.
- Do not add mock responses, API calls, message storage, or streaming yet.

### Improve Styling Maintainability

- Add CSS design tokens for repeated colors, container widths, and common spacing.
- Keep `src/index.css` for now.
- Preserve clear section comments.
- Split CSS only if the file keeps growing or new page types make it hard to navigate.

### Improve Content Maintainability

- Keep privacy content static for now.
- Extract repeated article/table markup only if privacy content continues to grow or gets reused.
- Use the live GymGPT pages as source of truth before major visual/content changes.

### Add Verification Discipline

- Keep using:
  - `npm.cmd run lint`
  - `npm.cmd run build`
- Smoke-test all local routes after routing/link changes:
  - `/`
  - `/matematik/`
  - `/fysik/`
  - `/kemi/`
  - `/biologi/`
  - `/privatlivspolitik/`
- Verify unknown route fallback after routing changes.
- Search for stale live GymGPT links when local pages are added.
- Search for Danish text encoding damage after text-heavy edits.

## FastAPI Readiness

When backend work begins, the frontend should be ready for a FastAPI chat endpoint shaped around subject chat.

Expected frontend/backend boundary:

- Frontend sends:
  - subject slug
  - user message
- Backend returns:
  - assistant text
  - optional metadata

Future files may include:

- `src/api/chatClient.ts`
- `src/types/chat.ts`
- environment-based API base URL
- loading and error states in the chat UI

The frontend should own display state. FastAPI should own answer generation.

## Implementation Order

1. Centralize routes and site constants.
2. Refactor chat UI into presentational and wrapper layers while preserving inert behavior.
3. Add future API type boundaries without making network calls.
4. Add CSS tokens for repeated visual constants.
5. Add optional route/link verification script only if manual checks become repetitive.

## Guardrails

- Do not implement the FastAPI backend yet.
- Do not add React Router yet.
- Do not add mock backend behavior inside React.
- Do not change the visual clone unless specifically requested.
- Keep the app static until backend integration is explicitly requested.
