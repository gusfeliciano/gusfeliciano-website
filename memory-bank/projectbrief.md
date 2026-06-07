# Project Brief

> The foundation. Defines what we're building and why. Source of truth for project scope.
> Update only when the actual goals or scope of the project change.
>
> Scope boundary: *what & why* live here; the *user's job-to-be-done and UX* live in
> `productContext.md`. If you're describing a person's workflow, it belongs there, not here.

## What

Personal portfolio and blog for Gus Feliciano — Next.js site with an MDX blog, project
showcase, about/contact pages, and dark mode. Doubles as an open-source template others
can fork (MIT + attribution clause).

## Why

A professional platform that grows with Gus's career: showcases TPM / AWS Solutions
Architect work, hosts technical writing (cloud resume challenge, OWASP, AWS), and serves
as a networking surface.

## Success looks like

- [ ] Site stays live, fast, and presentable on Vercel with minimal upkeep
- [ ] New blog posts publishable by dropping an MDX file into `src/posts/`
- [ ] Content reflects current career status (resume, projects, about)

## Out of scope

- CMS or database — content is markdown in the repo
- Backend services (contact form is a page, not an API)

## Principles

- Content as files: posts are version-controlled MDX, no external store
- Keep it template-friendly: others should be able to fork and swap content

## Constraints (business / product)

- Personal time budget — low-maintenance stack choices preferred
