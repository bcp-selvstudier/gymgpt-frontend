---
name: clone-website
description: Use when Codex needs to clone, recreate, update, or visually match a public website page in a local frontend, especially React/Tailwind clones. Triggers include requests to copy a live page, inspect a public site before implementing, create a local version of a live route, compare local output to a screenshot/live site, localize assets and links, or preserve frontend-only behavior while avoiding WordPress/backend scripts.
---

# Clone Website

## Workflow

1. Inspect the live page before implementing. Capture the page title, route, hero/media assets, visible headings, menus, links, content sections, footer, cookie notice, and special UI states.
2. Save needed visual assets locally when the clone should be self-contained. Avoid hotlinking except during temporary inspection.
3. Build the visible frontend only. Do not import CMS/theme scripts, analytics, WordPress CSS, jQuery, Bootstrap, or backend behavior unless explicitly requested.
4. Match semantics as well as pixels. Use real buttons for actions, real inputs for fields, links only for navigation, and forms with inert `preventDefault()` when UI should look usable but not submit.
5. Audit all links after a live page becomes local. Update menus, cards, buttons, breadcrumbs, footer links, cookie-notice links, and page content links.
6. Verify visually at desktop, tablet, and mobile widths when visual fidelity is part of the request.

## GymGPT Defaults

- Keep local routes local: `/`, `/matematik/`, `/fysik/`, `/kemi/`, `/biologi/`, `/privatlivspolitik/`.
- Use the live GymGPT page as source of truth for visible content, but keep the app static and frontend-only.
- Use local assets under `public/images/` for cloned page visuals.
- Preserve Danish UTF-8 text and search for mojibake after text edits.

## Verification

Run the relevant checks before finishing:

- `npm.cmd run lint`
- `npm.cmd run build`
- Smoke-test changed local routes.
- Search for old live URLs that should now be local.
- Search for mojibake warning characters in edited source files.
