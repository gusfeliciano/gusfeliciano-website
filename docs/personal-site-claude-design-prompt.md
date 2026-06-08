# gusfeliciano.com Redesign — Claude Design Prompt

For: Anthropic's Claude Design (claude.ai → palette icon)
Plan required: Pro/Max/Team/Enterprise
Purpose: Explore a redesign of the personal portfolio + blog at gusfeliciano.com — all pages

---

## How to use this file

1. Open claude.ai and click the palette icon in the left sidebar to enter Claude Design.
2. Start a new project named "gusfeliciano.com Redesign."
3. Paste the entire prompt below as your first message.
4. Claude Design will respond with three distinct home-page directions first — pick one, then ask it to build out the full design system and remaining pages in that direction.
5. Optionally: paste in the current site URL (gusfeliciano.com) and screenshots of the existing pages so it knows the starting point.

---

## The prompt — paste this entire block

> # gusfeliciano.com — personal site redesign brief for Claude Design
>
> I'm redesigning my personal portfolio and blog at **gusfeliciano.com**. The current site is a clean but generic Tailwind look — centered profile photo, white cards on gray, standard SaaS-template feel. It works, but it doesn't feel like *mine*. I want a site with a distinctive identity that still stays minimal, content-first, and low-maintenance.
>
> ## Who I am (the site has to carry all of this)
>
> - **Day job:** Senior Technical Program Manager and AWS Certified Solutions Architect, based in Colorado. The site's first audience is recruiters and hiring managers evaluating me for TPM / cloud roles.
> - **Builder:** I ship open-source and indie software on the side. I created **basecamp** (a memory bank + workflow kit for AI coding agents, MIT licensed) and run **Made Ordinary**, an indie studio building intentional apps for Apple platforms. I'm deep into AI tooling and homelab projects.
> - **Writer:** The blog is my differentiator — hands-on technical posts (Cloud Resume Challenge series, OWASP Juice Shop on ECS, AI agent tooling). Tech peers arrive from these posts. The writing should feel first-class, not bolted on.
> - **Voice:** earnest learner-practitioner. First person, plain English, enthusiasm without hype.
>
> The redesign should resolve a tension the current site ignores: it presents me only as a corporate TPM, but half my story now is builder/writer. I want both, without the site becoming a "personal brand" production.
>
> ## Start with three directions
>
> Before designing the full site, show me **three distinct home-page treatments** (desktop 1440px + mobile 375px for each):
>
> 1. **Editorial** — type-driven, writing-forward. The blog is the spine of the page; who-I-am is compact. Think a well-set personal column, not a portfolio.
> 2. **Builder's desk** — project-forward with personality. Featured work (basecamp, Made Ordinary, AWS projects) presented like things on a workbench; warm, a little texture, hints of the homelab/tinkerer identity.
> 3. **Quiet professional** — recruiter-optimized restraint. Strong identity row (name, role, location, certs), then selected work and writing. Closest to the current site but with real typographic character.
>
> I'll pick one (or ask for a blend), and then you'll build the full design system and all pages in that direction.
>
> ## Design system to establish after I pick
>
> - **Typography:** this is where the identity should live. Give the site a real typographic point of view — a characterful display/heading face paired with a highly readable body face, and a good monospace for code (technical posts are full of code blocks; they must look great in both themes).
> - **Color:** keep it calm. Light and dark mode are both first-class (the current site has a dark mode toggle and I keep it). Dark mode should be considered, not inverted — comfortable for reading long technical posts at night. One accent color used with discipline.
> - **Layout:** content max-width tuned for reading (~70ch for posts). Generous whitespace. The site is small — home, about, projects, blog, contact — so navigation should be effortless.
> - **Imagery:** my profile photo, blog post cover images (16:8-ish landscape), and project/app icons. No stock photography, no abstract gradient blobs.
> - **Motion:** subtle or none. No parallax, no scroll-jacking.
>
> ## Pages needed (after the direction is chosen)
>
> Show desktop (1440px) AND mobile (375px) for each, light mode by default, dark mode for Home and one blog post.
>
> ### 1. Home
> - Identity: name, what I do, where (Colorado), and the dual identity (TPM/cloud architect + indie builder) in one composed hero
> - Latest writing: 2–3 most recent posts, title + excerpt + date
> - Selected work: basecamp, Made Ordinary (links out to madeordinary.com), and the strongest AWS project
> - A considered place for a resume action (I've been undecided about a "Download Resume" button — design where it *would* live so it earns its place, e.g. near the identity row, not a giant CTA)
> - Social links (GitHub, LinkedIn), footer
>
> ### 2. About
> - Narrative first: who I am, the TPM + builder arc, why I write
> - Experience highlights (quantified wins — e.g. "automated CapEx reporting from 2 weeks to 2 hours")
> - Certifications row: AWS Solutions Architect, AWS Cloud Practitioner, ISC2 Cybersecurity, CSM — presented compactly, not as a trophy wall
> - Skills, but designed (grouped, scannable — not three bullet lists)
>
> ### 3. Projects
> - Rethink the current uniform card list. Tier it: 1–2 flagship projects (basecamp deserves a case-study-style entry — what it is, why, link to repo + announcement post), then a compact grid/list of the rest (Cloud Resume Challenge parts, this website itself)
> - Each entry: name, one-paragraph description, tech tags, GitHub/external links
> - Room for a "via Made Ordinary" cross-link for the studio's apps
>
> ### 4. Blog index
> - Currently a 2-column card grid with cover images. Consider whether covers should stay or whether an editorial list (title, date, excerpt, small thumbnail) serves reading better — show your recommendation
> - Date-sorted, no pagination needed yet (5 posts, growing slowly)
>
> ### 5. Blog post page
> - The most important page in the redesign. Long-form technical reading: clear hierarchy, comfortable measure, excellent code block treatment (syntax-highlight styling for both themes), styled blockquotes/lists/tables, cover image handled gracefully
> - Title, date, reading time; footer with "more posts" or prev/next
>
> ### 6. Contact
> - Simple: short paragraph, email (gus.feliciano@outlook.com), social links. No contact form.
>
> ### 7. 404
> - On-brand, brief, links back to home and recent posts
>
> ### 8. Header + footer components
> - Header: name/wordmark, nav (About, Projects, Blog, Contact), theme toggle
> - Footer: nav echo, social, copyright
>
> ## Hard constraints (the design must respect these)
>
> - Implementable in my existing stack: **Next.js App Router + Tailwind CSS**, statically rendered, hosted on Vercel. No CMS, no backend, no contact forms — blog posts are MDX files in the repo.
> - The repo doubles as an open-source template others fork — the design should work with swapped content (different name, photo, posts) without falling apart.
> - Low-maintenance: I touch this site in short sessions weeks apart. No design elements that need constant content grooming (no "now playing", no activity feeds).
> - Keep both themes AA-accessible for contrast.
>
> ## What to avoid
>
> - The generic Tailwind/SaaS-template look I already have (white cards, rounded-lg, shadow-md on everything)
> - Marketing-speak and superlatives — the voice is earnest and plain
> - Newsletter popups, cookie banners, testimonials, analytics badges
> - Heavy hero illustrations or 3D blobs
> - Anything that makes a recruiter work to find role, location, and experience
>
> ## Output preferences
>
> - Three home directions first, then full system after I choose
> - Realistic copy in my voice — use the real facts above, not lorem ipsum
> - Show the design system page (type scale, colors for both themes, components: post list item, project card, tag, button, code block) before the remaining pages
> - Annotate key decisions briefly — why a face/color/layout was chosen — so I can implement deliberately

---

## After the first generation — follow-up prompts to use

- **"Blend direction 1's blog treatment with direction 3's identity row — show the merged home page."**
- **"Show the blog post page with a real code-heavy post — long bash blocks, inline code, a table — in both themes."**
- **"Design the projects page with basecamp as a flagship case study and everything else compact."**
- **"Show me the home page with and without the resume download — which composition is stronger?"**
- **"Tighten the about page — recruiters skim: can they get role, location, certs, and two proof points in five seconds?"**
- **"Show a 'writing' treatment where the blog index has no cover images at all — pure editorial list. Better or worse?"**
- **"Design the dark mode code block treatment in detail — syntax token colors, line highlights, copy button."**
- **"Add a subtle personal mark — a small monogram or glyph that can serve as favicon and wordmark."**
- **"Show what the site looks like with 20 posts and 10 projects — does the design scale?"**
- **"Mock a compact 'uses' or 'homelab' page in the same system, in case I add one later."**

## After mockups are locked

1. **Export the design tokens** (type scale, both palettes, spacing) from Claude Design.
2. **Implementation path:** this is a restyle, not a rebuild — the site already runs Next.js App Router + Tailwind with MDX posts. Implement as an incremental Tailwind refactor: tokens into `tailwind.config.ts`, fonts via `next/font`, then page-by-page (home → blog post → blog index → projects → about → contact).
3. **Known cleanups to fold in during implementation:**
   - Contact page email link `href` points to `your.email@example.com` (displays the right address, links to a placeholder)
   - Older posts duplicate the H1 (page renders frontmatter title AND body H1) and show literal quote marks around excerpts on listing cards
   - `/images/default-cover.jpg` fallback referenced in the blog listing doesn't exist
   - Decide the resume button's fate (currently commented out on home)
4. **Keep the template promise:** after the redesign, confirm the repo still works as a fork-and-swap template.
