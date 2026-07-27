import { Target, Cpu, TrendingUp, RefreshCw, Link2 } from 'lucide-react'

const principles = [
  { icon: Target, title: 'Precision Focus', desc: 'We diagnose before prescribing. Every engagement starts with forensic analysis of what\'s actually holding your organization back.' },
  { icon: Cpu, title: 'Systems Thinking', desc: 'People, process, and technology are inseparable. We design interventions that address all three simultaneously.' },
  { icon: TrendingUp, title: 'Performance Culture', desc: 'We build cultures where high performance is the default — not the exception. Systems that reward output and enable growth.' },
  { icon: RefreshCw, title: 'Continuous Adaptation', desc: 'Markets evolve. We embed the capability for your organization to evolve faster than your competition.' },
]

const team = [
  { name: 'Emeka Okafor', role: 'CEO & Co-founder', focus: 'Operational Strategy' },
  { name: 'Ngozi Abiodun', role: 'Chief Consulting Officer', focus: 'Enterprise Transformation' },
  { name: 'Kwame Asante', role: 'Head of AI Practice', focus: 'AI & Automation' },
  { name: 'Zara Mensah', role: 'Head of Learning', focus: 'Training & Development' },
  { name: 'David Adeyemi', role: 'CX Practice Lead', focus: 'Customer Experience' },
  { name: 'Amina Hassan', role: 'Head of Research', focus: 'Insights & Analytics' },
]

export default function WHQAbout() {
  return (
    <div style={{ backgroundColor: '#FBF9F5', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>
      <div className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="pointer-events-none absolute -top-16 -right-16 w-[400px] h-[400px] rounded-full" style={{ background: '#D97706', filter: 'blur(120px)', opacity: 0.15 }} />
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="max-w-2xl">
            <h1 className="font-display font-700 text-[clamp(2rem,4vw,3.5rem)] leading-tight mb-6" style={{ color: '#111827' }}>
              We were built for the organizations that refuse to stay average.
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: '#6B7280' }}>
              WorkplaceHQ was founded on a simple premise: most organizations know what they want to achieve but lack the operational architecture to get there. We build that architecture — and we stay until it works.
            </p>
          </div>
        </div>
      </div>

      {/* Story */}
      <section className="px-6 py-16">
        <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="p-8 rounded-2xl" style={{ backgroundColor: '#0B3C2D', border: '1px solid rgba(16,185,129,0.2)' }}>
            <div className="font-display font-700 text-5xl text-white mb-2">2018</div>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>Founded in Lagos</p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[['50+', 'Clients'], ['12K+', 'Employees trained'], ['6', 'Practice areas'], ['94%', 'Retention rate']].map(([v, l]) => (
                <div key={l} className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="font-display font-700 text-2xl" style={{ color: '#10B981' }}>{v}</div>
                  <div className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display font-700 text-2xl mb-4" style={{ color: '#111827' }}>Our origin story</h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: '#6B7280' }}>
              WorkplaceHQ emerged from direct consulting experience inside fast-scaling African and global enterprises. We saw firsthand how organizations with ambitious goals routinely under-performed — not from lack of talent, but from structural incoherence.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#6B7280' }}>
              We built WorkplaceHQ to close that gap: a firm that operates at the intersection of technology, people science, and operational design — deploying integrated solutions rather than siloed recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="px-6 py-16">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-display font-700 text-[clamp(1.75rem,3vw,2.25rem)] mb-10" style={{ color: '#111827' }}>Our Core Principles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {principles.map(p => {
              const Icon = p.icon
              return (
                <div key={p.title} className="p-6 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E1D8' }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(11,60,45,0.07)' }}>
                    <Icon className="w-5 h-5" style={{ color: '#0B3C2D' }} />
                  </div>
                  <h3 className="font-display font-600 text-base mb-2" style={{ color: '#111827' }}>{p.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{p.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 py-16">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-display font-700 text-[clamp(1.75rem,3vw,2.25rem)] mb-10" style={{ color: '#111827' }}>Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {team.map(t => (
              <div key={t.name} className="p-6 rounded-2xl group" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E1D8' }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center font-display font-700 text-xl mb-4" style={{ backgroundColor: '#0B3C2D', color: '#10B981' }}>
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="font-display font-600 text-base mb-0.5" style={{ color: '#111827' }}>{t.name}</h3>
                <p className="text-sm font-medium mb-1" style={{ color: '#0B3C2D' }}>{t.role}</p>
                <p className="text-xs mb-4" style={{ color: '#9CA3AF' }}>{t.focus}</p>
                <a href="#" className="inline-flex items-center gap-1.5 text-xs font-medium" style={{ color: '#6B7280' }}>
                  <Link2 className="w-3.5 h-3.5" /> LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
