# GymGPT Local Frontend Clone

This project is a local React/Tailwind recreation of the visible frontend of
`https://www.gymgpt.dk/`. It is currently a static frontend-only clone with
local pages, reusable subject templates, and an inert chat UI.

The project is intended as a foundation for a later Python FastAPI backend
integration.

This repository contains the public frontend prototype only. The FastAPI
backend, AI orchestration, prompts, and production infrastructure are private
and not included.

## Pages

- `/`
- `/matematik/`
- `/fysik/`
- `/kemi/`
- `/biologi/`
- `/privatlivspolitik/`

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS

## Run Locally

```powershell
npm.cmd install
npm.cmd run dev -- --host 127.0.0.1 --port 5174
```

Useful checks:

```powershell
npm.cmd run lint
npm.cmd run build
```

## Project Notes

- This is a visible frontend clone only.
- It does not copy the WordPress backend, plugin scripts, analytics, or AI backend behavior.
- Subject pages are data-driven through shared templates.
- The chat UI is intentionally inert for now.
- The planned backend target is Python FastAPI.
- The private backend, AI prompts, orchestration logic, and deployment setup are not part of this repository.

## Agent Guidance

- `AGENT.md` contains coding-agent instructions for this project.
- `PLAN.md` contains the longer-term frontend quality and FastAPI readiness plan.
- `CLAUDE.md` points Claude Code to `AGENT.md` so project guidance stays in one place.

## Copyright

Copyright (c) 2026 Bjørn la Cour Poulsen. All rights reserved.

No license is granted for copying, modifying, distributing, or using this code
unless permission is given explicitly.