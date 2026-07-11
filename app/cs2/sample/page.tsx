import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'CS2 Sample Evaluation — SigmaRPA Head of AI Operations',
  description:
    'Full Phase 1 and Phase 2 job fit evaluation for SigmaRPA Head of AI Operations & Client Services. Fit score 7.5/10. Role snapshot, alignment analysis, 8-signal red flag screen, and honest verdict. Unedited system output.',
  alternates: {
    canonical: 'https://thomascha.com/cs2/sample',
  },
  openGraph: {
    title: 'Job Fit Evaluation: SigmaRPA Head of AI Operations — CS2 Sample Output',
    description:
      'Unedited Phase 1 and Phase 2 evaluation output for SigmaRPA Head of AI Operations & Client Services (7.5/10). Role snapshot, 8-signal red flag screen, honest verdict.',
    url: 'https://thomascha.com/cs2/sample',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CS2 Sample Evaluation — SigmaRPA Head of AI Operations',
    description:
      'Full job fit evaluation output from the CS2 system. SigmaRPA Head of AI Operations & Client Services. 7.5/10 fit score.',
    images: ['/og-default.jpg'],
  },
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
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Sample Evaluation',
      item: 'https://thomascha.com/cs2/sample',
    },
  ],
}

const alignmentItems = [
  {
    title: 'AI literacy and daily use',
    tag: 'Direct match — exceeds requirement',
    body: 'The posting lists hands-on Claude, ChatGPT, and Gemini experience as a Nice to Have. All three are in daily use. Five portfolio case studies demonstrate system-level AI work: CS1 (SEO content production system), CS2 (this evaluation), CS3 (Ontario Teacher Unit Planner, full-stack web app), CS4 (file-based RAG architecture across 8+ projects), CS5 (native macOS desktop application). A company selling AI implementation to clients would recognise the gap between someone who has used these tools and someone who has built with them.',
  },
  {
    title: 'Client-facing experience',
    tag: '19 years documented',
    body: '"Act as a primary point of contact," "coordinate client onboarding," "keep client relationships strong," "present meeting summaries and project updates" — every item on this list maps to documented experience. On The Mark Local Marketing ran a consultative client model for nearly two decades: intake, ongoing contact, campaign reporting, addressing concerns, managing expectations.',
  },
  {
    title: 'SOP and documentation',
    tag: 'Demonstrated across multiple contexts',
    body: 'Client intake SOPs and service fulfilment workflows are documented in the resume database. CS4 (File-Based RAG Architecture) is a knowledge management and documentation infrastructure spanning 8+ projects, built from scratch and maintained across months. The posting\'s "build and maintain SOPs and documentation" is a direct match.',
  },
  {
    title: 'Process improvement using AI',
    tag: 'What the case studies are',
    body: 'CS1 reduced a multi-day manual SEO research and writing process to under 30 minutes. CS2 replaced an inconsistent manual job evaluation process with a structured, documented, reproducible system. Both are AI-driven process improvement projects, which is precisely what the AI Enablement column is asking for.',
  },
  {
    title: 'n8n workflow automation',
    tag: 'Well past "familiarity"',
    body: 'The posting lists "familiarity with workflow automation platforms" as a Nice to Have. 14 active n8n workflows with webhook endpoints, conditional branching, multi-step orchestration, API-connected integrations, and direct MCP integration via n8n-mcp are documented and specific.',
  },
  {
    title: 'Working independently with minimal supervision',
    tag: '19 years self-employed',
    body: 'No ambiguity here.',
  },
  {
    title: 'Managing multiple priorities and deadlines',
    tag: 'Multi-client consultancy experience',
    body: 'Running SEO, PPC, content, and client management simultaneously across multiple accounts is documented. This matches the "coordinate multiple projects and priorities at once" requirement directly.',
  },
  {
    title: 'Agency and consulting background',
    tag: 'Meets Nice to Have fully',
    body: '"Background in consulting, technology, or agency work" is listed as a Nice to Have. All three apply.',
  },
]

const divergenceItems = [
  {
    title: 'CRM experience',
    severity: 'Soft',
    body: '"Experience with CRM systems and business software" is listed as a Nice to Have. Documented experience is light pipeline tracking in Monday.com and Trello at a basic level — not substantive CRM platform experience. A client services role will almost certainly have a CRM in daily use (HubSpot, Salesforce, or a vertical-specific tool). There\'s a learning curve here. It\'s not a disqualifier — the posting doesn\'t require CRM expertise — but it\'s a genuine gap to name honestly.',
  },
  {
    title: 'Client relationship management as a primary daily activity',
    severity: 'Soft',
    body: 'This is the only meaningful concern, and it\'s psychological rather than skills-based. The capability is not in question: client relationship maintenance has been the job for 19 years. The profile documents that sustained client-facing exposure — regular check-ins, reactive availability, ongoing relationship management — is a drain. At 20 hours/week, if client services accounts for half the time, that\'s roughly 2 hours of active client contact per day. At that volume it\'s likely manageable. At 40 hours/week it would be a different calculation. The part-time format is a real mitigating factor.',
  },
  {
    title: '"Head of" title ambiguity',
    severity: 'Soft',
    body: 'The title implies seniority. The responsibilities read closer to a Client Success Manager or AI Operations Coordinator. In a small, growing company, "Head of" at this scope typically means you\'re the only person in that function. That\'s not a gap — it\'s a title management consideration. Salary expectations should be calibrated to the actual scope, not the title.',
  },
]

const tierItems = [
  { dimension: 'AI literacy', tier: 'BEST', note: "Posting bar is proficient daily use. Building production systems exceeds it." },
  { dimension: 'Client-facing experience', tier: 'BEST', note: '19 documented years of exactly what the posting describes.' },
  { dimension: 'Documentation and SOPs', tier: 'BETTER–BEST', note: 'CS4 and consulting SOP work both directly relevant.' },
  { dimension: 'Workflow automation', tier: 'BEST', note: '14 active n8n workflows with MCP integration is well past "familiarity."' },
  { dimension: 'CRM experience', tier: 'GOOD', note: 'Only basic pipeline tracking documented.' },
]

const redFlagItems = [
  {
    signal: 'Volatile or unpredictable management',
    status: 'soft',
    assessment:
      '"Close working relationship with leadership" is listed as a benefit. In a small, growing AI consultancy, this almost certainly means reporting to a founder or CEO. That dynamic can go either way: it can be the right-hand-man relationship that suits the profile at its best, or it can introduce volatility if the founder operates without clear expectations and regular feedback. The posting\'s framing is positive and measured, not red-flag language — but the absence of detail means you don\'t know yet which version you\'re walking into. Ask directly in the interview about how communication and feedback work.',
  },
  {
    signal: 'High real-time social exposure as primary activity',
    status: 'soft',
    assessment:
      'The client services column raises this question, but the part-time and "flexible hours" framing materially limits the exposure window. A primary point of contact role at 20 flexible hours/week is not the same as a full-time client-facing account manager role. Soft flag, not hard.',
  },
  {
    signal: 'Chronic urgency culture',
    status: 'clear',
    assessment:
      'Not signaled. No "startup pace," no "must thrive under pressure," no "constantly shifting priorities." The 90-day success criteria are specific and sequential, which suggests an organisation that thinks in structured milestones.',
  },
  {
    signal: 'Arbitrary or public feedback structures',
    status: 'clear',
    assessment: 'Not signaled. No evidence of public evaluation, arbitrary review processes, or undefined performance criteria in the posting language.',
  },
  {
    signal: 'Politically complex hierarchical environments',
    status: 'clear',
    assessment:
      'Small company, direct leadership relationship. No signals of complex internal politics or multi-layer approval chains.',
  },
  {
    signal: 'Ambiguous deliverables with no finish line',
    status: 'soft',
    assessment:
      '"Spot process improvement opportunities" and "help shape AI-powered client offerings" are open-ended. But the 90-day success criteria name concrete markers: "become a trusted point of contact for client communication," "coordinate active projects and follow-ups smoothly," "identify where AI can improve efficiency." Those are close to performance ambiguity — success is somewhat subjectively defined — but specific enough to work against. Soft flag, worth clarifying in interview.',
  },
  {
    signal: 'Scope creep phrasing',
    status: 'clear',
    assessment:
      '"And other duties as assigned" does not appear. The three-column structure (client services, operations, AI enablement) is clearly bounded.',
  },
  {
    signal: 'Final decision-maker or primary public-facing authority',
    status: 'match',
    assessment:
      'The role is explicitly positioned as a coordination function working closely with leadership, not as an independent authority. You are the right hand, not the face of the company. This is the right-hand-man identity in job-posting form. Positive identity match.',
  },
]

function StatusBadge({ status }: { status: string }) {
  if (status === 'clear') {
    return (
      <span className="flex-shrink-0 text-xs font-medium px-2.5 py-1 rounded-full bg-green-50 text-green-700 border border-green-200">
        Clear
      </span>
    )
  }
  if (status === 'soft') {
    return (
      <span className="flex-shrink-0 text-xs font-medium px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
        Soft flag
      </span>
    )
  }
  if (status === 'match') {
    return (
      <span className="flex-shrink-0 text-xs font-medium px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
        Positive match
      </span>
    )
  }
  return null
}

function TierBadge({ tier }: { tier: string }) {
  const base = 'text-xs font-semibold px-2.5 py-1 rounded-full border'
  if (tier === 'BEST') return <span className={`${base} bg-blue-600 text-white border-blue-600`}>{tier}</span>
  if (tier === 'BETTER–BEST') return <span className={`${base} bg-blue-50 text-blue-700 border-blue-200`}>{tier}</span>
  if (tier === 'BETTER') return <span className={`${base} bg-zinc-100 text-zinc-700 border-zinc-200`}>{tier}</span>
  return <span className={`${base} bg-zinc-50 text-zinc-500 border-zinc-200`}>{tier}</span>
}

export default function CS2SamplePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Nav />

      <main>
        <article aria-labelledby="sample-title" className="max-w-5xl mx-auto px-6 py-12 md:py-16">

          {/* Back link */}
          <Link
            href="/cs2"
            className="inline-block py-3 mb-8 text-sm text-zinc-500 hover:text-blue-600 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
          >
            ← Case Study 02
          </Link>

          {/* Header */}
          <header className="mb-10 md:mb-12">
            <p className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-3">
              Case Study 02 — Sample Output
            </p>
            <h1
              id="sample-title"
              className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-2"
            >
              Head of AI Operations &amp; Client Services
            </h1>
            <p className="text-lg text-zinc-500 mb-6">SigmaRPA Inc.</p>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-baseline gap-1.5">
                <span className="text-4xl font-bold text-zinc-900">7.5</span>
                <span className="text-xl text-zinc-400">/ 10</span>
              </div>
              <p className="text-sm text-zinc-500 max-w-xs">
                Strong across all three workstreams. The one real fit question is psychological, not skills-based.
              </p>
            </div>
          </header>

          {/* Unedited output notice */}
          <div className="max-w-prose mb-12 border border-zinc-200 rounded-xl px-5 py-4 bg-zinc-50">
            <p className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-1">About this output</p>
            <p className="text-sm text-zinc-600 leading-relaxed">
              This is unedited system output from a real job posting evaluation. The evaluation was run on July 11, 2026. The application window closed before a decision was made. This evaluation is documented for portfolio reference.
            </p>
          </div>

          {/* PHASE 1 */}
          <section aria-labelledby="phase1-heading" className="mb-14 md:mb-16">
            <h2
              id="phase1-heading"
              className="text-xl md:text-2xl font-semibold text-zinc-800 mb-8"
            >
              Phase 1 — Requirements and Fit Assessment
            </h2>

            {/* Role Snapshot */}
            <div className="mb-10">
              <h3 className="text-base font-semibold text-zinc-800 mb-3">Role Snapshot</h3>
              <div className="max-w-prose border border-zinc-200 rounded-xl p-5 md:p-6 bg-white">
                <p className="text-sm leading-relaxed text-zinc-600 mb-3">
                  SigmaRPA is a small AI and automation consultancy that helps organisations adopt
                  AI and improve their workflows. This role is 20 hours/week, remote, and splits
                  across three workstreams.
                </p>
                <p className="text-sm leading-relaxed text-zinc-600 mb-3">
                  Client services is likely the heaviest: you are the primary contact point for a
                  client portfolio — handling onboarding logistics, scheduling calls, managing
                  follow-ups, preparing meeting notes and action items, and maintaining
                  relationships through regular communication. Operations/coordination runs in
                  parallel: tracking active projects across what appears to be a small internal
                  team, building and maintaining SOPs, documenting processes, supporting new tool
                  rollouts, and helping leadership with planning. AI enablement is the third
                  bucket: researching emerging tools, identifying workflow improvement
                  opportunities for internal and client work, testing and documenting solutions,
                  and helping shape what AI-powered offerings the company brings to market.
                </p>
                <p className="text-sm leading-relaxed text-zinc-600">
                  This is not a development role. Nothing in the responsibilities column requires
                  hands-on configuration, coding, or deployment. The AI literacy bar is high
                  enough to be credible in client conversations and to spot meaningful
                  opportunities — but execution on the AI side is research, testing,
                  documentation, and handoff.
                </p>
              </div>
            </div>

            {/* Alignment */}
            <div className="mb-10">
              <h3 className="text-base font-semibold text-zinc-800 mb-4">
                Where This Posting Aligns
              </h3>
              <div className="space-y-3 max-w-2xl">
                {alignmentItems.map((item) => (
                  <div key={item.title} className="border border-zinc-200 rounded-xl p-5 md:p-6">
                    <div className="flex flex-wrap items-start gap-2 mb-2">
                      <p className="text-sm font-semibold text-zinc-800">{item.title}</p>
                      <span className="text-xs text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded-full">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-zinc-600">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Divergence */}
            <div className="mb-10">
              <h3 className="text-base font-semibold text-zinc-800 mb-4">
                Where This Posting Diverges
              </h3>
              <div className="space-y-3 max-w-2xl">
                {divergenceItems.map((item) => (
                  <div key={item.title} className="border border-amber-200 rounded-xl p-5 md:p-6 bg-amber-50">
                    <div className="flex flex-wrap items-start gap-2 mb-2">
                      <p className="text-sm font-semibold text-zinc-800">{item.title}</p>
                      <span className="text-xs text-amber-700 bg-amber-100 border border-amber-200 px-2 py-0.5 rounded-full">
                        {item.severity} divergence
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-zinc-700">{item.body}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-zinc-500 max-w-prose">
                No hard divergences. Nothing in this posting would filter you out at a skills level.
              </p>
            </div>

            {/* Tier Assessment */}
            <div>
              <h3 className="text-base font-semibold text-zinc-800 mb-4">
                Candidate Tier Assessment
              </h3>
              <div className="max-w-2xl space-y-2">
                {tierItems.map((item) => (
                  <div
                    key={item.dimension}
                    className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 border border-zinc-200 rounded-xl px-5 py-3 md:px-6"
                  >
                    <div className="flex items-center gap-3 sm:w-48 flex-shrink-0">
                      <TierBadge tier={item.tier} />
                      <p className="text-sm font-medium text-zinc-700">{item.dimension}</p>
                    </div>
                    <p className="text-xs text-zinc-500 leading-relaxed sm:pt-0.5">{item.note}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 max-w-prose border border-zinc-200 rounded-xl px-5 py-4 md:px-6">
                <p className="text-sm font-semibold text-zinc-800 mb-1">Overall</p>
                <p className="text-sm leading-relaxed text-zinc-600">
                  Strong BETTER candidate with BEST-tier credentials on the two dimensions this
                  role cares most about — AI literacy and client-facing experience. The CRM gap
                  is real but soft. The role does not require it as a primary qualification.
                </p>
              </div>
            </div>
          </section>

          {/* Phase divider */}
          <div className="border-t border-zinc-200 my-14 md:my-16" />

          {/* PHASE 2 */}
          <section aria-labelledby="phase2-heading" className="mb-14 md:mb-16">
            <h2
              id="phase2-heading"
              className="text-xl md:text-2xl font-semibold text-zinc-800 mb-8"
            >
              Phase 2 — Psychological and Environment Fit
            </h2>

            {/* Day-to-Day Fit Check */}
            <div className="mb-10">
              <h3 className="text-base font-semibold text-zinc-800 mb-4">Day-to-Day Fit Check</h3>
              <div className="max-w-prose space-y-3 text-sm leading-relaxed text-zinc-600">
                <p>
                  The responsibilities section lists client services first and most prominently,
                  which typically signals where the time allocation goes. Walking through what a
                  typical day likely looks like and checking it against documented energy patterns:
                </p>
                <p>
                  <strong className="text-zinc-800">Written follow-ups, meeting summaries, action item tracking.</strong>{' '}
                  Asynchronous, written, deliverable-based. Clear finish line — a meeting summary
                  is done when it&apos;s accurate and complete. No ambiguity about whether you did
                  it right. Positive fit.
                </p>
                <p>
                  <strong className="text-zinc-800">Scheduled calls and onboarding sessions.</strong>{' '}
                  Structured and predictable by nature. Preparation follows a repeatable format.
                  This lands closer to "predictable routines" than to "real-time public
                  performance." Manageable.
                </p>
                <p>
                  <strong className="text-zinc-800">"Keep client relationships strong through regular communication."</strong>{' '}
                  This is where the fit question lives. If this means structured written updates
                  and scheduled check-ins, it maps well. If it means reactive availability —
                  clients calling unexpectedly, open-ended relationship maintenance with no defined
                  deliverable — it pulls toward draining territory. The posting doesn&apos;t
                  specify which. This is worth probing in an interview.
                </p>
                <p>
                  <strong className="text-zinc-800">AI enablement: research emerging tools, identify opportunities, test and document.</strong>{' '}
                  Exploratory ambiguity — no "correct" answer expected, the task is discovery and
                  tinkering, with findings shared through documentation. Paid to figure out what
                  AI tools can do is a documented draw, not a drain. If the role weighted more
                  heavily here, the fit score would be higher.
                </p>
                <p>
                  <strong className="text-zinc-800">Operations/coordination: track deliverables, maintain SOPs, support tool rollouts.</strong>{' '}
                  Structured, deliverable-based, concrete finish lines. Strong fit.
                </p>
                <p className="border-l-4 border-blue-300 bg-blue-50 rounded-r-lg px-4 py-3 text-zinc-700">
                  Net day-to-day assessment: At 20 hours/week (roughly 4 hours/day), this is a
                  sustainable role even if client services is the largest time bucket. The
                  part-time format is a real mitigating factor. At this volume, the draining
                  elements are bounded. The energising elements (AI research, documentation,
                  structured coordination) are present and genuine.
                </p>
              </div>
            </div>

            {/* Red Flag Screen */}
            <div className="mb-10">
              <h3 className="text-base font-semibold text-zinc-800 mb-4">
                Environment and Authority Red Flag Screen
              </h3>
              <div className="max-w-2xl space-y-3">
                {redFlagItems.map((item) => (
                  <div
                    key={item.signal}
                    className="border border-zinc-200 rounded-xl p-5 md:p-6"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <p className="text-sm font-semibold text-zinc-800">{item.signal}</p>
                      <StatusBadge status={item.status} />
                    </div>
                    <p className="text-sm leading-relaxed text-zinc-600">{item.assessment}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-zinc-500 max-w-prose">
                Zero hard red flags. Two soft flags worth probing in an interview: the direct
                leadership relationship (clarify how feedback and communication work) and the
                client services column&apos;s reactive availability question (clarify whether
                this is a structured cadence or open-ended availability).
              </p>
            </div>

            {/* Vagueness Assessment */}
            <div className="mb-10">
              <h3 className="text-base font-semibold text-zinc-800 mb-4">Vagueness Assessment</h3>
              <div className="max-w-prose space-y-3 text-sm leading-relaxed text-zinc-600">
                <p>
                  The posting is relatively clear for its type. The three-column structure is
                  logical and internally consistent. The 90-day success criteria are specific
                  enough to evaluate against.
                </p>
                <p className="font-medium text-zinc-700">Missing information worth noting:</p>
                <ul className="space-y-2 list-none">
                  {[
                    'No salary range. "Competitive salary" with no number for a part-time role. For 20 hours/week, you need to know what that means before investing in a full application. Worth investigating — check LinkedIn salary data or ask during a screening call.',
                    'No client base described. Who are their clients? What industries? What size? Managing three enterprise clients is a different job than managing twenty SMBs.',
                    'No team size. Implied small by "as we grow" language. But "small" could mean two people or ten.',
                    'No reporting structure details. "Close working relationship with leadership" doesn\'t name a manager or describe the reporting relationship concretely.',
                  ].map((point, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-zinc-300 flex-shrink-0 mt-0.5">—</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <p>
                  None of these are red flags on their own — this is a normal level of detail for
                  a mid-level posting. But the missing salary range and client context are both
                  things to resolve before writing a polished application.
                </p>
              </div>
            </div>

            {/* Honest Verdict */}
            <div className="mb-10">
              <h3 className="text-base font-semibold text-zinc-800 mb-4">The Honest Verdict</h3>
              <div className="max-w-prose border-l-4 border-blue-400 bg-blue-50 rounded-r-xl px-5 py-5 md:px-6">
                <p className="text-sm font-semibold text-blue-800 uppercase tracking-wider mb-4">
                  Apply. This is a legitimate fit.
                </p>
                <div className="space-y-3 text-sm leading-relaxed text-zinc-700">
                  <p>
                    The role&apos;s primary technical requirement — AI literacy — is the area where
                    you have the widest advantage over a typical applicant. The company sells AI and
                    automation implementations to clients. Someone who has built five AI portfolio
                    pieces independently, runs 14 n8n workflows, uses Claude at API level, and has
                    a documented methodology for AI-driven process improvement is a meaningfully
                    different candidate than someone who uses ChatGPT at a competent level. That
                    gap is real and it matters to a company whose entire value proposition is AI
                    delivery.
                  </p>
                  <p>
                    The client-facing concern is real but bounded. 19 years of documented client
                    work. The part-time format limits the drain to a sustainable volume. The
                    right-hand-man positioning is explicitly present in the role description. The
                    absence of hard red flags is also signal — this posting doesn&apos;t contain
                    the volatility or urgency language that characterises the roles that would grind
                    you down.
                  </p>
                  <p>
                    <strong>Lead angle:</strong> AI enablement depth. Don&apos;t open with the SEO
                    background — it doesn&apos;t connect to what SigmaRPA does and risks
                    undercutting the AI positioning. Open with the fact that you&apos;ve been
                    building AI systems for your own work and your clients&apos; work, ground it
                    with one concrete example (CS1&apos;s before/after is the cleanest, fastest
                    proof), then layer in the 19 years of client consulting as the second credential
                    that makes the AI work deployable in a client-facing context.
                  </p>
                  <p>
                    <strong>Framing risk:</strong> The case studies are the differentiator, but
                    they need a quick translation for someone at a small consultancy reading a
                    coordinator-level application. The frame isn&apos;t "I built five complex
                    systems." The frame is "I&apos;ve been doing the work your clients are trying
                    to do — using AI to fix broken processes, document systems, and make workflows
                    repeatable. I&apos;ve done it for myself. I know what the problems look like
                    from inside."
                  </p>
                </div>
              </div>
            </div>

            {/* Pre-Application Action */}
            <div className="max-w-prose">
              <h3 className="text-base font-semibold text-zinc-800 mb-3">
                One Thing to Do Before Applying
              </h3>
              <div className="border border-zinc-200 rounded-xl p-5 md:p-6">
                <p className="text-sm leading-relaxed text-zinc-600">
                  Research SigmaRPA specifically before writing the application. The posting is
                  light on client industry and RPA specifics. Understanding whether they work in
                  healthcare, professional services, operations, or another vertical would let you
                  name a relevant case study angle in the cover letter rather than using a generic
                  AI implementation framing. A company whose clients are healthcare organisations
                  is a different application than one whose clients are accounting firms. Ten
                  minutes on their LinkedIn, website, and any public client mentions would sharpen
                  the positioning considerably.
                </p>
              </div>
            </div>
          </section>

          {/* Footer note */}
          <div className="max-w-prose border-t border-zinc-200 pt-8 mt-4 mb-10">
            <p className="text-xs text-zinc-400 leading-relaxed">
              This evaluation was run through the CS2 system on a real job posting. The
              application window closed before a submission was made. This output is documented
              here as a portfolio reference for Case Study 2.
            </p>
          </div>

          {/* Back to CS2 */}
          <Link
            href="/cs2"
            className="inline-block py-3 text-sm text-zinc-500 hover:text-blue-600 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
          >
            ← Back to Case Study 02
          </Link>

        </article>
      </main>
      <Footer />
    </>
  )
}
