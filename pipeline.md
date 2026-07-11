# Six-Agent Build Pipeline

Used for every case study page build (CS1–CS4). Run this process before writing any `page.tsx`.

Reference files needed before running:
- Case study content: `/Volumes/Crucial 1TB/thomascha/Desktop/claude/career_ai/building case studies/Thomas_Cha_AI_Portfolio_Case_Studies_v2.md`
- Existing page for pattern reference: `app/cs1/page.tsx`

---

## Group 1 — Run sequentially

### Agent 1: Functionality
Focus: structure, routing, component correctness, TypeScript safety.

Covers:
- Page file structure matches App Router conventions
- All imports resolve (Nav, Footer, Link from next/link, metadata export)
- No TypeScript errors
- JSON-LD structured data: correct schema type, all required fields present
- Metadata export: title, description, canonical, openGraph, twitter all populated
- Prev/Next nav links use correct hrefs for this page's position in the chain
- Back link returns to thomascha.com (not a relative path)
- `npm run build` passes

### Agent 2: UX
Focus: layout, readability, mobile behaviour, interactive element sizing.

Covers:
- Max-width constraint on body text (`max-w-prose`)
- Section spacing consistent with CS1 (`mb-14 md:mb-16` pattern)
- H1 → H2 → H3 hierarchy, no skips
- Touch targets ≥ 44px on all links and buttons (`py-3` on anchor tags)
- `-webkit-tap-highlight-color: transparent` already in globals.css — no per-page action needed
- Prev/Next nav readable and tappable at 375px
- Blue callout block (Retrospective) visually distinct from body text
- Stage cards (if used) stack correctly at mobile widths
- No horizontal overflow at 375px

---

## Group 2 — Run in parallel after Group 1 is resolved

### Agent 3: Cross-Browser
Focus: CSS compatibility, vendor prefixes, Safari-specific issues.

Covers:
- `-webkit-backdrop-filter` on any blur elements (Nav already has this — check if reused)
- No CSS features unsupported in Safari 15+ or Chrome 100+
- Backdrop blur, sticky positioning, and `gap` in flex/grid all confirmed safe
- Font rendering consistent across browsers (Geist via next/font — safe by default)

### Agent 4: SEO
Focus: on-page signals, semantic HTML, schema correctness, crawlability.

Covers:
- One H1 per page, incorporates the case study name
- `<article aria-labelledby="cs-title">` wrapping the main content
- `<section aria-labelledby>` on each major section with matching IDs
- `<header>` inside `<article>` for title block (not site-level `<header>`)
- Canonical URL correct: `https://thomascha.com/csN`
- JSON-LD Article schema: `headline`, `author`, `datePublished`, `url` all populated
- JSON-LD BreadcrumbList: home → CS page, correct `@id` values
- OG title/description match page intent (not generic)
- Twitter card: `summary_large_image`, correct title/description
- No duplicate H1s, no empty alt attributes

### Agent 5: Marketing / Copy
Focus: messaging clarity, positioning, recruiter reading experience.

Covers:
- H1 immediately communicates what the system does (not just a label)
- "The Problem" section names a real, relatable pain — not abstract
- "The System" section shows architecture and methodology, not just a feature list
- "Key Architectural Decision" is genuinely architectural — a tradeoff, not a feature
- "The So What" makes the business/career implication explicit
- Retrospective (if present) shows self-awareness and iteration — not just praise
- No jargon without explanation
- Thomas's director/worker model is visible in how ownership is described
- Closing credential line present and specific

### Agent 6: Editor / Humanisation
Focus: writing quality, AI tells, tone consistency with Thomas's voice.

Covers:
- No banned words or phrases (see CLAUDE.md writing standards)
- No em dashes — replace with comma or two sentences
- No negative parallelism ("not just X, but Y")
- No trailing participial phrases (",  demonstrating...")
- Sentence length variation — no metronomic rhythm
- Contractions present where natural
- Specificity density — every paragraph has at least one concrete detail (number, named tool, date, proper noun)
- Tone consistent with CS1 (direct, confident, no superlatives without evidence)

---

## After both groups: Combined review

Read all six agents' feedback together. Identify:
1. Conflicts between agents (e.g. UX wants shorter paragraphs, Copy wants more context) — resolve with Thomas if needed
2. Any agent finding that changes the structure (e.g. SEO agent adds `<section aria-labelledby>` wrappers) — incorporate before writing code

Then write `app/csN/page.tsx`.

---

## Post-build verification

- [ ] `npm run build` passes with no TypeScript errors
- [ ] Page loads at `localhost:3000/csN`
- [ ] All sections visible
- [ ] Prev/Next nav correct
- [ ] Footer renders (uses shared `<Footer />`)
- [ ] JSON-LD validates at https://search.google.com/test/rich-results
- [ ] No overflow at 375px (DevTools)
