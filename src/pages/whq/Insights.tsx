import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Clock, ArrowRight, Sparkles, Filter, Newspaper } from 'lucide-react'
import { insightsPosts, InsightPost } from '../../data/insightsPosts'
import { supabase } from '../../lib/supabase'

export default function WHQInsights() {
  const [posts, setPosts] = useState<InsightPost[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    fetchInsights()
  }, [])

  const fetchInsights = async () => {
    setLoading(true)
    try {
      // 1. Fetch live articles from Supabase
      const { data, error } = await supabase
        .from('insights')
        .select('*')
        .order('published_at', { ascending: false })

      if (error) {
        console.error('Error fetching dynamic insights:', error)
        setPosts(insightsPosts) // Fallback to static data
        setLoading(false)
        return
      }

      // 2. Map Supabase records to standard InsightPost structure
      const fetchedPosts: InsightPost[] = (data || []).map((item) => ({
        id: item.id,
        slug: item.slug || item.id,
        title: item.title,
        category: item.category || 'AI Adoption',
        excerpt: item.excerpt || '',
        content: item.content || '',
        author: item.author_name || 'WorkplaceHQ Team',
        date: item.published_at
          ? new Date(item.published_at).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })
          : 'Recently Published',
        readTime: item.read_time || '5 min read',
        image: item.image_url,
        isFeatured: item.is_featured || false,
      }))

      // 3. Merge static fallback data with database posts
      const existingSlugs = new Set(fetchedPosts.map((p) => p.slug))
      const uniqueStatic = insightsPosts
        .filter((p) => !existingSlugs.has(p.slug))
        .map((p, idx) => ({
          ...p,
          id: p.id || `static-${p.slug}-${idx}`,
          isFeatured: p.isFeatured ?? p.featured ?? false,
        }))

      setPosts([...fetchedPosts, ...uniqueStatic])
    } catch (err) {
      console.error('Unexpected error loading insights:', err)
      setPosts(insightsPosts)
    } finally {
      setLoading(false)
    }
  }

  // Extract unique categories for filter tabs
  const categories = [
    'All',
    ...Array.from(new Set(posts.map((p) => p.category).filter(Boolean))),
  ]

  // Filter posts based on active category
  const filteredPosts =
    selectedCategory === 'All'
      ? posts
      : posts.filter((p) => p.category === selectedCategory)

  // Identify primary featured post
  const featuredPost = posts.find((p) => p.isFeatured) || posts[0]
  const regularPosts = filteredPosts.filter((p) => p.id !== featuredPost?.id)

  return (
    <div
      style={{
        backgroundColor: 'var(--whq-bg, #F9F8F6)',
        minHeight: '100vh',
        fontFamily: 'var(--font-body, sans-serif)',
      }}
    >
      {/* Header / Hero Section */}
      <section className="pt-32 pb-16 px-6 border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0B3C2D]/10 text-[#0B3C2D] mb-6">
            <Newspaper className="w-3.5 h-3.5" />
            <span>WorkplaceHQ Insights & Perspectives</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
            Ideas shaping the future of workforce & AI integration
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
            Practical frameworks, strategic analysis, and executive guides on organizational transformation, enterprise AI adoption, and talent systems.
          </p>
        </div>
      </section>

      <main className="max-w-[1200px] mx-auto px-6 py-16">
        {/* Category Navigation Bar */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-12 pb-6 border-b border-gray-200">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none w-full sm:w-auto">
            <Filter className="w-4 h-4 text-gray-400 shrink-0 mr-1" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#0B3C2D] text-white shadow-sm'
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <span className="text-xs font-semibold text-gray-500">
            Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
          </span>
        </div>

        {loading ? (
          <div className="py-24 text-center">
            <div className="inline-block w-8 h-8 border-4 border-[#0B3C2D] border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-sm font-semibold text-gray-500">Loading latest perspectives...</p>
          </div>
        ) : (
          <>
            {/* FEATURED HERO CARD */}
            {featuredPost && (selectedCategory === 'All' || selectedCategory === featuredPost.category) && (
              <div className="mb-16">
                <Link
                  to={`/insights/${featuredPost.slug}`}
                  className="group block bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-[#0B3C2D]/30 transition-all duration-300"
                >
                  <div className="grid lg:grid-cols-12 items-center">
                    <div className="lg:col-span-7 h-64 sm:h-96 lg:h-[420px] overflow-hidden bg-gray-100 relative">
                      {featuredPost.image ? (
                        <img
                          src={featuredPost.image}
                          alt={featuredPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-[#0B3C2D] flex items-center justify-center text-white font-bold text-2xl">
                          WorkplaceHQ Insight
                        </div>
                      )}
                      <div className="absolute top-4 left-4 bg-amber-400 text-amber-950 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-sm">
                        <Sparkles className="w-3 h-3" /> Featured Article
                      </div>
                    </div>

                    <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between h-full">
                      <div>
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-[#0B3C2D] inline-block mb-4">
                          {featuredPost.category}
                        </span>

                        <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 group-hover:text-[#1DA54A] transition-colors leading-tight mb-4">
                          {featuredPost.title}
                        </h2>

                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-3 mb-6">
                          {featuredPost.excerpt}
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center gap-3 text-xs text-gray-500 mb-6 pt-4 border-t border-gray-100">
                          <span className="font-semibold text-gray-800">{featuredPost.author}</span>
                          <span>·</span>
                          <span>{featuredPost.date}</span>
                          <span>·</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" /> {featuredPost.readTime}
                          </span>
                        </div>

                        <div className="inline-flex items-center gap-2 text-sm font-bold text-[#0B3C2D] group-hover:translate-x-1.5 transition-transform">
                          <span>Read Full Article</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {/* MAIN ARTICLES GRID */}
            {regularPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => (
                  <Link
                    key={post.id || post.slug}
                    to={`/insights/${post.slug}`}
                    className="group flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-lg hover:border-[#0B3C2D]/30 transition-all duration-300"
                  >
                    <div className="w-full aspect-video bg-gray-100 overflow-hidden relative">
                      {post.image ? (
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-[#0B3C2D]/10 flex items-center justify-center text-[#0B3C2D] font-bold text-sm">
                          WorkplaceHQ
                        </div>
                      )}
                      <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/95 backdrop-blur-xs text-[#0B3C2D] shadow-xs">
                        {post.category}
                      </span>
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-display font-bold text-lg text-gray-900 group-hover:text-[#1DA54A] transition-colors leading-snug mb-3 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-xs leading-relaxed line-clamp-3 mb-6">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
                        <span className="font-semibold text-gray-700 truncate max-w-[120px]">{post.author}</span>
                        <div className="flex items-center gap-2">
                          <span>{post.date}</span>
                          <span>·</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {post.readTime}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              selectedCategory !== 'All' && (
                <div className="py-20 text-center bg-white rounded-2xl border border-gray-200">
                  <p className="text-gray-500 text-sm font-semibold mb-3">
                    No articles found under "{selectedCategory}".
                  </p>
                  <button
                    onClick={() => setSelectedCategory('All')}
                    className="text-xs font-bold uppercase tracking-wider text-[#0B3C2D] hover:underline"
                  >
                    View all articles
                  </button>
                </div>
              )
            )}
          </>
        )}
      </main>
    </div>
  )
}