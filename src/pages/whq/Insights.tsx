import { Clock, ArrowRight } from 'lucide-react'

const featured = {
  title: 'The 2025 State of Enterprise AI: What\'s Actually Working',
  category: 'AI & Automation',
  readTime: '12 min read',
  date: 'Jan 20, 2025',
  excerpt: 'After analyzing 50 enterprise AI rollouts across African and global markets, here\'s what separates the 20% that delivered ROI from the 80% that didn\'t.',
}

const articles = [
  { title: 'Why Your OKRs Keep Failing (And What To Fix)', category: 'Operations', readTime: '8 min', date: 'Jan 15, 2025' },
  { title: 'Building a Remote-First Culture That Actually Performs', category: 'Leadership', readTime: '6 min', date: 'Jan 10, 2025' },
  { title: 'CX Metrics That Actually Predict Revenue', category: 'Customer Experience', readTime: '10 min', date: 'Jan 5, 2025' },
  { title: 'The Lean Startup Approach to Enterprise Transformation', category: 'Strategy', readTime: '7 min', date: 'Dec 28, 2024' },
  { title: 'How African Enterprises Are Outpacing Global Peers on Productivity', category: 'Reports', readTime: '14 min', date: 'Dec 20, 2024' },
  { title: 'The Manager\'s Playbook for AI-Augmented Teams', category: 'AI & Automation', readTime: '9 min', date: 'Dec 15, 2024' },
]

const catColors: Record<string, [string, string]> = {
  'AI & Automation': ['rgba(16,185,129,0.12)', '#065F46'],
  'Operations': ['rgba(11,60,45,0.08)', '#0B3C2D'],
  'Leadership': ['rgba(217,119,6,0.12)', '#92400E'],
  'Customer Experience': ['rgba(59,130,246,0.1)', '#1D4ED8'],
  'Strategy': ['rgba(139,92,246,0.1)', '#5B21B6'],
  'Reports': ['rgba(239,68,68,0.1)', '#B91C1C'],
}

export default function WHQInsights() {
  return (
    <div style={{ backgroundColor: 'var(--whq-bg)', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>
      <div className="relative pt-32 pb-12 px-6 overflow-hidden">
        <div className="pointer-events-none absolute -top-16 -right-16 w-[400px] h-[400px] rounded-full" style={{ background: '#D97706', filter: 'blur(120px)', opacity: 0.15 }} />
        <div className="max-w-[1440px] mx-auto">
          <h1 className="font-display font-700 text-[clamp(2rem,4vw,3.5rem)] leading-tight mb-4" style={{ color: '#111827' }}>Insights</h1>
          <p className="text-lg" style={{ color: '#6B7280' }}>Research, frameworks, and field notes from the front lines of enterprise transformation.</p>
        </div>
      </div>

      <section className="px-6 pb-20">
        <div className="max-w-[1440px] mx-auto">
          {/* Featured */}
          <div className="mb-10 p-8 lg:p-12 rounded-2xl relative overflow-hidden" style={{ backgroundColor: '#0B3C2D', border: '1px solid rgba(16,185,129,0.2)' }}>
            <div className="pointer-events-none absolute -bottom-16 -right-16 w-64 h-64 rounded-full" style={{ background: '#D97706', filter: 'blur(80px)', opacity: 0.2 }} />
            <div className="relative z-10 max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold" style={{ backgroundColor: 'rgba(16,185,129,0.2)', color: '#10B981' }}>{featured.category}</span>
                <span className="text-xs flex items-center gap-1" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  <Clock className="w-3 h-3" /> {featured.readTime}
                </span>
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>{featured.date}</span>
              </div>
              <h2 className="font-display font-700 text-[clamp(1.5rem,3vw,2.5rem)] text-white leading-tight mb-4">{featured.title}</h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.65)' }}>{featured.excerpt}</p>
              <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm" style={{ backgroundColor: '#1DA54A', color: '#0B3C2D', fontFamily: 'var(--font-display)' }}>
                Read Article <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Article grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {articles.map(a => {
              const [bg, color] = catColors[a.category] || ['rgba(0,0,0,0.05)', '#111827']
              return (
                <div key={a.title} className="p-6 rounded-2xl group cursor-pointer transition-all hover:-translate-y-0.5" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E1D8' }}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium" style={{ backgroundColor: bg, color }}>{a.category}</span>
                    <span className="text-xs flex items-center gap-1" style={{ color: '#9CA3AF' }}>
                      <Clock className="w-3 h-3" /> {a.readTime}
                    </span>
                  </div>
                  <h3 className="font-display font-600 text-base leading-snug mb-3" style={{ color: '#111827' }}>{a.title}</h3>
                  <p className="text-xs" style={{ color: '#9CA3AF' }}>{a.date}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
