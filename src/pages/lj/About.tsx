import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'
import SEO from '../../components/SEO'

const values = [
  { title: 'Speed Over Friction', desc: 'Every tool is zero-auth, zero-friction. You should be applying in minutes, not setting up accounts.' },
  { title: 'Africa-First Design', desc: 'Built for Lagos, designed for the continent. Our data, tools, and job listings reflect the realities of the African job market.' },
  { title: 'Radical Transparency', desc: 'Salary ranges on every listing. No mysterious application black holes. You deserve to know what you\'re walking into.' },
  { title: 'Tools That Actually Work', desc: 'We\'re obsessed with tool output quality. Not pretty dashboards: real ATS scores, real keyword gaps, real employer language.' },
]

export default function LJAbout() {
  return (
    <div style={{ backgroundColor: '#F4F5F7', minHeight: '100vh', fontFamily: 'var(--font-lj-body)' }}>
      <SEO
        title="About Lagos Jobs"
        description="Lagos Jobs is built for speed, transparency, and Africa-first design — connecting job seekers with verified listings and real career tools."
        path="/lagos-jobs/about"
      />
      <div className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-[1440px] mx-auto relative z-10">

          {/* Hero Section with Image */}
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
            {/* Left Hero Text */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 text-[#17B26A] bg-[#17B26A]/10 border border-[#17B26A]/20">
                <Sparkles className="w-3.5 h-3.5" /> Empowering Lagos Talent
              </span>
              <h1 className="font-lj-display font-700 text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.05] mb-6" style={{ color: '#0D0D0D' }}>
                Unleashing Africa's<br />
                Career Potential.
              </h1>
              <p className="text-lg leading-relaxed max-w-2xl" style={{ color: '#6B7280' }}>
                LagosJobs was built because African professionals are among the most talented in the world, but they're being shortchanged by platforms and job boards designed for other markets. We're changing that with direct access, transparent salaries, and real career support.
              </p>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                <img
                  src="https://plus.unsplash.com/premium_photo-1669627111607-fd97efe8866c?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Young Black professional reviewing career options on laptop"
                  className="w-full h-[380px] sm:h-[440px] object-cover object-top"
                />
              </div>
              {/* Decorative Accent Ring */}
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border-2 border-[#17B26A]/30 pointer-events-none z-0 hidden sm:block" />
            </div>
          </div>

          {/* Stats & Purpose Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
            <div className="p-8 rounded-2xl" style={{ backgroundColor: '#0D0D0D', border: '1px solid rgba(23,178,106,0.2)' }}>
              <div className="font-lj-display font-700 text-5xl text-white mb-2">2022</div>
              <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>Founded as a WorkplaceHQ product</p>
              <div className="grid grid-cols-2 gap-4">
                {[['38K+', 'Careers helped'], ['14K+', 'Active listings'], ['6', 'Career services'], ['4.8★', 'Community rating']].map(([v, l]) => (
                  <div key={l} className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div className="font-lj-display font-700 text-2xl text-white">{v}</div>
                    <div className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-lj-display font-700 text-2xl mb-4" style={{ color: '#0D0D0D' }}>Why we exist</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#6B7280' }}>
                In 2022, our team documented a stark reality: Nigerian graduates were spending 6 to 18 months in job searches despite being objectively qualified. The problem wasn't their skills; it was how they were packaging and presenting themselves to a system designed elsewhere.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#6B7280' }}>
                We built LagosJobs to close that gap: verified job listings with real salary data, zero-friction direct applications, and a career ecosystem built specifically for our local job market.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {values.map(v => (
              <div key={v.title} className="p-6 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '1px solid #F4F5F7' }}>
                <h3 className="font-lj-display font-600 text-base mb-2" style={{ color: '#0D0D0D' }}>{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{v.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="relative p-10 rounded-2xl overflow-hidden" style={{ backgroundColor: '#0D0D0D' }}>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-lj-display font-700 text-2xl text-white mb-2">Ready to launch your career?</h3>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>Explore our verified listings and career services built for Lagos talent.</p>
              </div>
              <Link 
                to="/lagos-jobs/career-services" 
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-white shrink-0 hover:bg-[#17B26A]/90 transition-all" 
                style={{ backgroundColor: '#17B26A', fontFamily: 'var(--font-lj-display)' }}
              >
                Explore Career Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}