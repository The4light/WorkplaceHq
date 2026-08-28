﻿import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  Briefcase, 
  Building2, 
  TrendingUp, 
  ShieldCheck,
  UserCheck,
  FileText,
  Sparkles
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
    to: '/lagos-jobs/listings' 
  },
  { 
    icon: Sparkles, 
    label: 'Personal Branding', 
    desc: 'LinkedIn & professional positioning', 
    to: '/lagos-jobs/services' 
  },
  { 
    icon: FileText, 
    label: 'CV & Profile Audit', 
    desc: 'Human specialist review', 
    to: '/lagos-jobs/services' 
  },
  { 
    icon: UserCheck, 
    label: 'Career Coaching', 
    desc: '1-on-1 interview strategy', 
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
    role: 'Product Designer (Senior PM at Flutterwave)', 
    quote: 'Working directly with the career advisory team helped me reframe my experience. I landed 3 interviews in two weeks.',
    image: 'https://plus.unsplash.com/premium_photo-1661589836910-b3b0bf644bd5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    badge: '3 Offers Landed'
  },
  { 
    name: 'Tunde B.', 
    role: 'Graduate (Backend Engineer at MTN)', 
    quote: 'The direct placement team connected me with an enterprise employer looking for my specific tech stack.',
    image: 'https://plus.unsplash.com/premium_photo-1683140757395-ba8af5aa185f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    badge: 'Hired in 14 Days'
  },
  { 
    name: 'Fatimah Y.', 
    role: 'Marketing Lead at Sterling Bank', 
    quote: 'The personal branding and career strategy advisors gave me total clarity on my professional positioning and next steps.',
    image: 'https://images.unsplash.com/photo-1581464907815-29bdb6343d3c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    badge: '120% Pay Boost'
  },
]

export default function LJHome() {
  return (
    <div className="w-full overflow-x-hidden" style={{ backgroundColor: '#F4F5F7', minHeight: '100vh', fontFamily: 'var(--font-lj-body)' }}>
      
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center px-4 sm:px-6 pt-10 sm:pt-8 pb-10 overflow-hidden" style={{ minHeight: 'calc(100vh - 73px)' }}>
        <div className="max-w-[1440px] mx-auto relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Text */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6" style={{ backgroundColor: 'rgba(23,178,106,0.12)', color: '#17B26A', border: '1px solid rgba(23,178,106,0.25)' }}>
                <UserCheck className="w-3.5 h-3.5" /> Human-Led Career Services & Verified Roles
              </div>
              <h1 className="font-lj-display font-700 text-4xl sm:text-6xl md:text-7xl leading-[1.08] tracking-tight mb-6" style={{ color: '#0D0D0D' }}>
                Your Next Role<br />
                Starts Here.
              </h1>
              <p className="text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-xl" style={{ color: '#6B7280' }}>
                We connect you with real, verified jobs in Lagos and help you land them. From fixing your CV and optimizing your LinkedIn to 1-on-1 interview coaching, our career specialists guide you until you get hired.  
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  to="/lagos-jobs/services"
                  className="w-full sm:w-auto justify-center flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm text-white transition-all hover:-translate-y-0.5"
                  style={{ backgroundColor: '#17B26A', fontFamily: 'var(--font-lj-display)', boxShadow: '0 4px 24px rgba(23,178,106,0.35)' }}
                >
                  Explore Career Services <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/lagos-jobs/listings"
                  className="w-full sm:w-auto justify-center flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm transition-all hover:-translate-y-0.5"
                  style={{ backgroundColor: '#FFFFFF', color: '#0D0D0D', border: '1px solid #F4F5F7', fontFamily: 'var(--font-lj-display)' }}
                >
                  Browse Job Listings
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Main Hero Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1653565685060-e15e492a7fda?auto=format&fit=crop&w=800&q=80"
                    alt="Nigerian professionals collaborating in a modern office"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/60 via-transparent to-transparent" />
                </div>

                {/* Top Left Floating Badge */}
                <div className="absolute -top-5 -left-5 sm:-left-8 bg-white p-3.5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 z-20">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(23,178,106,0.12)' }}>
                    <TrendingUp className="w-5 h-5" style={{ color: '#17B26A' }} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Personalized Services</div>
                    <div className="font-lj-display font-700 text-sm" style={{ color: '#0D0D0D' }}>1-on-1 Consultations</div>
                  </div>
                </div>

                {/* Bottom Right Floating Tag */}
                <div className="absolute -bottom-6 -right-5 sm:-right-8 bg-[#0D0D0D] text-white p-4 rounded-2xl shadow-2xl border border-[#17B26A]/30 flex items-center gap-3 z-20">
                  <div className="w-9 h-9 rounded-full bg-[#17B26A]/20 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-[#17B26A]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Verified Specialists</div>
                    <div className="text-[11px] text-gray-300">Dedicated Career Advisors</div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Stats */}
          <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {stats.map(s => (
              <div key={s.label} className="p-4 sm:p-5 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '1px solid #F4F5F7' }}>
                <div className="font-lj-display font-700 text-2xl sm:text-3xl mb-1" style={{ color: '#0D0D0D' }}>{s.value}</div>
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
              <h2 className="font-lj-display font-700 text-2xl sm:text-4xl mb-2" style={{ color: '#0D0D0D' }}>
                Career Services
              </h2>
              <p className="text-sm sm:text-base max-w-2xl leading-relaxed" style={{ color: '#6B7280' }}>
                Empowering job seekers and ambitious professionals with human-led guidance, strategic positioning, and direct access to top employers across Nigeria.
              </p>
            </div>
            <Link to="/lagos-jobs/services" className="inline-flex items-center gap-1.5 text-sm font-semibold shrink-0" style={{ color: '#17B26A', fontFamily: 'var(--font-lj-display)' }}>
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
                  style={{ backgroundColor: '#FFFFFF', border: '1px solid #F4F5F7' }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(23,178,106,0.1)' }}>
                    <Icon className="w-5 h-5" style={{ color: '#17B26A' }} />
                  </div>
                  <div>
                    <div className="font-lj-display font-600 text-sm mb-0.5" style={{ color: '#0D0D0D' }}>{item.label}</div>
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
          <div className="relative p-6 sm:p-8 rounded-2xl overflow-hidden" style={{ backgroundColor: '#0D0D0D', border: '1px solid rgba(23,178,106,0.2)' }}>
            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>Live Counter</div>
                <div className="font-lj-display font-700 text-4xl sm:text-5xl text-white mb-1">14,247</div>
                <div className="text-sm text-white">active roles across Lagos, Abuja & remote</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full animate-pulse brand-dot-pulse" style={{ backgroundColor: '#17B26A' }} />
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>Updated continuously</span>
              </div>
              <Link
                to="/lagos-jobs/listings"
                className="w-full lg:w-auto inline-flex justify-center items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-white shrink-0"
                style={{ backgroundColor: '#17B26A', fontFamily: 'var(--font-lj-display)' }}
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
          <h2 className="font-lj-display font-700 text-2xl sm:text-4xl mb-6 sm:mb-8" style={{ color: '#0D0D0D' }}>Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {stories.map(s => (
              <div key={s.name} className="p-6 sm:p-7 rounded-2xl flex flex-col justify-between" style={{ backgroundColor: '#FFFFFF', border: '1px solid #F4F5F7' }}>
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold" style={{ backgroundColor: 'rgba(255,176,32,0.15)', color: '#FFB020' }}>
                      {s.badge}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed mb-6" style={{ color: '#0D0D0D' }}>"{s.quote}"</p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: '#F4F5F7' }}>
                  <img src={s.image} alt={s.name} className="w-10 h-10 rounded-full object-cover border" style={{ borderColor: '#17B26A' }} />
                  <div>
                    <div className="font-semibold text-sm" style={{ color: '#0D0D0D' }}>{s.name}</div>
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
          <div className="relative p-8 sm:p-12 rounded-3xl overflow-hidden border" style={{ backgroundColor: '#0D0D0D', borderColor: 'rgba(16,185,129,0.2)' }}>
            
            <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ backgroundColor: 'rgba(16,185,129,0.15)', color: '#10B981' }}>
                  <Building2 className="w-3.5 h-3.5" /> Powered by WorkplaceHQ
                </div>
                <h2 className="font-lj-display font-700 text-2xl sm:text-4xl text-white mb-4">
                  Need Enterprise Consulting or Team Upskilling?
                </h2>
                <p className="text-sm sm:text-base leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  Lagos Jobs is built by <strong>WorkplaceHQ</strong>, Africa’s leading management consulting and organizational performance firm. We help enterprise teams redesign operations, implement AI frameworks, and train high-performing talent.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                <Link 
                  to="/lagos-jobs/workplace" 
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all hover:opacity-90"
                  style={{ backgroundColor: '#10B981', color: '#0D0D0D', fontFamily: 'var(--font-lj-display)' }}
                >
                  Visit WorkplaceHQ <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  to="/lagos-jobs/services" 
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white border transition-all hover:bg-white/10" 
                  style={{ borderColor: 'rgba(255,255,255,0.25)', fontFamily: 'var(--font-lj-display)' }}
                >
                  Explore Career Services
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}