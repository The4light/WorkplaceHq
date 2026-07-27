import { useState } from 'react'
import { Clock, Users, BookOpen, ArrowRight, X } from 'lucide-react'

const programs = [
  {
    title: 'AI for Teams',
    duration: '4 weeks',
    size: '10–50',
    modules: ['AI Fundamentals', 'Prompt Engineering', 'Tool Integration', 'Change Readiness'],
    outcomes: 'Teams capable of deploying AI tools autonomously within 60 days post-training.',
    level: 'Foundation',
  },
  {
    title: 'Operational Excellence Accelerator',
    duration: '6 weeks',
    size: '15–80',
    modules: ['Lean Principles', 'Process Mapping', 'KPI Architecture', 'Continuous Improvement'],
    outcomes: '25–40% operational efficiency gains measurable within one quarter.',
    level: 'Advanced',
  },
  {
    title: 'High-Performance Leadership',
    duration: '8 weeks',
    size: '5–25',
    modules: ['Systems Leadership', 'Decision Frameworks', 'Team Architecture', 'Performance Rituals'],
    outcomes: 'Senior leaders with structured playbooks for driving consistent high output.',
    level: 'Executive',
  },
  {
    title: 'CX Excellence Program',
    duration: '5 weeks',
    size: '10–60',
    modules: ['Journey Mapping', 'Service Blueprinting', 'Frontline Excellence', 'NPS Optimization'],
    outcomes: '+15 NPS improvement within 90 days of deployment.',
    level: 'Practitioner',
  },
]

const levelColors: Record<string, [string, string]> = {
  Foundation: ['rgba(16,185,129,0.12)', '#065F46'],
  Advanced: ['rgba(217,119,6,0.12)', '#92400E'],
  Executive: ['rgba(11,60,45,0.1)', '#0B3C2D'],
  Practitioner: ['rgba(59,130,246,0.1)', '#1D4ED8'],
}

export default function WHQTraining() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selected, setSelected] = useState('')

  return (
    <div style={{ backgroundColor: '#FBF9F5', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>
      <div className="relative pt-32 pb-12 px-6 overflow-hidden">
        <div className="pointer-events-none absolute -top-16 -right-16 w-[400px] h-[400px] rounded-full" style={{ background: '#D97706', filter: 'blur(120px)', opacity: 0.15 }} />
        <div className="max-w-[1440px] mx-auto">
          <h1 className="font-display font-700 text-[clamp(2rem,4vw,3.5rem)] leading-tight mb-4" style={{ color: '#111827' }}>Training Programs</h1>
          <p className="text-lg max-w-xl" style={{ color: '#6B7280' }}>Structured team upskilling modules for the skills that compound — AI, operations, leadership, and CX.</p>
        </div>
      </div>

      <section className="px-6 pb-20">
        <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-6">
          {programs.map(p => {
            const [bg, color] = levelColors[p.level]
            return (
              <div key={p.title} className="p-7 rounded-2xl flex flex-col gap-5" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E1D8' }}>
                <div className="flex items-start justify-between">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold mb-2" style={{ backgroundColor: bg, color }}>{p.level}</span>
                    <h3 className="font-display font-700 text-lg" style={{ color: '#111827' }}>{p.title}</h3>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex items-center gap-1.5 text-sm" style={{ color: '#6B7280' }}>
                    <Clock className="w-3.5 h-3.5" style={{ color: '#0B3C2D' }} /> {p.duration}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm" style={{ color: '#6B7280' }}>
                    <Users className="w-3.5 h-3.5" style={{ color: '#0B3C2D' }} /> {p.size} people
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#9CA3AF' }}>Module Breakdown</div>
                  <div className="flex flex-wrap gap-2">
                    {p.modules.map(m => (
                      <span key={m} className="px-2.5 py-1 rounded-md text-xs" style={{ backgroundColor: '#FBF9F5', color: '#111827', border: '1px solid #E5E1D8' }}>{m}</span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(11,60,45,0.04)' }}>
                  <div className="flex items-start gap-2">
                    <BookOpen className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: '#0B3C2D' }} />
                    <p className="text-sm" style={{ color: '#6B7280' }}>{p.outcomes}</p>
                  </div>
                </div>

                <button
                  onClick={() => { setSelected(p.title); setModalOpen(true) }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all hover:-translate-y-0.5 self-start"
                  style={{ backgroundColor: '#0B3C2D', color: '#FFFFFF', fontFamily: 'var(--font-display)' }}
                >
                  Request Training Deck <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )
          })}
        </div>
      </section>

      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' }} onClick={() => setModalOpen(false)}>
          <div className="w-full max-w-md p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF' }} onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-display font-700 text-xl" style={{ color: '#111827' }}>Request Training Deck</h3>
              <button onClick={() => setModalOpen(false)}><X className="w-4 h-4" style={{ color: '#9CA3AF' }} /></button>
            </div>
            <p className="text-sm mb-5" style={{ color: '#6B7280' }}>Program: <strong style={{ color: '#0B3C2D' }}>{selected}</strong></p>
            <div className="flex flex-col gap-3">
              <input className="w-full px-4 py-3 text-sm outline-none" style={{ border: '1px solid #E5E1D8', backgroundColor: '#FBF9F5', borderRadius: '6px' }} placeholder="Full Name" />
              <input className="w-full px-4 py-3 text-sm outline-none" type="email" style={{ border: '1px solid #E5E1D8', backgroundColor: '#FBF9F5', borderRadius: '6px' }} placeholder="Corporate Email" />
              <button className="w-full py-3 rounded-lg font-semibold text-sm" style={{ backgroundColor: '#0B3C2D', color: '#FFFFFF', fontFamily: 'var(--font-display)' }} onClick={() => setModalOpen(false)}>
                Send Me the Deck
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
