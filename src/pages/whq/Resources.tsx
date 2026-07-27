import { useState } from 'react'
import { Link } from 'react-router-dom'

const categories = ['All', 'Guide', 'Report', 'Case Study', 'Article', 'Framework']

const resources = [
  { title: 'The AI-Ready Organisation: A Practical Guide for HR Leaders', category: 'Guide', date: 'Jul 2025', readTime: '12 min', desc: 'A step-by-step guide to assessing, planning, and implementing AI-readiness across your organisation.' },
  { title: 'State of Workforce Transformation in Nigeria 2025', category: 'Report', date: 'Jun 2025', readTime: '24 min', desc: 'Annual benchmarking report on L&D investment, capability gaps, and transformation priorities across Nigerian organisations.' },
  { title: 'How TresBonTech reduced manager churn by 40% in one year', category: 'Case Study', date: 'May 2025', readTime: '8 min', desc: 'The full story of a 12-month leadership development programme and its measurable impact on retention.' },
  { title: 'Building a capability framework that actually gets used', category: 'Guide', date: 'May 2025', readTime: '10 min', desc: 'Practical guidance on designing capability frameworks that embed into performance cycles, not just HR documentation.' },
  { title: 'Why AI training fails at the team level', category: 'Article', date: 'Apr 2025', readTime: '6 min', desc: 'Six structural reasons why AI upskilling programmes stall — and what L&D leaders can do differently.' },
  { title: 'The 5-Box Change Readiness Model', category: 'Framework', date: 'Apr 2025', readTime: '7 min', desc: 'A structured approach to assessing organisational readiness for major transformation initiatives.' },
  { title: 'Posh Accent: designing an L&D function from scratch', category: 'Case Study', date: 'Mar 2025', readTime: '9 min', desc: 'How a fast-scaling retail company built a complete L&D function over eight months with WorkplaceHQ.' },
  { title: 'Measuring L&D ROI: a practical framework', category: 'Framework', date: 'Feb 2025', readTime: '8 min', desc: 'A four-stage model for connecting learning activity to business outcomes — built for resource-constrained HR teams.' },
  { title: 'The six habits of high-performing African leadership teams', category: 'Article', date: 'Jan 2025', readTime: '7 min', desc: 'Pattern analysis from 50 WorkplaceHQ leadership engagements reveals what the best teams consistently do differently.' },
]

export default function WHQResources() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = resources.filter((r) => {
    const matchCat = activeCategory === 'All' || r.category === activeCategory
    const matchSearch = !search || r.title.toLowerCase().includes(search.toLowerCase()) || r.desc.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <main>
      <section className="bg-paper py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-5 text-whq-green" style={{ fontFamily: 'Inter, sans-serif' }}>Resources</p>
          <h1 className="text-5xl font-bold text-ink mb-6" style={{ letterSpacing: '-0.03em' }}>Guides, reports, and frameworks.</h1>
          <p className="text-xl max-w-xl leading-relaxed" style={{ color: '#545454' }}>
            Practical resources for HR, L&D, and operations leaders navigating workforce transformation.
          </p>
        </div>
      </section>

      <section className="bg-paper pb-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Search + filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-10 pb-8" style={{ borderBottom: '1px solid #E6E5E0' }}>
            <input
              type="text"
              placeholder="Search resources..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 px-4 py-3 text-[14px] bg-paper outline-none"
              style={{ fontFamily: 'DM Sans, sans-serif', border: '1px solid #E6E5E0', color: '#191919' }}
            />
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className="text-[12px] font-medium px-4 py-2.5 transition-colors"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    background: activeCategory === c ? '#191919' : '#E6E5E0',
                    color: activeCategory === c ? '#F4F3EF' : '#545454',
                    borderRadius: '3px',
                  }}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((r) => (
              <article key={r.title} className="group cursor-pointer" style={{ borderTop: '2px solid #E6E5E0', paddingTop: '1.5rem' }}>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-[11px] font-semibold tracking-wider uppercase"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      color: r.category === 'Case Study' ? '#1DA54A' : '#888',
                    }}
                  >
                    {r.category}
                  </span>
                  <span className="text-[12px]" style={{ color: '#aaa', fontFamily: 'Inter, sans-serif' }}>{r.readTime}</span>
                </div>
                <h3 className="text-[1rem] font-semibold text-ink leading-snug mb-3 group-hover:text-whq-green transition-colors" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {r.title}
                </h3>
                <p className="text-[13px] leading-relaxed mb-4" style={{ color: '#545454' }}>{r.desc}</p>
                <p className="text-[12px]" style={{ color: '#aaa', fontFamily: 'Inter, sans-serif' }}>{r.date}</p>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-slate py-12 text-center" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              No resources match your search.
            </p>
          )}
        </div>
      </section>

      <section className="bg-ink py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold text-paper mb-3" style={{ letterSpacing: '-0.03em' }}>Want this thinking applied to your organisation?</h2>
            <p style={{ color: '#6a6a6a' }}>Every resource here represents a real engagement methodology.</p>
          </div>
          <Link to="/contact" className="flex-shrink-0 text-[13px] font-semibold bg-whq-green text-paper px-8 py-4 hover:bg-whq-deep transition-colors" style={{ fontFamily: 'Inter, sans-serif', borderRadius: '3px' }}>
            Get in touch
          </Link>
        </div>
      </section>
    </main>
  )
}
