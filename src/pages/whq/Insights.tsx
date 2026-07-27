import { Link } from 'react-router-dom'

const featured = {
  tag: 'AI & Teams',
  title: 'Why most AI adoption programmes fail at the team level',
  date: 'Jul 14, 2025',
  readTime: '6 min read',
  author: 'Stanley',
  excerpt: 'Six months into the AI wave and we\'re seeing the same pattern: organisations announce AI training initiatives, tools get rolled out, and then... nothing changes. Here\'s what the data from 30+ engagements tells us about why — and what to do differently.',
}

const articles = [
  { tag: 'Leadership', title: 'The six habits of high-performing African leadership teams', date: 'Jun 28, 2025', readTime: '8 min', author: 'Mrs Otito' },
  { tag: 'L&D Strategy', title: 'Measuring learning ROI: a practical framework for HR leaders', date: 'Jun 10, 2025', readTime: '5 min', author: 'Desire' },
  { tag: 'Change Management', title: 'What organisations get wrong about resistance to change', date: 'May 22, 2025', readTime: '7 min', author: 'Bolanle' },
  { tag: 'AI & Teams', title: 'Prompting for productivity: what your teams actually need to know', date: 'May 8, 2025', readTime: '6 min', author: 'Stanley' },
  { tag: 'Org Design', title: 'The accountability gap: how role clarity drives team performance', date: 'Apr 17, 2025', readTime: '5 min', author: 'Mr Benson' },
  { tag: 'Leadership', title: 'Managing across generations in the African workplace', date: 'Apr 2, 2025', readTime: '9 min', author: 'Mrs Otito' },
  { tag: 'L&D Strategy', title: 'Building a learning culture: what HR leaders rarely say out loud', date: 'Mar 14, 2025', readTime: '6 min', author: 'Desire' },
  { tag: 'Change Management', title: 'How to lead a team through a restructure without losing trust', date: 'Feb 27, 2025', readTime: '8 min', author: 'Bolanle' },
]

const tagColors: Record<string, string> = {
  'AI & Teams': '#1DA54A',
  'Leadership': '#127A43',
  'L&D Strategy': '#888',
  'Change Management': '#888',
  'Org Design': '#888',
}

export default function WHQInsights() {
  return (
    <main>
      <section className="bg-paper py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-5 text-whq-green" style={{ fontFamily: 'Inter, sans-serif' }}>Insights</p>
          <h1 className="text-5xl font-bold text-ink" style={{ letterSpacing: '-0.03em' }}>Thinking on teams, learning, and transformation.</h1>
        </div>
      </section>

      {/* Featured */}
      <section className="bg-ink py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-8" style={{ fontFamily: 'Inter, sans-serif', color: '#4a4a4a' }}>Featured</p>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <span className="text-[11px] font-semibold tracking-wider uppercase mb-4 block" style={{ fontFamily: 'Inter, sans-serif', color: '#1DA54A' }}>{featured.tag}</span>
              <h2 className="text-4xl font-bold text-paper mb-5 leading-tight" style={{ letterSpacing: '-0.03em' }}>{featured.title}</h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#8a8a8a' }}>{featured.excerpt}</p>
              <div className="flex items-center gap-4">
                <span className="text-[13px]" style={{ color: '#5a5a5a', fontFamily: 'Inter, sans-serif' }}>{featured.author} · {featured.date} · {featured.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles grid */}
      <section className="bg-paper py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {articles.map((a) => (
              <article key={a.title} className="group cursor-pointer" style={{ borderTop: '2px solid #E6E5E0', paddingTop: '1.5rem' }}>
                <span
                  className="text-[11px] font-semibold tracking-wider uppercase mb-3 block"
                  style={{ fontFamily: 'Inter, sans-serif', color: tagColors[a.tag] || '#888' }}
                >
                  {a.tag}
                </span>
                <h3 className="text-[0.95rem] font-semibold text-ink leading-snug mb-4 group-hover:text-whq-green transition-colors" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {a.title}
                </h3>
                <p className="text-[12px]" style={{ color: '#aaa', fontFamily: 'Inter, sans-serif' }}>{a.author} · {a.date} · {a.readTime}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold text-paper mb-3" style={{ letterSpacing: '-0.03em' }}>Ready to apply this thinking?</h2>
            <p style={{ color: '#6a6a6a' }}>Get in touch and we'll scope a response to your specific challenge.</p>
          </div>
          <Link to="/contact" className="flex-shrink-0 text-[13px] font-semibold bg-whq-green text-paper px-8 py-4 hover:bg-whq-deep transition-colors" style={{ fontFamily: 'Inter, sans-serif', borderRadius: '3px' }}>
            Start a conversation
          </Link>
        </div>
      </section>
    </main>
  )
}
