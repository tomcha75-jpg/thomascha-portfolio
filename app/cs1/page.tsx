import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import { caseStudies } from '@/lib/caseStudies'

export const metadata: Metadata = {
  title: 'AI SEO Content System',
  description:
    'Automated a 3-stage SEO content workflow: AI research thread, prompt generation, and benchmarked article output. Built without code, deployed on a live keyword.',
  alternates: {
    canonical: 'https://thomascha.com/cs1',
  },
  openGraph: {
    title: 'AI-Powered SEO Content Production System — Thomas Cha',
    description:
      'A three-stage AI workflow that replaced days of manual SERP analysis. Research thread, prompt generation, benchmarked output. No code written.',
    url: 'https://thomascha.com/cs1',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-Powered SEO Content Production System',
    description:
      'Three-stage AI workflow replacing manual SERP research. Deployed on a live keyword, benchmarked across four AI tools.',
    images: ['/og-default.jpg'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI-Powered SEO Content Production System',
  description:
    'A three-stage AI workflow that automated SEO content production from SERP research thread to deployable article with benchmarked output.',
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
  url: 'https://thomascha.com/cs1',
  mainEntityOfPage: 'https://thomascha.com/cs1',
  keywords: ['AI content production', 'SEO automation', 'prompt engineering', 'AI workflow', 'content strategy'],
  about: [
    { '@type': 'Thing', name: 'Search Engine Optimization' },
    { '@type': 'Thing', name: 'AI Content Workflow' },
    { '@type': 'Thing', name: 'Prompt Engineering' },
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
      name: 'AI SEO Content System',
      item: 'https://thomascha.com/cs1',
    },
  ],
}

export default function CS1Page() {
  const cs1 = caseStudies.find((cs) => cs.id === 'cs1')!
  const cs2 = caseStudies.find((cs) => cs.id === 'cs2')!
  const cs4 = caseStudies.find((cs) => cs.id === 'cs4')!

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
              Case Study 01
            </p>
            <h1
              id="cs-title"
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 mb-4"
            >
              AI-Powered SEO Content Production System
            </h1>
            <p className="text-lg md:text-xl text-zinc-500 leading-relaxed mb-6">
              Three-Stage Workflow from Research Thread to Deployable Article
            </p>
            <div className="flex flex-wrap gap-2">
              {cs1.domains.map((d) => (
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
            <div className="max-w-prose">
              <p className="text-base leading-relaxed text-zinc-600">
                Manual SERP analysis for a single keyword meant visiting each qualifying page by
                hand, stripping out directories and irrelevant listings by eye, copying and pasting
                every heading and body section into a separate document, counting images manually,
                cataloguing heading patterns by hand, and running word cloud tools to identify
                semantic term frequency across multiple pages. On a conservative estimate, a rough
                outline took hours. Anything thorough enough to actually write from took days. Then
                came the writing. Drafting, editing, and refining a single article took additional
                days. The only automated step in the entire process was word count. Scaling this was
                essentially unthinkable.
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
              Three stages, each using AI differently.
            </p>
            <div className="space-y-4 max-w-2xl">
              <div className="border border-zinc-200 rounded-xl p-5 md:p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-1">
                  Stage 01
                </p>
                <h3 className="text-base font-semibold text-zinc-800 mb-3">Research Thread</h3>
                <p className="text-sm md:text-base leading-relaxed text-zinc-600">
                  A conversational AI session used to map the entire domain. Specifically, how SERP
                  analysis tools like SurferSEO and WriteWave evaluate search rankings, what factors
                  they weight most heavily, and why. The AI was used as research infrastructure, not
                  as a writing shortcut. Output: synthesized domain intelligence that would have
                  taken days to compile manually.
                </p>
              </div>

              <div className="border border-zinc-200 rounded-xl p-5 md:p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-1">
                  Stage 02
                </p>
                <h3 className="text-base font-semibold text-zinc-800 mb-3">Prompt Generation</h3>
                <p className="text-sm md:text-base leading-relaxed text-zinc-600">
                  AI directed to encode the synthesized intelligence from Stage 1 into a reusable,
                  production-ready prompt. Rather than typing constraints from memory (which would
                  have been slow, incomplete, and dependent on recall), AI researched those
                  constraints and wrote the prompt itself. Output: a structured prompt functioning
                  as a repeatable methodology.
                </p>
              </div>

              <div className="border border-zinc-200 rounded-xl p-5 md:p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-1">
                  Stage 03
                </p>
                <h3 className="text-base font-semibold text-zinc-800 mb-3">
                  Deployment and Benchmarking
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-zinc-600">
                  The prompt was deployed on a real keyword, dry needling therapy Houston. The
                  system autonomously searched the SERP, applied filtering rules to exclude
                  directories and irrelevant listings, and analyzed eight qualifying organic pages.
                  Output included a full optimization blueprint, three title tag options, three meta
                  description options, URL slug and schema recommendations, and a fully optimized
                  ~2,500-word article with FAQ content, image placeholders, internal and external
                  link suggestions, and copy-paste-ready schema markup. The output was then
                  benchmarked across multiple AI platforms (the same prompt run through Claude and
                  Grok, alongside Grok without the prompt and a third-party writing tool) to
                  evaluate quality differences and identify gaps that warranted further iteration.
                </p>
              </div>
            </div>
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
                The research thread came first by design, not by habit. Before writing a single
                instruction, the AI was directed to do something specific. Investigate what tools
                like SurferSEO and WriteWave were actually measuring, identify the factors they
                weighted most heavily, and compile everything into a constraint set to feed directly
                back into a prompt. Deep working knowledge of SEO was already present. That
                wasn&apos;t the gap. The gap was that spelling out every relevant factor manually,
                from memory, would have been slow, incomplete, and dependent on what happened to be
                recalled on a given day. Having AI research and generate those constraints meant the
                output would be more thorough than anything produced manually, reviewable for
                accuracy rather than constructed from scratch.
              </p>
              <p className="text-base leading-relaxed text-zinc-600">
                There was a second reason, one that mattered more in the long run. Because Thomas
                had enough SEO experience to evaluate the output, the research could be judged as
                trustworthy. But the same process works in fields with no prior experience at all,
                as long as there are reliable benchmarks to anchor the research. Established tools,
                recognised industry standards, reputable services. Any credible reference point AI
                can investigate and draw from. The pattern stays the same. Find the benchmarks,
                extract the critical factors, encode them into a prompt, generate the output,
                evaluate against what is known or verifiable. The methodology doesn&apos;t require
                expertise in the subject. It requires knowing how to find and use the right
                reference points, then directing AI accordingly. The research thread wasn&apos;t the
                warm-up. It was the foundation the prompt was built on.
              </p>
            </div>
          </section>

          {/* The Retrospective */}
          <section aria-labelledby="retro-heading" className="mb-14 md:mb-16">
            <h2
              id="retro-heading"
              className="text-xl md:text-2xl font-semibold text-zinc-800 mb-4"
            >
              The Retrospective
            </h2>
            <div className="max-w-prose border-l-4 border-blue-400 bg-blue-50 rounded-r-xl px-5 py-4 md:px-6 md:py-5">
              <p className="text-xs uppercase tracking-widest text-zinc-400 mb-4">
                Post-Build Reflection
              </p>
              <div className="space-y-4">
                <p className="text-base leading-relaxed text-zinc-700">
                  After deployment, a design flaw surfaced in the location placeholder scaling
                  system. The system used placeholders with a find-and-replace kit to deploy the
                  same article across multiple locations. The conclusion on reflection was
                  straightforward. Sound concept in other contexts, wrong for SEO specifically.
                  Running the full prompt per keyword produces better-tailored output than
                  find-and-replace location swapping, because each keyword deserves its own fresh
                  SERP analysis rather than a rehashed article built for a different location.
                </p>
                <p className="text-base leading-relaxed text-zinc-700">
                  The cross-platform benchmarking surfaced a second, more nuanced gap. Comparative
                  scoring revealed that one platform&apos;s output outperformed on local signal
                  specificity. It had surfaced a genuinely local environmental detail that read as
                  assumed knowledge rather than templated content (the kind of observation that
                  signals real-world familiarity with a place). The prompt was producing solid local
                  context but nothing with that level of specific grounding. The fix was precise and
                  constrained. A lateral context research step was inserted into the workflow,
                  directing the system to surface local environmental, demographic, or cultural
                  factors relevant to the service before writing began. Hard limits were built in.
                  Findings integrated as one sentence or clause each, placed where they arise
                  organically, never as dedicated sections, never forced. The goal was a touch of
                  genuine local intelligence, not breadth.
                </p>
                <p className="text-base leading-relaxed text-zinc-700">
                  Both retrospectives are preserved deliberately. They demonstrate that the system
                  was evaluated critically after build, not just shipped.
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
                Any workflow that requires synthesising existing research into a structured,
                repeatable output faces the same bottleneck. Too manual to scale, too dependent on
                individual effort and recall to be reliable. The same architectural approach applies
                to a cancer researcher mapping existing trials to identify untested combinations and
                scope future proposals. It applies to a marketing team reverse-engineering
                high-performing ad copy across emotional, logical, and structural categories to
                generate testable headline variations systematically. It applies anywhere the raw
                material is research, the goal is a structured output, and the current process is a
                human doing it slowly by hand.
              </p>
              <p className="text-base leading-relaxed text-zinc-600">
                The domain changes. The framework doesn&apos;t. And because the research phase is
                handled by AI working from credible benchmarks, deep domain expertise isn&apos;t a
                prerequisite. That transferability is the point. Build it once, deploy it in any
                domain where research feeds a structured output.
              </p>
            </div>
          </section>

          {/* Closing Credential Line */}
          <div className="max-w-prose mb-14 md:mb-16">
            <div className="w-8 h-0.5 bg-blue-500 mb-4" aria-hidden="true" />
            <p className="text-xl md:text-2xl font-semibold text-zinc-900 leading-snug">
              Without a computer science background, he reverse-engineered a production-grade AI
              workflow, identified what the system needed to do, directed AI to build it,
              stress-tested it against real data, found two design flaws and fixed both, and handed
              off something a non-technical user could run in five minutes.
            </p>
          </div>

        </article>

        {/* Prev/Next Navigation */}
        <nav
          aria-label="Case study navigation"
          className="max-w-5xl mx-auto px-6 border-t border-zinc-200 pt-8 mt-4 mb-12 flex items-center justify-between"
        >
          <Link
            href={cs4.href}
            className="group py-3 flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
            aria-label={`Previous case study: ${cs4.title}`}
          >
            <span className="text-xs uppercase tracking-widest text-zinc-400 mb-1">Previous</span>
            <span className="text-sm font-medium text-zinc-700 group-hover:text-blue-600 transition-colors duration-200">
              ← {cs4.number}
            </span>
          </Link>
          <Link
            href={cs2.href}
            className="group py-3 flex flex-col items-end focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
            aria-label={`Next case study: ${cs2.title}`}
          >
            <span className="text-xs uppercase tracking-widest text-zinc-400 mb-1">Next</span>
            <span className="text-sm font-medium text-zinc-700 group-hover:text-blue-600 transition-colors duration-200">
              {cs2.number} →
            </span>
          </Link>
        </nav>

        {/* Footer */}
        <footer className="border-t border-zinc-200">
          <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-zinc-900">Thomas Cha</p>
              <p className="text-xs text-zinc-400 mt-0.5">AI Implementation</p>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://www.linkedin.com/in/thomascha-ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
              >
                LinkedIn
              </a>
              <a
                href="mailto:thomas@thomascha.com"
                className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
              >
                Email
              </a>
            </div>
            <p className="text-xs text-zinc-400 sm:ml-auto">© 2026 Thomas Cha</p>
          </div>
        </footer>
      </main>
    </>
  )
}
