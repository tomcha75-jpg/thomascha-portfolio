import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import { caseStudies } from '@/lib/caseStudies'

export const metadata: Metadata = {
  title: 'Thomas Cha — AI Implementation',
  description:
    'AI implementation portfolio: four case studies in AI-directed systems — SEO content production, job fit evaluation, a full-stack Ontario teacher app, and a file-based knowledge architecture. No code written.',
  alternates: {
    canonical: 'https://thomascha.com',
  },
  openGraph: {
    title: 'Thomas Cha — AI Implementation',
    description:
      'AI implementation portfolio: four case studies in AI-directed systems — SEO content production, job fit evaluation, a full-stack Ontario teacher app, and a file-based knowledge architecture. No code written.',
    url: 'https://thomascha.com',
    type: 'website',
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Thomas Cha',
  url: 'https://thomascha.com',
  sameAs: ['https://www.linkedin.com/in/thomascha-ca/'],
  jobTitle: 'AI Implementation Specialist',
  description:
    'AI implementation practitioner specialising in prompt architecture, workflow automation, and AI-directed systems design. No computer science degree.',
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Thomas Cha',
  url: 'https://thomascha.com',
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <Nav />

      <main>
        {/* ── Hero ── */}
        <section className="max-w-5xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32">
          <span className="block text-xs font-medium uppercase tracking-widest text-zinc-400 mb-6">
            AI Implementation
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 leading-tight mb-6">
            <span className="block">He designs the system.</span>
            <span className="block">The AI builds it.</span>
          </h1>

          <p className="text-lg font-medium text-zinc-600 mb-5">
            Four case studies. Real systems. No computer science degree.
          </p>

          <p className="text-base text-zinc-500 leading-relaxed max-w-2xl mb-10">
            Every system here was built by defining the problem precisely, directing AI through a
            documented methodology, and evaluating the output against a measurable standard. The AI
            wrote the code. Thomas, an AI director, made every product and architectural decision.
            The four case studies span: an SEO content production system, a job fit evaluation
            system built on occupational psychology research, a full-stack lesson planning app for
            Ontario teachers, and a file-based knowledge architecture running across eight active
            projects without a database.
          </p>

          <a
            href="#work"
            className="inline-flex items-center text-sm font-medium text-zinc-900 border border-zinc-300 rounded-lg px-5 py-2.5 hover:bg-zinc-50 hover:border-zinc-400 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            See the Work{' '}
            <span aria-hidden="true" className="ml-1.5">
              ↓
            </span>
          </a>
        </section>

        {/* ── Case Study Grid ── */}
        <section
          id="work"
          className="max-w-5xl mx-auto px-6 pb-24 md:pb-32"
          aria-labelledby="work-heading"
        >
          <h2
            id="work-heading"
            className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-8"
          >
            The Work
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((cs) => (
              <Link
                key={cs.id}
                href={cs.href}
                className="group flex flex-col bg-white border border-zinc-200 rounded-xl p-6 hover:shadow-md hover:border-zinc-300 transition-[box-shadow,border-color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                {/* Number + domains */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="text-xs font-medium text-zinc-400 uppercase tracking-wide">
                    {cs.number}
                  </span>
                  {cs.domains.map((d) => (
                    <span
                      key={d}
                      className="text-xs bg-zinc-100 text-zinc-500 rounded-full px-2 py-0.5"
                    >
                      {d}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-zinc-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {cs.title}
                </h3>

                {/* CS2 meta callout */}
                {cs.id === 'cs2' && (
                  <div className="bg-blue-50 border-l-2 border-blue-400 px-3 py-2 mb-3">
                    <p className="text-xs font-medium text-blue-700 leading-relaxed">
                      This site is a live output of CS2. The job postings that led here were
                      screened through it.
                    </p>
                  </div>
                )}

                {/* Problem */}
                <p className="text-sm font-medium text-zinc-700 mb-3">{cs.problem}</p>

                {/* What was built */}
                <p className="text-[15px] leading-relaxed text-zinc-600 line-clamp-4 md:line-clamp-none mb-4">
                  {cs.whatWasBuilt}
                </p>

                {/* Bottom */}
                <div className="mt-auto pt-4 border-t border-zinc-100">
                  <p className="text-sm text-zinc-500 mb-2">{cs.proofPoint}</p>
                  <p className="text-xs text-zinc-400 mb-4">{cs.roleChip}</p>
                  <span className="text-sm font-medium text-zinc-700 group-hover:text-blue-600 transition-colors duration-200">
                    Read the case study →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Methodology Strip ── */}
        <section
          aria-labelledby="methodology-heading"
          className="bg-zinc-50 border-t border-b border-zinc-100 py-20 md:py-28"
        >
          <div className="max-w-5xl mx-auto px-6">
            <h2
              id="methodology-heading"
              className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6"
            >
              One methodology. Four domains.
            </h2>

            <p className="text-base text-zinc-600 leading-relaxed max-w-2xl mb-10">
              Every system here was built the same way: a research phase first, then encoding those
              constraints into a prompt or architecture, then deployment against real data and
              iterative refinement. Four case studies across four domains. The research phase
              changes. The framework doesn&apos;t. That&apos;s what makes this transferable, and
              that&apos;s what makes it worth hiring.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
              <span className="text-sm font-medium text-zinc-500">Research before build</span>
              <span className="hidden sm:block text-zinc-300" aria-hidden="true">|</span>
              <span className="text-sm font-medium text-zinc-500">Structured prompt architecture</span>
              <span className="hidden sm:block text-zinc-300" aria-hidden="true">|</span>
              <span className="text-sm font-medium text-zinc-500">Evaluated against real outputs</span>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer
        id="contact"
        className="max-w-5xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full"
      >
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
      </footer>
    </>
  )
}
