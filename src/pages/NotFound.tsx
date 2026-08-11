import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div style={{ backgroundColor: 'var(--whq-bg)', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>
      <div className="pt-40 pb-24 px-6 text-center">
        <div className="max-w-[560px] mx-auto">
          <h1 className="font-display font-700 text-[clamp(2rem,4vw,3.5rem)] leading-tight mb-4" style={{ color: '#191919' }}>
            Page not found.
          </h1>
          <p className="text-base sm:text-lg mb-8" style={{ color: '#545454' }}>
            The page you're looking for doesn't exist or has moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
            style={{ backgroundColor: '#0B3C2D', color: '#FFFFFF', fontFamily: 'var(--font-display)' }}
          >
            Go to homepage <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
