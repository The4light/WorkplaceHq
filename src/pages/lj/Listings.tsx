import { useState } from 'react'
import { Search, MapPin, Clock, Briefcase, ChevronDown, X } from 'lucide-react'

const jobs = [
  {
    id: 1, title: 'Senior Product Manager', company: 'Flutterwave', location: 'Lagos', type: 'Full-time', level: 'Senior',
    salary: '₦800K–₦1.2M/mo', remote: false,
    desc: 'Lead the product strategy for Flutterwave\'s merchant dashboard. You\'ll own the roadmap, work with engineering, design, and data teams, and drive a product used by 1M+ merchants across Africa.',
    reqs: ['5+ years PM experience', 'Strong data analysis skills', 'Experience in payments or FinTech', 'Excellent communication'],
    posted: '2 days ago',
  },
  {
    id: 2, title: 'Backend Engineer (Node.js)', company: 'Paystack', location: 'Remote', type: 'Full-time', level: 'Mid',
    salary: '₦600K–₦900K/mo', remote: true,
    desc: 'Build and scale APIs powering millions of daily transactions. You\'ll work on Paystack\'s core infrastructure, improving reliability, latency, and developer experience.',
    reqs: ['3+ years Node.js', 'PostgreSQL / Redis', 'REST & GraphQL APIs', 'Strong testing culture'],
    posted: '1 day ago',
  },
  {
    id: 3, title: 'UX Designer', company: 'Jumia', location: 'Lagos', type: 'Full-time', level: 'Junior',
    salary: '₦300K–₦500K/mo', remote: false,
    desc: 'Design delightful experiences for Jumia\'s 10M+ active shoppers. Work closely with product managers and engineers to deliver impactful interfaces from research to high-fidelity prototypes.',
    reqs: ['Portfolio of mobile UI work', 'Figma proficiency', '1–3 years experience', 'User research skills'],
    posted: '3 days ago',
  },
  {
    id: 4, title: 'Data Analyst', company: 'MTN Nigeria', location: 'Abuja', type: 'Full-time', level: 'Mid',
    salary: '₦450K–₦650K/mo', remote: false,
    desc: 'Analyze subscriber data, build dashboards, and generate insights that influence network investment decisions across Nigeria\'s largest telco.',
    reqs: ['SQL (advanced)', 'Python or R', 'Power BI / Tableau', 'Telco experience preferred'],
    posted: '5 days ago',
  },
  {
    id: 5, title: 'Frontend Developer', company: 'Interswitch', location: 'Lagos', type: 'Full-time', level: 'Junior',
    salary: '₦280K–₦420K/mo', remote: false,
    desc: 'Build performant, accessible React interfaces for Interswitch\'s suite of payment and banking products used by FIs and fintechs across Africa.',
    reqs: ['React & TypeScript', 'CSS / Tailwind', '1–3 years experience', 'Accessibility mindset'],
    posted: '1 week ago',
  },
  {
    id: 6, title: 'Marketing Lead', company: 'Sterling Bank', location: 'Lagos', type: 'Full-time', level: 'Senior',
    salary: '₦700K–₦1M/mo', remote: false,
    desc: 'Own Sterling\'s brand and growth marketing, leading a team of 8 across digital, content, and performance channels. Drive acquisition and engagement for retail and SME segments.',
    reqs: ['7+ years marketing', 'Financial services experience', 'Strong analytics background', 'Team leadership'],
    posted: '4 days ago',
  },
]

const levelColors: Record<string, [string, string]> = {
  Junior: ['rgba(16,185,129,0.1)', '#065F46'],
  Mid: ['rgba(6,182,212,0.1)', '#164E63'],
  Senior: ['rgba(255,90,54,0.1)', '#9A3412'],
}

export default function LJListings() {
  const [selected, setSelected] = useState(jobs[0])
  const [modal, setModal] = useState(false)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState({ location: 'All', level: 'All', remote: 'All' })

  const filtered = jobs.filter(j =>
    j.title.toLowerCase().includes(search.toLowerCase()) &&
    (filter.location === 'All' || j.location === filter.location) &&
    (filter.level === 'All' || j.level === filter.level) &&
    (filter.remote === 'All' || (filter.remote === 'Remote' ? j.remote : !j.remote))
  )

  return (
    <div style={{ backgroundColor: '#F4F7F6', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>
      {/* Header */}
      <div className="relative pt-32 pb-6 px-6 overflow-hidden">
        <div className="pointer-events-none absolute -top-16 -right-16 w-[400px] h-[400px] rounded-full" style={{ background: '#FF5A36', filter: 'blur(140px)', opacity: 0.18 }} />
        <div className="max-w-[1440px] mx-auto">
          <h1 className="font-display font-700 text-[clamp(2rem,4vw,3rem)] mb-4" style={{ color: '#0D131A' }}>Job Listings</h1>

          {/* Search & filter */}
          <div className="flex flex-wrap gap-3">
            <div className="relative flex-1 min-w-52">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#9CA3AF' }} />
              <input
                className="w-full pl-10 pr-4 py-2.5 text-sm outline-none"
                style={{ border: '1px solid #D6E2E0', borderRadius: '8px', backgroundColor: '#FFFFFF' }}
                placeholder="Search roles..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            {(['location', 'level', 'remote'] as const).map(k => (
              <div key={k} className="relative">
                <select
                  className="px-4 py-2.5 text-sm outline-none pr-8 appearance-none"
                  style={{ border: '1px solid #D6E2E0', borderRadius: '8px', backgroundColor: '#FFFFFF', color: '#0D131A', cursor: 'pointer' }}
                  value={filter[k]}
                  onChange={e => setFilter(f => ({ ...f, [k]: e.target.value }))}
                >
                  <option value="All">All {k}</option>
                  {k === 'location' && ['Lagos', 'Abuja', 'Remote'].map(o => <option key={o}>{o}</option>)}
                  {k === 'level' && ['Junior', 'Mid', 'Senior'].map(o => <option key={o}>{o}</option>)}
                  {k === 'remote' && ['Remote', 'Onsite'].map(o => <option key={o}>{o}</option>)}
                </select>
                <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none" style={{ color: '#9CA3AF' }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Split view */}
      <div className="px-6 pb-20">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-[380px_1fr] gap-5">
          {/* Left: job list */}
          <div className="flex flex-col gap-3 overflow-y-auto" style={{ maxHeight: '70vh' }}>
            {filtered.map(j => {
              const [bg, color] = levelColors[j.level]
              const isSelected = selected.id === j.id
              return (
                <button
                  key={j.id}
                  onClick={() => setSelected(j)}
                  className="p-5 rounded-2xl text-left transition-all duration-200"
                  style={{
                    backgroundColor: isSelected ? '#0F2C34' : '#FFFFFF',
                    border: `1px solid ${isSelected ? 'rgba(6,182,212,0.35)' : '#D6E2E0'}`,
                  }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium" style={{ backgroundColor: isSelected ? 'rgba(6,182,212,0.2)' : bg, color: isSelected ? '#06B6D4' : color }}>{j.level}</span>
                    <span className="text-xs flex items-center gap-1" style={{ color: isSelected ? 'rgba(255,255,255,0.4)' : '#9CA3AF' }}>
                      <Clock className="w-3 h-3" /> {j.posted}
                    </span>
                  </div>
                  <h3 className="font-display font-600 text-base mb-0.5" style={{ color: isSelected ? '#FFFFFF' : '#0D131A' }}>{j.title}</h3>
                  <p className="text-sm mb-2" style={{ color: isSelected ? 'rgba(255,255,255,0.6)' : '#6B7280' }}>{j.company}</p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-xs" style={{ color: isSelected ? '#06B6D4' : '#9CA3AF' }}>
                      <MapPin className="w-3 h-3" /> {j.location}
                    </span>
                    <span className="text-xs font-semibold" style={{ color: isSelected ? '#FF5A36' : '#FF5A36' }}>{j.salary}</span>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right: detail panel */}
          <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '1px solid #D6E2E0' }}>
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="font-display font-700 text-2xl mb-1" style={{ color: '#0D131A' }}>{selected.title}</h2>
                <div className="flex items-center gap-3">
                  <span className="text-base" style={{ color: '#6B7280' }}>{selected.company}</span>
                  <span className="flex items-center gap-1 text-sm" style={{ color: '#9CA3AF' }}>
                    <MapPin className="w-3.5 h-3.5" /> {selected.location}
                  </span>
                  {selected.remote && <span className="px-2 py-0.5 rounded-full text-xs" style={{ backgroundColor: 'rgba(16,185,129,0.1)', color: '#065F46' }}>Remote</span>}
                </div>
              </div>
              <div className="text-right">
                <div className="font-display font-700 text-xl" style={{ color: '#FF5A36' }}>{selected.salary}</div>
                <div className="text-xs" style={{ color: '#9CA3AF' }}>{selected.type}</div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-display font-600 text-base mb-2" style={{ color: '#0D131A' }}>About the Role</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{selected.desc}</p>
            </div>

            <div className="mb-8">
              <h3 className="font-display font-600 text-base mb-3" style={{ color: '#0D131A' }}>Requirements</h3>
              <ul className="flex flex-col gap-2">
                {selected.reqs.map(r => (
                  <li key={r} className="flex items-center gap-2.5 text-sm" style={{ color: '#6B7280' }}>
                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: '#06B6D4' }} />
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => setModal(true)}
              className="flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-sm text-white"
              style={{ backgroundColor: '#FF5A36', fontFamily: 'var(--font-display)' }}
            >
              <Briefcase className="w-4 h-4" /> Apply Now
            </button>
          </div>
        </div>
      </div>

      {modal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }} onClick={() => setModal(false)}>
          <div className="w-full max-w-md p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF' }} onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-display font-700 text-xl" style={{ color: '#0D131A' }}>Apply: {selected.title}</h3>
              <button onClick={() => setModal(false)}><X className="w-4 h-4" style={{ color: '#9CA3AF' }} /></button>
            </div>
            <p className="text-sm mb-4" style={{ color: '#6B7280' }}>{selected.company} · {selected.location}</p>
            <div className="flex flex-col gap-3">
              <input className="px-4 py-3 text-sm outline-none" style={{ border: '1px solid #D6E2E0', borderRadius: '6px', backgroundColor: '#F4F7F6' }} placeholder="Full Name" />
              <input className="px-4 py-3 text-sm outline-none" type="email" style={{ border: '1px solid #D6E2E0', borderRadius: '6px', backgroundColor: '#F4F7F6' }} placeholder="Email Address" />
              <input className="px-4 py-3 text-sm outline-none" style={{ border: '1px solid #D6E2E0', borderRadius: '6px', backgroundColor: '#F4F7F6' }} placeholder="LinkedIn or Portfolio URL" />
              <textarea className="px-4 py-3 text-sm outline-none resize-none h-24" style={{ border: '1px solid #D6E2E0', borderRadius: '6px', backgroundColor: '#F4F7F6' }} placeholder="Cover note — why are you a great fit?" />
              <button className="w-full py-3.5 rounded-lg font-semibold text-sm text-white" style={{ backgroundColor: '#FF5A36', fontFamily: 'var(--font-display)' }} onClick={() => setModal(false)}>
                Submit Application
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
