import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  Briefcase, 
  Zap, 
  Building2, 
  TrendingUp, 
  CheckCircle2,  
  PlaneTakeoff, 
  GraduationCap, 
  ShieldCheck,
  UserCheck,
  PhoneCall,
  FileText
} from 'lucide-react'


const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const navigationItems = [
  { 
    icon: Briefcase, 
    label: 'Job Listings', 
    desc: 'Explore verified Lagos roles', 
    to: '/lagos-jobs' 
  },
  { 
    icon: PlaneTakeoff, 
    label: 'Travel Advisory', 
    desc: '1-on-1 migration consulting', 
    to: '/lagos-jobs/services' 
  },
  { 
    icon: GraduationCap, 
    label: 'Study Abroad', 
    desc: 'University & visa placement', 
    to: '/lagos-jobs/services' 
  },
  { 
    icon: FileText, 
    label: 'CV & Profile Audit', 
    desc: 'Human specialist review', 
    to: '/lagos-jobs/services' 
  },
  { 
    icon: LinkedinIcon, 
    label: 'Executive Placement', 
    desc: 'Direct corporate sourcing', 
    to: '/lagos-jobs/services' 
  },
  { 
    icon: Building2, 
    label: 'WorkplaceHQ', 
    desc: 'Enterprise transformation', 
    to: '/lagos-jobs/workplace' 
  },
]

const stats = [
  { value: '14,200+', label: 'Active Job Listings' },
  { value: '38K+', label: 'Careers Accelerated' },
  { value: '92%', label: 'Consultation Satisfaction' },
  { value: '4.8★', label: 'Client Rating' },
]

const stories = [
  { 
    name: 'Adaeze K.', 
    role: 'Product Designer → Senior PM, Flutterwave', 
    quote: 'Working directly with the career advisory team helped me reframe my experience. I landed 3 interviews in two weeks.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    badge: '3 Offers Landed'
  },
  { 
    name: 'Tunde B.', 
    role: 'Unemployed → Backend Engineer, MTN', 
    quote: 'The direct placement team connected me with an enterprise employer looking for my specific tech stack.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    badge: 'Hired in 14 Days'
  },
  { 
    name: 'Fatimah Y.', 
    role: 'Graduate → Marketing Lead, Sterling Bank', 
    quote: 'The study abroad & career transition advisors gave me clarity on my visa pathway and next steps.',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=200&q=80',
    badge: '120% Pay Boost'
  },
]

export default function LJHome() {
  return (
    <div className="w-full overflow-x-hidden" style={{ backgroundColor: '#F4F7F6', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>
      
      {/* Hero Section */}
      <section className="relative pt-20 md:pt-28 pb-12 md:pb-24 px-4 sm:px-6 overflow-hidden">
        {/* Responsive Ambient Spheres */}
        <div className="pointer-events-none absolute -top-16 -right-16 w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] rounded-full" style={{ background: '#FF5A36', filter: 'blur(100px)', opacity: 0.22 }} />
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-[280px] sm:w-[550px] h-[280px] sm:h-[550px] rounded-full" style={{ background: '#06B6D4', filter: 'blur(120px)', opacity: 0.18 }} />

        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Text */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6" style={{ backgroundColor: 'rgba(6,182,212,0.12)', color: '#06B6D4', border: '1px solid rgba(6,182,212,0.25)' }}>
                <UserCheck className="w-3.5 h-3.5" /> Human-Led Advisory & Verified Roles
              </div>
              <h1 className="font-display font-700 text-4xl sm:text-6xl md:text-7xl leading-[1.08] tracking-tight mb-6" style={{ color: '#0D131A' }}>
                Your Next Role<br />
                <span style={{ color: '#FF5A36' }}>Starts</span>{' '}
                <span style={{ color: '#06B6D4' }}>Here.</span>
              </h1>
              <p className="text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-xl" style={{ color: '#4B5563' }}>
                From verified Lagos career opportunities to 1-on-1 migration and study abroad advisory — connect directly with specialists dedicated to advancing your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  to="/lagos-jobs/services"
                  className="w-full sm:w-auto justify-center flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm text-white transition-all hover:-translate-y-0.5"
                  style={{ backgroundColor: '#FF5A36', fontFamily: 'var(--font-display)', boxShadow: '0 4px 24px rgba(255,90,54,0.35)' }}
                >
                  Explore Advisory Services <ArrowRight className="w-4 h-4" />
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

            {/* Modern Hero Image with Overflowing Badge Elements */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Main Hero Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" 
                    alt="African professionals collaborating" 
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2C34]/60 via-transparent to-transparent" />
                </div>

                {/* Top Left Floating Badge */}
                <div className="absolute -top-5 -left-5 sm:-left-8 bg-white p-3.5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 z-20">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(255,90,54,0.12)' }}>
                    <TrendingUp className="w-5 h-5" style={{ color: '#FF5A36' }} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Personalized Advisory</div>
                    <div className="font-display font-700 text-sm" style={{ color: '#0D131A' }}>1-on-1 Consultations</div>
                  </div>
                </div>

                {/* Bottom Right Floating Tag */}
                <div className="absolute -bottom-6 -right-5 sm:-right-8 bg-[#0F2C34] text-white p-4 rounded-2xl shadow-2xl border border-cyan-500/30 flex items-center gap-3 z-20">
                  <div className="w-9 h-9 rounded-full bg-[#06B6D4]/20 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-[#06B6D4]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-cyan-300">Verified Personnel</div>
                    <div className="text-[11px] text-gray-300">Dedicated Service Managers</div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Stats */}
          <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {stats.map(s => (
              <div key={s.label} className="p-4 sm:p-5 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '1px solid #D6E2E0' }}>
                <div className="font-display font-700 text-2xl sm:text-3xl mb-1" style={{ color: '#FF5A36' }}>{s.value}</div>
                <div className="text-xs sm:text-sm" style={{ color: '#6B7280' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Navigation Hub */}
      <section className="px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="font-display font-700 text-2xl sm:text-4xl mb-2" style={{ color: '#0D131A' }}>Advisory & Career Services</h2>
              <p className="text-sm sm:text-base" style={{ color: '#6B7280' }}>Connect directly with verified personnel for travel, study, and recruitment.</p>
            </div>
            <Link to="/lagos-jobs/services" className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: '#06B6D4', fontFamily: 'var(--font-display)' }}>
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {navigationItems.map(item => {
              const Icon = item.icon
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className="p-5 rounded-2xl flex flex-col justify-between gap-3 group transition-all hover:-translate-y-1 hover:shadow-lg"
                  style={{ backgroundColor: '#FFFFFF', border: '1px solid #D6E2E0' }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(6,182,212,0.1)' }}>
                    <Icon className="w-5 h-5" style={{ color: '#06B6D4' }} />
                  </div>
                  <div>
                    <div className="font-display font-600 text-sm mb-0.5" style={{ color: '#0D131A' }}>{item.label}</div>
                    <div className="text-xs" style={{ color: '#9CA3AF' }}>{item.desc}</div>
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
                <div className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>Live Counter</div>
                <div className="font-display font-700 text-4xl sm:text-5xl text-white mb-1">14,247</div>
                <div className="text-sm" style={{ color: '#06B6D4' }}>active roles across Lagos, Abuja & remote</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ backgroundColor: '#10B981' }} />
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>Updated continuously</span>
              </div>
              <Link
                to="/lagos-jobs/listings"
                className="w-full lg:w-auto inline-flex justify-center items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-white shrink-0"
                style={{ backgroundColor: '#FF5A36', fontFamily: 'var(--font-display)' }}
              >
                Browse Active Jobs <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-display font-700 text-2xl sm:text-4xl mb-6 sm:mb-8" style={{ color: '#0D131A' }}>Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {stories.map(s => (
              <div key={s.name} className="p-6 sm:p-7 rounded-2xl flex flex-col justify-between" style={{ backgroundColor: '#FFFFFF', border: '1px solid #D6E2E0' }}>
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold" style={{ backgroundColor: 'rgba(6,182,212,0.12)', color: '#06B6D4' }}>
                      {s.badge}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed mb-6" style={{ color: '#0D131A' }}>"{s.quote}"</p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: '#F0F4F3' }}>
                  <img src={s.image} alt={s.name} className="w-10 h-10 rounded-full object-cover border" style={{ borderColor: '#06B6D4' }} />
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

      {/* WorkplaceHQ Bridge CTA Section */}
      <section className="px-4 sm:px-6 pb-12 sm:pb-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="relative p-8 sm:p-12 rounded-3xl overflow-hidden border" style={{ backgroundColor: '#0B3C2D', borderColor: 'rgba(16,185,129,0.2)' }}>
            
            {/* Subtle Brand Ring Overlay */}
            <div className="absolute -bottom-16 -right-16 w-80 h-80 pointer-events-none opacity-20 hidden sm:block">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="44" stroke="#FFFFFF" strokeWidth="2" />
                <circle cx="50" cy="50" r="14" fill="#FFFFFF" />
              </svg>
            </div>

            <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ backgroundColor: 'rgba(16,185,129,0.15)', color: '#10B981' }}>
                  <Building2 className="w-3.5 h-3.5" /> Powered by WorkplaceHQ
                </div>
                <h2 className="font-display font-700 text-2xl sm:text-4xl text-white mb-4">
                  Need Enterprise Consulting or Team Upskilling?
                </h2>
                <p className="text-sm sm:text-base leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  Lagos Jobs is built by <strong>WorkplaceHQ</strong> — Africa’s leading management consulting and organizational performance firm. We help enterprise teams redesign operations, implement AI frameworks, and train high-performing talent.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                <Link 
                  to="/lagos-jobs/workplace" 
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all hover:bg-emerald-400" 
                  style={{ backgroundColor: '#10B981', color: '#0B3C2D', fontFamily: 'var(--font-display)' }}
                >
                  Visit WorkplaceHQ <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  to="/lagos-jobs/services" 
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white border transition-all hover:bg-white/10" 
                  style={{ borderColor: 'rgba(255,255,255,0.25)', fontFamily: 'var(--font-display)' }}
                >
                  Explore Advisory Services
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}