import { Link } from 'react-router-dom'
import { FileText, Link2, Palette, Globe, User, Briefcase, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: FileText,
    title: 'CV & Resume Optimisation',
    desc: 'AI-powered resume analysis that benchmarks against ATS systems and real hiring manager preferences. Get keyword gap analysis, format scoring, and instant rewrite suggestions for your target role.',
    tool: 'cv',
    outcomes: ['ATS Score 85+', '3× more recruiter responses', 'Role-specific keyword mapping'],
  },
  {
    icon: Link2,
    title: 'LinkedIn Profile Optimisation',
    desc: 'Transform your LinkedIn from a digital CV into a talent magnet. Headline generation, about section refining, and a visual profile impact score.',
    tool: 'linkedin',
    outcomes: ['Profile views +220%', 'Recruiter InMail +180%', 'Search ranking boost'],
  },
  {
    icon: Palette,
    title: 'Portfolio Creator',
    desc: 'Instantly generate a visual portfolio layout from your project inputs. Built for designers, engineers, marketers, and writers who need to show their work, not just describe it.',
    tool: 'portfolio',
    outcomes: ['Interview conversation starter', 'Work showcased instantly', 'Zero technical setup'],
  },
  {
    icon: Globe,
    title: 'Personal Website Creator',
    desc: 'A personal site preview generated from your bio, work history, and link selections. Desktop and mobile ready.',
    tool: 'website',
    outcomes: ['Professional online presence', 'No code required', 'Custom link hub'],
  },
  {
    icon: User,
    title: 'Personal Branding Guide',
    desc: 'Automated positioning generator that produces content pillars, bio hooks, and platform strategy based on your industry and core strengths.',
    tool: 'branding',
    outcomes: ['Content pillars defined', 'Bio hooks generated', 'Platform strategy'],
  },
  {
    icon: Briefcase,
    title: 'Job Listings Engine',
    desc: 'A curated, filterable job board with real-time role filtering, salary range tags, and 1-click application forms. Lagos-focused, Africa-first.',
    tool: 'jobs',
    outcomes: ['14,000+ live roles', 'Salary transparency', '1-click applications'],
  },
]

export default function LJServices() {
  return (
    <div style={{ backgroundColor: '#F4F7F6', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>
      <div className="relative pt-32 pb-12 px-6 overflow-hidden">
        <div className="pointer-events-none absolute -top-16 -right-16 w-[450px] h-[450px] rounded-full" style={{ background: '#FF5A36', filter: 'blur(140px)', opacity: 0.2 }} />
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-[550px] h-[550px] rounded-full" style={{ background: '#06B6D4', filter: 'blur(160px)', opacity: 0.15 }} />
        <div className="max-w-[1440px] mx-auto relative z-10">
          <h1 className="font-display font-700 text-[clamp(2rem,4vw,3.5rem)] leading-tight mb-4" style={{ color: '#0D131A' }}>Career Acceleration Services</h1>
          <p className="text-lg max-w-xl" style={{ color: '#6B7280' }}>Six tools. One purpose: getting you hired faster, better, and on your terms.</p>
        </div>
      </div>

      <section className="px-6 pb-20">
        <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(s => {
            const Icon = s.icon
            return (
              <div key={s.title} className="p-7 rounded-2xl flex flex-col gap-5 group" style={{ backgroundColor: '#FFFFFF', border: '1px solid #D6E2E0' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(6,182,212,0.1)' }}>
                  <Icon className="w-6 h-6" style={{ color: '#06B6D4' }} />
                </div>
                <div>
                  <h3 className="font-display font-700 text-lg mb-2" style={{ color: '#0D131A' }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{s.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {s.outcomes.map(o => (
                    <span key={o} className="px-2.5 py-1 rounded-full text-xs" style={{ backgroundColor: 'rgba(15,44,52,0.06)', color: '#0F2C34', border: '1px solid #D6E2E0' }}>{o}</span>
                  ))}
                </div>
                <Link
                  to={`/lagos-jobs/tools?tab=${s.tool}`}
                  className="mt-auto flex items-center gap-1.5 text-sm font-semibold"
                  style={{ color: '#FF5A36', fontFamily: 'var(--font-display)' }}
                >
                  Launch Tool <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
