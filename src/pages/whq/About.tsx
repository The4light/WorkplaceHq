import { Target, Cpu, TrendingUp, RefreshCw, UserCheck } from 'lucide-react'
import SEO from '../../components/SEO'

const principles = [
  { icon: Target, title: 'Precision Focus', desc: 'We diagnose before prescribing. Every engagement starts with forensic analysis of what\'s actually holding your organization back.' },
  { icon: Cpu, title: 'Systems Thinking', desc: 'People, process, and technology are inseparable. We design interventions that address all three simultaneously.' },
  { icon: TrendingUp, title: 'Performance Culture', desc: 'We build cultures where high performance is the default, not the exception. Systems that reward output and enable growth.' },
  { icon: RefreshCw, title: 'Continuous Adaptation', desc: 'Markets evolve. We embed the capability for your organization to evolve faster than your competition.' },
]

const team = [
  { 
    name: 'Mrs. Oti Benson', 
    role: 'Leadership Team',
    image: '/Otito-benson.jpg' 
  },
  { 
    name: 'Ms. Glory', 
    role: 'Leadership Team',
    image: '/glory.jpeg' 
  },
  { 
    name: 'Ms. Anna', 
    role: 'Leadership Team',
    image: '/annie.jpg' 
  },
]

export default function WHQAbout() {
  return (
    <div style={{ backgroundColor: 'var(--whq-bg)', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>
      <SEO
        title="About WorkplaceHQ | Enterprise Transformation & Career Services"
        description="Learn how WorkplaceHQ diagnoses performance gaps and builds training, workshop, and consulting programs that turn teams into high-performing systems."
        path="/about"
      />
        {/* Hero Section */}
      <div className="relative pt-28 pb-20 px-6 overflow-hidden">
        {/* Subtle out-of-frame Thin Ring + Dot Graphic */}
        <div className="absolute -top-20 -right-20 w-80 h-80 pointer-events-none z-0 hidden sm:block">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="44" stroke="#1DA54A" strokeWidth="2" opacity="0.4" />
            <circle cx="50" cy="50" r="14" fill="#1DA54A" opacity="0.3" className="brand-dot-pulse" />
          </svg>
        </div>

        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold tracking-wider uppercase mb-3 block" style={{ color: '#1DA54A' }}>
                Our Purpose
              </span>
              <h1 className="font-display font-700 text-[clamp(2.25rem,4.5vw,3.75rem)] leading-tight mb-6" style={{ color: '#111827' }}>
                Helping organisations build the teams they need to grow.
              </h1>
              <p className="text-lg leading-relaxed" style={{ color: '#6B7280' }}>
                WorkplaceHQ was founded on one premise: an organisation's performance is a function of its people, not its plans. We are a workforce transformation company helping African organisations build AI-ready, high-performing teams. We design and deliver structured training, workshops, and consulting focused on productivity, operational excellence, customer experience, and AI adoption. We work with organisations that know their teams are capable of more and are ready to act on it.
              </p>
            </div>

            {/* Right Hero Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1621570072965-b25917de6ec9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="WorkplaceHQ Communication & Training Facilitator"
                  className="w-full h-[440px] sm:h-[480px] object-cover object-center"
                />
              </div>

              {/* Decorative Green Accent Outline behind card */}
              <div 
                className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border-2 pointer-events-none z-0 hidden sm:block" 
                style={{ borderColor: '#1DA54A', opacity: 0.3 }} 
              />
            </div>

          </div>
        </div>
      </div>

      {/* Story & Stats */}
      <section className="px-6 py-16">
        <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Dark Card with Stats & Subtle Ring Element */}
          <div className="relative p-8 sm:p-10 rounded-2xl overflow-hidden" style={{ backgroundColor: '#0B3C2D', border: '1px solid rgba(29,165,74,0.2)' }}>
            <div className="absolute -bottom-12 -right-12 w-48 h-48 pointer-events-none opacity-15">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="44" stroke="#FFFFFF" strokeWidth="2.5" />
                <circle cx="50" cy="50" r="14" fill="#FFFFFF" className="brand-dot-pulse" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="font-display font-700 text-5xl text-white mb-2">2018</div>
              <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.6)' }}>Founded in Lagos</p>
              <div className="grid grid-cols-2 gap-4">
                {[['50+', 'Clients'], ['12K+', 'Employees trained'], ['6', 'Practice areas'], ['94%', 'Retention rate']].map(([v, l]) => (
                  <div key={l} className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <div className="font-display font-700 text-2xl" style={{ color: '#1DA54A' }}>{v}</div>
                    <div className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Text & Image Frame */}
          <div className="space-y-6">
            <h2 className="font-display font-700 text-2xl sm:text-3xl" style={{ color: '#111827' }}>Our origin story</h2>
            <p className="text-base leading-relaxed" style={{ color: '#6B7280' }}>
              We help organisations build, retain, and develop the talent that drives results through practical training, workshops, and consulting that create real workplace outcomes.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#6B7280' }}>
              To become Africa's most trusted partner for workplace learning and organisational performance: equipping companies with the skills, systems, and support they need to lead in a changing world of work.
            </p>
            
            {/* Contextual Team Photography */}
            <div className="rounded-xl overflow-hidden border pt-2" style={{ borderColor: '#E5E1D8' }}>
              <img
                src="https://images.unsplash.com/photo-1785919000360-a9a042c31c06?auto=format&fit=crop&w=1000&q=80"
                alt="WorkplaceHQ consultants collaborating"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
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

     {/* Team Section */}
      <section className="px-6 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold tracking-wider uppercase block mb-2" style={{ color: '#1DA54A' }}>
              Leadership & Team
            </span>
            <h2 className="font-display font-700 text-[clamp(1.75rem,3vw,2.25rem)]" style={{ color: '#111827' }}>
              The people behind WorkplaceHQ
            </h2>
          </div>

          {/* Dynamic Grid: Auto-expands to fill the space evenly */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {team.map((t) => (
              <div 
                key={t.name} 
                className="w-full rounded-2xl group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-950/10 overflow-hidden flex flex-col justify-between" 
                style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E1D8' }}
              >
                <div>
                  {/* Image Container - Big Focal Point */}
                  <div className="w-full h-80 sm:h-96 overflow-hidden relative bg-[#0B3C2D]/5">
                    {t.image ? (
                      <img
                        src={t.image} 
                        alt={t.name} 
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center gap-2" style={{ backgroundColor: '#0B3C2D' }}>
                        <div className="w-16 h-16 rounded-full flex items-center justify-center font-display font-700 text-2xl text-white bg-white/10 border border-white/20">
                          {t.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="text-xs font-mono text-white/60">Photo Coming Soon</span>
                      </div>
                    )}
                  </div>

                  {/* Info Area */}
                  <div className="p-6">
                    <h3 className="font-display font-700 text-xl leading-snug mb-1" style={{ color: '#111827' }}>
                      {t.name}
                    </h3>
                    <p className="text-xs font-semibold tracking-wide uppercase" style={{ color: '#1DA54A' }}>
                      {t.role}
                    </p>
                  </div>
                </div>

                {/* Footer Tag */}
                <div className="px-6 pb-6 pt-2">
                  <div className="pt-4 border-t flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-gray-400" style={{ borderColor: '#F3F0E6' }}>
                    <span className="inline-flex items-center gap-1.5" style={{ color: '#6B7280' }}>
                      <UserCheck className="w-3.5 h-3.5" style={{ color: '#0B3C2D' }} /> HQ Executive
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}