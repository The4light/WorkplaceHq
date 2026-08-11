import { useParams, Link } from 'react-router-dom'
import { Clock, ArrowLeft, ArrowRight } from 'lucide-react'
import { insightsPosts, categoryColorMap } from '../../data/insightsPosts'

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const post = insightsPosts.find(p => p.slug === slug)

  if (!post) return (
    <div className="flex flex-col items-center justify-center gap-4 px-6" style={{ backgroundColor: 'var(--whq-bg)', minHeight: '100vh' }}>
      <h1 className="font-display font-semibold text-2xl" style={{ color: '#191919' }}>Article not found.</h1>
      <p className="text-sm" style={{ color: '#545454' }}>This article does not exist or has been moved.</p>
      <Link to="/insights" className="text-sm font-semibold" style={{ color: '#1DA54A' }}>← Back to Insights</Link>
    </div>
  )

  const colors = categoryColorMap[post.category] ?? { bg: 'rgba(0,0,0,0.05)', text: '#191919' }

  return (
    <div style={{ backgroundColor: 'var(--whq-bg)', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>
      <div className="max-w-[1440px] mx-auto px-6 pt-32 pb-20">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm mb-10" style={{ color: '#9CA3AF' }}>
          <Link to="/insights" className="hover:underline" style={{ color: '#1DA54A' }}>← Insights</Link>
          <span>·</span>
          <span>{post.category}</span>
        </div>

        {/* Hero */}
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: colors.bg, color: colors.text }}>{post.category}</span>
            {post.featured && <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#1DA54A' }}>Featured</span>}
          </div>

          <h1 className="font-display font-bold leading-tight mb-6" style={{ fontSize: 'clamp(1.75rem,3.5vw,3rem)', color: '#191919' }}>
            {post.title}
          </h1>

          <p className="text-lg leading-relaxed italic pl-4 mb-8" style={{ color: '#545454', borderLeft: '4px solid #1DA54A' }}>
            {post.excerpt}
          </p>

          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0" style={{ backgroundColor: '#0B3C2D' }}>WT</div>
            <div>
              <p className="text-sm font-medium" style={{ color: '#191919' }}>{post.author}</p>
              <div className="flex items-center gap-2 text-xs" style={{ color: '#9CA3AF' }}>
                <span>{post.date}</span>
                <span>·</span>
                <Clock className="w-3 h-3" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          <hr className="mb-10" style={{ borderColor: '#E6E5E0' }} />

          {/* Article image — unique per post */}
          {/* TODO: Replace with client-supplied image when available */}
          <img
            src={post.image}
            alt={post.title}
            className="w-full rounded-2xl mb-10 object-cover"
            style={{ height: '420px' }}
          />
        </div>

        {/* Body */}
        <div className="max-w-2xl mx-auto">
          <p className="text-base mb-6" style={{ color: '#545454', lineHeight: '1.85' }}>{post.body}</p>

          <div className="rounded-lg p-5 mt-4" style={{ backgroundColor: 'rgba(29,165,74,0.06)', borderLeft: '3px solid #1DA54A' }}>
            <p className="text-sm leading-relaxed" style={{ color: '#0B3C2D' }}>
              This article is being prepared by the WorkplaceHQ editorial team. Full content will be available soon.
            </p>
          </div>

          <div className="flex justify-between items-center mt-12 pt-8" style={{ borderTop: '1px solid #E6E5E0' }}>
            <Link to="/insights" className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: '#1DA54A' }}>
              <ArrowLeft className="w-4 h-4" /> Back to Insights
            </Link>
            <Link to="/services" className="flex items-center gap-1.5 text-sm" style={{ color: '#545454' }}>
              Explore our Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
