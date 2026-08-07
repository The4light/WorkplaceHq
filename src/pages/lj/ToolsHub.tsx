import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FileText, Link2, Palette, Globe, User, Briefcase, CheckCircle, Circle, ChevronDown } from 'lucide-react'

// â”€â”€ Tool 1: CV Optimiser â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function CVOptimiser() {
  const [role, setRole] = useState('')
  const [years, setYears] = useState('1-3')
  const [resume, setResume] = useState('')
  const [score, setScore] = useState(0)
  const [analysed, setAnalysed] = useState(false)

  const keywords = ['Python', 'SQL', 'Agile', 'Leadership', 'Communication', 'Data Analysis', 'Project Management', 'Excel']
  const found = ['Python', 'SQL', 'Communication']

  const analyse = () => {
    if (!role || !resume) return
    setScore(Math.floor(Math.random() * 20) + 64)
    setAnalysed(true)
  }

  return (
    <div className="grid lg:grid-cols-2 gap-6 h-full">
      {/* Input */}
      <div className="p-6 rounded-2xl flex flex-col gap-4" style={{ backgroundColor: '#FFFFFF', border: '1px solid #F4F5F7' }}>
        <h3 className="font-lj-display font-700 text-lg" style={{ color: '#0D0D0D' }}>CV Details</h3>
        <input
          className="px-4 py-3 text-sm outline-none w-full"
          style={{ border: '1px solid #F4F5F7', borderRadius: '6px', backgroundColor: '#F4F5F7' }}
          placeholder="Target Role (e.g. Product Manager)"
          value={role}
          onChange={e => setRole(e.target.value)}
        />
        <select
          className="px-4 py-3 text-sm outline-none w-full"
          style={{ border: '1px solid #F4F5F7', borderRadius: '6px', backgroundColor: '#F4F5F7', color: '#6B7280' }}
          value={years}
          onChange={e => setYears(e.target.value)}
        >
          <option value="0-1">0–1 years experience</option>
          <option value="1-3">1–3 years</option>
          <option value="3-6">3–6 years</option>
          <option value="6+">6+ years</option>
        </select>
        <textarea
          className="flex-1 px-4 py-3 text-sm outline-none resize-none"
          style={{ border: '1px solid #F4F5F7', borderRadius: '6px', backgroundColor: '#F4F5F7', minHeight: '180px' }}
          placeholder="Paste your CV / resume text here..."
          value={resume}
          onChange={e => setResume(e.target.value)}
        />
        <button
          onClick={analyse}
          className="w-full py-3 rounded-lg font-semibold text-sm text-white transition-all hover:-translate-y-0.5"
          style={{ backgroundColor: '#17B26A', fontFamily: 'var(--font-lj-display)' }}
        >
          Analyse & Optimise
        </button>
      </div>

      {/* Output */}
      <div className="p-6 rounded-2xl flex flex-col gap-5" style={{ backgroundColor: '#0D0D0D', border: '1px solid rgba(23,178,106,0.2)' }}>
        <h3 className="font-lj-display font-700 text-lg text-white">ATS Compatibility Score</h3>

        {/* Circular gauge */}
        <div className="flex items-center justify-center py-4">
          <div className="relative w-32 h-32">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="none" strokeWidth="8" stroke="rgba(255,255,255,0.08)" />
              <circle
                cx="50" cy="50" r="40" fill="none" strokeWidth="8"
                stroke={analysed ? (score >= 80 ? '#10B981' : score >= 60 ? '#17B26A' : '#17B26A') : '#1E4A56'}
                strokeDasharray={`${analysed ? (score / 100) * 251.2 : 0} 251.2`}
                strokeLinecap="round"
                style={{ transition: 'stroke-dasharray 1s ease' }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-lj-display font-700 text-3xl text-white">{analysed ? score : '--'}</span>
              <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>/ 100</span>
            </div>
          </div>
        </div>

        {/* Keyword checklist */}
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.4)' }}>Keyword Gap Analysis</div>
          <div className="flex flex-col gap-2">
            {keywords.map(k => {
              const has = found.includes(k)
              return (
                <div key={k} className="flex items-center gap-2.5">
                  {has
                    ? <CheckCircle className="w-4 h-4 shrink-0" style={{ color: '#10B981' }} />
                    : <Circle className="w-4 h-4 shrink-0" style={{ color: 'rgba(255,255,255,0.2)' }} />
                  }
                  <span className="text-sm" style={{ color: has ? '#FFFFFF' : 'rgba(255,255,255,0.4)' }}>{k}</span>
                  {!has && analysed && <span className="ml-auto text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: 'rgba(23,178,106,0.15)', color: '#17B26A' }}>Add</span>}
                </div>
              )
            })}
          </div>
        </div>

        {analysed && (
          <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(23,178,106,0.1)', border: '1px solid rgba(23,178,106,0.2)' }}>
            <p className="text-sm" style={{ color: '#17B26A' }}>
              <strong>Tip:</strong> Adding "Agile", "Data Analysis", and "Project Management" could boost your score to <strong>88+</strong>.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

// â”€â”€ Tool 2: LinkedIn Optimiser â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function LinkedInOptimiser() {
  const [industry, setIndustry] = useState('')
  const [headline, setHeadline] = useState('')
  const [about, setAbout] = useState('')
  const [generated, setGenerated] = useState<{ headline: string; about: string; score: number } | null>(null)

  const generate = () => {
    if (!industry) return
    setGenerated({
      headline: `${industry} Professional | Driving Growth & Innovation | Open to ${industry} Leadership Roles`,
      about: `Results-driven ${industry} professional with a track record of delivering measurable impact across complex projects. Known for combining strategic thinking with hands-on execution to accelerate team and business performance. Passionate about leveraging data and emerging technologies to solve real problems.`,
      score: 87,
    })
  }

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <div className="p-6 rounded-2xl flex flex-col gap-4" style={{ backgroundColor: '#FFFFFF', border: '1px solid #F4F5F7' }}>
        <h3 className="font-lj-display font-700 text-lg" style={{ color: '#0D0D0D' }}>Profile Details</h3>
        <input className="px-4 py-3 text-sm outline-none" style={{ border: '1px solid #F4F5F7', borderRadius: '6px', backgroundColor: '#F4F5F7' }} placeholder="Your Industry / Role (e.g. Fintech Product)" value={industry} onChange={e => setIndustry(e.target.value)} />
        <input className="px-4 py-3 text-sm outline-none" style={{ border: '1px solid #F4F5F7', borderRadius: '6px', backgroundColor: '#F4F5F7' }} placeholder="Current Headline (optional)" value={headline} onChange={e => setHeadline(e.target.value)} />
        <textarea className="px-4 py-3 text-sm outline-none resize-none h-32" style={{ border: '1px solid #F4F5F7', borderRadius: '6px', backgroundColor: '#F4F5F7' }} placeholder="Current About section (optional — paste for improvement)" value={about} onChange={e => setAbout(e.target.value)} />
        <button onClick={generate} className="py-3 rounded-lg font-semibold text-sm text-white" style={{ backgroundColor: '#17B26A', fontFamily: 'var(--font-lj-display)' }}>
          Generate Optimised Profile
        </button>
      </div>

      <div className="p-6 rounded-2xl flex flex-col gap-4" style={{ backgroundColor: '#0D0D0D', border: '1px solid rgba(23,178,106,0.2)' }}>
        <div className="flex items-center justify-between">
          <h3 className="font-lj-display font-700 text-lg text-white">Profile Impact</h3>
          {generated && <span className="font-lj-display font-700 text-2xl" style={{ color: '#17B26A' }}>{generated.score}/100</span>}
        </div>
        {generated ? (
          <>
            <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#17B26A' }}>Optimised Headline</div>
              <p className="text-sm text-white leading-relaxed">{generated.headline}</p>
            </div>
            <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#17B26A' }}>Optimised About</div>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>{generated.about}</p>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-sm text-center" style={{ color: 'rgba(255,255,255,0.35)' }}>Fill in your details and generate your optimised LinkedIn profile.</p>
          </div>
        )}
      </div>
    </div>
  )
}

// â”€â”€ Tool 3: Portfolio Creator â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function PortfolioCreator() {
  const [projects, setProjects] = useState([{ title: '', desc: '', link: '' }])
  const [preview, setPreview] = useState(false)

  const addProject = () => setProjects(p => [...p, { title: '', desc: '', link: '' }])
  const update = (i: number, k: keyof typeof projects[0], v: string) => {
    setProjects(p => p.map((item, idx) => idx === i ? { ...item, [k]: v } : item))
  }

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <div className="p-6 rounded-2xl flex flex-col gap-4" style={{ backgroundColor: '#FFFFFF', border: '1px solid #F4F5F7' }}>
        <div className="flex items-center justify-between">
          <h3 className="font-lj-display font-700 text-lg" style={{ color: '#0D0D0D' }}>Your Projects</h3>
          <button onClick={addProject} className="text-xs font-semibold px-3 py-1.5 rounded-full" style={{ backgroundColor: 'rgba(23,178,106,0.12)', color: '#17B26A' }}>+ Add Project</button>
        </div>
        <div className="flex flex-col gap-4 overflow-y-auto" style={{ maxHeight: '400px' }}>
          {projects.map((p, i) => (
            <div key={i} className="flex flex-col gap-2 p-4 rounded-xl" style={{ backgroundColor: '#F4F5F7', border: '1px solid #F4F5F7' }}>
              <input className="px-3 py-2 text-sm outline-none bg-white" style={{ borderRadius: '6px', border: '1px solid #F4F5F7' }} placeholder={`Project ${i + 1} Title`} value={p.title} onChange={e => update(i, 'title', e.target.value)} />
              <textarea className="px-3 py-2 text-sm outline-none resize-none bg-white h-16" style={{ borderRadius: '6px', border: '1px solid #F4F5F7' }} placeholder="What you built & impact" value={p.desc} onChange={e => update(i, 'desc', e.target.value)} />
              <input className="px-3 py-2 text-sm outline-none bg-white" style={{ borderRadius: '6px', border: '1px solid #F4F5F7' }} placeholder="Link (GitHub, live URL)" value={p.link} onChange={e => update(i, 'link', e.target.value)} />
            </div>
          ))}
        </div>
        <button onClick={() => setPreview(true)} className="py-3 rounded-lg font-semibold text-sm text-white" style={{ backgroundColor: '#17B26A', fontFamily: 'var(--font-lj-display)' }}>
          Generate Portfolio
        </button>
      </div>

      <div className="p-6 rounded-2xl" style={{ backgroundColor: '#0D0D0D', border: '1px solid rgba(23,178,106,0.2)' }}>
        <h3 className="font-lj-display font-700 text-lg text-white mb-4">Portfolio Preview</h3>
        {preview ? (
          <div className="rounded-xl overflow-hidden" style={{ backgroundColor: '#1A3A44', border: '1px solid rgba(23,178,106,0.2)' }}>
            <div className="px-4 py-3 border-b flex gap-1.5" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#17B26A' }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#D97706' }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#10B981' }} />
            </div>
            <div className="p-5 grid gap-4">
              {projects.filter(p => p.title).map((p, i) => (
                <div key={i} className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(23,178,106,0.15)' }}>
                  <div className="font-lj-display font-600 text-sm text-white mb-1">{p.title}</div>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{p.desc || 'No description added.'}</p>
                  {p.link && <a href={p.link} className="text-xs mt-2 inline-block" style={{ color: '#17B26A' }}>{p.link}</a>}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-48">
            <p className="text-sm text-center" style={{ color: 'rgba(255,255,255,0.35)' }}>Add your projects and click "Generate Portfolio" to see your layout preview.</p>
          </div>
        )}
      </div>
    </div>
  )
}

// â”€â”€ Tool 4: Personal Website Creator â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function WebsiteCreator() {
  const [bio, setBio] = useState('')
  const [role, setRole] = useState('')
  const [links, setLinks] = useState({ twitter: '', github: '', linkedin: '' })
  const [preview, setPreview] = useState(false)

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <div className="p-6 rounded-2xl flex flex-col gap-4" style={{ backgroundColor: '#FFFFFF', border: '1px solid #F4F5F7' }}>
        <h3 className="font-lj-display font-700 text-lg" style={{ color: '#0D0D0D' }}>Site Details</h3>
        <input className="px-4 py-3 text-sm outline-none" style={{ border: '1px solid #F4F5F7', borderRadius: '6px', backgroundColor: '#F4F5F7' }} placeholder="Your Name" />
        <input className="px-4 py-3 text-sm outline-none" style={{ border: '1px solid #F4F5F7', borderRadius: '6px', backgroundColor: '#F4F5F7' }} placeholder="Role Title (e.g. Software Engineer)" value={role} onChange={e => setRole(e.target.value)} />
        <textarea className="px-4 py-3 text-sm outline-none resize-none h-24" style={{ border: '1px solid #F4F5F7', borderRadius: '6px', backgroundColor: '#F4F5F7' }} placeholder="Your professional bio..." value={bio} onChange={e => setBio(e.target.value)} />
        <div className="grid grid-cols-3 gap-2">
          {(['twitter', 'github', 'linkedin'] as const).map(k => (
            <input key={k} className="px-3 py-2.5 text-sm outline-none" style={{ border: '1px solid #F4F5F7', borderRadius: '6px', backgroundColor: '#F4F5F7' }} placeholder={k.charAt(0).toUpperCase() + k.slice(1)} value={links[k]} onChange={e => setLinks(l => ({ ...l, [k]: e.target.value }))} />
          ))}
        </div>
        <button onClick={() => setPreview(true)} className="py-3 rounded-lg font-semibold text-sm text-white" style={{ backgroundColor: '#17B26A', fontFamily: 'var(--font-lj-display)' }}>
          Generate My Site
        </button>
      </div>

      <div className="p-6 rounded-2xl" style={{ backgroundColor: '#0D0D0D', border: '1px solid rgba(23,178,106,0.2)' }}>
        <h3 className="font-lj-display font-700 text-lg text-white mb-4">Desktop Preview</h3>
        {preview ? (
          <div className="rounded-xl overflow-hidden" style={{ backgroundColor: '#111827', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="px-4 py-3 border-b flex gap-1.5" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <div className="w-2 h-2 rounded-full bg-yellow-400" />
              <div className="w-2 h-2 rounded-full bg-green-400" />
            </div>
            <div className="p-6">
              <div className="w-16 h-16 rounded-full mb-4 flex items-center justify-center font-lj-display font-700 text-2xl" style={{ backgroundColor: '#17B26A', color: '#FFFFFF' }}>
                {role ? role[0].toUpperCase() : 'Y'}
              </div>
              <div className="font-lj-display font-700 text-xl text-white mb-1">{role || 'Your Name'}</div>
              <div className="text-sm mb-3" style={{ color: '#17B26A' }}>{role || 'Professional Title'}</div>
              <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{bio || 'Your professional bio will appear here...'}</p>
              <div className="flex gap-3 mt-4">
                {Object.entries(links).filter(([, v]) => v).map(([k]) => (
                  <span key={k} className="text-xs px-2.5 py-1 rounded-full" style={{ backgroundColor: 'rgba(23,178,106,0.15)', color: '#17B26A' }}>{k}</span>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-48">
            <p className="text-sm text-center" style={{ color: 'rgba(255,255,255,0.35)' }}>Fill in your details to preview your personal website.</p>
          </div>
        )}
      </div>
    </div>
  )
}

// â”€â”€ Tool 5: Personal Branding Guide â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function BrandingGuide() {
  const [industry, setIndustry] = useState('')
  const [strength, setStrength] = useState('')
  const [result, setResult] = useState<{ pillars: string[]; hooks: string[] } | null>(null)

  const generate = () => {
    if (!industry) return
    setResult({
      pillars: [
        `${industry} expertise & career insights`,
        'Behind-the-scenes of real project work',
        'Lessons from failures & pivots',
        'Tools, workflows, and productivity systems',
      ],
      hooks: [
        `"After 3 years in ${industry}, here's what nobody tells you about..."`,
        `"The framework I use to ${strength || 'solve complex problems'} every week"`,
        `"How I went from junior to senior ${industry} in 18 months"`,
        `"My honest take on the biggest myths in ${industry} right now"`,
      ],
    })
  }

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <div className="p-6 rounded-2xl flex flex-col gap-4" style={{ backgroundColor: '#FFFFFF', border: '1px solid #F4F5F7' }}>
        <h3 className="font-lj-display font-700 text-lg" style={{ color: '#0D0D0D' }}>Your Positioning</h3>
        <input className="px-4 py-3 text-sm outline-none" style={{ border: '1px solid #F4F5F7', borderRadius: '6px', backgroundColor: '#F4F5F7' }} placeholder="Industry / Field (e.g. FinTech, Healthcare)" value={industry} onChange={e => setIndustry(e.target.value)} />
        <input className="px-4 py-3 text-sm outline-none" style={{ border: '1px solid #F4F5F7', borderRadius: '6px', backgroundColor: '#F4F5F7' }} placeholder="Your Core Strength (e.g. building data pipelines)" value={strength} onChange={e => setStrength(e.target.value)} />
        <select className="px-4 py-3 text-sm outline-none" style={{ border: '1px solid #F4F5F7', borderRadius: '6px', backgroundColor: '#F4F5F7', color: '#6B7280' }}>
          <option>LinkedIn</option>
          <option>Twitter / X</option>
          <option>All Channels</option>
        </select>
        <button onClick={generate} className="py-3 rounded-lg font-semibold text-sm text-white" style={{ backgroundColor: '#17B26A', fontFamily: 'var(--font-lj-display)' }}>
          Generate Branding Guide
        </button>
      </div>

      <div className="p-6 rounded-2xl flex flex-col gap-4" style={{ backgroundColor: '#0D0D0D', border: '1px solid rgba(23,178,106,0.2)' }}>
        <h3 className="font-lj-display font-700 text-lg text-white">Your Brand Playbook</h3>
        {result ? (
          <>
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#17B26A' }}>Content Pillars</div>
              <div className="flex flex-col gap-2">
                {result.pillars.map((p, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0" style={{ backgroundColor: '#17B26A', color: '#FFFFFF' }}>{i + 1}</span>
                    <span className="text-white">{p}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#17B26A' }}>Bio Hooks</div>
              <div className="flex flex-col gap-2">
                {result.hooks.map((h, i) => (
                  <div key={i} className="p-3 rounded-xl text-sm" style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.75)', border: '1px solid rgba(255,255,255,0.06)' }}>{h}</div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-sm text-center" style={{ color: 'rgba(255,255,255,0.35)' }}>Enter your industry and strength to get your custom branding playbook.</p>
          </div>
        )}
      </div>
    </div>
  )
}


// â”€â”€ Main ToolsHub â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const tabs = [
  { id: 'cv', label: 'CV Optimiser', icon: FileText, component: CVOptimiser },
  { id: 'linkedin', label: 'LinkedIn Optimiser', icon: Link2, component: LinkedInOptimiser },
  { id: 'portfolio', label: 'Portfolio Creator', icon: Palette, component: PortfolioCreator },
  { id: 'website', label: 'Website Creator', icon: Globe, component: WebsiteCreator },
  { id: 'branding', label: 'Personal Branding', icon: User, component: BrandingGuide },
]

export default function ToolsHub() {
  const [searchParams, setSearchParams] = useSearchParams()
  const tabParam = searchParams.get('tab') || 'cv'
  const activeTab = tabs.find(t => t.id === tabParam) || tabs[0]
  const ActiveComponent = activeTab.component

  const setTab = (id: string) => setSearchParams({ tab: id })

  return (
    <div style={{ backgroundColor: '#F4F5F7', minHeight: '100vh', fontFamily: 'var(--font-lj-body)' }}>
      <div className="relative pt-32 pb-6 px-6 overflow-hidden">
        <div className="pointer-events-none absolute -top-16 -right-16 w-[400px] h-[400px] rounded-full" style={{ background: '#17B26A', filter: 'blur(140px)', opacity: 0.18 }} />
        <div className="max-w-[1440px] mx-auto">
          <h1 className="font-lj-display font-700 text-[clamp(2rem,4vw,3rem)] mb-2" style={{ color: '#0D0D0D' }}>Tools Hub</h1>
          <p className="text-base" style={{ color: '#6B7280' }}>Six zero-auth career tools. Switch instantly. No page refresh.</p>
        </div>
      </div>

      {/* Sticky tab rail */}
      <div className="sticky top-16 z-40 px-6 py-3 overflow-x-auto" style={{ backgroundColor: 'rgba(244,247,246,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #F4F5F7' }}>
        <div className="max-w-[1440px] mx-auto flex gap-2 min-w-max">
          {tabs.map(t => {
            const Icon = t.icon
            const isActive = t.id === activeTab.id
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200"
                style={{
                  backgroundColor: isActive ? '#0D0D0D' : 'transparent',
                  color: isActive ? '#17B26A' : '#6B7280',
                  border: isActive ? '1px solid rgba(23,178,106,0.3)' : '1px solid transparent',
                }}
              >
                <Icon className="w-3.5 h-3.5" />
                {t.label}
              </button>
            )
          })}
        </div>
      </div>

      <div className="px-6 py-8">
        <div className="max-w-[1440px] mx-auto">
          <ActiveComponent />
        </div>
      </div>
    </div>
  )
}
