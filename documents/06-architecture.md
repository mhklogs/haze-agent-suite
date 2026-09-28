# haze-agent-suite — Architecture Summary

> Generated from static analysis on 2026-09-28.

## Components

| Layer | Present | Evidence |
| --- | --- | --- |
| Presentation / UI | yes | 0 route module(s), 5 component file(s) |
| API / server | no | 0 handler(s), entrypoints: none |
| Domain / business logic | unclear | no dedicated layer detected |
| Persistence | no | no database client |
| Authentication | no | none detected |

## Detected frameworks and libraries

| Package | Purpose (inferred) |
| --- | --- |
| `@google/genai` | dependency |
| `@tailwindcss/vite` | dependency |
| `@types/node` | dependency |
| `@types/react` | dependency |
| `@types/react-dom` | dependency |
| `@types/three` | dependency |
| `@vitejs/plugin-react` | dependency |
| `lucide-react` | dependency |
| `motion` | dependency |
| `react` | React |
| `react-dom` | React |
| `react-markdown` | dependency |
| `react-router-dom` | dependency |
| `tailwindcss` | Tailwind CSS |
| `three` | Three.js |
| `typescript` | dependency |
| `vite` | Vite |

## Runtime and delivery

| Concern | Finding |
| --- | --- |
| Language mix | TypeScript, HTML, CSS |
| Package manager | npm |
| Container | none |
| Serverless / PaaS | Vercel configuration present |
| CI | none detected |
| Tests | **none detected** |
| Type safety | TypeScript |

## Environment variables referenced

_None referenced._
