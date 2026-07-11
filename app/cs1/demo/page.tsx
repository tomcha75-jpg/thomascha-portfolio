'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const STAGE_DURATION = 4000 // ms per card

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

function parseKeyword(kw: string) {
  // Common US/CA city names as a rough signal detector
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

  // Fallback: last word as potential location if nothing matched
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

export default function CS1DemoPage() {
  const [keyword, setKeyword] = useState('')
  const [output, setOutput] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [stageIndex, setStageIndex] = useState(-1)
  const [cardVisible, setCardVisible] = useState(true)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)
  const outputRef = useRef<HTMLPreElement>(null)
  const submittedKeyword = useRef('')

  // Cycle through stage cards while generating
  useEffect(() => {
    if (!isGenerating) return

    setStageIndex(0)
    setCardVisible(true)
    let index = 0

    const tick = () => {
      // Fade out
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
      }, 300) // fade duration
    }

    const timer = setTimeout(tick, STAGE_DURATION)
    return () => clearTimeout(timer)
  }, [isGenerating])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!keyword.trim() || isGenerating) return

    submittedKeyword.current = keyword.trim()
    setIsGenerating(true)
    setOutput('')
    setError('')
    setCopied(false)
    setStageIndex(-1)

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

  async function handleCopy() {
    if (!output) return
    await navigator.clipboard.writeText(output)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const { location, topic } = parseKeyword(submittedKeyword.current || keyword)
  const isShowingCards = isGenerating && stageIndex >= 0 && stageIndex < stages.length
  const isPastCards = isGenerating && stageIndex >= stages.length

  const currentStage = isShowingCards ? stages[stageIndex] : null

  // Inject dynamic keyword details into stage 02
  const stageDetails = (s: (typeof stages)[0], idx: number): string[] => {
    if (idx === 1) {
      return [
        `Location signal: ${location}`,
        `Topic/service signal: ${topic}`,
        'These signals govern SERP filtering and lateral context research',
      ]
    }
    return s.details
  }

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

        {/* Stage cards */}
        {(isShowingCards || isPastCards) && (
          <div className="mb-8 max-w-2xl">
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs font-medium uppercase tracking-widest text-zinc-400">
                System stages
              </p>
              {/* Progress dots */}
              <div className="flex gap-1.5">
                {stages.map((_, i) => (
                  <div
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                      i < stageIndex ? 'bg-blue-500' : i === stageIndex ? 'bg-blue-400' : 'bg-zinc-200'
                    }`}
                  />
                ))}
              </div>
            </div>

            {isShowingCards && currentStage && (
              <div
                className={`border rounded-xl p-6 transition-opacity duration-300 ${
                  cardVisible ? 'opacity-100' : 'opacity-0'
                } ${currentStage.live ? 'border-blue-300 bg-blue-50/40' : 'border-zinc-200'}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                    Stage {currentStage.number}
                  </span>
                  <span className="text-sm font-semibold text-zinc-900">{currentStage.name}</span>
                  {currentStage.live && (
                    <span className="flex items-center gap-1.5 ml-auto text-xs font-semibold text-blue-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                      LIVE
                    </span>
                  )}
                </div>
                <p className="text-sm text-zinc-700 mb-3">{currentStage.what}</p>
                {stageDetails(currentStage, stageIndex).length > 0 && (
                  <ul className="space-y-1 mb-4">
                    {stageDetails(currentStage, stageIndex).map((d, i) => (
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
                    {currentStage.fullSystem}
                  </p>
                </div>
              </div>
            )}

            {isPastCards && !output && (
              <div className="border border-zinc-200 rounded-xl p-6">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                    Stage 06
                  </span>
                  <span className="text-sm font-semibold text-zinc-900">Writing article</span>
                  <span className="animate-pulse text-zinc-400 text-sm">▌</span>
                </div>
                <p className="mt-3 text-sm text-zinc-500">
                  All stages complete. Article output will appear below as it streams in.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Output */}
        {(output || (isPastCards && output)) && (
          <div className="max-w-2xl">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-medium uppercase tracking-widest text-zinc-400">
                {isGenerating ? 'Streaming output…' : 'Output'}
              </p>
              {output && !isGenerating && (
                <button
                  onClick={handleCopy}
                  className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors px-3 py-1.5 border border-zinc-200 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  {copied ? 'Copied!' : 'Copy output'}
                </button>
              )}
            </div>
            <div className="border border-zinc-200 rounded-xl bg-zinc-50 overflow-hidden">
              <pre
                ref={outputRef}
                className="whitespace-pre-wrap break-words px-6 py-6 text-sm leading-relaxed text-zinc-700 font-mono overflow-x-auto"
              >
                {output}
                {isGenerating && <span className="animate-pulse text-blue-500">▌</span>}
              </pre>
            </div>
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
