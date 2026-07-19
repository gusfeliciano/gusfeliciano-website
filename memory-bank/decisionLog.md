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

- **Ecosystem/content strategy** (2026-06-07): gusfeliciano.com = identity + ALL dated
  writing (incl. Made Ordinary making-of stories); madeordinary.com = product/support +
  evergreen undated philosophy pages + release notes, NO dated journal at launch (revisit
  triggers: app traction, user-facing release content); Serel Memory canonical on GitHub;
  social = distribution only. Validated: 4-lens panel + 3 adversarial critics + Codex
  (sound-with-amendments). Full doc: docs/site-strategy.md
- **madeordinary.com stack** (2026-06-07): Next.js App Router (static) + Tailwind on
  Vercel — same stack as this site, one mental model; kept "brutally static" (no CMS, no
  API routes, no blog). Codex-confirmed over Astro+Cloudflare. Plan: docs/two-sites-one-launch-plan.md
- **Purpose Budget stays OUT of Made Ordinary** (2026-06-07): separate product, separate
  presence; MO site features Aery + Tune (+ Alio/Larken/Rein coming soon)
- **Resume button: keep hidden by default** (2026-06-07): PDF is 22 months stale
  (July 2024); unhide only in a recruiting-focused refresh with a freshly exported PDF and
  an acknowledged refresh obligation — resolves the 2025-12 open question
- **Upgrade to Next 16 / React 19 / ESLint 9** (2026-01): stay current on security
  patches — required `.npmrc` `legacy-peer-deps=true` for Vercel builds
- **Hide resume download button** (2025-12): commented out on home page, PDF remains
  in `public/` — reason not recorded. (Reason established + policy set 2026-06-07, see above)
- **Exclude OWASP Juice Shop post from blog listing**: via `EXCLUDED_POSTS` — reason
  not recorded
- **Adopt Serel Memory (then basecamp) v0.1.0 memory bank** (2026-06-07): session continuity for a
  return-occasionally project; hooks intentionally NOT enabled — user runs `/start`
  manually each session
- **Scoped npm override for Next's nested postcss** (2026-06-07): Next ≤16.2.7 pins
  vulnerable postcss@8.4.31 internally; override forces ≥8.5.10 (GHSA-qx2v-qp2m-jg93).
  Scoped to `next` per Codex review (alternatives: global override, accept build-time-only
  residual risk). **Remove the override once Next bumps its own postcss pin.**
- **Cross-agent review for dependency/security fixes** (2026-06-07): user wants Codex
  consulted on fixes before committing (Serel Memory ask-codex pattern)

## ADR index

- none yet

## Superseded or deprecated

- none

## Decision criteria

- Low-maintenance over cutting-edge; the site should survive months of neglect
