import { Link } from 'react-router-dom'
import { ArrowRight, FileText, Link2, Globe, Palette, User, Briefcase, Zap } from 'lucide-react'

const tools = [
  { icon: FileText, label: 'CV Optimiser', desc: 'ATS-proof your resume', to: '/lagos-jobs/tools?tab=cv' },
  { icon: Link2, label: 'LinkedIn Optimiser', desc: 'Boost your profile impact', to: '/lagos-jobs/tools?tab=linkedin' },
  { icon: Palette, label: 'Portfolio Creator', desc: 'Showcase your best work', to: '/lagos-jobs/tools?tab=portfolio' },
  { icon: Globe, label: 'Website Creator', desc: 'Personal site in minutes', to: '/lagos-jobs/tools?tab=website' },
  { icon: User, label: 'Personal Branding', desc: 'Define your positioning', to: '/lagos-jobs/tools?tab=branding' },
  { icon: Briefcase, label: 'Job Listings', desc: 'Curated Lagos roles', to: '/lagos-jobs/tools?tab=jobs' },
]

const stats = [
  { value: '14,200+', label: 'Active Job Listings' },
  { value: '38K+', label: 'Careers Accelerated' },
  { value: '92%', label: 'Interview Success Rate' },
  { value: '4.8★', label: 'User Rating' },
]

const stories = [
  { name: 'Adaeze K.', role: 'Product Designer → Senior PM, Flutterwave', quote: 'The CV tool transformed my resume in 20 minutes. I landed 3 interviews that week.' },
  { name: 'Tunde B.', role: 'Unemployed → Backend Engineer, MTN', quote: 'Lagos Job\'s tools helped me package 2 years of freelance into a story employers wanted to hire.' },
  { name: 'Fatimah Y.', role: 'Graduate → Marketing Lead, Sterling Bank', quote: 'I used the Personal Branding guide to define my niche. Changed everything.' },
]

export default function LJHome() {
  return (
    <div className="w-full overflow-x-hidden" style={{ backgroundColor: '#F4F7F6', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>
      {/* Hero */}
      <section className="relative pt-20 md:pt-32 pb-12 md:pb-24 px-4 sm:px-6 overflow-hidden">
        {/* Responsive Ambient Spheres */}
        <div className="pointer-events-none absolute -top-16 -right-16 w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] rounded-full" style={{ background: '#FF5A36', filter: 'blur(100px)', opacity: 0.22 }} />
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-[280px] sm:w-[550px] h-[280px] sm:h-[550px] rounded-full" style={{ background: '#06B6D4', filter: 'blur(120px)', opacity: 0.18 }} />

        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6" style={{ backgroundColor: 'rgba(6,182,212,0.12)', color: '#06B6D4', border: '1px solid rgba(6,182,212,0.25)' }}>
              <Zap className="w-3 h-3" /> Africa's Career Acceleration Engine
            </div>
            <h1 className="font-display font-700 text-3xl sm:text-6xl md:text-7xl leading-[1.08] tracking-tight mb-6" style={{ color: '#0D131A' }}>
              Your Next Role<br />
              <span style={{ color: '#FF5A36' }}>Starts</span>{' '}
              <span style={{ color: '#06B6D4' }}>Here.</span>
            </h1>
            <p className="text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-xl" style={{ color: '#4B5563' }}>
              Six powerful tools. Zero logins. From resume to job offer — Lagos Job gives you everything you need to land your next career move, fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                to="/lagos-jobs/tools"
                className="w-full sm:w-auto justify-center flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm text-white transition-all hover:-translate-y-0.5"
                style={{ backgroundColor: '#FF5A36', fontFamily: 'var(--font-display)', boxShadow: '0 4px 24px rgba(255,90,54,0.35)' }}
              >
                Launch Tools Hub <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/lagos-jobs/listings"
                className="w-full sm:w-auto justify-center flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm transition-all hover:-translate-y-0.5"
                style={{ backgroundColor: '#FFFFFF', color: '#0D131A', border: '1px solid #D6E2E0', fontFamily: 'var(--font-display)' }}
              >
                Browse Job Listings
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {stats.map(s => (
              <div key={s.label} className="p-4 sm:p-5 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '1px solid #D6E2E0' }}>
                <div className="font-display font-700 text-2xl sm:text-3xl mb-1" style={{ color: '#FF5A36' }}>{s.value}</div>
                <div className="text-xs sm:text-sm" style={{ color: '#6B7280' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="font-display font-700 text-2xl sm:text-4xl mb-2" style={{ color: '#0D131A' }}>The Tools Hub</h2>
              <p className="text-sm sm:text-base" style={{ color: '#6B7280' }}>Six zero-auth career tools built for Africa's job market.</p>
            </div>
            <Link to="/lagos-jobs/tools" className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: '#06B6D4', fontFamily: 'var(--font-display)' }}>
              Open All Tools <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {tools.map(t => {
              const Icon = t.icon
              return (
                <Link
                  key={t.label}
                  to={t.to}
                  className="p-5 rounded-2xl flex flex-col gap-3 group transition-all hover:-translate-y-1 hover:shadow-lg"
                  style={{ backgroundColor: '#FFFFFF', border: '1px solid #D6E2E0' }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(6,182,212,0.1)' }}>
                    <Icon className="w-5 h-5" style={{ color: '#06B6D4' }} />
                  </div>
                  <div>
                    <div className="font-display font-600 text-sm mb-0.5" style={{ color: '#0D131A' }}>{t.label}</div>
                    <div className="text-xs" style={{ color: '#9CA3AF' }}>{t.desc}</div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Live Job Counter Widget */}
      <section className="px-4 sm:px-6 py-8 sm:py-10">
        <div className="max-w-[1440px] mx-auto">
          <div className="relative p-6 sm:p-8 rounded-2xl overflow-hidden" style={{ backgroundColor: '#0F2C34', border: '1px solid rgba(6,182,212,0.2)' }}>
            <div className="pointer-events-none absolute -top-8 -right-8 w-48 h-48 rounded-full" style={{ background: '#FF5A36', filter: 'blur(80px)', opacity: 0.25 }} />
            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>Live counter</div>
                <div className="font-display font-700 text-4xl sm:text-5xl text-white mb-1">14,247</div>
                <div className="text-sm" style={{ color: '#06B6D4' }}>active roles across Lagos, Abuja & remote</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ backgroundColor: '#10B981' }} />
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>Updated every 6 hours</span>
              </div>
              <Link
                to="/lagos-jobs/listings"
                className="w-full lg:w-auto inline-flex justify-center items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-white shrink-0"
                style={{ backgroundColor: '#FF5A36', fontFamily: 'var(--font-display)' }}
              >
                Browse All Jobs <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-display font-700 text-2xl sm:text-4xl mb-6 sm:mb-8" style={{ color: '#0D131A' }}>Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-4 sm:gap-5">
            {stories.map(s => (
              <div key={s.name} className="p-6 sm:p-7 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '1px solid #D6E2E0' }}>
                <p className="text-sm sm:text-base leading-relaxed mb-5" style={{ color: '#0D131A' }}>"{s.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm" style={{ backgroundColor: '#0F2C34', color: '#06B6D4' }}>
                    {s.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: '#0D131A' }}>{s.name}</div>
                    <div className="text-xs" style={{ color: '#9CA3AF' }}>{s.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 pb-12 sm:pb-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="relative p-8 sm:p-12 rounded-2xl overflow-hidden text-center" style={{ backgroundColor: '#0F2C34' }}>
            <div className="pointer-events-none absolute -top-12 -right-12 w-64 h-64 rounded-full" style={{ background: '#FF5A36', filter: 'blur(80px)', opacity: 0.25 }} />
            <div className="pointer-events-none absolute -bottom-12 -left-12 w-64 h-64 rounded-full" style={{ background: '#06B6D4', filter: 'blur(100px)', opacity: 0.2 }} />
            <div className="relative z-10">
              <h2 className="font-display font-700 text-2xl sm:text-4xl lg:text-5xl text-white mb-3 sm:mb-4">Your dream role is 6 tools away.</h2>
              <p className="text-sm sm:text-base mb-6 sm:mb-8" style={{ color: 'rgba(255,255,255,0.65)' }}>No account. No credit card. Just results.</p>
              <Link to="/lagos-jobs/tools" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-sm text-white" style={{ backgroundColor: '#FF5A36', fontFamily: 'var(--font-display)' }}>
                Launch Free Tools <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}