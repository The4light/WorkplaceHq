import { Link } from 'react-router-dom'

const values = [
  { title: 'Frictionless', desc: 'No accounts, no paywalls, no long forms. You give us what we need; we deliver what you want.' },
  { title: 'Professional-grade', desc: 'Every output is written or built by career professionals — not generated automatically and sent unchecked.' },
  { title: 'Fast', desc: 'Most services are delivered within 24–48 hours, because job searches don\'t wait.' },
  { title: 'People-first', desc: 'We\'re a career tool for real professionals. Your goals drive every decision we make.' },
]

export default function LJAbout() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-paper py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6">
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-5" style={{ fontFamily: 'Inter, sans-serif', color: '#0F6B5C' }}>About Lagos Job</p>
            <h1 className="text-5xl font-bold text-ink leading-tight mb-7" style={{ letterSpacing: '-0.03em' }}>
              Built for the professional who's ready to move.
            </h1>
            <p className="text-lg leading-relaxed mb-6" style={{ color: '#545454' }}>
              Lagos Job started from a simple observation: talented professionals in Nigeria were struggling to present themselves effectively — not because they lacked the skills, but because they lacked access to the tools and expertise to package them.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#545454' }}>
              We built a frictionless alternative. No account creation. No subscriptions. Just targeted career tools that deliver professionally — by email — within 48 hours.
            </p>
          </div>
          <div className="lg:col-span-6 relative">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&auto=format"
              alt="Professional working on career development"
              className="w-full h-[400px] object-cover"
              style={{ background: '#E6E5E0' }}
            />
          </div>
        </div>
      </section>

      {/* Origin */}
      <section className="bg-ink py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div style={{ borderTop: '2px solid #0F6B5C', paddingTop: '2rem' }}>
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-5" style={{ fontFamily: 'Inter, sans-serif', color: '#0F6B5C' }}>Origin</p>
            <p className="text-2xl font-medium text-paper leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}>
              Lagos Job was built by the WorkplaceHQ team as a direct response to the gap between organisational workforce transformation and individual career development.
            </p>
          </div>
          <div>
            <p className="text-base leading-relaxed mb-5" style={{ color: '#8a8a8a' }}>
              While WorkplaceHQ builds capability at the team and organisational level, we kept seeing individuals fall through the cracks — professionals who were good at their work but poorly represented on paper and online.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#8a8a8a' }}>
              Lagos Job closes that gap. It's a dedicated consumer product with its own identity, its own tools, and its own commitment: every professional deserves a world-class career presentation.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: '#F0EFE9' }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-12 text-slate" style={{ fontFamily: 'Inter, sans-serif' }}>What we stand for</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} style={{ borderTop: '2px solid #E6E5E0', paddingTop: '1.5rem' }}>
                <p className="text-[1rem] font-semibold text-ink mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{v.title}</p>
                <p className="text-[14px] leading-relaxed" style={{ color: '#545454' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-paper py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            { v: '5,200+', l: 'CVs delivered' },
            { v: '3,400+', l: 'LinkedIn profiles optimised' },
            { v: '48h', l: 'Average delivery time' },
            { v: '4.9/5', l: 'Average client rating' },
          ].map((s) => (
            <div key={s.l} style={{ borderTop: '2px solid #E6E5E0', paddingTop: '1.5rem' }}>
              <p className="text-4xl font-bold text-ink mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.04em' }}>{s.v}</p>
              <p className="text-[14px]" style={{ color: '#888', fontFamily: 'DM Sans, sans-serif' }}>{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHQ connection */}
      <section className="bg-ink py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-3" style={{ fontFamily: 'Inter, sans-serif', color: '#4a4a4a' }}>Our parent</p>
            <h2 className="text-2xl font-bold text-paper mb-2" style={{ letterSpacing: '-0.02em' }}>Part of WorkplaceHQ</h2>
            <p className="text-sm" style={{ color: '#6a6a6a' }}>B2B workforce transformation for organisations across Africa.</p>
          </div>
          <Link
            to="/"
            className="flex-shrink-0 text-[13px] font-semibold text-paper px-7 py-3.5 border border-[#333] hover:border-whq-green hover:text-whq-green transition-colors"
            style={{ fontFamily: 'Inter, sans-serif', borderRadius: '3px' }}
          >
            Visit WorkplaceHQ →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0F6B5C' }} className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-paper mb-5" style={{ letterSpacing: '-0.03em' }}>Ready to level up?</h2>
          <p className="text-lg mb-8" style={{ color: 'rgba(244,243,239,0.75)' }}>Pick a tool and get your result by email. No account needed.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/lagos-jobs/tools"
              className="inline-block text-[13px] font-semibold bg-paper text-ink px-8 py-4 hover:opacity-90 transition-opacity"
              style={{ fontFamily: 'Inter, sans-serif', borderRadius: '3px' }}
            >
              Go to Tools Hub
            </Link>
            <Link
              to="/lagos-jobs/jobs"
              className="inline-block text-[13px] font-semibold text-paper px-8 py-4 border border-[rgba(244,243,239,0.3)] hover:border-paper transition-colors"
              style={{ fontFamily: 'Inter, sans-serif', borderRadius: '3px' }}
            >
              Browse jobs
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
