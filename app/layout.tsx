import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Thomas Cha — AI Implementation',
    template: '%s — Thomas Cha',
  },
  description:
    'AI implementation portfolio: four case studies in AI-directed systems — SEO content production, job fit evaluation, a full-stack Ontario teacher app, and a file-based knowledge architecture. No code written.',
  metadataBase: new URL('https://thomascha.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    siteName: 'Thomas Cha',
    locale: 'en_CA',
    images: [
      {
        url: '/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Thomas Cha — AI Implementation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thomas Cha — AI Implementation',
    description: 'Four case studies in AI-directed systems. No code written.',
    images: ['/og-default.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en-CA"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
