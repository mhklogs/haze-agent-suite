# Haze Agent Suite — Delivery Roadmap (v3)

> **Provenance note.** This roadmap was produced on **2026-09-29** from the same
> static analysis as the rest of `documents/` (see `00-index.md`). Backlog items are
> derived from the functional requirements in `02-functional-requirements.md`, the
> non-functional targets in `03-non-functional-requirements.md`, and the market
> findings in `01-market-analysis.md`. Timeline targets are `[TO BE VALIDATED]`
> where they depend on future estimates rather than shipped code.

## 1. Objective & horizon

Multi-agent conversation UI suite. This roadmap plans the next **5–6 week** horizon
of incremental delivery in lockstep with the SDLC phases and traceability rules in
`07-sdlc-lifecycle.md` (Requirements → Design → Implement → Verify →
Release/Operate → Improve).

Current shipped state: https://haze-agent-suite.vercel.app (production), source
committed, v2 documentation set complete. It is a static Vite SPA — one runner
(`src/lib/gemini.ts`) and fourteen pinned agents (`src/agents/config.ts`), with a
Three.js shell and no server of its own.

**Correction carried from the analysis:** `02-functional-requirements.md` and
`06-architecture.md` report "no environment variables referenced" and "no API
handlers". Both are scan artefacts — the app reads `VITE_GEMINI_API_KEY` through
`import.meta.env`, which a `process.env` scan cannot see, and it calls the provider
directly from the browser. Sprint 0 fixes the documents before the backlog is trusted.

## 2. Product backlog

Prioritised with MoSCoW. Items are phrased as outcomes (not tasks) and map to FR/NFR ids.

| ID | Item (outcome) | Source | Priority |
| --- | --- | --- | --- |
| PBI-01 | The provider key is no longer inlined in the public bundle: model calls go through a same-origin server-side proxy, and `src/lib/gemini.ts` holds no credential material | NFR-5.2, NFR-5.4, NFR-5.5 | Must |
| PBI-02 | The exposed key has a bounded blast radius: the proxy validates and bounds request size, rate-limits per session, and rejects unknown agent ids instead of proxying them | NFR-5.4, NFR-5.5, NFR-3.1 | Must |
| PBI-03 | All fourteen agents in `agents/config.ts` are reachable from the roster and stream a response, each protected by a smoke test that fails if a prompt or its rubric is missing | FR-3, `06-architecture.md` | Must |
| PBI-04 | Conversation memory is per-agent within a session, so a follow-up question keeps its context (README roadmap v1.2) | README roadmap v1.2 | Should |
| PBI-05 | A run can be exported as Markdown/PDF and shared by link (README roadmap v1.3) | README roadmap v1.3 | Should |
| PBI-06 | CI runs typecheck, build and the smoke suite on every push, and a performance baseline for the 3D shell (LCP p75, CLS p75, p95 TTFB) is measured on production, replacing `[TO BE MEASURED]` | NFR-6.1, NFR-6.3, NFR-1.1–NFR-1.5 | Won't (this horizon) |

## 3. Sprint plan

**Sprint cadence:** 1 week = 1 sprint; stand-up daily (15 min), sprint review + retrospective at the end of each sprint.

| Sprint | Goal | PBI delivered | Done/exit criteria | Phase (SDLC) |
| --- | --- | --- | --- | --- |
| Sprint 0 | Make the documents true again | — | `02`/`06` list the real env surface (`VITE_*`, read via `import.meta.env`); `05-use-cases.md` carries one use case per agent family | Requirements |
| Sprint 1 | Take the key out of the bundle | PBI-01 | bundle inspection shows no credential string; agent flow re-walked in `05-use-cases.md` | Design → Implement |
| Sprint 2 | Harden and prove the agent surface | PBI-02, PBI-03 | build/lint/test green; 14/14 agents verified on the deployed URL | Verify |
| Sprint 3 | Agents remember | PBI-04 | multi-turn context verified per agent; no cross-agent leakage | Implement → Verify |
| Sprint 4 | Outputs leave the app | PBI-05 | export verified in the UI and via a shared link | Implement → Verify |
| Sprint 5 | Operate and measure | PBI-06 | release cut, deployed to https://haze-agent-suite.vercel.app, NFR-1 numbers recorded with commit SHA | Release & Operate |
| Sprint 6 (contingency) | Buffer for quota exhaustion, 3D performance regression or deploy slips | — | no new scope added mid-buffer | Improve |

## 4. Ceremonies

- **Daily stand-up (15 min):** what shipped since yesterday, what's blocked, what's next — tied to the active sprint's PBI board.
- **Sprint review (30 min, end of sprint):** demo PBI outcomes against the sprint goal; update `05-use-cases.md` walkthrough where behavior changed.
- **Retrospective (30 min, end of sprint):** inspect + adapt; record one actionable improvement per sprint in git notes.
- **Backlog refinement (before sprint 1):** re-prioritise PBIs against latest market findings.

## 5. Burndown (planned)

Tracked as PBI points remaining per sprint. Planned trajectory below; the team records actuals at each sprint review. `[TO BE MEASURED]` until the first sprint completes.

Total 28 points: PBI-01 8, PBI-02 5, PBI-03 6, PBI-04 4, PBI-05 3, PBI-06 2. Sprint 0 is unpointed re-baselining.

| Sprint | Planned remaining points |
| --- | --- |
| Start | 28 |
| Sprint 1 | 20 |
| Sprint 2 | 9 |
| Sprint 3 | 5 |
| Sprint 4 | 2 |
| Sprint 5 | 0 |
| Done (0) | 0 |

## 6. Rollout & deploy

- Build/deploy per `07-sdlc-lifecycle.md` §5 (release policy) — `npm run build` (`tsc -b && vite build`) then `vercel --prod`. PBI-01 changes this: the build gains a server-side target for the proxy, so the deploy is no longer purely static.
- Production: https://haze-agent-suite.vercel.app
- Health: a broken build blocks the next sprint's first commit; security findings are release blockers.

## 7. Risks

| Risk | Mitigation |
| --- | --- |
| Requirements drift vs. implemented code | PBI↔FR↔use-case traceability check per change (`07-sdlc-lifecycle.md` §3) |
| Unmeasured NFRs treated as done | `[TO BE MEASURED]` targets stay visible until instrumented |
| Burndown actuals fall off plan | Over-plan cut scope in the retrospective, not mid-sprint |
| The key already exposed in the shipped bundle is scraped and abused before PBI-01 lands | PBI-01 and PBI-02 ship together as one release; rotate the key at deploy time and enable provider-side quota alerts |
| NFR-5.2 is recorded as "verified" while the credential is public by construction | Sprint 0 restates the requirement against the actual mechanism, and PBI-01 is the evidence that closes it |
| Three.js shell regresses interaction performance | PBI-06 baselines LCP/CLS on the deployed page so any regression is visible in review |
