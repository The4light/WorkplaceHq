import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FileText, Link2, Palette, Globe, User, CheckCircle } from 'lucide-react'

// All Tools Hub tools are human-reviewed request forms. Submissions are
// simulated client-side; wire handleSubmit to a backend / email handler
// (Resend / EmailJS / Formspree) to actually deliver requests to the team.

function RequestReceived({ message, onReset }: { message: string; onReset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 gap-5">
      <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(23,178,106,0.12)' }}>
        <CheckCircle className="w-7 h-7" style={{ color: '#17B26A' }} />
      </div>
      <h3 className="font-display font-700 text-xl" style={{ color: '#0D0D0D' }}>Request received!</h3>
      <p className="text-sm max-w-sm leading-relaxed" style={{ color: '#6B7280' }}>{message}</p>
      <button onClick={onReset} className="text-sm font-semibold" style={{ color: '#17B26A' }}>
        Submit another request
      </button>
    </div>
  )
}

function WhatHappensNext({ steps }: { steps: { step: string; title: string; desc: string }[] }) {
  return (
    <div className="p-6 rounded-2xl flex flex-col gap-6" style={{ backgroundColor: '#0D0D0D', border: '1px solid rgba(23,178,106,0.15)' }}>
      <h3 className="font-display font-700 text-lg text-white">What happens next</h3>

      <div className="flex flex-col gap-5">
        {steps.map(({ step, title, desc }) => (
          <div key={step} className="flex gap-4">
            <span className="font-display font-700 text-sm shrink-0 mt-0.5" style={{ color: '#17B26A' }}>{step}</span>
            <div>
              <p className="font-semibold text-sm text-white mb-1">{title}</p>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto p-4 rounded-xl" style={{ backgroundColor: 'rgba(23,178,106,0.08)', border: '1px solid rgba(23,178,106,0.2)' }}>
        <p className="text-sm" style={{ color: '#17B26A' }}>
          <strong>Free for all Lagos Jobs users.</strong> No account needed — just fill in the form.
        </p>
      </div>
    </div>
  )
}

const fieldStyle = { border: '1px solid #E5E7EB', backgroundColor: '#F9FAFB' }

// â”€â”€ Tool 1: CV Optimiser â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function CVOptimiser() {
  const [form, setForm] = useState({ name: '', email: '', role: '', years: '1-3', resume: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const update = (k: keyof typeof form, v: string) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.role || !form.resume) return
    setLoading(true)
    // TODO: Wire up to backend / email handler (Resend / EmailJS / Formspree)
    await new Promise(r => setTimeout(r, 1200)) // simulate submission
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <RequestReceived
        message="One of our team members will review your CV against your target role and send you a detailed ATS optimisation report within 2 business days."
        onReset={() => { setSubmitted(false); setForm({ name: '', email: '', role: '', years: '1-3', resume: '' }) }}
      />
    )
  }

  const disabled = loading || !form.name || !form.email || !form.role || !form.resume

  return (
    <div className="grid lg:grid-cols-2 gap-6 h-full">
      {/* Input */}
      <div className="p-6 rounded-2xl flex flex-col gap-4" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}>
        <div>
          <h3 className="font-display font-700 text-lg mb-1" style={{ color: '#0D0D0D' }}>CV Details</h3>
          <p className="text-sm" style={{ color: '#6B7280' }}>Fill this in and a real person from our team will review your CV and send you tailored recommendations.</p>
        </div>
        <input className="px-4 py-3 text-sm outline-none w-full rounded-lg" style={fieldStyle} placeholder="Full Name *" value={form.name} onChange={e => update('name', e.target.value)} />
        <input className="px-4 py-3 text-sm outline-none w-full rounded-lg" style={fieldStyle} placeholder="Email Address *" type="email" value={form.email} onChange={e => update('email', e.target.value)} />
        <input className="px-4 py-3 text-sm outline-none w-full rounded-lg" style={fieldStyle} placeholder="Target Role (e.g. Product Manager) *" value={form.role} onChange={e => update('role', e.target.value)} />
        <select className="px-4 py-3 text-sm outline-none w-full rounded-lg" style={{ ...fieldStyle, color: '#6B7280' }} value={form.years} onChange={e => update('years', e.target.value)}>
          <option value="0-1">0–1 years experience</option>
          <option value="1-3">1–3 years</option>
          <option value="3-6">3–6 years</option>
          <option value="6+">6+ years</option>
        </select>
        <textarea
          className="flex-1 px-4 py-3 text-sm outline-none resize-none rounded-lg"
          style={{ ...fieldStyle, minHeight: '140px' }}
          placeholder="Paste your CV / resume text here... *"
          value={form.resume}
          onChange={e => update('resume', e.target.value)}
        />
        <button
          onClick={handleSubmit}
          disabled={disabled}
          className="w-full py-3 rounded-lg font-semibold text-sm transition-all"
          style={{ backgroundColor: disabled ? '#D1D5DB' : '#17B26A', color: '#FFFFFF', cursor: disabled ? 'not-allowed' : 'pointer', fontFamily: 'var(--font-lj-display)' }}
        >
          {loading ? 'Submitting…' : 'Request Human Review'}
        </button>
      </div>

      <WhatHappensNext
        steps={[
          { step: '01', title: 'We review your CV', desc: 'A Lagos Jobs team member reads through your CV against your target role and experience level.' },
          { step: '02', title: 'We run the ATS check', desc: 'We check keyword coverage, formatting, and structure against what actually gets past applicant tracking systems.' },
          { step: '03', title: 'You get it in your inbox', desc: 'Expect a detailed report within 2 business days. No templates, no AI copy-paste — real advice from real people.' },
        ]}
      />
    </div>
  )
}

// â”€â”€ Tool 2: LinkedIn Optimiser â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function LinkedInOptimiser() {
  const [form, setForm] = useState({ name: '', email: '', industry: '', headline: '', about: '', goals: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const update = (k: keyof typeof form, v: string) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.industry) return
    setLoading(true)
    // TODO: Wire up to backend / email handler (Resend / EmailJS / Formspree)
    await new Promise(r => setTimeout(r, 1200)) // simulate submission
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <RequestReceived
        message="One of our team members will review your LinkedIn profile details and get back to you within 2 business days with personalised recommendations."
        onReset={() => { setSubmitted(false); setForm({ name: '', email: '', industry: '', headline: '', about: '', goals: '' }) }}
      />
    )
  }

  const disabled = loading || !form.name || !form.email || !form.industry

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {/* Form */}
      <div className="p-6 rounded-2xl flex flex-col gap-4" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}>
        <div>
          <h3 className="font-display font-700 text-lg mb-1" style={{ color: '#0D0D0D' }}>Your LinkedIn Details</h3>
          <p className="text-sm" style={{ color: '#6B7280' }}>Fill this in and a real person from our team will review it and send you tailored recommendations.</p>
        </div>

        <input className="px-4 py-3 text-sm outline-none w-full rounded-lg" style={fieldStyle} placeholder="Full Name *" value={form.name} onChange={e => update('name', e.target.value)} />
        <input className="px-4 py-3 text-sm outline-none w-full rounded-lg" style={fieldStyle} placeholder="Email Address *" type="email" value={form.email} onChange={e => update('email', e.target.value)} />
        <input className="px-4 py-3 text-sm outline-none w-full rounded-lg" style={fieldStyle} placeholder="Industry / Role (e.g. Fintech, Product Manager) *" value={form.industry} onChange={e => update('industry', e.target.value)} />
        <input className="px-4 py-3 text-sm outline-none w-full rounded-lg" style={fieldStyle} placeholder="Current LinkedIn Headline (optional)" value={form.headline} onChange={e => update('headline', e.target.value)} />
        <textarea
          className="px-4 py-3 text-sm outline-none resize-none rounded-lg"
          style={{ ...fieldStyle, minHeight: '100px' }}
          placeholder="Current About section (optional — paste it here)"
          value={form.about}
          onChange={e => update('about', e.target.value)}
        />
        <textarea
          className="px-4 py-3 text-sm outline-none resize-none rounded-lg"
          style={{ ...fieldStyle, minHeight: '72px' }}
          placeholder="What are you trying to achieve? (e.g. get hired, attract clients, build authority)"
          value={form.goals}
          onChange={e => update('goals', e.target.value)}
        />

        <button
          onClick={handleSubmit}
          disabled={disabled}
          className="w-full py-3 rounded-lg font-semibold text-sm transition-all"
          style={{ backgroundColor: disabled ? '#D1D5DB' : '#17B26A', color: '#FFFFFF', cursor: disabled ? 'not-allowed' : 'pointer', fontFamily: 'var(--font-lj-display)' }}
        >
          {loading ? 'Submitting…' : 'Request Human Review'}
        </button>
      </div>

      <WhatHappensNext
        steps={[
          { step: '01', title: 'We review your details', desc: 'A Lagos Jobs team member reads through everything you submitted — your industry, goals, current headline and about section.' },
          { step: '02', title: 'We craft your recommendations', desc: 'We write personalised suggestions for your headline, about section, and positioning — based on what actually works for your role in the Lagos market.' },
          { step: '03', title: 'You get it in your inbox', desc: 'Expect a detailed response within 2 business days. No templates, no AI copy-paste — real advice from real people.' },
        ]}
      />
    </div>
  )
}

// â”€â”€ Tool 3: Portfolio Creator â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function PortfolioCreator() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [projects, setProjects] = useState([{ title: '', desc: '', link: '' }])
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const addProject = () => setProjects(p => [...p, { title: '', desc: '', link: '' }])
  const update = (i: number, k: keyof typeof projects[0], v: string) => {
    setProjects(p => p.map((item, idx) => idx === i ? { ...item, [k]: v } : item))
  }

  const titled = projects.filter(p => p.title)

  const handleSubmit = async () => {
    if (!name || !email || titled.length === 0) return
    setLoading(true)
    // TODO: Wire up to backend / email handler (Resend / EmailJS / Formspree)
    await new Promise(r => setTimeout(r, 1200)) // simulate submission
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <RequestReceived
        message="One of our team members will review your projects and build you a polished portfolio page, then send it over within 2 business days."
        onReset={() => { setSubmitted(false); setName(''); setEmail(''); setProjects([{ title: '', desc: '', link: '' }]) }}
      />
    )
  }

  const disabled = loading || !name || !email || titled.length === 0

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <div className="p-6 rounded-2xl flex flex-col gap-4" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-display font-700 text-lg mb-1" style={{ color: '#0D0D0D' }}>Your Projects</h3>
            <p className="text-sm" style={{ color: '#6B7280' }}>A real person will turn these into a polished portfolio for you.</p>
          </div>
          <button onClick={addProject} className="text-xs font-semibold px-3 py-1.5 rounded-full shrink-0" style={{ backgroundColor: 'rgba(23,178,106,0.12)', color: '#17B26A' }}>+ Add Project</button>
        </div>
        <input className="px-4 py-3 text-sm outline-none w-full rounded-lg" style={fieldStyle} placeholder="Full Name *" value={name} onChange={e => setName(e.target.value)} />
        <input className="px-4 py-3 text-sm outline-none w-full rounded-lg" style={fieldStyle} placeholder="Email Address *" type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <div className="flex flex-col gap-4 overflow-y-auto" style={{ maxHeight: '320px' }}>
          {projects.map((p, i) => (
            <div key={i} className="flex flex-col gap-2 p-4 rounded-xl" style={{ backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB' }}>
              <input className="px-3 py-2 text-sm outline-none bg-white" style={{ borderRadius: '6px', border: '1px solid #E5E7EB' }} placeholder={`Project ${i + 1} Title`} value={p.title} onChange={e => update(i, 'title', e.target.value)} />
              <textarea className="px-3 py-2 text-sm outline-none resize-none bg-white h-16" style={{ borderRadius: '6px', border: '1px solid #E5E7EB' }} placeholder="What you built & impact" value={p.desc} onChange={e => update(i, 'desc', e.target.value)} />
              <input className="px-3 py-2 text-sm outline-none bg-white" style={{ borderRadius: '6px', border: '1px solid #E5E7EB' }} placeholder="Link (GitHub, live URL)" value={p.link} onChange={e => update(i, 'link', e.target.value)} />
            </div>
          ))}
        </div>
        <button
          onClick={handleSubmit}
          disabled={disabled}
          className="w-full py-3 rounded-lg font-semibold text-sm transition-all"
          style={{ backgroundColor: disabled ? '#D1D5DB' : '#17B26A', color: '#FFFFFF', cursor: disabled ? 'not-allowed' : 'pointer', fontFamily: 'var(--font-lj-display)' }}
        >
          {loading ? 'Submitting…' : 'Request Human Review'}
        </button>
      </div>

      <WhatHappensNext
        steps={[
          { step: '01', title: 'We review your projects', desc: 'A Lagos Jobs team member reads through each project you submitted — what you built, and the impact it had.' },
          { step: '02', title: 'We build your portfolio', desc: 'We write sharp, results-focused project summaries and lay them out in a clean portfolio page.' },
          { step: '03', title: 'You get it in your inbox', desc: 'Expect your finished portfolio within 2 business days. No templates, no AI copy-paste — real work from real people.' },
        ]}
      />
    </div>
  )
}

// â”€â”€ Tool 4: Personal Website Creator â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function WebsiteCreator() {
  const [form, setForm] = useState({ name: '', email: '', role: '', bio: '', twitter: '', github: '', linkedin: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const update = (k: keyof typeof form, v: string) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.role) return
    setLoading(true)
    // TODO: Wire up to backend / email handler (Resend / EmailJS / Formspree)
    await new Promise(r => setTimeout(r, 1200)) // simulate submission
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <RequestReceived
        message="One of our team members will put together your personal website copy and layout, then send it over within 2 business days."
        onReset={() => { setSubmitted(false); setForm({ name: '', email: '', role: '', bio: '', twitter: '', github: '', linkedin: '' }) }}
      />
    )
  }

  const disabled = loading || !form.name || !form.email || !form.role

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <div className="p-6 rounded-2xl flex flex-col gap-4" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}>
        <div>
          <h3 className="font-display font-700 text-lg mb-1" style={{ color: '#0D0D0D' }}>Site Details</h3>
          <p className="text-sm" style={{ color: '#6B7280' }}>Fill this in and a real person from our team will put together your site copy and layout.</p>
        </div>
        <input className="px-4 py-3 text-sm outline-none w-full rounded-lg" style={fieldStyle} placeholder="Your Name *" value={form.name} onChange={e => update('name', e.target.value)} />
        <input className="px-4 py-3 text-sm outline-none w-full rounded-lg" style={fieldStyle} placeholder="Email Address *" type="email" value={form.email} onChange={e => update('email', e.target.value)} />
        <input className="px-4 py-3 text-sm outline-none w-full rounded-lg" style={fieldStyle} placeholder="Role Title (e.g. Software Engineer) *" value={form.role} onChange={e => update('role', e.target.value)} />
        <textarea
          className="px-4 py-3 text-sm outline-none resize-none rounded-lg"
          style={{ ...fieldStyle, minHeight: '96px' }}
          placeholder="Your professional bio (optional — paste a draft)"
          value={form.bio}
          onChange={e => update('bio', e.target.value)}
        />
        <div className="grid grid-cols-3 gap-2">
          {(['twitter', 'github', 'linkedin'] as const).map(k => (
            <input key={k} className="px-3 py-2.5 text-sm outline-none rounded-lg" style={fieldStyle} placeholder={k.charAt(0).toUpperCase() + k.slice(1)} value={form[k]} onChange={e => update(k, e.target.value)} />
          ))}
        </div>
        <button
          onClick={handleSubmit}
          disabled={disabled}
          className="w-full py-3 rounded-lg font-semibold text-sm transition-all"
          style={{ backgroundColor: disabled ? '#D1D5DB' : '#17B26A', color: '#FFFFFF', cursor: disabled ? 'not-allowed' : 'pointer', fontFamily: 'var(--font-lj-display)' }}
        >
          {loading ? 'Submitting…' : 'Request Human Review'}
        </button>
      </div>

      <WhatHappensNext
        steps={[
          { step: '01', title: 'We review your details', desc: 'A Lagos Jobs team member reads through your role, bio draft, and links.' },
          { step: '02', title: 'We write your site copy', desc: 'We craft a polished bio and layout structure tailored to your role and goals.' },
          { step: '03', title: 'You get it in your inbox', desc: 'Expect your finished site copy within 2 business days. No templates, no AI copy-paste — real work from real people.' },
        ]}
      />
    </div>
  )
}

// â”€â”€ Tool 5: Personal Branding Guide â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function BrandingGuide() {
  const [form, setForm] = useState({ name: '', email: '', industry: '', strength: '', platform: 'LinkedIn' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const update = (k: keyof typeof form, v: string) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.industry) return
    setLoading(true)
    // TODO: Wire up to backend / email handler (Resend / EmailJS / Formspree)
    await new Promise(r => setTimeout(r, 1200)) // simulate submission
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <RequestReceived
        message="One of our team members will put together your personal branding playbook — content pillars and bio hooks — and send it over within 2 business days."
        onReset={() => { setSubmitted(false); setForm({ name: '', email: '', industry: '', strength: '', platform: 'LinkedIn' }) }}
      />
    )
  }

  const disabled = loading || !form.name || !form.email || !form.industry

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <div className="p-6 rounded-2xl flex flex-col gap-4" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}>
        <div>
          <h3 className="font-display font-700 text-lg mb-1" style={{ color: '#0D0D0D' }}>Your Positioning</h3>
          <p className="text-sm" style={{ color: '#6B7280' }}>Fill this in and a real person from our team will build your branding playbook.</p>
        </div>
        <input className="px-4 py-3 text-sm outline-none w-full rounded-lg" style={fieldStyle} placeholder="Full Name *" value={form.name} onChange={e => update('name', e.target.value)} />
        <input className="px-4 py-3 text-sm outline-none w-full rounded-lg" style={fieldStyle} placeholder="Email Address *" type="email" value={form.email} onChange={e => update('email', e.target.value)} />
        <input className="px-4 py-3 text-sm outline-none w-full rounded-lg" style={fieldStyle} placeholder="Industry / Field (e.g. FinTech, Healthcare) *" value={form.industry} onChange={e => update('industry', e.target.value)} />
        <input className="px-4 py-3 text-sm outline-none w-full rounded-lg" style={fieldStyle} placeholder="Your Core Strength (e.g. building data pipelines)" value={form.strength} onChange={e => update('strength', e.target.value)} />
        <select className="px-4 py-3 text-sm outline-none w-full rounded-lg" style={{ ...fieldStyle, color: '#6B7280' }} value={form.platform} onChange={e => update('platform', e.target.value)}>
          <option>LinkedIn</option>
          <option>Twitter / X</option>
          <option>All Channels</option>
        </select>
        <button
          onClick={handleSubmit}
          disabled={disabled}
          className="w-full py-3 rounded-lg font-semibold text-sm transition-all"
          style={{ backgroundColor: disabled ? '#D1D5DB' : '#17B26A', color: '#FFFFFF', cursor: disabled ? 'not-allowed' : 'pointer', fontFamily: 'var(--font-lj-display)' }}
        >
          {loading ? 'Submitting…' : 'Request Human Review'}
        </button>
      </div>

      <WhatHappensNext
        steps={[
          { step: '01', title: 'We review your positioning', desc: 'A Lagos Jobs team member reads through your industry, strength, and target platform.' },
          { step: '02', title: 'We build your playbook', desc: 'We write content pillars and bio hooks tailored to your industry and the Lagos market.' },
          { step: '03', title: 'You get it in your inbox', desc: 'Expect your branding playbook within 2 business days. No templates, no AI copy-paste — real advice from real people.' },
        ]}
      />
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
