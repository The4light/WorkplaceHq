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
    <div style={{ backgroundColor: '#F4F5F7', minHeight: '100vh', fontFamily: 'var(--font-lj-body)' }}>
      <div className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="max-w-3xl mb-16">
            <h1 className="font-lj-display font-700 text-[clamp(2rem,5vw,4rem)] leading-[1.05] mb-6" style={{ color: '#0D0D0D' }}>
              Unleashing Africa's<br />
              Career Potential.
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: '#6B7280' }}>
              LagosJobs was built because African professionals are among the most talented in the world — but they're being shortchanged by tools, platforms, and job boards designed for other markets. We're changing that.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
            <div className="p-8 rounded-2xl" style={{ backgroundColor: '#0D0D0D', border: '1px solid rgba(23,178,106,0.2)' }}>
              <div className="font-lj-display font-700 text-5xl text-white mb-2">2022</div>
              <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>Founded as a WorkplaceHQ product</p>
              <div className="grid grid-cols-2 gap-4">
                {[['38K+', 'Careers helped'], ['14K+', 'Active listings'], ['6', 'AI tools'], ['4.8★', 'App rating']].map(([v, l]) => (
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
                In 2022, our team documented a stark reality: Nigerian graduates were spending 6–18 months in job searches despite being objectively qualified. The problem wasn't their skills — it was how they were packaging and presenting themselves to a system designed elsewhere.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#6B7280' }}>
                We built LagosJobs to close that gap: AI tools trained on what African employers actually look for, job listings with real salary data, and a career ecosystem that respects your time.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {values.map(v => (
              <div key={v.title} className="p-6 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '1px solid #F4F5F7' }}>
                <h3 className="font-lj-display font-600 text-base mb-2" style={{ color: '#0D0D0D' }}>{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="relative p-10 rounded-2xl overflow-hidden" style={{ backgroundColor: '#0D0D0D' }}>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-lj-display font-700 text-2xl text-white mb-2">Ready to launch your career?</h3>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>No account needed. Start with any of our 6 free tools.</p>
              </div>
              <Link to="/lagos-jobs/tools" className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-white shrink-0" style={{ backgroundColor: '#17B26A', fontFamily: 'var(--font-lj-display)' }}>
                Open Tools Hub <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
