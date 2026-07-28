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
    <div className="w-full overflow-x-hidden min-h-screen bg-[#F4F3EF] font-sans">
      <div className="relative pt-28 pb-20 px-4 sm:px-6 overflow-hidden">
        
        {/* Soft Intelligence Green Ambient Glow */}
        <div 
          className="pointer-events-none absolute -top-16 right-0 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] rounded-full" 
          style={{ background: '#1DA54A', filter: 'blur(150px)', opacity: 0.08 }} 
        />

        <div className="max-w-[1440px] mx-auto relative z-10">
          
          {/* Main Title Section */}
          <div className="max-w-3xl mb-16">
            <h1 className="font-display font-bold text-[clamp(2.25rem,5vw,4rem)] leading-[1.08] mb-6 text-[#191919]">
              Unleashing Africa's<br />
              <span style={{ color: '#FF5A36' }}>Career</span>{' '}
              <span style={{ color: '#1DA54A' }}>Potential.</span>
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-[#545454]">
              Lagos Job was built because African professionals are among the most talented in the world — but they're being shortchanged by tools, platforms, and job boards designed for other markets. We're changing that.
            </p>
          </div>

          {/* Foundation Story Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
            <div className="p-8 rounded-3xl bg-[#191919] border border-white/10 shadow-lg">
              <div className="font-display font-bold text-5xl text-white mb-2">2022</div>
              <p className="text-sm mb-6 text-gray-400">Founded as a WorkplaceHQ product</p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  ['38K+', 'Careers helped'], 
                  ['14K+', 'Active listings'], 
                  ['6', 'AI tools'], 
                  ['4.8★', 'App rating']
                ].map(([v, l]) => (
                  <div key={l} className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="font-display font-bold text-2xl text-[#1DA54A]">{v}</div>
                    <div className="text-xs text-gray-400">{l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pl-0 md:pl-4">
              <h2 className="font-display font-bold text-2xl sm:text-3xl mb-4 text-[#191919]">Why we exist</h2>
              <p className="text-base leading-relaxed mb-4 text-[#545454]">
                In 2022, our team documented a stark reality: Nigerian graduates were spending 6–18 months in job searches despite being objectively qualified. The problem wasn't their skills — it was how they were packaging and presenting themselves to a system designed elsewhere.
              </p>
              <p className="text-base leading-relaxed text-[#545454]">
                We built Lagos Job to close that gap: AI tools trained on what African employers actually look for, job listings with real salary data, and a career ecosystem that respects your time.
              </p>
            </div>
          </div>

          {/* Core Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {values.map(v => (
              <div key={v.title} className="p-6 rounded-2xl bg-white border border-[#E6E5E0] shadow-sm">
                <h3 className="font-display font-semibold text-base mb-2 text-[#191919]">{v.title}</h3>
                <p className="text-sm leading-relaxed text-[#545454]">{v.desc}</p>
              </div>
            ))}
          </div>

          {/* Bottom CTA Banner */}
          <div className="relative p-8 sm:p-10 rounded-3xl bg-[#191919] border border-white/10 overflow-hidden shadow-xl">
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="font-display font-bold text-2xl text-white mb-2">Ready to launch your career?</h3>
                <p className="text-sm text-gray-400">No account needed. Start with any of our 6 free tools.</p>
              </div>
              <Link 
                to="/lagos-jobs/tools" 
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-display font-semibold text-sm text-white shrink-0 bg-[#FF5A36] hover:bg-[#e04a28] transition-all"
              >
                Open Tools Hub <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}