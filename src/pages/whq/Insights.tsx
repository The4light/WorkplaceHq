import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Clock, ArrowRight } from 'lucide-react'
import { insightsPosts, categoryColorMap } from '../../data/insightsPosts'

const categories = ['All', ...Array.from(new Set(insightsPosts.map(p => p.category)))]

function InitialsAvatar({ size }: { size: 'sm' | 'xs' }) {
  const dims = size === 'sm' ? 'w-8 h-8 text-xs' : 'w-6 h-6 text-[10px]'
  return (
    <div
      className={`${dims} rounded-full flex items-center justify-center font-display font-700 shrink-0`}
      style={{ backgroundColor: '#0B3C2D', color: '#FFFFFF' }}
    >
      WT
    </div>
  )
}

export default function WHQInsights() {
  const [activeCategory, setActiveCategory] = useState('All')

  const featured = insightsPosts.find(p => p.featured)
  const articles = insightsPosts.filter(p => !p.featured)
  const filtered = activeCategory === 'All' ? articles : articles.filter(a => a.category === activeCategory)

  return (
    <div style={{ backgroundColor: 'var(--whq-bg)', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>
      {/* Masthead */}
      <div className="pt-32 pb-10 px-6 text-center" style={{ borderBottom: '1px solid #E6E5E0' }}>
        <div className="max-w-[720px] mx-auto">
          <span
            className="text-xs font-bold uppercase tracking-widest mb-3 block"
            style={{ color: '#1DA54A', fontFamily: 'var(--font-display)' }}
          >
            WorkplaceHQ Journal
          </span>
          <h1 className="font-display font-700 text-[clamp(2.25rem,4.5vw,3.75rem)] leading-tight mb-4" style={{ color: '#191919' }}>
            Insights
          </h1>
          <p className="text-base sm:text-lg" style={{ color: '#545454' }}>
            Perspectives on workforce transformation, AI adoption, and building high-performing teams across Africa.
          </p>
        </div>
      </div>

      {/* Category filter — sticky sub-nav feel */}
      <div className="px-6 py-4" style={{ borderBottom: '1px solid #E6E5E0', backgroundColor: 'var(--whq-bg)' }}>
        <div className="max-w-[1000px] mx-auto flex flex-wrap justify-center gap-2">
          {categories.map(c => {
            const isActive = activeCategory === c
            return (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition-all duration-150"
                style={{
                  backgroundColor: isActive ? '#0B3C2D' : 'transparent',
                  color: isActive ? '#FFFFFF' : '#545454',
                  border: isActive ? 'none' : '1px solid #E6E5E0',
                }}
              >
                {c}
              </button>
            )
          })}
        </div>
      </div>

      <div className="max-w-[900px] mx-auto px-6 py-14">
        {/* Featured post — editorial style, no card chrome */}
        {featured && (
          <Link to={`/insights/${featured.slug}`} className="block mb-16 cursor-pointer group">
            <article>
              <div className="rounded-2xl overflow-hidden mb-6" style={{ border: '1px solid #E6E5E0' }}>
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  style={{ height: '420px' }}
                />
              </div>

              <div className="flex items-center gap-3 mb-4">
                <span
                  className="px-2.5 py-0.5 rounded-full text-xs font-semibold"
                  style={{
                    backgroundColor: categoryColorMap[featured.category]?.bg ?? 'rgba(0,0,0,0.05)',
                    color: categoryColorMap[featured.category]?.text ?? '#111827',
                  }}
                >
                  {featured.category}
                </span>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#1DA54A' }}>
                  Featured
                </span>
              </div>

              <h2 className="font-display font-700 text-[clamp(1.75rem,3.5vw,2.75rem)] leading-tight mb-4 transition-colors duration-150 group-hover:text-[#1DA54A]" style={{ color: '#191919' }}>
                {featured.title}
              </h2>

              <p className="text-lg leading-relaxed mb-6" style={{ color: '#545454' }}>
                {featured.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <InitialsAvatar size="sm" />
                  <div>
                    <div className="text-sm font-medium" style={{ color: '#191919' }}>{featured.author}</div>
                    <div className="flex items-center gap-2 text-xs" style={{ color: '#9CA3AF' }}>
                      <span>{featured.date}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {featured.readTime}
                      </span>
                    </div>
                  </div>
                </div>
                <span
                  className="inline-flex items-center gap-1 text-sm font-semibold"
                  style={{ color: '#1DA54A' }}
                >
                  Read Article <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </article>
          </Link>
        )}

        {/* Divider label */}
        <div className="flex items-center gap-4 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest whitespace-nowrap" style={{ color: '#9CA3AF' }}>
            Latest Articles
          </span>
          <div className="h-px w-full" style={{ backgroundColor: '#E6E5E0' }} />
        </div>

        {/* Article list — horizontal blog rows */}
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-sm" style={{ color: '#9CA3AF' }}>No articles in this category yet. Try a different filter.</p>
          </div>
        ) : (
          <div className="flex flex-col">
            {filtered.map((a, i) => {
              const colors = categoryColorMap[a.category] ?? { bg: 'rgba(0,0,0,0.05)', text: '#111827' }
              return (
                <Link
                  key={a.slug}
                  to={`/insights/${a.slug}`}
                  className="py-8 flex flex-col sm:flex-row gap-6 cursor-pointer group"
                  style={{ borderTop: i === 0 ? 'none' : '1px solid #E6E5E0' }}
                >
                  <div className="sm:w-56 shrink-0 rounded-xl overflow-hidden" style={{ border: '1px solid #E6E5E0' }}>
                    <img
                      src={a.image}
                      alt={a.title}
                      className="w-full h-40 sm:h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded-full text-xs font-medium" style={{ backgroundColor: colors.bg, color: colors.text }}>
                        {a.category}
                      </span>
                      <span className="text-xs flex items-center gap-1" style={{ color: '#9CA3AF' }}>
                        <Clock className="w-3 h-3" /> {a.readTime}
                      </span>
                    </div>

                    <h3
                      className="font-display font-700 text-xl leading-snug mb-2 transition-colors duration-150 group-hover:text-[#1DA54A]"
                      style={{ color: '#191919' }}
                    >
                      {a.title}
                    </h3>

                    <p className="text-sm leading-relaxed mb-4 line-clamp-2" style={{ color: '#545454' }}>
                      {a.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <InitialsAvatar size="xs" />
                        <span className="text-xs" style={{ color: '#545454' }}>{a.author}</span>
                        <span className="text-xs" style={{ color: '#9CA3AF' }}>· {a.date}</span>
                      </div>
                      <span
                        className="inline-flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                        style={{ color: '#1DA54A' }}
                      >
                        Read <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
