import { Search, Lightbulb, Wrench, TrendingUp, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const phases = [
  {
    phase: 'Phase 1',
    title: 'Diagnostic Audit',
    duration: 'Weeks 1–3',
    icon: Search,
    desc: 'Deep-dive organizational analysis: people, process, technology, and culture. We identify root causes, not symptoms.',
    deliverables: ['Org Health Report', 'Gap Analysis Matrix', 'Priority Opportunity Map'],
  },
  {
    phase: 'Phase 2',
    title: 'Strategy Design',
    duration: 'Weeks 4–7',
    icon: Lightbulb,
    desc: 'Co-design of transformation roadmap with leadership. OKR architecture, initiative sequencing, and quick-win identification.',
    deliverables: ['12-Month Transformation Roadmap', 'OKR Framework', 'Stakeholder Alignment Deck'],
  },
  {
    phase: 'Phase 3',
    title: 'Execution & Build',
    duration: 'Weeks 8–18',
    icon: Wrench,
    desc: 'Embedded implementation support. We work alongside your teams to build the systems, habits, and capabilities defined in Phase 2.',
    deliverables: ['Systems Deployed', 'Training Delivered', 'Process Documentation'],
  },
  {
    phase: 'Phase 4',
    title: 'Optimization & Handoff',
    duration: 'Weeks 19–24',
    icon: TrendingUp,
    desc: 'Performance measurement, iteration, and capability transfer. We leave your team able to sustain and evolve what was built.',
    deliverables: ['Performance Dashboard', 'Capability Transfer Report', 'Ongoing Advisory (Optional)'],
  },
]

export default function WHQConsulting() {
  return (
    <div style={{ backgroundColor: '#FBF9F5', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>
      <div className="relative pt-32 pb-12 px-6 overflow-hidden">
        <div className="pointer-events-none absolute -top-16 -right-16 w-[400px] h-[400px] rounded-full" style={{ background: '#D97706', filter: 'blur(120px)', opacity: 0.15 }} />
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-[500px] h-[500px] rounded-full" style={{ background: '#10B981', filter: 'blur(150px)', opacity: 0.12 }} />
        <div className="max-w-[1440px] mx-auto relative z-10">
          <h1 className="font-display font-700 text-[clamp(2rem,4vw,3.5rem)] leading-tight mb-4" style={{ color: '#111827' }}>Enterprise Consulting</h1>
          <p className="text-lg max-w-xl" style={{ color: '#6B7280' }}>A 24-week transformation engagement framework. Systematic, embedded, and built to last.</p>
        </div>
      </div>

      {/* Timeline */}
      <section className="px-6 pb-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-[200px] top-8 bottom-8 w-px" style={{ backgroundColor: '#E5E1D8' }} />

            <div className="flex flex-col gap-8">
              {phases.map((p, i) => {
                const Icon = p.icon
                return (
                  <div key={p.phase} className="grid lg:grid-cols-[200px_1fr] gap-6 lg:gap-12 items-start">
                    <div className="flex lg:flex-col items-center lg:items-end gap-4 lg:gap-2 lg:pr-12">
                      <div className="hidden lg:flex w-3 h-3 rounded-full shrink-0 lg:ml-auto" style={{ backgroundColor: '#10B981', boxShadow: '0 0 0 4px rgba(16,185,129,0.2)' }} />
                      <div className="text-right">
                        <div className="font-display font-700 text-sm" style={{ color: '#0B3C2D' }}>{p.phase}</div>
                        <div className="text-xs" style={{ color: '#9CA3AF' }}>{p.duration}</div>
                      </div>
                    </div>

                    <div className="p-7 rounded-2xl transition-all hover:-translate-y-0.5 duration-200" style={{ backgroundColor: i % 2 === 0 ? '#FFFFFF' : '#0B3C2D', border: `1px solid ${i % 2 === 0 ? '#E5E1D8' : 'rgba(16,185,129,0.2)'}` }}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: i % 2 === 0 ? 'rgba(11,60,45,0.07)' : 'rgba(16,185,129,0.15)' }}>
                          <Icon className="w-5 h-5" style={{ color: i % 2 === 0 ? '#0B3C2D' : '#10B981' }} />
                        </div>
                        <h3 className="font-display font-700 text-xl" style={{ color: i % 2 === 0 ? '#111827' : '#FFFFFF' }}>{p.title}</h3>
                      </div>
                      <p className="text-sm leading-relaxed mb-4" style={{ color: i % 2 === 0 ? '#6B7280' : 'rgba(255,255,255,0.65)' }}>{p.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {p.deliverables.map(d => (
                          <span key={d} className="px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: i % 2 === 0 ? '#FBF9F5' : 'rgba(255,255,255,0.08)', color: i % 2 === 0 ? '#0B3C2D' : '#10B981', border: `1px solid ${i % 2 === 0 ? '#E5E1D8' : 'rgba(16,185,129,0.3)'}` }}>
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="mt-12 p-8 rounded-2xl text-center" style={{ backgroundColor: '#0B3C2D' }}>
            <h3 className="font-display font-700 text-2xl text-white mb-3">Ready to start your transformation?</h3>
            <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.65)' }}>Every engagement begins with a complimentary 90-minute strategy session.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm" style={{ backgroundColor: '#10B981', color: '#0B3C2D', fontFamily: 'var(--font-display)' }}>
              Book Discovery Session <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
