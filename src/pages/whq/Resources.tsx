import { useState } from 'react'
import { Download, FileText, Wrench, BarChart2, BookOpen, X } from 'lucide-react'

const tags = ['All', 'Whitepapers', 'Toolkits', 'Frameworks', 'Reports']

const resources = [
  { title: 'The AI Adoption Playbook 2025', tag: 'Whitepapers', icon: FileText, desc: '48-page guide to enterprise AI integration, from readiness to ROI measurement.' },
  { title: 'Operational Efficiency Toolkit', tag: 'Toolkits', icon: Wrench, desc: 'Templates, SOPs, and process maps for immediate deployment across ops teams.' },
  { title: 'OKR Architecture Framework', tag: 'Frameworks', icon: BookOpen, desc: 'Complete OKR design system including goal hierarchy, scoring, and review cadences.' },
  { title: 'African Enterprise Performance Report 2024', tag: 'Reports', icon: BarChart2, desc: 'Data from 120+ organizations on productivity, AI adoption, and talent metrics.' },
  { title: 'CX Transformation Blueprint', tag: 'Frameworks', icon: BookOpen, desc: 'Step-by-step framework for journey mapping, service design, and frontline training.' },
  { title: 'Remote Team Productivity Toolkit', tag: 'Toolkits', icon: Wrench, desc: 'Async communication structures, standups templates, and performance visibility systems.' },
]

export default function WHQResources() {
  const [activeTag, setActiveTag] = useState('All')
  const [modal, setModal] = useState<string | null>(null)

  const filtered = resources.filter(r => activeTag === 'All' || r.tag === activeTag)

  return (
    <div style={{ backgroundColor: '#FBF9F5', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>
      <div className="relative pt-32 pb-12 px-6 overflow-hidden">
        <div className="pointer-events-none absolute -top-16 -right-16 w-[400px] h-[400px] rounded-full" style={{ background: '#D97706', filter: 'blur(120px)', opacity: 0.15 }} />
        <div className="max-w-[1440px] mx-auto">
          <h1 className="font-display font-700 text-[clamp(2rem,4vw,3.5rem)] leading-tight mb-4" style={{ color: '#111827' }}>Resources Hub</h1>
          <p className="text-lg" style={{ color: '#6B7280' }}>Whitepapers, toolkits, frameworks, and reports — free for enterprise teams.</p>
        </div>
      </div>

      <section className="px-6 pb-20">
        <div className="max-w-[1440px] mx-auto">
          {/* Tag filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map(t => (
              <button
                key={t}
                onClick={() => setActiveTag(t)}
                className="px-4 py-1.5 rounded-full text-sm font-medium transition-all"
                style={{
                  backgroundColor: activeTag === t ? '#0B3C2D' : '#FFFFFF',
                  color: activeTag === t ? '#FFFFFF' : '#6B7280',
                  border: `1px solid ${activeTag === t ? '#0B3C2D' : '#E5E1D8'}`,
                }}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map(r => {
              const Icon = r.icon
              return (
                <div key={r.title} className="p-6 rounded-2xl flex flex-col gap-4 group" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E1D8' }}>
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(11,60,45,0.07)' }}>
                      <Icon className="w-5 h-5" style={{ color: '#0B3C2D' }} />
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium" style={{ backgroundColor: 'rgba(217,119,6,0.12)', color: '#92400E' }}>{r.tag}</span>
                  </div>
                  <div>
                    <h3 className="font-display font-600 text-base mb-2" style={{ color: '#111827' }}>{r.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{r.desc}</p>
                  </div>
                  <button
                    onClick={() => setModal(r.title)}
                    className="mt-auto flex items-center gap-2 text-sm font-semibold transition-all"
                    style={{ color: '#0B3C2D', fontFamily: 'var(--font-display)' }}
                  >
                    <Download className="w-4 h-4" /> Download Free
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {modal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' }} onClick={() => setModal(null)}>
          <div className="w-full max-w-md p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF' }} onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-display font-700 text-xl" style={{ color: '#111827' }}>Download Resource</h3>
              <button onClick={() => setModal(null)}><X className="w-4 h-4" style={{ color: '#9CA3AF' }} /></button>
            </div>
            <p className="text-sm mb-5" style={{ color: '#6B7280' }}><strong style={{ color: '#0B3C2D' }}>{modal}</strong> — enter your details to receive the download link.</p>
            <div className="flex flex-col gap-3">
              <input className="w-full px-4 py-3 text-sm outline-none" style={{ border: '1px solid #E5E1D8', backgroundColor: '#FBF9F5', borderRadius: '6px' }} placeholder="Full Name" />
              <input className="w-full px-4 py-3 text-sm outline-none" type="email" style={{ border: '1px solid #E5E1D8', backgroundColor: '#FBF9F5', borderRadius: '6px' }} placeholder="Corporate Email" />
              <button className="w-full py-3 rounded-lg font-semibold text-sm" style={{ backgroundColor: '#0B3C2D', color: '#FFFFFF', fontFamily: 'var(--font-display)' }} onClick={() => setModal(null)}>
                Get Instant Access
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
