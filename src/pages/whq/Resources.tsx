import { useState } from 'react'
import { Download, FileText, Wrench, BarChart2, BookOpen, X } from 'lucide-react'

const tags = ['All', 'Whitepapers', 'Toolkits', 'Frameworks', 'Reports']

const resources = [
  { 
    title: 'The AI Adoption Playbook 2025', 
    tag: 'Whitepapers', 
    icon: FileText,
    desc: '48-page guide to enterprise AI integration, from readiness to ROI measurement.',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
    type: 'E-BOOK / PDF'
  },
  { 
    title: 'Operational Efficiency Toolkit', 
    tag: 'Toolkits', 
    icon: Wrench,
    desc: 'Templates, SOPs, and process maps for immediate deployment across ops teams.',
    coverImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
    type: 'ZIP / TEMPLATES'
  },
  { 
    title: 'OKR Architecture Framework', 
    tag: 'Frameworks', 
    icon: BookOpen,
    desc: 'Complete OKR design system including goal hierarchy, scoring, and review cadences.',
    coverImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80',
    type: 'GUIDE & SHEET'
  },
  { 
    title: 'African Enterprise Performance Report', 
    tag: 'Reports', 
    icon: BarChart2,
    desc: 'Data from 120+ organizations on productivity, AI adoption, and talent metrics.',
    coverImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80',
    type: 'ANNUAL REPORT'
  },
  { 
    title: 'CX Transformation Blueprint', 
    tag: 'Frameworks', 
    icon: BookOpen,
    desc: 'Step-by-step framework for journey mapping, service design, and frontline training.',
    coverImage: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80',
    type: 'BLUEPRINT'
  },
  { 
    title: 'Remote Team Productivity Toolkit', 
    tag: 'Toolkits', 
    icon: Wrench,
    desc: 'Async communication structures, standups templates, and performance visibility systems.',
    coverImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
    type: 'SYSTEM KIT'
  },
]

export default function WHQResources() {
  const [activeTag, setActiveTag] = useState('All')
  const [modal, setModal] = useState<string | null>(null)

  const filtered = resources.filter(r => activeTag === 'All' || r.tag === activeTag)

  return (
    <div style={{ backgroundColor: 'var(--whq-bg)', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>
      
      {/* Header Section with Brand Ring Graphic */}
      <div className="relative pt-32 pb-12 px-6 overflow-hidden">
        {/* Subtle Out-of-Frame Thin Ring + Dot Graphic */}
        <div className="absolute -top-16 -right-16 w-80 h-80 pointer-events-none z-0 hidden sm:block">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="44" stroke="#1DA54A" strokeWidth="2" opacity="0.35" />
            <circle cx="50" cy="50" r="14" fill="#1DA54A" opacity="0.25" className="brand-dot-pulse" />
          </svg>
        </div>

        <div className="max-w-[1440px] mx-auto relative z-10">
          <span className="text-xs font-bold tracking-wider uppercase mb-2 block" style={{ color: '#1DA54A' }}>
            Knowledge Base
          </span>
          <h1 className="font-display font-700 text-[clamp(2rem,4vw,3.5rem)] leading-tight mb-4" style={{ color: '#111827' }}>
            Resources Hub
          </h1>
          <p className="text-lg" style={{ color: '#6B7280' }}>
            Whitepapers, toolkits, frameworks, and reports — free for enterprise teams.
          </p>
        </div>
      </div>

      <section className="px-6 pb-20 relative">
        <div className="max-w-[1440px] mx-auto">
          {/* Tag filter */}
          <div className="flex flex-wrap gap-2 mb-10">
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

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map(r => {
              const Icon = r.icon
              return (
                <div 
                  key={r.title} 
                  className="rounded-2xl flex flex-col justify-between group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/5" 
                  style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E1D8' }}
                >
                  {/* Book Preview Header Container */}
                  <div className="relative h-56 w-full overflow-hidden bg-[#07271D] flex items-center justify-center p-6">
                    {/* Background Overlay Image */}
                    {/* TODO: Replace with approved photography — all people shown must be Black, real work settings only (meetings, training rooms, laptops, collaboration), no lifestyle or abstract images */}
                    <img
                      src={r.coverImage} 
                      alt={r.title} 
                      className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B3C2D] via-transparent to-black/30" />

                    {/* Top Left: Category Icon Badge */}
                    <div className="absolute top-4 left-4 z-20 w-9 h-9 rounded-xl flex items-center justify-center shadow-md" style={{ backgroundColor: '#FFFFFF' }}>
                      <Icon className="w-4 h-4" style={{ color: '#0B3C2D' }} />
                    </div>

                    {/* Top Right: Tag Pill */}
                    <span className="absolute top-4 right-4 z-20 px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase shadow-sm" style={{ backgroundColor: 'rgba(217,119,6,0.18)', color: '#F59E0B', backdropFilter: 'blur(4px)' }}>
                      {r.tag}
                    </span>

                    {/* 3D Visual Book Mockup */}
                    <div className="relative z-10 w-36 h-44 rounded-r-md rounded-l-xs shadow-2xl transition-transform duration-300 group-hover:rotate-2 group-hover:scale-105 flex flex-col justify-between p-3.5 border-l-4 border-[#1DA54A]" 
                         style={{ backgroundColor: '#0B3C2D', backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.35) 100%)' }}>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-[9px] font-mono tracking-wider text-[#1DA54A] uppercase font-semibold">
                          {r.type}
                        </span>
                        <div className="w-2 h-2 rounded-full bg-amber-400" />
                      </div>

                      <div>
                        <span className="text-[9px] font-bold tracking-widest text-white/50 block uppercase">WorkplaceHQ</span>
                        <h4 className="font-display font-700 text-xs text-white leading-tight mt-1 line-clamp-3">
                          {r.title}
                        </h4>
                      </div>

                      <div className="pt-2 border-t border-white/10 flex justify-between items-center">
                        <span className="text-[8px] text-white/60">Free Download</span>
                        <span className="text-[8px] text-[#1DA54A] font-semibold">2026</span>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="font-display font-700 text-lg mb-2 line-clamp-2" style={{ color: '#111827' }}>
                        {r.title}
                      </h3>
                      <p className="text-xs leading-relaxed mb-6" style={{ color: '#6B7280' }}>
                        {r.desc}
                      </p>
                    </div>

                    {/* Action Button - Pure Green (#1DA54A) on Hover */}
                    <button
                      onClick={() => setModal(r.title)}
                      className="w-full py-3 rounded-xl flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider transition-all border duration-200 hover:!bg-[#1DA54A] hover:!border-[#1DA54A] hover:!text-[#0B3C2D]"
                      style={{ borderColor: '#0B3C2D', color: '#0B3C2D', backgroundColor: 'transparent', fontFamily: 'var(--font-display)' }}
                    >
                      <Download className="w-4 h-4" /> Download Free
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Download Modal */}
      {modal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }} onClick={() => setModal(null)}>
          <div className="w-full max-w-md p-8 rounded-2xl shadow-2xl relative" style={{ backgroundColor: '#FFFFFF' }} onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-display font-700 text-xl" style={{ color: '#111827' }}>Download Resource</h3>
              <button onClick={() => setModal(null)} className="p-1 rounded-lg hover:bg-gray-100"><X className="w-4 h-4" style={{ color: '#9CA3AF' }} /></button>
            </div>
            <p className="text-xs leading-relaxed mb-6" style={{ color: '#6B7280' }}>
              Enter your details to receive instant access to <strong style={{ color: '#0B3C2D' }}>{modal}</strong>.
            </p>
            <div className="flex flex-col gap-3">
              <input className="w-full px-4 py-3 text-sm outline-none transition-all focus:border-[#0B3C2D]" style={{ border: '1px solid #E5E1D8', backgroundColor: 'var(--whq-bg)', borderRadius: '8px' }} placeholder="Full Name" />
              <input className="w-full px-4 py-3 text-sm outline-none transition-all focus:border-[#0B3C2D]" type="email" style={{ border: '1px solid #E5E1D8', backgroundColor: 'var(--whq-bg)', borderRadius: '8px' }} placeholder="Corporate Email" />
              <button className="w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-opacity hover:opacity-95 mt-2" style={{ backgroundColor: '#0B3C2D', color: '#FFFFFF', fontFamily: 'var(--font-display)' }} onClick={() => setModal(null)}>
                Get Instant Access
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
