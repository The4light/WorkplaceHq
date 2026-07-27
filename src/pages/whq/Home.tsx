import { Link } from 'react-router-dom'

const stats = [
  { value: '50+', label: 'Organisations served' },
  { value: '12,000+', label: 'Professionals trained' },
  { value: '8', label: 'Industries' },
  { value: '94%', label: 'Client retention rate' },
]

const services = [
  {
    number: '01',
    title: 'AI-Readiness Training',
    desc: 'Equip your teams with practical AI literacy, tool adoption, and the critical thinking to leverage AI confidently.',
    link: '/training-programs',
  },
  {
    number: '02',
    title: 'Leadership Development',
    desc: 'Build the management capability that drives team performance, engagement, and long-term organisational health.',
    link: '/workshops',
  },
  {
    number: '03',
    title: 'Organisational Consulting',
    desc: 'Restructure workflows, clarify roles, and eliminate the operational friction holding your teams back.',
    link: '/consulting',
  },
  {
    number: '04',
    title: 'L&D Strategy Design',
    desc: 'Design bespoke learning programs that create measurable, long-term capability across your organisation.',
    link: '/training-programs',
  },
  {
    number: '05',
    title: 'Change Management',
    desc: 'Navigate organisational transformation with structured change frameworks and minimal disruption.',
    link: '/consulting',
  },
]

const industries = [
  'Financial Services', 'Technology', 'Healthcare', 'Energy & Resources',
  'Manufacturing', 'Telecommunications', 'Education', 'FMCG',
]

const testimonials = [
  {
    quote: "WorkplaceHQ redesigned our entire L&D function. Within six months, manager effectiveness scores rose 31% and onboarding time dropped by half.",
    author: 'Adaeze Nwosu',
    role: 'Chief People Officer, TresBonTech',
  },
  {
    quote: "Their AI-Readiness programme gave our operations teams real tools, not theory. We saw adoption within weeks, not quarters.",
    author: 'Emeka Okafor',
    role: 'Head of Operations, Posh Accent',
  },
]

const insights = [
  {
    tag: 'AI & Teams',
    title: 'Why most AI adoption programmes fail at the team level',
    date: 'Jul 14, 2025',
    readTime: '6 min read',
  },
  {
    tag: 'Leadership',
    title: 'The six habits of high-performing African leadership teams',
    date: 'Jun 28, 2025',
    readTime: '8 min read',
  },
  {
    tag: 'L&D Strategy',
    title: 'Measuring learning ROI: a practical framework for HR leaders',
    date: 'Jun 10, 2025',
    readTime: '5 min read',
  },
]

export default function WHQHome() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-paper">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-0 grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
          <div className="pb-20">
            <p
              className="mb-6 text-[11px] font-semibold tracking-[0.18em] uppercase"
              style={{ fontFamily: 'Inter, sans-serif', color: '#1DA54A' }}
            >
              Workforce transformation · Africa
            </p>
            <h1
              className="text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-bold text-ink leading-[1.03] mb-6"
              style={{ letterSpacing: '-0.03em' }}
            >
              We engineer<br />how teams<br />work.
            </h1>
            <p
              className="text-lg leading-relaxed mb-10 max-w-lg"
              style={{ color: '#545454', fontFamily: 'DM Sans, sans-serif' }}
            >
              WorkplaceHQ partners with HR, L&D, and operations leaders to build AI-ready, high-performing teams through structured training, strategic consulting, and capability programs.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-block text-[13px] font-semibold text-paper bg-ink px-7 py-3.5 transition-colors hover:bg-whq-deep"
                style={{ fontFamily: 'Inter, sans-serif', borderRadius: '3px' }}
              >
                Get in touch
              </Link>
              <Link
                to="/services"
                className="inline-block text-[13px] font-semibold text-ink px-7 py-3.5 transition-colors hover:bg-silver"
                style={{ fontFamily: 'Inter, sans-serif', border: '1px solid #191919', borderRadius: '3px' }}
              >
                Our services
              </Link>
            </div>
          </div>

          <div className="relative h-[420px] lg:h-[540px] overflow-hidden bg-silver">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&h=700&fit=crop&auto=format"
              alt="Team in a structured workshop session"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to right, rgba(244,243,239,0.1) 0%, transparent 40%)' }}
            />
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-ink">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label}>
              <p
                className="text-3xl font-bold text-paper mb-1"
                style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.04em' }}
              >
                {s.value}
              </p>
              <p className="text-[13px]" style={{ color: '#6a6a6a', fontFamily: 'DM Sans, sans-serif' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services overview */}
      <section className="bg-paper py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-4 text-whq-green" style={{ fontFamily: 'Inter, sans-serif' }}>What we do</p>
              <h2 className="text-4xl font-bold text-ink leading-tight mb-6" style={{ letterSpacing: '-0.03em' }}>
                Five levers for team transformation
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: '#545454' }}>
                Every engagement is tailored. We start by understanding your organisation's specific gaps, then deploy the right combination of training, facilitation, and consulting.
              </p>
              <Link
                to="/services"
                className="text-[13px] font-semibold text-ink inline-flex items-center gap-2 hover:text-whq-green transition-colors"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                View all services →
              </Link>
            </div>

            <div className="lg:col-span-8 flex flex-col divide-y" style={{ borderColor: '#E6E5E0' }}>
              {services.map((s) => (
                <Link
                  key={s.number}
                  to={s.link}
                  className="flex gap-6 py-6 group"
                >
                  <span
                    className="text-[11px] font-semibold mt-1 flex-shrink-0 w-6"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#1DA54A' }}
                  >
                    {s.number}
                  </span>
                  <div className="flex-1">
                    <p className="text-[1rem] font-semibold text-ink mb-1.5 group-hover:text-whq-green transition-colors" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {s.title}
                    </p>
                    <p className="text-[14px] leading-relaxed" style={{ color: '#545454' }}>{s.desc}</p>
                  </div>
                  <span className="text-slate opacity-0 group-hover:opacity-100 transition-opacity mt-1 flex-shrink-0">→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20" style={{ background: '#F0EFE9' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-10 text-slate" style={{ fontFamily: 'Inter, sans-serif' }}>Industries we serve</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((ind) => (
              <div
                key={ind}
                className="py-5 px-5 bg-paper text-sm font-medium text-ink"
                style={{ fontFamily: 'Space Grotesk, sans-serif', border: '1px solid #E6E5E0' }}
              >
                {ind}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-ink py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-12" style={{ fontFamily: 'Inter, sans-serif', color: '#4a4a4a' }}>What clients say</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {testimonials.map((t) => (
              <div key={t.author} className="flex flex-col justify-between" style={{ borderTop: '1px solid #2a2a2a', paddingTop: '2rem' }}>
                <p
                  className="text-xl font-medium leading-relaxed text-paper mb-8"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.01em' }}
                >
                  "{t.quote}"
                </p>
                <div>
                  <p className="text-[14px] font-semibold text-paper" style={{ fontFamily: 'Inter, sans-serif' }}>{t.author}</p>
                  <p className="text-[13px]" style={{ color: '#6a6a6a', fontFamily: 'DM Sans, sans-serif' }}>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights preview */}
      <section className="bg-paper py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-3 text-whq-green" style={{ fontFamily: 'Inter, sans-serif' }}>Insights</p>
              <h2 className="text-3xl font-bold text-ink" style={{ letterSpacing: '-0.03em' }}>Latest thinking</h2>
            </div>
            <Link to="/insights" className="text-[13px] font-semibold text-slate hover:text-ink transition-colors hidden md:block" style={{ fontFamily: 'Inter, sans-serif' }}>
              All articles →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.map((a) => (
              <article
                key={a.title}
                className="group cursor-pointer"
                style={{ borderTop: '2px solid #E6E5E0', paddingTop: '1.5rem' }}
              >
                <span
                  className="text-[11px] font-semibold tracking-wider uppercase text-whq-green mb-4 block"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {a.tag}
                </span>
                <h3
                  className="text-[1.05rem] font-semibold text-ink leading-snug mb-4 group-hover:text-whq-green transition-colors"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {a.title}
                </h3>
                <p className="text-[13px]" style={{ color: '#888', fontFamily: 'Inter, sans-serif' }}>{a.date} · {a.readTime}</p>
              </article>
            ))}
          </div>

          <Link to="/insights" className="text-[13px] font-semibold text-slate hover:text-ink transition-colors mt-8 block md:hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
            All articles →
          </Link>
        </div>
      </section>

      {/* Lagos Job cross-link */}
      <section className="py-20" style={{ background: '#191919' }}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-5" style={{ fontFamily: 'Inter, sans-serif', color: '#0F6B5C' }}>
              Our consumer product
            </p>
            <h2
              className="text-4xl font-bold leading-tight mb-5"
              style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.03em', color: '#F4F3EF' }}
            >
              Individual career services, under one roof.
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: '#8a8a8a', fontFamily: 'DM Sans, sans-serif' }}>
              Lagos Job is our career-services platform for individual professionals — CV optimisation, LinkedIn strategy, portfolio creation, personal branding, and live job listings. No account needed.
            </p>
            <Link
              to="/lagos-jobs"
              className="inline-flex items-center gap-2 text-[13px] font-semibold py-3.5 px-7 transition-colors hover:opacity-90"
              style={{ fontFamily: 'Inter, sans-serif', background: '#0F6B5C', color: '#F4F3EF', borderRadius: '3px' }}
            >
              Explore Lagos Job →
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {['CV Optimiser', 'LinkedIn Optimiser', 'Portfolio Creator', 'Personal Branding', 'Personal Website', 'Job Listings'].map((t) => (
              <Link
                key={t}
                to="/lagos-jobs/tools"
                className="bg-[#1e1e1e] hover:bg-[#252525] transition-colors p-5 group"
                style={{ borderRadius: '4px' }}
              >
                <p className="text-[13px] font-medium text-paper mb-1 group-hover:text-lj-teal transition-colors" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {t}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-5 text-whq-green" style={{ fontFamily: 'Inter, sans-serif' }}>
            Ready to start
          </p>
          <h2 className="text-4xl font-bold text-ink mb-6" style={{ letterSpacing: '-0.03em' }}>
            Let's engineer your team's potential.
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: '#545454' }}>
            Tell us where your organisation wants to go. We'll design the right programme.
          </p>
          <Link
            to="/contact"
            className="inline-block text-[13px] font-semibold text-paper bg-ink px-8 py-4 hover:bg-whq-deep transition-colors"
            style={{ fontFamily: 'Inter, sans-serif', borderRadius: '3px' }}
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </main>
  )
}
