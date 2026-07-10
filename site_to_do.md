# thomascha.com — Site To-Do
Portfolio site for Thomas Cha. Next.js, hosted on Vercel. Repo: tomcha75-jpg/thomascha-portfolio.

Last updated: 2026-07-10

---

## Quick reference

- Live: https://thomascha.com
- Local: `/Volumes/Crucial 1TB/thomascha/Desktop/claude/career_ai/thomascha-portfolio/`
- Case study content: `/Volumes/Crucial 1TB/thomascha/Desktop/claude/career_ai/building case studies/Thomas_Cha_AI_Portfolio_Case_Studies_v2.md`
- Career profile: `/Volumes/Crucial 1TB/thomascha/Desktop/claude/career_ai/career exploration/AI_Portfolio_Thread_Summary_v2.md`
- Handoff notes: `/Volumes/Crucial 1TB/thomascha/Desktop/claude/aiop.txt`

---

## Status legend

- `[x]` Complete and live
- `[ ]` Not started or in progress

---

## PAGES

---

### [M01] Homepage — thomascha.com
**Status:** `[x]`

Complete and live. All sections built and deployed.

- [x] Sticky nav (scroll-aware backdrop blur)
- [x] Hero: eyebrow, H1, subheadline, contextual note, CTA
- [x] Case study grid: 4 cards (CS1–CS4), 2-col desktop / 1-col mobile, full-card links
- [x] CS2 blue meta callout: "This site is a live output of CS2. The job postings that led here were screened through it."
- [x] Methodology strip with three-phrase row
- [x] Footer with LinkedIn + email links (both are currently placeholders — see [M07])
- [x] JSON-LD Person + WebSite schema
- [x] Canonical URL set

---

### [M02] CS1 Page — /cs1
**Status:** `[x]`

Complete and live. Built and deployed.

- [x] Back link to thomascha.com
- [x] Header: eyebrow "Case Study 01", H1, subtitle, domain chips
- [x] The Problem
- [x] The System (3 stage cards: Research Thread, Prompt Generation, Deployment and Benchmarking)
- [x] Key Architectural Decision
- [x] The Retrospective (blue callout box with 3 paragraphs)
- [x] The So What
- [x] Closing credential line
- [x] Prev/Next navigation (← CS4, CS2 →)
- [x] Footer (same structure as homepage)
- [x] JSON-LD Article + BreadcrumbList schema
- [x] Canonical, OG, Twitter card metadata

---

### [M03] CS2 Page — /cs2
**Status:** `[ ]`

**Start condition:** CS1 page complete (done). Six-agent pipeline approved by Thomas.

**End condition:** `/cs2` loads on live site with all sections, prev/next nav, footer, metadata, and JSON-LD. Build passes with no TypeScript errors.

**Verification:**
- [ ] `npm run build` passes locally with no errors
- [ ] `/cs2` loads at thomascha.com/cs2
- [ ] All H2 sections visible: The Problem, The System, Key Architectural Decision, The So What
- [ ] Prev/Next nav shows ← CS1 and CS3 →
- [ ] Back link returns to thomascha.com
- [ ] CS2 meta callout echoed: this page should self-reference the fact that the site itself was screened through the system
- [ ] JSON-LD Article + BreadcrumbList validates in Google's Rich Results Test
- [ ] OG image renders correctly in social preview
- [ ] Mobile layout: no overflow, readable at 375px

**Subtasks:**
- [ ] Run six-agent pipeline (ask Thomas first)
- [ ] Source content from case studies file (long version): CS2 full narrative
- [ ] Key content to include:
  - [ ] Three-phase evaluation system: Phase 1 (role snapshot, fit score, alignment, divergence, tier), Phase 2 (8-signal red flag screen including: volatile management, high real-time social exposure, chronic urgency culture, arbitrary feedback, political hierarchy, ambiguous deliverables, scope creep, final-decision-maker framing), Phase 3 (cross-posting summary with 6 fields)
  - [ ] Benchmark refinement arc: 80% → 85% → ~90% → 93% → 95% Fable-match, running at Sonnet cost
  - [ ] Multi-model comparison process: Fable, Opus, Sonnet run in parallel on identical postings
  - [ ] Ambiguity distinction: performance ambiguity vs. exploratory ambiguity (this is a named architectural decision)
  - [ ] 17-dimension profile framework from I/O psychology + burnout research
  - [ ] 23-question intake design (not just existence — the methodology: scenario framing, free-text escape valves, behavioral prompts, forced-choice pairs, Dimension 5 as inference-only)
  - [ ] Deployment: 40+ real postings evaluated in active use
  - [ ] Self-referential callout: this site is a live output of the system (links from homepage card already; CS2 page itself should acknowledge it)
  - [ ] Editing component: two-phase document review via slash command, categories checked
- [ ] Write `app/cs2/page.tsx`
- [ ] Add per-page metadata (title, description, canonical, OG, Twitter card)
- [ ] Add JSON-LD Article schema (match CS1 pattern)
- [ ] Add JSON-LD BreadcrumbList schema
- [ ] Prev/Next links: ← CS1, CS3 →

---

### [M04] CS3 Page — /cs3
**Status:** `[ ]`

**Start condition:** CS2 page complete. Six-agent pipeline approved by Thomas.

**End condition:** `/cs3` loads on live site with all sections, prev/next nav, footer, metadata, and JSON-LD. Build passes.

**Verification:**
- [ ] `npm run build` passes locally
- [ ] `/cs3` loads at thomascha.com/cs3
- [ ] All H2 sections visible: The Problem, The System, Key Architectural Decision, The So What
- [ ] Current state note visible: Phases 1–6 complete, app works end-to-end, Phases 7–8 in progress, deployment pending
- [ ] Tech stack listed accurately: Next.js, Supabase, n8n, Claude
- [ ] Prev/Next nav shows ← CS2 and CS4 →
- [ ] JSON-LD validates
- [ ] Mobile layout correct

**Subtasks:**
- [ ] Run six-agent pipeline (ask Thomas first)
- [ ] Source content from case studies file (long version): CS3 full narrative
- [ ] Also check current state: `/Volumes/Crucial 1TB/thomascha/Desktop/claude/teacher_app/log_04.md` and `to_do.md` for anything more recent than the case study file (last updated May 2026)
- [ ] Key content to include:
  - [ ] The three problems: AI hallucination of curriculum, disconnected one-off lessons, no real Ontario-specific support
  - [ ] System overview: Next.js, Supabase, n8n, Claude; 14 active AI workflows; 13 Supabase tables; 465 Ontario Math expectations as verified structured data; no curriculum content ever generated by AI
  - [ ] Two-stage planning workflow: Stage 1 (unit roadmap + diagnostic), Stage 2A (skeletons reviewed before full gen), Stage 2B (on-demand expansion with deferred sections)
  - [ ] Revision cascade: dependency map, upward cascade warning
  - [ ] Curriculum expectation browser: 4 coverage depth levels tied to Growing Success framework
  - [ ] Cost engineering: 67% context reduction (14,750 → 4,832 tokens on Stage 2B), 4 workflows migrated from premium to Sonnet, Sonnet downgrade tested and reverted
  - [ ] The meta-system: 33-module plan, one module per session, living to-do file, log rotation, CLAUDE.md, explicit verification steps per module
  - [ ] Current state callout: Phases 1–6 complete, working demo, Phases 7–8 in progress (IEP modifications, ESL/ELL, report card comments, asset generation infrastructure built)
  - [ ] Closing credential line from case study file
- [ ] Write `app/cs3/page.tsx`
- [ ] Add per-page metadata
- [ ] Add JSON-LD Article + BreadcrumbList schemas
- [ ] Prev/Next links: ← CS2, CS4 →

---

### [M05] CS4 Page — /cs4
**Status:** `[ ]`

**Start condition:** CS3 page complete. Six-agent pipeline approved by Thomas.

**End condition:** `/cs4` loads on live site with all sections, prev/next nav, footer, metadata, and JSON-LD. Build passes.

**Verification:**
- [ ] `npm run build` passes locally
- [ ] `/cs4` loads at thomascha.com/cs4
- [ ] All H2 sections visible: The Problem, The System, Key Architectural Decision, The So What
- [ ] Prev/Next nav shows ← CS3 and CS1 →  (CS4 is last; wraps back to CS1)
- [ ] JSON-LD validates
- [ ] Mobile layout correct

**Subtasks:**
- [ ] Run six-agent pipeline (ask Thomas first)
- [ ] Source content from case studies file (long version): CS4 full narrative
- [ ] Key content to include:
  - [ ] The problem: Claude has no memory between sessions; context accumulation breaks down at scale across 8+ concurrent projects
  - [ ] Four components: structured index file per project (entry number, date, timestamp, summary, tags, chunk pointer), chunked log archives (~1,300 lines per file), per-project tag vocabularies, per-project skill files (`.claude/skills/log.md`)
  - [ ] Per-project format variation: work/career sessions use structured detail blocks; reflective sessions use transcript format; pattern-tracking uses sparse marker format
  - [ ] Key architectural constraint: context window as the design driver; index is small by design (reads in full without consuming much context)
  - [ ] 1,300-line chunk threshold: explicit tradeoff explanation
  - [ ] Proof point: largest project has 16 chunk files, 11,800+ lines. Zero database. Zero code.
  - [ ] Span: 8+ active projects including career planning, software development, client work, personal growth
  - [ ] Self-referential angle: the system running this portfolio site and job hunt is itself CS4 in use
  - [ ] Closing credential line from case study file
- [ ] Write `app/cs4/page.tsx`
- [ ] Add per-page metadata
- [ ] Add JSON-LD Article + BreadcrumbList schemas
- [ ] Prev/Next links: ← CS3, CS1 → (wrap-around; CS1 prev link already has CS4 as previous)

---

### [M06] CS5 Decision — Add /cs5 or leave at 4?
**Status:** `[ ]`

**Decision needed from Thomas before any work begins.**

- The case studies file (`Thomas_Cha_AI_Portfolio_Case_Studies_v2.md`) contains a full CS5: Multi-Terminal Supervisor (MTS), with long and short versions written
- The current homepage and `caseStudies.ts` only reference CS1–CS4
- The handoff notes (aiop.txt) only mention CS1–CS4 as the plan
- Adding CS5 would require: updating `caseStudies.ts` (add CS5 entry), updating homepage grid (5 cards, adjust layout), updating `sitemap.ts` (add /cs5 URL), building the `/cs5` page, updating prev/next nav chain across all pages

**If Thomas decides to add CS5:**
- [ ] Update `lib/caseStudies.ts`: add cs5 entry (title: "Multi-Terminal Supervisor", domains: ['Developer Tooling', 'Native Desktop', 'Systems Design'], href: '/cs5')
- [ ] Update `app/page.tsx`: grid may need layout adjustment for 5 cards (2+2+1 or 3+2)
- [ ] Update `app/sitemap.ts`: add /cs5 entry
- [ ] Update prev/next chain: CS4 → next becomes CS5, CS5 → next wraps to CS1, CS1 → prev becomes CS5
- [ ] Build `app/cs5/page.tsx` with full CS5 content (same six-agent pipeline)
- [ ] CS5 key content: MTS system overview, three done-detection iterations (regex → silence timeout → timing string pattern), session rename detection with ANSI stripping, CWD tracking via lsof, arm64 rebuild fix, TCC packaging fix + SHELL=/bin/zsh, ~2,300 lines across 11 modules
- [ ] Run six-agent pipeline

---

## CROSS-PAGE / SHARED

---

### [M07] Footer — Update placeholder email + LinkedIn
**Status:** `[ ]`

**Blocker:** Thomas must confirm real email address and LinkedIn handle.

**Start condition:** Thomas provides the real email and LinkedIn URL.

**End condition:** Footer email and LinkedIn are real and live. JSON-LD sameAs updated.

**Verification:**
- [ ] Click footer email → opens correct address in mail client
- [ ] Click footer LinkedIn → opens correct LinkedIn profile
- [ ] `page.tsx` JSON-LD `sameAs` array contains correct LinkedIn URL
- [ ] CS1 footer (and all future CS pages) also updated — the footer is duplicated per-page, not a shared component

**Subtasks:**
- [ ] Thomas confirms: real email address
- [ ] Thomas confirms: real LinkedIn URL (currently `https://www.linkedin.com/in/thomascha-ca/`)
- [ ] Update `app/page.tsx`: footer email `href` + LinkedIn `href` + `personSchema.sameAs`
- [ ] Update `app/cs1/page.tsx`: footer email `href` + LinkedIn `href`
- [ ] Update all future CS pages at build time (before deploying each one)
- [ ] Note: footer is not a shared component — must be updated in each page file. Consider extracting to a `Footer.tsx` component to avoid this maintenance burden (see [M08])

---

### [M08] Extract Footer to shared component
**Status:** `[ ]`

**Start condition:** [M07] footer content confirmed (real email/LinkedIn). At least CS2 page is being built.

**End condition:** `components/Footer.tsx` exists and is imported in all page files. No inline footer JSX remains in any page.

**Verification:**
- [ ] `components/Footer.tsx` exists
- [ ] `app/page.tsx` imports and uses `<Footer />`
- [ ] `app/cs1/page.tsx` imports and uses `<Footer />`
- [ ] All built CS pages import and use `<Footer />`
- [ ] Footer renders identically to current inline version on all pages
- [ ] No duplicate footer JSX anywhere in the codebase

**Subtasks:**
- [ ] Create `components/Footer.tsx` (extract from current `app/page.tsx` inline footer, with real email/LinkedIn)
- [ ] Replace inline footer in `app/page.tsx`
- [ ] Replace inline footer in `app/cs1/page.tsx`
- [ ] Replace inline footer in each CS page as it is built

---

### [M09] Nav audit — active state on CS pages
**Status:** `[ ]`

**Start condition:** At least one CS page is live.

**End condition:** Nav correctly handles active/current-page states on CS pages. No broken behaviour.

**Verification:**
- [ ] On a CS page, "Work" link in Nav still navigates to `/#work` correctly
- [ ] On a CS page, "Contact" link navigates to `/#contact` correctly (or scrolls if already on homepage)
- [ ] Nav back-link on CS pages is the `← thomascha.com` inline link (not Nav), consistent with CS1

**Subtasks:**
- [ ] Confirm Nav behaves correctly when used on non-homepage routes (test on /cs1 now)
- [ ] Decide: should Nav highlight "Work" when on any /cs* route? If yes, update `Nav.tsx` with `usePathname()` check
- [ ] No changes needed if current behaviour is acceptable

---

## SEO / METADATA

---

### [M10] Sitemap — add CS pages as they go live
**Status:** `[ ]` (partially complete)

**Current state:** `app/sitemap.ts` already includes /cs1 through /cs4 URLs. CS1 is live. /cs2–/cs4 are in the sitemap but the pages don't exist yet (404).

**Note:** 404 pages in sitemap are not harmful to Google if fixed before GSC submission. Sitemap should be complete and all URLs live before submitting.

**End condition:** All URLs in sitemap return 200. No 404s.

**Verification:**
- [ ] https://thomascha.com/sitemap.xml lists all live pages
- [ ] Each URL in sitemap returns 200 (no 404s)
- [ ] If CS5 is added ([M06]), add /cs5 to sitemap

**Subtasks:**
- [ ] No changes to `sitemap.ts` needed for CS1–CS4 (already included)
- [ ] If CS5 added: add `{ url: 'https://thomascha.com/cs5', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 }` to `app/sitemap.ts`
- [ ] After all pages live: verify sitemap at https://thomascha.com/sitemap.xml
- [ ] Check robots.txt still resolves: https://thomascha.com/robots.txt

---

### [M11] Per-page OG images (optional)
**Status:** `[ ]`

**Current state:** All pages share `/og-default.jpg` (1200×630, Gemini-generated). Adequate for launch.

**Decision:** Custom per-page OG images for CS pages would improve social sharing click-through. Not required for launch.

**Subtasks (if Thomas decides to pursue):**
- [ ] Design/generate per-page OG image for CS1 (SEO/content theme)
- [ ] Design/generate per-page OG image for CS2 (evaluation/psychology theme)
- [ ] Design/generate per-page OG image for CS3 (education/planning theme)
- [ ] Design/generate per-page OG image for CS4 (knowledge/RAG theme)
- [ ] Update `twitter` metadata in each page file to reference page-specific image
- [ ] Upload all images to `/public/`

---

### [M12] JSON-LD validation — all pages
**Status:** `[ ]`

**Start condition:** All CS pages live.

**End condition:** All pages pass Google Rich Results Test with no errors.

**Verification:**
- [ ] https://search.google.com/test/rich-results — test each live URL
- [ ] Homepage: Person + WebSite schemas pass
- [ ] CS1–CS4 pages: Article + BreadcrumbList schemas pass
- [ ] No warnings or errors in Rich Results Test

**Subtasks:**
- [ ] Test homepage JSON-LD at https://search.google.com/test/rich-results?url=https://thomascha.com
- [ ] Test /cs1 JSON-LD
- [ ] Test /cs2 JSON-LD (after build)
- [ ] Test /cs3 JSON-LD (after build)
- [ ] Test /cs4 JSON-LD (after build)
- [ ] Fix any errors before GSC submission

---

## POLISH

---

### [M13] Typography and spacing audit
**Status:** `[ ]`

**Start condition:** All CS pages built and deployed.

**End condition:** Visual consistency across all pages confirmed. No spacing or typography inconsistencies.

**Verification:**
- [ ] H1, H2, H3 sizes consistent across all CS pages
- [ ] Body text size and line-height consistent
- [ ] Section spacing (`mb-14 md:mb-16` pattern) consistent across all CS pages
- [ ] Stage card style (used in CS1 and CS2) consistent if reused
- [ ] Blue callout box style consistent if reused across CS pages

**Subtasks:**
- [ ] Visual comparison: load CS1 and each new CS page side by side
- [ ] Check all H2 headings render at same size
- [ ] Check body text uses consistent `text-base leading-relaxed text-zinc-600` pattern
- [ ] Check section bottom margins consistent
- [ ] No orphaned Tailwind classes that override shared patterns

---

### [M14] Mobile QA — all pages
**Status:** `[ ]`

**Start condition:** All CS pages built and deployed.

**End condition:** All pages usable and correctly laid out at 375px (iPhone SE) and 390px (iPhone 14).

**Verification:**
- [ ] Homepage: grid collapses to 1-col, no overflow
- [ ] CS1–CS4: no overflow, text readable, stage cards stack correctly
- [ ] Nav: correct at all widths (Thomas Cha / TC mobile toggle works)
- [ ] Prev/Next nav on CS pages: readable and tappable at 375px
- [ ] Footer: stacks correctly at mobile widths
- [ ] CS2 callout box (blue meta): readable at 375px

**Subtasks:**
- [ ] Open DevTools → toggle device toolbar → test 375px and 390px for each page
- [ ] Test on a real iPhone if available
- [ ] Fix any overflow or truncation issues found

---

### [M15] Accessibility audit
**Status:** `[ ]`

**Start condition:** All CS pages built and deployed.

**End condition:** No critical accessibility failures. All interactive elements keyboard-navigable.

**Verification:**
- [ ] All images have `alt` text (or `aria-hidden="true"` for decorative)
- [ ] All interactive elements (links, buttons) have visible focus states (focus-visible:ring-2 is already in the pattern)
- [ ] Headings follow logical hierarchy: H1 → H2 → H3, no skips
- [ ] `<article aria-labelledby="cs-title">` pattern present on all CS pages (matches CS1)
- [ ] `<nav aria-label="Case study navigation">` on all CS pages (matches CS1)
- [ ] `<nav aria-label="Main navigation">` in Nav.tsx (already present)
- [ ] No keyboard trap anywhere

**Subtasks:**
- [ ] Run axe DevTools or similar on each page (free browser extension)
- [ ] Tab through every page to confirm keyboard navigation
- [ ] Check colour contrast on zinc-400 text against white backgrounds (may be borderline)
- [ ] Fix any critical failures

---

## LAUNCH

---

### [M16] Pre-launch checklist
**Status:** `[ ]`

**Start condition:** All CS pages live. [M07] footer email/LinkedIn updated. [M12] JSON-LD validated.

**Subtasks:**
- [ ] All CS pages load at thomascha.com/cs1 through /cs4 (and /cs5 if added)
- [ ] Footer email is real (not thomas@thomascha.com placeholder)
- [ ] Footer LinkedIn is real (confirm handle with Thomas)
- [ ] JSON-LD sameAs in `page.tsx` matches real LinkedIn URL
- [ ] https://thomascha.com/sitemap.xml returns all pages, no 404s
- [ ] https://thomascha.com/robots.txt resolves
- [ ] https://thomascha.com/og-default.jpg resolves
- [ ] Vercel deployment: all builds green, no failed deployments in dashboard
- [ ] Test https://thomascha.com in: Chrome, Safari, Firefox (desktop)
- [ ] Test https://thomascha.com on mobile: iOS Safari + Chrome Android (or DevTools emulation)

---

### [M17] Google Search Console — submit sitemap
**Status:** `[ ]`

**Start condition:** [M16] pre-launch checklist complete.

**End condition:** Sitemap submitted and indexed in GSC.

**Verification:**
- [ ] thomascha.com verified in Google Search Console
- [ ] Sitemap submitted at: https://search.google.com/search-console → Sitemaps → add `sitemap.xml`
- [ ] GSC shows sitemap as "Success" with correct number of URLs

**Subtasks:**
- [ ] Log in to Google Search Console
- [ ] Confirm thomascha.com property is verified (may already be done — check)
- [ ] Submit: https://thomascha.com/sitemap.xml
- [ ] Check back after 24–48 hours for indexing status
- [ ] Note: GSC may show "Discovered — currently not indexed" for some pages initially. This is normal. Check again in 1–2 weeks.

---

## OPEN QUESTIONS

- **CS5 (MTS):** Add to site or keep at 4 case studies? Content exists in the case studies file. Requires homepage grid layout change, sitemap update, and /cs5 page build. Decision needed from Thomas before any work starts. See [M06].
- **Footer email:** `thomas@thomascha.com` is a placeholder. Thomas to provide real email before [M07].
- **LinkedIn URL:** `https://www.linkedin.com/in/thomascha-ca/` — confirm this is the correct handle. It appears in `page.tsx` footer, `app/cs1/page.tsx` footer, and `personSchema.sameAs`.
- **Per-page OG images:** Current default image is adequate. Custom images would improve social click-through. Defer to post-launch unless Thomas wants to pursue before.
- **Footer as shared component:** Currently duplicated in `page.tsx` and `cs1/page.tsx`. Will be duplicated in every CS page. Extracting to `components/Footer.tsx` is recommended after [M07] email/LinkedIn is confirmed. See [M08].
- **Nav active state on CS pages:** Nav links point to `/#work` and `/#contact` (homepage anchors). On CS pages, clicking "Work" routes correctly but there is no active highlight. Decide whether this needs addressing.
