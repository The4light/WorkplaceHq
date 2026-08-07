import { useState } from 'react'
import { Bot, Settings, TrendingUp, HeartHandshake, BarChart3, ArrowRight, CheckCircle, X } from 'lucide-react'

const services = [
  {
    icon: Bot,
    title: 'AI Adoption',
    challenge: 'Enterprises struggle to move AI pilots to production â€” 80% fail before business impact.',
    solution: 'End-to-end integration: readiness audits, model selection, deployment architecture, and change management.',
    outcomes: ['32% average cost reduction', 'AI embedded in 90 days', '4.1Ã— faster decision cycles'],
  },
  {
    icon: Settings,
    title: 'Productivity Infrastructure',
    challenge: 'Tool sprawl and unstructured workflows create compounding drag on output.',
    solution: 'Unified workspace architecture, SOPs, async communication design, and integrated tooling.',
    outcomes: ['45% fewer meetings', '3Ã— faster project delivery', 'Full tool consolidation'],
  },
  {
    icon: TrendingUp,
    title: 'Operational Excellence',
    challenge: 'Rapid growth creates process debt that silently erodes margin and morale.',
    solution: 'Lean methodology application, bottleneck removal, OKR architecture, and rhythm design.',
    outcomes: ['28% margin improvement', 'Ops rhythm in 6 weeks', 'Real-time performance visibility'],
  },
  {
    icon: HeartHandshake,
    title: 'CX Transformation',
    challenge: 'Disjointed customer touchpoints create high churn and low NPS.',
    solution: 'Full customer journey audit, service blueprint redesign, and frontline capability building.',
    outcomes: ['+22 NPS improvement', '38% churn reduction', 'CX systems operational in 90 days'],
  },
  {
    icon: BarChart3,
    title: 'Strategic Consulting',
    challenge: 'Leadership teams lack the external perspective and methodologies to break growth plateaus.',
    solution: 'C-suite advisory, transformation roadmapping, board reporting frameworks, and scenario planning.',
    outcomes: ['Roadmaps adopted in 100% of engagements', 'CEO confidence index +40%', '12â€“18 month horizon planning'],
  },
]

export default function WHQServices() {
  const [activeService, setActiveService] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)

  const s = services[activeService]
  const Icon = s.icon

  return (
    <div style={{ backgroundColor: 'var(--whq-bg)', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>
      <div className="relative pt-32 pb-12 px-6 overflow-hidden">
        <div className="pointer-events-none absolute -top-16 -right-16 w-[400px] h-[400px] rounded-full" style={{ background: '#D97706', filter: 'blur(120px)', opacity: 0.15 }} />
        <div className="max-w-[1440px] mx-auto">
          <h1 className="font-display font-700 text-[clamp(2rem,4vw,3.5rem)] leading-tight mb-4" style={{ color: '#111827' }}>Services Directory</h1>
          <p className="text-lg" style={{ color: '#6B7280' }}>Five enterprise disciplines. Every engagement is tailored, not templated.</p>
        </div>
      </div>

      <section className="px-6 pb-20">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-3 gap-6">
          {/* Service selector */}
          <div className="flex flex-col gap-3">
            {services.map((sv, i) => {
              const SIcon = sv.icon
              return (
                <button
                  key={sv.title}
                  onClick={() => setActiveService(i)}
                  className="flex items-center gap-3 p-4 rounded-xl text-left transition-all duration-200"
                  style={{
                    backgroundColor: activeService === i ? '#0B3C2D' : '#FFFFFF',
                    border: `1px solid ${activeService === i ? 'rgba(16,185,129,0.25)' : '#E5E1D8'}`,
                  }}
                >
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: activeService === i ? 'rgba(16,185,129,0.15)' : 'rgba(11,60,45,0.07)' }}>
                    <SIcon className="w-4 h-4" style={{ color: activeService === i ? '#10B981' : '#0B3C2D' }} />
                  </div>
                  <span className="font-display font-600 text-sm" style={{ color: activeService === i ? '#FFFFFF' : '#111827' }}>{sv.title}</span>
                </button>
              )
            })}
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-2 p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E1D8' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(11,60,45,0.07)' }}>
                <Icon className="w-6 h-6" style={{ color: '#0B3C2D' }} />
              </div>
              <h2 className="font-display font-700 text-2xl" style={{ color: '#111827' }}>{s.title}</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[['Challenge', s.challenge, '#FEF3C7', '#92400E'], ['System Solution', s.solution, 'rgba(11,60,45,0.05)', '#0B3C2D'], ['Measurable Outcomes', s.outcomes.join(' Â· '), '#F0FDF4', '#065F46']].map(([label, content, bg, color]) => (
                <div key={label as string} className="p-5 rounded-xl" style={{ backgroundColor: bg as string }}>
                  <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: color as string }}>{label as string}</div>
                  <p className="text-sm leading-relaxed" style={{ color: '#111827' }}>{content as string}</p>
                </div>
              ))}
            </div>

            <div className="mb-6">
              <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#9CA3AF' }}>Key Outcomes</div>
              <div className="flex flex-col gap-2">
                {s.outcomes.map(o => (
                  <div key={o} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 shrink-0" style={{ color: '#1DA54A' }} />
                    <span className="text-sm" style={{ color: '#111827' }}>{o}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setModalOpen(true)}
              className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all hover:-translate-y-0.5"
              style={{ backgroundColor: '#0B3C2D', color: '#FFFFFF', fontFamily: 'var(--font-display)' }}
            >
              Request Custom Proposal <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' }} onClick={() => setModalOpen(false)}>
          <div className="w-full max-w-md p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E1D8' }} onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-display font-700 text-xl" style={{ color: '#111827' }}>Request Custom Proposal</h3>
              <button onClick={() => setModalOpen(false)}><X className="w-4 h-4" style={{ color: '#9CA3AF' }} /></button>
            </div>
            <div className="flex flex-col gap-3">
              <input className="w-full px-4 py-3 text-sm outline-none" style={{ border: '1px solid #E5E1D8', backgroundColor: 'var(--whq-bg)', borderRadius: '6px' }} placeholder="Full Name" />
              <input className="w-full px-4 py-3 text-sm outline-none" type="email" style={{ border: '1px solid #E5E1D8', backgroundColor: 'var(--whq-bg)', borderRadius: '6px' }} placeholder="Corporate Email" />
              <input className="w-full px-4 py-3 text-sm outline-none" style={{ border: '1px solid #E5E1D8', backgroundColor: 'var(--whq-bg)', borderRadius: '6px' }} placeholder="Company & Team Size" />
              <textarea className="w-full px-4 py-3 text-sm outline-none resize-none h-24" style={{ border: '1px solid #E5E1D8', backgroundColor: 'var(--whq-bg)', borderRadius: '6px' }} placeholder={`What specific challenge are you facing with ${s.title}?`} />
              <button className="w-full py-3 rounded-lg font-semibold text-sm" style={{ backgroundColor: '#0B3C2D', color: '#FFFFFF', fontFamily: 'var(--font-display)' }} onClick={() => setModalOpen(false)}>
                Send Proposal Request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
