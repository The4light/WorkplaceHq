import { useState } from 'react'

type ToolKey = 'cv' | 'linkedin' | 'portfolio' | 'website' | 'branding'

const tools: { key: ToolKey; label: string; desc: string }[] = [
  { key: 'cv', label: 'CV Optimiser', desc: 'Professional CV rewrite, delivered by email within 24 hours.' },
  { key: 'linkedin', label: 'LinkedIn Optimiser', desc: 'Complete LinkedIn profile overhaul. Receive updated copy within 48 hours.' },
  { key: 'portfolio', label: 'Portfolio Creator', desc: 'A clean portfolio built from your brief and sent as a live link.' },
  { key: 'website', label: 'Personal Website', desc: 'Your own career site, set up and delivered to your inbox.' },
  { key: 'branding', label: 'Personal Branding', desc: 'A strategy document that defines your professional identity.' },
]

function SuccessCard({ tool, email }: { tool: string; email: string }) {
  return (
    <div className="flex flex-col items-start py-12 px-8" style={{ borderTop: '3px solid #0F6B5C' }}>
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center mb-6 text-paper text-xl"
        style={{ background: '#0F6B5C' }}
      >
        ✓
      </div>
      <h3 className="text-2xl font-bold text-ink mb-3" style={{ letterSpacing: '-0.02em' }}>
        You're all set.
      </h3>
      <p className="text-base leading-relaxed mb-2" style={{ color: '#545454' }}>
        Your <strong>{tool}</strong> request has been received. We'll deliver your result to <strong>{email}</strong>.
      </p>
      <p className="text-[13px]" style={{ color: '#888', fontFamily: 'Inter, sans-serif' }}>
        Expect a response within 24–48 hours on business days.
      </p>
    </div>
  )
}

function CVForm({ onSuccess }: { onSuccess: (email: string) => void }) {
  const [form, setForm] = useState({ name: '', email: '', currentRole: '', targetRole: '', notes: '' })
  const [hasFile, setHasFile] = useState(false)

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); onSuccess(form.email) }}
      className="flex flex-col gap-5"
    >
      <p className="text-[14px] leading-relaxed" style={{ color: '#545454' }}>
        Fill in the brief below. Upload your current CV if you have one. We'll rewrite it and send the optimised version to your email within 24 hours.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-[12px] font-medium mb-2 text-ink" style={{ fontFamily: 'Inter, sans-serif' }}>Full name *</label>
          <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} type="text" className="w-full px-4 py-3 text-[14px] bg-paper outline-none" style={{ border: '1px solid #E6E5E0', fontFamily: 'DM Sans, sans-serif', color: '#191919' }} placeholder="Your name" />
        </div>
        <div>
          <label className="block text-[12px] font-medium mb-2 text-ink" style={{ fontFamily: 'Inter, sans-serif' }}>Email *</label>
          <input required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} type="email" className="w-full px-4 py-3 text-[14px] bg-paper outline-none" style={{ border: '1px solid #E6E5E0', fontFamily: 'DM Sans, sans-serif', color: '#191919' }} placeholder="you@email.com" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-[12px] font-medium mb-2 text-ink" style={{ fontFamily: 'Inter, sans-serif' }}>Current role *</label>
          <input required value={form.currentRole} onChange={(e) => setForm({ ...form, currentRole: e.target.value })} type="text" className="w-full px-4 py-3 text-[14px] bg-paper outline-none" style={{ border: '1px solid #E6E5E0', fontFamily: 'DM Sans, sans-serif', color: '#191919' }} placeholder="e.g. Marketing Manager, 4 years" />
        </div>
        <div>
          <label className="block text-[12px] font-medium mb-2 text-ink" style={{ fontFamily: 'Inter, sans-serif' }}>Target role *</label>
          <input required value={form.targetRole} onChange={(e) => setForm({ ...form, targetRole: e.target.value })} type="text" className="w-full px-4 py-3 text-[14px] bg-paper outline-none" style={{ border: '1px solid #E6E5E0', fontFamily: 'DM Sans, sans-serif', color: '#191919' }} placeholder="e.g. Head of Marketing" />
        </div>
      </div>
      <div>
        <label className="block text-[12px] font-medium mb-2 text-ink" style={{ fontFamily: 'Inter, sans-serif' }}>Upload your current CV (optional)</label>
        <label className="flex items-center gap-3 w-full px-4 py-3 cursor-pointer" style={{ border: '1px dashed #E6E5E0', borderRadius: '3px' }}>
          <span className="text-[14px]" style={{ color: hasFile ? '#0F6B5C' : '#aaa', fontFamily: 'DM Sans, sans-serif' }}>
            {hasFile ? 'File selected ✓' : 'Click to upload PDF or Word file'}
          </span>
          <input type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={(e) => setHasFile(!!e.target.files?.length)} />
        </label>
      </div>
      <div>
        <label className="block text-[12px] font-medium mb-2 text-ink" style={{ fontFamily: 'Inter, sans-serif' }}>Anything specific you'd like us to know?</label>
        <textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} rows={3} className="w-full px-4 py-3 text-[14px] bg-paper outline-none resize-none" style={{ border: '1px solid #E6E5E0', fontFamily: 'DM Sans, sans-serif', color: '#191919' }} placeholder="Key achievements, industry context, gaps to explain..." />
      </div>
      <button type="submit" className="self-start text-[13px] font-semibold text-paper py-3.5 px-7 hover:opacity-90 transition-opacity" style={{ fontFamily: 'Inter, sans-serif', background: '#0F6B5C', borderRadius: '3px' }}>
        Submit for optimisation
      </button>
    </form>
  )
}

function LinkedInForm({ onSuccess }: { onSuccess: (email: string) => void }) {
  const [form, setForm] = useState({ name: '', email: '', linkedinUrl: '', industry: '', goal: '' })

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSuccess(form.email) }} className="flex flex-col gap-5">
      <p className="text-[14px] leading-relaxed" style={{ color: '#545454' }}>
        We'll audit your LinkedIn profile and send you fully rewritten copy — headline, about section, experience summaries, and more.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-[12px] font-medium mb-2 text-ink" style={{ fontFamily: 'Inter, sans-serif' }}>Full name *</label>
          <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} type="text" className="w-full px-4 py-3 text-[14px] bg-paper outline-none" style={{ border: '1px solid #E6E5E0', fontFamily: 'DM Sans, sans-serif', color: '#191919' }} placeholder="Your name" />
        </div>
        <div>
          <label className="block text-[12px] font-medium mb-2 text-ink" style={{ fontFamily: 'Inter, sans-serif' }}>Email *</label>
          <input required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} type="email" className="w-full px-4 py-3 text-[14px] bg-paper outline-none" style={{ border: '1px solid #E6E5E0', fontFamily: 'DM Sans, sans-serif', color: '#191919' }} placeholder="you@email.com" />
        </div>
      </div>
      <div>
        <label className="block text-[12px] font-medium mb-2 text-ink" style={{ fontFamily: 'Inter, sans-serif' }}>Your LinkedIn URL *</label>
        <input required value={form.linkedinUrl} onChange={(e) => setForm({ ...form, linkedinUrl: e.target.value })} type="url" className="w-full px-4 py-3 text-[14px] bg-paper outline-none" style={{ border: '1px solid #E6E5E0', fontFamily: 'DM Sans, sans-serif', color: '#191919' }} placeholder="https://linkedin.com/in/yourname" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-[12px] font-medium mb-2 text-ink" style={{ fontFamily: 'Inter, sans-serif' }}>Industry *</label>
          <input required value={form.industry} onChange={(e) => setForm({ ...form, industry: e.target.value })} type="text" className="w-full px-4 py-3 text-[14px] bg-paper outline-none" style={{ border: '1px solid #E6E5E0', fontFamily: 'DM Sans, sans-serif', color: '#191919' }} placeholder="e.g. Fintech, Healthcare" />
        </div>
        <div>
          <label className="block text-[12px] font-medium mb-2 text-ink" style={{ fontFamily: 'Inter, sans-serif' }}>Career goal *</label>
          <input required value={form.goal} onChange={(e) => setForm({ ...form, goal: e.target.value })} type="text" className="w-full px-4 py-3 text-[14px] bg-paper outline-none" style={{ border: '1px solid #E6E5E0', fontFamily: 'DM Sans, sans-serif', color: '#191919' }} placeholder="e.g. Transition to senior leadership" />
        </div>
      </div>
      <button type="submit" className="self-start text-[13px] font-semibold text-paper py-3.5 px-7 hover:opacity-90 transition-opacity" style={{ fontFamily: 'Inter, sans-serif', background: '#0F6B5C', borderRadius: '3px' }}>
        Submit for optimisation
      </button>
    </form>
  )
}

function PortfolioForm({ onSuccess }: { onSuccess: (email: string) => void }) {
  const [form, setForm] = useState({ name: '', email: '', profession: '', projects: '' })

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSuccess(form.email) }} className="flex flex-col gap-5">
      <p className="text-[14px] leading-relaxed" style={{ color: '#545454' }}>
        Tell us about your work. We'll build you a clean, professional portfolio and email you the live link.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-[12px] font-medium mb-2 text-ink" style={{ fontFamily: 'Inter, sans-serif' }}>Full name *</label>
          <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} type="text" className="w-full px-4 py-3 text-[14px] bg-paper outline-none" style={{ border: '1px solid #E6E5E0', fontFamily: 'DM Sans, sans-serif', color: '#191919' }} placeholder="Your name" />
        </div>
        <div>
          <label className="block text-[12px] font-medium mb-2 text-ink" style={{ fontFamily: 'Inter, sans-serif' }}>Email *</label>
          <input required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} type="email" className="w-full px-4 py-3 text-[14px] bg-paper outline-none" style={{ border: '1px solid #E6E5E0', fontFamily: 'DM Sans, sans-serif', color: '#191919' }} placeholder="you@email.com" />
        </div>
      </div>
      <div>
        <label className="block text-[12px] font-medium mb-2 text-ink" style={{ fontFamily: 'Inter, sans-serif' }}>Profession / area of work *</label>
        <input required value={form.profession} onChange={(e) => setForm({ ...form, profession: e.target.value })} type="text" className="w-full px-4 py-3 text-[14px] bg-paper outline-none" style={{ border: '1px solid #E6E5E0', fontFamily: 'DM Sans, sans-serif', color: '#191919' }} placeholder="e.g. UX Designer, Financial Analyst" />
      </div>
      <div>
        <label className="block text-[12px] font-medium mb-2 text-ink" style={{ fontFamily: 'Inter, sans-serif' }}>Describe 2–4 projects or achievements *</label>
        <textarea required value={form.projects} onChange={(e) => setForm({ ...form, projects: e.target.value })} rows={5} className="w-full px-4 py-3 text-[14px] bg-paper outline-none resize-none" style={{ border: '1px solid #E6E5E0', fontFamily: 'DM Sans, sans-serif', color: '#191919' }} placeholder="Project 1: Led the redesign of... Results: 40% improvement in..." />
      </div>
      <button type="submit" className="self-start text-[13px] font-semibold text-paper py-3.5 px-7 hover:opacity-90 transition-opacity" style={{ fontFamily: 'Inter, sans-serif', background: '#0F6B5C', borderRadius: '3px' }}>
        Create my portfolio
      </button>
    </form>
  )
}

function WebsiteForm({ onSuccess }: { onSuccess: (email: string) => void }) {
  const [form, setForm] = useState({ name: '', email: '', profession: '', about: '', style: '' })

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSuccess(form.email) }} className="flex flex-col gap-5">
      <p className="text-[14px] leading-relaxed" style={{ color: '#545454' }}>
        Fill this brief. We'll set up your personal website and email you the live link with instructions to manage it.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-[12px] font-medium mb-2 text-ink" style={{ fontFamily: 'Inter, sans-serif' }}>Full name *</label>
          <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} type="text" className="w-full px-4 py-3 text-[14px] bg-paper outline-none" style={{ border: '1px solid #E6E5E0', fontFamily: 'DM Sans, sans-serif', color: '#191919' }} placeholder="Your name" />
        </div>
        <div>
          <label className="block text-[12px] font-medium mb-2 text-ink" style={{ fontFamily: 'Inter, sans-serif' }}>Email *</label>
          <input required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} type="email" className="w-full px-4 py-3 text-[14px] bg-paper outline-none" style={{ border: '1px solid #E6E5E0', fontFamily: 'DM Sans, sans-serif', color: '#191919' }} placeholder="you@email.com" />
        </div>
      </div>
      <div>
        <label className="block text-[12px] font-medium mb-2 text-ink" style={{ fontFamily: 'Inter, sans-serif' }}>Profession *</label>
        <input required value={form.profession} onChange={(e) => setForm({ ...form, profession: e.target.value })} type="text" className="w-full px-4 py-3 text-[14px] bg-paper outline-none" style={{ border: '1px solid #E6E5E0', fontFamily: 'DM Sans, sans-serif', color: '#191919' }} placeholder="e.g. Data Scientist · 6 years" />
      </div>
      <div>
        <label className="block text-[12px] font-medium mb-2 text-ink" style={{ fontFamily: 'Inter, sans-serif' }}>Style preference</label>
        <select value={form.style} onChange={(e) => setForm({ ...form, style: e.target.value })} className="w-full px-4 py-3 text-[14px] bg-paper outline-none appearance-none" style={{ border: '1px solid #E6E5E0', fontFamily: 'DM Sans, sans-serif', color: form.style ? '#191919' : '#aaa' }}>
          <option value="">Select a style</option>
          <option value="minimal">Minimal & clean</option>
          <option value="bold">Bold & impactful</option>
          <option value="corporate">Corporate & structured</option>
          <option value="creative">Creative & expressive</option>
        </select>
      </div>
      <div>
        <label className="block text-[12px] font-medium mb-2 text-ink" style={{ fontFamily: 'Inter, sans-serif' }}>Tell us about yourself and your work *</label>
        <textarea required value={form.about} onChange={(e) => setForm({ ...form, about: e.target.value })} rows={4} className="w-full px-4 py-3 text-[14px] bg-paper outline-none resize-none" style={{ border: '1px solid #E6E5E0', fontFamily: 'DM Sans, sans-serif', color: '#191919' }} placeholder="What you do, what you've achieved, who you work with..." />
      </div>
      <button type="submit" className="self-start text-[13px] font-semibold text-paper py-3.5 px-7 hover:opacity-90 transition-opacity" style={{ fontFamily: 'Inter, sans-serif', background: '#0F6B5C', borderRadius: '3px' }}>
        Get my website
      </button>
    </form>
  )
}

function BrandingForm({ onSuccess }: { onSuccess: (email: string) => void }) {
  const [form, setForm] = useState({ name: '', email: '', currentRole: '', dreamRole: '', unique: '' })

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSuccess(form.email) }} className="flex flex-col gap-5">
      <p className="text-[14px] leading-relaxed" style={{ color: '#545454' }}>
        Answer five questions. We'll send you a complete personal branding strategy within 48 hours.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-[12px] font-medium mb-2 text-ink" style={{ fontFamily: 'Inter, sans-serif' }}>Full name *</label>
          <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} type="text" className="w-full px-4 py-3 text-[14px] bg-paper outline-none" style={{ border: '1px solid #E6E5E0', fontFamily: 'DM Sans, sans-serif', color: '#191919' }} placeholder="Your name" />
        </div>
        <div>
          <label className="block text-[12px] font-medium mb-2 text-ink" style={{ fontFamily: 'Inter, sans-serif' }}>Email *</label>
          <input required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} type="email" className="w-full px-4 py-3 text-[14px] bg-paper outline-none" style={{ border: '1px solid #E6E5E0', fontFamily: 'DM Sans, sans-serif', color: '#191919' }} placeholder="you@email.com" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-[12px] font-medium mb-2 text-ink" style={{ fontFamily: 'Inter, sans-serif' }}>Current role *</label>
          <input required value={form.currentRole} onChange={(e) => setForm({ ...form, currentRole: e.target.value })} type="text" className="w-full px-4 py-3 text-[14px] bg-paper outline-none" style={{ border: '1px solid #E6E5E0', fontFamily: 'DM Sans, sans-serif', color: '#191919' }} placeholder="e.g. HR Manager, 5 years" />
        </div>
        <div>
          <label className="block text-[12px] font-medium mb-2 text-ink" style={{ fontFamily: 'Inter, sans-serif' }}>Dream role *</label>
          <input required value={form.dreamRole} onChange={(e) => setForm({ ...form, dreamRole: e.target.value })} type="text" className="w-full px-4 py-3 text-[14px] bg-paper outline-none" style={{ border: '1px solid #E6E5E0', fontFamily: 'DM Sans, sans-serif', color: '#191919' }} placeholder="e.g. Chief People Officer" />
        </div>
      </div>
      <div>
        <label className="block text-[12px] font-medium mb-2 text-ink" style={{ fontFamily: 'Inter, sans-serif' }}>What makes you different from others in your field? *</label>
        <textarea required value={form.unique} onChange={(e) => setForm({ ...form, unique: e.target.value })} rows={4} className="w-full px-4 py-3 text-[14px] bg-paper outline-none resize-none" style={{ border: '1px solid #E6E5E0', fontFamily: 'DM Sans, sans-serif', color: '#191919' }} placeholder="Your unique combination of skills, experiences, perspective..." />
      </div>
      <button type="submit" className="self-start text-[13px] font-semibold text-paper py-3.5 px-7 hover:opacity-90 transition-opacity" style={{ fontFamily: 'Inter, sans-serif', background: '#0F6B5C', borderRadius: '3px' }}>
        Build my brand strategy
      </button>
    </form>
  )
}

export default function LJToolsHub() {
  const [activeTool, setActiveTool] = useState<ToolKey>('cv')
  const [successEmail, setSuccessEmail] = useState<string | null>(null)

  const handleToolChange = (key: ToolKey) => {
    setActiveTool(key)
    setSuccessEmail(null)
  }

  const activeName = tools.find((t) => t.key === activeTool)?.label ?? ''

  return (
    <main>
      {/* Hero */}
      <section className="bg-paper py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-5" style={{ fontFamily: 'Inter, sans-serif', color: '#0F6B5C' }}>Tools Hub</p>
          <h1 className="text-5xl font-bold text-ink mb-4" style={{ letterSpacing: '-0.03em' }}>Pick a tool. Fill a form. Get your result.</h1>
          <p className="text-xl leading-relaxed" style={{ color: '#545454' }}>No account. No subscription. Short form → professional result by email.</p>
        </div>
      </section>

      {/* Sticky tab rail */}
      <div className="sticky top-16 z-40 border-b bg-paper" style={{ borderColor: '#E6E5E0' }}>
        <div className="max-w-7xl mx-auto px-6 flex gap-0 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
          {tools.map((t) => (
            <button
              key={t.key}
              onClick={() => handleToolChange(t.key)}
              className="text-[13px] font-medium py-4 px-5 whitespace-nowrap transition-colors flex-shrink-0 border-b-2"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: activeTool === t.key ? '#191919' : '#888',
                borderBottomColor: activeTool === t.key ? '#0F6B5C' : 'transparent',
                marginBottom: '-1px',
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tool panel */}
      <section className="bg-paper py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-ink mb-3" style={{ letterSpacing: '-0.03em' }}>{activeName}</h2>
            <p className="text-base" style={{ color: '#545454' }}>
              {tools.find((t) => t.key === activeTool)?.desc}
            </p>
          </div>

          <div className="bg-paper p-8 md:p-10" style={{ border: '1px solid #E6E5E0', borderRadius: '4px' }}>
            {successEmail ? (
              <SuccessCard tool={activeName} email={successEmail} />
            ) : (
              <>
                {activeTool === 'cv' && <CVForm onSuccess={setSuccessEmail} />}
                {activeTool === 'linkedin' && <LinkedInForm onSuccess={setSuccessEmail} />}
                {activeTool === 'portfolio' && <PortfolioForm onSuccess={setSuccessEmail} />}
                {activeTool === 'website' && <WebsiteForm onSuccess={setSuccessEmail} />}
                {activeTool === 'branding' && <BrandingForm onSuccess={setSuccessEmail} />}
              </>
            )}
          </div>
        </div>
      </section>

      {/* Other tools */}
      <section style={{ background: '#F0EFE9' }} className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-8 text-slate" style={{ fontFamily: 'Inter, sans-serif' }}>Other tools</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {tools.filter((t) => t.key !== activeTool).map((t) => (
              <button
                key={t.key}
                onClick={() => handleToolChange(t.key)}
                className="text-left p-5 bg-paper group hover:border-lj-teal transition-colors"
                style={{ border: '1px solid #E6E5E0', borderRadius: '3px' }}
              >
                <p className="text-[14px] font-semibold text-ink mb-1 group-hover:text-lj-teal transition-colors" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {t.label}
                </p>
                <p className="text-[12px]" style={{ color: '#888', fontFamily: 'DM Sans, sans-serif' }}>{t.desc.split('.')[0]}.</p>
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
