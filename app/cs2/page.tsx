import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { caseStudies } from '@/lib/caseStudies'

export const metadata: Metadata = {
  title: 'AI Job Fit Evaluation System',
  description:
    'A three-phase job evaluation system grounded in person-environment fit research. 17-dimension profile framework, 8-signal red flag screen, multi-model prompt refinement to 95% benchmark quality. 40+ postings evaluated.',
  alternates: {
    canonical: 'https://thomascha.com/cs2',
  },
  openGraph: {
    title: 'AI-Powered Job Fit Evaluation System — Thomas Cha',
    description:
      'Three-phase evaluation system built from I/O psychology research. Screens for burnout signals, not just skills match. Refined through multi-model comparison to 95% benchmark quality at Sonnet cost.',
    url: 'https://thomascha.com/cs2',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-Powered Job Fit Evaluation System',
    description:
      'Three-phase job fit evaluation grounded in person-environment fit research. 8-signal red flag screen. Multi-model refinement to 95% benchmark quality. 40+ postings evaluated.',
    images: ['/og-default.jpg'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI-Powered Job Fit Evaluation System',
  description:
    'A three-phase job evaluation system grounded in person-environment fit research, with an 8-signal environmental red flag screen and multi-model prompt refinement to 95% benchmark quality.',
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
  datePublished: '2026-03-01',
  dateModified: '2026-07-11',
  url: 'https://thomascha.com/cs2',
  mainEntityOfPage: 'https://thomascha.com/cs2',
  keywords: [
    'job fit evaluation',
    'person-environment fit',
    'AI hiring tool',
    'occupational psychology',
    'job posting analysis',
    'LLM evaluation system',
    'career AI',
    'prompt engineering',
  ],
  about: [
    { '@type': 'Thing', name: 'Job Fit Assessment' },
    { '@type': 'Thing', name: 'Person-Environment Fit Research' },
    { '@type': 'Thing', name: 'AI Workflow Automation' },
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
      name: 'AI Job Fit Evaluation System',
      item: 'https://thomascha.com/cs2',
    },
  ],
}

const signals = [
  {
    name: 'Urgency Culture vs Deadline-Driven Work',
    preview:
      'Chronic-crisis operating rhythm vs. genuine project deadlines — the fit implications are opposite.',
    detail:
      'The system looks for phrases like "startup pace," "no two days are the same," "move fast," and "constantly shifting priorities." These indicate a chronic-urgency environment, where the operating rhythm is defined by reactive response rather than planned execution. The evaluation distinguishes this from genuine deadline-driven work (defined end dates, clear deliverables, finite sprint cycles), which is categorically different in its fit implications. A posting that describes both simultaneously triggers a deeper read of which mode is primary.',
  },
  {
    name: 'Feedback Predictability',
    preview: 'Whether performance is evaluated against defined criteria or a shifting standard.',
    detail:
      'Postings that offer only vague performance markers ("cultural fit," "strategic impact," "stakeholder satisfaction") with no concrete output definitions signal environments where feedback can be arbitrary or withheld. This correlates with higher neuroticism load and is one of the strongest predictors of burnout in the research literature, stronger than workload alone. The evaluation checks whether the posting names specific success criteria and whether the review process is described in structural terms.',
  },
  {
    name: 'Performance Ambiguity',
    preview: 'Roles where deliverables have no finish line and success criteria are left undefined.',
    detail:
      'Posting language like "help shape our direction," "define what success looks like," or "ambiguous and fast-moving environment" can signal roles where the scope, output, and evaluation criteria are all undefined. The evaluation distinguishes performance ambiguity from exploratory ambiguity (open-ended research, building something new with loose constraints) because the two look similar on the surface but have opposite fit implications. A role with genuine creative latitude is evaluated differently from one where vague expectations are a structural feature. This distinction is described in the Key Architectural Decision section below.',
  },
  {
    name: 'Decision-Making Authority Framing',
    preview: 'Whether the role positions the candidate as a final authority or independent operator.',
    detail:
      'Phrases like "own the vision," "you\'ll build this from scratch," and "define the strategy" often frame the candidate as the primary decision-maker and public face of a function. For profiles that perform at their best with structured direction and execution authority (rather than as originators), this framing is a fit risk even when the work itself aligns well. The system flags it explicitly rather than reading it as an enthusiasm signal.',
  },
]

const rounds = [
  { round: 1, pct: '80%', note: 'First Sonnet run against the Fable benchmark' },
  { round: 2, pct: '85%', note: 'Flattening corrected — dimensions weighted by profile priority' },
  { round: 3, pct: '~90%', note: 'Invention reduced — evidence must trace to posted facts' },
  { round: 4, pct: '93%', note: 'Underselling and palatability softening addressed' },
  { round: 5, pct: '95%', note: 'Prompt compliance confirmed' },
]

export default function CS2Page() {
  const cs1 = caseStudies.find((cs) => cs.id === 'cs1')!
  const cs2 = caseStudies.find((cs) => cs.id === 'cs2')!
  const cs3 = caseStudies.find((cs) => cs.id === 'cs3')!

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

          {/* Header */}
          <header className="mb-12 md:mb-16">
            <p className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-3">
              Case Study 02
            </p>
            <h1
              id="cs-title"
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 mb-4"
            >
              AI-Powered Job Fit Evaluation System
            </h1>
            <p className="text-lg md:text-xl text-zinc-500 leading-relaxed mb-6">
              Applying a Research-First Methodology to an Unfamiliar Domain
            </p>
            <div className="flex flex-wrap gap-2">
              {cs2.domains.map((d) => (
                <span
                  key={d}
                  className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full"
                >
                  {d}
                </span>
              ))}
            </div>
          </header>

          {/* Self-referential callout */}
          <div className="max-w-prose mb-14 md:mb-16 border-l-4 border-blue-400 bg-blue-50 rounded-r-xl px-5 py-4 md:px-6 md:py-5">
            <p className="text-xs uppercase tracking-widest text-zinc-400 mb-3">Live output</p>
            <p className="text-base leading-relaxed text-zinc-700 mb-3">
              This site is a live output of this system. Every role that led to thomascha.com was
              screened through the evaluation framework described here. That includes the postings
              that scored too low to pursue, which shaped what you&apos;re reading now.
            </p>
            <Link
              href="/cs2/sample"
              className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
            >
              See a full evaluation from a real posting →
            </Link>
          </div>

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
                Most job fit tools measure skills and personality type. Person-environment fit
                research identifies a more predictive variable set: authority structure, feedback
                predictability, urgency culture, collaboration intensity, and the specific type of
                ambiguity a role requires. Standard tools don&apos;t screen for those. Manual
                evaluation doesn&apos;t either — it&apos;s slow, inconsistent, and produces no
                documentation a second reader could use.
              </p>
              <p className="text-base leading-relaxed text-zinc-600">
                For a career transition in an emerging field, the problem compounds. Roles appear
                under inconsistent titles across platforms. Postings are written in HR language
                that obscures what the job actually involves day to day. And there&apos;s no
                reliable way to evaluate fit without investing significant time in an application
                first. That cost lands twice: once on the applicant, once on the employer.
              </p>
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
              The same three-stage methodology from Case Study 1 — research thread, prompt
              architecture, deployment — applied in a domain with no prior expertise.
            </p>
            <div className="space-y-4 max-w-2xl">
              <div className="border border-zinc-200 rounded-xl p-5 md:p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-1">
                  Phase 01
                </p>
                <h3 className="text-base font-semibold text-zinc-800 mb-3">
                  Requirements and Fit Assessment
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-zinc-600">
                  A role snapshot strips HR language and describes what the job actually involves
                  day to day. A fit score with a one-line rationale follows. An alignment section
                  maps specific posting requirements to documented strengths with explicit
                  connections. A divergence section separates hard mismatches (genuine friction
                  likely to filter you out) from soft gaps (closable in practice or overstated in
                  the posting). Phase 1 closes with a candidate tier assessment against a
                  three-level readiness framework.
                </p>
              </div>

              <div className="border border-zinc-200 rounded-xl p-5 md:p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-1">
                  Phase 02
                </p>
                <h3 className="text-base font-semibold text-zinc-800 mb-3">
                  Psychological and Environment Fit
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-zinc-600">
                  A day-to-day fit check evaluates whether the described responsibilities would
                  suit or drain you repeated five days a week. An 8-signal environmental red flag
                  screen checks posting language for patterns that predict poor fit but rarely
                  appear in skills-based evaluation. Absent signals are noted explicitly — their
                  absence is also information. A vagueness assessment flags postings that
                  can&apos;t describe what the role does, treating that inability as a risk signal
                  in its own right.
                </p>
              </div>

              <div className="border border-zinc-200 rounded-xl p-5 md:p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-1">
                  Phase 03
                </p>
                <h3 className="text-base font-semibold text-zinc-800 mb-3">
                  Cross-Posting Summary
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-zinc-600">
                  A compact six-field summary: role, fit score, key strengths for this posting,
                  key gaps or red flags, verdict, and application status. Designed to be collected
                  across multiple evaluations so postings can be compared side by side. When
                  fifteen postings have been evaluated, you&apos;re comparing structured data
                  rather than trying to remember what you thought three weeks ago.
                </p>
              </div>
            </div>
          </section>

          {/* Section B: What the System Catches */}
          <section aria-labelledby="catches-heading" className="mb-14 md:mb-16">
            <h2
              id="catches-heading"
              className="text-xl md:text-2xl font-semibold text-zinc-800 mb-4"
            >
              What the System Catches
            </h2>
            <p className="text-base text-zinc-600 mb-6 max-w-prose">
              Phase 2 screens for eight named signal types in posting language. These are the
              variables person-environment fit research identifies as predictive and that standard
              tools consistently miss. Four are shown here.
            </p>
            <div className="space-y-3 max-w-2xl">
              {signals.map((signal) => (
                <details key={signal.name} className="group border border-zinc-200 rounded-xl">
                  <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden flex items-start justify-between gap-4 px-5 py-4 md:px-6">
                    <div>
                      <p className="text-sm font-semibold text-zinc-800 mb-0.5">{signal.name}</p>
                      <p className="text-xs text-zinc-500 leading-relaxed">{signal.preview}</p>
                    </div>
                    <span
                      className="flex-shrink-0 mt-0.5 text-zinc-400 group-open:rotate-180 transition-transform duration-200"
                      aria-hidden="true"
                    >
                      ▾
                    </span>
                  </summary>
                  <div className="px-5 pb-5 md:px-6 border-t border-zinc-100 pt-4">
                    <p className="text-sm leading-relaxed text-zinc-600">{signal.detail}</p>
                  </div>
                </details>
              ))}
            </div>
            <p className="mt-5 text-sm text-zinc-500 max-w-2xl">
              All eight signals are applied to a real posting in the{' '}
              <Link
                href="/cs2/sample"
                className="text-blue-600 hover:text-blue-800 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded underline underline-offset-2"
              >
                sample evaluation
              </Link>
              .
            </p>
          </section>

          {/* Section C: The Iteration Arc */}
          <section aria-labelledby="arc-heading" className="mb-14 md:mb-16">
            <h2
              id="arc-heading"
              className="text-xl md:text-2xl font-semibold text-zinc-800 mb-4"
            >
              The Iteration Arc
            </h2>
            <div className="max-w-prose space-y-4 mb-10">
              <p className="text-base leading-relaxed text-zinc-600">
                Getting the evaluation prompt right took more than editing. Three models — Fable,
                Opus, and Sonnet — ran the same evaluation against the same data independently.
                Each model then critiqued its own output and the other two. That cross-critique
                surfaced four failure modes common across all three: invention (fabricating
                supporting evidence), flattening (treating all profile dimensions as equally
                weighted), underselling (not naming genuine strengths directly), and palatability
                softening (hedging honest negatives to sound encouraging). The strongest elements
                from all three evaluations were synthesised into a single benchmark.
              </p>
              <p className="text-base leading-relaxed text-zinc-600">
                He set the target explicitly: match Fable&apos;s evaluation quality while running
                at Sonnet&apos;s cost. Fable produced the reference evaluation. Sonnet ran five
                rounds against it, with each round&apos;s shortcomings converted into specific,
                mechanical prompt rules.
              </p>
            </div>

            {/* Multi-model parallel run */}
            <div className="max-w-2xl mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-5">
                Step 1 — Establish the benchmark
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-2">
                <div className="flex gap-2">
                  {['Fable', 'Opus', 'Sonnet'].map((model) => (
                    <div
                      key={model}
                      className="border border-zinc-300 rounded-lg px-3 py-2 text-xs font-medium text-zinc-700 bg-white"
                    >
                      {model}
                    </div>
                  ))}
                </div>
                <div className="hidden sm:block text-zinc-300 px-1 text-sm">→</div>
                <div className="sm:hidden border-l-2 border-zinc-200 ml-1 pl-3 py-1 text-xs text-zinc-400">
                  cross-critique produces 4 failure modes
                </div>
                <div className="border border-zinc-200 rounded-lg px-3 py-2 text-xs text-zinc-600 bg-zinc-50 hidden sm:block">
                  Cross-critique
                </div>
                <div className="hidden sm:block text-zinc-300 px-1 text-sm">→</div>
                <div className="border border-blue-200 rounded-lg px-3 py-2 text-xs font-medium text-blue-700 bg-blue-50">
                  Benchmark evaluation
                </div>
              </div>
            </div>

            {/* 5-round iteration arc */}
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-6">
                Step 2 — Iterate to match
              </p>

              {/* Desktop: horizontal track */}
              <div className="hidden sm:flex items-start">
                {rounds.map((r, i) => (
                  <div key={r.round} className="flex-1 flex flex-col items-center relative">
                    {i < rounds.length - 1 && (
                      <div className="absolute top-4 left-1/2 w-full h-0.5 bg-zinc-200" />
                    )}
                    <div
                      className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                        r.round === 5
                          ? 'bg-blue-600 text-white'
                          : 'bg-white border-2 border-zinc-300 text-zinc-500'
                      }`}
                    >
                      {r.round}
                    </div>
                    <p
                      className={`mt-2 text-sm font-semibold text-center ${
                        r.round === 5 ? 'text-blue-700' : 'text-zinc-700'
                      }`}
                    >
                      {r.pct}
                    </p>
                    <p className="mt-1 text-xs text-zinc-400 text-center leading-snug px-1">
                      {r.note}
                    </p>
                  </div>
                ))}
              </div>

              {/* Mobile: vertical stack */}
              <div className="sm:hidden border-l-2 border-zinc-200 pl-5 space-y-5">
                {rounds.map((r) => (
                  <div key={r.round} className="relative">
                    <div
                      className={`absolute -left-[25px] w-4 h-4 rounded-full border-2 ${
                        r.round === 5
                          ? 'bg-blue-600 border-blue-600'
                          : 'bg-white border-zinc-300'
                      }`}
                    />
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                      <span
                        className={`text-sm font-semibold ${
                          r.round === 5 ? 'text-blue-700' : 'text-zinc-700'
                        }`}
                      >
                        {r.pct}
                      </span>
                      <span className="text-xs text-zinc-400">{r.note}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-6 text-sm text-zinc-500 max-w-prose">
              The remaining gap is model judgment — calibration on secondary dimension scores
              and mid-list hierarchy ordering — not prompt compliance. The system runs at 95% of
              benchmark quality at Sonnet cost.
            </p>
          </section>

          {/* Key Architectural Decision */}
          <section aria-labelledby="arch-heading" className="mb-14 md:mb-16">
            <h2
              id="arch-heading"
              className="text-xl md:text-2xl font-semibold text-zinc-800 mb-4"
            >
              Key Architectural Decision
            </h2>
            <div className="max-w-prose space-y-4">
              <p className="text-base leading-relaxed text-zinc-600">
                Standard framing treats ambiguity tolerance as a single spectrum. The evaluation
                needed to distinguish two separate types. Performance ambiguity covers unclear
                expectations, undefined success criteria, and deliverables with no finish line.
                Exploratory ambiguity covers open-ended research, building something new with
                loose constraints, and tinkering on an undefined problem. A posting that signals
                chronic performance ambiguity and one that signals genuine creative latitude can
                look identical on the surface. The fit implications are opposite, and collapsing
                them into a single variable would have made the evaluation actively misleading.
              </p>
              <p className="text-base leading-relaxed text-zinc-600">
                This distinction came from the research phase, not from editing the prompt. A
                prompt built from memory would have reproduced the standard framing: ambiguity
                tolerance as a single dial. Mapping the occupational psychology literature before
                writing a single evaluation criterion surfaced it. That&apos;s the same reason the
                research thread in Case Study 1 came before the prompt. The constraints that make
                a system accurate aren&apos;t always the ones you&apos;d think to include on any
                given day. Having AI research them first means the output is more thorough than
                recall alone.
              </p>
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
                The problem this system solves isn&apos;t specific to job hunting. Any decision
                process that requires evaluating an external opportunity against a complex personal
                or organizational profile — and producing consistent, documented output each time
                — faces the same bottleneck. The manual version is slow, inconsistent, and
                dependent on the evaluator&apos;s recall and state of mind. A research-grounded AI
                system produces the same quality of analysis every time, documents its reasoning,
                and scales without degradation.
              </p>
              <p className="text-base leading-relaxed text-zinc-600">
                The system has grown past its original scope. A 17-dimension profile framework
                drawn from I/O psychology and burnout research — covering dimensions that
                commercial tools consistently miss, including values congruence, feedback delay
                tolerance, and interest congruence — now forms the foundation of a product design
                in active development. A 23-question intake has been built and live-tested across
                three models with the same respondent. The personal version proved the concept.
                The product is the next step.
              </p>
            </div>
          </section>

          {/* Closing credential line */}
          <div className="max-w-prose mb-14 md:mb-16">
            <div className="w-8 h-0.5 bg-blue-500 mb-4" aria-hidden="true" />
            <p className="text-xl md:text-2xl font-semibold text-zinc-900 leading-snug">
              He researched the I/O psychology and burnout research literature from scratch,
              encoded it into a three-phase evaluation system, iterated the prompt through
              multi-model comparison and five rounds of benchmark-driven refinement, built a
              17-dimension intake framework, tested a 23-question intake across three models with
              live subject runs, and deployed the system against 40+ real job postings. No
              computer science background. No prior expertise in hiring psychology.
            </p>
          </div>

          {/* Sample Output CTA */}
          <div className="max-w-prose mb-14 md:mb-16 border border-zinc-200 rounded-xl p-6">
            <p className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-3">
              Sample Output
            </p>
            <p className="text-base font-semibold text-zinc-900 mb-2">
              See the system&apos;s full output on a real posting.
            </p>
            <p className="text-sm text-zinc-600 leading-relaxed mb-5">
              A complete Phase 1 and Phase 2 evaluation — role snapshot, fit score, alignment and
              divergence analysis, 8-signal red flag screen, and honest verdict — run on a real
              job posting at 7.5/10 fit.
            </p>
            <Link
              href="/cs2/sample"
              className="inline-flex items-center text-sm font-medium text-zinc-900 border border-zinc-300 rounded-lg px-5 py-2.5 hover:bg-zinc-50 hover:border-zinc-400 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Read the SigmaRPA evaluation →
            </Link>
          </div>

        </article>

        {/* Prev/Next Navigation */}
        <nav
          aria-label="Case study navigation"
          className="max-w-5xl mx-auto px-6 border-t border-zinc-200 pt-8 mt-4 mb-12 flex flex-wrap items-center justify-between gap-4"
        >
          <Link
            href={cs1.href}
            className="group py-3 flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
            aria-label={`Previous case study: ${cs1.title}`}
          >
            <span className="text-xs uppercase tracking-widest text-zinc-400 mb-1">Previous</span>
            <span className="text-sm font-medium text-zinc-700 group-hover:text-blue-600 transition-colors duration-200">
              ← {cs1.number}
            </span>
          </Link>
          <Link
            href={cs3.href}
            className="group py-3 flex flex-col items-end focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
            aria-label={`Next case study: ${cs3.title}`}
          >
            <span className="text-xs uppercase tracking-widest text-zinc-400 mb-1">Next</span>
            <span className="text-sm font-medium text-zinc-700 group-hover:text-blue-600 transition-colors duration-200">
              {cs3.number} →
            </span>
          </Link>
        </nav>

      </main>
      <Footer />
    </>
  )
}
