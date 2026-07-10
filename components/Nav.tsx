'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      aria-label="Main navigation"
      className={`sticky top-0 z-50 w-full border-b transition-[background-color,border-color] duration-200 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-sm border-zinc-200'
          : 'bg-white border-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-semibold text-zinc-900 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <span className="hidden sm:inline">Thomas Cha</span>
          <span className="sm:hidden">TC</span>
        </Link>
        <div className="flex items-center gap-6">
          <a
            href="#work"
            className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors duration-200 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            Work
          </a>
          <a
            href="#contact"
            className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors duration-200 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}
