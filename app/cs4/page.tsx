import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { caseStudies } from '@/lib/caseStudies'

export const metadata: Metadata = {
  title: 'File-Based RAG Architecture',
  description:
    'A persistent, queryable knowledge base across 8+ AI projects — built in plain markdown files. No database, no vector store, no code. 11,800+ lines of structured session history with full retrieval.',
  alternates: {
    canonical: 'https://thomascha.com/cs4',
  },
  openGraph: {
    title: 'File-Based RAG Architecture | Persistent AI Memory Across 8+ Projects — Thomas Cha',
    description:
      'Claude has no memory between sessions. This architecture solves that: structured index files, chunked log archives, per-project tag vocabularies, and behavioral skill files — spanning 8+ active projects and 11,800+ lines of queryable history. Zero database. Zero vector store. Zero code. A manually curated RAG system built entirely in markdown.',
    url: 'https://thomascha.com/cs4',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'File-Based RAG Architecture | Persistent AI Memory Across 8+ Projects',
    description:
      'Persistent, queryable knowledge base across 8+ AI projects. 11,800+ lines of structured session history. No database, no vector store, no code written. Built in plain markdown files by Thomas Cha.',
    images: ['/og-default.jpg'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'File-Based RAG Architecture — Persistent AI Memory Across 8+ Projects in Plain Markdown',
  description:
    'A manually curated RAG architecture that gives Claude structured, queryable access to months of session history across 8+ active projects. Four components: structured index file, chunked log archives (~1,300 lines per file), per-project tag vocabularies, and per-project skill files. Largest project has 16 chunk files and 11,800+ lines. Zero database, zero vector store, zero code.',
  author: {
    '@type': 'Person',
    name: 'Thomas Cha',
    url: 'https://thomascha.com',
    jobTitle: 'AI Implementation Specialist',
  },
  publisher: {
    '@type': 'Person',
    name: 'Thomas Cha',
    url: 'https://thomascha.com',
  },
  datePublished: '2026-07-14',
  dateModified: '2026-07-14',
  url: 'https://thomascha.com/cs4',
  mainEntityOfPage: 'https://thomascha.com/cs4',
  keywords: [
    'file-based RAG architecture',
    'AI memory management',
    'no-code knowledge base',
    'persistent AI context',
    'markdown knowledge management',
    'AI session continuity',
    'retrieval-augmented generation',
    'context window management',
  ],
  about: [
    {
      '@type': 'Thing',
      name: 'Retrieval-Augmented Generation',
      description:
        'A technique for grounding AI output in structured, retrievable external knowledge rather than relying on model memory alone.',
    },
    {
      '@type': 'Thing',
      name: 'AI Knowledge Management',
      description:
        'Systems and architectures that give AI tools persistent, organised access to project history, decisions, and session data across time.',
    },
    {
      '@type': 'Thing',
      name: 'No-Code AI Systems Design',
      description:
        'Designing functional AI workflows and architectures using only format specifications and behavioral instructions — no programming required.',
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://thomascha.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'File-Based RAG Architecture',
      item: 'https://thomascha.com/cs4',
    },
  ],
}

const components = [
  {
    stage: '01',
    label: 'Index Files',
    body: "Every project maintains a single index file. Each logged session adds one row: an entry number, date, timestamp, a plain-language summary of one or two sentences, a tag set, and a pointer to the chunk file where the full session lives. The index stays small by design. It reads in full without consuming meaningful context, which makes it fast to scan before any retrieval decision.",
  },
  {
    stage: '02',
    label: 'Chunked Log Archives',
    body: "Full session content lives in separate chunk files, each capped at approximately 1,300 lines before a new numbered file begins. That cap is deliberate: large enough that files don't fragment constantly, small enough that reading any single file stays within efficient context limits. The largest project in this system has 16 chunk files and over 11,800 lines of logged sessions. Zero database required.",
  },
  {
    stage: '03',
    label: 'Tag Vocabularies',
    body: "Each project maintains its own tag vocabulary: lowercase, hyphenated, specific enough to filter meaningfully across months of work. New tags are added only when genuinely needed, and when they are, they get registered in the project's CLAUDE.md. That registration step is what keeps them consistent. Without it, the same concept gets labelled differently each session, and topic-based retrieval breaks down.",
  },
  {
    stage: '04',
    label: 'Per-Project Skill Files',
    body: "Each project contains a .claude/skills/log.md file that instructs the AI on exactly how to log a session: what fields to include, how to handle edge cases, when to open a new chunk file, and how to update the index. This file is what keeps format consistent across sessions and across months. Without it, log structure drifts. With it, every entry follows the same pattern regardless of when the session happened or which context window ran it.",
  },
]

const scaleStats = [
  { number: '8+', label: 'Active projects', note: 'Career, software, client, personal' },
  { number: '16', label: 'Chunk files', note: 'Largest single project' },
  { number: '11,800+', label: 'Lines archived', note: 'Zero database. Zero code.' },
]

const flowSteps = [
  { step: '01', label: 'Reads CLAUDE.md', desc: 'Behavioral rules load automatically' },
  { step: '02', label: 'Loads index', desc: 'Scans the full entry list in seconds' },
  { step: '03', label: 'Identifies chunk', desc: 'Tag or entry number narrows the target' },
  { step: '04', label: 'Pulls history', desc: 'Only the relevant archive file is read' },
]

export default function CS4Page() {
  const cs3 = caseStudies.find((cs) => cs.id === 'cs3')!
  const cs4 = caseStudies.find((cs) => cs.id === 'cs4')!
  const cs1 = caseStudies.find((cs) => cs.id === 'cs1')!

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Nav />

      <main>
        <article aria-labelledby="cs-title" className="max-w-5xl mx-auto px-6 py-12 md:py-16">

          {/* Back link */}
          <Link
            href="/"
            className="inline-block py-3 mb-8 text-sm text-zinc-500 hover:text-blue-600 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
          >
            ← thomascha.com
          </Link>

          {/* Self-referential callout — Visual Aid F */}
          <div className="max-w-prose mb-10 border-l-4 border-blue-400 pl-5 py-1">
            <p className="text-sm italic text-zinc-500 leading-relaxed">
              The system running this portfolio and job hunt is CS4 in use. When this session
              ends, it gets one index entry, one chunk append, and a tag.
            </p>
          </div>

          {/* Header */}
          <header className="mb-12 md:mb-16">
            <p className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-3">
              Case Study 04
            </p>
            <h1
              id="cs-title"
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 mb-4"
            >
              File-Based RAG Architecture
            </h1>
            <p className="text-lg md:text-xl text-zinc-500 leading-relaxed mb-6">
              A queryable knowledge base spanning 8+ AI projects, built in plain markdown with
              no database, no vector store, and no code. It solves the stateless-session memory
              problem that breaks most sustained AI work.
            </p>
            <div className="flex flex-wrap gap-2">
              {cs4.domains.map((d) => (
                <span
                  key={d}
                  className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full"
                >
                  {d}
                </span>
              ))}
            </div>
          </header>

          {/* The Problem */}
          <section aria-labelledby="problem-heading" className="mb-14 md:mb-16">
            <h2
              id="problem-heading"
              className="text-xl md:text-2xl font-semibold text-zinc-800 mb-4"
            >
              The Problem
            </h2>
            <div className="max-w-prose space-y-4">
              <p className="text-base leading-relaxed text-zinc-600">
                Claude has no memory between sessions. Each conversation starts from zero.
              </p>
              <p className="text-base leading-relaxed text-zinc-600">
                For a single project used occasionally, that&apos;s a manageable cost. You re-establish
                context at the top of a session, lose a few minutes, and move on. Across 8 concurrent
                projects spanning months of active work, it becomes a structural problem. The context
                window is finite. Re-loading everything that matters for a given session competes
                directly with the work you&apos;re trying to do. And if you don&apos;t re-load it, Claude
                operates on incomplete information and makes decisions that contradict things decided
                two weeks ago, in a session it has no access to.
              </p>
              <p className="text-base leading-relaxed text-zinc-600">
                The volume compounds it. Eight projects. Each with its own decisions, conventions, open
                questions, and accumulated history. Some sessions build on something resolved six weeks
                prior. Some decisions only make sense in the context of three earlier ones. There&apos;s
                no way to hold all of that in a single context window, and no way to predict which
                specific pieces will matter before a session begins. The options were: waste significant
                time reconstructing context manually at the start of every session, accept that Claude
                would regularly work blind on decisions that required historical context, or find a
                different structure entirely.
              </p>
              <p className="text-base leading-relaxed text-zinc-600">
                The search history, the reasoning, the things tried and rejected and why — all of it
                existed only in closed browser tabs. The knowledge was generated. It just wasn&apos;t
                stored anywhere Claude could reach it.
              </p>
            </div>

            {/* Visual Aid A — Memory Gap split comparison */}
            <div className="mt-8 max-w-2xl grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-3">
                  Without the system
                </p>
                <div className="space-y-2">
                  {['Session 1', 'Session 2', 'Session 3'].map((s, i) => (
                    <div
                      key={s}
                      className={`flex items-center gap-2 ${i === 2 ? 'opacity-40' : i === 1 ? 'opacity-70' : ''}`}
                    >
                      <div className="w-2 h-2 rounded-full bg-zinc-400 shrink-0" />
                      <span className="text-xs text-zinc-500">{s}</span>
                      {i === 2 && (
                        <span className="text-xs text-zinc-400 italic">(context lost)</span>
                      )}
                    </div>
                  ))}
                  <div className="mt-3 text-xs text-zinc-400 italic">
                    Each session starts from zero
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
                  With the system
                </p>
                <div className="space-y-2">
                  {['Session 1', 'Session 2', 'Session 3'].map((s) => (
                    <div key={s} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
                      <span className="text-xs text-blue-700">{s}</span>
                      <div className="flex-1 h-px bg-blue-200" />
                      <span className="text-xs text-blue-400 font-mono">index</span>
                    </div>
                  ))}
                  <div className="mt-3 text-xs text-blue-500 italic">
                    Every session retrievable by tag, date, or entry number
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* The System */}
          <section aria-labelledby="system-heading" className="mb-14 md:mb-16">
            <h2
              id="system-heading"
              className="text-xl md:text-2xl font-semibold text-zinc-800 mb-4"
            >
              The System
            </h2>
            <p className="text-base text-zinc-600 mb-6 max-w-prose">
              Four components. All plain markdown files. No database, no embeddings, no vector
              index, no code to maintain.
            </p>

            {/* Visual Aid C — Four component cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-2xl">
              {components.map((c) => (
                <div key={c.stage} className="border border-zinc-200 rounded-xl p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-1">
                    Component {c.stage}
                  </p>
                  <h3 className="text-base font-semibold text-zinc-800 mb-2">{c.label}</h3>
                  <p className="text-sm leading-relaxed text-zinc-600">{c.body}</p>
                </div>
              ))}
            </div>

            {/* Visual Aid B — Anatomy of an index entry */}
            <div className="max-w-2xl mb-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-3">
                Anatomy of an index entry
              </p>
              <div className="rounded-xl bg-zinc-900 border border-zinc-700 p-4 md:p-5 overflow-x-auto">
                <div className="font-mono text-xs leading-6 whitespace-nowrap">
                  <span className="text-amber-400">042</span>
                  <span className="text-zinc-600"> | </span>
                  <span className="text-blue-400">2026-07-14</span>
                  <span className="text-zinc-600"> | </span>
                  <span className="text-zinc-400">14:30</span>
                  <span className="text-zinc-600"> | </span>
                  <span className="text-zinc-200">Six-agent pipeline run for CS4 page copy. All agents completed.</span>
                  <span className="text-zinc-600"> | </span>
                  <span className="text-green-400">[cs4, portfolio-site, case-study]</span>
                  <span className="text-zinc-600"> | </span>
                  <span className="text-purple-400">log_03.md</span>
                </div>
                <div className="mt-4 grid grid-cols-6 gap-1 text-xs">
                  {[
                    { label: 'Entry #', color: 'text-amber-400' },
                    { label: 'Date', color: 'text-blue-400' },
                    { label: 'Time', color: 'text-zinc-400' },
                    { label: 'Summary', color: 'text-zinc-200' },
                    { label: 'Tags', color: 'text-green-400' },
                    { label: 'Chunk', color: 'text-purple-400' },
                  ].map((f) => (
                    <div key={f.label} className="text-center">
                      <div className={`${f.color} font-semibold`}>↑</div>
                      <div className="text-zinc-500 mt-0.5">{f.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual Aid D — How a session uses it */}
            <div className="max-w-2xl mb-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-3">
                How a session uses it
              </p>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                {flowSteps.map((s, i) => (
                  <div key={s.step} className="flex md:flex-col items-center gap-2 md:gap-0 flex-1">
                    <div className="flex md:flex-col items-center w-full">
                      <div className="border border-zinc-200 rounded-lg p-3 flex-1 md:w-full text-center">
                        <p className="text-xs font-semibold text-zinc-800">{s.label}</p>
                        <p className="text-xs text-zinc-400 mt-0.5">{s.desc}</p>
                      </div>
                      {i < flowSteps.length - 1 && (
                        <>
                          <span className="text-zinc-300 text-sm px-1 md:hidden">→</span>
                          <div className="hidden md:block text-zinc-300 text-sm text-center mt-1 mb-1">↓</div>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Format variation */}
            <div className="max-w-prose border-l-2 border-zinc-200 pl-5 mb-6 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-2">
                Format varies by project type
              </p>
              <p className="text-sm leading-relaxed text-zinc-600">
                Work and career sessions use structured detail blocks: date, role context, what was
                decided, what was produced. Reflective sessions use a transcript-style format that
                preserves the conversational texture rather than compressing it. Pattern-tracking
                sessions use a sparse marker format designed for scanning, where density would defeat
                the purpose. The index structure stays the same across all three. The chunk format
                adapts to what that type of content is actually for.
              </p>
            </div>
          </section>

          {/* Recruiter bridge */}
          <div className="max-w-prose mb-14 md:mb-16 bg-zinc-50 border border-zinc-100 rounded-xl px-5 py-4 md:px-6 md:py-5">
            <p className="text-base leading-relaxed text-zinc-700">
              For a recruiter evaluating AI implementation work, the signal here isn&apos;t what
              was built. It&apos;s that it was designed to hold up. Most AI projects lose coherence
              across sessions, across tools, and across time. This architecture is the reason the
              other case studies in this portfolio stayed on track.
            </p>
          </div>

          {/* Key Architectural Decision */}
          <section aria-labelledby="arch-heading" className="mb-14 md:mb-16">
            <h2
              id="arch-heading"
              className="text-xl md:text-2xl font-semibold text-zinc-800 mb-6"
            >
              Key Architectural Decision
            </h2>

            <div className="max-w-prose space-y-4 mb-8">
              <p className="text-base leading-relaxed text-zinc-600">
                The design constraint that shaped everything was the context window.
              </p>
              <p className="text-base leading-relaxed text-zinc-600">
                Claude can&apos;t hold an entire project&apos;s history in working memory. It can
                only read what fits in the current session. Every session starts blank. For occasional
                use, that&apos;s a manageable inconvenience. Across eight or more active projects
                spanning months of work, it becomes a structural problem: either the session spends
                significant time re-establishing context, or it starts thin and makes errors from
                missing it. The design question this forced was specific: what is the minimum structure
                that allows Claude to re-orient quickly and accurately at the start of any session,
                without reading everything?
              </p>
              <p className="text-base leading-relaxed text-zinc-600">
                Three decisions answer that question.
              </p>
            </div>

            <div className="max-w-prose space-y-8">
              <div>
                <p className="font-semibold text-zinc-900 mb-2">
                  Decision 1 — The index as the retrieval layer
                </p>
                <div className="space-y-3">
                  <p className="text-base leading-relaxed text-zinc-600">
                    The index file is the answer to the re-orientation problem. Each project maintains
                    one. Every logged session produces a single entry: a sequential number, a date, a
                    timestamp, a one-to-two sentence plain-language summary, a tag set, and a pointer
                    to the archive file holding the full transcript. The index is small by design. It
                    reads in full without consuming much of the context window. It functions as a table
                    of contents for months of work.
                  </p>
                  <p className="text-base leading-relaxed text-zinc-600">
                    The chunk files hold the detail. The skill file ensures every future entry is
                    written in a way that makes the index useful. The tag vocabulary ensures that
                    &ldquo;where to look&rdquo; can be answered by topic, not just by scrolling
                    backward through time. Each component exists to make the others more valuable.
                    The index works because the entries are consistently structured. The entries are
                    consistently structured because the skill file specifies exactly how to write
                    them. Remove any one of these and the retrieval layer degrades.
                  </p>
                </div>
              </div>

              <div>
                <p className="font-semibold text-zinc-900 mb-2">
                  Decision 2 — The 1,300-line chunking threshold
                </p>
                <div className="space-y-3">
                  <p className="text-base leading-relaxed text-zinc-600">
                    Full session content lives in separate archive files. Each file holds
                    approximately 1,300 lines before a new numbered file is created. That number
                    wasn&apos;t arbitrary.
                  </p>
                  <p className="text-base leading-relaxed text-zinc-600">
                    Too low, and chunk files split constantly, adding navigation overhead to every
                    retrieval. Too high, and reading a chunk to find one specific session becomes
                    expensive, loading far more context than the task requires. 1,300 lines is the
                    calibrated point that keeps single-file reads tractable while letting a project
                    run for weeks before needing a new file. When Claude needs the full transcript
                    of a specific session, it reads the relevant chunk. When it only needs a summary
                    of what happened across the last three months, it reads the index. The two-layer
                    structure means the right amount of context is loaded for the task at hand, no more.
                  </p>
                </div>
              </div>

              <div>
                <p className="font-semibold text-zinc-900 mb-2">
                  Decision 3 — Per-project format variation
                </p>
                <div className="space-y-3">
                  <p className="text-base leading-relaxed text-zinc-600">
                    A career planning session and a reflective personal session are not the same kind
                    of record.
                  </p>
                  <p className="text-base leading-relaxed text-zinc-600">
                    What makes a career session useful to retrieve is the decision that was made and
                    why. What makes a reflective session useful is the texture of what was said.
                    Applying one format to both would have made one of them less retrievable. Work
                    sessions use structured detail blocks. Reflective sessions use a conversational
                    transcript format. Pattern-tracking sessions use a sparse marker format suited for
                    scanning rather than reading. Designing per-project formats meant accepting upfront
                    complexity in exchange for better retrieval quality later. That tradeoff was worth
                    making.
                  </p>
                </div>
              </div>

              <div className="bg-zinc-50 border border-zinc-100 rounded-xl p-5 md:p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-3">
                  What this is, technically
                </p>
                <p className="text-base leading-relaxed text-zinc-700">
                  No database. No vector store. No code. The system runs entirely on markdown files
                  and behavioral instructions written into CLAUDE.md and the skill files. It is,
                  technically, a manually curated RAG architecture: retrieval-augmented generation
                  where the retrieval layer is structured text and the augmentation is what Claude
                  does with the context once retrieved. The index is the retrieval layer. The chunk
                  files are the knowledge base. The skill files are the schema. The tags are the
                  query interface. The fact that none of this required a database or a single line
                  of code is not a limitation of the design. It&apos;s evidence that the design was
                  matched precisely to the constraint it was solving.
                </p>
              </div>
            </div>
          </section>

          {/* The So What */}
          <section aria-labelledby="sowhat-heading" className="mb-14 md:mb-16">
            <h2
              id="sowhat-heading"
              className="text-xl md:text-2xl font-semibold text-zinc-800 mb-4"
            >
              The So What
            </h2>
            <div className="max-w-prose space-y-4">
              <p className="text-base leading-relaxed text-zinc-600">
                The problem this architecture solves isn&apos;t specific to Claude. Any AI system
                that operates as a series of stateless sessions faces the same constraint: each
                session starts with no memory of what came before. Scale that across months of work
                and eight active projects, and the gap between what the AI could know and what it
                actually knows becomes the primary bottleneck.
              </p>
              <p className="text-base leading-relaxed text-zinc-600">
                What was built here is a retrieval layer, not a workaround. A fast-access index
                that loads only what&apos;s relevant, an archive layer that preserves everything
                without bloating context, a tagging system that enables topic-based recall, and a
                format specification that keeps the whole structure consistent without manual
                reconstruction at the start of every session. The same architecture would work
                with any stateless AI interface and any file-based output format. It isn&apos;t
                optimised for Claude. It&apos;s a general solution to a general problem.
              </p>
              <p className="text-base leading-relaxed text-zinc-600">
                What it shows about the builder is a specific kind of systems thinking: not
                building a feature, but building the infrastructure that lets features hold up
                over time. This page is running on that system. The portfolio site build and the
                job hunt it supports are two of the eight-plus projects currently tracked inside it.
              </p>
            </div>
          </section>

          {/* Visual Aid E — Scale callout block */}
          <div className="max-w-2xl mb-14 md:mb-16">
            <div className="grid grid-cols-3 gap-3">
              {scaleStats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl bg-zinc-900 p-5 text-center"
                >
                  <p className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">{s.number}</p>
                  <p className="text-xs font-semibold text-zinc-200 mb-1">{s.label}</p>
                  <p className="text-xs text-zinc-500">{s.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Closing credential line */}
          <div className="max-w-prose mb-14 md:mb-16">
            <div className="w-8 h-0.5 bg-blue-500 mb-4" aria-hidden="true" />
            <p className="text-xl md:text-2xl font-semibold text-zinc-900 leading-snug">
              Without a database, a vector store, or a line of code, Thomas designed a retrieval
              architecture that gives Claude structured, queryable access to months of session
              history across eight or more active projects, with the largest spanning 16 chunk
              files and 11,800+ lines. He wrote the behavioral scaffolding, chunk management
              system, and format specifications that keep it consistent without manual
              intervention. The result is a production memory layer built entirely from
              plain-text files, maintained by an AI operating inside the system it&apos;s
              maintaining.
            </p>
          </div>

        </article>

        {/* Prev/Next Navigation */}
        <nav
          aria-label="Case study navigation"
          className="max-w-5xl mx-auto px-6 border-t border-zinc-200 pt-8 mt-4 mb-12 flex flex-wrap items-center justify-between gap-4"
        >
          <Link
            href={cs3.href}
            className="group py-3 flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
            aria-label={`Previous case study: ${cs3.title}`}
          >
            <span className="text-xs uppercase tracking-widest text-zinc-400 mb-1">Previous</span>
            <span className="text-sm font-medium text-zinc-700 group-hover:text-blue-600 transition-colors duration-200">
              ← {cs3.number}
            </span>
          </Link>
          <Link
            href={cs1.href}
            className="group py-3 flex flex-col items-end focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
            aria-label={`Next case study: ${cs1.title}`}
          >
            <span className="text-xs uppercase tracking-widest text-zinc-400 mb-1">Next</span>
            <span className="text-sm font-medium text-zinc-700 group-hover:text-blue-600 transition-colors duration-200">
              {cs1.number} →
            </span>
          </Link>
        </nav>

      </main>
      <Footer />
    </>
  )
}
