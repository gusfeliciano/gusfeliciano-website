# Decision Log

> Durable decisions and why they were made. Use this for decisions future agents
> should not re-litigate without a good reason.
> Update when an architectural, product, workflow, or operational decision is made,
> superseded, or rejected.
>
> **Supersede, don't delete.** When a decision changes, don't erase the old line —
> append "SUPERSEDED by ADR-N (YYYY-MM-DD)" to it and move it to the Superseded
> section below. The audit trail of *what was true when* is the point of this file.

## Active decisions

- **Upgrade to Next 16 / React 19 / ESLint 9** (2026-01): stay current on security
  patches — required `.npmrc` `legacy-peer-deps=true` for Vercel builds
- **Hide resume download button** (2025-12): commented out on home page, PDF remains
  in `public/` — reason not recorded
- **Exclude OWASP Juice Shop post from blog listing**: via `EXCLUDED_POSTS` — reason
  not recorded
- **Adopt basecamp v0.1.0 memory bank** (2026-06-07): session continuity for a
  return-occasionally project; hooks intentionally NOT enabled — user runs `/start`
  manually each session

## ADR index

- none yet

## Superseded or deprecated

- none

## Decision criteria

- Low-maintenance over cutting-edge; the site should survive months of neglect
