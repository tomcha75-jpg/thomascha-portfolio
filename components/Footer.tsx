export default function Footer() {
  return (
    <footer id="contact" className="border-t border-zinc-200">
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
  )
}
