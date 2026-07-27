import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const values = [
  { title: 'Speed Over Friction', desc: 'Every tool is zero-auth, zero-friction. You should be applying in minutes, not setting up accounts.' },
  { title: 'Africa-First Design', desc: 'Built for Lagos, designed for the continent. Our data, tools, and job listings reflect the realities of the African job market.' },
  { title: 'Radical Transparency', desc: 'Salary ranges on every listing. No mysterious application black holes. You deserve to know what you\'re walking into.' },
  { title: 'Tools That Actually Work', desc: 'We\'re obsessed with tool output quality. Not pretty dashboards — real ATS scores, real keyword gaps, real employer language.' },
]

export default function LJAbout() {
  return (
    <div style={{ backgroundColor: '#F4F7F6', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>
      <div className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="pointer-events-none absolute -top-16 -right-16 w-[450px] h-[450px] rounded-full" style={{ background: '#FF5A36', filter: 'blur(140px)', opacity: 0.2 }} />
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-[550px] h-[550px] rounded-full" style={{ background: '#06B6D4', filter: 'blur(160px)', opacity: 0.15 }} />

        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="max-w-3xl mb-16">
            <h1 className="font-display font-700 text-[clamp(2rem,5vw,4rem)] leading-[1.05] mb-6" style={{ color: '#0D131A' }}>
              Unleashing Africa's<br />
              <span style={{ color: '#FF5A36' }}>Career</span>{' '}
              <span style={{ color: '#06B6D4' }}>Potential.</span>
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: '#4B5563' }}>
              Lagos Job was built because African professionals are among the most talented in the world — but they're being shortchanged by tools, platforms, and job boards designed for other markets. We're changing that.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
            <div className="p-8 rounded-2xl" style={{ backgroundColor: '#0F2C34', border: '1px solid rgba(6,182,212,0.2)' }}>
              <div className="font-display font-700 text-5xl text-white mb-2">2022</div>
              <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>Founded as a WorkplaceHQ product</p>
              <div className="grid grid-cols-2 gap-4">
                {[['38K+', 'Careers helped'], ['14K+', 'Active listings'], ['6', 'AI tools'], ['4.8★', 'App rating']].map(([v, l]) => (
                  <div key={l} className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div className="font-display font-700 text-2xl" style={{ color: '#FF5A36' }}>{v}</div>
                    <div className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-display font-700 text-2xl mb-4" style={{ color: '#0D131A' }}>Why we exist</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#6B7280' }}>
                In 2022, our team documented a stark reality: Nigerian graduates were spending 6–18 months in job searches despite being objectively qualified. The problem wasn't their skills — it was how they were packaging and presenting themselves to a system designed elsewhere.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#6B7280' }}>
                We built Lagos Job to close that gap: AI tools trained on what African employers actually look for, job listings with real salary data, and a career ecosystem that respects your time.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {values.map(v => (
              <div key={v.title} className="p-6 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '1px solid #D6E2E0' }}>
                <h3 className="font-display font-600 text-base mb-2" style={{ color: '#0D131A' }}>{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="relative p-10 rounded-2xl overflow-hidden" style={{ backgroundColor: '#0F2C34' }}>
            <div className="pointer-events-none absolute -top-8 -right-8 w-48 h-48 rounded-full" style={{ background: '#FF5A36', filter: 'blur(80px)', opacity: 0.25 }} />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-display font-700 text-2xl text-white mb-2">Ready to launch your career?</h3>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>No account needed. Start with any of our 6 free tools.</p>
              </div>
              <Link to="/lagos-jobs/tools" className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-white shrink-0" style={{ backgroundColor: '#FF5A36', fontFamily: 'var(--font-display)' }}>
                Open Tools Hub <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
