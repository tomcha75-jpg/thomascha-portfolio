'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const STAGE_DURATION = 6000 // ms per card

const stages = [
  {
    number: '01',
    name: 'Inputs set',
    what: 'Defaults applied for this demo run.',
    details: [
      'Word count target: 1,500–2,000 words',
      'Tone: professional',
      'Voice: second person (you/your)',
      'Business context: none — CTA placeholders will be inserted',
    ],
    fullSystem:
      'In the full system, you answer six questions here before any research begins. Word count, tone, voice, image count, and business details are all confirmed before the prompt advances.',
  },
  {
    number: '02',
    name: 'Keyword analysis',
    what: 'Location and topic signals extracted from your keyword.',
    details: [], // populated dynamically
    fullSystem:
      'In the full system, Claude displays this breakdown and waits for your confirmation before running the SERP search. If the parsing is wrong, you correct it here.',
  },
  {
    number: '03',
    name: 'SERP research',
    live: true,
    what: 'Live web search running now — pulling current page 1 organic results for your keyword.',
    details: [
      'Excluded: Yelp, Angi, HomeAdvisor, Thumbtack, BBB',
      'Excluded: sponsored results and social media profiles',
      'Excluded: Wikipedia and news articles older than 18 months',
      'Keeping only organic content pages a competitor could realistically target',
    ],
    fullSystem:
      'In the full system, Claude shows you the filtered URL list — qualifying pages and excluded ones with reasons — and waits for your approval before analyzing any of them.',
  },
  {
    number: '04',
    name: 'Optimization blueprint',
    what: 'Analyzing qualifying pages and compiling the full content blueprint.',
    details: [
      'Word count benchmarks across qualifying pages',
      'Heading depth patterns (H1 / H2 / H3)',
      'NLP terms: mandatory (7+ page consensus) and recommended (4–6 page)',
      'Top PAA questions to answer',
      'Content gaps: competitor omissions, post-read searches, decision blockers',
      'E-E-A-T signals — what top pages do that the article must match or exceed',
    ],
    fullSystem:
      'In the full system, Claude presents this blueprint as a structured summary and waits for your sign-off before writing a single word of the article.',
  },
  {
    number: '05',
    name: 'Metadata options',
    what: 'Generating three title tag options and three meta description options.',
    details: [
      'Title Option A: keyword-forward, direct, informational',
      'Title Option B: benefit-driven or question-based',
      'Title Option C: action-oriented or urgency-based',
      'Meta descriptions: 145–160 characters each, matching search intent',
    ],
    fullSystem:
      'In the full system, you select your preferred title and meta description here. The article is written to the chosen title — not a generic placeholder.',
  },
]

const stage06 = {
  number: '06',
  name: 'Writing article',
  live: false,
  what: 'All stages complete. The full article was written using the keyword, blueprint, and selected metadata.',
  details: [
    '2,000–2,500 words with H1/H2/H3 structure',
    'LSI terms integrated throughout the body',
    'Image, internal link, and external link placeholders inserted',
    'FAQ section with 5 questions and full answers',
    'JSON-LD FAQ schema at the end, copy-paste ready',
  ],
  fullSystem:
    'In the full system, the article is written to your confirmed title and blueprint. You review the draft before it is published or handed off for editing.',
}

const allSlides = [...stages, stage06]

function parseKeyword(kw: string) {
  const locationPatterns = [
    /\b(houston|toronto|vancouver|calgary|ottawa|montreal|edmonton|winnipeg|hamilton|london|new york|los angeles|chicago|phoenix|philadelphia|san antonio|san diego|dallas|san jose|austin|jacksonville|fort worth|columbus|charlotte|indianapolis|san francisco|seattle|denver|boston|miami|atlanta|minneapolis|portland|las vegas|detroit|memphis|louisville|baltimore|milwaukee|albuquerque|tucson|fresno|sacramento|mesa|kansas city|omaha|raleigh|cleveland|virginia beach|colorado springs|miami|oakland|minneapolis|tulsa|tampa|arlington|new orleans|wichita|bakersfield|aurora|anaheim|santa ana|corpus christi|riverside|st\. louis|lexington|pittsburgh|anchorage|stockton|cincinnati|st\. paul|toledo|greensboro|newark|plano|henderson|lincoln|buffalo|fort wayne|jersey city|chula vista|orlando|st\. petersburg|norfolk|chandler|laredo|madison|durham|lubbock|winston-salem|garland|glendale|hialeah|reno|baton rouge|irvine|chesapeake|scottsdale|north las vegas|fremont|gilbert|san bernardino|birmingham|rochester|richmond|spokane|des moines|montgomery|modesto|fayetteville|tacoma|shreveport|akron|aurora|yonkers|huntington beach|little rock|columbus|glendale|grand rapids|salt lake city|tallahassee|huntsville|worcester|knoxville|newport news|brownsville|santa clarita|providence|garden grove|oceanside|chattanooga|fort lauderdale|rancho cucamonga|santa rosa|tempe|cape coral|oxnard|eugene|peoria|elk grove|salinas|ontario|corona|springfield|fort collins|jackson|alexandria|hayward|lancaster|salinas|palmdale|sunnyvale|pomona|escondido|kansas city|rockford|torrance|pasadena|paterson|joliet|bridgeport|mcallen|savannah|syracuse|surprise|roseville|cedar rapids|dayton|mesquite|columbia|inglewood|bellevue|fullerton|macon|thornton|west valley city|olathe|warren|hampton|sterling heights|kent|columbia|cary|santa clara|murfreesboro|concord|killeen|athens|peoria|surprise|denton|sioux falls|el monte|carrollton|west palm beach|clarksville|independence|fort wayne|hayward|thornton|macon|waterbury|el paso|fargo|arvada|lansing|elgin|clearwater|worcester|costa mesa|miami gardens|columbia|richmond|berkley|athens|ann arbor|cambridge|richmond|seattle|raleigh)\b/i,
  ]

  let location = ''
  let topic = kw

  for (const pattern of locationPatterns) {
    const match = kw.match(pattern)
    if (match) {
      location = match[0]
        .split(' ')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ')
      topic = kw.replace(pattern, '').replace(/\s+/g, ' ').trim()
      break
    }
  }

  if (!location) {
    const words = kw.trim().split(/\s+/)
    if (words.length > 1) {
      const last = words[words.length - 1]
      if (last.charAt(0) === last.charAt(0).toUpperCase() || words.length <= 3) {
        location = last.charAt(0).toUpperCase() + last.slice(1)
        topic = words.slice(0, -1).join(' ')
      }
    }
  }

  return { location: location || 'Not detected', topic: topic || kw }
}

function parseOutput(text: string): { analysis: string; article: string; schema: string } {
  const articleMarker = '# Full Article'
  const articleIdx = text.indexOf(articleMarker)

  if (articleIdx === -1) return { analysis: text.trim(), article: '', schema: '' }

  const analysis = text.slice(0, articleIdx).trim()
  const articleAndSchema = text.slice(articleIdx)

  // Find the last code block (the JSON-LD schema)
  const codeBlockRegex = /```[\w]*\n([\s\S]*?)```/g
  let lastMatch: RegExpExecArray | null = null
  let match: RegExpExecArray | null
  while ((match = codeBlockRegex.exec(articleAndSchema)) !== null) {
    lastMatch = match
  }

  let article = articleAndSchema.trim()
  let schema = ''

  if (lastMatch) {
    const schemaStart = articleAndSchema.lastIndexOf(lastMatch[0])
    article = articleAndSchema.slice(0, schemaStart).trim()
    schema = lastMatch[1].trim()
  }

  return { analysis, article, schema }
}

function CollapseSection({
  title,
  defaultOpen = false,
  children,
}: {
  title: string
  defaultOpen?: boolean
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border border-zinc-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-zinc-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500"
      >
        <span className="text-sm font-semibold text-zinc-800">{title}</span>
        <span className="text-zinc-400 text-sm ml-4 flex-shrink-0">{open ? '▲ Collapse' : '▼ Expand'}</span>
      </button>
      {open && (
        <div className="border-t border-zinc-100 px-6 py-5 bg-zinc-50">
          {children}
        </div>
      )}
    </div>
  )
}

export default function CS1DemoPage() {
  const [keyword, setKeyword] = useState('')
  const [output, setOutput] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [stageIndex, setStageIndex] = useState(-1)
  const [cardVisible, setCardVisible] = useState(true)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)
  const [carouselIndex, setCarouselIndex] = useState(0)
  const submittedKeyword = useRef('')

  // Cycle through stage cards while generating
  useEffect(() => {
    if (!isGenerating) return

    setStageIndex(0)
    setCardVisible(true)
    let index = 0

    const tick = () => {
      setCardVisible(false)
      setTimeout(() => {
        index++
        if (index <= stages.length) {
          setStageIndex(index)
          setCardVisible(true)
          if (index < stages.length) {
            setTimeout(tick, STAGE_DURATION)
          }
        }
      }, 300)
    }

    const timer = setTimeout(tick, STAGE_DURATION)
    return () => clearTimeout(timer)
  }, [isGenerating])

  // Keep carouselIndex in sync with auto-cycling during generation
  useEffect(() => {
    if (isGenerating && stageIndex >= 0) {
      setCarouselIndex(Math.min(stageIndex, allSlides.length - 1))
    }
  }, [stageIndex, isGenerating])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!keyword.trim() || isGenerating) return

    submittedKeyword.current = keyword.trim()
    setIsGenerating(true)
    setOutput('')
    setError('')
    setCopied(false)
    setStageIndex(-1)
    setCarouselIndex(0)

    try {
      const res = await fetch('/api/generate-article', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ keyword: keyword.trim() }),
      })

      if (!res.ok) {
        const text = await res.text()
        setError(text || 'Something went wrong. Try again.')
        setIsGenerating(false)
        return
      }

      const reader = res.body!.getReader()
      const decoder = new TextDecoder()

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const chunk = decoder.decode(value, { stream: true })
        setOutput((prev) => prev + chunk)
      }
    } catch {
      setError('Connection error. Check your network and try again.')
    } finally {
      setIsGenerating(false)
    }
  }

  async function handleCopy(text: string) {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const { location, topic } = parseKeyword(submittedKeyword.current || keyword)

  const stageDetails = (s: (typeof stages)[0] | typeof stage06, idx: number): string[] => {
    if (idx === 1 && 'details' in s) {
      return [
        `Location signal: ${location}`,
        `Topic/service signal: ${topic}`,
        'These signals govern SERP filtering and lateral context research',
      ]
    }
    return s.details
  }

  const parsedOutput = output ? parseOutput(output) : null

  return (
    <>
      <Nav />

      <main className="max-w-5xl mx-auto px-6 py-12 md:py-16">

        {/* Back link */}
        <Link
          href="/cs1"
          className="inline-block py-3 mb-8 text-sm text-zinc-500 hover:text-blue-600 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
        >
          ← Case Study 01
        </Link>

        {/* Header */}
        <div className="mb-6 max-w-prose">
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-3">
            Live Demo
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-4">
            AI SEO Content System
          </h1>
          <p className="text-base text-zinc-600 leading-relaxed">
            Enter a keyword and the system generates a full SEO analysis and article using Claude
            Sonnet.
          </p>
        </div>

        {/* How this works note */}
        <div className="mb-10 max-w-2xl border border-zinc-200 rounded-xl p-5 bg-zinc-50">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-2">
            How this demo works
          </p>
          <p className="text-sm text-zinc-600 leading-relaxed">
            The real CS1 system is interactive — you review and approve each stage before it
            advances. This demo runs the same methodology in a single automated pass. As the
            article generates, the cards below walk through each stage the full system would pause
            at, and show what you&apos;d normally see and decide there.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mb-10 max-w-2xl">
          <label htmlFor="keyword" className="block text-sm font-medium text-zinc-700 mb-2">
            Keyword
          </label>
          <div className="flex gap-3 items-stretch">
            <input
              id="keyword"
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="e.g. dry needling therapy Houston"
              maxLength={200}
              disabled={isGenerating}
              className="flex-1 border border-zinc-300 rounded-lg px-4 py-2.5 text-base text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-zinc-50 disabled:text-zinc-400"
            />
            <button
              type="submit"
              disabled={isGenerating || !keyword.trim()}
              className="px-6 py-2.5 bg-zinc-900 text-white text-sm font-medium rounded-lg hover:bg-zinc-700 transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 whitespace-nowrap"
            >
              {isGenerating ? 'Running…' : 'Generate'}
            </button>
          </div>
          <p className="mt-2 text-xs text-zinc-400">
            Generation takes 45–90 seconds. Limited to 3 runs per hour.
          </p>
        </form>

        {/* Error */}
        {error && (
          <div className="mb-6 max-w-2xl border-l-4 border-red-400 bg-red-50 rounded-r-xl px-5 py-4">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        {/* Unified carousel — auto-cycles during generation, manual control after */}
        {stageIndex >= 0 && (() => {
          const slide = allSlides[carouselIndex]
          const isLive = 'live' in slide && slide.live
          return (
            <div className="mb-10 max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-4">
                System stages
              </p>

              {/* Card */}
              <div
                className={`border rounded-xl p-6 transition-opacity duration-300 ${
                  isGenerating ? (cardVisible ? 'opacity-100' : 'opacity-0') : 'opacity-100'
                } ${isLive ? 'border-blue-300 bg-blue-50/40' : 'border-zinc-200'}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                    Stage {slide.number}
                  </span>
                  <span className="text-sm font-semibold text-zinc-900">{slide.name}</span>
                  {isLive && (
                    <span className="flex items-center gap-1.5 ml-auto text-xs font-semibold text-blue-600">
                      <span className={`w-1.5 h-1.5 rounded-full bg-blue-500 ${isGenerating ? 'animate-pulse' : ''}`} />
                      LIVE
                    </span>
                  )}
                </div>
                <p className="text-sm text-zinc-700 mb-3">{slide.what}</p>
                {stageDetails(slide, carouselIndex).length > 0 && (
                  <ul className="space-y-1 mb-4">
                    {stageDetails(slide, carouselIndex).map((d, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-zinc-500">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-zinc-300 flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="border-t border-zinc-100 pt-3 mt-3">
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    <span className="font-medium text-zinc-500">Full system: </span>
                    {slide.fullSystem}
                  </p>
                </div>
              </div>

              {/* Navigation: progress dots during generation, full controls after */}
              {isGenerating ? (
                <div className="flex justify-center gap-2 mt-4">
                  {allSlides.map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        i < carouselIndex ? 'bg-blue-500' : i === carouselIndex ? 'bg-blue-400' : 'bg-zinc-200'
                      }`}
                    />
                  ))}
                </div>
              ) : (
                <div className="flex items-center justify-between mt-4">
                  <button
                    onClick={() => setCarouselIndex((i) => Math.max(0, i - 1))}
                    disabled={carouselIndex === 0}
                    className="px-4 py-2 text-sm text-zinc-500 border border-zinc-200 rounded-lg hover:bg-zinc-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    ← Prev
                  </button>
                  <div className="flex gap-2">
                    {allSlides.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCarouselIndex(i)}
                        className={`w-2 h-2 rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                          i === carouselIndex ? 'bg-blue-500' : 'bg-zinc-200 hover:bg-zinc-400'
                        }`}
                        aria-label={`Go to stage ${allSlides[i].number}`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => setCarouselIndex((i) => Math.min(allSlides.length - 1, i + 1))}
                    disabled={carouselIndex === allSlides.length - 1}
                    className="px-4 py-2 text-sm text-zinc-500 border border-zinc-200 rounded-lg hover:bg-zinc-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    Next →
                  </button>
                </div>
              )}
            </div>
          )
        })()}

        {/* Streaming indicator (during generation, after cards phase) */}
        {isGenerating && stageIndex >= stages.length && (
          <div className="mb-6 max-w-2xl flex items-center gap-2 text-sm text-zinc-500">
            <span className="animate-pulse text-blue-500">▌</span>
            Generating article…
          </div>
        )}

        {/* Structured output */}
        {parsedOutput && (parsedOutput.analysis || parsedOutput.article || parsedOutput.schema) && (
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center justify-between mb-1">
              <p className="text-xs font-medium uppercase tracking-widest text-zinc-400">
                {isGenerating ? 'Streaming output…' : 'Output'}
              </p>
              {!isGenerating && (
                <button
                  onClick={() => handleCopy(output)}
                  className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors px-3 py-1.5 border border-zinc-200 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  {copied ? 'Copied!' : 'Copy all'}
                </button>
              )}
            </div>

            {/* Section 1 — Analysis + Blueprint */}
            {parsedOutput.analysis && (
              <CollapseSection title="SEO Analysis & Optimization Blueprint" defaultOpen={false}>
                <pre className="whitespace-pre-wrap break-words text-sm leading-relaxed text-zinc-600 font-mono">
                  {parsedOutput.analysis}
                </pre>
              </CollapseSection>
            )}

            {/* Section 2 — Article */}
            {parsedOutput.article && (
              <CollapseSection title="Full Article" defaultOpen={true}>
                <pre className="whitespace-pre-wrap break-words text-sm leading-relaxed text-zinc-700 font-mono">
                  {parsedOutput.article}
                  {isGenerating && !parsedOutput.schema && (
                    <span className="animate-pulse text-blue-500">▌</span>
                  )}
                </pre>
              </CollapseSection>
            )}

            {/* Section 3 — Schema */}
            {parsedOutput.schema && (
              <CollapseSection title="JSON-LD Schema" defaultOpen={false}>
                <pre className="whitespace-pre-wrap break-words text-sm leading-relaxed text-zinc-600 font-mono bg-zinc-100 rounded-lg p-4 overflow-x-auto">
                  {parsedOutput.schema}
                </pre>
              </CollapseSection>
            )}

            {/* Fallback: raw output while streaming hasn't produced parseable sections yet */}
            {isGenerating && !parsedOutput.article && parsedOutput.analysis && (
              <div className="border border-zinc-200 rounded-xl bg-zinc-50 overflow-hidden">
                <pre className="whitespace-pre-wrap break-words px-6 py-6 text-sm leading-relaxed text-zinc-700 font-mono overflow-x-auto">
                  {output}
                  <span className="animate-pulse text-blue-500">▌</span>
                </pre>
              </div>
            )}
          </div>
        )}

        {/* Context note */}
        <p className="mt-10 text-xs text-zinc-400 max-w-prose">
          Running Claude Sonnet via the Anthropic API. Output is unique to each keyword and each
          run.{' '}
          <Link href="/cs1" className="underline hover:text-zinc-600 transition-colors">
            Read the case study →
          </Link>
        </p>

      </main>

      <Footer />
    </>
  )
}
