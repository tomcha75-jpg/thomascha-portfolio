import Anthropic from '@anthropic-ai/sdk'
import { NextRequest } from 'next/server'

const client = new Anthropic()

// Simple in-memory rate limiter — 3 requests per IP per hour
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT = 3
const WINDOW_MS = 60 * 60 * 1000

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return true
  }
  if (entry.count >= RATE_LIMIT) return false
  entry.count++
  return true
}

function buildPrompt(keyword: string): string {
  return `You are an AI SEO content production system. Your methodology encodes how tools like SurferSEO and WriteWave evaluate search rankings: content depth, LSI semantic coverage, heading structure, word count benchmarks, FAQ schema, and local signal specificity where relevant.

Keyword: "${keyword}"

Produce the following output in this exact order:

---

# SEO Analysis

Competitive benchmark for this keyword type:
- Estimated target word count: [give a specific range based on typical top-ranking pages for this topic]
- Recommended heading structure: [describe the H1/H2/H3 pattern]
- LSI and semantic terms to weave throughout: [list 10-12 specific terms]
- Recommended schema type: [Article / FAQ / LocalBusiness / HowTo / Service — whichever fits]
- Suggested URL slug: /[slug]

---

# Optimization Blueprint

3 Title Tag Options (50-60 characters each):
1.
2.
3.

3 Meta Description Options (140-160 characters each):
1.
2.
3.

---

# Full Article

Write a complete, fully optimized SEO article for the keyword "${keyword}".

Requirements:
- 2,000-2,500 words
- One H1 at the top incorporating the keyword naturally
- 5-7 H2 sections covering the main subtopics a reader would expect
- H3 subsections where appropriate
- LSI terms integrated naturally throughout, not forced
- [IMAGE: brief description] placeholders where images would be inserted
- [INTERNAL LINK: topic] suggestions where internal links would go
- [EXTERNAL LINK: source type] suggestions for citations or outbound links
- A lateral context detail — one local, demographic, or contextual observation specific to this keyword that signals genuine familiarity rather than templated content
- FAQ section at the end with 5 questions and complete answers

After the article and FAQ, include the raw JSON-LD FAQ schema in a code block, copy-paste ready.

Write the full article now.`
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown'

  if (!checkRateLimit(ip)) {
    return new Response('Rate limit reached. You can generate 3 articles per hour.', {
      status: 429,
    })
  }

  let keyword: string
  try {
    const body = await req.json()
    keyword = typeof body.keyword === 'string' ? body.keyword.trim() : ''
  } catch {
    return new Response('Invalid request body.', { status: 400 })
  }

  if (!keyword || keyword.length < 2) {
    return new Response('Keyword must be at least 2 characters.', { status: 400 })
  }

  if (keyword.length > 200) {
    return new Response('Keyword must be under 200 characters.', { status: 400 })
  }

  const stream = client.messages.stream({
    model: 'claude-sonnet-4-6',
    max_tokens: 4096,
    messages: [{ role: 'user', content: buildPrompt(keyword) }],
  })

  const readable = new ReadableStream({
    async start(controller) {
      try {
        for await (const chunk of stream) {
          if (
            chunk.type === 'content_block_delta' &&
            chunk.delta.type === 'text_delta'
          ) {
            controller.enqueue(new TextEncoder().encode(chunk.delta.text))
          }
        }
      } finally {
        controller.close()
      }
    },
    cancel() {
      stream.abort()
    },
  })

  return new Response(readable, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-cache, no-store',
      'X-Accel-Buffering': 'no',
    },
  })
}
