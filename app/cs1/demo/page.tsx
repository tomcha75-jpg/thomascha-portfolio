'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function CS1DemoPage() {
  const [keyword, setKeyword] = useState('')
  const [output, setOutput] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)
  const outputRef = useRef<HTMLPreElement>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!keyword.trim() || isGenerating) return

    setIsGenerating(true)
    setOutput('')
    setError('')
    setCopied(false)

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
        outputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
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
        <div className="mb-10 max-w-prose">
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-3">
            Live Demo
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-4">
            AI SEO Content System
          </h1>
          <p className="text-base text-zinc-600 leading-relaxed">
            Enter any keyword. The system applies the CS1 methodology — encoding SurferSEO and
            WriteWave ranking factors into a structured prompt — and generates a full SEO analysis,
            optimization blueprint, and ~2,500-word article with FAQ content and schema markup. This
            is the same system described in the case study, running live.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mb-10 max-w-2xl">
          <label
            htmlFor="keyword"
            className="block text-sm font-medium text-zinc-700 mb-2"
          >
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
              {isGenerating ? 'Generating…' : 'Generate'}
            </button>
          </div>
          <p className="mt-2 text-xs text-zinc-400">
            Generation takes 30–60 seconds. Limited to 3 runs per hour.
          </p>
        </form>

        {/* Error */}
        {error && (
          <div className="mb-6 max-w-2xl border-l-4 border-red-400 bg-red-50 rounded-r-xl px-5 py-4">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        {/* Output */}
        {(output || isGenerating) && (
          <div className="relative">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-medium uppercase tracking-widest text-zinc-400">
                {isGenerating ? 'Generating…' : 'Output'}
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
              {isGenerating && !output && (
                <div className="px-6 py-8">
                  <p className="text-sm text-zinc-500 animate-pulse">
                    Running SEO analysis and generating article…
                  </p>
                </div>
              )}
              {output && (
                <pre
                  ref={outputRef}
                  className="whitespace-pre-wrap break-words px-6 py-6 text-sm leading-relaxed text-zinc-700 font-mono overflow-x-auto"
                >
                  {output}
                  {isGenerating && (
                    <span className="animate-pulse text-blue-500">▌</span>
                  )}
                </pre>
              )}
            </div>
          </div>
        )}

        {/* Context note */}
        <p className="mt-10 text-xs text-zinc-400 max-w-prose">
          This demo runs the CS1 SEO prompt methodology live using Claude Sonnet. Output is unique
          to each keyword and each run.{' '}
          <Link
            href="/cs1"
            className="underline hover:text-zinc-600 transition-colors"
          >
            Read the case study →
          </Link>
        </p>

      </main>

      <Footer />
    </>
  )
}
