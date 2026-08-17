import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Clock, ArrowLeft, ArrowRight } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { insightsPosts, categoryColorMap, InsightPost } from '../../data/insightsPosts'
import { supabase } from '../../lib/supabase'

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const [post, setPost] = useState<InsightPost | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    async function loadArticle() {
      if (!slug) return
      setLoading(true)

      // 1. Check local static posts array first
      const staticMatch = insightsPosts.find((p) => p.slug === slug)
      if (staticMatch) {
        setPost({
          ...staticMatch,
          body: staticMatch.body || staticMatch.content || '',
        })
        setLoading(false)
        return
      }

      // 2. Fetch directly from Supabase by slug
      try {
        const { data, error } = await supabase
          .from('insights')
          .select('*')
          .eq('slug', slug)
          .maybeSingle()

        if (error) {
          console.error('Error fetching article from Supabase:', error)
        } else if (data) {
          setPost({
            id: data.id,
            slug: data.slug,
            title: data.title,
            category: data.category || 'AI Adoption',
            excerpt: data.excerpt || '',
            body: data.content || '',
            author: data.author_name || 'WorkplaceHQ Team',
            date: data.published_at
              ? new Date(data.published_at).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })
              : 'Recently Published',
            readTime: data.read_time || '5 min read',
            image: data.image_url,
            isFeatured: data.is_featured || false,
          })
        }
      } catch (err) {
        console.error('Unexpected error loading article:', err)
      } finally {
        setLoading(false)
      }
    }

    loadArticle()
  }, [slug])

  if (loading) {
    return (
      <div
        className="flex items-center justify-center min-h-screen"
        style={{ backgroundColor: 'var(--whq-bg, #F9F8F6)' }}
      >
        <div className="inline-block w-8 h-8 border-4 border-[#0B3C2D] border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  if (!post) {
    return (
      <div
        className="flex flex-col items-center justify-center gap-4 px-6"
        style={{ backgroundColor: 'var(--whq-bg)', minHeight: '100vh' }}
      >
        <Helmet>
          <title>Article Not Found | WorkplaceHQ</title>
          <meta name="robots" content="noindex, follow" />
        </Helmet>
        <h1 className="font-display font-semibold text-2xl" style={{ color: '#191919' }}>
          Article not found.
        </h1>
        <p className="text-sm" style={{ color: '#545454' }}>
          This article does not exist or has been moved.
        </p>
        <Link to="/insights" className="text-sm font-semibold" style={{ color: '#1DA54A' }}>
          ← Back to Insights
        </Link>
      </div>
    )
  }

  const colors = categoryColorMap[post.category] ?? {
    bg: 'rgba(0,0,0,0.05)',
    text: '#191919',
  }

  // Current page canonical URL build
  const articleUrl = typeof window !== 'undefined' ? window.location.origin + window.location.pathname : ''

  // ───────────────────── SCHEMA BUILDER FOR AI BOTS (AEO / BLOG POSTING) ─────────────────────
  const articleSchemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    'headline': post.title,
    'description': post.excerpt,
    'image': post.image ? [post.image] : [],
    'datePublished': post.date,
    'author': {
      '@type': 'Person',
      'name': post.author,
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'WorkplaceHQ',
      'logo': {
        '@type': 'ImageObject',
        'url': typeof window !== 'undefined' ? `${window.location.origin}/logo.png` : '',
      },
    },
    'articleSection': post.category,
  }

  return (
    <div style={{ backgroundColor: 'var(--whq-bg)', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>
      {/* ───────────────────── SEO / AEO META INJECTION ───────────────────── */}
      <Helmet>
        <title>{`${post.title} | WorkplaceHQ Insights`}</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={articleUrl} />

        {/* Open Graph / Facebook / LinkedIn / iMessage */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={articleUrl} />
        {post.image && <meta property="og:image" content={post.image} />}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        {post.image && <meta name="twitter:image" content={post.image} />}

        {/* Structured Data (JSON-LD) for Search Engine Crawlers & LLM Scrapers */}
        <script type="application/ld+json">
          {JSON.stringify(articleSchemaMarkup)}
        </script>
      </Helmet>

      <div className="max-w-[1440px] mx-auto px-6 pt-32 pb-20">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm mb-10" style={{ color: '#9CA3AF' }}>
          <Link to="/insights" className="hover:underline" style={{ color: '#1DA54A' }}>
            ← Insights
          </Link>
          <span>·</span>
          <span>{post.category}</span>
        </div>

        {/* Hero */}
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <span
              className="px-3 py-1 rounded-full text-xs font-semibold"
              style={{ backgroundColor: colors.bg, color: colors.text }}
            >
              {post.category}
            </span>
            {(post.featured || post.isFeatured) && (
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#1DA54A' }}>
                Featured
              </span>
            )}
          </div>

          <h1
            className="font-display font-bold leading-tight mb-6"
            style={{ fontSize: 'clamp(1.75rem,3.5vw,3rem)', color: '#191919' }}
          >
            {post.title}
          </h1>

          <p
            className="text-lg leading-relaxed italic pl-4 mb-8"
            style={{ color: '#545454', borderLeft: '4px solid #1DA54A' }}
          >
            {post.excerpt}
          </p>

          <div className="flex items-center gap-3 mb-8">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
              style={{ backgroundColor: '#0B3C2D' }}
            >
              WT
            </div>
            <div>
              <p className="text-sm font-medium" style={{ color: '#191919' }}>
                {post.author}
              </p>
              <div className="flex items-center gap-2 text-xs" style={{ color: '#9CA3AF' }}>
                <span>{post.date}</span>
                <span>·</span>
                <Clock className="w-3 h-3" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          <hr className="mb-10" style={{ borderColor: '#E6E5E0' }} />

          {/* Article Image */}
          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              className="w-full rounded-2xl mb-10 object-cover"
              style={{ height: '420px' }}
            />
          )}
        </div>

        {/* Body */}
        <div className="max-w-2xl mx-auto">
          <div className="text-base mb-6 whitespace-pre-line" style={{ color: '#545454', lineHeight: '1.85' }}>
            {post.body}
          </div>

          <div
            className="flex justify-between items-center mt-12 pt-8"
            style={{ borderTop: '1px solid #E6E5E0' }}
          >
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