import { Link } from 'react-router-dom'

const stats = [
  { value: '5,200+', label: 'CVs optimised' },
  { value: '3,400+', label: 'LinkedIn profiles transformed' },
  { value: '8,100+', label: 'Successful placements' },
  { value: '4.9/5', label: 'Average client rating' },
]

const tools = [
  { title: 'CV Optimiser', desc: 'Get your CV rewritten by professionals who know what recruiters actually look for.', icon: '📄' },
  { title: 'LinkedIn Optimiser', desc: 'Turn your LinkedIn into a magnet for the right roles and the right people.', icon: '💼' },
  { title: 'Portfolio Creator', desc: 'A professional portfolio that shows your work — not just your title.', icon: '🗂️' },
  { title: 'Personal Website', desc: 'Your own career site, set up and sent to you. No code. No accounts.', icon: '🌐' },
  { title: 'Personal Branding', desc: 'A strategy document that defines your professional identity and how to communicate it.', icon: '✦' },
]

const testimonials = [
  {
    quote: "I submitted my CV on a Thursday, received the optimised version Friday morning, and had three interview calls by the following week. This is the real deal.",
    author: 'Tobi A.',
    role: 'Product Manager, Lagos',
  },
  {
    quote: "The LinkedIn optimisation service completely changed my visibility. I went from 50 profile views a week to over 600 in 30 days.",
    author: 'Funmilayo O.',
    role: 'HR Business Partner',
  },
  {
    quote: "My personal branding strategy document was the most useful thing I've received in my career. Clear, specific, and immediately actionable.",
    author: 'Chukwuemeka D.',
    role: 'Senior Engineer, Abuja',
  },
]

const listings = [
  { title: 'Product Manager', company: 'TresBonTech', location: 'Lagos · Hybrid', type: 'Full-time' },
  { title: 'Senior UX Designer', company: 'Posh Accent', location: 'Remote', type: 'Full-time' },
  { title: 'HR Business Partner', company: 'Confidential', location: 'Lagos · Onsite', type: 'Full-time' },
  { title: 'Marketing Manager', company: 'Lagos Fintech Group', location: 'Lagos · Hybrid', type: 'Full-time' },
  { title: 'Business Analyst', company: 'AfriCapital', location: 'Abuja · Hybrid', type: 'Contract' },
  { title: 'Data Scientist', company: 'TresBonTech', location: 'Remote', type: 'Full-time' },
]

export default function LJHome() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-paper">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-0 grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
          <div className="pb-20">
            <p
              className="mb-5 text-[11px] font-semibold tracking-[0.18em] uppercase"
              style={{ fontFamily: 'Inter, sans-serif', color: '#0F6B5C' }}
            >
              Career tools · No account needed
            </p>
            <h1
              className="text-5xl md:text-6xl font-bold text-ink leading-[1.04] mb-6"
              style={{ letterSpacing: '-0.03em', fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Your next role<br />starts here.
            </h1>
            <p
              className="text-lg leading-relaxed mb-10 max-w-lg"
              style={{ color: '#545454', fontFamily: 'DM Sans, sans-serif' }}
            >
              Professional CV writing, LinkedIn optimisation, portfolio creation, personal branding, and live job listings — all without creating an account.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/lagos-jobs/tools"
                className="inline-block text-[13px] font-semibold text-paper py-3.5 px-7 transition-colors hover:opacity-90"
                style={{ fontFamily: 'Inter, sans-serif', background: '#0F6B5C', borderRadius: '3px' }}
              >
                Use a tool
              </Link>
              <Link
                to="/lagos-jobs/jobs"
                className="inline-block text-[13px] font-semibold text-ink px-7 py-3.5 transition-colors hover:bg-silver"
                style={{ fontFamily: 'Inter, sans-serif', border: '1px solid #191919', borderRadius: '3px' }}
              >
                Browse jobs
              </Link>
            </div>
          </div>

          <div className="relative h-[420px] lg:h-[520px] overflow-hidden bg-silver">
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=900&h=700&fit=crop&auto=format"
              alt="Professional working on career materials"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: '#0F6B5C' }}>
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-bold text-paper mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.04em' }}>
                {s.value}
              </p>
              <p className="text-[13px]" style={{ color: 'rgba(244,243,239,0.6)', fontFamily: 'DM Sans, sans-serif' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools overview */}
      <section className="bg-paper py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-3" style={{ fontFamily: 'Inter, sans-serif', color: '#0F6B5C' }}>Tools Hub</p>
              <h2 className="text-4xl font-bold text-ink" style={{ letterSpacing: '-0.03em' }}>Five tools. Zero friction.</h2>
            </div>
            <Link
              to="/lagos-jobs/tools"
              className="text-[13px] font-semibold text-slate hover:text-ink transition-colors hidden md:block"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              All tools →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((t) => (
              <Link
                key={t.title}
                to="/lagos-jobs/tools"
                className="group bg-paper p-8 transition-all hover:shadow-sm"
                style={{ border: '1px solid #E6E5E0' }}
              >
                <div className="mb-5">
                  <span className="text-2xl">{t.icon}</span>
                </div>
                <p className="text-[1rem] font-semibold text-ink mb-2 group-hover:text-lj-teal transition-colors" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {t.title}
                </p>
                <p className="text-[14px] leading-relaxed mb-4" style={{ color: '#545454' }}>{t.desc}</p>
                <span className="text-[13px] font-semibold" style={{ color: '#0F6B5C', fontFamily: 'Inter, sans-serif' }}>
                  Use this tool →
                </span>
              </Link>
            ))}

            {/* Job listings card */}
            <Link
              to="/lagos-jobs/jobs"
              className="group bg-ink p-8 transition-all"
              style={{ border: '1px solid #191919' }}
            >
              <div className="mb-5">
                <span className="text-2xl">🔍</span>
              </div>
              <p className="text-[1rem] font-semibold text-paper mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Job Listings
              </p>
              <p className="text-[14px] leading-relaxed mb-4" style={{ color: '#8a8a8a' }}>Browse curated roles from top companies across Nigeria and beyond.</p>
              <span className="text-[13px] font-semibold" style={{ color: '#0F6B5C', fontFamily: 'Inter, sans-serif' }}>
                Browse roles →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ background: '#F0EFE9' }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-12" style={{ fontFamily: 'Inter, sans-serif', color: '#888' }}>What people say</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.author} style={{ borderTop: '2px solid #E6E5E0', paddingTop: '1.5rem' }}>
                <p className="text-[1rem] font-medium text-ink leading-relaxed mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  "{t.quote}"
                </p>
                <p className="text-[14px] font-semibold text-ink" style={{ fontFamily: 'Inter, sans-serif' }}>{t.author}</p>
                <p className="text-[13px]" style={{ color: '#888', fontFamily: 'DM Sans, sans-serif' }}>{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Listings preview */}
      <section className="bg-paper py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-3" style={{ fontFamily: 'Inter, sans-serif', color: '#0F6B5C' }}>Live now</p>
              <h2 className="text-3xl font-bold text-ink" style={{ letterSpacing: '-0.03em' }}>Latest opportunities</h2>
            </div>
            <Link to="/lagos-jobs/jobs" className="text-[13px] font-semibold text-slate hover:text-ink transition-colors hidden md:block" style={{ fontFamily: 'Inter, sans-serif' }}>
              All jobs →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {listings.map((l) => (
              <Link
                key={l.title + l.company}
                to="/lagos-jobs/jobs"
                className="flex items-center justify-between p-5 bg-paper group hover:bg-silver transition-colors"
                style={{ border: '1px solid #E6E5E0', borderRadius: '3px' }}
              >
                <div>
                  <p className="text-[15px] font-semibold text-ink mb-1 group-hover:text-lj-teal transition-colors" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {l.title}
                  </p>
                  <p className="text-[13px]" style={{ color: '#888', fontFamily: 'DM Sans, sans-serif' }}>{l.company} · {l.location}</p>
                </div>
                <span
                  className="text-[11px] font-medium px-2.5 py-1"
                  style={{ fontFamily: 'Inter, sans-serif', background: '#E6E5E0', color: '#545454', borderRadius: '2px', flexShrink: 0 }}
                >
                  {l.type}
                </span>
              </Link>
            ))}
          </div>

          <Link to="/lagos-jobs/jobs" className="text-[13px] font-semibold text-slate hover:text-ink transition-colors block md:hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
            All jobs →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0F6B5C' }} className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-paper mb-5" style={{ letterSpacing: '-0.03em' }}>
            Your career, professionally packaged.
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: 'rgba(244,243,239,0.75)' }}>
            Pick a tool, fill a short form, and receive your result by email. No account. No friction. Just results.
          </p>
          <Link
            to="/lagos-jobs/tools"
            className="inline-block text-[13px] font-semibold bg-paper text-ink px-8 py-4 hover:opacity-90 transition-opacity"
            style={{ fontFamily: 'Inter, sans-serif', borderRadius: '3px' }}
          >
            Start with a tool
          </Link>
        </div>
      </section>
    </main>
  )
}
